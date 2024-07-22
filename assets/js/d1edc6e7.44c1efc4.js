"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[502],{6383:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=i(4848),o=i(8453);const l={sidebar_position:160},a="Internationalization in Ignite Apps",r={id:"ignite-cli/boilerplate/app/i18n/Internationalization",title:"Internationalization in Ignite Apps",description:"Ignite currently set up to have Internationalization setup in English, Arabic, Korean, French and Japanese! This is detected on app load and will set your app to that language.",source:"@site/docs/ignite-cli/boilerplate/app/i18n/Internationalization.md",sourceDirName:"ignite-cli/boilerplate/app/i18n",slug:"/ignite-cli/boilerplate/app/i18n/Internationalization",permalink:"/ignite-cli/boilerplate/app/i18n/Internationalization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:160,frontMatter:{sidebar_position:160},sidebar:"Ignite",previous:{title:"Devtools Folder",permalink:"/ignite-cli/boilerplate/app/devtools/"},next:{title:"Models folder",permalink:"/ignite-cli/boilerplate/app/models/"}},s={},d=[{value:"Right to Left languages (RTL)",id:"right-to-left-languages-rtl",level:2},{value:"Removing RTL Support",id:"removing-rtl-support",level:3},{value:"Adding more languages",id:"adding-more-languages",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"internationalization-in-ignite-apps",children:"Internationalization in Ignite Apps"}),"\n",(0,t.jsx)(n.p,{children:"Ignite currently set up to have Internationalization setup in English, Arabic, Korean, French and Japanese! This is detected on app load and will set your app to that language."}),"\n",(0,t.jsx)(n.h2,{id:"right-to-left-languages-rtl",children:"Right to Left languages (RTL)"}),"\n",(0,t.jsx)(n.p,{children:"Since Ignite already comes with an RTL language, Arabic, adding any new ones would work by default."}),"\n",(0,t.jsx)(n.h3,{id:"removing-rtl-support",children:"Removing RTL Support"}),"\n",(0,t.jsx)(n.p,{children:"To remove RTL support, follow the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/app/i18n/i18n.ts"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["remove your RTL ",(0,t.jsx)(n.code,{children:".json"})," file from the ",(0,t.jsx)(n.code,{children:"i18n.translations"})," object"]}),"\n",(0,t.jsx)(n.li,{children:"remove lines 19-21 where we allow and force RTL on the native layer"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["remove all other associated logic that uses the exported ",(0,t.jsx)(n.code,{children:"isRTL"})," variable"]}),"\n",(0,t.jsxs)(n.li,{children:["remove any ",(0,t.jsx)(n.code,{children:'tx="some.i18n.key"'})," from your components and use ",(0,t.jsx)(n.code,{children:'text="Some Text"'})," instead\n(e.g. ",(0,t.jsx)(n.code,{children:'<Text text="Some Text" />'})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adding-more-languages",children:"Adding more languages"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["add your language ",(0,t.jsx)(n.code,{children:".json"})," file to ",(0,t.jsx)(n.code,{children:"app/i18n/"}),", e.g. ",(0,t.jsx)(n.code,{children:"app/i18n/fr.json"})]}),"\n",(0,t.jsxs)(n.li,{children:["update ",(0,t.jsx)(n.code,{children:"app/i18n/i18n.ts"})," ",(0,t.jsx)(n.code,{children:"i18n.translations"})," object to include the newly imported language, e.g. ",(0,t.jsx)(n.code,{children:'i18n.translations = { en, "en-US": en, ja, fr }'})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const o={},l=t.createContext(o);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);