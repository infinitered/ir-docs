"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1468],{7352:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(4848),o=t(8453);const r={},i="system",l={id:"gluegun/toolbox-api/system",title:"system",description:"Provides access to shell and OS processes.",source:"@site/docs/gluegun/toolbox-api/system.md",sourceDirName:"gluegun/toolbox-api",slug:"/gluegun/toolbox-api/system",permalink:"/gluegun/toolbox-api/system",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Gluegun",previous:{title:"strings",permalink:"/gluegun/toolbox-api/strings"},next:{title:"template",permalink:"/gluegun/toolbox-api/template"}},c={},d=[{value:"run",id:"run",level:2},{value:"toolbox.system.which",id:"toolboxsystemwhich",level:3},{value:"toolbox.system.open",id:"toolboxsystemopen",level:3},{value:"toolbox.system.startTimer",id:"toolboxsystemstarttimer",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"system",children:"system"}),"\n",(0,n.jsx)(s.p,{children:"Provides access to shell and OS processes."}),"\n",(0,n.jsxs)(s.p,{children:["You can access these tools on the Gluegun toolbox, via ",(0,n.jsx)(s.code,{children:"const { system } = require('gluegun')"}),", or directly via ",(0,n.jsx)(s.code,{children:"const { system } = require('gluegun/system')"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"run",children:"run"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["This is an ",(0,n.jsx)(s.strong,{children:"async"})," function."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Runs a shell command and returns the output as a string."}),"\n",(0,n.jsxs)(s.p,{children:["The first parameter ",(0,n.jsx)(s.code,{children:"commandLine"})," is the shell command to run. It can have pipes! The\nsecond parameter is ",(0,n.jsx)(s.code,{children:"options"}),", object. This is a promise wrapped around node.js ",(0,n.jsx)(s.code,{children:"child-process.exec"}),"\n",(0,n.jsx)(s.a,{href:"https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback",children:"api call"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can also pass ",(0,n.jsx)(s.code,{children:"trim: true"})," inside the options parameter to have the output automatically trim all\nstarting and trailing spaces."]}),"\n",(0,n.jsxs)(s.p,{children:["Should the process fail, an ",(0,n.jsx)(s.code,{children:"error"})," will be thrown with properties such as:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"property"}),(0,n.jsx)(s.th,{children:"type"}),(0,n.jsx)(s.th,{children:"purpose"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"code"}),(0,n.jsx)(s.td,{children:"number"}),(0,n.jsx)(s.td,{children:"the exit code"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cmd"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"the command we asked to run"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stdout"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsxs)(s.td,{children:["any information the process wrote to ",(0,n.jsx)(s.code,{children:"stdout"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stderr"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsxs)(s.td,{children:["any information the process wrote to ",(0,n.jsx)(s.code,{children:"stderr"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"killed"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"if the process was killed or not"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"signal"}),(0,n.jsx)(s.td,{children:"number"}),(0,n.jsx)(s.td,{children:"the signal number used to off the process (if killed)"})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const nodeVersion = toolbox.system.run('node -v', { trim: true })\n"})}),"\n",(0,n.jsx)(s.h3,{id:"toolboxsystemwhich",children:"toolbox.system.which"}),"\n",(0,n.jsx)(s.p,{children:"Returns the full path to a command on your system if located on your path."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const whereIsIt = toolbox.system.which('npm')\n"})}),"\n",(0,n.jsx)(s.h3,{id:"toolboxsystemopen",children:"toolbox.system.open"}),"\n",(0,n.jsx)(s.p,{children:":("}),"\n",(0,n.jsx)(s.h3,{id:"toolboxsystemstarttimer",children:"toolbox.system.startTimer"}),"\n",(0,n.jsxs)(s.p,{children:["Starts a timer for... well... timing stuff. ",(0,n.jsx)(s.code,{children:"startTimer()"})," returns a function. When this is called, the number of milliseconds will be returned."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const timer = toolbox.system.startTimer()\n\n// time passes...\nconsole.log(`that just took ${timer()} ms.`)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Caveat: Due to the event loop scheduler in Node.JS, they don't guarantee millisecond accuracy when invoking async functions. For that reason, expect a up to a 4ms overage."}),"\n",(0,n.jsx)(s.p,{children:"Note that this lag doesn't apply to synchronous code."})]})}function a(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var n=t(6540);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);