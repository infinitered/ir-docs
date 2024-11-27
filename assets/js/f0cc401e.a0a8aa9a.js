"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[3609],{8401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(4848),i=n(8453);const r={title:"utils",sidebar_position:60},l="utils folder",o={id:"ignite-cli/boilerplate/app/utils/Utils",title:"utils",description:"Every app needs a junk drawer. Here you can find a library of utilities that are used often within your application. This could includes hooks, helper functions, and various tools.",source:"@site/docs/ignite-cli/boilerplate/app/utils/Utils.md",sourceDirName:"ignite-cli/boilerplate/app/utils",slug:"/ignite-cli/boilerplate/app/utils/",permalink:"/ignite-cli/boilerplate/app/utils/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"utils",sidebar_position:60},sidebar:"Ignite",previous:{title:"typography.ts",permalink:"/ignite-cli/boilerplate/app/theme/typography.ts"},next:{title:"useAppTheme",permalink:"/ignite-cli/boilerplate/app/utils/useAppTheme.tsx"}},a={},c=[{value:"Hooks",id:"hooks",level:2},{value:"useAppTheme",id:"useapptheme",level:3},{value:"useSafeAreaInsetsStyle",id:"usesafeareainsetsstyle",level:3},{value:"useHeader",id:"useheader",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"utils-folder",children:[(0,s.jsx)(t.code,{children:"utils"})," folder"]}),"\n",(0,s.jsx)(t.p,{children:"Every app needs a junk drawer. Here you can find a library of utilities that are used often within your application. This could includes hooks, helper functions, and various tools."}),"\n",(0,s.jsx)(t.h2,{id:"hooks",children:"Hooks"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["We sometimes create a separate ",(0,s.jsx)(t.code,{children:"app/hooks"})," folder just for hooks. This is a matter of preference."]})}),"\n",(0,s.jsx)(t.h3,{id:"useapptheme",children:"useAppTheme"}),"\n",(0,s.jsx)(t.p,{children:"A hook that returns various properties and tools relating to theming your app."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"const { themed, themeContext } = useAppTheme()\n\nconst $themedStyle: ThemedStyle<ViewStyle> = (theme) =({\n  backgroundColor: theme.colors.background\n})\n\n<View style={themed($themedStyle)}>\n  <Text>{themeContext}</Text>\n</View>\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.a,{href:"/ignite-cli/boilerplate/app/utils/useAppTheme.tsx",children:["Full ",(0,s.jsx)(t.code,{children:"useAppTheme"})]})}),"\n",(0,s.jsx)(t.h3,{id:"usesafeareainsetsstyle",children:"useSafeAreaInsetsStyle"}),"\n",(0,s.jsx)(t.p,{children:"A hook can be used to create a safe-area-aware style object that can be passed directly to a View."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const $insetStyle = useSafeAreaInsetsStyle(["top"], "padding")\n\n<View style={$insetStyle} />\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.a,{href:"/ignite-cli/boilerplate/app/utils/useSafeAreaInsetsStyle.ts",children:["Full ",(0,s.jsx)(t.code,{children:"useSafeAreaInsetsStyle"})]})}),"\n",(0,s.jsx)(t.h3,{id:"useheader",children:"useHeader"}),"\n",(0,s.jsx)(t.p,{children:"A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'function AccountScreen() {\n  useHeader({\n    rightTx: "common.logOut",\n    onRightPress: logout,\n  })\n\n  return <Screen />\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.a,{href:"/ignite-cli/boilerplate/app/utils/useHeader.tsx",children:["Full ",(0,s.jsx)(t.code,{children:"useHeader"})]})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);