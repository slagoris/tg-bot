import{d as v,r as c,a as i,b as n,u as o,f as d,F as x,e as f,t as g,g as M,h as y,i as p,j as a,n as V}from"./index-D7BWqSZ9.js";import{b as $}from"./useWebAppViewport-B2X8ShTY.js";import{u as r}from"./general-Vg9Rgs7o.js";const w="/tg-bot/assets/Logo7Gates-gold-C_y0YgZV.svg",P={class:"page"},N=n("div",{style:{width:"100%","margin-bottom":"30px"}},[n("img",{src:w,alt:"logo 7gg",style:{"margin-bottom":"30px",height:"100%","max-height":"100px"}})],-1),S=n("h1",null,"Выберите город",-1),A=["onClick"],F={key:0},K=v({__name:"CitySelection",setup(G){const{showMainButton:_,hideMainButton:L,showMainButtonProgress:T,hideMainButtonProgress:j,mainButtonText:z,mainButtonColor:D,mainButtonTextColor:E,isMainButtonActive:R,isMainButtonVisible:W,isMainButtonProgressVisible:Y,setMainButtonParams:b}=$(),s=y();c();const C=c([{name:"Дубай",code:"dubai"},{name:"Москва",code:"moscow"},{name:"Другие города РФ",code:"other",selected:!1}]),B=(u,t)=>{r().setCity(u),b({text:u.name}),_()};return(u,t)=>{var m;const k=p("tg-back-button"),h=p("tg-main-button");return a(),i("section",P,[n("button",{onClick:t[0]||(t[0]=e=>o(s).back())},"НАЗАД"),d(k,{onClick:t[1]||(t[1]=e=>o(s).back())}),N,S,n("ul",null,[(a(!0),i(x,null,f(C.value,(e,Z)=>{var l;return a(),i("li",{key:e.code},[n("button",{onClick:q=>B(e),class:V({active:((l=o(r)().currentCity)==null?void 0:l.code)===e.code})},g(e.name),11,A)])}),128))]),o(r)().currentCity?(a(),i("div",F,[n("button",{onClick:t[2]||(t[2]=e=>o(s).push("/menu"))},g((m=o(r)().currentCity)==null?void 0:m.name)+" > Далее",1),d(h,{onClick:t[3]||(t[3]=e=>o(s).push("/menu"))})])):M("",!0)])}}});export{K as default};
