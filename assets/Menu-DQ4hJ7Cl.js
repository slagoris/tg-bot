import{d as f,r as c,a,b as e,u as s,f as b,t as l,l as R,F as m,e as i,h as U,i as v,j as o,m as p}from"./index-C2gxogXu.js";import{u as k,a as S}from"./useWebAppViewport-_nNe7MSc.js";const A="/tg-bot/assets/greet-ru-Cv90H5PP.jpg",C=e("div",{style:{width:"100%","margin-bottom":"30px","max-height":"568px"}},[e("img",{src:A,alt:"menu 7gg",width:"100%"})],-1),E=e("ul",null,[e("li",null,"💠 Первый в мире обменный пункт, который делится прибылью со своими клиентами💰"),e("li",null,"💠 Самые выгодные курсы на покупку/продажу валюты, криптовалюты, менеджер-чеков"),e("li",null,"💠 Быстрый, безопасный обмен USDT, RUB, AED, USD в офисах компании или с доставкой")],-1),w={class:"exchange-offers"},T={class:"menu"},B={class:"menu__item"},$=["onClick"],L=f({__name:"Menu",setup(P){const{version:N,platform:V,initData:j,initDataUnsafe:g,sendData:y}=k(),{showConfirm:F,showAlert:h,showPopup:G}=S(),r=U(),_=c([{name:"USDT на AED",exchangeRate:"до 3.674"},{name:"AED на USDT",exchangeRate:"до 3.6668"},{name:"USDT на USD",exchangeRate:"до 1"},{name:"USD на USDT",exchangeRate:"до 1.012"},{name:"USD на AED",exchangeRate:"до 3.643"},{name:"AED на USD",exchangeRate:"до 3.672"},{name:"RUB(card) на AED",exchangeRate:"до 28.878"},{name:"Менеджер-чеки",exchangeRate:null},{name:"Переводы",exchangeRate:null}]),x=c([{name:"Обменять валюты"},{name:"История услуг"},{name:"Связаться с менеджером"},{name:"Курсы"},{name:"Реферал"},{name:"Наши услуги"}]);return(M,t)=>{var u;const D=v("tg-back-button");return o(),a("section",null,[e("button",{onClick:t[0]||(t[0]=n=>s(r).back())},"НАЗАД"),b(D,{onClick:t[1]||(t[1]=n=>s(r).back())}),C,e("h1",null,[e("span",null,"@"+l((u=s(g).user)==null?void 0:u.username)+", ",1),R("Добро пожаловать в 7GG 🤝")]),E,e("ul",w,[(o(!0),a(m,null,i(_.value,n=>(o(),a("li",{class:"exchange-offers__item",onClick:t[2]||(t[2]=p(d=>{s(r).push("/exchange")},["prevent"]))},l(n.name)+" "+l(n.exchangeRate),1))),256))]),e("ul",T,[(o(!0),a(m,null,i(x.value,n=>(o(),a("li",B,[e("button",{onClick:p(d=>{s(h)(`${n.name}`)},["prevent"])},l(n.name),9,$)]))),256))])])}}});export{L as default};
