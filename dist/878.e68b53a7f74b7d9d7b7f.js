"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[878],{8777:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1601),o=n.n(r),c=n(6314),i=n.n(c)()(o());i.push([e.id,".custom-select-container {\n  position: relative;\n  width: 10vw;\n  font-size: 3vh;\n}\n.custom-select {\n  border: 1px solid #ccc;\n  padding: 1vh;\n  cursor: pointer;\n  border-radius: 0.2vw;\n  background-color: #fff;\n  display: flex;\n}\n.custom-select .triangle {\n  margin-left: auto;\n  margin-top: 0.5vh;\n  width: 3vh;\n  height: 3vh;\n}\n.custom-select-options {\n  border: 1px solid #ccc;\n  position: absolute;\n  background-color: #fff;\n  border-radius: 0.2vw;\n  z-index: 1000;\n}\n.custom-select-option {\n  padding: 10px;\n  cursor: pointer;\n}\n.custom-select-option:hover {\n  background-color: #f0f0f0;\n}\n",""]);const a=i},3609:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1601),o=n.n(r),c=n(6314),i=n.n(c)()(o());i.push([e.id,".apply {\n  margin-top: 2vh;\n  margin: 1vh;\n  width: 25vh;\n  height: 5vh;\n  border-radius: 2.5vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.apply p {\n  font-size: 2.5vh;\n  margin: 0;\n}\n.notloading {\n  background-color: #B8EE91;\n}\n.loading {\n  background-color: #acccab;\n}\n.vanish {\n  display: none;\n}\n.editor-menu {\n  display: flex;\n  padding: 2vh;\n}\n.notAuth {\n  margin: 2vh;\n  font-size: 2vh;\n}\n",""]);const a=i},4878:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Oe});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return t.apply(n,[].concat(o,r))}}}function f(e){return{}.toString.call(e).includes("Object")}function g(e){return"function"==typeof e}var p=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),h=function(e,t){return f(t)||p("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&p("changeField"),t},m=function(e){g(e)||p("selectorType")},v=function(e){g(e)||f(e)||p("handlerType"),f(e)&&Object.values(e).some((function(e){return!g(e)}))&&p("handlersType")},y=function(e){var t;e||p("initialIsRequired"),f(e)||p("initialType"),t=e,Object.keys(t).length||p("initialContent")};function b(e,t){return g(t)?t(e.current):t}function w(e,t){return e.current=s(s({},e.current),t),t}function O(e,t,n){return g(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}const E={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y(e),v(t);var n={current:e},r=d(O)(n,t),o=d(w)(n),c=d(h)(e),i=d(b)(n);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return m(e),e(n.current)},function(e){!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}(r,o,c,i)(e)}]}};var j,k={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},M=(j=function(e,t){throw new Error(e[t]||e.default)},function e(){for(var t=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length>=j.length?j.apply(this,r):function(){for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e.apply(t,[].concat(r,o))}})(k);const S={config:function(e){return e||M("configIsRequired"),t=e,{}.toString.call(t).includes("Object")||M("configType"),e.urls?(console.warn(k.deprecation),{paths:{vs:e.urls.monacoBase}}):e;var t}},P=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),i(i({},t),n)};var A={type:"cancelation",msg:"operation is manually canceled"};const R=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(A):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n};var C,I=function(e){if(Array.isArray(e))return e}(C=E.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(t.push(c.value),2!==t.length);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return t}}(C)||function(e){if(e){if("string"==typeof e)return a(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,2):void 0}}(C)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=I[0],T=I[1];function N(e){return document.body.appendChild(e)}function L(e){var t,n,r=x((function(e){return{config:e.config,reject:e.reject}})),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function z(){var e=x((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){D(t),e.resolve(t)}),(function(t){e.reject(t)}))}function D(e){x().monaco||T({monaco:e})}var V=new Promise((function(e,t){return T({resolve:e,reject:t})})),q={config:function(e){var t=S.config(e),n=t.monaco,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["monaco"]);T((function(e){return{config:P(e.config,r),monaco:n}}))},init:function(){var e=x((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(T({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),R(V);if(window.monaco&&window.monaco.editor)return D(window.monaco),e.resolve(window.monaco),R(V);!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}(N,L)(z)}return R(V)},__getMonacoInstance:function(){return x((function(e){return e.monaco}))}};const _=q;var F={display:"flex",position:"relative",textAlign:"initial"},B={width:"100%"},U={display:"none"},Y={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},G=function({children:e}){return r.createElement("div",{style:Y.container},e)},J=(0,r.memo)((function({width:e,height:t,isEditorReady:n,loading:o,_ref:c,className:i,wrapperProps:a}){return r.createElement("section",{style:{...F,width:e,height:t},...a},!n&&r.createElement(G,null,o),r.createElement("div",{ref:c,style:{...B,...!n&&U},className:i}))})),W=function(e){(0,r.useEffect)(e,[])},$=function(e,t,n=!0){let o=(0,r.useRef)(!0);(0,r.useEffect)(o.current||!n?()=>{o.current=!1}:e,t)};function H(){}function K(e,t,n,r){return function(e,t){return e.editor.getModel(Q(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r?Q(e,r):void 0)}(e,t,n,r)}function Q(e,t){return e.Uri.parse(t)}(0,r.memo)((function({original:e,modified:t,language:n,originalLanguage:o,modifiedLanguage:c,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:u=!1,keepCurrentModifiedModel:l=!1,theme:s="light",loading:d="Loading...",options:f={},height:g="100%",width:p="100%",className:h,wrapperProps:m={},beforeMount:v=H,onMount:y=H}){let[b,w]=(0,r.useState)(!1),[O,E]=(0,r.useState)(!0),j=(0,r.useRef)(null),k=(0,r.useRef)(null),M=(0,r.useRef)(null),S=(0,r.useRef)(y),P=(0,r.useRef)(v),A=(0,r.useRef)(!1);W((()=>{let e=_.init();return e.then((e=>(k.current=e)&&E(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){let e=j.current?.getModel();u||e?.original?.dispose(),l||e?.modified?.dispose(),j.current?.dispose()}():e.cancel()})),$((()=>{if(j.current&&k.current){let t=j.current.getOriginalEditor(),r=K(k.current,e||"",o||n||"text",i||"");r!==t.getModel()&&t.setModel(r)}}),[i],b),$((()=>{if(j.current&&k.current){let e=j.current.getModifiedEditor(),r=K(k.current,t||"",c||n||"text",a||"");r!==e.getModel()&&e.setModel(r)}}),[a],b),$((()=>{let e=j.current.getModifiedEditor();e.getOption(k.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],b),$((()=>{j.current?.getModel()?.original.setValue(e||"")}),[e],b),$((()=>{let{original:e,modified:t}=j.current.getModel();k.current.editor.setModelLanguage(e,o||n||"text"),k.current.editor.setModelLanguage(t,c||n||"text")}),[n,o,c],b),$((()=>{k.current?.editor.setTheme(s)}),[s],b),$((()=>{j.current?.updateOptions(f)}),[f],b);let R=(0,r.useCallback)((()=>{if(!k.current)return;P.current(k.current);let r=K(k.current,e||"",o||n||"text",i||""),u=K(k.current,t||"",c||n||"text",a||"");j.current?.setModel({original:r,modified:u})}),[n,t,c,e,o,i,a]),C=(0,r.useCallback)((()=>{!A.current&&M.current&&(j.current=k.current.editor.createDiffEditor(M.current,{automaticLayout:!0,...f}),R(),k.current?.editor.setTheme(s),w(!0),A.current=!0)}),[f,s,R]);return(0,r.useEffect)((()=>{b&&S.current(j.current,k.current)}),[b]),(0,r.useEffect)((()=>{!O&&!b&&C()}),[O,b,C]),r.createElement(J,{width:p,height:g,isEditorReady:b,loading:d,_ref:M,className:h,wrapperProps:m})}));var X=new Map,Z=(0,r.memo)((function({defaultValue:e,defaultLanguage:t,defaultPath:n,value:o,language:c,path:i,theme:a="light",line:u,loading:l="Loading...",options:s={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:g=!1,width:p="100%",height:h="100%",className:m,wrapperProps:v={},beforeMount:y=H,onMount:b=H,onChange:w,onValidate:O=H}){let[E,j]=(0,r.useState)(!1),[k,M]=(0,r.useState)(!0),S=(0,r.useRef)(null),P=(0,r.useRef)(null),A=(0,r.useRef)(null),R=(0,r.useRef)(b),C=(0,r.useRef)(y),I=(0,r.useRef)(),x=(0,r.useRef)(o),T=function(e){let t=(0,r.useRef)();return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current}(i),N=(0,r.useRef)(!1),L=(0,r.useRef)(!1);W((()=>{let e=_.init();return e.then((e=>(S.current=e)&&M(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>P.current?(I.current?.dispose(),g?f&&X.set(i,P.current.saveViewState()):P.current.getModel()?.dispose(),void P.current.dispose()):e.cancel()})),$((()=>{let r=K(S.current,e||o||"",t||c||"",i||n||"");r!==P.current?.getModel()&&(f&&X.set(T,P.current?.saveViewState()),P.current?.setModel(r),f&&P.current?.restoreViewState(X.get(i)))}),[i],E),$((()=>{P.current?.updateOptions(s)}),[s],E),$((()=>{!P.current||void 0===o||(P.current.getOption(S.current.editor.EditorOption.readOnly)?P.current.setValue(o):o!==P.current.getValue()&&(L.current=!0,P.current.executeEdits("",[{range:P.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),P.current.pushUndoStop(),L.current=!1))}),[o],E),$((()=>{let e=P.current?.getModel();e&&c&&S.current?.editor.setModelLanguage(e,c)}),[c],E),$((()=>{void 0!==u&&P.current?.revealLine(u)}),[u],E),$((()=>{S.current?.editor.setTheme(a)}),[a],E);let z=(0,r.useCallback)((()=>{if(A.current&&S.current&&!N.current){C.current(S.current);let r=i||n,l=K(S.current,o||e||"",t||c||"",r||"");P.current=S.current?.editor.create(A.current,{model:l,automaticLayout:!0,...s},d),f&&P.current.restoreViewState(X.get(r)),S.current.editor.setTheme(a),void 0!==u&&P.current.revealLine(u),j(!0),N.current=!0}}),[e,t,n,o,c,i,s,d,f,a,u]);return(0,r.useEffect)((()=>{E&&R.current(P.current,S.current)}),[E]),(0,r.useEffect)((()=>{!k&&!E&&z()}),[k,E,z]),x.current=o,(0,r.useEffect)((()=>{E&&w&&(I.current?.dispose(),I.current=P.current?.onDidChangeModelContent((e=>{L.current||w(P.current.getValue(),e)})))}),[E,w]),(0,r.useEffect)((()=>{if(E){let e=S.current.editor.onDidChangeMarkers((e=>{let t=P.current.getModel()?.uri;if(t&&e.find((e=>e.path===t.path))){let e=S.current.editor.getModelMarkers({resource:t});O?.(e)}}));return()=>{e?.dispose()}}return()=>{}}),[E,O]),r.createElement(J,{width:p,height:h,isEditorReady:E,loading:l,_ref:A,className:m,wrapperProps:v})})),ee=n(7767),te=n(5072),ne=n.n(te),re=n(7825),oe=n.n(re),ce=n(7659),ie=n.n(ce),ae=n(5056),ue=n.n(ae),le=n(540),se=n.n(le),de=n(1113),fe=n.n(de),ge=n(3609),pe={};pe.styleTagTransform=fe(),pe.setAttributes=ue(),pe.insert=ie().bind(null,"head"),pe.domAPI=oe(),pe.insertStyleElement=se(),ne()(ge.A,pe),ge.A&&ge.A.locals&&ge.A.locals;var he=n(8777),me={};me.styleTagTransform=fe(),me.setAttributes=ue(),me.insert=ie().bind(null,"head"),me.domAPI=oe(),me.insertStyleElement=se(),ne()(he.A,me),he.A&&he.A.locals&&he.A.locals;const ve=({options:e,selectedOption:t,onChange:n})=>{const[o,c]=(0,r.useState)(!1);return r.createElement("div",{className:"custom-select-container"},r.createElement("div",{className:"custom-select",onClick:()=>c(!o)},e.find((e=>e.value===t))?.label||"Select an option",r.createElement("img",{className:"triangle",src:"https://cdn0.iconfinder.com/data/icons/arrow-153/20/triangle_bottom-1024.png"})),o&&r.createElement("div",{className:"custom-select-options"},e.map((e=>r.createElement("div",{key:e.value,className:"custom-select-option",onClick:()=>{return t=e.value,n(t),void c(!1);var t}},e.label)))))},ye=({taskState:e})=>{const[t,n]=(0,r.useState)("cpp"),o=(0,ee.zy)().pathname.split("/"),[c,i]=(0,r.useState)(),[a,u]=(0,r.useState)(!1),[l,s]=(0,r.useState)(localStorage.getItem("isLogged"));return(0,r.useEffect)((()=>{switch(t){case"py":i(localStorage.getItem(t+o[o.length-1])||e.patterns.python);break;case"cpp":i(localStorage.getItem(t+o[o.length-1])||e.patterns.cpp);break;case"go":i(localStorage.getItem(t+o[o.length-1])||e.patterns.go);break;default:i("")}}),[t,e]),console.log(l),localStorage.getItem("username"),r.createElement("div",{className:"CodeEditor"},r.createElement("div",{className:"editor-menu"},r.createElement(ve,{options:[{value:"cpp",label:"C++"},{value:"py",label:"Python"},{value:"go",label:"Go"}],selectedOption:t,onChange:e=>{n(e)}}),"true"===l?r.createElement("div",{className:"apply "+(a?"loading":"notloading"),onClick:()=>{a?console.log("testing..."):(()=>{localStorage.setItem(t+o[o.length-1],c);const n=new WebSocket("http://45.82.153.53:1234/ws");u(!0),n.onopen=()=>{console.log("Sending code..."),n.send(JSON.stringify({code:c,lang:t,task_name:e.name,token:localStorage.getItem("accessToken")}))},n.onmessage=e=>{console.log(e.data),u(!1)}})()}},r.createElement("p",null,"Run")):r.createElement("div",{className:"notAuth"},"You need to log in to send your solution...")),r.createElement(Z,{height:"50vh",width:"50vh",defaultLanguage:t,value:c,onChange:e=>{void 0!==e&&i(e)}}))};n(2832);var be=n(1083);const we={name:"",patterns:{python:"",cpp:"",go:""},desc:"",cat:0},Oe=()=>{const[e,t]=(0,r.useState)(we),n=(0,ee.zy)().pathname.split("/");return(0,r.useEffect)((()=>{(async e=>await be.A.get("http://45.82.153.53:8000/code/"+e+"/"))(n[n.length-1]).then((e=>{t(e.data)}))}),[]),r.createElement("div",{className:"taskSolver"},r.createElement("div",{className:"leftside"},r.createElement("div",{className:"taskDescription"},r.createElement("h1",null,e.name),r.createElement("p",{onClick:()=>{console.log(e.patterns.python)}},e.desc),r.createElement("h2",null,"Limits"),r.createElement("div",{className:"limits"},r.createElement("p",null,"Time: ","10s"),r.createElement("p",null,"Memory: ","1488 kB"))),r.createElement("div",{className:"testCases"},r.createElement("h1",null,"Test cases"),r.createElement("div",{className:"casesList"}))),r.createElement("div",{className:"rightside"},r.createElement(ye,{taskState:e})))}}}]);