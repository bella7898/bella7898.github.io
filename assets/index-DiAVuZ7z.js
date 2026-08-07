(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var th={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function Qy(){if(wv)return wo;wv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var Cv;function Jy(){return Cv||(Cv=1,th.exports=Qy()),th.exports}var At=Jy(),eh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function $y(){if(Dv)return oe;Dv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(L,tt,xt){this.props=L,this.context=tt,this.refs=T,this.updater=xt||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=y.prototype;function O(L,tt,xt){this.props=L,this.context=tt,this.refs=T,this.updater=xt||S}var D=O.prototype=new x;D.constructor=O,E(D,y.prototype),D.isPureReactComponent=!0;var C=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(L,tt,xt,St,J,gt){return xt=gt.ref,{$$typeof:s,type:L,key:tt,ref:xt!==void 0?xt:null,props:gt}}function X(L,tt){return B(L.type,tt,void 0,void 0,void 0,L.props)}function U(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function w(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return tt[xt]})}var V=/\/+/g;function ot(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):tt.toString(36)}function st(){}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(st,st):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ut(L,tt,xt,St,J){var gt=typeof L;(gt==="undefined"||gt==="boolean")&&(L=null);var Mt=!1;if(L===null)Mt=!0;else switch(gt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(L.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=L._init,ut(Mt(L._payload),tt,xt,St,J)}}if(Mt)return J=J(L),Mt=St===""?"."+ot(L,0):St,C(J)?(xt="",Mt!=null&&(xt=Mt.replace(V,"$&/")+"/"),ut(J,tt,xt,"",function(ue){return ue})):J!=null&&(U(J)&&(J=X(J,xt+(J.key==null||L&&L.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Mt)),tt.push(J)),1;Mt=0;var wt=St===""?".":St+":";if(C(L))for(var Dt=0;Dt<L.length;Dt++)St=L[Dt],gt=wt+ot(St,Dt),Mt+=ut(St,tt,xt,gt,J);else if(Dt=_(L),typeof Dt=="function")for(L=Dt.call(L),Dt=0;!(St=L.next()).done;)St=St.value,gt=wt+ot(St,Dt++),Mt+=ut(St,tt,xt,gt,J);else if(gt==="object"){if(typeof L.then=="function")return ut(mt(L),tt,xt,St,J);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function z(L,tt,xt){if(L==null)return L;var St=[],J=0;return ut(L,St,"","",function(gt){return tt.call(xt,gt,J++)}),St}function K(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(){}return oe.Children={map:z,forEach:function(L,tt,xt){z(L,function(){tt.apply(this,arguments)},xt)},count:function(L){var tt=0;return z(L,function(){tt++}),tt},toArray:function(L){return z(L,function(tt){return tt})||[]},only:function(L){if(!U(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=O,oe.StrictMode=r,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cloneElement=function(L,tt,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=E({},L.props),J=L.key,gt=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(gt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!H.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(St[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)St.children=xt;else if(1<Mt){for(var wt=Array(Mt),Dt=0;Dt<Mt;Dt++)wt[Dt]=arguments[Dt+2];St.children=wt}return B(L.type,J,void 0,void 0,gt,St)},oe.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,tt,xt){var St,J={},gt=null;if(tt!=null)for(St in tt.key!==void 0&&(gt=""+tt.key),tt)H.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(J[St]=tt[St]);var Mt=arguments.length-2;if(Mt===1)J.children=xt;else if(1<Mt){for(var wt=Array(Mt),Dt=0;Dt<Mt;Dt++)wt[Dt]=arguments[Dt+2];J.children=wt}if(L&&L.defaultProps)for(St in Mt=L.defaultProps,Mt)J[St]===void 0&&(J[St]=Mt[St]);return B(L,gt,void 0,void 0,null,J)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:h,render:L}},oe.isValidElement=U,oe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},oe.memo=function(L,tt){return{$$typeof:m,type:L,compare:tt===void 0?null:tt}},oe.startTransition=function(L){var tt=I.T,xt={};I.T=xt;try{var St=L(),J=I.S;J!==null&&J(xt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Et,j)}catch(gt){j(gt)}finally{I.T=tt}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(L){return I.H.use(L)},oe.useActionState=function(L,tt,xt){return I.H.useActionState(L,tt,xt)},oe.useCallback=function(L,tt){return I.H.useCallback(L,tt)},oe.useContext=function(L){return I.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,tt){return I.H.useDeferredValue(L,tt)},oe.useEffect=function(L,tt,xt){var St=I.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,tt)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(L,tt,xt){return I.H.useImperativeHandle(L,tt,xt)},oe.useInsertionEffect=function(L,tt){return I.H.useInsertionEffect(L,tt)},oe.useLayoutEffect=function(L,tt){return I.H.useLayoutEffect(L,tt)},oe.useMemo=function(L,tt){return I.H.useMemo(L,tt)},oe.useOptimistic=function(L,tt){return I.H.useOptimistic(L,tt)},oe.useReducer=function(L,tt,xt){return I.H.useReducer(L,tt,xt)},oe.useRef=function(L){return I.H.useRef(L)},oe.useState=function(L){return I.H.useState(L)},oe.useSyncExternalStore=function(L,tt,xt){return I.H.useSyncExternalStore(L,tt,xt)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.1.1",oe}var Uv;function Ld(){return Uv||(Uv=1,eh.exports=$y()),eh.exports}var ht=Ld(),nh={exports:{}},Co={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function tS(){return Lv||(Lv=1,function(s){function t(z,K){var j=z.length;z.push(K);t:for(;0<j;){var Et=j-1>>>1,L=z[Et];if(0<l(L,K))z[Et]=K,z[j]=L,j=Et;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],j=z.pop();if(j!==K){z[0]=j;t:for(var Et=0,L=z.length,tt=L>>>1;Et<tt;){var xt=2*(Et+1)-1,St=z[xt],J=xt+1,gt=z[J];if(0>l(St,j))J<L&&0>l(gt,St)?(z[Et]=gt,z[J]=j,Et=J):(z[Et]=St,z[xt]=j,Et=xt);else if(J<L&&0>l(gt,j))z[Et]=gt,z[J]=j,Et=J;else break t}}return K}function l(z,K){var j=z.sortIndex-K.sortIndex;return j!==0?j:z.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,v=null,_=3,S=!1,E=!1,T=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=z)r(m),K.sortIndex=K.expirationTime,t(p,K);else break;K=i(m)}}function I(z){if(T=!1,C(z),!E)if(i(p)!==null)E=!0,H||(H=!0,ot());else{var K=i(m);K!==null&&ut(I,K.startTime-z)}}var H=!1,B=-1,X=5,U=-1;function w(){return y?!0:!(s.unstable_now()-U<X)}function V(){if(y=!1,H){var z=s.unstable_now();U=z;var K=!0;try{t:{E=!1,T&&(T=!1,O(B),B=-1),S=!0;var j=_;try{e:{for(C(z),v=i(p);v!==null&&!(v.expirationTime>z&&w());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,_=v.priorityLevel;var L=Et(v.expirationTime<=z);if(z=s.unstable_now(),typeof L=="function"){v.callback=L,C(z),K=!0;break e}v===i(p)&&r(p),C(z)}else r(p);v=i(p)}if(v!==null)K=!0;else{var tt=i(m);tt!==null&&ut(I,tt.startTime-z),K=!1}}break t}finally{v=null,_=j,S=!1}K=void 0}}finally{K?ot():H=!1}}}var ot;if(typeof D=="function")ot=function(){D(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,mt=st.port2;st.port1.onmessage=V,ot=function(){mt.postMessage(null)}}else ot=function(){x(V,0)};function ut(z,K){B=x(function(){z(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(z){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var j=_;_=K;try{return z()}finally{_=j}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=_;_=z;try{return K()}finally{_=j}},s.unstable_scheduleCallback=function(z,K,j){var Et=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Et+j:Et):j=Et,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,z={id:g++,callback:K,priorityLevel:z,startTime:j,expirationTime:L,sortIndex:-1},j>Et?(z.sortIndex=j,t(m,z),i(p)===null&&z===i(m)&&(T?(O(B),B=-1):T=!0,ut(I,j-Et))):(z.sortIndex=L,t(p,z),E||S||(E=!0,H||(H=!0,ot()))),z},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(z){var K=_;return function(){var j=_;_=K;try{return z.apply(this,arguments)}finally{_=j}}}}(ah)),ah}var Nv;function eS(){return Nv||(Nv=1,ih.exports=tS()),ih.exports}var rh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function nS(){if(Ov)return wn;Ov=1;var s=Ld();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},wn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.1.1",wn}var Pv;function iS(){if(Pv)return rh.exports;Pv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),rh.exports=nS(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function aS(){if(zv)return Co;zv=1;var s=eS(),t=Ld(),i=iS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return h(c),e;if(d===o)return h(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var M=!1,A=c.child;A;){if(A===a){M=!0,a=c,o=d;break}if(A===o){M=!0,o=c,a=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===a){M=!0,a=d,o=c;break}if(A===o){M=!0,o=d,a=c;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case D:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:mt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return mt(e(n))}catch{}}return null}var ut=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Et=[],L=-1;function tt(e){return{current:e}}function xt(e){0>L||(e.current=Et[L],Et[L]=null,L--)}function St(e,n){L++,Et[L]=e.current,e.current=n}var J=tt(null),gt=tt(null),Mt=tt(null),wt=tt(null);function Dt(e,n){switch(St(Mt,n),St(gt,e),St(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nv(n),e=iv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(J),St(J,e)}function ue(){xt(J),xt(gt),xt(Mt)}function Jt(e){e.memoizedState!==null&&St(wt,e);var n=J.current,a=iv(n,e.type);n!==a&&(St(gt,e),St(J,a))}function Oe(e){gt.current===e&&(xt(J),xt(gt)),wt.current===e&&(xt(wt),Eo._currentValue=j)}var Ge=Object.prototype.hasOwnProperty,xe=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,yn=s.unstable_shouldYield,Ee=s.unstable_requestPaint,ge=s.unstable_now,kt=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,Zt=s.unstable_UserBlockingPriority,se=s.unstable_NormalPriority,$e=s.unstable_LowPriority,N=s.unstable_IdlePriority,b=s.log,et=s.unstable_setDisableYieldValue,ft=null,pt=null;function lt(e){if(typeof b=="function"&&et(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,e)}catch{}}var zt=Math.clz32?Math.clz32:Xt,Lt=Math.log,Vt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Lt(e)/Vt|0)|0}var yt=256,Bt=4194304;function Yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?c=Yt(o):(M&=A,M!==0?c=Yt(M):a||(a=A&~e,a!==0&&(c=Yt(a))))):(A=o&~d,A!==0?c=Yt(A):M!==0?c=Yt(M):a||(a=o&~e,a!==0&&(c=Yt(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),e}function Nt(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function It(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,n,a,o,c,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=M&~a;0<a;){var ct=31-zt(a),vt=1<<ct;A[ct]=0,P[ct]=-1;var nt=$[ct];if(nt!==null)for($[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~vt}o!==0&&_t(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ht(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Mv(e.type))}function Vn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,Sn="__reactProps$"+dn,Pn="__reactContainer$"+dn,Ka="__reactEvents$"+dn,nl="__reactListeners$"+dn,il="__reactHandles$"+dn,Qa="__reactResources$"+dn,ha="__reactMarker$"+dn;function da(e){delete e[on],delete e[Sn],delete e[Ka],delete e[nl],delete e[il]}function Oi(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ov(e);e!==null;){if(a=e[on])return a;e=ov(e)}return n}e=a,a=e.parentNode}return null}function Pi(e){if(e=e[on]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function pa(e){var n=e[Qa];return n||(n=e[Qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[ha]=!0}var al=new Set,rl={};function zi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(rl[e]=n,e=0;e<n.length;e++)al.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function Z(e){return Ge.call(rt,e)?!0:Ge.call(at,e)?!1:Y.test(e)?rt[e]=!0:(at[e]=!0,!1)}function bt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ut(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Ft,ne;function Qt(e){if(Ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+ne}var Wt=!1;function ce(e,n){if(!e||Wt)return"";Wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(it){var nt=it}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(it){nt=it}e.call(vt.prototype)}}else{try{throw Error()}catch(it){nt=it}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var P=M.split(`
`),$=A.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var ct=`
`+P[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{Wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Qt("Activity");default:return""}}function qe(e){try{var n="";do n+=Ce(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e){var n=De(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pe(e){e._valueTracker||(e._valueTracker=Kt(e))}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=De(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function Xe(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(e,n,a,o,c,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+de(n)):e.value!==""+de(n)&&(e.value=""+de(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?An(e,M,de(n)):a!=null?An(e,M,de(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+de(A):e.removeAttribute("name")}function Ve(e,n,a,o,c,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+de(a):"",n=n!=null?""+de(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function An(e,n,a){n==="number"&&pn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+de(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+de(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+de(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ut(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=de(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function yi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ip(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&np(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&np(e,d,n[d])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return K0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $u=null;function tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,Dr=null;function ap(e){var n=Pi(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Sn]||null;if(!c)throw Error(r(90));Bi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Se(o)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var ec=!1;function rp(e,n,a){if(ec)return e(n,a);ec=!0;try{var o=e(n);return o}finally{if(ec=!1,(Cr!==null||Dr!==null)&&(Wl(),Cr&&(n=Cr,e=Dr,Dr=Cr=null,ap(n),e)))for(n=0;n<e.length;n++)ap(e[n])}}function Ps(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=!1;if(Fi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){nc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{nc=!1}var ga=null,ic=null,ol=null;function sp(){if(ol)return ol;var e,n=ic,a=n.length,o,c="value"in ga?ga.value:ga.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===c[d-o];o++);return ol=c.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function op(){return!1}function zn(e){function n(a,o,c,d,M){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ul:op,this.isPropagationStopped=op,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=zn($a),Bs=g({},$a,{view:0,detail:0}),Q0=zn(Bs),ac,rc,Is,fl=g({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(ac=e.screenX-Is.screenX,rc=e.screenY-Is.screenY):rc=ac=0,Is=e),ac)},movementY:function(e){return"movementY"in e?e.movementY:rc}}),lp=zn(fl),J0=g({},fl,{dataTransfer:0}),$0=zn(J0),tx=g({},Bs,{relatedTarget:0}),sc=zn(tx),ex=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=zn(ex),ix=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ax=zn(ix),rx=g({},$a,{data:0}),up=zn(rx),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ux(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lx[e])?!!n[e]:!1}function oc(){return ux}var cx=g({},Bs,{key:function(e){if(e.key){var n=sx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fx=zn(cx),hx=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=zn(hx),dx=g({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),px=zn(dx),mx=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=zn(mx),vx=g({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=zn(vx),xx=g({},$a,{newState:0,oldState:0}),yx=zn(xx),Sx=[9,13,27,32],lc=Fi&&"CompositionEvent"in window,Fs=null;Fi&&"documentMode"in document&&(Fs=document.documentMode);var Mx=Fi&&"TextEvent"in window&&!Fs,fp=Fi&&(!lc||Fs&&8<Fs&&11>=Fs),hp=" ",dp=!1;function pp(e,n){switch(e){case"keyup":return Sx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function Ex(e,n){switch(e){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(dp=!0,hp);case"textInput":return e=n.data,e===hp&&dp?null:e;default:return null}}function Tx(e,n){if(Ur)return e==="compositionend"||!lc&&pp(e,n)?(e=sp(),ol=ic=ga=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bx[e.type]:n==="textarea"}function vp(e,n,a,o){Cr?Dr?Dr.push(o):Dr=[o]:Cr=o,n=Ql(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function Ax(e){Qg(e,0)}function hl(e){var n=Ja(e);if(Se(n))return e}function _p(e,n){if(e==="change")return n}var xp=!1;if(Fi){var uc;if(Fi){var cc="oninput"in document;if(!cc){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),cc=typeof yp.oninput=="function"}uc=cc}else uc=!1;xp=uc&&(!document.documentMode||9<document.documentMode)}function Sp(){Hs&&(Hs.detachEvent("onpropertychange",Mp),Gs=Hs=null)}function Mp(e){if(e.propertyName==="value"&&hl(Gs)){var n=[];vp(n,Gs,e,tc(e)),rp(Ax,n)}}function Rx(e,n,a){e==="focusin"?(Sp(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Mp)):e==="focusout"&&Sp()}function wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Gs)}function Cx(e,n){if(e==="click")return hl(n)}function Dx(e,n){if(e==="input"||e==="change")return hl(n)}function Ux(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Ux;function Vs(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ge.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tp(e,n){var a=Ep(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pn(e.document)}return n}function fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Lx=Fi&&"documentMode"in document&&11>=document.documentMode,Lr=null,hc=null,ks=null,dc=!1;function Rp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dc||Lr==null||Lr!==pn(o)||(o=Lr,"selectionStart"in o&&fc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ks&&Vs(ks,o)||(ks=o,o=Ql(hc,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Lr)))}function tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},pc={},wp={};Fi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function er(e){if(pc[e])return pc[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return pc[e]=n[a];return e}var Cp=er("animationend"),Dp=er("animationiteration"),Up=er("animationstart"),Nx=er("transitionrun"),Ox=er("transitionstart"),Px=er("transitioncancel"),Lp=er("transitionend"),Np=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function ci(e,n){Np.set(e,n),zi(n,[e])}var Op=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=Op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qe(n)},Op.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var ei=[],Or=0,gc=0;function dl(){for(var e=Or,n=gc=Or=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var d=ei[n];if(ei[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}d!==0&&Pp(a,c,d)}}function pl(e,n,a,o){ei[Or++]=e,ei[Or++]=n,ei[Or++]=a,ei[Or++]=o,gc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function vc(e,n,a,o){return pl(e,n,a,o),ml(e)}function Pr(e,n){return pl(e,null,null,n),ml(e)}function Pp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-zt(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function ml(e){if(50<mo)throw mo=0,Tf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function zx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,o){return new zx(e,n,a,o)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,c,d){var M=0;if(o=e,typeof e=="function")_c(e)&&(M=1);else if(typeof e=="string")M=Iy(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Xn(31,a,n,c),e.elementType=U,e.lanes=d,e;case E:return nr(a.children,c,d,n);case T:M=8,c|=24;break;case y:return e=Xn(12,a,n,c|2),e.elementType=y,e.lanes=d,e;case I:return e=Xn(13,a,n,c),e.elementType=I,e.lanes=d,e;case H:return e=Xn(19,a,n,c),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case D:M=10;break t;case O:M=9;break t;case C:M=11;break t;case B:M=14;break t;case X:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Xn(M,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function nr(e,n,a,o){return e=Xn(7,e,o,n),e.lanes=a,e}function xc(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function yc(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Ir=0,vl=null,_l=0,ni=[],ii=0,ir=null,Gi=1,Vi="";function ar(e,n){Br[Ir++]=_l,Br[Ir++]=vl,vl=e,_l=n}function Bp(e,n,a){ni[ii++]=Gi,ni[ii++]=Vi,ni[ii++]=ir,ir=e;var o=Gi;e=Vi;var c=32-zt(o)-1;o&=~(1<<c),a+=1;var d=32-zt(n)+c;if(30<d){var M=c-c%5;d=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Gi=1<<32-zt(n)+c|a<<c|o,Vi=d+e}else Gi=1<<d|a<<c|o,Vi=e}function Sc(e){e.return!==null&&(ar(e,1),Bp(e,1,0))}function Mc(e){for(;e===vl;)vl=Br[--Ir],Br[Ir]=null,_l=Br[--Ir],Br[Ir]=null;for(;e===ir;)ir=ni[--ii],ni[ii]=null,Vi=ni[--ii],ni[ii]=null,Gi=ni[--ii],ni[ii]=null}var Ln=null,Qe=null,Re=!1,rr=null,Si=!1,Ec=Error(r(519));function sr(e){var n=Error(r(418,""));throw qs(ti(n,e)),Ec}function Ip(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[Sn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)_e(vo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ve(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Pe(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mn(n,o.value,o.defaultValue,o.children),Pe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ev(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||sr(e)}function Fp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Ln=Ln.return}}function Xs(e){if(e!==Ln)return!1;if(!Re)return Fp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Qe&&sr(e),Fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Qe=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Qe=null}}else n===27?(n=Qe,La(e.type)?(e=Xf,Xf=null,Qe=e):Qe=n):Qe=Ln?hi(e.stateNode.nextSibling):null;return!0}function Ws(){Qe=Ln=null,Re=!1}function Hp(){var e=rr;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),rr=null),e}function qs(e){rr===null?rr=[e]:rr.push(e)}var Tc=tt(null),or=null,ki=null;function va(e,n,a){St(Tc,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Tc.current,xt(Tc)}function bc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ac(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var M=c.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=c;for(var P=0;P<n.length;P++)if(A.context===n[P]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),bc(d.return,a,e),o||(M=null);break t}d=A.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),bc(M,a,e),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===e){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function Ys(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=c.type;kn(c.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(c===wt.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Eo):e=[Eo])}c=c.return}e!==null&&Ac(n,e,a,o),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Gp(or,e)}function yl(e,n){return or===null&&lr(e),Gp(e,n)}function Gp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Bx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ix=s.unstable_scheduleCallback,Fx=s.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rc(){return{controller:new Bx,data:new Map,refCount:0}}function js(e){e.refCount--,e.refCount===0&&Ix(Fx,function(){e.controller.abort()})}var Zs=null,wc=0,Fr=0,Hr=null;function Hx(e,n){if(Zs===null){var a=Zs=[];wc=0,Fr=Uf(),Hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wc++,n.then(Vp,Vp),n}function Vp(){if(--wc===0&&Zs!==null){Hr!==null&&(Hr.status="fulfilled");var e=Zs;Zs=null,Fr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Gx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var kp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hx(e,n),kp!==null&&kp(e,n)};var ur=tt(null);function Cc(){var e=ur.current;return e!==null?e:We.pooledCache}function Sl(e,n){n===null?St(ur,ur.current):St(ur,n.pool)}function Xp(){var e=Cc();return e===null?null:{parent:un._currentValue,pool:e}}var Ks=Error(r(460)),Wp=Error(r(474)),Ml=Error(r(542)),Dc={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function El(){}function Yp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e;default:if(typeof n.status=="string")n.then(El,El);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e}throw Qs=n,Ks}}var Qs=null;function jp(){if(Qs===null)throw Error(r(459));var e=Qs;return Qs=null,e}function Zp(e){if(e===Ks||e===Ml)throw Error(r(483))}var _a=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(e),Pp(e,null,a),n}return pl(e,o,n,a),ml(e)}function Js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ht(e,a)}}function Nc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Oc=!1;function $s(){if(Oc){var e=Hr;if(e!==null)throw e}}function to(e,n,a,o){Oc=!1;var c=e.updateQueue;_a=!1;var d=c.firstBaseUpdate,M=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var P=A,$=P.next;P.next=null,M===null?d=$:M.next=$,M=P;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==M&&(A===null?ct.firstBaseUpdate=$:A.next=$,ct.lastBaseUpdate=P))}if(d!==null){var vt=c.baseState;M=0,ct=$=P=null,A=d;do{var nt=A.lane&-536870913,it=nt!==A.lane;if(it?(Me&nt)===nt:(o&nt)===nt){nt!==0&&nt===Fr&&(Oc=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=e,$t=A;nt=n;var Ie=a;switch($t.tag){case 1:if(ie=$t.payload,typeof ie=="function"){vt=ie.call(Ie,vt,nt);break t}vt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=$t.payload,nt=typeof ie=="function"?ie.call(Ie,vt,nt):ie,nt==null)break t;vt=g({},vt,nt);break t;case 2:_a=!0}}nt=A.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?($=ct=it,P=vt):ct=ct.next=it,M|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;it=A,A=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(P=vt),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,d===null&&(c.shared.lanes=0),wa|=M,e.lanes=M,e.memoizedState=vt}}function Kp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kp(a[e],n)}var Gr=tt(null),Tl=tt(0);function Jp(e,n){e=Qi,St(Tl,e),St(Gr,n),Qi=e|n.baseLanes}function Pc(){St(Tl,Qi),St(Gr,Gr.current)}function zc(){Qi=Tl.current,xt(Gr),xt(Tl)}var Sa=0,he=null,ze=null,an=null,bl=!1,Vr=!1,cr=!1,Al=0,eo=0,kr=null,Vx=0;function tn(){throw Error(r(321))}function Bc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Ic(e,n,a,o,c,d){return Sa=d,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Pm:zm,cr=!1,d=a(o,c),cr=!1,Vr&&(d=tm(n,a,o,c)),$p(e),d}function $p(e){z.H=Ll;var n=ze!==null&&ze.next!==null;if(Sa=0,an=ze=he=null,bl=!1,eo=0,kr=null,n)throw Error(r(300));e===null||gn||(e=e.dependencies,e!==null&&xl(e)&&(gn=!0))}function tm(e,n,a,o){he=e;var c=0;do{if(Vr&&(kr=null),eo=0,Vr=!1,25<=c)throw Error(r(301));if(c+=1,an=ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Zx,d=n(a,o)}while(Vr);return d}function kx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(he.flags|=1024),n}function Fc(){var e=Al!==0;return Al=0,e}function Hc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gc(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Sa=0,an=ze=he=null,Vr=!1,eo=Al=0,kr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?he.memoizedState=an=e:an=an.next=e,an}function rn(){if(ze===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=an===null?he.memoizedState:an.next;if(n!==null)an=n,ze=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},an===null?he.memoizedState=an=e:an=an.next=e}return an}function Vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=eo;return eo+=1,kr===null&&(kr=[]),e=Yp(kr,e,n),n=he,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Pm:zm),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===D)return Rn(e)}throw Error(r(438,String(e)))}function kc(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vc(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=rn();return Xc(n,ze,e)}function Xc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var M=c.next;c.next=d.next,d.next=M}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var A=M=null,P=null,$=n,ct=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(Me&vt)===vt:(Sa&vt)===vt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Fr&&(ct=!0);else if((Sa&nt)===nt){$=$.next,nt===Fr&&(ct=!0);continue}else vt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=vt,M=d):P=P.next=vt,he.lanes|=nt,wa|=nt;vt=$.action,cr&&a(d,vt),d=$.hasEagerState?$.eagerState:a(d,vt)}else nt={lane:vt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=nt,M=d):P=P.next=nt,he.lanes|=vt,wa|=vt;$=$.next}while($!==null&&$!==n);if(P===null?M=d:P.next=A,!kn(d,e.memoizedState)&&(gn=!0,ct&&(a=Hr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=P,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Wc(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do d=e(d,M.action),M=M.next;while(M!==c);kn(d,n.memoizedState)||(gn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function em(e,n,a){var o=he,c=rn(),d=Re;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!kn((ze||c).memoizedState,a);M&&(c.memoizedState=a,gn=!0),c=c.queue;var A=am.bind(null,o,c,e);if(io(2048,8,A,[e]),c.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Xr(9,Cl(),im.bind(null,o,c,a,n),null),We===null)throw Error(r(349));d||(Sa&124)!==0||nm(o,n,a)}return a}function nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Vc(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function im(e,n,a,o){n.value=a,n.getSnapshot=o,rm(n)&&sm(e)}function am(e,n,a){return a(function(){rm(n)&&sm(e)})}function rm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function sm(e){var n=Pr(e,2);n!==null&&Zn(n,e,2)}function qc(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),cr){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function om(e,n,a,o){return e.baseState=a,Xc(e,ze,typeof o=="function"?o:Wi)}function Xx(e,n,a,o,c){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,lm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function lm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=z.T,M={};z.T=M;try{var A=a(c,o),P=z.S;P!==null&&P(M,A),um(e,n,A)}catch($){Yc(e,n,$)}finally{z.T=d}}else try{d=a(c,o),um(e,n,d)}catch($){Yc(e,n,$)}}function um(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cm(e,n,o)},function(o){return Yc(e,n,o)}):cm(e,n,a)}function cm(e,n,a){n.status="fulfilled",n.value=a,fm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,lm(e,a)))}function Yc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fm(n),n=n.next;while(n!==o)}e.action=null}function fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hm(e,n){return n}function dm(e,n){if(Re){var a=We.formState;if(a!==null){t:{var o=he;if(Re){if(Qe){e:{for(var c=Qe,d=Si;c.nodeType!==8;){if(!d){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Qe=hi(c.nextSibling),o=c.data==="F!";break t}}sr(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Lm.bind(null,he,o),o.dispatch=a,o=qc(!1),d=Jc.bind(null,he,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Xx.bind(null,he,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function pm(e){var n=rn();return mm(n,ze,e)}function mm(e,n,a){if(n=Xc(e,n,hm)[0],e=wl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=no(n)}catch(M){throw M===Ks?Ml:M}else o=n;n=rn();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Xr(9,Cl(),Wx.bind(null,c,a),null)),[o,d,e]}function Wx(e,n){e.action=n}function gm(e){var n=rn(),a=ze;if(a!==null)return mm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Vc(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function vm(){return rn().memoizedState}function Dl(e,n,a,o){var c=Bn();o=o===void 0?null:o,he.flags|=e,c.memoizedState=Xr(1|n,Cl(),a,o)}function io(e,n,a,o){var c=rn();o=o===void 0?null:o;var d=c.memoizedState.inst;ze!==null&&o!==null&&Bc(o,ze.memoizedState.deps)?c.memoizedState=Xr(n,d,a,o):(he.flags|=e,c.memoizedState=Xr(1|n,d,a,o))}function _m(e,n){Dl(8390656,8,e,n)}function xm(e,n){io(2048,8,e,n)}function ym(e,n){return io(4,2,e,n)}function Sm(e,n){return io(4,4,e,n)}function Mm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Em(e,n,a){a=a!=null?a.concat([e]):null,io(4,4,Mm.bind(null,n,e),a)}function jc(){}function Tm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Bc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Bc(n,o[1]))return o[0];if(o=e(),cr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o}function Zc(e,n,a){return a===void 0||(Sa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=wg(),he.lanes|=e,wa|=e,a)}function Am(e,n,a,o){return kn(a,n)?a:Gr.current!==null?(e=Zc(e,a,o),kn(e,n)||(gn=!0),e):(Sa&42)===0?(gn=!0,e.memoizedState=a):(e=wg(),he.lanes|=e,wa|=e,n)}function Rm(e,n,a,o,c){var d=K.p;K.p=d!==0&&8>d?d:8;var M=z.T,A={};z.T=A,Jc(e,!1,n,a);try{var P=c(),$=z.S;if($!==null&&$(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=Gx(P,o);ao(e,n,ct,jn(e))}else ao(e,n,o,jn(e))}catch(vt){ao(e,n,{then:function(){},status:"rejected",reason:vt},jn())}finally{K.p=d,z.T=M}}function qx(){}function Kc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=wm(e).queue;Rm(e,c,n,j,a===null?qx:function(){return Cm(e),a(o)})}function wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cm(e){var n=wm(e).next.queue;ao(e,n,{},jn())}function Qc(){return Rn(Eo)}function Dm(){return rn().memoizedState}function Um(){return rn().memoizedState}function Yx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=xa(a);var o=ya(n,e,a);o!==null&&(Zn(o,n,a),Js(o,n,a)),n={cache:Rc()},e.payload=n;return}n=n.return}}function jx(e,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?Nm(n,a):(a=vc(e,n,a,o),a!==null&&(Zn(a,e,o),Om(a,n,o)))}function Lm(e,n,a){var o=jn();ao(e,n,a,o)}function ao(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Nm(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,A=d(M,a);if(c.hasEagerState=!0,c.eagerState=A,kn(A,M))return pl(e,n,c,0),We===null&&dl(),!1}catch{}finally{}if(a=vc(e,n,c,o),a!==null)return Zn(a,e,o),Om(a,n,o),!0}return!1}function Jc(e,n,a,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=vc(e,a,o,2),n!==null&&Zn(n,e,2)}function Ul(e){var n=e.alternate;return e===he||n!==null&&n===he}function Nm(e,n){Vr=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Om(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ht(e,a)}}var Ll={readContext:Rn,use:Rl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Pm={readContext:Rn,use:Rl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:_m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Dl(4194308,4,Mm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Dl(4194308,4,e,n)},useInsertionEffect:function(e,n){Dl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(cr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(cr){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=jx.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=qc(e);var n=e.queue,a=Lm.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:jc,useDeferredValue:function(e,n){var a=Bn();return Zc(a,e,n)},useTransition:function(){var e=qc(!1);return e=Rm.bind(null,he,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,c=Bn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Me&124)!==0||nm(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,_m(am.bind(null,o,d,e),[e]),o.flags|=2048,Xr(9,Cl(),im.bind(null,o,d,a,n),null),a},useId:function(){var e=Bn(),n=We.identifierPrefix;if(Re){var a=Vi,o=Gi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Vx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Qc,useFormState:dm,useActionState:dm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Jc.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:kc,useCacheRefresh:function(){return Bn().memoizedState=Yx.bind(null,he)}},zm={readContext:Rn,use:Rl,useCallback:Tm,useContext:Rn,useEffect:xm,useImperativeHandle:Em,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:bm,useReducer:wl,useRef:vm,useState:function(){return wl(Wi)},useDebugValue:jc,useDeferredValue:function(e,n){var a=rn();return Am(a,ze.memoizedState,e,n)},useTransition:function(){var e=wl(Wi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Qc,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=rn();return om(a,ze,e,n)},useMemoCache:kc,useCacheRefresh:Um},Zx={readContext:Rn,use:Rl,useCallback:Tm,useContext:Rn,useEffect:xm,useImperativeHandle:Em,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:bm,useReducer:Wc,useRef:vm,useState:function(){return Wc(Wi)},useDebugValue:jc,useDeferredValue:function(e,n){var a=rn();return ze===null?Zc(a,e,n):Am(a,ze.memoizedState,e,n)},useTransition:function(){var e=Wc(Wi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Qc,useFormState:gm,useActionState:gm,useOptimistic:function(e,n){var a=rn();return ze!==null?om(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:kc,useCacheRefresh:Um},Wr=null,ro=0;function Nl(e){var n=ro;return ro+=1,Wr===null&&(Wr=[]),Yp(Wr,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bm(e){var n=e._init;return n(e._payload)}function Im(e){function n(q,G){if(e){var Q=q.deletions;Q===null?(q.deletions=[G],q.flags|=16):Q.push(G)}}function a(q,G){if(!e)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function o(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Hi(q,G),q.index=0,q.sibling=null,q}function d(q,G,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<G?(q.flags|=67108866,G):Q):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,G,Q,dt){return G===null||G.tag!==6?(G=xc(Q,q.mode,dt),G.return=q,G):(G=c(G,Q),G.return=q,G)}function P(q,G,Q,dt){var Gt=Q.type;return Gt===E?ct(q,G,Q.props.children,dt,Q.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&Bm(Gt)===G.type)?(G=c(G,Q.props),so(G,Q),G.return=q,G):(G=gl(Q.type,Q.key,Q.props,null,q.mode,dt),so(G,Q),G.return=q,G)}function $(q,G,Q,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=yc(Q,q.mode,dt),G.return=q,G):(G=c(G,Q.children||[]),G.return=q,G)}function ct(q,G,Q,dt,Gt){return G===null||G.tag!==7?(G=nr(Q,q.mode,dt,Gt),G.return=q,G):(G=c(G,Q),G.return=q,G)}function vt(q,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=xc(""+G,q.mode,Q),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case _:return Q=gl(G.type,G.key,G.props,null,q.mode,Q),so(Q,G),Q.return=q,Q;case S:return G=yc(G,q.mode,Q),G.return=q,G;case X:var dt=G._init;return G=dt(G._payload),vt(q,G,Q)}if(ut(G)||ot(G))return G=nr(G,q.mode,Q,null),G.return=q,G;if(typeof G.then=="function")return vt(q,Nl(G),Q);if(G.$$typeof===D)return vt(q,yl(q,G),Q);Ol(q,G)}return null}function nt(q,G,Q,dt){var Gt=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:A(q,G,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Gt?P(q,G,Q,dt):null;case S:return Q.key===Gt?$(q,G,Q,dt):null;case X:return Gt=Q._init,Q=Gt(Q._payload),nt(q,G,Q,dt)}if(ut(Q)||ot(Q))return Gt!==null?null:ct(q,G,Q,dt,null);if(typeof Q.then=="function")return nt(q,G,Nl(Q),dt);if(Q.$$typeof===D)return nt(q,G,yl(q,Q),dt);Ol(q,Q)}return null}function it(q,G,Q,dt,Gt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(Q)||null,A(G,q,""+dt,Gt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case _:return q=q.get(dt.key===null?Q:dt.key)||null,P(G,q,dt,Gt);case S:return q=q.get(dt.key===null?Q:dt.key)||null,$(G,q,dt,Gt);case X:var pe=dt._init;return dt=pe(dt._payload),it(q,G,Q,dt,Gt)}if(ut(dt)||ot(dt))return q=q.get(Q)||null,ct(G,q,dt,Gt,null);if(typeof dt.then=="function")return it(q,G,Q,Nl(dt),Gt);if(dt.$$typeof===D)return it(q,G,Q,yl(G,dt),Gt);Ol(G,dt)}return null}function ie(q,G,Q,dt){for(var Gt=null,pe=null,qt=G,te=G=0,_n=null;qt!==null&&te<Q.length;te++){qt.index>te?(_n=qt,qt=null):_n=qt.sibling;var be=nt(q,qt,Q[te],dt);if(be===null){qt===null&&(qt=_n);break}e&&qt&&be.alternate===null&&n(q,qt),G=d(be,G,te),pe===null?Gt=be:pe.sibling=be,pe=be,qt=_n}if(te===Q.length)return a(q,qt),Re&&ar(q,te),Gt;if(qt===null){for(;te<Q.length;te++)qt=vt(q,Q[te],dt),qt!==null&&(G=d(qt,G,te),pe===null?Gt=qt:pe.sibling=qt,pe=qt);return Re&&ar(q,te),Gt}for(qt=o(qt);te<Q.length;te++)_n=it(qt,q,te,Q[te],dt),_n!==null&&(e&&_n.alternate!==null&&qt.delete(_n.key===null?te:_n.key),G=d(_n,G,te),pe===null?Gt=_n:pe.sibling=_n,pe=_n);return e&&qt.forEach(function(Ba){return n(q,Ba)}),Re&&ar(q,te),Gt}function $t(q,G,Q,dt){if(Q==null)throw Error(r(151));for(var Gt=null,pe=null,qt=G,te=G=0,_n=null,be=Q.next();qt!==null&&!be.done;te++,be=Q.next()){qt.index>te?(_n=qt,qt=null):_n=qt.sibling;var Ba=nt(q,qt,be.value,dt);if(Ba===null){qt===null&&(qt=_n);break}e&&qt&&Ba.alternate===null&&n(q,qt),G=d(Ba,G,te),pe===null?Gt=Ba:pe.sibling=Ba,pe=Ba,qt=_n}if(be.done)return a(q,qt),Re&&ar(q,te),Gt;if(qt===null){for(;!be.done;te++,be=Q.next())be=vt(q,be.value,dt),be!==null&&(G=d(be,G,te),pe===null?Gt=be:pe.sibling=be,pe=be);return Re&&ar(q,te),Gt}for(qt=o(qt);!be.done;te++,be=Q.next())be=it(qt,q,te,be.value,dt),be!==null&&(e&&be.alternate!==null&&qt.delete(be.key===null?te:be.key),G=d(be,G,te),pe===null?Gt=be:pe.sibling=be,pe=be);return e&&qt.forEach(function(Ky){return n(q,Ky)}),Re&&ar(q,te),Gt}function Ie(q,G,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:t:{for(var Gt=Q.key;G!==null;){if(G.key===Gt){if(Gt=Q.type,Gt===E){if(G.tag===7){a(q,G.sibling),dt=c(G,Q.props.children),dt.return=q,q=dt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&Bm(Gt)===G.type){a(q,G.sibling),dt=c(G,Q.props),so(dt,Q),dt.return=q,q=dt;break t}a(q,G);break}else n(q,G);G=G.sibling}Q.type===E?(dt=nr(Q.props.children,q.mode,dt,Q.key),dt.return=q,q=dt):(dt=gl(Q.type,Q.key,Q.props,null,q.mode,dt),so(dt,Q),dt.return=q,q=dt)}return M(q);case S:t:{for(Gt=Q.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(q,G.sibling),dt=c(G,Q.children||[]),dt.return=q,q=dt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}dt=yc(Q,q.mode,dt),dt.return=q,q=dt}return M(q);case X:return Gt=Q._init,Q=Gt(Q._payload),Ie(q,G,Q,dt)}if(ut(Q))return ie(q,G,Q,dt);if(ot(Q)){if(Gt=ot(Q),typeof Gt!="function")throw Error(r(150));return Q=Gt.call(Q),$t(q,G,Q,dt)}if(typeof Q.then=="function")return Ie(q,G,Nl(Q),dt);if(Q.$$typeof===D)return Ie(q,G,yl(q,Q),dt);Ol(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(q,G.sibling),dt=c(G,Q),dt.return=q,q=dt):(a(q,G),dt=xc(Q,q.mode,dt),dt.return=q,q=dt),M(q)):a(q,G)}return function(q,G,Q,dt){try{ro=0;var Gt=Ie(q,G,Q,dt);return Wr=null,Gt}catch(qt){if(qt===Ks||qt===Ml)throw qt;var pe=Xn(29,qt,null,q.mode);return pe.lanes=dt,pe.return=q,pe}finally{}}}var qr=Im(!0),Fm=Im(!1),ai=tt(null),Mi=null;function Ma(e){var n=e.alternate;St(cn,cn.current&1),St(ai,e),Mi===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(Mi=e)}function Hm(e){if(e.tag===22){if(St(cn,cn.current),St(ai,e),Mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Mi=e)}}else Ea()}function Ea(){St(cn,cn.current),St(ai,ai.current)}function qi(e){xt(ai),Mi===e&&(Mi=null),xt(cn)}var cn=tt(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||kf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function $c(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=jn(),c=xa(o);c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,o),n!==null&&(Zn(n,e,o),Js(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=jn(),c=xa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,o),n!==null&&(Zn(n,e,o),Js(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Zn(n,e,a),Js(n,e,a))}};function Gm(e,n,a,o,c,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,o)||!Vs(c,d):!0}function Vm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function fr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function km(e){zl(e)}function Xm(e){console.error(e)}function Wm(e){zl(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function qm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ef(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function Ym(e){return e=xa(e),e.tag=3,e}function jm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){qm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){qm(n,a,o),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Kx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Mi===null?Af():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Dc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(e,o,c)),!1;case 22:return a.flags|=65536,o===Dc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(e,o,c)),!1}throw Error(r(435,a.tag))}return wf(e,o,c),Af(),!1}if(Re)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ec&&(e=Error(r(422),{cause:o}),qs(ti(e,a)))):(o!==Ec&&(n=Error(r(423),{cause:o}),qs(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ti(o,a),c=ef(e.stateNode,o,c),Nc(e,c),Je!==4&&(Je=2)),!1;var d=Error(r(520),{cause:o});if(d=ti(d,a),po===null?po=[d]:po.push(d),Je!==4&&(Je=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ef(a.stateNode,o,e),Nc(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ym(c),jm(c,e,a,o),Nc(a,c),!1}a=a.return}while(a!==null);return!1}var Zm=Error(r(461)),gn=!1;function En(e,n,a,o){n.child=e===null?Fm(n,null,a,o):qr(n,e.child,a,o)}function Km(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return lr(n),o=Ic(e,n,a,M,d,c),A=Fc(),e!==null&&!gn?(Hc(e,n,c),Yi(e,n,c)):(Re&&A&&Sc(n),n.flags|=1,En(e,n,o,c),n.child)}function Qm(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!_c(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Jm(e,n,d,o,c)):(e=gl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!cf(e,c)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(M,o)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Hi(d,o),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(Vs(d,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=d,cf(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return nf(e,n,a,o,c)}function $m(e,n,a){var o=n.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return tg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,d!==null?d.cachePool:null),d!==null?Jp(n,d):Pc(),Hm(n);else return n.lanes=n.childLanes=536870912,tg(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Sl(n,d.cachePool),Jp(n,d),Ea(),n.memoizedState=null):(e!==null&&Sl(n,null),Pc(),Ea());return En(e,n,c,a),n.child}function tg(e,n,a,o){var c=Cc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Sl(n,null),Pc(),Hm(n),e!==null&&Ys(e,n,o,!0),null}function Il(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nf(e,n,a,o,c){return lr(n),a=Ic(e,n,a,o,void 0,c),o=Fc(),e!==null&&!gn?(Hc(e,n,c),Yi(e,n,c)):(Re&&o&&Sc(n),n.flags|=1,En(e,n,a,c),n.child)}function eg(e,n,a,o,c,d){return lr(n),n.updateQueue=null,a=tm(n,o,a,c),$p(e),o=Fc(),e!==null&&!gn?(Hc(e,n,d),Yi(e,n,d)):(Re&&o&&Sc(n),n.flags|=1,En(e,n,a,d),n.child)}function ng(e,n,a,o,c){if(lr(n),n.stateNode===null){var d=zr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Rn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=tf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Uc(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Rn(M):zr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&($c(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&tf.enqueueReplaceState(d,d.state,null),to(n,o,d,c),$s(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,P=fr(a,A);d.props=P;var $=d.context,ct=a.contextType;M=zr,typeof ct=="object"&&ct!==null&&(M=Rn(ct));var vt=a.getDerivedStateFromProps;ct=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||$!==M)&&Vm(n,d,o,M),_a=!1;var nt=n.memoizedState;d.state=nt,to(n,o,d,c),$s(),$=n.memoizedState,A||nt!==$||_a?(typeof vt=="function"&&($c(n,a,vt,o),$=n.memoizedState),(P=_a||Gm(n,a,P,o,nt,$,M))?(ct||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=M,o=P):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Lc(e,n),M=n.memoizedProps,ct=fr(a,M),d.props=ct,vt=n.pendingProps,nt=d.context,$=a.contextType,P=zr,typeof $=="object"&&$!==null&&(P=Rn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==vt||nt!==P)&&Vm(n,d,o,P),_a=!1,nt=n.memoizedState,d.state=nt,to(n,o,d,c),$s();var it=n.memoizedState;M!==vt||nt!==it||_a||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof A=="function"&&($c(n,a,A,o),it=n.memoizedState),(ct=_a||Gm(n,a,ct,o,nt,it,P)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,it,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,it,P)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=P,o=ct):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Il(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=qr(n,e.child,null,c),n.child=qr(n,null,a,c)):En(e,n,a,c),n.memoizedState=d.state,e=n.child):e=Yi(e,n,c),e}function ig(e,n,a,o){return Ws(),n.flags|=256,En(e,n,a,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(e){return{baseLanes:e,cachePool:Xp()}}function sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function ag(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?Ma(n):Ea(),Re){var A=Qe,P;if(P=A){t:{for(P=A,A=Si;P.nodeType!==8;){if(!A){A=null;break t}if(P=hi(P.nextSibling),P===null){A=null;break t}}A=P}A!==null?(n.memoizedState={dehydrated:A,treeContext:ir!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=A,P.return=n,n.child=P,Ln=n,Qe=null,P=!0):P=!1}P||sr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return kf(A)?n.lanes=32:n.lanes=536870912,null;qi(n)}return A=o.children,o=o.fallback,c?(Ea(),c=n.mode,A=Fl({mode:"hidden",children:A},c),o=nr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,c=n.child,c.memoizedState=rf(a),c.childLanes=sf(e,M,a),n.memoizedState=af,o):(Ma(n),of(n,A))}if(P=e.memoizedState,P!==null&&(A=P.dehydrated,A!==null)){if(d)n.flags&256?(Ma(n),n.flags&=-257,n=lf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),c=o.fallback,A=n.mode,o=Fl({mode:"visible",children:o.children},A),c=nr(c,A,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,qr(n,e.child,null,a),o=n.child,o.memoizedState=rf(a),o.childLanes=sf(e,M,a),n.memoizedState=af,n=c);else if(Ma(n),kf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var $=M.dgst;M=$,o=Error(r(419)),o.stack="",o.digest=M,qs({value:o,source:null,stack:null}),n=lf(e,n,a)}else if(gn||Ys(e,n,a,!1),M=(a&e.childLanes)!==0,gn||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Pr(e,o),Zn(M,e,o),Zm;A.data==="$?"||Af(),n=lf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Qe=hi(A.nextSibling),Ln=n,Re=!0,rr=null,Si=!1,e!==null&&(ni[ii++]=Gi,ni[ii++]=Vi,ni[ii++]=ir,Gi=e.id,Vi=e.overflow,ir=n),n=of(n,o.children),n.flags|=4096);return n}return c?(Ea(),c=o.fallback,A=n.mode,P=e.child,$=P.sibling,o=Hi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Hi($,c):(c=nr(c,A,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,A=e.child.memoizedState,A===null?A=rf(a):(P=A.cachePool,P!==null?($=un._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Xp(),A={baseLanes:A.baseLanes|a,cachePool:P}),c.memoizedState=A,c.childLanes=sf(e,M,a),n.memoizedState=af,o):(Ma(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function of(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function lf(e,n,a){return qr(n,e.child,null,a),e=of(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),bc(e.return,n,a)}function uf(e,n,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function sg(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(En(e,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rg(e,a,n);else if(e.tag===19)rg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Pl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),uf(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Pl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}uf(n,!0,a,null,d);break;case"together":uf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ys(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function Qx(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),va(n,un,e.memoizedState.cache),Ws();break;case 27:case 5:Jt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(e,n,a):(Ma(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ys(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return sg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,$m(e,n,a);case 24:va(n,un,e.memoizedState.cache)}return Yi(e,n,a)}function og(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return gn=!1,Qx(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Re&&(n.flags&1048576)!==0&&Bp(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")_c(o)?(e=fr(o,e),n.tag=1,n=ng(null,n,o,e,a)):(n.tag=0,n=nf(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===C){n.tag=11,n=Km(null,n,o,e,a);break t}else if(c===B){n.tag=14,n=Qm(null,n,o,e,a);break t}}throw n=mt(o)||o,Error(r(306,n,""))}}return n;case 0:return nf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=fr(o,n.pendingProps),ng(e,n,o,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Lc(e,n),to(n,o,null,a);var M=n.memoizedState;if(o=M.cache,va(n,un,o),o!==d.cache&&Ac(n,[un],a,!0),$s(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ig(e,n,o,a);break t}else if(o!==c){c=ti(Error(r(424)),n),qs(c),n=ig(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=hi(e.firstChild),Ln=n,Re=!0,rr=null,Si=!0,a=Fm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ws(),o===c){n=Yi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Il(e,n),e===null?(a=fv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=$l(Mt.current).createElement(a),o[on]=n,o[Sn]=e,bn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=fv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Jt(n),e===null&&Re&&(o=n.stateNode=lv(n.type,n.pendingProps,Mt.current),Ln=n,Si=!0,c=Qe,La(n.type)?(Xf=c,Qe=hi(o.firstChild)):Qe=c),En(e,n,n.pendingProps.children,a),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=o=Qe)&&(o=by(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Ln=n,Qe=hi(o.firstChild),Si=!1,c=!0):c=!1),c||sr(n)),Jt(n),c=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,Hf(c,d)?o=null:M!==null&&Hf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Ic(e,n,kx,null,null,a),Eo._currentValue=c),Il(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Qe)&&(a=Ay(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Ln=n,Qe=null,e=!0):e=!1),e||sr(n)),null;case 13:return ag(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qr(n,null,o,a):En(e,n,o,a),n.child;case 11:return Km(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,lr(n),c=Rn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,a);case 15:return Jm(e,n,n.type,n.pendingProps,a);case 19:return sg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Fl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return $m(e,n,a);case 24:return lr(n),o=Rn(un),e===null?(c=Cc(),c===null&&(c=We,d=Rc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Uc(n),va(n,un,c)):((e.lanes&a)!==0&&(Lc(e,n),to(n,null,null,a),$s()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,un,o)):(o=d.cache,va(n,un,o),o!==c.cache&&Ac(n,[un],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gv(n)){if(n=ai.current,n!==null&&((Me&4194048)===Me?Mi!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Mi))throw Qs=Dc,Wp;e.flags|=8192}}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,Kr|=n)}function oo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Jx(e,n,a){var o=n.pendingProps;switch(Mc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(un),ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xs(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(Ze(n),lg(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),Ze(n),lg(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&ji(n),Ze(n),n.flags&=-16777217),null;case 27:Oe(n),a=Mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=J.current,Xs(n)?Ip(n):(e=lv(c,o,a),n.stateNode=e,ji(n))}return Ze(n),null;case 5:if(Oe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=J.current,Xs(n))Ip(n);else{switch(c=$l(Mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[on]=n,e[Sn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Xs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ev(e.nodeValue,a)),e||sr(n)}else e=$l(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=Hp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Ze(n),null;case 4:return ue(),e===null&&Pf(n.stateNode.containerInfo),Ze(n),null;case 10:return Xi(n.type),Ze(n),null;case 19:if(xt(cn),c=n.memoizedState,c===null)return Ze(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)oo(c,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Pl(e),d!==null){for(n.flags|=128,oo(c,!1),e=d.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zp(a,e),a=a.sibling;return St(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ge()>kl&&(n.flags|=128,o=!0,oo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Pl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),oo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Re)return Ze(n),null}else 2*ge()-c.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,oo(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ge(),n.sibling=null,e=cn.current,St(cn,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return qi(n),zc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function $x(e,n){switch(Mc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(un),ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(cn),null;case 4:return ue(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),zc(),e!==null&&xt(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function ug(e,n){switch(Mc(n),n.tag){case 3:Xi(un),ue();break;case 26:case 27:case 5:Oe(n);break;case 4:ue();break;case 13:qi(n);break;case 19:xt(cn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),zc(),e!==null&&xt(ur);break;case 24:Xi(un)}}function lo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==c)}}catch(A){ke(n,n.return,A)}}function Ta(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,c=n;var P=a,$=A;try{$()}catch(ct){ke(c,P,ct)}}}o=o.next}while(o!==d)}}catch(ct){ke(n,n.return,ct)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Qp(n,a)}catch(o){ke(e,e.return,o)}}}function fg(e,n,a){a.props=fr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ke(e,n,o)}}function uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){ke(e,n,c)}}function Ei(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){ke(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ke(e,n,c)}else a.current=null}function hg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){ke(e,e.return,c)}}function ff(e,n,a){try{var o=e.stateNode;yy(o,e.type,a,n),o[Sn]=n}catch(c){ke(e,e.return,c)}}function dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Gl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,n,a),e=e.sibling;e!==null;)Gl(e,n,a),e=e.sibling}function pg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[on]=e,n[Sn]=a}catch(d){ke(e,e.return,d)}}var Zi=!1,en=!1,pf=!1,mg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function ty(e,n){if(e=e.containerInfo,If=ru,e=Ap(e),fc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,A=-1,P=-1,$=0,ct=0,vt=e,nt=null;e:for(;;){for(var it;vt!==a||c!==0&&vt.nodeType!==3||(A=M+c),vt!==d||o!==0&&vt.nodeType!==3||(P=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(it=vt.firstChild)!==null;)nt=vt,vt=it;for(;;){if(vt===e)break e;if(nt===a&&++$===c&&(A=M),nt===d&&++ct===o&&(P=M),(it=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=it}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},ru=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ie=fr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ie,d),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){ke(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function gg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),o&4&&lo(5,a);break;case 1:if(ba(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){ke(a,a.return,M)}else{var c=fr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ke(a,a.return,M)}}o&64&&cg(a),o&512&&uo(a,a.return);break;case 3:if(ba(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qp(e,n)}catch(M){ke(a,a.return,M)}}break;case 27:n===null&&o&4&&pg(a);case 26:case 5:ba(e,a),n===null&&o&4&&hg(a),o&512&&uo(a,a.return);break;case 12:ba(e,a);break;case 13:ba(e,a),o&4&&xg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=uy.bind(null,a),Ry(e,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||en,c=Zi;var d=en;Zi=o,(en=n)&&!d?Aa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),Zi=c,en=d}break;case 30:break;default:ba(e,a)}}function vg(e){var n=e.alternate;n!==null&&(e.alternate=null,vg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&da(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,In=!1;function Ki(e,n,a){for(a=a.child;a!==null;)_g(e,n,a),a=a.sibling}function _g(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:en||Ei(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ei(a,n);var o=Ye,c=In;La(a.type)&&(Ye=a.stateNode,In=!1),Ki(e,n,a),xo(a.stateNode),Ye=o,In=c;break;case 5:en||Ei(a,n);case 6:if(o=Ye,c=In,Ye=null,Ki(e,n,a),Ye=o,In=c,Ye!==null)if(In)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(d){ke(a,n,d)}else try{Ye.removeChild(a.stateNode)}catch(d){ke(a,n,d)}break;case 18:Ye!==null&&(In?(e=Ye,sv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ro(e)):sv(Ye,a.stateNode));break;case 4:o=Ye,c=In,Ye=a.stateNode.containerInfo,In=!0,Ki(e,n,a),Ye=o,In=c;break;case 0:case 11:case 14:case 15:en||Ta(2,a,n),en||Ta(4,a,n),Ki(e,n,a);break;case 1:en||(Ei(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fg(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ki(e,n,a),en=o;break;default:Ki(e,n,a)}}function xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ro(e)}catch(a){ke(n,n.return,a)}}function ey(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mg),n;default:throw Error(r(435,e.tag))}}function mf(e,n){var a=ey(e);n.forEach(function(o){var c=cy.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(La(A.type)){Ye=A.stateNode,In=!1;break t}break;case 5:Ye=A.stateNode,In=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,In=!0;break t}A=A.return}if(Ye===null)throw Error(r(160));_g(d,M,c),Ye=null,In=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yg(n,e),n=n.sibling}var fi=null;function yg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ta(3,e,e.return),lo(3,e),Ta(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(en||a===null||Ei(a,a.return)),o&64&&Zi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=fi;if(Wn(n,e),qn(e),o&512&&(en||a===null||Ei(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ha]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),bn(d,o,a),d[on]=e,nn(d),o=d;break t;case"link":var M=pv("link","href",c).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}d=c.createElement(o),bn(d,o,a),c.head.appendChild(d);break;case"meta":if(M=pv("meta","content",c).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}d=c.createElement(o),bn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[on]=e,nn(d),o=d}e.stateNode=o}else mv(c,e.type,e.stateNode);else e.stateNode=dv(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?mv(c,e.type,e.stateNode):dv(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(en||a===null||Ei(a,a.return)),a!==null&&o&4&&ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(en||a===null||Ei(a,a.return)),e.flags&32){c=e.stateNode;try{yi(c,"")}catch(it){ke(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,ff(e,c,a!==null?a.memoizedProps:c)),o&1024&&(pf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){ke(e,e.return,it)}}break;case 3:if(nu=null,c=fi,fi=tu(n.containerInfo),Wn(n,e),fi=c,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(n.containerInfo)}catch(it){ke(e,e.return,it)}pf&&(pf=!1,Sg(e));break;case 4:o=fi,fi=tu(e.stateNode.containerInfo),Wn(n,e),qn(e),fi=o;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sf=ge()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,mf(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Zi,ct=en;if(Zi=$||c,en=ct||P,Wn(n,e),en=ct,Zi=$,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Zi||en||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(d=P.stateNode,c)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=P.stateNode;var vt=P.memoizedProps.style,nt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){ke(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){ke(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,mf(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,mf(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(dg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=hf(e);Gl(e,d,c);break;case 5:var M=a.stateNode;a.flags&32&&(yi(M,""),a.flags&=-33);var A=hf(e);Gl(e,A,M);break;case 3:case 4:var P=a.stateNode.containerInfo,$=hf(e);df(e,$,P);break;default:throw Error(r(161))}}catch(ct){ke(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ba(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hr(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),hr(n);break;case 27:xo(n.stateNode);case 26:case 5:Ei(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Aa(c,d,a),lo(4,d);break;case 1:if(Aa(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){ke(o,o.return,$)}if(o=d,c=o.updateQueue,c!==null){var A=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Kp(P[c],A)}catch($){ke(o,o.return,$)}}a&&M&64&&cg(d),uo(d,d.return);break;case 27:pg(d);case 26:case 5:Aa(c,d,a),a&&o===null&&M&4&&hg(d),uo(d,d.return);break;case 12:Aa(c,d,a);break;case 13:Aa(c,d,a),a&&M&4&&xg(c,d);break;case 22:d.memoizedState===null&&Aa(c,d,a),uo(d,d.return);break;case 30:break;default:Aa(c,d,a)}n=n.sibling}}function gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&js(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(e,n,a,o),n=n.sibling}function Mg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),c&2048&&lo(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e)));break;case 12:if(c&2048){Ti(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){ke(n,n.return,P)}}else Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ti(e,n,a,o):co(e,n):d._visibility&2?Ti(e,n,a,o):(d._visibility|=2,Yr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&gf(M,n);break;case 24:Ti(e,n,a,o),c&2048&&vf(n.alternate,n);break;default:Ti(e,n,a,o)}}function Yr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,A=a,P=o,$=M.flags;switch(M.tag){case 0:case 11:case 15:Yr(d,M,A,P,c),lo(8,M);break;case 23:break;case 22:var ct=M.stateNode;M.memoizedState!==null?ct._visibility&2?Yr(d,M,A,P,c):co(d,M):(ct._visibility|=2,Yr(d,M,A,P,c)),c&&$&2048&&gf(M.alternate,M);break;case 24:Yr(d,M,A,P,c),c&&$&2048&&vf(M.alternate,M);break;default:Yr(d,M,A,P,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:co(a,o),c&2048&&gf(o.alternate,o);break;case 24:co(a,o),c&2048&&vf(o.alternate,o);break;default:co(a,o)}n=n.sibling}}var fo=8192;function jr(e){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 26:jr(e),e.flags&fo&&e.memoizedState!==null&&Hy(fi,e.memoizedState,e.memoizedProps);break;case 5:jr(e);break;case 3:case 4:var n=fi;fi=tu(e.stateNode.containerInfo),jr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=fo,fo=16777216,jr(e),fo=n):jr(e));break;default:jr(e)}}function Tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Ag(o,e)}Tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):ho(e);break;default:ho(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Ag(o,e)}Tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function Ag(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var c=o.sibling,d=o.return;if(vg(o),o===a){vn=null;break t}if(c!==null){c.return=d,vn=c;break t}vn=d}}}var ny={getCacheForType:function(e){var n=Rn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},iy=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,ve=null,Me=0,Ne=0,Yn=null,Ra=!1,Zr=!1,_f=!1,Qi=0,Je=0,wa=0,dr=0,xf=0,ri=0,Kr=0,po=null,Fn=null,yf=!1,Sf=0,kl=1/0,Xl=null,Ca=null,Tn=0,Da=null,Qr=null,Jr=0,Mf=0,Ef=null,Rg=null,mo=0,Tf=null;function jn(){if((Le&2)!==0&&Me!==0)return Me&-Me;if(z.T!==null){var e=Fr;return e!==0?e:Uf()}return Te()}function wg(){ri===0&&(ri=(Me&536870912)===0||Re?k():536870912);var e=ai.current;return e!==null&&(e.flags|=32),ri}function Zn(e,n,a){(e===We&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ua(e,Me,ri,!1)),It(e,a),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(dr|=a),Je===4&&Ua(e,Me,ri,!1)),bi(e))}function Cg(e,n,a){if((Le&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=o?sy(e,n):Rf(e,n,!0),d=o;do{if(c===0){Zr&&!o&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!ay(a)){c=Rf(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;c=po;var P=A.current.memoizedState.isDehydrated;if(P&&($r(A,M).flags|=256),M=Rf(A,M,!1),M!==2){if(_f&&!P){A.errorRecoveryDisabledLanes|=d,dr|=d,c=4;break t}d=Fn,Fn=c,d!==null&&(Fn===null?Fn=d:Fn.push.apply(Fn,d))}c=M}if(d=!1,c!==2)continue}}if(c===1){$r(e,0),Ua(e,n,0,!0);break}t:{switch(o=e,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,ri,!Ra);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Sf+300-ge(),10<c)){if(Ua(o,n,ri,!Ra),jt(o,0,!0)!==0)break t;o.timeoutHandle=av(Dg.bind(null,o,a,Fn,Xl,yf,n,ri,dr,Kr,Ra,d,2,-0,0),c);break t}Dg(o,a,Fn,Xl,yf,n,ri,dr,Kr,Ra,d,0,-0,0)}}break}while(!0);bi(e)}function Dg(e,n,a,o,c,d,M,A,P,$,ct,vt,nt,it){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:Fy},Eg(n),vt=Gy(),vt!==null)){e.cancelPendingCommit=vt(Bg.bind(null,e,n,d,a,o,c,M,A,P,ct,1,nt,it)),Ua(e,d,M,!$);return}Bg(e,n,d,a,o,c,M,A,P)}function ay(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!kn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,o){n&=~xf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-zt(c),M=1<<d;o[d]=-1,c&=~M}a!==0&&_t(e,a,n)}function Wl(){return(Le&6)===0?(go(0),!1):!0}function bf(){if(ve!==null){if(Ne===0)var e=ve.return;else e=ve,ki=or=null,Gc(e),Wr=null,ro=0,e=ve;for(;e!==null;)ug(e.alternate,e),e=e.return;ve=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,My(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),bf(),We=e,ve=a=Hi(e.current,null),Me=n,Ne=0,Yn=null,Ra=!1,Zr=Ct(e,n),_f=!1,Kr=ri=xf=dr=wa=Je=0,Fn=po=null,yf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-zt(o),d=1<<c;n|=e[c],o&=~d}return Qi=n,dl(),a}function Ug(e,n){he=null,z.H=Ll,n===Ks||n===Ml?(n=jp(),Ne=3):n===Wp?(n=jp(),Ne=4):Ne=n===Zm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ve===null&&(Je=1,Bl(e,ti(n,e.current)))}function Lg(){var e=z.H;return z.H=Ll,e===null?Ll:e}function Ng(){var e=z.A;return z.A=ny,e}function Af(){Je=4,Ra||(Me&4194048)!==Me&&ai.current!==null||(Zr=!0),(wa&134217727)===0&&(dr&134217727)===0||We===null||Ua(We,Me,ri,!1)}function Rf(e,n,a){var o=Le;Le|=2;var c=Lg(),d=Ng();(We!==e||Me!==n)&&(Xl=null,$r(e,n)),n=!1;var M=Je;t:do try{if(Ne!==0&&ve!==null){var A=ve,P=Yn;switch(Ne){case 8:bf(),M=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var $=Ne;if(Ne=0,Yn=null,ts(e,A,P,$),a&&Zr){M=0;break t}break;default:$=Ne,Ne=0,Yn=null,ts(e,A,P,$)}}ry(),M=Je;break}catch(ct){Ug(e,ct)}while(!0);return n&&e.shellSuspendCounter++,ki=or=null,Le=o,z.H=c,z.A=d,ve===null&&(We=null,Me=0,dl()),M}function ry(){for(;ve!==null;)Og(ve)}function sy(e,n){var a=Le;Le|=2;var o=Lg(),c=Ng();We!==e||Me!==n?(Xl=null,kl=ge()+500,$r(e,n)):Zr=Ct(e,n);t:do try{if(Ne!==0&&ve!==null){n=ve;var d=Yn;e:switch(Ne){case 1:Ne=0,Yn=null,ts(e,n,d,1);break;case 2:case 9:if(qp(d)){Ne=0,Yn=null,Pg(n);break}n=function(){Ne!==2&&Ne!==9||We!==e||(Ne=7),bi(e)},d.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:qp(d)?(Ne=0,Yn=null,Pg(n)):(Ne=0,Yn=null,ts(e,n,d,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var A=ve;if(!M||gv(M)){Ne=0,Yn=null;var P=A.sibling;if(P!==null)ve=P;else{var $=A.return;$!==null?(ve=$,ql($)):ve=null}break e}}Ne=0,Yn=null,ts(e,n,d,5);break;case 6:Ne=0,Yn=null,ts(e,n,d,6);break;case 8:bf(),Je=6;break t;default:throw Error(r(462))}}oy();break}catch(ct){Ug(e,ct)}while(!0);return ki=or=null,z.H=o,z.A=c,Le=a,ve!==null?0:(We=null,Me=0,dl(),Je)}function oy(){for(;ve!==null&&!yn();)Og(ve)}function Og(e){var n=og(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?ql(e):ve=n}function Pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=eg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=eg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Gc(n);default:ug(a,n),n=ve=zp(n,Qi),n=og(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?ql(e):ve=n}function ts(e,n,a,o){ki=or=null,Gc(n),Wr=null,ro=0;var c=n.return;try{if(Kx(e,c,n,a,Me)){Je=1,Bl(e,ti(a,e.current)),ve=null;return}}catch(d){if(c!==null)throw ve=c,d;Je=1,Bl(e,ti(a,e.current)),ve=null;return}n.flags&32768?(Re||o===1?e=!0:Zr||(Me&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),zg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){zg(n,Ra);return}e=n.return;var a=Jx(n.alternate,n,Qi);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);Je===0&&(Je=5)}function zg(e,n){do{var a=$x(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Je=6,ve=null}function Bg(e,n,a,o,c,d,M,A,P){e.cancelPendingCommit=null;do Yl();while(Tn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=gc,Rt(e,a,d,M,A,P),e===We&&(ve=We=null,Me=0),Qr=n,Da=e,Jr=a,Mf=d,Ef=c,Rg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fy(se,function(){return Vg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=K.p,K.p=2,M=Le,Le|=4;try{ty(e,n,a)}finally{Le=M,K.p=c,z.T=o}}Tn=1,Ig(),Fg(),Hg()}}function Ig(){if(Tn===1){Tn=0;var e=Da,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var c=Le;Le|=4;try{yg(n,e);var d=Ff,M=Ap(e.containerInfo),A=d.focusedElem,P=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&bp(A.ownerDocument.documentElement,A)){if(P!==null&&fc(A)){var $=P.start,ct=P.end;if(ct===void 0&&(ct=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ct,A.value.length);else{var vt=A.ownerDocument||document,nt=vt&&vt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ie=A.textContent.length,$t=Math.min(P.start,ie),Ie=P.end===void 0?$t:Math.min(P.end,ie);!it.extend&&$t>Ie&&(M=Ie,Ie=$t,$t=M);var q=Tp(A,$t),G=Tp(A,Ie);if(q&&G&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var Q=vt.createRange();Q.setStart(q.node,q.offset),it.removeAllRanges(),$t>Ie?(it.addRange(Q),it.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),it.addRange(Q))}}}}for(vt=[],it=A;it=it.parentNode;)it.nodeType===1&&vt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var dt=vt[A];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}ru=!!If,Ff=If=null}finally{Le=c,K.p=o,z.T=a}}e.current=n,Tn=2}}function Fg(){if(Tn===2){Tn=0;var e=Da,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var c=Le;Le|=4;try{gg(e,n.alternate,n)}finally{Le=c,K.p=o,z.T=a}}Tn=3}}function Hg(){if(Tn===4||Tn===3){Tn=0,Ee();var e=Da,n=Qr,a=Jr,o=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Qr=Da=null,Gg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ca=null),Ue(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];d(A.value,{componentStack:A.stack})}}finally{z.T=n,K.p=c}}(Jr&3)!==0&&Yl(),bi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Tf?mo++:(mo=0,Tf=e):mo=0,go(0)}}function Gg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,js(n)))}function Yl(e){return Ig(),Fg(),Hg(),Vg()}function Vg(){if(Tn!==5)return!1;var e=Da,n=Mf;Mf=0;var a=Ue(Jr),o=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=Ef,Ef=null;var d=Da,M=Jr;if(Tn=0,Qr=Da=null,Jr=0,(Le&6)!==0)throw Error(r(331));var A=Le;if(Le|=4,bg(d.current),Mg(d,d.current,M,a),Le=A,go(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,d)}catch{}return!0}finally{K.p=c,z.T=o,Gg(e,n)}}function kg(e,n,a){n=ti(a,n),n=ef(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(It(e,2),bi(e))}function ke(e,n,a){if(e.tag===3)kg(e,e,a);else for(;n!==null;){if(n.tag===3){kg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ti(a,e),a=Ym(2),o=ya(n,a,2),o!==null&&(jm(a,o,n,e),It(o,2),bi(o));break}}n=n.return}}function wf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new iy;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(_f=!0,c.add(a),e=ly.bind(null,e,n,a),n.then(e,e))}function ly(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Me&a)===a&&(Je===4||Je===3&&(Me&62914560)===Me&&300>ge()-Sf?(Le&2)===0&&$r(e,0):xf|=a,Kr===Me&&(Kr=0)),bi(e)}function Xg(e,n){n===0&&(n=Nt()),e=Pr(e,n),e!==null&&(It(e,n),bi(e))}function uy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Xg(e,a)}function cy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Xg(e,a)}function fy(e,n){return xe(e,n)}var jl=null,es=null,Cf=!1,Zl=!1,Df=!1,pr=0;function bi(e){e!==es&&e.next===null&&(es===null?jl=es=e:es=es.next=e),Zl=!0,Cf||(Cf=!0,dy())}function go(e,n){if(!Df&&Zl){Df=!0;do for(var a=!1,o=jl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var M=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=c&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,jg(o,d))}else d=Me,d=jt(o,o===We?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ct(o,d)||(a=!0,jg(o,d));o=o.next}while(a);Df=!1}}function hy(){Wg()}function Wg(){Zl=Cf=!1;var e=0;pr!==0&&(Sy()&&(e=pr),pr=0);for(var n=ge(),a=null,o=jl;o!==null;){var c=o.next,d=qg(o,n);d===0?(o.next=null,a===null?jl=c:a.next=c,c===null&&(es=a)):(a=o,(e!==0||(d&3)!==0)&&(Zl=!0)),o=c}go(e)}function qg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-zt(d),A=1<<M,P=c[M];P===-1?((A&a)===0||(A&o)!==0)&&(c[M]=re(A,n)):P<=n&&(e.expiredLanes|=A),d&=~A}if(n=We,a=Me,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&F(o),Ue(a)){case 2:case 8:a=Zt;break;case 32:a=se;break;case 268435456:a=N;break;default:a=se}return o=Yg.bind(null,e),a=xe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&F(o),e.callbackPriority=2,e.callbackNode=null,2}function Yg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yl()&&e.callbackNode!==a)return null;var o=Me;return o=jt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cg(e,o,n),qg(e,ge()),e.callbackNode!=null&&e.callbackNode===a?Yg.bind(null,e):null)}function jg(e,n){if(Yl())return null;Cg(e,n,!0)}function dy(){Ey(function(){(Le&6)!==0?xe(ye,hy):Wg()})}function Uf(){return pr===0&&(pr=k()),pr}function Zg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function Kg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function py(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Zg((c[Sn]||null).action),M=o.submitter;M&&(n=(n=M[Sn]||null)?Zg(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var A=new cl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var P=M?Kg(c,M):new FormData(c);Kc(a,{pending:!0,data:P,method:c.method,action:d},null,P)}}else typeof d=="function"&&(A.preventDefault(),P=M?Kg(c,M):new FormData(c),Kc(a,{pending:!0,data:P,method:c.method,action:d},d,P))},currentTarget:c}]})}}for(var Lf=0;Lf<mc.length;Lf++){var Nf=mc[Lf],my=Nf.toLowerCase(),gy=Nf[0].toUpperCase()+Nf.slice(1);ci(my,"on"+gy)}ci(Cp,"onAnimationEnd"),ci(Dp,"onAnimationIteration"),ci(Up,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Nx,"onTransitionRun"),ci(Ox,"onTransitionStart"),ci(Px,"onTransitionCancel"),ci(Lp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Qg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],P=A.instance,$=A.currentTarget;if(A=A.listener,P!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=$;try{d(c)}catch(ct){zl(ct)}c.currentTarget=null,d=P}else for(M=0;M<o.length;M++){if(A=o[M],P=A.instance,$=A.currentTarget,A=A.listener,P!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=$;try{d(c)}catch(ct){zl(ct)}c.currentTarget=null,d=P}}}}function _e(e,n){var a=n[Ka];a===void 0&&(a=n[Ka]=new Set);var o=e+"__bubble";a.has(o)||(Jg(n,e,2,!1),a.add(o))}function Of(e,n,a){var o=0;n&&(o|=4),Jg(a,e,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[Kl]){e[Kl]=!0,al.forEach(function(a){a!=="selectionchange"&&(vy.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Of("selectionchange",!1,n))}}function Jg(e,n,a,o){switch(Mv(n)){case 2:var c=Xy;break;case 8:c=Wy;break;default:c=Zf}a=c.bind(null,n,a,e),c=void 0,!nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function zf(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===c)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;A!==null;){if(M=Oi(A),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=d=M;continue t}A=A.parentNode}}o=o.return}rp(function(){var $=d,ct=tc(a),vt=[];t:{var nt=Np.get(e);if(nt!==void 0){var it=cl,ie=e;switch(e){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":it=fx;break;case"focusin":ie="focus",it=sc;break;case"focusout":ie="blur",it=sc;break;case"beforeblur":case"afterblur":it=sc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=px;break;case Cp:case Dp:case Up:it=nx;break;case Lp:it=gx;break;case"scroll":case"scrollend":it=Q0;break;case"wheel":it=_x;break;case"copy":case"cut":case"paste":it=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=cp;break;case"toggle":case"beforetoggle":it=yx}var $t=(n&4)!==0,Ie=!$t&&(e==="scroll"||e==="scrollend"),q=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var G=$,Q;G!==null;){var dt=G;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||q===null||(dt=Ps(G,q),dt!=null&&$t.push(_o(G,dt,Q))),Ie)break;G=G.return}0<$t.length&&(nt=new it(nt,ie,null,a,ct),vt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==$u&&(ie=a.relatedTarget||a.fromElement)&&(Oi(ie)||ie[Pn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ie=a.relatedTarget||a.toElement,it=$,ie=ie?Oi(ie):null,ie!==null&&(Ie=u(ie),$t=ie.tag,ie!==Ie||$t!==5&&$t!==27&&$t!==6)&&(ie=null)):(it=null,ie=$),it!==ie)){if($t=lp,dt="onMouseLeave",q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=cp,dt="onPointerLeave",q="onPointerEnter",G="pointer"),Ie=it==null?nt:Ja(it),Q=ie==null?nt:Ja(ie),nt=new $t(dt,G+"leave",it,a,ct),nt.target=Ie,nt.relatedTarget=Q,dt=null,Oi(ct)===$&&($t=new $t(q,G+"enter",ie,a,ct),$t.target=Q,$t.relatedTarget=Ie,dt=$t),Ie=dt,it&&ie)e:{for($t=it,q=ie,G=0,Q=$t;Q;Q=ns(Q))G++;for(Q=0,dt=q;dt;dt=ns(dt))Q++;for(;0<G-Q;)$t=ns($t),G--;for(;0<Q-G;)q=ns(q),Q--;for(;G--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=ns($t),q=ns(q)}$t=null}else $t=null;it!==null&&$g(vt,nt,it,$t,!1),ie!==null&&Ie!==null&&$g(vt,Ie,ie,$t,!0)}}t:{if(nt=$?Ja($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Gt=_p;else if(gp(nt))if(xp)Gt=Dx;else{Gt=wx;var pe=Rx}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Ju($.elementType)&&(Gt=_p):Gt=Cx;if(Gt&&(Gt=Gt(e,$))){vp(vt,Gt,a,ct);break t}pe&&pe(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(pe=$?Ja($):window,e){case"focusin":(gp(pe)||pe.contentEditable==="true")&&(Lr=pe,hc=$,ks=null);break;case"focusout":ks=hc=Lr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Rp(vt,a,ct);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Rp(vt,a,ct)}var qt;if(lc)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Ur?pp(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(fp&&a.locale!=="ko"&&(Ur||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ur&&(qt=sp()):(ga=ct,ic="value"in ga?ga.value:ga.textContent,Ur=!0)),pe=Ql($,te),0<pe.length&&(te=new up(te,e,null,a,ct),vt.push({event:te,listeners:pe}),qt?te.data=qt:(qt=mp(a),qt!==null&&(te.data=qt)))),(qt=Mx?Ex(e,a):Tx(e,a))&&(te=Ql($,"onBeforeInput"),0<te.length&&(pe=new up("onBeforeInput","beforeinput",null,a,ct),vt.push({event:pe,listeners:te}),pe.data=qt)),py(vt,e,$,a,ct)}Qg(vt,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ql(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ps(e,a),c!=null&&o.unshift(_o(e,c,d)),c=Ps(e,n),c!=null&&o.push(_o(e,c,d))),e.tag===3)return o;e=e.return}return[]}function ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $g(e,n,a,o,c){for(var d=n._reactName,M=[];a!==null&&a!==o;){var A=a,P=A.alternate,$=A.stateNode;if(A=A.tag,P!==null&&P===o)break;A!==5&&A!==26&&A!==27||$===null||(P=$,c?($=Ps(a,d),$!=null&&M.unshift(_o(a,$,P))):c||($=Ps(a,d),$!=null&&M.push(_o(a,$,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var _y=/\r\n?/g,xy=/\u0000|\uFFFD/g;function tv(e){return(typeof e=="string"?e:""+e).replace(_y,`
`).replace(xy,"")}function ev(e,n){return n=tv(n),tv(e)===n}function Jl(){}function Be(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yi(e,""+o);break;case"className":Ut(e,"class",o);break;case"tabIndex":Ut(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(e,a,o);break;case"style":ip(e,o,d);break;case"data":if(n!=="object"){Ut(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",c.name,c,null),Be(e,n,"formEncType",c.formEncType,c,null),Be(e,n,"formMethod",c.formMethod,c,null),Be(e,n,"formTarget",c.formTarget,c,null)):(Be(e,n,"encType",c.encType,c,null),Be(e,n,"method",c.method,c,null),Be(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),bt(e,"popover",o);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Z0.get(a)||a,bt(e,a,o))}}function Bf(e,n,a,o,c,d){switch(a){case"style":ip(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?yi(e,o):(typeof o=="number"||typeof o=="bigint")&&yi(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[Sn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):bt(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,d,M,a,null)}}c&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var A=d=M=c=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":M=ct;break;case"checked":P=ct;break;case"defaultChecked":$=ct;break;case"value":d=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Be(e,n,o,ct,a,null)}}Ve(e,d,A,P,$,M,c,!1),Pe(e);return;case"select":_e("invalid",e),o=M=d=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Be(e,n,c,A,a,null)}n=d,a=M,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":_e("invalid",e),d=c=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":c=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Be(e,n,M,A,a,null)}Mn(e,o,c,d),Pe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,P,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<vo.length;o++)_e(vo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,$,o,a,null)}return;default:if(Ju(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&Bf(e,n,ct,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Be(e,n,A,o,a,null))}function yy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,M=null,A=null,P=null,$=null,ct=null;for(it in a){var vt=a[it];if(a.hasOwnProperty(it)&&vt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(it)||Be(e,n,it,null,o,vt)}}for(var nt in o){var it=o[nt];if(vt=a[nt],o.hasOwnProperty(nt)&&(it!=null||vt!=null))switch(nt){case"type":d=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ct=it;break;case"value":M=it;break;case"defaultValue":A=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==vt&&Be(e,n,nt,it,o,vt)}}Bi(e,M,A,P,$,ct,d,c);return;case"select":it=M=A=nt=null;for(d in a)if(P=a[d],a.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(d)||Be(e,n,d,null,o,P)}for(c in o)if(d=o[c],P=a[c],o.hasOwnProperty(c)&&(d!=null||P!=null))switch(c){case"value":nt=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==P&&Be(e,n,c,d,o,P)}n=A,a=M,o=it,nt!=null?ln(e,!!a,nt,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,o,c)}for(M in o)if(c=o[M],d=a[M],o.hasOwnProperty(M)&&(c!=null||d!=null))switch(M){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Be(e,n,M,c,o,d)}mn(e,nt,it);return;case"option":for(var ie in a)if(nt=a[ie],a.hasOwnProperty(ie)&&nt!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Be(e,n,ie,null,o,nt)}for(P in o)if(nt=o[P],it=a[P],o.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Be(e,n,P,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&Be(e,n,$t,null,o,nt);for($ in o)if(nt=o[$],it=a[$],o.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Be(e,n,$,nt,o,it)}return;default:if(Ju(n)){for(var Ie in a)nt=a[Ie],a.hasOwnProperty(Ie)&&nt!==void 0&&!o.hasOwnProperty(Ie)&&Bf(e,n,Ie,void 0,o,nt);for(ct in o)nt=o[ct],it=a[ct],!o.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||Bf(e,n,ct,nt,o,it);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!o.hasOwnProperty(q)&&Be(e,n,q,null,o,nt);for(vt in o)nt=o[vt],it=a[vt],!o.hasOwnProperty(vt)||nt===it||nt==null&&it==null||Be(e,n,vt,nt,o,it)}var If=null,Ff=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function nv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function Sy(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var av=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(e){return rv.resolve(null).then(e).catch(Ty)}:av;function Ty(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function sv(e,n){var a=n,o=0,c=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&xo(M.documentElement),a&2&&xo(M.body),a&4)for(a=M.head,xo(a),M=a.firstChild;M;){var A=M.nextSibling,P=M.nodeName;M[ha]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(c===0){e.removeChild(d),Ro(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Ro(n)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function by(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ha])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function Ay(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ry(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Xf=null;function ov(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function lv(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);da(e)}var si=new Map,uv=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=K.d;K.d={f:wy,r:Cy,D:Dy,C:Uy,L:Ly,m:Ny,X:Py,S:Oy,M:zy};function wy(){var e=Ji.f(),n=Wl();return e||n}function Cy(e){var n=Pi(e);n!==null&&n.tag===5&&n.type==="form"?Cm(n):Ji.r(e)}var is=typeof document>"u"?null:document;function cv(e,n,a){var o=is;if(o&&typeof n=="string"&&n){var c=Xe(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),uv.has(c)||(uv.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Dy(e){Ji.D(e),cv("dns-prefetch",e,null)}function Uy(e,n){Ji.C(e,n),cv("preconnect",e,n)}function Ly(e,n,a){Ji.L(e,n,a);var o=is;if(o&&e&&n){var c='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Xe(a.imageSizes)+'"]')):c+='[href="'+Xe(e)+'"]';var d=c;switch(n){case"style":d=as(e);break;case"script":d=rs(e)}si.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),si.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(yo(d))||n==="script"&&o.querySelector(So(d))||(n=o.createElement("link"),bn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Ny(e,n){Ji.m(e,n);var a=is;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=rs(e)}if(!si.has(d)&&(e=g({rel:"modulepreload",href:e},n),si.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(d)))return}o=a.createElement("link"),bn(o,"link",e),nn(o),a.head.appendChild(o)}}}function Oy(e,n,a){Ji.S(e,n,a);var o=is;if(o&&e){var c=pa(o).hoistableStyles,d=as(e);n=n||"default";var M=c.get(d);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(yo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=si.get(d))&&Wf(e,a);var P=M=o.createElement("link");nn(P),bn(P,"link",e),P._p=new Promise(function($,ct){P.onload=$,P.onerror=ct}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,eu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},c.set(d,M)}}}function Py(e,n){Ji.X(e,n);var a=is;if(a&&e){var o=pa(a).hoistableScripts,c=rs(e),d=o.get(c);d||(d=a.querySelector(So(c)),d||(e=g({src:e,async:!0},n),(n=si.get(c))&&qf(e,n),d=a.createElement("script"),nn(d),bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function zy(e,n){Ji.M(e,n);var a=is;if(a&&e){var o=pa(a).hoistableScripts,c=rs(e),d=o.get(c);d||(d=a.querySelector(So(c)),d||(e=g({src:e,async:!0,type:"module"},n),(n=si.get(c))&&qf(e,n),d=a.createElement("script"),nn(d),bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function fv(e,n,a,o){var c=(c=Mt.current)?tu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=pa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var d=pa(c).hoistableStyles,M=d.get(e);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=c.querySelector(yo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(e,a),d||By(c,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=pa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+Xe(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function hv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function By(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),nn(n),e.head.appendChild(n))}function rs(e){return'[src="'+Xe(e)+'"]'}function So(e){return"script[async]"+e}function dv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),bn(o,"style",c),eu(o,a.precedence,e),n.instance=o;case"stylesheet":c=as(a.href);var d=e.querySelector(yo(c));if(d)return n.state.loading|=4,n.instance=d,nn(d),d;o=hv(a),(c=si.get(c))&&Wf(o,c),d=(e.ownerDocument||e).createElement("link"),nn(d);var M=d;return M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),bn(d,"link",o),n.state.loading|=4,eu(d,a.precedence,e),n.instance=d;case"script":return d=rs(a.src),(c=e.querySelector(So(d)))?(n.instance=c,nn(c),c):(o=a,(c=si.get(d))&&(o=g({},a),qf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,eu(o,a.precedence,e));return n.instance}function eu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)d=A;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nu=null;function pv(e,n,a){if(nu===null){var o=new Map,c=nu=new Map;c.set(a,o)}else c=nu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[ha]||d[on]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(d):o.set(M,[d])}}return o}function mv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Iy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function gv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Mo=null;function Fy(){}function Hy(e,n,a){if(Mo===null)throw Error(r(475));var o=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=as(a.href),d=e.querySelector(yo(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=iu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,nn(d);return}d=e.ownerDocument||e,a=hv(a),(c=si.get(c))&&Wf(a,c),d=d.createElement("link"),nn(d);var M=d;M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),bn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=iu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Gy(){if(Mo===null)throw Error(r(475));var e=Mo;return e.stylesheets&&e.count===0&&Yf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Yf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function iu(){if(this.count--,this.count===0){if(this.stylesheets)Yf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function Yf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,n.forEach(Vy,e),au=null,iu.call(e))}function Vy(e,n){if(!(n.state.loading&4)){var a=au.get(e);if(a)var o=a.get(null);else{a=new Map,au.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var M=c[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,c),a.set(M,c),this.count++,o=iu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Eo={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function ky(e,n,a,o,c,d,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function vv(e,n,a,o,c,d,M,A,P,$,ct,vt){return e=new ky(e,n,a,M,A,P,$,vt),n=1,d===!0&&(n|=24),d=Xn(3,null,null,n),e.current=d,d.stateNode=e,n=Rc(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Uc(d),e}function _v(e){return e?(e=zr,e):zr}function xv(e,n,a,o,c,d){c=_v(c),o.context===null?o.context=c:o.pendingContext=c,o=xa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ya(e,o,n),a!==null&&(Zn(a,e,n),Js(a,e,n))}function yv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){yv(e,n),(e=e.alternate)&&yv(e,n)}function Sv(e){if(e.tag===13){var n=Pr(e,67108864);n!==null&&Zn(n,e,67108864),jf(e,67108864)}}var ru=!0;function Xy(e,n,a,o){var c=z.T;z.T=null;var d=K.p;try{K.p=2,Zf(e,n,a,o)}finally{K.p=d,z.T=c}}function Wy(e,n,a,o){var c=z.T;z.T=null;var d=K.p;try{K.p=8,Zf(e,n,a,o)}finally{K.p=d,z.T=c}}function Zf(e,n,a,o){if(ru){var c=Kf(o);if(c===null)zf(e,n,o,su,a),Ev(e,o);else if(Yy(c,e,n,a,o))o.stopPropagation();else if(Ev(e,o),n&4&&-1<qy.indexOf(e)){for(;c!==null;){var d=Pi(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Yt(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var P=1<<31-zt(M);A.entanglements[1]|=P,M&=~P}bi(d),(Le&6)===0&&(kl=ge()+500,go(0))}}break;case 13:A=Pr(d,2),A!==null&&Zn(A,d,2),Wl(),jf(d,2)}if(d=Kf(o),d===null&&zf(e,n,o,su,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else zf(e,n,o,null,a)}}function Kf(e){return e=tc(e),Qf(e)}var su=null;function Qf(e){if(su=null,e=Oi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return su=e,null}function Mv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case ye:return 2;case Zt:return 8;case se:case $e:return 32;case N:return 268435456;default:return 32}default:return 32}}var Jf=!1,Na=null,Oa=null,Pa=null,To=new Map,bo=new Map,za=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ev(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Pi(n),n!==null&&Sv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Yy(e,n,a,o,c){switch(n){case"focusin":return Na=Ao(Na,e,n,a,o,c),!0;case"dragenter":return Oa=Ao(Oa,e,n,a,o,c),!0;case"mouseover":return Pa=Ao(Pa,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return To.set(d,Ao(To.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,bo.set(d,Ao(bo.get(d)||null,e,n,a,o,c)),!0}return!1}function Tv(e){var n=Oi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(a.tag===13){var o=jn();o=ae(o);var c=Pr(a,o);c!==null&&Zn(c,a,o),jf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ou(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);$u=o,a.target.dispatchEvent(o),$u=null}else return n=Pi(a),n!==null&&Sv(n),e.blockedOn=a,!1;n.shift()}return!0}function bv(e,n,a){ou(e)&&a.delete(n)}function jy(){Jf=!1,Na!==null&&ou(Na)&&(Na=null),Oa!==null&&ou(Oa)&&(Oa=null),Pa!==null&&ou(Pa)&&(Pa=null),To.forEach(bv),bo.forEach(bv)}function lu(e,n){e.blockedOn===n&&(e.blockedOn=null,Jf||(Jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,jy)))}var uu=null;function Av(e){uu!==e&&(uu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uu===e&&(uu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Qf(o||a)===null)continue;break}var d=Pi(a);d!==null&&(e.splice(n,3),n-=3,Kc(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ro(e){function n(P){return lu(P,e)}Na!==null&&lu(Na,e),Oa!==null&&lu(Oa,e),Pa!==null&&lu(Pa,e),To.forEach(n),bo.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)Tv(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],M=c[Sn]||null;if(typeof d=="function")M||Av(a);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(c=d,M=d[Sn]||null)A=M.formAction;else if(Qf(c)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Av(a)}}}function $f(e){this._internalRoot=e}cu.prototype.render=$f.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=jn();xv(a,o,e,n,null,null)},cu.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xv(e.current,2,null,e,null,null),Wl(),n[Pn]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&Tv(e)}};var Rv=t.version;if(Rv!=="19.1.1")throw Error(r(527,Rv,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Zy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{ft=fu.inject(Zy),pt=fu}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=km,d=Xm,M=Wm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=vv(e,1,!1,null,null,a,o,c,d,M,A,null),e[Pn]=n.current,Pf(e),new $f(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",d=km,M=Xm,A=Wm,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=vv(e,1,!0,n,a??null,o,c,d,M,A,P,$),n.context=_v(null),a=n.current,o=jn(),o=ae(o),c=xa(o),c.callback=null,ya(a,c,o),a=o,n.current.lanes=a,It(n,a),bi(n),e[Pn]=n.current,Pf(e),new cu(n)},Co.version="19.1.1",Co}var Bv;function rS(){if(Bv)return nh.exports;Bv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=aS(),nh.exports}var sS=rS();/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Iv="popstate";function Fv(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function oS(s={}){function t(r,l){let u=l.state?.masked,{pathname:f,search:h,hash:p}=u||r.location;return kh("",{pathname:f,search:h,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:Vo(l)}return uS(t,i,null,s)}function Ke(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ui(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lS(){return Math.random().toString(36).substring(2,10)}function Hv(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function kh(s,t,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ds(t):t,state:i,key:t&&t.key||r||lS(),unstable_mask:l}}function Vo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ds(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function uS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let y=g(),x=y==null?null:y-m;m=y,p&&p({action:h,location:T.location,delta:x})}function _(y,x){h="PUSH";let O=Fv(y)?y:kh(T.location,y,x);m=g()+1;let D=Hv(O,m),C=T.createHref(O.unstable_mask||O);try{f.pushState(D,"",C)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(C)}u&&p&&p({action:h,location:T.location,delta:1})}function S(y,x){h="REPLACE";let O=Fv(y)?y:kh(T.location,y,x);m=g();let D=Hv(O,m),C=T.createHref(O.unstable_mask||O);f.replaceState(D,"",C),u&&p&&p({action:h,location:T.location,delta:0})}function E(y){return cS(y)}let T={get action(){return h},get location(){return s(l,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Iv,v),p=y,()=>{l.removeEventListener(Iv,v),p=null}},createHref(y){return t(l,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return f.go(y)}};return T}function cS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Vo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Q_(s,t,i="/"){return fS(s,t,i,!1)}function fS(s,t,i,r){let l=typeof t=="string"?Ds(t):t,u=la(l.pathname||"/",i);if(u==null)return null;let f=J_(s);hS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=ES(u);h=SS(f[p],m,r)}return h}function J_(s,t=[],i=[],r="",l=!1){let u=(f,h,p=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&p)return;Ke(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=Ci([r,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(Ke(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),J_(f.children,t,_,v,p)),!(f.path==null&&!f.index)&&t.push({path:v,score:xS(v,f.index),routesMeta:_})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let p of $_(f.path))u(f,h,!0,p)}),t}function $_(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=$_(r.join("/")),h=[];return h.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&h.push(...f),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function hS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:yS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var dS=/^:[\w-]+$/,pS=3,mS=2,gS=1,vS=10,_S=-2,Gv=s=>s==="*";function xS(s,t){let i=s.split("/"),r=i.length;return i.some(Gv)&&(r+=_S),t&&(r+=mS),i.filter(l=>!Gv(l)).reduce((l,u)=>l+(dS.test(u)?pS:u===""?gS:vS),r)}function yS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function SS(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=ku({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),_=p.route;if(!v&&m&&i&&!r[r.length-1].route.index&&(v=ku({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Ci([u,v.pathname]),pathnameBase:RS(Ci([u,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(u=Ci([u,v.pathnameBase]))}return f}function ku(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=MS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:v},_)=>{if(g==="*"){let E=h[_]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[_];return v&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:s}}function MS(s,t=!1,i=!0){Ui(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p,m,g)=>{if(r.push({paramName:h,isOptional:p!=null}),p){let v=g.charAt(m+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ES(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ui(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function la(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function bS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ds(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=Vv(i.substring(1),"/"):u=Vv(i,t)):u=t,{pathname:u,search:wS(r),hash:CS(l)}}function Vv(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function AS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function t0(s){let t=AS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Nd(s,t,i,r=!1){let l;typeof s=="string"?l=Ds(s):(l={...s},Ke(!l.pathname||!l.pathname.includes("?"),sh("?","pathname","search",l)),Ke(!l.pathname||!l.pathname.includes("#"),sh("#","pathname","hash",l)),Ke(!l.search||!l.search.includes("#"),sh("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let v=t.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}h=v>=0?t[v]:"/"}let p=bS(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Ci=s=>s.join("/").replace(/\/\/+/g,"/"),RS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),wS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,CS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,DS=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function US(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function LS(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var e0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function n0(s,t){let i=s;if(typeof i!="string"||!TS.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(e0)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),h=la(f.pathname,t);f.origin===u.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Ui(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var i0=["POST","PUT","PATCH","DELETE"];new Set(i0);var NS=["GET",...i0];new Set(NS);var Us=ht.createContext(null);Us.displayName="DataRouter";var Yu=ht.createContext(null);Yu.displayName="DataRouterState";var OS=ht.createContext(!1),a0=ht.createContext({isTransitioning:!1});a0.displayName="ViewTransition";var PS=ht.createContext(new Map);PS.displayName="Fetchers";var zS=ht.createContext(null);zS.displayName="Await";var ui=ht.createContext(null);ui.displayName="Navigation";var jo=ht.createContext(null);jo.displayName="Location";var ua=ht.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Od=ht.createContext(null);Od.displayName="RouteError";var r0="REACT_ROUTER_ERROR",BS="REDIRECT",IS="ROUTE_ERROR_RESPONSE";function FS(s){if(s.startsWith(`${r0}:${BS}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function HS(s){if(s.startsWith(`${r0}:${IS}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new DS(t.status,t.statusText,t.data)}catch{}}function GS(s,{relative:t}={}){Ke(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ht.useContext(ui),{hash:l,pathname:u,search:f}=Ko(s,{relative:t}),h=u;return i!=="/"&&(h=u==="/"?i:Ci([i,u])),r.createHref({pathname:h,search:f,hash:l})}function Zo(){return ht.useContext(jo)!=null}function Za(){return Ke(Zo(),"useLocation() may be used only in the context of a <Router> component."),ht.useContext(jo).location}var s0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function o0(s){ht.useContext(ui).static||ht.useLayoutEffect(s)}function VS(){let{isDataRoute:s}=ht.useContext(ua);return s?eM():kS()}function kS(){Ke(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ht.useContext(Us),{basename:t,navigator:i}=ht.useContext(ui),{matches:r}=ht.useContext(ua),{pathname:l}=Za(),u=JSON.stringify(t0(r)),f=ht.useRef(!1);return o0(()=>{f.current=!0}),ht.useCallback((p,m={})=>{if(Ui(f.current,s0),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=Nd(p,JSON.parse(u),l,m.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ci([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,u,l,s])}ht.createContext(null);function Ko(s,{relative:t}={}){let{matches:i}=ht.useContext(ua),{pathname:r}=Za(),l=JSON.stringify(t0(i));return ht.useMemo(()=>Nd(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function XS(s,t){return l0(s,t)}function l0(s,t,i){Ke(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=ht.useContext(ui),{matches:l}=ht.useContext(ua),u=l[l.length-1],f=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let y=m&&m.path||"";c0(h,!m||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let g=Za(),v;if(t){let y=typeof t=="string"?Ds(t):t;Ke(p==="/"||y.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=g;let _=v.pathname||"/",S=_;if(p!=="/"){let y=p.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=Q_(s,{pathname:S});Ui(m||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ui(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=ZS(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Ci([p,r.encodeLocation?r.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:Ci([p,r.encodeLocation?r.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i);return t&&T?ht.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},T):T}function WS(){let s=tM(),t=US(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ht.createElement(ht.Fragment,null,ht.createElement("p",null,"💿 Hey developer 👋"),ht.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ht.createElement("code",{style:u},"ErrorBoundary")," or"," ",ht.createElement("code",{style:u},"errorElement")," prop on your route.")),ht.createElement(ht.Fragment,null,ht.createElement("h2",null,"Unexpected Application Error!"),ht.createElement("h3",{style:{fontStyle:"italic"}},t),i?ht.createElement("pre",{style:l},i):null,f)}var qS=ht.createElement(WS,null),u0=class extends ht.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=HS(s.digest);i&&(s=i)}let t=s!==void 0?ht.createElement(ua.Provider,{value:this.props.routeContext},ht.createElement(Od.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ht.createElement(YS,{error:s},t):t}};u0.contextType=OS;var oh=new WeakMap;function YS({children:s,error:t}){let{basename:i}=ht.useContext(ui);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=FS(t.digest);if(r){let l=oh.get(t);if(l)throw l;let u=n0(r.location,i);if(e0&&!oh.get(t))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw oh.set(t,f),f}return ht.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function jS({routeContext:s,match:t,children:i}){let r=ht.useContext(Us);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ht.createElement(ua.Provider,{value:s},i)}function ZS(s,t=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,u=r?.errors;if(u!=null){let g=l.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);Ke(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,h=-1;if(i&&r){f=r.renderFallback;for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=g),v.route.id){let{loaderData:_,errors:S}=r,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let p=i?.onError,m=r&&p?(g,v)=>{p(g,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:LS(r.matches),errorInfo:v})}:void 0;return l.reduceRight((g,v,_)=>{let S,E=!1,T=null,y=null;r&&(S=u&&v.route.id?u[v.route.id]:void 0,T=v.route.errorElement||qS,f&&(h<0&&_===0?(c0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):h===_&&(E=!0,y=v.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,_+1)),O=()=>{let D;return S?D=T:E?D=y:v.route.Component?D=ht.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=g,ht.createElement(jS,{match:v,routeContext:{outlet:g,matches:x,isDataRoute:r!=null},children:D})};return r&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?ht.createElement(u0,{location:r.location,revalidation:r.revalidation,component:T,error:S,children:O(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:m}):O()},null)}function Pd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KS(s){let t=ht.useContext(Us);return Ke(t,Pd(s)),t}function QS(s){let t=ht.useContext(Yu);return Ke(t,Pd(s)),t}function JS(s){let t=ht.useContext(ua);return Ke(t,Pd(s)),t}function zd(s){let t=JS(s),i=t.matches[t.matches.length-1];return Ke(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function $S(){return zd("useRouteId")}function tM(){let s=ht.useContext(Od),t=QS("useRouteError"),i=zd("useRouteError");return s!==void 0?s:t.errors?.[i]}function eM(){let{router:s}=KS("useNavigate"),t=zd("useNavigate"),i=ht.useRef(!1);return o0(()=>{i.current=!0}),ht.useCallback(async(l,u={})=>{Ui(i.current,s0),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var kv={};function c0(s,t,i){!t&&!kv[s]&&(kv[s]=!0,Ui(!1,i))}ht.memo(nM);function nM({routes:s,future:t,state:i,isStatic:r,onError:l}){return l0(s,void 0,{state:i,isStatic:r,onError:l})}function Xh(s){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iM({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){Ke(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),p=ht.useMemo(()=>({basename:h,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[h,l,u,f]);typeof i=="string"&&(i=Ds(i));let{pathname:m="/",search:g="",hash:v="",state:_=null,key:S="default",unstable_mask:E}=i,T=ht.useMemo(()=>{let y=la(m,h);return y==null?null:{location:{pathname:y,search:g,hash:v,state:_,key:S,unstable_mask:E},navigationType:r}},[h,m,g,v,_,S,r,E]);return Ui(T!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:ht.createElement(ui.Provider,{value:p},ht.createElement(jo.Provider,{children:t,value:T}))}function aM({children:s,location:t}){return XS(Wh(s),t)}function Wh(s,t=[]){let i=[];return ht.Children.forEach(s,(r,l)=>{if(!ht.isValidElement(r))return;let u=[...t,l];if(r.type===ht.Fragment){i.push.apply(i,Wh(r.props.children,u));return}Ke(r.type===Xh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Wh(r.props.children,u)),i.push(f)}),i}var Pu="get",zu="application/x-www-form-urlencoded";function ju(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function rM(s){return ju(s)&&s.tagName.toLowerCase()==="button"}function sM(s){return ju(s)&&s.tagName.toLowerCase()==="form"}function oM(s){return ju(s)&&s.tagName.toLowerCase()==="input"}function lM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function uM(s,t){return s.button===0&&(!t||t==="_self")&&!lM(s)}var hu=null;function cM(){if(hu===null)try{new FormData(document.createElement("form"),0),hu=!1}catch{hu=!0}return hu}var fM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lh(s){return s!=null&&!fM.has(s)?(Ui(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zu}"`),null):s}function hM(s,t){let i,r,l,u,f;if(sM(s)){let h=s.getAttribute("action");r=h?la(h,t):null,i=s.getAttribute("method")||Pu,l=lh(s.getAttribute("enctype"))||zu,u=new FormData(s)}else if(rM(s)||oM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(r=p?la(p,t):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Pu,l=lh(s.getAttribute("formenctype"))||lh(h.getAttribute("enctype"))||zu,u=new FormData(h,s),!cM()){let{name:m,type:g,value:v}=s;if(g==="image"){let _=m?`${m}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else m&&u.append(m,v)}}else{if(ju(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Pu,r=null,l=zu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function dM(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&la(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function pM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function gM(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await pM(u,i);return f.links?f.links():[]}return[]}));return yM(r.flat(1).filter(mM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Xv(s,t,i,r,l,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,m)=>f(p,m)||h(p,m)):u==="data"?t.filter((p,m)=>{let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function vM(s,t,{includeHydrateFallback:i}={}){return _M(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function _M(s){return[...new Set(s)]}function xM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function yM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(xM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function f0(){let s=ht.useContext(Us);return Bd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function SM(){let s=ht.useContext(Yu);return Bd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Id=ht.createContext(void 0);Id.displayName="FrameworkContext";function h0(){let s=ht.useContext(Id);return Bd(s,"You must render this element inside a <HydratedRouter> element"),s}function MM(s,t){let i=ht.useContext(Id),[r,l]=ht.useState(!1),[u,f]=ht.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=t,_=ht.useRef(null);ht.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=x=>{x.forEach(O=>{f(O.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[s]),ht.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,_,{}]:[u,_,{onFocus:Do(h,S),onBlur:Do(p,E),onMouseEnter:Do(m,S),onMouseLeave:Do(g,E),onTouchStart:Do(v,S)}]:[!1,_,{}]}function Do(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function EM({page:s,...t}){let{router:i}=f0(),r=ht.useMemo(()=>Q_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ht.createElement(bM,{page:s,matches:r,...t}):null}function TM(s){let{manifest:t,routeModules:i}=h0(),[r,l]=ht.useState([]);return ht.useEffect(()=>{let u=!1;return gM(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function bM({page:s,matches:t,...i}){let r=Za(),{future:l,manifest:u,routeModules:f}=h0(),{basename:h}=f0(),{loaderData:p,matches:m}=SM(),g=ht.useMemo(()=>Xv(s,t,m,u,r,"data"),[s,t,m,u,r]),v=ht.useMemo(()=>Xv(s,t,m,u,r,"assets"),[s,t,m,u,r]),_=ht.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,y=!1;if(t.forEach(O=>{let D=u.routes[O.route.id];!D||!D.hasLoader||(!g.some(C=>C.route.id===O.route.id)&&O.route.id in p&&f[O.route.id]?.shouldRevalidate||D.hasClientLoader?y=!0:T.add(O.route.id))}),T.size===0)return[];let x=dM(s,h,l.unstable_trailingSlashAwareDataRequests,"data");return y&&T.size>0&&x.searchParams.set("_routes",t.filter(O=>T.has(O.route.id)).map(O=>O.route.id).join(",")),[x.pathname+x.search]},[h,l.unstable_trailingSlashAwareDataRequests,p,r,u,g,t,s,f]),S=ht.useMemo(()=>vM(v,u),[v,u]),E=TM(v);return ht.createElement(ht.Fragment,null,_.map(T=>ht.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),S.map(T=>ht.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:y})=>ht.createElement("link",{key:T,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function AM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var RM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{RM&&(window.__reactRouterVersion="7.13.1")}catch{}function wM({basename:s,children:t,unstable_useTransitions:i,window:r}){let l=ht.useRef();l.current==null&&(l.current=oS({window:r,v5Compat:!0}));let u=l.current,[f,h]=ht.useState({action:u.action,location:u.location}),p=ht.useCallback(m=>{i===!1?h(m):ht.startTransition(()=>h(m))},[i]);return ht.useLayoutEffect(()=>u.listen(p),[u,p]),ht.createElement(iM,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var d0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fd=ht.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,unstable_mask:h,state:p,target:m,to:g,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:S,...E},T){let{basename:y,navigator:x,unstable_useTransitions:O}=ht.useContext(ui),D=typeof g=="string"&&d0.test(g),C=n0(g,y);g=C.to;let I=GS(g,{relative:l}),H=Za(),B=null;if(h){let ut=Nd(h,[],H.unstable_mask?H.unstable_mask.pathname:"/",!0);y!=="/"&&(ut.pathname=ut.pathname==="/"?y:Ci([y,ut.pathname])),B=x.createHref(ut)}let[X,U,w]=MM(r,E),V=LM(g,{replace:f,unstable_mask:h,state:p,target:m,preventScrollReset:v,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:S,unstable_useTransitions:O});function ot(ut){t&&t(ut),ut.defaultPrevented||V(ut)}let st=!(C.isExternal||u),mt=ht.createElement("a",{...E,...w,href:(st?B:void 0)||C.absoluteURL||I,onClick:st?ot:t,ref:AM(T,U),target:m,"data-discover":!D&&i==="render"?"true":void 0});return X&&!D?ht.createElement(ht.Fragment,null,mt,ht.createElement(EM,{page:I})):mt});Fd.displayName="Link";var CM=ht.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:h,children:p,...m},g){let v=Ko(f,{relative:m.relative}),_=Za(),S=ht.useContext(Yu),{navigator:E,basename:T}=ht.useContext(ui),y=S!=null&&BM(v)&&h===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,O=_.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(O=O.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&T&&(D=la(D,T)||D);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let I=O===x||!l&&O.startsWith(x)&&O.charAt(C)==="/",H=D!=null&&(D===x||!l&&D.startsWith(x)&&D.charAt(x.length)==="/"),B={isActive:I,isPending:H,isTransitioning:y},X=I?t:void 0,U;typeof r=="function"?U=r(B):U=[r,I?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(B):u;return ht.createElement(Fd,{...m,"aria-current":X,className:U,ref:g,style:w,to:f,viewTransition:h},typeof p=="function"?p(B):p)});CM.displayName="NavLink";var DM=ht.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Pu,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:_,...S},E)=>{let{unstable_useTransitions:T}=ht.useContext(ui),y=PM(),x=zM(h,{relative:m}),O=f.toLowerCase()==="get"?"get":"post",D=typeof h=="string"&&d0.test(h),C=I=>{if(p&&p(I),I.defaultPrevented)return;I.preventDefault();let H=I.nativeEvent.submitter,B=H?.getAttribute("formmethod")||f,X=()=>y(H||I.currentTarget,{fetcherKey:t,method:B,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:_});T&&i!==!1?ht.startTransition(()=>X()):X()};return ht.createElement("form",{ref:E,method:O,action:x,onSubmit:r?p:C,...S,"data-discover":!D&&s==="render"?"true":void 0})});DM.displayName="Form";function UM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p0(s){let t=ht.useContext(Us);return Ke(t,UM(s)),t}function LM(s,{target:t,replace:i,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let g=VS(),v=Za(),_=Ko(s,{relative:f});return ht.useCallback(S=>{if(uM(S,t)){S.preventDefault();let E=i!==void 0?i:Vo(v)===Vo(_),T=()=>g(s,{replace:E,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p});m?ht.startTransition(()=>T()):T()}},[v,g,_,i,r,l,t,s,u,f,h,p,m])}var NM=0,OM=()=>`__${String(++NM)}__`;function PM(){let{router:s}=p0("useSubmit"),{basename:t}=ht.useContext(ui),i=$S(),r=s.fetch,l=s.navigate;return ht.useCallback(async(u,f={})=>{let{action:h,method:p,encType:m,formData:g,body:v}=hM(u,t);if(f.navigate===!1){let _=f.fetcherKey||OM();await r(_,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||p,formEncType:f.encType||m,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||p,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,t,i])}function zM(s,{relative:t}={}){let{basename:i}=ht.useContext(ui),r=ht.useContext(ua);Ke(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Ko(s||".",{relative:t})},f=Za();if(s==null){u.search=f.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Ci([i,u.pathname])),Vo(u)}function BM(s,{relative:t}={}){let i=ht.useContext(a0);Ke(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=p0("useViewTransitionState"),l=Ko(s,{relative:t});if(!i.isTransitioning)return!1;let u=la(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=la(i.nextLocation.pathname,r)||i.nextLocation.pathname;return ku(l.pathname,f)!=null||ku(l.pathname,u)!=null}const IM="/assets/bird-D9jvbFeL.png",FM="/assets/chess-DDN_g1lg.png",HM="/assets/flower-D4XUVlS7.png",GM="/assets/space-CbU1frjk.png",VM="/assets/pickle-Ddit1OTS.png",kM=[{src:IM,alt:"Bird"},{src:GM,alt:"Space"},{src:HM,alt:"Flower"},{src:FM,alt:"Chess"},{src:VM,alt:"Pickle"}];function XM(){return At.jsx("div",{className:"gallery",children:kM.map((s,t)=>At.jsx("img",{src:s.src,alt:s.alt,className:`gallery-item gallery-item-${t+1}`},s.alt))})}function WM(){return At.jsxs("div",{id:"hero",className:"sections hero-extended",children:[At.jsxs("div",{className:"hero-text",children:[At.jsx("h1",{className:"glitch","data-text":"Bella Wang",children:"Bella Wang"}),At.jsx("p",{children:"Electrical Engineering Student @ UBC"}),At.jsxs("div",{children:[At.jsx("button",{children:At.jsx("a",{href:"#projects",children:"View Projects"})}),At.jsx("button",{children:At.jsx("a",{href:"https://github.com/bella7898",children:"Github"})})]})]}),At.jsx("div",{className:"hero-gallery",children:At.jsx(XM,{})})]})}const Wv=[{role:"Project Research Assistant",org:"Metro Vancouver — Project Delivery Department",period:"05/2026 – Present",color:"#8ba9fa",points:["Supported development of project management standards applicable for all Metro Vancouver project delivery","Configured workflows for Project Management Information Systems (PMIS) to be used by Coquitlam project teams and Corporate departments","Developed Sharepoint team sites to support the accessibility of project management resources"]},{role:"Electrical Sound Localization Subteam",org:"UBC Subbots",period:"09/2025 – Present",color:"#8ba9fa",points:["Designed a Printed Circuit Board for an interface between the ADS8528 chip and DE10 Lite FPGA board","Handled mechanical constraints by measuring existing DE10 Lite header and standoff placement and 3d printng PCB board outline to test initial connections","Optimized Python sound localization simulation software"]},{role:"League Coordinator",org:"BC Junior Chess Association",period:"09/2023 - 06/2024",color:"#8ba9fa",points:["Organized annual BCJCA High School Chess League, consisting of district qualifiers and final championship tournament","Collaborated with chess club leaders across the province to run qualifying events"]}],qv=["Python","Java","C","R","React","React Native","Next.js","Expo Go","Flask","KiCad","Altium Designer","SolidWorks","SystemVerilog","Nios V Assembly","Embedded C","Quartus / Waveform","Standards Development","Technical Documentation"];function Yv({role:s,org:t,period:i,color:r,points:l}){return At.jsxs("div",{style:{textAlign:"left"},children:[At.jsx("div",{style:{marginBottom:"6px"},children:At.jsx("span",{style:{fontSize:"16px",fontWeight:"700",color:"#e5e7eb"},children:s})}),At.jsxs("div",{style:{marginBottom:"12px"},children:[At.jsx("span",{style:{fontSize:"13px",color:r},children:t}),At.jsxs("span",{style:{fontSize:"13px",color:"#9ca3af"},children:[" · ",i]})]}),At.jsx("ul",{style:{margin:0,paddingLeft:"18px"},children:l.map((u,f)=>At.jsx("li",{style:{fontSize:"14px",color:"#d1d5db",lineHeight:"1.6",marginBottom:"4px"},children:u},f))})]})}function qM({name:s}){return At.jsx("span",{style:{display:"inline-block",padding:"8px 18px",fontSize:"14px",color:"#e5e7eb",background:"transparent",border:"1px solid #8ba9fa66",borderRadius:"999px",whiteSpace:"nowrap",marginRight:"12px"},children:s})}function YM(){return At.jsxs("div",{id:"experience",className:"sections",style:{padding:"40px 5rem"},children:[At.jsx("h1",{style:{marginBottom:"32px"},children:"Experience"}),At.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:Wv.map((s,t)=>{const i=t%2===0?"left":"right";return At.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 32px 1fr",columnGap:"32px",alignItems:"center"},children:[i==="left"?At.jsx("div",{style:{justifySelf:"end",width:"100%",maxWidth:"480px"},children:At.jsx(Yv,{...s})}):At.jsx("div",{}),At.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"stretch",minHeight:"80px"},children:[At.jsx("div",{style:{width:"2px",flex:1,background:t===0?"transparent":s.color}}),At.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:s.color,margin:"6px 0",flexShrink:0}}),At.jsx("div",{style:{width:"2px",flex:1,background:t===Wv.length-1?"transparent":s.color}})]}),i==="right"?At.jsx("div",{style:{justifySelf:"start",width:"100%",maxWidth:"480px"},children:At.jsx(Yv,{...s})}):At.jsx("div",{})]},s.role)})}),At.jsx("div",{style:{marginTop:"56px",overflow:"hidden",WebkitMaskImage:"linear-gradient(to right, transparent, black 8%, black 92%, transparent)",maskImage:"linear-gradient(to right, transparent, black 8%, black 92%, transparent)"},children:At.jsx("div",{style:{display:"flex",width:"max-content",animation:"skills-ribbon 40s linear infinite"},children:[...qv,...qv].map((s,t)=>At.jsx(qM,{name:s},t))})}),At.jsx("style",{children:`
        @keyframes skills-ribbon {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        #experience > div:last-of-type:hover > div {
          animation-play-state: paused;
        }
      `})]})}const jM="/assets/reflowoven-DqIOnCgI.jpg",ZM="/assets/retrotron-BMPtPsvX.jpg",KM="/assets/dreamtravels-DPdATjj3.jpg",QM="/assets/coolitdown-8eEhT8YX.jpg",JM="/assets/spamsenseai-BuuTezyn.png",$M="/assets/moodloop-DC4NsUjk.jpg",tE="/assets/focusfocus-9y1ZcT7G.jpg";function eE(){return At.jsx("div",{style:{position:"absolute",top:0,left:0,width:"90px",height:"90px",overflow:"hidden",pointerEvents:"none",zIndex:10},children:At.jsx("div",{style:{position:"absolute",top:"18px",left:"-28px",width:"120px",padding:"5px 0",backgroundColor:"#ffb433",color:"#5d4612",fontWeight:1e3,fontSize:"12px",letterSpacing:"1.2px",textAlign:"center",textTransform:"uppercase",transform:"rotate(-45deg)",boxShadow:"0 2px 6px rgba(0,0,0,0.3)"},children:"Winner"})})}const nE=["All","Hackathon","Course Project","Personal"];function iE(){const[s,t]=ht.useState("All"),i=[{event:"cmd-f 2026 Hackathon",type:"Hackathon",title:"Mood Loop",desc:"A physical keychain-sized mood tracker with an AI summarized dashboard, built with EMF8 microcontroller and Flask backend",img:$M,links:[{label:"Devpost",href:"https://devpost.com/software/moodloop",internal:!1},{label:"Github Repo",href:"https://github.com/kparibhasha/mood-loop",internal:!1}],isWinner:!0},{event:"Elec 291 Course Project",type:"Course Project",title:"Reflow Oven Controller",desc:"Designed and built a reflow oven controller using a DE10-Lite FPGA, with CV8052 soft core processor",img:jM,links:[{label:"Video",href:"https://www.youtube.com/watch?v=6cuWTV0r89I",internal:!1}],isWinner:!1},{event:"CPEN 211 Course Project",type:"Course Project",title:"Retro TRON Video Game",desc:"Embedded C video game on FPGA using VGA display and interrupts",img:ZM},{event:"cmd-f 2025 Hackathon",type:"Hackathon",title:"Dream Travels",desc:"Your dream travel board React Website that uses Foursquare Places API",img:KM},{event:"UBC Physics Olympics",type:"Course Project",title:"Cool It Down! Prebuilt Machine",desc:"Prebuild machine - gravity powered copper cooling machine",img:QM},{type:"Personal",title:"Spam Sense AI",desc:"Trained DistilBERT model to identify spam vs non-spam (ham) messages",img:JM},{event:"VSHacks 2022",type:"Hackathon",title:"Focus Focus",desc:"A chrome extension that blocks distracting websites for lock in study sessions",img:tE,isWinner:!0}],r=s==="All"?i:i.filter(l=>l.type===s);return At.jsxs("div",{class:"sections",children:[At.jsx("h1",{children:"Projects"}),At.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.25rem",flexWrap:"wrap"},children:nE.map(l=>At.jsx("button",{onClick:()=>t(l),style:{padding:"5px 14px",borderRadius:"999px",border:"1px solid",borderColor:s===l?"#3a393b":"#d1d5db",background:s===l?"#3a393b":"transparent",color:s===l?"#fff":"#555",fontSize:"13px",cursor:"pointer",fontWeight:s===l?600:400,transition:"all 0.15s"},children:l},l))}),At.jsx("section",{id:"projects",className:"projects",style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"},children:r.map((l,u)=>At.jsxs("div",{className:"project-card",style:{position:"relative",overflow:"hidden",padding:0},children:[l.isWinner&&At.jsx(eE,{}),l.img&&At.jsx("img",{src:l.img,alt:l.title,style:{width:"100%",height:"160px",objectFit:"cover",display:"block"}}),At.jsxs("div",{style:{padding:"14px 16px"},children:[l.event&&At.jsx("p",{style:{margin:"0 0 4px",fontSize:"12px",color:"#888"},children:At.jsx("em",{children:l.event})}),At.jsx("h3",{style:{margin:"0 0 6px"},children:l.title}),At.jsx("p",{style:{margin:"0 0 10px"},children:l.desc}),l.links&&At.jsx("div",{style:{display:"flex",gap:"0.75rem",marginTop:"0.5rem"},children:l.links.map((f,h)=>f.internal?At.jsx(Fd,{to:f.to,className:"project-link",children:f.label},h):At.jsx("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:f.label},h))})]})]},u))})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="178",aE=0,jv=1,rE=2,m0=1,sE=2,aa=3,Ya=0,Hn=1,Ri=2,Wa=0,Ms=1,Zv=2,Kv=3,Qv=4,oE=5,Er=100,lE=101,uE=102,cE=103,fE=104,hE=200,dE=201,pE=202,mE=203,qh=204,Yh=205,gE=206,vE=207,_E=208,xE=209,yE=210,SE=211,ME=212,EE=213,TE=214,jh=0,Zh=1,Kh=2,bs=3,Qh=4,Jh=5,$h=6,td=7,g0=0,bE=1,AE=2,qa=0,RE=1,wE=2,CE=3,DE=4,UE=5,LE=6,NE=7,v0=300,As=301,Rs=302,ed=303,nd=304,Zu=306,id=1e3,br=1001,ad=1002,_i=1003,OE=1004,du=1005,wi=1006,uh=1007,Ar=1008,Li=1009,_0=1010,x0=1011,ko=1012,Gd=1013,Rr=1014,ra=1015,Qo=1016,Vd=1017,kd=1018,Xo=1020,y0=35902,S0=1021,M0=1022,vi=1023,Wo=1026,qo=1027,E0=1028,Xd=1029,T0=1030,Wd=1031,qd=1033,Bu=33776,Iu=33777,Fu=33778,Hu=33779,rd=35840,sd=35841,od=35842,ld=35843,ud=36196,cd=37492,fd=37496,hd=37808,dd=37809,pd=37810,md=37811,gd=37812,vd=37813,_d=37814,xd=37815,yd=37816,Sd=37817,Md=37818,Ed=37819,Td=37820,bd=37821,Gu=36492,Ad=36494,Rd=36495,b0=36283,wd=36284,Cd=36285,Dd=36286,PE=3200,zE=3201,A0=0,BE=1,Xa="",li="srgb",ws="srgb-linear",Xu="linear",Fe="srgb",ss=7680,Jv=519,IE=512,FE=513,HE=514,R0=515,GE=516,VE=517,kE=518,XE=519,$v=35044,t_="300 es",sa=2e3,Wu=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let e_=1234567;const Io=Math.PI/180,Yo=180/Math.PI;function Ns(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function Yd(s,t){return(s%t+t)%t}function WE(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function qE(s,t,i){return s!==t?(i-s)/(t-s):0}function Fo(s,t,i){return(1-i)*s+i*t}function YE(s,t,i,r){return Fo(s,t,1-Math.exp(-i*r))}function jE(s,t=1){return t-Math.abs(Yd(s,t*2)-t)}function ZE(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function KE(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function QE(s,t){return s+Math.floor(Math.random()*(t-s+1))}function JE(s,t){return s+Math.random()*(t-s)}function $E(s){return s*(.5-Math.random())}function tT(s){s!==void 0&&(e_=s);let t=e_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eT(s){return s*Io}function nT(s){return s*Yo}function iT(s){return(s&s-1)===0&&s!==0}function aT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rT(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sT(s,t,i,r,l){const u=Math.cos,f=Math.sin,h=u(i/2),p=f(i/2),m=u((t+r)/2),g=f((t+r)/2),v=u((t-r)/2),_=f((t-r)/2),S=u((r-t)/2),E=f((r-t)/2);switch(l){case"XYX":s.set(h*g,p*v,p*_,h*m);break;case"YZY":s.set(p*_,h*g,p*v,h*m);break;case"ZXZ":s.set(p*v,p*_,h*g,h*m);break;case"XZX":s.set(h*g,p*E,p*S,h*m);break;case"YXY":s.set(p*S,h*g,p*E,h*m);break;case"ZYZ":s.set(p*E,p*S,h*g,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oT={DEG2RAD:Io,RAD2DEG:Yo,generateUUID:Ns,clamp:me,euclideanModulo:Yd,mapLinear:WE,inverseLerp:qE,lerp:Fo,damp:YE,pingpong:jE,smoothstep:ZE,smootherstep:KE,randInt:QE,randFloat:JE,randFloatSpread:$E,seededRandom:tT,degToRad:eT,radToDeg:nT,isPowerOfTwo:iT,ceilPowerOfTwo:aT,floorPowerOfTwo:rT,setQuaternionFromProperEuler:sT,normalize:Nn,denormalize:ys};class ee{constructor(t=0,i=0){ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,h){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const _=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(v!==T||p!==_||m!==S||g!==E){let y=1-h;const x=p*_+m*S+g*E+v*T,O=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const I=Math.sqrt(D),H=Math.atan2(I,x*O);y=Math.sin(y*H)/I,h=Math.sin(h*H)/I}const C=h*O;if(p=p*y+_*C,m=m*y+S*C,g=g*y+E*C,v=v*y+T*C,y===1-h){const I=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=I,m*=I,g*=I,v*=I}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,f){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[f],_=u[f+1],S=u[f+2],E=u[f+3];return t[i]=h*E+g*v+p*S-m*_,t[i+1]=p*E+g*_+m*v-h*S,t[i+2]=m*E+g*S+h*_-p*v,t[i+3]=g*E-h*v-p*_-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),v=h(u/2),_=p(r/2),S=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"YZX":this._x=_*g*v+m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v-_*S*E;break;case"XZY":this._x=_*g*v-m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10],_=r+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-m)*S,this._z=(f-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+m)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(u-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(f-l)/S,this._x=(u+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*h+l*m-u*p,this._y=l*g+f*p+u*h-r*m,this._z=u*g+f*m+r*p-l*h,this._w=f*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-i)*g)/m,_=Math.sin(i*g)/m;return this._w=f*v+this._w*_,this._x=r*v+this._x*_,this._y=l*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,r=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(n_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(n_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),g=2*(h*i-u*l),v=2*(u*r-f*i);return this.x=i+p*m+f*v-h*g,this.y=r+p*g+h*m-u*v,this.z=l+p*v+u*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new W,n_=new Jo;class le{constructor(t,i,r,l,u,f,h,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,p,m)}set(t,i,r,l,u,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],g=r[4],v=r[7],_=r[2],S=r[5],E=r[8],T=l[0],y=l[3],x=l[6],O=l[1],D=l[4],C=l[7],I=l[2],H=l[5],B=l[8];return u[0]=f*T+h*O+p*I,u[3]=f*y+h*D+p*H,u[6]=f*x+h*C+p*B,u[1]=m*T+g*O+v*I,u[4]=m*y+g*D+v*H,u[7]=m*x+g*C+v*B,u[2]=_*T+S*O+E*I,u[5]=_*y+S*D+E*H,u[8]=_*x+S*C+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-r*u*g+r*h*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=g*f-h*m,_=h*p-g*u,S=m*u-f*p,E=i*v+r*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(l*m-g*r)*T,t[2]=(h*r-l*f)*T,t[3]=_*T,t[4]=(g*i-l*p)*T,t[5]=(l*u-h*i)*T,t[6]=S*T,t[7]=(r*p-m*i)*T,t[8]=(f*i-r*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(fh.makeScale(t,i)),this}rotate(t){return this.premultiply(fh.makeRotation(-t)),this}translate(t,i){return this.premultiply(fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fh=new le;function w0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lT(){const s=qu("canvas");return s.style.display="block",s}const i_={};function Es(s){s in i_||(i_[s]=!0,console.warn(s))}function uT(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function cT(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fT(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const a_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hT(){const s={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Fe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Xu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ws]:{primaries:t,whitePoint:r,transfer:Xu,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Ae=hT();function oa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class dT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=qu("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=oa(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pT=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(hh(l[f].image)):u.push(hh(l[f]))}else u=hh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function hh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mT=0;const dh=new W;class Gn extends Ls{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=br,l=br,u=wi,f=Ar,h=vi,p=Li,m=Gn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Ns(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==v0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case id:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case id:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=v0;Gn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],g=p[4],v=p[8],_=p[1],S=p[5],E=p[9],T=p[2],y=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,C=(S+1)/2,I=(x+1)/2,H=(g+_)/4,B=(v+T)/4,X=(E+y)/4;return D>C&&D>I?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=H/r,u=B/r):C>I?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=H/l,u=X/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=B/u,l=X/u),this.set(r,l,u,i),this}let O=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gT extends Ls{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends gT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class C0 extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vT extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,di):di.fromBufferAttribute(u,f),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pu.copy(r.boundingBox)),pu.applyMatrix4(t.matrixWorld),this.union(pu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),mu.subVectors(this.max,Uo),ls.subVectors(t.a,Uo),us.subVectors(t.b,Uo),cs.subVectors(t.c,Uo),Ia.subVectors(us,ls),Fa.subVectors(cs,us),mr.subVectors(ls,cs);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-mr.y,mr.x,0];return!ph(i,ls,us,cs,mu)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,ls,us,cs,mu))?!1:(gu.crossVectors(Ia,Fa),i=[gu.x,gu.y,gu.z],ph(i,ls,us,cs,mu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new W,new W,new W,new W,new W,new W,new W,new W],di=new W,pu=new $o,ls=new W,us=new W,cs=new W,Ia=new W,Fa=new W,mr=new W,Uo=new W,mu=new W,gu=new W,gr=new W;function ph(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){gr.fromArray(s,u);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),p=t.dot(gr),m=i.dot(gr),g=r.dot(gr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const _T=new $o,Lo=new W,mh=new W;class Zd{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):_T.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(mh)),this.expandByPoint(Lo.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new W,gh=new W,vu=new W,Ha=new W,vh=new W,_u=new W,_h=new W;class xT{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){gh.copy(t).add(i).multiplyScalar(.5),vu.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(gh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(vu),h=Ha.dot(this.direction),p=-Ha.dot(vu),m=Ha.lengthSq(),g=Math.abs(1-f*f);let v,_,S,E;if(g>0)if(v=f*p-h,_=f*h-p,E=u*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,S=v*(v+f*_+2*h)+_*(f*v+_+2*p)+m}else _=u,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _=-u,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _<=-E?(v=Math.max(0,-(-f*u+h)),_=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+_*(_+2*p)+m):_<=E?(v=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+m):(v=Math.max(0,-(f*u+h)),_=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+_*(_+2*p)+m);else _=f>0?-u:u,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(gh).addScaledVector(vu,_),S}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(r=(t.min.x-_.x)*m,l=(t.max.x-_.x)*m):(r=(t.max.x-_.x)*m,l=(t.min.x-_.x)*m),g>=0?(u=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){vh.subVectors(i,t),_u.subVectors(r,t),_h.crossVectors(vh,_u);let f=this.direction.dot(_h),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ha.subVectors(this.origin,t);const p=h*this.direction.dot(_u.crossVectors(Ha,_u));if(p<0)return null;const m=h*this.direction.dot(vh.cross(Ha));if(m<0||p+m>f)return null;const g=-h*Ha.dot(_h);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,f,h,p,m,g,v,_,S,E,T,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,p,m,g,v,_,S,E,T,y)}set(t,i,r,l,u,f,h,p,m,g,v,_,S,E,T,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=f,x[9]=h,x[13]=p,x[2]=m,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=f*g,S=f*v,E=h*g,T=h*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=S+E*m,i[5]=_-T*m,i[9]=-h*p,i[2]=T-_*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const _=p*g,S=p*v,E=m*g,T=m*v;i[0]=_+T*h,i[4]=E*h-S,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+_*h,i[10]=f*p}else if(t.order==="ZXY"){const _=p*g,S=p*v,E=m*g,T=m*v;i[0]=_-T*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-_*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const _=f*g,S=f*v,E=h*g,T=h*v;i[0]=p*g,i[4]=E*m-S,i[8]=_*m+T,i[1]=p*v,i[5]=T*m+_,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const _=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=T-_*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*v+E,i[10]=_-T*v}else if(t.order==="XZY"){const _=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=_*v+T,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*g,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yT,t,ST)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ga.crossVectors(r,Kn),Ga.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ga.crossVectors(r,Kn)),Ga.normalize(),xu.crossVectors(Kn,Ga),l[0]=Ga.x,l[4]=xu.x,l[8]=Kn.x,l[1]=Ga.y,l[5]=xu.y,l[9]=Kn.y,l[2]=Ga.z,l[6]=xu.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],g=r[1],v=r[5],_=r[9],S=r[13],E=r[2],T=r[6],y=r[10],x=r[14],O=r[3],D=r[7],C=r[11],I=r[15],H=l[0],B=l[4],X=l[8],U=l[12],w=l[1],V=l[5],ot=l[9],st=l[13],mt=l[2],ut=l[6],z=l[10],K=l[14],j=l[3],Et=l[7],L=l[11],tt=l[15];return u[0]=f*H+h*w+p*mt+m*j,u[4]=f*B+h*V+p*ut+m*Et,u[8]=f*X+h*ot+p*z+m*L,u[12]=f*U+h*st+p*K+m*tt,u[1]=g*H+v*w+_*mt+S*j,u[5]=g*B+v*V+_*ut+S*Et,u[9]=g*X+v*ot+_*z+S*L,u[13]=g*U+v*st+_*K+S*tt,u[2]=E*H+T*w+y*mt+x*j,u[6]=E*B+T*V+y*ut+x*Et,u[10]=E*X+T*ot+y*z+x*L,u[14]=E*U+T*st+y*K+x*tt,u[3]=O*H+D*w+C*mt+I*j,u[7]=O*B+D*V+C*ut+I*Et,u[11]=O*X+D*ot+C*z+I*L,u[15]=O*U+D*st+C*K+I*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],v=t[6],_=t[10],S=t[14],E=t[3],T=t[7],y=t[11],x=t[15];return E*(+u*p*v-l*m*v-u*h*_+r*m*_+l*h*S-r*p*S)+T*(+i*p*S-i*m*_+u*f*_-l*f*S+l*m*g-u*p*g)+y*(+i*m*v-i*h*S-u*f*v+r*f*S+u*h*g-r*m*g)+x*(-l*h*g-i*p*v+i*h*_+l*f*v-r*f*_+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=t[9],_=t[10],S=t[11],E=t[12],T=t[13],y=t[14],x=t[15],O=v*y*m-T*_*m+T*p*S-h*y*S-v*p*x+h*_*x,D=E*_*m-g*y*m-E*p*S+f*y*S+g*p*x-f*_*x,C=g*T*m-E*v*m+E*h*S-f*T*S-g*h*x+f*v*x,I=E*v*p-g*T*p-E*h*_+f*T*_+g*h*y-f*v*y,H=i*O+r*D+l*C+u*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=O*B,t[1]=(T*_*u-v*y*u-T*l*S+r*y*S+v*l*x-r*_*x)*B,t[2]=(h*y*u-T*p*u+T*l*m-r*y*m-h*l*x+r*p*x)*B,t[3]=(v*p*u-h*_*u-v*l*m+r*_*m+h*l*S-r*p*S)*B,t[4]=D*B,t[5]=(g*y*u-E*_*u+E*l*S-i*y*S-g*l*x+i*_*x)*B,t[6]=(E*p*u-f*y*u-E*l*m+i*y*m+f*l*x-i*p*x)*B,t[7]=(f*_*u-g*p*u+g*l*m-i*_*m-f*l*S+i*p*S)*B,t[8]=C*B,t[9]=(E*v*u-g*T*u-E*r*S+i*T*S+g*r*x-i*v*x)*B,t[10]=(f*T*u-E*h*u+E*r*m-i*T*m-f*r*x+i*h*x)*B,t[11]=(g*h*u-f*v*u-g*r*m+i*v*m+f*r*S-i*h*S)*B,t[12]=I*B,t[13]=(g*T*l-E*v*l+E*r*_-i*T*_-g*r*y+i*v*y)*B,t[14]=(E*h*l-f*T*l-E*r*p+i*T*p+f*r*y-i*h*y)*B,t[15]=(f*v*l-g*h*l+g*r*p-i*v*p-f*r*_+i*h*_)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,h=t.y,p=t.z,m=u*f,g=u*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*f,0,m*p-l*h,g*p+l*f,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,m=u+u,g=f+f,v=h+h,_=u*m,S=u*g,E=u*v,T=f*g,y=f*v,x=h*v,O=p*m,D=p*g,C=p*v,I=r.x,H=r.y,B=r.z;return l[0]=(1-(T+x))*I,l[1]=(S+C)*I,l[2]=(E-D)*I,l[3]=0,l[4]=(S-C)*H,l[5]=(1-(_+x))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(E+D)*B,l[9]=(y-O)*B,l[10]=(1-(_+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const f=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const m=1/u,g=1/f,v=1/h;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=u,r.y=f,r.z=h,this}makePerspective(t,i,r,l,u,f,h=sa){const p=this.elements,m=2*u/(i-t),g=2*u/(r-l),v=(i+t)/(i-t),_=(r+l)/(r-l);let S,E;if(h===sa)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(h===Wu)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,f,h=sa){const p=this.elements,m=1/(i-t),g=1/(r-l),v=1/(f-u),_=(i+t)*m,S=(r+l)*g;let E,T;if(h===sa)E=(f+u)*v,T=-2*v;else if(h===Wu)E=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new W,pi=new je,yT=new W(0,0,0),ST=new W(1,1,1),Ga=new W,xu=new W,Kn=new W,s_=new je,o_=new Jo;class Ni{constructor(t=0,i=0,r=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],v=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return s_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return o_.setFromEuler(this),this.setFromQuaternion(o_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let MT=0;const l_=new W,hs=new Jo,ea=new je,yu=new W,No=new W,ET=new W,TT=new Jo,u_=new W(1,0,0),c_=new W(0,1,0),f_=new W(0,0,1),h_={type:"added"},bT={type:"removed"},ds={type:"childadded",child:null},xh={type:"childremoved",child:null};class Un extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new W,i=new Ni,r=new Jo,l=new W(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(u_,t)}rotateY(t){return this.rotateOnAxis(c_,t)}rotateZ(t){return this.rotateOnAxis(f_,t)}translateOnAxis(t,i){return l_.copy(t).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(u_,t)}translateY(t){return this.translateOnAxis(c_,t)}translateZ(t){return this.translateOnAxis(f_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?yu.copy(t):yu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(No,yu,this.up):ea.lookAt(yu,No,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(ea),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bT),xh.child=t,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,ET),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,TT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new W(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new W,na=new W,yh=new W,ia=new W,ps=new W,ms=new W,d_=new W,Sh=new W,Mh=new W,Eh=new W,Th=new He,bh=new He,Ah=new He;class gi{constructor(t=new W,i=new W,r=new W){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),na.subVectors(r,i),yh.subVectors(t,i);const f=mi.dot(mi),h=mi.dot(na),p=mi.dot(yh),m=na.dot(na),g=na.dot(yh),v=f*m-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,S=(m*p-h*g)*_,E=(f*g-h*p)*_;return u.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,f,h,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(f,ia.y),p.addScaledVector(h,ia.z),p)}static getInterpolatedAttribute(t,i,r,l,u,f){return Th.setScalar(0),bh.setScalar(0),Ah.setScalar(0),Th.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,r),Ah.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Th,u.x),f.addScaledVector(bh,u.y),f.addScaledVector(Ah,u.z),f}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),na.subVectors(t,i),mi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,h;ps.subVectors(l,r),ms.subVectors(u,r),Sh.subVectors(t,r);const p=ps.dot(Sh),m=ms.dot(Sh);if(p<=0&&m<=0)return i.copy(r);Mh.subVectors(t,l);const g=ps.dot(Mh),v=ms.dot(Mh);if(g>=0&&v<=g)return i.copy(l);const _=p*v-g*m;if(_<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(ps,f);Eh.subVectors(t,u);const S=ps.dot(Eh),E=ms.dot(Eh);if(E>=0&&S<=E)return i.copy(u);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(ms,h);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return d_.subVectors(u,l),h=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(d_,h);const x=1/(y+T+_);return f=T*x,h=_*x,i.copy(r).addScaledVector(ps,f).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Rh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=Yd(t,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Rh(f,u,t+1/3),this.g=Rh(f,u,t),this.b=Rh(f,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const r=U0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ae.workingToColorSpace(Dn.copy(this),t),Math.round(me(Dn.r*255,0,255))*65536+Math.round(me(Dn.g*255,0,255))*256+Math.round(me(Dn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const v=f-h;switch(m=g<=.5?v/(f+h):v/(2-f-h),f){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=li){Ae.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(Su);const r=Fo(Va.h,Su.h,i),l=Fo(Va.s,Su.s,i),u=Fo(Va.l,Su.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new we;we.NAMES=U0;let AT=0;class tl extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ms,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qh&&(r.blendSrc=this.blendSrc),this.blendDst!==Yh&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kd extends tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new W,Mu=new ee;let RT=0;class Di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=$v,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mu.fromBufferAttribute(this,i),Mu.applyMatrix3(t),this.setXY(i,Mu.x,Mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Nn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array),u=Nn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$v&&(t.usage=this.usage),t}}class L0 extends Di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class N0 extends Di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class xi extends Di{constructor(t,i,r){super(new Float32Array(t),i,r)}}let wT=0;const oi=new je,wh=new Un,gs=new W,Qn=new $o,Oo=new $o,xn=new W;class ca extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?N0:L0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,r){return oi.makeTranslation(t,i,r),this.applyMatrix4(oi),this}scale(t,i,r){return oi.makeScale(t,i,r),this.applyMatrix4(oi),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(Qn.min,Oo.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,Oo.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(Oo.min),Qn.expandByPoint(Oo.max))}Qn.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)xn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)xn.fromBufferAttribute(h,m),p&&(gs.fromBufferAttribute(t,m),xn.add(gs)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<r.count;X++)h[X]=new W,p[X]=new W;const m=new W,g=new W,v=new W,_=new ee,S=new ee,E=new ee,T=new W,y=new W;function x(X,U,w){m.fromBufferAttribute(r,X),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,w),_.fromBufferAttribute(u,X),S.fromBufferAttribute(u,U),E.fromBufferAttribute(u,w),g.sub(m),v.sub(m),S.sub(_),E.sub(_);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),h[X].add(T),h[U].add(T),h[w].add(T),p[X].add(y),p[U].add(y),p[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,U=O.length;X<U;++X){const w=O[X],V=w.start,ot=w.count;for(let st=V,mt=V+ot;st<mt;st+=3)x(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const D=new W,C=new W,I=new W,H=new W;function B(X){I.fromBufferAttribute(l,X),H.copy(I);const U=h[X];D.copy(U),D.sub(I.multiplyScalar(I.dot(U))).normalize(),C.crossVectors(H,U);const V=C.dot(p[X])<0?-1:1;f.setXYZW(X,D.x,D.y,D.z,V)}for(let X=0,U=O.length;X<U;++X){const w=O[X],V=w.start,ot=w.count;for(let st=V,mt=V+ot;st<mt;st+=3)B(t.getX(st+0)),B(t.getX(st+1)),B(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new W,u=new W,f=new W,h=new W,p=new W,m=new W,g=new W,v=new W;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,v=h.normalized,_=new m.constructor(p.length*g);let S=0,E=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*g;for(let x=0;x<g;x++)_[E++]=m[S++]}return new Di(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ca,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,v=m.length;g<v;g++){const _=m[g],S=t(_,r);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,_=m.length;v<_;v++){const S=m[v];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],v=u[m];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const p_=new je,vr=new xT,Eu=new Zd,m_=new W,Tu=new W,bu=new W,Au=new W,Ch=new W,Ru=new W,g_=new W,wu=new W;class $n extends Un{constructor(t=new ca,i=new Kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Ru.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],v=u[p];g!==0&&(Ch.fromBufferAttribute(v,t),f?Ru.addScaledVector(Ch,g):Ru.addScaledVector(Ch.sub(i),g))}i.add(Ru)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(u),vr.copy(t.ray).recast(t.near),!(Eu.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Eu,m_)===null||vr.origin.distanceToSquared(m_)>(t.far-t.near)**2))&&(p_.copy(u).invert(),vr.copy(t.ray).applyMatrix4(p_),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=f[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,I=D;C<I;C+=3){const H=h.getX(C),B=h.getX(C+1),X=h.getX(C+2);l=Cu(this,x,t,r,m,g,v,H,B,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const O=h.getX(y),D=h.getX(y+1),C=h.getX(y+2);l=Cu(this,f,t,r,m,g,v,O,D,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=f[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,I=D;C<I;C+=3){const H=C,B=C+1,X=C+2;l=Cu(this,x,t,r,m,g,v,H,B,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const O=y,D=y+1,C=y+2;l=Cu(this,f,t,r,m,g,v,O,D,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function CT(s,t,i,r,l,u,f,h){let p;if(t.side===Hn?p=r.intersectTriangle(f,u,l,!0,h):p=r.intersectTriangle(l,u,f,t.side===Ya,h),p===null)return null;wu.copy(h),wu.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(wu);return m<i.near||m>i.far?null:{distance:m,point:wu.clone(),object:s}}function Cu(s,t,i,r,l,u,f,h,p,m){s.getVertexPosition(h,Tu),s.getVertexPosition(p,bu),s.getVertexPosition(m,Au);const g=CT(s,t,i,r,Tu,bu,Au,g_);if(g){const v=new W;gi.getBarycoord(g_,Tu,bu,Au,v),l&&(g.uv=gi.getInterpolatedAttribute(l,h,p,m,v,new ee)),u&&(g.uv1=gi.getInterpolatedAttribute(u,h,p,m,v,new ee)),f&&(g.normal=gi.getInterpolatedAttribute(f,h,p,m,v,new W),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new W,materialIndex:0};gi.getNormal(Tu,bu,Au,_.normal),g.face=_,g.barycoord=v}return g}class el extends ca{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,r,i,t,f,u,0),E("z","y","x",1,-1,r,i,-t,f,u,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new xi(m,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(v,2));function E(T,y,x,O,D,C,I,H,B,X,U){const w=C/B,V=I/X,ot=C/2,st=I/2,mt=H/2,ut=B+1,z=X+1;let K=0,j=0;const Et=new W;for(let L=0;L<z;L++){const tt=L*V-st;for(let xt=0;xt<ut;xt++){const St=xt*w-ot;Et[T]=St*O,Et[y]=tt*D,Et[x]=mt,m.push(Et.x,Et.y,Et.z),Et[T]=0,Et[y]=0,Et[x]=H>0?1:-1,g.push(Et.x,Et.y,Et.z),v.push(xt/B),v.push(1-L/X),K+=1}}for(let L=0;L<X;L++)for(let tt=0;tt<B;tt++){const xt=_+tt+ut*L,St=_+tt+ut*(L+1),J=_+(tt+1)+ut*(L+1),gt=_+(tt+1)+ut*L;p.push(xt,St,gt),p.push(St,J,gt),j+=6}h.addGroup(S,j,U),S+=j,_+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const r=Cs(s[i]);for(const l in r)t[l]=r[l]}return t}function DT(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function O0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const UT={clone:Cs,merge:On};var LT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LT,this.fragmentShader=NT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=DT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class P0 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new W,v_=new ee,__=new ee;class Jn extends P0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,v_,__),i.subVectors(__,v_)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Io*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,_s=1;class OT extends Un{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(vs,_s,t,i);l.layers=this.layers,this.add(l);const u=new Jn(vs,_s,t,i);u.layers=this.layers,this.add(u);const f=new Jn(vs,_s,t,i);f.layers=this.layers,this.add(f);const h=new Jn(vs,_s,t,i);h.layers=this.layers,this.add(h);const p=new Jn(vs,_s,t,i);p.layers=this.layers,this.add(p);const m=new Jn(vs,_s,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,p]=i;for(const m of i)this.remove(m);if(t===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,m,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,_,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class z0 extends Gn{constructor(t=[],i=As,r,l,u,f,h,p,m,g){super(t,i,r,l,u,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PT extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new z0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new el(5,5,5),u=new ja({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Wa});u.uniforms.tEquirect.value=i;const f=new $n(l,u),h=i.minFilter;return i.minFilter===Ar&&(i.minFilter=wi),new OT(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class zo extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zT={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,r),x=this._getHandJoint(m,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(zT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new zo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class BT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Uh=new W,IT=new W,FT=new le;class Sr{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Uh.subVectors(r,i).cross(IT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||FT.getNormalMatrix(t),l=this.coplanarPoint(Uh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Zd,HT=new ee(.5,.5),Du=new W;class Qd{constructor(t=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,f=new Sr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=sa){const r=this.planes,l=t.elements,u=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],v=l[6],_=l[7],S=l[8],E=l[9],T=l[10],y=l[11],x=l[12],O=l[13],D=l[14],C=l[15];if(r[0].setComponents(p-u,_-m,y-S,C-x).normalize(),r[1].setComponents(p+u,_+m,y+S,C+x).normalize(),r[2].setComponents(p+f,_+g,y+E,C+O).normalize(),r[3].setComponents(p-f,_-g,y-E,C-O).normalize(),r[4].setComponents(p-h,_-v,y-T,C-D).normalize(),i===sa)r[5].setComponents(p+h,_+v,y+T,C+D).normalize();else if(i===Wu)r[5].setComponents(h,v,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=HT.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Du.x=l.normal.x>0?t.max.x:t.min.x,Du.y=l.normal.y>0?t.max.y:t.min.y,Du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B0 extends Gn{constructor(t,i,r=Rr,l,u,f,h=_i,p=_i,m,g=Wo,v=1){if(g!==Wo&&g!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,l,u,f,h,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),u+=r.distanceTo(l),i.push(u),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const u=r.length;let f;i?f=i:f=t*r[u-1];let h=0,p=u-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=r[l]-f,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===f)return l/(u-1);const g=r[l],_=r[l+1]-g,S=(f-g)/_;return(l+S)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),h=this.getPoint(u),p=i||(f.isVector2?new ee:new W);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new W,l=[],u=[],f=[],h=new W,p=new je;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new W)}u[0]=new W,f[0]=new W;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),_=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),_<=m&&r.set(0,0,1),h.crossVectors(l[0],r).normalize(),u[0].crossVectors(l[0],h),f[0].crossVectors(l[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(h,E))}f[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(me(u[0].dot(u[t]),-1,1));S/=t,l[0].dot(h.crossVectors(u[0],u[t]))>0&&(S=-S);for(let E=1;E<=t;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class I0 extends fa{constructor(t=0,i=0,r=1,l=1,u=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,i=new ee){const r=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const h=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,S=m-this.aY;p=_*g-S*v+this.aX,m=_*v+S*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class GT extends I0{constructor(t,i,r,l,u,f){super(t,i,r,r,l,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Jd(){let s=0,t=0,i=0,r=0;function l(u,f,h,p){s=u,t=h,i=-3*u+3*f-2*h-p,r=2*u-2*f+h+p}return{initCatmullRom:function(u,f,h,p,m){l(f,h,m*(h-u),m*(p-f))},initNonuniformCatmullRom:function(u,f,h,p,m,g,v){let _=(f-u)/m-(h-u)/(m+g)+(h-f)/g,S=(h-f)/g-(p-f)/(g+v)+(p-h)/v;_*=g,S*=g,l(f,h,_,S)},calc:function(u){const f=u*u,h=f*u;return s+t*u+i*f+r*h}}}const Uu=new W,Lh=new Jd,Nh=new Jd,Oh=new Jd;class F0 extends fa{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new W){const r=i,l=this.points,u=l.length,f=(u-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/u)+1)*u:p===0&&h===u-1&&(h=u-2,p=1);let m,g;this.closed||h>0?m=l[(h-1)%u]:(Uu.subVectors(l[0],l[1]).add(l[0]),m=Uu);const v=l[h%u],_=l[(h+1)%u];if(this.closed||h+2<u?g=l[(h+2)%u]:(Uu.subVectors(l[u-1],l[u-2]).add(l[u-1]),g=Uu),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),T=Math.pow(v.distanceToSquared(_),S),y=Math.pow(_.distanceToSquared(g),S);T<1e-4&&(T=1),E<1e-4&&(E=T),y<1e-4&&(y=T),Lh.initNonuniformCatmullRom(m.x,v.x,_.x,g.x,E,T,y),Nh.initNonuniformCatmullRom(m.y,v.y,_.y,g.y,E,T,y),Oh.initNonuniformCatmullRom(m.z,v.z,_.z,g.z,E,T,y)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(m.x,v.x,_.x,g.x,this.tension),Nh.initCatmullRom(m.y,v.y,_.y,g.y,this.tension),Oh.initCatmullRom(m.z,v.z,_.z,g.z,this.tension));return r.set(Lh.calc(p),Nh.calc(p),Oh.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function x_(s,t,i,r,l){const u=(r-t)*.5,f=(l-i)*.5,h=s*s,p=s*h;return(2*i-2*r+u+f)*p+(-3*i+3*r-2*u-f)*h+u*s+i}function VT(s,t){const i=1-s;return i*i*t}function kT(s,t){return 2*(1-s)*s*t}function XT(s,t){return s*s*t}function Ho(s,t,i,r){return VT(s,t)+kT(s,i)+XT(s,r)}function WT(s,t){const i=1-s;return i*i*i*t}function qT(s,t){const i=1-s;return 3*i*i*s*t}function YT(s,t){return 3*(1-s)*s*s*t}function jT(s,t){return s*s*s*t}function Go(s,t,i,r,l){return WT(s,t)+qT(s,i)+YT(s,r)+jT(s,l)}class ZT extends fa{constructor(t=new ee,i=new ee,r=new ee,l=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new ee){const r=i,l=this.v0,u=this.v1,f=this.v2,h=this.v3;return r.set(Go(t,l.x,u.x,f.x,h.x),Go(t,l.y,u.y,f.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class KT extends fa{constructor(t=new W,i=new W,r=new W,l=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new W){const r=i,l=this.v0,u=this.v1,f=this.v2,h=this.v3;return r.set(Go(t,l.x,u.x,f.x,h.x),Go(t,l.y,u.y,f.y,h.y),Go(t,l.z,u.z,f.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class QT extends fa{constructor(t=new ee,i=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ee){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ee){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class JT extends fa{constructor(t=new W,i=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new W){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new W){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $T extends fa{constructor(t=new ee,i=new ee,r=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new ee){const r=i,l=this.v0,u=this.v1,f=this.v2;return r.set(Ho(t,l.x,u.x,f.x),Ho(t,l.y,u.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H0 extends fa{constructor(t=new W,i=new W,r=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new W){const r=i,l=this.v0,u=this.v1,f=this.v2;return r.set(Ho(t,l.x,u.x,f.x),Ho(t,l.y,u.y,f.y),Ho(t,l.z,u.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tb extends fa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ee){const r=i,l=this.points,u=(l.length-1)*t,f=Math.floor(u),h=u-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return r.set(x_(h,p.x,m.x,g.x,v.x),x_(h,p.y,m.y,g.y,v.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new ee().fromArray(l))}return this}}var eb=Object.freeze({__proto__:null,ArcCurve:GT,CatmullRomCurve3:F0,CubicBezierCurve:ZT,CubicBezierCurve3:KT,EllipseCurve:I0,LineCurve:QT,LineCurve3:JT,QuadraticBezierCurve:$T,QuadraticBezierCurve3:H0,SplineCurve:tb});class Ku extends ca{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,v=t/h,_=i/p,S=[],E=[],T=[],y=[];for(let x=0;x<g;x++){const O=x*_-f;for(let D=0;D<m;D++){const C=D*v-u;E.push(C,-O,0),T.push(0,0,1),y.push(D/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<h;O++){const D=O+m*x,C=O+m*(x+1),I=O+1+m*(x+1),H=O+1+m*x;S.push(D,C,H),S.push(C,I,H)}this.setIndex(S),this.setAttribute("position",new xi(E,3)),this.setAttribute("normal",new xi(T,3)),this.setAttribute("uv",new xi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.width,t.height,t.widthSegments,t.heightSegments)}}class $d extends ca{constructor(t=new H0(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),i=64,r=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:u};const f=t.computeFrenetFrames(i,u);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const h=new W,p=new W,m=new ee;let g=new W;const v=[],_=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new xi(v,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(S,2));function T(){for(let D=0;D<i;D++)y(D);y(u===!1?i:0),O(),x()}function y(D){g=t.getPointAt(D/i,g);const C=f.normals[D],I=f.binormals[D];for(let H=0;H<=l;H++){const B=H/l*Math.PI*2,X=Math.sin(B),U=-Math.cos(B);p.x=U*C.x+X*I.x,p.y=U*C.y+X*I.y,p.z=U*C.z+X*I.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+r*p.x,h.y=g.y+r*p.y,h.z=g.z+r*p.z,v.push(h.x,h.y,h.z)}}function x(){for(let D=1;D<=i;D++)for(let C=1;C<=l;C++){const I=(l+1)*(D-1)+(C-1),H=(l+1)*D+(C-1),B=(l+1)*D+C,X=(l+1)*(D-1)+C;E.push(I,H,X),E.push(H,B,X)}}function O(){for(let D=0;D<=i;D++)for(let C=0;C<=l;C++)m.x=D/i,m.y=C/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $d(new eb[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class y_ extends tl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nb extends tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ib extends tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tp extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ph=new je,S_=new W,M_=new W;class G0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;S_.setFromMatrixPosition(t.matrixWorld),i.position.copy(S_),M_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(M_),i.updateMatrixWorld(),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const E_=new je,Po=new W,zh=new W;class ab extends G0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Po.setFromMatrixPosition(t.matrixWorld),r.position.copy(Po),zh.copy(r.position),zh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(zh),r.updateMatrixWorld(),l.makeTranslation(-Po.x,-Po.y,-Po.z),E_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(E_)}}class rb extends tp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new ab}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class V0 extends P0{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sb extends G0{constructor(){super(new V0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ob extends tp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lb extends tp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ub extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class cb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function T_(s,t,i,r){const l=fb(r);switch(i){case S0:return s*t;case E0:return s*t/l.components*l.byteLength;case Xd:return s*t/l.components*l.byteLength;case T0:return s*t*2/l.components*l.byteLength;case Wd:return s*t*2/l.components*l.byteLength;case M0:return s*t*3/l.components*l.byteLength;case vi:return s*t*4/l.components*l.byteLength;case qd:return s*t*4/l.components*l.byteLength;case Bu:case Iu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fu:case Hu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:case ld:return Math.max(s,16)*Math.max(t,8)/4;case rd:case od:return Math.max(s,8)*Math.max(t,8)/2;case ud:case cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Md:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gu:case Ad:case Rd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case b0:case wd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cd:case Dd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fb(s){switch(s){case Li:case _0:return{byteLength:1,components:1};case ko:case x0:case Qo:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case Rr:case Gd:case ra:return{byteLength:4,components:1};case y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function k0(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function hb(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:f}}var db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pb=`#ifdef USE_ALPHAHASH
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
#endif`,mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xb=`#ifdef USE_AOMAP
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
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ab=`#ifdef USE_IRIDESCENCE
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
#endif`,Rb=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zb=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ib=`vec3 transformedNormal = objectNormal;
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
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tA=`#ifdef USE_GRADIENTMAP
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
}`,eA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aA=`uniform bool receiveShadow;
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
#endif`,rA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,fA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hA=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MA=`#if defined( USE_POINTS_UV )
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
#endif`,EA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`#ifdef USE_MORPHTARGETS
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
#endif`,CA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LA=`#ifndef FLAT_SHADED
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
#endif`,OA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PA=`#ifdef USE_NORMALMAP
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
#endif`,zA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BA=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,FA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,QA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,JA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$A=`#ifdef USE_SKINNING
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
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
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
}`,x1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
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
}`,A1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,w1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,D1=`#define MATCAP
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
}`,U1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O1=`#define PHONG
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
}`,P1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,z1=`#define STANDARD
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
}`,B1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,F1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,H1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,k1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,X1=`uniform float rotation;
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
}`,W1=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:db,alphahash_pars_fragment:pb,alphamap_fragment:mb,alphamap_pars_fragment:gb,alphatest_fragment:vb,alphatest_pars_fragment:_b,aomap_fragment:xb,aomap_pars_fragment:yb,batching_pars_vertex:Sb,batching_vertex:Mb,begin_vertex:Eb,beginnormal_vertex:Tb,bsdfs:bb,iridescence_fragment:Ab,bumpmap_pars_fragment:Rb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Ub,color_fragment:Lb,color_pars_fragment:Nb,color_pars_vertex:Ob,color_vertex:Pb,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Fb,displacementmap_vertex:Hb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Vb,colorspace_fragment:kb,colorspace_pars_fragment:Xb,envmap_fragment:Wb,envmap_common_pars_fragment:qb,envmap_pars_fragment:Yb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:rA,envmap_vertex:Zb,fog_vertex:Kb,fog_pars_vertex:Qb,fog_fragment:Jb,fog_pars_fragment:$b,gradientmap_pars_fragment:tA,lightmap_pars_fragment:eA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:aA,lights_toon_fragment:sA,lights_toon_pars_fragment:oA,lights_phong_fragment:lA,lights_phong_pars_fragment:uA,lights_physical_fragment:cA,lights_physical_pars_fragment:fA,lights_fragment_begin:hA,lights_fragment_maps:dA,lights_fragment_end:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:gA,logdepthbuf_pars_vertex:vA,logdepthbuf_vertex:_A,map_fragment:xA,map_pars_fragment:yA,map_particle_fragment:SA,map_particle_pars_fragment:MA,metalnessmap_fragment:EA,metalnessmap_pars_fragment:TA,morphinstance_vertex:bA,morphcolor_vertex:AA,morphnormal_vertex:RA,morphtarget_pars_vertex:wA,morphtarget_vertex:CA,normal_fragment_begin:DA,normal_fragment_maps:UA,normal_pars_fragment:LA,normal_pars_vertex:NA,normal_vertex:OA,normalmap_pars_fragment:PA,clearcoat_normal_fragment_begin:zA,clearcoat_normal_fragment_maps:BA,clearcoat_pars_fragment:IA,iridescence_pars_fragment:FA,opaque_fragment:HA,packing:GA,premultiplied_alpha_fragment:VA,project_vertex:kA,dithering_fragment:XA,dithering_pars_fragment:WA,roughnessmap_fragment:qA,roughnessmap_pars_fragment:YA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:ZA,shadowmap_vertex:KA,shadowmask_pars_fragment:QA,skinbase_vertex:JA,skinning_pars_vertex:$A,skinning_vertex:t1,skinnormal_vertex:e1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:a1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:o1,uv_pars_fragment:l1,uv_pars_vertex:u1,uv_vertex:c1,worldpos_vertex:f1,background_vert:h1,background_frag:d1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:v1,depth_vert:_1,depth_frag:x1,distanceRGBA_vert:y1,distanceRGBA_frag:S1,equirect_vert:M1,equirect_frag:E1,linedashed_vert:T1,linedashed_frag:b1,meshbasic_vert:A1,meshbasic_frag:R1,meshlambert_vert:w1,meshlambert_frag:C1,meshmatcap_vert:D1,meshmatcap_frag:U1,meshnormal_vert:L1,meshnormal_frag:N1,meshphong_vert:O1,meshphong_frag:P1,meshphysical_vert:z1,meshphysical_frag:B1,meshtoon_vert:I1,meshtoon_frag:F1,points_vert:H1,points_frag:G1,shadow_vert:V1,shadow_frag:k1,sprite_vert:X1,sprite_frag:W1},Ot={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ai={basic:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:On([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:On([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:On([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:On([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:On([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:On([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:On([Ot.common,Ot.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:On([Ot.lights,Ot.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ai.physical={uniforms:On([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Lu={r:0,b:0,g:0},xr=new Ni,q1=new je;function Y1(s,t,i,r,l,u,f){const h=new we(0);let p=u===!0?0:1,m,g,v=null,_=0,S=null;function E(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?i:t).get(C)),C}function T(D){let C=!1;const I=E(D);I===null?x(h,p):I&&I.isColor&&(x(I,1),C=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,C){const I=E(C);I&&(I.isCubeTexture||I.mapping===Zu)?(g===void 0&&(g=new $n(new el(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Cs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(C.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(xr)),g.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Fe,(v!==I||_!==I.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=I,_=I.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new $n(new Ku(2,2),new ja({name:"BackgroundMaterial",uniforms:Cs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Fe,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||_!==I.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,_=I.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function x(D,C){D.getRGB(Lu,O0(s)),r.buffers.color.setClear(Lu.r,Lu.g,Lu.b,C,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,C=1){h.set(D),p=C,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(h,p)},render:T,addToRenderList:y,dispose:O}}function j1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,f=!1;function h(w,V,ot,st,mt){let ut=!1;const z=v(st,ot,V);u!==z&&(u=z,m(u.object)),ut=S(w,st,ot,mt),ut&&E(w,st,ot,mt),mt!==null&&t.update(mt,s.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,C(w,V,ot,st),mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,V,ot){const st=ot.wireframe===!0;let mt=r[w.id];mt===void 0&&(mt={},r[w.id]=mt);let ut=mt[V.id];ut===void 0&&(ut={},mt[V.id]=ut);let z=ut[st];return z===void 0&&(z=_(p()),ut[st]=z),z}function _(w){const V=[],ot=[],st=[];for(let mt=0;mt<i;mt++)V[mt]=0,ot[mt]=0,st[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ot,attributeDivisors:st,object:w,attributes:{},index:null}}function S(w,V,ot,st){const mt=u.attributes,ut=V.attributes;let z=0;const K=ot.getAttributes();for(const j in K)if(K[j].location>=0){const L=mt[j];let tt=ut[j];if(tt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),L===void 0||L.attribute!==tt||tt&&L.data!==tt.data)return!0;z++}return u.attributesNum!==z||u.index!==st}function E(w,V,ot,st){const mt={},ut=V.attributes;let z=0;const K=ot.getAttributes();for(const j in K)if(K[j].location>=0){let L=ut[j];L===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const tt={};tt.attribute=L,L&&L.data&&(tt.data=L.data),mt[j]=tt,z++}u.attributes=mt,u.attributesNum=z,u.index=st}function T(){const w=u.newAttributes;for(let V=0,ot=w.length;V<ot;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const ot=u.newAttributes,st=u.enabledAttributes,mt=u.attributeDivisors;ot[w]=1,st[w]===0&&(s.enableVertexAttribArray(w),st[w]=1),mt[w]!==V&&(s.vertexAttribDivisor(w,V),mt[w]=V)}function O(){const w=u.newAttributes,V=u.enabledAttributes;for(let ot=0,st=V.length;ot<st;ot++)V[ot]!==w[ot]&&(s.disableVertexAttribArray(ot),V[ot]=0)}function D(w,V,ot,st,mt,ut,z){z===!0?s.vertexAttribIPointer(w,V,ot,mt,ut):s.vertexAttribPointer(w,V,ot,st,mt,ut)}function C(w,V,ot,st){T();const mt=st.attributes,ut=ot.getAttributes(),z=V.defaultAttributeValues;for(const K in ut){const j=ut[K];if(j.location>=0){let Et=mt[K];if(Et===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){const L=Et.normalized,tt=Et.itemSize,xt=t.get(Et);if(xt===void 0)continue;const St=xt.buffer,J=xt.type,gt=xt.bytesPerElement,Mt=J===s.INT||J===s.UNSIGNED_INT||Et.gpuType===Gd;if(Et.isInterleavedBufferAttribute){const wt=Et.data,Dt=wt.stride,ue=Et.offset;if(wt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<j.locationSize;Jt++)x(j.location+Jt,wt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Jt=0;Jt<j.locationSize;Jt++)y(j.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Jt=0;Jt<j.locationSize;Jt++)D(j.location+Jt,tt/j.locationSize,J,L,Dt*gt,(ue+tt/j.locationSize*Jt)*gt,Mt)}else{if(Et.isInstancedBufferAttribute){for(let wt=0;wt<j.locationSize;wt++)x(j.location+wt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let wt=0;wt<j.locationSize;wt++)y(j.location+wt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let wt=0;wt<j.locationSize;wt++)D(j.location+wt,tt/j.locationSize,J,L,tt*gt,tt/j.locationSize*wt*gt,Mt)}}else if(z!==void 0){const L=z[K];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(j.location,L);break;case 3:s.vertexAttrib3fv(j.location,L);break;case 4:s.vertexAttrib4fv(j.location,L);break;default:s.vertexAttrib1fv(j.location,L)}}}}O()}function I(){X();for(const w in r){const V=r[w];for(const ot in V){const st=V[ot];for(const mt in st)g(st[mt].object),delete st[mt];delete V[ot]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const ot in V){const st=V[ot];for(const mt in st)g(st[mt].object),delete st[mt];delete V[ot]}delete r[w.id]}function B(w){for(const V in r){const ot=r[V];if(ot[w.id]===void 0)continue;const st=ot[w.id];for(const mt in st)g(st[mt].object),delete st[mt];delete ot[w.id]}}function X(){U(),f=!0,u!==l&&(u=l,m(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function Z1(s,t,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,r,1)}function p(m,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function K1(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==vi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Li&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ra&&!X)}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:I,maxSamples:H}}function Q1(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new Sr,h=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||l;return l=_,r=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!l||E===null||E.length===0||u&&!y)u?g(null):m();else{const O=u?0:r,D=O*4;let C=x.clippingState||null;p.value=C,C=g(E,_,D,S);for(let I=0;I!==D;++I)C[I]=i[I];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,S,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const x=S+T*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,C=S;D!==T;++D,C+=4)f.copy(v[D]).applyMatrix4(O,h),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function J1(s){let t=new WeakMap;function i(f,h){return h===ed?f.mapping=As:h===nd&&(f.mapping=Rs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===ed||h===nd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new PT(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ss=4,b_=[.125,.215,.35,.446,.526,.582],Tr=20,Bh=new V0,A_=new we;let Ih=null,Fh=0,Hh=0,Gh=!1;const Mr=(1+Math.sqrt(5))/2,xs=1/Mr,R_=[new W(-Mr,xs,0),new W(Mr,xs,0),new W(-xs,0,Mr),new W(xs,0,Mr),new W(0,Mr,-xs),new W(0,Mr,xs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],$1=new W;class w_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=$1}=u;Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ih,Fh,Hh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,Nu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Qo,format:vi,colorSpace:ws,depthBuffer:!1},l=C_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tR(u)),this._blurMaterial=eR(u,t,i)}return l}_compileMaterial(t){const i=new $n(this._lodPlanes[0],t);this._renderer.compile(i,Bh)}_sceneToCubeUV(t,i,r,l,u){const p=new Jn(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(A_),v.toneMapping=qa,v.autoClear=!1;const E=new Kd({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),T=new $n(new el,E);let y=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,y=!0):(E.color.copy(A_),y=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[O],u.y,u.z)):D===1?(p.up.set(0,0,m[O]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[O],u.z)):(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[O]));const C=this._cubeSize;Nu(l,D*C,O>2?C:0,C,C),v.setRenderTarget(l),y&&v.render(T,p),v.render(t,p)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=_,t.background=x}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===As||t.mapping===Rs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=U_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new $n(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Nu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Bh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=R_[(l-u-1)%R_.length];this._blur(t,u-1,u,f,h)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new $n(this._lodPlanes[l],m),_=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),T=u/E,y=isFinite(u)?1+Math.floor(g*T):Tr;y>Tr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Tr}`);const x=[];let O=0;for(let B=0;B<Tr;++B){const X=B/T,U=Math.exp(-X*X/2);x.push(U),B===0?O+=U:B<y&&(O+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-r;const C=this._sizeLods[l],I=3*C*(l>D-Ss?l-D+Ss:0),H=4*(this._cubeSize-C);Nu(i,I,H,3*C,2*C),p.setRenderTarget(i),p.render(v,Bh)}}function tR(s){const t=[],i=[],r=[];let l=s;const u=s-Ss+1+b_.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-Ss?p=b_[f-s+Ss-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,T=3,y=2,x=1,O=new Float32Array(T*E*S),D=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let H=0;H<S;H++){const B=H%3*2/3-1,X=H>2?0:-1,U=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];O.set(U,T*E*H),D.set(_,y*E*H);const w=[H,H,H,H,H,H];C.set(w,x*E*H)}const I=new ca;I.setAttribute("position",new Di(O,T)),I.setAttribute("uv",new Di(D,y)),I.setAttribute("faceIndex",new Di(C,x)),t.push(I),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function C_(s,t,i){const r=new wr(s,t,i);return r.texture.mapping=Zu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function eR(s,t,i){const r=new Float32Array(Tr),l=new W(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function D_(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function U_(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function ep(){return`

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
	`}function nR(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===ed||p===nd,g=p===As||p===Rs;if(m||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new w_(s)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new w_(s)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function iR(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Es("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function aR(s,t,i,r){const l={},u=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const S=u.get(_);S&&(t.remove(S),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function m(v){const _=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let D=0,C=O.length;D<C;D+=3){const I=O[D+0],H=O[D+1],B=O[D+2];_.push(I,H,H,B,B,I)}}else if(E!==void 0){const O=E.array;T=E.version;for(let D=0,C=O.length/3-1;D<C;D+=3){const I=D+0,H=D+1,B=D+2;_.push(I,H,H,B,B,I)}}else return;const y=new(w0(_)?N0:L0)(_,1);y.version=T;const x=u.get(v);x&&t.remove(x),u.set(v,y)}function g(v){const _=u.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function rR(s,t,i){let r;function l(_){r=_}let u,f;function h(_){u=_.type,f=_.bytesPerElement}function p(_,S){s.drawElements(r,S,u,_*f),i.update(S,r,1)}function m(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,_*f,E),i.update(S,r,E))}function g(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];i.update(y,r,1)}function v(_,S,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)m(_[x]/f,S[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,_,0,T,0,E);let x=0;for(let O=0;O<E;O++)x+=S[O]*T[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function sR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function oR(s,t,i){const r=new WeakMap,l=new He;function u(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let w=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var S=w;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let I=h.attributes.position.count*C,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*H*4*v),X=new C0(B,I,H,v);X.type=ra,X.needsUpdate=!0;const U=C*4;for(let V=0;V<v;V++){const ot=x[V],st=O[V],mt=D[V],ut=I*H*4*V;for(let z=0;z<ot.count;z++){const K=z*U;E===!0&&(l.fromBufferAttribute(ot,z),B[ut+K+0]=l.x,B[ut+K+1]=l.y,B[ut+K+2]=l.z,B[ut+K+3]=0),T===!0&&(l.fromBufferAttribute(st,z),B[ut+K+4]=l.x,B[ut+K+5]=l.y,B[ut+K+6]=l.z,B[ut+K+7]=0),y===!0&&(l.fromBufferAttribute(mt,z),B[ut+K+8]=l.x,B[ut+K+9]=l.y,B[ut+K+10]=l.z,B[ut+K+11]=mt.itemSize===4?l.w:1)}}_={count:v,texture:X,size:new ee(I,H)},r.set(h,_),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:u}}function lR(s,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=t.get(p,g);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==m&&(_.update(),l.set(_,m))}return v}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const X0=new Gn,L_=new B0(1,1),W0=new C0,q0=new vT,Y0=new z0,N_=[],O_=[],P_=new Float32Array(16),z_=new Float32Array(9),B_=new Float32Array(4);function Os(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=N_[l];if(u===void 0&&(u=new Float32Array(l),N_[l]=u),t!==0){r.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(u,h)}return u}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Qu(s,t){let i=O_[t];i===void 0&&(i=new Int32Array(t),O_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function uR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function cR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function fR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function hR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function dR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;B_.set(r),s.uniformMatrix2fv(this.addr,!1,B_),hn(i,r)}}function pR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;z_.set(r),s.uniformMatrix3fv(this.addr,!1,z_),hn(i,r)}}function mR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;P_.set(r),s.uniformMatrix4fv(this.addr,!1,P_),hn(i,r)}}function gR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function vR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function _R(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function xR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function yR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function SR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function MR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function ER(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function TR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(L_.compareFunction=R0,u=L_):u=X0,i.setTexture2D(t||u,l)}function bR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||q0,l)}function AR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Y0,l)}function RR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||W0,l)}function wR(s){switch(s){case 5126:return uR;case 35664:return cR;case 35665:return fR;case 35666:return hR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return vR;case 35668:case 35672:return _R;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return SR;case 36295:return MR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return RR}}function CR(s,t){s.uniform1fv(this.addr,t)}function DR(s,t){const i=Os(t,this.size,2);s.uniform2fv(this.addr,i)}function UR(s,t){const i=Os(t,this.size,3);s.uniform3fv(this.addr,i)}function LR(s,t){const i=Os(t,this.size,4);s.uniform4fv(this.addr,i)}function NR(s,t){const i=Os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function OR(s,t){const i=Os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function PR(s,t){const i=Os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function zR(s,t){s.uniform1iv(this.addr,t)}function BR(s,t){s.uniform2iv(this.addr,t)}function IR(s,t){s.uniform3iv(this.addr,t)}function FR(s,t){s.uniform4iv(this.addr,t)}function HR(s,t){s.uniform1uiv(this.addr,t)}function GR(s,t){s.uniform2uiv(this.addr,t)}function VR(s,t){s.uniform3uiv(this.addr,t)}function kR(s,t){s.uniform4uiv(this.addr,t)}function XR(s,t,i){const r=this.cache,l=t.length,u=Qu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||X0,u[f])}function WR(s,t,i){const r=this.cache,l=t.length,u=Qu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||q0,u[f])}function qR(s,t,i){const r=this.cache,l=t.length,u=Qu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Y0,u[f])}function YR(s,t,i){const r=this.cache,l=t.length,u=Qu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||W0,u[f])}function jR(s){switch(s){case 5126:return CR;case 35664:return DR;case 35665:return UR;case 35666:return LR;case 35674:return NR;case 35675:return OR;case 35676:return PR;case 5124:case 35670:return zR;case 35667:case 35671:return BR;case 35668:case 35672:return IR;case 35669:case 35673:return FR;case 5125:return HR;case 36294:return GR;case 36295:return VR;case 36296:return kR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return WR;case 35680:case 36300:case 36308:case 36293:return qR;case 36289:case 36303:case 36311:case 36292:return YR}}class ZR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=wR(i.type)}}class KR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jR(i.type)}}class QR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function I_(s,t){s.seq.push(t),s.map[t.id]=t}function JR(s,t,i){const r=s.name,l=r.length;for(Vh.lastIndex=0;;){const u=Vh.exec(r),f=Vh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){I_(i,m===void 0?new ZR(h,s,t):new KR(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new QR(h),I_(i,v)),i=v}}}class Vu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);JR(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function F_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const $R=37297;let tw=0;function ew(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const H_=new le;function nw(s){Ae._getMatrix(H_,Ae.workingColorSpace,s);const t=`mat3( ${H_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(s)){case Xu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function G_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ew(s.getShaderSource(t),f)}else return l}function iw(s,t){const i=nw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function aw(s,t){let i;switch(t){case RE:i="Linear";break;case wE:i="Reinhard";break;case CE:i="Cineon";break;case DE:i="ACESFilmic";break;case LE:i="AgX";break;case NE:i="Neutral";break;case UE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new W;function rw(){Ae.getLuminanceCoefficients(Ou);const s=Ou.x.toFixed(4),t=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function ow(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function lw(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function Bo(s){return s!==""}function V_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(s){return s.replace(uw,fw)}const cw=new Map;function fw(s,t){let i=fe[t];if(i===void 0){const r=cw.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ud(i)}const hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(s){return s.replace(hw,dw)}function dw(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function W_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pw(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===m0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sE?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function mw(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case Zu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gw(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function vw(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case g0:t="ENVMAP_BLENDING_MULTIPLY";break;case bE:t="ENVMAP_BLENDING_MIX";break;case AE:t="ENVMAP_BLENDING_ADD";break}return t}function _w(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function xw(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=pw(i),m=mw(i),g=gw(i),v=vw(i),_=_w(i),S=sw(i),E=ow(u),T=l.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(y=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?fe.tonemapping_pars_fragment:"",i.toneMapping!==qa?aw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,iw("linearToOutputTexel",i.outputColorSpace),rw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),f=Ud(f),f=V_(f,i),f=k_(f,i),h=Ud(h),h=V_(h,i),h=k_(h,i),f=X_(f),h=X_(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=O+y+f,C=O+x+h,I=F_(l,l.VERTEX_SHADER,D),H=F_(l,l.FRAGMENT_SHADER,C);l.attachShader(T,I),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(V){if(s.debug.checkShaderErrors){const ot=l.getProgramInfoLog(T).trim(),st=l.getShaderInfoLog(I).trim(),mt=l.getShaderInfoLog(H).trim();let ut=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ut=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,I,H);else{const K=G_(l,I,"vertex"),j=G_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ot+`
`+K+`
`+j)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||mt==="")&&(z=!1);z&&(V.diagnostics={runnable:ut,programLog:ot,vertexShader:{log:st,prefix:y},fragmentShader:{log:mt,prefix:x}})}l.deleteShader(I),l.deleteShader(H),X=new Vu(l,T),U=lw(l,T)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,$R)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tw++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=H,this}let yw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Mw(t),i.set(t,r)),r}}class Mw{constructor(t){this.id=yw++,this.code=t,this.usedTimes=0}}function Ew(s,t,i,r,l,u,f){const h=new D0,p=new Sw,m=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return m.add(U),U===0?"uv":`uv${U}`}function y(U,w,V,ot,st){const mt=ot.fog,ut=st.geometry,z=U.isMeshStandardMaterial?ot.environment:null,K=(U.isMeshStandardMaterial?i:t).get(U.envMap||z),j=K&&K.mapping===Zu?K.image.height:null,Et=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const L=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,tt=L!==void 0?L.length:0;let xt=0;ut.morphAttributes.position!==void 0&&(xt=1),ut.morphAttributes.normal!==void 0&&(xt=2),ut.morphAttributes.color!==void 0&&(xt=3);let St,J,gt,Mt;if(Et){const Te=Ai[Et];St=Te.vertexShader,J=Te.fragmentShader}else St=U.vertexShader,J=U.fragmentShader,p.update(U),gt=p.getVertexShaderID(U),Mt=p.getFragmentShaderID(U);const wt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),ue=st.isInstancedMesh===!0,Jt=st.isBatchedMesh===!0,Oe=!!U.map,Ge=!!U.matcap,xe=!!K,F=!!U.aoMap,yn=!!U.lightMap,Ee=!!U.bumpMap,ge=!!U.normalMap,kt=!!U.displacementMap,ye=!!U.emissiveMap,Zt=!!U.metalnessMap,se=!!U.roughnessMap,$e=U.anisotropy>0,N=U.clearcoat>0,b=U.dispersion>0,et=U.iridescence>0,ft=U.sheen>0,pt=U.transmission>0,lt=$e&&!!U.anisotropyMap,zt=N&&!!U.clearcoatMap,Lt=N&&!!U.clearcoatNormalMap,Vt=N&&!!U.clearcoatRoughnessMap,Xt=et&&!!U.iridescenceMap,yt=et&&!!U.iridescenceThicknessMap,Bt=ft&&!!U.sheenColorMap,Yt=ft&&!!U.sheenRoughnessMap,jt=!!U.specularMap,Ct=!!U.specularColorMap,re=!!U.specularIntensityMap,k=pt&&!!U.transmissionMap,Nt=pt&&!!U.thicknessMap,Tt=!!U.gradientMap,It=!!U.alphaMap,Rt=U.alphaTest>0,_t=!!U.alphaHash,Ht=!!U.extensions;let ae=qa;U.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Ue={shaderID:Et,shaderType:U.type,shaderName:U.name,vertexShader:St,fragmentShader:J,defines:U.defines,customVertexShaderID:gt,customFragmentShaderID:Mt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Jt,batchingColor:Jt&&st._colorsTexture!==null,instancing:ue,instancingColor:ue&&st.instanceColor!==null,instancingMorph:ue&&st.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ws,alphaToCoverage:!!U.alphaToCoverage,map:Oe,matcap:Ge,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:yn,bumpMap:Ee,normalMap:ge,displacementMap:_&&kt,emissiveMap:ye,normalMapObjectSpace:ge&&U.normalMapType===BE,normalMapTangentSpace:ge&&U.normalMapType===A0,metalnessMap:Zt,roughnessMap:se,anisotropy:$e,anisotropyMap:lt,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,dispersion:b,iridescence:et,iridescenceMap:Xt,iridescenceThicknessMap:yt,sheen:ft,sheenColorMap:Bt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:re,transmission:pt,transmissionMap:k,thicknessMap:Nt,gradientMap:Tt,opaque:U.transparent===!1&&U.blending===Ms&&U.alphaToCoverage===!1,alphaMap:It,alphaTest:Rt,alphaHash:_t,combine:U.combine,mapUv:Oe&&T(U.map.channel),aoMapUv:F&&T(U.aoMap.channel),lightMapUv:yn&&T(U.lightMap.channel),bumpMapUv:Ee&&T(U.bumpMap.channel),normalMapUv:ge&&T(U.normalMap.channel),displacementMapUv:kt&&T(U.displacementMap.channel),emissiveMapUv:ye&&T(U.emissiveMap.channel),metalnessMapUv:Zt&&T(U.metalnessMap.channel),roughnessMapUv:se&&T(U.roughnessMap.channel),anisotropyMapUv:lt&&T(U.anisotropyMap.channel),clearcoatMapUv:zt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&T(U.sheenRoughnessMap.channel),specularMapUv:jt&&T(U.specularMap.channel),specularColorMapUv:Ct&&T(U.specularColorMap.channel),specularIntensityMapUv:re&&T(U.specularIntensityMap.channel),transmissionMapUv:k&&T(U.transmissionMap.channel),thicknessMapUv:Nt&&T(U.thicknessMap.channel),alphaMapUv:It&&T(U.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ge||$e),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(Oe||It),fog:!!mt,useFog:U.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Dt,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Oe&&U.map.isVideoTexture===!0&&Ae.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:ye&&U.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ri,flipSided:U.side===Hn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Ht&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&U.extensions.multiDraw===!0||Jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ue.vertexUv1s=m.has(1),Ue.vertexUv2s=m.has(2),Ue.vertexUv3s=m.has(3),m.clear(),Ue}function x(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)w.push(V),w.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(O(w,U),D(w,U),w.push(s.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function O(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function D(U,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const w=E[U.type];let V;if(w){const ot=Ai[w];V=UT.clone(ot.uniforms)}else V=U.uniforms;return V}function I(U,w){let V;for(let ot=0,st=g.length;ot<st;ot++){const mt=g[ot];if(mt.cacheKey===w){V=mt,++V.usedTimes;break}}return V===void 0&&(V=new xw(s,w,U,u),g.push(V)),V}function H(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function B(U){p.remove(U)}function X(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:I,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:X}}function Tw(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function bw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function q_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Y_(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(v,_,S,E,T,y){let x=s[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=T,x.group=y),t++,x}function h(v,_,S,E,T,y){const x=f(v,_,S,E,T,y);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(v,_,S,E,T,y){const x=f(v,_,S,E,T,y);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function m(v,_){i.length>1&&i.sort(v||bw),r.length>1&&r.sort(_||q_),l.length>1&&l.sort(_||q_)}function g(){for(let v=t,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function Aw(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new Y_,s.set(r,[f])):l>=u.length?(f=new Y_,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function Rw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new we};break;case"SpotLight":i={position:new W,direction:new W,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=i,i}}}function ww(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Cw=0;function Dw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Uw(s){const t=new Rw,i=ww(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new W);const l=new W,u=new je,f=new je;function h(m){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,T=0,y=0,x=0,O=0,D=0,C=0,I=0,H=0,B=0;m.sort(Dw);for(let U=0,w=m.length;U<w;U++){const V=m[U],ot=V.color,st=V.intensity,mt=V.distance,ut=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ot.r*st,v+=ot.g*st,_+=ot.b*st;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],st);B++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,j=i.get(V);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=ut,r.directionalShadowMatrix[S]=V.shadow.matrix,O++}r.directional[S]=z,S++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ot).multiplyScalar(st),z.distance=mt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[T]=z;const K=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,K.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[T]=K.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.spotShadow[T]=j,r.spotShadowMap[T]=ut,C++}T++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(ot).multiplyScalar(st),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=z,y++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const K=V.shadow,j=i.get(V);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=ut,r.pointShadowMatrix[E]=V.shadow.matrix,D++}r.point[E]=z,E++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(st),z.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[x]=z,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==O||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==I||X.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+I-H,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=O,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=I,X.numLightProbes=B,r.version=Cw++)}function p(m,g){let v=0,_=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let x=0,O=m.length;x<O;x++){const D=m[x];if(D.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(D.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(D.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:r}}function j_(s){const t=new Uw(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function Lw(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let h;return f===void 0?(h=new j_(s),t.set(l,[h])):u>=f.length?(h=new j_(s),f.push(h)):h=f[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const Nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pw(s,t,i){let r=new Qd;const l=new ee,u=new ee,f=new He,h=new nb({depthPacking:zE}),p=new ib,m={},g=i.maxTextureSize,v={[Ya]:Hn,[Hn]:Ya,[Ri]:Ri},_=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Nw,fragmentShader:Ow}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new ca;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new $n(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m0;let x=this.type;this.render=function(H,B,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const U=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ot=s.state;ot.setBlending(Wa),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=x!==aa&&this.type===aa,mt=x===aa&&this.type!==aa;for(let ut=0,z=H.length;ut<z;ut++){const K=H[ut],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Et=j.getFrameExtents();if(l.multiply(Et),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,j.mapSize.y=u.y)),j.map===null||st===!0||mt===!0){const tt=this.type!==aa?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new wr(l.x,l.y,tt),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const L=j.getViewportCount();for(let tt=0;tt<L;tt++){const xt=j.getViewport(tt);f.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),ot.viewport(f),j.updateMatrices(K,tt),r=j.getFrustum(),C(B,X,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&O(j,X),j.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(U,w,V)};function O(H,B){const X=t.update(T);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new wr(l.x,l.y)),_.uniforms.shadow_pass.value=H.map.texture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,X,_,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,X,S,T,null)}function D(H,B,X,U){let w=null;const V=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=X.isPointLight===!0?p:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ot=w.uuid,st=B.uuid;let mt=m[ot];mt===void 0&&(mt={},m[ot]=mt);let ut=mt[st];ut===void 0&&(ut=w.clone(),mt[st]=ut,B.addEventListener("dispose",I)),w=ut}if(w.visible=B.visible,w.wireframe=B.wireframe,U===aa?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:v[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ot=s.properties.get(w);ot.light=X}return w}function C(H,B,X,U,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===aa)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const st=t.update(H),mt=H.material;if(Array.isArray(mt)){const ut=st.groups;for(let z=0,K=ut.length;z<K;z++){const j=ut[z],Et=mt[j.materialIndex];if(Et&&Et.visible){const L=D(H,Et,U,w);H.onBeforeShadow(s,H,B,X,st,L,j),s.renderBufferDirect(X,null,st,L,H,j),H.onAfterShadow(s,H,B,X,st,L,j)}}}else if(mt.visible){const ut=D(H,mt,U,w);H.onBeforeShadow(s,H,B,X,st,ut,null),s.renderBufferDirect(X,null,st,ut,H,null),H.onAfterShadow(s,H,B,X,st,ut,null)}}const ot=H.children;for(let st=0,mt=ot.length;st<mt;st++)C(ot[st],B,X,U,w)}function I(H){H.target.removeEventListener("dispose",I);for(const X in m){const U=m[X],w=H.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const zw={[jh]:Zh,[Kh]:$h,[Qh]:td,[bs]:Jh,[Zh]:jh,[$h]:Kh,[td]:Qh,[Jh]:bs};function Bw(s,t){function i(){let k=!1;const Nt=new He;let Tt=null;const It=new He(0,0,0,0);return{setMask:function(Rt){Tt!==Rt&&!k&&(s.colorMask(Rt,Rt,Rt,Rt),Tt=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,_t,Ht,ae,Ue){Ue===!0&&(Rt*=ae,_t*=ae,Ht*=ae),Nt.set(Rt,_t,Ht,ae),It.equals(Nt)===!1&&(s.clearColor(Rt,_t,Ht,ae),It.copy(Nt))},reset:function(){k=!1,Tt=null,It.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,Tt=null,It=null,Rt=null;return{setReversed:function(_t){if(Nt!==_t){const Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const ae=Rt;Rt=null,this.setClear(ae)}},getReversed:function(){return Nt},setTest:function(_t){_t?wt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!k&&(s.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Nt&&(_t=zw[_t]),It!==_t){switch(_t){case jh:s.depthFunc(s.NEVER);break;case Zh:s.depthFunc(s.ALWAYS);break;case Kh:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Qh:s.depthFunc(s.EQUAL);break;case Jh:s.depthFunc(s.GEQUAL);break;case $h:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Rt!==_t&&(Nt&&(_t=1-_t),s.clearDepth(_t),Rt=_t)},reset:function(){k=!1,Tt=null,It=null,Rt=null,Nt=!1}}}function l(){let k=!1,Nt=null,Tt=null,It=null,Rt=null,_t=null,Ht=null,ae=null,Ue=null;return{setTest:function(Te){k||(Te?wt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Te){Nt!==Te&&!k&&(s.stencilMask(Te),Nt=Te)},setFunc:function(Te,Vn,dn){(Tt!==Te||It!==Vn||Rt!==dn)&&(s.stencilFunc(Te,Vn,dn),Tt=Te,It=Vn,Rt=dn)},setOp:function(Te,Vn,dn){(_t!==Te||Ht!==Vn||ae!==dn)&&(s.stencilOp(Te,Vn,dn),_t=Te,Ht=Vn,ae=dn)},setLocked:function(Te){k=Te},setClear:function(Te){Ue!==Te&&(s.clearStencil(Te),Ue=Te)},reset:function(){k=!1,Nt=null,Tt=null,It=null,Rt=null,_t=null,Ht=null,ae=null,Ue=null}}}const u=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,S=[],E=null,T=!1,y=null,x=null,O=null,D=null,C=null,I=null,H=null,B=new we(0,0,0),X=0,U=!1,w=null,V=null,ot=null,st=null,mt=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=K>=2);let Et=null,L={};const tt=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),St=new He().fromArray(tt),J=new He().fromArray(xt);function gt(k,Nt,Tt,It){const Rt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Tt;Ht++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Nt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return _t}const Mt={};Mt[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),wt(s.DEPTH_TEST),f.setFunc(bs),Ee(!1),ge(jv),wt(s.CULL_FACE),F(Wa);function wt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Dt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function ue(k,Nt){return v[k]!==Nt?(s.bindFramebuffer(k,Nt),v[k]=Nt,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Nt),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Jt(k,Nt){let Tt=S,It=!1;if(k){Tt=_.get(Nt),Tt===void 0&&(Tt=[],_.set(Nt,Tt));const Rt=k.textures;if(Tt.length!==Rt.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Ht=Rt.length;_t<Ht;_t++)Tt[_t]=s.COLOR_ATTACHMENT0+_t;Tt.length=Rt.length,It=!0}}else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,It=!0);It&&s.drawBuffers(Tt)}function Oe(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Ge={[Er]:s.FUNC_ADD,[lE]:s.FUNC_SUBTRACT,[uE]:s.FUNC_REVERSE_SUBTRACT};Ge[cE]=s.MIN,Ge[fE]=s.MAX;const xe={[hE]:s.ZERO,[dE]:s.ONE,[pE]:s.SRC_COLOR,[qh]:s.SRC_ALPHA,[yE]:s.SRC_ALPHA_SATURATE,[_E]:s.DST_COLOR,[gE]:s.DST_ALPHA,[mE]:s.ONE_MINUS_SRC_COLOR,[Yh]:s.ONE_MINUS_SRC_ALPHA,[xE]:s.ONE_MINUS_DST_COLOR,[vE]:s.ONE_MINUS_DST_ALPHA,[SE]:s.CONSTANT_COLOR,[ME]:s.ONE_MINUS_CONSTANT_COLOR,[EE]:s.CONSTANT_ALPHA,[TE]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,Nt,Tt,It,Rt,_t,Ht,ae,Ue,Te){if(k===Wa){T===!0&&(Dt(s.BLEND),T=!1);return}if(T===!1&&(wt(s.BLEND),T=!0),k!==oE){if(k!==y||Te!==U){if((x!==Er||C!==Er)&&(s.blendEquation(s.FUNC_ADD),x=Er,C=Er),Te)switch(k){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zv:s.blendFunc(s.ONE,s.ONE);break;case Kv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zv:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,D=null,I=null,H=null,B.set(0,0,0),X=0,y=k,U=Te}return}Rt=Rt||Nt,_t=_t||Tt,Ht=Ht||It,(Nt!==x||Rt!==C)&&(s.blendEquationSeparate(Ge[Nt],Ge[Rt]),x=Nt,C=Rt),(Tt!==O||It!==D||_t!==I||Ht!==H)&&(s.blendFuncSeparate(xe[Tt],xe[It],xe[_t],xe[Ht]),O=Tt,D=It,I=_t,H=Ht),(ae.equals(B)===!1||Ue!==X)&&(s.blendColor(ae.r,ae.g,ae.b,Ue),B.copy(ae),X=Ue),y=k,U=!1}function yn(k,Nt){k.side===Ri?Dt(s.CULL_FACE):wt(s.CULL_FACE);let Tt=k.side===Hn;Nt&&(Tt=!Tt),Ee(Tt),k.blending===Ms&&k.transparent===!1?F(Wa):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const It=k.stencilWrite;h.setTest(It),It&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function ge(k){k!==aE?(wt(s.CULL_FACE),k!==V&&(k===jv?s.cullFace(s.BACK):k===rE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),V=k}function kt(k){k!==ot&&(z&&s.lineWidth(k),ot=k)}function ye(k,Nt,Tt){k?(wt(s.POLYGON_OFFSET_FILL),(st!==Nt||mt!==Tt)&&(s.polygonOffset(Nt,Tt),st=Nt,mt=Tt)):Dt(s.POLYGON_OFFSET_FILL)}function Zt(k){k?wt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function se(k){k===void 0&&(k=s.TEXTURE0+ut-1),Et!==k&&(s.activeTexture(k),Et=k)}function $e(k,Nt,Tt){Tt===void 0&&(Et===null?Tt=s.TEXTURE0+ut-1:Tt=Et);let It=L[Tt];It===void 0&&(It={type:void 0,texture:void 0},L[Tt]=It),(It.type!==k||It.texture!==Nt)&&(Et!==Tt&&(s.activeTexture(Tt),Et=Tt),s.bindTexture(k,Nt||Mt[k]),It.type=k,It.texture=Nt)}function N(){const k=L[Et];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(k){St.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Yt(k){J.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function jt(k,Nt){let Tt=m.get(Nt);Tt===void 0&&(Tt=new WeakMap,m.set(Nt,Tt));let It=Tt.get(k);It===void 0&&(It=s.getUniformBlockIndex(Nt,k.name),Tt.set(k,It))}function Ct(k,Nt){const It=m.get(Nt).get(k);p.get(Nt)!==It&&(s.uniformBlockBinding(Nt,It,k.__bindingPointIndex),p.set(Nt,It))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,L={},v={},_=new WeakMap,S=[],E=null,T=!1,y=null,x=null,O=null,D=null,C=null,I=null,H=null,B=new we(0,0,0),X=0,U=!1,w=null,V=null,ot=null,st=null,mt=null,St.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:wt,disable:Dt,bindFramebuffer:ue,drawBuffers:Jt,useProgram:Oe,setBlending:F,setMaterial:yn,setFlipSided:Ee,setCullFace:ge,setLineWidth:kt,setPolygonOffset:ye,setScissorTest:Zt,activeTexture:se,bindTexture:$e,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Xt,texImage3D:yt,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Lt,texStorage3D:Vt,texSubImage2D:ft,texSubImage3D:pt,compressedTexSubImage2D:lt,compressedTexSubImage3D:zt,scissor:Bt,viewport:Yt,reset:re}}function Iw(s,t,i,r,l,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ee,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):qu("canvas")}function T(N,b,et){let ft=1;const pt=$e(N);if((pt.width>et||pt.height>et)&&(ft=et/Math.max(pt.width,pt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ft*pt.width),zt=Math.floor(ft*pt.height);v===void 0&&(v=E(lt,zt));const Lt=b?E(lt,zt):v;return Lt.width=lt,Lt.height=zt,Lt.getContext("2d").drawImage(N,0,0,lt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+lt+"x"+zt+")."),Lt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,b,et,ft,pt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=b;if(b===s.RED&&(et===s.FLOAT&&(lt=s.R32F),et===s.HALF_FLOAT&&(lt=s.R16F),et===s.UNSIGNED_BYTE&&(lt=s.R8)),b===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.R8UI),et===s.UNSIGNED_SHORT&&(lt=s.R16UI),et===s.UNSIGNED_INT&&(lt=s.R32UI),et===s.BYTE&&(lt=s.R8I),et===s.SHORT&&(lt=s.R16I),et===s.INT&&(lt=s.R32I)),b===s.RG&&(et===s.FLOAT&&(lt=s.RG32F),et===s.HALF_FLOAT&&(lt=s.RG16F),et===s.UNSIGNED_BYTE&&(lt=s.RG8)),b===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.RG8UI),et===s.UNSIGNED_SHORT&&(lt=s.RG16UI),et===s.UNSIGNED_INT&&(lt=s.RG32UI),et===s.BYTE&&(lt=s.RG8I),et===s.SHORT&&(lt=s.RG16I),et===s.INT&&(lt=s.RG32I)),b===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),et===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),et===s.UNSIGNED_INT&&(lt=s.RGB32UI),et===s.BYTE&&(lt=s.RGB8I),et===s.SHORT&&(lt=s.RGB16I),et===s.INT&&(lt=s.RGB32I)),b===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),et===s.UNSIGNED_INT&&(lt=s.RGBA32UI),et===s.BYTE&&(lt=s.RGBA8I),et===s.SHORT&&(lt=s.RGBA16I),et===s.INT&&(lt=s.RGBA32I)),b===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),b===s.RGBA){const zt=pt?Xu:Ae.getTransfer(ft);et===s.FLOAT&&(lt=s.RGBA32F),et===s.HALF_FLOAT&&(lt=s.RGBA16F),et===s.UNSIGNED_BYTE&&(lt=zt===Fe?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function C(N,b){let et;return N?b===null||b===Rr||b===Xo?et=s.DEPTH24_STENCIL8:b===ra?et=s.DEPTH32F_STENCIL8:b===ko&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rr||b===Xo?et=s.DEPTH_COMPONENT24:b===ra?et=s.DEPTH_COMPONENT32F:b===ko&&(et=s.DEPTH_COMPONENT16),et}function I(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==_i&&N.minFilter!==wi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function H(N){const b=N.target;b.removeEventListener("dispose",H),X(b),b.isVideoTexture&&g.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),w(b)}function X(N){const b=r.get(N);if(b.__webglInit===void 0)return;const et=N.source,ft=_.get(et);if(ft){const pt=ft[b.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&U(N),Object.keys(ft).length===0&&_.delete(et)}r.remove(N)}function U(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const et=N.source,ft=_.get(et);delete ft[b.__cacheKey],f.memory.textures--}function w(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let pt=0;pt<b.__webglFramebuffer[ft].length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[ft][pt]);else s.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)s.deleteFramebuffer(b.__webglFramebuffer[ft]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=N.textures;for(let ft=0,pt=et.length;ft<pt;ft++){const lt=r.get(et[ft]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),f.memory.textures--),r.remove(et[ft])}r.remove(N)}let V=0;function ot(){V=0}function st(){const N=V;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function mt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ut(N,b){const et=r.get(N);if(N.isVideoTexture&&Zt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,N,b);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+b)}function z(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+b)}function K(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,b);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+b)}function j(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){wt(et,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+b)}const Et={[id]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[ad]:s.MIRRORED_REPEAT},L={[_i]:s.NEAREST,[OE]:s.NEAREST_MIPMAP_NEAREST,[du]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[uh]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},tt={[IE]:s.NEVER,[XE]:s.ALWAYS,[FE]:s.LESS,[R0]:s.LEQUAL,[HE]:s.EQUAL,[kE]:s.GEQUAL,[GE]:s.GREATER,[VE]:s.NOTEQUAL};function xt(N,b){if(b.type===ra&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===wi||b.magFilter===uh||b.magFilter===du||b.magFilter===Ar||b.minFilter===wi||b.minFilter===uh||b.minFilter===du||b.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Et[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Et[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Et[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==du&&b.minFilter!==Ar||b.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function St(N,b){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",H));const ft=b.source;let pt=_.get(ft);pt===void 0&&(pt={},_.set(ft,pt));const lt=mt(b);if(lt!==N.__cacheKey){pt[lt]===void 0&&(pt[lt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,et=!0),pt[lt].usedTimes++;const zt=pt[N.__cacheKey];zt!==void 0&&(pt[N.__cacheKey].usedTimes--,zt.usedTimes===0&&U(b)),N.__cacheKey=lt,N.__webglTexture=pt[lt].texture}return et}function J(N,b,et){return Math.floor(Math.floor(N/et)/b)}function gt(N,b,et,ft){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,et,ft,b.data);else{lt.sort((yt,Bt)=>yt.start-Bt.start);let zt=0;for(let yt=1;yt<lt.length;yt++){const Bt=lt[zt],Yt=lt[yt],jt=Bt.start+Bt.count,Ct=J(Yt.start,b.width,4),re=J(Bt.start,b.width,4);Yt.start<=jt+1&&Ct===re&&J(Yt.start+Yt.count-1,b.width,4)===Ct?Bt.count=Math.max(Bt.count,Yt.start+Yt.count-Bt.start):(++zt,lt[zt]=Yt)}lt.length=zt+1;const Lt=s.getParameter(s.UNPACK_ROW_LENGTH),Vt=s.getParameter(s.UNPACK_SKIP_PIXELS),Xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let yt=0,Bt=lt.length;yt<Bt;yt++){const Yt=lt[yt],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),re=jt%b.width,k=Math.floor(jt/b.width),Nt=Ct,Tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,re,k,Nt,Tt,et,ft,b.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xt)}}function Mt(N,b,et){let ft=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=s.TEXTURE_3D);const pt=St(N,b),lt=b.source;i.bindTexture(ft,N.__webglTexture,s.TEXTURE0+et);const zt=r.get(lt);if(lt.version!==zt.__version||pt===!0){i.activeTexture(s.TEXTURE0+et);const Lt=Ae.getPrimaries(Ae.workingColorSpace),Vt=b.colorSpace===Xa?null:Ae.getPrimaries(b.colorSpace),Xt=b.colorSpace===Xa||Lt===Vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let yt=T(b.image,!1,l.maxTextureSize);yt=se(b,yt);const Bt=u.convert(b.format,b.colorSpace),Yt=u.convert(b.type);let jt=D(b.internalFormat,Bt,Yt,b.colorSpace,b.isVideoTexture);xt(ft,b);let Ct;const re=b.mipmaps,k=b.isVideoTexture!==!0,Nt=zt.__version===void 0||pt===!0,Tt=lt.dataReady,It=I(b,yt);if(b.isDepthTexture)jt=C(b.format===qo,b.type),Nt&&(k?i.texStorage2D(s.TEXTURE_2D,1,jt,yt.width,yt.height):i.texImage2D(s.TEXTURE_2D,0,jt,yt.width,yt.height,0,Bt,Yt,null));else if(b.isDataTexture)if(re.length>0){k&&Nt&&i.texStorage2D(s.TEXTURE_2D,It,jt,re[0].width,re[0].height);for(let Rt=0,_t=re.length;Rt<_t;Rt++)Ct=re[Rt],k?Tt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Bt,Yt,Ct.data);b.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(s.TEXTURE_2D,It,jt,yt.width,yt.height),Tt&&gt(b,yt,Bt,Yt)):i.texImage2D(s.TEXTURE_2D,0,jt,yt.width,yt.height,0,Bt,Yt,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,jt,re[0].width,re[0].height,yt.depth);for(let Rt=0,_t=re.length;Rt<_t;Rt++)if(Ct=re[Rt],b.format!==vi)if(Bt!==null)if(k){if(Tt)if(b.layerUpdates.size>0){const Ht=T_(Ct.width,Ct.height,b.format,b.type);for(const ae of b.layerUpdates){const Ue=Ct.data.subarray(ae*Ht/Ct.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,ae,Ct.width,Ct.height,1,Bt,Ue)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,yt.depth,Bt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,yt.depth,Bt,Yt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,yt.depth,0,Bt,Yt,Ct.data)}else{k&&Nt&&i.texStorage2D(s.TEXTURE_2D,It,jt,re[0].width,re[0].height);for(let Rt=0,_t=re.length;Rt<_t;Rt++)Ct=re[Rt],b.format!==vi?Bt!==null?k?Tt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Bt,Yt,Ct.data)}else if(b.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,jt,yt.width,yt.height,yt.depth),Tt)if(b.layerUpdates.size>0){const Rt=T_(yt.width,yt.height,b.format,b.type);for(const _t of b.layerUpdates){const Ht=yt.data.subarray(_t*Rt/yt.data.BYTES_PER_ELEMENT,(_t+1)*Rt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Bt,Yt,Ht)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Bt,Yt,yt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,yt.width,yt.height,yt.depth,0,Bt,Yt,yt.data);else if(b.isData3DTexture)k?(Nt&&i.texStorage3D(s.TEXTURE_3D,It,jt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Bt,Yt,yt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,yt.width,yt.height,yt.depth,0,Bt,Yt,yt.data);else if(b.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(s.TEXTURE_2D,It,jt,yt.width,yt.height);else{let Rt=yt.width,_t=yt.height;for(let Ht=0;Ht<It;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,jt,Rt,_t,0,Bt,Yt,null),Rt>>=1,_t>>=1}}else if(re.length>0){if(k&&Nt){const Rt=$e(re[0]);i.texStorage2D(s.TEXTURE_2D,It,jt,Rt.width,Rt.height)}for(let Rt=0,_t=re.length;Rt<_t;Rt++)Ct=re[Rt],k?Tt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Bt,Yt,Ct):i.texImage2D(s.TEXTURE_2D,Rt,jt,Bt,Yt,Ct);b.generateMipmaps=!1}else if(k){if(Nt){const Rt=$e(yt);i.texStorage2D(s.TEXTURE_2D,It,jt,Rt.width,Rt.height)}Tt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,Yt,yt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Bt,Yt,yt);y(b)&&x(ft),zt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function wt(N,b,et){if(b.image.length!==6)return;const ft=St(N,b),pt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+et);const lt=r.get(pt);if(pt.version!==lt.__version||ft===!0){i.activeTexture(s.TEXTURE0+et);const zt=Ae.getPrimaries(Ae.workingColorSpace),Lt=b.colorSpace===Xa?null:Ae.getPrimaries(b.colorSpace),Vt=b.colorSpace===Xa||zt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!Xt&&!yt?Bt[_t]=T(b.image[_t],!0,l.maxCubemapSize):Bt[_t]=yt?b.image[_t].image:b.image[_t],Bt[_t]=se(b,Bt[_t]);const Yt=Bt[0],jt=u.convert(b.format,b.colorSpace),Ct=u.convert(b.type),re=D(b.internalFormat,jt,Ct,b.colorSpace),k=b.isVideoTexture!==!0,Nt=lt.__version===void 0||ft===!0,Tt=pt.dataReady;let It=I(b,Yt);xt(s.TEXTURE_CUBE_MAP,b);let Rt;if(Xt){k&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,re,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){Rt=Bt[_t].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){const ae=Rt[Ht];b.format!==vi?jt!==null?k?Tt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ae.width,ae.height,jt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ae.width,ae.height,jt,Ct,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,re,ae.width,ae.height,0,jt,Ct,ae.data)}}}else{if(Rt=b.mipmaps,k&&Nt){Rt.length>0&&It++;const _t=$e(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,jt,Ct,Bt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Bt[_t].width,Bt[_t].height,0,jt,Ct,Bt[_t].data);for(let Ht=0;Ht<Rt.length;Ht++){const Ue=Rt[Ht].image[_t].image;k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Ue.width,Ue.height,jt,Ct,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,re,Ue.width,Ue.height,0,jt,Ct,Ue.data)}}else{k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,jt,Ct,Bt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,jt,Ct,Bt[_t]);for(let Ht=0;Ht<Rt.length;Ht++){const ae=Rt[Ht];k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,jt,Ct,ae.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,re,jt,Ct,ae.image[_t])}}}y(b)&&x(s.TEXTURE_CUBE_MAP),lt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Dt(N,b,et,ft,pt,lt){const zt=u.convert(et.format,et.colorSpace),Lt=u.convert(et.type),Vt=D(et.internalFormat,zt,Lt,et.colorSpace),Xt=r.get(b),yt=r.get(et);if(yt.__renderTarget=b,!Xt.__hasExternalTextures){const Bt=Math.max(1,b.width>>lt),Yt=Math.max(1,b.height>>lt);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?i.texImage3D(pt,lt,Vt,Bt,Yt,b.depth,0,zt,Lt,null):i.texImage2D(pt,lt,Vt,Bt,Yt,0,zt,Lt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ye(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,pt,yt.__webglTexture,0,kt(b)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,pt,yt.__webglTexture,lt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(N,b,et){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const ft=b.depthTexture,pt=ft&&ft.isDepthTexture?ft.type:null,lt=C(b.stencilBuffer,pt),zt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=kt(b);ye(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,lt,b.width,b.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,lt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,lt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,N)}else{const ft=b.textures;for(let pt=0;pt<ft.length;pt++){const lt=ft[pt],zt=u.convert(lt.format,lt.colorSpace),Lt=u.convert(lt.type),Vt=D(lt.internalFormat,zt,Lt,lt.colorSpace),Xt=kt(b);et&&ye(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Vt,b.width,b.height):ye(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Vt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Vt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Jt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const pt=ft.__webglTexture,lt=kt(b);if(b.depthTexture.format===Wo)ye(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(b.depthTexture.format===qo)ye(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Oe(N){const b=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const pt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",pt)};ft.addEventListener("dispose",pt),b.__depthDisposeCallback=pt}b.__boundDepthTexture=ft}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Jt(b.__webglFramebuffer[0],N):Jt(b.__webglFramebuffer,N)}else if(et){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=s.createRenderbuffer(),ue(b.__webglDepthbuffer[ft],N,!1);else{const pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,lt)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ue(b.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,lt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(N,b,et){const ft=r.get(N);b!==void 0&&Dt(ft.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Oe(N)}function xe(N){const b=N.texture,et=r.get(N),ft=r.get(b);N.addEventListener("dispose",B);const pt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,zt=pt.length>1;if(zt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=b.version,f.memory.textures++),lt){et.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Lt]=[];for(let Vt=0;Vt<b.mipmaps.length;Vt++)et.__webglFramebuffer[Lt][Vt]=s.createFramebuffer()}else et.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)et.__webglFramebuffer[Lt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(zt)for(let Lt=0,Vt=pt.length;Lt<Vt;Lt++){const Xt=r.get(pt[Lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&ye(N)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Lt=0;Lt<pt.length;Lt++){const Vt=pt[Lt];et.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt]);const Xt=u.convert(Vt.format,Vt.colorSpace),yt=u.convert(Vt.type),Bt=D(Vt.internalFormat,Xt,yt,Vt.colorSpace,N.isXRRenderTarget===!0),Yt=kt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Bt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),xt(s.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Vt=0;Vt<b.mipmaps.length;Vt++)Dt(et.__webglFramebuffer[Lt][Vt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Vt);else Dt(et.__webglFramebuffer[Lt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Lt=0,Vt=pt.length;Lt<Vt;Lt++){const Xt=pt[Lt],yt=r.get(Xt);i.bindTexture(s.TEXTURE_2D,yt.__webglTexture),xt(s.TEXTURE_2D,Xt),Dt(et.__webglFramebuffer,N,Xt,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,0),y(Xt)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,ft.__webglTexture),xt(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Vt=0;Vt<b.mipmaps.length;Vt++)Dt(et.__webglFramebuffer[Vt],N,b,s.COLOR_ATTACHMENT0,Lt,Vt);else Dt(et.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Lt,0);y(b)&&x(Lt),i.unbindTexture()}N.depthBuffer&&Oe(N)}function F(N){const b=N.textures;for(let et=0,ft=b.length;et<ft;et++){const pt=b[et];if(y(pt)){const lt=O(N),zt=r.get(pt).__webglTexture;i.bindTexture(lt,zt),x(lt),i.unbindTexture()}}}const yn=[],Ee=[];function ge(N){if(N.samples>0){if(ye(N)===!1){const b=N.textures,et=N.width,ft=N.height;let pt=s.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=r.get(N),Lt=b.length>1;if(Lt)for(let Xt=0;Xt<b.length;Xt++)i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Vt=N.texture.mipmaps;Vt&&Vt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Xt=0;Xt<b.length;Xt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Xt]);const yt=r.get(b[Xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,yt,0)}s.blitFramebuffer(0,0,et,ft,0,0,et,ft,pt,s.NEAREST),p===!0&&(yn.length=0,Ee.length=0,yn.push(s.COLOR_ATTACHMENT0+Xt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(yn.push(lt),Ee.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let Xt=0;Xt<b.length;Xt++){i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Xt]);const yt=r.get(b[Xt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,yt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function kt(N){return Math.min(l.maxSamples,N.samples)}function ye(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Zt(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function se(N,b){const et=N.colorSpace,ft=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==ws&&et!==Xa&&(Ae.getTransfer(et)===Fe?(ft!==vi||pt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=ut,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=Ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ye}function Fw(s,t){function i(r,l=Xa){let u;const f=Ae.getTransfer(l);if(r===Li)return s.UNSIGNED_BYTE;if(r===Vd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===y0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_0)return s.BYTE;if(r===x0)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===Gd)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===ra)return s.FLOAT;if(r===Qo)return s.HALF_FLOAT;if(r===S0)return s.ALPHA;if(r===M0)return s.RGB;if(r===vi)return s.RGBA;if(r===Wo)return s.DEPTH_COMPONENT;if(r===qo)return s.DEPTH_STENCIL;if(r===E0)return s.RED;if(r===Xd)return s.RED_INTEGER;if(r===T0)return s.RG;if(r===Wd)return s.RG_INTEGER;if(r===qd)return s.RGBA_INTEGER;if(r===Bu||r===Iu||r===Fu||r===Hu)if(f===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rd||r===sd||r===od||r===ld)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===od)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ud||r===cd||r===fd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ud||r===cd)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===fd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hd||r===dd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===Td||r===bd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===hd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Md)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ed)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gu||r===Ad||r===Rd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Gu)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===b0||r===wd||r===Cd||r===Dd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Gu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
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

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Gn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ja({vertexShader:Hw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new Ku(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kw extends Ls{constructor(t,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",p=1,m=null,g=null,v=null,_=null,S=null,E=null;const T=new Vw,y=i.getContextAttributes();let x=null,O=null;const D=[],C=[],I=new ee;let H=null;const B=new Jn;B.viewport=new He;const X=new Jn;X.viewport=new He;const U=[B,X],w=new ub;let V=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=D[J];return gt===void 0&&(gt=new Dh,D[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=D[J];return gt===void 0&&(gt=new Dh,D[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=D[J];return gt===void 0&&(gt=new Dh,D[J]=gt),gt.getHandSpace()};function st(J){const gt=C.indexOf(J.inputSource);if(gt===-1)return;const Mt=D[gt];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,m||f),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function mt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",ut);for(let J=0;J<D.length;J++){const gt=C[J];gt!==null&&(C[J]=null,D[J].disconnect(gt))}V=null,ot=null,T.reset(),t.setRenderTarget(x),S=null,_=null,v=null,l=null,O=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,wt=null,Dt=null;y.depth&&(Dt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?qo:Wo,wt=y.stencil?Xo:Rr);const ue={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:u};v=new XRWebGLBinding(l,i),_=v.createProjectionLayer(ue),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new wr(_.textureWidth,_.textureHeight,{format:vi,type:Li,depthTexture:new B0(_.textureWidth,_.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new wr(S.framebufferWidth,S.framebufferHeight,{format:vi,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ut(J){for(let gt=0;gt<J.removed.length;gt++){const Mt=J.removed[gt],wt=C.indexOf(Mt);wt>=0&&(C[wt]=null,D[wt].disconnect(Mt))}for(let gt=0;gt<J.added.length;gt++){const Mt=J.added[gt];let wt=C.indexOf(Mt);if(wt===-1){for(let ue=0;ue<D.length;ue++)if(ue>=C.length){C.push(Mt),wt=ue;break}else if(C[ue]===null){C[ue]=Mt,wt=ue;break}if(wt===-1)break}const Dt=D[wt];Dt&&Dt.connect(Mt)}}const z=new W,K=new W;function j(J,gt,Mt){z.setFromMatrixPosition(gt.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const wt=z.distanceTo(K),Dt=gt.projectionMatrix.elements,ue=Mt.projectionMatrix.elements,Jt=Dt[14]/(Dt[10]-1),Oe=Dt[14]/(Dt[10]+1),Ge=(Dt[9]+1)/Dt[5],xe=(Dt[9]-1)/Dt[5],F=(Dt[8]-1)/Dt[0],yn=(ue[8]+1)/ue[0],Ee=Jt*F,ge=Jt*yn,kt=wt/(-F+yn),ye=kt*-F;if(gt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ye),J.translateZ(kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Zt=Jt+kt,se=Oe+kt,$e=Ee-ye,N=ge+(wt-ye),b=Ge*Oe/se*Zt,et=xe*Oe/se*Zt;J.projectionMatrix.makePerspective($e,N,b,et,Zt,se),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let gt=J.near,Mt=J.far;T.texture!==null&&(T.depthNear>0&&(gt=T.depthNear),T.depthFar>0&&(Mt=T.depthFar)),w.near=X.near=B.near=gt,w.far=X.far=B.far=Mt,(V!==w.near||ot!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,ot=w.far),B.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,w.layers.mask=B.layers.mask|X.layers.mask;const wt=J.parent,Dt=w.cameras;Et(w,wt);for(let ue=0;ue<Dt.length;ue++)Et(Dt[ue],wt);Dt.length===2?j(w,B,X):w.projectionMatrix.copy(B.projectionMatrix),L(J,w,wt)};function L(J,gt,Mt){Mt===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Yo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(J){p=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let tt=null;function xt(J,gt){if(g=gt.getViewerPose(m||f),E=gt,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let wt=!1;Mt.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let Jt=0;Jt<Mt.length;Jt++){const Oe=Mt[Jt];let Ge=null;if(S!==null)Ge=S.getViewport(Oe);else{const F=v.getViewSubImage(_,Oe);Ge=F.viewport,Jt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let xe=U[Jt];xe===void 0&&(xe=new Jn,xe.layers.enable(Jt),xe.viewport=new He,U[Jt]=xe),xe.matrix.fromArray(Oe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Oe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Jt===0&&(w.matrix.copy(xe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(xe)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Jt=v.getDepthInformation(Mt[0]);Jt&&Jt.isValid&&Jt.texture&&T.init(t,Jt,l.renderState)}}for(let Mt=0;Mt<D.length;Mt++){const wt=C[Mt],Dt=D[Mt];wt!==null&&Dt!==void 0&&Dt.update(wt,gt,m||f)}tt&&tt(J,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),E=null}const St=new k0;St.setAnimationLoop(xt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const yr=new Ni,Xw=new je;function Ww(s,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,O0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,O,D,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),v(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x)):x.isMeshStandardMaterial?(u(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(u(y,x),E(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),T(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,O,D):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Hn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Hn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=t.get(x),D=O.envMap,C=O.envMapRotation;D&&(y.envMap.value=D,yr.copy(C),yr.x*=-1,yr.y*=-1,yr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),y.envMapRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(yr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,O,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const O=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function qw(s,t,i,r){let l={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,D){const C=D.program;r.uniformBlockBinding(O,C)}function m(O,D){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",y));const I=D.program;r.updateUBOMapping(O,I);const H=t.render.frame;u[O.id]!==H&&(_(O),u[O.id]=H)}function g(O){const D=v();O.__bindingPointIndex=D;const C=s.createBuffer(),I=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,I,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function v(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const D=l[O.id],C=O.uniforms,I=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,B=C.length;H<B;H++){const X=Array.isArray(C[H])?C[H]:[C[H]];for(let U=0,w=X.length;U<w;U++){const V=X[U];if(S(V,H,U,I)===!0){const ot=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let mt=0;for(let ut=0;ut<st.length;ut++){const z=st[ut],K=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,ot+mt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,mt),mt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ot,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,D,C,I){const H=O.value,B=D+"_"+C;if(I[B]===void 0)return typeof H=="number"||typeof H=="boolean"?I[B]=H:I[B]=H.clone(),!0;{const X=I[B];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return I[B]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function E(O){const D=O.uniforms;let C=0;const I=16;for(let B=0,X=D.length;B<X;B++){const U=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,V=U.length;w<V;w++){const ot=U[w],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let mt=0,ut=st.length;mt<ut;mt++){const z=st[mt],K=T(z),j=C%I,Et=j%K.boundary,L=j+Et;C+=Et,L!==0&&I-L<K.storage&&(C+=I-L),ot.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=C,C+=K.storage}}}const H=C%I;return H>0&&(C+=I-H),O.__size=C,O.__cache={},this}function T(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function y(O){const D=O.target;D.removeEventListener("dispose",y);const C=f.indexOf(D.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function x(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},u={}}return{bind:p,update:m,dispose:x}}class Yw{constructor(t={}){const{canvas:i=lT(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const O=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=li;let H=0,B=0,X=null,U=-1,w=null;const V=new He,ot=new He;let st=null;const mt=new we(0);let ut=0,z=i.width,K=i.height,j=1,Et=null,L=null;const tt=new He(0,0,z,K),xt=new He(0,0,z,K);let St=!1;const J=new Qd;let gt=!1,Mt=!1;const wt=new je,Dt=new je,ue=new W,Jt=new He,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function xe(){return X===null?j:1}let F=r;function yn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hd}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",_t,!1),F===null){const Y="webgl2";if(F=yn(Y,R),F===null)throw yn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,ge,kt,ye,Zt,se,$e,N,b,et,ft,pt,lt,zt,Lt,Vt,Xt,yt,Bt,Yt,jt,Ct,re,k;function Nt(){Ee=new iR(F),Ee.init(),Ct=new Fw(F,Ee),ge=new K1(F,Ee,t,Ct),kt=new Bw(F,Ee),ge.reverseDepthBuffer&&_&&kt.buffers.depth.setReversed(!0),ye=new sR(F),Zt=new Tw,se=new Iw(F,Ee,kt,Zt,ge,Ct,ye),$e=new J1(C),N=new nR(C),b=new hb(F),re=new j1(F,b),et=new aR(F,b,ye,re),ft=new lR(F,et,b,ye),Bt=new oR(F,ge,se),Vt=new Q1(Zt),pt=new Ew(C,$e,N,Ee,ge,re,Vt),lt=new Ww(C,Zt),zt=new Aw,Lt=new Lw(Ee),yt=new Y1(C,$e,N,kt,ft,S,p),Xt=new Pw(C,ft,ge),k=new qw(F,ye,ge,kt),Yt=new Z1(F,Ee,ye),jt=new rR(F,Ee,ye),ye.programs=pt.programs,C.capabilities=ge,C.extensions=Ee,C.properties=Zt,C.renderLists=zt,C.shadowMap=Xt,C.state=kt,C.info=ye}Nt();const Tt=new kw(C,F);this.xr=Tt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,Y,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=Y,i.width=Math.floor(R*j),i.height=Math.floor(Y*j),at===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*j,K*j).floor()},this.setDrawingBufferSize=function(R,Y,at){z=R,K=Y,j=at,i.width=Math.floor(R*at),i.height=Math.floor(Y*at),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,Y,at,rt){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,Y,at,rt),kt.viewport(V.copy(tt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,Y,at,rt){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,Y,at,rt),kt.scissor(ot.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){kt.setScissorTest(St=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,at=!0){let rt=0;if(R){let Z=!1;if(X!==null){const bt=X.texture.format;Z=bt===qd||bt===Wd||bt===Xd}if(Z){const bt=X.texture.type,Ut=bt===Li||bt===Rr||bt===ko||bt===Xo||bt===Vd||bt===kd,Pt=yt.getClearColor(),Ft=yt.getClearAlpha(),ne=Pt.r,Qt=Pt.g,Wt=Pt.b;Ut?(E[0]=ne,E[1]=Qt,E[2]=Wt,E[3]=Ft,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=ne,T[1]=Qt,T[2]=Wt,T[3]=Ft,F.clearBufferiv(F.COLOR,0,T))}else rt|=F.COLOR_BUFFER_BIT}Y&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),zt.dispose(),Lt.dispose(),Zt.dispose(),$e.dispose(),N.dispose(),ft.dispose(),re.dispose(),k.dispose(),pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",on),Tt.removeEventListener("sessionend",Sn),Pn.stop()};function It(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=ye.autoReset,Y=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,Z=Xt.type;Nt(),ye.autoReset=R,Xt.enabled=Y,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=Z}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const Y=R.target;Y.removeEventListener("dispose",Ht),ae(Y)}function ae(R){Ue(R),Zt.remove(R)}function Ue(R){const Y=Zt.get(R).programs;Y!==void 0&&(Y.forEach(function(at){pt.releaseProgram(at)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,at,rt,Z,bt){Y===null&&(Y=Oe);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=Ja(R,Y,at,rt,Z);kt.setMaterial(rt,Ut);let Ft=at.index,ne=1;if(rt.wireframe===!0){if(Ft=et.getWireframeAttribute(at),Ft===void 0)return;ne=2}const Qt=at.drawRange,Wt=at.attributes.position;let ce=Qt.start*ne,Ce=(Qt.start+Qt.count)*ne;bt!==null&&(ce=Math.max(ce,bt.start*ne),Ce=Math.min(Ce,(bt.start+bt.count)*ne)),Ft!==null?(ce=Math.max(ce,0),Ce=Math.min(Ce,Ft.count)):Wt!=null&&(ce=Math.max(ce,0),Ce=Math.min(Ce,Wt.count));const qe=Ce-ce;if(qe<0||qe===1/0)return;re.setup(Z,rt,Pt,at,Ft);let de,De=Yt;if(Ft!==null&&(de=b.get(Ft),De=jt,De.setIndex(de)),Z.isMesh)rt.wireframe===!0?(kt.setLineWidth(rt.wireframeLinewidth*xe()),De.setMode(F.LINES)):De.setMode(F.TRIANGLES);else if(Z.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),kt.setLineWidth(Kt*xe()),Z.isLineSegments?De.setMode(F.LINES):Z.isLineLoop?De.setMode(F.LINE_LOOP):De.setMode(F.LINE_STRIP)}else Z.isPoints?De.setMode(F.POINTS):Z.isSprite&&De.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))De.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,Pe=Z._multiDrawCounts,Se=Z._multiDrawCount,pn=Ft?b.get(Ft).bytesPerElement:1,ma=Zt.get(rt).currentProgram.getUniforms();for(let Xe=0;Xe<Se;Xe++)ma.setValue(F,"_gl_DrawID",Xe),De.render(Kt[Xe]/pn,Pe[Xe])}else if(Z.isInstancedMesh)De.renderInstances(ce,qe,Z.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Pe=Math.min(at.instanceCount,Kt);De.renderInstances(ce,qe,Pe)}else De.render(ce,qe)};function Te(R,Y,at){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,da(R,Y,at),R.side=Ya,R.needsUpdate=!0,da(R,Y,at),R.side=Ri):da(R,Y,at)}this.compile=function(R,Y,at=null){at===null&&(at=R),x=Lt.get(at),x.init(Y),D.push(x),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),R!==at&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const rt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Pt=bt[Ut];Te(Pt,at,Z),rt.add(Pt)}else Te(bt,at,Z),rt.add(bt)}),x=D.pop(),rt},this.compileAsync=function(R,Y,at=null){const rt=this.compile(R,Y,at);return new Promise(Z=>{function bt(){if(rt.forEach(function(Ut){Zt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){Z(R);return}setTimeout(bt,10)}Ee.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Vn=null;function dn(R){Vn&&Vn(R)}function on(){Pn.stop()}function Sn(){Pn.start()}const Pn=new k0;Pn.setAnimationLoop(dn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){Vn=R,Tt.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},Tt.addEventListener("sessionstart",on),Tt.addEventListener("sessionend",Sn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,X),x=Lt.get(R,D.length),x.init(Y),D.push(x),Dt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Dt),Mt=this.localClippingEnabled,gt=Vt.init(this.clippingPlanes,Mt),y=zt.get(R,O.length),y.init(),O.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Ka(bt,Y,-1/0,C.sortObjects)}Ka(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Et,L),Ge=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Ge&&yt.addToRenderList(y,R),this.info.render.frame++,gt===!0&&Vt.beginShadows();const at=x.state.shadowsArray;Xt.render(at,R,Y),gt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,Z=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(Z.length>0)for(let Ut=0,Pt=bt.length;Ut<Pt;Ut++){const Ft=bt[Ut];il(rt,Z,R,Ft)}Ge&&yt.render(R);for(let Ut=0,Pt=bt.length;Ut<Pt;Ut++){const Ft=bt[Ut];nl(y,R,Ft,Ft.viewport)}}else Z.length>0&&il(rt,Z,R,Y),Ge&&yt.render(R),nl(y,R,Y);X!==null&&B===0&&(se.updateMultisampleRenderTarget(X),se.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,Y),re.resetDefaultState(),U=-1,w=null,D.pop(),D.length>0?(x=D[D.length-1],gt===!0&&Vt.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ka(R,Y,at,rt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){rt&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Ut=ft.update(R),Pt=R.material;Pt.visible&&y.push(R,Ut,Pt,at,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ut=ft.update(R),Pt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Jt.copy(Ut.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(Pt)){const Ft=Ut.groups;for(let ne=0,Qt=Ft.length;ne<Qt;ne++){const Wt=Ft[ne],ce=Pt[Wt.materialIndex];ce&&ce.visible&&y.push(R,Ut,ce,at,Jt.z,Wt)}}else Pt.visible&&y.push(R,Ut,Pt,at,Jt.z,null)}}const bt=R.children;for(let Ut=0,Pt=bt.length;Ut<Pt;Ut++)Ka(bt[Ut],Y,at,rt)}function nl(R,Y,at,rt){const Z=R.opaque,bt=R.transmissive,Ut=R.transparent;x.setupLightsView(at),gt===!0&&Vt.setGlobalState(C.clippingPlanes,at),rt&&kt.viewport(V.copy(rt)),Z.length>0&&Qa(Z,Y,at),bt.length>0&&Qa(bt,Y,at),Ut.length>0&&Qa(Ut,Y,at),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function il(R,Y,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[rt.id]===void 0&&(x.state.transmissionRenderTarget[rt.id]=new wr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Qo:Li,minFilter:Ar,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=x.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||V;bt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget(),Ft=C.getActiveCubeFace(),ne=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(mt),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),Ge&&yt.render(at);const Qt=C.toneMapping;C.toneMapping=qa;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),x.setupLightsView(rt),gt===!0&&Vt.setGlobalState(C.clippingPlanes,rt),Qa(R,at,rt),se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ce=0,qe=Y.length;Ce<qe;Ce++){const de=Y[Ce],De=de.object,Kt=de.geometry,Pe=de.material,Se=de.group;if(Pe.side===Ri&&De.layers.test(rt.layers)){const pn=Pe.side;Pe.side=Hn,Pe.needsUpdate=!0,ha(De,at,rt,Kt,Pe,Se),Pe.side=pn,Pe.needsUpdate=!0,ce=!0}}ce===!0&&(se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt))}C.setRenderTarget(Pt,Ft,ne),C.setClearColor(mt,ut),Wt!==void 0&&(rt.viewport=Wt),C.toneMapping=Qt}function Qa(R,Y,at){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,bt=R.length;Z<bt;Z++){const Ut=R[Z],Pt=Ut.object,Ft=Ut.geometry,ne=Ut.group;let Qt=Ut.material;Qt.allowOverride===!0&&rt!==null&&(Qt=rt),Pt.layers.test(at.layers)&&ha(Pt,Y,at,Ft,Qt,ne)}}function ha(R,Y,at,rt,Z,bt){R.onBeforeRender(C,Y,at,rt,Z,bt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,Y,at,rt,R,bt),Z.transparent===!0&&Z.side===Ri&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,C.renderBufferDirect(at,Y,rt,Z,R,bt),Z.side=Ya,Z.needsUpdate=!0,C.renderBufferDirect(at,Y,rt,Z,R,bt),Z.side=Ri):C.renderBufferDirect(at,Y,rt,Z,R,bt),R.onAfterRender(C,Y,at,rt,Z,bt)}function da(R,Y,at){Y.isScene!==!0&&(Y=Oe);const rt=Zt.get(R),Z=x.state.lights,bt=x.state.shadowsArray,Ut=Z.state.version,Pt=pt.getParameters(R,Z.state,bt,Y,at),Ft=pt.getProgramCacheKey(Pt);let ne=rt.programs;rt.environment=R.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(R.isMeshStandardMaterial?N:$e).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",Ht),ne=new Map,rt.programs=ne);let Qt=ne.get(Ft);if(Qt!==void 0){if(rt.currentProgram===Qt&&rt.lightsStateVersion===Ut)return Pi(R,Pt),Qt}else Pt.uniforms=pt.getUniforms(R),R.onBeforeCompile(Pt,C),Qt=pt.acquireProgram(Pt,Ft),ne.set(Ft,Qt),rt.uniforms=Pt.uniforms;const Wt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Vt.uniform),Pi(R,Pt),rt.needsLights=nn(R),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=Qt,rt.uniformsList=null,Qt}function Oi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Vu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Pi(R,Y){const at=Zt.get(R);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function Ja(R,Y,at,rt,Z){Y.isScene!==!0&&(Y=Oe),se.resetTextureUnits();const bt=Y.fog,Ut=rt.isMeshStandardMaterial?Y.environment:null,Pt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ws,Ft=(rt.isMeshStandardMaterial?N:$e).get(rt.envMap||Ut),ne=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Qt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,Ce=!!at.morphAttributes.color;let qe=qa;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=C.toneMapping);const de=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,De=de!==void 0?de.length:0,Kt=Zt.get(rt),Pe=x.state.lights;if(gt===!0&&(Mt===!0||R!==w)){const mn=R===w&&rt.id===U;Vt.setState(rt,R,mn)}let Se=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Pe.state.version||Kt.outputColorSpace!==Pt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Ft||rt.fog===!0&&Kt.fog!==bt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Vt.numPlanes||Kt.numIntersection!==Vt.numIntersection)||Kt.vertexAlphas!==ne||Kt.vertexTangents!==Qt||Kt.morphTargets!==Wt||Kt.morphNormals!==ce||Kt.morphColors!==Ce||Kt.toneMapping!==qe||Kt.morphTargetsCount!==De)&&(Se=!0):(Se=!0,Kt.__version=rt.version);let pn=Kt.currentProgram;Se===!0&&(pn=da(rt,Y,Z));let ma=!1,Xe=!1,Bi=!1;const Ve=pn.getUniforms(),An=Kt.uniforms;if(kt.useProgram(pn.program)&&(ma=!0,Xe=!0,Bi=!0),rt.id!==U&&(U=rt.id,Xe=!0),ma||w!==R){kt.buffers.depth.getReversed()?(wt.copy(R.projectionMatrix),cT(wt),fT(wt),Ve.setValue(F,"projectionMatrix",wt)):Ve.setValue(F,"projectionMatrix",R.projectionMatrix),Ve.setValue(F,"viewMatrix",R.matrixWorldInverse);const Mn=Ve.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,ue.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xe=!0,Bi=!0)}if(Z.isSkinnedMesh){Ve.setOptional(F,Z,"bindMatrix"),Ve.setOptional(F,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ve.setValue(F,"boneTexture",mn.boneTexture,se))}Z.isBatchedMesh&&(Ve.setOptional(F,Z,"batchingTexture"),Ve.setValue(F,"batchingTexture",Z._matricesTexture,se),Ve.setOptional(F,Z,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",Z._indirectTexture,se),Ve.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",Z._colorsTexture,se));const ln=at.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Bt.update(Z,at,pn),(Xe||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Ve.setValue(F,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(An.envMap.value=Ft,An.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),Xe&&(Ve.setValue(F,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&pa(An,Bi),bt&&rt.fog===!0&&lt.refreshFogUniforms(An,bt),lt.refreshMaterialUniforms(An,rt,j,K,x.state.transmissionRenderTarget[R.id]),Vu.upload(F,Oi(Kt),An,se)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Vu.upload(F,Oi(Kt),An,se),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ve.setValue(F,"center",Z.center),Ve.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Ve.setValue(F,"normalMatrix",Z.normalMatrix),Ve.setValue(F,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const mn=rt.uniformsGroups;for(let Mn=0,yi=mn.length;Mn<yi;Mn++){const Ii=mn[Mn];k.update(Ii,pn),k.bind(Ii,pn)}}return pn}function pa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,at){const rt=Zt.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=Y,Zt.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const at=Zt.get(R);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const al=F.createFramebuffer();this.setRenderTarget=function(R,Y=0,at=0){X=R,H=Y,B=at;let rt=!0,Z=null,bt=!1,Ut=!1;if(R){const Ft=Zt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Ft.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Ft.__hasExternalTextures)se.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Ft.__boundDepthTexture!==Wt){if(Wt!==null&&Zt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ut=!0);const Qt=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[Y])?Z=Qt[Y][at]:Z=Qt[Y],bt=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Z=Qt[at]:Z=Qt,V.copy(R.viewport),ot.copy(R.scissor),st=R.scissorTest}else V.copy(tt).multiplyScalar(j).floor(),ot.copy(xt).multiplyScalar(j).floor(),st=St;if(at!==0&&(Z=al),kt.bindFramebuffer(F.FRAMEBUFFER,Z)&&rt&&kt.drawBuffers(R,Z),kt.viewport(V),kt.scissor(ot),kt.setScissorTest(st),bt){const Ft=Zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,at)}else if(Ut){const Ft=Zt.get(R.texture),ne=Y;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,at,ne)}else if(R!==null&&at!==0){const Ft=Zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,at)}U=-1},this.readRenderTargetPixels=function(R,Y,at,rt,Z,bt,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){kt.bindFramebuffer(F.FRAMEBUFFER,Ft);try{const ne=R.textures[Pt],Qt=ne.format,Wt=ne.type;if(!ge.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-rt&&at>=0&&at<=R.height-Z&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(Y,at,rt,Z,Ct.convert(Qt),Ct.convert(Wt),bt))}finally{const ne=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,Y,at,rt,Z,bt,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(Y>=0&&Y<=R.width-rt&&at>=0&&at<=R.height-Z){kt.bindFramebuffer(F.FRAMEBUFFER,Ft);const ne=R.textures[Pt],Qt=ne.format,Wt=ne.type;if(!ge.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(Y,at,rt,Z,Ct.convert(Qt),Ct.convert(Wt),0);const Ce=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,Ce);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await uT(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(ce),F.deleteSync(qe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,at=0){const rt=Math.pow(2,-at),Z=Math.floor(R.image.width*rt),bt=Math.floor(R.image.height*rt),Ut=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;se.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ut,Pt,Z,bt),kt.unbindTexture()};const rl=F.createFramebuffer(),zi=F.createFramebuffer();this.copyTextureToTexture=function(R,Y,at=null,rt=null,Z=0,bt=null){bt===null&&(Z!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Ut,Pt,Ft,ne,Qt,Wt,ce,Ce,qe;const de=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(at!==null)Ut=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Ft=at.isBox3?at.max.z-at.min.z:1,ne=at.min.x,Qt=at.min.y,Wt=at.isBox3?at.min.z:0;else{const ln=Math.pow(2,-Z);Ut=Math.floor(de.width*ln),Pt=Math.floor(de.height*ln),R.isDataArrayTexture?Ft=de.depth:R.isData3DTexture?Ft=Math.floor(de.depth*ln):Ft=1,ne=0,Qt=0,Wt=0}rt!==null?(ce=rt.x,Ce=rt.y,qe=rt.z):(ce=0,Ce=0,qe=0);const De=Ct.convert(Y.format),Kt=Ct.convert(Y.type);let Pe;Y.isData3DTexture?(se.setTexture3D(Y,0),Pe=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Pe=F.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Pe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=F.getParameter(F.UNPACK_ROW_LENGTH),pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ma=F.getParameter(F.UNPACK_SKIP_PIXELS),Xe=F.getParameter(F.UNPACK_SKIP_ROWS),Bi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Ve=R.isDataArrayTexture||R.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const ln=Zt.get(R),mn=Zt.get(Y),Mn=Zt.get(ln.__renderTarget),yi=Zt.get(mn.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ii=0;Ii<Ft;Ii++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,Z,Wt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(Y).__webglTexture,bt,qe+Ii)),F.blitFramebuffer(ne,Qt,Ut,Pt,ce,Ce,Ut,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Zt.has(R)){const ln=Zt.get(R),mn=Zt.get(Y);kt.bindFramebuffer(F.READ_FRAMEBUFFER,rl),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,zi);for(let Mn=0;Mn<Ft;Mn++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,Z,Wt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,Z),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,bt,qe+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,bt),Z!==0?F.blitFramebuffer(ne,Qt,Ut,Pt,ce,Ce,Ut,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(Pe,bt,ce,Ce,qe+Mn,ne,Qt,Ut,Pt):F.copyTexSubImage2D(Pe,bt,ce,Ce,ne,Qt,Ut,Pt);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Pe,bt,ce,Ce,qe,Ut,Pt,Ft,De,Kt,de.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,bt,ce,Ce,qe,Ut,Pt,Ft,De,de.data):F.texSubImage3D(Pe,bt,ce,Ce,qe,Ut,Pt,Ft,De,Kt,de):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,bt,ce,Ce,Ut,Pt,De,Kt,de.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,bt,ce,Ce,de.width,de.height,De,de.data):F.texSubImage2D(F.TEXTURE_2D,bt,ce,Ce,Ut,Pt,De,Kt,de);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ma),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bi),bt===0&&Y.generateMipmaps&&F.generateMipmap(Pe),kt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,at=null,rt=null,Z=0){return Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,at,rt,Z)},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){H=0,B=0,X=null,kt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Z_=7312370,j0=10467583;function jw(s=18,t=12){const i=[],r=[],p=v=>Math.pow(Math.sin(Math.PI*v),.9+1.4*v);for(let v=0;v<=t;v++){const _=v/t;for(let S=0;S<=s;S++){const E=S/s*2-1,T=E*1.35*p(_),y=_*2.6,x=.4*Math.cos(E*Math.PI/2)*p(_);i.push(T,x,y)}}const m=s+1;for(let v=0;v<t;v++)for(let _=0;_<s;_++){const S=v*m+_,E=S+1,T=S+m,y=T+1;r.push(S,T,E,E,T,y)}const g=new ca;return g.setAttribute("position",new xi(i,3)),g.setIndex(r),g.computeVertexNormals(),g.userData={segsU:s,segsV:t,maxWidth:1.35,bodyLength:2.6,widthAt:p,basePositions:i.slice(),backTipY:0},g}function Zw(s,t){const{segsU:i,segsV:r,basePositions:l,widthAt:u}=s.userData,f=s.attributes.position,h=i+1;for(let p=0;p<=r;p++){const m=p/r,g=u(m);for(let v=0;v<=i;v++){const _=p*h+v,S=v/i*2-1,E=l[_*3+1],T=.34*Math.pow(Math.abs(S),1.4)*g*Math.sin(2*Math.PI*(m*1.15-t*.45));f.setY(_,E+T)}}f.needsUpdate=!0,s.computeVertexNormals()}function Kw(s,t,i){const r=[];for(let u=0;u<=6;u++){const f=u/6,h=t+f*1.7,p=1+f*.65,g=.3*f*Math.sin(2*Math.PI*(p*1.15-s*.45));r.push(new W(0,i+g,h))}return r}function K_(s,{scale:t=1,path:i,timeOffset:r=0}){const l=new zo;l.scale.setScalar(t),s.add(l);const u=jw(),f=new y_({color:Z_,roughness:.35,metalness:.1,transparent:!0,opacity:.55,side:Ri,emissive:1714794,emissiveIntensity:.3}),h=new $n(u,f);l.add(h);const p=new Kd({color:j0,wireframe:!0,transparent:!0,opacity:.16}),m=new $n(u,p);l.add(m);const g=new y_({color:Z_,transparent:!0,opacity:.9,roughness:.4});let v=new $n(u,p),_=0;function S(T){const y=T+r;Zw(u,y),v&&(l.remove(v),v.geometry.dispose());const x=new F0(Kw(y,u.userData.bodyLength,u.userData.backTipY)),O=new $d(x,16,.01,6,!1);v=new $n(O,g),l.add(v);const D=i.x(y),C=i.z(y),I=i.y(y),H=.45,B=i.x(y+H),X=i.z(y+H);let w=Math.atan2(B-D,X-C)+Math.PI-_;w=Math.atan2(Math.sin(w),Math.cos(w)),_+=w*.035,l.position.set(D,I,C),l.rotation.y=_;const ot=oT.clamp(w*2.4,-.3,.3);l.rotation.z=ot,l.rotation.x=-.15}function E(){s.remove(l),u.dispose(),f.dispose(),p.dispose(),g.dispose(),v&&v.geometry.dispose()}return{update:S,dispose:E}}function Qw(){const s=ht.useRef(null);return ht.useEffect(()=>{const t=s.current;if(!t)return;const i=new BT,r=new Jn(38,1,.1,80);r.position.set(0,7.5,13),r.lookAt(0,0,1);const l=new Yw({antialias:!0,alpha:!0});l.setClearColor(0,0),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(l.domElement);const u=new ob(16777215,1.1);u.position.set(2,4,3),i.add(u);const f=new rb(j0,1.4,16);f.position.set(-2,1.5,-2),i.add(f),i.add(new lb(3820154,.6));const h=K_(i,{scale:2,timeOffset:0,path:{seed:0,x:T=>6.8*Math.sin(T*.11)+2.9*Math.sin(T*.27+1.3),z:T=>4.8*Math.sin(T*.08+.5)+2.2*Math.sin(T*.19+2.1)-.4,y:T=>.55*Math.sin(T*.15)+.25*Math.sin(T*.34+1)}}),p=K_(i,{scale:1.6,timeOffset:38,path:{seed:2.4,x:T=>5.5*Math.sin(T*.075+2)+2.4*Math.sin(T*.21+.4)-1.5,z:T=>3.6*Math.sin(T*.13+1.1)+1.9*Math.sin(T*.05+3)+1.2,y:T=>.4*Math.sin(T*.1+1.8)+.2*Math.sin(T*.24+.6)}});let m,g=0;const v=new cb;function _(){const T=t.clientWidth||1,y=t.clientHeight||1;l.setSize(T,y),r.aspect=T/y,r.updateProjectionMatrix()}_();const S=new ResizeObserver(_);S.observe(t);function E(){m=requestAnimationFrame(E);const T=v.getDelta();g+=T,h.update(g),p.update(g),l.render(i,r)}return E(),()=>{cancelAnimationFrame(m),S.disconnect(),h.dispose(),p.dispose(),l.dispose(),t.contains(l.domElement)&&t.removeChild(l.domElement)}},[]),At.jsx("div",{ref:s,"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0}})}function Jw(){return At.jsxs("div",{className:"sections",id:"contact",style:{position:"relative"},children:[At.jsx(Qw,{}),At.jsxs("div",{style:{position:"relative",zIndex:1},children:[At.jsx("h1",{children:"Contact"}),At.jsx("p",{children:"I'm currently looking for 2027 opportunities! Get in touch with me through: "}),At.jsxs("div",{className:"contact-links",children:[At.jsx("a",{href:"mailto:wbella@student.ubc.ca",children:At.jsx("i",{class:"fa-regular fa-envelope"})}),At.jsx("a",{href:"https://github.com/bella7898",children:At.jsx("i",{class:"fa-brands fa-github"})}),At.jsx("a",{href:"https://www.instagram.com/wbella101/",children:At.jsx("i",{class:"fa-brands fa-instagram"})}),At.jsx("a",{href:"https://www.linkedin.com/in/bella-wang-878919231/",children:At.jsx("i",{class:"fa-brands fa-linkedin"})})]})]})]})}function $w(){return At.jsx("div",{children:"404 - Page Not Found"})}function tC(){const s=ht.useRef();return At.jsxs("div",{className:"container",ref:s,children:[At.jsx(WM,{}),At.jsx(YM,{}),At.jsx(iE,{}),At.jsx(Jw,{})]})}function eC(){return At.jsxs("div",{children:[At.jsxs("div",{className:"navbar",children:[At.jsx("a",{className:"heroLink",href:"#hero",children:"Bella Wang"}),At.jsxs("div",{className:"nav-links",children:[At.jsx("a",{href:"#experience",children:"Experience"}),At.jsx("a",{href:"#projects",children:"Projects"}),At.jsx("a",{href:"#contact",children:"Contact"}),At.jsx("button",{children:"View Resume"})]})]}),At.jsxs(aM,{children:[At.jsx(Xh,{path:"/",element:At.jsx(tC,{})}),At.jsx(Xh,{path:"*",element:At.jsx($w,{})})]})]})}sS.createRoot(document.getElementById("root")).render(At.jsx(wM,{children:At.jsx(eC,{})}));
