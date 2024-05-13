"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1911],{1452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(4848),s=t(8453);const o={title:"react"},a="Quick Start for React JS",i={id:"reactotron/quick-start/react-js",title:"react",description:"Installing Reactotron.app",source:"@site/docs/reactotron/quick-start/react-js.md",sourceDirName:"reactotron/quick-start",slug:"/reactotron/quick-start/react-js",permalink:"/reactotron/quick-start/react-js",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"react"},sidebar:"Reactotron",previous:{title:"Getting Started",permalink:"/reactotron/quick-start/getting-started"},next:{title:"react-native",permalink:"/reactotron/quick-start/react-native"}},c={},l=[{value:"Installing Reactotron.app",id:"installing-reactotronapp",level:2},{value:"Humble Beginnings",id:"humble-beginnings",level:2},{value:"Installing Reactotron",id:"installing-reactotron",level:2},{value:"Hello World",id:"hello-world",level:2},{value:"Monitor your Redux store state changes",id:"monitor-your-redux-store-state-changes",level:2},{value:"Now What?",id:"now-what",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quick-start-for-react-js",children:"Quick Start for React JS"}),"\n",(0,r.jsx)(n.h2,{id:"installing-reactotronapp",children:"Installing Reactotron.app"}),"\n",(0,r.jsxs)(n.p,{children:["Let\u2019s ",(0,r.jsx)(n.a,{href:"https://github.com/infinitered/reactotron/releases?q=reactotron-app&expanded=true",children:"download the desktop app"})," to start. You can download for Linux, Windows, and Mac."]}),"\n",(0,r.jsx)(n.p,{children:"Unzip & run."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Installing The App",src:t(8033).A+"",width:"690",height:"348"})}),"\n",(0,r.jsx)(n.h2,{id:"humble-beginnings",children:"Humble Beginnings"}),"\n",(0,r.jsx)(n.p,{children:"Did you B.Y.O.App? Skip to the next section."}),"\n",(0,r.jsxs)(n.p,{children:["Let\u2019s use ",(0,r.jsx)(n.a,{href:"https://github.com/facebookincubator/create-react-app",children:"create-react-app"})," to bootstrap a new React JS app because, wow, is it fantastic."]}),"\n",(0,r.jsxs)(n.p,{children:["Download ",(0,r.jsx)(n.code,{children:"create-react-app"})," if you haven't yet:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm i -g create-react-app\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then spin up a brand new React web app."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"create-react-app this-better-work\ncd this-better-work\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-reactotron",children:"Installing Reactotron"}),"\n",(0,r.jsx)(n.p,{children:"Let's install Reactotron as a dev dependency."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm i --save-dev reactotron-react-js\n"})}),"\n",(0,r.jsxs)(n.p,{children:["I like a separate file for initializing. Create ",(0,r.jsx)(n.code,{children:"src/ReactotronConfig.js"})," in your editor of choice and paste this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import Reactotron from "reactotron-react-js"\n\nReactotron.configure() // we can use plugins here -- more on this later\n  .connect() // let\'s connect!\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, we import this on startup in ",(0,r.jsx)(n.code,{children:"src/index.js"})," on line 1:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import "./ReactotronConfig"\n'})}),"\n",(0,r.jsx)(n.p,{children:"At this point, Reactotron is hooked up."}),"\n",(0,r.jsxs)(n.p,{children:["Refresh your web page (or start it up ",(0,r.jsx)(n.code,{children:"npm start"}),") and have a look at Reactotron now. Do you see the ",(0,r.jsx)(n.code,{children:"CONNECTION"})," line? Click that to expand."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"We Have Contact",src:t(1879).A+"",width:"699",height:"379"})}),"\n",(0,r.jsx)(n.p,{children:"Go back to your web page and refresh the web page 5 or 6 times. Now look."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Chatty",src:t(6135).A+"",width:"668",height:"447"})}),"\n",(0,r.jsx)(n.p,{children:"Pretty underwhelming huh?"}),"\n",(0,r.jsx)(n.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,r.jsx)(n.p,{children:"Let's do some classic programming."}),"\n",(0,r.jsxs)(n.p,{children:["Open up ",(0,r.jsx)(n.code,{children:"src/App.js"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"At the top, let's put"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import Reactotron from "reactotron-react-js"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Next, inside the ",(0,r.jsx)(n.code,{children:"render()"})," function, put this as the first line:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Reactotron.log("hello rendering world")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Save that file and refresh your web page if you don't have live reloading."}),"\n",(0,r.jsx)(n.p,{children:"Now Reactotron looks like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Hello 1",src:t(2034).A+"",width:"680",height:"260"})}),"\n",(0,r.jsx)(n.p,{children:"While collapsed, the grey area to the right shows a preview. Click to open."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Hello 2",src:t(6189).A+"",width:"696",height:"291"})}),"\n",(0,r.jsx)(n.p,{children:"Let's change our log statement to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Reactotron.log({\n  numbers: [1, 2, 3],\n  boolean: false,\n  nested: { here: "we go" },\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:"Or this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Reactotron.warn("*glares*")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Or this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Reactotron.error("Now you\'ve done it.")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Or this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'Reactotron.display({\n  name: "KNOCK KNOCK",\n  preview: "Who\'s there?",\n  value: "Orange.",\n})\n\nReactotron.display({\n  name: "ORANGE",\n  preview: "Who?",\n  value: "Orange you glad you don\'t know me in real life?",\n  important: true,\n})\n'})}),"\n",(0,r.jsx)(n.h2,{id:"monitor-your-redux-store-state-changes",children:"Monitor your Redux store state changes"}),"\n",(0,r.jsxs)(n.p,{children:["Hooking up to redux requires some ",(0,r.jsx)(n.a,{href:"/reactotron/plugins/redux",children:"additional set up"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"now-what",children:"Now What?"}),"\n",(0,r.jsxs)(n.p,{children:["Well, at this point, we have a complicated version of ",(0,r.jsx)(n.code,{children:"console.log"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Where Reactotron starts to shine is when you start plugging into ",(0,r.jsx)(n.a,{href:"/reactotron/plugins/redux",children:"Redux"}),", tracking global errors, and watching network requests."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Demo Web App",src:t(7997).A+"",width:"534",height:"825"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Demo Reactotron",src:t(9293).A+"",width:"670",height:"769"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1879:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/first-connect-c8f690185adc723220c3b40580231c22.jpg"},2034:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/hello-1-226eecf84b0ff0fddcfc784627d67a84.jpg"},6189:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/hello-2-badb628f9bf49c6f92ddf54014e6e744.jpg"},8033:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/installing-7904d3888f8c50ebc200ed81fdca9fe5.jpg"},9293:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/react-demo-js-reactotron-4d720fa561be0c3932e0522f59e0b629.jpg"},7997:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/react-demo-js-f0a4c6fd189d43a4df1f314e99ffbe30.jpg"},6135:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/spammy-9c232d26f278257f0ee1b287ba27d935.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);