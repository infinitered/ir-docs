"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:111},i="Generator Templates",p={unversionedId:"ignite-cli/concept/Generator-Templates",id:"ignite-cli/concept/Generator-Templates",title:"Generator Templates",description:"Generator templates are written in ejs, which is a templating language using JavaScript.",source:"@site/docs/ignite-cli/concept/Generator-Templates.md",sourceDirName:"ignite-cli/concept",slug:"/ignite-cli/concept/Generator-Templates",permalink:"/ignite-cli/concept/Generator-Templates",draft:!1,tags:[],version:"current",sidebarPosition:111,frontMatter:{sidebar_position:111},sidebar:"Ignite",previous:{title:"Generators",permalink:"/ignite-cli/concept/Generators"},next:{title:"Why MobX-State-Tree?",permalink:"/ignite-cli/concept/MobX-State-Tree"}},s={},l=[{value:"Folder naming conventions",id:"folder-naming-conventions",level:2},{value:"File naming conventions",id:"file-naming-conventions",level:2},{value:"Props",id:"props",level:2},{value:"Front Matter",id:"front-matter",level:2},{value:"patch",id:"patch",level:3},{value:"patches",id:"patches",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generator-templates"},"Generator Templates"),(0,r.kt)("p",null,"Generator templates are written in ",(0,r.kt)("a",{parentName:"p",href:"https://ejs.co/"},"ejs"),", which is a templating language using JavaScript."),(0,r.kt)("p",null,"You write the template however you want, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"<%= foo %>")," to run and output JavaScript."),(0,r.kt)("p",null,'You can also use control statements like "if" with ',(0,r.kt)("inlineCode",{parentName:"p"},"<% if (condition) { %>Stuff here<% } %>"),"."),(0,r.kt)("h2",{id:"folder-naming-conventions"},"Folder naming conventions"),(0,r.kt)("p",null,"Templates are located in your app's ",(0,r.kt)("inlineCode",{parentName:"p"},"./ignite/templates")," folder, and the name of the folder should match the name of the generator."),(0,r.kt)("p",null,"For example, if you want to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ignite-cli generate header Pizza"),", you'd put the header templates in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./ignite/templates/header/")," folder."),(0,r.kt)("p",null,"Any files in that folder will be copied over & run through the generator with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pizza")," name applied."),(0,r.kt)("h2",{id:"file-naming-conventions"},"File naming conventions"),(0,r.kt)("p",null,"If you use all upper-case ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME")," in your template filenames, that will be replaced by a pascal-case version of the name provided by the person running the generator."),(0,r.kt)("p",null,"It's best to just look at an example:"),(0,r.kt)("p",null,"Let's say you have a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"NAMEScreen.ts"),"."),(0,r.kt)("p",null,"If they run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ignite-cli generate screen Pizza"),", it'll name the file ",(0,r.kt)("inlineCode",{parentName:"p"},"PizzaScreen.ts"),"."),(0,r.kt)("p",null,"If you'd like to customize the filename you can provide a filename option in the frontmatter of the template like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---\nfilename: <%= props.camelCaseName %>.tsx\n---\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"There's a provided ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," object that contains the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'props.skipIndexFile  // boolean, if --skip-index-file is passed it\'s `true`\nprops.filename       // string, the name of the file being generated (e.g. "UserModel.tsx")\nprops.pascalCaseName // string, PascalCase version of the name that is passed in (e.g. "UserModel")\nprops.camelCaseName  // string, camelCase version of the name (e.g. "userModel")\nprops.kebabCaseName  // string, kebab-case version of the name (e.g. "user-model")\nprops.subdirectory   // string, the subdirectory path to the file being generated (e.g. "my/sub/path/")\n')),(0,r.kt)("p",null,"Example of using these in a template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ejs"},"type <%= props.pascalCaseName %>Props = { some: string }\nexport function <%= props.pascalCaseName %>(props: <%= props.pascalCaseName %>Props) {\n  return <Text>{props.some} in a <%= props.pascalCaseName %> component!</Text>\n}\n")),(0,r.kt)("h2",{id:"front-matter"},"Front Matter"),(0,r.kt)("p",null,'"Front matter" is a way to specify meta-data about a template in the template itself. It\'s stripped out of the generated file. You delineate front matter by three dashes (',(0,r.kt)("inlineCode",{parentName:"p"},"---"),") above and below, and it has to be the very first thing in the template."),(0,r.kt)("p",null,"We use this in Ignite to customize the destination of a given template. For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"./ignite/templates/navigator/*")," we could have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\ndestinationDir: app/navigation\n---\nimport { StackNavigator } from "react-navigation"\n\n// ...\n')),(0,r.kt)("p",null,"This would copy files to ",(0,r.kt)("inlineCode",{parentName:"p"},"./app/navigation/*")," instead of the default ",(0,r.kt)("inlineCode",{parentName:"p"},"./app/navigators/*"),"."),(0,r.kt)("p",null,"Other front matter options include:"),(0,r.kt)("h3",{id:"patch"},"patch"),(0,r.kt)("p",null,"This lets you patch another file, such as an index file. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'---\npatch:\n  path: "app/screens/index.ts"\n  append: "export * from \\"./<%= props.kebabCaseName %>/<%= props.kebabCaseName %>-screen\\"\\n"\n  skip: <%= props.skipIndexFile %>\n---\n')),(0,r.kt)("h3",{id:"patches"},"patches"),(0,r.kt)("p",null,"You can patch multiple files with ",(0,r.kt)("inlineCode",{parentName:"p"},"patches"),". It works just the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"patch"),", but allows for multiple."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'---\npatches:\n  - path: "app/models/RootStore.ts"\n    after: "from \\"mobx-state-tree\\"\\n"\n    insert: "import { <%= props.pascalCaseName %>Model } from \\"../<%= props.kebabCaseName %>/<%= props.kebabCaseName %>\\"\\n"\n    skip: <%= !props.kebabCaseName.endsWith(\'store\') %>\n  - path: "app/models/RootStore.ts"\n    after: "types.model(\\"RootStore\\").props({\\n"\n    insert: "  <%= props.camelCaseName %>: types.optional(<%= props.pascalCaseName %>Model, {} as any),\\n"\n    skip: <%= !props.kebabCaseName.endsWith(\'store\') %>\n  - path: "app/models/index.ts"\n    append: "export * from \\"./<%= props.kebabCaseName %>/<%= props.kebabCaseName %>\\"\\n"\n    skip: <%= props.skipIndexFile %>\n---\n')),(0,r.kt)("p",null,"Front matter is very powerful, but not necessarily super intuitive. If you have questions about it, ask in the ",(0,r.kt)("a",{parentName:"p",href:"https://community.infinite.red"},"Ignite Slack community")," or post a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/ignite/discussions"},"Discussion"),"."))}u.isMDXComponent=!0}}]);