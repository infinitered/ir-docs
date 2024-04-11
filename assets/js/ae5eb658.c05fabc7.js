"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[4612],{4488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(4848),i=t(8453);const r={title:"Apisauce"},o="reactotron-apisauce",s={id:"reactotron/plugins/apisauce",title:"Apisauce",description:"Apisauce is a lightweight wrapper around the fantastic Axios networking library.",source:"@site/docs/reactotron/plugins/apisauce.md",sourceDirName:"reactotron/plugins",slug:"/reactotron/plugins/apisauce",permalink:"/reactotron/plugins/apisauce",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Apisauce"},sidebar:"Reactotron",previous:{title:"Reactotron Plugins",permalink:"/reactotron/plugins/"},next:{title:"AsyncStorage",permalink:"/reactotron/plugins/async-storage"}},c={},l=[{value:"Installing",id:"installing",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"reactotron-apisauce",children:"reactotron-apisauce"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"http://github.com/skellock/apisauce",children:"Apisauce"})," is a lightweight wrapper around the fantastic ",(0,a.jsx)(n.a,{href:"https://github.com/mzabriskie/axios",children:"Axios"})," networking library."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"API Response",src:t(3707).A+"",width:"750",height:"350"})}),"\n",(0,a.jsx)(n.h2,{id:"installing",children:"Installing"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm i --save-dev reactotron-apisauce\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"yarn add reactotron-apisauce -D\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["To use the apisauce plugin, add the additional plugin on the ",(0,a.jsx)(n.code,{children:"import"})," line."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import apisaucePlugin from "reactotron-apisauce" //\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then plug it in when you configure Reactotron."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Reactotron.configure()\n  .use(\n    apisaucePlugin({\n      // ignoreContentTypes: /^(image)\\/.\\*$/i // <--- a way to skip printing the body of some requests (default is any image)\n    })\n  ) // <-- here we go!!!\n  .connect()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"Next, wherever you create api functions for you application, bring in Reactotron and attach the monitor to your apisauce instance. Apisauce has a feature where you can attach a handler to watch."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"To view all requests/response flowing through your api"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'//for web\nimport Reactotron from "reactotron-react-js"\n\n//for mobile\nimport Reactotron from "reactotron-react-native"\n\napi.addMonitor(Reactotron.apisauce)\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"To view only the requests/response that have a problem"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'//if you just wanted to track on 500\'s\napi.addMonitor((response) => {\n  if (response.problem === "SERVER_ERROR") Reactotron.apisauce(response)\n})\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3707:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/apisauce-1fe97052ef697fd9f19710c3cceff31e.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);