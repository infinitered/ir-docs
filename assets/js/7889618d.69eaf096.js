"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[140],{6748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var o=t(4848),s=t(8453);const i={title:"Benchmarking"},c="Benchmarking",r={id:"reactotron/plugins/benchmark",title:"Benchmarking",description:"If you have a function that you believe is slow, you can benchmark it to find any bottlenecks like this:",source:"@site/docs/reactotron/plugins/benchmark.md",sourceDirName:"reactotron/plugins",slug:"/reactotron/plugins/benchmark",permalink:"/reactotron/plugins/benchmark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Benchmarking"},sidebar:"Reactotron",previous:{title:"AsyncStorage",permalink:"/reactotron/plugins/async-storage"},next:{title:"Mobx State Tree",permalink:"/reactotron/plugins/mst"}},a={},h=[{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"benchmarking",children:"Benchmarking"}),"\n",(0,o.jsx)(n.p,{children:"If you have a function that you believe is slow, you can benchmark it to find any bottlenecks like this:"}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Reactotron from "reactotron-react-native"\n\nfunction slowFunction() {\n  const bench = Reactotron.benchmark("slow function benchmark")\n\n  // Code that does thing A\n  bench.step("Thing A")\n\n  // Code that does thing B\n  bench.step("Thing B")\n\n  // Code that does thing C\n  bench.stop("Thing C")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the last call is to ",(0,o.jsx)(n.code,{children:"stop"})," instead of ",(0,o.jsx)(n.code,{children:"step"}),"! This is important, otherwise the benchmark results won't display in Reactotron."]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"slowFunction"})," is invoked, Reactotron should show something like this:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Benchmarking Output",src:t(5473).A+"",width:"1212",height:"412"})}),"\n",(0,o.jsxs)(n.p,{children:["Tips: Time bar ",(0,o.jsx)(n.code,{children:"Thing B"})," is the code execution time from ",(0,o.jsx)(n.code,{children:'bench.step("Thing A")'})," to ",(0,o.jsx)(n.code,{children:'bench.step("Thing B")'}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5473:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/benchmark-output-ccaa1e1817aaa02a08e099e744f99a14.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);