"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Getting Started"},i="Document Scanner",c={unversionedId:"react-native-mlkit/document-scanner/index",id:"react-native-mlkit/document-scanner/index",title:"Getting Started",description:"Getting Started",source:"@site/docs/react-native-mlkit/document-scanner/index.md",sourceDirName:"react-native-mlkit/document-scanner",slug:"/react-native-mlkit/document-scanner/",permalink:"/react-native-mlkit/document-scanner/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"React Native MLKit",previous:{title:"Document Scanner (Beta)",permalink:"/category/document-scanner-beta"},next:{title:"Options",permalink:"/react-native-mlkit/document-scanner/options"}},l={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"1. Launch the document scanner from a button press",id:"1-launch-the-document-scanner-from-a-button-press",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"document-scanner"},"Document Scanner"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"This is an expo module that lets you use\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/doc-scanner"},"MLKit Document Scanner")," library in your Expo app."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install like any other npm package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#yarn\nyarn add react-native-mlkit-document-scanner\n\n#npm\nnpm install react-native-mlkit-document-scanner\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h3",{id:"1-launch-the-document-scanner-from-a-button-press"},"1. Launch the document scanner from a button press"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"launchDocumentScannerAsync")," method to initiate the document scanner modal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// App.tsx\nimport { View, Button } from "react-native";\nimport { launchDocumentScannerAsync } from "react-native-mlkit-document-scanner";\n\nfunction App() {\n  return (\n    <View>\n      <Button\n        onPress={async () => {\n          // result will contain an object with the result information\n          const result = await launchDocumentScannerAsync({\n            pageLimit: 1,\n            galleryImportAllowed: false,\n            resultFormats: ResultFormatOptions.ALL,\n          });\n        }}\n        title="Scan Document"\n      />\n    </View>\n  );\n}\n')))}m.isMDXComponent=!0}}]);