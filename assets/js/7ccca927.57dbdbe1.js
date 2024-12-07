"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[2944],{427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(4848),i=n(8453);const o={sidebar_position:90},r="Navigation in Ignite",s={id:"ignite-cli/boilerplate/app/navigators/Navigation",title:"Navigation in Ignite",description:"We use React Navigation v6 in the current version of Ignite. You'll find any navigators in ./app/navigators, with the AppNavigator.tsx being the primary one.",source:"@site/docs/ignite-cli/boilerplate/app/navigators/Navigation.md",sourceDirName:"ignite-cli/boilerplate/app/navigators",slug:"/ignite-cli/boilerplate/app/navigators/Navigation",permalink:"/ignite-cli/boilerplate/app/navigators/Navigation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"Ignite",previous:{title:"Models folder",permalink:"/ignite-cli/boilerplate/app/models/"},next:{title:"AppNavigator.tsx",permalink:"/ignite-cli/boilerplate/app/navigators/AppNavigator.tsx"}},c={},l=[{value:"General Structure",id:"general-structure",level:2},{value:"Useful Patterns",id:"useful-patterns",level:2},{value:"Authentication Flow",id:"authentication-flow",level:3},{value:"Tab Navigation",id:"tab-navigation",level:3},{value:"Sidebar Navigation",id:"sidebar-navigation",level:3},{value:"A note about Expo Router",id:"a-note-about-expo-router",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"navigation-in-ignite",children:"Navigation in Ignite"}),"\n",(0,a.jsxs)(t.p,{children:["We use ",(0,a.jsx)(t.a,{href:"https://reactnavigation.org/docs/getting-started/",children:"React Navigation v6"})," in the current version of Ignite. You'll find any navigators in ",(0,a.jsx)(t.code,{children:"./app/navigators"}),", with the ",(0,a.jsx)(t.code,{children:"AppNavigator.tsx"})," being the primary one."]}),"\n",(0,a.jsxs)(t.p,{children:["There's also a ",(0,a.jsx)(t.code,{children:"navigationUtilities.tsx"})," file which provides some utility functions we find useful in building apps, such as ",(0,a.jsx)(t.code,{children:"getActiveRouteName"}),", ",(0,a.jsx)(t.code,{children:"useBackButtonHandler"})," and ",(0,a.jsx)(t.code,{children:"useNavigationPersistence"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["There's a provided Ignite CLI generator for creating new navigators. Learn more in the ",(0,a.jsx)(t.a,{href:"/ignite-cli/concept/Generators#navigator-generator",children:"Generator docs"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"general-structure",children:"General Structure"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"<AppNavigator initialState={initialNavigationState} onStateChange={onNavigationStateChange} />\n"})}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"/ignite-cli/boilerplate/app/navigators/AppNavigator.tsx",children:"AppNavigator.tsx"})," docs for more info on how the app navigator is set up."]}),"\n",(0,a.jsx)(t.h2,{id:"useful-patterns",children:"Useful Patterns"}),"\n",(0,a.jsx)(t.p,{children:"We've found that there are some useful patterns for building navigators in React Native."}),"\n",(0,a.jsx)(t.h3,{id:"authentication-flow",children:"Authentication Flow"}),"\n",(0,a.jsxs)(t.p,{children:["We recommend following the guidance of ",(0,a.jsx)(t.a,{href:"https://reactnavigation.org/docs/auth-flow/",children:"React Navigation's Authentication Flows"})," and Ignite comes bootstrapped with this pattern in its demo code."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'const AppStack = observer(function AppStack() {\n  const {\n    authenticationStore: { isAuthenticated },\n  } = useStores()\n\n  return (\n    <Stack.Navigator\n      screenOptions={{ headerShown: false }}\n      initialRouteName={isAuthenticated ? "Welcome" : "Login"}\n    >\n      {isAuthenticated ? (\n        <>\n          <Stack.Screen name="Welcome" component={WelcomeScreen} />\n          <Stack.Screen name="Demo" component={DemoNavigator} />\n        </>\n      ) : (\n        <>\n          <Stack.Screen name="Login" component={LoginScreen} />\n        </>\n      )}\n    </Stack.Navigator>\n  )\n})\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The screens included within the AppStack are dependent on value of ",(0,a.jsx)(t.code,{children:"isAuthenticated"})," from ",(0,a.jsx)(t.code,{children:"authenticationStore"}),". If the user hasn't been authenticated yet, the only screen to be shown will be the ",(0,a.jsx)(t.code,{children:"LoginScreen"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["When authenticated, ",(0,a.jsx)(t.code,{children:"LoginScreen"})," is left out of the navigator and the user is presented with the ",(0,a.jsx)(t.code,{children:"WelcomeScreen"})," and screens that fall under the ",(0,a.jsx)(t.code,{children:"DemoNavigator"})]}),"\n",(0,a.jsx)(t.h3,{id:"tab-navigation",children:"Tab Navigation"}),"\n",(0,a.jsxs)(t.p,{children:["We recommend using the ",(0,a.jsx)(t.a,{href:"https://reactnavigation.org/docs/tab-based-navigation/",children:"React Navigation Tabs"})," for tabs."]}),"\n",(0,a.jsxs)(t.p,{children:["Inside ",(0,a.jsx)(t.code,{children:"./app/navigators/DemoNavigator.tsx"})," you'll see the definition of the bottom tab navigator. Here is where you can customize the style and behavior of the tab bar itself, as well as each individual tab."]}),"\n",(0,a.jsx)(t.p,{children:"In addition to the user pressing the tab buttons, you may also navigate from tab to tab programmatically via the same familiar navigation API:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'// currently on the DemoShowroom tab, navigate to the DemoDebug tab\nnavigation.navigate("DemoDebug")\n'})}),"\n",(0,a.jsx)(t.p,{children:"Tabs can jump to a single screen (as seen in Ignite's demo code) or another stack navigator comprised of many screens the user could navigate through within the same tab. Let's use a message inbox as an example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'const InboxStack = createNativeStackNavigator()\n\nfunction InboxStackScreen() {\n  return (\n    <InboxStack.Navigator>\n      <InboxStack.Screen name="List" component={ListScreen} />\n      <InboxStack.Screen name="MessageDetails" component={MessageDetailsScreen} />\n    </InboxStack.Navigator>\n  )\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"A tab could be added to the tab navigator as a child component."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:'<Tab.Screen name="Inbox" component={InboxStackScreen} />'})}),"\n",(0,a.jsxs)(t.p,{children:["This would initially display the ",(0,a.jsx)(t.code,{children:"ListScreen"})," with all of the messages and if the user happened to press a list item, the app would then navigate to a ",(0,a.jsx)(t.code,{children:"MessageDetailsScreen"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"sidebar-navigation",children:"Sidebar Navigation"}),"\n",(0,a.jsxs)(t.p,{children:['Ignite comes with an example sidebar navigation, aka "drawer" navigator. It is implemented using the ',(0,a.jsx)(t.code,{children:"DrawerLayout"})," from ",(0,a.jsx)(t.a,{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/drawer-layout/",children:"React Native Gesture Handler"}),", a cross-platform replacement for ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/docs/drawerlayoutandroid.html",children:"React Native's DrawerLayoutAndroid"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The view passed via ",(0,a.jsx)(t.code,{children:"renderNavigationView"})," prop is the content rendered to the side of the screen, which can be pulled in or opened by the toggle button press. Here is where you can render header information (perhaps a company logo or logged in user avatar along with labels), menu items, logout or settings functionality and more."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"DrawerLayout"})," also allows you to customize the behavior (open/close speed, overlay position), style and even has events to track the progress and states of the drawer transitioning. See more info at the ",(0,a.jsx)(t.a,{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/drawer-layout/",children:"documentation"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Ignite's navigation setup also comes with some very useful ",(0,a.jsx)(t.a,{href:"/ignite-cli/boilerplate/app/navigators/navigationUtilities.ts",children:"navigation utilities"})," to help you with common tasks such as getting the current route name, handling the back button, and persisting navigation state."]}),"\n",(0,a.jsx)(t.h2,{id:"a-note-about-expo-router",children:"A note about Expo Router"}),"\n",(0,a.jsxs)(t.p,{children:["We are currently evaluating ",(0,a.jsx)(t.a,{href:"https://docs.expo.dev/router/introduction/",children:"Expo Router"})," to power Ignite's navigation system. It's a very promising project (built on React Navigation), but our philosophy is that nothing makes it into Ignite unless we've proven it in a full project (or two...or three...) first. In the meantime we've added an experimental option to switch to Expo Router when igniting your project. We'll update this section when we have more information."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(6540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);