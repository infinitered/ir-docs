"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7550],{2713:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=i(4848),o=i(8453);const r={sidebar_position:600},s="FAQ / Troubleshooting",a={id:"react-native-mlkit/face-detection/faq-troubleshooting",title:"FAQ / Troubleshooting",description:"Why does the build fail when I try to build for the iOS simulator?",source:"@site/docs/react-native-mlkit/face-detection/faq-troubleshooting.md",sourceDirName:"react-native-mlkit/face-detection",slug:"/react-native-mlkit/face-detection/faq-troubleshooting",permalink:"/react-native-mlkit/face-detection/faq-troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"React Native MLKit",previous:{title:"Types",permalink:"/react-native-mlkit/face-detection/types"},next:{title:"API",permalink:"/react-native-mlkit/face-detection/api"}},c={},h=[{value:"Why does the build fail when I try to build for the iOS simulator?",id:"why-does-the-build-fail-when-i-try-to-build-for-the-ios-simulator",level:2},{value:"Why isn&#39;t it detecting faces in my photo?",id:"why-isnt-it-detecting-faces-in-my-photo",level:2},{value:"Minimum Size",id:"minimum-size",level:3},{value:"Face Obscured or Turned",id:"face-obscured-or-turned",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"faq--troubleshooting",children:"FAQ / Troubleshooting"}),"\n",(0,n.jsx)(t.h2,{id:"why-does-the-build-fail-when-i-try-to-build-for-the-ios-simulator",children:"Why does the build fail when I try to build for the iOS simulator?"}),"\n",(0,n.jsxs)(t.p,{children:["Currently the MLKit Swift API only supports ",(0,n.jsx)(t.code,{children:"arm64"})," device architectures. The iOS simulator runs on ",(0,n.jsx)(t.code,{children:"x86_64"})," (even\non ",(0,n.jsx)(t.code,{children:"arm64"})," Apple Silicon computers with the M1 and M2 chip)."]}),"\n",(0,n.jsxs)(t.p,{children:["The MLKit team is aware of the issue, but has not yet announced any plans to support ",(0,n.jsx)(t.code,{children:"x86_64"})," architectures."]}),"\n",(0,n.jsx)(t.p,{children:"For now you can run the app on a physical device to test it."}),"\n",(0,n.jsx)(t.h2,{id:"why-isnt-it-detecting-faces-in-my-photo",children:"Why isn't it detecting faces in my photo?"}),"\n",(0,n.jsx)(t.p,{children:"If your app is not detecting faces in a particular photo, but is able to detect faces in a photo, first try another\nphoto that features\na single face that is directly facing the camera."}),"\n",(0,n.jsx)(t.p,{children:"If that works, then the issue is likely with the photo you are trying to detect faces in. Here are some common issues\nthat may\nprevent the face detector from detecting faces:"}),"\n",(0,n.jsx)(t.h3,{id:"minimum-size",children:"Minimum Size"}),"\n",(0,n.jsxs)(t.p,{children:["Faces need to be a certain minimum size for the algorithm to detect them. This is configurable using the ",(0,n.jsx)(t.code,{children:"minFaceSize"}),"\noption. (See ",(0,n.jsx)(t.a,{href:"../options",children:"Options"})," for more details.)"]}),"\n",(0,n.jsx)(t.p,{children:"That said, there is still a minimum size/resolution required. If you're having trouble, try a higher-resolution photo\nand see if that works."}),"\n",(0,n.jsx)(t.p,{children:"If the model successfully detects a face in the higher res photo, then likely the photo you are trying to detect faces\nin is too small."}),"\n",(0,n.jsx)(t.h3,{id:"face-obscured-or-turned",children:"Face Obscured or Turned"}),"\n",(0,n.jsx)(t.p,{children:"The face detector is best at detecting faces that are looking directly at the camera. If the face is turned to the side,\nor partially obscured, it may not be detected."})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);