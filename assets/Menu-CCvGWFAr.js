import{d as X,o as ee,r as s,i as m,j as l,a as g,b as c,k as v,t as D,f as u,u as h,l as b,w as U,g as R,c as ae,n as ne,F as j,e as te,h as oe}from"./index-8HLp54tE.js";import{e as F,b as z,c as le,d as G,a as se,u as B}from"./general-fooWENzY.js";const ue={class:"exchange-modal"},ce=c("br",null,null,-1),ie=c("div",null,"🥉От 1,000$ до 5,000$ - 94.152 RUB",-1),re=c("div",null,"🥈От 5,001$ до 15,000$ - 93.966 RUB",-1),de=c("div",null," 🥇От 15,001$ и выше - 93.687 RUB",-1),me={key:0},ge={key:1},he={key:2},pe=X({__name:"ExchangeModal",emits:["close"],setup(H,{emit:T}){const{impactOccurred:S,notificationOccurred:A,selectionChanged:f}=G();F();const{showConfirm:E,showAlert:J,showPopup:C}=z(),{showMainButton:L,hideMainButton:w,showMainButtonProgress:y,hideMainButtonProgress:q,mainButtonText:k,mainButtonColor:i,mainButtonTextColor:_,isMainButtonActive:V,isMainButtonVisible:$,isMainButtonProgressVisible:x,setMainButtonParams:r}=le();ee(()=>{r({text:"Обменять"})});const d=T,n=s(),o=s(),t=s(null),p=s(""),M=s(!0);s([{code:"usdt_aed",exchangeRate:3.674},{code:"aed_usdt",exchangeRate:3.6668},{code:"usdt_usd",exchangeRate:1},{code:"usd_usdt",exchangeRate:1.012},{code:"usd_aed",exchangeRate:3.643},{code:"aed_usd",exchangeRate:3.672},{code:"rub_card",exchangeRate:28.878},{code:"check",exchangeRate:null},{code:"transfer",exchangeRate:null}]);const K=s([{name:"USDT на AED",cur:["USDT","AED"],code:10,exchangeRate:3.674},{name:"AED на USDT",cur:["AED","USDT"],code:20,exchangeRate:3.6668},{name:"USDT на USD",cur:["USDT","USD"],code:30,exchangeRate:1},{name:"USD на USDT",cur:["USD","USDT"],code:30,exchangeRate:1.012},{name:"USD на AED",cur:["USD","AED"],code:50,exchangeRate:3.643},{name:"AED на USD",cur:["AED","USD"],code:50,exchangeRate:3.672},{name:"RUB(card) на AED",cur:["RUB","AED"],code:70,exchangeRate:28.878},{name:"Менеджер-чеки",code:80,exchangeRate:null},{name:"Переводы",code:90,exchangeRate:null}]),Q=()=>({pair:n.value,way:o.value,sum:t.value,wallet:p.value||null}),O=()=>{d("close",Q())};return(xe,e)=>{var W;const P=m("Dropdown"),N=m("InputText"),I=m("Button"),Y=m("tg-main-button");return l(),g("div",ue,[c("div",null,[v("Обратите внимание!"),ce,v(" Курс зависит от суммы, чем больше сумма продажи, тем выгоднее курс. "),c("b",null,D((W=n.value)==null?void 0:W.name),1),ie,re,de]),u(P,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),placeholder:"Выберите пару для обмена",options:K.value,"option-label":"name",onChange:e[1]||(e[1]=a=>h(f)())},null,8,["modelValue","options"]),n.value?(l(),b(P,{key:0,modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value=a),placeholder:"Выберите способ",options:n.value.cur,onChange:e[3]||(e[3]=a=>h(f)())},{option:U(({option:a})=>[v(" Ввести сумму "+D(a),1)]),value:U(({value:a})=>[a?(l(),g("span",me," Ввести сумму "+D(a),1)):(l(),g("span",ge," Выберите способ "))]),_:1},8,["modelValue","options"])):R("",!0),o.value?(l(),b(N,{key:1,modelValue:t.value,"onUpdate:modelValue":e[4]||(e[4]=a=>t.value=a),type:"number",min:"100",step:"100",placeholder:`Сумма ${o.value}`,onInput:e[5]||(e[5]=a=>h(S)("soft"))},null,8,["modelValue","placeholder"])):R("",!0),o.value&&t.value>0&&M.value&&n.value.cur.includes("USDT")?(l(),g("div",he,[u(N,{modelValue:p.value,"onUpdate:modelValue":e[6]||(e[6]=a=>p.value=a),placeholder:"Введите адрес вашего USDT-кошелька",style:{width:"100%"},onInput:e[7]||(e[7]=a=>h(S)("soft"))},null,8,["modelValue"]),u(I,{label:"Пропустить ввод кошелька",onClick:e[8]||(e[8]=a=>{M.value=!1,p.value=""})})])):R("",!0),u(I,{disabled:!n.value||!o.value||!t.value,label:"Подтвердить",style:{"margin-top":"30px"},onClick:e[9]||(e[9]=a=>O())},null,8,["disabled"]),n.value&&o.value&&t.value?(l(),b(Y,{key:3,onClick:e[10]||(e[10]=a=>h(E)(`
        Вы действительно хотите обменять: ${t.value} ${o.value}
         По курсу: ${n.value.exchangeRate}. 
         Вы отдаете ХХХ, 
         Вы получаете XXXX,
         
         После создания заявки курс фиксируется на 1 час(-а)`,Z=>Z?O():null))})):R("",!0)])}}}),De={class:"exchange-offers__item"},Ue=X({__name:"Menu",setup(H){const{version:T,platform:S,initData:A,initDataUnsafe:f,sendData:E}=se(),{showConfirm:J,showAlert:C,showPopup:L}=z();F();const{impactOccurred:w,notificationOccurred:y,selectionChanged:q}=G(),k=oe(),i=s(!1),_=ae(()=>{if(B().currentCity.code==="dubai")return[{name:"USDT на AED",exchangeRate:3.674},{name:"AED на USDT",exchangeRate:3.6668},{name:"USDT на USD",exchangeRate:1},{name:"USD на USDT",exchangeRate:1.012},{name:"USD на AED",exchangeRate:3.643},{name:"AED на USD",exchangeRate:3.672},{name:"RUB(card) на AED",exchangeRate:28.878},{name:"Менеджер-чеки",exchangeRate:null},{name:"Переводы",exchangeRate:null}];if(B().currentCity.code==="moscow")return[{name:"RUB на USDT",exchangeRate:3.674},{name:"USDT на RUB",exchangeRate:3.6668},{name:"USD на USDT",exchangeRate:1.012},{name:"USDT на USD",exchangeRate:1},{name:"USDT на RUB(card)",exchangeRate:28.878},{name:"RUB(card) на USDT",exchangeRate:28.878},{name:"EUR на USDT",exchangeRate:1.012},{name:"USDT на EUR",exchangeRate:1},{name:"USD на AED",exchangeRate:3.643},{name:"AED на USD",exchangeRate:3.672},{name:"RUB на AED",exchangeRate:28.878},{name:"Менеджер-чеки",exchangeRate:null},{name:"Переводы",exchangeRate:null}];if(B().currentCity.code!=="moscow")return[{name:"RUB на USDT",exchangeRate:3.674},{name:"USDT на RUB",exchangeRate:3.6668},{name:"USDT на RUB(card)",exchangeRate:28.878},{name:"RUB(card) на USDT",exchangeRate:28.878},{name:"Менеджер-чеки",exchangeRate:null},{name:"Переводы",exchangeRate:null}]}),V=()=>{i.value?i.value=!1:k.back()},$=x=>{console.log(x),fetch("https://test-bot-888.invi.pw/api/70013d3c-f63c-4e1d-8255-1895707e7980",{method:"POST",body:JSON.stringify(Object.assign(x,{_auth:A||""})),credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(d){return d.json()}).then(function(d){}).catch(function(d){}),i.value=!1,y("success"),C("Успешно, ваша заявка принята. Отправили вам детали обмена.")};return(x,r)=>{const d=m("tg-back-button"),n=m("Button"),o=m("Dialog");return l(),g(j,null,[c("section",null,[u(d,{onClick:V}),c("ul",{class:ne(["exchange-offers",{odd:_.value.length%2!==0}])},[(l(!0),g(j,null,te(_.value,t=>(l(),g("li",De,[u(n,{severity:"secondary",onClick:r[0]||(r[0]=p=>{i.value=!0,h(w)("heavy")})},{default:U(()=>[v(D(t.name)+" до "+D(t.exchangeRate),1)]),_:2},1024)]))),256))],2)]),u(o,{visible:i.value,"onUpdate:visible":r[1]||(r[1]=t=>i.value=t),modal:"",draggable:!1,header:"Обмен валют",style:{width:"100%",height:"100%"}},{default:U(()=>[u(pe,{onClose:$})]),_:1},8,["visible"])],64)}}});export{Ue as default};