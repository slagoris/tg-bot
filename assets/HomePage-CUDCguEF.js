import{u as S,a as w,b as A,c as U}from"./useWebAppViewport-kwrsVSYu.js";import{d as E,o as T,r as n,c as l,a as m,b as c,F as V,e as L,u as o,f as p,w as B,g as P,h as $,i as C,j as d,t as h,n as N,k as W}from"./index-8Da3eBJi.js";import{u}from"./general-CzkmfN4V.js";const j="/tg-bot/assets/lang-ru-Cj8QMIhV.jpg",F=c("div",{style:{width:"100%","margin-bottom":"30px","max-height":"568px"}},[c("img",{src:j,alt:"logo 7gg",width:"100%"})],-1),H=c("h1",null,"Выберите язык",-1),O=["textContent"],z=["textContent"],G={key:0},ue=E({__name:"HomePage",setup(I){const g=$();T(()=>{var t;x({text:((t=u().currentLang)==null?void 0:t.name)||""})}),n(null),n(!1);const s=n("lang"),r=n(),i=n(),b=n([{name:"Русский",flag:"🇷🇺",code:"ru"},{name:"English",flag:"🇬🇧",code:"en"},{name:"Chinese",flag:"🇨🇳",code:"ch"}]);n([{name:"Дубай",code:"dubai",selected:!1},{name:"Москва",code:"moscow",selected:!1},{name:"Другие города РФ",code:"other",selected:!1}]),n([{name:"USDT на AED",code:"usdt_aed",exchangeRate:"до 3.674"},{name:"AED на USDT",code:"aed_usdt",exchangeRate:"до 3.6668"},{name:"USDT на USD",code:"usdt_usd",exchangeRate:"до 1"},{name:"USD на USDT",code:"usd_usdt",exchangeRate:"до 1.012"},{name:"USD на AED",code:"usd_aed",exchangeRate:"до 3.643"},{name:"AED на USD",code:"aed_usd",exchangeRate:"до 3.672"},{name:"RUB(card) на AED",code:"rub_card",exchangeRate:"до 28.878"},{name:"Менеджер-чеки",code:"check",exchangeRate:null},{name:"Переводы",code:"transfer",exchangeRate:null}]),n([{name:"Обменять валюты"},{name:"История услуг"},{name:"Связаться с менеджером"},{name:"Курсы"},{name:"Реферал"},{name:"Наши услуги"}]);const D=t=>{u().setLang(t),x({text:t.name}),y()};l(()=>{var t,a;switch(s.value){case"lang":return`${(t=r==null?void 0:r.value)==null?void 0:t.name}  →  Далее`;case"city":return`${(a=i==null?void 0:i.value)==null?void 0:a.name}  →  Далее`}}),l(()=>{switch(s.value){case"lang":return;case"city":return"lang";case"menu":return"city"}}),l(()=>{switch(s.value){case"lang":return"city";case"city":return"menu"}}),S(),w();const{showMainButton:y,hideMainButton:Q,showMainButtonProgress:q,hideMainButtonProgress:J,mainButtonText:K,mainButtonColor:X,mainButtonTextColor:Y,isMainButtonActive:_,isMainButtonVisible:k,isMainButtonProgressVisible:Z,setMainButtonParams:x}=A(),{impactOccurred:M,notificationOccurred:ee,selectionChanged:te}=U();return l(()=>!(!k.value||_.value&&s.value==="lang"&&!r.value||_.value&&s.value==="city"&&!i.value||s.value==="menu")),(t,a)=>{const f=C("Button"),R=C("tg-main-button");return d(),m("section",null,[F,H,c("ul",null,[(d(!0),m(V,null,L(b.value,(e,ne)=>{var v;return d(),m("li",{key:e.code},[p(f,{onClick:ae=>{D(e),o(M)("heavy")},class:N({active:((v=o(u)().currentLang)==null?void 0:v.code)===e.code})},{default:B(()=>[c("span",{textContent:h(e==null?void 0:e.name)},null,8,O),c("span",{textContent:h(e==null?void 0:e.flag),style:{"margin-left":"10px"}},null,8,z)]),_:2},1032,["onClick","class"])])}),128))]),o(u)().currentLang?(d(),m("div",G,[p(f,{onClick:a[0]||(a[0]=e=>o(g).push("/city"))},{default:B(()=>[W(h(o(u)().currentLang.name)+" > Далее",1)]),_:1}),p(R,{onClick:a[1]||(a[1]=e=>o(g).push("/city"))})])):P("",!0)])}}});export{ue as default};
