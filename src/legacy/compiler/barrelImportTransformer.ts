import { readFileSync } from 'fs'
import * as ts from 'typescript'

export interface ISymbolInfo {
    identifier: string;
    path: string;
}

/**
 * The pattern of files from which we should generate the import lookup map from
 */
export const filesToLookupExportsFrom = ['src/**/*.ts*']

/**
 * Condition to evaluate when checking whether to transform a import declarations based on the module name of import statement
 * @param specifier The module name in an import statement
 * @returns Whether to transform the import declaration or not
 */
const shouldTransformImportDeclarationCriteria = (specifier: string) =>
    specifier && specifier.startsWith("./src")

//

const fileContent = readFileSync("../../../../../transform_cache/importLookupData.json", "utf-8");
let uniqueSymbolMap: Map<string, ISymbolInfo> = new Map(JSON.parse(fileContent));

// Not used today but can be once we can figure how to make them unique as well

interface IChangedImportMap {
    orig: string;
    changed: string;
}

/**
 * Checks if we need to process import and convert it. Change the condition as per your need
 * @param importDeclaration Current import declaration
 * @param criteria A function to specify which imports should be transformed
 * @returns Whether or not to process the import declarations
 */
const shouldTransformImportDeclaration = (importDeclaration: ts.ImportDeclaration) => {
    const specifier = getModuleSpecifierForImportDeclaration(importDeclaration);
    // Change here to include or exclude imports
    return shouldTransformImportDeclarationCriteria(specifier);
};

/**
 * Looks at the Lookup map and transforms the current import declaration to new import declarations that
 * contains specific import instead of the barrel import
 * @param importDeclaration Current import declaration to process
 * @param namedImports All named imports in current import declaration
 * @param sf Current source file
 * @returns New transformed set of import declarations
 */
const getImportDeclarationsForImportClause = (
    importDeclaration: ts.ImportDeclaration,
    namedImports: ts.NamedImports | undefined,
    sf: ts.SourceFile
): ts.ImportDeclaration[] | undefined => {
    if (!ts.isNamedImports(namedImports!)) {
        printLog("    Named import not found - ", namedImports);
        return undefined;
    }

    const ignoreImportDeclaration = !shouldTransformImportDeclaration(importDeclaration);

    if (ignoreImportDeclaration) {
        printLog("Ignored -", importDeclaration.getText());
        return undefined;
    }

    const importFileWiseMap = new Map<string, Array<string>>();
    const importSpecifier = getModuleSpecifierForImportDeclaration(importDeclaration);

    namedImports.elements.forEach((ni) => {
        // TODO - Still need to fix for aliased imports
        printLog("    Named import lookup -", ni.getText());
        const importPath = getImportFilePath(ni, sf, importSpecifier);

        if (!importPath) {
            printLog("  Import not found so returning");
            return;
        }

        printLog("       -> Import information -", ni.getText(), importPath);

        if (importFileWiseMap.has(importPath)) {
            // Do nothing since this import is already processed
        } else if (uniqueSymbolMap.has(importPath)) {
            importFileWiseMap.set(importPath, [ni.getText()]);
        } else {
            printLog("    Adding import info to file wise import -", ni.getText(), "->", importPath);
            importFileWiseMap.set(importPath ?? getModuleSpecifierForImportDeclaration(importDeclaration), [
                ni.getText(),
            ]);
        }
    });

    const newImportDeclarations: ts.ImportDeclaration[] = [];

    importFileWiseMap.forEach((imports, filePath) => {
        imports.forEach((x) => {
            printLog("    ->Import -", x, "from", filePath);
        });

        if (!filePath) {
            return;
        }

        const importSpecifiers = imports.map((i) =>
            // Below gives compile time error depending on tsc version i think. Change as per
            ts.createImportSpecifier(false, undefined, ts.createIdentifier(i))
        );

        const newImportDeclaration = ts.createImportDeclaration(
            undefined,
            undefined,
            ts.createImportClause(undefined, ts.createNamedImports(importSpecifiers)),
            ts.createLiteral(filePath)
        );

        newImportDeclarations.push(newImportDeclaration);
    });

    return newImportDeclarations;
};

/**
 * Returns module specifier of import declaration
 * Module specifier is module name exporting current import -> import { something } from 'modulespecifier';
 * @param importDeclaration Current import declaration
 * @returns Module specifier for current import declarations
 */
