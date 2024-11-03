"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[364],{761:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(1601),s=t.n(a),o=t(6314),r=t.n(o)()(s());r.push([e.id,".auth {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth p {\n  font-size: 4vh;\n  margin-top: 10vh;\n}\n.auth .small {\n  margin: 0;\n  color: #7E7E7E;\n  font-size: 2vh;\n  margin-left: auto;\n}\n.auth input {\n  margin: 0;\n  padding: 1vh;\n  border-radius: 3.3vh;\n  border: 0.1vh solid black;\n  width: 33vh;\n  height: 5vh;\n  background-color: #F1F1F1;\n  font-size: 2.5vh;\n}\n.auth .field {\n  margin-top: 3vh;\n}\n.auth .field p {\n  font-size: 2.5vh;\n  margin: 0;\n}\n.auth .field .small {\n  margin: 1vh;\n  font-size: 2vh;\n}\n.auth .signinButton {\n  margin-top: 4vh;\n  width: 25vh;\n  height: 5vh;\n  border-radius: 2.5vh;\n  background-color: #B8EE91;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth .signinButton p {\n  font-size: 2.5vh;\n  margin: 0;\n}\n.auth .altSign {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2vh;\n}\n.auth .altSign .logo {\n  width: 7vh;\n  height: 4vh;\n}\n.auth .errorbox {\n  font-size: 2vh;\n  width: 25vh;\n  height: 4vh;\n  color: red;\n}\n.auth .createLink {\n  margin-top: 15vh;\n  font-size: 2vh;\n  color: #7E7E7E;\n}\n.auth .errorp {\n  margin-top: 1vh;\n  font-size: 2vh;\n}\n",""]);const c=r},6716:(e,n,t)=>{t.d(n,{OZ:()=>r,Vi:()=>c,tw:()=>o});var a=t(1083),s=t(9327);const o=(e,n)=>async t=>{try{t(s.I.actions.userFetchProcess());const o=await a.A.post("http://45.82.153.53:8000/account/login/",{username:e,password:n});t(s.I.actions.userFetchSuccess()),localStorage.setItem("accessToken",o.data.access),localStorage.setItem("refreshToken",o.data.refresh),localStorage.setItem("username",e),console.log(localStorage.getItem("accessToken")),console.log(localStorage.getItem("refreshToken"))}catch(e){t(s.I.actions.userFetchError(e.message))}},r=(e,n,t)=>async o=>{try{o(s.I.actions.userFetchProcess());const r=await a.A.post("http://45.82.153.53:8000/account/registration/",{username:e,password:n,email:t});o(s.I.actions.userFetchSuccess()),localStorage.setItem("accessToken",r.data.access),localStorage.setItem("refreshToken",r.data.refresh),localStorage.setItem("username",e)}catch(e){o(s.I.actions.userFetchError(e.message))}},c=e=>async n=>{try{const t={headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}},o={refresh_token:e};n(s.I.actions.userLogOut()),localStorage.clear(),localStorage.setItem("isLogged","false"),await a.A.post("http://45.82.153.53:8000/account/logout/",o,t)}catch(e){}}},7364:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var a=t(6540),s=t(5072),o=t.n(s),r=t(7825),c=t.n(r),l=t(7659),i=t.n(l),u=t(5056),h=t.n(u),g=t(540),m=t.n(g),d=t(1113),p=t.n(d),f=t(761),v={};v.styleTagTransform=p(),v.setAttributes=h(),v.insert=i().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),o()(f.A,v),f.A&&f.A.locals&&f.A.locals;var E=t(7767),k=t(6716),S=t(5583);const y=()=>{const e=(0,S.j)(),{isloading:n,error:t,isLogged:s}=(0,S.G)((e=>e.loginReducer)),o=(0,E.Zp)(),r=e=>{(0,a.startTransition)((()=>{o(e)}))};(0,a.useEffect)((()=>{s&&(localStorage.setItem("isLogged","true"),r("/"))}),[s]),(0,a.useEffect)((()=>{""!==t&&g("incorrect")}),[t]);const[c,l]=(0,a.useState)(""),[i,u]=(0,a.useState)(""),[h,g]=(0,a.useState)("none");return a.createElement("div",{className:"auth"},a.createElement("p",null,"Please sign in your account"),a.createElement("div",{className:"input_fields"},a.createElement("div",{className:"login field"},a.createElement("p",null,"Your login"),a.createElement("input",{onChange:e=>{u(e.target.value)}})),a.createElement("div",{className:"password field"},a.createElement("p",null,"Your password"),a.createElement("input",{type:"password",onChange:e=>{l(e.target.value)}}),a.createElement("p",{className:"small"},"Forgot your password..."))),a.createElement("div",{className:"errorbox"},a.createElement("p",{className:"errorp",style:{display:"none"===h?"none":"block"}},(e=>{switch(e){case"none":return"";case"null":return"All fields must not be empty";case"incorrect email":return"Email has unknown format";case"incorrect":return"Wrong password or login"}})(h))),a.createElement("div",{className:"signinButton",onClick:()=>{(""!==c&&""!==i||(g("null"),0))&&e((0,k.tw)(i,c))}},a.createElement("p",null,n?"Loading...":"Sign in")),a.createElement("div",{className:"altSign"},a.createElement("p",{className:"small",onClick:()=>{console.log(s)}},"Or sign in via"),a.createElement("img",{src:"https://polygon.readthedocs.io/en/latest/_images/github_logo.png",className:"github logo"})),a.createElement("p",{className:"createLink",onClick:()=>{r("/signup")}},"Don't have account? Create one..."))}}}]);