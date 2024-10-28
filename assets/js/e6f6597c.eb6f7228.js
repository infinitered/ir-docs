"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8734],{250:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(4848),o=n(8453),i=n(4577);const s={sidebar_position:32},a="Checkbox",c={id:"ignite-cli/boilerplate/app/components/Checkbox",title:"Checkbox",description:"The Checkbox component provides a simple way to collect user input for a boolean value.",source:"@site/docs/ignite-cli/boilerplate/app/components/Checkbox.md",sourceDirName:"ignite-cli/boilerplate/app/components",slug:"/ignite-cli/boilerplate/app/components/Checkbox",permalink:"/ignite-cli/boilerplate/app/components/Checkbox",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32},sidebar:"Ignite",previous:{title:"Card",permalink:"/ignite-cli/boilerplate/app/components/Card"},next:{title:"EmptyState",permalink:"/ignite-cli/boilerplate/app/components/EmptyState"}},r={},d=[{value:"Checkbox Props",id:"checkbox-props",level:2},{value:"<code>icon</code>",id:"icon",level:3},...i.RM];function h(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"Checkbox"})," component provides a simple way to collect user input for a boolean value."]}),"\n",(0,t.jsx)(l.h2,{id:"checkbox-props",children:"Checkbox Props"}),"\n",(0,t.jsx)(l.h3,{id:"icon",children:(0,t.jsx)(l.code,{children:"icon"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"icon"}),' is a prop for the checkbox variant that allows you to customize the icon used for the "on" state.']}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Checkbox icon="ladybug" />\n'})}),"\n",(0,t.jsx)(i.Ay,{componentName:"Checkbox"})]})}function p(e={}){const{wrapper:l}={...(0,o.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4577:(e,l,n)=>{n.d(l,{Ay:()=>c,RM:()=>s});var t=n(4848),o=n(8453),i=n(1432);const s=[{value:"Toggle Props",id:"toggle-props",level:2},{value:"<code>status</code>",id:"status",level:3},{value:"<code>editable</code>",id:"editable",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>inputOuterStyle</code>",id:"inputouterstyle",level:3},{value:"<code>inputInnerStyle</code>",id:"inputinnerstyle",level:3},{value:"<code>inputDetailStyle</code>",id:"inputdetailstyle",level:3},{value:"<code>labelPosition</code>",id:"labelposition",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>labelTx</code>",id:"labeltx",level:3},{value:"<code>labelTxOptions</code>",id:"labeltxoptions",level:3},{value:"<code>labelStyle</code>",id:"labelstyle",level:3},{value:"<code>LabelTextProps</code>",id:"labeltextprops",level:3},{value:"<code>helper</code>",id:"helper",level:3},{value:"<code>helperTx</code>",id:"helpertx",level:3},{value:"<code>helperTxOptions</code>",id:"helpertxoptions",level:3},{value:"<code>HelperTextProps</code>",id:"helpertextprops",level:3}];function a(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"toggle-props",children:"Toggle Props"}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.img,{src:"https://github.com/user-attachments/assets/ffbbe61e-9aea-4895-ab19-d38f76b3e379",alt:"toggle-component"})}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} />`}),"\n",(0,t.jsx)(l.h3,{id:"status",children:(0,t.jsx)(l.code,{children:"status"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"status"})," prop is used to determine the interactability or style of the toggle. It can be set to ",(0,t.jsx)(l.code,{children:"disabled"})," or ",(0,t.jsx)(l.code,{children:"error"}),". It is ",(0,t.jsx)(l.code,{children:"null"})," by default."]}),"\n",(0,t.jsxs)(l.p,{children:["When set to ",(0,t.jsx)(l.code,{children:"error"}),", elements of the toggle will have their colors set to ",(0,t.jsx)(l.code,{children:"colors.errorBackground"})," or ",(0,t.jsx)(l.code,{children:"colors.error"}),"."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} status="disabled" />`}),"\n",(0,t.jsx)(l.h3,{id:"editable",children:(0,t.jsx)(l.code,{children:"editable"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"editable"})," prop determines whether the toggle is interactable. It is ",(0,t.jsx)(l.code,{children:"true"})," by default. Setting the ",(0,t.jsx)(l.code,{children:"status"})," prop to ",(0,t.jsx)(l.code,{children:"disabled"})," also will set ",(0,t.jsx)(l.code,{children:"editable"})," to ",(0,t.jsx)(l.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} editable={false} />`}),"\n",(0,t.jsx)(l.h3,{id:"value",children:(0,t.jsx)(l.code,{children:"value"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"value"})," prop determines whether the toggle is on or off. It is ",(0,t.jsx)(l.code,{children:"false"})," by default."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} value={true} />`}),"\n",(0,t.jsx)(l.h3,{id:"onvaluechange",children:(0,t.jsx)(l.code,{children:"onValueChange"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"onValueChange"})," prop is a callback that is called when the toggle is toggled. It is ",(0,t.jsx)(l.code,{children:"undefined"})," by default. Since the toggle is controlled, you must set the ",(0,t.jsx)(l.code,{children:"value"})," prop in this callback to update the toggle."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} onValueChange={setValue} />`}),"\n",(0,t.jsx)(l.h3,{id:"containerstyle",children:(0,t.jsx)(l.code,{children:"containerStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"containerStyle"})," prop is a style object that is applied to the container of the toggle."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} containerStyle={{ backgroundColor: "#fff" }} />`}),"\n",(0,t.jsx)(l.h3,{id:"inputouterstyle",children:(0,t.jsx)(l.code,{children:"inputOuterStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"inputOuterStyle"}),' prop is a style object that is applied to the outer container of the toggle input. This gives the inputs their size, shape, "off" background-color, and outer border.']}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} inputOuterStyle={{ backgroundColor: "#fff" }} />`}),"\n",(0,t.jsx)(l.h3,{id:"inputinnerstyle",children:(0,t.jsx)(l.code,{children:"inputInnerStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"inputInnerStyle"}),' prop is a style object that is applied to the inner container of the toggle input. This gives the inputs their "on" background-color and inner border.']}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} inputInnerStyle={{ backgroundColor: "#000" }} />`}),"\n",(0,t.jsx)(l.h3,{id:"inputdetailstyle",children:(0,t.jsx)(l.code,{children:"inputDetailStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"inputDetailStyle"})," prop is a style object that is applied to the detail container of the toggle input. For checkbox, this affects the Image component. For radio, this affects the dot View. For switch, this affects the knob View."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} inputDetailStyle={{ backgroundColor: "#000" }} />`}),"\n",(0,t.jsx)(l.h3,{id:"labelposition",children:(0,t.jsx)(l.code,{children:"labelPosition"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelPosition"})," prop determines the position of the label relative to the action component. It can be ",(0,t.jsx)(l.code,{children:"left"})," or ",(0,t.jsx)(l.code,{children:"right"}),". It is ",(0,t.jsx)(l.code,{children:"right"})," by default."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} labelPosition="left" />`}),"\n",(0,t.jsx)(l.h3,{id:"label",children:(0,t.jsx)(l.code,{children:"label"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"label"})," prop is a string that is used as the label for the toggle."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} label="Remember Me" />`}),"\n",(0,t.jsx)(l.h3,{id:"labeltx",children:(0,t.jsx)(l.code,{children:"labelTx"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelTx"})," prop is a key to a string in the ",(0,t.jsx)(l.code,{children:"i18n"})," translation file. It is used as the label for the toggle."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} labelTx="login:rememberUsername" />`}),"\n",(0,t.jsx)(l.h3,{id:"labeltxoptions",children:(0,t.jsx)(l.code,{children:"labelTxOptions"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelTxOptions"})," prop is an object that is passed to the ",(0,t.jsx)(l.code,{children:"i18n"})," translation function. It is used to pass in values to the translation string."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName}\n  value={value}\n  onValueChange={setValue}\n  labelTx="login:rememberUsername"\n  labelTxOptions={{ username: "john" }}\n/>`}),"\n",(0,t.jsx)(l.h3,{id:"labelstyle",children:(0,t.jsx)(l.code,{children:"labelStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelStyle"})," prop is a ",(0,t.jsx)(l.code,{children:"StyleProp<TextStyle>"})," object that is applied to the label."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} labelStyle={{ color: "#000" }} />`}),"\n",(0,t.jsx)(l.h3,{id:"labeltextprops",children:(0,t.jsx)(l.code,{children:"LabelTextProps"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"LabelTextProps"})," prop is a ",(0,t.jsx)(l.code,{children:"TextProps"})," object (from the ",(0,t.jsx)(l.a,{href:"/ignite-cli/boilerplate/app/components/Text",children:(0,t.jsx)(l.code,{children:"Text"})}),") component that is applied to the label."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} LabelTextProps={{ size: "lg" }} />`}),"\n",(0,t.jsx)(l.h3,{id:"helper",children:(0,t.jsx)(l.code,{children:"helper"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"helper"})," prop is a string that is used as the helper for the toggle."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} helper="Remember Me" />`}),"\n",(0,t.jsx)(l.h3,{id:"helpertx",children:(0,t.jsx)(l.code,{children:"helperTx"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"helperTx"})," prop is a key to a string in the ",(0,t.jsx)(l.code,{children:"i18n"})," translation file. It is used as the helper for the toggle."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} helperTx="login:rememberUsername" />`}),"\n",(0,t.jsx)(l.h3,{id:"helpertxoptions",children:(0,t.jsx)(l.code,{children:"helperTxOptions"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"helperTxOptions"})," prop is an object that is passed to the ",(0,t.jsx)(l.code,{children:"i18n"})," translation function. It is used to pass in values to the translation string."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName}\n  value={value}\n  onValueChange={setValue}\n  helperTx="login:rememberUsername"\n  helperTxOptions={{ username: "john" }}\n/>`}),"\n",(0,t.jsx)(l.h3,{id:"helpertextprops",children:(0,t.jsx)(l.code,{children:"HelperTextProps"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"HelperTextProps"})," prop is a ",(0,t.jsx)(l.code,{children:"TextProps"})," object (from the ",(0,t.jsx)(l.a,{href:"/ignite-cli/boilerplate/app/components/Text",children:(0,t.jsx)(l.code,{children:"Text"})}),") component that is applied to the helper."]}),"\n",(0,t.jsx)(i.A,{language:"tsx",children:`<${e.componentName} value={value} onValueChange={setValue} HelperTextProps={{ size: "lg" }} />`})]})}function c(e={}){const{wrapper:l}={...(0,o.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);