const getModuleSpecifierForImportDeclaration = (importDeclaration: ts.ImportDeclaration) => {
    try {
        return importDeclaration.moduleSpecifier.getText().replace(/('|")/g, "");
    } catch {
        // Just safe guarding. Can be removed now as above will never throw?
        printLog("    Error getting module specifier -", importDeclaration.getText());
        return importDeclaration.moduleSpecifier.getText();
    }
};

const getImportFilePath = (
    namedImport: ts.ImportSpecifier,
    _sf: ts.SourceFile,
    _importPathInOriginalImport: string
) => {
    const namedImportText = namedImport.getText();
    let importFilePath = uniqueSymbolMap.get(namedImportText)?.identifier;
    return importFilePath;
};

// transformHelper ends

const updateJestMockStatements = (
    transformedSource: ts.SourceFile,
    mocksDefinedInFile: ts.ExpressionStatement[],
    changedImportMap: IChangedImportMap[]
) => {
    const newMockStatements: ts.ExpressionStatement[] = [];

    mocksDefinedInFile.forEach((expStm) => {
        const m = ts.getMutableClone(expStm);
        const mockedImport = (m.expression as any).arguments[0].getText().replace(/'/g, "");
        printLog("Jest Mock found -", expStm.getText(), mockedImport, changedImportMap, transformedSource.fileName);

        try {
            const filteredImports = changedImportMap.filter((x) => {
                return x.changed.includes(mockedImport);
            });

            printLog("Filtered imports -", filteredImports);
            if (filteredImports && filteredImports.length) {
                filteredImports.forEach((filteredImport, _i) => {
                    printLog("  ----> Create new mock code for -", expStm.getText(), "->", filteredImport.changed);
                    const nodesToAdd = ts.createExpressionStatement(
                        ts.createCall(
                            ts.createPropertyAccess(ts.createIdentifier("jest"), ts.createIdentifier("mock")),
                            undefined,
                            // If jest.mock has a second argument than add it as well
                            (m.expression as any).arguments[1]
                                ? [ts.createStringLiteral(filteredImport.changed), (m.expression as any).arguments[1]]
                                : [ts.createStringLiteral(filteredImport.changed)]
                        )
                    );

                    newMockStatements.push(nodesToAdd);
                });
            } else {
                printLog("  ----> Return mock as is -", expStm.getText());
            }
        } catch (e) {
            printLog("Error updating mock -", e);
        }
    });

    return newMockStatements;
};

/**
 * This is main transformer code. It looks at the source file and transforms -
 * 1. Import declarations
 * 2. jest.mock expression statements
 * @param ctx Current transformation context
 * @returns Transformed Source file
 */
export const barrelImportTransformer = (ctx: ts.TransformationContext): ts.Transformer<ts.SourceFile> => {
    // Track all jest.mocks defined in file being processed
    let mocksDefinedInFile: ts.ExpressionStatement[] = [];
    // Track all changed imports that were found in lookup map
    let changedImportMap: IChangedImportMap[] = [];

    const nodeVisitor = (ctx: ts.TransformationContext, sf: ts.SourceFile) => {
        let currentImportDeclaration: ts.ImportDeclaration | undefined;

        printLog(currentImportDeclaration);

        const visitor: ts.Visitor = (node) => {
            switch (node.kind) {
                case ts.SyntaxKind.SourceFile:
                    mocksDefinedInFile = [];
                    changedImportMap = [];
                    break;
                case ts.SyntaxKind.ExpressionStatement:
                    const expStatement = node as ts.ExpressionStatement;
                    // Need to re-write the jest.mock to specific imports
                    if (expStatement.getText().startsWith("jest.mock")) {
                        mocksDefinedInFile.push(expStatement);

                        const transformedMockExpressionStatements = updateJestMockStatements(
                            sf,
                            [expStatement],
                            changedImportMap
                        );

                        if (transformedMockExpressionStatements.length) {
                            return transformedMockExpressionStatements;
                        }
                    }
                    break;
                case ts.SyntaxKind.ImportDeclaration:
                    try {
                        const impDec = node as ts.ImportDeclaration;
                        currentImportDeclaration = impDec;
                        let clauses = impDec.importClause;
                        const impDecText = impDec.getText();

                        if (!clauses) {
                            printLog("    No clause found -", impDec.getText());
                            return node;
                        }

                        let namedImport = clauses.getChildAt(0) as ts.NamedImports | undefined;

                        if (!namedImport || !namedImport.elements) {
                            printLog(
                                "   Returning import declaration as is since no named import exists -",
                                impDecText
                            );
                            return node;
                        }

                        if (impDec.getText().includes("* as ")) {
                            printLog("   Returning import declaration as is since it is default import - ", impDecText);
                            return node;
                        }

                        if (!!!namedImport.elements?.map) {
                            printLog("   Returning node as we cannot map imports -", impDecText);
                            return node;
                        }

                        // const importsToChange = namedImport.elements.map((x) => x.getText());

                        const newImportDeclarations = getImportDeclarationsForImportClause(impDec, namedImport, sf);
                        if (newImportDeclarations && newImportDeclarations.length) {
                            return newImportDeclarations;
                        }
                    } catch (e) {
                        printLog("   ----> Unhandled exception in transformer -", e);
                        return node;
                    }
            }

            return ts.visitEachChild(node, visitor, ctx);
        };

        return visitor;
    };

    return (sf: ts.SourceFile) => {
        try {
            console.warn("Transforming file 0", sf.fileName);
            let tsf = ts.visitNode(sf, nodeVisitor(ctx, sf));
            return tsf;
        } catch (e) {
            printLog("Failed transform - ", sf.fileName, "error -", e);
            return sf;
        } finally {
            mocksDefinedInFile = [];
            changedImportMap = [];
        }
    };
};

// export function factory(compilerInstance: TsCompilerInstance) {
//     const ts = compilerInstance.configSet.compilerModule;
//     // const program = compilerInstance.program;

//     function createVisitor(ctx: TransformationContext, sf: SourceFile) {
//         printLog(sf, "Input - \n", ts.createPrinter().printFile(sf));
//         const visitor: Visitor = (node) => {
//             // if (ts.isSourceFile(node)) {
//             //     const ss = getTransformedText(sf.fileName, readFileSync(sf.fileName, "utf-8"));
//             //     console.log(createPrinter().printFile(ss));
//             //     return ss;
//             // }

//             return ts.visitEachChild(node, visitor, ctx);
//         };
//         return visitor;
//     }

//     return barrelImportTransformer;
// }

const printLog = (...args: any[]) => {
    console.log(...args);
};
