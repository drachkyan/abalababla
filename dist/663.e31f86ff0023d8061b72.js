"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[663],{3541:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(1601),r=t.n(a),l=t(6314),s=t.n(l)()(r());s.push([e.id,".auth {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth p {\n  font-size: 4vh;\n  margin-top: 6vh;\n}\n.auth .small {\n  margin: 0;\n  color: #7E7E7E;\n  font-size: 2vh;\n  margin-left: auto;\n}\n.auth input {\n  margin: 0;\n  padding: 1vh;\n  border-radius: 3.3vh;\n  border: 0.1vh solid black;\n  width: 33vh;\n  height: 5vh;\n  background-color: #F1F1F1;\n  font-size: 2.5vh;\n}\n.auth .field {\n  margin-top: 3vh;\n}\n.auth .field p {\n  font-size: 2.5vh;\n  margin: 0;\n}\n.auth .field .small {\n  margin: 1vh;\n  font-size: 2vh;\n}\n.auth .signinButton {\n  margin-top: 3vh;\n  width: 25vh;\n  height: 5vh;\n  border-radius: 2.5vh;\n  background-color: #B8EE91;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth .signinButton p {\n  font-size: 2.5vh;\n  margin: 0;\n}\n.auth .altSign {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2vh;\n}\n.auth .altSign .logo {\n  width: 7vh;\n  height: 4vh;\n}\n.auth .errorbox {\n  font-size: 2vh;\n  width: 25vh;\n  height: 4vh;\n  color: red;\n}\n.auth .errorp {\n  margin-top: 1vh;\n  font-size: 2vh;\n}\n",""]);const i=s},3663:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var a=t(6540),r=t(5072),l=t.n(r),s=t(7825),i=t.n(s),o=t(7659),c=t.n(o),u=t(5056),h=t.n(u),m=t(540),d=t.n(m),g=t(1113),p=t.n(g),f=t(3541),v={};v.styleTagTransform=p(),v.setAttributes=h(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),l()(f.A,v),f.A&&f.A.locals&&f.A.locals;var E=t(7767),w=t(6716),b=t(5583);const y=()=>{const e=(0,b.j)(),{isloading:n,error:t,isLogged:r}=(0,b.G)((e=>e.loginReducer)),[l,s]=(0,a.useState)(""),[i,o]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[h,m]=(0,a.useState)(""),[d,g]=(0,a.useState)("none"),p=(0,E.Zp)();return(0,a.useEffect)((()=>{r&&(localStorage.setItem("isLogged","true"),(0,a.startTransition)((()=>{p("/")})))}),[r]),(0,a.useEffect)((()=>{""!==t&&g("incorrect")}),[t]),a.createElement("div",{className:"auth"},a.createElement("p",null,"Please create account"),a.createElement("div",{className:"input_fields"},a.createElement("div",{className:"login field"},a.createElement("p",null,"Your name"),a.createElement("input",{onChange:e=>{u(e.target.value)}})),a.createElement("div",{className:"login field"},a.createElement("p",null,"Your email"),a.createElement("input",{onChange:e=>{m(e.target.value)}})),a.createElement("div",{className:"password field"},a.createElement("p",null,"Your password"),a.createElement("input",{type:"password",onChange:e=>{s(e.target.value)}})),a.createElement("div",{className:"password field"},a.createElement("p",null,"Repeat your password"),a.createElement("input",{type:"password",onChange:e=>{o(e.target.value)}}))),a.createElement("div",{className:"errorbox"},a.createElement("p",{className:"errorp",style:{display:"none"===d?"none":"block"}},(e=>{switch(e){case"none":return"";case"null":return"All fields must not be empty";case"different passwords":return"Passwords are not the same";case"incorrect email":return"Email has unknown format";case"incorrect":return"Username is already taken"}})(d))),a.createElement("div",{className:"signinButton",onClick:()=>{((e,n,t,a)=>{if(""!==e&&""!==n&&""!==a&&""!==t)if(e===n){if(t.split("@").length>1&&t.split(".").length>1)return g("none"),!0;g("incorrect email")}else g("different passwords");else g("null");return!1})(l,i,h,c)&&e((0,w.OZ)(c,l,h))}},a.createElement("p",null,"Create account")),a.createElement("div",{className:"altSign"},a.createElement("p",{className:"small"},"Or sign up via"),a.createElement("img",{src:"https://polygon.readthedocs.io/en/latest/_images/github_logo.png",className:"github logo"})))}}}]);