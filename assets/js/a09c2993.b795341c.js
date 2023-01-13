"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4128],{4137:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(f,a(a({ref:e},u),{},{components:r})):n.createElement(f,a({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7614:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const i={id:"introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",slug:"/"},a=void 0,s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/ts-jest/docs/next/",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Kulshekhar Kabra",lastUpdatedAt:1673572018,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{id:"introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",slug:"/"},sidebar:"docs",next:{title:"Processing flow",permalink:"/ts-jest/docs/next/processing"}},p={},c=[],u={toc:c};function l(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," is a Jest ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/next/code-transformation#writing-custom-transformers"},"transformer")," with source map support that lets you use Jest to test projects written in TypeScript."),(0,o.kt)("p",null,"It supports all features of TypeScript including type-checking. ",(0,o.kt)("a",{parentName:"p",href:"babel7-or-ts"},"Read more about Babel7 + ",(0,o.kt)("inlineCode",{parentName:"a"},"preset-typescript")," ",(0,o.kt)("strong",{parentName:"a"},"vs")," TypeScript (and ",(0,o.kt)("inlineCode",{parentName:"a"},"ts-jest"),")"),"."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"We are not doing semantic versioning and ",(0,o.kt)("inlineCode",{parentName:"p"},"23.10")," is a re-write, run ",(0,o.kt)("inlineCode",{parentName:"p"},'npm i -D ts-jest@"<23.10.0"')," to go back to the previous version")))}l.isMDXComponent=!0}}]);