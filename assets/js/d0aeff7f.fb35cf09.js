"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},r="Getting Started Guide",l={unversionedId:"ignite-cli/Guide",id:"ignite-cli/Guide",title:"Getting Started Guide",description:"What is Ignite?",source:"@site/docs/ignite-cli/Guide.md",sourceDirName:"ignite-cli",slug:"/ignite-cli/Guide",permalink:"/ignite-cli/Guide",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"Ignite",previous:{title:"Ignite - the battle-tested React Native boilerplate",permalink:"/ignite-cli/"},next:{title:"Ignite's Boilerplate",permalink:"/ignite-cli/boilerplate/"}},s={},p=[{value:"What is Ignite?",id:"what-is-ignite",level:2},{value:"Ignite CLI",id:"ignite-cli",level:3},{value:"Ignite Boilerplate",id:"ignite-boilerplate",level:3},{value:"Where do I start?",id:"where-do-i-start",level:2},{value:"Navigation",id:"navigation",level:3},{value:"Components",id:"components",level:3},{value:"Testing",id:"testing",level:3},{value:"Styling",id:"styling",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-guide"},"Getting Started Guide"),(0,a.kt)("h2",{id:"what-is-ignite"},"What is Ignite?"),(0,a.kt)("p",null,'Ignite is best described as "',(0,a.kt)("a",{parentName:"p",href:"https://infinite.red"},"Infinite Red"),"'s favorite way to build React Native apps\". It's a CLI and a boilerplate React Native project dating back to the early days of React Native (2016), as well as some command-line generators. It's also a community of like-minded developers who like the way we do things!"),(0,a.kt)("p",null,"In short -- if you use Ignite to start your next React Native project, you're using a battle-tested, familiar stack."),(0,a.kt)("h3",{id:"ignite-cli"},"Ignite CLI"),(0,a.kt)("p",null,"In order to start a new Ignite project, you can use the CLI. No need to install it globally as it works great with ",(0,a.kt)("inlineCode",{parentName:"p"},"npx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx ignite-cli@latest new PizzaApp\n")),(0,a.kt)("p",null,"It'll walk you through several questions."),(0,a.kt)("p",null,"Once it's up and running, you can use the Ignite CLI to ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/concept/Generators"},"generate")," components, screens, MST models, and more."),(0,a.kt)("p",null,"Running into errors? have a look at ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/cli/Troubleshooting"},"Troubleshooting")),(0,a.kt)("h3",{id:"ignite-boilerplate"},"Ignite Boilerplate"),(0,a.kt)("p",null,"Your new Ignite project (whether you start with Expo or not) comes with a full stack of useful libraries, pre-set up for you so you can start coding."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React Native"),(0,a.kt)("li",{parentName:"ul"},"React Navigation"),(0,a.kt)("li",{parentName:"ul"},"MobX-State-Tree ",(0,a.kt)("a",{parentName:"li",href:"/ignite-cli/concept/MobX-State-Tree"},"(Why not Redux?)")),(0,a.kt)("li",{parentName:"ul"},"MobX-React-Lite"),(0,a.kt)("li",{parentName:"ul"},"TypeScript"),(0,a.kt)("li",{parentName:"ul"},"AsyncStorage (integrated with MST for restoring state)"),(0,a.kt)("li",{parentName:"ul"},"apisauce (to talk to REST servers)"),(0,a.kt)("li",{parentName:"ul"},"Reactotron-ready (and pre-integrated with MST)"),(0,a.kt)("li",{parentName:"ul"},"Supports Expo (and Expo web) out of the box"),(0,a.kt)("li",{parentName:"ul"},"About a dozen prebuilt ",(0,a.kt)("a",{parentName:"li",href:"/ignite-cli/boilerplate/app/components/"},"components")," to build out your UI with"),(0,a.kt)("li",{parentName:"ul"},"And more!")),(0,a.kt)("h2",{id:"where-do-i-start"},"Where do I start?"),(0,a.kt)("p",null,"First, spin up the app and make sure you can see the initial screen. If you have any issues, please report them."),(0,a.kt)("p",null,"Once it's running, you'll want to get familiarized with the following concepts:"),(0,a.kt)("h3",{id:"navigation"},"Navigation"),(0,a.kt)("p",null,"We use React Navigation v6 in the current version of Ignite. You'll find any navigators in ",(0,a.kt)("inlineCode",{parentName:"p"},"./app/navigators"),", with the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppNavigator.tsx")," being the primary one."),(0,a.kt)("p",null,"There's also a ",(0,a.kt)("inlineCode",{parentName:"p"},"navigationUtilities.ts")," file which provides some utility functions we find useful in building apps, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"getActiveRouteName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useBackButtonHandler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigationPersistence"),"."),(0,a.kt)("p",null,"Learn more in our ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/navigators/Navigation"},"Navigation")," documentation."),(0,a.kt)("h3",{id:"components"},"Components"),(0,a.kt)("p",null,"Ignite comes with some prebuilt, flexible, and customizable components. Unlike most component libraries, it's not built to drop in out of the box, but rather with custom design in mind (you do have a nice, custom design, don't you?)"),(0,a.kt)("p",null,"Ignite works fine with other component libraries, but the built-in component system works the best for custom-designed apps."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/components/"},"Components")," documentation."),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Ignite is pre-configured to use Jest for unit tests."),(0,a.kt)("p",null,"Ignite includes samples of UI end-to-end tests using ",(0,a.kt)("a",{parentName:"p",href:"https://maestro.mobile.dev/"},"Maestro"),". See our ",(0,a.kt)("a",{parentName:"p",href:"https://ignitecookbook.com/docs/recipes/MaestroSetup"},"Ignite Cookbook recipe")," for setup and walkthrough of the test samples or check out Maestro's docs on ",(0,a.kt)("a",{parentName:"p",href:"https://maestro.mobile.dev/getting-started/installing-maestro"},"Installing Maestro")," to run the flows."),(0,a.kt)("p",null,"You can learn more about why we chose these tests and how to use them in the ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/concept/Testing"},"Testing")," docs."),(0,a.kt)("h3",{id:"styling"},"Styling"),(0,a.kt)("p",null,"Ignite's approach to styling is, like many other things in Ignite, straightforward and blunt."),(0,a.kt)("p",null,"We don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"StyleSheet.create()")," as a general rule, as it doesn't provide any real benefits over bare objects."),(0,a.kt)("p",null,"We instead use a strategy of constants, colocated with our components, camelCase and prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"$"),", and typed with TypeScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { View, ViewStyle } from "react-native"\nimport { palette } from "../theme"\n\nconst $container: ViewStyle = {\n  flex: 1,\n  backgroundColor: palette.bgColor,\n}\n\nconst MyComponent = () => {\n  return <View style={$container}>...</View>\n}\n')),(0,a.kt)("p",null,"Very often, we use ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/components/"},"components with presets")," to share styles across our whole app."),(0,a.kt)("p",null,"Read more about styling in the ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/concept/Styling"},"Styling")," docs."))}d.isMDXComponent=!0}}]);