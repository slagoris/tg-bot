import{r as t,k as x,o as w,l as V,c as i,m as y}from"./index-KgeKFXLO.js";const{initData:S,initDataUnsafe:k,version:E,platform:D,isVersionAtLeast:L,sendData:H,close:U}=Telegram.WebApp,B=t(!1),R=(...e)=>{Telegram.WebApp.ready(...e),B.value=!0},W=e=>Telegram.WebApp.platform===e,M=W("unknown"),F=!M&&Telegram.WebApp.initData==="";function l(){return{initData:S,initDataUnsafe:k,version:E,platform:D,isVersionAtLeast:L,onEvent:(...a)=>{w(()=>Telegram.WebApp.onEvent(...a)),V(()=>Telegram.WebApp.offEvent(...a))},sendData:H,ready:R,close:U,isReady:x(B),isPlatform:W,isPlatformUnknown:M,canSendData:F}}t(Telegram.WebApp.BackButton.isVisible);Telegram.WebApp;t(Telegram.WebApp.isClosingConfirmationEnabled);Telegram.WebApp.CloudStorage;Telegram.WebApp.HapticFeedback;const d=t(Telegram.WebApp.MainButton.text),v=t(Telegram.WebApp.MainButton.color),f=t(Telegram.WebApp.MainButton.textColor),C=t(Telegram.WebApp.MainButton.isVisible),P=t(Telegram.WebApp.MainButton.isActive),h=t(Telegram.WebApp.MainButton.isProgressVisible);function o(){d.value=Telegram.WebApp.MainButton.text,v.value=Telegram.WebApp.MainButton.color,f.value=Telegram.WebApp.MainButton.textColor,C.value=Telegram.WebApp.MainButton.isVisible,P.value=Telegram.WebApp.MainButton.isActive,h.value=Telegram.WebApp.MainButton.isProgressVisible}function u(...e){Telegram.WebApp.MainButton.setText(...e),o()}function g(...e){Telegram.WebApp.MainButton.show(...e),o()}function b(...e){Telegram.WebApp.MainButton.hide(...e),o()}function m(...e){Telegram.WebApp.MainButton.enable(...e),o()}function c(...e){Telegram.WebApp.MainButton.disable(...e),o()}function A(...e){Telegram.WebApp.MainButton.showProgress(...e),o()}function T(...e){Telegram.WebApp.MainButton.hideProgress(...e),o()}function p(...e){Telegram.WebApp.MainButton.setParams(...e),o()}function J(){const{onEvent:e}=l(),a=n=>e("mainButtonClicked",n);return{mainButtonText:i({get(){return d.value},set(n){u(n)}}),mainButtonColor:i({get(){return v.value},set(n){p({color:n})}}),mainButtonTextColor:i({get(){return f.value},set(n){p({text_color:n})}}),isMainButtonVisible:i({get(){return C.value},set(n){n?g():b()}}),isMainButtonActive:i({get(){return P.value},set(n){n?m():c()}}),isMainButtonProgressVisible:i({get(){return h.value},set(n){n?A():T()}}),setMainButtonText:u,onMainButtonClicked:a,showMainButton:g,hideMainButton:b,enableMainButton:m,disableMainButton:c,showMainButtonProgress:A,hideMainButtonProgress:T,setMainButtonParams:p}}Telegram.WebApp;const{showPopup:G,showAlert:_,showConfirm:j}=Telegram.WebApp;function K(){const{onEvent:e}=l();return{showPopup:G,showAlert:_,showConfirm:j,onPopupClosed:n=>e("popupClosed",n)}}Telegram.WebApp;Telegram.WebApp;l();t(Telegram.WebApp.SettingsButton.isVisible);t(Telegram.WebApp.colorScheme);t(Telegram.WebApp.themeParams);t(Telegram.WebApp.headerColor);t(Telegram.WebApp.backgroundColor);t(Telegram.WebApp.isExpanded);t(Telegram.WebApp.viewportHeight);t(Telegram.WebApp.viewportStableHeight);const N=y("generalStore",()=>{const e=t(),a=s=>{e.value=s},n=()=>e,r=t();return{currentLang:e,setLang:a,getLang:n,currentCity:r,getCity:()=>r,setCity:s=>{r.value=s}}});export{K as a,J as b,N as c,l as u};
