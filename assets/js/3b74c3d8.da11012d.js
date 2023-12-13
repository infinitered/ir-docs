"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[5151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:165},o="Backend API Integration",c={unversionedId:"ignite-cli/concept/Backend-API-Integration",id:"ignite-cli/concept/Backend-API-Integration",title:"Backend API Integration",description:"Most apps need to communicate with a backend service of some sort. Some may have a REST API, some a GraphQL API, others might use Firebase/Firestore, Hasura, tRPC, Supabase, AWS/Amplify, or any number of different back end solutions.",source:"@site/docs/ignite-cli/concept/Backend-API-Integration.md",sourceDirName:"ignite-cli/concept",slug:"/ignite-cli/concept/Backend-API-Integration",permalink:"/ignite-cli/concept/Backend-API-Integration",draft:!1,tags:[],version:"current",sidebarPosition:165,frontMatter:{sidebar_position:165},sidebar:"Ignite",previous:{title:"Internationalization in Ignite Apps",permalink:"/ignite-cli/concept/Internationalization"},next:{title:"Error Boundary",permalink:"/ignite-cli/concept/Error-Boundary"}},s={},l=[{value:"HTTP Client",id:"http-client",level:2},{value:"apisauce",id:"apisauce",level:3},{value:"The Api class",id:"the-api-class",level:3},{value:"A note about React Query (aka TanStack Query)",id:"a-note-about-react-query-aka-tanstack-query",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backend-api-integration"},"Backend API Integration"),(0,r.kt)("p",null,"Most apps need to communicate with a backend service of some sort. Some may have a REST API, some a GraphQL API, others might use Firebase/Firestore, Hasura, tRPC, Supabase, AWS/Amplify, or any number of different back end solutions."),(0,r.kt)("p",null,"Ignite purposely does not make any major decisions about what backend system we expect you to use. As a consultancy, we've integrated apps with all kinds of backends (ask us about the Coldfusion backend we integrated with a few years ago!), and can't be locked into one solution."),(0,r.kt)("p",null,"Ignite does come with a basic API setup which we'll describe here. Feel free to rip it out and use your own solution if this doesn't fit."),(0,r.kt)("p",null,"With that said, we've built large React Native apps using this pattern, and it works pretty well."),(0,r.kt)("h2",{id:"http-client"},"HTTP Client"),(0,r.kt)("p",null,"While React Native comes standard with a pretty good built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," client library, it's not quite a smooth enough developer experience for us to recommend out of the box. So we include an HTTP client library called ",(0,r.kt)("inlineCode",{parentName:"p"},"apisauce"),"."),(0,r.kt)("h3",{id:"apisauce"},"apisauce"),(0,r.kt)("p",null,"Ignite comes with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/apisauce"},"apisauce"),", which is a lightweight wrapper around the popular ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/intro"},"Axios")," HTTP client library. We maintain this library at Infinite Red and it's a pretty battle-tested, solid HTTP library."),(0,r.kt)("h3",{id:"the-api-class"},"The Api class"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"./app/services/api"),", you'll find the Api class. This class is the place to add methods to call when you want to fetch data from your backend. Check out the file for examples of fetching data."),(0,r.kt)("h3",{id:"a-note-about-react-query-aka-tanstack-query"},"A note about React Query (aka TanStack Query)"),(0,r.kt)("p",null,"Note that we are currently exploring ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/"},"TanStack Query")," for use in Ignite. We need a few more projects under our belt before we can comfortably include it with Ignite (if we do at all). However, it's a popular solution, so it's worth mentioning here."))}d.isMDXComponent=!0}}]);