"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[431],{4173:(e,n,t)=>{t.d(n,{A:()=>c});var s=t(1601),a=t.n(s),l=t(6314),o=t.n(l)()(a());o.push([e.id,"",""]);const c=o},6431:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var s=t(5072),a=t.n(s),l=t(7825),o=t.n(l),c=t(7659),r=t.n(c),u=t(5056),i=t.n(u),m=t(540),d=t.n(m),f=t(1113),b=t.n(f),g=t(4173),k={};k.styleTagTransform=b(),k.setAttributes=i(),k.insert=r().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=d(),a()(g.A,k),g.A&&g.A.locals&&g.A.locals;var p=t(6540);const h=()=>{const[e,n]=(0,p.useState)("Waiting message");return(0,p.useEffect)((()=>{}),[]),p.createElement("div",{className:"content"},p.createElement("p",null,"Here will be text... "),p.createElement("p",null,e),p.createElement("button",{onClick:()=>{const e=new WebSocket("http://45.82.153.53:1234/ws");e.onopen=()=>{console.log("connected"),e.send(JSON.stringify({code:"def sum(int a,int b):\n return a+b",lang:"python",task_name:"1-sum",username:localStorage.getItem("username")||"drachka"}))},e.onmessage=()=>{}}},"Make connection"))}}}]);