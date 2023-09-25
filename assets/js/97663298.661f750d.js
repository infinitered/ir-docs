"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[3921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,slug:"/running-the-example/ios",title:"iOS"},o="Running the Example App on iOS",l={unversionedId:"react-native-mlkit/running-the-example-app/ios",id:"react-native-mlkit/running-the-example-app/ios",title:"iOS",description:"An example app is provided that demonstrates the correct use of the modules in a react-native app.",source:"@site/docs/react-native-mlkit/running-the-example-app/ios.md",sourceDirName:"react-native-mlkit/running-the-example-app",slug:"/running-the-example/ios",permalink:"/ir-docs/docs/running-the-example/ios",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/running-the-example/ios",title:"iOS"},sidebar:"react-native-mlkit",previous:{title:"Android",permalink:"/ir-docs/docs/running-the-example/android"},next:{title:"Face Detection",permalink:"/ir-docs/docs/category/face-detection"}},p={},s=[{value:"1. Clone the project",id:"1-clone-the-project",level:2},{value:"2. Install dependencies",id:"2-install-dependencies",level:2},{value:"3. Build native modules",id:"3-build-native-modules",level:2},{value:"5. Build and run the app",id:"5-build-and-run-the-app",level:2},{value:"Via Terminal",id:"via-terminal",level:4},{value:"Via XCode",id:"via-xcode",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-the-example-app-on-ios"},"Running the Example App on iOS"),(0,i.kt)("p",null,"An example app is provided that demonstrates the correct use of the modules in a react-native app."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The iOS MLKit Libraries currently only support ",(0,i.kt)("inlineCode",{parentName:"p"},"arm64")," architectures, so they currently will not work on the iOS simulator (which always runs in ",(0,i.kt)("inlineCode",{parentName:"p"},"x86_64"),"). "),(0,i.kt)("p",{parentName:"admonition"},"This is a ",(0,i.kt)("a",{parentName:"p",href:"https://issuetracker.google.com/issues/178965151?pli=1"},"known issue")," with the MLKit Swift API, and we are waiting either for a fix from Google, or for Apple to release a native ",(0,i.kt)("inlineCode",{parentName:"p"},"arm64")," simulator.")),(0,i.kt)("h2",{id:"1-clone-the-project"},"1. Clone the project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:infinitered/react-native-mlkit.git\n")),(0,i.kt)("h2",{id:"2-install-dependencies"},"2. Install dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-native-mlkit \nyarn install\n")),(0,i.kt)("h2",{id:"3-build-native-modules"},"3. Build native modules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,i.kt)("h2",{id:""}),(0,i.kt)("h2",{id:"5-build-and-run-the-app"},"5. Build and run the app"),(0,i.kt)("h4",{id:"via-terminal"},"Via Terminal"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Launch the app using the ",(0,i.kt)("inlineCode",{parentName:"li"},"ios")," script")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/InfiniteRedAI\n\nyarn ios -d  \n")),(0,i.kt)("h4",{id:"via-xcode"},"Via XCode"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From inside the app package, Run ",(0,i.kt)("inlineCode",{parentName:"p"},"expo prebuild")," to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ios")," native project folders"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/InfiniteRedAI\n\n# creates both android and ios native project folders\nyarn prebuild\n# creates only the ios native project folder\nyarn prebuild --platform ios\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"~/apps/InfiniteRedAI/ios/InfiniteRedAI.xcworkspace")," in XCode")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteRedAI"),' target, and select a Team on the "Signing & Capabilities" tab')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the hardware device you want to run the app on (MLKit is not supported in the simulator at this time)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the play button to build the app"))))}u.isMDXComponent=!0}}]);