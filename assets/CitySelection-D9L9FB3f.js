import{u as b}from"./useWebAppViewport-Dj9Jl2ff.js";import{d as C,o as h,r as c,c as s,g as m,h as d,a as e,F as _,b as k,t as g,i as f,u as x,e as y,f as a}from"./index-ByhnlNHS.js";const B="/tg-bot/assets/Logo7Gates-gold-C_y0YgZV.svg",V=e("div",{style:{width:"100%","margin-bottom":"30px"}},[e("img",{src:B,alt:"logo 7gg",style:{"margin-bottom":"30px",height:"100%","max-height":"100px"}})],-1),$=e("h1",null,"Выберите город",-1),N=["onClick"],w={key:0},A=C({__name:"CitySelection",setup(F){h(()=>{});const l=x(),t=c(),p=c([{name:"Дубай",code:"dubai"},{name:"Москва",code:"moscow"},{name:"Другие города РФ",code:"other"}]),v=i=>{t.value=i};return b(),(i,o)=>{var u;const r=y("tg-main-button");return a(),s(_,null,[m(r,{onClick:o[0]||(o[0]=n=>d(l).back())}),e("section",null,[V,$,e("ul",null,[(a(!0),s(_,null,k(p.value,n=>(a(),s("li",null,[e("button",{onClick:L=>v(n)},g(n.name),9,N)]))),256))]),t.value?(a(),s("div",w,g(t.value.name),1)):f("",!0)]),m(r,{text:`Выбран город: ${(u=t.value)==null?void 0:u.name}  →  Далее`,onClick:o[1]||(o[1]=n=>d(l).back())},null,8,["text"])],64)}}});export{A as default};
