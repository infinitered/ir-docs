"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7932],{2676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=n(4848),c=n(8453);const r={sidebar_position:300},d="Options",o={id:"react-native-mlkit/face-detection/options",title:"Options",description:"There are various options you can provide to the face detector to customize its behavior. Here's an example of what's",source:"@site/docs/react-native-mlkit/face-detection/options.md",sourceDirName:"react-native-mlkit/face-detection",slug:"/react-native-mlkit/face-detection/options",permalink:"/react-native-mlkit/face-detection/options",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"React Native MLKit",previous:{title:"Advanced Usage",permalink:"/react-native-mlkit/face-detection/advanced-usage"},next:{title:"Types",permalink:"/react-native-mlkit/face-detection/types"}},s={},a=[{value:"Available Options",id:"available-options",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.p,{children:"There are various options you can provide to the face detector to customize its behavior. Here's an example of what's\npossible:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'import {\n  RNMLKitFaceDetectorOptions,\n  RNMLKitFaceDetectionContextProvider\n} from "@infinitered/react-native-mlkit-face-detection";\n\nconst CUSTOM_OPTIONS: RNMLKitFaceDetectorOptions = {\n  performanceMode: "accurate",  // \n  detectLandmarks: true,\n  runClassifications: true,\n  minFaceSize: 0.01,\n  isTrackingEnabled: true,\n};\n\nfunction App() {\n  return (\n    <RNMLKitFaceDetectionContextProvider options={CUSTOM_OPTIONS}>\n      {/* rest of your app goes here */}\n    </RNMLKitFaceDetectionContextProvider>\n  );\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"available-options",children:"Available Options"}),"\n",(0,i.jsx)(t.p,{children:"Options for the face detector."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"performanceMode"})}),(0,i.jsxs)(t.td,{children:["The performance mode for the detector. Determines the trade-off between speed and accuracy. Use ",(0,i.jsx)(t.code,{children:"'fast'"})," for real-time applications where speed is critical, and ",(0,i.jsx)(t.code,{children:"'accurate'"})," for applications where higher accuracy is desired at the expense of speed."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"'fast' | 'accurate'"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"accurate"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"landmarkMode"})}),(0,i.jsx)(t.td,{children:"Indicates if landmark detection should be enabled."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean | null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"contourMode"})}),(0,i.jsx)(t.td,{children:"Indicates if contour detection should be enabled."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean | null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"classificationMode"})}),(0,i.jsx)(t.td,{children:"Indicates if classification mode should be enabled."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean | null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"minFaceSize"})}),(0,i.jsx)(t.td,{children:"Minimum size of the face for detection."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number | null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"isTrackingEnabled"})}),(0,i.jsx)(t.td,{children:"Indicates if tracking should be enabled for detected faces."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean | null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(6540);const c={},r=i.createContext(c);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);