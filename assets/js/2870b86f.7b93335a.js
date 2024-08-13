"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[9154],{4459:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var t=n(4848),o=n(8453);const s={sidebar_position:41},i="Toggle",a={id:"ignite-cli/boilerplate/app/components/Toggle",title:"Toggle",description:"This component is a flexible component that can be used to toggle a boolean value. It can be used to render a switch, checkbox, or radio button, and exposes style props for every element.",source:"@site/docs/ignite-cli/boilerplate/app/components/Toggle.md",sourceDirName:"ignite-cli/boilerplate/app/components",slug:"/ignite-cli/boilerplate/app/components/Toggle",permalink:"/ignite-cli/boilerplate/app/components/Toggle",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"Ignite",previous:{title:"TextField",permalink:"/ignite-cli/boilerplate/app/components/TextField"},next:{title:"Config folder",permalink:"/ignite-cli/boilerplate/app/config/"}},c={},r=[{value:"Props",id:"props",level:2},{value:"<code>variant</code>",id:"variant",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>editable</code>",id:"editable",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>inputOuterStyle</code>",id:"inputouterstyle",level:3},{value:"<code>inputInnerStyle</code>",id:"inputinnerstyle",level:3},{value:"<code>inputDetailStyle</code>",id:"inputdetailstyle",level:3},{value:"<code>labelPosition</code>",id:"labelposition",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>labelTx</code>",id:"labeltx",level:3},{value:"<code>labelTxOptions</code>",id:"labeltxoptions",level:3},{value:"<code>labelStyle</code>",id:"labelstyle",level:3},{value:"<code>LabelTextProps</code>",id:"labeltextprops",level:3},{value:"<code>helper</code>",id:"helper",level:3},{value:"<code>helperTx</code>",id:"helpertx",level:3},{value:"<code>helperTxOptions</code>",id:"helpertxoptions",level:3},{value:"<code>HelperTextProps</code>",id:"helpertextprops",level:3},{value:"<code>switchAccessibilityMode</code>",id:"switchaccessibilitymode",level:3},{value:"<code>checkboxIcon</code>",id:"checkboxicon",level:3}];function d(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"toggle",children:"Toggle"}),"\n",(0,t.jsx)(l.p,{children:"This component is a flexible component that can be used to toggle a boolean value. It can be used to render a switch, checkbox, or radio button, and exposes style props for every element."}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.img,{src:"https://github.com/user-attachments/assets/ffbbe61e-9aea-4895-ab19-d38f76b3e379",alt:"toggle-component"})}),"\n",(0,t.jsx)(l.h2,{id:"props",children:"Props"}),"\n",(0,t.jsx)(l.h3,{id:"variant",children:(0,t.jsx)(l.code,{children:"variant"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"variant"})," prop determines the type of toggle to render. It can be one of the following: ",(0,t.jsx)(l.code,{children:"switch"}),", ",(0,t.jsx)(l.code,{children:"checkbox"}),", or ",(0,t.jsx)(l.code,{children:"radio"}),"."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} variant="checkbox" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"status",children:(0,t.jsx)(l.code,{children:"status"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"status"})," prop is used to determine the interactability or style of the toggle. It can be set to ",(0,t.jsx)(l.code,{children:"disabled"})," or ",(0,t.jsx)(l.code,{children:"error"}),". It is ",(0,t.jsx)(l.code,{children:"null"})," by default."]}),"\n",(0,t.jsxs)(l.p,{children:["When set to ",(0,t.jsx)(l.code,{children:"error"}),", elements of the toggle will have their colors set to ",(0,t.jsx)(l.code,{children:"colors.errorBackground"})," or ",(0,t.jsx)(l.code,{children:"colors.error"}),"."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} status="disabled" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"editable",children:(0,t.jsx)(l.code,{children:"editable"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"editable"})," prop determines whether the toggle is interactable. It is ",(0,t.jsx)(l.code,{children:"true"})," by default. Setting the ",(0,t.jsx)(l.code,{children:"status"})," prop to ",(0,t.jsx)(l.code,{children:"disabled"})," also will set ",(0,t.jsx)(l.code,{children:"editable"})," to ",(0,t.jsx)(l.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"<Toggle value={value} onValueChange={setValue} editable={false} />\n"})}),"\n",(0,t.jsx)(l.h3,{id:"value",children:(0,t.jsx)(l.code,{children:"value"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"value"})," prop determines whether the toggle is on or off. It is ",(0,t.jsx)(l.code,{children:"false"})," by default."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"<Toggle value={value} onValueChange={setValue} value={true} />\n"})}),"\n",(0,t.jsx)(l.h3,{id:"onvaluechange",children:(0,t.jsx)(l.code,{children:"onValueChange"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"onValueChange"})," prop is a callback that is called when the toggle is toggled. It is ",(0,t.jsx)(l.code,{children:"undefined"})," by default. Since the toggle is controlled, you must set the ",(0,t.jsx)(l.code,{children:"value"})," prop in this callback to update the toggle."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"<Toggle value={value} onValueChange={setValue} onValueChange={setValue} />\n"})}),"\n",(0,t.jsx)(l.h3,{id:"containerstyle",children:(0,t.jsx)(l.code,{children:"containerStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"containerStyle"})," prop is a style object that is applied to the container of the toggle."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} containerStyle={{ backgroundColor: "#fff" }} />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"inputouterstyle",children:(0,t.jsx)(l.code,{children:"inputOuterStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"inputOuterStyle"}),' prop is a style object that is applied to the outer container of the toggle input. This gives the inputs their size, shape, "off" background-color, and outer border.']}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} inputOuterStyle={{ backgroundColor: "#fff" }} />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"inputinnerstyle",children:(0,t.jsx)(l.code,{children:"inputInnerStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"inputInnerStyle"}),' prop is a style object that is applied to the inner container of the toggle input. This gives the inputs their "on" background-color and inner border.']}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} inputInnerStyle={{ backgroundColor: "#000" }} />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"inputdetailstyle",children:(0,t.jsx)(l.code,{children:"inputDetailStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"inputDetailStyle"})," prop is a style object that is applied to the detail container of the toggle input. For checkbox, this affects the Image component. For radio, this affects the dot View. For switch, this affects the knob View."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} inputDetailStyle={{ backgroundColor: "#000" }} />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"labelposition",children:(0,t.jsx)(l.code,{children:"labelPosition"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelPosition"})," prop determines the position of the label relative to the action component. It can be ",(0,t.jsx)(l.code,{children:"left"})," or ",(0,t.jsx)(l.code,{children:"right"}),". It is ",(0,t.jsx)(l.code,{children:"right"})," by default."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} labelPosition="left" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"label",children:(0,t.jsx)(l.code,{children:"label"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"label"})," prop is a string that is used as the label for the toggle."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} label="Remember Me" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"labeltx",children:(0,t.jsx)(l.code,{children:"labelTx"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelTx"})," prop is a key to a string in the ",(0,t.jsx)(l.code,{children:"i18n"})," translation file. It is used as the label for the toggle."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} labelTx="login.rememberUsername" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"labeltxoptions",children:(0,t.jsx)(l.code,{children:"labelTxOptions"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelTxOptions"})," prop is an object that is passed to the ",(0,t.jsx)(l.code,{children:"i18n"})," translation function. It is used to pass in values to the translation string."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle\n  value={value}\n  onValueChange={setValue}\n  labelTx="login.rememberUsername"\n  labelTxOptions={{ username: "john" }}\n/>\n'})}),"\n",(0,t.jsx)(l.h3,{id:"labelstyle",children:(0,t.jsx)(l.code,{children:"labelStyle"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"labelStyle"})," prop is a ",(0,t.jsx)(l.code,{children:"StyleProp<TextStyle>"})," object that is applied to the label."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} labelStyle={{ color: "#000" }} />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"labeltextprops",children:(0,t.jsx)(l.code,{children:"LabelTextProps"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"LabelTextProps"})," prop is a ",(0,t.jsx)(l.code,{children:"TextProps"})," object (from the ",(0,t.jsx)(l.a,{href:"/ignite-cli/boilerplate/app/components/Text",children:(0,t.jsx)(l.code,{children:"Text"})}),") component that is applied to the label."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} LabelTextProps={{ size: "lg" }} />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"helper",children:(0,t.jsx)(l.code,{children:"helper"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"helper"})," prop is a string that is used as the helper for the toggle."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} helper="Remember Me" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"helpertx",children:(0,t.jsx)(l.code,{children:"helperTx"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"helperTx"})," prop is a key to a string in the ",(0,t.jsx)(l.code,{children:"i18n"})," translation file. It is used as the helper for the toggle."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} helperTx="login.rememberUsername" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"helpertxoptions",children:(0,t.jsx)(l.code,{children:"helperTxOptions"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"helperTxOptions"})," prop is an object that is passed to the ",(0,t.jsx)(l.code,{children:"i18n"})," translation function. It is used to pass in values to the translation string."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle\n  value={value}\n  onValueChange={setValue}\n  helperTx="login.rememberUsername"\n  helperTxOptions={{ username: "john" }}\n/>\n'})}),"\n",(0,t.jsx)(l.h3,{id:"helpertextprops",children:(0,t.jsx)(l.code,{children:"HelperTextProps"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"HelperTextProps"})," prop is a ",(0,t.jsx)(l.code,{children:"TextProps"})," object (from the ",(0,t.jsx)(l.a,{href:"/ignite-cli/boilerplate/app/components/Text",children:(0,t.jsx)(l.code,{children:"Text"})}),") component that is applied to the helper."]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} HelperTextProps={{ size: "lg" }} />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"switchaccessibilitymode",children:(0,t.jsx)(l.code,{children:"switchAccessibilityMode"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"switchAccessibilityMode"})," is a special prop for the switch variant that adds a text/icon label for on/off states. Options are ",(0,t.jsx)(l.code,{children:"text"})," and ",(0,t.jsx)(l.code,{children:"icon"})]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle value={value} onValueChange={setValue} variant="switch" switchAccessibilityMode="icon" />\n'})}),"\n",(0,t.jsx)(l.h3,{id:"checkboxicon",children:(0,t.jsx)(l.code,{children:"checkboxIcon"})}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"checkboxIcon"}),' is a prop for the checkbox variant that allows you to customize the icon used for the "on" state.']}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:'<Toggle variant="checkbox" checkboxIcon="ladybug" />\n'})})]})}function h(e={}){const{wrapper:l}={...(0,o.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>a});var t=n(6540);const o={},s=t.createContext(o);function i(e){const l=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:l},e.children)}}}]);