"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[276],{6545:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(1601),o=s.n(a),n=s(6314),r=s.n(n)()(o());r.push([e.id,".box {\n  display: flex;\n  /* Используем Flexbox */\n  justify-content: center;\n  /* Центрируем по вертикали */\n  align-items: center;\n  /* Центрируем по горизонтали */\n}\n.profile {\n  background-color: white;\n  width: 80vw;\n  height: 100vh;\n  font-size: 5vh;\n  border-radius: 3vh;\n  margin: 7vh;\n  margin-top: 2vh;\n}\n",""]);const c=r},6716:(e,t,s)=>{s.d(t,{OZ:()=>r,Vi:()=>c,tw:()=>n});var a=s(1083),o=s(9327);const n=(e,t)=>async s=>{try{s(o.I.actions.userFetchProcess());const n=await a.A.post("http://45.82.153.53:8000/account/login/",{username:e,password:t});s(o.I.actions.userFetchSuccess()),localStorage.setItem("accessToken",n.data.access),localStorage.setItem("refreshToken",n.data.refresh),localStorage.setItem("username",e),console.log(localStorage.getItem("accessToken")),console.log(localStorage.getItem("refreshToken"))}catch(e){s(o.I.actions.userFetchError(e.message))}},r=(e,t,s)=>async n=>{try{n(o.I.actions.userFetchProcess());const r=await a.A.post("http://45.82.153.53:8000/account/registration/",{username:e,password:t,email:s});n(o.I.actions.userFetchSuccess()),localStorage.setItem("accessToken",r.data.access),localStorage.setItem("refreshToken",r.data.refresh),localStorage.setItem("username",e)}catch(e){n(o.I.actions.userFetchError(e.message))}},c=e=>async t=>{try{const s={headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}},n={refresh_token:e};t(o.I.actions.userLogOut()),localStorage.clear(),localStorage.setItem("isLogged","false"),await a.A.post("http://45.82.153.53:8000/account/logout/",n,s)}catch(e){}}},2276:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(6540),o=s(7767),n=s(5583),r=s(6716),c=s(5072),l=s.n(c),i=s(7825),h=s.n(i),g=s(7659),u=s.n(g),m=s(5056),d=s.n(m),f=s(540),p=s.n(f),I=s(1113),k=s.n(I),S=s(6545),T={};T.styleTagTransform=k(),T.setAttributes=d(),T.insert=u().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=p(),l()(S.A,T),S.A&&S.A.locals&&S.A.locals;const v=()=>{const e=(0,n.j)(),t=(0,o.Zp)();return a.createElement("div",{className:"box"},a.createElement("div",{className:"profile"},a.createElement("p",null,"Profile"),a.createElement("p",{onClick:()=>{const s=localStorage.getItem("refreshToken");e((0,r.Vi)(s)),(0,a.startTransition)((()=>{t("/")}))}},"LOG OUT")))}}}]);