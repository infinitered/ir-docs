"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[5047],{9105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);const a={},r="Making a plugin for your Gluegun-powered CLI",o={id:"gluegun/tutorials/making-a-plugin",title:"Making a plugin for your Gluegun-powered CLI",description:"Gluegun is a powerful CLI toolbox, but if you want to know what really sets it apart, it's the plugin system. While Commander and Yeoman and other CLI systems have plugin concepts, with gluegun we treat them as first-class citizens.",source:"@site/docs/gluegun/tutorials/making-a-plugin.md",sourceDirName:"gluegun/tutorials",slug:"/gluegun/tutorials/making-a-plugin",permalink:"/gluegun/tutorials/making-a-plugin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Gluegun",previous:{title:"Making a Movie CLI",permalink:"/gluegun/tutorials/making-a-movie-cli"},next:{title:"Plugins",permalink:"/gluegun/plugins"}},l={},c=[{value:"Step 1: Our CLI",id:"step-1-our-cli",level:2},{value:"Step 2: Create the basic plugin structure",id:"step-2-create-the-basic-plugin-structure",level:2},{value:"Step 3: Create a command",id:"step-3-create-a-command",level:2},{value:"Step 4: Create an extension",id:"step-4-create-an-extension",level:2},{value:"Step 5: Make a new project",id:"step-5-make-a-new-project",level:2},{value:"Step 6: Publish to NPM",id:"step-6-publish-to-npm",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"making-a-plugin-for-your-gluegun-powered-cli",children:"Making a plugin for your Gluegun-powered CLI"}),"\n",(0,s.jsx)(n.p,{children:"Gluegun is a powerful CLI toolbox, but if you want to know what really sets it apart, it's the plugin system. While Commander and Yeoman and other CLI systems have plugin concepts, with gluegun we treat them as first-class citizens."}),"\n",(0,s.jsx)(n.p,{children:"Let's walk through creating a plugin for a CLI. We'll then use this plugin in a project where we're using this CLI."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.em,{children:["Note: if you're experiencing any issues in the tutorial, feel free to let us know in the ",(0,s.jsx)(n.a,{href:"https://community.infinite.red",children:"IR Community Slack"})]}),". We want this to work really smoothly!"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-our-cli",children:"Step 1: Our CLI"}),"\n",(0,s.jsxs)(n.p,{children:["We're building out a CLI that prints out system information, called ",(0,s.jsx)(n.code,{children:"intern"}),". Let's spin this up:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ yarn global add gluegun\n$ gluegun new intern --javascript\n$ cd intern\n$ yarn\n$ yarn link\n$ cd ..\n$ intern help\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see the baked-in help for our new CLI. Yay!"}),"\n",(0,s.jsx)(n.h2,{id:"step-2-create-the-basic-plugin-structure",children:"Step 2: Create the basic plugin structure"}),"\n",(0,s.jsxs)(n.p,{children:["Let's create a plugin that we would use to show system information for macOS. It'll be called ",(0,s.jsx)(n.code,{children:"intern-macos"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["NOTE: This is the naming scheme we recommend for gluegun-powered plugins -- put the name of your CLI, a dash, and then the name of your plugin. Examples: ",(0,s.jsx)(n.code,{children:"ignite-i18n"}),", ",(0,s.jsx)(n.code,{children:"solidarity-react-native"}),". We support this naming scheme right out of the box, in fact!"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mkdir intern-macos\n$ cd intern-macos\n$ yarn init\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this point, go through yarn's init. It doesn't matter too much what you put here. I just hit enter on everything."}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, add a ",(0,s.jsx)(n.code,{children:"commands"})," and an ",(0,s.jsx)(n.code,{children:"extensions"})," folder. Note that with new versions of Gluegun, you can also use a build pipeline and include your commands and extensions in ",(0,s.jsx)(n.code,{children:"build/commands"})," and ",(0,s.jsx)(n.code,{children:"build/extensions"})," and Gluegun will still find them."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mkdir commands extensions\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-create-a-command",children:"Step 3: Create a command"}),"\n",(0,s.jsxs)(n.p,{children:["We're going to make a command that we'll invoke with ",(0,s.jsx)(n.code,{children:"intern macos"})," which will display the version of macOS we're currently running."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ touch commands/macos.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open this file, and put the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  name: 'macos',\n  alias: 'osx',\n  run: async ({ system, print }) => {\n    const osInfo = await system.run(`defaults read loginwindow SystemVersionStampAsString`)\n    print.info(osInfo)\n  },\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-4-create-an-extension",children:"Step 4: Create an extension"}),"\n",(0,s.jsx)(n.p,{children:"While the above is a simple command, if the logic started getting more complex, we'd probably want to move it into an extension. Let's do that here."}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"extensions"}),", create a new file called ",(0,s.jsx)(n.code,{children:"macos-extension.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ touch extensions/macos-extension.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Edit this file like so:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = (toolbox) => {\n  toolbox.internMac = async () => {\n    return await toolbox.system.run(`defaults read loginwindow SystemVersionStampAsString`)\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This adds a new property to gluegun's awesome ",(0,s.jsx)(n.code,{children:"toolbox"})," object, called ",(0,s.jsx)(n.code,{children:"internMac"}),", which is a function that returns the info we need. Since all extensions are loaded automatically, it's available in our command, so let's use it in ",(0,s.jsx)(n.code,{children:"commands/macos.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  name: 'macos',\n  alias: 'osx',\n  run: async ({ print, internMac }) => print.info(await internMac()),\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-5-make-a-new-project",children:"Step 5: Make a new project"}),"\n",(0,s.jsx)(n.p,{children:"Let's try this out!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ..\nmkdir my-project\ncd my-project\nyarn init\nyarn add ../intern-macos\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that we're referencing the plugin from a folder, because we haven't published it to NPM yet. If we have, we'd use ",(0,s.jsx)(n.code,{children:"yarn add intern-macos"})," like you'd expect."]}),"\n",(0,s.jsx)(n.p,{children:"Now let's kick off our plugin command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ intern macos\n10.13.1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's try the alias:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ intern macos osx\n10.13.1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Yay!"}),"\n",(0,s.jsx)(n.h2,{id:"step-6-publish-to-npm",children:"Step 6: Publish to NPM"}),"\n",(0,s.jsxs)(n.p,{children:["You can learn how to publish an NPM package here: ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/getting-started/publishing-npm-packages",children:"https://docs.npmjs.com/getting-started/publishing-npm-packages"})]}),"\n",(0,s.jsx)(n.p,{children:"Once it's published, you can add your new plugin to your project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ yarn add intern-macos\n"})}),"\n",(0,s.jsx)(n.p,{children:"After that, the new command should be available on your project like we explored above."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Still have questions? Let us know in the ",(0,s.jsx)(n.a,{href:"https://community.infinite.red",children:"IR Community Slack"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["If you'd like to learn more about what plugins are, check out the ",(0,s.jsx)(n.a,{href:"/gluegun/plugins",children:"plugins documentation"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);