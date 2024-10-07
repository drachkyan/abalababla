"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[364],{761:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(1601),l=t.n(a),r=t(6314),i=t.n(r)()(l());i.push([n.id,".auth {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth p {\n  font-size: 4vh;\n  margin-top: 10vh;\n}\n.auth .small {\n  margin: 0;\n  color: #7E7E7E;\n  font-size: 2vh;\n  margin-left: auto;\n}\n.auth input {\n  margin: 0;\n  padding: 1vh;\n  border-radius: 3.3vh;\n  border: 0.1vh solid black;\n  width: 33vh;\n  height: 5vh;\n  background-color: #F1F1F1;\n  font-size: 2.5vh;\n}\n.auth .field {\n  margin-top: 3vh;\n}\n.auth .field p {\n  font-size: 2.5vh;\n  margin: 0;\n}\n.auth .field .small {\n  margin: 1vh;\n  font-size: 2vh;\n}\n.auth .signinButton {\n  margin-top: 4vh;\n  width: 25vh;\n  height: 5vh;\n  border-radius: 2.5vh;\n  background-color: #B8EE91;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth .signinButton p {\n  font-size: 2.5vh;\n  margin: 0;\n}\n.auth .altSign {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2vh;\n}\n.auth .altSign .logo {\n  width: 7vh;\n  height: 4vh;\n}\n.auth .errorbox {\n  font-size: 2vh;\n  width: 25vh;\n  height: 4vh;\n  color: red;\n}\n.auth .createLink {\n  font-size: 2vh;\n  color: #7E7E7E;\n}\n.auth .errorp {\n  margin-top: 1vh;\n  font-size: 2vh;\n}\n",""]);const s=i},7364:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var a=t(6540),l=t(5072),r=t.n(l),i=t(7825),s=t.n(i),o=t(7659),c=t.n(o),h=t(5056),u=t.n(h),m=t(540),g=t.n(m),d=t(1113),p=t.n(d),v=t(761),f={};f.styleTagTransform=p(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=g(),r()(v.A,f),v.A&&v.A.locals&&v.A.locals;var E=t(7767);const b=()=>{const n=(0,E.Zp)(),[e,t]=(0,a.useState)(""),[l,r]=(0,a.useState)(""),[i,s]=(0,a.useState)("none");return a.createElement("div",{className:"auth"},a.createElement("p",null,"Please sign in your account"),a.createElement("div",{className:"input_fields"},a.createElement("div",{className:"login field"},a.createElement("p",null,"Your email"),a.createElement("input",{onChange:n=>{r(n.target.value)}})),a.createElement("div",{className:"password field"},a.createElement("p",null,"Your password"),a.createElement("input",{type:"password",onChange:n=>{t(n.target.value)}}),a.createElement("p",{className:"small"},"Forgot your password"))),a.createElement("div",{className:"errorbox"},a.createElement("p",{className:"errorp",style:{display:"none"===i?"none":"block"}},(n=>{switch(n){case"none":return"";case"null":return"All fields must not be empty";case"incorrect email":return"Email has unknown format"}})(i))),a.createElement("div",{className:"signinButton",onClick:()=>{((n,e)=>{if(""!==n&&""!==e){if(e.split("@").length>1&&e.split(".").length>1)return!0;s("incorrect email")}else s("null");return!1})(e,l)&&console.log("user created")}},a.createElement("p",null,"Sign in")),a.createElement("div",{className:"altSign"},a.createElement("p",{className:"small"},"Or sign in via"),a.createElement("img",{src:"https://polygon.readthedocs.io/en/latest/_images/github_logo.png",className:"github logo"})),a.createElement("p",{className:"createLink",onClick:()=>{(0,a.startTransition)((()=>{n("/signup")}))}},"Don't have account? Create one..."))}}}]);