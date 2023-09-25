"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7804],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1,slug:"/running-the-example/android",title:"Android"},o="Running the Example App on Android",l={unversionedId:"react-native-mlkit/running-the-example-app/android",id:"react-native-mlkit/running-the-example-app/android",title:"Android",description:"An example app is provided that demonstrates the correct use of the modules in a react-native app.",source:"@site/docs/react-native-mlkit/running-the-example-app/android.md",sourceDirName:"react-native-mlkit/running-the-example-app",slug:"/running-the-example/android",permalink:"/ir-docs/docs/running-the-example/android",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/running-the-example/android",title:"Android"},sidebar:"react-native-mlkit",previous:{title:"Running the Example App",permalink:"/ir-docs/docs/category/running-the-example-app"},next:{title:"iOS",permalink:"/ir-docs/docs/running-the-example/ios"}},p={},d=[{value:"1. Clone the project",id:"1-clone-the-project",level:2},{value:"2. Install dependencies",id:"2-install-dependencies",level:2},{value:"3. Build native modules",id:"3-build-native-modules",level:2},{value:"5. Build and run the app",id:"5-build-and-run-the-app",level:2}],c={toc:d},u="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-the-example-app-on-android"},"Running the Example App on Android"),(0,a.kt)("p",null,"An example app is provided that demonstrates the correct use of the modules in a react-native app."),(0,a.kt)("h2",{id:"1-clone-the-project"},"1. Clone the project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:infinitered/react-native-mlkit.git\n")),(0,a.kt)("h2",{id:"2-install-dependencies"},"2. Install dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-native-mlkit \nyarn install\n")),(0,a.kt)("h2",{id:"3-build-native-modules"},"3. Build native modules"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,a.kt)("h2",{id:""}),(0,a.kt)("h2",{id:"5-build-and-run-the-app"},"5. Build and run the app"),(0,a.kt)("p",null,"From ",(0,a.kt)("inlineCode",{parentName:"p"},"~app/InfiniteRedAI")," use the included script to run the app in the android emulator. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn android\n")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," to run on a hardware device. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn android [-d]\n")))}s.isMDXComponent=!0}}]);