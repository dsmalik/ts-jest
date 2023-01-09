"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[459],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),i=n(1048),s=n(3609),l=n(1943),p=n(2957);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:d,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,l.U)(),[N,T]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=j.indexOf(t),a=g[n].value;a!==N&&(w(t),T(a),null!=d&&k(d,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:x,onClick:O},i,{className:(0,o.Z)("tabs__item",u,i?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(4137)),o=n(4259),i=n(425);const s={id:"paths-mapping",title:"Paths mapping"},l=void 0,p={unversionedId:"getting-started/paths-mapping",id:"getting-started/paths-mapping",title:"Paths mapping",description:'If you use "baseUrl" and "paths" options in your tsconfig file, you should make sure the "moduleNameMapper" option in your Jest config is setup accordingly.',source:"@site/docs/getting-started/paths-mapping.md",sourceDirName:"getting-started",slug:"/getting-started/paths-mapping",permalink:"/ts-jest/docs/next/getting-started/paths-mapping",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/paths-mapping.md",tags:[],version:"current",lastUpdatedBy:"Isma\xefl Ouazzany",lastUpdatedAt:1673269051,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"paths-mapping",title:"Paths mapping"},sidebar:"docs",previous:{title:"Options",permalink:"/ts-jest/docs/next/getting-started/options"},next:{title:"Version checking",permalink:"/ts-jest/docs/next/getting-started/version-checking"}},c={},u=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html"},'"baseUrl" and "paths" options')," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig")," file, you should make sure the ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring"},'"moduleNameMapper"')," option in your Jest config is setup accordingly."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," provides a helper to transform the mapping from ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig")," to Jest config format, but it needs the ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," version of the config file."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("h4",{id:"typescript-config"},"TypeScript config"),(0,r.kt)("p",null,"With the below config in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"jest-config-without-helper"},"Jest config (without helper)"),(0,r.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n\nexport default jestConfig\n"))),(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "moduleNameMapper": {\n      "^@App/(.*)$": "<rootDir>/src/$1",\n      "^lib/(.*)$": "<rootDir>/common/$1"\n    }\n  }\n}\n')))),(0,r.kt)("h4",{id:"jest-config-with-helper"},"Jest config (with helper)"),(0,r.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { pathsToModuleNameMapper } = require('ts-jest')\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nconst { compilerOptions } = require('./tsconfig')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import { pathsToModuleNameMapper } from 'ts-jest'\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nimport { compilerOptions } from './tsconfig'\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n\nexport default jestConfig\n")))),(0,r.kt)("p",null,"With extra options as 2nd argument:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix"),": append prefix to each of mapped config in the result"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useESM"),": when using ",(0,r.kt)("inlineCode",{parentName:"li"},"type: module")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),", TypeScript enforces users to have explicit ",(0,r.kt)("inlineCode",{parentName:"li"},"js")," extension when importing\na ",(0,r.kt)("inlineCode",{parentName:"li"},"ts")," file. This option is to help ",(0,r.kt)("inlineCode",{parentName:"li"},"pathsToModuleNameMapper")," to create a config to suit with this scenario.")))}d.isMDXComponent=!0}}]);