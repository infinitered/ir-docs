"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[2346],{989:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(4848),r=n(8453);const o={sidebar_position:1},s="Ignite's Boilerplate",l={id:"ignite-cli/boilerplate/Boilerplate",title:"Ignite's Boilerplate",description:'A "boilerplate" project is one that you can use as a starting point for your own project.',source:"@site/docs/ignite-cli/boilerplate/Boilerplate.md",sourceDirName:"ignite-cli/boilerplate",slug:"/ignite-cli/boilerplate/",permalink:"/ignite-cli/boilerplate/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"Ignite",previous:{title:"Getting Started Guide",permalink:"/ignite-cli/Guide"},next:{title:".maestro",permalink:"/ignite-cli/boilerplate/maestro"}},a={},c=[{value:"Explanation of the Ignite folder structure",id:"explanation-of-the-ignite-folder-structure",level:2},{value:"./app directory",id:"app-directory",level:3},{value:"Root Directory",id:"root-directory",level:3},{value:"Directories",id:"directories",level:4},{value:"Files",id:"files",level:4}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"ignites-boilerplate",children:"Ignite's Boilerplate"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:'A "boilerplate" project is one that you can use as a starting point for your own project.'})}),"\n",(0,t.jsx)(i.p,{children:"At its heart, Ignite is a boilerplate. Rather than using a basic template from something like react-native-cli or Expo, Ignite is more full-featured and opinionated. However, it still really customizable -- after all, we have many different types of projects we work on and don't want to be painted into a corner either."}),"\n",(0,t.jsxs)(i.p,{children:["When you ",(0,t.jsx)(i.a,{href:"/ignite-cli/Guide",children:"spin up a new Ignite project"}),", you'll get a project with several folders. Feel free to explore each one and see what's inside."]}),"\n",(0,t.jsx)(i.h2,{id:"explanation-of-the-ignite-folder-structure",children:"Explanation of the Ignite folder structure"}),"\n",(0,t.jsx)(i.p,{children:"A new Ignite boilerplate project's structure looks similar to this:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"your-project\n\u251c\u2500\u2500 .maestro\n\u251c\u2500\u2500 android\n\u251c\u2500\u2500 app\n\u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 devtools\n\u2502\xa0\xa0 \u251c\u2500\u2500 i18n\n\u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u251c\u2500\u2500 navigators\n\u2502\xa0\xa0 \u251c\u2500\u2500 screens\n\u2502\xa0\xa0 \u251c\u2500\u2500 services\n\u2502\xa0\xa0 \u251c\u2500\u2500 theme\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.tsx\n\u251c\u2500\u2500 assets\n\u251c\u2500\u2500 ignite\n\u2502\xa0\xa0 \u2514\u2500\u2500 templates\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u2514\u2500\u2500 withSplashScreen.ts\n\u251c\u2500\u2500 test\n\u2502\xa0\xa0 \u251c\u2500\u2500 i18n.test.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 mockFile.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 setup.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 test-tsconfig.json\n\u251c\u2500\u2500 app.config.ts\n\u251c\u2500\u2500 app.json\n\u251c\u2500\u2500 App.tsx\n\u251c\u2500\u2500 eas.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 README.md\n"})}),"\n",(0,t.jsx)(i.h3,{id:"app-directory",children:"./app directory"}),"\n",(0,t.jsxs)(i.p,{children:["The vast majority of your code will live in the ",(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/",children:"/app folder"}),". This is where you'll spend most of your time."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/components/",children:"components"})})}),"\n",(0,t.jsx)(i.p,{children:"This is where your components will live, the reusable building blocks to create your screens. A handful of built-in components come with Ignite that are adaptable to any custom design system you wish to implement."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/config/",children:"config"})})}),"\n",(0,t.jsx)(i.p,{children:"This contains configuration for your app that might vary depending if you're running in development or production."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/devtools/",children:"devtools"})})}),"\n",(0,t.jsx)(i.p,{children:"This is where setup and configuration of devtools like Reactotron occurs."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/i18n/Internationalization",children:"i18n (Internationalization)"})})}),"\n",(0,t.jsxs)(i.p,{children:["This is where your translations will live if you are using the included ",(0,t.jsx)(i.code,{children:"react-native-i18n"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/models/",children:"models"})})}),"\n",(0,t.jsxs)(i.p,{children:["This is where your app's models will live. Each model has a directory which will contain the ",(0,t.jsx)(i.code,{children:"mobx-state-tree"})," model file, test file, and any other supporting files like actions, types, etc. In addition, a helpers directory contains utility functions such as ",(0,t.jsx)(i.code,{children:"getRootStore"})," to access the root store."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/navigators/Navigation",children:"navigators"})})}),"\n",(0,t.jsxs)(i.p,{children:["This is where your ",(0,t.jsx)(i.code,{children:"react-navigation"})," navigators will live."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/screens/",children:"screens"})})}),"\n",(0,t.jsxs)(i.p,{children:["This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the ",(0,t.jsx)(i.code,{children:".tsx"})," file, along with any assets or other helper files."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/services/",children:"services"})})}),"\n",(0,t.jsx)(i.p,{children:"Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.)."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/theme/Theming",children:"theme"})})}),"\n",(0,t.jsx)(i.p,{children:"Here lives the theme for your application, including spacing, colors, and typography."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For help with adding custom fonts to your application, check out ",(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/theme/typography.ts",children:"Fonts & Typography"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/utils/",children:"utils"})})}),"\n",(0,t.jsx)(i.p,{children:"This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app/app.tsx",children:"app.tsx"})})}),"\n",(0,t.jsx)(i.p,{children:"The main entry point for your app!"}),"\n",(0,t.jsx)(i.h3,{id:"root-directory",children:"Root Directory"}),"\n",(0,t.jsx)(i.h4,{id:"directories",children:"Directories"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/maestro",children:".maestro"})})," - Maestro e2e tests"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/android",children:"android"})})," - Native Android / Android Studio project files for DIY workflows (non-Expo)"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/assets",children:"assets"})})," - icons and images"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/ignite",children:"ignite"})})," - all things Ignite, including generator templates."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/ios",children:"ios"})})," - Native iOS / Xcode project files for DIY workflows (non-Expo)"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/plugins/",children:"plugins"})})," - any custom Expo Config Plugins to be applied during the prebuild process when generating the native code for the project."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/test/",children:"test"})})," - Jest configs and mocks"]}),"\n",(0,t.jsx)(i.h4,{id:"files",children:"Files"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/app.json",children:"app.json/app.config.ts"})})," - configuration files for your app. ",(0,t.jsx)(i.code,{children:"app.json"})," contains the static configuration which will be fed into the dynamic configuration in ",(0,t.jsx)(i.code,{children:"app.config.ts"}),", where Expo builds it's final configuration for the app."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/App.tsx",children:"App.tsx"})})," - entry point to your app. This is where you will find the main App component which renders the rest of the application."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/ignite-cli/boilerplate/eas.json",children:"eas.json"})})," - build configurations for Expo EAS builds"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var t=n(6540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);