"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[2903],{7530:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(4848),t=n(8453);const i={},s="Error Boundary",c={id:"ignite-cli/concept/Error-Boundary",title:"Error Boundary",description:"Sometimes, things go wrong in an app. A request comes back with an unexpected status, users find ways to make invalid inputs, a whole host of other issues that we can't imagine when we are first writing code.",source:"@site/docs/ignite-cli/concept/Error-Boundary.md",sourceDirName:"ignite-cli/concept",slug:"/ignite-cli/concept/Error-Boundary",permalink:"/ignite-cli/concept/Error-Boundary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Ignite",previous:{title:"TypeScript",permalink:"/ignite-cli/concept/TypeScript"},next:{title:"Upgrades",permalink:"/ignite-cli/concept/Upgrades"}},a={},l=[{value:"How to Handle Errors",id:"how-to-handle-errors",level:2},{value:"Render Error UI",id:"render-error-ui",level:3},{value:"Use Error Reporting Service",id:"use-error-reporting-service",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"error-boundary",children:"Error Boundary"}),"\n",(0,o.jsx)(r.p,{children:"Sometimes, things go wrong in an app. A request comes back with an unexpected status, users find ways to make invalid inputs, a whole host of other issues that we can't imagine when we are first writing code."}),"\n",(0,o.jsx)(r.p,{children:"It is a good idea to have a fallback UI for critical screens or components when they unexpected throw an error."}),"\n",(0,o.jsx)(r.p,{children:"That is why we provide an ErrorBoundary component in Ignite by default."}),"\n",(0,o.jsx)(r.h2,{id:"how-to-handle-errors",children:"How to Handle Errors"}),"\n",(0,o.jsx)(r.h3,{id:"render-error-ui",children:"Render Error UI"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"const ErrorMessage = () => <Text>Something went wrong!</Text>\n\nclass ErrorBoundary extends Component<Props, State> {\n  state = { error: null, errorInfo: null }\n\n  componentDidCatch(error: Error, errorInfo: ErrorInfo) {\n    this.setState({\n      error,\n      errorInfo,\n    })\n  }\n\n  render() {\n    return this.state.error ? <ErrorMessage /> : this.props.children\n  }\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ErrorBoundary"})," components leverage the ",(0,o.jsx)(r.code,{children:"componentDidCatch"})," method on Class Components to capture and allow us to store errors when children throw an exception."]}),"\n",(0,o.jsx)(r.p,{children:"This allows us to show alternative UI components when an error is thrown on child components."}),"\n",(0,o.jsx)(r.h3,{id:"use-error-reporting-service",children:"Use Error Reporting Service"}),"\n",(0,o.jsxs)(r.p,{children:["Inside ",(0,o.jsx)(r.code,{children:"componentDidCatch"})," of an ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," component is also a great place to report to monitoring services like BugSnag, Sentry, or Honeybadger, so you can be alerted when errors are happening for users."]}),"\n",(0,o.jsxs)(r.p,{children:["Ignite provides utilities in ",(0,o.jsx)(r.a,{href:"https://github.com/infinitered/ignite/blob/master/boilerplate/app/utils/crashReporting.ts",children:(0,o.jsx)(r.code,{children:"/app/utils/crashReporting.ts"})})," to integrate these services into your app."]}),"\n",(0,o.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["See our ",(0,o.jsxs)(r.a,{href:"https://github.com/infinitered/ignite/blob/master/boilerplate/app/screens/ErrorScreen/ErrorBoundary.tsx",children:[(0,o.jsx)(r.code,{children:"ErrorBoundary"})," component"]})," for error catching logic"]}),"\n",(0,o.jsxs)(r.li,{children:["See our ",(0,o.jsxs)(r.a,{href:"https://github.com/infinitered/ignite/blob/master/boilerplate/app/screens/ErrorScreen/ErrorDetails.tsx",children:[(0,o.jsx)(r.code,{children:"ErrorScreen"})," component"]})," for error fallback UI"]}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",children:"reactjs.org docs on Error Boundaries"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://codepen.io/gaearon/pen/wqvxGa?editors=0010",children:"codepen example of Error Boundary usage"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var o=n(6540);const t={},i=o.createContext(t);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);