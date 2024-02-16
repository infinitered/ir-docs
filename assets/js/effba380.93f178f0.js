"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[4594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),v=a,d=s["".concat(l,".").concat(v)]||s[v]||m[v]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"MMKV"},i="React Native MMKV",c={unversionedId:"reactotron/plugins/react-native-mmkv",id:"reactotron/plugins/react-native-mmkv",title:"MMKV",description:"The react-native-mmkv plugin allows you to track MMKV updates.",source:"@site/docs/reactotron/plugins/react-native-mmkv.md",sourceDirName:"reactotron/plugins",slug:"/reactotron/plugins/react-native-mmkv",permalink:"/reactotron/plugins/react-native-mmkv",draft:!1,tags:[],version:"current",frontMatter:{title:"MMKV"},sidebar:"Reactotron",previous:{title:"Image Overlay",permalink:"/reactotron/plugins/overlay"},next:{title:"Redux",permalink:"/reactotron/plugins/redux"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-native-mmkv"},"React Native MMKV"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-mmkv")," plugin allows you to track ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-mmkv"},"MMKV")," updates."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Import your mmkv storage instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { MMKV } from "react-native-mmkv";\nexport const storage = new MMKV();\n')),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mmkvPlugin"),", add the additional plugin on the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import Reactotron from "reactotron-react-native"\nimport mmkvPlugin from "reactotron-react-native-mmkv"\nimport { storage } from "./mmkv/storage/instance/location" // <--- update this location\n...\nReactotron.configure()\n  .use(mmkvPlugin({ storage })) // <--- here we go!\n  .connect()\n')),(0,a.kt)("p",null,"And you're done! Now you can see your MMKV in Reactotron."),(0,a.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mmkvPlugin()")," accepts an object with an ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore")," key. The value is an array of strings you would like to prevent sending to Reactotron."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'mmkvPlugin({\n  storage,\n  ignore: ["secret"],\n});\n')))}m.isMDXComponent=!0}}]);