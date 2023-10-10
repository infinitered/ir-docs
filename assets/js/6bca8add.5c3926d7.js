"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:99,title:"Options"},i="Object Detector Options",l={unversionedId:"react-native-mlkit/object-detection/options",id:"react-native-mlkit/object-detection/options",title:"Options",description:"Default Model",source:"@site/docs/react-native-mlkit/object-detection/options.md",sourceDirName:"react-native-mlkit/object-detection",slug:"/react-native-mlkit/object-detection/options",permalink:"/docs/react-native-mlkit/object-detection/options",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"Options"},sidebar:"React Native MLKit",previous:{title:"Using a custom model",permalink:"/docs/react-native-mlkit/object-detection/using-a-custom-model"}},c={},p=[{value:"Default Model",id:"default-model",level:2},{value:"Example Usage",id:"example-usage",level:3}],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"object-detector-options"},"Object Detector Options"),(0,a.kt)("h2",{id:"default-model"},"Default Model"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"RNMLKitObjectDetectorOptions")," object is used to configure the behavior of the object detection process. This\ninterface provides several optional properties that allow you to enable or disable certain features and set the mode of\nthe detector."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"shouldEnableClassification")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enables or disables object classification.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"shouldEnableMultipleObjects")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enables or disables the detection of multiple objects.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"detectorMode")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"'singleImage'")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"'stream'")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Sets the mode of the detector.")))),(0,a.kt)("p",null,"For more information on these options\nsee ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/object-detection/ios#1.-configure-the-object-detector"},"the MLKit Docs")),(0,a.kt)("h3",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const options: RNMLKitObjectDetectorOptions = {\n  shouldEnableClassification: true,\n  shouldEnableMultipleObjects: false,\n  detectorMode: "stream",\n};\n')))}m.isMDXComponent=!0}}]);