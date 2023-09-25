"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[6334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:300,slug:"/react-native-mlkit/face-detection/options"},l="Options",o={unversionedId:"react-native-mlkit/face-detection/options",id:"react-native-mlkit/face-detection/options",title:"Options",description:"There are various options you can provide to the face detector to customize its behavior. Here's an example of what's",source:"@site/docs/react-native-mlkit/face-detection/options.md",sourceDirName:"react-native-mlkit/face-detection",slug:"/react-native-mlkit/face-detection/options",permalink:"/ir-docs/docs/react-native-mlkit/face-detection/options",draft:!1,tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300,slug:"/react-native-mlkit/face-detection/options"},sidebar:"react-native-mlkit",previous:{title:"Advanced Usage",permalink:"/ir-docs/docs/react-native-mlkit/face-detection/advanced_usage"},next:{title:"Types",permalink:"/ir-docs/docs/face-detection/types"}},c={},d=[{value:"Available Options",id:"available-options",level:2}],p={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"options"},"Options"),(0,r.kt)("p",null,"There are various options you can provide to the face detector to customize its behavior. Here's an example of what's\npossible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  RNMLKitFaceDetectorOptions,\n  RNMLKitFaceDetectionContextProvider\n} from "@infinitered/react-native-mlkit-face-detection";\n\nconst CUSTOM_OPTIONS: RNMLKitFaceDetectorOptions = {\n  performanceMode: "accurate",  // \n  detectLandmarks: true,\n  runClassifications: true,\n  minFaceSize: 0.01,\n  isTrackingEnabled: true,\n};\n\nfunction App() {\n  return (\n    <RNMLKitFaceDetectionContextProvider options={CUSTOM_OPTIONS}>\n      {/* rest of your app goes here */}\n    </RNMLKitFaceDetectionContextProvider>\n  );\n}\n')),(0,r.kt)("h2",{id:"available-options"},"Available Options"),(0,r.kt)("p",null,"Options for the face detector."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"performanceMode")),(0,r.kt)("td",{parentName:"tr",align:null},"The performance mode for the detector. Determines the trade-off between speed and accuracy. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"'fast'")," for real-time applications where speed is critical, and ",(0,r.kt)("inlineCode",{parentName:"td"},"'accurate'")," for applications where higher accuracy is desired at the expense of speed."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'fast'")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"'accurate'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accurate")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"landmarkMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if landmark detection should be enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"`boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"null`"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contourMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if contour detection should be enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"`boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"null`"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"classificationMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if classification mode should be enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"`boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"null`"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minFaceSize")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum size of the face for detection."),(0,r.kt)("td",{parentName:"tr",align:null},"`number"),(0,r.kt)("td",{parentName:"tr",align:null},"null`"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isTrackingEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if tracking should be enabled for detected faces."),(0,r.kt)("td",{parentName:"tr",align:null},"`boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"null`"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))))}u.isMDXComponent=!0}}]);