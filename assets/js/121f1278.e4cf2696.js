"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[4647],{4912:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(4848),n=s(8453);const o={},r="api.ts",a={id:"ignite-cli/boilerplate/app/services/api.ts",title:"api.ts",description:"This is the API service. It is a singleton class and contains the code for making API calls to your backend. You can use it like this:",source:"@site/docs/ignite-cli/boilerplate/app/services/api.ts.md",sourceDirName:"ignite-cli/boilerplate/app/services",slug:"/ignite-cli/boilerplate/app/services/api.ts",permalink:"/ignite-cli/boilerplate/app/services/api.ts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Ignite",previous:{title:"Services folder",permalink:"/ignite-cli/boilerplate/app/services/"},next:{title:"Theming Ignite Apps",permalink:"/ignite-cli/boilerplate/app/theme/Theming"}},c={},l=[];function p(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"apits",children:"api.ts"}),"\n",(0,i.jsx)(t.p,{children:"This is the API service. It is a singleton class and contains the code for making API calls to your backend. You can use it like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { api } from "../services/api"\n\n// ...\nconst response = await api.getEpisodes()\n\nif (response.kind === "ok") {\n  // do something with response.episodes\n} else {\n  console.error(`Error fetching episodes: ${JSON.stringify(response)}`)\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can add more methods to this class to call other endpoints."}),"\n",(0,i.jsxs)(t.p,{children:["There are lots of other ways to handle API calls, such as using ",(0,i.jsx)(t.a,{href:"https://tanstack.com/query/latest/",children:"React Query"}),", ",(0,i.jsx)(t.a,{href:"https://swr.vercel.app/",children:"SWR"}),", or ",(0,i.jsx)(t.a,{href:"https://www.apollographql.com/docs/react/",children:"Apollo Client"})," and others. We've used all of these in production apps and they're all really good in different ways. We've chosen to use a simple, custom API client in this boilerplate to keep things flexible."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(6540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);