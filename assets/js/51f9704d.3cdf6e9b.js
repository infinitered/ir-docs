"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[6343],{5483:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=i(4848),n=i(8453);const s={sidebar_position:30},a="AutoImage",c={id:"ignite-cli/boilerplate/app/components/AutoImage",title:"AutoImage",description:"Ignite's AutoImage Component is an enhanced version of the built-in React Native Image component. It automatically resizes the image view to fit a max width or height constraint",source:"@site/docs/ignite-cli/boilerplate/app/components/AutoImage.md",sourceDirName:"ignite-cli/boilerplate/app/components",slug:"/ignite-cli/boilerplate/app/components/AutoImage",permalink:"/ignite-cli/boilerplate/app/components/AutoImage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"Ignite",previous:{title:"Ignite Built-in Components",permalink:"/ignite-cli/boilerplate/app/components/"},next:{title:"Button",permalink:"/ignite-cli/boilerplate/app/components/Button"}},r={},d=[{value:"Props",id:"props",level:2},{value:"<code>maxWidth</code> and <code>maxHeight</code>",id:"maxwidth-and-maxheight",level:3},{value:"Default Image props",id:"default-image-props",level:2},{value:"<code>source</code>",id:"source",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"Notes",id:"notes",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"autoimage",children:"AutoImage"}),"\n",(0,o.jsxs)(t.p,{children:["Ignite's ",(0,o.jsx)(t.code,{children:"AutoImage"})," Component is an enhanced version of the built-in React Native ",(0,o.jsx)(t.a,{href:"https://reactnative.dev/docs/image",children:"Image"})," component. It automatically resizes the image view to fit a max width or height constraint"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'<AutoImage\n  source={{ uri: "https://pbs.twimg.com/profile_images/845384502067159040/pqF2RQ2q_400x400.jpg" }}\n  maxWidth={200}\n/>\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"AutoImage"})," uses a ",(0,o.jsx)(t.code,{children:"useAutoImage"})," hook to calculate the image's dimensions when you have a specific values you need to constrain the image within. This hook is also available for use in your own components."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const { width, height } = useAutoImage(uri, maxWidth, maxHeight)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,o.jsxs)(t.p,{children:["Ignite's ",(0,o.jsx)(t.code,{children:"AutoImage"})," component has two props of its own: ",(0,o.jsx)(t.code,{children:"maxWidth"})," and ",(0,o.jsx)(t.code,{children:"maxHeight"}),"."]}),"\n",(0,o.jsxs)(t.h3,{id:"maxwidth-and-maxheight",children:[(0,o.jsx)(t.code,{children:"maxWidth"})," and ",(0,o.jsx)(t.code,{children:"maxHeight"})]}),"\n",(0,o.jsxs)(t.p,{children:["These props are used to constrain the image to a specific size. Use ",(0,o.jsx)(t.code,{children:"maxWidth"})," or ",(0,o.jsx)(t.code,{children:"maxHeight"})," to set the maximum width or height of the image, and it will resize to whichever dimension you specify without skewing the aspect ratio. e.g. If the image is 300w x 200h, and you set ",(0,o.jsx)(t.code,{children:"maxWidth={200}"}),", the image will be resized to 200w x 133h."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'<AutoImage\n  source={{ uri: "https://pbs.twimg.com/profile_images/845384502067159040/pqF2RQ2q_400x400.jpg" }}\n  maxWidth={200}\n  maxHeight={200}\n/>\n'})}),"\n",(0,o.jsx)(t.h2,{id:"default-image-props",children:"Default Image props"}),"\n",(0,o.jsxs)(t.p,{children:["As ",(0,o.jsx)(t.code,{children:"AutoImage"})," is a wrapper around React Native's ",(0,o.jsx)(t.code,{children:"Image"})," component, it also accepts all of the props that ",(0,o.jsx)(t.code,{children:"Image"})," accepts. See the ",(0,o.jsx)(t.a,{href:"https://reactnative.dev/docs/image",children:"React Native Image documentation"})," for more information."]}),"\n",(0,o.jsx)(t.h3,{id:"source",children:(0,o.jsx)(t.code,{children:"source"})}),"\n",(0,o.jsxs)(t.p,{children:["As with React Native's built in Image component, the ",(0,o.jsx)(t.code,{children:"source"})," prop is always required. This can be ",(0,o.jsx)(t.em,{children:"almost"})," anything that conforms to ReactNative's ",(0,o.jsx)(t.a,{href:"https://reactnative.dev/docs/image#imagesource",children:"ImageSource"})," type. (See ",(0,o.jsx)(t.a,{href:"#Notes",children:"Notes"})," below for caveats.)"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"<AutoImage source={logoIgnite} />\n"})}),"\n",(0,o.jsx)(t.h3,{id:"style",children:(0,o.jsx)(t.code,{children:"style"})}),"\n",(0,o.jsxs)(t.p,{children:["Setting the ",(0,o.jsx)(t.code,{children:"style"})," prop will override the default styles. With ",(0,o.jsx)(t.code,{children:"AutoImage"}),", you generally only need to specify width ",(0,o.jsx)(t.em,{children:"or"})," height with dynamically loaded images. Setting both will override the resizing of ",(0,o.jsx)(t.code,{children:"AutoImage"})," altogether, and if that is needed it's best to just use the default React Native ",(0,o.jsx)(t.code,{children:"Image"})," component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"<AutoImage source={logoIgnite} style={{ width: 200 }} />\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"<AutoImage source={logoIgnite} style={{ height: 200 }} />\n"})}),"\n",(0,o.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(t.p,{children:["As noted above, the ",(0,o.jsx)(t.code,{children:"source"})," prop can be almost anything, the one exception being an array of objects, which ",(0,o.jsx)(t.code,{children:"AutoImage"})," doesn't support. See the React Native ",(0,o.jsx)(t.a,{href:"https://reactnative.dev/docs/image#source",children:"Image#source"})," documentation for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var o=i(6540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);