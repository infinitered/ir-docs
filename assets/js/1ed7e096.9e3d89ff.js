"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[6664],{7163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(4848),s=n(8453);const o={},l="template",i={id:"gluegun/toolbox-api/template",title:"template",description:"Features for generating files based on a template. You can access these tools on the Gluegun toolbox.",source:"@site/docs/gluegun/toolbox-api/template.md",sourceDirName:"gluegun/toolbox-api",slug:"/gluegun/toolbox-api/template",permalink:"/gluegun/toolbox-api/template",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Gluegun",previous:{title:"system",permalink:"/gluegun/toolbox-api/system"},next:{title:"Contributing",permalink:"/gluegun/contributing/"}},a={},d=[{value:"generate",id:"generate",level:2},{value:"example",id:"example",level:4}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"template",children:"template"}),"\n",(0,r.jsx)(t.p,{children:"Features for generating files based on a template. You can access these tools on the Gluegun toolbox."}),"\n",(0,r.jsx)(t.h2,{id:"generate",children:"generate"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This is an ",(0,r.jsx)(t.strong,{children:"async"})," function."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Generates a new file based on a template."}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"module.exports = async function (toolbox) {\n  const name = toolbox.parameters.first\n\n  await toolbox.template.generate({\n    template: 'component.ejf',\n    target: `app/components/${name}-view.js`,\n    props: { name },\n  })\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"In the EJS template, you will use the props object to get the data defined previously."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ejs",children:"<title><%= props.name %></title>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note: ",(0,r.jsx)(t.code,{children:"generate()"})," will always overwrite the target if given. Make sure to prompt your users if that's\nthe behaviour you're after."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"option"}),(0,r.jsx)(t.th,{children:"type"}),(0,r.jsx)(t.th,{children:"purpose"}),(0,r.jsx)(t.th,{children:"notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"template"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"path to the EJS template"}),(0,r.jsxs)(t.td,{children:["relative from plugin's ",(0,r.jsx)(t.code,{children:"templates"})," directory"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"target"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"path to create the file"}),(0,r.jsx)(t.td,{children:"relative from user's working directory"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"props"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"more data to render in your template"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"directory"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"where to find templates"}),(0,r.jsx)(t.td,{children:"an absolute path (optional)"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"generate()"})," returns the string that was generated in case you didn't want to render to a target."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);