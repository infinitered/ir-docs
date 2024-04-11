"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1520],{8392:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=i(4848),t=i(8453);const r={sidebar_position:50},s="Expo Application Services (EAS)",a={id:"ignite-cli/expo/EAS",title:"Expo Application Services (EAS)",description:"EAS is our favorite way to build and deploy Ignite apps. It's a cloud build service that allows you to build your app in the cloud, without Xcode or Android Studio.",source:"@site/docs/ignite-cli/expo/EAS.md",sourceDirName:"ignite-cli/expo",slug:"/ignite-cli/expo/EAS",permalink:"/ignite-cli/expo/EAS",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"Ignite",previous:{title:"DIY Workflow",permalink:"/ignite-cli/expo/DIY"}},d={},c=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"expo-application-services-eas",children:"Expo Application Services (EAS)"}),"\n",(0,o.jsx)(n.p,{children:"EAS is our favorite way to build and deploy Ignite apps. It's a cloud build service that allows you to build your app in the cloud, without Xcode or Android Studio."}),"\n",(0,o.jsxs)(n.p,{children:["You can learn more about EAS here: ",(0,o.jsx)(n.a,{href:"https://expo.dev/eas",children:"https://expo.dev/eas"})]}),"\n",(0,o.jsxs)(n.p,{children:["Ignite apps come with an ",(0,o.jsx)(n.code,{children:"eas.json"})," configuration file that looks something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "cli": {\n    "version": ">= 3.15.1"\n  },\n  "build": {\n    "development": {\n      "extends": "production",\n      "distribution": "internal",\n      "android": {\n        "gradleCommand": ":app:assembleDebug"\n      },\n      "ios": {\n        "buildConfiguration": "Debug",\n        "simulator": true\n      }\n    },\n    "development:device": {\n      "extends": "development",\n      "distribution": "internal",\n      "ios": {\n        "buildConfiguration": "Debug",\n        "simulator": false\n      }\n    },\n    "preview": {\n      "extends": "production",\n      "distribution": "internal",\n      "ios": { "simulator": true },\n      "android": { "buildType": "apk" }\n    },\n    "preview:device": {\n      "extends": "preview",\n      "ios": { "simulator": false }\n    },\n    "production": {}\n  },\n  "submit": {\n    "production": {}\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"It's preconfigured to work with Ignite apps, but you can customize it to your liking."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var o=i(6540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);