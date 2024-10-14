"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[943],{1691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const o={sidebar_position:80},r="Styling Ignite apps",l={id:"ignite-cli/concept/Styling",title:"Styling Ignite apps",description:"Ignite's approach to styling individual components is, like many other things in Ignite, straightforward and direct.",source:"@site/docs/ignite-cli/concept/Styling.md",sourceDirName:"ignite-cli/concept",slug:"/ignite-cli/concept/Styling",permalink:"/ignite-cli/concept/Styling",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"Ignite",previous:{title:"Concepts &amp; Features",permalink:"/ignite-cli/concept/Concepts"},next:{title:"Testing Ignite Apps",permalink:"/ignite-cli/concept/Testing"}},a={},c=[{value:"Sharing Styles via Presets",id:"sharing-styles-via-presets",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"styling-ignite-apps",children:"Styling Ignite apps"}),"\n",(0,s.jsx)(t.p,{children:"Ignite's approach to styling individual components is, like many other things in Ignite, straightforward and direct."}),"\n",(0,s.jsxs)(t.p,{children:["If you're looking to set app-wide styles such as fonts/typography or colors, check out the ",(0,s.jsx)(t.a,{href:"/ignite-cli/boilerplate/app/theme/Theming",children:"Theming"})," documentation."]}),"\n",(0,s.jsxs)(t.p,{children:["We don't use ",(0,s.jsx)(t.code,{children:"StyleSheet.create()"})," as a general rule, as it doesn't provide any real benefits over bare objects and functions."]}),"\n",(0,s.jsxs)(t.p,{children:["We instead use a strategy of bare JS objects and functions that take a theme parameter, colocated with our components (usually below the component in the file), prefixed with ",(0,s.jsx)(t.code,{children:"$"}),", and typed with TypeScript:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import { View, type ViewStyle } from "react-native"\nimport { useAppTheme } from "@/utils/useAppTheme"\n\nconst MyComponent = () => {\n  const { themed } = useAppTheme()\n  return (\n    <View style={themed($container)}>\n      <View style={$plainObjectStyle} />\n    </View>\n  )\n}\n\nconst $container: ThemedStyle<ViewStyle> = (theme) => ({\n  flex: 1,\n  backgroundColor: theme.colors.background,\n  paddingHorizontal: theme.spacing.small,\n})\n\nconst $plainObjectStyle: ViewStyle = {\n  marginBottom: 20,\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We use ",(0,s.jsx)(t.a,{href:"/ignite-cli/boilerplate/app/components/",children:"components with presets"})," to share styles across our whole app."]}),"\n",(0,s.jsxs)(t.p,{children:["With this strategy, you can tell if a variable is a style when it has the ",(0,s.jsx)(t.code,{children:"$"})," prefix. You can also spread in other styles to compose styles:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const $bold: TextStyle = {\n  fontWeight: "bold",\n}\nconst $larger: TextStyle = {\n  fontSize: 22,\n}\nconst $title: TextStyle = {\n  ...$bold,\n  ...$larger,\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"sharing-styles-via-presets",children:"Sharing Styles via Presets"}),"\n",(0,s.jsxs)(t.p,{children:["Most of the ",(0,s.jsx)(t.a,{href:"/ignite-cli/boilerplate/app/components/",children:"components"})," we include with Ignite include a ",(0,s.jsx)(t.code,{children:"preset"})," property:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<View preset="heading" text="My Header" />\n'})}),"\n",(0,s.jsx)(t.p,{children:"Presets are defined in the component file itself, usually something like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'type Presets = "default" | "bold" | "heading" | "subheading"\nconst $presets: Record<Presets, ThemedStyleArray<TextStyle>> = {\n  default: [$baseStyle],\n  bold: [$baseStyle, $fontWeightStyles.bold],\n  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold],\n  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium],\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"These presets are usually composed of other styles, using arrays (which React Native will properly merge)."}),"\n",(0,s.jsx)(t.p,{children:'So, let\'s say we want a button that is a destructive action. We might add a "destructive" preset to the Button component.'}),"\n",(0,s.jsx)(t.p,{children:"The preset might look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const $warning: ThemedStyle<ViewStyle> = (theme) => ({\n  backgroundColor: theme.colors.alert,\n  color: "white",\n  padding: theme.spacing.lg,\n})\n\nconst $viewPresets: Record<Presets, ThemedStyle<ViewStyle>> = {\n  destructive: [$baseViewStyle, $warning],\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can then use it with your Button like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<Button\n  text="Delete"\n  // set the preset here\n  preset="destructive"\n  onPress={() => thisItem.destroy()}\n/>\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);