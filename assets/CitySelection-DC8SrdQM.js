import{d as x,r as C,a,f as o,w as c,u as n,b as B,F as h,e as V,g as w,h as y,i as m,j as i,k as d,t as _,n as $}from"./index-Bo6yDT6P.js";import{b as N}from"./useWebAppViewport-DAX1LAnK.js";import{u as r}from"./general-COW1Uojr.js";const P={class:"page"},S=B("h1",null,"Выберите город",-1),T={key:0},K=x({__name:"CitySelection",setup(A){const{showMainButton:k,hideMainButton:F,showMainButtonProgress:j,hideMainButtonProgress:z,mainButtonText:D,mainButtonColor:E,mainButtonTextColor:G,isMainButtonActive:L,isMainButtonVisible:R,isMainButtonProgressVisible:W,setMainButtonParams:b}=N(),s=y();C();const f=C([{name:"Дубай",code:"dubai"},{name:"Москва",code:"moscow"},{name:"Другие города РФ",code:"other",selected:!1}]),g=u=>{r().setCity(u),b({text:u.name}),k()};return(u,e)=>{const l=m("Button"),v=m("tg-back-button"),M=m("tg-main-button");return i(),a("section",P,[o(l,{onClick:e[0]||(e[0]=t=>n(s).back())},{default:c(()=>[d("НАЗАД")]),_:1}),o(v,{onClick:e[1]||(e[1]=t=>n(s).back())}),S,B("ul",null,[(i(!0),a(h,null,V(f.value,t=>{var p;return i(),a("li",{key:t.code},[o(l,{onClick:q=>g(t),class:$({active:((p=n(r)().currentCity)==null?void 0:p.code)===t.code})},{default:c(()=>[d(_(t.name),1)]),_:2},1032,["onClick","class"])])}),128))]),n(r)().currentCity?(i(),a("div",T,[o(l,{onClick:e[2]||(e[2]=t=>n(s).push("/menu"))},{default:c(()=>{var t;return[d(_((t=n(r)().currentCity)==null?void 0:t.name)+" > Далее",1)]}),_:1}),o(M,{onClick:e[3]||(e[3]=t=>n(s).push("/menu"))})])):w("",!0)])}}});export{K as default};
