"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,m=p["".concat(l,".").concat(u)]||p[u]||f[u]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:0},a="Introduction",c={unversionedId:"react-native-mlkit/face-detection/index",id:"react-native-mlkit/face-detection/index",title:"Introduction",description:"Welcome to react-native-mlkit-face-detection, the face detection module powered by ML Kit for React Native!",source:"@site/docs/react-native-mlkit/face-detection/index.mdx",sourceDirName:"react-native-mlkit/face-detection",slug:"/react-native-mlkit/face-detection/",permalink:"/ir-docs/docs/react-native-mlkit/face-detection/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"react-native-mlkit",previous:{title:"Face Detection",permalink:"/ir-docs/docs/category/face-detection"},next:{title:"Getting Started",permalink:"/ir-docs/docs/react-native-mlkit/face-detection/getting-started"}},l={},s=[{value:"react-native-mlkit",id:"react-native-mlkit",level:3},{value:"Face Detection",id:"face-detection",level:3},{value:"Face Contour Detection",id:"face-contour-detection",level:3}],d={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-mlkit-face-detection"),", the face detection module powered by ML Kit for React Native!"),(0,i.kt)("h3",{id:"react-native-mlkit"},"react-native-mlkit"),(0,i.kt)("p",null,"React Native MLKit provides React Native APIs for the Swift and Kotlin versions of Google's MLKit Native Modules."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-mlkit-face-detection")," you can access the power and speed of native MLKit face detection in your React Native app, with a simple API built for React-Native."),(0,i.kt)("h3",{id:"face-detection"},"Face Detection"),(0,i.kt)("p",null,"From the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/face-detection"},"MLKit Docs"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"With ML Kit's face detection API, you can detect faces in an image, identify key facial features, and get the contours\nof detected faces. Note that the API detects faces, it does not recognize people ."),(0,i.kt)("p",{parentName:"blockquote"},"With face detection, you can get the information you need to perform tasks like embellishing selfies and portraits, or\ngenerating avatars from a user's photo. Because ML Kit can perform face detection in real time, you can use it in\napplications like video chat or games that respond to the player's expressions.")),(0,i.kt)("h3",{id:"face-contour-detection"},"Face Contour Detection"),(0,i.kt)("p",null,"From the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/face-detection#example_2_face_contour_detection"},"MLKit Docs"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When you have face contour detection enabled, you also get a list of points for each facial feature that was detected.\nThese points represent the shape of the feature.")),(0,i.kt)("img",{alt:"Smiling Man with countour lines and points drawn on facial features",src:"https://developers.google.com/static/ml-kit/vision/face-detection/images/face_contours.svg",style:{maxWidth:450}}))}f.isMDXComponent=!0}}]);