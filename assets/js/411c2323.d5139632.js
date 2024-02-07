"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[4738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,m=c["".concat(p,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:38},i="Screen",l={unversionedId:"ignite-cli/boilerplate/app/components/Screen",id:"ignite-cli/boilerplate/app/components/Screen",title:"Screen",description:"This is a component that renders a screen. It is used to wrap your entire screen, and handles scrolling, safe areas insets, and keyboard avoiding behavior.",source:"@site/docs/ignite-cli/boilerplate/app/components/Screen.md",sourceDirName:"ignite-cli/boilerplate/app/components",slug:"/ignite-cli/boilerplate/app/components/Screen",permalink:"/ignite-cli/boilerplate/app/components/Screen",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38},sidebar:"Ignite",previous:{title:"ListView",permalink:"/ignite-cli/boilerplate/app/components/ListView"},next:{title:"Text",permalink:"/ignite-cli/boilerplate/app/components/Text"}},p={},s=[{value:"Props",id:"props",level:2},{value:"<code>children</code>",id:"children",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>contentContainerStyle</code>",id:"contentcontainerstyle",level:3},{value:"<code>safeAreaEdges</code>",id:"safeareaedges",level:3},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>statusBarStyle</code>",id:"statusbarstyle",level:3},{value:"<code>keyboardOffset</code>",id:"keyboardoffset",level:3},{value:"<code>StatusBarProps</code>",id:"statusbarprops",level:3},{value:"<code>KeyboardAvoidingViewProps</code>",id:"keyboardavoidingviewprops",level:3},{value:"<code>preset</code>",id:"preset",level:3},{value:"<code>keyboardShouldPersistTaps</code>",id:"keyboardshouldpersisttaps",level:3},{value:"<code>ScrollViewProps</code>",id:"scrollviewprops",level:3},{value:"<code>scrollEnabledToggleThreshold</code>",id:"scrollenabledtogglethreshold",level:3}],d={toc:s},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"screen"},"Screen"),(0,r.kt)("p",null,"This is a component that renders a screen. It is used to wrap your entire screen, and handles scrolling, ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/handling-safe-area/"},"safe areas insets"),", and keyboard avoiding behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen preset="scroll">{/* ... content here ... */}</Screen>\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"children"},(0,r.kt)("inlineCode",{parentName:"h3"},"children")),(0,r.kt)("p",null,"As the ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," component is a top level wrapper component, it is expected that you will pass in your screen's content as children."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen preset="scroll">{/* ... content here ... */}</Screen>\n')),(0,r.kt)("h3",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h3"},"style")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," prop is an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>")," object that applies to the outer content ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," component. This is useful for applying styles such as ",(0,r.kt)("inlineCode",{parentName:"p"},"margin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"padding"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Screen style={{ padding: 10 }}>{/* ... content here ... */}</Screen>\n")),(0,r.kt)("h3",{id:"contentcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"contentContainerStyle")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contentContainerStyle")," prop is an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>")," object that applies to the inner content ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," component that wraps the ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),". This is useful for applying styles to the innermost component, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"margin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"padding"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Screen contentContainerStyle={{ margin: 10 }}>{/* ... content here ... */}</Screen>\n")),(0,r.kt)("h3",{id:"safeareaedges"},(0,r.kt)("inlineCode",{parentName:"h3"},"safeAreaEdges")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"safeAreaEdges")," prop is an an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"SafeAreaEdges"),' that determines which edges of the screen should be considered safe areas. This is useful for handling the notch on iPhone X and other devices. Usage of this prop depends on how the Screen is used. If you have a Header above the screen, the "top" Edge can be omitted. If you have a TabBar, the "bottom" edge can be omitted. In other cases, a value of ',(0,r.kt)("inlineCode",{parentName:"p"},'["top", "bottom"]')," is recommended. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen safeAreaEdges={["top", "bottom"]}>{/* ... content here ... */}</Screen>\n')),(0,r.kt)("h3",{id:"backgroundcolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor")," prop is an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," that determines the background color of the outer wrapper component. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"colors.background"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen backgroundColor="red">{/* ... content here ... */}</Screen>\n')),(0,r.kt)("h3",{id:"statusbarstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"statusBarStyle")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"statusBarStyle")," prop is a prop that determines the style of the status bar. It can be either ",(0,r.kt)("inlineCode",{parentName:"p"},'"light"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"dark"'),". The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"dark"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen statusBarStyle="light">{/* ... content here ... */}</Screen>\n')),(0,r.kt)("h3",{id:"keyboardoffset"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyboardOffset")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keyboardOffset")," prop is an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," that determines the offset of the keyboard when it is shown. It is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyboardVerticalOffset")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingView"),". The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Screen keyboardOffset={10}>{/* ... content here ... */}</Screen>\n")),(0,r.kt)("h3",{id:"statusbarprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"StatusBarProps")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusBarProps")," prop is an object that is passed as props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-status-bar")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/status-bar/"},(0,r.kt)("inlineCode",{parentName:"a"},"StatusBar"))," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Screen StatusBarProps={{ animated: false }}>{/* ... content here ... */}</Screen>\n")),(0,r.kt)("h3",{id:"keyboardavoidingviewprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"KeyboardAvoidingViewProps")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingViewProps")," prop is an object that is passed as props to the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/keyboardavoidingview"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyboardAvoidingView")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen KeyboardAvoidingViewProps={{ behavior: "padding" }}>{/* ... content here ... */}</Screen>\n')),(0,r.kt)("h3",{id:"preset"},(0,r.kt)("inlineCode",{parentName:"h3"},"preset")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," prop is an optional enum that applies to the outer ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardAvoidingView")," component. The predefined presets with ignite deal with different use cases for scroll behavior and keyboard avoiding behavior. It defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"scroll")," behavior if not set."),(0,r.kt)("p",null,"The predefined presets are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scroll")," - A preset that applies a scroll behavior to the screen. This is useful for forms or other screens which require a keyboard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixed")," - A preset that applies a fixed behavior to the screen. i.e. The screen will not scroll. This is useful if you have a component such as a ",(0,r.kt)("inlineCode",{parentName:"li"},"FlashList")," that has its own scrolling behavior."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auto")," - A preset that applies an automatic behavior to the screen. i.e. The screen will scroll if the content is larger than the screen, but not otherwise.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen preset="scroll">{/* ... content here ... */}</Screen>\n')),(0,r.kt)("h3",{id:"keyboardshouldpersisttaps"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyboardShouldPersistTaps")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keyboardShouldPersistTaps")," optional prop is a enum that determines if the keyboard should persist taps. It defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},'"handled"'),". This only applies for the ",(0,r.kt)("inlineCode",{parentName:"p"},"scroll")," preset, because it is passed into the React Native ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/scrollview.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ScrollView"))," component under its ",(0,r.kt)("inlineCode",{parentName:"p"},"keyboardShouldPersistTaps")," prop."),(0,r.kt)("p",null,"The valid values for this prop are: ",(0,r.kt)("inlineCode",{parentName:"p"},'"handled"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"always"'),",and ",(0,r.kt)("inlineCode",{parentName:"p"},'"never"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen preset="scroll" keyboardShouldPersistTaps="never">\n  {/* ... content here ... */}\n</Screen>\n')),(0,r.kt)("h3",{id:"scrollviewprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"ScrollViewProps")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollViewProps")," prop is an object that is passed as props to the React Native ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/scrollview.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ScrollView"))," component. This only applies for the ",(0,r.kt)("inlineCode",{parentName:"p"},"scroll")," preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen preset="scroll" ScrollViewProps={{ contentContainerStyle: { padding: 10 } }}>\n  {/* ... content here ... */}\n</Screen>\n')),(0,r.kt)("h3",{id:"scrollenabledtogglethreshold"},(0,r.kt)("inlineCode",{parentName:"h3"},"scrollEnabledToggleThreshold")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollEnabledToggleThreshold")," prop is an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," that determines the threshold at which the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollEnabled")," prop of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," is toggled. This only applies for the ",(0,r.kt)("inlineCode",{parentName:"p"},"auto")," preset. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"{ percent: 0.92 }"),". You can pass a point value in lieu of a percentage, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"{ point: 100 }")," will enable scrolling when the scroll view height is less than 100 points larger than the scroll view content height."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Screen preset="scroll" scrollEnabledToggleThreshold={{ percent: 0.95 }}>\n  {/* ... content here ... */}\n</Screen>\n')))}h.isMDXComponent=!0}}]);