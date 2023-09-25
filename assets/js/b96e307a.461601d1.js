"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[6279],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),g=l,h=d["".concat(o,".").concat(g)]||d[g]||c[g]||n;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(7462),l=(a(7294),a(3905));const n={},s=void 0,i={unversionedId:"gluegun/toolbox-strings",id:"gluegun/toolbox-strings",title:"toolbox-strings",description:"Provides some helper functions to work with strings. This list is also added to the available filters",source:"@site/docs/gluegun/toolbox-strings.md",sourceDirName:"gluegun",slug:"/gluegun/toolbox-strings",permalink:"/ir-docs/docs/gluegun/toolbox-strings",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gluegun",previous:{title:"toolbox-semver",permalink:"/ir-docs/docs/gluegun/toolbox-semver"},next:{title:"toolbox-system",permalink:"/ir-docs/docs/gluegun/toolbox-system"}},o={},p=[{value:"<strong>Utility</strong>",id:"utility",level:2},{value:"identity",id:"identity",level:2},{value:"isBlank",id:"isblank",level:2},{value:"isNotString",id:"isnotstring",level:2},{value:"<strong>Growing</strong>",id:"growing",level:2},{value:"pad",id:"pad",level:2},{value:"padStart",id:"padstart",level:2},{value:"padEnd",id:"padend",level:2},{value:"repeat",id:"repeat",level:2},{value:"<strong>Shrinking</strong>",id:"shrinking",level:2},{value:"trim",id:"trim",level:2},{value:"trimStart",id:"trimstart",level:2},{value:"trimEnd",id:"trimend",level:2},{value:"<strong>Case Conversion</strong>",id:"case-conversion",level:2},{value:"camelCase",id:"camelcase",level:2},{value:"kebabCase",id:"kebabcase",level:2},{value:"snakeCase",id:"snakecase",level:2},{value:"upperCase",id:"uppercase",level:2},{value:"lowerCase",id:"lowercase",level:2},{value:"startCase",id:"startcase",level:2},{value:"upperFirst",id:"upperfirst",level:2},{value:"lowerFirst",id:"lowerfirst",level:2},{value:"pascalCase",id:"pascalcase",level:2},{value:"pluralize",id:"pluralize",level:2},{value:"plural",id:"plural",level:2},{value:"singular",id:"singular",level:2},{value:"isPlural",id:"isplural",level:2},{value:"isSingular",id:"issingular",level:2},{value:"addPluralRule",id:"addpluralrule",level:2},{value:"addSingularRule",id:"addsingularrule",level:2},{value:"addIrregularRule",id:"addirregularrule",level:2},{value:"addUncountableRule",id:"adduncountablerule",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Provides some helper functions to work with strings. This list is also added to the available filters\ninside your EJS templates."),(0,l.kt)("p",null,"You can access these tools on the Gluegun toolbox, via ",(0,l.kt)("inlineCode",{parentName:"p"},"const { strings } = require('gluegun')"),", or directly via ",(0,l.kt)("inlineCode",{parentName:"p"},"const { strings } = require('gluegun/strings')"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"utility"},(0,l.kt)("strong",{parentName:"h2"},"Utility")),(0,l.kt)("h2",{id:"identity"},"identity"),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("strong",{parentName:"p"},"input")," as ",(0,l.kt)("strong",{parentName:"p"},"output"),". Great for functional programming like sorting or fallbacks."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," arguments ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," can be ",(0,l.kt)("inlineCode",{parentName:"li"},"any")," type which becomes the return value of this function.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," returns ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," that was passed in")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"identity('hello') // hello\nidentity(4) // 4\nidentity([1, 'a']) // [1, 'a']\n")),(0,l.kt)("h2",{id:"isblank"},"isBlank"),(0,l.kt)("p",null,"Determines if a string is empty by trimming it first."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"isBlank('') // true\nisBlank('   ') // true\n")),(0,l.kt)("h2",{id:"isnotstring"},"isNotString"),(0,l.kt)("p",null,"Tests a value to see if it is not a string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"isNotString(true) // true\nisNotString(null) // true\nisNotString(undefined) // true\nisNotString(123) // true\nisNotString('hi') // false\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"growing"},(0,l.kt)("strong",{parentName:"h2"},"Growing")),(0,l.kt)("h2",{id:"pad"},"pad"),(0,l.kt)("p",null,"Centers a string to a given length."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"pad('hola', 20) // '        hola        '\n")),(0,l.kt)("h2",{id:"padstart"},"padStart"),(0,l.kt)("p",null,"Fills a string to a certain length by adding characters to the front."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"padStart('hello', 10, '.') // '.....hello'\n")),(0,l.kt)("h2",{id:"padend"},"padEnd"),(0,l.kt)("p",null,"Fills a string to a certain length by adding characters to the end."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"padEnd('hello', 10, '!') // 'hello!!!!!'\n")),(0,l.kt)("h2",{id:"repeat"},"repeat"),(0,l.kt)("p",null,"Repeats a string a number of times to make a pattern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"repeat('x', 3) // 'xxx'\nrepeat('xo', 3) // 'xoxoxo'\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"shrinking"},(0,l.kt)("strong",{parentName:"h2"},"Shrinking")),(0,l.kt)("h2",{id:"trim"},"trim"),(0,l.kt)("p",null,"Strips white space from both the start and end of a string, but not the middle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"trim('    kevin   spacey    ') // 'kevin   spacey'\n")),(0,l.kt)("h2",{id:"trimstart"},"trimStart"),(0,l.kt)("p",null,"Strips white space from the start of a string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"trimStart('          hi ') // 'hi '\n")),(0,l.kt)("h2",{id:"trimend"},"trimEnd"),(0,l.kt)("p",null,"Strips white space from the end of a string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"trimEnd('windows!\\r\\n') // 'windows!'\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"case-conversion"},(0,l.kt)("strong",{parentName:"h2"},"Case Conversion")),(0,l.kt)("h2",{id:"camelcase"},"camelCase"),(0,l.kt)("p",null,"Capitalizes the first letter of each word it smashes together on word boundaries. The first letter becomes lowercase. Puncuation gets dropped."),(0,l.kt)("p",null,"Great for assembling javascript variable names."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"camelCase('hello there') // 'helloThere'\ncamelCase('Hello there') // 'helloThere'\ncamelCase('abc123') // 'abc123'\ncamelCase('Y M C A') // 'yMCA'\ncamelCase('Welcome to ZOMBO.com') // 'welcomeToZomboCom'\ncamelCase('XMLHttpRequest is strange.') // 'xmlHttpRequestIsStrange'\ncamelCase('OSnap') // 'oSnap'\ncamelCase('this.is.sparta!') // 'thisIsSparta'\n")),(0,l.kt)("h2",{id:"kebabcase"},"kebabCase"),(0,l.kt)("p",null,"Skewers words by placing - characters between them and downcasing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"kebabCase('hello there') // 'hello-there'\nkebabCase('Hello there') // 'hello-there'\nkebabCase('abc123') // 'abc-123'\nkebabCase('Y M C A') // 'y-m-c-a'\nkebabCase('Welcome to ZOMBO.com') // 'welcome-to-zombo-com'\nkebabCase('XMLHttpRequest is strange.') // 'xml-http-request-is-strange'\nkebabCase('OSnap') // 'o-snap'\nkebabCase('this.is.sparta!') // 'this-is-sparta'\n")),(0,l.kt)("h2",{id:"snakecase"},"snakeCase"),(0,l.kt)("p",null,"Joins words together with underscores after splitting up into word boundaries."),(0,l.kt)("p",null,"Great for ruby and some apis."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"snakeCase('hello there') // 'hello_there'\nsnakeCase('Hello there') // 'hello_there'\nsnakeCase('abc123') // 'abc_123'\nsnakeCase('Y M C A') // 'y_m_c_a'\nsnakeCase('Welcome to ZOMBO.com') // 'welcome_to_zombo_com'\nsnakeCase('XMLHttpRequest is strange.') // 'xml_http_request_is_strange'\nsnakeCase('OSnap') // 'o_snap'\nsnakeCase('this.is.sparta!') // 'this_is_sparta'\n")),(0,l.kt)("h2",{id:"uppercase"},"upperCase"),(0,l.kt)("p",null,"A staple in every troll's toolbelt, this makes everything uppercase."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upperCase('hello there') // 'HELLO THERE'\nupperCase('Hello there') // 'HELLO THERE'\nupperCase('abc123') // 'ABC 123'\nupperCase('Y M C A') // 'Y M C A'\nupperCase('Welcome to ZOMBO.com') // 'WELCOME TO ZOMBO COM'\nupperCase('XMLHttpRequest is strange.') // 'XML HTTP REQUEST IS STRANGE'\nupperCase('OSnap') // 'O SNAP'\nupperCase('this.is.sparta!') // 'THIS IS SPARTA'\n")),(0,l.kt)("h2",{id:"lowercase"},"lowerCase"),(0,l.kt)("p",null,"This makes everything lower case."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"lowerCase('hello there') // 'hello there'\nlowerCase('Hello there') // 'hello there'\nlowerCase('abc123') // 'abc 123'\nlowerCase('Y M C A') // 'y m c a'\nlowerCase('Welcome to ZOMBO.com') // 'welcome to zombo com'\nlowerCase('XMLHttpRequest is strange.') // 'xml http request is strange'\nlowerCase('OSnap') // 'o snap'\nlowerCase('this.is.sparta!') // 'this is sparta'\n")),(0,l.kt)("h2",{id:"startcase"},"startCase"),(0,l.kt)("p",null,"Uppercases the first letter of each word after dicing up on word boundaries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"startCase('hello there') // 'Hello There'\nstartCase('Hello there') // 'Hello There'\nstartCase('abc123') // 'Abc 123'\nstartCase('Y M C A') // 'Y M C A'\nstartCase('Welcome to ZOMBO.com') // 'Welcome To ZOMBO Com'\nstartCase('XMLHttpRequest is strange.') // 'XML Http Request Is Strange'\nstartCase('OSnap') // 'O Snap'\nstartCase('this.is.sparta!') // 'This Is Sparta'\n")),(0,l.kt)("h2",{id:"upperfirst"},"upperFirst"),(0,l.kt)("p",null,"Uppercases the first letter of the string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upperFirst('hello there') // 'Hello there'\nupperFirst('Hello there') // 'Hello there'\nupperFirst('abc123') // 'Abc123'\nupperFirst('Y M C A') // 'Y M C A'\nupperFirst('Welcome to ZOMBO.com') // 'Welcome to ZOMBO.com'\nupperFirst('XMLHttpRequest is strange.') // 'XMLHttpRequest is strange.'\nupperFirst('OSnap') // 'OSnap'\nupperFirst('this.is.sparta!') // 'This.is.sparta!'\n")),(0,l.kt)("h2",{id:"lowerfirst"},"lowerFirst"),(0,l.kt)("p",null,"Lowercases the first letter of the string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"lowerFirst('hello there') // 'hello there'\nlowerFirst('Hello there') // 'hello there'\nlowerFirst('abc123') // 'abc123'\nlowerFirst('Y M C A') // 'y M C A'\nlowerFirst('Welcome to ZOMBO.com') // 'welcome to ZOMBO.com'\nlowerFirst('XMLHttpRequest is strange.') // 'xMLHttpRequest is strange.'\nlowerFirst('OSnap') // 'oSnap'\nlowerFirst('this.is.sparta!') // 'this.is.sparta!'\n")),(0,l.kt)("h2",{id:"pascalcase"},"pascalCase"),(0,l.kt)("p",null,"This is ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"upperFirst"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"pascalCase('hello there') // 'HelloThere'\npascalCase('Hello there') // 'HelloThere'\npascalCase('abc123') // 'Abc123'\npascalCase('Y M C A') // 'YMCA'\npascalCase('Welcome to ZOMBO.com') // 'WelcomeToZomboCom'\npascalCase('XMLHttpRequest is strange.') // 'XmlHttpRequestIsStrange'\npascalCase('OSnap') // 'OSnap'\npascalCase('this.is.sparta!') // 'ThisIsSparta'\n")),(0,l.kt)("h2",{id:"pluralize"},"pluralize"),(0,l.kt)("p",null,"Pluralize or singularize a word based on the passed in count."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pluralize('test', 1) // 'test'\npluralize('test', 5) // 'tests'\npluralize('test', 1, true) // '1 test'\npluralize('test', 5, true) // '5 tests'\n")),(0,l.kt)("h2",{id:"plural"},"plural"),(0,l.kt)("p",null,"Converts a given singular word to plural."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"plural('bug') // 'bugs'\nplural('word') // 'words'\n")),(0,l.kt)("h2",{id:"singular"},"singular"),(0,l.kt)("p",null,"Converts a given plural word to singular."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"singular('bugs') // 'bug'\nsingular('words') // 'word'\n")),(0,l.kt)("h2",{id:"isplural"},"isPlural"),(0,l.kt)("p",null,"Checks if the give word is plural."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"isPlural('bugs') // true\nisPlural('bug') // false\n")),(0,l.kt)("h2",{id:"issingular"},"isSingular"),(0,l.kt)("p",null,"Checks if the give word is singular."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"isSingular('bugs') // false\nisSingular('bug') // true\n")),(0,l.kt)("h2",{id:"addpluralrule"},"addPluralRule"),(0,l.kt)("p",null,"Adds a pluralization rule for the given singular word when calling plural."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"addPluralRule('regex', 'regexii')\naddPluralRule(/regex$/, 'regexii')\n")),(0,l.kt)("h2",{id:"addsingularrule"},"addSingularRule"),(0,l.kt)("p",null,"Adds a pluralization rule for the given plural word when calling singular."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"addSingularRule('regexii', 'regex')\naddSingularRule(/regexii$/, 'regex')\n")),(0,l.kt)("h2",{id:"addirregularrule"},"addIrregularRule"),(0,l.kt)("p",null,"Adds a pluralization rule for the given irregular word when calling plural."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"addIrregularRule('octopus', 'octopodes')\n")),(0,l.kt)("h2",{id:"adduncountablerule"},"addUncountableRule"),(0,l.kt)("p",null,"Exempts the given uncountable word from pluralization so that calling plural or singular with that word will return the same word unchanged."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"addUncountableRule('paper')\n")))}c.isMDXComponent=!0}}]);