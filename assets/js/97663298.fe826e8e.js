"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[2943],{6698:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=i(4848),a=i(8453);const l={sidebar_position:1,title:"iOS"},r="Running the Example App on iOS",s={id:"react-native-mlkit/running-the-example-app/ios",title:"iOS",description:"An example app is provided that demonstrates the correct use of the modules in a react-native app.",source:"@site/docs/react-native-mlkit/running-the-example-app/ios.md",sourceDirName:"react-native-mlkit/running-the-example-app",slug:"/react-native-mlkit/running-the-example-app/ios",permalink:"/react-native-mlkit/running-the-example-app/ios",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"iOS"},sidebar:"React Native MLKit",previous:{title:"Android",permalink:"/react-native-mlkit/running-the-example-app/android"},next:{title:"Face Detection",permalink:"/react-native-mlkit/face-detection/list"}},o={},d=[{value:"1. Clone the project",id:"1-clone-the-project",level:2},{value:"2. Install dependencies",id:"2-install-dependencies",level:2},{value:"3. Build native modules",id:"3-build-native-modules",level:2},{value:"5. Build and run the app",id:"5-build-and-run-the-app",level:2},{value:"Via Terminal",id:"via-terminal",level:4},{value:"Via XCode",id:"via-xcode",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"running-the-example-app-on-ios",children:"Running the Example App on iOS"}),"\n",(0,t.jsx)(n.p,{children:"An example app is provided that demonstrates the correct use of the modules in a react-native app."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The iOS MLKit Libraries currently only support ",(0,t.jsx)(n.code,{children:"arm64"})," architectures, so they currently will not work on the iOS\nsimulator (which always runs in ",(0,t.jsx)(n.code,{children:"x86_64"}),")."]}),(0,t.jsxs)(n.p,{children:["This is a ",(0,t.jsx)(n.a,{href:"https://issuetracker.google.com/issues/178965151?pli=1",children:"known issue"})," with the MLKit Swift API, and we are\nwaiting either for a fix from Google, or for Apple to release a native ",(0,t.jsx)(n.code,{children:"arm64"})," simulator."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"MLKit is not supported in the iOS simulator. You will need to use a hardware device."})}),"\n",(0,t.jsx)(n.h2,{id:"1-clone-the-project",children:"1. Clone the project"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:infinitered/react-native-mlkit.git\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-install-dependencies",children:"2. Install dependencies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd react-native-mlkit\nyarn install\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-build-native-modules",children:"3. Build native modules"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})}),"\n",(0,t.jsx)(n.h2,{id:""}),"\n",(0,t.jsx)(n.h2,{id:"5-build-and-run-the-app",children:"5. Build and run the app"}),"\n",(0,t.jsx)(n.h4,{id:"via-terminal",children:"Via Terminal"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Launch the app using the ",(0,t.jsx)(n.code,{children:"ios"})," script"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd apps/ExampleApp\n\nyarn ios -d\n"})}),"\n",(0,t.jsx)(n.h4,{id:"via-xcode",children:"Via XCode"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From inside the app package, Run ",(0,t.jsx)(n.code,{children:"expo prebuild"})," to create the ",(0,t.jsx)(n.code,{children:"android"})," and ",(0,t.jsx)(n.code,{children:"ios"})," native project folders"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd apps/ExampleApp\n\n# creates both android and ios native project folders\nyarn prebuild\n# creates only the ios native project folder\nyarn prebuild --platform ios\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"~/apps/ExampleApp/ios/ExampleApp.xcworkspace"})," in XCode"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.code,{children:"ExampleApp"}),' target, and select a Team on the "Signing & Capabilities" tab']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select the hardware device you want to run the app on (MLKit is not supported in the simulator at this time)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click the play button to build the app"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const a={},l=t.createContext(a);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);