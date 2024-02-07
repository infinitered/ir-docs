"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[9104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[h]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={title:"typeography.ts"},i="Fonts & Typography",p={unversionedId:"ignite-cli/boilerplate/app/theme/typography.ts",id:"ignite-cli/boilerplate/app/theme/typography.ts",title:"typeography.ts",description:"Fonts are defined in app/theme/typography.ts. We use a similar approach to colors, defining a set of fonts and then using those fonts to define semantic font names to be used throughout the app. This allows us to have a consistent font usage across the app, and also allows us to change the fonts easily.",source:"@site/docs/ignite-cli/boilerplate/app/theme/typography.ts.md",sourceDirName:"ignite-cli/boilerplate/app/theme",slug:"/ignite-cli/boilerplate/app/theme/typography.ts",permalink:"/ignite-cli/boilerplate/app/theme/typography.ts",draft:!1,tags:[],version:"current",frontMatter:{title:"typeography.ts"},sidebar:"Ignite",previous:{title:"spacing.ts",permalink:"/ignite-cli/boilerplate/app/theme/spacing.ts"},next:{title:"utils",permalink:"/ignite-cli/boilerplate/app/utils/"}},s={},l=[{value:"Fonts",id:"fonts",level:2},{value:"Typography",id:"typography",level:2}],c={toc:l},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fonts--typography"},"Fonts & Typography"),(0,a.kt)("p",null,"Fonts are defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/theme/typography.ts"),". We use a similar approach to ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/theme/colors.ts"},"colors"),", defining a set of fonts and then using those fonts to define semantic font names to be used throughout the app. This allows us to have a consistent font usage across the app, and also allows us to change the fonts easily."),(0,a.kt)("h2",{id:"fonts"},"Fonts"),(0,a.kt)("p",null,"We define the fonts used in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/theme/typography.ts"),". The custom fonts are loaded using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFonts")," hook from ",(0,a.kt)("a",{parentName:"p",href:"https://docs.expo.dev/guides/using-custom-fonts/"},(0,a.kt)("inlineCode",{parentName:"a"},"expo-fonts"))," to load the fonts."),(0,a.kt)("p",null,"To add additional custom fonts to your project, obtain the proper OTF/TTF file(s) or install the desired Google Font package. Make the necessary additions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"customFontsToLoad")," object in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/theme/typography.ts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fonts")," object to reference the font family in the typography theming object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'export const customFontsToLoad = {\n  spaceGroteskLight,\n  spaceGroteskRegular,\n  spaceGroteskMedium,\n  spaceGroteskSemiBold,\n  spaceGroteskBold,\n  myCustomFont: require("./assets/fonts/custom-font.otf"),\n}\n\nconst fonts = {\n  // ...\n  myCustomFont: {\n    normal: "myCustomFont",\n  },\n}\n')),(0,a.kt)("p",null,"Keep in mind that when utilizing custom fonts, it is a better user experience to wait on rendering anything within the app until the fonts are loaded (this will prevent any text from changing in front of the user's eyes). This functionality is baked into Ignite for you! Check out ",(0,a.kt)("inlineCode",{parentName:"p"},"app/app.tsx")," to see it in action."),(0,a.kt)("h2",{id:"typography"},"Typography"),(0,a.kt)("p",null,"Since we use the ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/components/Text"},(0,a.kt)("inlineCode",{parentName:"a"},"Text"))," component to encapsulate almost all text within an ignite app, the semantic names are essentially presets. As with all presets, they should only be created where there's a consistent pattern of usage across the app. To do this you'd add a new preset to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component with the associated styles. For one-off cases, it's recommended to use the ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/components/Text#size"},(0,a.kt)("inlineCode",{parentName:"a"},"size"))," and ",(0,a.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/app/components/Text#weight"},(0,a.kt)("inlineCode",{parentName:"a"},"weight"))," props on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component."))}u.isMDXComponent=!0}}]);