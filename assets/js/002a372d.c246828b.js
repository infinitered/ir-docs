"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8680],{7791:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(4848),t=i(8453);const o={sidebar_position:110},s="Generators",a={id:"ignite-cli/concept/Generators",title:"Generators",description:"The true gem of Ignite. When you spin up a new app with Ignite CLI, we copy in several generator templates into ./ignite/templates/*. Generators help you scaffold your app very quickly, be it for a proof-of-concept, a demo, or a production app. Generators are there to save you time, keep your code consistent, and help you with the basic structure of your app.",source:"@site/docs/ignite-cli/concept/Generators.md",sourceDirName:"ignite-cli/concept",slug:"/ignite-cli/concept/Generators",permalink:"/ignite-cli/concept/Generators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"Ignite",previous:{title:"Testing Ignite Apps",permalink:"/ignite-cli/concept/Testing"},next:{title:"Generator Templates",permalink:"/ignite-cli/concept/Generator-Templates"}},l={},c=[{value:"Built-in generators",id:"built-in-generators",level:2},{value:"Component generator",id:"component-generator",level:3},{value:"Screen generator",id:"screen-generator",level:3},{value:"Model generator",id:"model-generator",level:3},{value:"Navigator generator",id:"navigator-generator",level:3},{value:"App Icon generator",id:"app-icon-generator",level:3},{value:"Splash Screen generator",id:"splash-screen-generator",level:3},{value:"Customizing generators",id:"customizing-generators",level:2},{value:"Making your own generators",id:"making-your-own-generators",level:2},{value:"Updating generators",id:"updating-generators",level:2},{value:"A Note About Windows",id:"a-note-about-windows",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"generators",children:"Generators"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"The true gem of Ignite."})," When you spin up a new app with Ignite CLI, we copy in several generator templates into ",(0,r.jsx)(n.code,{children:"./ignite/templates/*"}),". Generators help you scaffold your app very quickly, be it for a proof-of-concept, a demo, or a production app. Generators are there to save you time, keep your code consistent, and help you with the basic structure of your app."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx ignite-cli generate --list\n"})}),"\n",(0,r.jsx)(n.p,{children:"...will give you information on what generators are present."}),"\n",(0,r.jsx)(n.h2,{id:"built-in-generators",children:"Built-in generators"}),"\n",(0,r.jsx)(n.h3,{id:"component-generator",children:"Component generator"}),"\n",(0,r.jsxs)(n.p,{children:["This is the generator you will be using most often. They come pre-wrapped with mobx-react-lite's ",(0,r.jsx)(n.code,{children:"observer"})," function, which you'll need to trigger re-renders if any MobX-State-Tree properties that are being used in this component change."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx ignite-cli generate component MyAwesomeButton\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creates the component/function"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"screen-generator",children:"Screen generator"}),"\n",(0,r.jsxs)(n.p,{children:['Generates a "hooks enabled" screen that is also pre-wrapped with mobx-react-lite\'s ',(0,r.jsx)(n.code,{children:"observer"})," function, making it automatically re-render anytime a relevant MST property changes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx ignite-cli generate screen Settings\n"})}),"\n",(0,r.jsx)(n.h3,{id:"model-generator",children:"Model generator"}),"\n",(0,r.jsx)(n.p,{children:"Creates a Mobx-State-Tree model."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx ignite-cli generate model Pizza\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creates the model"}),"\n",(0,r.jsx)(n.li,{children:"Creates a unit test file"}),"\n",(0,r.jsxs)(n.li,{children:["Appends export to ",(0,r.jsx)(n.code,{children:"models/index.ts"})," unless you pass ",(0,r.jsx)(n.code,{children:"--skip-index-file"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"navigator-generator",children:"Navigator generator"}),"\n",(0,r.jsxs)(n.p,{children:["Creates a React Navigation navigator in the ",(0,r.jsx)(n.code,{children:"app/navigators"})," folder."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx ignite-cli generate navigator OrderPizza\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can learn more about navigators ",(0,r.jsx)(n.a,{href:"/ignite-cli/boilerplate/app/navigators/Navigation",children:"in the Navigation docs"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"app-icon-generator",children:"App Icon generator"}),"\n",(0,r.jsx)(n.p,{children:"App icons are tricky - there are many different shapes and sizes, and many different configuration files and locations to update. So we include this generator to make it much easier on you!"}),"\n",(0,r.jsxs)(n.p,{children:['This is a special kind of generator - "special" in that it modifies the native project folders with resized and transformed input image files found in the generator\'s template folder. Also, it only accepts predefined options for the second parameter: one of ',(0,r.jsx)(n.code,{children:"ios"}),", ",(0,r.jsx)(n.code,{children:"android"}),", ",(0,r.jsx)(n.code,{children:"expo"})," or ",(0,r.jsx)(n.code,{children:"all"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following files will be found in your templates folder (",(0,r.jsx)(n.code,{children:"ignite/templates/app-icon"}),") which can be customized:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"android-adaptive-background.png"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The generator will use this file to create all required adaptive launcher-icon background layers for Android 8.0 and above."}),"\n",(0,r.jsx)(n.li,{children:"Updates same directories as the legacy icon."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"android-adaptive-foreground.png"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The generator will use this file to create all required adaptive launcher-icon foreground layers for Android 8.0 and above."}),"\n",(0,r.jsx)(n.li,{children:"Updates same directories as the legacy icon."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"android-legacy.png"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The generator will use this file to create all required legacy launcher-icons for Android 7.1 and below."}),"\n",(0,r.jsx)(n.li,{children:"Automatically transforms the icon to add necessary padding and radius. Note, when creating your custom input file, do not include the padding or radius."}),"\n",(0,r.jsxs)(n.li,{children:["(vanilla) Updates ",(0,r.jsx)(n.code,{children:"./android/app/src/main/res/"})," including the ",(0,r.jsx)(n.code,{children:"mipmap-anydpi-v26/ic_launcher.xml"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["(expo) Updates ",(0,r.jsx)(n.code,{children:"./assets/images/"})," including the root file ",(0,r.jsx)(n.code,{children:"./app.json"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ios-universal.png"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The generator will use this file to create all required app-icons for iOS."}),"\n",(0,r.jsxs)(n.li,{children:["(vanilla) Updates ",(0,r.jsx)(n.code,{children:"./ios/**/Images.xcassets/AppIcon.appiconset/"})," including ",(0,r.jsx)(n.code,{children:"Content.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["(expo) Updates ",(0,r.jsx)(n.code,{children:"./assets/images/"})," including the root file ",(0,r.jsx)(n.code,{children:"./app.json"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When updating the template files, please note that names must stay the same as well as the size (1024x1024px). A Sketch template file can be ",(0,r.jsx)(n.a,{href:"https://github.com/infinitered/ignite/files/8576614/ignite-app-icon-template.zip",children:"found here"})," - just make your changes, hide the grids, then click File -> Export."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx ignite-cli generate app-icon ios\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, the generator will exit if the input-files in your templates folder match signatures with those of the default Ignite app-icons - this is done to encourage you to make actual changes to the icons before generating. However, if you want to override your application's app-icons with those of Ignite's, you can first reset your app-icon templates folder with ",(0,r.jsx)(n.code,{children:"npx ignite-cli g app-icon --update"})," and then regenerate the app-icons with the ",(0,r.jsx)(n.code,{children:"--skip-source-equality-validation"})," flag."]}),"\n",(0,r.jsx)(n.h3,{id:"splash-screen-generator",children:"Splash Screen generator"}),"\n",(0,r.jsx)(n.p,{children:"Similar to app/launcher icons, the splash-screen is somewhat tricky to configure and manage due to platform (and OS version) differences. Therefore, splash-screens come preconfigured in the latest versions of Ignite boilerplate and a handy generator is provided to aid with customization."}),"\n",(0,r.jsxs)(n.p,{children:["Unlike the app/launcher generator however, only a single input file is needed. This file, called ",(0,r.jsx)(n.code,{children:"logo.png"}),", can be found and customized in the following templates folder: ",(0,r.jsx)(n.code,{children:"ignite/templates/splash-screen"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The generator requires a single parameter for the splash-screen's background color (in hex format)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'npx ignite-cli generate splash-screen FF0000\n// or\nnpx ignite-cli generate splash-screen "#FF0000"\n// or\nnpx ignite-cli generate splash-screen fff\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The generator will modify the ",(0,r.jsx)(n.code,{children:"./assets/images/"})," and attempt to update ",(0,r.jsx)(n.code,{children:"./app.json"}),". However, if your project is configured to use ",(0,r.jsx)(n.code,{children:"app.config.js"})," or ",(0,r.jsx)(n.code,{children:"app.config.ts"}),", the config changes will be output in the console for you to make them manually. You can read more about Expo's dynamic configuration ",(0,r.jsx)(n.a,{href:"https://docs.expo.dev/workflow/configuration/#dynamic-configuration-with-appconfigjs",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Logo size transformations are predetermined based on platform. The defaults are meant to work in ",(0,r.jsx)(n.em,{children:"most"})," cases. However, you can adjust the logo transformation size according to your needs by using flags:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx ignite-cli generate splash-screen FF0000 --ios-size=150 --android-size=180\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A few notes about sizes. iOS size has no upper limit, so be careful with the value. Android has an upper limit of ",(0,r.jsx)(n.code,{children:"288"})," as defined in ",(0,r.jsx)(n.a,{href:"https://developer.android.com/guide/topics/ui/splash-screen#splash_screen_dimensions",children:"Android docs"}),". For Expo (both Android and iOS), custom sizes will be observed; however, due to Expo's config requirements, the splash-screen assets are generated with padding and attempt to fill the screen."]}),"\n",(0,r.jsxs)(n.p,{children:["Lastly, the splash-screen generator will exit if your input file has not been modified. The same source equality check, as the one on the app-icon generator, will encourage you to make customizations before using the generator (see the ",(0,r.jsx)(n.code,{children:"--skip-source-equality-validation"})," section above)."]}),"\n",(0,r.jsx)(n.h2,{id:"customizing-generators",children:"Customizing generators"}),"\n",(0,r.jsxs)(n.p,{children:["You should feel free to make the provided templates your own! Just update the files in the ",(0,r.jsx)(n.code,{children:"./ignite/templates/*"})," folders, and any generated files will then use your updated files. Read more in the ",(0,r.jsx)(n.a,{href:"/ignite-cli/concept/Generator-Templates",children:"Generator Templates"})," documentation."]}),"\n",(0,r.jsx)(n.h2,{id:"making-your-own-generators",children:"Making your own generators"}),"\n",(0,r.jsxs)(n.p,{children:["Your generators live in your app, in ",(0,r.jsx)(n.code,{children:"./ignite/templates/*"}),". To make a new generator, go look at the ones that are there when you start your app. You'll see that they have ",(0,r.jsx)(n.code,{children:"*.ejs"})," files (which get interpreted when you generate them)."]}),"\n",(0,r.jsxs)(n.p,{children:["Read more about making your own generators in the ",(0,r.jsx)(n.a,{href:"/ignite-cli/concept/Generator-Templates",children:"Generator Templates"})," documentation."]}),"\n",(0,r.jsx)(n.h2,{id:"updating-generators",children:"Updating generators"}),"\n",(0,r.jsx)(n.p,{children:"You may want to update your generators to the latest version of Ignite."}),"\n",(0,r.jsxs)(n.p,{children:["Just run ",(0,r.jsx)(n.code,{children:"npx ignite-cli update <type>"})," or ",(0,r.jsx)(n.code,{children:"npx ignite-cli update --all"})," from the root folder of your project to copy over the latest generators from Ignite to your project."]}),"\n",(0,r.jsx)(n.p,{children:"\u26a0\ufe0f Note that this will remove any customizations you've made, so make sure to make a commit first so you can roll it back!"}),"\n",(0,r.jsx)(n.h2,{id:"a-note-about-windows",children:"A Note About Windows"}),"\n",(0,r.jsxs)(n.p,{children:["If you are noticing upon using the generator for a source file (such as a screen or model) that frontmatter is not removed from the newly created file, it could be that the End of Line Sequence is misconfigured. Ignite tries to take care of this on its own, but sometimes your machine will not have a proper CLI utility such as ",(0,r.jsx)(n.code,{children:"unix2dos"})," installed (this usually comes with Git)."]}),"\n",(0,r.jsxs)(n.p,{children:["In this case, you can open VS Code (or another IDE) and convert the EOL characters for all ",(0,r.jsx)(n.code,{children:"ejs"})," files in the ",(0,r.jsx)(n.code,{children:"ignite/templates"})," directory. Then run the generator command again and it should create the new files properly."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(6540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);