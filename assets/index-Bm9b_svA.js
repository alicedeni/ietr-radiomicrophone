(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Jh={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function AM(){if(Y0)return gl;Y0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return gl.Fragment=e,gl.jsx=n,gl.jsxs=n,gl}var K0;function RM(){return K0||(K0=1,Jh.exports=AM()),Jh.exports}var _e=RM(),$h={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function CM(){if(Z0)return rt;Z0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function S(P,J,ye){this.props=P,this.context=J,this.refs=M,this.updater=ye||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=S.prototype;function N(P,J,ye){this.props=P,this.context=J,this.refs=M,this.updater=ye||b}var L=N.prototype=new w;L.constructor=N,A(L,S.prototype),L.isPureReactComponent=!0;var G=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function I(P,J,ye){var Ae=ye.ref;return{$$typeof:r,type:P,key:J,ref:Ae!==void 0?Ae:null,props:ye}}function K(P,J){return I(P.type,J,P.props)}function z(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function q(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return J[ye]})}var se=/\/+/g;function ce(P,J){return typeof P=="object"&&P!==null&&P.key!=null?q(""+P.key):J.toString(36)}function X(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function U(P,J,ye,Ae,De){var re=typeof P;(re==="undefined"||re==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(re){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case r:case e:Se=!0;break;case _:return Se=P._init,U(Se(P._payload),J,ye,Ae,De)}}if(Se)return De=De(P),Se=Ae===""?"."+ce(P,0):Ae,G(De)?(ye="",Se!=null&&(ye=Se.replace(se,"$&/")+"/"),U(De,J,ye,"",function(tt){return tt})):De!=null&&(z(De)&&(De=K(De,ye+(De.key==null||P&&P.key===De.key?"":(""+De.key).replace(se,"$&/")+"/")+Se)),J.push(De)),1;Se=0;var Ee=Ae===""?".":Ae+":";if(G(P))for(var He=0;He<P.length;He++)Ae=P[He],re=Ee+ce(Ae,He),Se+=U(Ae,J,ye,re,De);else if(He=x(P),typeof He=="function")for(P=He.call(P),He=0;!(Ae=P.next()).done;)Ae=Ae.value,re=Ee+ce(Ae,He++),Se+=U(Ae,J,ye,re,De);else if(re==="object"){if(typeof P.then=="function")return U(X(P),J,ye,Ae,De);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function F(P,J,ye){if(P==null)return P;var Ae=[],De=0;return U(P,Ae,"","",function(re){return J.call(ye,re,De++)}),Ae}function oe(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var he=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xe={map:F,forEach:function(P,J,ye){F(P,function(){J.apply(this,arguments)},ye)},count:function(P){var J=0;return F(P,function(){J++}),J},toArray:function(P){return F(P,function(J){return J})||[]},only:function(P){if(!z(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=g,rt.Children=xe,rt.Component=S,rt.Fragment=n,rt.Profiler=o,rt.PureComponent=N,rt.StrictMode=a,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,J,ye){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ae=A({},P.props),De=P.key;if(J!=null)for(re in J.key!==void 0&&(De=""+J.key),J)!T.call(J,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&J.ref===void 0||(Ae[re]=J[re]);var re=arguments.length-2;if(re===1)Ae.children=ye;else if(1<re){for(var Se=Array(re),Ee=0;Ee<re;Ee++)Se[Ee]=arguments[Ee+2];Ae.children=Se}return I(P.type,De,Ae)},rt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,J,ye){var Ae,De={},re=null;if(J!=null)for(Ae in J.key!==void 0&&(re=""+J.key),J)T.call(J,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(De[Ae]=J[Ae]);var Se=arguments.length-2;if(Se===1)De.children=ye;else if(1<Se){for(var Ee=Array(Se),He=0;He<Se;He++)Ee[He]=arguments[He+2];De.children=Ee}if(P&&P.defaultProps)for(Ae in Se=P.defaultProps,Se)De[Ae]===void 0&&(De[Ae]=Se[Ae]);return I(P,re,De)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:h,render:P}},rt.isValidElement=z,rt.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:oe}},rt.memo=function(P,J){return{$$typeof:d,type:P,compare:J===void 0?null:J}},rt.startTransition=function(P){var J=B.T,ye={};B.T=ye;try{var Ae=P(),De=B.S;De!==null&&De(ye,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(O,he)}catch(re){he(re)}finally{J!==null&&ye.types!==null&&(J.types=ye.types),B.T=J}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(P){return B.H.use(P)},rt.useActionState=function(P,J,ye){return B.H.useActionState(P,J,ye)},rt.useCallback=function(P,J){return B.H.useCallback(P,J)},rt.useContext=function(P){return B.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,J){return B.H.useDeferredValue(P,J)},rt.useEffect=function(P,J){return B.H.useEffect(P,J)},rt.useEffectEvent=function(P){return B.H.useEffectEvent(P)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(P,J,ye){return B.H.useImperativeHandle(P,J,ye)},rt.useInsertionEffect=function(P,J){return B.H.useInsertionEffect(P,J)},rt.useLayoutEffect=function(P,J){return B.H.useLayoutEffect(P,J)},rt.useMemo=function(P,J){return B.H.useMemo(P,J)},rt.useOptimistic=function(P,J){return B.H.useOptimistic(P,J)},rt.useReducer=function(P,J,ye){return B.H.useReducer(P,J,ye)},rt.useRef=function(P){return B.H.useRef(P)},rt.useState=function(P){return B.H.useState(P)},rt.useSyncExternalStore=function(P,J,ye){return B.H.useSyncExternalStore(P,J,ye)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.2.7",rt}var Q0;function Gp(){return Q0||(Q0=1,$h.exports=CM()),$h.exports}var zn=Gp(),ed={exports:{}},_l={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function wM(){return J0||(J0=1,(function(r){function e(U,F){var oe=U.length;U.push(F);e:for(;0<oe;){var he=oe-1>>>1,xe=U[he];if(0<o(xe,F))U[he]=F,U[oe]=xe,oe=he;else break e}}function n(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var F=U[0],oe=U.pop();if(oe!==F){U[0]=oe;e:for(var he=0,xe=U.length,P=xe>>>1;he<P;){var J=2*(he+1)-1,ye=U[J],Ae=J+1,De=U[Ae];if(0>o(ye,oe))Ae<xe&&0>o(De,ye)?(U[he]=De,U[Ae]=oe,he=Ae):(U[he]=ye,U[J]=oe,he=J);else if(Ae<xe&&0>o(De,oe))U[he]=De,U[Ae]=oe,he=Ae;else break e}}return F}function o(U,F){var oe=U.sortIndex-F.sortIndex;return oe!==0?oe:U.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var p=[],d=[],_=1,g=null,v=3,x=!1,b=!1,A=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var F=n(d);F!==null;){if(F.callback===null)a(d);else if(F.startTime<=U)a(d),F.sortIndex=F.expirationTime,e(p,F);else break;F=n(d)}}function G(U){if(A=!1,L(U),!b)if(n(p)!==null)b=!0,O||(O=!0,q());else{var F=n(d);F!==null&&X(G,F.startTime-U)}}var O=!1,B=-1,T=5,I=-1;function K(){return M?!0:!(r.unstable_now()-I<T)}function z(){if(M=!1,O){var U=r.unstable_now();I=U;var F=!0;try{e:{b=!1,A&&(A=!1,w(B),B=-1),x=!0;var oe=v;try{t:{for(L(U),g=n(p);g!==null&&!(g.expirationTime>U&&K());){var he=g.callback;if(typeof he=="function"){g.callback=null,v=g.priorityLevel;var xe=he(g.expirationTime<=U);if(U=r.unstable_now(),typeof xe=="function"){g.callback=xe,L(U),F=!0;break t}g===n(p)&&a(p),L(U)}else a(p);g=n(p)}if(g!==null)F=!0;else{var P=n(d);P!==null&&X(G,P.startTime-U),F=!1}}break e}finally{g=null,v=oe,x=!1}F=void 0}}finally{F?q():O=!1}}}var q;if(typeof N=="function")q=function(){N(z)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=z,q=function(){ce.postMessage(null)}}else q=function(){S(z,0)};function X(U,F){B=S(function(){U(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(U){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var oe=v;v=F;try{return U()}finally{v=oe}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(U,F){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var oe=v;v=U;try{return F()}finally{v=oe}},r.unstable_scheduleCallback=function(U,F,oe){var he=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?he+oe:he):oe=he,U){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=oe+xe,U={id:_++,callback:F,priorityLevel:U,startTime:oe,expirationTime:xe,sortIndex:-1},oe>he?(U.sortIndex=oe,e(d,U),n(p)===null&&U===n(d)&&(A?(w(B),B=-1):A=!0,X(G,oe-he))):(U.sortIndex=xe,e(p,U),b||x||(b=!0,O||(O=!0,q()))),U},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(U){var F=v;return function(){var oe=v;v=F;try{return U.apply(this,arguments)}finally{v=oe}}}})(nd)),nd}var $0;function DM(){return $0||($0=1,td.exports=wM()),td.exports}var id={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function NM(){if(ev)return Vn;ev=1;var r=Gp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Vn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,_)},Vn.flushSync=function(p){var d=u.T,_=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=_,a.d.f()}},Vn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Vn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Vn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=h(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Vn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Vn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=h(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Vn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Vn.requestFormReset=function(p){a.d.r(p)},Vn.unstable_batchedUpdates=function(p,d){return p(d)},Vn.useFormState=function(p,d,_){return u.H.useFormState(p,d,_)},Vn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Vn.version="19.2.7",Vn}var tv;function LM(){if(tv)return id.exports;tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),id.exports=NM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function UM(){if(nv)return _l;nv=1;var r=DM(),e=Gp(),n=LM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var y=!1,C=f.child;C;){if(C===s){y=!0,s=f,l=m;break}if(C===l){y=!0,l=f,s=m;break}C=C.sibling}if(!y){for(C=m.child;C;){if(C===s){y=!0,s=m,l=f;break}if(C===l){y=!0,l=m,s=f;break}C=C.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case O:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case L:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}var X=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},he=[],xe=-1;function P(t){return{current:t}}function J(t){0>xe||(t.current=he[xe],he[xe]=null,xe--)}function ye(t,i){xe++,he[xe]=t.current,t.current=i}var Ae=P(null),De=P(null),re=P(null),Se=P(null);function Ee(t,i){switch(ye(re,i),ye(De,t),ye(Ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?_0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=_0(i),t=v0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Ae),ye(Ae,t)}function He(){J(Ae),J(De),J(re)}function tt(t){t.memoizedState!==null&&ye(Se,t);var i=Ae.current,s=v0(i,t.type);i!==s&&(ye(De,t),ye(Ae,s))}function Je(t){De.current===t&&(J(Ae),J(De)),Se.current===t&&(J(Se),hl._currentValue=oe)}var Yt,mt;function Et(t){if(Yt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Yt=i&&i[1]||"",mt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+mt}var Ot=!1;function ft(t,i){if(!t||Ot)return"";Ot=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var ae=le}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(le){ae=le}t.call(ve.prototype)}}else{try{throw Error()}catch(le){ae=le}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),y=m[0],C=m[1];if(y&&C){var H=y.split(`
`),ee=C.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ee.length&&!ee[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===ee.length)for(l=H.length-1,f=ee.length-1;1<=l&&0<=f&&H[l]!==ee[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==ee[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==ee[f]){var de=`
`+H[l].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=l&&0<=f);break}}}finally{Ot=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Et(s):""}function fn(t,i){switch(t.tag){case 26:case 27:case 5:return Et(t.type);case 16:return Et("Lazy");case 13:return t.child!==i&&i!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return Et("Activity");default:return""}}function Jt(t){try{var i="",s=null;do i+=fn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Un=Object.prototype.hasOwnProperty,W=r.unstable_scheduleCallback,rn=r.unstable_cancelCallback,_t=r.unstable_shouldYield,kt=r.unstable_requestPaint,Re=r.unstable_now,tn=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,ge=r.unstable_LowPriority,be=r.unstable_IdlePriority,Ce=r.log,Ue=r.unstable_setDisableYieldValue,ue=null,fe=null;function Oe(t){if(typeof Ce=="function"&&Ue(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ue,t)}catch{}}var Pe=Math.clz32?Math.clz32:it,Ne=Math.log,we=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ne(t)/we|0)|0}var at=256,xt=262144,V=4194304;function Te(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?f=Te(l):(y&=C,y!==0?f=Te(y):s||(s=C&~t,s!==0&&(f=Te(s))))):(C=l&~m,C!==0?f=Te(C):y!==0?f=Te(y):s||(s=l&~t,s!==0&&(f=Te(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Fe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Le(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=V;return V<<=1,(V&62914560)===0&&(V=4194304),t}function qe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function nt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function on(t,i,s,l,f,m){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(s=y&~s;0<s;){var de=31-Pe(s),ve=1<<de;C[de]=0,H[de]=-1;var ae=ee[de];if(ae!==null)for(ee[de]=null,de=0;de<ae.length;de++){var le=ae[de];le!==null&&(le.lane&=-536870913)}s&=~ve}l!==0&&Nt(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~i))}function Nt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Pe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function xi(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Pe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:Ls(s),(s&(t.suspendedLanes|i))!==0?0:s}function Ls(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Eo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function To(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:G0(t.type))}function Ao(t,i){var s=F.p;try{return F.p=t,i()}finally{F.p=s}}var Hn=Math.random().toString(36).slice(2),hn="__reactFiber$"+Hn,On="__reactProps$"+Hn,pa="__reactContainer$"+Hn,Wa="__reactEvents$"+Hn,Vl="__reactListeners$"+Hn,cr="__reactHandles$"+Hn,Ro="__reactResources$"+Hn,qa="__reactMarker$"+Hn;function Co(t){delete t[hn],delete t[On],delete t[Wa],delete t[Vl],delete t[cr]}function ja(t){var i=t[hn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[pa]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=T0(t);t!==null;){if(s=t[hn])return s;t=T0(t)}return i}t=s,s=t.parentNode}return null}function Ya(t){if(t=t[hn]||t[pa]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Us(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ka(t){var i=t[Ro];return i||(i=t[Ro]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gn(t){t[qa]=!0}var kl=new Set,R={};function j(t,i){ie(t,i),ie(t+"Capture",i)}function ie(t,i){for(R[t]=i,t=0;t<i.length;t++)kl.add(i[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Be={};function Ve(t){return Un.call(Be,t)?!0:Un.call(ne,t)?!1:te.test(t)?Be[t]=!0:(ne[t]=!0,!1)}function Ie(t,i,s){if(Ve(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Xe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ke(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ct(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,m.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){if(!t._valueTracker){var i=ct(t)?"checked":"value";t._valueTracker=Ke(t,i,""+t[i])}}function nn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ct(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pt=/[\n"\\]/g;function It(t){return t.replace(Pt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ge(t,i,s,l,f,m,y,C){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Ze(i)):t.value!==""+Ze(i)&&(t.value=""+Ze(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?yt(t,y,Ze(i)):s!=null?yt(t,y,Ze(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Ze(C):t.removeAttribute("name")}function Gn(t,i,s,l,f,m,y,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ct(t);return}s=s!=null?""+Ze(s):"",i=i!=null?""+Ze(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Ct(t)}function yt(t,i,s){i==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ze(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function si(t,i,s){if(i!=null&&(i=""+Ze(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Ze(s):""}function Oi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(X(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Ze(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ct(t)}function ri(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Bt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Pi(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&an(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&an(t,m,i[m])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Os(t){return Za.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ma(){}var Yu=null;function Ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ur=null,fr=null;function gm(t){var i=Ya(t);if(i&&(t=i.stateNode)){var s=t[On]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ge(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+It(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[On]||null;if(!f)throw Error(a(90));Ge(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&nn(l)}break e;case"textarea":si(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Mn(t,!!s.multiple,i,!1)}}}var Zu=!1;function _m(t,i,s){if(Zu)return t(i,s);Zu=!0;try{var l=t(i);return l}finally{if(Zu=!1,(ur!==null||fr!==null)&&(Dc(),ur&&(i=ur,t=fr,fr=ur=null,gm(i),t)))for(i=0;i<t.length;i++)gm(t[i])}}function wo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[On]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(ga)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Qu=!1}var Qa=null,Ju=null,Xl=null;function vm(){if(Xl)return Xl;var t,i=Ju,s=i.length,l,f="value"in Qa?Qa.value:Qa.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===f[m-l];l++);return Xl=f.slice(t,1<l?1-l:void 0)}function Wl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function xm(){return!1}function Zn(t){function i(s,l,f,m,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ql:xm,this.isPropagationStopped=xm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Zn(Ps),No=g({},Ps,{view:0,detail:0}),Ey=Zn(No),$u,ef,Lo,Yl=g({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?($u=t.screenX-Lo.screenX,ef=t.screenY-Lo.screenY):ef=$u=0,Lo=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),ym=Zn(Yl),Ty=g({},Yl,{dataTransfer:0}),Ay=Zn(Ty),Ry=g({},No,{relatedTarget:0}),tf=Zn(Ry),Cy=g({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),wy=Zn(Cy),Dy=g({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ny=Zn(Dy),Ly=g({},Ps,{data:0}),Sm=Zn(Ly),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Py[t])?!!i[t]:!1}function nf(){return Iy}var By=g({},No,{key:function(t){if(t.key){var i=Uy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=Zn(By),zy=g({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Zn(zy),Hy=g({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),Gy=Zn(Hy),Vy=g({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=Zn(Vy),Xy=g({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wy=Zn(Xy),qy=g({},Ps,{newState:0,oldState:0}),jy=Zn(qy),Yy=[9,13,27,32],af=ga&&"CompositionEvent"in window,Uo=null;ga&&"documentMode"in document&&(Uo=document.documentMode);var Ky=ga&&"TextEvent"in window&&!Uo,bm=ga&&(!af||Uo&&8<Uo&&11>=Uo),Em=" ",Tm=!1;function Am(t,i){switch(t){case"keyup":return Yy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function Zy(t,i){switch(t){case"compositionend":return Rm(i);case"keypress":return i.which!==32?null:(Tm=!0,Em);case"textInput":return t=i.data,t===Em&&Tm?null:t;default:return null}}function Qy(t,i){if(hr)return t==="compositionend"||!af&&Am(t,i)?(t=vm(),Xl=Ju=Qa=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bm&&i.locale!=="ko"?null:i.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Jy[t.type]:i==="textarea"}function wm(t,i,s,l){ur?fr?fr.push(l):fr=[l]:ur=l,i=Bc(i,"onChange"),0<i.length&&(s=new jl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Oo=null,Po=null;function $y(t){f0(t,0)}function Kl(t){var i=Us(t);if(nn(i))return t}function Dm(t,i){if(t==="change")return i}var Nm=!1;if(ga){var sf;if(ga){var rf="oninput"in document;if(!rf){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),rf=typeof Lm.oninput=="function"}sf=rf}else sf=!1;Nm=sf&&(!document.documentMode||9<document.documentMode)}function Um(){Oo&&(Oo.detachEvent("onpropertychange",Om),Po=Oo=null)}function Om(t){if(t.propertyName==="value"&&Kl(Po)){var i=[];wm(i,Po,t,Ku(t)),_m($y,i)}}function eS(t,i,s){t==="focusin"?(Um(),Oo=i,Po=s,Oo.attachEvent("onpropertychange",Om)):t==="focusout"&&Um()}function tS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(Po)}function nS(t,i){if(t==="click")return Kl(i)}function iS(t,i){if(t==="input"||t==="change")return Kl(i)}function aS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:aS;function Io(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Un.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Im(t,i){var s=Pm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Pm(s)}}function Bm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Bm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Kt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Kt(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var sS=ga&&"documentMode"in document&&11>=document.documentMode,dr=null,lf=null,Bo=null,cf=!1;function zm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;cf||dr==null||dr!==Kt(l)||(l=dr,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bo&&Io(Bo,l)||(Bo=l,l=Bc(lf,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=dr)))}function Is(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var pr={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},uf={},Hm={};ga&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Bs(t){if(uf[t])return uf[t];if(!pr[t])return t;var i=pr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Hm)return uf[t]=i[s];return t}var Gm=Bs("animationend"),Vm=Bs("animationiteration"),km=Bs("animationstart"),rS=Bs("transitionrun"),oS=Bs("transitionstart"),lS=Bs("transitioncancel"),Xm=Bs("transitionend"),Wm=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Ii(t,i){Wm.set(t,i),j(i,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],mr=0,hf=0;function Ql(){for(var t=mr,i=hf=mr=0;i<t;){var s=yi[i];yi[i++]=null;var l=yi[i];yi[i++]=null;var f=yi[i];yi[i++]=null;var m=yi[i];if(yi[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}m!==0&&qm(s,f,m)}}function Jl(t,i,s,l){yi[mr++]=t,yi[mr++]=i,yi[mr++]=s,yi[mr++]=l,hf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function df(t,i,s,l){return Jl(t,i,s,l),$l(t)}function Fs(t,i){return Jl(t,null,null,i),$l(t)}function qm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Pe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function $l(t){if(50<sl)throw sl=0,Mh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var gr={};function cS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,l){return new cS(t,i,s,l)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function jm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ec(t,i,s,l,f,m){var y=0;if(l=t,typeof t=="function")pf(t)&&(y=1);else if(typeof t=="string")y=pM(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=li(31,s,i,f),t.elementType=I,t.lanes=m,t;case A:return zs(s.children,f,m,i);case M:y=8,f|=24;break;case S:return t=li(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case G:return t=li(13,s,i,f),t.elementType=G,t.lanes=m,t;case O:return t=li(19,s,i,f),t.elementType=O,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break e;case w:y=9;break e;case L:y=11;break e;case B:y=14;break e;case T:y=16,l=null;break e}y=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=li(y,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function zs(t,i,s,l){return t=li(7,t,l,i),t.lanes=s,t}function mf(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Ym(t){var i=li(18,null,null,0);return i.stateNode=t,i}function gf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Km=new WeakMap;function Si(t,i){if(typeof t=="object"&&t!==null){var s=Km.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Jt(i)},Km.set(t,i),i)}return{value:t,source:i,stack:Jt(i)}}var _r=[],vr=0,tc=null,Fo=0,Mi=[],bi=0,Ja=null,Zi=1,Qi="";function va(t,i){_r[vr++]=Fo,_r[vr++]=tc,tc=t,Fo=i}function Zm(t,i,s){Mi[bi++]=Zi,Mi[bi++]=Qi,Mi[bi++]=Ja,Ja=t;var l=Zi;t=Qi;var f=32-Pe(l)-1;l&=~(1<<f),s+=1;var m=32-Pe(i)+f;if(30<m){var y=f-f%5;m=(l&(1<<y)-1).toString(32),l>>=y,f-=y,Zi=1<<32-Pe(i)+f|s<<f|l,Qi=m+t}else Zi=1<<m|s<<f|l,Qi=t}function _f(t){t.return!==null&&(va(t,1),Zm(t,1,0))}function vf(t){for(;t===tc;)tc=_r[--vr],_r[vr]=null,Fo=_r[--vr],_r[vr]=null;for(;t===Ja;)Ja=Mi[--bi],Mi[bi]=null,Qi=Mi[--bi],Mi[bi]=null,Zi=Mi[--bi],Mi[bi]=null}function Qm(t,i){Mi[bi++]=Zi,Mi[bi++]=Qi,Mi[bi++]=Ja,Zi=i.id,Qi=i.overflow,Ja=t}var Pn=null,$t=null,Rt=!1,$a=null,Ei=!1,xf=Error(a(519));function es(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Si(i,t)),xf}function Jm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[hn]=t,i[On]=l,s){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(s=0;s<ol.length;s++)Mt(ol[s],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),Gn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Oi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||m0(i.textContent,s)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=ma),i=!0):i=!1,i||es(t,!0)}function $m(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Pn=Pn.return}}function xr(t){if(t!==Pn)return!1;if(!Rt)return $m(t),Rt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Bh(t.type,t.memoizedProps)),s=!s),s&&$t&&es(t),$m(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=E0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=E0(t)}else i===27?(i=$t,ps(t.type)?(t=Vh,Vh=null,$t=t):$t=i):$t=Pn?Ai(t.stateNode.nextSibling):null;return!0}function Hs(){$t=Pn=null,Rt=!1}function yf(){var t=$a;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),$a=null),t}function zo(t){$a===null?$a=[t]:$a.push(t)}var Sf=P(null),Gs=null,xa=null;function ts(t,i,s){ye(Sf,i._currentValue),i._currentValue=s}function ya(t){t._currentValue=Sf.current,J(Sf)}function Mf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function bf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var y=f.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=f;for(var H=0;H<i.length;H++)if(C.context===i[H]){m.lanes|=s,C=m.alternate,C!==null&&(C.lanes|=s),Mf(m.return,s,t),l||(y=null);break e}m=C.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=s,m=y.alternate,m!==null&&(m.lanes|=s),Mf(y,s,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function yr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var C=f.type;oi(f.pendingProps.value,y.value)||(t!==null?t.push(C):t=[C])}}else if(f===Se.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(hl):t=[hl])}f=f.return}t!==null&&bf(i,t,s,l),i.flags|=262144}function nc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vs(t){Gs=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return eg(Gs,t)}function ic(t,i){return Gs===null&&Vs(t),eg(t,i)}function eg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},xa===null){if(t===null)throw Error(a(308));xa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else xa=xa.next=i;return s}var uS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},fS=r.unstable_scheduleCallback,hS=r.unstable_NormalPriority,_n={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new uS,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&fS(hS,function(){t.controller.abort()})}var Go=null,Tf=0,Sr=0,Mr=null;function dS(t,i){if(Go===null){var s=Go=[];Tf=0,Sr=Ch(),Mr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Tf++,i.then(tg,tg),i}function tg(){if(--Tf===0&&Go!==null){Mr!==null&&(Mr.status="fulfilled");var t=Go;Go=null,Sr=0,Mr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function pS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var ng=U.S;U.S=function(t,i){z_=Re(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&dS(t,i),ng!==null&&ng(t,i)};var ks=P(null);function Af(){var t=ks.current;return t!==null?t:Zt.pooledCache}function ac(t,i){i===null?ye(ks,ks.current):ye(ks,i.pool)}function ig(){var t=Af();return t===null?null:{parent:_n._currentValue,pool:t}}var br=Error(a(460)),Rf=Error(a(474)),sc=Error(a(542)),rc={then:function(){}};function ag(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ma,ma),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,og(t),t;default:if(typeof i.status=="string")i.then(ma,ma);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,og(t),t}throw Ws=i,br}}function Xs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ws=s,br):s}}var Ws=null;function rg(){if(Ws===null)throw Error(a(459));var t=Ws;return Ws=null,t}function og(t){if(t===br||t===sc)throw Error(a(483))}var Er=null,Vo=0;function oc(t){var i=Vo;return Vo+=1,Er===null&&(Er=[]),sg(Er,t,i)}function ko(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function lc(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function lg(t){function i(Z,k){if(t){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function s(Z,k){if(!t)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function l(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function f(Z,k){return Z=_a(Z,k),Z.index=0,Z.sibling=null,Z}function m(Z,k,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function y(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,k,$,me){return k===null||k.tag!==6?(k=mf($,Z.mode,me),k.return=Z,k):(k=f(k,$),k.return=Z,k)}function H(Z,k,$,me){var Qe=$.type;return Qe===A?de(Z,k,$.props.children,me,$.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&Xs(Qe)===k.type)?(k=f(k,$.props),ko(k,$),k.return=Z,k):(k=ec($.type,$.key,$.props,null,Z.mode,me),ko(k,$),k.return=Z,k)}function ee(Z,k,$,me){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=gf($,Z.mode,me),k.return=Z,k):(k=f(k,$.children||[]),k.return=Z,k)}function de(Z,k,$,me,Qe){return k===null||k.tag!==7?(k=zs($,Z.mode,me,Qe),k.return=Z,k):(k=f(k,$),k.return=Z,k)}function ve(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=mf(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return $=ec(k.type,k.key,k.props,null,Z.mode,$),ko($,k),$.return=Z,$;case b:return k=gf(k,Z.mode,$),k.return=Z,k;case T:return k=Xs(k),ve(Z,k,$)}if(X(k)||q(k))return k=zs(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return ve(Z,oc(k),$);if(k.$$typeof===N)return ve(Z,ic(Z,k),$);lc(Z,k)}return null}function ae(Z,k,$,me){var Qe=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qe!==null?null:C(Z,k,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Qe?H(Z,k,$,me):null;case b:return $.key===Qe?ee(Z,k,$,me):null;case T:return $=Xs($),ae(Z,k,$,me)}if(X($)||q($))return Qe!==null?null:de(Z,k,$,me,null);if(typeof $.then=="function")return ae(Z,k,oc($),me);if($.$$typeof===N)return ae(Z,k,ic(Z,$),me);lc(Z,$)}return null}function le(Z,k,$,me,Qe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Z=Z.get($)||null,C(k,Z,""+me,Qe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case x:return Z=Z.get(me.key===null?$:me.key)||null,H(k,Z,me,Qe);case b:return Z=Z.get(me.key===null?$:me.key)||null,ee(k,Z,me,Qe);case T:return me=Xs(me),le(Z,k,$,me,Qe)}if(X(me)||q(me))return Z=Z.get($)||null,de(k,Z,me,Qe,null);if(typeof me.then=="function")return le(Z,k,$,oc(me),Qe);if(me.$$typeof===N)return le(Z,k,$,ic(k,me),Qe);lc(k,me)}return null}function We(Z,k,$,me){for(var Qe=null,wt=null,je=k,ht=k=0,At=null;je!==null&&ht<$.length;ht++){je.index>ht?(At=je,je=null):At=je.sibling;var Dt=ae(Z,je,$[ht],me);if(Dt===null){je===null&&(je=At);break}t&&je&&Dt.alternate===null&&i(Z,je),k=m(Dt,k,ht),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt,je=At}if(ht===$.length)return s(Z,je),Rt&&va(Z,ht),Qe;if(je===null){for(;ht<$.length;ht++)je=ve(Z,$[ht],me),je!==null&&(k=m(je,k,ht),wt===null?Qe=je:wt.sibling=je,wt=je);return Rt&&va(Z,ht),Qe}for(je=l(je);ht<$.length;ht++)At=le(je,Z,ht,$[ht],me),At!==null&&(t&&At.alternate!==null&&je.delete(At.key===null?ht:At.key),k=m(At,k,ht),wt===null?Qe=At:wt.sibling=At,wt=At);return t&&je.forEach(function(xs){return i(Z,xs)}),Rt&&va(Z,ht),Qe}function $e(Z,k,$,me){if($==null)throw Error(a(151));for(var Qe=null,wt=null,je=k,ht=k=0,At=null,Dt=$.next();je!==null&&!Dt.done;ht++,Dt=$.next()){je.index>ht?(At=je,je=null):At=je.sibling;var xs=ae(Z,je,Dt.value,me);if(xs===null){je===null&&(je=At);break}t&&je&&xs.alternate===null&&i(Z,je),k=m(xs,k,ht),wt===null?Qe=xs:wt.sibling=xs,wt=xs,je=At}if(Dt.done)return s(Z,je),Rt&&va(Z,ht),Qe;if(je===null){for(;!Dt.done;ht++,Dt=$.next())Dt=ve(Z,Dt.value,me),Dt!==null&&(k=m(Dt,k,ht),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return Rt&&va(Z,ht),Qe}for(je=l(je);!Dt.done;ht++,Dt=$.next())Dt=le(je,Z,ht,Dt.value,me),Dt!==null&&(t&&Dt.alternate!==null&&je.delete(Dt.key===null?ht:Dt.key),k=m(Dt,k,ht),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return t&&je.forEach(function(TM){return i(Z,TM)}),Rt&&va(Z,ht),Qe}function qt(Z,k,$,me){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:e:{for(var Qe=$.key;k!==null;){if(k.key===Qe){if(Qe=$.type,Qe===A){if(k.tag===7){s(Z,k.sibling),me=f(k,$.props.children),me.return=Z,Z=me;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&Xs(Qe)===k.type){s(Z,k.sibling),me=f(k,$.props),ko(me,$),me.return=Z,Z=me;break e}s(Z,k);break}else i(Z,k);k=k.sibling}$.type===A?(me=zs($.props.children,Z.mode,me,$.key),me.return=Z,Z=me):(me=ec($.type,$.key,$.props,null,Z.mode,me),ko(me,$),me.return=Z,Z=me)}return y(Z);case b:e:{for(Qe=$.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(Z,k.sibling),me=f(k,$.children||[]),me.return=Z,Z=me;break e}else{s(Z,k);break}else i(Z,k);k=k.sibling}me=gf($,Z.mode,me),me.return=Z,Z=me}return y(Z);case T:return $=Xs($),qt(Z,k,$,me)}if(X($))return We(Z,k,$,me);if(q($)){if(Qe=q($),typeof Qe!="function")throw Error(a(150));return $=Qe.call($),$e(Z,k,$,me)}if(typeof $.then=="function")return qt(Z,k,oc($),me);if($.$$typeof===N)return qt(Z,k,ic(Z,$),me);lc(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(Z,k.sibling),me=f(k,$),me.return=Z,Z=me):(s(Z,k),me=mf($,Z.mode,me),me.return=Z,Z=me),y(Z)):s(Z,k)}return function(Z,k,$,me){try{Vo=0;var Qe=qt(Z,k,$,me);return Er=null,Qe}catch(je){if(je===br||je===sc)throw je;var wt=li(29,je,null,Z.mode);return wt.lanes=me,wt.return=Z,wt}finally{}}}var qs=lg(!0),cg=lg(!1),ns=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function is(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function as(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Lt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=$l(t),qm(t,null,s),i}return Jl(t,l,i,s),$l(t)}function Xo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,xi(t,s)}}function Df(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=y:m=m.next=y,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Nf=!1;function Wo(){if(Nf){var t=Mr;if(t!==null)throw t}}function qo(t,i,s,l){Nf=!1;var f=t.updateQueue;ns=!1;var m=f.firstBaseUpdate,y=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var H=C,ee=H.next;H.next=null,y===null?m=ee:y.next=ee,y=H;var de=t.alternate;de!==null&&(de=de.updateQueue,C=de.lastBaseUpdate,C!==y&&(C===null?de.firstBaseUpdate=ee:C.next=ee,de.lastBaseUpdate=H))}if(m!==null){var ve=f.baseState;y=0,de=ee=H=null,C=m;do{var ae=C.lane&-536870913,le=ae!==C.lane;if(le?(Tt&ae)===ae:(l&ae)===ae){ae!==0&&ae===Sr&&(Nf=!0),de!==null&&(de=de.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,$e=C;ae=i;var qt=s;switch($e.tag){case 1:if(We=$e.payload,typeof We=="function"){ve=We.call(qt,ve,ae);break e}ve=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,ae=typeof We=="function"?We.call(qt,ve,ae):We,ae==null)break e;ve=g({},ve,ae);break e;case 2:ns=!0}}ae=C.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=f.callbacks,le===null?f.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:C.tag,payload:C.payload,callback:C.callback,next:null},de===null?(ee=de=le,H=ve):de=de.next=le,y|=ae;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;le=C,C=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);de===null&&(H=ve),f.baseState=H,f.firstBaseUpdate=ee,f.lastBaseUpdate=de,m===null&&(f.shared.lanes=0),cs|=y,t.lanes=y,t.memoizedState=ve}}function ug(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function fg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ug(s[t],i)}var Tr=P(null),cc=P(0);function hg(t,i){t=wa,ye(cc,t),ye(Tr,i),wa=t|i.baseLanes}function Lf(){ye(cc,wa),ye(Tr,Tr.current)}function Uf(){wa=cc.current,J(Tr),J(cc)}var ci=P(null),Ti=null;function ss(t){var i=t.alternate;ye(dn,dn.current&1),ye(ci,t),Ti===null&&(i===null||Tr.current!==null||i.memoizedState!==null)&&(Ti=t)}function Of(t){ye(dn,dn.current),ye(ci,t),Ti===null&&(Ti=t)}function dg(t){t.tag===22?(ye(dn,dn.current),ye(ci,t),Ti===null&&(Ti=t)):rs()}function rs(){ye(dn,dn.current),ye(ci,ci.current)}function ui(t){J(ci),Ti===t&&(Ti=null),J(dn)}var dn=P(0);function uc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Hh(s)||Gh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sa=0,ut=null,Xt=null,vn=null,fc=!1,Ar=!1,js=!1,hc=0,jo=0,Rr=null,mS=0;function cn(){throw Error(a(321))}function Pf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function If(t,i,s,l,f,m){return Sa=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,U.H=t===null||t.memoizedState===null?Zg:Qf,js=!1,m=s(l,f),js=!1,Ar&&(m=mg(i,s,l,f)),pg(t),m}function pg(t){U.H=Zo;var i=Xt!==null&&Xt.next!==null;if(Sa=0,vn=Xt=ut=null,fc=!1,jo=0,Rr=null,i)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&nc(t)&&(xn=!0))}function mg(t,i,s,l){ut=t;var f=0;do{if(Ar&&(Rr=null),jo=0,Ar=!1,25<=f)throw Error(a(301));if(f+=1,vn=Xt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}U.H=Qg,m=i(s,l)}while(Ar);return m}function gS(){var t=U.H,i=t.useState()[0];return i=typeof i.then=="function"?Yo(i):i,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ut.flags|=1024),i}function Bf(){var t=hc!==0;return hc=0,t}function Ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function zf(t){if(fc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}fc=!1}Sa=0,vn=Xt=ut=null,Ar=!1,jo=hc=0,Rr=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?ut.memoizedState=vn=t:vn=vn.next=t,vn}function pn(){if(Xt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=vn===null?ut.memoizedState:vn.next;if(i!==null)vn=i,Xt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},vn===null?ut.memoizedState=vn=t:vn=vn.next=t}return vn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(t){var i=jo;return jo+=1,Rr===null&&(Rr=[]),t=sg(Rr,t,i),i=ut,(vn===null?i.memoizedState:vn.next)===null&&(i=i.alternate,U.H=i===null||i.memoizedState===null?Zg:Qf),t}function pc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yo(t);if(t.$$typeof===N)return In(t)}throw Error(a(438,String(t)))}function Hf(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=dc(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=K;return i.index++,s}function Ma(t,i){return typeof i=="function"?i(t):i}function mc(t){var i=pn();return Gf(i,Xt,t)}function Gf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var y=f.next;f.next=m.next,m.next=y}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var C=y=null,H=null,ee=i,de=!1;do{var ve=ee.lane&-536870913;if(ve!==ee.lane?(Tt&ve)===ve:(Sa&ve)===ve){var ae=ee.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ve===Sr&&(de=!0);else if((Sa&ae)===ae){ee=ee.next,ae===Sr&&(de=!0);continue}else ve={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(C=H=ve,y=m):H=H.next=ve,ut.lanes|=ae,cs|=ae;ve=ee.action,js&&s(m,ve),m=ee.hasEagerState?ee.eagerState:s(m,ve)}else ae={lane:ve,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(C=H=ae,y=m):H=H.next=ae,ut.lanes|=ve,cs|=ve;ee=ee.next}while(ee!==null&&ee!==i);if(H===null?y=m:H.next=C,!oi(m,t.memoizedState)&&(xn=!0,de&&(s=Mr,s!==null)))throw s;t.memoizedState=m,t.baseState=y,t.baseQueue=H,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=pn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do m=t(m,y.action),y=y.next;while(y!==f);oi(m,i.memoizedState)||(xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function gg(t,i,s){var l=ut,f=pn(),m=Rt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!oi((Xt||f).memoizedState,s);if(y&&(f.memoizedState=s,xn=!0),f=f.queue,Wf(xg.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,Cr(9,{destroy:void 0},vg.bind(null,l,f,s,i),null),Zt===null)throw Error(a(349));m||(Sa&127)!==0||_g(l,i,s)}return s}function _g(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=dc(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function vg(t,i,s,l){i.value=s,i.getSnapshot=l,yg(i)&&Sg(t)}function xg(t,i,s){return s(function(){yg(i)&&Sg(t)})}function yg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function Sg(t){var i=Fs(t,2);i!==null&&ti(i,t,2)}function kf(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),js){Oe(!0);try{s()}finally{Oe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},i}function Mg(t,i,s,l){return t.baseState=s,Gf(t,Xt,typeof l=="function"?l:Ma)}function _S(t,i,s,l,f){if(vc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};U.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,bg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function bg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=U.T,y={};U.T=y;try{var C=s(f,l),H=U.S;H!==null&&H(y,C),Eg(t,i,C)}catch(ee){Xf(t,i,ee)}finally{m!==null&&y.types!==null&&(m.types=y.types),U.T=m}}else try{m=s(f,l),Eg(t,i,m)}catch(ee){Xf(t,i,ee)}}function Eg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Tg(t,i,l)},function(l){return Xf(t,i,l)}):Tg(t,i,s)}function Tg(t,i,s){i.status="fulfilled",i.value=s,Ag(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,bg(t,s)))}function Xf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Ag(i),i=i.next;while(i!==l)}t.action=null}function Ag(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Rg(t,i){return i}function Cg(t,i){if(Rt){var s=Zt.formState;if(s!==null){e:{var l=ut;if(Rt){if($t){t:{for(var f=$t,m=Ei;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ai(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){$t=Ai(f.nextSibling),l=f.data==="F!";break e}}es(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rg,lastRenderedState:i},s.queue=l,s=jg.bind(null,ut,l),l.dispatch=s,l=kf(!1),m=Zf.bind(null,ut,!1,l.queue),l=Wn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=_S.bind(null,ut,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function wg(t){var i=pn();return Dg(i,Xt,t)}function Dg(t,i,s){if(i=Gf(t,i,Rg)[0],t=mc(Ma)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Yo(i)}catch(y){throw y===br?sc:y}else l=i;i=pn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,Cr(9,{destroy:void 0},vS.bind(null,f,s),null)),[l,m,t]}function vS(t,i){t.action=i}function Ng(t){var i=pn(),s=Xt;if(s!==null)return Dg(i,s,t);pn(),i=i.memoizedState,s=pn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Cr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=dc(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Lg(){return pn().memoizedState}function gc(t,i,s,l){var f=Wn();ut.flags|=t,f.memoizedState=Cr(1|i,{destroy:void 0},s,l===void 0?null:l)}function _c(t,i,s,l){var f=pn();l=l===void 0?null:l;var m=f.memoizedState.inst;Xt!==null&&l!==null&&Pf(l,Xt.memoizedState.deps)?f.memoizedState=Cr(i,m,s,l):(ut.flags|=t,f.memoizedState=Cr(1|i,m,s,l))}function Ug(t,i){gc(8390656,8,t,i)}function Wf(t,i){_c(2048,8,t,i)}function xS(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=dc(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Og(t){var i=pn().memoizedState;return xS({ref:i,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Pg(t,i){return _c(4,2,t,i)}function Ig(t,i){return _c(4,4,t,i)}function Bg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Fg(t,i,s){s=s!=null?s.concat([t]):null,_c(4,4,Bg.bind(null,i,t),s)}function qf(){}function zg(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Pf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Hg(t,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Pf(i,l[1]))return l[0];if(l=t(),js){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[l,i],l}function jf(t,i,s){return s===void 0||(Sa&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=G_(),ut.lanes|=t,cs|=t,s)}function Gg(t,i,s,l){return oi(s,i)?s:Tr.current!==null?(t=jf(t,s,l),oi(t,i)||(xn=!0),t):(Sa&42)===0||(Sa&1073741824)!==0&&(Tt&261930)===0?(xn=!0,t.memoizedState=s):(t=G_(),ut.lanes|=t,cs|=t,i)}function Vg(t,i,s,l,f){var m=F.p;F.p=m!==0&&8>m?m:8;var y=U.T,C={};U.T=C,Zf(t,!1,i,s);try{var H=f(),ee=U.S;if(ee!==null&&ee(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=pS(H,l);Ko(t,i,de,di(t))}else Ko(t,i,l,di(t))}catch(ve){Ko(t,i,{then:function(){},status:"rejected",reason:ve},di())}finally{F.p=m,y!==null&&C.types!==null&&(y.types=C.types),U.T=y}}function yS(){}function Yf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=kg(t).queue;Vg(t,f,i,oe,s===null?yS:function(){return Xg(t),s(l)})}function kg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:oe},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Xg(t){var i=kg(t);i.next===null&&(i=t.alternate.memoizedState),Ko(t,i.next.queue,{},di())}function Kf(){return In(hl)}function Wg(){return pn().memoizedState}function qg(){return pn().memoizedState}function SS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();t=is(s);var l=as(i,t,s);l!==null&&(ti(l,i,s),Xo(l,i,s)),i={cache:Ef()},t.payload=i;return}i=i.return}}function MS(t,i,s){var l=di();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(t)?Yg(i,s):(s=df(t,i,s,l),s!==null&&(ti(s,t,l),Kg(s,i,l)))}function jg(t,i,s){var l=di();Ko(t,i,s,l)}function Ko(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(t))Yg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var y=i.lastRenderedState,C=m(y,s);if(f.hasEagerState=!0,f.eagerState=C,oi(C,y))return Jl(t,i,f,0),Zt===null&&Ql(),!1}catch{}finally{}if(s=df(t,i,f,l),s!==null)return ti(s,t,l),Kg(s,i,l),!0}return!1}function Zf(t,i,s,l){if(l={lane:2,revertLane:Ch(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},vc(t)){if(i)throw Error(a(479))}else i=df(t,s,l,2),i!==null&&ti(i,t,2)}function vc(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function Yg(t,i){Ar=fc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Kg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,xi(t,s)}}var Zo={readContext:In,use:pc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Zo.useEffectEvent=cn;var Zg={readContext:In,use:pc,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:In,useEffect:Ug,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,gc(4194308,4,Bg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return gc(4194308,4,t,i)},useInsertionEffect:function(t,i){gc(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(js){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var f=s(i);if(js){Oe(!0);try{s(i)}finally{Oe(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=MS.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=kf(t);var i=t.queue,s=jg.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,i){var s=Wn();return jf(s,t,i)},useTransition:function(){var t=kf(!1);return t=Vg.bind(null,ut,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,f=Wn();if(Rt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Zt===null)throw Error(a(349));(Tt&127)!==0||_g(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Ug(xg.bind(null,l,m,t),[t]),l.flags|=2048,Cr(9,{destroy:void 0},vg.bind(null,l,m,s,i),null),s},useId:function(){var t=Wn(),i=Zt.identifierPrefix;if(Rt){var s=Qi,l=Zi;s=(l&~(1<<32-Pe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=hc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=mS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Kf,useFormState:Cg,useActionState:Cg,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Zf.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:Hf,useCacheRefresh:function(){return Wn().memoizedState=SS.bind(null,ut)},useEffectEvent:function(t){var i=Wn(),s={impl:t};return i.memoizedState=s,function(){if((Lt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Qf={readContext:In,use:pc,useCallback:zg,useContext:In,useEffect:Wf,useImperativeHandle:Fg,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Hg,useReducer:mc,useRef:Lg,useState:function(){return mc(Ma)},useDebugValue:qf,useDeferredValue:function(t,i){var s=pn();return Gg(s,Xt.memoizedState,t,i)},useTransition:function(){var t=mc(Ma)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:Yo(t),i]},useSyncExternalStore:gg,useId:Wg,useHostTransitionStatus:Kf,useFormState:wg,useActionState:wg,useOptimistic:function(t,i){var s=pn();return Mg(s,Xt,t,i)},useMemoCache:Hf,useCacheRefresh:qg};Qf.useEffectEvent=Og;var Qg={readContext:In,use:pc,useCallback:zg,useContext:In,useEffect:Wf,useImperativeHandle:Fg,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Hg,useReducer:Vf,useRef:Lg,useState:function(){return Vf(Ma)},useDebugValue:qf,useDeferredValue:function(t,i){var s=pn();return Xt===null?jf(s,t,i):Gg(s,Xt.memoizedState,t,i)},useTransition:function(){var t=Vf(Ma)[0],i=pn().memoizedState;return[typeof t=="boolean"?t:Yo(t),i]},useSyncExternalStore:gg,useId:Wg,useHostTransitionStatus:Kf,useFormState:Ng,useActionState:Ng,useOptimistic:function(t,i){var s=pn();return Xt!==null?Mg(s,Xt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:qg};Qg.useEffectEvent=Og;function Jf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var $f={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=di(),f=is(l);f.payload=i,s!=null&&(f.callback=s),i=as(t,f,l),i!==null&&(ti(i,t,l),Xo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=di(),f=is(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=as(t,f,l),i!==null&&(ti(i,t,l),Xo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=di(),l=is(s);l.tag=2,i!=null&&(l.callback=i),i=as(t,l,s),i!==null&&(ti(i,t,s),Xo(i,t,s))}};function Jg(t,i,s,l,f,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,y):i.prototype&&i.prototype.isPureReactComponent?!Io(s,l)||!Io(f,m):!0}function $g(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&$f.enqueueReplaceState(i,i.state,null)}function Ys(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function e_(t){Zl(t)}function t_(t){console.error(t)}function n_(t){Zl(t)}function xc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function i_(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function eh(t,i,s){return s=is(s),s.tag=3,s.payload={element:null},s.callback=function(){xc(t,i)},s}function a_(t){return t=is(t),t.tag=3,t}function s_(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){i_(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){i_(i,s,l),typeof f!="function"&&(us===null?us=new Set([this]):us.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function bS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&yr(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Ti===null?Nc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===rc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Th(t,l,f)),!1;case 22:return s.flags|=65536,l===rc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Th(t,l,f)),!1}throw Error(a(435,s.tag))}return Th(t,l,f),Nc(),!1}if(Rt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==xf&&(t=Error(a(422),{cause:l}),zo(Si(t,s)))):(l!==xf&&(i=Error(a(423),{cause:l}),zo(Si(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Si(l,s),f=eh(t.stateNode,l,f),Df(t,f),un!==4&&(un=2)),!1;var m=Error(a(520),{cause:l});if(m=Si(m,s),al===null?al=[m]:al.push(m),un!==4&&(un=2),i===null)return!0;l=Si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=eh(s.stateNode,l,t),Df(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(us===null||!us.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=a_(f),s_(f,t,s,l),Df(s,f),!1}s=s.return}while(s!==null);return!1}var th=Error(a(461)),xn=!1;function Bn(t,i,s,l){i.child=t===null?cg(i,null,s,l):qs(i,t.child,s,l)}function r_(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var y={};for(var C in l)C!=="ref"&&(y[C]=l[C])}else y=l;return Vs(i),l=If(t,i,s,y,m,f),C=Bf(),t!==null&&!xn?(Ff(t,i,f),ba(t,i,f)):(Rt&&C&&_f(i),i.flags|=1,Bn(t,i,l,f),i.child)}function o_(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!pf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,l_(t,i,m,l,f)):(t=ec(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!ch(t,f)){var y=m.memoizedProps;if(s=s.compare,s=s!==null?s:Io,s(y,l)&&t.ref===i.ref)return ba(t,i,f)}return i.flags|=1,t=_a(m,l),t.ref=i.ref,t.return=i,i.child=t}function l_(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(Io(m,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=m,ch(t,f))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,ba(t,i,f)}return nh(t,i,s,l,f)}function c_(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return u_(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ac(i,m!==null?m.cachePool:null),m!==null?hg(i,m):Lf(),dg(i);else return l=i.lanes=536870912,u_(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(ac(i,m.cachePool),hg(i,m),rs(),i.memoizedState=null):(t!==null&&ac(i,null),Lf(),rs());return Bn(t,i,f,s),i.child}function Qo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function u_(t,i,s,l,f){var m=Af();return m=m===null?null:{parent:_n._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&ac(i,null),Lf(),dg(i),t!==null&&yr(t,i,l,!0),i.childLanes=f,null}function yc(t,i){return i=Mc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function f_(t,i,s){return qs(i,t.child,null,s),t=yc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function ES(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=yc(i,l),i.lanes=536870912,Qo(null,t);if(Of(i),(t=$t)?(t=b0(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},s=Ym(t),s.return=i,i.child=s,Pn=i,$t=null)):t=null,t===null)throw es(i);return i.lanes=536870912,null}return yc(i,l)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Of(i),f)if(i.flags&256)i.flags&=-257,i=f_(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(xn||yr(t,i,s,!1),f=(s&t.childLanes)!==0,xn||f){if(l=Zt,l!==null&&(y=ai(l,s),y!==0&&y!==m.retryLane))throw m.retryLane=y,Fs(t,y),ti(l,t,y),th;Nc(),i=f_(t,i,s)}else t=m.treeContext,$t=Ai(y.nextSibling),Pn=i,Rt=!0,$a=null,Ei=!1,t!==null&&Qm(i,t),i=yc(i,l),i.flags|=4096;return i}return t=_a(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Sc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function nh(t,i,s,l,f){return Vs(i),s=If(t,i,s,l,void 0,f),l=Bf(),t!==null&&!xn?(Ff(t,i,f),ba(t,i,f)):(Rt&&l&&_f(i),i.flags|=1,Bn(t,i,s,f),i.child)}function h_(t,i,s,l,f,m){return Vs(i),i.updateQueue=null,s=mg(i,l,s,f),pg(t),l=Bf(),t!==null&&!xn?(Ff(t,i,m),ba(t,i,m)):(Rt&&l&&_f(i),i.flags|=1,Bn(t,i,s,m),i.child)}function d_(t,i,s,l,f){if(Vs(i),i.stateNode===null){var m=gr,y=s.contextType;typeof y=="object"&&y!==null&&(m=In(y)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$f,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Cf(i),y=s.contextType,m.context=typeof y=="object"&&y!==null?In(y):gr,m.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Jf(i,s,y,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&$f.enqueueReplaceState(m,m.state,null),qo(i,l,m,f),Wo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var C=i.memoizedProps,H=Ys(s,C);m.props=H;var ee=m.context,de=s.contextType;y=gr,typeof de=="object"&&de!==null&&(y=In(de));var ve=s.getDerivedStateFromProps;de=typeof ve=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,de||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||ee!==y)&&$g(i,m,l,y),ns=!1;var ae=i.memoizedState;m.state=ae,qo(i,l,m,f),Wo(),ee=i.memoizedState,C||ae!==ee||ns?(typeof ve=="function"&&(Jf(i,s,ve,l),ee=i.memoizedState),(H=ns||Jg(i,s,H,l,ae,ee,y))?(de||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ee),m.props=l,m.state=ee,m.context=y,l=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,wf(t,i),y=i.memoizedProps,de=Ys(s,y),m.props=de,ve=i.pendingProps,ae=m.context,ee=s.contextType,H=gr,typeof ee=="object"&&ee!==null&&(H=In(ee)),C=s.getDerivedStateFromProps,(ee=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==ve||ae!==H)&&$g(i,m,l,H),ns=!1,ae=i.memoizedState,m.state=ae,qo(i,l,m,f),Wo();var le=i.memoizedState;y!==ve||ae!==le||ns||t!==null&&t.dependencies!==null&&nc(t.dependencies)?(typeof C=="function"&&(Jf(i,s,C,l),le=i.memoizedState),(de=ns||Jg(i,s,de,l,ae,le,H)||t!==null&&t.dependencies!==null&&nc(t.dependencies))?(ee||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,le,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,le,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),m.props=l,m.state=le,m.context=H,l=de):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Sc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=qs(i,t.child,null,f),i.child=qs(i,null,s,f)):Bn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ba(t,i,f),t}function p_(t,i,s,l){return Hs(),i.flags|=256,Bn(t,i,s,l),i.child}var ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ah(t){return{baseLanes:t,cachePool:ig()}}function sh(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=hi),t}function m_(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(f?ss(i):rs(),(t=$t)?(t=b0(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},s=Ym(t),s.return=i,i.child=s,Pn=i,$t=null)):t=null,t===null)throw es(i);return Gh(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(rs(),f=i.mode,C=Mc({mode:"hidden",children:C},f),l=zs(l,f,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=ah(s),l.childLanes=sh(t,y,s),i.memoizedState=ih,Qo(null,l)):(ss(i),rh(i,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(m)i.flags&256?(ss(i),i.flags&=-257,i=oh(t,i,s)):i.memoizedState!==null?(rs(),i.child=t.child,i.flags|=128,i=null):(rs(),C=l.fallback,f=i.mode,l=Mc({mode:"visible",children:l.children},f),C=zs(C,f,s,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,qs(i,t.child,null,s),l=i.child,l.memoizedState=ah(s),l.childLanes=sh(t,y,s),i.memoizedState=ih,i=Qo(null,l));else if(ss(i),Gh(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var ee=y.dgst;y=ee,l=Error(a(419)),l.stack="",l.digest=y,zo({value:l,source:null,stack:null}),i=oh(t,i,s)}else if(xn||yr(t,i,s,!1),y=(s&t.childLanes)!==0,xn||y){if(y=Zt,y!==null&&(l=ai(y,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,Fs(t,l),ti(y,t,l),th;Hh(C)||Nc(),i=oh(t,i,s)}else Hh(C)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,$t=Ai(C.nextSibling),Pn=i,Rt=!0,$a=null,Ei=!1,t!==null&&Qm(i,t),i=rh(i,l.children),i.flags|=4096);return i}return f?(rs(),C=l.fallback,f=i.mode,H=t.child,ee=H.sibling,l=_a(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,ee!==null?C=_a(ee,C):(C=zs(C,f,s,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Qo(null,l),l=i.child,C=t.child.memoizedState,C===null?C=ah(s):(f=C.cachePool,f!==null?(H=_n._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=ig(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=sh(t,y,s),i.memoizedState=ih,Qo(t.child,l)):(ss(i),s=t.child,t=s.sibling,s=_a(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function rh(t,i){return i=Mc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Mc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function oh(t,i,s){return qs(i,t.child,null,s),t=rh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function g_(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mf(t.return,i,s)}function lh(t,i,s,l,f,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=m)}function __(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var y=dn.current,C=(y&2)!==0;if(C?(y=y&1|2,i.flags|=128):y&=1,ye(dn,y),Bn(t,i,l,s),l=Rt?Fo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g_(t,s,i);else if(t.tag===19)g_(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&uc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),lh(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&uc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}lh(i,!0,s,null,m,l);break;case"together":lh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ba(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),cs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(yr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=_a(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=_a(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ch(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&nc(t)))}function TS(t,i,s){switch(i.tag){case 3:Ee(i,i.stateNode.containerInfo),ts(i,_n,t.memoizedState.cache),Hs();break;case 27:case 5:tt(i);break;case 4:Ee(i,i.stateNode.containerInfo);break;case 10:ts(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Of(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ss(i),i.flags|=128,null):(s&i.child.childLanes)!==0?m_(t,i,s):(ss(i),t=ba(t,i,s),t!==null?t.sibling:null);ss(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(yr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return __(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(dn,dn.current),l)break;return null;case 22:return i.lanes=0,c_(t,i,s,i.pendingProps);case 24:ts(i,_n,t.memoizedState.cache)}return ba(t,i,s)}function v_(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!ch(t,s)&&(i.flags&128)===0)return xn=!1,TS(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Rt&&(i.flags&1048576)!==0&&Zm(i,Fo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Xs(i.elementType),i.type=t,typeof t=="function")pf(t)?(l=Ys(t,l),i.tag=1,i=d_(null,i,t,l,s)):(i.tag=0,i=nh(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===L){i.tag=11,i=r_(null,i,t,l,s);break e}else if(f===B){i.tag=14,i=o_(null,i,t,l,s);break e}}throw i=ce(t)||t,Error(a(306,i,""))}}return i;case 0:return nh(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ys(l,i.pendingProps),d_(t,i,l,f,s);case 3:e:{if(Ee(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,wf(t,i),qo(i,l,null,s);var y=i.memoizedState;if(l=y.cache,ts(i,_n,l),l!==m.cache&&bf(i,[_n],s,!0),Wo(),l=y.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=p_(t,i,l,s);break e}else if(l!==f){f=Si(Error(a(424)),i),zo(f),i=p_(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Ai(t.firstChild),Pn=i,Rt=!0,$a=null,Ei=!0,s=cg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Hs(),l===f){i=ba(t,i,s);break e}Bn(t,i,l,s)}i=i.child}return i;case 26:return Sc(t,i),t===null?(s=w0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Rt||(s=i.type,t=i.pendingProps,l=Fc(re.current).createElement(s),l[hn]=i,l[On]=t,Fn(l,s,t),gn(l),i.stateNode=l):i.memoizedState=w0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return tt(i),t===null&&Rt&&(l=i.stateNode=A0(i.type,i.pendingProps,re.current),Pn=i,Ei=!0,f=$t,ps(i.type)?(Vh=f,$t=Ai(l.firstChild)):$t=f),Bn(t,i,i.pendingProps.children,s),Sc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((f=l=$t)&&(l=tM(l,i.type,i.pendingProps,Ei),l!==null?(i.stateNode=l,Pn=i,$t=Ai(l.firstChild),Ei=!1,f=!0):f=!1),f||es(i)),tt(i),f=i.type,m=i.pendingProps,y=t!==null?t.memoizedProps:null,l=m.children,Bh(f,m)?l=null:y!==null&&Bh(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=If(t,i,gS,null,null,s),hl._currentValue=f),Sc(t,i),Bn(t,i,l,s),i.child;case 6:return t===null&&Rt&&((t=s=$t)&&(s=nM(s,i.pendingProps,Ei),s!==null?(i.stateNode=s,Pn=i,$t=null,t=!0):t=!1),t||es(i)),null;case 13:return m_(t,i,s);case 4:return Ee(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=qs(i,null,l,s):Bn(t,i,l,s),i.child;case 11:return r_(t,i,i.type,i.pendingProps,s);case 7:return Bn(t,i,i.pendingProps,s),i.child;case 8:return Bn(t,i,i.pendingProps.children,s),i.child;case 12:return Bn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ts(i,i.type,l.value),Bn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Vs(i),f=In(f),l=l(f),i.flags|=1,Bn(t,i,l,s),i.child;case 14:return o_(t,i,i.type,i.pendingProps,s);case 15:return l_(t,i,i.type,i.pendingProps,s);case 19:return __(t,i,s);case 31:return ES(t,i,s);case 22:return c_(t,i,s,i.pendingProps);case 24:return Vs(i),l=In(_n),t===null?(f=Af(),f===null&&(f=Zt,m=Ef(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Cf(i),ts(i,_n,f)):((t.lanes&s)!==0&&(wf(t,i),qo(i,null,null,s),Wo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ts(i,_n,l)):(l=m.cache,ts(i,_n,l),l!==f.cache&&bf(i,[_n],s,!0))),Bn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ea(t){t.flags|=4}function uh(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(W_())t.flags|=8192;else throw Ws=rc,Rf}else t.flags&=-16777217}function x_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!O0(i))if(W_())t.flags|=8192;else throw Ws=rc,Rf}function bc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,Lr|=i)}function Jo(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function AS(t,i,s){var l=i.pendingProps;switch(vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ya(_n),He(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(xr(i)?Ea(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yf())),en(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(Ea(i),m!==null?(en(i),x_(i,m)):(en(i),uh(i,f,null,l,s))):m?m!==t.memoizedState?(Ea(i),en(i),x_(i,m)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ea(i),en(i),uh(i,f,t,l,s)),null;case 27:if(Je(i),s=re.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return en(i),null}t=Ae.current,xr(i)?Jm(i):(t=A0(f,l,s),i.stateNode=t,Ea(i))}return en(i),null;case 5:if(Je(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return en(i),null}if(m=Ae.current,xr(i))Jm(i);else{var y=Fc(re.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}m[hn]=i,m[On]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=m;e:switch(Fn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ea(i)}}return en(i),uh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=re.current,xr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[hn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||m0(t.nodeValue,s)),t||es(i,!0)}else t=Fc(t).createTextNode(l),t[hn]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=xr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[hn]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return en(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=xr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[hn]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),f=!1}else f=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),bc(i,i.updateQueue),en(i),null);case 4:return He(),t===null&&Lh(i.stateNode.containerInfo),en(i),null;case 10:return ya(i.type),en(i),null;case 19:if(J(dn),l=i.memoizedState,l===null)return en(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)Jo(l,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=uc(t),m!==null){for(i.flags|=128,Jo(l,!1),t=m.updateQueue,i.updateQueue=t,bc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)jm(s,t),s=s.sibling;return ye(dn,dn.current&1|2),Rt&&va(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Re()>Cc&&(i.flags|=128,f=!0,Jo(l,!1),i.lanes=4194304)}else{if(!f)if(t=uc(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,bc(i,t),Jo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Rt)return en(i),null}else 2*Re()-l.renderingStartTime>Cc&&s!==536870912&&(i.flags|=128,f=!0,Jo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Re(),t.sibling=null,s=dn.current,ye(dn,f?s&1|2:s&1),Rt&&va(i,l.treeForkCount),t):(en(i),null);case 22:case 23:return ui(i),Uf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&bc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&J(ks),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ya(_n),en(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function RS(t,i){switch(vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ya(_n),He(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Je(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return J(dn),null;case 4:return He(),null;case 10:return ya(i.type),null;case 22:case 23:return ui(i),Uf(),t!==null&&J(ks),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ya(_n),null;case 25:return null;default:return null}}function y_(t,i){switch(vf(i),i.tag){case 3:ya(_n),He();break;case 26:case 27:case 5:Je(i);break;case 4:He();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:J(dn);break;case 10:ya(i.type);break;case 22:case 23:ui(i),Uf(),t!==null&&J(ks);break;case 24:ya(_n)}}function $o(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,y=s.inst;l=m(),y.destroy=l}s=s.next}while(s!==f)}}catch(C){zt(i,i.return,C)}}function os(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var y=l.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,f=i;var H=s,ee=C;try{ee()}catch(de){zt(f,H,de)}}}l=l.next}while(l!==m)}}catch(de){zt(i,i.return,de)}}function S_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{fg(i,s)}catch(l){zt(t,t.return,l)}}}function M_(t,i,s){s.props=Ys(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){zt(t,i,l)}}function el(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){zt(t,i,f)}}function Ji(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){zt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){zt(t,i,f)}else s.current=null}function b_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){zt(t,t.return,f)}}function fh(t,i,s){try{var l=t.stateNode;KS(l,t.type,s,i),l[On]=i}catch(f){zt(t,t.return,f)}}function E_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ps(t.type)||t.tag===4}function hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ps(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ma));else if(l!==4&&(l===27&&ps(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(dh(t,i,s),t=t.sibling;t!==null;)dh(t,i,s),t=t.sibling}function Ec(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ps(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ec(t,i,s),t=t.sibling;t!==null;)Ec(t,i,s),t=t.sibling}function T_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Fn(i,l,s),i[hn]=t,i[On]=s}catch(m){zt(t,t.return,m)}}var Ta=!1,yn=!1,ph=!1,A_=typeof WeakSet=="function"?WeakSet:Set,wn=null;function CS(t,i){if(t=t.containerInfo,Ph=Wc,t=Fm(t),of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var y=0,C=-1,H=-1,ee=0,de=0,ve=t,ae=null;t:for(;;){for(var le;ve!==s||f!==0&&ve.nodeType!==3||(C=y+f),ve!==m||l!==0&&ve.nodeType!==3||(H=y+l),ve.nodeType===3&&(y+=ve.nodeValue.length),(le=ve.firstChild)!==null;)ae=ve,ve=le;for(;;){if(ve===t)break t;if(ae===s&&++ee===f&&(C=y),ae===m&&++de===l&&(H=y),(le=ve.nextSibling)!==null)break;ve=ae,ae=ve.parentNode}ve=le}s=C===-1||H===-1?null:{start:C,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ih={focusedElem:t,selectionRange:s},Wc=!1,wn=i;wn!==null;)if(i=wn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,wn=t;else for(;wn!==null;){switch(i=wn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var We=Ys(s.type,f);t=l.getSnapshotBeforeUpdate(We,m),l.__reactInternalSnapshotBeforeUpdate=t}catch($e){zt(s,s.return,$e)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)zh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,wn=t;break}wn=i.return}}function R_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ra(t,s),l&4&&$o(5,s);break;case 1:if(Ra(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){zt(s,s.return,y)}else{var f=Ys(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(s,s.return,y)}}l&64&&S_(s),l&512&&el(s,s.return);break;case 3:if(Ra(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{fg(t,i)}catch(y){zt(s,s.return,y)}}break;case 27:i===null&&l&4&&T_(s);case 26:case 5:Ra(t,s),i===null&&l&4&&b_(s),l&512&&el(s,s.return);break;case 12:Ra(t,s);break;case 31:Ra(t,s),l&4&&D_(t,s);break;case 13:Ra(t,s),l&4&&N_(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=BS.bind(null,s),iM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ta,!l){i=i!==null&&i.memoizedState!==null||yn,f=Ta;var m=yn;Ta=l,(yn=i)&&!m?Ca(t,s,(s.subtreeFlags&8772)!==0):Ra(t,s),Ta=f,yn=m}break;case 30:break;default:Ra(t,s)}}function C_(t){var i=t.alternate;i!==null&&(t.alternate=null,C_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Co(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,Qn=!1;function Aa(t,i,s){for(s=s.child;s!==null;)w_(t,i,s),s=s.sibling}function w_(t,i,s){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:yn||Ji(s,i),Aa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Ji(s,i);var l=sn,f=Qn;ps(s.type)&&(sn=s.stateNode,Qn=!1),Aa(t,i,s),cl(s.stateNode),sn=l,Qn=f;break;case 5:yn||Ji(s,i);case 6:if(l=sn,f=Qn,sn=null,Aa(t,i,s),sn=l,Qn=f,sn!==null)if(Qn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(s.stateNode)}catch(m){zt(s,i,m)}else try{sn.removeChild(s.stateNode)}catch(m){zt(s,i,m)}break;case 18:sn!==null&&(Qn?(t=sn,S0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Hr(t)):S0(sn,s.stateNode));break;case 4:l=sn,f=Qn,sn=s.stateNode.containerInfo,Qn=!0,Aa(t,i,s),sn=l,Qn=f;break;case 0:case 11:case 14:case 15:os(2,s,i),yn||os(4,s,i),Aa(t,i,s);break;case 1:yn||(Ji(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&M_(s,i,l)),Aa(t,i,s);break;case 21:Aa(t,i,s);break;case 22:yn=(l=yn)||s.memoizedState!==null,Aa(t,i,s),yn=l;break;default:Aa(t,i,s)}}function D_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hr(t)}catch(s){zt(i,i.return,s)}}}function N_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hr(t)}catch(s){zt(i,i.return,s)}}function wS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new A_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new A_),i;default:throw Error(a(435,t.tag))}}function Tc(t,i){var s=wS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=FS.bind(null,t,l);l.then(f,f)}})}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,y=i,C=y;e:for(;C!==null;){switch(C.tag){case 27:if(ps(C.type)){sn=C.stateNode,Qn=!1;break e}break;case 5:sn=C.stateNode,Qn=!1;break e;case 3:case 4:sn=C.stateNode.containerInfo,Qn=!0;break e}C=C.return}if(sn===null)throw Error(a(160));w_(m,y,f),sn=null,Qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)L_(i,t),i=i.sibling}var Bi=null;function L_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(i,t),$n(t),l&4&&(os(3,t,t.return),$o(3,t),os(5,t,t.return));break;case 1:Jn(i,t),$n(t),l&512&&(yn||s===null||Ji(s,s.return)),l&64&&Ta&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Bi;if(Jn(i,t),$n(t),l&512&&(yn||s===null||Ji(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[qa]||m[hn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Fn(m,l,s),m[hn]=t,gn(m),l=m;break e;case"link":var y=L0("link","href",f).get(l+(s.href||""));if(y){for(var C=0;C<y.length;C++)if(m=y[C],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(C,1);break t}}m=f.createElement(l),Fn(m,l,s),f.head.appendChild(m);break;case"meta":if(y=L0("meta","content",f).get(l+(s.content||""))){for(C=0;C<y.length;C++)if(m=y[C],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(C,1);break t}}m=f.createElement(l),Fn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[hn]=t,gn(m),l=m}t.stateNode=l}else U0(f,t.type,t.stateNode);else t.stateNode=N0(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?U0(f,t.type,t.stateNode):N0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fh(t,t.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,t),$n(t),l&512&&(yn||s===null||Ji(s,s.return)),s!==null&&l&4&&fh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,t),$n(t),l&512&&(yn||s===null||Ji(s,s.return)),t.flags&32){f=t.stateNode;try{ri(f,"")}catch(We){zt(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,fh(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ph=!0);break;case 6:if(Jn(i,t),$n(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(We){zt(t,t.return,We)}}break;case 3:if(Gc=null,f=Bi,Bi=zc(i.containerInfo),Jn(i,t),Bi=f,$n(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Hr(i.containerInfo)}catch(We){zt(t,t.return,We)}ph&&(ph=!1,U_(t));break;case 4:l=Bi,Bi=zc(t.stateNode.containerInfo),Jn(i,t),$n(t),Bi=l;break;case 12:Jn(i,t),$n(t);break;case 31:Jn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 13:Jn(i,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=Re()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ee=Ta,de=yn;if(Ta=ee||f,yn=de||H,Jn(i,t),yn=de,Ta=ee,$n(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||Ta||yn||Ks(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(m=H.stateNode,f)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=H.stateNode;var ve=H.memoizedProps.style,ae=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;C.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(We){zt(H,H.return,We)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(We){zt(H,H.return,We)}}}else if(i.tag===18){if(s===null){H=i;try{var le=H.stateNode;f?M0(le,!0):M0(H.stateNode,!1)}catch(We){zt(H,H.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Tc(t,s))));break;case 19:Jn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 30:break;case 21:break;default:Jn(i,t),$n(t)}}function $n(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(E_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=hh(t);Ec(t,m,f);break;case 5:var y=s.stateNode;s.flags&32&&(ri(y,""),s.flags&=-33);var C=hh(t);Ec(t,C,y);break;case 3:case 4:var H=s.stateNode.containerInfo,ee=hh(t);dh(t,ee,H);break;default:throw Error(a(161))}}catch(de){zt(t,t.return,de)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function U_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;U_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ra(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)R_(t,i.alternate,i),i=i.sibling}function Ks(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:os(4,i,i.return),Ks(i);break;case 1:Ji(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&M_(i,i.return,s),Ks(i);break;case 27:cl(i.stateNode);case 26:case 5:Ji(i,i.return),Ks(i);break;case 22:i.memoizedState===null&&Ks(i);break;case 30:Ks(i);break;default:Ks(i)}t=t.sibling}}function Ca(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,y=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(f,m,s),$o(4,m);break;case 1:if(Ca(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ee){zt(l,l.return,ee)}if(l=m,f=l.updateQueue,f!==null){var C=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)ug(H[f],C)}catch(ee){zt(l,l.return,ee)}}s&&y&64&&S_(m),el(m,m.return);break;case 27:T_(m);case 26:case 5:Ca(f,m,s),s&&l===null&&y&4&&b_(m),el(m,m.return);break;case 12:Ca(f,m,s);break;case 31:Ca(f,m,s),s&&y&4&&D_(f,m);break;case 13:Ca(f,m,s),s&&y&4&&N_(f,m);break;case 22:m.memoizedState===null&&Ca(f,m,s),el(m,m.return);break;case 30:break;default:Ca(f,m,s)}i=i.sibling}}function mh(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ho(s))}function gh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ho(t))}function Fi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)O_(t,i,s,l),i=i.sibling}function O_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i,s,l),f&2048&&$o(9,i);break;case 1:Fi(t,i,s,l);break;case 3:Fi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ho(t)));break;case 12:if(f&2048){Fi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,y=m.id,C=m.onPostCommit;typeof C=="function"&&C(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(i,i.return,H)}}else Fi(t,i,s,l);break;case 31:Fi(t,i,s,l);break;case 13:Fi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,y=i.alternate,i.memoizedState!==null?m._visibility&2?Fi(t,i,s,l):tl(t,i):m._visibility&2?Fi(t,i,s,l):(m._visibility|=2,wr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&mh(y,i);break;case 24:Fi(t,i,s,l),f&2048&&gh(i.alternate,i);break;default:Fi(t,i,s,l)}}function wr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,y=i,C=s,H=l,ee=y.flags;switch(y.tag){case 0:case 11:case 15:wr(m,y,C,H,f),$o(8,y);break;case 23:break;case 22:var de=y.stateNode;y.memoizedState!==null?de._visibility&2?wr(m,y,C,H,f):tl(m,y):(de._visibility|=2,wr(m,y,C,H,f)),f&&ee&2048&&mh(y.alternate,y);break;case 24:wr(m,y,C,H,f),f&&ee&2048&&gh(y.alternate,y);break;default:wr(m,y,C,H,f)}i=i.sibling}}function tl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:tl(s,l),f&2048&&mh(l.alternate,l);break;case 24:tl(s,l),f&2048&&gh(l.alternate,l);break;default:tl(s,l)}i=i.sibling}}var nl=8192;function Dr(t,i,s){if(t.subtreeFlags&nl)for(t=t.child;t!==null;)P_(t,i,s),t=t.sibling}function P_(t,i,s){switch(t.tag){case 26:Dr(t,i,s),t.flags&nl&&t.memoizedState!==null&&mM(s,Bi,t.memoizedState,t.memoizedProps);break;case 5:Dr(t,i,s);break;case 3:case 4:var l=Bi;Bi=zc(t.stateNode.containerInfo),Dr(t,i,s),Bi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=nl,nl=16777216,Dr(t,i,s),nl=l):Dr(t,i,s));break;default:Dr(t,i,s)}}function I_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function il(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,F_(l,t)}I_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)B_(t),t=t.sibling}function B_(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&os(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ac(t)):il(t);break;default:il(t)}}function Ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,F_(l,t)}I_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:os(8,i,i.return),Ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ac(i));break;default:Ac(i)}t=t.sibling}}function F_(t,i){for(;wn!==null;){var s=wn;switch(s.tag){case 0:case 11:case 15:os(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ho(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,wn=l;else e:for(s=t;wn!==null;){l=wn;var f=l.sibling,m=l.return;if(C_(l),l===s){wn=null;break e}if(f!==null){f.return=m,wn=f;break e}wn=m}}}var DS={getCacheForType:function(t){var i=In(_n),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return In(_n).controller.signal}},NS=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Zt=null,St=null,Tt=0,Ft=0,fi=null,ls=!1,Nr=!1,_h=!1,wa=0,un=0,cs=0,Zs=0,vh=0,hi=0,Lr=0,al=null,ei=null,xh=!1,Rc=0,z_=0,Cc=1/0,wc=null,us=null,bn=0,fs=null,Ur=null,Da=0,yh=0,Sh=null,H_=null,sl=0,Mh=null;function di(){return(Lt&2)!==0&&Tt!==0?Tt&-Tt:U.T!==null?Ch():To()}function G_(){if(hi===0)if((Tt&536870912)===0||Rt){var t=xt;xt<<=1,(xt&3932160)===0&&(xt=262144),hi=t}else hi=536870912;return t=ci.current,t!==null&&(t.flags|=32),hi}function ti(t,i,s){(t===Zt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(Or(t,0),hs(t,Tt,hi,!1)),nt(t,s),((Lt&2)===0||t!==Zt)&&(t===Zt&&((Lt&2)===0&&(Zs|=s),un===4&&hs(t,Tt,hi,!1)),$i(t))}function V_(t,i,s){if((Lt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Fe(t,i),f=l?OS(t,i):Eh(t,i,!0),m=l;do{if(f===0){Nr&&!l&&hs(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!LS(s)){f=Eh(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var C=t;f=al;var H=C.current.memoizedState.isDehydrated;if(H&&(Or(C,y).flags|=256),y=Eh(C,y,!1),y!==2){if(_h&&!H){C.errorRecoveryDisabledLanes|=m,Zs|=m,f=4;break e}m=ei,ei=f,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}f=y}if(m=!1,f!==2)continue}}if(f===1){Or(t,0),hs(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:hs(l,i,hi,!ls);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Rc+300-Re(),10<f)){if(hs(l,i,hi,!ls),pe(l,0,!0)!==0)break e;Da=i,l.timeoutHandle=x0(k_.bind(null,l,s,ei,wc,xh,i,hi,Zs,Lr,ls,m,"Throttled",-0,0),f);break e}k_(l,s,ei,wc,xh,i,hi,Zs,Lr,ls,m,null,-0,0)}}break}while(!0);$i(t)}function k_(t,i,s,l,f,m,y,C,H,ee,de,ve,ae,le){if(t.timeoutHandle=-1,ve=i.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ma},P_(i,m,ve);var We=(m&62914560)===m?Rc-Re():(m&4194048)===m?z_-Re():0;if(We=gM(ve,We),We!==null){Da=m,t.cancelPendingCommit=We(Q_.bind(null,t,i,m,s,l,f,y,C,H,de,ve,null,ae,le)),hs(t,m,y,!ee);return}}Q_(t,i,m,s,l,f,y,C,H)}function LS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!oi(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(t,i,s,l){i&=~vh,i&=~Zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Pe(f),y=1<<m;l[m]=-1,f&=~y}s!==0&&Nt(t,s,i)}function Dc(){return(Lt&6)===0?(rl(0),!1):!0}function bh(){if(St!==null){if(Ft===0)var t=St.return;else t=St,xa=Gs=null,zf(t),Er=null,Vo=0,t=St;for(;t!==null;)y_(t.alternate,t),t=t.return;St=null}}function Or(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,JS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Da=0,bh(),Zt=t,St=s=_a(t.current,null),Tt=i,Ft=0,fi=null,ls=!1,Nr=Fe(t,i),_h=!1,Lr=hi=vh=Zs=cs=un=0,ei=al=null,xh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Pe(l),m=1<<f;i|=t[f],l&=~m}return wa=i,Ql(),s}function X_(t,i){ut=null,U.H=Zo,i===br||i===sc?(i=rg(),Ft=3):i===Rf?(i=rg(),Ft=4):Ft=i===th?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,St===null&&(un=1,xc(t,Si(i,t.current)))}function W_(){var t=ci.current;return t===null?!0:(Tt&4194048)===Tt?Ti===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Ti:!1}function q_(){var t=U.H;return U.H=Zo,t===null?Zo:t}function j_(){var t=U.A;return U.A=DS,t}function Nc(){un=4,ls||(Tt&4194048)!==Tt&&ci.current!==null||(Nr=!0),(cs&134217727)===0&&(Zs&134217727)===0||Zt===null||hs(Zt,Tt,hi,!1)}function Eh(t,i,s){var l=Lt;Lt|=2;var f=q_(),m=j_();(Zt!==t||Tt!==i)&&(wc=null,Or(t,i)),i=!1;var y=un;e:do try{if(Ft!==0&&St!==null){var C=St,H=fi;switch(Ft){case 8:bh(),y=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var ee=Ft;if(Ft=0,fi=null,Pr(t,C,H,ee),s&&Nr){y=0;break e}break;default:ee=Ft,Ft=0,fi=null,Pr(t,C,H,ee)}}US(),y=un;break}catch(de){X_(t,de)}while(!0);return i&&t.shellSuspendCounter++,xa=Gs=null,Lt=l,U.H=f,U.A=m,St===null&&(Zt=null,Tt=0,Ql()),y}function US(){for(;St!==null;)Y_(St)}function OS(t,i){var s=Lt;Lt|=2;var l=q_(),f=j_();Zt!==t||Tt!==i?(wc=null,Cc=Re()+500,Or(t,i)):Nr=Fe(t,i);e:do try{if(Ft!==0&&St!==null){i=St;var m=fi;t:switch(Ft){case 1:Ft=0,fi=null,Pr(t,i,m,1);break;case 2:case 9:if(ag(m)){Ft=0,fi=null,K_(i);break}i=function(){Ft!==2&&Ft!==9||Zt!==t||(Ft=7),$i(t)},m.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:ag(m)?(Ft=0,fi=null,K_(i)):(Ft=0,fi=null,Pr(t,i,m,7));break;case 5:var y=null;switch(St.tag){case 26:y=St.memoizedState;case 5:case 27:var C=St;if(y?O0(y):C.stateNode.complete){Ft=0,fi=null;var H=C.sibling;if(H!==null)St=H;else{var ee=C.return;ee!==null?(St=ee,Lc(ee)):St=null}break t}}Ft=0,fi=null,Pr(t,i,m,5);break;case 6:Ft=0,fi=null,Pr(t,i,m,6);break;case 8:bh(),un=6;break e;default:throw Error(a(462))}}PS();break}catch(de){X_(t,de)}while(!0);return xa=Gs=null,U.H=l,U.A=f,Lt=s,St!==null?0:(Zt=null,Tt=0,Ql(),un)}function PS(){for(;St!==null&&!_t();)Y_(St)}function Y_(t){var i=v_(t.alternate,t,wa);t.memoizedProps=t.pendingProps,i===null?Lc(t):St=i}function K_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=h_(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=h_(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:zf(i);default:y_(s,i),i=St=jm(i,wa),i=v_(s,i,wa)}t.memoizedProps=t.pendingProps,i===null?Lc(t):St=i}function Pr(t,i,s,l){xa=Gs=null,zf(i),Er=null,Vo=0;var f=i.return;try{if(bS(t,f,i,s,Tt)){un=1,xc(t,Si(s,t.current)),St=null;return}}catch(m){if(f!==null)throw St=f,m;un=1,xc(t,Si(s,t.current)),St=null;return}i.flags&32768?(Rt||l===1?t=!0:Nr||(Tt&536870912)!==0?t=!1:(ls=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),Z_(i,t)):Lc(i)}function Lc(t){var i=t;do{if((i.flags&32768)!==0){Z_(i,ls);return}t=i.return;var s=AS(i.alternate,i,wa);if(s!==null){St=s;return}if(i=i.sibling,i!==null){St=i;return}St=i=t}while(i!==null);un===0&&(un=5)}function Z_(t,i){do{var s=RS(t.alternate,t);if(s!==null){s.flags&=32767,St=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){St=t;return}St=t=s}while(t!==null);un=6,St=null}function Q_(t,i,s,l,f,m,y,C,H){t.cancelPendingCommit=null;do Uc();while(bn!==0);if((Lt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=hf,on(t,s,m,y,C,H),t===Zt&&(St=Zt=null,Tt=0),Ur=i,fs=t,Da=s,yh=m,Sh=f,H_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zS(Q,function(){return n0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,f=F.p,F.p=2,y=Lt,Lt|=4;try{CS(t,i,s)}finally{Lt=y,F.p=f,U.T=l}}bn=1,J_(),$_(),e0()}}function J_(){if(bn===1){bn=0;var t=fs,i=Ur,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=U.T,U.T=null;var l=F.p;F.p=2;var f=Lt;Lt|=4;try{L_(i,t);var m=Ih,y=Fm(t.containerInfo),C=m.focusedElem,H=m.selectionRange;if(y!==C&&C&&C.ownerDocument&&Bm(C.ownerDocument.documentElement,C)){if(H!==null&&of(C)){var ee=H.start,de=H.end;if(de===void 0&&(de=ee),"selectionStart"in C)C.selectionStart=ee,C.selectionEnd=Math.min(de,C.value.length);else{var ve=C.ownerDocument||document,ae=ve&&ve.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),We=C.textContent.length,$e=Math.min(H.start,We),qt=H.end===void 0?$e:Math.min(H.end,We);!le.extend&&$e>qt&&(y=qt,qt=$e,$e=y);var Z=Im(C,$e),k=Im(C,qt);if(Z&&k&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var $=ve.createRange();$.setStart(Z.node,Z.offset),le.removeAllRanges(),$e>qt?(le.addRange($),le.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),le.addRange($))}}}}for(ve=[],le=C;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ve.length;C++){var me=ve[C];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Wc=!!Ph,Ih=Ph=null}finally{Lt=f,F.p=l,U.T=s}}t.current=i,bn=2}}function $_(){if(bn===2){bn=0;var t=fs,i=Ur,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=U.T,U.T=null;var l=F.p;F.p=2;var f=Lt;Lt|=4;try{R_(t,i.alternate,i)}finally{Lt=f,F.p=l,U.T=s}}bn=3}}function e0(){if(bn===4||bn===3){bn=0,kt();var t=fs,i=Ur,s=Da,l=H_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?bn=5:(bn=0,Ur=fs=null,t0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(us=null),Eo(s),i=i.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=U.T,f=F.p,F.p=2,U.T=null;try{for(var m=t.onRecoverableError,y=0;y<l.length;y++){var C=l[y];m(C.value,{componentStack:C.stack})}}finally{U.T=i,F.p=f}}(Da&3)!==0&&Uc(),$i(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Mh?sl++:(sl=0,Mh=t):sl=0,rl(0)}}function t0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Ho(i)))}function Uc(){return J_(),$_(),e0(),n0()}function n0(){if(bn!==5)return!1;var t=fs,i=yh;yh=0;var s=Eo(Da),l=U.T,f=F.p;try{F.p=32>s?32:s,U.T=null,s=Sh,Sh=null;var m=fs,y=Da;if(bn=0,Ur=fs=null,Da=0,(Lt&6)!==0)throw Error(a(331));var C=Lt;if(Lt|=4,B_(m.current),O_(m,m.current,y,s),Lt=C,rl(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ue,m)}catch{}return!0}finally{F.p=f,U.T=l,t0(t,i)}}function i0(t,i,s){i=Si(s,i),i=eh(t.stateNode,i,2),t=as(t,i,2),t!==null&&(nt(t,2),$i(t))}function zt(t,i,s){if(t.tag===3)i0(t,t,s);else for(;i!==null;){if(i.tag===3){i0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(us===null||!us.has(l))){t=Si(s,t),s=a_(2),l=as(i,s,2),l!==null&&(s_(s,l,i,t),nt(l,2),$i(l));break}}i=i.return}}function Th(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new NS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(_h=!0,f.add(s),t=IS.bind(null,t,i,s),i.then(t,t))}function IS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Zt===t&&(Tt&s)===s&&(un===4||un===3&&(Tt&62914560)===Tt&&300>Re()-Rc?(Lt&2)===0&&Or(t,0):vh|=s,Lr===Tt&&(Lr=0)),$i(t)}function a0(t,i){i===0&&(i=Me()),t=Fs(t,i),t!==null&&(nt(t,i),$i(t))}function BS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),a0(t,s)}function FS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),a0(t,s)}function zS(t,i){return W(t,i)}var Oc=null,Ir=null,Ah=!1,Pc=!1,Rh=!1,ds=0;function $i(t){t!==Ir&&t.next===null&&(Ir===null?Oc=Ir=t:Ir=Ir.next=t),Pc=!0,Ah||(Ah=!0,GS())}function rl(t,i){if(!Rh&&Pc){Rh=!0;do for(var s=!1,l=Oc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var y=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Pe(42|t)+1)-1,m&=f&~(y&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,l0(l,m))}else m=Tt,m=pe(l,l===Zt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Fe(l,m)||(s=!0,l0(l,m));l=l.next}while(s);Rh=!1}}function HS(){s0()}function s0(){Pc=Ah=!1;var t=0;ds!==0&&QS()&&(t=ds);for(var i=Re(),s=null,l=Oc;l!==null;){var f=l.next,m=r0(l,i);m===0?(l.next=null,s===null?Oc=f:s.next=f,f===null&&(Ir=s)):(s=l,(t!==0||(m&3)!==0)&&(Pc=!0)),l=f}bn!==0&&bn!==5||rl(t),ds!==0&&(ds=0)}function r0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-Pe(m),C=1<<y,H=f[y];H===-1?((C&s)===0||(C&l)!==0)&&(f[y]=Le(C,i)):H<=i&&(t.expiredLanes|=C),m&=~C}if(i=Zt,s=Tt,s=pe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&rn(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&rn(l),Eo(s)){case 2:case 8:s=E;break;case 32:s=Q;break;case 268435456:s=be;break;default:s=Q}return l=o0.bind(null,t),s=W(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&rn(l),t.callbackPriority=2,t.callbackNode=null,2}function o0(t,i){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Uc()&&t.callbackNode!==s)return null;var l=Tt;return l=pe(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(V_(t,l,i),r0(t,Re()),t.callbackNode!=null&&t.callbackNode===s?o0.bind(null,t):null)}function l0(t,i){if(Uc())return null;V_(t,i,!0)}function GS(){$S(function(){(Lt&6)!==0?W(D,HS):s0()})}function Ch(){if(ds===0){var t=Sr;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),ds=t}return ds}function c0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Os(""+t)}function u0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function VS(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=c0((f[On]||null).action),y=l.submitter;y&&(i=(i=y[On]||null)?c0(i.formAction):y.getAttribute("formAction"),i!==null&&(m=i,y=null));var C=new jl("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ds!==0){var H=y?u0(f,y):new FormData(f);Yf(s,{pending:!0,data:H,method:f.method,action:m},null,H)}}else typeof m=="function"&&(C.preventDefault(),H=y?u0(f,y):new FormData(f),Yf(s,{pending:!0,data:H,method:f.method,action:m},m,H))},currentTarget:f}]})}}for(var wh=0;wh<ff.length;wh++){var Dh=ff[wh],kS=Dh.toLowerCase(),XS=Dh[0].toUpperCase()+Dh.slice(1);Ii(kS,"on"+XS)}Ii(Gm,"onAnimationEnd"),Ii(Vm,"onAnimationIteration"),Ii(km,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(rS,"onTransitionRun"),Ii(oS,"onTransitionStart"),Ii(lS,"onTransitionCancel"),Ii(Xm,"onTransitionEnd"),ie("onMouseEnter",["mouseout","mouseover"]),ie("onMouseLeave",["mouseout","mouseover"]),ie("onPointerEnter",["pointerout","pointerover"]),ie("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function f0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var y=l.length-1;0<=y;y--){var C=l[y],H=C.instance,ee=C.currentTarget;if(C=C.listener,H!==m&&f.isPropagationStopped())break e;m=C,f.currentTarget=ee;try{m(f)}catch(de){Zl(de)}f.currentTarget=null,m=H}else for(y=0;y<l.length;y++){if(C=l[y],H=C.instance,ee=C.currentTarget,C=C.listener,H!==m&&f.isPropagationStopped())break e;m=C,f.currentTarget=ee;try{m(f)}catch(de){Zl(de)}f.currentTarget=null,m=H}}}}function Mt(t,i){var s=i[Wa];s===void 0&&(s=i[Wa]=new Set);var l=t+"__bubble";s.has(l)||(h0(i,t,2,!1),s.add(l))}function Nh(t,i,s){var l=0;i&&(l|=4),h0(s,t,l,i)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Lh(t){if(!t[Ic]){t[Ic]=!0,kl.forEach(function(s){s!=="selectionchange"&&(WS.has(s)||Nh(s,!1,t),Nh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ic]||(i[Ic]=!0,Nh("selectionchange",!1,i))}}function h0(t,i,s,l){switch(G0(i)){case 2:var f=xM;break;case 8:f=yM;break;default:f=jh}s=f.bind(null,i,s,t),f=void 0,!Qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Uh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var C=l.stateNode.containerInfo;if(C===f)break;if(y===4)for(y=l.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;C!==null;){if(y=ja(C),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){l=m=y;continue e}C=C.parentNode}}l=l.return}_m(function(){var ee=m,de=Ku(s),ve=[];e:{var ae=Wm.get(t);if(ae!==void 0){var le=jl,We=t;switch(t){case"keypress":if(Wl(s)===0)break e;case"keydown":case"keyup":le=Fy;break;case"focusin":We="focus",le=tf;break;case"focusout":We="blur",le=tf;break;case"beforeblur":case"afterblur":le=tf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Gy;break;case Gm:case Vm:case km:le=wy;break;case Xm:le=ky;break;case"scroll":case"scrollend":le=Ey;break;case"wheel":le=Wy;break;case"copy":case"cut":case"paste":le=Ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Mm;break;case"toggle":case"beforetoggle":le=jy}var $e=(i&4)!==0,qt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?ae!==null?ae+"Capture":null:ae;$e=[];for(var k=ee,$;k!==null;){var me=k;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Z===null||(me=wo(k,Z),me!=null&&$e.push(ll(k,me,$))),qt)break;k=k.return}0<$e.length&&(ae=new le(ae,We,null,s,de),ve.push({event:ae,listeners:$e}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&s!==Yu&&(We=s.relatedTarget||s.fromElement)&&(ja(We)||We[pa]))break e;if((le||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(We=s.relatedTarget||s.toElement,le=ee,We=We?ja(We):null,We!==null&&(qt=c(We),$e=We.tag,We!==qt||$e!==5&&$e!==27&&$e!==6)&&(We=null)):(le=null,We=ee),le!==We)){if($e=ym,me="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&($e=Mm,me="onPointerLeave",Z="onPointerEnter",k="pointer"),qt=le==null?ae:Us(le),$=We==null?ae:Us(We),ae=new $e(me,k+"leave",le,s,de),ae.target=qt,ae.relatedTarget=$,me=null,ja(de)===ee&&($e=new $e(Z,k+"enter",We,s,de),$e.target=$,$e.relatedTarget=qt,me=$e),qt=me,le&&We)t:{for($e=qS,Z=le,k=We,$=0,me=Z;me;me=$e(me))$++;me=0;for(var Qe=k;Qe;Qe=$e(Qe))me++;for(;0<$-me;)Z=$e(Z),$--;for(;0<me-$;)k=$e(k),me--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){$e=Z;break t}Z=$e(Z),k=$e(k)}$e=null}else $e=null;le!==null&&d0(ve,ae,le,$e,!1),We!==null&&qt!==null&&d0(ve,qt,We,$e,!0)}}e:{if(ae=ee?Us(ee):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var wt=Dm;else if(Cm(ae))if(Nm)wt=iS;else{wt=tS;var je=eS}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&Ut(ee.elementType)&&(wt=Dm):wt=nS;if(wt&&(wt=wt(t,ee))){wm(ve,wt,s,de);break e}je&&je(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&yt(ae,"number",ae.value)}switch(je=ee?Us(ee):window,t){case"focusin":(Cm(je)||je.contentEditable==="true")&&(dr=je,lf=ee,Bo=null);break;case"focusout":Bo=lf=dr=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,zm(ve,s,de);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":zm(ve,s,de)}var ht;if(af)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else hr?Am(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(bm&&s.locale!=="ko"&&(hr||At!=="onCompositionStart"?At==="onCompositionEnd"&&hr&&(ht=vm()):(Qa=de,Ju="value"in Qa?Qa.value:Qa.textContent,hr=!0)),je=Bc(ee,At),0<je.length&&(At=new Sm(At,t,null,s,de),ve.push({event:At,listeners:je}),ht?At.data=ht:(ht=Rm(s),ht!==null&&(At.data=ht)))),(ht=Ky?Zy(t,s):Qy(t,s))&&(At=Bc(ee,"onBeforeInput"),0<At.length&&(je=new Sm("onBeforeInput","beforeinput",null,s,de),ve.push({event:je,listeners:At}),je.data=ht)),VS(ve,t,ee,s,de)}f0(ve,i)})}function ll(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Bc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=wo(t,s),f!=null&&l.unshift(ll(t,f,m)),f=wo(t,i),f!=null&&l.push(ll(t,f,m))),t.tag===3)return l;t=t.return}return[]}function qS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function d0(t,i,s,l,f){for(var m=i._reactName,y=[];s!==null&&s!==l;){var C=s,H=C.alternate,ee=C.stateNode;if(C=C.tag,H!==null&&H===l)break;C!==5&&C!==26&&C!==27||ee===null||(H=ee,f?(ee=wo(s,m),ee!=null&&y.unshift(ll(s,ee,H))):f||(ee=wo(s,m),ee!=null&&y.push(ll(s,ee,H)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var jS=/\r\n?/g,YS=/\u0000|\uFFFD/g;function p0(t){return(typeof t=="string"?t:""+t).replace(jS,`
`).replace(YS,"")}function m0(t,i){return i=p0(i),p0(t)===i}function Wt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ri(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ri(t,""+l);break;case"className":Xe(t,"class",l);break;case"tabIndex":Xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,s,l);break;case"style":Pi(t,l,m);break;case"data":if(i!=="object"){Xe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Os(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Wt(t,i,"name",f.name,f,null),Wt(t,i,"formEncType",f.formEncType,f,null),Wt(t,i,"formMethod",f.formMethod,f,null),Wt(t,i,"formTarget",f.formTarget,f,null)):(Wt(t,i,"encType",f.encType,f,null),Wt(t,i,"method",f.method,f,null),Wt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Os(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ma);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Os(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ie(t,"popover",l);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ie(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ki.get(s)||s,Ie(t,s,l))}}function Oh(t,i,s,l,f,m){switch(s){case"style":Pi(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ri(t,l):(typeof l=="number"||typeof l=="bigint")&&ri(t,""+l);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ma);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[On]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ie(t,s,l)}}}function Fn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var y=s[m];if(y!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,m,y,s,null)}}f&&Wt(t,i,"srcSet",s.srcSet,s,null),l&&Wt(t,i,"src",s.src,s,null);return;case"input":Mt("invalid",t);var C=m=y=f=null,H=null,ee=null;for(l in s)if(s.hasOwnProperty(l)){var de=s[l];if(de!=null)switch(l){case"name":f=de;break;case"type":y=de;break;case"checked":H=de;break;case"defaultChecked":ee=de;break;case"value":m=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:Wt(t,i,l,de,s,null)}}Gn(t,m,C,H,ee,y,f,!1);return;case"select":Mt("invalid",t),l=y=m=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":m=C;break;case"defaultValue":y=C;break;case"multiple":l=C;default:Wt(t,i,f,C,s,null)}i=m,s=y,t.multiple=!!l,i!=null?Mn(t,!!l,i,!1):s!=null&&Mn(t,!!l,s,!0);return;case"textarea":Mt("invalid",t),m=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(C=s[y],C!=null))switch(y){case"value":l=C;break;case"defaultValue":f=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Wt(t,i,y,C,s,null)}Oi(t,l,f,m);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Wt(t,i,H,l,s,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(l=0;l<ol.length;l++)Mt(ol[l],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(l=s[ee],l!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,ee,l,s,null)}return;default:if(Ut(i)){for(de in s)s.hasOwnProperty(de)&&(l=s[de],l!==void 0&&Oh(t,i,de,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Wt(t,i,C,l,s,null))}function KS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,y=null,C=null,H=null,ee=null,de=null;for(le in s){var ve=s[le];if(s.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=ve;default:l.hasOwnProperty(le)||Wt(t,i,le,null,l,ve)}}for(var ae in l){var le=l[ae];if(ve=s[ae],l.hasOwnProperty(ae)&&(le!=null||ve!=null))switch(ae){case"type":m=le;break;case"name":f=le;break;case"checked":ee=le;break;case"defaultChecked":de=le;break;case"value":y=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==ve&&Wt(t,i,ae,le,l,ve)}}Ge(t,y,C,H,ee,de,m,f);return;case"select":le=y=C=ae=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":le=H;default:l.hasOwnProperty(m)||Wt(t,i,m,null,l,H)}for(f in l)if(m=l[f],H=s[f],l.hasOwnProperty(f)&&(m!=null||H!=null))switch(f){case"value":ae=m;break;case"defaultValue":C=m;break;case"multiple":y=m;default:m!==H&&Wt(t,i,f,m,l,H)}i=C,s=y,l=le,ae!=null?Mn(t,!!s,ae,!1):!!l!=!!s&&(i!=null?Mn(t,!!s,i,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":le=ae=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Wt(t,i,C,null,l,f)}for(y in l)if(f=l[y],m=s[y],l.hasOwnProperty(y)&&(f!=null||m!=null))switch(y){case"value":ae=f;break;case"defaultValue":le=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Wt(t,i,y,f,l,m)}si(t,ae,le);return;case"option":for(var We in s)if(ae=s[We],s.hasOwnProperty(We)&&ae!=null&&!l.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Wt(t,i,We,null,l,ae)}for(H in l)if(ae=l[H],le=s[H],l.hasOwnProperty(H)&&ae!==le&&(ae!=null||le!=null))switch(H){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Wt(t,i,H,ae,l,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in s)ae=s[$e],s.hasOwnProperty($e)&&ae!=null&&!l.hasOwnProperty($e)&&Wt(t,i,$e,null,l,ae);for(ee in l)if(ae=l[ee],le=s[ee],l.hasOwnProperty(ee)&&ae!==le&&(ae!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:Wt(t,i,ee,ae,l,le)}return;default:if(Ut(i)){for(var qt in s)ae=s[qt],s.hasOwnProperty(qt)&&ae!==void 0&&!l.hasOwnProperty(qt)&&Oh(t,i,qt,void 0,l,ae);for(de in l)ae=l[de],le=s[de],!l.hasOwnProperty(de)||ae===le||ae===void 0&&le===void 0||Oh(t,i,de,ae,l,le);return}}for(var Z in s)ae=s[Z],s.hasOwnProperty(Z)&&ae!=null&&!l.hasOwnProperty(Z)&&Wt(t,i,Z,null,l,ae);for(ve in l)ae=l[ve],le=s[ve],!l.hasOwnProperty(ve)||ae===le||ae==null&&le==null||Wt(t,i,ve,ae,l,le)}function g0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,y=f.initiatorType,C=f.duration;if(m&&C&&g0(y)){for(y=0,C=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],ee=H.startTime;if(ee>C)break;var de=H.transferSize,ve=H.initiatorType;de&&g0(ve)&&(H=H.responseEnd,y+=de*(H<C?1:(C-ee)/(H-ee)))}if(--l,i+=8*(m+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ph=null,Ih=null;function Fc(t){return t.nodeType===9?t:t.ownerDocument}function _0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Bh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fh=null;function QS(){var t=window.event;return t&&t.type==="popstate"?t===Fh?!1:(Fh=t,!0):(Fh=null,!1)}var x0=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(t){return y0.resolve(null).then(t).catch(eM)}:x0;function eM(t){setTimeout(function(){throw t})}function ps(t){return t==="head"}function S0(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Hr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")cl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,cl(s);for(var m=s.firstChild;m;){var y=m.nextSibling,C=m.nodeName;m[qa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=y}}else s==="body"&&cl(t.ownerDocument.body);s=f}while(s);Hr(i)}function M0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function zh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":zh(s),Co(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function tM(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[qa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function nM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ai(t.nextSibling),t===null))return null;return t}function b0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ai(t.nextSibling),t===null))return null;return t}function Hh(t){return t.data==="$?"||t.data==="$~"}function Gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function iM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ai(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vh=null;function E0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ai(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function T0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function A0(t,i,s){switch(i=Fc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function cl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Co(t)}var Ri=new Map,R0=new Set;function zc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Na=F.d;F.d={f:aM,r:sM,D:rM,C:oM,L:lM,m:cM,X:fM,S:uM,M:hM};function aM(){var t=Na.f(),i=Dc();return t||i}function sM(t){var i=Ya(t);i!==null&&i.tag===5&&i.type==="form"?Xg(i):Na.r(t)}var Br=typeof document>"u"?null:document;function C0(t,i,s){var l=Br;if(l&&typeof i=="string"&&i){var f=It(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),R0.has(f)||(R0.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Fn(i,"link",t),gn(i),l.head.appendChild(i)))}}function rM(t){Na.D(t),C0("dns-prefetch",t,null)}function oM(t,i){Na.C(t,i),C0("preconnect",t,i)}function lM(t,i,s){Na.L(t,i,s);var l=Br;if(l&&t&&i){var f='link[rel="preload"][as="'+It(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+It(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+It(s.imageSizes)+'"]')):f+='[href="'+It(t)+'"]';var m=f;switch(i){case"style":m=Fr(t);break;case"script":m=zr(t)}Ri.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ri.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ul(m))||i==="script"&&l.querySelector(fl(m))||(i=l.createElement("link"),Fn(i,"link",t),gn(i),l.head.appendChild(i)))}}function cM(t,i){Na.m(t,i);var s=Br;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=zr(t)}if(!Ri.has(m)&&(t=g({rel:"modulepreload",href:t},i),Ri.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(fl(m)))return}l=s.createElement("link"),Fn(l,"link",t),gn(l),s.head.appendChild(l)}}}function uM(t,i,s){Na.S(t,i,s);var l=Br;if(l&&t){var f=Ka(l).hoistableStyles,m=Fr(t);i=i||"default";var y=f.get(m);if(!y){var C={loading:0,preload:null};if(y=l.querySelector(ul(m)))C.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ri.get(m))&&kh(t,s);var H=y=l.createElement("link");gn(H),Fn(H,"link",t),H._p=new Promise(function(ee,de){H.onload=ee,H.onerror=de}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Hc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:C},f.set(m,y)}}}function fM(t,i){Na.X(t,i);var s=Br;if(s&&t){var l=Ka(s).hoistableScripts,f=zr(t),m=l.get(f);m||(m=s.querySelector(fl(f)),m||(t=g({src:t,async:!0},i),(i=Ri.get(f))&&Xh(t,i),m=s.createElement("script"),gn(m),Fn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function hM(t,i){Na.M(t,i);var s=Br;if(s&&t){var l=Ka(s).hoistableScripts,f=zr(t),m=l.get(f);m||(m=s.querySelector(fl(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=Ri.get(f))&&Xh(t,i),m=s.createElement("script"),gn(m),Fn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function w0(t,i,s,l){var f=(f=re.current)?zc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Fr(s.href),s=Ka(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Fr(s.href);var m=Ka(f).hoistableStyles,y=m.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=f.querySelector(ul(t)))&&!m._p&&(y.instance=m,y.state.loading=5),Ri.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ri.set(t,s),m||dM(f,t,s,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=zr(s),s=Ka(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Fr(t){return'href="'+It(t)+'"'}function ul(t){return'link[rel="stylesheet"]['+t+"]"}function D0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function dM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Fn(i,"link",s),gn(i),t.head.appendChild(i))}function zr(t){return'[src="'+It(t)+'"]'}function fl(t){return"script[async]"+t}function N0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+It(s.href)+'"]');if(l)return i.instance=l,gn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gn(l),Fn(l,"style",f),Hc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Fr(s.href);var m=t.querySelector(ul(f));if(m)return i.state.loading|=4,i.instance=m,gn(m),m;l=D0(s),(f=Ri.get(f))&&kh(l,f),m=(t.ownerDocument||t).createElement("link"),gn(m);var y=m;return y._p=new Promise(function(C,H){y.onload=C,y.onerror=H}),Fn(m,"link",l),i.state.loading|=4,Hc(m,s.precedence,t),i.instance=m;case"script":return m=zr(s.src),(f=t.querySelector(fl(m)))?(i.instance=f,gn(f),f):(l=s,(f=Ri.get(m))&&(l=g({},s),Xh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),gn(f),Fn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hc(l,s.precedence,t));return i.instance}function Hc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,y=0;y<l.length;y++){var C=l[y];if(C.dataset.precedence===i)m=C;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function kh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Xh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Gc=null;function L0(t,i,s){if(Gc===null){var l=new Map,f=Gc=new Map;f.set(s,l)}else f=Gc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[qa]||m[hn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(i)||"";y=t+y;var C=l.get(y);C?C.push(m):l.set(y,[m])}}return l}function U0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function pM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function O0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function mM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Fr(l.href),m=i.querySelector(ul(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Vc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,gn(m);return}m=i.ownerDocument||i,l=D0(l),(f=Ri.get(f))&&kh(l,f),m=m.createElement("link"),gn(m);var y=m;y._p=new Promise(function(C,H){y.onload=C,y.onerror=H}),Fn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Vc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Wh=0;function gM(t,i){return t.stylesheets&&t.count===0&&Xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Wh===0&&(Wh=62500*ZS());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Wh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kc=null;function Xc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kc=new Map,i.forEach(_M,t),kc=null,Vc.call(t))}function _M(t,i){if(!(i.state.loading&4)){var s=kc.get(t);if(s)var l=s.get(null);else{s=new Map,kc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var y=f[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),m=s.get(y)||l,m===l&&s.set(null,f),s.set(y,f),this.count++,l=Vc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var hl={$$typeof:N,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function vM(t,i,s,l,f,m,y,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function P0(t,i,s,l,f,m,y,C,H,ee,de,ve){return t=new vM(t,i,s,y,H,ee,de,ve,C),i=1,m===!0&&(i|=24),m=li(3,null,null,i),t.current=m,m.stateNode=t,i=Ef(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Cf(m),t}function I0(t){return t?(t=gr,t):gr}function B0(t,i,s,l,f,m){f=I0(f),l.context===null?l.context=f:l.pendingContext=f,l=is(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=as(t,l,i),s!==null&&(ti(s,t,i),Xo(s,t,i))}function F0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function qh(t,i){F0(t,i),(t=t.alternate)&&F0(t,i)}function z0(t){if(t.tag===13||t.tag===31){var i=Fs(t,67108864);i!==null&&ti(i,t,67108864),qh(t,67108864)}}function H0(t){if(t.tag===13||t.tag===31){var i=di();i=Ls(i);var s=Fs(t,i);s!==null&&ti(s,t,i),qh(t,i)}}var Wc=!0;function xM(t,i,s,l){var f=U.T;U.T=null;var m=F.p;try{F.p=2,jh(t,i,s,l)}finally{F.p=m,U.T=f}}function yM(t,i,s,l){var f=U.T;U.T=null;var m=F.p;try{F.p=8,jh(t,i,s,l)}finally{F.p=m,U.T=f}}function jh(t,i,s,l){if(Wc){var f=Yh(l);if(f===null)Uh(t,i,l,qc,s),V0(t,l);else if(MM(f,t,i,s,l))l.stopPropagation();else if(V0(t,l),i&4&&-1<SM.indexOf(t)){for(;f!==null;){var m=Ya(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Te(m.pendingLanes);if(y!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var H=1<<31-Pe(y);C.entanglements[1]|=H,y&=~H}$i(m),(Lt&6)===0&&(Cc=Re()+500,rl(0))}}break;case 31:case 13:C=Fs(m,2),C!==null&&ti(C,m,2),Dc(),qh(m,2)}if(m=Yh(l),m===null&&Uh(t,i,l,qc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Uh(t,i,l,null,s)}}function Yh(t){return t=Ku(t),Kh(t)}var qc=null;function Kh(t){if(qc=null,t=ja(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return qc=t,null}function G0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tn()){case D:return 2;case E:return 8;case Q:case ge:return 32;case be:return 268435456;default:return 32}default:return 32}}var Zh=!1,ms=null,gs=null,_s=null,dl=new Map,pl=new Map,vs=[],SM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V0(t,i){switch(t){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(i.pointerId)}}function ml(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ya(i),i!==null&&z0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function MM(t,i,s,l,f){switch(i){case"focusin":return ms=ml(ms,t,i,s,l,f),!0;case"dragenter":return gs=ml(gs,t,i,s,l,f),!0;case"mouseover":return _s=ml(_s,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return dl.set(m,ml(dl.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,pl.set(m,ml(pl.get(m)||null,t,i,s,l,f)),!0}return!1}function k0(t){var i=ja(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Ao(t.priority,function(){H0(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,Ao(t.priority,function(){H0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Yh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Yu=l,s.target.dispatchEvent(l),Yu=null}else return i=Ya(s),i!==null&&z0(i),t.blockedOn=s,!1;i.shift()}return!0}function X0(t,i,s){jc(t)&&s.delete(i)}function bM(){Zh=!1,ms!==null&&jc(ms)&&(ms=null),gs!==null&&jc(gs)&&(gs=null),_s!==null&&jc(_s)&&(_s=null),dl.forEach(X0),pl.forEach(X0)}function Yc(t,i){t.blockedOn===i&&(t.blockedOn=null,Zh||(Zh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bM)))}var Kc=null;function W0(t){Kc!==t&&(Kc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Kc===t&&(Kc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Kh(l||s)===null)continue;break}var m=Ya(s);m!==null&&(t.splice(i,3),i-=3,Yf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Hr(t){function i(H){return Yc(H,t)}ms!==null&&Yc(ms,t),gs!==null&&Yc(gs,t),_s!==null&&Yc(_s,t),dl.forEach(i),pl.forEach(i);for(var s=0;s<vs.length;s++){var l=vs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<vs.length&&(s=vs[0],s.blockedOn===null);)k0(s),s.blockedOn===null&&vs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],y=f[On]||null;if(typeof m=="function")y||W0(s);else if(y){var C=null;if(m&&m.hasAttribute("formAction")){if(f=m,y=m[On]||null)C=y.formAction;else if(Kh(f)!==null)continue}else C=y.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),W0(s)}}}function q0(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Qh(t){this._internalRoot=t}Zc.prototype.render=Qh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=di();B0(s,l,t,i,null,null)},Zc.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;B0(t.current,2,null,t,null,null),Dc(),i[pa]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var i=To();t={blockedOn:null,target:t,priority:i};for(var s=0;s<vs.length&&i!==0&&i<vs[s].priority;s++);vs.splice(s,0,t),s===0&&k0(t)}};var j0=e.version;if(j0!=="19.2.7")throw Error(a(527,j0,"19.2.7"));F.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var EM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{ue=Qc.inject(EM),fe=Qc}catch{}}return _l.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=e_,m=t_,y=n_;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=P0(t,1,!1,null,null,s,l,null,f,m,y,q0),t[pa]=i.current,Lh(t),new Qh(i)},_l.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",m=e_,y=t_,C=n_,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=P0(t,1,!0,i,s??null,l,f,H,m,y,C,q0),i.context=I0(null),s=i.current,l=di(),l=Ls(l),f=is(l),f.callback=null,as(s,f,l),s=l,i.current.lanes=s,nt(i,s),$i(i),t[pa]=i.current,Lh(t),new Zc(i)},_l.version="19.2.7",_l}var iv;function OM(){if(iv)return ed.exports;iv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ed.exports=UM(),ed.exports}var PM=OM();const Xi={meta:{title:"Радиомикрофон на двух транзисторах",authors:"Вознесенская К.П., Денисова А.Е., Целовальникова А.Т.",group:"БИВ231",organization:"НИУ ВШЭ · АПР",year:"2026"},bom:[{id:"R1",name:"Резистор",value:"560 кОм",qty:1},{id:"R2,R4,R5",name:"Резистор",value:"10 кОм",qty:3},{id:"R3",name:"Резистор",value:"30 кОм",qty:1},{id:"R6",name:"Резистор",value:"3 кОм",qty:1},{id:"R7",name:"Резистор",value:"100 Ом",qty:1},{id:"C1",name:"Конденсатор",value:"100 нФ",qty:1},{id:"C2",name:"Конденсатор",value:"1 мкФ",qty:1},{id:"C3,C8",name:"Конденсатор",value:"10 нФ",qty:2},{id:"C4",name:"Конденсатор",value:"390 пФ",qty:1},{id:"C5",name:"Конденсатор",value:"15 пФ",qty:1},{id:"C6",name:"Конденсатор",value:"8–30 пФ (подстр.)",qty:1},{id:"C7",name:"Конденсатор",value:"10 мкФ (полярн.)",qty:1},{id:"L1",name:"Катушка",value:"0,25 мкГн",qty:1},{id:"T1",name:"Транзистор KT315",value:"NPN",qty:1},{id:"T2",name:"Транзистор S9018",value:"NPN",qty:1}],parts:{pcb:{name:"Печатная плата FR-4",desc:"Габарит 44×34×1,6 мм. Монтаж поверхностных и выводных компонентов."},T1:{name:"T1 - KT315",desc:"НЧ каскад, корпус TO-92. P ≈ 0,09 мВт."},T2:{name:"T2 - S9018",desc:"ВЧ генератор. P ≈ 108 мВт - основной нагрев."},L1:{name:"L1 - 0,25 мкГн",desc:"Катушка индуктивности, контур 80–110 МГц."},C6:{name:"C6 - подстроечный",desc:"8–30 пФ. Подстройка несущей частоты."}},sections:[{id:"general",title:"Общие сведения",kind:"general"},{id:"pcb3d",title:"3D-модель платы",kind:"bom"},{id:"mount",title:"Монтаж на плату",kind:"procedure",procedureId:"mount"},{id:"assembly",title:"Сборка изделия",kind:"procedure",procedureId:"assembly"},{id:"operation",title:"Эксплуатация",kind:"operation"},{id:"maintenance",title:"Ремонт и ТО",kind:"maintenance"},{id:"safety",title:"Безопасность",kind:"safety"},{id:"specs",title:"Технические данные",kind:"specs"}],procedures:{mount:{title:"Монтаж компонентов на печатную плату",route:"Операция 015 маршрутной карты",steps:[{text:"Входной контроль платы: дорожки, отверстия, отсутствие дефектов."},{text:"Пайка SMD-резисторов R1–R7 (низкий профиль)."},{text:"Пайка керамических конденсаторов C1–C5, C8."},{text:"Пайка C7 с соблюдением полярности «+»."},{text:"Установка подстроечного C6 и катушки L1."},{text:"Пайка T1 (KT315) и T2 (S9018) - ориентация выводов по схеме."},{text:"Пайка разъёмов BAT, MIC_IN, ANT_OUT. Визуальный контроль паек."}]},assembly:{title:"Сборка изделия в корпус",route:"Операции 030–035 маршрутной карты",steps:[{text:"Комплектовка: плата, корпус, крышка, антенна, микрофон, батарея."},{text:"Настройка C6, проверка FM, ток 12–16 мА."},{text:"Установка платы в корпус, крепёж M2."},{text:"Подключение микрофона, антенны, батареи; установка крышки."}]}}};function IM({onPrint:r}){const{meta:e}=Xi;return _e.jsxs("header",{className:"doc-header no-print",children:[_e.jsxs("div",{className:"doc-header__brand",children:[_e.jsx("h1",{className:"doc-header__title",children:e.title}),_e.jsx("p",{className:"doc-header__authors",children:e.authors}),_e.jsxs("p",{className:"doc-header__meta",children:[e.group," · ",e.organization," · ",e.year]})]}),_e.jsx("button",{type:"button",className:"btn btn--outline btn--sm",onClick:r,children:"Печать"})]})}function BM({activeId:r,onSelect:e}){return _e.jsx("aside",{className:"sidebar no-print",children:_e.jsx("nav",{className:"sidebar__nav","aria-label":"Разделы руководства",children:Xi.sections.map((n,a)=>{const o=String(a+1).padStart(2,"0");return _e.jsxs("button",{type:"button",className:`nav-item${r===n.id?" nav-item--active":""}`,onClick:()=>e(n.id),children:[_e.jsx("span",{className:"nav-item__num",children:o}),_e.jsx("span",{children:n.title})]},n.id)})})})}function FM({procedureId:r,stepIndex:e,onStepChange:n}){const a=Xi.procedures[r];return a?_e.jsxs(_e.Fragment,{children:[_e.jsx("p",{className:"procedure-route",children:a.route}),_e.jsx("ol",{className:"procedure-steps",children:a.steps.map((o,c)=>_e.jsxs("li",{className:`procedure-step${c===e?" procedure-step--active":""}`,onClick:()=>n(c),onKeyDown:u=>u.key==="Enter"&&n(c),role:"button",tabIndex:0,children:[_e.jsx("span",{className:"procedure-step__num",children:c+1}),_e.jsx("span",{className:"procedure-step__text",children:o.text})]},o.text))}),_e.jsxs("p",{className:"procedure-route",children:["Шаг ",e+1," / ",a.steps.length]})]}):null}function zM({sectionId:r,stepIndex:e,onStepChange:n,onSelectPart:a}){const o=Xi.sections.find(c=>c.id===r);if(!o||o.kind==="bom")return null;switch(o.kind){case"general":return _e.jsx("table",{className:"data-table",children:_e.jsxs("tbody",{children:[_e.jsxs("tr",{children:[_e.jsx("th",{children:"Назначение"}),_e.jsx("td",{children:"FM-передатчик 80–110 МГц"})]}),_e.jsxs("tr",{children:[_e.jsx("th",{children:"Питание"}),_e.jsx("td",{children:"9 В, 12–16 мА"})]}),_e.jsxs("tr",{children:[_e.jsx("th",{children:"Класс ЭБ"}),_e.jsx("td",{children:"III (SELV)"})]}),_e.jsxs("tr",{children:[_e.jsx("th",{children:"Плата"}),_e.jsx("td",{children:"44×34×1,6 мм, FR-4"})]})]})});case"procedure":return _e.jsx(FM,{procedureId:o.procedureId,stepIndex:e,onStepChange:n});case"operation":return _e.jsxs("ol",{className:"plain-list",children:[_e.jsx("li",{children:"Антенна → ANT_OUT"}),_e.jsx("li",{children:"Микрофон → MIC_IN"}),_e.jsx("li",{children:"Питание 9 В → BAT"}),_e.jsx("li",{children:"Настройка FM-приёмника"}),_e.jsxs("li",{children:["Подстройка частоты -"," ",_e.jsx("button",{type:"button",className:"link-btn",onClick:()=>a("C6"),children:"C6"})]})]});case"maintenance":return _e.jsxs("table",{className:"data-table",children:[_e.jsx("thead",{children:_e.jsxs("tr",{children:[_e.jsx("th",{children:"Симптом"}),_e.jsx("th",{children:"Проверить"})]})}),_e.jsxs("tbody",{children:[_e.jsxs("tr",{children:[_e.jsx("td",{children:"Нет несущей"}),_e.jsx("td",{children:"T2, L1, C6, 9 В, антенна"})]}),_e.jsxs("tr",{children:[_e.jsx("td",{children:"Нет звука"}),_e.jsx("td",{children:"T1, микрофон, MIC_IN"})]}),_e.jsxs("tr",{children:[_e.jsx("td",{children:"Греется T2"}),_e.jsx("td",{children:"Антенна, R7"})]})]})]});case"safety":return _e.jsxs("ul",{className:"plain-list",children:[_e.jsx("li",{children:"SELV 9 В, класс III"}),_e.jsx("li",{children:"Пайка - вентиляция, защита глаз"}),_e.jsx("li",{children:"IP53 - без влаги в корпусе"})]});case"specs":return _e.jsx("table",{className:"data-table",children:_e.jsxs("tbody",{children:[_e.jsxs("tr",{children:[_e.jsx("th",{children:"Плата"}),_e.jsx("td",{children:"44×34×1,6 мм"})]}),_e.jsxs("tr",{children:[_e.jsx("th",{children:"Изделие"}),_e.jsx("td",{children:"15×10×6 см, до 80 г"})]}),_e.jsxs("tr",{children:[_e.jsx("th",{children:"Ток"}),_e.jsx("td",{children:"12–16 мА"})]}),_e.jsxs("tr",{children:[_e.jsx("th",{children:"Частота"}),_e.jsx("td",{children:"80–110 МГц"})]}),_e.jsxs("tr",{children:[_e.jsx("th",{children:"Корпус"}),_e.jsx("td",{children:"АБС, 51×41 мм"})]})]})});default:return null}}function HM({selectedId:r,onSelect:e}){return _e.jsxs("table",{className:"data-table data-table--compact",children:[_e.jsx("thead",{children:_e.jsxs("tr",{children:[_e.jsx("th",{children:"Поз."}),_e.jsx("th",{children:"Элемент"}),_e.jsx("th",{children:"Номинал"}),_e.jsx("th",{children:"Кол."})]})}),_e.jsx("tbody",{children:Xi.bom.map(n=>{const a=n.id.split(",").map(c=>c.trim()),o=a.some(c=>c===r);return _e.jsxs("tr",{className:`bom-row${o?" bom-row--selected":""}`,onClick:()=>e(a[0]),children:[_e.jsx("td",{children:n.id}),_e.jsx("td",{children:n.name}),_e.jsx("td",{children:n.value}),_e.jsx("td",{children:n.qty})]},n.id)})})]})}function GM({selectedPartId:r,onSelectPart:e}){return _e.jsx("div",{className:"main-content",children:_e.jsx(HM,{selectedId:r,onSelect:e})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="184",ao={ROTATE:0,DOLLY:1,PAN:2},io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VM=0,av=1,kM=2,Ru=1,XM=2,wl=3,Va=0,ii=1,Di=2,Ha=0,so=1,sv=2,rv=3,ov=4,WM=5,nr=100,qM=101,jM=102,YM=103,KM=104,ZM=200,QM=201,JM=202,$M=203,Xd=204,Wd=205,eb=206,tb=207,nb=208,ib=209,ab=210,sb=211,rb=212,ob=213,lb=214,qd=0,jd=1,Yd=2,lo=3,Kd=4,Zd=5,Qd=6,Jd=7,Ux=0,cb=1,ub=2,ra=0,Ox=1,Px=2,Ix=3,Bx=4,Fx=5,zx=6,Hx=7,lv="attached",fb="detached",Gx=300,or=301,co=302,ad=303,sd=304,Vu=306,uo=1e3,aa=1001,Ou=1002,Tn=1003,Vx=1004,Dl=1005,An=1006,Cu=1007,Fa=1008,gi=1009,kx=1010,Xx=1011,Pl=1012,kp=1013,ca=1014,Ni=1015,ka=1016,Xp=1017,Wp=1018,Il=1020,Wx=35902,qx=35899,jx=1021,Yx=1022,Li=1023,Xa=1026,ar=1027,qp=1028,jp=1029,lr=1030,Yp=1031,Kp=1033,wu=33776,Du=33777,Nu=33778,Lu=33779,$d=35840,ep=35841,tp=35842,np=35843,ip=36196,ap=37492,sp=37496,rp=37488,op=37489,Pu=37490,lp=37491,cp=37808,up=37809,fp=37810,hp=37811,dp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,yp=37819,Sp=37820,Mp=37821,bp=36492,Ep=36494,Tp=36495,Ap=36283,Rp=36284,Iu=36285,Cp=36286,Bl=2300,Fl=2301,rd=2302,cv=2303,uv=2400,fv=2401,hv=2402,hb=2500,db=0,Kx=1,wp=2,pb=3200,Dp=0,mb=1,Cs="",Nn="srgb",_i="srgb-linear",Bu="linear",Ht="srgb",Gr=7680,dv=519,gb=512,_b=513,vb=514,Zp=515,xb=516,yb=517,Qp=518,Sb=519,Np=35044,pv="300 es",sa=2e3,zl=2001;function Mb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Hl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Eb(){const r=Hl("canvas");return r.style.display="block",r}const mv={};function Fu(...r){const e="THREE."+r.shift();console.log(e,...r)}function Zx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ye(...r){r=Zx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function et(...r){r=Zx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function Lp(...r){const e=r.join(" ");e in mv||(mv[e]=!0,Ye(...r))}function Tb(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const Ab={[qd]:jd,[Yd]:Qd,[Kd]:Jd,[lo]:Zd,[jd]:qd,[Qd]:Yd,[Jd]:Kd,[Zd]:lo};class Ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gv=1234567;const Ll=Math.PI/180,fo=180/Math.PI;function Wi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[n&63|128]+kn[n>>8&255]+"-"+kn[n>>16&255]+kn[n>>24&255]+kn[a&255]+kn[a>>8&255]+kn[a>>16&255]+kn[a>>24&255]).toLowerCase()}function gt(r,e,n){return Math.max(e,Math.min(n,r))}function Jp(r,e){return(r%e+e)%e}function Rb(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function Cb(r,e,n){return r!==e?(n-r)/(e-r):0}function Ul(r,e,n){return(1-n)*r+n*e}function wb(r,e,n,a){return Ul(r,e,1-Math.exp(-n*a))}function Db(r,e=1){return e-Math.abs(Jp(r,e*2)-e)}function Nb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function Lb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function Ub(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ob(r,e){return r+Math.random()*(e-r)}function Pb(r){return r*(.5-Math.random())}function Ib(r){r!==void 0&&(gv=r);let e=gv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bb(r){return r*Ll}function Fb(r){return r*fo}function zb(r){return(r&r-1)===0&&r!==0}function Hb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vb(r,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),_=u((e+a)/2),g=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),b=u((a-e)/2);switch(o){case"XYX":r.set(h*_,p*g,p*v,h*d);break;case"YZY":r.set(p*v,h*_,p*g,h*d);break;case"ZXZ":r.set(p*g,p*v,h*_,h*d);break;case"XZX":r.set(h*_,p*b,p*x,h*d);break;case"YXY":r.set(p*x,h*_,p*b,h*d);break;case"ZYZ":r.set(p*b,p*x,h*_,h*d);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qx={DEG2RAD:Ll,RAD2DEG:fo,generateUUID:Wi,clamp:gt,euclideanModulo:Jp,mapLinear:Rb,inverseLerp:Cb,lerp:Ul,damp:wb,pingpong:Db,smoothstep:Nb,smootherstep:Lb,randInt:Ub,randFloat:Ob,randFloatSpread:Pb,seededRandom:Ib,degToRad:Bb,radToDeg:Fb,isPowerOfTwo:zb,ceilPowerOfTwo:Hb,floorPowerOfTwo:Gb,setQuaternionFromProperEuler:Vb,normalize:Gt,denormalize:Vi},fm=class fm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fm.prototype.isVector2=!0;let st=fm;class ji{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let p=a[o+0],d=a[o+1],_=a[o+2],g=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],A=c[u+3];if(g!==A||p!==v||d!==x||_!==b){let M=p*v+d*x+_*b+g*A;M<0&&(v=-v,x=-x,b=-b,A=-A,M=-M);let S=1-h;if(M<.9995){const w=Math.acos(M),N=Math.sin(w);S=Math.sin(S*w)/N,h=Math.sin(h*w)/N,p=p*S+v*h,d=d*S+x*h,_=_*S+b*h,g=g*S+A*h}else{p=p*S+v*h,d=d*S+x*h,_=_*S+b*h,g=g*S+A*h;const w=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=w,d*=w,_*=w,g*=w}}e[n]=p,e[n+1]=d,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],p=a[o+1],d=a[o+2],_=a[o+3],g=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[n]=h*b+_*g+p*x-d*v,e[n+1]=p*b+_*v+d*g-h*x,e[n+2]=d*b+_*x+h*v-p*g,e[n+3]=_*b-h*g-p*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),_=h(o/2),g=h(c/2),v=p(a/2),x=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=v*_*g+d*x*b,this._y=d*x*g-v*_*b,this._z=d*_*b+v*x*g,this._w=d*_*g-v*x*b;break;case"YXZ":this._x=v*_*g+d*x*b,this._y=d*x*g-v*_*b,this._z=d*_*b-v*x*g,this._w=d*_*g+v*x*b;break;case"ZXY":this._x=v*_*g-d*x*b,this._y=d*x*g+v*_*b,this._z=d*_*b+v*x*g,this._w=d*_*g-v*x*b;break;case"ZYX":this._x=v*_*g-d*x*b,this._y=d*x*g+v*_*b,this._z=d*_*b-v*x*g,this._w=d*_*g+v*x*b;break;case"YZX":this._x=v*_*g+d*x*b,this._y=d*x*g+v*_*b,this._z=d*_*b-v*x*g,this._w=d*_*g-v*x*b;break;case"XZY":this._x=v*_*g-d*x*b,this._y=d*x*g-v*_*b,this._z=d*_*b+v*x*g,this._w=d*_*g+v*x*b;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+h+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(_-p)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>h&&a>g){const x=2*Math.sqrt(1+a-h-g);this._w=(_-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>g){const x=2*Math.sqrt(1+h-a-g);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+g-a-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+u*h+o*d-c*p,this._y=o*_+u*p+c*h-a*d,this._z=c*_+u*d+a*p-o*h,this._w=u*_-a*h-o*p-c*d,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hm=class hm{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_v.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_v.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*o-h*a),_=2*(h*n-c*o),g=2*(c*a-u*n);return this.x=n+p*d+u*g-h*_,this.y=a+p*_+h*d-c*g,this.z=o+p*g+c*_-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hm.prototype.isVector3=!0;let Y=hm;const od=new Y,_v=new ji,dm=class dm{constructor(e,n,a,o,c,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d)}set(e,n,a,o,c,u,h,p,d){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=p,_[6]=a,_[7]=u,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],x=a[5],b=a[8],A=o[0],M=o[3],S=o[6],w=o[1],N=o[4],L=o[7],G=o[2],O=o[5],B=o[8];return c[0]=u*A+h*w+p*G,c[3]=u*M+h*N+p*O,c[6]=u*S+h*L+p*B,c[1]=d*A+_*w+g*G,c[4]=d*M+_*N+g*O,c[7]=d*S+_*L+g*B,c[2]=v*A+x*w+b*G,c[5]=v*M+x*N+b*O,c[8]=v*S+x*L+b*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],_=e[8];return n*u*_-n*h*d-a*c*_+a*h*p+o*c*d-o*u*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],_=e[8],g=_*u-h*d,v=h*p-_*c,x=d*c-u*p,b=n*g+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(o*d-_*a)*A,e[2]=(h*a-o*u)*A,e[3]=v*A,e[4]=(_*n-o*p)*A,e[5]=(o*c-h*n)*A,e[6]=x*A,e[7]=(a*p-d*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(ld.makeScale(e,n)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dm.prototype.isMatrix3=!0;let lt=dm;const ld=new lt,vv=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xv=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kb(){const r={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ht&&(o.r=Ga(o.r),o.g=Ga(o.g),o.b=Ga(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=ro(o.r),o.g=ro(o.g),o.b=ro(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cs?Bu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Lp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Lp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[_i]:{primaries:e,whitePoint:a,transfer:Bu,toXYZ:vv,fromXYZ:xv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:a,transfer:Ht,toXYZ:vv,fromXYZ:xv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),r}const bt=kb();function Ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vr;class Xb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Vr===void 0&&(Vr=Hl("canvas")),Vr.width=e.width,Vr.height=e.height;const o=Vr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Vr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ga(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ga(n[a]/255)*255):n[a]=Ga(n[a]);return{data:n,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wb=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(cd(o[u].image)):c.push(cd(o[u]))}else c=cd(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function cd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let qb=0;const ud=new Y;class Ln extends Ns{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,a=aa,o=aa,c=An,u=Fa,h=Li,p=gi,d=Ln.DEFAULT_ANISOTROPY,_=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Wi(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case aa:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case aa:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Gx;Ln.DEFAULT_ANISOTROPY=1;const pm=class pm{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,d=p[0],_=p[4],g=p[8],v=p[1],x=p[5],b=p[9],A=p[2],M=p[6],S=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+A)<.1&&Math.abs(b+M)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(d+1)/2,L=(x+1)/2,G=(S+1)/2,O=(_+v)/4,B=(g+A)/4,T=(b+M)/4;return N>L&&N>G?N<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(N),o=O/a,c=B/a):L>G?L<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),a=O/o,c=T/o):G<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),a=B/c,o=T/c),this.set(a,o,c,n),this}let w=Math.sqrt((M-b)*(M-b)+(g-A)*(g-A)+(v-_)*(v-_));return Math.abs(w)<.001&&(w=1),this.x=(M-b)/w,this.y=(g-A)/w,this.z=(v-_)/w,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pm.prototype.isVector4=!0;let Qt=pm;class jb extends Ns{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Ln(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new $p(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends jb{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Jx extends Ln{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yb extends Ln{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=class Gu{constructor(e,n,a,o,c,u,h,p,d,_,g,v,x,b,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d,_,g,v,x,b,A,M)}set(e,n,a,o,c,u,h,p,d,_,g,v,x,b,A,M){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=h,S[13]=p,S[2]=d,S[6]=_,S[10]=g,S[14]=v,S[3]=x,S[7]=b,S[11]=A,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/kr.setFromMatrixColumn(e,0).length(),c=1/kr.setFromMatrixColumn(e,1).length(),u=1/kr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*_,x=u*g,b=h*_,A=h*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=x+b*d,n[5]=v-A*d,n[9]=-h*p,n[2]=A-v*d,n[6]=b+x*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*_,x=p*g,b=d*_,A=d*g;n[0]=v+A*h,n[4]=b*h-x,n[8]=u*d,n[1]=u*g,n[5]=u*_,n[9]=-h,n[2]=x*h-b,n[6]=A+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*_,x=p*g,b=d*_,A=d*g;n[0]=v-A*h,n[4]=-u*g,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*_,n[9]=A-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*_,x=u*g,b=h*_,A=h*g;n[0]=p*_,n[4]=b*d-x,n[8]=v*d+A,n[1]=p*g,n[5]=A*d+v,n[9]=x*d-b,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*d,b=h*p,A=h*d;n[0]=p*_,n[4]=A-v*g,n[8]=b*g+x,n[1]=g,n[5]=u*_,n[9]=-h*_,n[2]=-d*_,n[6]=x*g+b,n[10]=v-A*g}else if(e.order==="XZY"){const v=u*p,x=u*d,b=h*p,A=h*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+A,n[5]=u*_,n[9]=x*g-b,n[2]=b*g-x,n[6]=h*_,n[10]=A*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kb,e,Zb)}lookAt(e,n,a){const o=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),ys.crossVectors(a,pi),ys.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),ys.crossVectors(a,pi)),ys.normalize(),Jc.crossVectors(pi,ys),o[0]=ys.x,o[4]=Jc.x,o[8]=pi.x,o[1]=ys.y,o[5]=Jc.y,o[9]=pi.y,o[2]=ys.z,o[6]=Jc.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],x=a[13],b=a[2],A=a[6],M=a[10],S=a[14],w=a[3],N=a[7],L=a[11],G=a[15],O=o[0],B=o[4],T=o[8],I=o[12],K=o[1],z=o[5],q=o[9],se=o[13],ce=o[2],X=o[6],U=o[10],F=o[14],oe=o[3],he=o[7],xe=o[11],P=o[15];return c[0]=u*O+h*K+p*ce+d*oe,c[4]=u*B+h*z+p*X+d*he,c[8]=u*T+h*q+p*U+d*xe,c[12]=u*I+h*se+p*F+d*P,c[1]=_*O+g*K+v*ce+x*oe,c[5]=_*B+g*z+v*X+x*he,c[9]=_*T+g*q+v*U+x*xe,c[13]=_*I+g*se+v*F+x*P,c[2]=b*O+A*K+M*ce+S*oe,c[6]=b*B+A*z+M*X+S*he,c[10]=b*T+A*q+M*U+S*xe,c[14]=b*I+A*se+M*F+S*P,c[3]=w*O+N*K+L*ce+G*oe,c[7]=w*B+N*z+L*X+G*he,c[11]=w*T+N*q+L*U+G*xe,c[15]=w*I+N*se+L*F+G*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],_=e[2],g=e[6],v=e[10],x=e[14],b=e[3],A=e[7],M=e[11],S=e[15],w=p*x-d*v,N=h*x-d*g,L=h*v-p*g,G=u*x-d*_,O=u*v-p*_,B=u*g-h*_;return n*(A*w-M*N+S*L)-a*(b*w-M*G+S*O)+o*(b*N-A*G+S*B)-c*(b*L-A*O+M*B)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],_=e[8],g=e[9],v=e[10],x=e[11],b=e[12],A=e[13],M=e[14],S=e[15],w=n*h-a*u,N=n*p-o*u,L=n*d-c*u,G=a*p-o*h,O=a*d-c*h,B=o*d-c*p,T=_*A-g*b,I=_*M-v*b,K=_*S-x*b,z=g*M-v*A,q=g*S-x*A,se=v*S-x*M,ce=w*se-N*q+L*z+G*K-O*I+B*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ce;return e[0]=(h*se-p*q+d*z)*X,e[1]=(o*q-a*se-c*z)*X,e[2]=(A*B-M*O+S*G)*X,e[3]=(v*O-g*B-x*G)*X,e[4]=(p*K-u*se-d*I)*X,e[5]=(n*se-o*K+c*I)*X,e[6]=(M*L-b*B-S*N)*X,e[7]=(_*B-v*L+x*N)*X,e[8]=(u*q-h*K+d*T)*X,e[9]=(a*K-n*q-c*T)*X,e[10]=(b*O-A*L+S*w)*X,e[11]=(g*L-_*O-x*w)*X,e[12]=(h*I-u*z-p*T)*X,e[13]=(n*z-a*I+o*T)*X,e[14]=(A*N-b*G-M*w)*X,e[15]=(_*G-g*N+v*w)*X,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,_=c*h;return this.set(d*u+a,d*h-o*p,d*p+o*h,0,d*h+o*p,_*h+a,_*p-o*u,0,d*p-o*h,_*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,_=u+u,g=h+h,v=c*d,x=c*_,b=c*g,A=u*_,M=u*g,S=h*g,w=p*d,N=p*_,L=p*g,G=a.x,O=a.y,B=a.z;return o[0]=(1-(A+S))*G,o[1]=(x+L)*G,o[2]=(b-N)*G,o[3]=0,o[4]=(x-L)*O,o[5]=(1-(v+S))*O,o[6]=(M+w)*O,o[7]=0,o[8]=(b+N)*B,o[9]=(M-w)*B,o[10]=(1-(v+A))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=kr.set(o[0],o[1],o[2]).length();const h=kr.set(o[4],o[5],o[6]).length(),p=kr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),zi.copy(this);const d=1/u,_=1/h,g=1/p;return zi.elements[0]*=d,zi.elements[1]*=d,zi.elements[2]*=d,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=g,zi.elements[9]*=g,zi.elements[10]*=g,n.setFromRotationMatrix(zi),a.x=u,a.y=h,a.z=p,this}makePerspective(e,n,a,o,c,u,h=sa,p=!1){const d=this.elements,_=2*c/(n-e),g=2*c/(a-o),v=(n+e)/(n-e),x=(a+o)/(a-o);let b,A;if(p)b=c/(u-c),A=u*c/(u-c);else if(h===sa)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===zl)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=sa,p=!1){const d=this.elements,_=2/(n-e),g=2/(a-o),v=-(n+e)/(n-e),x=-(a+o)/(a-o);let b,A;if(p)b=1/(u-c),A=u/(u-c);else if(h===sa)b=-2/(u-c),A=-(u+c)/(u-c);else if(h===zl)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Gu.prototype.isMatrix4=!0;let pt=Gu;const kr=new Y,zi=new pt,Kb=new Y(0,0,0),Zb=new Y(1,1,1),ys=new Y,Jc=new Y,pi=new Y,yv=new pt,Sv=new ji;class Ds{constructor(e=0,n=0,a=0,o=Ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],_=o[9],g=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ds.DEFAULT_ORDER="XYZ";class em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qb=0;const Mv=new Y,Xr=new ji,La=new pt,$c=new Y,vl=new Y,Jb=new Y,$b=new ji,bv=new Y(1,0,0),Ev=new Y(0,1,0),Tv=new Y(0,0,1),Av={type:"added"},eE={type:"removed"},Wr={type:"childadded",child:null},fd={type:"childremoved",child:null};class ln extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new Y,n=new Ds,a=new ji,o=new Y(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pt},normalMatrix:{value:new lt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Ev,e)}rotateZ(e){return this.rotateOnAxis(Tv,e)}translateOnAxis(e,n){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Ev,e)}translateZ(e){return this.translateOnAxis(Tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?$c.copy(e):$c.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(vl,$c,this.up):La.lookAt($c,vl,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),Xr.setFromRotationMatrix(La),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Av),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eE),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),La.multiply(e.parent.matrixWorld)),e.applyMatrix4(La),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Av),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,Jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,$b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),_=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const p=[];for(const d in h){const _=h[d];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}ln.DEFAULT_UP=new Y(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sr extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const A of e.hand.values()){const M=n.getJointPose(A,a),S=this._getHandJoint(d,A);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new sr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const $x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},eu={h:0,s:0,l:0};function dd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class ot{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=bt.workingColorSpace){return this.r=e,this.g=n,this.b=a,bt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=bt.workingColorSpace){if(e=Jp(e,1),n=gt(n,0,1),a=gt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=dd(u,c,e+1/3),this.g=dd(u,c,e),this.b=dd(u,c,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,n=Nn){function a(c){c!==void 0&&parseFloat(c)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ye("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const a=$x[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return bt.workingToColorSpace(Xn.copy(this),e),Math.round(gt(Xn.r*255,0,255))*65536+Math.round(gt(Xn.g*255,0,255))*256+Math.round(gt(Xn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(Xn.copy(this),n);const a=Xn.r,o=Xn.g,c=Xn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,d;const _=(h+u)/2;if(h===u)p=0,d=0;else{const g=u-h;switch(d=_<=.5?g/(u+h):g/(2-u-h),u){case a:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-a)/g+2;break;case c:p=(a-o)/g+4;break}p/=6}return e.h=p,e.s=d,e.l=_,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Nn){bt.workingToColorSpace(Xn.copy(this),e);const n=Xn.r,a=Xn.g,o=Xn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+n,Ss.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Ss),e.getHSL(eu);const a=Ul(Ss.h,eu.h,n),o=Ul(Ss.s,eu.s,n),c=Ul(Ss.l,eu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new ot;ot.NAMES=$x;class nE extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ds,this.environmentIntensity=1,this.environmentRotation=new Ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hi=new Y,Ua=new Y,pd=new Y,Oa=new Y,qr=new Y,jr=new Y,Rv=new Y,md=new Y,gd=new Y,_d=new Y,vd=new Qt,xd=new Qt,yd=new Qt;class ki{constructor(e=new Y,n=new Y,a=new Y){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Hi.subVectors(e,n),o.cross(Hi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Hi.subVectors(o,n),Ua.subVectors(a,n),pd.subVectors(e,n);const u=Hi.dot(Hi),h=Hi.dot(Ua),p=Hi.dot(pd),d=Ua.dot(Ua),_=Ua.dot(pd),g=u*d-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,x=(d*p-h*_)*v,b=(u*_-h*p)*v;return c.set(1-x-b,b,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(e,n,a,o,c,u,h,p){return this.getBarycoord(e,n,a,o,Oa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Oa.x),p.addScaledVector(u,Oa.y),p.addScaledVector(h,Oa.z),p)}static getInterpolatedAttribute(e,n,a,o,c,u){return vd.setScalar(0),xd.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,n),xd.fromBufferAttribute(e,a),yd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(vd,c.x),u.addScaledVector(xd,c.y),u.addScaledVector(yd,c.z),u}static isFrontFacing(e,n,a,o){return Hi.subVectors(a,n),Ua.subVectors(e,n),Hi.cross(Ua).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Hi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ki.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return ki.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;qr.subVectors(o,a),jr.subVectors(c,a),md.subVectors(e,a);const p=qr.dot(md),d=jr.dot(md);if(p<=0&&d<=0)return n.copy(a);gd.subVectors(e,o);const _=qr.dot(gd),g=jr.dot(gd);if(_>=0&&g<=_)return n.copy(o);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(a).addScaledVector(qr,u);_d.subVectors(e,c);const x=qr.dot(_d),b=jr.dot(_d);if(b>=0&&x<=b)return n.copy(c);const A=x*d-p*b;if(A<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(a).addScaledVector(jr,h);const M=_*b-x*g;if(M<=0&&g-_>=0&&x-b>=0)return Rv.subVectors(c,o),h=(g-_)/(g-_+(x-b)),n.copy(o).addScaledVector(Rv,h);const S=1/(M+A+v);return u=A*S,h=v*S,n.copy(a).addScaledVector(qr,u).addScaledVector(jr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fa{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Gi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Gi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Gi):Gi.fromBufferAttribute(c,u),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),tu.copy(a.boundingBox)),tu.applyMatrix4(e.matrixWorld),this.union(tu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),nu.subVectors(this.max,xl),Yr.subVectors(e.a,xl),Kr.subVectors(e.b,xl),Zr.subVectors(e.c,xl),Ms.subVectors(Kr,Yr),bs.subVectors(Zr,Kr),Qs.subVectors(Yr,Zr);let n=[0,-Ms.z,Ms.y,0,-bs.z,bs.y,0,-Qs.z,Qs.y,Ms.z,0,-Ms.x,bs.z,0,-bs.x,Qs.z,0,-Qs.x,-Ms.y,Ms.x,0,-bs.y,bs.x,0,-Qs.y,Qs.x,0];return!Sd(n,Yr,Kr,Zr,nu)||(n=[1,0,0,0,1,0,0,0,1],!Sd(n,Yr,Kr,Zr,nu))?!1:(iu.crossVectors(Ms,bs),n=[iu.x,iu.y,iu.z],Sd(n,Yr,Kr,Zr,nu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pa=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Gi=new Y,tu=new fa,Yr=new Y,Kr=new Y,Zr=new Y,Ms=new Y,bs=new Y,Qs=new Y,xl=new Y,nu=new Y,iu=new Y,Js=new Y;function Sd(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Js.fromArray(r,c);const h=o.x*Math.abs(Js.x)+o.y*Math.abs(Js.y)+o.z*Math.abs(Js.z),p=e.dot(Js),d=n.dot(Js),_=a.dot(Js);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>h)return!1}return!0}const Sn=new Y,au=new st;let iE=0;class Kn extends Ns{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Np,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)au.fromBufferAttribute(this,n),au.applyMatrix3(e),this.setXY(n,au.x,au.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Vi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Gt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array),c=Gt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ey extends Kn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class ty extends Kn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class qi extends Kn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const aE=new fa,yl=new Y,Md=new Y;class ha{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):aE.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const n=yl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(yl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(Md)),this.expandByPoint(yl.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sE=0;const Ci=new pt,bd=new ln,Qr=new Y,mi=new fa,Sl=new fa,Dn=new Y;class Ui extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mb(e)?ty:ey)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new lt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,n,a){return Ci.makeTranslation(e,n,a),this.applyMatrix4(Ci),this}scale(e,n,a){return Ci.makeScale(e,n,a),this.applyMatrix4(Ci),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qi(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Sl.setFromBufferAttribute(h),this.morphTargetsRelative?(Dn.addVectors(mi.min,Sl.min),mi.expandByPoint(Dn),Dn.addVectors(mi.max,Sl.max),mi.expandByPoint(Dn)):(mi.expandByPoint(Sl.min),mi.expandByPoint(Sl.max))}mi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Dn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Dn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,_=h.count;d<_;d++)Dn.fromBufferAttribute(h,d),p&&(Qr.fromBufferAttribute(e,d),Dn.add(Qr)),o=Math.max(o,a.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let T=0;T<a.count;T++)h[T]=new Y,p[T]=new Y;const d=new Y,_=new Y,g=new Y,v=new st,x=new st,b=new st,A=new Y,M=new Y;function S(T,I,K){d.fromBufferAttribute(a,T),_.fromBufferAttribute(a,I),g.fromBufferAttribute(a,K),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,I),b.fromBufferAttribute(c,K),_.sub(d),g.sub(d),x.sub(v),b.sub(v);const z=1/(x.x*b.y-b.x*x.y);isFinite(z)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(g,-x.y).multiplyScalar(z),M.copy(g).multiplyScalar(x.x).addScaledVector(_,-b.x).multiplyScalar(z),h[T].add(A),h[I].add(A),h[K].add(A),p[T].add(M),p[I].add(M),p[K].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,I=w.length;T<I;++T){const K=w[T],z=K.start,q=K.count;for(let se=z,ce=z+q;se<ce;se+=3)S(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const N=new Y,L=new Y,G=new Y,O=new Y;function B(T){G.fromBufferAttribute(o,T),O.copy(G);const I=h[T];N.copy(I),N.sub(G.multiplyScalar(G.dot(I))).normalize(),L.crossVectors(O,I);const z=L.dot(p[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,z)}for(let T=0,I=w.length;T<I;++T){const K=w[T],z=K.start,q=K.count;for(let se=z,ce=z+q;se<ce;se+=3)B(e.getX(se+0)),B(e.getX(se+1)),B(e.getX(se+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new Y,c=new Y,u=new Y,h=new Y,p=new Y,d=new Y,_=new Y,g=new Y;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),A=e.getX(v+1),M=e.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),_.subVectors(u,c),g.subVectors(o,c),_.cross(g),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,A),d.fromBufferAttribute(a,M),h.add(_),p.add(_),d.add(_),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),g.subVectors(o,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Dn.fromBufferAttribute(e,n),Dn.normalize(),e.setXYZ(n,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(h,p){const d=h.array,_=h.itemSize,g=h.normalized,v=new d.constructor(p.length*_);let x=0,b=0;for(let A=0,M=p.length;A<M;A++){h.isInterleavedBufferAttribute?x=p[A]*h.data.stride+h.offset:x=p[A]*_;for(let S=0;S<_;S++)v[b++]=d[x++]}return new Kn(v,_,g)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ui,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let _=0,g=d.length;_<g;_++){const v=d[_],x=e(v,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];_.push(x.toJSON(e.data))}_.length>0&&(o[p]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const _=o[d];this.setAttribute(d,_.clone(n))}const c=e.morphAttributes;for(const d in c){const _=[],g=c[d];for(let v=0,x=g.length;v<x;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,_=u.length;d<_;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Np,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new Y;class tm{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyMatrix4(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyNormalMatrix(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.transformDirection(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Vi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Gt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Vi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Vi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Vi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Vi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array),c=Gt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Fu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let oE=0;class la extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=so,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Wd,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ye(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ye(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(a.blending=this.blending),this.side!==Va&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Xd&&(a.blendSrc=this.blendSrc),this.blendDst!==Wd&&(a.blendDst=this.blendDst),this.blendEquation!==nr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ia=new Y,Ed=new Y,su=new Y,Es=new Y,Td=new Y,ru=new Y,Ad=new Y;class vo{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ia)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ia.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ia.copy(this.origin).addScaledVector(this.direction,n),Ia.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Ed.copy(e).add(n).multiplyScalar(.5),su.copy(n).sub(e).normalize(),Es.copy(this.origin).sub(Ed);const c=e.distanceTo(n)*.5,u=-this.direction.dot(su),h=Es.dot(this.direction),p=-Es.dot(su),d=Es.lengthSq(),_=Math.abs(1-u*u);let g,v,x,b;if(_>0)if(g=u*p-h,v=u*h-p,b=c*_,g>=0)if(v>=-b)if(v<=b){const A=1/_;g*=A,v*=A,x=g*(g+u*v+2*h)+v*(u*g+v+2*p)+d}else v=c,g=Math.max(0,-(u*v+h)),x=-g*g+v*(v+2*p)+d;else v=-c,g=Math.max(0,-(u*v+h)),x=-g*g+v*(v+2*p)+d;else v<=-b?(g=Math.max(0,-(-u*c+h)),v=g>0?-c:Math.min(Math.max(-c,-p),c),x=-g*g+v*(v+2*p)+d):v<=b?(g=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+d):(g=Math.max(0,-(u*c+h)),v=g>0?c:Math.min(Math.max(-c,-p),c),x=-g*g+v*(v+2*p)+d);else v=u>0?-c:c,g=Math.max(0,-(u*v+h)),x=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Ed).addScaledVector(su,v),x}intersectSphere(e,n){Ia.subVectors(e.center,this.origin);const a=Ia.dot(this.direction),o=Ia.dot(Ia)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),_>=0?(c=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ia)!==null}intersectTriangle(e,n,a,o,c){Td.subVectors(n,e),ru.subVectors(a,e),Ad.crossVectors(Td,ru);let u=this.direction.dot(Ad),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Es.subVectors(this.origin,e);const p=h*this.direction.dot(ru.crossVectors(Es,ru));if(p<0)return null;const d=h*this.direction.dot(Td.cross(Es));if(d<0||p+d>u)return null;const _=-h*Es.dot(Ad);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rr extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.combine=Ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cv=new pt,$s=new vo,ou=new ha,wv=new Y,lu=new Y,cu=new Y,uu=new Y,Rd=new Y,fu=new Y,Dv=new Y,hu=new Y;class vi extends ln{constructor(e=new Ui,n=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){fu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const _=h[p],g=c[p];_!==0&&(Rd.fromBufferAttribute(g,e),u?fu.addScaledVector(Rd,_):fu.addScaledVector(Rd.sub(n),_))}n.add(fu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ou.copy(a.boundingSphere),ou.applyMatrix4(c),$s.copy(e.ray).recast(e.near),!(ou.containsPoint($s.origin)===!1&&($s.intersectSphere(ou,wv)===null||$s.origin.distanceToSquared(wv)>(e.far-e.near)**2))&&(Cv.copy(c).invert(),$s.copy(e.ray).applyMatrix4(Cv),!(a.boundingBox!==null&&$s.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,$s)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],S=u[M.materialIndex],w=Math.max(M.start,x.start),N=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let L=w,G=N;L<G;L+=3){const O=h.getX(L),B=h.getX(L+1),T=h.getX(L+2);o=du(this,S,e,a,d,_,g,O,B,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let M=b,S=A;M<S;M+=3){const w=h.getX(M),N=h.getX(M+1),L=h.getX(M+2);o=du(this,u,e,a,d,_,g,w,N,L),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],S=u[M.materialIndex],w=Math.max(M.start,x.start),N=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let L=w,G=N;L<G;L+=3){const O=L,B=L+1,T=L+2;o=du(this,S,e,a,d,_,g,O,B,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let M=b,S=A;M<S;M+=3){const w=M,N=M+1,L=M+2;o=du(this,u,e,a,d,_,g,w,N,L),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function lE(r,e,n,a,o,c,u,h){let p;if(e.side===ii?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,e.side===Va,h),p===null)return null;hu.copy(h),hu.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(hu);return d<n.near||d>n.far?null:{distance:d,point:hu.clone(),object:r}}function du(r,e,n,a,o,c,u,h,p,d){r.getVertexPosition(h,lu),r.getVertexPosition(p,cu),r.getVertexPosition(d,uu);const _=lE(r,e,n,a,lu,cu,uu,Dv);if(_){const g=new Y;ki.getBarycoord(Dv,lu,cu,uu,g),o&&(_.uv=ki.getInterpolatedAttribute(o,h,p,d,g,new st)),c&&(_.uv1=ki.getInterpolatedAttribute(c,h,p,d,g,new st)),u&&(_.normal=ki.getInterpolatedAttribute(u,h,p,d,g,new Y),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new Y,materialIndex:0};ki.getNormal(lu,cu,uu,v.normal),_.face=v,_.barycoord=g}return _}const Ml=new Qt,Nv=new Qt,Lv=new Qt,cE=new Qt,Uv=new pt,pu=new Y,Cd=new ha,Ov=new pt,wd=new vo;class uE extends vi{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lv,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fa),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,pu),this.boundingBox.expandByPoint(pu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ha),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,pu),this.boundingSphere.expandByPoint(pu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cd.copy(this.boundingSphere),Cd.applyMatrix4(o),e.ray.intersectsSphere(Cd)!==!1&&(Ov.copy(o).invert(),wd.copy(e.ray).applyMatrix4(Ov),!(this.boundingBox!==null&&wd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,wd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qt,n=this.geometry.attributes.skinWeight;for(let a=0,o=n.count;a<o;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fb?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,o=this.geometry;Nv.fromBufferAttribute(o.attributes.skinIndex,e),Lv.fromBufferAttribute(o.attributes.skinWeight,e),n.isVector4?(Ml.copy(n),n.set(0,0,0,0)):(Ml.set(...n,1),n.set(0,0,0)),Ml.applyMatrix4(this.bindMatrix);for(let c=0;c<4;c++){const u=Lv.getComponent(c);if(u!==0){const h=Nv.getComponent(c);Uv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(cE.copy(Ml).applyMatrix4(Uv),u)}}return n.isVector4&&(n.w=Ml.w),n.applyMatrix4(this.bindMatrixInverse)}}class ny extends ln{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nm extends Ln{constructor(e=null,n=1,a=1,o,c,u,h,p,d=Tn,_=Tn,g,v){super(null,u,h,p,d,_,o,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pv=new pt,fE=new pt;class im{constructor(e=[],n=[]){this.uuid=Wi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new pt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:fE;Pv.multiplyMatrices(h,n[c]),Pv.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new im(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new nm(n,e,e,Li,Ni);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const o=this.bones[n];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,o=e.bones.length;a<o;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ye("Skeleton: No bone found with UUID:",c),u=new ny),this.bones.push(u),this.boneInverses.push(new pt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let o=0,c=n.length;o<c;o++){const u=n[o];e.bones.push(u.uuid);const h=a[o];e.boneInverses.push(h.toArray())}return e}}class Up extends Kn{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new pt,Iv=new pt,mu=[],Bv=new fa,hE=new pt,bl=new vi,El=new ha;class dE extends vi{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Up(new Float32Array(a*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,hE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new fa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Jr),Bv.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(Bv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ha),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Jr),El.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(El)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(bl.geometry=this.geometry,bl.material=this.material,bl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),El.copy(this.boundingSphere),El.applyMatrix4(a),e.ray.intersectsSphere(El)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Jr),Iv.multiplyMatrices(a,Jr),bl.matrixWorld=Iv,bl.raycast(e,mu);for(let u=0,h=mu.length;u<h;u++){const p=mu[u];p.instanceId=c,p.object=this,n.push(p)}mu.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Up(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new nm(new Float32Array(o*this.count),o,this.count,qp,Ni));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=o*e;return c[p]=h,c.set(a,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dd=new Y,pE=new Y,mE=new lt;class Rs{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Dd.subVectors(a,n).cross(pE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(Dd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||mE.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new ha,gE=new st(.5,.5),gu=new Y;class am{constructor(e=new Rs,n=new Rs,a=new Rs,o=new Rs,c=new Rs,u=new Rs){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=sa,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],_=c[4],g=c[5],v=c[6],x=c[7],b=c[8],A=c[9],M=c[10],S=c[11],w=c[12],N=c[13],L=c[14],G=c[15];if(o[0].setComponents(d-u,x-_,S-b,G-w).normalize(),o[1].setComponents(d+u,x+_,S+b,G+w).normalize(),o[2].setComponents(d+h,x+g,S+A,G+N).normalize(),o[3].setComponents(d-h,x-g,S-A,G-N).normalize(),a)o[4].setComponents(p,v,M,L).normalize(),o[5].setComponents(d-p,x-v,S-M,G-L).normalize();else if(o[4].setComponents(d-p,x-v,S-M,G-L).normalize(),n===sa)o[5].setComponents(d+p,x+v,S+M,G+L).normalize();else if(n===zl)o[5].setComponents(p,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const n=gE.distanceTo(e.center);return er.radius=.7071067811865476+n,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(gu.x=o.normal.x>0?e.max.x:e.min.x,gu.y=o.normal.y>0?e.max.y:e.min.y,gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iy extends la{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zu=new Y,Hu=new Y,Fv=new pt,Tl=new vo,_u=new ha,Nd=new Y,zv=new Y;class sm extends ln{constructor(e=new Ui,n=new iy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)zu.fromBufferAttribute(n,o-1),Hu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=zu.distanceTo(Hu);e.setAttribute("lineDistance",new qi(a,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),_u.copy(a.boundingSphere),_u.applyMatrix4(o),_u.radius+=c,e.ray.intersectsSphere(_u)===!1)return;Fv.copy(o).invert(),Tl.copy(e.ray).applyMatrix4(Fv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const x=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let A=x,M=b-1;A<M;A+=d){const S=_.getX(A),w=_.getX(A+1),N=vu(this,e,Tl,p,S,w,A);N&&n.push(N)}if(this.isLineLoop){const A=_.getX(b-1),M=_.getX(x),S=vu(this,e,Tl,p,A,M,b-1);S&&n.push(S)}}else{const x=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let A=x,M=b-1;A<M;A+=d){const S=vu(this,e,Tl,p,A,A+1,A);S&&n.push(S)}if(this.isLineLoop){const A=vu(this,e,Tl,p,b-1,x,b-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function vu(r,e,n,a,o,c,u){const h=r.geometry.attributes.position;if(zu.fromBufferAttribute(h,o),Hu.fromBufferAttribute(h,c),n.distanceSqToSegment(zu,Hu,Nd,zv)>a)return;Nd.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Nd);if(!(d<e.near||d>e.far))return{distance:d,point:zv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Hv=new Y,Gv=new Y;class _E extends sm{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Hv.fromBufferAttribute(n,o),Gv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Hv.distanceTo(Gv);e.setAttribute("lineDistance",new qi(a,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vE extends sm{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class ay extends la{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vv=new pt,Op=new vo,xu=new ha,yu=new Y;class xE extends ln{constructor(e=new Ui,n=new ay){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),xu.copy(a.boundingSphere),xu.applyMatrix4(o),xu.radius+=c,e.ray.intersectsSphere(xu)===!1)return;Vv.copy(o).invert(),Op.copy(e.ray).applyMatrix4(Vv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let b=v,A=x;b<A;b++){const M=d.getX(b);yu.fromBufferAttribute(g,M),kv(yu,M,p,o,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let b=v,A=x;b<A;b++)yu.fromBufferAttribute(g,b),kv(yu,b,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function kv(r,e,n,a,o,c,u){const h=Op.distanceSqToPoint(r);if(h<n){const p=new Y;Op.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class sy extends Ln{constructor(e=[],n=or,a,o,c,u,h,p,d,_){super(e,n,a,o,c,u,h,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends Ln{constructor(e,n,a=ca,o,c,u,h=Tn,p=Tn,d,_=Xa,g=1){if(_!==Xa&&_!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,o,c,u,h,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yE extends ho{constructor(e,n=ca,a=or,o,c,u=Tn,h=Tn,p,d=Xa){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,n,a,o,c,u,h,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ry extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gl extends Ui{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],_=[],g=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,o,u,2),b("x","z","y",1,-1,e,a,-n,o,u,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new qi(d,3)),this.setAttribute("normal",new qi(_,3)),this.setAttribute("uv",new qi(g,2));function b(A,M,S,w,N,L,G,O,B,T,I){const K=L/B,z=G/T,q=L/2,se=G/2,ce=O/2,X=B+1,U=T+1;let F=0,oe=0;const he=new Y;for(let xe=0;xe<U;xe++){const P=xe*z-se;for(let J=0;J<X;J++){const ye=J*K-q;he[A]=ye*w,he[M]=P*N,he[S]=ce,d.push(he.x,he.y,he.z),he[A]=0,he[M]=0,he[S]=O>0?1:-1,_.push(he.x,he.y,he.z),g.push(J/B),g.push(1-xe/T),F+=1}}for(let xe=0;xe<T;xe++)for(let P=0;P<B;P++){const J=v+P+X*xe,ye=v+P+X*(xe+1),Ae=v+(P+1)+X*(xe+1),De=v+(P+1)+X*xe;p.push(J,ye,De),p.push(ye,Ae,De),oe+=6}h.addGroup(x,oe,I),x+=oe,v+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ku extends Ui{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,_=p+1,g=e/h,v=n/p,x=[],b=[],A=[],M=[];for(let S=0;S<_;S++){const w=S*v-u;for(let N=0;N<d;N++){const L=N*g-c;b.push(L,-w,0),A.push(0,0,1),M.push(N/h),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let w=0;w<h;w++){const N=w+d*S,L=w+d*(S+1),G=w+1+d*(S+1),O=w+1+d*S;x.push(N,L,O),x.push(L,G,O)}this.setIndex(x),this.setAttribute("position",new qi(b,3)),this.setAttribute("normal",new qi(A,3)),this.setAttribute("uv",new qi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.width,e.height,e.widthSegments,e.heightSegments)}}function po(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(Xv(o))o.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(Xv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function jn(r){const e={};for(let n=0;n<r.length;n++){const a=po(r[n]);for(const o in a)e[o]=a[o]}return e}function Xv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function SE(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function oy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const ME={clone:po,merge:jn};var bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=SE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class TE extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rm extends la{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class da extends rm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class AE extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RE extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Su(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function CE(r){function e(o,c){return r[o]-r[c]}const n=r.length,a=new Array(n);for(let o=0;o!==n;++o)a[o]=o;return a.sort(e),a}function Wv(r,e,n){const a=r.length,o=new r.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)o[u++]=r[h+p]}return o}function ly(r,e,n,a){let o=1,c=r[0];for(;c!==void 0&&c[a]===void 0;)c=r[o++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=r[o++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=r[o++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=r[o++];while(c!==void 0)}class xo{constructor(e,n,a,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,o=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<o)){for(let h=a+2;;){if(o===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=o,o=n[++a],e<o)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(o=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o;for(let u=0;u!==o;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wE extends xo{constructor(e,n,a,o){super(e,n,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uv,endingEnd:uv}}intervalChanged_(e,n,a){const o=this.parameterPositions;let c=e-2,u=e+1,h=o[c],p=o[u];if(h===void 0)switch(this.getSettings_().endingStart){case fv:c=e,h=2*n-a;break;case hv:c=o.length-2,h=n+o[c]-o[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case fv:u=e,p=2*a-n;break;case hv:u=1,p=a+o[1]-o[0];break;default:u=e-1,p=n}const d=(a-n)*.5,_=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*_,this._offsetNext=u*_}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,_=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,x=this._weightNext,b=(a-n)/(o-n),A=b*b,M=A*b,S=-v*M+2*v*A-v*b,w=(1+v)*M+(-1.5-2*v)*A+(-.5+v)*b+1,N=(-1-x)*M+(1.5+x)*A+.5*b,L=x*M-x*A;for(let G=0;G!==h;++G)c[G]=S*u[_+G]+w*u[d+G]+N*u[p+G]+L*u[g+G];return c}}class DE extends xo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,_=(a-n)/(o-n),g=1-_;for(let v=0;v!==h;++v)c[v]=u[d+v]*g+u[p+v]*_;return c}}class NE extends xo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class LE extends xo{interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,_=this.settings||this.DefaultSettings_,g=_.inTangents,v=_.outTangents;if(!g||!v){const A=(a-n)/(o-n),M=1-A;for(let S=0;S!==h;++S)c[S]=u[d+S]*M+u[p+S]*A;return c}const x=h*2,b=e-1;for(let A=0;A!==h;++A){const M=u[d+A],S=u[p+A],w=b*x+A*2,N=v[w],L=v[w+1],G=e*x+A*2,O=g[G],B=g[G+1];let T=(a-n)/(o-n),I,K,z,q,se;for(let ce=0;ce<8;ce++){I=T*T,K=I*T,z=1-T,q=z*z,se=q*z;const U=se*n+3*q*T*N+3*z*I*O+K*o-a;if(Math.abs(U)<1e-10)break;const F=3*q*(N-n)+6*z*T*(O-N)+3*I*(o-O);if(Math.abs(F)<1e-10)break;T=T-U/F,T=Math.max(0,Math.min(1,T))}c[A]=se*M+3*q*T*L+3*z*I*B+K*S}return c}}class Yi{constructor(e,n,a,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Su(n,this.TimeBufferType),this.values=Su(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Su(e.times,Array),values:Su(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(a.interpolation=o)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new NE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new DE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new LE(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Bl:n=this.InterpolantFactoryMethodDiscrete;break;case Fl:n=this.InterpolantFactoryMethodLinear;break;case rd:n=this.InterpolantFactoryMethodSmooth;break;case cv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ye("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bl;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return rd;case this.InterpolantFactoryMethodBezier:return cv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]*=e}return this}trim(e,n){const a=this.times,o=a.length;let c=0,u=o-1;for(;c!==o&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==o){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,o=this.values,c=a.length;c===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){et("KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){et("KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(o!==void 0&&bb(o))for(let h=0,p=o.length;h!==p;++h){const d=o[h];if(isNaN(d)){et("KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===rd,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],_=e[h+1];if(d!==_&&(h!==1||d!==e[0]))if(o)p=!0;else{const g=h*a,v=g-a,x=g+a;for(let b=0;b!==a;++b){const A=n[g+b];if(A!==n[v+b]||A!==n[x+b]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const g=h*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[g+x]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,o=new a(this.name,e,n);return o.createInterpolant=this.createInterpolant,o}}Yi.prototype.ValueTypeName="";Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=Fl;class yo extends Yi{constructor(e,n,a){super(e,n,a)}}yo.prototype.ValueTypeName="bool";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=Bl;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class cy extends Yi{constructor(e,n,a,o){super(e,n,a,o)}}cy.prototype.ValueTypeName="color";class mo extends Yi{constructor(e,n,a,o){super(e,n,a,o)}}mo.prototype.ValueTypeName="number";class UE extends xo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(o-n);let d=e*h;for(let _=d+h;d!==_;d+=4)ji.slerpFlat(c,0,u,d-h,u,d,p);return c}}class go extends Yi{constructor(e,n,a,o){super(e,n,a,o)}InterpolantFactoryMethodLinear(e){return new UE(this.times,this.values,this.getValueSize(),e)}}go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends Yi{constructor(e,n,a){super(e,n,a)}}So.prototype.ValueTypeName="string";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=Bl;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends Yi{constructor(e,n,a,o){super(e,n,a,o)}}_o.prototype.ValueTypeName="vector";class OE{constructor(e="",n=-1,a=[],o=hb){this.name=e,this.tracks=a,this.duration=n,this.blendMode=o,this.uuid=Wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,o=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(IE(a[u]).scale(o));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,o={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(Yi.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(e,n,a,o){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const _=CE(p);p=Wv(p,1,_),d=Wv(d,1,_),!o&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new mo(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const o=e;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===n)return a[o];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],_=d.name.match(c);if(_&&_.length>1){const g=_[1];let v=o[g];v||(o[g]=v=[]),v.push(d)}}const u=[];for(const h in o)u.push(this.CreateFromMorphTargetSequence(h,o[h],n,a));return u}static parseAnimation(e,n){if(Ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return et("AnimationClip: No animation in JSONLoader data."),null;const a=function(g,v,x,b,A){if(x.length!==0){const M=[],S=[];ly(x,M,S,b),M.length!==0&&A.push(new g(v,M,S))}},o=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const v=d[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let b;for(b=0;b<v.length;b++)if(v[b].morphTargets)for(let A=0;A<v[b].morphTargets.length;A++)x[v[b].morphTargets[A]]=-1;for(const A in x){const M=[],S=[];for(let w=0;w!==v[b].morphTargets.length;++w){const N=v[b];M.push(N.time),S.push(N.morphTarget===A?1:0)}o.push(new mo(".morphTargetInfluence["+A+"]",M,S))}p=x.length*u}else{const x=".bones["+n[g].name+"]";a(_o,x+".position",v,"pos",o),a(go,x+".quaternion",v,"rot",o),a(_o,x+".scale",v,"scl",o)}}return o.length===0?null:new this(c,p,o,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,o=e.length;a!==o;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function PE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return _o;case"color":return cy;case"quaternion":return go;case"bool":case"boolean":return yo;case"string":return So}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function IE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=PE(r.type);if(r.times===void 0){const n=[],a=[];ly(r.keys,n,a,"value"),r.times=n,r.values=a}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const za={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(qv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!qv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function qv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class BE{constructor(e,n,a){const o=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(_){h++,c===!1&&o.onStart!==void 0&&o.onStart(_,u,h),c=!0},this.itemEnd=function(_){u++,o.onProgress!==void 0&&o.onProgress(_,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,g){return d.push(_,g),this},this.removeHandler=function(_){const g=d.indexOf(_);return g!==-1&&d.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=d.length;g<v;g+=2){const x=d[g],b=d[g+1];if(x.global&&(x.lastIndex=0),x.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const FE=new BE;class Mo{constructor(e){this.manager=e!==void 0?e:FE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ba={};class zE extends Error{constructor(e,n){super(e),this.response=n}}class uy extends Mo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=za.get(`file:${e}`);if(c!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0);return}if(Ba[e]!==void 0){Ba[e].push({onLoad:n,onProgress:a,onError:o});return}Ba[e]=[],Ba[e].push({onLoad:n,onProgress:a,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const _=Ba[e],g=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,b=x!==0;let A=0;const M=new ReadableStream({start(S){w();function w(){g.read().then(({done:N,value:L})=>{if(N)S.close();else{A+=L.byteLength;const G=new ProgressEvent("progress",{lengthComputable:b,loaded:A,total:x});for(let O=0,B=_.length;O<B;O++){const T=_[O];T.onProgress&&T.onProgress(G)}S.enqueue(L),w()}},N=>{S.error(N)})}}});return new Response(M)}else throw new zE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(_=>new DOMParser().parseFromString(_,h));case"json":return d.json();default:if(h==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(h),v=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(b=>x.decode(b))}}}).then(d=>{za.add(`file:${e}`,d);const _=Ba[e];delete Ba[e];for(let g=0,v=_.length;g<v;g++){const x=_[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const _=Ba[e];if(_===void 0)throw this.manager.itemError(e),d;delete Ba[e];for(let g=0,v=_.length;g<v;g++){const x=_[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $r=new WeakMap;class HE extends Mo{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=za.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let g=$r.get(u);g===void 0&&(g=[],$r.set(u,g)),g.push({onLoad:n,onError:o})}return u}const h=Hl("img");function p(){_(),n&&n(this);const g=$r.get(this)||[];for(let v=0;v<g.length;v++){const x=g[v];x.onLoad&&x.onLoad(this)}$r.delete(this),c.manager.itemEnd(e)}function d(g){_(),o&&o(g),za.remove(`image:${e}`);const v=$r.get(this)||[];for(let x=0;x<v.length;x++){const b=v[x];b.onError&&b.onError(g)}$r.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),za.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class GE extends Mo{constructor(e){super(e)}load(e,n,a,o){const c=new Ln,u=new HE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Xu extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ld=new pt,jv=new Y,Yv=new Y;class om{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new am,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;jv.setFromMatrixPosition(e.matrixWorld),n.position.copy(jv),Yv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Yv),n.updateMatrixWorld(),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===zl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mu=new Y,bu=new ji,ea=new Y;class fy extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mu,bu,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,bu,ea.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Mu,bu,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mu,bu,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new Y,Kv=new st,Zv=new st;class Yn extends fy{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,n){return this.getViewBounds(e,Kv,Zv),n.subVectors(Zv,Kv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ll*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class VE extends om{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=fo*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kE extends Xu{constructor(e,n,a=0,o=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new VE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class XE extends om{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class WE extends Xu{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new XE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Wu extends fy{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qE extends om{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pp extends Xu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new qE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class jE extends Xu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ol{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Ud=new WeakMap;class YE extends Mo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=za.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{Ud.has(u)===!0?(o&&o(Ud.get(u)),c.manager.itemError(e),c.manager.itemEnd(e)):(n&&n(d),c.manager.itemEnd(e))});return}setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);return}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){za.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e)}).catch(function(d){o&&o(d),Ud.set(p,d),za.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});za.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const eo=-90,to=1;class KE extends ln{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(eo,to,e,n);o.layers=this.layers,this.add(o);const c=new Yn(eo,to,e,n);c.layers=this.layers,this.add(c);const u=new Yn(eo,to,e,n);u.layers=this.layers,this.add(u);const h=new Yn(eo,to,e,n);h.layers=this.layers,this.add(h);const p=new Yn(eo,to,e,n);p.layers=this.layers,this.add(p);const d=new Yn(eo,to,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===sa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===zl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(g,v,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class ZE extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lm="\\[\\]\\.:\\/",QE=new RegExp("["+lm+"]","g"),cm="[^"+lm+"]",JE="[^"+lm.replace("\\.","")+"]",$E=/((?:WC+[\/:])*)/.source.replace("WC",cm),eT=/(WCOD+)?/.source.replace("WCOD",JE),tT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cm),nT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cm),iT=new RegExp("^"+$E+eT+tT+nT+"$"),aT=["material","materials","bones","map"];class sT{constructor(e,n,a){const o=a||Vt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,o)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Vt{constructor(e,n,a){this.path=n,this.parsedPath=a||Vt.parseTrackName(n),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,n,a):new Vt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(QE,"")}static parseTrackName(e){const n=iT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);aT.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[n++]=a[o]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let _=0;_<e.length;_++)if(e[_].name===d){d=_;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[o];if(u===void 0){const d=n.nodeName;et("PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=sT;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Qv=new pt;class rT{constructor(e,n,a=0,o=1/0){this.ray=new vo(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new em,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):et("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Qv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qv),this}intersectObject(e,n=!0,a=[]){return Ip(e,this,a,n),a.sort(Jv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)Ip(e[o],this,a,n);return a.sort(Jv),a}}function Jv(r,e){return r.distance-e.distance}function Ip(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,h=c.length;u<h;u++)Ip(c[u],e,n,!0)}}class $v{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const mm=class mm{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};mm.prototype.isMatrix2=!0;let ex=mm;class oT extends Ns{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function tx(r,e,n,a){const o=lT(a);switch(n){case jx:return r*e;case qp:return r*e/o.components*o.byteLength;case jp:return r*e/o.components*o.byteLength;case lr:return r*e*2/o.components*o.byteLength;case Yp:return r*e*2/o.components*o.byteLength;case Yx:return r*e*3/o.components*o.byteLength;case Li:return r*e*4/o.components*o.byteLength;case Kp:return r*e*4/o.components*o.byteLength;case wu:case Du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(r,16)*Math.max(e,8)/4;case $d:case tp:return Math.max(r,8)*Math.max(e,8)/2;case ip:case ap:case rp:case op:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sp:case Pu:case lp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bp:case Ep:case Tp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ap:case Rp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Iu:case Cp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lT(r){switch(r){case gi:case kx:return{byteLength:1,components:1};case Pl:case Xx:case ka:return{byteLength:2,components:1};case Xp:case Wp:return{byteLength:2,components:4};case ca:case kp:case Ni:return{byteLength:4,components:1};case Wx:case qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hy(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function cT(r){const e=new WeakMap;function n(h,p){const d=h.array,_=h.usage,g=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,_),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,p,d){const _=p.array,g=p.updateRanges;if(r.bindBuffer(d,h),g.length===0)r.bufferSubData(d,0,_);else{g.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<g.length;x++){const b=g[v],A=g[x];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,g[v]=A)}g.length=v+1;for(let x=0,b=g.length;x<b;x++){const A=g[x];r.bufferSubData(d,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var uT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ET=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,UT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_A=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$A=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:uT,alphahash_pars_fragment:fT,alphamap_fragment:hT,alphamap_pars_fragment:dT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:_T,batching_pars_vertex:vT,batching_vertex:xT,begin_vertex:yT,beginnormal_vertex:ST,bsdfs:MT,iridescence_fragment:bT,bumpmap_pars_fragment:ET,clipping_planes_fragment:TT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:CT,color_fragment:wT,color_pars_fragment:DT,color_pars_vertex:NT,color_vertex:LT,common:UT,cube_uv_reflection_fragment:OT,defaultnormal_vertex:PT,displacementmap_pars_vertex:IT,displacementmap_vertex:BT,emissivemap_fragment:FT,emissivemap_pars_fragment:zT,colorspace_fragment:HT,colorspace_pars_fragment:GT,envmap_fragment:VT,envmap_common_pars_fragment:kT,envmap_pars_fragment:XT,envmap_pars_vertex:WT,envmap_physical_pars_fragment:nA,envmap_vertex:qT,fog_vertex:jT,fog_pars_vertex:YT,fog_fragment:KT,fog_pars_fragment:ZT,gradientmap_pars_fragment:QT,lightmap_pars_fragment:JT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:eA,lights_pars_begin:tA,lights_toon_fragment:iA,lights_toon_pars_fragment:aA,lights_phong_fragment:sA,lights_phong_pars_fragment:rA,lights_physical_fragment:oA,lights_physical_pars_fragment:lA,lights_fragment_begin:cA,lights_fragment_maps:uA,lights_fragment_end:fA,lightprobes_pars_fragment:hA,logdepthbuf_fragment:dA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:gA,map_fragment:_A,map_pars_fragment:vA,map_particle_fragment:xA,map_particle_pars_fragment:yA,metalnessmap_fragment:SA,metalnessmap_pars_fragment:MA,morphinstance_vertex:bA,morphcolor_vertex:EA,morphnormal_vertex:TA,morphtarget_pars_vertex:AA,morphtarget_vertex:RA,normal_fragment_begin:CA,normal_fragment_maps:wA,normal_pars_fragment:DA,normal_pars_vertex:NA,normal_vertex:LA,normalmap_pars_fragment:UA,clearcoat_normal_fragment_begin:OA,clearcoat_normal_fragment_maps:PA,clearcoat_pars_fragment:IA,iridescence_pars_fragment:BA,opaque_fragment:FA,packing:zA,premultiplied_alpha_fragment:HA,project_vertex:GA,dithering_fragment:VA,dithering_pars_fragment:kA,roughnessmap_fragment:XA,roughnessmap_pars_fragment:WA,shadowmap_pars_fragment:qA,shadowmap_pars_vertex:jA,shadowmap_vertex:YA,shadowmask_pars_fragment:KA,skinbase_vertex:ZA,skinning_pars_vertex:QA,skinning_vertex:JA,skinnormal_vertex:$A,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:a1,transmission_pars_fragment:s1,uv_pars_fragment:r1,uv_pars_vertex:o1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:d1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:_1,distance_vert:v1,distance_frag:x1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:M1,linedashed_frag:b1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:C1,meshmatcap_frag:w1,meshnormal_vert:D1,meshnormal_frag:N1,meshphong_vert:L1,meshphong_frag:U1,meshphysical_vert:O1,meshphysical_frag:P1,meshtoon_vert:I1,meshtoon_frag:B1,points_vert:F1,points_frag:z1,shadow_vert:H1,shadow_frag:G1,sprite_vert:V1,sprite_frag:k1},ze={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ia={basic:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:jn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:jn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:jn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:jn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:jn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:jn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:jn([ze.common,ze.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:jn([ze.lights,ze.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ia.physical={uniforms:jn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Eu={r:0,b:0,g:0},X1=new pt,dy=new lt;dy.set(-1,0,0,0,1,0,0,0,1);function W1(r,e,n,a,o,c){const u=new ot(0);let h=o===!0?0:1,p,d,_=null,g=0,v=null;function x(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const L=w.backgroundBlurriness>0;N=e.get(N,L)}return N}function b(w){let N=!1;const L=x(w);L===null?M(u,h):L&&L.isColor&&(M(L,1),N=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(w,N){const L=x(N);L&&(L.isCubeTexture||L.mapping===Vu)?(d===void 0&&(d=new vi(new Gl(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:po(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=L,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(dy),d.material.toneMapped=bt.getTransfer(L.colorSpace)!==Ht,(_!==L||g!==L.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,_=L,g=L.version,v=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new vi(new ku(2,2),new ua({name:"BackgroundMaterial",uniforms:po(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=bt.getTransfer(L.colorSpace)!==Ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||g!==L.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,_=L,g=L.version,v=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function M(w,N){w.getRGB(Eu,oy(r)),n.buffers.color.setClear(Eu.r,Eu.g,Eu.b,N,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,N=1){u.set(w),h=N,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,M(u,h)},render:b,addToRenderList:A,dispose:S}}function q1(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(z,q,se,ce,X){let U=!1;const F=g(z,ce,se,q);c!==F&&(c=F,d(c.object)),U=x(z,ce,se,X),U&&b(z,ce,se,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,L(z,q,se,ce),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return r.createVertexArray()}function d(z){return r.bindVertexArray(z)}function _(z){return r.deleteVertexArray(z)}function g(z,q,se,ce){const X=ce.wireframe===!0;let U=a[q.id];U===void 0&&(U={},a[q.id]=U);const F=z.isInstancedMesh===!0?z.id:0;let oe=U[F];oe===void 0&&(oe={},U[F]=oe);let he=oe[se.id];he===void 0&&(he={},oe[se.id]=he);let xe=he[X];return xe===void 0&&(xe=v(p()),he[X]=xe),xe}function v(z){const q=[],se=[],ce=[];for(let X=0;X<n;X++)q[X]=0,se[X]=0,ce[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:se,attributeDivisors:ce,object:z,attributes:{},index:null}}function x(z,q,se,ce){const X=c.attributes,U=q.attributes;let F=0;const oe=se.getAttributes();for(const he in oe)if(oe[he].location>=0){const P=X[he];let J=U[he];if(J===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),P===void 0||P.attribute!==J||J&&P.data!==J.data)return!0;F++}return c.attributesNum!==F||c.index!==ce}function b(z,q,se,ce){const X={},U=q.attributes;let F=0;const oe=se.getAttributes();for(const he in oe)if(oe[he].location>=0){let P=U[he];P===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(P=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(P=z.instanceColor));const J={};J.attribute=P,P&&P.data&&(J.data=P.data),X[he]=J,F++}c.attributes=X,c.attributesNum=F,c.index=ce}function A(){const z=c.newAttributes;for(let q=0,se=z.length;q<se;q++)z[q]=0}function M(z){S(z,0)}function S(z,q){const se=c.newAttributes,ce=c.enabledAttributes,X=c.attributeDivisors;se[z]=1,ce[z]===0&&(r.enableVertexAttribArray(z),ce[z]=1),X[z]!==q&&(r.vertexAttribDivisor(z,q),X[z]=q)}function w(){const z=c.newAttributes,q=c.enabledAttributes;for(let se=0,ce=q.length;se<ce;se++)q[se]!==z[se]&&(r.disableVertexAttribArray(se),q[se]=0)}function N(z,q,se,ce,X,U,F){F===!0?r.vertexAttribIPointer(z,q,se,X,U):r.vertexAttribPointer(z,q,se,ce,X,U)}function L(z,q,se,ce){A();const X=ce.attributes,U=se.getAttributes(),F=q.defaultAttributeValues;for(const oe in U){const he=U[oe];if(he.location>=0){let xe=X[oe];if(xe===void 0&&(oe==="instanceMatrix"&&z.instanceMatrix&&(xe=z.instanceMatrix),oe==="instanceColor"&&z.instanceColor&&(xe=z.instanceColor)),xe!==void 0){const P=xe.normalized,J=xe.itemSize,ye=e.get(xe);if(ye===void 0)continue;const Ae=ye.buffer,De=ye.type,re=ye.bytesPerElement,Se=De===r.INT||De===r.UNSIGNED_INT||xe.gpuType===kp;if(xe.isInterleavedBufferAttribute){const Ee=xe.data,He=Ee.stride,tt=xe.offset;if(Ee.isInstancedInterleavedBuffer){for(let Je=0;Je<he.locationSize;Je++)S(he.location+Je,Ee.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Je=0;Je<he.locationSize;Je++)M(he.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Je=0;Je<he.locationSize;Je++)N(he.location+Je,J/he.locationSize,De,P,He*re,(tt+J/he.locationSize*Je)*re,Se)}else{if(xe.isInstancedBufferAttribute){for(let Ee=0;Ee<he.locationSize;Ee++)S(he.location+Ee,xe.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<he.locationSize;Ee++)M(he.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<he.locationSize;Ee++)N(he.location+Ee,J/he.locationSize,De,P,J*re,J/he.locationSize*Ee*re,Se)}}else if(F!==void 0){const P=F[oe];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(he.location,P);break;case 3:r.vertexAttrib3fv(he.location,P);break;case 4:r.vertexAttrib4fv(he.location,P);break;default:r.vertexAttrib1fv(he.location,P)}}}}w()}function G(){I();for(const z in a){const q=a[z];for(const se in q){const ce=q[se];for(const X in ce){const U=ce[X];for(const F in U)_(U[F].object),delete U[F];delete ce[X]}}delete a[z]}}function O(z){if(a[z.id]===void 0)return;const q=a[z.id];for(const se in q){const ce=q[se];for(const X in ce){const U=ce[X];for(const F in U)_(U[F].object),delete U[F];delete ce[X]}}delete a[z.id]}function B(z){for(const q in a){const se=a[q];for(const ce in se){const X=se[ce];if(X[z.id]===void 0)continue;const U=X[z.id];for(const F in U)_(U[F].object),delete U[F];delete X[z.id]}}}function T(z){for(const q in a){const se=a[q],ce=z.isInstancedMesh===!0?z.id:0,X=se[ce];if(X!==void 0){for(const U in X){const F=X[U];for(const oe in F)_(F[oe].object),delete F[oe];delete X[U]}delete se[ce],Object.keys(se).length===0&&delete a[q]}}}function I(){K(),u=!0,c!==o&&(c=o,d(c.object))}function K(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:I,resetDefaultState:K,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:M,disableUnusedAttributes:w}}function j1(r,e,n){let a;function o(p){a=p}function c(p,d){r.drawArrays(a,p,d),n.update(d,a,1)}function u(p,d,_){_!==0&&(r.drawArraysInstanced(a,p,d,_),n.update(d,a,_))}function h(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,_);let v=0;for(let x=0;x<_;x++)v+=d[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Y1(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Li&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==gi&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ni&&!T)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(Ye("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:L,maxSamples:G,samples:O}}function K1(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new Rs,h=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||a!==0||o;return o=v,a=g.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,x){const b=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,S=r.get(g);if(!o||b===null||b.length===0||c&&!M)c?_(null):d();else{const w=c?0:a,N=w*4;let L=S.clippingState||null;p.value=L,L=_(b,v,N,x);for(let G=0;G!==N;++G)L[G]=n[G];S.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,x,b){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=p.value,b!==!0||M===null){const S=x+A*4,w=v.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,L=x;N!==A;++N,L+=4)u.copy(g[N]).applyMatrix4(w,h),u.normal.toArray(M,L),M[L+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}const ws=4,nx=[.125,.215,.35,.446,.526,.582],ir=20,Z1=256,Al=new Wu,ix=new ot;let Od=null,Pd=0,Id=0,Bd=!1;const Q1=new Y;class ax{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=Q1}=c;Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Pd,Id),this._renderer.xr.enabled=Bd,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===or||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:An,minFilter:An,generateMipmaps:!1,type:ka,format:Li,colorSpace:_i,depthBuffer:!1},o=sx(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J1(c)),this._blurMaterial=eR(c,e,n),this._ggxMaterial=$1(c,e,n)}return o}_compileMaterial(e){const n=new vi(new Ui,e);this._renderer.compile(n,Al)}_sceneToCubeUV(e,n,a,o,c){const p=new Yn(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(ix),g.toneMapping=ra,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Gl,new rr({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let S=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,S=!0):(M.color.copy(ix),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[N],c.y,c.z)):L===1?(p.up.set(0,0,d[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[N],c.z)):(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[N]));const G=this._cubeSize;no(o,L*G,N>2?G:0,G,G),g.setRenderTarget(o),S&&g.render(A,p),g.render(e,p)}g.toneMapping=x,g.autoClear=v,e.background=w}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===or||e.mapping===co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;no(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Al)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,x=g*v,{_lodMax:b}=this,A=this._sizeLods[a],M=3*A*(a>b-ws?a-b+ws:0),S=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=b-n,no(c,M,S,3*A,2*A),o.setRenderTarget(c),o.render(h,Al),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-a,no(e,M,S,3*A,2*A),o.setRenderTarget(e),o.render(h,Al)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[o];g.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*ir-1),A=c/b,M=isFinite(c)?1+Math.floor(_*A):ir;M>ir&&Ye(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ir}`);const S=[];let w=0;for(let B=0;B<ir;++B){const T=B/A,I=Math.exp(-T*T/2);S.push(I),B===0?w+=I:B<M&&(w+=2*I)}for(let B=0;B<S.length;B++)S[B]=S[B]/w;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=S,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:N}=this;v.dTheta.value=b,v.mipInt.value=N-a;const L=this._sizeLods[o],G=3*L*(o>N-ws?o-N+ws:0),O=4*(this._cubeSize-L);no(n,G,O,3*L,2*L),p.setRenderTarget(n),p.render(g,Al)}}function J1(r){const e=[],n=[],a=[];let o=r;const c=r-ws+1+nx.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let p=1/h;u>r-ws?p=nx[u-r+ws-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,b=6,A=3,M=2,S=1,w=new Float32Array(A*b*x),N=new Float32Array(M*b*x),L=new Float32Array(S*b*x);for(let O=0;O<x;O++){const B=O%3*2/3-1,T=O>2?0:-1,I=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];w.set(I,A*b*O),N.set(v,M*b*O);const K=[O,O,O,O,O,O];L.set(K,S*b*O)}const G=new Ui;G.setAttribute("position",new Kn(w,A)),G.setAttribute("uv",new Kn(N,M)),G.setAttribute("faceIndex",new Kn(L,S)),a.push(new vi(G,null)),o>ws&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function sx(r,e,n){const a=new oa(r,e,n);return a.texture.mapping=Vu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function no(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function $1(r,e,n){return new ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function eR(r,e,n){const a=new Float32Array(ir),o=new Y(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function rx(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ox(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class py extends oa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new sy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Gl(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:po(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ii,blending:Ha});c.uniforms.tEquirect.value=n;const u=new vi(o,c),h=n.minFilter;return n.minFilter===Fa&&(n.minFilter=An),new KE(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function tR(r){let e=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===ad||x===sd)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const A=new py(b.height);return A.fromEquirectangularTexture(r,v),e.set(v,A),v.addEventListener("dispose",d),h(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===ad||x===sd,A=x===or||x===co;if(b||A){let M=n.get(v);const S=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return a===null&&(a=new ax(r)),M=b?a.fromEquirectangular(v,M):a.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),M.texture;if(M!==void 0)return M.texture;{const w=v.image;return b&&w&&w.height>0||A&&w&&p(w)?(a===null&&(a=new ax(r)),M=b?a.fromEquirectangular(v):a.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),v.addEventListener("dispose",_),M.texture):null}}}return v}function h(v,x){return x===ad?v.mapping=or:x===sd&&(v.mapping=co),v}function p(v){let x=0;const b=6;for(let A=0;A<b;A++)v[A]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function _(v){const x=v.target;x.removeEventListener("dispose",_);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function g(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:g}}function nR(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Lp("WebGLRenderer: "+a+" extension not supported."),o}}}function iR(r,e,n,a){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,b=g.attributes.position;let A=0;if(b===void 0)return;if(x!==null){const w=x.array;A=x.version;for(let N=0,L=w.length;N<L;N+=3){const G=w[N+0],O=w[N+1],B=w[N+2];v.push(G,O,O,B,B,G)}}else{const w=b.array;A=b.version;for(let N=0,L=w.length/3-1;N<L;N+=3){const G=N+0,O=N+1,B=N+2;v.push(G,O,O,B,B,G)}}const M=new(b.count>=65535?ty:ey)(v,1);M.version=A;const S=c.get(g);S&&e.remove(S),c.set(g,M)}function _(g){const v=c.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function aR(r,e,n){let a;function o(g){a=g}let c,u;function h(g){c=g.type,u=g.bytesPerElement}function p(g,v){r.drawElements(a,v,c,g*u),n.update(v,a,1)}function d(g,v,x){x!==0&&(r.drawElementsInstanced(a,v,c,g*u,x),n.update(v,a,x))}function _(g,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,g,0,x);let A=0;for(let M=0;M<x;M++)A+=v[M];n.update(A,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function sR(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:et("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function rR(r,e,n){const a=new WeakMap,o=new Qt;function c(u,h,p){const d=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(h);if(v===void 0||v.count!==g){let K=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",K)};var x=K;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),A===!0&&(L=2),M===!0&&(L=3);let G=h.attributes.position.count*L,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*O*4*g),T=new Jx(B,G,O,g);T.type=Ni,T.needsUpdate=!0;const I=L*4;for(let z=0;z<g;z++){const q=S[z],se=w[z],ce=N[z],X=G*O*4*z;for(let U=0;U<q.count;U++){const F=U*I;b===!0&&(o.fromBufferAttribute(q,U),B[X+F+0]=o.x,B[X+F+1]=o.y,B[X+F+2]=o.z,B[X+F+3]=0),A===!0&&(o.fromBufferAttribute(se,U),B[X+F+4]=o.x,B[X+F+5]=o.y,B[X+F+6]=o.z,B[X+F+7]=0),M===!0&&(o.fromBufferAttribute(ce,U),B[X+F+8]=o.x,B[X+F+9]=o.y,B[X+F+10]=o.z,B[X+F+11]=ce.itemSize===4?o.w:1)}}v={count:g,texture:T,size:new st(G,O)},a.set(h,v),h.addEventListener("dispose",K)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const A=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function oR(r,e,n,a,o){let c=new WeakMap;function u(d){const _=o.render.frame,g=d.geometry,v=e.get(d,g);if(c.get(v)!==_&&(e.update(v),c.set(v,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==_&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return v}function h(){c=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const lR={[Ox]:"LINEAR_TONE_MAPPING",[Px]:"REINHARD_TONE_MAPPING",[Ix]:"CINEON_TONE_MAPPING",[Bx]:"ACES_FILMIC_TONE_MAPPING",[zx]:"AGX_TONE_MAPPING",[Hx]:"NEUTRAL_TONE_MAPPING",[Fx]:"CUSTOM_TONE_MAPPING"};function cR(r,e,n,a,o){const c=new oa(e,n,{type:r,depthBuffer:a,stencilBuffer:o,depthTexture:a?new ho(e,n):void 0}),u=new oa(e,n,{type:ka,depthBuffer:!1,stencilBuffer:!1}),h=new Ui;h.setAttribute("position",new qi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qi([0,2,0,0,2,0],2));const p=new TE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new vi(h,p),_=new Wu(-1,1,1,-1,0,1);let g=null,v=null,x=!1,b,A=null,M=[],S=!1;this.setSize=function(w,N){c.setSize(w,N),u.setSize(w,N);for(let L=0;L<M.length;L++){const G=M[L];G.setSize&&G.setSize(w,N)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const N=c.width,L=c.height;for(let G=0;G<M.length;G++){const O=M[G];O.setSize&&O.setSize(N,L)}},this.begin=function(w,N){if(x||w.toneMapping===ra&&M.length===0)return!1;if(A=N,N!==null){const L=N.width,G=N.height;(c.width!==L||c.height!==G)&&this.setSize(L,G)}return S===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=ra,!0},this.hasRenderPass=function(){return S},this.end=function(w,N){w.toneMapping=b,x=!0;let L=c,G=u;for(let O=0;O<M.length;O++){const B=M[O];if(B.enabled!==!1&&(B.render(w,G,L,N),B.needsSwap!==!1)){const T=L;L=G,G=T}}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,p.defines={},bt.getTransfer(g)===Ht&&(p.defines.SRGB_TRANSFER="");const O=lR[v];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(A),w.render(d,_),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),p.dispose()}}const my=new Ln,Bp=new ho(1,1),gy=new Jx,_y=new Yb,vy=new sy,lx=[],cx=[],ux=new Float32Array(16),fx=new Float32Array(9),hx=new Float32Array(4);function bo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=lx[o];if(c===void 0&&(c=new Float32Array(o),lx[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,r[u].toArray(c,h)}return c}function Rn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Cn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function ju(r,e){let n=cx[e];n===void 0&&(n=new Int32Array(e),cx[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function uR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function fR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;r.uniform2fv(this.addr,e),Cn(n,e)}}function hR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rn(n,e))return;r.uniform3fv(this.addr,e),Cn(n,e)}}function dR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;r.uniform4fv(this.addr,e),Cn(n,e)}}function pR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Rn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(Rn(n,a))return;hx.set(a),r.uniformMatrix2fv(this.addr,!1,hx),Cn(n,a)}}function mR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Rn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(Rn(n,a))return;fx.set(a),r.uniformMatrix3fv(this.addr,!1,fx),Cn(n,a)}}function gR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Rn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(Rn(n,a))return;ux.set(a),r.uniformMatrix4fv(this.addr,!1,ux),Cn(n,a)}}function _R(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function vR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;r.uniform2iv(this.addr,e),Cn(n,e)}}function xR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;r.uniform3iv(this.addr,e),Cn(n,e)}}function yR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;r.uniform4iv(this.addr,e),Cn(n,e)}}function SR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function MR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;r.uniform2uiv(this.addr,e),Cn(n,e)}}function bR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;r.uniform3uiv(this.addr,e),Cn(n,e)}}function ER(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;r.uniform4uiv(this.addr,e),Cn(n,e)}}function TR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Bp.compareFunction=n.isReversedDepthBuffer()?Qp:Zp,c=Bp):c=my,n.setTexture2D(e||c,o)}function AR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||_y,o)}function RR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||vy,o)}function CR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||gy,o)}function wR(r){switch(r){case 5126:return uR;case 35664:return fR;case 35665:return hR;case 35666:return dR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return _R;case 35667:case 35671:return vR;case 35668:case 35672:return xR;case 35669:case 35673:return yR;case 5125:return SR;case 36294:return MR;case 36295:return bR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}function DR(r,e){r.uniform1fv(this.addr,e)}function NR(r,e){const n=bo(e,this.size,2);r.uniform2fv(this.addr,n)}function LR(r,e){const n=bo(e,this.size,3);r.uniform3fv(this.addr,n)}function UR(r,e){const n=bo(e,this.size,4);r.uniform4fv(this.addr,n)}function OR(r,e){const n=bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function PR(r,e){const n=bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function IR(r,e){const n=bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function BR(r,e){r.uniform1iv(this.addr,e)}function FR(r,e){r.uniform2iv(this.addr,e)}function zR(r,e){r.uniform3iv(this.addr,e)}function HR(r,e){r.uniform4iv(this.addr,e)}function GR(r,e){r.uniform1uiv(this.addr,e)}function VR(r,e){r.uniform2uiv(this.addr,e)}function kR(r,e){r.uniform3uiv(this.addr,e)}function XR(r,e){r.uniform4uiv(this.addr,e)}function WR(r,e,n){const a=this.cache,o=e.length,c=ju(n,o);Rn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Bp:u=my;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function qR(r,e,n){const a=this.cache,o=e.length,c=ju(n,o);Rn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||_y,c[u])}function jR(r,e,n){const a=this.cache,o=e.length,c=ju(n,o);Rn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||vy,c[u])}function YR(r,e,n){const a=this.cache,o=e.length,c=ju(n,o);Rn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||gy,c[u])}function KR(r){switch(r){case 5126:return DR;case 35664:return NR;case 35665:return LR;case 35666:return UR;case 35674:return OR;case 35675:return PR;case 35676:return IR;case 5124:case 35670:return BR;case 35667:case 35671:return FR;case 35668:case 35672:return zR;case 35669:case 35673:return HR;case 5125:return GR;case 36294:return VR;case 36295:return kR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return jR;case 36289:case 36303:case 36311:case 36292:return YR}}class ZR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=wR(n.type)}}class QR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KR(n.type)}}class JR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function dx(r,e){r.seq.push(e),r.map[e.id]=e}function $R(r,e,n){const a=r.name,o=a.length;for(Fd.lastIndex=0;;){const c=Fd.exec(a),u=Fd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){dx(n,d===void 0?new ZR(h,r,e):new QR(h,r,e));break}else{let g=n.map[h];g===void 0&&(g=new JR(h),dx(n,g)),n=g}}}class Uu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),p=e.getUniformLocation(n,h.name);$R(h,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function px(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const eC=37297;let tC=0;function nC(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const mx=new lt;function iC(r){bt._getMatrix(mx,bt.workingColorSpace,r);const e=`mat3( ${mx.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(r)){case Bu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gx(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+nC(r.getShaderSource(e),h)}else return c}function aC(r,e){const n=iC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const sC={[Ox]:"Linear",[Px]:"Reinhard",[Ix]:"Cineon",[Bx]:"ACESFilmic",[zx]:"AgX",[Hx]:"Neutral",[Fx]:"Custom"};function rC(r,e){const n=sC[e];return n===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tu=new Y;function oC(){bt.getLuminanceCoefficients(Tu);const r=Tu.x.toFixed(4),e=Tu.y.toFixed(4),n=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function cC(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function uC(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:h}}return n}function Nl(r){return r!==""}function _x(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(r){return r.replace(fC,dC)}const hC=new Map;function dC(r,e){let n=dt[e];if(n===void 0){const a=hC.get(e);if(a!==void 0)n=dt[a],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Fp(n)}const pC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xx(r){return r.replace(pC,mC)}function mC(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function yx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gC={[Ru]:"SHADOWMAP_TYPE_PCF",[wl]:"SHADOWMAP_TYPE_VSM"};function _C(r){return gC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vC={[or]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function xC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const yC={[co]:"ENVMAP_MODE_REFRACTION"};function SC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MC={[Ux]:"ENVMAP_BLENDING_MULTIPLY",[cb]:"ENVMAP_BLENDING_MIX",[ub]:"ENVMAP_BLENDING_ADD"};function bC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":MC[r.combine]||"ENVMAP_BLENDING_NONE"}function EC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function TC(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=_C(n),d=xC(n),_=SC(n),g=bC(n),v=EC(n),x=lC(n),b=cC(c),A=o.createProgram();let M,S,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Nl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Nl).join(`
`),S.length>0&&(S+=`
`)):(M=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),S=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ra?"#define TONE_MAPPING":"",n.toneMapping!==ra?dt.tonemapping_pars_fragment:"",n.toneMapping!==ra?rC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,aC("linearToOutputTexel",n.outputColorSpace),oC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Nl).join(`
`)),u=Fp(u),u=_x(u,n),u=vx(u,n),h=Fp(h),h=_x(h,n),h=vx(h,n),u=xx(u),h=xx(h),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=w+M+u,L=w+S+h,G=px(o,o.VERTEX_SHADER,N),O=px(o,o.FRAGMENT_SHADER,L);o.attachShader(A,G),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function B(z){if(r.debug.checkShaderErrors){const q=o.getProgramInfoLog(A)||"",se=o.getShaderInfoLog(G)||"",ce=o.getShaderInfoLog(O)||"",X=q.trim(),U=se.trim(),F=ce.trim();let oe=!0,he=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,G,O);else{const xe=gx(o,G,"vertex"),P=gx(o,O,"fragment");et("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+xe+`
`+P)}else X!==""?Ye("WebGLProgram: Program Info Log:",X):(U===""||F==="")&&(he=!1);he&&(z.diagnostics={runnable:oe,programLog:X,vertexShader:{log:U,prefix:M},fragmentShader:{log:F,prefix:S}})}o.deleteShader(G),o.deleteShader(O),T=new Uu(o,A),I=uC(o,A)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let K=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(A,eC)),K},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=O,this}let AC=0;class RC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new CC(e),n.set(e,a)),a}}class CC{constructor(e){this.id=AC++,this.code=e,this.usedTimes=0}}function wC(r){return r===lr||r===Pu||r===Iu}function DC(r,e,n,a,o,c){const u=new em,h=new RC,p=new Set,d=[],_=new Map,g=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function A(T,I,K,z,q,se){const ce=z.fog,X=q.geometry,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,oe=e.get(T.envMap||U,F),he=oe&&oe.mapping===Vu?oe.image.height:null,xe=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&Ye("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const P=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=P!==void 0?P.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Ae,De,re,Se;if(xe){const nt=ia[xe];Ae=nt.vertexShader,De=nt.fragmentShader}else Ae=T.vertexShader,De=T.fragmentShader,h.update(T),re=h.getVertexShaderID(T),Se=h.getFragmentShaderID(T);const Ee=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),tt=q.isInstancedMesh===!0,Je=q.isBatchedMesh===!0,Yt=!!T.map,mt=!!T.matcap,Et=!!oe,Ot=!!T.aoMap,ft=!!T.lightMap,fn=!!T.bumpMap,Jt=!!T.normalMap,Un=!!T.displacementMap,W=!!T.emissiveMap,rn=!!T.metalnessMap,_t=!!T.roughnessMap,kt=T.anisotropy>0,Re=T.clearcoat>0,tn=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,ge=kt&&!!T.anisotropyMap,be=Re&&!!T.clearcoatMap,Ce=Re&&!!T.clearcoatNormalMap,Ue=Re&&!!T.clearcoatRoughnessMap,ue=D&&!!T.iridescenceMap,fe=D&&!!T.iridescenceThicknessMap,Oe=E&&!!T.sheenColorMap,Pe=E&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,we=!!T.specularColorMap,it=!!T.specularIntensityMap,at=Q&&!!T.transmissionMap,xt=Q&&!!T.thicknessMap,V=!!T.gradientMap,Te=!!T.alphaMap,pe=T.alphaTest>0,Fe=!!T.alphaHash,Le=!!T.extensions;let Me=ra;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=r.toneMapping);const qe={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:De,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Je,batchingColor:Je&&q._colorsTexture!==null,instancing:tt,instancingColor:tt&&q.instanceColor!==null,instancingMorph:tt&&q.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:mt,envMap:Et,envMapMode:Et&&oe.mapping,envMapCubeUVHeight:he,aoMap:Ot,lightMap:ft,bumpMap:fn,normalMap:Jt,displacementMap:Un,emissiveMap:W,normalMapObjectSpace:Jt&&T.normalMapType===mb,normalMapTangentSpace:Jt&&T.normalMapType===Dp,packedNormalMap:Jt&&T.normalMapType===Dp&&wC(T.normalMap.format),metalnessMap:rn,roughnessMap:_t,anisotropy:kt,anisotropyMap:ge,clearcoat:Re,clearcoatMap:be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ue,dispersion:tn,iridescence:D,iridescenceMap:ue,iridescenceThicknessMap:fe,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:we,specularIntensityMap:it,transmission:Q,transmissionMap:at,thicknessMap:xt,gradientMap:V,opaque:T.transparent===!1&&T.blending===so&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:pe,alphaHash:Fe,combine:T.combine,mapUv:Yt&&b(T.map.channel),aoMapUv:Ot&&b(T.aoMap.channel),lightMapUv:ft&&b(T.lightMap.channel),bumpMapUv:fn&&b(T.bumpMap.channel),normalMapUv:Jt&&b(T.normalMap.channel),displacementMapUv:Un&&b(T.displacementMap.channel),emissiveMapUv:W&&b(T.emissiveMap.channel),metalnessMapUv:rn&&b(T.metalnessMap.channel),roughnessMapUv:_t&&b(T.roughnessMap.channel),anisotropyMapUv:ge&&b(T.anisotropyMap.channel),clearcoatMapUv:be&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(T.sheenRoughnessMap.channel),specularMapUv:Ne&&b(T.specularMap.channel),specularColorMapUv:we&&b(T.specularColorMap.channel),specularIntensityMapUv:it&&b(T.specularIntensityMap.channel),transmissionMapUv:at&&b(T.transmissionMap.channel),thicknessMapUv:xt&&b(T.thicknessMap.channel),alphaMapUv:Te&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Jt||kt),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(Yt||Te),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&Jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:He,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ye,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===Ht,decodeVideoTextureEmissive:W&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===Ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Di,flipSided:T.side===ii,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=p.has(1),qe.vertexUv2s=p.has(2),qe.vertexUv3s=p.has(3),p.clear(),qe}function M(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const K in T.defines)I.push(K),I.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(S(I,T),w(I,T),I.push(r.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function S(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function w(T,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function N(T){const I=x[T.type];let K;if(I){const z=ia[I];K=ME.clone(z.uniforms)}else K=T.uniforms;return K}function L(T,I){let K=_.get(I);return K!==void 0?++K.usedTimes:(K=new TC(r,I,T,o),d.push(K),_.set(I,K)),K}function G(T){if(--T.usedTimes===0){const I=d.indexOf(T);d[I]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){h.remove(T)}function B(){h.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:N,acquireProgram:L,releaseProgram:G,releaseShaderCache:O,programs:d,dispose:B}}function NC(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,p){r.get(u)[h]=p}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function LC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Sx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mx(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,A,M,S){let w=r[e];return w===void 0?(w={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:M,group:S},r[e]=w):(w.id=v.id,w.object=v,w.geometry=x,w.material=b,w.materialVariant=u(v),w.groupOrder=A,w.renderOrder=v.renderOrder,w.z=M,w.group=S),e++,w}function p(v,x,b,A,M,S){const w=h(v,x,b,A,M,S);b.transmission>0?a.push(w):b.transparent===!0?o.push(w):n.push(w)}function d(v,x,b,A,M,S){const w=h(v,x,b,A,M,S);b.transmission>0?a.unshift(w):b.transparent===!0?o.unshift(w):n.unshift(w)}function _(v,x){n.length>1&&n.sort(v||LC),a.length>1&&a.sort(x||Sx),o.length>1&&o.sort(x||Sx)}function g(){for(let v=e,x=r.length;v<x;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:d,finish:g,sort:_}}function UC(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new Mx,r.set(a,[u])):o>=c.length?(u=new Mx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function OC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new ot};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=n,n}}}function PC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let IC=0;function BC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function FC(r){const e=new OC,n=PC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Y);const o=new Y,c=new pt,u=new pt;function h(d){let _=0,g=0,v=0;for(let I=0;I<9;I++)a.probe[I].set(0,0,0);let x=0,b=0,A=0,M=0,S=0,w=0,N=0,L=0,G=0,O=0,B=0;d.sort(BC);for(let I=0,K=d.length;I<K;I++){const z=d[I],q=z.color,se=z.intensity,ce=z.distance;let X=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===lr?X=z.shadow.map.texture:X=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=q.r*se,g+=q.g*se,v+=q.b*se;else if(z.isLightProbe){for(let U=0;U<9;U++)a.probe[U].addScaledVector(z.sh.coefficients[U],se);B++}else if(z.isDirectionalLight){const U=e.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const F=z.shadow,oe=n.get(z);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,a.directionalShadow[x]=oe,a.directionalShadowMap[x]=X,a.directionalShadowMatrix[x]=z.shadow.matrix,w++}a.directional[x]=U,x++}else if(z.isSpotLight){const U=e.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(q).multiplyScalar(se),U.distance=ce,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,a.spot[A]=U;const F=z.shadow;if(z.map&&(a.spotLightMap[G]=z.map,G++,F.updateMatrices(z),z.castShadow&&O++),a.spotLightMatrix[A]=F.matrix,z.castShadow){const oe=n.get(z);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,a.spotShadow[A]=oe,a.spotShadowMap[A]=X,L++}A++}else if(z.isRectAreaLight){const U=e.get(z);U.color.copy(q).multiplyScalar(se),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),a.rectArea[M]=U,M++}else if(z.isPointLight){const U=e.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),U.distance=z.distance,U.decay=z.decay,z.castShadow){const F=z.shadow,oe=n.get(z);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,oe.shadowCameraNear=F.camera.near,oe.shadowCameraFar=F.camera.far,a.pointShadow[b]=oe,a.pointShadowMap[b]=X,a.pointShadowMatrix[b]=z.shadow.matrix,N++}a.point[b]=U,b++}else if(z.isHemisphereLight){const U=e.get(z);U.skyColor.copy(z.color).multiplyScalar(se),U.groundColor.copy(z.groundColor).multiplyScalar(se),a.hemi[S]=U,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==A||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==N||T.numSpotShadows!==L||T.numSpotMaps!==G||T.numLightProbes!==B)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=M,a.point.length=b,a.hemi.length=S,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=L+G-O,a.spotLightMap.length=G,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=B,T.directionalLength=x,T.pointLength=b,T.spotLength=A,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=N,T.numSpotShadows=L,T.numSpotMaps=G,T.numLightProbes=B,a.version=IC++)}function p(d,_){let g=0,v=0,x=0,b=0,A=0;const M=_.matrixWorldInverse;for(let S=0,w=d.length;S<w;S++){const N=d[S];if(N.isDirectionalLight){const L=a.directional[g];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(M),g++}else if(N.isSpotLight){const L=a.spot[x];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(M),x++}else if(N.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),u.identity(),c.copy(N.matrixWorld),c.premultiply(M),u.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(N.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),v++}else if(N.isHemisphereLight){const L=a.hemi[A];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(M),A++}}}return{setup:h,setupView:p,state:a}}function bx(r){const e=new FC(r),n=[],a=[],o=[];function c(v){g.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function p(v){o.push(v)}function d(){e.setup(n)}function _(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:d,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function zC(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new bx(r),e.set(o,[h])):c>=u.length?(h=new bx(r),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const HC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VC=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],kC=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ex=new pt,Rl=new Y,zd=new Y;function XC(r,e,n){let a=new am;const o=new st,c=new st,u=new Qt,h=new AE,p=new RE,d={},_=n.maxTextureSize,g={[Va]:ii,[ii]:Va,[Di]:Di},v=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:HC,fragmentShader:GC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new Ui;b.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new vi(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let S=this.type;this.render=function(O,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===XM&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ru);const I=r.getRenderTarget(),K=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ha),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const se=S!==this.type;se&&B.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(X=>X.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,X=O.length;ce<X;ce++){const U=O[ce],F=U.shadow;if(F===void 0){Ye("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const oe=F.getFrameExtents();o.multiply(oe),c.copy(F.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/oe.x),o.x=c.x*oe.x,F.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/oe.y),o.y=c.y*oe.y,F.mapSize.y=c.y));const he=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=he,F.map===null||se===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===wl){if(U.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new oa(o.x,o.y,{format:lr,type:ka,minFilter:An,magFilter:An,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new ho(o.x,o.y,Ni),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Xa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn}else U.isPointLight?(F.map=new py(o.x),F.map.depthTexture=new yE(o.x,ca)):(F.map=new oa(o.x,o.y),F.map.depthTexture=new ho(o.x,o.y,ca)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Xa,this.type===Ru?(F.map.depthTexture.compareFunction=he?Qp:Zp,F.map.depthTexture.minFilter=An,F.map.depthTexture.magFilter=An):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn);F.camera.updateProjectionMatrix()}const xe=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xe;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const J=F.getViewport(P);u.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),q.viewport(u)}if(U.isPointLight){const J=F.camera,ye=F.matrix,Ae=U.distance||J.far;Ae!==J.far&&(J.far=Ae,J.updateProjectionMatrix()),Rl.setFromMatrixPosition(U.matrixWorld),J.position.copy(Rl),zd.copy(J.position),zd.add(VC[P]),J.up.copy(kC[P]),J.lookAt(zd),J.updateMatrixWorld(),ye.makeTranslation(-Rl.x,-Rl.y,-Rl.z),Ex.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Ex,J.coordinateSystem,J.reversedDepth)}else F.updateMatrices(U);a=F.getFrustum(),L(B,T,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===wl&&w(F,T),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(I,K,z)};function w(O,B){const T=e.update(A);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new oa(o.x,o.y,{format:lr,type:ka})),v.uniforms.shadow_pass.value=O.map.depthTexture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(B,null,T,v,A,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(B,null,T,x,A,null)}function N(O,B,T,I){let K=null;const z=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)K=z;else if(K=T.isPointLight===!0?p:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=K.uuid,se=B.uuid;let ce=d[q];ce===void 0&&(ce={},d[q]=ce);let X=ce[se];X===void 0&&(X=K.clone(),ce[se]=X,B.addEventListener("dispose",G)),K=X}if(K.visible=B.visible,K.wireframe=B.wireframe,I===wl?K.side=B.shadowSide!==null?B.shadowSide:B.side:K.side=B.shadowSide!==null?B.shadowSide:g[B.side],K.alphaMap=B.alphaMap,K.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,K.map=B.map,K.clipShadows=B.clipShadows,K.clippingPlanes=B.clippingPlanes,K.clipIntersection=B.clipIntersection,K.displacementMap=B.displacementMap,K.displacementScale=B.displacementScale,K.displacementBias=B.displacementBias,K.wireframeLinewidth=B.wireframeLinewidth,K.linewidth=B.linewidth,T.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const q=r.properties.get(K);q.light=T}return K}function L(O,B,T,I,K){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&K===wl)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const se=e.update(O),ce=O.material;if(Array.isArray(ce)){const X=se.groups;for(let U=0,F=X.length;U<F;U++){const oe=X[U],he=ce[oe.materialIndex];if(he&&he.visible){const xe=N(O,he,I,K);O.onBeforeShadow(r,O,B,T,se,xe,oe),r.renderBufferDirect(T,null,se,xe,O,oe),O.onAfterShadow(r,O,B,T,se,xe,oe)}}}else if(ce.visible){const X=N(O,ce,I,K);O.onBeforeShadow(r,O,B,T,se,X,null),r.renderBufferDirect(T,null,se,X,O,null),O.onAfterShadow(r,O,B,T,se,X,null)}}const q=O.children;for(let se=0,ce=q.length;se<ce;se++)L(q[se],B,T,I,K)}function G(O){O.target.removeEventListener("dispose",G);for(const T in d){const I=d[T],K=O.target.uuid;K in I&&(I[K].dispose(),delete I[K])}}}function WC(r,e){function n(){let V=!1;const Te=new Qt;let pe=null;const Fe=new Qt(0,0,0,0);return{setMask:function(Le){pe!==Le&&!V&&(r.colorMask(Le,Le,Le,Le),pe=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Me,qe,nt,on){on===!0&&(Le*=nt,Me*=nt,qe*=nt),Te.set(Le,Me,qe,nt),Fe.equals(Te)===!1&&(r.clearColor(Le,Me,qe,nt),Fe.copy(Te))},reset:function(){V=!1,pe=null,Fe.set(-1,0,0,0)}}}function a(){let V=!1,Te=!1,pe=null,Fe=null,Le=null;return{setReversed:function(Me){if(Te!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Te=Me;const nt=Le;Le=null,this.setClear(nt)}},getReversed:function(){return Te},setTest:function(Me){Me?Ee(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(Me){pe!==Me&&!V&&(r.depthMask(Me),pe=Me)},setFunc:function(Me){if(Te&&(Me=Ab[Me]),Fe!==Me){switch(Me){case qd:r.depthFunc(r.NEVER);break;case jd:r.depthFunc(r.ALWAYS);break;case Yd:r.depthFunc(r.LESS);break;case lo:r.depthFunc(r.LEQUAL);break;case Kd:r.depthFunc(r.EQUAL);break;case Zd:r.depthFunc(r.GEQUAL);break;case Qd:r.depthFunc(r.GREATER);break;case Jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Le!==Me&&(Le=Me,Te&&(Me=1-Me),r.clearDepth(Me))},reset:function(){V=!1,pe=null,Fe=null,Le=null,Te=!1}}}function o(){let V=!1,Te=null,pe=null,Fe=null,Le=null,Me=null,qe=null,nt=null,on=null;return{setTest:function(Nt){V||(Nt?Ee(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Nt){Te!==Nt&&!V&&(r.stencilMask(Nt),Te=Nt)},setFunc:function(Nt,xi,ai){(pe!==Nt||Fe!==xi||Le!==ai)&&(r.stencilFunc(Nt,xi,ai),pe=Nt,Fe=xi,Le=ai)},setOp:function(Nt,xi,ai){(Me!==Nt||qe!==xi||nt!==ai)&&(r.stencilOp(Nt,xi,ai),Me=Nt,qe=xi,nt=ai)},setLocked:function(Nt){V=Nt},setClear:function(Nt){on!==Nt&&(r.clearStencil(Nt),on=Nt)},reset:function(){V=!1,Te=null,pe=null,Fe=null,Le=null,Me=null,qe=null,nt=null,on=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,d=new WeakMap;let _={},g={},v={},x=new WeakMap,b=[],A=null,M=!1,S=null,w=null,N=null,L=null,G=null,O=null,B=null,T=new ot(0,0,0),I=0,K=!1,z=null,q=null,se=null,ce=null,X=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,oe=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(he)[1]),F=oe>=1):he.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),F=oe>=2);let xe=null,P={};const J=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Ae=new Qt().fromArray(J),De=new Qt().fromArray(ye);function re(V,Te,pe,Fe){const Le=new Uint8Array(4),Me=r.createTexture();r.bindTexture(V,Me),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<pe;qe++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Te+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Me}const Se={};Se[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(r.DEPTH_TEST),u.setFunc(lo),fn(!1),Jt(av),Ee(r.CULL_FACE),Ot(Ha);function Ee(V){_[V]!==!0&&(r.enable(V),_[V]=!0)}function He(V){_[V]!==!1&&(r.disable(V),_[V]=!1)}function tt(V,Te){return v[V]!==Te?(r.bindFramebuffer(V,Te),v[V]=Te,V===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Te),V===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(V,Te){let pe=b,Fe=!1;if(V){pe=x.get(Te),pe===void 0&&(pe=[],x.set(Te,pe));const Le=V.textures;if(pe.length!==Le.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,qe=Le.length;Me<qe;Me++)pe[Me]=r.COLOR_ATTACHMENT0+Me;pe.length=Le.length,Fe=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(pe)}function Yt(V){return A!==V?(r.useProgram(V),A=V,!0):!1}const mt={[nr]:r.FUNC_ADD,[qM]:r.FUNC_SUBTRACT,[jM]:r.FUNC_REVERSE_SUBTRACT};mt[YM]=r.MIN,mt[KM]=r.MAX;const Et={[ZM]:r.ZERO,[QM]:r.ONE,[JM]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[ab]:r.SRC_ALPHA_SATURATE,[nb]:r.DST_COLOR,[eb]:r.DST_ALPHA,[$M]:r.ONE_MINUS_SRC_COLOR,[Wd]:r.ONE_MINUS_SRC_ALPHA,[ib]:r.ONE_MINUS_DST_COLOR,[tb]:r.ONE_MINUS_DST_ALPHA,[sb]:r.CONSTANT_COLOR,[rb]:r.ONE_MINUS_CONSTANT_COLOR,[ob]:r.CONSTANT_ALPHA,[lb]:r.ONE_MINUS_CONSTANT_ALPHA};function Ot(V,Te,pe,Fe,Le,Me,qe,nt,on,Nt){if(V===Ha){M===!0&&(He(r.BLEND),M=!1);return}if(M===!1&&(Ee(r.BLEND),M=!0),V!==WM){if(V!==S||Nt!==K){if((w!==nr||G!==nr)&&(r.blendEquation(r.FUNC_ADD),w=nr,G=nr),Nt)switch(V){case so:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sv:r.blendFunc(r.ONE,r.ONE);break;case rv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ov:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:et("WebGLState: Invalid blending: ",V);break}else switch(V){case so:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rv:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ov:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",V);break}N=null,L=null,O=null,B=null,T.set(0,0,0),I=0,S=V,K=Nt}return}Le=Le||Te,Me=Me||pe,qe=qe||Fe,(Te!==w||Le!==G)&&(r.blendEquationSeparate(mt[Te],mt[Le]),w=Te,G=Le),(pe!==N||Fe!==L||Me!==O||qe!==B)&&(r.blendFuncSeparate(Et[pe],Et[Fe],Et[Me],Et[qe]),N=pe,L=Fe,O=Me,B=qe),(nt.equals(T)===!1||on!==I)&&(r.blendColor(nt.r,nt.g,nt.b,on),T.copy(nt),I=on),S=V,K=!1}function ft(V,Te){V.side===Di?He(r.CULL_FACE):Ee(r.CULL_FACE);let pe=V.side===ii;Te&&(pe=!pe),fn(pe),V.blending===so&&V.transparent===!1?Ot(Ha):Ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Fe=V.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),W(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function fn(V){z!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),z=V)}function Jt(V){V!==VM?(Ee(r.CULL_FACE),V!==q&&(V===av?r.cullFace(r.BACK):V===kM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),q=V}function Un(V){V!==se&&(F&&r.lineWidth(V),se=V)}function W(V,Te,pe){V?(Ee(r.POLYGON_OFFSET_FILL),(ce!==Te||X!==pe)&&(ce=Te,X=pe,u.getReversed()&&(Te=-Te),r.polygonOffset(Te,pe))):He(r.POLYGON_OFFSET_FILL)}function rn(V){V?Ee(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function _t(V){V===void 0&&(V=r.TEXTURE0+U-1),xe!==V&&(r.activeTexture(V),xe=V)}function kt(V,Te,pe){pe===void 0&&(xe===null?pe=r.TEXTURE0+U-1:pe=xe);let Fe=P[pe];Fe===void 0&&(Fe={type:void 0,texture:void 0},P[pe]=Fe),(Fe.type!==V||Fe.texture!==Te)&&(xe!==pe&&(r.activeTexture(pe),xe=pe),r.bindTexture(V,Te||Se[V]),Fe.type=V,Fe.texture=Te)}function Re(){const V=P[xe];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function tn(){try{r.compressedTexImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function E(){try{r.texSubImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function Q(){try{r.texSubImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function ge(){try{r.compressedTexSubImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function Ce(){try{r.texStorage2D(...arguments)}catch(V){et("WebGLState:",V)}}function Ue(){try{r.texStorage3D(...arguments)}catch(V){et("WebGLState:",V)}}function ue(){try{r.texImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function fe(){try{r.texImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function Oe(V){return g[V]!==void 0?g[V]:r.getParameter(V)}function Pe(V,Te){g[V]!==Te&&(r.pixelStorei(V,Te),g[V]=Te)}function Ne(V){Ae.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function we(V){De.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),De.copy(V))}function it(V,Te){let pe=d.get(Te);pe===void 0&&(pe=new WeakMap,d.set(Te,pe));let Fe=pe.get(V);Fe===void 0&&(Fe=r.getUniformBlockIndex(Te,V.name),pe.set(V,Fe))}function at(V,Te){const Fe=d.get(Te).get(V);p.get(Te)!==Fe&&(r.uniformBlockBinding(Te,Fe,V.__bindingPointIndex),p.set(Te,Fe))}function xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},g={},xe=null,P={},v={},x=new WeakMap,b=[],A=null,M=!1,S=null,w=null,N=null,L=null,G=null,O=null,B=null,T=new ot(0,0,0),I=0,K=!1,z=null,q=null,se=null,ce=null,X=null,Ae.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ee,disable:He,bindFramebuffer:tt,drawBuffers:Je,useProgram:Yt,setBlending:Ot,setMaterial:ft,setFlipSided:fn,setCullFace:Jt,setLineWidth:Un,setPolygonOffset:W,setScissorTest:rn,activeTexture:_t,bindTexture:kt,unbindTexture:Re,compressedTexImage2D:tn,compressedTexImage3D:D,texImage2D:ue,texImage3D:fe,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:ge,compressedTexSubImage3D:be,scissor:Ne,viewport:we,reset:xt}}function qC(r,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new st,_=new WeakMap,g=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,E){return b?new OffscreenCanvas(D,E):Hl("canvas")}function M(D,E,Q){let ge=1;const be=tn(D);if((be.width>Q||be.height>Q)&&(ge=Q/Math.max(be.width,be.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ce=Math.floor(ge*be.width),Ue=Math.floor(ge*be.height);v===void 0&&(v=A(Ce,Ue));const ue=E?A(Ce,Ue):v;return ue.width=Ce,ue.height=Ue,ue.getContext("2d").drawImage(D,0,0,Ce,Ue),Ye("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Ce+"x"+Ue+")."),ue}else return"data"in D&&Ye("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function S(D){return D.generateMipmaps}function w(D){r.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,E,Q,ge,be,Ce=!1){if(D!==null){if(r[D]!==void 0)return r[D];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;ge&&(Ue=e.get("EXT_texture_norm16"),Ue||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===r.RED&&(Q===r.FLOAT&&(ue=r.R32F),Q===r.HALF_FLOAT&&(ue=r.R16F),Q===r.UNSIGNED_BYTE&&(ue=r.R8),Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.R16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.R8UI),Q===r.UNSIGNED_SHORT&&(ue=r.R16UI),Q===r.UNSIGNED_INT&&(ue=r.R32UI),Q===r.BYTE&&(ue=r.R8I),Q===r.SHORT&&(ue=r.R16I),Q===r.INT&&(ue=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(ue=r.RG32F),Q===r.HALF_FLOAT&&(ue=r.RG16F),Q===r.UNSIGNED_BYTE&&(ue=r.RG8),Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RG16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RG16UI),Q===r.UNSIGNED_INT&&(ue=r.RG32UI),Q===r.BYTE&&(ue=r.RG8I),Q===r.SHORT&&(ue=r.RG16I),Q===r.INT&&(ue=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),Q===r.UNSIGNED_INT&&(ue=r.RGB32UI),Q===r.BYTE&&(ue=r.RGB8I),Q===r.SHORT&&(ue=r.RGB16I),Q===r.INT&&(ue=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ue=r.RGBA32UI),Q===r.BYTE&&(ue=r.RGBA8I),Q===r.SHORT&&(ue=r.RGBA16I),Q===r.INT&&(ue=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGB16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),E===r.RGBA){const fe=Ce?Bu:bt.getTransfer(be);Q===r.FLOAT&&(ue=r.RGBA32F),Q===r.HALF_FLOAT&&(ue=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ue=fe===Ht?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGBA16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function G(D,E){let Q;return D?E===null||E===ca||E===Il?Q=r.DEPTH24_STENCIL8:E===Ni?Q=r.DEPTH32F_STENCIL8:E===Pl&&(Q=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ca||E===Il?Q=r.DEPTH_COMPONENT24:E===Ni?Q=r.DEPTH_COMPONENT32F:E===Pl&&(Q=r.DEPTH_COMPONENT16),Q}function O(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function B(D){const E=D.target;E.removeEventListener("dispose",B),I(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&g.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),z(E)}function I(D){const E=a.get(D);if(E.__webglInit===void 0)return;const Q=D.source,ge=x.get(Q);if(ge){const be=ge[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&K(D),Object.keys(ge).length===0&&x.delete(Q)}a.remove(D)}function K(D){const E=a.get(D);r.deleteTexture(E.__webglTexture);const Q=D.source,ge=x.get(Q);delete ge[E.__cacheKey],u.memory.textures--}function z(D){const E=a.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),a.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let be=0;be<E.__webglFramebuffer[ge].length;be++)r.deleteFramebuffer(E.__webglFramebuffer[ge][be]);else r.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)r.deleteFramebuffer(E.__webglFramebuffer[ge]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let ge=0,be=Q.length;ge<be;ge++){const Ce=a.get(Q[ge]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),u.memory.textures--),a.remove(Q[ge])}a.remove(D)}let q=0;function se(){q=0}function ce(){return q}function X(D){q=D}function U(){const D=q;return D>=o.maxTextures&&Ye("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),q+=1,D}function F(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function oe(D,E){const Q=a.get(D);if(D.isVideoTexture&&kt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const ge=D.image;if(ge===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,D,E);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function he(D,E){const Q=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){He(Q,D,E);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function xe(D,E){const Q=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){He(Q,D,E);return}n.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function P(D,E){const Q=a.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){tt(Q,D,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const J={[uo]:r.REPEAT,[aa]:r.CLAMP_TO_EDGE,[Ou]:r.MIRRORED_REPEAT},ye={[Tn]:r.NEAREST,[Vx]:r.NEAREST_MIPMAP_NEAREST,[Dl]:r.NEAREST_MIPMAP_LINEAR,[An]:r.LINEAR,[Cu]:r.LINEAR_MIPMAP_NEAREST,[Fa]:r.LINEAR_MIPMAP_LINEAR},Ae={[gb]:r.NEVER,[Sb]:r.ALWAYS,[_b]:r.LESS,[Zp]:r.LEQUAL,[vb]:r.EQUAL,[Qp]:r.GEQUAL,[xb]:r.GREATER,[yb]:r.NOTEQUAL};function De(D,E){if(E.type===Ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===An||E.magFilter===Cu||E.magFilter===Dl||E.magFilter===Fa||E.minFilter===An||E.minFilter===Cu||E.minFilter===Dl||E.minFilter===Fa)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,J[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ye[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Dl&&E.minFilter!==Fa||E.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function re(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",B));const ge=E.source;let be=x.get(ge);be===void 0&&(be={},x.set(ge,be));const Ce=F(E);if(Ce!==D.__cacheKey){be[Ce]===void 0&&(be[Ce]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),be[Ce].usedTimes++;const Ue=be[D.__cacheKey];Ue!==void 0&&(be[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&K(E)),D.__cacheKey=Ce,D.__webglTexture=be[Ce].texture}return Q}function Se(D,E,Q){return Math.floor(Math.floor(D/Q)/E)}function Ee(D,E,Q,ge){const Ce=D.updateRanges;if(Ce.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,ge,E.data);else{Ce.sort((Pe,Ne)=>Pe.start-Ne.start);let Ue=0;for(let Pe=1;Pe<Ce.length;Pe++){const Ne=Ce[Ue],we=Ce[Pe],it=Ne.start+Ne.count,at=Se(we.start,E.width,4),xt=Se(Ne.start,E.width,4);we.start<=it+1&&at===xt&&Se(we.start+we.count-1,E.width,4)===at?Ne.count=Math.max(Ne.count,we.start+we.count-Ne.start):(++Ue,Ce[Ue]=we)}Ce.length=Ue+1;const ue=n.getParameter(r.UNPACK_ROW_LENGTH),fe=n.getParameter(r.UNPACK_SKIP_PIXELS),Oe=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,Ne=Ce.length;Pe<Ne;Pe++){const we=Ce[Pe],it=Math.floor(we.start/4),at=Math.ceil(we.count/4),xt=it%E.width,V=Math.floor(it/E.width),Te=at,pe=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,xt),n.pixelStorei(r.UNPACK_SKIP_ROWS,V),n.texSubImage2D(r.TEXTURE_2D,0,xt,V,Te,pe,Q,ge,E.data)}D.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ue),n.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),n.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function He(D,E,Q){let ge=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=r.TEXTURE_3D);const be=re(D,E),Ce=E.source;n.bindTexture(ge,D.__webglTexture,r.TEXTURE0+Q);const Ue=a.get(Ce);if(Ce.version!==Ue.__version||be===!0){if(n.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pe=bt.getPrimaries(bt.workingColorSpace),Fe=E.colorSpace===Cs?null:bt.getPrimaries(E.colorSpace),Le=E.colorSpace===Cs||pe===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let fe=M(E.image,!1,o.maxTextureSize);fe=Re(E,fe);const Oe=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let Ne=L(E.internalFormat,Oe,Pe,E.normalized,E.colorSpace,E.isVideoTexture);De(ge,E);let we;const it=E.mipmaps,at=E.isVideoTexture!==!0,xt=Ue.__version===void 0||be===!0,V=Ce.dataReady,Te=O(E,fe);if(E.isDepthTexture)Ne=G(E.format===ar,E.type),xt&&(at?n.texStorage2D(r.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(r.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Oe,Pe,null));else if(E.isDataTexture)if(it.length>0){at&&xt&&n.texStorage2D(r.TEXTURE_2D,Te,Ne,it[0].width,it[0].height);for(let pe=0,Fe=it.length;pe<Fe;pe++)we=it[pe],at?V&&n.texSubImage2D(r.TEXTURE_2D,pe,0,0,we.width,we.height,Oe,Pe,we.data):n.texImage2D(r.TEXTURE_2D,pe,Ne,we.width,we.height,0,Oe,Pe,we.data);E.generateMipmaps=!1}else at?(xt&&n.texStorage2D(r.TEXTURE_2D,Te,Ne,fe.width,fe.height),V&&Ee(E,fe,Oe,Pe)):n.texImage2D(r.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Oe,Pe,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&xt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ne,it[0].width,it[0].height,fe.depth);for(let pe=0,Fe=it.length;pe<Fe;pe++)if(we=it[pe],E.format!==Li)if(Oe!==null)if(at){if(V)if(E.layerUpdates.size>0){const Le=tx(we.width,we.height,E.format,E.type);for(const Me of E.layerUpdates){const qe=we.data.subarray(Me*Le/we.data.BYTES_PER_ELEMENT,(Me+1)*Le/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Me,we.width,we.height,1,Oe,qe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,fe.depth,Oe,we.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Ne,we.width,we.height,fe.depth,0,we.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?V&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,fe.depth,Oe,Pe,we.data):n.texImage3D(r.TEXTURE_2D_ARRAY,pe,Ne,we.width,we.height,fe.depth,0,Oe,Pe,we.data)}else{at&&xt&&n.texStorage2D(r.TEXTURE_2D,Te,Ne,it[0].width,it[0].height);for(let pe=0,Fe=it.length;pe<Fe;pe++)we=it[pe],E.format!==Li?Oe!==null?at?V&&n.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,we.width,we.height,Oe,we.data):n.compressedTexImage2D(r.TEXTURE_2D,pe,Ne,we.width,we.height,0,we.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?V&&n.texSubImage2D(r.TEXTURE_2D,pe,0,0,we.width,we.height,Oe,Pe,we.data):n.texImage2D(r.TEXTURE_2D,pe,Ne,we.width,we.height,0,Oe,Pe,we.data)}else if(E.isDataArrayTexture)if(at){if(xt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ne,fe.width,fe.height,fe.depth),V)if(E.layerUpdates.size>0){const pe=tx(fe.width,fe.height,E.format,E.type);for(const Fe of E.layerUpdates){const Le=fe.data.subarray(Fe*pe/fe.data.BYTES_PER_ELEMENT,(Fe+1)*pe/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,fe.width,fe.height,1,Oe,Pe,Le)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(E.isData3DTexture)at?(xt&&n.texStorage3D(r.TEXTURE_3D,Te,Ne,fe.width,fe.height,fe.depth),V&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)):n.texImage3D(r.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(E.isFramebufferTexture){if(xt)if(at)n.texStorage2D(r.TEXTURE_2D,Te,Ne,fe.width,fe.height);else{let pe=fe.width,Fe=fe.height;for(let Le=0;Le<Te;Le++)n.texImage2D(r.TEXTURE_2D,Le,Ne,pe,Fe,0,Oe,Pe,null),pe>>=1,Fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),fe.parentNode!==pe){pe.appendChild(fe),g.add(E),pe.onpaint=nt=>{const on=nt.changedElements;for(const Nt of g)on.includes(Nt.image)&&(Nt.needsUpdate=!0)},pe.requestPaint();return}const Fe=0,Le=r.RGBA,Me=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Fe,Le,Me,qe,fe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&xt){const pe=tn(it[0]);n.texStorage2D(r.TEXTURE_2D,Te,Ne,pe.width,pe.height)}for(let pe=0,Fe=it.length;pe<Fe;pe++)we=it[pe],at?V&&n.texSubImage2D(r.TEXTURE_2D,pe,0,0,Oe,Pe,we):n.texImage2D(r.TEXTURE_2D,pe,Ne,Oe,Pe,we);E.generateMipmaps=!1}else if(at){if(xt){const pe=tn(fe);n.texStorage2D(r.TEXTURE_2D,Te,Ne,pe.width,pe.height)}V&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,fe)}else n.texImage2D(r.TEXTURE_2D,0,Ne,Oe,Pe,fe);S(E)&&w(ge),Ue.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function tt(D,E,Q){if(E.image.length!==6)return;const ge=re(D,E),be=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const Ce=a.get(be);if(be.version!==Ce.__version||ge===!0){n.activeTexture(r.TEXTURE0+Q);const Ue=bt.getPrimaries(bt.workingColorSpace),ue=E.colorSpace===Cs?null:bt.getPrimaries(E.colorSpace),fe=E.colorSpace===Cs||Ue===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?Ne[Me]=M(E.image[Me],!0,o.maxCubemapSize):Ne[Me]=Pe?E.image[Me].image:E.image[Me],Ne[Me]=Re(E,Ne[Me]);const we=Ne[0],it=c.convert(E.format,E.colorSpace),at=c.convert(E.type),xt=L(E.internalFormat,it,at,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Te=Ce.__version===void 0||ge===!0,pe=be.dataReady;let Fe=O(E,we);De(r.TEXTURE_CUBE_MAP,E);let Le;if(Oe){V&&Te&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,xt,we.width,we.height);for(let Me=0;Me<6;Me++){Le=Ne[Me].mipmaps;for(let qe=0;qe<Le.length;qe++){const nt=Le[qe];E.format!==Li?it!==null?V?pe&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,nt.width,nt.height,it,nt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,xt,nt.width,nt.height,0,nt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,nt.width,nt.height,it,at,nt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,xt,nt.width,nt.height,0,it,at,nt.data)}}}else{if(Le=E.mipmaps,V&&Te){Le.length>0&&Fe++;const Me=tn(Ne[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,xt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){V?pe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,it,at,Ne[Me].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,xt,Ne[Me].width,Ne[Me].height,0,it,at,Ne[Me].data);for(let qe=0;qe<Le.length;qe++){const on=Le[qe].image[Me].image;V?pe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,on.width,on.height,it,at,on.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,xt,on.width,on.height,0,it,at,on.data)}}else{V?pe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,it,at,Ne[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,xt,it,at,Ne[Me]);for(let qe=0;qe<Le.length;qe++){const nt=Le[qe];V?pe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,it,at,nt.image[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,xt,it,at,nt.image[Me])}}}S(E)&&w(r.TEXTURE_CUBE_MAP),Ce.__version=be.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Je(D,E,Q,ge,be,Ce){const Ue=c.convert(Q.format,Q.colorSpace),ue=c.convert(Q.type),fe=L(Q.internalFormat,Ue,ue,Q.normalized,Q.colorSpace),Oe=a.get(E),Pe=a.get(Q);if(Pe.__renderTarget=E,!Oe.__hasExternalTextures){const Ne=Math.max(1,E.width>>Ce),we=Math.max(1,E.height>>Ce);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?n.texImage3D(be,Ce,fe,Ne,we,E.depth,0,Ue,ue,null):n.texImage2D(be,Ce,fe,Ne,we,0,Ue,ue,null)}n.bindFramebuffer(r.FRAMEBUFFER,D),_t(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,be,Pe.__webglTexture,0,rn(E)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,be,Pe.__webglTexture,Ce),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(D,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const ge=E.depthTexture,be=ge&&ge.isDepthTexture?ge.type:null,Ce=G(E.stencilBuffer,be),Ue=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rn(E),Ce,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,rn(E),Ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,D)}else{const ge=E.textures;for(let be=0;be<ge.length;be++){const Ce=ge[be],Ue=c.convert(Ce.format,Ce.colorSpace),ue=c.convert(Ce.type),fe=L(Ce.internalFormat,Ue,ue,Ce.normalized,Ce.colorSpace);_t(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rn(E),fe,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,rn(E),fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,fe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(D,E,Q){const ge=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=a.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),De(r.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=c.convert(E.depthTexture.format),Pe=c.convert(E.depthTexture.type);let Ne;E.depthTexture.format===Xa?Ne=r.DEPTH_COMPONENT24:E.depthTexture.format===ar&&(Ne=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ne,E.width,E.height,0,Oe,Pe,null)}}else oe(E.depthTexture,0);const Ce=be.__webglTexture,Ue=rn(E),ue=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,fe=E.depthTexture.format===ar?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xa)_t(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ue,Ce,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ue,Ce,0);else if(E.depthTexture.format===ar)_t(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ue,Ce,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ue,Ce,0);else throw new Error("Unknown depthTexture format")}function Et(D){const E=a.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ge=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",be)};ge.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=ge}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let ge=0;ge<6;ge++)mt(E.__webglFramebuffer[ge],D,ge);else{const ge=D.texture.mipmaps;ge&&ge.length>0?mt(E.__webglFramebuffer[0],D,0):mt(E.__webglFramebuffer,D,0)}else if(Q){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=r.createRenderbuffer(),Yt(E.__webglDepthbuffer[ge],D,!1);else{const be=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,Ce)}}else{const ge=D.texture.mipmaps;if(ge&&ge.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Yt(E.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,Ce)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(D,E,Q){const ge=a.get(D);E!==void 0&&Je(ge.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Et(D)}function ft(D){const E=D.texture,Q=a.get(D),ge=a.get(E);D.addEventListener("dispose",T);const be=D.textures,Ce=D.isWebGLCubeRenderTarget===!0,Ue=be.length>1;if(Ue||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=E.version,u.memory.textures++),Ce){Q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ue]=[];for(let fe=0;fe<E.mipmaps.length;fe++)Q.__webglFramebuffer[ue][fe]=r.createFramebuffer()}else Q.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)Q.__webglFramebuffer[ue]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let ue=0,fe=be.length;ue<fe;ue++){const Oe=a.get(be[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),u.memory.textures++)}if(D.samples>0&&_t(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ue=0;ue<be.length;ue++){const fe=be[ue];Q.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue]);const Oe=c.convert(fe.format,fe.colorSpace),Pe=c.convert(fe.type),Ne=L(fe.internalFormat,Oe,Pe,fe.normalized,fe.colorSpace,D.isXRRenderTarget===!0),we=rn(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,Ne,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(Q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){n.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),De(r.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Je(Q.__webglFramebuffer[ue][fe],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Je(Q.__webglFramebuffer[ue],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(E)&&w(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ue=0,fe=be.length;ue<fe;ue++){const Oe=be[ue],Pe=a.get(Oe);let Ne=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Pe.__webglTexture),De(Ne,Oe),Je(Q.__webglFramebuffer,D,Oe,r.COLOR_ATTACHMENT0+ue,Ne,0),S(Oe)&&w(Ne)}n.unbindTexture()}else{let ue=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ue,ge.__webglTexture),De(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Je(Q.__webglFramebuffer[fe],D,E,r.COLOR_ATTACHMENT0,ue,fe);else Je(Q.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,ue,0);S(E)&&w(ue),n.unbindTexture()}D.depthBuffer&&Et(D)}function fn(D){const E=D.textures;for(let Q=0,ge=E.length;Q<ge;Q++){const be=E[Q];if(S(be)){const Ce=N(D),Ue=a.get(be).__webglTexture;n.bindTexture(Ce,Ue),w(Ce),n.unbindTexture()}}}const Jt=[],Un=[];function W(D){if(D.samples>0){if(_t(D)===!1){const E=D.textures,Q=D.width,ge=D.height;let be=r.COLOR_BUFFER_BIT;const Ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=a.get(D),ue=E.length>1;if(ue)for(let Oe=0;Oe<E.length;Oe++)n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const fe=D.texture.mipmaps;fe&&fe.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const Pe=a.get(E[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,Q,ge,0,0,Q,ge,be,r.NEAREST),p===!0&&(Jt.length=0,Un.length=0,Jt.push(r.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Jt.push(Ce),Un.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Un)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Oe=0;Oe<E.length;Oe++){n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const Pe=a.get(E[Oe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function rn(D){return Math.min(o.maxSamples,D.samples)}function _t(D){const E=a.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(D){const E=u.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Re(D,E){const Q=D.colorSpace,ge=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==_i&&Q!==Cs&&(bt.getTransfer(Q)===Ht?(ge!==Li||be!==gi)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",Q)),E}function tn(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=U,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=X,this.setTexture2D=oe,this.setTexture2DArray=he,this.setTexture3D=xe,this.setTextureCube=P,this.rebindTextures=Ot,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=fn,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jC(r,e){function n(a,o=Cs){let c;const u=bt.getTransfer(o);if(a===gi)return r.UNSIGNED_BYTE;if(a===Xp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Wp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Wx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===qx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===kx)return r.BYTE;if(a===Xx)return r.SHORT;if(a===Pl)return r.UNSIGNED_SHORT;if(a===kp)return r.INT;if(a===ca)return r.UNSIGNED_INT;if(a===Ni)return r.FLOAT;if(a===ka)return r.HALF_FLOAT;if(a===jx)return r.ALPHA;if(a===Yx)return r.RGB;if(a===Li)return r.RGBA;if(a===Xa)return r.DEPTH_COMPONENT;if(a===ar)return r.DEPTH_STENCIL;if(a===qp)return r.RED;if(a===jp)return r.RED_INTEGER;if(a===lr)return r.RG;if(a===Yp)return r.RG_INTEGER;if(a===Kp)return r.RGBA_INTEGER;if(a===wu||a===Du||a===Nu||a===Lu)if(u===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===wu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===wu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Lu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===$d||a===ep||a===tp||a===np)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===tp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===np)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ip||a===ap||a===sp||a===rp||a===op||a===Pu||a===lp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ip||a===ap)return u===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===sp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===rp)return c.COMPRESSED_R11_EAC;if(a===op)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Pu)return c.COMPRESSED_RG11_EAC;if(a===lp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===yp||a===Sp||a===Mp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===cp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===up)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===fp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===dp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===gp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===_p)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Sp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===bp||a===Ep||a===Tp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===bp)return u===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ap||a===Rp||a===Iu||a===Cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ap)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Rp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Il?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const YC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new ry(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ua({vertexShader:YC,fragmentShader:KC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new ku(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QC extends Ns{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,_=null,g=null,v=null,x=null,b=null;const A=typeof XRWebGLBinding<"u",M=new ZC,S={},w=n.getContextAttributes();let N=null,L=null;const G=[],O=[],B=new st;let T=null;const I=new Yn;I.viewport=new Qt;const K=new Yn;K.viewport=new Qt;const z=[I,K],q=new ZE;let se=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Se=G[re];return Se===void 0&&(Se=new hd,G[re]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(re){let Se=G[re];return Se===void 0&&(Se=new hd,G[re]=Se),Se.getGripSpace()},this.getHand=function(re){let Se=G[re];return Se===void 0&&(Se=new hd,G[re]=Se),Se.getHandSpace()};function X(re){const Se=O.indexOf(re.inputSource);if(Se===-1)return;const Ee=G[Se];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,d||u),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function U(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",U),o.removeEventListener("inputsourceschange",F);for(let re=0;re<G.length;re++){const Se=O[re];Se!==null&&(O[re]=null,G[re].disconnect(Se))}se=null,ce=null,M.reset();for(const re in S)delete S[re];e.setRenderTarget(N),x=null,v=null,g=null,o=null,L=null,De.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,a.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,a.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",U),o.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,He=null,tt=null;w.depth&&(tt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=w.stencil?ar:Xa,He=w.stencil?Il:ca);const Je={colorFormat:n.RGBA8,depthFormat:tt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Je),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new oa(v.textureWidth,v.textureHeight,{format:Li,type:gi,depthTexture:new ho(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new oa(x.framebufferWidth,x.framebufferHeight,{format:Li,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),De.setContext(o),De.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(re){for(let Se=0;Se<re.removed.length;Se++){const Ee=re.removed[Se],He=O.indexOf(Ee);He>=0&&(O[He]=null,G[He].disconnect(Ee))}for(let Se=0;Se<re.added.length;Se++){const Ee=re.added[Se];let He=O.indexOf(Ee);if(He===-1){for(let Je=0;Je<G.length;Je++)if(Je>=O.length){O.push(Ee),He=Je;break}else if(O[Je]===null){O[Je]=Ee,He=Je;break}if(He===-1)break}const tt=G[He];tt&&tt.connect(Ee)}}const oe=new Y,he=new Y;function xe(re,Se,Ee){oe.setFromMatrixPosition(Se.matrixWorld),he.setFromMatrixPosition(Ee.matrixWorld);const He=oe.distanceTo(he),tt=Se.projectionMatrix.elements,Je=Ee.projectionMatrix.elements,Yt=tt[14]/(tt[10]-1),mt=tt[14]/(tt[10]+1),Et=(tt[9]+1)/tt[5],Ot=(tt[9]-1)/tt[5],ft=(tt[8]-1)/tt[0],fn=(Je[8]+1)/Je[0],Jt=Yt*ft,Un=Yt*fn,W=He/(-ft+fn),rn=W*-ft;if(Se.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(rn),re.translateZ(W),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),tt[10]===-1)re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const _t=Yt+W,kt=mt+W,Re=Jt-rn,tn=Un+(He-rn),D=Et*mt/kt*_t,E=Ot*mt/kt*_t;re.projectionMatrix.makePerspective(Re,tn,D,E,_t,kt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function P(re,Se){Se===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Se.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Se=re.near,Ee=re.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),q.near=K.near=I.near=Se,q.far=K.far=I.far=Ee,(se!==q.near||ce!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),se=q.near,ce=q.far),q.layers.mask=re.layers.mask|6,I.layers.mask=q.layers.mask&-5,K.layers.mask=q.layers.mask&-3;const He=re.parent,tt=q.cameras;P(q,He);for(let Je=0;Je<tt.length;Je++)P(tt[Je],He);tt.length===2?xe(q,I,K):q.projectionMatrix.copy(I.projectionMatrix),J(re,q,He)};function J(re,Se,Ee){Ee===null?re.matrix.copy(Se.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(Se.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=fo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(re){p=re,v!==null&&(v.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(re){return S[re]};let ye=null;function Ae(re,Se){if(_=Se.getViewerPose(d||u),b=Se,_!==null){const Ee=_.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let He=!1;Ee.length!==q.cameras.length&&(q.cameras.length=0,He=!0);for(let mt=0;mt<Ee.length;mt++){const Et=Ee[mt];let Ot=null;if(x!==null)Ot=x.getViewport(Et);else{const fn=g.getViewSubImage(v,Et);Ot=fn.viewport,mt===0&&(e.setRenderTargetTextures(L,fn.colorTexture,fn.depthStencilTexture),e.setRenderTarget(L))}let ft=z[mt];ft===void 0&&(ft=new Yn,ft.layers.enable(mt),ft.viewport=new Qt,z[mt]=ft),ft.matrix.fromArray(Et.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Et.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),mt===0&&(q.matrix.copy(ft.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),He===!0&&q.cameras.push(ft)}const tt=o.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){g=a.getBinding();const mt=g.getDepthInformation(Ee[0]);mt&&mt.isValid&&mt.texture&&M.init(mt,o.renderState)}if(tt&&tt.includes("camera-access")&&A){e.state.unbindTexture(),g=a.getBinding();for(let mt=0;mt<Ee.length;mt++){const Et=Ee[mt].camera;if(Et){let Ot=S[Et];Ot||(Ot=new ry,S[Et]=Ot);const ft=g.getCameraImage(Et);Ot.sourceTexture=ft}}}}for(let Ee=0;Ee<G.length;Ee++){const He=O[Ee],tt=G[Ee];He!==null&&tt!==void 0&&tt.update(He,Se,d||u)}ye&&ye(re,Se),Se.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Se}),b=null}const De=new hy;De.setAnimationLoop(Ae),this.setAnimationLoop=function(re){ye=re},this.dispose=function(){}}}const JC=new pt,xy=new lt;xy.set(-1,0,0,0,1,0,0,0,1);function $C(r,e){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,oy(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function o(M,S,w,N,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),g(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),v(M,S),S.isMeshPhysicalMaterial&&x(M,S,L)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),A(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(u(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?p(M,S,w,N):S.isSpriteMaterial?d(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ii&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ii&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=e.get(S),N=w.envMap,L=w.envMapRotation;N&&(M.envMap.value=N,M.envMapRotation.value.setFromMatrix4(JC.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(xy),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function u(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,w,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=N*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function A(M,S){const w=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function ew(r,e,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,N){const L=N.program;a.uniformBlockBinding(w,L)}function d(w,N){let L=o[w.id];L===void 0&&(b(w),L=_(w),o[w.id]=L,w.addEventListener("dispose",M));const G=N.program;a.updateUBOMapping(w,G);const O=e.render.frame;c[w.id]!==O&&(v(w),c[w.id]=O)}function _(w){const N=g();w.__bindingPointIndex=N;const L=r.createBuffer(),G=w.__size,O=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,G,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,L),L}function g(){for(let w=0;w<h;w++)if(u.indexOf(w)===-1)return u.push(w),w;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const N=o[w.id],L=w.uniforms,G=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let O=0,B=L.length;O<B;O++){const T=Array.isArray(L[O])?L[O]:[L[O]];for(let I=0,K=T.length;I<K;I++){const z=T[I];if(x(z,O,I,G)===!0){const q=z.__offset,se=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let X=0;X<se.length;X++){const U=se[X],F=A(U);typeof U=="number"||typeof U=="boolean"?(z.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,q+ce,z.__data)):U.isMatrix3?(z.__data[0]=U.elements[0],z.__data[1]=U.elements[1],z.__data[2]=U.elements[2],z.__data[3]=0,z.__data[4]=U.elements[3],z.__data[5]=U.elements[4],z.__data[6]=U.elements[5],z.__data[7]=0,z.__data[8]=U.elements[6],z.__data[9]=U.elements[7],z.__data[10]=U.elements[8],z.__data[11]=0):ArrayBuffer.isView(U)?z.__data.set(new U.constructor(U.buffer,U.byteOffset,z.__data.length)):(U.toArray(z.__data,ce),ce+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(w,N,L,G){const O=w.value,B=N+"_"+L;if(G[B]===void 0)return typeof O=="number"||typeof O=="boolean"?G[B]=O:ArrayBuffer.isView(O)?G[B]=O.slice():G[B]=O.clone(),!0;{const T=G[B];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return G[B]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(T.equals(O)===!1)return T.copy(O),!0}}return!1}function b(w){const N=w.uniforms;let L=0;const G=16;for(let B=0,T=N.length;B<T;B++){const I=Array.isArray(N[B])?N[B]:[N[B]];for(let K=0,z=I.length;K<z;K++){const q=I[K],se=Array.isArray(q.value)?q.value:[q.value];for(let ce=0,X=se.length;ce<X;ce++){const U=se[ce],F=A(U),oe=L%G,he=oe%F.boundary,xe=oe+he;L+=he,xe!==0&&G-xe<F.storage&&(L+=G-xe),q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=L,L+=F.storage}}}const O=L%G;return O>0&&(L+=G-O),w.__size=L,w.__cache={},this}function A(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",w),N}function M(w){const N=w.target;N.removeEventListener("dispose",M);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function S(){for(const w in o)r.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:p,update:d,dispose:S}}const tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ta=null;function nw(){return ta===null&&(ta=new nm(tw,16,16,lr,ka),ta.name="DFG_LUT",ta.minFilter=An,ta.magFilter=An,ta.wrapS=aa,ta.wrapT=aa,ta.generateMipmaps=!1,ta.needsUpdate=!0),ta}class iw{constructor(e={}){const{canvas:n=Eb(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const A=x,M=new Set([Kp,Yp,jp]),S=new Set([gi,ca,Pl,Il,Xp,Wp]),w=new Uint32Array(4),N=new Int32Array(4),L=new Y;let G=null,O=null;const B=[],T=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let z=!1,q=null;this._outputColorSpace=Nn;let se=0,ce=0,X=null,U=-1,F=null;const oe=new Qt,he=new Qt;let xe=null;const P=new ot(0);let J=0,ye=n.width,Ae=n.height,De=1,re=null,Se=null;const Ee=new Qt(0,0,ye,Ae),He=new Qt(0,0,ye,Ae);let tt=!1;const Je=new am;let Yt=!1,mt=!1;const Et=new pt,Ot=new Y,ft=new Qt,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Un(){return X===null?De:1}let W=a;function rn(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vp}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",nt,!1),W===null){const j="webgl2";if(W=rn(j,R),W===null)throw rn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw et("WebGLRenderer: "+R.message),R}let _t,kt,Re,tn,D,E,Q,ge,be,Ce,Ue,ue,fe,Oe,Pe,Ne,we,it,at,xt,V,Te,pe;function Fe(){_t=new nR(W),_t.init(),V=new jC(W,_t),kt=new Y1(W,_t,e,V),Re=new WC(W,_t),kt.reversedDepthBuffer&&v&&Re.buffers.depth.setReversed(!0),tn=new sR(W),D=new NC,E=new qC(W,_t,Re,D,kt,V,tn),Q=new tR(K),ge=new cT(W),Te=new q1(W,ge),be=new iR(W,ge,tn,Te),Ce=new oR(W,be,ge,Te,tn),it=new rR(W,kt,E),Pe=new K1(D),Ue=new DC(K,Q,_t,kt,Te,Pe),ue=new $C(K,D),fe=new UC,Oe=new zC(_t),we=new W1(K,Q,Re,Ce,b,p),Ne=new XC(K,Ce,kt),pe=new ew(W,tn,kt,Re),at=new j1(W,_t,tn),xt=new aR(W,_t,tn),tn.programs=Ue.programs,K.capabilities=kt,K.extensions=_t,K.properties=D,K.renderLists=fe,K.shadowMap=Ne,K.state=Re,K.info=tn}Fe(),A!==gi&&(I=new cR(A,n.width,n.height,o,c));const Le=new QC(K,W);this.xr=Le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(R){R!==void 0&&(De=R,this.setSize(ye,Ae,!1))},this.getSize=function(R){return R.set(ye,Ae)},this.setSize=function(R,j,ie=!0){if(Le.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=R,Ae=j,n.width=Math.floor(R*De),n.height=Math.floor(j*De),ie===!0&&(n.style.width=R+"px",n.style.height=j+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ye*De,Ae*De).floor()},this.setDrawingBufferSize=function(R,j,ie){ye=R,Ae=j,De=ie,n.width=Math.floor(R*ie),n.height=Math.floor(j*ie),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(A===gi){et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){Ye("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(oe)},this.getViewport=function(R){return R.copy(Ee)},this.setViewport=function(R,j,ie,te){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,j,ie,te),Re.viewport(oe.copy(Ee).multiplyScalar(De).round())},this.getScissor=function(R){return R.copy(He)},this.setScissor=function(R,j,ie,te){R.isVector4?He.set(R.x,R.y,R.z,R.w):He.set(R,j,ie,te),Re.scissor(he.copy(He).multiplyScalar(De).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(R){Re.setScissorTest(tt=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ie=!0){let te=0;if(R){let ne=!1;if(X!==null){const Be=X.texture.format;ne=M.has(Be)}if(ne){const Be=X.texture.type,Ve=S.has(Be),Ie=we.getClearColor(),Xe=we.getClearAlpha(),ke=Ie.r,Ze=Ie.g,ct=Ie.b;Ve?(w[0]=ke,w[1]=Ze,w[2]=ct,w[3]=Xe,W.clearBufferuiv(W.COLOR,0,w)):(N[0]=ke,N[1]=Ze,N[2]=ct,N[3]=Xe,W.clearBufferiv(W.COLOR,0,N))}else te|=W.COLOR_BUFFER_BIT}j&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),we.dispose(),fe.dispose(),Oe.dispose(),D.dispose(),Q.dispose(),Ce.dispose(),Te.dispose(),pe.dispose(),Ue.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",To),Le.removeEventListener("sessionend",Ao),Hn.stop()};function Me(R){R.preventDefault(),Fu("WebGLRenderer: Context Lost."),z=!0}function qe(){Fu("WebGLRenderer: Context Restored."),z=!1;const R=tn.autoReset,j=Ne.enabled,ie=Ne.autoUpdate,te=Ne.needsUpdate,ne=Ne.type;Fe(),tn.autoReset=R,Ne.enabled=j,Ne.autoUpdate=ie,Ne.needsUpdate=te,Ne.type=ne}function nt(R){et("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function on(R){const j=R.target;j.removeEventListener("dispose",on),Nt(j)}function Nt(R){xi(R),D.remove(R)}function xi(R){const j=D.get(R).programs;j!==void 0&&(j.forEach(function(ie){Ue.releaseProgram(ie)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ie,te,ne,Be){j===null&&(j=fn);const Ve=ne.isMesh&&ne.matrixWorld.determinant()<0,Ie=ja(R,j,ie,te,ne);Re.setMaterial(te,Ve);let Xe=ie.index,ke=1;if(te.wireframe===!0){if(Xe=be.getWireframeAttribute(ie),Xe===void 0)return;ke=2}const Ze=ie.drawRange,ct=ie.attributes.position;let Ke=Ze.start*ke,Ct=(Ze.start+Ze.count)*ke;Be!==null&&(Ke=Math.max(Ke,Be.start*ke),Ct=Math.min(Ct,(Be.start+Be.count)*ke)),Xe!==null?(Ke=Math.max(Ke,0),Ct=Math.min(Ct,Xe.count)):ct!=null&&(Ke=Math.max(Ke,0),Ct=Math.min(Ct,ct.count));const nn=Ct-Ke;if(nn<0||nn===1/0)return;Te.setup(ne,te,Ie,ie,Xe);let Kt,Pt=at;if(Xe!==null&&(Kt=ge.get(Xe),Pt=xt,Pt.setIndex(Kt)),ne.isMesh)te.wireframe===!0?(Re.setLineWidth(te.wireframeLinewidth*Un()),Pt.setMode(W.LINES)):Pt.setMode(W.TRIANGLES);else if(ne.isLine){let It=te.linewidth;It===void 0&&(It=1),Re.setLineWidth(It*Un()),ne.isLineSegments?Pt.setMode(W.LINES):ne.isLineLoop?Pt.setMode(W.LINE_LOOP):Pt.setMode(W.LINE_STRIP)}else ne.isPoints?Pt.setMode(W.POINTS):ne.isSprite&&Pt.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const It=ne._multiDrawStarts,Ge=ne._multiDrawCounts,Gn=ne._multiDrawCount,yt=Xe?ge.get(Xe).bytesPerElement:1,Mn=D.get(te).currentProgram.getUniforms();for(let si=0;si<Gn;si++)Mn.setValue(W,"_gl_DrawID",si),Pt.render(It[si]/yt,Ge[si])}else if(ne.isInstancedMesh)Pt.renderInstances(Ke,nn,ne.count);else if(ie.isInstancedBufferGeometry){const It=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ge=Math.min(ie.instanceCount,It);Pt.renderInstances(Ke,nn,Ge)}else Pt.render(Ke,nn)};function ai(R,j,ie){R.transparent===!0&&R.side===Di&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,cr(R,j,ie),R.side=Va,R.needsUpdate=!0,cr(R,j,ie),R.side=Di):cr(R,j,ie)}this.compile=function(R,j,ie=null){ie===null&&(ie=R),O=Oe.get(ie),O.init(j),T.push(O),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),R!==ie&&R.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),O.setupLights();const te=new Set;return R.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Be=ne.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const Ie=Be[Ve];ai(Ie,ie,ne),te.add(Ie)}else ai(Be,ie,ne),te.add(Be)}),O=T.pop(),te},this.compileAsync=function(R,j,ie=null){const te=this.compile(R,j,ie);return new Promise(ne=>{function Be(){if(te.forEach(function(Ve){D.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){ne(R);return}setTimeout(Be,10)}_t.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ls=null;function Eo(R){Ls&&Ls(R)}function To(){Hn.stop()}function Ao(){Hn.start()}const Hn=new hy;Hn.setAnimationLoop(Eo),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(R){Ls=R,Le.setAnimationLoop(R),R===null?Hn.stop():Hn.start()},Le.addEventListener("sessionstart",To),Le.addEventListener("sessionend",Ao),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;q!==null&&q.renderStart(R,j);const ie=Le.enabled===!0&&Le.isPresenting===!0,te=I!==null&&(X===null||ie)&&I.begin(K,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(j),j=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(K,R,j,X),O=Oe.get(R,T.length),O.init(j),O.state.textureUnits=E.getTextureUnits(),T.push(O),Et.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Je.setFromProjectionMatrix(Et,sa,j.reversedDepth),mt=this.localClippingEnabled,Yt=Pe.init(this.clippingPlanes,mt),G=fe.get(R,B.length),G.init(),B.push(G),Le.enabled===!0&&Le.isPresenting===!0){const Ve=K.xr.getDepthSensingMesh();Ve!==null&&hn(Ve,j,-1/0,K.sortObjects)}hn(R,j,0,K.sortObjects),G.finish(),K.sortObjects===!0&&G.sort(re,Se),Jt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Jt&&we.addToRenderList(G,R),this.info.render.frame++,Yt===!0&&Pe.beginShadows();const ne=O.state.shadowsArray;if(Ne.render(ne,R,j),Yt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&I.hasRenderPass())===!1){const Ve=G.opaque,Ie=G.transmissive;if(O.setupLights(),j.isArrayCamera){const Xe=j.cameras;if(Ie.length>0)for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const ct=Xe[ke];pa(Ve,Ie,R,ct)}Jt&&we.render(R);for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const ct=Xe[ke];On(G,R,ct,ct.viewport)}}else Ie.length>0&&pa(Ve,Ie,R,j),Jt&&we.render(R),On(G,R,j)}X!==null&&ce===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),te&&I.end(K),R.isScene===!0&&R.onAfterRender(K,R,j),Te.resetDefaultState(),U=-1,F=null,T.pop(),T.length>0?(O=T[T.length-1],E.setTextureUnits(O.state.textureUnits),Yt===!0&&Pe.setGlobalState(K.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?G=B[B.length-1]:G=null,q!==null&&q.renderEnd()};function hn(R,j,ie,te){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)O.pushLightProbeGrid(R);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){te&&ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Ve=Ce.update(R),Ie=R.material;Ie.visible&&G.push(R,Ve,Ie,ie,ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const Ve=Ce.update(R),Ie=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ft.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ft.copy(Ve.boundingSphere.center)),ft.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Ie)){const Xe=Ve.groups;for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const ct=Xe[ke],Ke=Ie[ct.materialIndex];Ke&&Ke.visible&&G.push(R,Ve,Ke,ie,ft.z,ct)}}else Ie.visible&&G.push(R,Ve,Ie,ie,ft.z,null)}}const Be=R.children;for(let Ve=0,Ie=Be.length;Ve<Ie;Ve++)hn(Be[Ve],j,ie,te)}function On(R,j,ie,te){const{opaque:ne,transmissive:Be,transparent:Ve}=R;O.setupLightsView(ie),Yt===!0&&Pe.setGlobalState(K.clippingPlanes,ie),te&&Re.viewport(oe.copy(te)),ne.length>0&&Wa(ne,j,ie),Be.length>0&&Wa(Be,j,ie),Ve.length>0&&Wa(Ve,j,ie),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function pa(R,j,ie,te){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[te.id]===void 0){const Ke=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[te.id]=new oa(1,1,{generateMipmaps:!0,type:Ke?ka:gi,minFilter:Fa,samples:Math.max(4,kt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Be=O.state.transmissionRenderTarget[te.id],Ve=te.viewport||oe;Be.setSize(Ve.z*K.transmissionResolutionScale,Ve.w*K.transmissionResolutionScale);const Ie=K.getRenderTarget(),Xe=K.getActiveCubeFace(),ke=K.getActiveMipmapLevel();K.setRenderTarget(Be),K.getClearColor(P),J=K.getClearAlpha(),J<1&&K.setClearColor(16777215,.5),K.clear(),Jt&&we.render(ie);const Ze=K.toneMapping;K.toneMapping=ra;const ct=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),O.setupLightsView(te),Yt===!0&&Pe.setGlobalState(K.clippingPlanes,te),Wa(R,ie,te),E.updateMultisampleRenderTarget(Be),E.updateRenderTargetMipmap(Be),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ct=0,nn=j.length;Ct<nn;Ct++){const Kt=j[Ct],{object:Pt,geometry:It,material:Ge,group:Gn}=Kt;if(Ge.side===Di&&Pt.layers.test(te.layers)){const yt=Ge.side;Ge.side=ii,Ge.needsUpdate=!0,Vl(Pt,ie,te,It,Ge,Gn),Ge.side=yt,Ge.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(Be),E.updateRenderTargetMipmap(Be))}K.setRenderTarget(Ie,Xe,ke),K.setClearColor(P,J),ct!==void 0&&(te.viewport=ct),K.toneMapping=Ze}function Wa(R,j,ie){const te=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,Be=R.length;ne<Be;ne++){const Ve=R[ne],{object:Ie,geometry:Xe,group:ke}=Ve;let Ze=Ve.material;Ze.allowOverride===!0&&te!==null&&(Ze=te),Ie.layers.test(ie.layers)&&Vl(Ie,j,ie,Xe,Ze,ke)}}function Vl(R,j,ie,te,ne,Be){R.onBeforeRender(K,j,ie,te,ne,Be),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(K,j,ie,te,R,Be),ne.transparent===!0&&ne.side===Di&&ne.forceSinglePass===!1?(ne.side=ii,ne.needsUpdate=!0,K.renderBufferDirect(ie,j,te,ne,R,Be),ne.side=Va,ne.needsUpdate=!0,K.renderBufferDirect(ie,j,te,ne,R,Be),ne.side=Di):K.renderBufferDirect(ie,j,te,ne,R,Be),R.onAfterRender(K,j,ie,te,ne,Be)}function cr(R,j,ie){j.isScene!==!0&&(j=fn);const te=D.get(R),ne=O.state.lights,Be=O.state.shadowsArray,Ve=ne.state.version,Ie=Ue.getParameters(R,ne.state,Be,j,ie,O.state.lightProbeGridArray),Xe=Ue.getProgramCacheKey(Ie);let ke=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,te.fog=j.fog;const Ze=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=Q.get(R.envMap||te.environment,Ze),te.envMapRotation=te.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",on),ke=new Map,te.programs=ke);let ct=ke.get(Xe);if(ct!==void 0){if(te.currentProgram===ct&&te.lightsStateVersion===Ve)return qa(R,Ie),ct}else Ie.uniforms=Ue.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,ie,Ie),R.onBeforeCompile(Ie,K),ct=Ue.acquireProgram(Ie,Xe),ke.set(Xe,ct),te.uniforms=Ie.uniforms;const Ke=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Pe.uniform),qa(R,Ie),te.needsLights=Us(R),te.lightsStateVersion=Ve,te.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=O.state.lightProbeGridArray.length>0,te.currentProgram=ct,te.uniformsList=null,ct}function Ro(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Uu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function qa(R,j){const ie=D.get(R);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Co(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;L.setFromMatrixPosition(j.matrixWorld);for(let ie=0,te=R.length;ie<te;ie++){const ne=R[ie];if(ne.texture!==null&&ne.boundingBox.containsPoint(L))return ne}return null}function ja(R,j,ie,te,ne){j.isScene!==!0&&(j=fn),E.resetTextureUnits();const Be=j.fog,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?j.environment:null,Ie=X===null?K.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:bt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ke=Q.get(te.envMap||Ve,Xe),Ze=te.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ct=!!ie.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!ie.morphAttributes.position,Ct=!!ie.morphAttributes.normal,nn=!!ie.morphAttributes.color;let Kt=ra;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Kt=K.toneMapping);const Pt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,It=Pt!==void 0?Pt.length:0,Ge=D.get(te),Gn=O.state.lights;if(Yt===!0&&(mt===!0||R!==F)){const Ut=R===F&&te.id===U;Pe.setState(te,R,Ut)}let yt=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Gn.state.version||Ge.outputColorSpace!==Ie||ne.isBatchedMesh&&Ge.batching===!1||!ne.isBatchedMesh&&Ge.batching===!0||ne.isBatchedMesh&&Ge.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ge.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||ne.isInstancedMesh&&Ge.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ge.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ge.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ge.instancingMorph===!1&&ne.morphTexture!==null||Ge.envMap!==ke||te.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==ct||Ge.morphTargets!==Ke||Ge.morphNormals!==Ct||Ge.morphColors!==nn||Ge.toneMapping!==Kt||Ge.morphTargetsCount!==It||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ge.__version=te.version);let Mn=Ge.currentProgram;yt===!0&&(Mn=cr(te,j,ne),q&&te.isNodeMaterial&&q.onUpdateProgram(te,Mn,Ge));let si=!1,Oi=!1,ri=!1;const Bt=Mn.getUniforms(),an=Ge.uniforms;if(Re.useProgram(Mn.program)&&(si=!0,Oi=!0,ri=!0),te.id!==U&&(U=te.id,Oi=!0),Ge.needsLights){const Ut=Co(O.state.lightProbeGridArray,ne);Ge.lightProbeGrid!==Ut&&(Ge.lightProbeGrid=Ut,Oi=!0)}if(si||F!==R){Re.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(W,"projectionMatrix",R.projectionMatrix),Bt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Ki=Bt.map.cameraPosition;Ki!==void 0&&Ki.setValue(W,Ot.setFromMatrixPosition(R.matrixWorld)),kt.logarithmicDepthBuffer&&Bt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Bt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),F!==R&&(F=R,Oi=!0,ri=!0)}if(Ge.needsLights&&(Gn.state.directionalShadowMap.length>0&&Bt.setValue(W,"directionalShadowMap",Gn.state.directionalShadowMap,E),Gn.state.spotShadowMap.length>0&&Bt.setValue(W,"spotShadowMap",Gn.state.spotShadowMap,E),Gn.state.pointShadowMap.length>0&&Bt.setValue(W,"pointShadowMap",Gn.state.pointShadowMap,E)),ne.isSkinnedMesh){Bt.setOptional(W,ne,"bindMatrix"),Bt.setOptional(W,ne,"bindMatrixInverse");const Ut=ne.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Bt.setValue(W,"boneTexture",Ut.boneTexture,E))}ne.isBatchedMesh&&(Bt.setOptional(W,ne,"batchingTexture"),Bt.setValue(W,"batchingTexture",ne._matricesTexture,E),Bt.setOptional(W,ne,"batchingIdTexture"),Bt.setValue(W,"batchingIdTexture",ne._indirectTexture,E),Bt.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Bt.setValue(W,"batchingColorTexture",ne._colorsTexture,E));const Pi=ie.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&it.update(ne,ie,Mn),(Oi||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,Bt.setValue(W,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&j.environment!==null&&(an.envMapIntensity.value=j.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=nw()),Oi){if(Bt.setValue(W,"toneMappingExposure",K.toneMappingExposure),Ge.needsLights&&Ya(an,ri),Be&&te.fog===!0&&ue.refreshFogUniforms(an,Be),ue.refreshMaterialUniforms(an,te,De,Ae,O.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ut=Ge.lightProbeGrid;an.probesSH.value=Ut.texture,an.probesMin.value.copy(Ut.boundingBox.min),an.probesMax.value.copy(Ut.boundingBox.max),an.probesResolution.value.copy(Ut.resolution)}Uu.upload(W,Ro(Ge),an,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Uu.upload(W,Ro(Ge),an,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Bt.setValue(W,"center",ne.center),Bt.setValue(W,"modelViewMatrix",ne.modelViewMatrix),Bt.setValue(W,"normalMatrix",ne.normalMatrix),Bt.setValue(W,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Ut=te.uniformsGroups;for(let Ki=0,Za=Ut.length;Ki<Za;Ki++){const Os=Ut[Ki];pe.update(Os,Mn),pe.bind(Os,Mn)}}return Mn}function Ya(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Us(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,j,ie){const te=D.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),D.get(R.texture).__webglTexture=j,D.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ie,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ie=D.get(R);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0};const Ka=W.createFramebuffer();this.setRenderTarget=function(R,j=0,ie=0){X=R,se=j,ce=ie;let te=null,ne=!1,Be=!1;if(R){const Ie=D.get(R);if(Ie.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(W.FRAMEBUFFER,Ie.__webglFramebuffer),oe.copy(R.viewport),he.copy(R.scissor),xe=R.scissorTest,Re.viewport(oe),Re.scissor(he),Re.setScissorTest(xe),U=-1;return}else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(Ie.__hasExternalTextures)E.rebindTextures(R,D.get(R.texture).__webglTexture,D.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&D.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const ke=D.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?te=ke[j][ie]:te=ke[j],ne=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?te=D.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[ie]:te=ke,oe.copy(R.viewport),he.copy(R.scissor),xe=R.scissorTest}else oe.copy(Ee).multiplyScalar(De).floor(),he.copy(He).multiplyScalar(De).floor(),xe=tt;if(ie!==0&&(te=Ka),Re.bindFramebuffer(W.FRAMEBUFFER,te)&&Re.drawBuffers(R,te),Re.viewport(oe),Re.scissor(he),Re.setScissorTest(xe),ne){const Ie=D.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ie)}else if(Be){const Ie=j;for(let Xe=0;Xe<R.textures.length;Xe++){const ke=D.get(R.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,ie,Ie)}}else if(R!==null&&ie!==0){const Ie=D.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ie.__webglTexture,ie)}U=-1},this.readRenderTargetPixels=function(R,j,ie,te,ne,Be,Ve,Ie=0){if(!(R&&R.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=D.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Re.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const ke=R.textures[Ie],Ze=ke.format,ct=ke.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ie),!kt.textureFormatReadable(Ze)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(ct)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-te&&ie>=0&&ie<=R.height-ne&&W.readPixels(j,ie,te,ne,V.convert(Ze),V.convert(ct),Be)}finally{const ke=X!==null?D.get(X).__webglFramebuffer:null;Re.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,j,ie,te,ne,Be,Ve,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=D.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(j>=0&&j<=R.width-te&&ie>=0&&ie<=R.height-ne){Re.bindFramebuffer(W.FRAMEBUFFER,Xe);const ke=R.textures[Ie],Ze=ke.format,ct=ke.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ie),!kt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.bufferData(W.PIXEL_PACK_BUFFER,Be.byteLength,W.STREAM_READ),W.readPixels(j,ie,te,ne,V.convert(Ze),V.convert(ct),0);const Ct=X!==null?D.get(X).__webglFramebuffer:null;Re.bindFramebuffer(W.FRAMEBUFFER,Ct);const nn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Tb(W,nn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Be),W.deleteBuffer(Ke),W.deleteSync(nn),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ie=0){const te=Math.pow(2,-ie),ne=Math.floor(R.image.width*te),Be=Math.floor(R.image.height*te),Ve=j!==null?j.x:0,Ie=j!==null?j.y:0;E.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,ie,0,0,Ve,Ie,ne,Be),Re.unbindTexture()};const gn=W.createFramebuffer(),kl=W.createFramebuffer();this.copyTextureToTexture=function(R,j,ie=null,te=null,ne=0,Be=0){let Ve,Ie,Xe,ke,Ze,ct,Ke,Ct,nn;const Kt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(ie!==null)Ve=ie.max.x-ie.min.x,Ie=ie.max.y-ie.min.y,Xe=ie.isBox3?ie.max.z-ie.min.z:1,ke=ie.min.x,Ze=ie.min.y,ct=ie.isBox3?ie.min.z:0;else{const an=Math.pow(2,-ne);Ve=Math.floor(Kt.width*an),Ie=Math.floor(Kt.height*an),R.isDataArrayTexture?Xe=Kt.depth:R.isData3DTexture?Xe=Math.floor(Kt.depth*an):Xe=1,ke=0,Ze=0,ct=0}te!==null?(Ke=te.x,Ct=te.y,nn=te.z):(Ke=0,Ct=0,nn=0);const Pt=V.convert(j.format),It=V.convert(j.type);let Ge;j.isData3DTexture?(E.setTexture3D(j,0),Ge=W.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),Ge=W.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),Ge=W.TEXTURE_2D),Re.activeTexture(W.TEXTURE0),Re.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),Re.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Re.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const Gn=Re.getParameter(W.UNPACK_ROW_LENGTH),yt=Re.getParameter(W.UNPACK_IMAGE_HEIGHT),Mn=Re.getParameter(W.UNPACK_SKIP_PIXELS),si=Re.getParameter(W.UNPACK_SKIP_ROWS),Oi=Re.getParameter(W.UNPACK_SKIP_IMAGES);Re.pixelStorei(W.UNPACK_ROW_LENGTH,Kt.width),Re.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt.height),Re.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),Re.pixelStorei(W.UNPACK_SKIP_ROWS,Ze),Re.pixelStorei(W.UNPACK_SKIP_IMAGES,ct);const ri=R.isDataArrayTexture||R.isData3DTexture,Bt=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const an=D.get(R),Pi=D.get(j),Ut=D.get(an.__renderTarget),Ki=D.get(Pi.__renderTarget);Re.bindFramebuffer(W.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Re.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Za=0;Za<Xe;Za++)ri&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,D.get(R).__webglTexture,ne,ct+Za),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,D.get(j).__webglTexture,Be,nn+Za)),W.blitFramebuffer(ke,Ze,Ve,Ie,Ke,Ct,Ve,Ie,W.DEPTH_BUFFER_BIT,W.NEAREST);Re.bindFramebuffer(W.READ_FRAMEBUFFER,null),Re.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||R.isRenderTargetTexture||D.has(R)){const an=D.get(R),Pi=D.get(j);Re.bindFramebuffer(W.READ_FRAMEBUFFER,gn),Re.bindFramebuffer(W.DRAW_FRAMEBUFFER,kl);for(let Ut=0;Ut<Xe;Ut++)ri?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,an.__webglTexture,ne,ct+Ut):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,an.__webglTexture,ne),Bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pi.__webglTexture,Be,nn+Ut):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pi.__webglTexture,Be),ne!==0?W.blitFramebuffer(ke,Ze,Ve,Ie,Ke,Ct,Ve,Ie,W.COLOR_BUFFER_BIT,W.NEAREST):Bt?W.copyTexSubImage3D(Ge,Be,Ke,Ct,nn+Ut,ke,Ze,Ve,Ie):W.copyTexSubImage2D(Ge,Be,Ke,Ct,ke,Ze,Ve,Ie);Re.bindFramebuffer(W.READ_FRAMEBUFFER,null),Re.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Ge,Be,Ke,Ct,nn,Ve,Ie,Xe,Pt,It,Kt.data):j.isCompressedArrayTexture?W.compressedTexSubImage3D(Ge,Be,Ke,Ct,nn,Ve,Ie,Xe,Pt,Kt.data):W.texSubImage3D(Ge,Be,Ke,Ct,nn,Ve,Ie,Xe,Pt,It,Kt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Be,Ke,Ct,Ve,Ie,Pt,It,Kt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Be,Ke,Ct,Kt.width,Kt.height,Pt,Kt.data):W.texSubImage2D(W.TEXTURE_2D,Be,Ke,Ct,Ve,Ie,Pt,It,Kt);Re.pixelStorei(W.UNPACK_ROW_LENGTH,Gn),Re.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt),Re.pixelStorei(W.UNPACK_SKIP_PIXELS,Mn),Re.pixelStorei(W.UNPACK_SKIP_ROWS,si),Re.pixelStorei(W.UNPACK_SKIP_IMAGES,Oi),Be===0&&j.generateMipmaps&&W.generateMipmap(Ge),Re.unbindTexture()},this.initRenderTarget=function(R){D.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),Re.unbindTexture()},this.resetState=function(){se=0,ce=0,X=null,Re.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const Tx={type:"change"},um={type:"start"},yy={type:"end"},Au=new vo,Ax=new Rs,aw=Math.cos(70*Qx.DEG2RAD),En=new Y,ni=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hd=1e-6;class sw extends oT{constructor(e,n=null){super(e,n),this.state=jt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:io.ROTATE,TWO:io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new ji,this._lastTargetPosition=new Y,this._quat=new ji().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $v,this._sphericalDelta=new $v,this._scale=1,this._panOffset=new Y,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new Y,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ow.bind(this),this._onPointerDown=rw.bind(this),this._onPointerUp=lw.bind(this),this._onContextMenu=mw.bind(this),this._onMouseWheel=fw.bind(this),this._onKeyDown=hw.bind(this),this._onTouchStart=dw.bind(this),this._onTouchMove=pw.bind(this),this._onMouseDown=cw.bind(this),this._onMouseMove=uw.bind(this),this._interceptControlDown=gw.bind(this),this._interceptControlUp=_w.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tx),this.update(),this.state=jt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;En.copy(n).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=ni:a>Math.PI&&(a-=ni),o<-Math.PI?o+=ni:o>Math.PI&&(o-=ni),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),n.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=En.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new Y(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Au.origin.copy(this.object.position),Au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Au.direction))<aw?this.object.lookAt(this.target):(Ax.setFromNormalAndCoplanarPoint(this.object.up,this.target),Au.intersectPlane(Ax,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hd||this._lastTargetPosition.distanceToSquared(this.target)>Hd?(this.dispatchEvent(Tx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){En.setFromMatrixColumn(n,0),En.multiplyScalar(-e),this._panOffset.add(En)}_panUp(e,n){this.screenSpacePanning===!0?En.setFromMatrixColumn(n,1):(En.setFromMatrixColumn(n,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(e),this._panOffset.add(En)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;En.copy(o).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=e-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/n.clientHeight),this._rotateUp(ni*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),o=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/n.clientHeight),this._rotateUp(ni*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,h=(e.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new st,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function rw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ow(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function lw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yy),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function cw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=jt.DOLLY;break;case ao.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=jt.ROTATE}break;case ao.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(um)}function uw(r){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function fw(r){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(r.preventDefault(),this.dispatchEvent(um),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(yy))}function hw(r){this.enabled!==!1&&this._handleKeyDown(r)}function dw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=jt.TOUCH_ROTATE;break;case io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=jt.TOUCH_DOLLY_PAN;break;case io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(um)}function pw(r){switch(this._trackPointer(r),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=jt.NONE}}function mw(r){this.enabled!==!1&&r.preventDefault()}function gw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _w(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rx(r,e){if(e===db)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===wp||e===Kx){let n=r.getIndex();if(n===null){const u=[],h=r.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);r.setIndex(u),n=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const a=n.count-2,o=[];if(e===wp)for(let u=1;u<=a;u++)o.push(n.getX(0)),o.push(n.getX(u)),o.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(o.push(n.getX(u)),o.push(n.getX(u+1)),o.push(n.getX(u+2))):(o.push(n.getX(u+2)),o.push(n.getX(u+1)),o.push(n.getX(u)));o.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=r.clone();return c.setIndex(o),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function vw(r){const e=new Map,n=new Map,a=r.clone();return Sy(r,a,function(o,c){e.set(c,o),n.set(o,c)}),a.traverse(function(o){if(!o.isSkinnedMesh)return;const c=o,u=e.get(o),h=u.skeleton.bones;c.skeleton=u.skeleton.clone(),c.bindMatrix.copy(u.bindMatrix),c.skeleton.bones=h.map(function(p){return n.get(p)}),c.bind(c.skeleton,c.bindMatrix)}),a}function Sy(r,e,n){n(r,e);for(let a=0;a<r.children.length;a++)Sy(r.children[a],e.children[a],n)}class xw extends Mo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new Ew(n)}),this.register(function(n){return new Tw(n)}),this.register(function(n){return new Ow(n)}),this.register(function(n){return new Pw(n)}),this.register(function(n){return new Iw(n)}),this.register(function(n){return new Rw(n)}),this.register(function(n){return new Cw(n)}),this.register(function(n){return new ww(n)}),this.register(function(n){return new Dw(n)}),this.register(function(n){return new bw(n)}),this.register(function(n){return new Nw(n)}),this.register(function(n){return new Aw(n)}),this.register(function(n){return new Uw(n)}),this.register(function(n){return new Lw(n)}),this.register(function(n){return new Sw(n)}),this.register(function(n){return new Cx(n,vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new Cx(n,vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new Bw(n)})}load(e,n,a,o){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Ol.extractUrlBase(e);u=Ol.resolveURL(d,this.path)}else u=Ol.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){o?o(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new uy(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(_){n(_),c.manager.itemEnd(e)},h)}catch(_){h(_)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,o){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===My){try{u[vt.KHR_BINARY_GLTF]=new Fw(e)}catch(g){o&&o(g);return}c=JSON.parse(u[vt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new Qw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let _=0;_<this.pluginCallbacks.length;_++){const g=this.pluginCallbacks[_](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[g.name]=g,u[g.name]=!0}if(c.extensionsUsed)for(let _=0;_<c.extensionsUsed.length;++_){const g=c.extensionsUsed[_],v=c.extensionsRequired||[];switch(g){case vt.KHR_MATERIALS_UNLIT:u[g]=new Mw;break;case vt.KHR_DRACO_MESH_COMPRESSION:u[g]=new zw(c,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:u[g]=new Hw;break;case vt.KHR_MESH_QUANTIZATION:u[g]=new Gw;break;default:v.indexOf(g)>=0&&h[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,o)}parseAsync(e,n){const a=this;return new Promise(function(o,c){a.parse(e,n,o,c)})}}function yw(){let r={};return{get:function(e){return r[e]},add:function(e,n){r[e]=n},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function mn(r,e,n){const a=r.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Sw{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,o=n.length;a<o;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let o=n.cache.get(a);if(o)return o;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const _=new ot(16777215);p.color!==void 0&&_.setRGB(p.color[0],p.color[1],p.color[2],_i);const g=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new Pp(_),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new WE(_),d.distance=g;break;case"spot":d=new kE(_),d.distance=g,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),na(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),o=Promise.resolve(d),n.cache.add(a,o),o}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class Mw{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return rr}extendParams(e,n,a){const o=[];e.color=new ot(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],_i),e.opacity=u[3]}c.baseColorTexture!==void 0&&o.push(a.assignTexture(e,"map",c.baseColorTexture,Nn))}return Promise.all(o)}}class bw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}}class Ew{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new st(c,c)}return Promise.all(o)}}class Tw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}}class Aw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class Rw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(n.sheenColor=new ot(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],_i)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,Nn)),a.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class Cw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class ww{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new ot().setRGB(c[0],c[1],c[2],_i),Promise.all(o)}}class Dw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}}class Nw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new ot().setRGB(c[0],c[1],c[2],_i),a.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,Nn)),Promise.all(o)}}class Lw{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class Uw{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return mn(this.parser,e,this.name)!==null?da:null}extendMaterialParams(e,n){const a=mn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class Ow{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,o=a.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class Pw{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class Iw{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class Cx{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const o=a.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=o.byteOffset||0,d=o.byteLength||0,_=o.count,g=o.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(_,g,v,o.mode,o.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(_*g);return u.decodeGltfBuffer(new Uint8Array(x),_,g,v,o.mode,o.filter),x})})}else return null}}class Bw{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const o=n.meshes[a.mesh];for(const d of o.primitives)if(d.mode!==wi.TRIANGLES&&d.mode!==wi.TRIANGLE_STRIP&&d.mode!==wi.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(_=>(p[d]=_,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const _=d.pop(),g=_.isGroup?_.children:[_],v=d[0].count,x=[];for(const b of g){const A=new pt,M=new Y,S=new ji,w=new Y(1,1,1),N=new dE(b.geometry,b.material,v);for(let L=0;L<v;L++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,L),p.ROTATION&&S.fromBufferAttribute(p.ROTATION,L),p.SCALE&&w.fromBufferAttribute(p.SCALE,L),N.setMatrixAt(L,A.compose(M,S,w));for(const L in p)if(L==="_COLOR_0"){const G=p[L];N.instanceColor=new Up(G.array,G.itemSize,G.normalized)}else L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"&&b.geometry.setAttribute(L,p[L]);ln.prototype.copy.call(N,b),this.parser.assignFinalMaterial(N),x.push(N)}return _.isGroup?(_.clear(),_.add(...x),_):x[0]}))}}const My="glTF",Cl=12,wx={JSON:1313821514,BIN:5130562};class Fw{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Cl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==My)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Cl,c=new DataView(e,Cl);let u=0;for(;u<o;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===wx.JSON){const d=new Uint8Array(e,Cl+u,h);this.content=a.decode(d)}else if(p===wx.BIN){const d=Cl+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zw{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,o=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const _ in u){const g=zp[_]||_.toLowerCase();h[g]=u[_]}for(const _ in e.attributes){const g=zp[_]||_.toLowerCase();if(u[_]!==void 0){const v=a.accessors[e.attributes[_]],x=oo[v.componentType];d[g]=x.name,p[g]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(_){return new Promise(function(g,v){o.decodeDracoFile(_,function(x){for(const b in x.attributes){const A=x.attributes[b],M=p[b];M!==void 0&&(A.normalized=M)}g(x)},h,d,_i,v)})})}}class Hw{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class Gw{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class by extends xo{constructor(e,n,a,o){super(e,n,a,o)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o*3+o;for(let u=0;u!==o;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,_=o-n,g=(a-n)/_,v=g*g,x=v*g,b=e*d,A=b-d,M=-2*x+3*v,S=x-v,w=1-M,N=S-v+g;for(let L=0;L!==h;L++){const G=u[A+L+h],O=u[A+L+p]*_,B=u[b+L+h],T=u[b+L]*_;c[L]=w*G+N*O+M*B+S*T}return c}}const Vw=new ji;class kw extends by{interpolate_(e,n,a,o){const c=super.interpolate_(e,n,a,o);return Vw.fromArray(c).normalize().toArray(c),c}}const wi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dx={9728:Tn,9729:An,9984:Vx,9985:Cu,9986:Dl,9987:Fa},Nx={33071:aa,33648:Ou,10497:uo},Gd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xw={CUBICSPLINE:void 0,LINEAR:Fl,STEP:Bl},Vd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ww(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new rm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Va})),r.DefaultMaterial}function tr(r,e,n){for(const a in n.extensions)r[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function na(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qw(r,e,n){let a=!1,o=!1,c=!1;for(let d=0,_=e.length;d<_;d++){const g=e[d];if(g.POSITION!==void 0&&(a=!0),g.NORMAL!==void 0&&(o=!0),g.COLOR_0!==void 0&&(c=!0),a&&o&&c)break}if(!a&&!o&&!c)return Promise.resolve(r);const u=[],h=[],p=[];for(let d=0,_=e.length;d<_;d++){const g=e[d];if(a){const v=g.POSITION!==void 0?n.getDependency("accessor",g.POSITION):r.attributes.position;u.push(v)}if(o){const v=g.NORMAL!==void 0?n.getDependency("accessor",g.NORMAL):r.attributes.normal;h.push(v)}if(c){const v=g.COLOR_0!==void 0?n.getDependency("accessor",g.COLOR_0):r.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const _=d[0],g=d[1],v=d[2];return a&&(r.morphAttributes.position=_),o&&(r.morphAttributes.normal=g),c&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function jw(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)r.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(r.morphTargetInfluences.length===n.length){r.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++)r.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yw(r){let e;const n=r.extensions&&r.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+kd(n.attributes):e=r.indices+":"+kd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let a=0,o=r.targets.length;a<o;a++)e+=":"+kd(r.targets[a]);return e}function kd(r){let e="";const n=Object.keys(r).sort();for(let a=0,o=n.length;a<o;a++)e+=n[a]+":"+r[n[a]]+";";return e}function Hp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Zw=new pt;class Qw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new yw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,o=-1,c=!1,u=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);o=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&o<17||c&&u<98?this.textureLoader=new GE(this.options.manager):this.textureLoader=new YE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:a,userData:{}};return tr(c,h,o),na(h,o),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let o=0,c=n.length;o<c;o++){const u=n[o].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let o=0,c=e.length;o<c;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const o=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,_]of u.children.entries())c(_,h.children[d])};return c(a,o),o.name+="_instance_"+e.uses[n]++,o}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const o=e(n[a]);if(o)return o}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let o=0;o<n.length;o++){const c=e(n[o]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let o=this.cache.get(a);if(!o){switch(e){case"scene":o=this.loadScene(n);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":o=this.loadAccessor(n);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":o=this.loadBuffer(n);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":o=this.loadSkin(n);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":o=this.loadCamera(n);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(a,o)}return o}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(o.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,u){a.load(Ol.resolveURL(n.uri,o.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const o=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+o)})}loadAccessor(e){const n=this,a=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=Gd[o.type],h=oo[o.componentType],p=o.normalized===!0,d=new h(o.count*u);return Promise.resolve(new Kn(d,u,p))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=Gd[o.type],d=oo[o.componentType],_=d.BYTES_PER_ELEMENT,g=_*p,v=o.byteOffset||0,x=o.bufferView!==void 0?a.bufferViews[o.bufferView].byteStride:void 0,b=o.normalized===!0;let A,M;if(x&&x!==g){const S=Math.floor(v/x),w="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+S+":"+o.count;let N=n.cache.get(w);N||(A=new d(h,S*x,o.count*x/_),N=new rE(A,x/_),n.cache.add(w,N)),M=new tm(N,p,v%x/_,b)}else h===null?A=new d(o.count*p):A=new d(h,v,o.count*p),M=new Kn(A,p,b);if(o.sparse!==void 0){const S=Gd.SCALAR,w=oo[o.sparse.indices.componentType],N=o.sparse.indices.byteOffset||0,L=o.sparse.values.byteOffset||0,G=new w(u[1],N,o.sparse.count*S),O=new d(u[2],L,o.sparse.count*p);h!==null&&(M=new Kn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let B=0,T=G.length;B<T;B++){const I=G[B];if(M.setX(I,O[B*p]),p>=2&&M.setY(I,O[B*p+1]),p>=3&&M.setZ(I,O[B*p+2]),p>=4&&M.setW(I,O[B*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const o=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(_){_.flipY=!1,_.name=u.name||h.name||"",_.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(_.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return _.magFilter=Dx[v.magFilter]||An,_.minFilter=Dx[v.minFilter]||Fa,_.wrapS=Nx[v.wrapS]||uo,_.wrapT=Nx[v.wrapT]||uo,_.generateMipmaps=!_.isCompressedTexture&&_.minFilter!==Tn&&_.minFilter!==An,o.associations.set(_,{textures:e}),_}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,o=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=o.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(g){d=!0;const v=new Blob([g],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const _=Promise.resolve(p).then(function(g){return new Promise(function(v,x){let b=v;n.isImageBitmapLoader===!0&&(b=function(A){const M=new Ln(A);M.needsUpdate=!0,v(M)}),n.load(Ol.resolveURL(g,c.path),b,void 0,x)})}).then(function(g){return d===!0&&h.revokeObjectURL(p),na(g,u),g.userData.mimeType=u.mimeType||Kw(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),g});return this.sourceCache[e]=_,_}assignTexture(e,n,a,o){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[vt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return o!==void 0&&(u.colorSpace=o),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const o=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new ay,la.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new iy,la.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(o||c||u){let h="ClonedMaterial:"+a.uuid+":";o&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),o&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return rm}loadMaterial(e){const n=this,a=this.json,o=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[vt.KHR_MATERIALS_UNLIT]){const g=o[vt.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),d.push(g.extendParams(h,c,n))}else{const g=c.pbrMetallicRoughness||{};if(h.color=new ot(1,1,1),h.opacity=1,Array.isArray(g.baseColorFactor)){const v=g.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],_i),h.opacity=v[3]}g.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",g.baseColorTexture,Nn)),h.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,h.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",g.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Di);const _=c.alphaMode||Vd.OPAQUE;if(_===Vd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,_===Vd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==rr&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new st(1,1),c.normalTexture.scale!==void 0)){const g=c.normalTexture.scale;h.normalScale.set(g,g)}if(c.occlusionTexture!==void 0&&u!==rr&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==rr){const g=c.emissiveFactor;h.emissive=new ot().setRGB(g[0],g[1],g[2],_i)}return c.emissiveTexture!==void 0&&u!==rr&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Nn)),Promise.all(d).then(function(){const g=new u(h);return c.name&&(g.name=c.name),na(g,c),n.associations.set(g,{materials:e}),c.extensions&&tr(o,g,c),g})}createUniqueName(e){const n=Vt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,o=this.primitiveCache;function c(h){return a[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return Lx(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],_=Yw(d),g=o[_];if(g)u.push(g.promise);else{let v;d.extensions&&d.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=Lx(new Ui,d,n),o[_]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,o=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const _=u[p].material===void 0?Ww(this.cache):this.getDependency("material",u[p].material);h.push(_)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),_=p[p.length-1],g=[];for(let x=0,b=_.length;x<b;x++){const A=_[x],M=u[x];let S;const w=d[x];if(M.mode===wi.TRIANGLES||M.mode===wi.TRIANGLE_STRIP||M.mode===wi.TRIANGLE_FAN||M.mode===void 0)S=c.isSkinnedMesh===!0?new uE(A,w):new vi(A,w),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),M.mode===wi.TRIANGLE_STRIP?S.geometry=Rx(S.geometry,Kx):M.mode===wi.TRIANGLE_FAN&&(S.geometry=Rx(S.geometry,wp));else if(M.mode===wi.LINES)S=new _E(A,w);else if(M.mode===wi.LINE_STRIP)S=new sm(A,w);else if(M.mode===wi.LINE_LOOP)S=new vE(A,w);else if(M.mode===wi.POINTS)S=new xE(A,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(S.geometry.morphAttributes).length>0&&jw(S,c),S.name=n.createUniqueName(c.name||"mesh_"+e),na(S,c),M.extensions&&tr(o,S,M),n.assignFinalMaterial(S),g.push(S)}for(let x=0,b=g.length;x<b;x++)n.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return c.extensions&&tr(o,g[0],c),g[0];const v=new sr;c.extensions&&tr(o,v,c),n.associations.set(v,{meshes:e});for(let x=0,b=g.length;x<b;x++)v.add(g[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],o=a[a.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Yn(Qx.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):a.type==="orthographic"&&(n=new Wu(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),na(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let o=0,c=n.joints.length;o<c;o++)a.push(this._loadNodeShallow(n.joints[o]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(o){const c=o.pop(),u=o,h=[],p=[];for(let d=0,_=u.length;d<_;d++){const g=u[d];if(g){h.push(g);const v=new pt;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new im(h,p)})}loadAnimation(e){const n=this.json,a=this,o=n.animations[e],c=o.name?o.name:"animation_"+e,u=[],h=[],p=[],d=[],_=[];for(let g=0,v=o.channels.length;g<v;g++){const x=o.channels[g],b=o.samplers[x.sampler],A=x.target,M=A.node,S=o.parameters!==void 0?o.parameters[b.input]:b.input,w=o.parameters!==void 0?o.parameters[b.output]:b.output;A.node!==void 0&&(u.push(this.getDependency("node",M)),h.push(this.getDependency("accessor",S)),p.push(this.getDependency("accessor",w)),d.push(b),_.push(A))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(_)]).then(function(g){const v=g[0],x=g[1],b=g[2],A=g[3],M=g[4],S=[];for(let N=0,L=v.length;N<L;N++){const G=v[N],O=x[N],B=b[N],T=A[N],I=M[N];if(G===void 0)continue;G.updateMatrix&&G.updateMatrix();const K=a._createAnimationTracks(G,O,B,T,I);if(K)for(let z=0;z<K.length;z++)S.push(K[z])}const w=new OE(c,void 0,S);return na(w,o),w})}createNodeMesh(e){const n=this.json,a=this,o=n.nodes[e];return o.mesh===void 0?null:a.getDependency("mesh",o.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,o.mesh,c);return o.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=o.weights.length;p<d;p++)h.morphTargetInfluences[p]=o.weights[p]}),u})}loadNode(e){const n=this.json,a=this,o=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=o.children||[];for(let d=0,_=h.length;d<_;d++)u.push(a.getDependency("node",h[d]));const p=o.skin===void 0?Promise.resolve(null):a.getDependency("skin",o.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const _=d[0],g=d[1],v=d[2];v!==null&&_.traverse(function(x){x.isSkinnedMesh&&x.bind(v,Zw)});for(let x=0,b=g.length;x<b;x++)_.add(g[x]);if(_.userData.pivot!==void 0&&g.length>0){const x=_.userData.pivot,b=g[0];_.pivot=new Y().fromArray(x),_.position.x-=x[0],_.position.y-=x[1],_.position.z-=x[2],b.position.set(0,0,0),delete _.userData.pivot}return _})}_loadNodeShallow(e){const n=this.json,a=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?o.createUniqueName(c.name):"",h=[],p=o._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(o.getDependency("camera",c.camera).then(function(d){return o._getNodeRef(o.cameraCache,c.camera,d)})),o._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let _;if(c.isBone===!0?_=new ny:d.length>1?_=new sr:d.length===1?_=d[0]:_=new ln,_!==d[0])for(let g=0,v=d.length;g<v;g++)_.add(d[g]);if(c.name&&(_.userData.name=c.name,_.name=u),na(_,c),c.extensions&&tr(a,_,c),c.matrix!==void 0){const g=new pt;g.fromArray(c.matrix),_.applyMatrix4(g)}else c.translation!==void 0&&_.position.fromArray(c.translation),c.rotation!==void 0&&_.quaternion.fromArray(c.rotation),c.scale!==void 0&&_.scale.fromArray(c.scale);if(!o.associations.has(_))o.associations.set(_,{});else if(c.mesh!==void 0&&o.meshCache.refs[c.mesh]>1){const g=o.associations.get(_);o.associations.set(_,{...g})}return o.associations.get(_).nodes=e,_}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],o=this,c=new sr;a.name&&(c.name=o.createUniqueName(a.name)),na(c,a),a.extensions&&tr(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(o.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let _=0,g=p.length;_<g;_++){const v=p[_];v.parent!==null?c.add(vw(v)):c.add(v)}const d=_=>{const g=new Map;for(const[v,x]of o.associations)(v instanceof la||v instanceof Ln)&&g.set(v,x);return _.traverse(v=>{const x=o.associations.get(v);x!=null&&g.set(v,x)}),g};return o.associations=d(c),c})}_createAnimationTracks(e,n,a,o,c){const u=[],h=e.name?e.name:e.uuid,p=[];function d(x){x.morphTargetInfluences&&p.push(x.name?x.name:x.uuid)}As[c.path]===As.weights?(d(e),e.isGroup&&e.children.forEach(d)):p.push(h);let _;switch(As[c.path]){case As.weights:_=mo;break;case As.rotation:_=go;break;case As.translation:case As.scale:_=_o;break;default:switch(a.itemSize){case 1:_=mo;break;case 2:case 3:default:_=_o;break}break}const g=o.interpolation!==void 0?Xw[o.interpolation]:Fl,v=this._getArrayFromAccessor(a);for(let x=0,b=p.length;x<b;x++){const A=new _(p[x]+"."+As[c.path],n.array,v,g);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),u.push(A)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Hp(n.constructor),o=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)o[c]=n[c]*a;n=o}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const o=this instanceof go?kw:by;return new o(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jw(r,e,n){const a=e.attributes,o=new fa;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(o.set(new Y(p[0],p[1],p[2]),new Y(d[0],d[1],d[2])),h.normalized){const _=Hp(oo[h.componentType]);o.min.multiplyScalar(_),o.max.multiplyScalar(_)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new Y,p=new Y;for(let d=0,_=c.length;d<_;d++){const g=c[d];if(g.POSITION!==void 0){const v=n.json.accessors[g.POSITION],x=v.min,b=v.max;if(x!==void 0&&b!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(b[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(b[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(b[2]))),v.normalized){const A=Hp(oo[v.componentType]);p.multiplyScalar(A)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(h)}r.boundingBox=o;const u=new ha;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,r.boundingSphere=u}function Lx(r,e,n){const a=e.attributes,o=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){r.setAttribute(h,p)})}for(const u in a){const h=zp[u]||u.toLowerCase();h in r.attributes||o.push(c(a[u],h))}if(e.indices!==void 0&&!r.index){const u=n.getDependency("accessor",e.indices).then(function(h){r.setIndex(h)});o.push(u)}return bt.workingColorSpace!==_i&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),na(r,e),Jw(r,e,n),Promise.all(o).then(function(){return e.targets!==void 0?qw(r,e.targets,n):r})}function $w(r){const e=String(r).toUpperCase().match(/\b(R|C|L|T)\d+\b/);return e?e[0]:null}function e3(r){const e=String(r).trim(),n=e.match(/^empty_(\d+)$/i);if(n)return`idx_${n[1]}`;const a=e.match(/(\d+)(?!.*\d)/);return a?`idx_${a[1]}`:e.replace(/\s+/g,"_")}function t3(r,e){let n=r;for(;n&&n!==e;){if(n.name)return n.name;n=n.parent}return(r==null?void 0:r.name)||null}function n3({onPickPart:r,autoRotate:e=!1,resetTick:n=0}){const a=zn.useRef(null),[o,c]=zn.useState("Загрузка 3D..."),u=zn.useRef(null),h=zn.useRef(null),p=zn.useRef(null);return zn.useEffect(()=>{const d=a.current;if(!d)return;const _=new nE;_.background=new ot(16249833);const g=new Yn(45,1,.01,2e3);g.position.set(2.2,1.8,2.6);const v=new iw({antialias:!0});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.outputColorSpace=Nn,d.appendChild(v.domElement);const x=new sw(g,v.domElement);x.enableDamping=!0,u.current=x;let b=null,A=[];const M=new rT,S=new st,w=new Map;_.add(new jE(16777215,.85));const N=new Pp(16777215,.75);N.position.set(6,8,5),_.add(N);const L=new Pp(3886512,.2);L.position.set(-5,-3,-4),_.add(L);const G=()=>{const z=d.clientWidth,q=d.clientHeight||240;g.aspect=z/q,g.updateProjectionMatrix(),v.setSize(z,q)},O=z=>{const q=new fa().setFromObject(z);if(q.isEmpty())return;const se=q.getCenter(new Y),ce=q.getSize(new Y),X=Math.max(ce.x,ce.y,ce.z)*.8||1;x.target.copy(se),g.position.set(se.x+X*1.4,se.y+X*1.1,se.z+X*1.5),g.near=X/100,g.far=X*100,g.updateProjectionMatrix(),x.update()};h.current=O,new xw().load("/models/pcb.glb",z=>{const q=z.scene;q.traverse(se=>{if(!se.isMesh)return;se.castShadow=!0,se.receiveShadow=!0,Array.isArray(se.material)?se.material.forEach(X=>X.side=Di):se.material&&(se.material.side=Di);const ce=t3(se,q)||"component";se.userData.pickGroup=ce,w.has(ce)||w.set(ce,[]),w.get(ce).push(se)}),_.add(q),b=q,p.current=q,O(q),c("")},void 0,()=>c("Не удалось загрузить pcb.glb"));let T=0;const I=()=>{T=requestAnimationFrame(I),x.update(),v.render(_,g)};G(),I(),window.addEventListener("resize",G);const K=z=>{if(!b)return;const q=v.domElement.getBoundingClientRect();S.x=(z.clientX-q.left)/q.width*2-1,S.y=-((z.clientY-q.top)/q.height)*2+1,M.setFromCamera(S,g);const se=M.intersectObjects(b.children,!0);if(!se.length)return;const ce=se[0].object;if(!(ce!=null&&ce.isMesh))return;A.forEach(F=>{(Array.isArray(F.material)?F.material:[F.material]).forEach(he=>{var xe;return(xe=he==null?void 0:he.emissive)==null?void 0:xe.setHex(0)})});const X=ce.userData.pickGroup||ce.name||"component";A=w.get(X)||[ce],A.forEach(F=>{(Array.isArray(F.material)?F.material:[F.material]).forEach(he=>{var xe;return(xe=he==null?void 0:he.emissive)==null?void 0:xe.setHex(3095948)})});const U=$w(X);r==null||r(U||e3(X))};return v.domElement.addEventListener("pointerdown",K),()=>{cancelAnimationFrame(T),window.removeEventListener("resize",G),v.domElement.removeEventListener("pointerdown",K),x.dispose(),v.dispose(),d.removeChild(v.domElement)}},[]),zn.useEffect(()=>{u.current&&(u.current.autoRotate=e,u.current.autoRotateSpeed=1.2)},[e]),zn.useEffect(()=>{!h.current||!p.current||h.current(p.current)},[n]),_e.jsx("div",{className:"viewer3d",children:_e.jsx("div",{className:"viewer3d__canvas",ref:a,children:o?_e.jsx("span",{className:"viewer3d__label",children:o}):null})})}function i3({selectedPart:r,stepHint:e,onPickPart:n}){const[a,o]=zn.useState(!1),[c,u]=zn.useState(0);return _e.jsxs("aside",{className:"viewer-panel no-print",children:[_e.jsxs("div",{className:"viewer-panel__controls",children:[_e.jsx("button",{type:"button",className:`btn btn--outline btn--xs${a?" is-active":""}`,onClick:()=>o(h=>!h),children:a?"Автовращение: ВКЛ":"Автовращение: ВЫКЛ"}),_e.jsx("button",{type:"button",className:"btn btn--outline btn--xs",onClick:()=>u(h=>h+1),children:"Сброс вида"})]}),_e.jsx(n3,{onPickPart:n,autoRotate:a,resetTick:c}),e&&_e.jsx("p",{className:"viewer-panel__step",children:e}),_e.jsxs("div",{className:`part-card part-card--side${r?" part-card--selected":""}`,children:[_e.jsx("div",{className:"part-card__label",children:"Элемент"}),_e.jsx("div",{className:"part-card__name",children:r?r.name:"-"}),r&&_e.jsx("div",{className:"part-card__desc",children:r.desc})]})]})}const a3={idx_01110:{id:"BAT",name:"BAT - разъем питания 9 В",desc:"Вход питания платы."},idx_01112:{id:"ANT_OUT",name:"ANT_OUT - антенный разъем",desc:"Выход на внешнюю антенну (SMA)."},idx_01122:{id:"MIC_IN",name:"MIC_IN - разъем микрофона",desc:"Вход аудиосигнала от микрофона."},idx_01116:{id:"C6",name:"C6 - подстроечный конденсатор",desc:"Элемент подстройки рабочей частоты."},idx_01118:{id:"C1",name:"C-группа - керамические конденсаторы",desc:"Группа SMD-конденсаторов (C1, C2, C3, C4, C5, C8)."},idx_01120:{id:"L1",name:"L1 - катушка",desc:"Контурный индуктивный элемент (по вашей 3D-модели)."},idx_01128:{id:"T1",name:"T1 - транзистор KT315",desc:"НЧ каскад предварительного усиления."},idx_01126:{id:"T2",name:"T2 - транзистор S9018",desc:"ВЧ генератор передатчика."},idx_3:{id:"C1",name:"C-группа - керамические конденсаторы",desc:"Группа SMD-конденсаторов (C1, C2, C3, C4, C5, C8)."},idx_6:{id:"R1",name:"R-группа - резисторы",desc:"Группа SMD-резисторов (R1, R2, R3, R4, R5, R6, R7)."},idx_7:{id:"BAT",name:"BAT - разъем питания 9 В",desc:"Вход питания изделия."},idx_0112:{id:"pcb",name:"Плата - FR-4",desc:"Печатная плата изделия 44×34×1,6 мм."},idx_8:{id:"ANT_OUT",name:"ANT_OUT - антенный разъем",desc:"Выход на внешнюю антенну (SMA)."},idx_27:{id:"C7",name:"C7 - электролитический конденсатор",desc:"Полярный конденсатор 10 мкФ."},idx_33:{id:"MIC_IN",name:"MIC_IN - вход микрофона",desc:"Разъем подключения микрофона."},idx_57:{id:"C6",name:"C6 - подстроечный конденсатор",desc:"Элемент подстройки рабочей частоты."}};function s3(r){if(!r)return null;const e=a3[r];if(e!=null&&e.id){const o=Xi.bom.find(c=>c.id.split(",").map(u=>u.trim()).includes(e.id));return o?{name:`${o.id} · ${o.name}`,desc:`${o.value}, ${o.qty} шт.`}:{name:e.name,desc:e.desc}}const n=Xi.bom.find(o=>o.id.split(",").map(u=>u.trim()).includes(r));if(n)return{name:`${n.id} · ${n.name}`,desc:`${n.value}, ${n.qty} шт.`};const a=Xi.parts[r];return a?{name:a.name,desc:a.desc}:r.startsWith("idx_")?{name:`Узел ${r.replace("idx_","#")}`,desc:"Сопоставление для этого узла пока не задано."}:{name:r,desc:"Выбрано по клику на 3D-модели."}}function r3(){const[r,e]=zn.useState(Xi.sections[0].id),[n,a]=zn.useState(0),[o,c]=zn.useState(null),u=Xi.sections.find(g=>g.id===r),h=(u==null?void 0:u.kind)==="bom",p=zn.useMemo(()=>{var g,v;return(u==null?void 0:u.kind)!=="procedure"||!u.procedureId?null:((v=(g=Xi.procedures[u.procedureId])==null?void 0:g.steps[n])==null?void 0:v.text)??null},[u,n]),d=zn.useMemo(()=>s3(o),[o]),_=zn.useCallback(g=>{e(g),a(0)},[]);return _e.jsxs("div",{className:"app",children:[_e.jsx(IM,{onPrint:()=>window.print()}),_e.jsxs("div",{className:"app-body",children:[_e.jsx(BM,{activeId:r,onSelect:_}),_e.jsxs("main",{className:"main",children:[_e.jsx("h2",{className:"page-title",children:u==null?void 0:u.title}),h?_e.jsx(GM,{selectedPartId:o,onSelectPart:c}):_e.jsx("div",{className:"main-content",children:_e.jsx(zM,{sectionId:r,stepIndex:n,onStepChange:a,onSelectPart:c})})]}),_e.jsx(i3,{selectedPart:d,stepHint:p,onPickPart:c})]})]})}PM.createRoot(document.getElementById("root")).render(_e.jsx(zn.StrictMode,{children:_e.jsx(r3,{})}));
