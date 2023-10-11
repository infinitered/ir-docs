"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:600},a="FAQ / Troubleshooting",c={unversionedId:"react-native-mlkit/face-detection/faq-troubleshooting",id:"react-native-mlkit/face-detection/faq-troubleshooting",title:"FAQ / Troubleshooting",description:"Why does the build fail when I try to build for the iOS simulator?",source:"@site/docs/react-native-mlkit/face-detection/faq-troubleshooting.md",sourceDirName:"react-native-mlkit/face-detection",slug:"/react-native-mlkit/face-detection/faq-troubleshooting",permalink:"/docs/react-native-mlkit/face-detection/faq-troubleshooting",draft:!1,tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"React Native MLKit",previous:{title:"Types",permalink:"/docs/react-native-mlkit/face-detection/types"},next:{title:"API",permalink:"/docs/react-native-mlkit/face-detection/api"}},l={},s=[{value:"Why does the build fail when I try to build for the iOS simulator?",id:"why-does-the-build-fail-when-i-try-to-build-for-the-ios-simulator",level:2},{value:"Why isn&#39;t it detecting faces in my photo?",id:"why-isnt-it-detecting-faces-in-my-photo",level:2},{value:"Minimum Size",id:"minimum-size",level:3},{value:"Face Obscured or Turned",id:"face-obscured-or-turned",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq--troubleshooting"},"FAQ / Troubleshooting"),(0,r.kt)("h2",{id:"why-does-the-build-fail-when-i-try-to-build-for-the-ios-simulator"},"Why does the build fail when I try to build for the iOS simulator?"),(0,r.kt)("p",null,"Currently the MLKit Swift API only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64")," device architectures. The iOS simulator runs on ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64")," (even\non ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64")," Apple Silicon computers with the M1 and M2 chip)."),(0,r.kt)("p",null,"The MLKit team is aware of the issue, but has not yet announced any plans to support ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64")," architectures."),(0,r.kt)("p",null,"For now you can run the app on a physical device to test it."),(0,r.kt)("h2",{id:"why-isnt-it-detecting-faces-in-my-photo"},"Why isn't it detecting faces in my photo?"),(0,r.kt)("p",null,"If your app is not detecting faces in a particular photo, but is able to detect faces in a photo, first try another\nphoto that features\na single face that is directly facing the camera."),(0,r.kt)("p",null,"If that works, then the issue is likely with the photo you are trying to detect faces in. Here are some common issues\nthat may\nprevent the face detector from detecting faces:"),(0,r.kt)("h3",{id:"minimum-size"},"Minimum Size"),(0,r.kt)("p",null,"Faces need to be a certain minimum size for the algorithm to detect them. This is configurable using the ",(0,r.kt)("inlineCode",{parentName:"p"},"minFaceSize"),"\noption. (See ",(0,r.kt)("a",{parentName:"p",href:"../options"},"Options")," for more details.)"),(0,r.kt)("p",null,"That said, there is still a minimum size/resolution required. If you're having trouble, try a higher-resolution photo\nand see if that works."),(0,r.kt)("p",null,"If the model successfully detects a face in the higher res photo, then likely the photo you are trying to detect faces\nin is too small."),(0,r.kt)("h3",{id:"face-obscured-or-turned"},"Face Obscured or Turned"),(0,r.kt)("p",null,"The face detector is best at detecting faces that are looking directly at the camera. If the face is turned to the side,\nor partially obscured, it may not be detected."))}d.isMDXComponent=!0}}]);