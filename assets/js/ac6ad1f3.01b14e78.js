"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[816],{5282:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(4848),o=i(8453);const s={sidebar_position:151},r="A Tour of the Ignite CLI Code Base",a={id:"ignite-cli/contributing/Tour-of-Ignite",title:"A Tour of the Ignite CLI Code Base",description:"If you're interested in contributing to Ignite and want to know more about how the code base is set up, this is a great place to start!",source:"@site/docs/ignite-cli/contributing/Tour-of-Ignite.md",sourceDirName:"ignite-cli/contributing",slug:"/ignite-cli/contributing/Tour-of-Ignite",permalink:"/ignite-cli/contributing/Tour-of-Ignite",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:151,frontMatter:{sidebar_position:151},sidebar:"Ignite",previous:{title:"Contributing to Ignite",permalink:"/ignite-cli/contributing/Contributing-To-Ignite"},next:{title:"Releasing Ignite",permalink:"/ignite-cli/contributing/Releasing-Ignite"}},l={},c=[{value:"TypeScript, ESLint, and Prettier",id:"typescript-eslint-and-prettier",level:2},{value:"Documentation",id:"documentation",level:2},{value:"CircleCI and GitHub",id:"circleci-and-github",level:2},{value:"Automatic Releases",id:"automatic-releases",level:2},{value:"Manual Beta Releases",id:"manual-beta-releases",level:2},{value:"Gluegun",id:"gluegun",level:2},{value:"bin",id:"bin",level:2},{value:"src",id:"src",level:2},{value:"src/commands",id:"srccommands",level:4},{value:"src/tools",id:"srctools",level:4},{value:"test",id:"test",level:2},{value:"boilerplate",id:"boilerplate",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"a-tour-of-the-ignite-cli-code-base",children:"A Tour of the Ignite CLI Code Base"}),"\n",(0,n.jsx)(t.p,{children:"If you're interested in contributing to Ignite and want to know more about how the code base is set up, this is a great place to start!"}),"\n",(0,n.jsx)(t.p,{children:"Ignite is the result of over five years and well over 2,000 commits. We've put our blood, sweat, and tears into this boilerplate and given it away for free for many years. It's a great source of pride within Infinite Red and we spend a lot of time maintaining it."}),"\n",(0,n.jsx)(t.p,{children:"Without further ado, let's get into it."}),"\n",(0,n.jsx)(t.h2,{id:"typescript-eslint-and-prettier",children:"TypeScript, ESLint, and Prettier"}),"\n",(0,n.jsxs)(t.p,{children:["We use TypeScript extensively throughout Ignite CLI and Ignite's boilerplate (more on this later). So, in the root folder ",(0,n.jsx)(t.em,{children:"and"})," in the boilerplate folder, you'll find a ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," file that configures how we use TypeScript in the project."]}),"\n",(0,n.jsx)(t.p,{children:"When we build and publish the CLI, we compile the TypeScript source into JavaScript that will run with a reasonably recent version of Node.js on the command line."}),"\n",(0,n.jsxs)(t.p,{children:["We also use ESLint. The configuration for this is in the respective ",(0,n.jsx)(t.code,{children:"package.json"})," files. Wherever possible, we try to keep our configuration in ",(0,n.jsx)(t.code,{children:"package.json"})," rather than creating a new file in the root. ESLint is set up how Infinite Red prefers to write code."]}),"\n",(0,n.jsx)(t.p,{children:"Prettier is also used in this project. You won't find terminal semicolons, generally speaking. You'll be fine, don't panic."}),"\n",(0,n.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"docs"})," folder contains all of our documentation, including this file. They're all written in Markdown for a better/simpler developer authoring experience."]}),"\n",(0,n.jsxs)(t.p,{children:["The docs are rolled up and published to ",(0,n.jsx)(t.a,{href:"https://docs.infinite.red",children:"https://docs.infinite.red"})," by the ",(0,n.jsx)(t.a,{href:"https://github.com/infinitered/ir-docs",children:"ir-docs project"}),". To learn how to see your documentation changes locally before they're published, see ",(0,n.jsx)(t.a,{href:"https://github.com/infinitered/ir-docs?tab=readme-ov-file#testing-docs-locally",children:"the guide in ir-docs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"circleci-and-github",children:"CircleCI and GitHub"}),"\n",(0,n.jsxs)(t.p,{children:["There are a couple folders at the root, ",(0,n.jsx)(t.code,{children:".circleci"})," and ",(0,n.jsx)(t.code,{children:".github"}),". These contain configuration for both services. Feel free to take a look."]}),"\n",(0,n.jsx)(t.h2,{id:"automatic-releases",children:"Automatic Releases"}),"\n",(0,n.jsxs)(t.p,{children:["We use ",(0,n.jsx)(t.code,{children:"semantic-release"}),", an excellent package that allows for automatically releasing new versions of Ignite based on commit messages. You can read more about how Infinite Red uses semantic-release in ",(0,n.jsx)(t.a,{href:"https://github.com/infinitered/open-source/blob/master/Continuous-Deployment-Setup-NPM.md",children:"this document"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"manual-beta-releases",children:"Manual Beta Releases"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to manually release a beta version, ",(0,n.jsx)(t.a,{href:"/ignite-cli/contributing/Releasing-Ignite",children:"the steps are documented here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"gluegun",children:"Gluegun"}),"\n",(0,n.jsxs)(t.p,{children:["Ignite's CLI (",(0,n.jsx)(t.code,{children:"ignite-cli"})," on npm) is powered by ",(0,n.jsx)(t.a,{href:"https://github.com/infinitered/gluegun",children:"Gluegun"}),". Gluegun is another Infinite Red library that makes building a full-featured command line interface (CLI) much easier."]}),"\n",(0,n.jsx)(t.h2,{id:"bin",children:"bin"}),"\n",(0,n.jsxs)(t.p,{children:["This folder contains one file, ",(0,n.jsx)(t.code,{children:"ignite"}),". This file is what is initially run when you run ",(0,n.jsx)(t.code,{children:"npx ignite-cli"}),". It figures out if you're running in production or dev mode and loads the appropriate file from there. It uses ",(0,n.jsx)(t.code,{children:"ts-node"})," for dev mode, which allows you to test changes without having to rebuild your TypeScript every time."]}),"\n",(0,n.jsx)(t.h2,{id:"src",children:"src"}),"\n",(0,n.jsxs)(t.p,{children:["In this folder are a couple folders that Gluegun uses, ",(0,n.jsx)(t.code,{children:"commands"})," and ",(0,n.jsx)(t.code,{children:"tools"}),". There's also a ",(0,n.jsx)(t.code,{children:"cli.ts"})," and ",(0,n.jsx)(t.code,{children:"types.ts"})," file."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"cli.ts"})," is where the whole thing kicks off (called from the ",(0,n.jsx)(t.code,{children:"./bin/ignite"})," JS executable)."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"types.ts"})," holds the project's primary types, and most of the project's source files import their types from this centralized place."]}),"\n",(0,n.jsx)(t.h4,{id:"srccommands",children:"src/commands"}),"\n",(0,n.jsx)(t.p,{children:"This contains the various CLI commands."}),"\n",(0,n.jsxs)(t.p,{children:["For example, ",(0,n.jsx)(t.code,{children:"npx ignite-cli new"})," would run the ",(0,n.jsx)(t.code,{children:"src/commands/new.ts"})," file (",(0,n.jsx)(t.a,{href:"https://github.com/infinitered/ignite/blob/master/src/commands/new.ts",children:"link"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["The code in these files tends to rely heavily on functions contained in ",(0,n.jsx)(t.code,{children:"./src/tools"}),". It acts more as a coordinator between the command-line options that are passed in and then calls out to the appropriate tools to actually, you know, do the thing that the user wants to do. It handles user input and also (for the most part) communicating back to the user what happened."]}),"\n",(0,n.jsx)(t.h4,{id:"srctools",children:"src/tools"}),"\n",(0,n.jsx)(t.p,{children:"This folder contains functionality that is useful for Ignite to spin up new React Native apps and also inspect your environment, validate inputs, and whatnot."}),"\n",(0,n.jsxs)(t.p,{children:["Some of this functionality, such as the ",(0,n.jsx)(t.code,{children:"packager.ts"}),", could probably be moved upstream into Gluegun. If you're reading this, perhaps you could help us with this effort! (Don't forget to update this section when you do!)"]}),"\n",(0,n.jsx)(t.p,{children:"The rest is key functionality that is needed for Ignite CLI to do its job. If you're fixing bugs, chances are you'll be in this folder mucking around."}),"\n",(0,n.jsx)(t.h2,{id:"test",children:"test"}),"\n",(0,n.jsxs)(t.p,{children:["Back in the root, there's a ",(0,n.jsx)(t.code,{children:"test"})," folder. This contains Jest tests for Ignite CLI."]}),"\n",(0,n.jsx)(t.p,{children:"We rely heavily on integration tests, which is why Ignite CLI's test suite is kinda slow. We mainly spin up a new Ignite app (in a temporary location) and then inspect the textual output from the result of the command as well as look at folders and files that it generates to ensure that it's actually doing what we want it to do."}),"\n",(0,n.jsx)(t.p,{children:"We also run the default tests in a generated Ignite app, which further ensures that the CLI is generating a valid Ignite app."}),"\n",(0,n.jsx)(t.h2,{id:"boilerplate",children:"boilerplate"}),"\n",(0,n.jsxs)(t.p,{children:["In the root is another folder called ",(0,n.jsx)(t.code,{children:"boilerplate"}),". This used to be called ",(0,n.jsx)(t.code,{children:"Ignite Bowser"})," and was originally located here: ",(0,n.jsx)(t.a,{href:"https://github.com/infinitered/ignite-bowser",children:"https://github.com/infinitered/ignite-bowser"})," [deprecated]."]}),"\n",(0,n.jsxs)(t.p,{children:["However, we now include the boilerplate in the main CLI for convenience (as of version 6.0). We used to support multiple boilerplates with Ignite CLI, but that was a fairly underutilized feature, so this made sense for maintainability. You can read more here: ",(0,n.jsx)(t.a,{href:"https://shift.infinite.red/introducing-ignite-4-0-flame-1dfc891f9966",children:"https://shift.infinite.red/introducing-ignite-4-0-flame-1dfc891f9966"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Inside the boilerplate is a functioning React Native app! That's right, you can actually ",(0,n.jsx)(t.em,{children:"run"})," the boilerplate app when you clone Ignite down to your machine. Just ",(0,n.jsx)(t.code,{children:"cd"})," into the ",(0,n.jsx)(t.code,{children:"boilerplate"})," folder, run ",(0,n.jsx)(t.code,{children:"yarn"})," and ",(0,n.jsx)(t.code,{children:"npx pod-install"}),", and then ",(0,n.jsx)(t.code,{children:"npx react-native run-ios"})," or ",(0,n.jsx)(t.code,{children:"npx react-native run-android"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This is one of the best changes from the previous system, as you can now work on the boilerplate in realtime and not have to make changes, spin up a new app, test, repeat, which was such a slowwww process before."}),"\n",(0,n.jsxs)(t.p,{children:["We won't go into the boilerplate itself, here. You can instead check out the ",(0,n.jsx)(t.a,{href:"../../boilerplate",children:"Folder Structure"})," documentation."]}),"\n",(0,n.jsx)(t.p,{children:"Happy contributing!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);