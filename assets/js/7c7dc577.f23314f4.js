"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[5490],{9383:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(4848),t=n(8453);const r={},s="Config folder",c={id:"ignite-cli/boilerplate/app/config/Config",title:"Config folder",description:"This file imports configuration objects from either the config.dev.js file or the config.prod.js file depending on whether we are in DEV mode or not.",source:"@site/docs/ignite-cli/boilerplate/app/config/Config.md",sourceDirName:"ignite-cli/boilerplate/app/config",slug:"/ignite-cli/boilerplate/app/config/",permalink:"/ignite-cli/boilerplate/app/config/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Ignite",previous:{title:"Toggle",permalink:"/ignite-cli/boilerplate/app/components/Toggle"},next:{title:"Devtools Folder",permalink:"/ignite-cli/boilerplate/app/devtools/"}},a={},l=[{value:"config.base.js",id:"configbasejs",level:2},{value:"config.dev.js",id:"configdevjs",level:2},{value:"config.prod.js",id:"configprodjs",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"config-folder",children:"Config folder"}),"\n",(0,o.jsxs)(i.p,{children:["This file imports configuration objects from either the config.dev.js file or the config.prod.js file depending on whether we are in ",(0,o.jsx)(i.code,{children:"__DEV__"})," mode or not."]}),"\n",(0,o.jsx)(i.p,{children:"Note that we do not gitignore these files. Unlike on web servers, just because these are not checked into your repo doesn't mean that they are secure. In fact, you're shipping a JavaScript bundle with every config variable in plain text. Anyone who downloads your app can easily extract them."}),"\n",(0,o.jsx)(i.p,{children:"If you doubt this, just bundle your app, and then go look at the bundle and search it for one of your config variable values. You'll find it there."}),"\n",(0,o.jsxs)(i.p,{children:["Read more here: ",(0,o.jsx)(i.a,{href:"https://reactnative.dev/docs/security#storing-sensitive-info",children:"https://reactnative.dev/docs/security#storing-sensitive-info"})]}),"\n",(0,o.jsx)(i.h2,{id:"configbasejs",children:"config.base.js"}),"\n",(0,o.jsxs)(i.p,{children:["This file contains configuration variables that are shared between development and production. For example, we set a ",(0,o.jsx)(i.code,{children:"exitRoutes"}),' setting to tell the app which routes should be considered "exit routes" (i.e. routes that the user can exit the app from).']}),"\n",(0,o.jsx)(i.h2,{id:"configdevjs",children:"config.dev.js"}),"\n",(0,o.jsx)(i.p,{children:"This file contains configuration variables that are specific to development. For example, you might want to use a different API URL for development than you do for production."}),"\n",(0,o.jsx)(i.h2,{id:"configprodjs",children:"config.prod.js"}),"\n",(0,o.jsx)(i.p,{children:"This file contains configuration variables that are specific to production."})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var o=n(6540);const t={},r=o.createContext(t);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);