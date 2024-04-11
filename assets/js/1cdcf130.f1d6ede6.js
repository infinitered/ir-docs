"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[3814],{6697:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(4848),i=n(8453);const r={sidebar_position:170},l="Remove Demo Code",d={id:"ignite-cli/cli/Remove-Demo-Code",title:"Remove Demo Code",description:"Whenever users use command line boilerplate tool like ignite or create-react-app, the first thing that many users do is delete all the demo code to start their project.",source:"@site/docs/ignite-cli/cli/Remove-Demo-Code.md",sourceDirName:"ignite-cli/cli",slug:"/ignite-cli/cli/Remove-Demo-Code",permalink:"/ignite-cli/cli/Remove-Demo-Code",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:170,frontMatter:{sidebar_position:170},sidebar:"Ignite",previous:{title:"Troubleshooting",permalink:"/ignite-cli/cli/Troubleshooting"},next:{title:"A Tour of the Ignite CLI Code Base",permalink:"/ignite-cli/contributing/Tour-of-Ignite"}},s={},c=[{value:"How It Works",id:"how-it-works",level:2},{value:"<code>// @demo remove-file</code>",id:"-demo-remove-file",level:3},{value:"Example:",id:"example",level:4},{value:"<code>// @demo remove-current-line</code>",id:"-demo-remove-current-line",level:3},{value:"Example:",id:"example-1",level:4},{value:"<code>// @demo remove-next-line</code>",id:"-demo-remove-next-line",level:3},{value:"Example:",id:"example-2",level:4},{value:"<code>// @demo remove-block-start &amp;&amp; // @demo remove-block-end</code>",id:"-demo-remove-block-start---demo-remove-block-end",level:3},{value:"Example:",id:"example-3",level:4}];function m(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"remove-demo-code",children:"Remove Demo Code"}),"\n",(0,t.jsxs)(o.p,{children:["Whenever users use command line boilerplate tool like ",(0,t.jsx)(o.code,{children:"ignite"})," or ",(0,t.jsx)(o.code,{children:"create-react-app"}),", the first thing that many users do is delete all the demo code to start their project."]}),"\n",(0,t.jsxs)(o.p,{children:["Instead of going through the files yourself, or using find and replace, run ",(0,t.jsx)(o.code,{children:"npx ignite-cli remove-demo"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"After the command, the Ignite boilerplate will now have the smallest amount of demo code possible, while having all of Ignite's set up still at your fingertips."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.em,{children:["Note: You can pass ",(0,t.jsx)(o.code,{children:"--dry-run"})," to have the command tell you what it would remove/change."]})}),"\n",(0,t.jsx)(o.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,t.jsx)(o.p,{children:"When adding demo code to the boilerplate, use the following comments to have fine grained control over what gets stripped out. The goal is to be able to remove as much source code as possible while still having the generated Ignite app build correctly."}),"\n",(0,t.jsx)(o.h3,{id:"-demo-remove-file",children:(0,t.jsx)(o.code,{children:"// @demo remove-file"})}),"\n",(0,t.jsx)(o.p,{children:"Remove the entire file."}),"\n",(0,t.jsx)(o.h4,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'// @demo remove-file\nexport * from "./Text"\nexport * from "./Screen"\n'})}),"\n",(0,t.jsx)(o.h3,{id:"-demo-remove-current-line",children:(0,t.jsx)(o.code,{children:"// @demo remove-current-line"})}),"\n",(0,t.jsx)(o.p,{children:"Remove the current line from the source code."}),"\n",(0,t.jsx)(o.h4,{id:"example-1",children:"Example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const $style: ViewStyle = { padding: 10 } // @demo remove-current-line\n"})}),"\n",(0,t.jsx)(o.h3,{id:"-demo-remove-next-line",children:(0,t.jsx)(o.code,{children:"// @demo remove-next-line"})}),"\n",(0,t.jsx)(o.p,{children:"Remove the next line from the source code"}),"\n",(0,t.jsx)(o.h4,{id:"example-2",children:"Example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'// @demo remove-next-line\nimport { DemoScreen } from "./demo/screen"\n'})}),"\n",(0,t.jsx)(o.h3,{id:"-demo-remove-block-start---demo-remove-block-end",children:(0,t.jsx)(o.code,{children:"// @demo remove-block-start && // @demo remove-block-end"})}),"\n",(0,t.jsx)(o.p,{children:"Remove the entire block between these lines from the source code"}),"\n",(0,t.jsx)(o.h4,{id:"example-3",children:"Example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'// @demo remove-block-start\nexport function DemoDivider(props: DemoDividerProps) {\n  const { type = "horizontal", size = 10, style: $styleOverride } = props\n\n  return (\n    <View\n      style={[\n        $divider,\n        type === "horizontal" && { height: size },\n        type === "vertical" && { width: size },\n        $styleOverride,\n      ]}\n    />\n  )\n}\n// @demo remove-block-end\n'})})]})}function a(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>d});var t=n(6540);const i={},r=t.createContext(i);function l(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);