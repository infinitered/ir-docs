"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1684],{617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(4848),o=n(8453);n(6540),n(2303);const a={sidebar_position:100,title:"Getting Started"},r="Getting Started",c={id:"react-native-mlkit/face-detection/getting-started",title:"Getting Started",description:"Prerequisites",source:"@site/docs/react-native-mlkit/face-detection/getting-started.md",sourceDirName:"react-native-mlkit/face-detection",slug:"/react-native-mlkit/face-detection/getting-started",permalink:"/react-native-mlkit/face-detection/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"Getting Started"},sidebar:"React Native MLKit",previous:{title:"Introduction",permalink:"/react-native-mlkit/face-detection/"},next:{title:"Advanced Usage",permalink:"/react-native-mlkit/face-detection/advanced-usage"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managed Workflow",id:"managed-workflow",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"1. Installation",id:"1-installation",level:3},{value:"2. Setting Up the Context",id:"2-setting-up-the-context",level:3},{value:"3. Detecting Faces in Photos",id:"3-detecting-faces-in-photos",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"react-native-mlkit-face-detection"})," is an ",(0,i.jsx)(t.a,{href:"https://docs.expo.dev/modules/overview/",children:"Expo Module"}),". And is compatible with\nboth the Managed and Bare workflows."]}),"\n",(0,i.jsx)(t.h3,{id:"managed-workflow",children:"Managed Workflow"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"react-native-mlkit-face-detection"})," is compatible with the Expo Managed Workflow out of the box. No additional setup is\nrequired!"]}),"\n",(0,i.jsx)(t.h3,{id:"workflow",children:"Workflow"}),"\n",(0,i.jsxs)(t.p,{children:["To use the module, you'll need to install and configure the ",(0,i.jsx)(t.code,{children:"expo"})," package. See\nthe ",(0,i.jsx)(t.a,{href:"https://docs.expo.dev/bare/installing-expo-modules/",children:"expo docs"})," for instructions."]}),"\n",(0,i.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(t.h3,{id:"1-installation",children:"1. Installation"}),"\n",(0,i.jsx)(t.p,{children:"Add the package to your project using your favorite package manager:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add @infinitered/react-native-mlkit-face-detection\n"})}),"\n",(0,i.jsx)(t.h3,{id:"2-setting-up-the-context",children:"2. Setting Up the Context"}),"\n",(0,i.jsxs)(t.p,{children:["Wrap your app with the ",(0,i.jsx)(t.code,{children:"RNMLKitFaceDetectionContextProvider"})," component."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'// App.tsx\n\nimport {\n  RNMLKitFaceDetectionContextProvider,\n} from "@infinitered/react-native-mlkit-face-detection";\n\nfunction App() {\n  return (\n    <RNMLKitFaceDetectionContextProvider>\n      {/* rest of your app goes here */}\n    </RNMLKitFaceDetectionContextProvider>\n  );\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["By default, the face detection is automatically initialized and loaded into memory when created, which can have a\nsignificant impact on the performance of your app. The ",(0,i.jsx)(t.a,{href:"../advanced-usage/#2-deferred-initialization",children:"Advanced Usage"}),"\nguide has instructions on how to defer this initialization."]})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can set custom options for the face detector by passing them to the ",(0,i.jsx)(t.code,{children:"options"})," prop. More info available on\nthe ",(0,i.jsx)(t.a,{href:"../options",children:"Options"})," page."]})}),"\n",(0,i.jsx)(t.h3,{id:"3-detecting-faces-in-photos",children:"3. Detecting Faces in Photos"}),"\n",(0,i.jsxs)(t.p,{children:["Once the provider is in place, use the ",(0,i.jsx)(t.code,{children:"useFacesInPhoto"})," hook. This hook will allow you to detect faces in any photo by\nsimply passing the image's URI."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { useFacesInPhoto } from \"@infinitered/react-native-mlkit-face-detection\";\n\nfunction FaceDetectionComponent() {\n  const { faces, error, status } = useFacesInPhoto('local_uri_of_your_image_uri');\n\n  if (error) {\n    return <Text>Error: {error}</Text>;\n  }\n\n  return (<View>\n    {faces.map((face) => (\n      <View key={face.trackingId}>\n        <Text>{JSON.stringify(face)}</Text>\n      </View>\n    ))}\n  </View>)\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now, you're set to incorporate face detection into your application! Check out our ",(0,i.jsx)(t.a,{href:"../advanced-usage",children:"Advanced Usage"}),"\nguide\nfor more information."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);