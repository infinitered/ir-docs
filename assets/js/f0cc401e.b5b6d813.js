"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[9908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,y=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"utils",sidebar_position:60},o="utils folder",l={unversionedId:"ignite-cli/boilerplate/app/utils/Utils",id:"ignite-cli/boilerplate/app/utils/Utils",title:"utils",description:"Every app needs a junk drawer. Here you can find a library of utilities that are used often within your application. This could includes hooks, helper functions, and various tools.",source:"@site/docs/ignite-cli/boilerplate/app/utils/Utils.md",sourceDirName:"ignite-cli/boilerplate/app/utils",slug:"/ignite-cli/boilerplate/app/utils/",permalink:"/ignite-cli/boilerplate/app/utils/",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"utils",sidebar_position:60},sidebar:"Ignite",previous:{title:"typeography.ts",permalink:"/ignite-cli/boilerplate/app/theme/typography.ts"},next:{title:"useSafeAreaInsetsStyle",permalink:"/ignite-cli/boilerplate/app/utils/useSafeAreaInsetsStyle.ts"}},s={},p=[{value:"Hooks",id:"hooks",level:2},{value:"useSafeAreaInsetsStyle",id:"usesafeareainsetsstyle",level:3},{value:"useHeader",id:"useheader",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"utils-folder"},(0,a.kt)("inlineCode",{parentName:"h1"},"utils")," folder"),(0,a.kt)("p",null,"Every app needs a junk drawer. Here you can find a library of utilities that are used often within your application. This could includes hooks, helper functions, and various tools."),(0,a.kt)("h2",{id:"hooks"},"Hooks"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We sometimes create a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"app/hooks")," folder just for hooks. This is a matter of preference.")),(0,a.kt)("h3",{id:"usesafeareainsetsstyle"},"useSafeAreaInsetsStyle"),(0,a.kt)("p",null,"A hook can be used to create a safe-area-aware style object that can be passed directly to a View."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const $insetStyle = useSafeAreaInsetsStyle(["top"], "padding")\n\n<View style={$insetStyle} />\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/utils/useSafeAreaInsetsStyle.ts"},"Full ",(0,a.kt)("inlineCode",{parentName:"a"},"useSafeAreaInsetsStyle"))),(0,a.kt)("h3",{id:"useheader"},"useHeader"),(0,a.kt)("p",null,"A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'function AccountScreen() {\n  useHeader({\n    rightTx: "common.logOut",\n    onRightPress: logout,\n  })\n\n  return <Screen />\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/utils/useHeader.tsx"},"Full ",(0,a.kt)("inlineCode",{parentName:"a"},"useHeader"))))}d.isMDXComponent=!0}}]);