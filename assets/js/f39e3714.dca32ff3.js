"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[5181],{6618:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(4848),l=i(8453);const t={},o="Ignite CLI",r={id:"ignite-cli/cli/Ignite-CLI",title:"Ignite CLI",description:"Ignite comes with a dynamic CLI that does more than just get you started with developing a new react-native mobile application! Check out the command list below for additional documentation on each.",source:"@site/docs/ignite-cli/cli/Ignite-CLI.md",sourceDirName:"ignite-cli/cli",slug:"/ignite-cli/cli/Ignite-CLI",permalink:"/ignite-cli/cli/Ignite-CLI",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Ignite",previous:{title:"Upgrades",permalink:"/ignite-cli/concept/Upgrades"},next:{title:"Troubleshooting",permalink:"/ignite-cli/cli/Troubleshooting"}},c={},d=[{value:"Commands",id:"commands",level:2},{value:"Cache",id:"cache",level:3},{value:"Subcommands",id:"subcommands",level:4},{value:"Options",id:"options",level:4},{value:"Doctor",id:"doctor",level:3},{value:"Generate",id:"generate",level:3},{value:"Help",id:"help",level:3},{value:"New",id:"new",level:3},{value:"Options",id:"options-1",level:4},{value:"Issue",id:"issue",level:3},{value:"Remove Demo Markup",id:"remove-demo-markup",level:3},{value:"Options",id:"options-2",level:4},{value:"Remove Demo",id:"remove-demo",level:3},{value:"Options",id:"options-3",level:4},{value:"Rename",id:"rename",level:3},{value:"Update",id:"update",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ignite-cli",children:"Ignite CLI"}),"\n",(0,s.jsx)(n.p,{children:"Ignite comes with a dynamic CLI that does more than just get you started with developing a new react-native mobile application! Check out the command list below for additional documentation on each."}),"\n",(0,s.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,s.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli cache"})}),"\n",(0,s.jsxs)(n.li,{children:["Alias: ",(0,s.jsx)(n.code,{children:"npx ignite-cli c"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsxs)(n.a,{href:"#new",children:[(0,s.jsx)(n.code,{children:"new"})," command"]})," has a ",(0,s.jsx)(n.code,{children:"useCache"})," flag that allows you to cache your dependencies to speed up future uses of ",(0,s.jsx)(n.code,{children:"new"}),". By default, this flag is ",(0,s.jsx)(n.code,{children:"false"}),". This command is provided to allow for interacting with the dependency cache file folder."]}),"\n",(0,s.jsx)(n.h4,{id:"subcommands",children:"Subcommands"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npx ignite-cli cache help"})," outputs help command to describe cache subcommands"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npx ignite-cli cache path"})," outputs the path of the cache folder on your system"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npx ignite-cli cache clear"})," deletes the cache folder on your system"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"})," displays the path to the dependency cache"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clear"})," clears the dependency cache"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"doctor",children:"Doctor"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli doctor"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Checks your development environment for dependencies and provides version information. This is especially helpful when reporting issues you're experiencing with Ignite. Below is a sample output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"System\n  platform           darwin\n  arch               arm64\n  cpu                10 cores     Apple M1 Pro\n  directory          ExpoPlist    /Users/irignite/code/ExpoPlist\n\nJavaScript (and globally-installed packages)\n  node                16.14.2      /Users/irignite/.nvm/versions/node/v16.14.2/bin/node\n  npm                 8.5.0        /Users/irignite/.nvm/versions/node/v16.14.2/bin/npm\n    corepack          0.10.0\n    eas-cli           2.5.1\n    expo-cli          6.0.6\n    gatsby-cli        4.21.0\n    ignite-cli        8.3.0\n    npm               8.5.0\n    vercel            28.4.12\n    yarn              1.22.19\n  yarn                1.22.19      /Users/irignite/.nvm/versions/node/v16.14.2/bin/yarn\n    create-expo-app   1.1.2\n  pnpm                -            not installed\n  expo                46.0.16      managed\n\nIgnite\n  ignite-cli         8.3.0        /Users/irignite/.nvm/versions/node/v16.14.2/bin/ignite\n  ignite src         src          /Users/irignite/code/ignite/src\n\nAndroid\n  java               11.0.14.1    /Users/irignite/.asdf/shims/java\n  android home       -            /Users/irignite/Library/Android/sdk\n\niOS\n  xcode              14.0.1\n  cocoapods          1.11.3       /opt/homebrew/bin/pod\n\nTools\n  git                git version 2.37.0 (Apple Git-136)   /usr/bin/git\n"})}),"\n",(0,s.jsx)(n.h3,{id:"generate",children:"Generate"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli generate"})}),"\n",(0,s.jsxs)(n.li,{children:["Alias: ",(0,s.jsx)(n.code,{children:"npx ignite-cli g"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Provides generators to keep your code consistent while saving you time to scaffold new models, components and screens in an automated fashion."}),"\n",(0,s.jsxs)(n.p,{children:["For full documentation on this, head on over to the ",(0,s.jsx)(n.a,{href:"/ignite-cli/concept/Generators",children:"Generators documentation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli help"})}),"\n",(0,s.jsxs)(n.li,{children:["Alias: ",(0,s.jsx)(n.code,{children:"npx ignite-cli h"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Provides this list of commands and a small description of each command in your terminal."}),"\n",(0,s.jsx)(n.h3,{id:"new",children:"New"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli new PizzaApp"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Starts the interactive prompt for generating a new Ignite project. Any options not provided at the time of command execution will be asked. You can accept all the defaults to the options passing in ",(0,s.jsx)(n.code,{children:"--yes"})," and just get to coding!"]}),"\n",(0,s.jsx)(n.h4,{id:"options-1",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--bundle"})," string, provide a custom bundle identifier"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--debug"})," verbose logging throughout the project setup"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--git"})," create a new repository with an initial commit"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--installDeps"})," run the packager install script after project creation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--overwrite"})," overwrite the target directory if it exists"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--targetPath"})," string, specify a target directory where the project should be created"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--removeDemo"})," will remove the boilerplate demo code after project creation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--state"})," string, one of ",(0,s.jsx)(n.code,{children:"mst"})," or ",(0,s.jsx)(n.code,{children:"none"})," to include MobX-State-Tree in project (can only be set to ",(0,s.jsx)(n.code,{children:"none"})," if ",(0,s.jsx)(n.code,{children:"--removeDemo=true"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--useCache"})," flag specifying to use dependency cache for quicker installs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--no-timeout"})," flag to disable the timeout protection (useful for slow internet connections)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--yes"})," accept all prompt defaults"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--workflow"})," string, one of ",(0,s.jsx)(n.code,{children:"cng"})," or ",(0,s.jsx)(n.code,{children:"manual"})," for project initialization"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--experimental"})," comma separated string, indicates experimental features (which may or may not be stable) to turn on during installation. ",(0,s.jsx)(n.strong,{children:"A CNG workflow is require for these flags"})," ",(0,s.jsx)(n.code,{children:"--workflow=cng"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expo-router"})," converts the project to ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/router/introduction/",children:"Expo Router"})," from React Navigation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"new-arch"})," enables ",(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/new-architecture-intro",children:"The New Architecture"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expo-canary"})," uses Expo's highly experimental canary release instead of the la test stable SDK"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expo-beta"})," uses Expo's latest beta SDK available instead of the latest stable SDK"]}),"\n",(0,s.jsxs)(n.li,{children:["Examples: ",(0,s.jsx)(n.code,{children:"--experimental=new-arch"})," or ",(0,s.jsx)(n.code,{children:"--experimental=new-arch,expo-beta"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"issue",children:"Issue"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'npx ignite-cli issue "Mac M1 install trouble"'})}),"\n",(0,s.jsxs)(n.li,{children:["Alias: ",(0,s.jsx)(n.code,{children:"npx ignite-cli i"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Fires up a ",(0,s.jsx)(n.a,{href:"https://github.com/infinitered/ignite/issues/new/",children:"new issue for Ignite on GitHub"})," prefilled with collected ",(0,s.jsx)(n.a,{href:"#doctor",children:"doctor"})," information. Simply describe your steps to help reproduce the issue (and provide any relevant code snippets or repository) and press submit!"]}),"\n",(0,s.jsx)(n.h3,{id:"remove-demo-markup",children:"Remove Demo Markup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli remove-demo-markup"})}),"\n",(0,s.jsxs)(n.li,{children:["Alias: ",(0,s.jsx)(n.code,{children:"npx ignite-cli rdm"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Removes all demo markup (comments only) from the generated boilerplate"}),"\n",(0,s.jsx)(n.h4,{id:"options-2",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--dry-run"})," displays markup which would be removed without doing so"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"remove-demo",children:"Remove Demo"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli remove-demo"})}),"\n",(0,s.jsxs)(n.li,{children:["Alias: ",(0,s.jsx)(n.code,{children:"npx ignite-cli rd"}),", ",(0,s.jsx)(n.code,{children:"npx ignite-cli remove-demos"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Removes all demo code (files, marked code blocks and lines) from the generated boilerplate"}),"\n",(0,s.jsx)(n.h4,{id:"options-3",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--dry-run"})," displays files that would be modified without doing so"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rename",children:"Rename"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli rename"})}),"\n",(0,s.jsxs)(n.li,{children:["Alias: ",(0,s.jsx)(n.code,{children:"npx ignite-cli rn"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Renames your current project to the desired new name. It'll also help switch the bundle identifier."}),"\n",(0,s.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npx ignite-cli update"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Updates the generator templates that currently exist in the project. This can be used to grab the latest versions of the templates should the project have been ignited with a previous version."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);