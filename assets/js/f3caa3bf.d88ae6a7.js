"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7554],{7220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),a=n(8453);const o={},s=void 0,r={id:"ignite-cli/boilerplate/app/navigators/navigationUtilities.ts",title:"navigationUtilities.ts",description:"navigationUtilities.ts",source:"@site/docs/ignite-cli/boilerplate/app/navigators/navigationUtilities.ts.md",sourceDirName:"ignite-cli/boilerplate/app/navigators",slug:"/ignite-cli/boilerplate/app/navigators/navigationUtilities.ts",permalink:"/ignite-cli/boilerplate/app/navigators/navigationUtilities.ts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Ignite",previous:{title:"AppNavigator.tsx",permalink:"/ignite-cli/boilerplate/app/navigators/AppNavigator.tsx"},next:{title:"Screens folder",permalink:"/ignite-cli/boilerplate/app/screens/"}},c={},l=[{value:"<code>navigationUtilities.ts</code>",id:"navigationutilitiests",level:2},{value:"<code>getActiveRouteName</code>",id:"getactiveroutename",level:3},{value:"<code>useBackButtonHandler</code>",id:"usebackbuttonhandler",level:3},{value:"<code>useNavigationPersistence</code>",id:"usenavigationpersistence",level:3}];function p(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"navigationutilitiests",children:(0,i.jsx)(t.code,{children:"navigationUtilities.ts"})}),"\n",(0,i.jsx)(t.h3,{id:"getactiveroutename",children:(0,i.jsx)(t.code,{children:"getActiveRouteName"})}),"\n",(0,i.jsxs)(t.p,{children:["This helper allows you to fetch the active route name from your navigator. It will recursively dive into nested routers. It takes the current navigation state (via ",(0,i.jsx)(t.code,{children:"navigation.getState()"}),") and returns a string."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'// nested navigators, 2-deep\nconst NestedStack = () => {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="myScreen" component={MyScreen} />\n    </Stack.Navigator>\n  )\n}\n\nconst AppStack = () => {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="nestedNav" component={NestedStack} />\n    </Stack.Navigator>\n  )\n}\n\n// getActiveRouteName usage\nfunction MyScreen({ navigation }) {\n  const routeName = getActiveRouteName(navigation.getState())\n  // => "myScreen"\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"usebackbuttonhandler",children:(0,i.jsx)(t.code,{children:"useBackButtonHandler"})}),"\n",(0,i.jsx)(t.p,{children:'This helper custom hook allows you to easily specify what routes you want to exit the app from, when the "back" button is pressed on Android. It has no effect on iOS.'}),"\n",(0,i.jsx)(t.p,{children:"We recommend using this in your root AppNavigator."}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'export const AppNavigator = (props) => {\n  // What route names do we allow the back button to exit the app from?\n  const exitRoutes = ["welcome"]\n  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))\n\n  // ...\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"usenavigationpersistence",children:(0,i.jsx)(t.code,{children:"useNavigationPersistence"})}),"\n",(0,i.jsxs)(t.p,{children:["This helper custom hook persists app navigation state between app loads. This is only enabled in dev by default, but can be enabled in production as well by editing the hook in ",(0,i.jsx)(t.code,{children:"navigationUtilities.tsx"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'import * as storage from "./utils/storage"\n\nfunction App(props: AppProps) {\n  const persistence = useNavigationPersistence(storage, "my-persistence-key")\n  const { initialNavigationState, onNavigationStateChange, isRestored } = persistence\n\n  // wait for the navigation state to restore\n  // `null` will show the background color\n  // can replace with <LoadingScreen /> or similar if you want\n  if (!isRestored) return null\n\n  return (\n    <AppNavigator\n      // initial navigation state is fetched from storage\n      initialState={initialNavigationState}\n      // persist changes to storage\n      onStateChange={onNavigationStateChange}\n    />\n  )\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);