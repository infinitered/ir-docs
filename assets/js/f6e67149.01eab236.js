"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1331],{7851:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(4848),i=t(8453);const r={sidebar_position:1,title:"Getting Started"},c="Document Scanner",s={id:"react-native-mlkit/document-scanner/index",title:"Getting Started",description:"Getting Started",source:"@site/docs/react-native-mlkit/document-scanner/index.md",sourceDirName:"react-native-mlkit/document-scanner",slug:"/react-native-mlkit/document-scanner/",permalink:"/react-native-mlkit/document-scanner/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"React Native MLKit",previous:{title:"Document Scanner (Beta)",permalink:"/category/document-scanner-beta"},next:{title:"Options",permalink:"/react-native-mlkit/document-scanner/options"}},o={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"1. Launch the document scanner from a button press",id:"1-launch-the-document-scanner-from-a-button-press",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"document-scanner",children:"Document Scanner"}),"\n",(0,a.jsx)(e.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(e.p,{children:["This is an expo module that lets you use\nthe ",(0,a.jsx)(e.a,{href:"https://developers.google.com/ml-kit/vision/doc-scanner",children:"MLKit Document Scanner"})," library in your Expo app."]}),"\n",(0,a.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(e.p,{children:"Install like any other npm package:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"#yarn\nyarn add @infinitered/react-native-mlkit-document-scanner\n\n#npm\nnpm install @infinitered/react-native-mlkit-document-scanner\n"})}),"\n",(0,a.jsx)(e.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsx)(e.h3,{id:"1-launch-the-document-scanner-from-a-button-press",children:"1. Launch the document scanner from a button press"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"launchDocumentScannerAsync"})," method to initiate the document scanner modal."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { View, Button } from "react-native";\nimport { launchDocumentScannerAsync } from "@infinitered/react-native-mlkit-document-scanner";\n\nfunction App() {\n  return (\n    <View>\n      <Button\n        onPress={async () => {\n          // result will contain an object with the result information\n          const result = await launchDocumentScannerAsync({\n            pageLimit: 1,\n            galleryImportAllowed: false,\n            resultFormats: ResultFormatOptions.ALL,\n          });\n        }}\n        title="Scan Document"\n      />\n    </View>\n  );\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var a=t(6540);const i={},r=a.createContext(i);function c(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);