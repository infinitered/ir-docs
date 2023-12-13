"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},l="Documentation: trackGlobalLogs",i={unversionedId:"reactotron/plugins/plugin-track-global-logs",id:"reactotron/plugins/plugin-track-global-logs",title:"Documentation: trackGlobalLogs",description:"Overview",source:"@site/docs/reactotron/plugins/plugin-track-global-logs.md",sourceDirName:"reactotron/plugins",slug:"/reactotron/plugins/plugin-track-global-logs",permalink:"/reactotron/plugins/plugin-track-global-logs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Reactotron",previous:{title:"Image Overlay",permalink:"/reactotron/plugins/overlay"},next:{title:"MMKV",permalink:"/reactotron/plugins/react-native-mmkv"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:3},{value:"Default",id:"default",level:4},{value:"Custom",id:"custom",level:4},{value:"How It Works Internally",id:"how-it-works-internally",level:3}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation-trackgloballogs"},"Documentation: ",(0,r.kt)("inlineCode",{parentName:"h1"},"trackGlobalLogs")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"trackGlobalLogs")," plugin for Reactotron is designed to intercept calls made to ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console.warn"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"console.debug"),", forwarding them to the Reactotron logger. This functionality is useful for monitoring and analyzing logs within your React Native or React JS applications."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To integrate the ",(0,r.kt)("inlineCode",{parentName:"p"},"trackGlobalLogs")," plugin into your Reactotron setup, follow these steps:"),(0,r.kt)("h4",{id:"default"},"Default"),(0,r.kt)("p",null,"This plugin is included by default in Reactotron when using ",(0,r.kt)("inlineCode",{parentName:"p"},"reactotron-react-native"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import Reactotron from "reactotron-react-native";\n\nReactotron.configure()\n  .useReactNative() // included by default\n  .connect();\n')),(0,r.kt)("h4",{id:"custom"},"Custom"),(0,r.kt)("p",null,"If are not using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useReactNative")," method for some reason, you can add the plugin manually like so:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import the ",(0,r.kt)("inlineCode",{parentName:"li"},"trackGlobalLogs")," function from the Reactotron package:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import Reactotron, { trackGlobalLogs } from "reactotron-react-native";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"trackGlobalLogs")," plugin to your Reactotron configuration as shown below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Reactotron.configure().use(trackGlobalLogs()).connect();\n")),(0,r.kt)("p",null,"This enables the plugin to start intercepting global logs once your Reactotron instance is connected."),(0,r.kt)("h3",{id:"how-it-works-internally"},"How It Works Internally"),(0,r.kt)("p",null,"For both React Native and React JS applications, the ",(0,r.kt)("inlineCode",{parentName:"p"},"trackGlobalLogs")," plugin works by monkey-patching references to ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console.warn"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"console.debug"),". It intercepts calls to these console methods and, in addition to the original console output, also sends the log data to the Reactotron logger for further analysis."),(0,r.kt)("p",null,"Please note that there are no additional configuration options provided by the plugin itself. It automatically captures ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console.warn"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"console.debug")," calls without any customization options."))}g.isMDXComponent=!0}}]);