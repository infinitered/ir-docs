"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[2803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="Test Folder",s={unversionedId:"ignite-cli/boilerplate/test/Test",id:"ignite-cli/boilerplate/test/Test",title:"Test Folder",description:"Ignite includes support for writing Jest tests, which can be located anywhere in your codebase. But the initial Jest setup, mocking objects for testing, and any global scoped tests belong in the test directory.",source:"@site/docs/ignite-cli/boilerplate/test/Test.md",sourceDirName:"ignite-cli/boilerplate/test",slug:"/ignite-cli/boilerplate/test/",permalink:"/ignite-cli/boilerplate/test/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Ignite",previous:{title:"withSplashScreen Config Plugin",permalink:"/ignite-cli/boilerplate/plugins/withSplashScreen"},next:{title:"app.json / app.config.js",permalink:"/ignite-cli/boilerplate/app.json"}},l={},c=[{value:"i18n.test.ts",id:"i18ntestts",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-folder"},"Test Folder"),(0,i.kt)("p",null,"Ignite includes support for writing ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," tests, which can be located anywhere in your codebase. But the initial Jest setup, mocking objects for testing, and any global scoped tests belong in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," directory."),(0,i.kt)("h3",{id:"i18ntestts"},"i18n.test.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test/i18n.test.ts")," is a handy test to check for any missing or mistyped translation keys in your app.\nIt searches the codebase for components using the ",(0,i.kt)("inlineCode",{parentName:"p"},'tx=""')," prop, or any ",(0,i.kt)("inlineCode",{parentName:"p"},'translate("")')," commands, and checks for a valid i18n key between the double quotes."),(0,i.kt)("p",null,"This approach isn't 100% perfect. If you are storing your key string in a variable because you are setting it conditionally, then it won't be picked up."))}d.isMDXComponent=!0}}]);