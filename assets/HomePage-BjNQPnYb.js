import{u as P,a as L,b as I,c as N}from"./useWebAppViewport-BgwGTQTD.js";import{d as M,r as n,a as c,o as _,c as g,b as a,e as W,f as x,g as r,F as U,h as j,w as f,u as m,i as F,j as H,t as V,n as O,k}from"./index-jkm9NAh1.js";import{u as b}from"./general-DaGoAB9h.js";const z="/tg-bot/assets/lang-ru-Cj8QMIhV.jpg",G={class:"exchange-modal"},Q=M({__name:"ExchangeModal",setup(S){const u=n(),i=n(),s=n("");return(p,t)=>{const v=c("Dropdown"),h=c("InputText"),B=c("Button"),C=c("tg-main-button");return _(),g("div",G,[a(v,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=l=>u.value=l),placeholder:"Выберите пару для обмена",options:[1,2,3]},null,8,["modelValue"]),a(v,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),placeholder:"Выберите способ",options:[1,2]},null,8,["modelValue"]),a(h,{type:"number",min:"100",step:"100",modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=l=>u.value=l),placeholder:""},null,8,["modelValue"]),a(h,{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value=l),placeholder:"Введите адрес вашего USDT-кошелька"},null,8,["modelValue"]),a(B,{label:"Подтвердить"}),a(C)])}}}),q=r("div",{style:{width:"100%","margin-bottom":"30px","max-height":"568px"}},[r("img",{src:z,alt:"logo 7gg",width:"100%"})],-1),J=r("h1",null,"Выберите язык",-1),K=["textContent"],X=["textContent"],Y={key:0},de=M({__name:"HomePage",setup(S){const u=H();W(()=>{}),n(null);const i=n(!1),s=n("lang"),p=n(),t=n(),v=n([{name:"Русский",flag:"🇷🇺",code:"ru"},{name:"English",flag:"🇬🇧",code:"en"},{name:"Chinese",flag:"🇨🇳",code:"ch"}]);n([{name:"Дубай",code:"dubai",selected:!1},{name:"Москва",code:"moscow",selected:!1},{name:"Другие города РФ",code:"other",selected:!1}]),n([{name:"USDT на AED",code:"usdt_aed",exchangeRate:"до 3.674"},{name:"AED на USDT",code:"aed_usdt",exchangeRate:"до 3.6668"},{name:"USDT на USD",code:"usdt_usd",exchangeRate:"до 1"},{name:"USD на USDT",code:"usd_usdt",exchangeRate:"до 1.012"},{name:"USD на AED",code:"usd_aed",exchangeRate:"до 3.643"},{name:"AED на USD",code:"aed_usd",exchangeRate:"до 3.672"},{name:"RUB(card) на AED",code:"rub_card",exchangeRate:"до 28.878"},{name:"Менеджер-чеки",code:"check",exchangeRate:null},{name:"Переводы",code:"transfer",exchangeRate:null}]),n([{name:"Обменять валюты"},{name:"История услуг"},{name:"Связаться с менеджером"},{name:"Курсы"},{name:"Реферал"},{name:"Наши услуги"}]);const h=d=>{b().setLang(d),R({text:d.name}),B()};x(()=>{var d,o;switch(s.value){case"lang":return`${(d=p==null?void 0:p.value)==null?void 0:d.name}  →  Далее`;case"city":return`${(o=t==null?void 0:t.value)==null?void 0:o.name}  →  Далее`}}),x(()=>{switch(s.value){case"lang":return;case"city":return"lang";case"menu":return"city"}}),x(()=>{switch(s.value){case"lang":return"city";case"city":return"menu"}}),P(),L();const{showMainButton:B,hideMainButton:C,showMainButtonProgress:l,hideMainButtonProgress:Z,mainButtonText:ee,mainButtonColor:te,mainButtonTextColor:ne,isMainButtonActive:y,isMainButtonVisible:T,isMainButtonProgressVisible:ae,setMainButtonParams:R}=I(),{impactOccurred:A,notificationOccurred:oe,selectionChanged:se}=N();return x(()=>!(!T.value||y.value&&s.value==="lang"&&!p.value||y.value&&s.value==="city"&&!t.value||s.value==="menu")),(d,o)=>{const D=c("Button"),E=c("tg-main-button"),$=c("Dialog");return _(),g(U,null,[r("section",null,[q,J,r("ul",null,[(_(!0),g(U,null,j(v.value,(e,le)=>{var w;return _(),g("li",{key:e.code},[a(D,{onClick:ue=>{h(e),m(A)("heavy")},class:O({active:((w=m(b)().currentLang)==null?void 0:w.code)===e.code})},{default:f(()=>[r("span",{textContent:V(e==null?void 0:e.name)},null,8,K),r("span",{textContent:V(e==null?void 0:e.flag),style:{"margin-left":"10px"}},null,8,X)]),_:2},1032,["onClick","class"])])}),128))]),a(D,{onClick:o[0]||(o[0]=e=>i.value=!0)},{default:f(()=>[k("Popup")]),_:1}),m(b)().currentLang?(_(),g("div",Y,[a(D,{onClick:o[1]||(o[1]=e=>m(u).push("/city"))},{default:f(()=>[k(V(m(b)().currentLang.name)+" > Далее",1)]),_:1}),a(E,{onClick:o[2]||(o[2]=e=>m(u).push("/city"))})])):F("",!0)]),a($,{visible:i.value,"onUpdate:visible":o[3]||(o[3]=e=>i.value=e),modal:"",draggable:!1,header:"TITLE",style:{width:"100%",height:"100%"}},{default:f(()=>[a(Q)]),_:1},8,["visible"])],64)}}});export{de as default};
