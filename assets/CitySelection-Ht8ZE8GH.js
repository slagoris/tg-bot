import{d as x,o as h,r as _,a as r,f as s,w as c,u as n,b as k,F as y,e as V,g as w,h as $,i as m,j as u,k as d,t as B,n as N}from"./index-8Da3eBJi.js";import{b as P}from"./useWebAppViewport-kwrsVSYu.js";import{u as a}from"./general-CzkmfN4V.js";const S={class:"page"},T=k("h1",null,"Выберите город",-1),A={key:0},O=x({__name:"CitySelection",setup(F){const{showMainButton:b,hideMainButton:j,showMainButtonProgress:z,hideMainButtonProgress:D,mainButtonText:E,mainButtonColor:G,mainButtonTextColor:L,isMainButtonActive:R,isMainButtonVisible:W,isMainButtonProgressVisible:q,setMainButtonParams:C}=P();h(()=>{var o;C({text:((o=a().currentCity)==null?void 0:o.name)||""})});const i=$();_();const f=_([{name:"Дубай",code:"dubai"},{name:"Москва",code:"moscow"},{name:"Другие города РФ",code:"other",selected:!1}]),g=o=>{a().setCity(o),C({text:o.name}),b()};return(o,e)=>{const l=m("Button"),v=m("tg-back-button"),M=m("tg-main-button");return u(),r("section",S,[s(l,{onClick:e[0]||(e[0]=t=>n(i).back())},{default:c(()=>[d("НАЗАД")]),_:1}),s(v,{onClick:e[1]||(e[1]=t=>n(i).back())}),T,k("ul",null,[(u(!0),r(y,null,V(f.value,t=>{var p;return u(),r("li",{key:t.code},[s(l,{onClick:H=>g(t),class:N({active:((p=n(a)().currentCity)==null?void 0:p.code)===t.code})},{default:c(()=>[d(B(t.name),1)]),_:2},1032,["onClick","class"])])}),128))]),n(a)().currentCity?(u(),r("div",A,[s(l,{onClick:e[2]||(e[2]=t=>n(i).push("/menu"))},{default:c(()=>{var t;return[d(B((t=n(a)().currentCity)==null?void 0:t.name)+" > Далее",1)]}),_:1}),s(M,{onClick:e[3]||(e[3]=t=>n(i).push("/menu"))})])):w("",!0)])}}});export{O as default};
