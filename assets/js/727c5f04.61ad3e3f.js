"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8411],{2820:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(4848),r=o(8453);const i={sidebar_position:200},s="Getting Started",l={id:"gluegun/getting-started",title:"Getting Started",description:"The fastest way to get started is to use the built-in Gluegun CLI (very meta!) to generate it.",source:"@site/docs/gluegun/getting-started.md",sourceDirName:"gluegun",slug:"/gluegun/getting-started",permalink:"/gluegun/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"Gluegun",previous:{title:"Gluegun",permalink:"/gluegun/"},next:{title:"Runtime",permalink:"/gluegun/runtime"}},c={},d=[{value:"Creating a new Gluegun-powered CLI",id:"creating-a-new-gluegun-powered-cli",level:2},{value:"Linking your CLI so you can access it",id:"linking-your-cli-so-you-can-access-it",level:2},{value:"Creating your first command",id:"creating-your-first-command",level:2},{value:"Creating your first extension",id:"creating-your-first-extension",level:2},{value:"Next steps",id:"next-steps",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"The fastest way to get started is to use the built-in Gluegun CLI (very meta!) to generate it."}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-new-gluegun-powered-cli",children:"Creating a new Gluegun-powered CLI"}),"\n",(0,t.jsx)(n.p,{children:"Gluegun works on macOS, Linux, and Windows 10. First, ensure you have Node installed and that you can access it (minimum version 7.6):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ node --version\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We will also be using ",(0,t.jsx)(n.a,{href:"https://yarnpkg.com/",children:"yarn"})," in this guide rather than ",(0,t.jsx)(n.code,{children:"npm"}),". You can use ",(0,t.jsx)(n.code,{children:"npm"})," if you want."]}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"gluegun"})," globally."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ yarn global add gluegun\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, navigate to the folder you'd like to create your CLI in and generate it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ gluegun new mycli\n"})}),"\n",(0,t.jsx)(n.p,{children:"Gluegun will ask if you want to use TypeScript or modern JavaScript:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"? Which language would you like to use? (Use arrow keys)\n  TypeScript - Gives you a build pipeline out of the box (default)\n  Modern JavaScript - Node 8.2+ and ES2016+ (https://node.green/)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also pass in ",(0,t.jsx)(n.code,{children:"--typescript"})," or ",(0,t.jsx)(n.code,{children:"--javascript"})," (or ",(0,t.jsx)(n.code,{children:"-t"})," or ",(0,t.jsx)(n.code,{children:"-j"})," for short) to bypass the prompt:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ gluegun new mycli -t\n$ gluegun new mycli -j\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: We recommend TypeScript, but you don't have to use it! Gluegun works great with modern JavaScript."})}),"\n",(0,t.jsx)(n.h2,{id:"linking-your-cli-so-you-can-access-it",children:"Linking your CLI so you can access it"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to the new ",(0,t.jsx)(n.code,{children:"mycli"})," folder and run ",(0,t.jsx)(n.code,{children:"yarn link"})," to have it available globally on your command line."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ cd mycli\n$ yarn link\n$ mycli --help\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-your-first-command",children:"Creating your first command"}),"\n",(0,t.jsxs)(n.p,{children:["Your Gluegun-powered CLI isn't very useful without a command! In your CLI, create a new JS file in ",(0,t.jsx)(n.code,{children:"src/commands"})," called ",(0,t.jsx)(n.code,{children:"hello.js"}),". In that file, add this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// src/commands/hello.js\nmodule.exports = {\n  run: async (toolbox) => {\n    toolbox.print.info('Hello, world!')\n  },\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"For TypeScript, it's not much different:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// src/commands/hello.ts\nimport { GluegunToolbox } from 'gluegun'\nmodule.exports = {\n  run: async (toolbox: GluegunToolbox) => {\n    toolbox.print.info('Hello, world!')\n  },\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now run your command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ mycli hello\nHello, world!\n"})}),"\n",(0,t.jsx)(n.p,{children:"Yay!"}),"\n",(0,t.jsx)(n.h2,{id:"creating-your-first-extension",children:"Creating your first extension"}),"\n",(0,t.jsxs)(n.p,{children:["You can add more tools into the ",(0,t.jsx)(n.code,{children:"toolbox"})," for ",(0,t.jsx)(n.em,{children:"all"})," of your commands to use by creating an ",(0,t.jsx)(n.code,{children:"extension"}),". In your ",(0,t.jsx)(n.code,{children:"mycli"})," folder, add a new file in ",(0,t.jsx)(n.code,{children:"src/extensions"})," called ",(0,t.jsx)(n.code,{children:"hello-extension.js"}),". (It doesn't ",(0,t.jsx)(n.em,{children:"have"})," to end in ",(0,t.jsx)(n.code,{children:"-extension"}),", but that's a convention.)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// src/extensions/hello-extension.js\nmodule.exports = async (toolbox) => {\n  toolbox.hello = () => {\n    toolbox.print.info('Hello from an extension!')\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or TypeScript:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// src/extensions/hello-extension.ts\nimport { GluegunToolbox } from 'gluegun'\nmodule.exports = async (toolbox: GluegunToolbox) => {\n  toolbox.hello = () => {\n    toolbox.print.info('Hello from an extension!')\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, in your ",(0,t.jsx)(n.code,{children:"hello"})," command, use that function instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// src/commands/hello.js\nmodule.exports = {\n  run: (toolbox) => {\n    const { hello } = toolbox\n\n    hello()\n  },\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you run the command, this time it'll use the extension's output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ mycli hello\nHello from an extension!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that we sometimes call the ",(0,t.jsx)(n.code,{children:"toolbox"})," the ",(0,t.jsx)(n.code,{children:"context"})," or the ",(0,t.jsx)(n.code,{children:"RunContext"}),". That's just another word for the same thing."]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(n.p,{children:["There are ",(0,t.jsx)(n.em,{children:"many"})," more tools in the toolbox than just ",(0,t.jsx)(n.code,{children:"print.info"}),". You can generate from a template, manipulate files, hit API endpoints via HTTP, access parameters, run system commands, ask for user input, and much more. Explore the ",(0,t.jsx)(n.a,{href:"/gluegun/toolbox-api/",children:"API docs"})," in this folder to learn more or follow a tutorial like ",(0,t.jsx)(n.a,{href:"../tutorials/making-a-movie-cli",children:"Making a Movie CLI"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);