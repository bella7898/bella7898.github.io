(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();var eh={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function Jy(){if(w0)return wo;w0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:s,type:a,key:f,ref:o!==void 0?o:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var C0;function $y(){return C0||(C0=1,eh.exports=Jy()),eh.exports}var it=$y(),nh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function tS(){if(D0)return oe;D0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(L,tt,yt){this.props=L,this.context=tt,this.refs=T,this.updater=yt||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=y.prototype;function O(L,tt,yt){this.props=L,this.context=tt,this.refs=T,this.updater=yt||S}var D=O.prototype=new x;D.constructor=O,E(D,y.prototype),D.isPureReactComponent=!0;var C=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(L,tt,yt,Mt,J,vt){return yt=vt.ref,{$$typeof:s,type:L,key:tt,ref:yt!==void 0?yt:null,props:vt}}function X(L,tt){return B(L.type,tt,void 0,void 0,void 0,L.props)}function U(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function w(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return tt[yt]})}var V=/\/+/g;function lt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):tt.toString(36)}function ot(){}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ot,ot):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ct(L,tt,yt,Mt,J){var vt=typeof L;(vt==="undefined"||vt==="boolean")&&(L=null);var Et=!1;if(L===null)Et=!0;else switch(vt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(L.$$typeof){case s:case t:Et=!0;break;case g:return Et=L._init,ct(Et(L._payload),tt,yt,Mt,J)}}if(Et)return J=J(L),Et=Mt===""?"."+lt(L,0):Mt,C(J)?(yt="",Et!=null&&(yt=Et.replace(V,"$&/")+"/"),ct(J,tt,yt,"",function(ue){return ue})):J!=null&&(U(J)&&(J=X(J,yt+(J.key==null||L&&L.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Et)),tt.push(J)),1;Et=0;var wt=Mt===""?".":Mt+":";if(C(L))for(var Dt=0;Dt<L.length;Dt++)Mt=L[Dt],vt=wt+lt(Mt,Dt),Et+=ct(Mt,tt,yt,vt,J);else if(Dt=_(L),typeof Dt=="function")for(L=Dt.call(L),Dt=0;!(Mt=L.next()).done;)Mt=Mt.value,vt=wt+lt(Mt,Dt++),Et+=ct(Mt,tt,yt,vt,J);else if(vt==="object"){if(typeof L.then=="function")return ct(gt(L),tt,yt,Mt,J);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Et}function z(L,tt,yt){if(L==null)return L;var Mt=[],J=0;return ct(L,Mt,"","",function(vt){return tt.call(yt,vt,J++)}),Mt}function K(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Tt(){}return oe.Children={map:z,forEach:function(L,tt,yt){z(L,function(){tt.apply(this,arguments)},yt)},count:function(L){var tt=0;return z(L,function(){tt++}),tt},toArray:function(L){return z(L,function(tt){return tt})||[]},only:function(L){if(!U(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},oe.Component=y,oe.Fragment=i,oe.Profiler=o,oe.PureComponent=O,oe.StrictMode=a,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cloneElement=function(L,tt,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Mt=E({},L.props),J=L.key,vt=void 0;if(tt!=null)for(Et in tt.ref!==void 0&&(vt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!H.call(tt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&tt.ref===void 0||(Mt[Et]=tt[Et]);var Et=arguments.length-2;if(Et===1)Mt.children=yt;else if(1<Et){for(var wt=Array(Et),Dt=0;Dt<Et;Dt++)wt[Dt]=arguments[Dt+2];Mt.children=wt}return B(L.type,J,void 0,void 0,vt,Mt)},oe.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,tt,yt){var Mt,J={},vt=null;if(tt!=null)for(Mt in tt.key!==void 0&&(vt=""+tt.key),tt)H.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(J[Mt]=tt[Mt]);var Et=arguments.length-2;if(Et===1)J.children=yt;else if(1<Et){for(var wt=Array(Et),Dt=0;Dt<Et;Dt++)wt[Dt]=arguments[Dt+2];J.children=wt}if(L&&L.defaultProps)for(Mt in Et=L.defaultProps,Et)J[Mt]===void 0&&(J[Mt]=Et[Mt]);return B(L,vt,void 0,void 0,null,J)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:h,render:L}},oe.isValidElement=U,oe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},oe.memo=function(L,tt){return{$$typeof:m,type:L,compare:tt===void 0?null:tt}},oe.startTransition=function(L){var tt=I.T,yt={};I.T=yt;try{var Mt=L(),J=I.S;J!==null&&J(yt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(Tt,j)}catch(vt){j(vt)}finally{I.T=tt}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(L){return I.H.use(L)},oe.useActionState=function(L,tt,yt){return I.H.useActionState(L,tt,yt)},oe.useCallback=function(L,tt){return I.H.useCallback(L,tt)},oe.useContext=function(L){return I.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,tt){return I.H.useDeferredValue(L,tt)},oe.useEffect=function(L,tt,yt){var Mt=I.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(L,tt)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(L,tt,yt){return I.H.useImperativeHandle(L,tt,yt)},oe.useInsertionEffect=function(L,tt){return I.H.useInsertionEffect(L,tt)},oe.useLayoutEffect=function(L,tt){return I.H.useLayoutEffect(L,tt)},oe.useMemo=function(L,tt){return I.H.useMemo(L,tt)},oe.useOptimistic=function(L,tt){return I.H.useOptimistic(L,tt)},oe.useReducer=function(L,tt,yt){return I.H.useReducer(L,tt,yt)},oe.useRef=function(L){return I.H.useRef(L)},oe.useState=function(L){return I.H.useState(L)},oe.useSyncExternalStore=function(L,tt,yt){return I.H.useSyncExternalStore(L,tt,yt)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.1.1",oe}var U0;function Ld(){return U0||(U0=1,nh.exports=tS()),nh.exports}var ht=Ld(),ih={exports:{}},Co={},ah={exports:{}},rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function eS(){return L0||(L0=1,function(s){function t(z,K){var j=z.length;z.push(K);t:for(;0<j;){var Tt=j-1>>>1,L=z[Tt];if(0<o(L,K))z[Tt]=K,z[j]=L,j=Tt;else break t}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var K=z[0],j=z.pop();if(j!==K){z[0]=j;t:for(var Tt=0,L=z.length,tt=L>>>1;Tt<tt;){var yt=2*(Tt+1)-1,Mt=z[yt],J=yt+1,vt=z[J];if(0>o(Mt,j))J<L&&0>o(vt,Mt)?(z[Tt]=vt,z[J]=j,Tt=J):(z[Tt]=Mt,z[yt]=j,Tt=yt);else if(J<L&&0>o(vt,j))z[Tt]=vt,z[J]=j,Tt=J;else break t}}return K}function o(z,K){var j=z.sortIndex-K.sortIndex;return j!==0?j:z.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,v=null,_=3,S=!1,E=!1,T=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var K=i(m);K!==null;){if(K.callback===null)a(m);else if(K.startTime<=z)a(m),K.sortIndex=K.expirationTime,t(p,K);else break;K=i(m)}}function I(z){if(T=!1,C(z),!E)if(i(p)!==null)E=!0,H||(H=!0,lt());else{var K=i(m);K!==null&&ct(I,K.startTime-z)}}var H=!1,B=-1,X=5,U=-1;function w(){return y?!0:!(s.unstable_now()-U<X)}function V(){if(y=!1,H){var z=s.unstable_now();U=z;var K=!0;try{t:{E=!1,T&&(T=!1,O(B),B=-1),S=!0;var j=_;try{e:{for(C(z),v=i(p);v!==null&&!(v.expirationTime>z&&w());){var Tt=v.callback;if(typeof Tt=="function"){v.callback=null,_=v.priorityLevel;var L=Tt(v.expirationTime<=z);if(z=s.unstable_now(),typeof L=="function"){v.callback=L,C(z),K=!0;break e}v===i(p)&&a(p),C(z)}else a(p);v=i(p)}if(v!==null)K=!0;else{var tt=i(m);tt!==null&&ct(I,tt.startTime-z),K=!1}}break t}finally{v=null,_=j,S=!1}K=void 0}}finally{K?lt():H=!1}}}var lt;if(typeof D=="function")lt=function(){D(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,gt=ot.port2;ot.port1.onmessage=V,lt=function(){gt.postMessage(null)}}else lt=function(){x(V,0)};function ct(z,K){B=x(function(){z(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(z){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var j=_;_=K;try{return z()}finally{_=j}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=_;_=z;try{return K()}finally{_=j}},s.unstable_scheduleCallback=function(z,K,j){var Tt=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Tt+j:Tt):j=Tt,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,z={id:g++,callback:K,priorityLevel:z,startTime:j,expirationTime:L,sortIndex:-1},j>Tt?(z.sortIndex=j,t(m,z),i(p)===null&&z===i(m)&&(T?(O(B),B=-1):T=!0,ct(I,j-Tt))):(z.sortIndex=L,t(p,z),E||S||(E=!0,H||(H=!0,lt()))),z},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(z){var K=_;return function(){var j=_;_=K;try{return z.apply(this,arguments)}finally{_=j}}}}(rh)),rh}var N0;function nS(){return N0||(N0=1,ah.exports=eS()),ah.exports}var sh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function iS(){if(O0)return wn;O0=1;var s=Ld();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,wn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},wn.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},wn.requestFormReset=function(p){a.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.1.1",wn}var P0;function aS(){if(P0)return sh.exports;P0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sh.exports=iS(),sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function rS(){if(z0)return Co;z0=1;var s=nS(),t=Ld(),i=aS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,l=n;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(l=c.return,l!==null){r=l;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return h(c),e;if(d===l)return h(c),n;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=c,l=d;else{for(var M=!1,A=c.child;A;){if(A===r){M=!0,r=c,l=d;break}if(A===l){M=!0,l=c,r=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===r){M=!0,r=d,l=c;break}if(A===l){M=!0,l=d,r=c;break}A=A.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case D:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ct=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Tt=[],L=-1;function tt(e){return{current:e}}function yt(e){0>L||(e.current=Tt[L],Tt[L]=null,L--)}function Mt(e,n){L++,Tt[L]=e.current,e.current=n}var J=tt(null),vt=tt(null),Et=tt(null),wt=tt(null);function Dt(e,n){switch(Mt(Et,n),Mt(vt,e),Mt(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n0(n),e=i0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(J),Mt(J,e)}function ue(){yt(J),yt(vt),yt(Et)}function Jt(e){e.memoizedState!==null&&Mt(wt,e);var n=J.current,r=i0(n,e.type);n!==r&&(Mt(vt,e),Mt(J,r))}function Oe(e){vt.current===e&&(yt(J),yt(vt)),wt.current===e&&(yt(wt),Eo._currentValue=j)}var Ge=Object.prototype.hasOwnProperty,xe=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,yn=s.unstable_shouldYield,Ee=s.unstable_requestPaint,ge=s.unstable_now,kt=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,Zt=s.unstable_UserBlockingPriority,se=s.unstable_NormalPriority,$e=s.unstable_LowPriority,N=s.unstable_IdlePriority,b=s.log,et=s.unstable_setDisableYieldValue,dt=null,mt=null;function ut(e){if(typeof b=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(dt,e)}catch{}}var zt=Math.clz32?Math.clz32:Xt,Lt=Math.log,Vt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Lt(e)/Vt|0)|0}var St=256,Bt=4194304;function Yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,r){var l=e.pendingLanes;if(l===0)return 0;var c=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?c=Yt(l):(M&=A,M!==0?c=Yt(M):r||(r=A&~e,r!==0&&(c=Yt(r))))):(A=l&~d,A!==0?c=Yt(A):M!==0?c=Yt(M):r||(r=l&~e,r!==0&&(c=Yt(r)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Nt(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function bt(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function It(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,n,r,l,c,d){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(r=M&~r;0<r;){var ft=31-zt(r),_t=1<<ft;A[ft]=0,P[ft]=-1;var nt=$[ft];if(nt!==null)for($[ft]=null,ft=0;ft<nt.length;ft++){var at=nt[ft];at!==null&&(at.lane&=-536870913)}r&=~_t}l!==0&&xt(e,l,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function xt(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-zt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194090}function Ht(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-zt(r),c=1<<l;c&n|e[l]&n&&(e[l]|=n),r&=~c}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:M0(e.type))}function Vn(e,n){var r=K.p;try{return K.p=e,n()}finally{K.p=r}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,Sn="__reactProps$"+dn,Pn="__reactContainer$"+dn,Ka="__reactEvents$"+dn,nl="__reactListeners$"+dn,il="__reactHandles$"+dn,Qa="__reactResources$"+dn,ha="__reactMarker$"+dn;function da(e){delete e[on],delete e[Sn],delete e[Ka],delete e[nl],delete e[il]}function Oi(e){var n=e[on];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Pn]||r[on]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=o0(e);e!==null;){if(r=e[on])return r;e=o0(e)}return n}e=r,r=e.parentNode}return null}function Pi(e){if(e=e[on]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function pa(e){var n=e[Qa];return n||(n=e[Qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[ha]=!0}var al=new Set,rl={};function zi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(rl[e]=n,e=0;e<n.length;e++)al.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function Z(e){return Ge.call(st,e)?!0:Ge.call(rt,e)?!1:Y.test(e)?st[e]=!0:(rt[e]=!0,!1)}function At(e,n,r){if(Z(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Ut(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Pt(e,n,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+l)}}var Ft,ne;function Qt(e){if(Ft===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||"",ne=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+ne}var Wt=!1;function ce(e,n){if(!e||Wt)return"";Wt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(at){var nt=at}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(at){nt=at}e.call(_t.prototype)}}else{try{throw Error()}catch(at){nt=at}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var P=M.split(`
`),$=A.split(`
`);for(c=l=0;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(l===P.length||c===$.length)for(l=P.length-1,c=$.length-1;1<=l&&0<=c&&P[l]!==$[c];)c--;for(;1<=l&&0<=c;l--,c--)if(P[l]!==$[c]){if(l!==1||c!==1)do if(l--,c--,0>c||P[l]!==$[c]){var ft=`
`+P[l].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=l&&0<=c);break}}}finally{Wt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Qt(r):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Qt("Activity");default:return""}}function qe(e){try{var n="";do n+=Ce(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e){var n=De(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,d=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pe(e){e._valueTracker||(e._valueTracker=Kt(e))}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=De(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function Xe(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(e,n,r,l,c,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+de(n)):e.value!==""+de(n)&&(e.value=""+de(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?An(e,M,de(n)):r!=null?An(e,M,de(r)):l!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+de(A):e.removeAttribute("name")}function Ve(e,n,r,l,c,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;r=r!=null?""+de(r):"",n=n!=null?""+de(n):r,A||n===e.value||(e.value=n),e.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function An(e,n,r){n==="number"&&pn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ln(e,n,r,l){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&l&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,r){if(n!=null&&(n=""+de(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+de(r):""}function Mn(e,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(ct(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=de(n),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function yi(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(e,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,r):typeof r!="number"||r===0||Ii.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function ip(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&r[c]!==l&&np(e,c,l)}else for(var d in n)n.hasOwnProperty(d)&&np(e,d,n[d])}function $u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var K_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return Q_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tc=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,Dr=null;function ap(e){var n=Pi(e);if(n&&(e=n.stateNode)){var r=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bi(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var c=l[Sn]||null;if(!c)throw Error(a(90));Bi(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===e.form&&Se(l)}break t;case"textarea":mn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&ln(e,!!r.multiple,n,!1)}}}var nc=!1;function rp(e,n,r){if(nc)return e(n,r);nc=!0;try{var l=e(n);return l}finally{if(nc=!1,(Cr!==null||Dr!==null)&&(Wl(),Cr&&(n=Cr,e=Dr,Dr=Cr=null,ap(n),e)))for(n=0;n<e.length;n++)ap(e[n])}}function Ps(e,n){var r=e.stateNode;if(r===null)return null;var l=r[Sn]||null;if(l===null)return null;r=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=!1;if(Fi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){ic=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{ic=!1}var ga=null,ac=null,ol=null;function sp(){if(ol)return ol;var e,n=ac,r=n.length,l,c="value"in ga?ga.value:ga.textContent,d=c.length;for(e=0;e<r&&n[e]===c[e];e++);var M=r-e;for(l=1;l<=M&&n[r-l]===c[d-l];l++);return ol=c.slice(e,1<l?1-l:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function op(){return!1}function zn(e){function n(r,l,c,d,M){this._reactName=r,this._targetInst=c,this.type=l,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ul:op,this.isPropagationStopped=op,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=zn($a),Bs=g({},$a,{view:0,detail:0}),J_=zn(Bs),rc,sc,Is,fl=g({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(rc=e.screenX-Is.screenX,sc=e.screenY-Is.screenY):sc=rc=0,Is=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),lp=zn(fl),$_=g({},fl,{dataTransfer:0}),tx=zn($_),ex=g({},Bs,{relatedTarget:0}),oc=zn(ex),nx=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=zn(nx),ax=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=zn(ax),sx=g({},$a,{data:0}),up=zn(sx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ux[e])?!!n[e]:!1}function lc(){return cx}var fx=g({},Bs,{key:function(e){if(e.key){var n=ox[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hx=zn(fx),dx=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=zn(dx),px=g({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),mx=zn(px),gx=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=zn(gx),_x=g({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=zn(_x),yx=g({},$a,{newState:0,oldState:0}),Sx=zn(yx),Mx=[9,13,27,32],uc=Fi&&"CompositionEvent"in window,Fs=null;Fi&&"documentMode"in document&&(Fs=document.documentMode);var Ex=Fi&&"TextEvent"in window&&!Fs,fp=Fi&&(!uc||Fs&&8<Fs&&11>=Fs),hp=" ",dp=!1;function pp(e,n){switch(e){case"keyup":return Mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function Tx(e,n){switch(e){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(dp=!0,hp);case"textInput":return e=n.data,e===hp&&dp?null:e;default:return null}}function bx(e,n){if(Ur)return e==="compositionend"||!uc&&pp(e,n)?(e=sp(),ol=ac=ga=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var Ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ax[e.type]:n==="textarea"}function vp(e,n,r,l){Cr?Dr?Dr.push(l):Dr=[l]:Cr=l,n=Ql(n,"onChange"),0<n.length&&(r=new cl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var Hs=null,Gs=null;function Rx(e){Qg(e,0)}function hl(e){var n=Ja(e);if(Se(n))return e}function _p(e,n){if(e==="change")return n}var xp=!1;if(Fi){var cc;if(Fi){var fc="oninput"in document;if(!fc){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),fc=typeof yp.oninput=="function"}cc=fc}else cc=!1;xp=cc&&(!document.documentMode||9<document.documentMode)}function Sp(){Hs&&(Hs.detachEvent("onpropertychange",Mp),Gs=Hs=null)}function Mp(e){if(e.propertyName==="value"&&hl(Gs)){var n=[];vp(n,Gs,e,ec(e)),rp(Rx,n)}}function wx(e,n,r){e==="focusin"?(Sp(),Hs=n,Gs=r,Hs.attachEvent("onpropertychange",Mp)):e==="focusout"&&Sp()}function Cx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Gs)}function Dx(e,n){if(e==="click")return hl(n)}function Ux(e,n){if(e==="input"||e==="change")return hl(n)}function Lx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Lx;function Vs(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var c=r[l];if(!Ge.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tp(e,n){var r=Ep(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Ep(r)}}function bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pn(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=pn(e.document)}return n}function hc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Nx=Fi&&"documentMode"in document&&11>=document.documentMode,Lr=null,dc=null,ks=null,pc=!1;function Rp(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pc||Lr==null||Lr!==pn(l)||(l=Lr,"selectionStart"in l&&hc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ks&&Vs(ks,l)||(ks=l,l=Ql(dc,"onSelect"),0<l.length&&(n=new cl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=Lr)))}function tr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Nr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},mc={},wp={};Fi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function er(e){if(mc[e])return mc[e];if(!Nr[e])return e;var n=Nr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in wp)return mc[e]=n[r];return e}var Cp=er("animationend"),Dp=er("animationiteration"),Up=er("animationstart"),Ox=er("transitionrun"),Px=er("transitionstart"),zx=er("transitioncancel"),Lp=er("transitionend"),Np=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function ci(e,n){Np.set(e,n),zi(n,[e])}var Op=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var r=Op.get(e);return r!==void 0?r:(n={value:e,source:n,stack:qe(n)},Op.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var ti=[],Or=0,vc=0;function dl(){for(var e=Or,n=vc=Or=0;n<e;){var r=ti[n];ti[n++]=null;var l=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var d=ti[n];if(ti[n++]=null,l!==null&&c!==null){var M=l.pending;M===null?c.next=c:(c.next=M.next,M.next=c),l.pending=c}d!==0&&Pp(r,c,d)}}function pl(e,n,r,l){ti[Or++]=e,ti[Or++]=n,ti[Or++]=r,ti[Or++]=l,vc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _c(e,n,r,l){return pl(e,n,r,l),ml(e)}function Pr(e,n){return pl(e,null,null,n),ml(e)}function Pp(e,n,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var c=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-zt(r),e=d.hiddenUpdates,l=e[c],l===null?e[c]=[n]:l.push(n),n.lane=r|536870912),d):null}function ml(e){if(50<mo)throw mo=0,bf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function Bx(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,r,l){return new Bx(e,n,r,l)}function xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var r=e.alternate;return r===null?(r=Xn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function zp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,r,l,c,d){var M=0;if(l=e,typeof e=="function")xc(e)&&(M=1);else if(typeof e=="string")M=Fy(e,r,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Xn(31,r,n,c),e.elementType=U,e.lanes=d,e;case E:return nr(r.children,c,d,n);case T:M=8,c|=24;break;case y:return e=Xn(12,r,n,c|2),e.elementType=y,e.lanes=d,e;case I:return e=Xn(13,r,n,c),e.elementType=I,e.lanes=d,e;case H:return e=Xn(19,r,n,c),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case D:M=10;break t;case O:M=9;break t;case C:M=11;break t;case B:M=14;break t;case X:M=16,l=null;break t}M=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Xn(M,r,n,c),n.elementType=e,n.type=l,n.lanes=d,n}function nr(e,n,r,l){return e=Xn(7,e,l,n),e.lanes=r,e}function yc(e,n,r){return e=Xn(6,e,null,n),e.lanes=r,e}function Sc(e,n,r){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Ir=0,vl=null,_l=0,ei=[],ni=0,ir=null,Gi=1,Vi="";function ar(e,n){Br[Ir++]=_l,Br[Ir++]=vl,vl=e,_l=n}function Bp(e,n,r){ei[ni++]=Gi,ei[ni++]=Vi,ei[ni++]=ir,ir=e;var l=Gi;e=Vi;var c=32-zt(l)-1;l&=~(1<<c),r+=1;var d=32-zt(n)+c;if(30<d){var M=c-c%5;d=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Gi=1<<32-zt(n)+c|r<<c|l,Vi=d+e}else Gi=1<<d|r<<c|l,Vi=e}function Mc(e){e.return!==null&&(ar(e,1),Bp(e,1,0))}function Ec(e){for(;e===vl;)vl=Br[--Ir],Br[Ir]=null,_l=Br[--Ir],Br[Ir]=null;for(;e===ir;)ir=ei[--ni],ei[ni]=null,Vi=ei[--ni],ei[ni]=null,Gi=ei[--ni],ei[ni]=null}var Ln=null,Qe=null,Re=!1,rr=null,Si=!1,Tc=Error(a(519));function sr(e){var n=Error(a(418,""));throw qs($n(n,e)),Tc}function Ip(e){var n=e.stateNode,r=e.type,l=e.memoizedProps;switch(n[on]=e,n[Sn]=l,r){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(r=0;r<vo.length;r++)_e(vo[r],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ve(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Pe(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mn(n,l.value,l.defaultValue,l.children),Pe(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||e0(n.textContent,r)?(l.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),l.onScroll!=null&&_e("scroll",n),l.onScrollEnd!=null&&_e("scrollend",n),l.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||sr(e)}function Fp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Ln=Ln.return}}function Xs(e){if(e!==Ln)return!1;if(!Re)return Fp(e),Re=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Gf(e.type,e.memoizedProps)),r=!r),r&&Qe&&sr(e),Fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){Qe=hi(e.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}Qe=null}}else n===27?(n=Qe,La(e.type)?(e=Wf,Wf=null,Qe=e):Qe=n):Qe=Ln?hi(e.stateNode.nextSibling):null;return!0}function Ws(){Qe=Ln=null,Re=!1}function Hp(){var e=rr;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),rr=null),e}function qs(e){rr===null?rr=[e]:rr.push(e)}var bc=tt(null),or=null,ki=null;function va(e,n,r){Mt(bc,n._currentValue),n._currentValue=r}function Xi(e){e._currentValue=bc.current,yt(bc)}function Ac(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function Rc(e,n,r,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var M=c.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=c;for(var P=0;P<n.length;P++)if(A.context===n[P]){d.lanes|=r,A=d.alternate,A!==null&&(A.lanes|=r),Ac(d.return,r,e),l||(M=null);break t}d=A.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(a(341));M.lanes|=r,d=M.alternate,d!==null&&(d.lanes|=r),Ac(M,r,e),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===e){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function Ys(e,n,r,l){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var A=c.type;kn(c.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(c===wt.current){if(M=c.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Eo):e=[Eo])}c=c.return}e!==null&&Rc(n,e,r,l),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Gp(or,e)}function yl(e,n){return or===null&&lr(e),Gp(e,n)}function Gp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ki===null){if(e===null)throw Error(a(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return r}var Ix=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},Fx=s.unstable_scheduleCallback,Hx=s.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Ix,data:new Map,refCount:0}}function js(e){e.refCount--,e.refCount===0&&Fx(Hx,function(){e.controller.abort()})}var Zs=null,Cc=0,Fr=0,Hr=null;function Gx(e,n){if(Zs===null){var r=Zs=[];Cc=0,Fr=Lf(),Hr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Cc++,n.then(Vp,Vp),n}function Vp(){if(--Cc===0&&Zs!==null){Hr!==null&&(Hr.status="fulfilled");var e=Zs;Zs=null,Fr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Vx(e,n){var r=[],l={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),l}var kp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Gx(e,n),kp!==null&&kp(e,n)};var ur=tt(null);function Dc(){var e=ur.current;return e!==null?e:We.pooledCache}function Sl(e,n){n===null?Mt(ur,ur.current):Mt(ur,n.pool)}function Xp(){var e=Dc();return e===null?null:{parent:un._currentValue,pool:e}}var Ks=Error(a(460)),Wp=Error(a(474)),Ml=Error(a(542)),Uc={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function El(){}function Yp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(El,El),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e;default:if(typeof n.status=="string")n.then(El,El);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e}throw Qs=n,Ks}}var Qs=null;function jp(){if(Qs===null)throw Error(a(459));var e=Qs;return Qs=null,e}function Zp(e){if(e===Ks||e===Ml)throw Error(a(483))}var _a=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=ml(e),Pp(e,null,r),n}return pl(e,l,n,r),ml(e)}function Js(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Ht(e,r)}}function Oc(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=M:d=d.next=M,r=r.next}while(r!==null);d===null?c=d=n:d=d.next=n}else c=d=n;r={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Pc=!1;function $s(){if(Pc){var e=Hr;if(e!==null)throw e}}function to(e,n,r,l){Pc=!1;var c=e.updateQueue;_a=!1;var d=c.firstBaseUpdate,M=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var P=A,$=P.next;P.next=null,M===null?d=$:M.next=$,M=P;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==M&&(A===null?ft.firstBaseUpdate=$:A.next=$,ft.lastBaseUpdate=P))}if(d!==null){var _t=c.baseState;M=0,ft=$=P=null,A=d;do{var nt=A.lane&-536870913,at=nt!==A.lane;if(at?(Me&nt)===nt:(l&nt)===nt){nt!==0&&nt===Fr&&(Pc=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=e,$t=A;nt=n;var Ie=r;switch($t.tag){case 1:if(ie=$t.payload,typeof ie=="function"){_t=ie.call(Ie,_t,nt);break t}_t=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=$t.payload,nt=typeof ie=="function"?ie.call(Ie,_t,nt):ie,nt==null)break t;_t=g({},_t,nt);break t;case 2:_a=!0}}nt=A.callback,nt!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?($=ft=at,P=_t):ft=ft.next=at,M|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;at=A,A=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ft===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ft,d===null&&(c.shared.lanes=0),wa|=M,e.lanes=M,e.memoizedState=_t}}function Kp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Qp(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Kp(r[e],n)}var Gr=tt(null),Tl=tt(0);function Jp(e,n){e=Qi,Mt(Tl,e),Mt(Gr,n),Qi=e|n.baseLanes}function zc(){Mt(Tl,Qi),Mt(Gr,Gr.current)}function Bc(){Qi=Tl.current,yt(Gr),yt(Tl)}var Sa=0,he=null,ze=null,an=null,bl=!1,Vr=!1,cr=!1,Al=0,eo=0,kr=null,kx=0;function tn(){throw Error(a(321))}function Ic(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!kn(e[r],n[r]))return!1;return!0}function Fc(e,n,r,l,c,d){return Sa=d,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Pm:zm,cr=!1,d=r(l,c),cr=!1,Vr&&(d=tm(n,r,l,c)),$p(e),d}function $p(e){z.H=Ll;var n=ze!==null&&ze.next!==null;if(Sa=0,an=ze=he=null,bl=!1,eo=0,kr=null,n)throw Error(a(300));e===null||gn||(e=e.dependencies,e!==null&&xl(e)&&(gn=!0))}function tm(e,n,r,l){he=e;var c=0;do{if(Vr&&(kr=null),eo=0,Vr=!1,25<=c)throw Error(a(301));if(c+=1,an=ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Kx,d=n(r,l)}while(Vr);return d}function Xx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(he.flags|=1024),n}function Hc(){var e=Al!==0;return Al=0,e}function Gc(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Vc(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Sa=0,an=ze=he=null,Vr=!1,eo=Al=0,kr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?he.memoizedState=an=e:an=an.next=e,an}function rn(){if(ze===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=an===null?he.memoizedState:an.next;if(n!==null)an=n,ze=e;else{if(e===null)throw he.alternate===null?Error(a(467)):Error(a(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},an===null?he.memoizedState=an=e:an=an.next=e}return an}function kc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=eo;return eo+=1,kr===null&&(kr=[]),e=Yp(kr,e,n),n=he,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Pm:zm),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===D)return Rn(e)}throw Error(a(438,String(e)))}function Xc(e){var n=null,r=he.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=kc(),he.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),l=0;l<e;l++)r[l]=w;return n.index++,r}function Wi(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=rn();return Wc(n,ze,e)}function Wc(e,n,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var c=e.baseQueue,d=l.pending;if(d!==null){if(c!==null){var M=c.next;c.next=d.next,d.next=M}n.baseQueue=c=d,l.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var A=M=null,P=null,$=n,ft=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(Me&_t)===_t:(Sa&_t)===_t){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Fr&&(ft=!0);else if((Sa&nt)===nt){$=$.next,nt===Fr&&(ft=!0);continue}else _t={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=_t,M=d):P=P.next=_t,he.lanes|=nt,wa|=nt;_t=$.action,cr&&r(d,_t),d=$.hasEagerState?$.eagerState:r(d,_t)}else nt={lane:_t,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=nt,M=d):P=P.next=nt,he.lanes|=_t,wa|=_t;$=$.next}while($!==null&&$!==n);if(P===null?M=d:P.next=A,!kn(d,e.memoizedState)&&(gn=!0,ft&&(r=Hr,r!==null)))throw r;e.memoizedState=d,e.baseState=M,e.baseQueue=P,l.lastRenderedState=d}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function qc(e){var n=rn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,c=r.pending,d=n.memoizedState;if(c!==null){r.pending=null;var M=c=c.next;do d=e(d,M.action),M=M.next;while(M!==c);kn(d,n.memoizedState)||(gn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,l]}function em(e,n,r){var l=he,c=rn(),d=Re;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var M=!kn((ze||c).memoizedState,r);M&&(c.memoizedState=r,gn=!0),c=c.queue;var A=am.bind(null,l,c,e);if(io(2048,8,A,[e]),c.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,Xr(9,Cl(),im.bind(null,l,c,r,n),null),We===null)throw Error(a(349));d||(Sa&124)!==0||nm(l,n,r)}return r}function nm(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=he.updateQueue,n===null?(n=kc(),he.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function im(e,n,r,l){n.value=r,n.getSnapshot=l,rm(n)&&sm(e)}function am(e,n,r){return r(function(){rm(n)&&sm(e)})}function rm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!kn(e,r)}catch{return!0}}function sm(e){var n=Pr(e,2);n!==null&&Zn(n,e,2)}function Yc(e){var n=Bn();if(typeof e=="function"){var r=e;if(e=r(),cr){ut(!0);try{r()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function om(e,n,r,l){return e.baseState=r,Wc(e,ze,typeof l=="function"?l:Wi)}function Wx(e,n,r,l,c){if(Ul(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};z.T!==null?r(!0):d.isTransition=!1,l(d),r=n.pending,r===null?(d.next=n.pending=d,lm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function lm(e,n){var r=n.action,l=n.payload,c=e.state;if(n.isTransition){var d=z.T,M={};z.T=M;try{var A=r(c,l),P=z.S;P!==null&&P(M,A),um(e,n,A)}catch($){jc(e,n,$)}finally{z.T=d}}else try{d=r(c,l),um(e,n,d)}catch($){jc(e,n,$)}}function um(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){cm(e,n,l)},function(l){return jc(e,n,l)}):cm(e,n,r)}function cm(e,n,r){n.status="fulfilled",n.value=r,fm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,lm(e,r)))}function jc(e,n,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,fm(n),n=n.next;while(n!==l)}e.action=null}function fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hm(e,n){return n}function dm(e,n){if(Re){var r=We.formState;if(r!==null){t:{var l=he;if(Re){if(Qe){e:{for(var c=Qe,d=Si;c.nodeType!==8;){if(!d){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Qe=hi(c.nextSibling),l=c.data==="F!";break t}}sr(l)}l=!1}l&&(n=r[0])}}return r=Bn(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},r.queue=l,r=Lm.bind(null,he,l),l.dispatch=r,l=Yc(!1),d=$c.bind(null,he,!1,l.queue),l=Bn(),c={state:n,dispatch:null,action:e,pending:null},l.queue=c,r=Wx.bind(null,he,c,d,r),c.dispatch=r,l.memoizedState=e,[n,r,!1]}function pm(e){var n=rn();return mm(n,ze,e)}function mm(e,n,r){if(n=Wc(e,n,hm)[0],e=wl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=no(n)}catch(M){throw M===Ks?Ml:M}else l=n;n=rn();var c=n.queue,d=c.dispatch;return r!==n.memoizedState&&(he.flags|=2048,Xr(9,Cl(),qx.bind(null,c,r),null)),[l,d,e]}function qx(e,n){e.action=n}function gm(e){var n=rn(),r=ze;if(r!==null)return mm(n,r,e);rn(),n=n.memoizedState,r=rn();var l=r.queue.dispatch;return r.memoizedState=e,[n,l,!1]}function Xr(e,n,r,l){return e={tag:e,create:r,deps:l,inst:n,next:null},n=he.updateQueue,n===null&&(n=kc(),he.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function vm(){return rn().memoizedState}function Dl(e,n,r,l){var c=Bn();l=l===void 0?null:l,he.flags|=e,c.memoizedState=Xr(1|n,Cl(),r,l)}function io(e,n,r,l){var c=rn();l=l===void 0?null:l;var d=c.memoizedState.inst;ze!==null&&l!==null&&Ic(l,ze.memoizedState.deps)?c.memoizedState=Xr(n,d,r,l):(he.flags|=e,c.memoizedState=Xr(1|n,d,r,l))}function _m(e,n){Dl(8390656,8,e,n)}function xm(e,n){io(2048,8,e,n)}function ym(e,n){return io(4,2,e,n)}function Sm(e,n){return io(4,4,e,n)}function Mm(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Em(e,n,r){r=r!=null?r.concat([e]):null,io(4,4,Mm.bind(null,n,e),r)}function Zc(){}function Tm(e,n){var r=rn();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&Ic(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function bm(e,n){var r=rn();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&Ic(n,l[1]))return l[0];if(l=e(),cr){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[l,n],l}function Kc(e,n,r){return r===void 0||(Sa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=wg(),he.lanes|=e,wa|=e,r)}function Am(e,n,r,l){return kn(r,n)?r:Gr.current!==null?(e=Kc(e,r,l),kn(e,n)||(gn=!0),e):(Sa&42)===0?(gn=!0,e.memoizedState=r):(e=wg(),he.lanes|=e,wa|=e,n)}function Rm(e,n,r,l,c){var d=K.p;K.p=d!==0&&8>d?d:8;var M=z.T,A={};z.T=A,$c(e,!1,n,r);try{var P=c(),$=z.S;if($!==null&&$(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=Vx(P,l);ao(e,n,ft,jn(e))}else ao(e,n,l,jn(e))}catch(_t){ao(e,n,{then:function(){},status:"rejected",reason:_t},jn())}finally{K.p=d,z.T=M}}function Yx(){}function Qc(e,n,r,l){if(e.tag!==5)throw Error(a(476));var c=wm(e).queue;Rm(e,c,n,j,r===null?Yx:function(){return Cm(e),r(l)})}function wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:j},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cm(e){var n=wm(e).next.queue;ao(e,n,{},jn())}function Jc(){return Rn(Eo)}function Dm(){return rn().memoizedState}function Um(){return rn().memoizedState}function jx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=jn();e=xa(r);var l=ya(n,e,r);l!==null&&(Zn(l,n,r),Js(l,n,r)),n={cache:wc()},e.payload=n;return}n=n.return}}function Zx(e,n,r){var l=jn();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Ul(e)?Nm(n,r):(r=_c(e,n,r,l),r!==null&&(Zn(r,e,l),Om(r,n,l)))}function Lm(e,n,r){var l=jn();ao(e,n,r,l)}function ao(e,n,r,l){var c={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Nm(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,A=d(M,r);if(c.hasEagerState=!0,c.eagerState=A,kn(A,M))return pl(e,n,c,0),We===null&&dl(),!1}catch{}finally{}if(r=_c(e,n,c,l),r!==null)return Zn(r,e,l),Om(r,n,l),!0}return!1}function $c(e,n,r,l){if(l={lane:2,revertLane:Lf(),action:l,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(a(479))}else n=_c(e,r,l,2),n!==null&&Zn(n,e,2)}function Ul(e){var n=e.alternate;return e===he||n!==null&&n===he}function Nm(e,n){Vr=bl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Om(e,n,r){if((r&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Ht(e,r)}}var Ll={readContext:Rn,use:Rl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Pm={readContext:Rn,use:Rl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:_m,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Dl(4194308,4,Mm.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Dl(4194308,4,e,n)},useInsertionEffect:function(e,n){Dl(4,2,e,n)},useMemo:function(e,n){var r=Bn();n=n===void 0?null:n;var l=e();if(cr){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[l,n],l},useReducer:function(e,n,r){var l=Bn();if(r!==void 0){var c=r(n);if(cr){ut(!0);try{r(n)}finally{ut(!1)}}}else c=n;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=Zx.bind(null,he,e),[l.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Yc(e);var n=e.queue,r=Lm.bind(null,he,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Zc,useDeferredValue:function(e,n){var r=Bn();return Kc(r,e,n)},useTransition:function(){var e=Yc(!1);return e=Rm.bind(null,he,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var l=he,c=Bn();if(Re){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),We===null)throw Error(a(349));(Me&124)!==0||nm(l,n,r)}c.memoizedState=r;var d={value:r,getSnapshot:n};return c.queue=d,_m(am.bind(null,l,d,e),[e]),l.flags|=2048,Xr(9,Cl(),im.bind(null,l,d,r,n),null),r},useId:function(){var e=Bn(),n=We.identifierPrefix;if(Re){var r=Vi,l=Gi;r=(l&~(1<<32-zt(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=Al++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=kx++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Jc,useFormState:dm,useActionState:dm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=$c.bind(null,he,!0,r),r.dispatch=n,[e,n]},useMemoCache:Xc,useCacheRefresh:function(){return Bn().memoizedState=jx.bind(null,he)}},zm={readContext:Rn,use:Rl,useCallback:Tm,useContext:Rn,useEffect:xm,useImperativeHandle:Em,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:bm,useReducer:wl,useRef:vm,useState:function(){return wl(Wi)},useDebugValue:Zc,useDeferredValue:function(e,n){var r=rn();return Am(r,ze.memoizedState,e,n)},useTransition:function(){var e=wl(Wi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Jc,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var r=rn();return om(r,ze,e,n)},useMemoCache:Xc,useCacheRefresh:Um},Kx={readContext:Rn,use:Rl,useCallback:Tm,useContext:Rn,useEffect:xm,useImperativeHandle:Em,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:bm,useReducer:qc,useRef:vm,useState:function(){return qc(Wi)},useDebugValue:Zc,useDeferredValue:function(e,n){var r=rn();return ze===null?Kc(r,e,n):Am(r,ze.memoizedState,e,n)},useTransition:function(){var e=qc(Wi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Jc,useFormState:gm,useActionState:gm,useOptimistic:function(e,n){var r=rn();return ze!==null?om(r,ze,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Xc,useCacheRefresh:Um},Wr=null,ro=0;function Nl(e){var n=ro;return ro+=1,Wr===null&&(Wr=[]),Yp(Wr,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bm(e){var n=e._init;return n(e._payload)}function Im(e){function n(q,G){if(e){var Q=q.deletions;Q===null?(q.deletions=[G],q.flags|=16):Q.push(G)}}function r(q,G){if(!e)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function l(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Hi(q,G),q.index=0,q.sibling=null,q}function d(q,G,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<G?(q.flags|=67108866,G):Q):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,G,Q,pt){return G===null||G.tag!==6?(G=yc(Q,q.mode,pt),G.return=q,G):(G=c(G,Q),G.return=q,G)}function P(q,G,Q,pt){var Gt=Q.type;return Gt===E?ft(q,G,Q.props.children,pt,Q.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&Bm(Gt)===G.type)?(G=c(G,Q.props),so(G,Q),G.return=q,G):(G=gl(Q.type,Q.key,Q.props,null,q.mode,pt),so(G,Q),G.return=q,G)}function $(q,G,Q,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Sc(Q,q.mode,pt),G.return=q,G):(G=c(G,Q.children||[]),G.return=q,G)}function ft(q,G,Q,pt,Gt){return G===null||G.tag!==7?(G=nr(Q,q.mode,pt,Gt),G.return=q,G):(G=c(G,Q),G.return=q,G)}function _t(q,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=yc(""+G,q.mode,Q),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case _:return Q=gl(G.type,G.key,G.props,null,q.mode,Q),so(Q,G),Q.return=q,Q;case S:return G=Sc(G,q.mode,Q),G.return=q,G;case X:var pt=G._init;return G=pt(G._payload),_t(q,G,Q)}if(ct(G)||lt(G))return G=nr(G,q.mode,Q,null),G.return=q,G;if(typeof G.then=="function")return _t(q,Nl(G),Q);if(G.$$typeof===D)return _t(q,yl(q,G),Q);Ol(q,G)}return null}function nt(q,G,Q,pt){var Gt=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:A(q,G,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Gt?P(q,G,Q,pt):null;case S:return Q.key===Gt?$(q,G,Q,pt):null;case X:return Gt=Q._init,Q=Gt(Q._payload),nt(q,G,Q,pt)}if(ct(Q)||lt(Q))return Gt!==null?null:ft(q,G,Q,pt,null);if(typeof Q.then=="function")return nt(q,G,Nl(Q),pt);if(Q.$$typeof===D)return nt(q,G,yl(q,Q),pt);Ol(q,Q)}return null}function at(q,G,Q,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(Q)||null,A(G,q,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case _:return q=q.get(pt.key===null?Q:pt.key)||null,P(G,q,pt,Gt);case S:return q=q.get(pt.key===null?Q:pt.key)||null,$(G,q,pt,Gt);case X:var pe=pt._init;return pt=pe(pt._payload),at(q,G,Q,pt,Gt)}if(ct(pt)||lt(pt))return q=q.get(Q)||null,ft(G,q,pt,Gt,null);if(typeof pt.then=="function")return at(q,G,Q,Nl(pt),Gt);if(pt.$$typeof===D)return at(q,G,Q,yl(G,pt),Gt);Ol(G,pt)}return null}function ie(q,G,Q,pt){for(var Gt=null,pe=null,qt=G,te=G=0,_n=null;qt!==null&&te<Q.length;te++){qt.index>te?(_n=qt,qt=null):_n=qt.sibling;var be=nt(q,qt,Q[te],pt);if(be===null){qt===null&&(qt=_n);break}e&&qt&&be.alternate===null&&n(q,qt),G=d(be,G,te),pe===null?Gt=be:pe.sibling=be,pe=be,qt=_n}if(te===Q.length)return r(q,qt),Re&&ar(q,te),Gt;if(qt===null){for(;te<Q.length;te++)qt=_t(q,Q[te],pt),qt!==null&&(G=d(qt,G,te),pe===null?Gt=qt:pe.sibling=qt,pe=qt);return Re&&ar(q,te),Gt}for(qt=l(qt);te<Q.length;te++)_n=at(qt,q,te,Q[te],pt),_n!==null&&(e&&_n.alternate!==null&&qt.delete(_n.key===null?te:_n.key),G=d(_n,G,te),pe===null?Gt=_n:pe.sibling=_n,pe=_n);return e&&qt.forEach(function(Ba){return n(q,Ba)}),Re&&ar(q,te),Gt}function $t(q,G,Q,pt){if(Q==null)throw Error(a(151));for(var Gt=null,pe=null,qt=G,te=G=0,_n=null,be=Q.next();qt!==null&&!be.done;te++,be=Q.next()){qt.index>te?(_n=qt,qt=null):_n=qt.sibling;var Ba=nt(q,qt,be.value,pt);if(Ba===null){qt===null&&(qt=_n);break}e&&qt&&Ba.alternate===null&&n(q,qt),G=d(Ba,G,te),pe===null?Gt=Ba:pe.sibling=Ba,pe=Ba,qt=_n}if(be.done)return r(q,qt),Re&&ar(q,te),Gt;if(qt===null){for(;!be.done;te++,be=Q.next())be=_t(q,be.value,pt),be!==null&&(G=d(be,G,te),pe===null?Gt=be:pe.sibling=be,pe=be);return Re&&ar(q,te),Gt}for(qt=l(qt);!be.done;te++,be=Q.next())be=at(qt,q,te,be.value,pt),be!==null&&(e&&be.alternate!==null&&qt.delete(be.key===null?te:be.key),G=d(be,G,te),pe===null?Gt=be:pe.sibling=be,pe=be);return e&&qt.forEach(function(Qy){return n(q,Qy)}),Re&&ar(q,te),Gt}function Ie(q,G,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:t:{for(var Gt=Q.key;G!==null;){if(G.key===Gt){if(Gt=Q.type,Gt===E){if(G.tag===7){r(q,G.sibling),pt=c(G,Q.props.children),pt.return=q,q=pt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&Bm(Gt)===G.type){r(q,G.sibling),pt=c(G,Q.props),so(pt,Q),pt.return=q,q=pt;break t}r(q,G);break}else n(q,G);G=G.sibling}Q.type===E?(pt=nr(Q.props.children,q.mode,pt,Q.key),pt.return=q,q=pt):(pt=gl(Q.type,Q.key,Q.props,null,q.mode,pt),so(pt,Q),pt.return=q,q=pt)}return M(q);case S:t:{for(Gt=Q.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){r(q,G.sibling),pt=c(G,Q.children||[]),pt.return=q,q=pt;break t}else{r(q,G);break}else n(q,G);G=G.sibling}pt=Sc(Q,q.mode,pt),pt.return=q,q=pt}return M(q);case X:return Gt=Q._init,Q=Gt(Q._payload),Ie(q,G,Q,pt)}if(ct(Q))return ie(q,G,Q,pt);if(lt(Q)){if(Gt=lt(Q),typeof Gt!="function")throw Error(a(150));return Q=Gt.call(Q),$t(q,G,Q,pt)}if(typeof Q.then=="function")return Ie(q,G,Nl(Q),pt);if(Q.$$typeof===D)return Ie(q,G,yl(q,Q),pt);Ol(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(r(q,G.sibling),pt=c(G,Q),pt.return=q,q=pt):(r(q,G),pt=yc(Q,q.mode,pt),pt.return=q,q=pt),M(q)):r(q,G)}return function(q,G,Q,pt){try{ro=0;var Gt=Ie(q,G,Q,pt);return Wr=null,Gt}catch(qt){if(qt===Ks||qt===Ml)throw qt;var pe=Xn(29,qt,null,q.mode);return pe.lanes=pt,pe.return=q,pe}finally{}}}var qr=Im(!0),Fm=Im(!1),ii=tt(null),Mi=null;function Ma(e){var n=e.alternate;Mt(cn,cn.current&1),Mt(ii,e),Mi===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(Mi=e)}function Hm(e){if(e.tag===22){if(Mt(cn,cn.current),Mt(ii,e),Mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Mi=e)}}else Ea()}function Ea(){Mt(cn,cn.current),Mt(ii,ii.current)}function qi(e){yt(ii),Mi===e&&(Mi=null),yt(cn)}var cn=tt(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Xf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function tf(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:g({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ef={enqueueSetState:function(e,n,r){e=e._reactInternals;var l=jn(),c=xa(l);c.payload=n,r!=null&&(c.callback=r),n=ya(e,c,l),n!==null&&(Zn(n,e,l),Js(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=jn(),c=xa(l);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=ya(e,c,l),n!==null&&(Zn(n,e,l),Js(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=jn(),l=xa(r);l.tag=2,n!=null&&(l.callback=n),n=ya(e,l,r),n!==null&&(Zn(n,e,r),Js(n,e,r))}};function Gm(e,n,r,l,c,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,M):n.prototype&&n.prototype.isPureReactComponent?!Vs(r,l)||!Vs(c,d):!0}function Vm(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function fr(e,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(e=e.defaultProps){r===n&&(r=g({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function km(e){zl(e)}function Xm(e){console.error(e)}function Wm(e){zl(e)}function Bl(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function qm(e,n,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nf(e,n,r){return r=xa(r),r.tag=3,r.payload={element:null},r.callback=function(){Bl(e,n)},r}function Ym(e){return e=xa(e),e.tag=3,e}function jm(e,n,r,l){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=l.value;e.payload=function(){return c(d)},e.callback=function(){qm(n,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){qm(n,r,l),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Qx(e,n,r,l,c){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&Ys(n,r,c,!0),r=ii.current,r!==null){switch(r.tag){case 13:return Mi===null?Rf():r.alternate===null&&Je===0&&(Je=3),r.flags&=-257,r.flags|=65536,r.lanes=c,l===Uc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Cf(e,l,c)),!1;case 22:return r.flags|=65536,l===Uc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Cf(e,l,c)),!1}throw Error(a(435,r.tag))}return Cf(e,l,c),Rf(),!1}if(Re)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==Tc&&(e=Error(a(422),{cause:l}),qs($n(e,r)))):(l!==Tc&&(n=Error(a(423),{cause:l}),qs($n(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=$n(l,r),c=nf(e.stateNode,l,c),Oc(e,c),Je!==4&&(Je=2)),!1;var d=Error(a(520),{cause:l});if(d=$n(d,r),po===null?po=[d]:po.push(d),Je!==4&&(Je=2),n===null)return!0;l=$n(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=nf(r.stateNode,l,e),Oc(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Ym(c),jm(c,e,r,l),Oc(r,c),!1}r=r.return}while(r!==null);return!1}var Zm=Error(a(461)),gn=!1;function En(e,n,r,l){n.child=e===null?Fm(n,null,r,l):qr(n,e.child,r,l)}function Km(e,n,r,l,c){r=r.render;var d=n.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return lr(n),l=Fc(e,n,r,M,d,c),A=Hc(),e!==null&&!gn?(Gc(e,n,c),Yi(e,n,c)):(Re&&A&&Mc(n),n.flags|=1,En(e,n,l,c),n.child)}function Qm(e,n,r,l,c){if(e===null){var d=r.type;return typeof d=="function"&&!xc(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Jm(e,n,d,l,c)):(e=gl(r.type,null,l,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!ff(e,c)){var M=d.memoizedProps;if(r=r.compare,r=r!==null?r:Vs,r(M,l)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Hi(d,l),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,r,l,c){if(e!==null){var d=e.memoizedProps;if(Vs(d,l)&&e.ref===n.ref)if(gn=!1,n.pendingProps=l=d,ff(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return af(e,n,r,l,c)}function $m(e,n,r){var l=n.pendingProps,c=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=d!==null?d.baseLanes|r:r,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~l}else n.childLanes=0,n.child=null;return tg(e,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,d!==null?d.cachePool:null),d!==null?Jp(n,d):zc(),Hm(n);else return n.lanes=n.childLanes=536870912,tg(e,n,d!==null?d.baseLanes|r:r,r)}else d!==null?(Sl(n,d.cachePool),Jp(n,d),Ea(),n.memoizedState=null):(e!==null&&Sl(n,null),zc(),Ea());return En(e,n,c,r),n.child}function tg(e,n,r,l){var c=Dc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},e!==null&&Sl(n,null),zc(),Hm(n),e!==null&&Ys(e,n,l,!0),null}function Il(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function af(e,n,r,l,c){return lr(n),r=Fc(e,n,r,l,void 0,c),l=Hc(),e!==null&&!gn?(Gc(e,n,c),Yi(e,n,c)):(Re&&l&&Mc(n),n.flags|=1,En(e,n,r,c),n.child)}function eg(e,n,r,l,c,d){return lr(n),n.updateQueue=null,r=tm(n,l,r,c),$p(e),l=Hc(),e!==null&&!gn?(Gc(e,n,d),Yi(e,n,d)):(Re&&l&&Mc(n),n.flags|=1,En(e,n,r,d),n.child)}function ng(e,n,r,l,c){if(lr(n),n.stateNode===null){var d=zr,M=r.contextType;typeof M=="object"&&M!==null&&(d=Rn(M)),d=new r(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},Lc(n),M=r.contextType,d.context=typeof M=="object"&&M!==null?Rn(M):zr,d.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(tf(n,r,M,l),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&ef.enqueueReplaceState(d,d.state,null),to(n,l,d,c),$s(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,P=fr(r,A);d.props=P;var $=d.context,ft=r.contextType;M=zr,typeof ft=="object"&&ft!==null&&(M=Rn(ft));var _t=r.getDerivedStateFromProps;ft=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||$!==M)&&Vm(n,d,l,M),_a=!1;var nt=n.memoizedState;d.state=nt,to(n,l,d,c),$s(),$=n.memoizedState,A||nt!==$||_a?(typeof _t=="function"&&(tf(n,r,_t,l),$=n.memoizedState),(P=_a||Gm(n,r,P,l,nt,$,M))?(ft||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=$),d.props=l,d.state=$,d.context=M,l=P):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,Nc(e,n),M=n.memoizedProps,ft=fr(r,M),d.props=ft,_t=n.pendingProps,nt=d.context,$=r.contextType,P=zr,typeof $=="object"&&$!==null&&(P=Rn($)),A=r.getDerivedStateFromProps,($=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==_t||nt!==P)&&Vm(n,d,l,P),_a=!1,nt=n.memoizedState,d.state=nt,to(n,l,d,c),$s();var at=n.memoizedState;M!==_t||nt!==at||_a||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof A=="function"&&(tf(n,r,A,l),at=n.memoizedState),(ft=_a||Gm(n,r,ft,l,nt,at,P)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,at,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,at,P)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=at),d.props=l,d.state=at,d.context=P,l=ft):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),l=!1)}return d=l,Il(e,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&l?(n.child=qr(n,e.child,null,c),n.child=qr(n,null,r,c)):En(e,n,r,c),n.memoizedState=d.state,e=n.child):e=Yi(e,n,c),e}function ig(e,n,r,l){return Ws(),n.flags|=256,En(e,n,r,l),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:Xp()}}function of(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=ai),e}function ag(e,n,r){var l=n.pendingProps,c=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?Ma(n):Ea(),Re){var A=Qe,P;if(P=A){t:{for(P=A,A=Si;P.nodeType!==8;){if(!A){A=null;break t}if(P=hi(P.nextSibling),P===null){A=null;break t}}A=P}A!==null?(n.memoizedState={dehydrated:A,treeContext:ir!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=A,P.return=n,n.child=P,Ln=n,Qe=null,P=!0):P=!1}P||sr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Xf(A)?n.lanes=32:n.lanes=536870912,null;qi(n)}return A=l.children,l=l.fallback,c?(Ea(),c=n.mode,A=Fl({mode:"hidden",children:A},c),l=nr(l,c,r,null),A.return=n,l.return=n,A.sibling=l,n.child=A,c=n.child,c.memoizedState=sf(r),c.childLanes=of(e,M,r),n.memoizedState=rf,l):(Ma(n),lf(n,A))}if(P=e.memoizedState,P!==null&&(A=P.dehydrated,A!==null)){if(d)n.flags&256?(Ma(n),n.flags&=-257,n=uf(e,n,r)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),c=l.fallback,A=n.mode,l=Fl({mode:"visible",children:l.children},A),c=nr(c,A,r,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,qr(n,e.child,null,r),l=n.child,l.memoizedState=sf(r),l.childLanes=of(e,M,r),n.memoizedState=rf,n=c);else if(Ma(n),Xf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var $=M.dgst;M=$,l=Error(a(419)),l.stack="",l.digest=M,qs({value:l,source:null,stack:null}),n=uf(e,n,r)}else if(gn||Ys(e,n,r,!1),M=(r&e.childLanes)!==0,gn||M){if(M=We,M!==null&&(l=r&-r,l=(l&42)!==0?1:ae(l),l=(l&(M.suspendedLanes|r))!==0?0:l,l!==0&&l!==P.retryLane))throw P.retryLane=l,Pr(e,l),Zn(M,e,l),Zm;A.data==="$?"||Rf(),n=uf(e,n,r)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Qe=hi(A.nextSibling),Ln=n,Re=!0,rr=null,Si=!1,e!==null&&(ei[ni++]=Gi,ei[ni++]=Vi,ei[ni++]=ir,Gi=e.id,Vi=e.overflow,ir=n),n=lf(n,l.children),n.flags|=4096);return n}return c?(Ea(),c=l.fallback,A=n.mode,P=e.child,$=P.sibling,l=Hi(P,{mode:"hidden",children:l.children}),l.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Hi($,c):(c=nr(c,A,r,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,A=e.child.memoizedState,A===null?A=sf(r):(P=A.cachePool,P!==null?($=un._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Xp(),A={baseLanes:A.baseLanes|r,cachePool:P}),c.memoizedState=A,c.childLanes=of(e,M,r),n.memoizedState=rf,l):(Ma(n),r=e.child,e=r.sibling,r=Hi(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=r,n.memoizedState=null,r)}function lf(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function uf(e,n,r){return qr(n,e.child,null,r),e=lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rg(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Ac(e.return,n,r)}function cf(e,n,r,l,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=r,d.tailMode=c)}function sg(e,n,r){var l=n.pendingProps,c=l.revealOrder,d=l.tail;if(En(e,n,l.children,r),l=cn.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rg(e,r,n);else if(e.tag===19)rg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Mt(cn,l),c){case"forwards":for(r=n.child,c=null;r!==null;)e=r.alternate,e!==null&&Pl(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),cf(n,!1,c,r,d);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Pl(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}cf(n,!0,r,null,d);break;case"together":cf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Ys(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Hi(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Hi(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function Jx(e,n,r){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),va(n,un,e.memoizedState.cache),Ws();break;case 27:case 5:Jt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ma(n),n.flags|=128,null):(r&n.child.childLanes)!==0?ag(e,n,r):(Ma(n),e=Yi(e,n,r),e!==null?e.sibling:null);Ma(n);break;case 19:var c=(e.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(Ys(e,n,r,!1),l=(r&n.childLanes)!==0),c){if(l)return sg(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(cn,cn.current),l)break;return null;case 22:case 23:return n.lanes=0,$m(e,n,r);case 24:va(n,un,e.memoizedState.cache)}return Yi(e,n,r)}function og(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!ff(e,r)&&(n.flags&128)===0)return gn=!1,Jx(e,n,r);gn=(e.flags&131072)!==0}else gn=!1,Re&&(n.flags&1048576)!==0&&Bp(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var l=n.elementType,c=l._init;if(l=c(l._payload),n.type=l,typeof l=="function")xc(l)?(e=fr(l,e),n.tag=1,n=ng(null,n,l,e,r)):(n.tag=0,n=af(null,n,l,e,r));else{if(l!=null){if(c=l.$$typeof,c===C){n.tag=11,n=Km(null,n,l,e,r);break t}else if(c===B){n.tag=14,n=Qm(null,n,l,e,r);break t}}throw n=gt(l)||l,Error(a(306,n,""))}}return n;case 0:return af(e,n,n.type,n.pendingProps,r);case 1:return l=n.type,c=fr(l,n.pendingProps),ng(e,n,l,c,r);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var d=n.memoizedState;c=d.element,Nc(e,n),to(n,l,null,r);var M=n.memoizedState;if(l=M.cache,va(n,un,l),l!==d.cache&&Rc(n,[un],r,!0),$s(),l=M.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ig(e,n,l,r);break t}else if(l!==c){c=$n(Error(a(424)),n),qs(c),n=ig(e,n,l,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=hi(e.firstChild),Ln=n,Re=!0,rr=null,Si=!0,r=Fm(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ws(),l===c){n=Yi(e,n,r);break t}En(e,n,l,r)}n=n.child}return n;case 26:return Il(e,n),e===null?(r=f0(n.type,null,n.pendingProps,null))?n.memoizedState=r:Re||(r=n.type,e=n.pendingProps,l=$l(Et.current).createElement(r),l[on]=n,l[Sn]=e,bn(l,r,e),nn(l),n.stateNode=l):n.memoizedState=f0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Jt(n),e===null&&Re&&(l=n.stateNode=l0(n.type,n.pendingProps,Et.current),Ln=n,Si=!0,c=Qe,La(n.type)?(Wf=c,Qe=hi(l.firstChild)):Qe=c),En(e,n,n.pendingProps.children,r),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=l=Qe)&&(l=Ay(l,n.type,n.pendingProps,Si),l!==null?(n.stateNode=l,Ln=n,Qe=hi(l.firstChild),Si=!1,c=!0):c=!1),c||sr(n)),Jt(n),c=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,l=d.children,Gf(c,d)?l=null:M!==null&&Gf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Fc(e,n,Xx,null,null,r),Eo._currentValue=c),Il(e,n),En(e,n,l,r),n.child;case 6:return e===null&&Re&&((e=r=Qe)&&(r=Ry(r,n.pendingProps,Si),r!==null?(n.stateNode=r,Ln=n,Qe=null,e=!0):e=!1),e||sr(n)),null;case 13:return ag(e,n,r);case 4:return Dt(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=qr(n,null,l,r):En(e,n,l,r),n.child;case 11:return Km(e,n,n.type,n.pendingProps,r);case 7:return En(e,n,n.pendingProps,r),n.child;case 8:return En(e,n,n.pendingProps.children,r),n.child;case 12:return En(e,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,va(n,n.type,l.value),En(e,n,l.children,r),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,lr(n),c=Rn(c),l=l(c),n.flags|=1,En(e,n,l,r),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,r);case 15:return Jm(e,n,n.type,n.pendingProps,r);case 19:return sg(e,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},e===null?(r=Fl(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Hi(e.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return $m(e,n,r);case 24:return lr(n),l=Rn(un),e===null?(c=Dc(),c===null&&(c=We,d=wc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),n.memoizedState={parent:l,cache:c},Lc(n),va(n,un,c)):((e.lanes&r)!==0&&(Nc(e,n),to(n,null,null,r),$s()),c=e.memoizedState,d=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,un,l)):(l=d.cache,va(n,un,l),l!==c.cache&&Rc(n,[un],r,!0))),En(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ji(e){e.flags|=4}function lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g0(n)){if(n=ii.current,n!==null&&((Me&4194048)===Me?Mi!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Mi))throw Qs=Uc,Wp;e.flags|=8192}}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,Kr|=n)}function oo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function $x(e,n,r){var l=n.pendingProps;switch(Ec(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return r=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Xi(un),ue(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xs(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hp())),Ze(n),null;case 26:return r=n.memoizedState,e===null?(ji(n),r!==null?(Ze(n),lg(n,r)):(Ze(n),n.flags&=-16777217)):r?r!==e.memoizedState?(ji(n),Ze(n),lg(n,r)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==l&&ji(n),Ze(n),n.flags&=-16777217),null;case 27:Oe(n),r=Et.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ji(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ze(n),null}e=J.current,Xs(n)?Ip(n):(e=l0(c,l,r),n.stateNode=e,ji(n))}return Ze(n),null;case 5:if(Oe(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ji(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ze(n),null}if(e=J.current,Xs(n))Ip(n);else{switch(c=$l(Et.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?c.createElement(r,{is:l.is}):c.createElement(r)}}e[on]=n,e[Sn]=l;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ji(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=Et.current,Xs(n)){if(e=n.stateNode,r=n.memoizedProps,l=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||e0(e.nodeValue,r)),e||sr(n)}else e=$l(e).createTextNode(l),e[on]=n,n.stateNode=e}return Ze(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[on]=n}else Ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=Hp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==c&&(l.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Hl(n,n.updateQueue),Ze(n),null;case 4:return ue(),e===null&&zf(n.stateNode.containerInfo),Ze(n),null;case 10:return Xi(n.type),Ze(n),null;case 19:if(yt(cn),c=n.memoizedState,c===null)return Ze(n),null;if(l=(n.flags&128)!==0,d=c.rendering,d===null)if(l)oo(c,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Pl(e),d!==null){for(n.flags|=128,oo(c,!1),e=d.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)zp(r,e),r=r.sibling;return Mt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ge()>kl&&(n.flags|=128,l=!0,oo(c,!1),n.lanes=4194304)}else{if(!l)if(e=Pl(d),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),oo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Re)return Ze(n),null}else 2*ge()-c.renderingStartTime>kl&&r!==536870912&&(n.flags|=128,l=!0,oo(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ge(),n.sibling=null,e=cn.current,Mt(cn,l?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return qi(n),Bc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),r=n.updateQueue,r!==null&&Hl(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),e!==null&&yt(ur),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function ty(e,n){switch(Ec(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(un),ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return yt(cn),null;case 4:return ue(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Bc(),e!==null&&yt(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function ug(e,n){switch(Ec(n),n.tag){case 3:Xi(un),ue();break;case 26:case 27:case 5:Oe(n);break;case 4:ue();break;case 13:qi(n);break;case 19:yt(cn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Bc(),e!==null&&yt(ur);break;case 24:Xi(un)}}function lo(e,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&e)===e){l=void 0;var d=r.create,M=r.inst;l=d(),M.destroy=l}r=r.next}while(r!==c)}}catch(A){ke(n,n.return,A)}}function Ta(e,n,r){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var d=c.next;l=d;do{if((l.tag&e)===e){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,c=n;var P=r,$=A;try{$()}catch(ft){ke(c,P,ft)}}}l=l.next}while(l!==d)}}catch(ft){ke(n,n.return,ft)}}function cg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Qp(n,r)}catch(l){ke(e,e.return,l)}}}function fg(e,n,r){r.props=fr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){ke(e,n,l)}}function uo(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(c){ke(e,n,c)}}function Ei(e,n){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(c){ke(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){ke(e,n,c)}else r.current=null}function hg(e){var n=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(c){ke(e,e.return,c)}}function hf(e,n,r){try{var l=e.stateNode;Sy(l,e.type,r,n),l[Sn]=n}catch(c){ke(e,e.return,c)}}function dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Jl));else if(l!==4&&(l===27&&La(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(pf(e,n,r),e=e.sibling;e!==null;)pf(e,n,r),e=e.sibling}function Gl(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(l===27&&La(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Gl(e,n,r),e=e.sibling;e!==null;)Gl(e,n,r),e=e.sibling}function pg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,l,r),n[on]=e,n[Sn]=r}catch(d){ke(e,e.return,d)}}var Zi=!1,en=!1,mf=!1,mg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function ey(e,n){if(e=e.containerInfo,Ff=ru,e=Ap(e),hc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var M=0,A=-1,P=-1,$=0,ft=0,_t=e,nt=null;e:for(;;){for(var at;_t!==r||c!==0&&_t.nodeType!==3||(A=M+c),_t!==d||l!==0&&_t.nodeType!==3||(P=M+l),_t.nodeType===3&&(M+=_t.nodeValue.length),(at=_t.firstChild)!==null;)nt=_t,_t=at;for(;;){if(_t===e)break e;if(nt===r&&++$===c&&(A=M),nt===d&&++ft===l&&(P=M),(at=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=at}r=A===-1||P===-1?null:{start:A,end:P}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hf={focusedElem:e,selectionRange:r},ru=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,c=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var ie=fr(r.type,c,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(ie,d),l.__reactInternalSnapshotBeforeUpdate=e}catch($t){ke(r,r.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)kf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function gg(e,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ba(e,r),l&4&&lo(5,r);break;case 1:if(ba(e,r),l&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(M){ke(r,r.return,M)}else{var c=fr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ke(r,r.return,M)}}l&64&&cg(r),l&512&&uo(r,r.return);break;case 3:if(ba(e,r),l&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Qp(e,n)}catch(M){ke(r,r.return,M)}}break;case 27:n===null&&l&4&&pg(r);case 26:case 5:ba(e,r),n===null&&l&4&&hg(r),l&512&&uo(r,r.return);break;case 12:ba(e,r);break;case 13:ba(e,r),l&4&&xg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=cy.bind(null,r),wy(e,r))));break;case 22:if(l=r.memoizedState!==null||Zi,!l){n=n!==null&&n.memoizedState!==null||en,c=Zi;var d=en;Zi=l,(en=n)&&!d?Aa(e,r,(r.subtreeFlags&8772)!==0):ba(e,r),Zi=c,en=d}break;case 30:break;default:ba(e,r)}}function vg(e){var n=e.alternate;n!==null&&(e.alternate=null,vg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&da(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,In=!1;function Ki(e,n,r){for(r=r.child;r!==null;)_g(e,n,r),r=r.sibling}function _g(e,n,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(dt,r)}catch{}switch(r.tag){case 26:en||Ei(r,n),Ki(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:en||Ei(r,n);var l=Ye,c=In;La(r.type)&&(Ye=r.stateNode,In=!1),Ki(e,n,r),xo(r.stateNode),Ye=l,In=c;break;case 5:en||Ei(r,n);case 6:if(l=Ye,c=In,Ye=null,Ki(e,n,r),Ye=l,In=c,Ye!==null)if(In)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(r.stateNode)}catch(d){ke(r,n,d)}else try{Ye.removeChild(r.stateNode)}catch(d){ke(r,n,d)}break;case 18:Ye!==null&&(In?(e=Ye,s0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ro(e)):s0(Ye,r.stateNode));break;case 4:l=Ye,c=In,Ye=r.stateNode.containerInfo,In=!0,Ki(e,n,r),Ye=l,In=c;break;case 0:case 11:case 14:case 15:en||Ta(2,r,n),en||Ta(4,r,n),Ki(e,n,r);break;case 1:en||(Ei(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&fg(r,n,l)),Ki(e,n,r);break;case 21:Ki(e,n,r);break;case 22:en=(l=en)||r.memoizedState!==null,Ki(e,n,r),en=l;break;default:Ki(e,n,r)}}function xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ro(e)}catch(r){ke(n,n.return,r)}}function ny(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mg),n;default:throw Error(a(435,e.tag))}}function gf(e,n){var r=ny(e);n.forEach(function(l){var c=fy.bind(null,e,l);r.has(l)||(r.add(l),l.then(c,c))})}function Wn(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],d=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(La(A.type)){Ye=A.stateNode,In=!1;break t}break;case 5:Ye=A.stateNode,In=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,In=!0;break t}A=A.return}if(Ye===null)throw Error(a(160));_g(d,M,c),Ye=null,In=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yg(n,e),n=n.sibling}var fi=null;function yg(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),l&4&&(Ta(3,e,e.return),lo(3,e),Ta(5,e,e.return));break;case 1:Wn(n,e),qn(e),l&512&&(en||r===null||Ei(r,r.return)),l&64&&Zi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var c=fi;if(Wn(n,e),qn(e),l&512&&(en||r===null||Ei(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,c=c.ownerDocument||c;e:switch(l){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ha]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(l),c.head.insertBefore(d,c.querySelector("head > title"))),bn(d,l,r),d[on]=e,nn(d),l=d;break t;case"link":var M=p0("link","href",c).get(l+(r.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(A,1);break e}}d=c.createElement(l),bn(d,l,r),c.head.appendChild(d);break;case"meta":if(M=p0("meta","content",c).get(l+(r.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(A,1);break e}}d=c.createElement(l),bn(d,l,r),c.head.appendChild(d);break;default:throw Error(a(468,l))}d[on]=e,nn(d),l=d}e.stateNode=l}else m0(c,e.type,e.stateNode);else e.stateNode=d0(c,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?m0(c,e.type,e.stateNode):d0(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hf(e,e.memoizedProps,r.memoizedProps)}break;case 27:Wn(n,e),qn(e),l&512&&(en||r===null||Ei(r,r.return)),r!==null&&l&4&&hf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Wn(n,e),qn(e),l&512&&(en||r===null||Ei(r,r.return)),e.flags&32){c=e.stateNode;try{yi(c,"")}catch(at){ke(e,e.return,at)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,hf(e,c,r!==null?r.memoizedProps:c)),l&1024&&(mf=!0);break;case 6:if(Wn(n,e),qn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(at){ke(e,e.return,at)}}break;case 3:if(nu=null,c=fi,fi=tu(n.containerInfo),Wn(n,e),fi=c,qn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ro(n.containerInfo)}catch(at){ke(e,e.return,at)}mf&&(mf=!1,Sg(e));break;case 4:l=fi,fi=tu(e.stateNode.containerInfo),Wn(n,e),qn(e),fi=l;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Mf=ge()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gf(e,l)));break;case 22:c=e.memoizedState!==null;var P=r!==null&&r.memoizedState!==null,$=Zi,ft=en;if(Zi=$||c,en=ft||P,Wn(n,e),en=ft,Zi=$,qn(e),l&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||P||Zi||en||hr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){P=r=n;try{if(d=P.stateNode,c)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=P.stateNode;var _t=P.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){ke(P,P.return,at)}}}else if(n.tag===6){if(r===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(at){ke(P,P.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,gf(e,r))));break;case 19:Wn(n,e),qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gf(e,l)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var r,l=e.return;l!==null;){if(dg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var c=r.stateNode,d=df(e);Gl(e,d,c);break;case 5:var M=r.stateNode;r.flags&32&&(yi(M,""),r.flags&=-33);var A=df(e);Gl(e,A,M);break;case 3:case 4:var P=r.stateNode.containerInfo,$=df(e);pf(e,$,P);break;default:throw Error(a(161))}}catch(ft){ke(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ba(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hr(n);break;case 1:Ei(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&fg(n,n.return,r),hr(n);break;case 27:xo(n.stateNode);case 26:case 5:Ei(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Aa(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Aa(c,d,r),lo(4,d);break;case 1:if(Aa(c,d,r),l=d,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){ke(l,l.return,$)}if(l=d,c=l.updateQueue,c!==null){var A=l.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Kp(P[c],A)}catch($){ke(l,l.return,$)}}r&&M&64&&cg(d),uo(d,d.return);break;case 27:pg(d);case 26:case 5:Aa(c,d,r),r&&l===null&&M&4&&hg(d),uo(d,d.return);break;case 12:Aa(c,d,r);break;case 13:Aa(c,d,r),r&&M&4&&xg(c,d);break;case 22:d.memoizedState===null&&Aa(c,d,r),uo(d,d.return);break;case 30:break;default:Aa(c,d,r)}n=n.sibling}}function vf(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&js(r))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e))}function Ti(e,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(e,n,r,l),n=n.sibling}function Mg(e,n,r,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,r,l),c&2048&&lo(9,n);break;case 1:Ti(e,n,r,l);break;case 3:Ti(e,n,r,l),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e)));break;case 12:if(c&2048){Ti(e,n,r,l),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){ke(n,n.return,P)}}else Ti(e,n,r,l);break;case 13:Ti(e,n,r,l);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ti(e,n,r,l):co(e,n):d._visibility&2?Ti(e,n,r,l):(d._visibility|=2,Yr(e,n,r,l,(n.subtreeFlags&10256)!==0)),c&2048&&vf(M,n);break;case 24:Ti(e,n,r,l),c&2048&&_f(n.alternate,n);break;default:Ti(e,n,r,l)}}function Yr(e,n,r,l,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,A=r,P=l,$=M.flags;switch(M.tag){case 0:case 11:case 15:Yr(d,M,A,P,c),lo(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&2?Yr(d,M,A,P,c):co(d,M):(ft._visibility|=2,Yr(d,M,A,P,c)),c&&$&2048&&vf(M.alternate,M);break;case 24:Yr(d,M,A,P,c),c&&$&2048&&_f(M.alternate,M);break;default:Yr(d,M,A,P,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,l=n,c=l.flags;switch(l.tag){case 22:co(r,l),c&2048&&vf(l.alternate,l);break;case 24:co(r,l),c&2048&&_f(l.alternate,l);break;default:co(r,l)}n=n.sibling}}var fo=8192;function jr(e){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 26:jr(e),e.flags&fo&&e.memoizedState!==null&&Gy(fi,e.memoizedState,e.memoizedProps);break;case 5:jr(e);break;case 3:case 4:var n=fi;fi=tu(e.stateNode.containerInfo),jr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=fo,fo=16777216,jr(e),fo=n):jr(e));break;default:jr(e)}}function Tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];vn=l,Ag(l,e)}Tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):ho(e);break;default:ho(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];vn=l,Ag(l,e)}Tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Vl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function Ag(e,n){for(;vn!==null;){var r=vn;switch(r.tag){case 0:case 11:case 15:Ta(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:js(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,vn=l;else t:for(r=e;vn!==null;){l=vn;var c=l.sibling,d=l.return;if(vg(l),l===r){vn=null;break t}if(c!==null){c.return=d,vn=c;break t}vn=d}}}var iy={getCacheForType:function(e){var n=Rn(un),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},ay=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,ve=null,Me=0,Ne=0,Yn=null,Ra=!1,Zr=!1,xf=!1,Qi=0,Je=0,wa=0,dr=0,yf=0,ai=0,Kr=0,po=null,Fn=null,Sf=!1,Mf=0,kl=1/0,Xl=null,Ca=null,Tn=0,Da=null,Qr=null,Jr=0,Ef=0,Tf=null,Rg=null,mo=0,bf=null;function jn(){if((Le&2)!==0&&Me!==0)return Me&-Me;if(z.T!==null){var e=Fr;return e!==0?e:Lf()}return Te()}function wg(){ai===0&&(ai=(Me&536870912)===0||Re?k():536870912);var e=ii.current;return e!==null&&(e.flags|=32),ai}function Zn(e,n,r){(e===We&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ua(e,Me,ai,!1)),It(e,r),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(dr|=r),Je===4&&Ua(e,Me,ai,!1)),bi(e))}function Cg(e,n,r){if((Le&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=l?oy(e,n):wf(e,n,!0),d=l;do{if(c===0){Zr&&!l&&Ua(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!ry(r)){c=wf(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;c=po;var P=A.current.memoizedState.isDehydrated;if(P&&($r(A,M).flags|=256),M=wf(A,M,!1),M!==2){if(xf&&!P){A.errorRecoveryDisabledLanes|=d,dr|=d,c=4;break t}d=Fn,Fn=c,d!==null&&(Fn===null?Fn=d:Fn.push.apply(Fn,d))}c=M}if(d=!1,c!==2)continue}}if(c===1){$r(e,0),Ua(e,n,0,!0);break}t:{switch(l=e,d=c,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ua(l,n,ai,!Ra);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=Mf+300-ge(),10<c)){if(Ua(l,n,ai,!Ra),jt(l,0,!0)!==0)break t;l.timeoutHandle=a0(Dg.bind(null,l,r,Fn,Xl,Sf,n,ai,dr,Kr,Ra,d,2,-0,0),c);break t}Dg(l,r,Fn,Xl,Sf,n,ai,dr,Kr,Ra,d,0,-0,0)}}break}while(!0);bi(e)}function Dg(e,n,r,l,c,d,M,A,P,$,ft,_t,nt,at){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:Hy},Eg(n),_t=Vy(),_t!==null)){e.cancelPendingCommit=_t(Bg.bind(null,e,n,d,r,l,c,M,A,P,ft,1,nt,at)),Ua(e,d,M,!$);return}Bg(e,n,d,r,l,c,M,A,P)}function ry(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var c=r[l],d=c.getSnapshot;c=c.value;try{if(!kn(d(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,r,l){n&=~yf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var c=n;0<c;){var d=31-zt(c),M=1<<d;l[d]=-1,c&=~M}r!==0&&xt(e,r,n)}function Wl(){return(Le&6)===0?(go(0),!1):!0}function Af(){if(ve!==null){if(Ne===0)var e=ve.return;else e=ve,ki=or=null,Vc(e),Wr=null,ro=0,e=ve;for(;e!==null;)ug(e.alternate,e),e=e.return;ve=null}}function $r(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Ey(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Af(),We=e,ve=r=Hi(e.current,null),Me=n,Ne=0,Yn=null,Ra=!1,Zr=Ct(e,n),xf=!1,Kr=ai=yf=dr=wa=Je=0,Fn=po=null,Sf=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var c=31-zt(l),d=1<<c;n|=e[c],l&=~d}return Qi=n,dl(),r}function Ug(e,n){he=null,z.H=Ll,n===Ks||n===Ml?(n=jp(),Ne=3):n===Wp?(n=jp(),Ne=4):Ne=n===Zm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ve===null&&(Je=1,Bl(e,$n(n,e.current)))}function Lg(){var e=z.H;return z.H=Ll,e===null?Ll:e}function Ng(){var e=z.A;return z.A=iy,e}function Rf(){Je=4,Ra||(Me&4194048)!==Me&&ii.current!==null||(Zr=!0),(wa&134217727)===0&&(dr&134217727)===0||We===null||Ua(We,Me,ai,!1)}function wf(e,n,r){var l=Le;Le|=2;var c=Lg(),d=Ng();(We!==e||Me!==n)&&(Xl=null,$r(e,n)),n=!1;var M=Je;t:do try{if(Ne!==0&&ve!==null){var A=ve,P=Yn;switch(Ne){case 8:Af(),M=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=Ne;if(Ne=0,Yn=null,ts(e,A,P,$),r&&Zr){M=0;break t}break;default:$=Ne,Ne=0,Yn=null,ts(e,A,P,$)}}sy(),M=Je;break}catch(ft){Ug(e,ft)}while(!0);return n&&e.shellSuspendCounter++,ki=or=null,Le=l,z.H=c,z.A=d,ve===null&&(We=null,Me=0,dl()),M}function sy(){for(;ve!==null;)Og(ve)}function oy(e,n){var r=Le;Le|=2;var l=Lg(),c=Ng();We!==e||Me!==n?(Xl=null,kl=ge()+500,$r(e,n)):Zr=Ct(e,n);t:do try{if(Ne!==0&&ve!==null){n=ve;var d=Yn;e:switch(Ne){case 1:Ne=0,Yn=null,ts(e,n,d,1);break;case 2:case 9:if(qp(d)){Ne=0,Yn=null,Pg(n);break}n=function(){Ne!==2&&Ne!==9||We!==e||(Ne=7),bi(e)},d.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:qp(d)?(Ne=0,Yn=null,Pg(n)):(Ne=0,Yn=null,ts(e,n,d,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var A=ve;if(!M||g0(M)){Ne=0,Yn=null;var P=A.sibling;if(P!==null)ve=P;else{var $=A.return;$!==null?(ve=$,ql($)):ve=null}break e}}Ne=0,Yn=null,ts(e,n,d,5);break;case 6:Ne=0,Yn=null,ts(e,n,d,6);break;case 8:Af(),Je=6;break t;default:throw Error(a(462))}}ly();break}catch(ft){Ug(e,ft)}while(!0);return ki=or=null,z.H=l,z.A=c,Le=r,ve!==null?0:(We=null,Me=0,dl(),Je)}function ly(){for(;ve!==null&&!yn();)Og(ve)}function Og(e){var n=og(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?ql(e):ve=n}function Pg(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=eg(r,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=eg(r,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Vc(n);default:ug(r,n),n=ve=zp(n,Qi),n=og(r,n,Qi)}e.memoizedProps=e.pendingProps,n===null?ql(e):ve=n}function ts(e,n,r,l){ki=or=null,Vc(n),Wr=null,ro=0;var c=n.return;try{if(Qx(e,c,n,r,Me)){Je=1,Bl(e,$n(r,e.current)),ve=null;return}}catch(d){if(c!==null)throw ve=c,d;Je=1,Bl(e,$n(r,e.current)),ve=null;return}n.flags&32768?(Re||l===1?e=!0:Zr||(Me&536870912)!==0?e=!1:(Ra=e=!0,(l===2||l===9||l===3||l===6)&&(l=ii.current,l!==null&&l.tag===13&&(l.flags|=16384))),zg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){zg(n,Ra);return}e=n.return;var r=$x(n.alternate,n,Qi);if(r!==null){ve=r;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);Je===0&&(Je=5)}function zg(e,n){do{var r=ty(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);Je=6,ve=null}function Bg(e,n,r,l,c,d,M,A,P){e.cancelPendingCommit=null;do Yl();while(Tn!==0);if((Le&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=vc,Rt(e,r,d,M,A,P),e===We&&(ve=We=null,Me=0),Qr=n,Da=e,Jr=r,Ef=d,Tf=c,Rg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hy(se,function(){return Vg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,c=K.p,K.p=2,M=Le,Le|=4;try{ey(e,n,r)}finally{Le=M,K.p=c,z.T=l}}Tn=1,Ig(),Fg(),Hg()}}function Ig(){if(Tn===1){Tn=0;var e=Da,n=Qr,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var l=K.p;K.p=2;var c=Le;Le|=4;try{yg(n,e);var d=Hf,M=Ap(e.containerInfo),A=d.focusedElem,P=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&bp(A.ownerDocument.documentElement,A)){if(P!==null&&hc(A)){var $=P.start,ft=P.end;if(ft===void 0&&(ft=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ft,A.value.length);else{var _t=A.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),ie=A.textContent.length,$t=Math.min(P.start,ie),Ie=P.end===void 0?$t:Math.min(P.end,ie);!at.extend&&$t>Ie&&(M=Ie,Ie=$t,$t=M);var q=Tp(A,$t),G=Tp(A,Ie);if(q&&G&&(at.rangeCount!==1||at.anchorNode!==q.node||at.anchorOffset!==q.offset||at.focusNode!==G.node||at.focusOffset!==G.offset)){var Q=_t.createRange();Q.setStart(q.node,q.offset),at.removeAllRanges(),$t>Ie?(at.addRange(Q),at.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),at.addRange(Q))}}}}for(_t=[],at=A;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var pt=_t[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ru=!!Ff,Hf=Ff=null}finally{Le=c,K.p=l,z.T=r}}e.current=n,Tn=2}}function Fg(){if(Tn===2){Tn=0;var e=Da,n=Qr,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var l=K.p;K.p=2;var c=Le;Le|=4;try{gg(e,n.alternate,n)}finally{Le=c,K.p=l,z.T=r}}Tn=3}}function Hg(){if(Tn===4||Tn===3){Tn=0,Ee();var e=Da,n=Qr,r=Jr,l=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Qr=Da=null,Gg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ca=null),Ue(r),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var d=e.onRecoverableError,M=0;M<l.length;M++){var A=l[M];d(A.value,{componentStack:A.stack})}}finally{z.T=n,K.p=c}}(Jr&3)!==0&&Yl(),bi(e),c=e.pendingLanes,(r&4194090)!==0&&(c&42)!==0?e===bf?mo++:(mo=0,bf=e):mo=0,go(0)}}function Gg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,js(n)))}function Yl(e){return Ig(),Fg(),Hg(),Vg()}function Vg(){if(Tn!==5)return!1;var e=Da,n=Ef;Ef=0;var r=Ue(Jr),l=z.T,c=K.p;try{K.p=32>r?32:r,z.T=null,r=Tf,Tf=null;var d=Da,M=Jr;if(Tn=0,Qr=Da=null,Jr=0,(Le&6)!==0)throw Error(a(331));var A=Le;if(Le|=4,bg(d.current),Mg(d,d.current,M,r),Le=A,go(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{K.p=c,z.T=l,Gg(e,n)}}function kg(e,n,r){n=$n(r,n),n=nf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(It(e,2),bi(e))}function ke(e,n,r){if(e.tag===3)kg(e,e,r);else for(;n!==null;){if(n.tag===3){kg(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ca===null||!Ca.has(l))){e=$n(r,e),r=Ym(2),l=ya(n,r,2),l!==null&&(jm(r,l,n,e),It(l,2),bi(l));break}}n=n.return}}function Cf(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new ay;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(r)||(xf=!0,c.add(r),e=uy.bind(null,e,n,r),n.then(e,e))}function uy(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(Me&r)===r&&(Je===4||Je===3&&(Me&62914560)===Me&&300>ge()-Mf?(Le&2)===0&&$r(e,0):yf|=r,Kr===Me&&(Kr=0)),bi(e)}function Xg(e,n){n===0&&(n=Nt()),e=Pr(e,n),e!==null&&(It(e,n),bi(e))}function cy(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Xg(e,r)}function fy(e,n){var r=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),Xg(e,r)}function hy(e,n){return xe(e,n)}var jl=null,es=null,Df=!1,Zl=!1,Uf=!1,pr=0;function bi(e){e!==es&&e.next===null&&(es===null?jl=es=e:es=es.next=e),Zl=!0,Df||(Df=!0,py())}function go(e,n){if(!Uf&&Zl){Uf=!0;do for(var r=!1,l=jl;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var d=0;else{var M=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=c&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,jg(l,d))}else d=Me,d=jt(l,l===We?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ct(l,d)||(r=!0,jg(l,d));l=l.next}while(r);Uf=!1}}function dy(){Wg()}function Wg(){Zl=Df=!1;var e=0;pr!==0&&(My()&&(e=pr),pr=0);for(var n=ge(),r=null,l=jl;l!==null;){var c=l.next,d=qg(l,n);d===0?(l.next=null,r===null?jl=c:r.next=c,c===null&&(es=r)):(r=l,(e!==0||(d&3)!==0)&&(Zl=!0)),l=c}go(e)}function qg(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-zt(d),A=1<<M,P=c[M];P===-1?((A&r)===0||(A&l)!==0)&&(c[M]=re(A,n)):P<=n&&(e.expiredLanes|=A),d&=~A}if(n=We,r=Me,r=jt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&F(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ct(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(l!==null&&F(l),Ue(r)){case 2:case 8:r=Zt;break;case 32:r=se;break;case 268435456:r=N;break;default:r=se}return l=Yg.bind(null,e),r=xe(r,l),e.callbackPriority=n,e.callbackNode=r,n}return l!==null&&l!==null&&F(l),e.callbackPriority=2,e.callbackNode=null,2}function Yg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Yl()&&e.callbackNode!==r)return null;var l=Me;return l=jt(e,e===We?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Cg(e,l,n),qg(e,ge()),e.callbackNode!=null&&e.callbackNode===r?Yg.bind(null,e):null)}function jg(e,n){if(Yl())return null;Cg(e,n,!0)}function py(){Ty(function(){(Le&6)!==0?xe(ye,dy):Wg()})}function Lf(){return pr===0&&(pr=k()),pr}function Zg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function Kg(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function my(e,n,r,l,c){if(n==="submit"&&r&&r.stateNode===c){var d=Zg((c[Sn]||null).action),M=l.submitter;M&&(n=(n=M[Sn]||null)?Zg(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var A=new cl("action","action",null,l,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(pr!==0){var P=M?Kg(c,M):new FormData(c);Qc(r,{pending:!0,data:P,method:c.method,action:d},null,P)}}else typeof d=="function"&&(A.preventDefault(),P=M?Kg(c,M):new FormData(c),Qc(r,{pending:!0,data:P,method:c.method,action:d},d,P))},currentTarget:c}]})}}for(var Nf=0;Nf<gc.length;Nf++){var Of=gc[Nf],gy=Of.toLowerCase(),vy=Of[0].toUpperCase()+Of.slice(1);ci(gy,"on"+vy)}ci(Cp,"onAnimationEnd"),ci(Dp,"onAnimationIteration"),ci(Up,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Ox,"onTransitionRun"),ci(Px,"onTransitionStart"),ci(zx,"onTransitionCancel"),ci(Lp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Qg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],c=l.event;l=l.listeners;t:{var d=void 0;if(n)for(var M=l.length-1;0<=M;M--){var A=l[M],P=A.instance,$=A.currentTarget;if(A=A.listener,P!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=$;try{d(c)}catch(ft){zl(ft)}c.currentTarget=null,d=P}else for(M=0;M<l.length;M++){if(A=l[M],P=A.instance,$=A.currentTarget,A=A.listener,P!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=$;try{d(c)}catch(ft){zl(ft)}c.currentTarget=null,d=P}}}}function _e(e,n){var r=n[Ka];r===void 0&&(r=n[Ka]=new Set);var l=e+"__bubble";r.has(l)||(Jg(n,e,2,!1),r.add(l))}function Pf(e,n,r){var l=0;n&&(l|=4),Jg(r,e,l,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function zf(e){if(!e[Kl]){e[Kl]=!0,al.forEach(function(r){r!=="selectionchange"&&(_y.has(r)||Pf(r,!1,e),Pf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Pf("selectionchange",!1,n))}}function Jg(e,n,r,l){switch(M0(n)){case 2:var c=Wy;break;case 8:c=qy;break;default:c=Kf}r=c.bind(null,n,r,e),c=void 0,!ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function Bf(e,n,r,l,c){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===c)break;if(M===4)for(M=l.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;A!==null;){if(M=Oi(A),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){l=d=M;continue t}A=A.parentNode}}l=l.return}rp(function(){var $=d,ft=ec(r),_t=[];t:{var nt=Np.get(e);if(nt!==void 0){var at=cl,ie=e;switch(e){case"keypress":if(ll(r)===0)break t;case"keydown":case"keyup":at=hx;break;case"focusin":ie="focus",at=oc;break;case"focusout":ie="blur",at=oc;break;case"beforeblur":case"afterblur":at=oc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=mx;break;case Cp:case Dp:case Up:at=ix;break;case Lp:at=vx;break;case"scroll":case"scrollend":at=J_;break;case"wheel":at=xx;break;case"copy":case"cut":case"paste":at=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=cp;break;case"toggle":case"beforetoggle":at=Sx}var $t=(n&4)!==0,Ie=!$t&&(e==="scroll"||e==="scrollend"),q=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var G=$,Q;G!==null;){var pt=G;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||q===null||(pt=Ps(G,q),pt!=null&&$t.push(_o(G,pt,Q))),Ie)break;G=G.return}0<$t.length&&(nt=new at(nt,ie,null,r,ft),_t.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",nt&&r!==tc&&(ie=r.relatedTarget||r.fromElement)&&(Oi(ie)||ie[Pn]))break t;if((at||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(ie=r.relatedTarget||r.toElement,at=$,ie=ie?Oi(ie):null,ie!==null&&(Ie=u(ie),$t=ie.tag,ie!==Ie||$t!==5&&$t!==27&&$t!==6)&&(ie=null)):(at=null,ie=$),at!==ie)){if($t=lp,pt="onMouseLeave",q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=cp,pt="onPointerLeave",q="onPointerEnter",G="pointer"),Ie=at==null?nt:Ja(at),Q=ie==null?nt:Ja(ie),nt=new $t(pt,G+"leave",at,r,ft),nt.target=Ie,nt.relatedTarget=Q,pt=null,Oi(ft)===$&&($t=new $t(q,G+"enter",ie,r,ft),$t.target=Q,$t.relatedTarget=Ie,pt=$t),Ie=pt,at&&ie)e:{for($t=at,q=ie,G=0,Q=$t;Q;Q=ns(Q))G++;for(Q=0,pt=q;pt;pt=ns(pt))Q++;for(;0<G-Q;)$t=ns($t),G--;for(;0<Q-G;)q=ns(q),Q--;for(;G--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=ns($t),q=ns(q)}$t=null}else $t=null;at!==null&&$g(_t,nt,at,$t,!1),ie!==null&&Ie!==null&&$g(_t,Ie,ie,$t,!0)}}t:{if(nt=$?Ja($):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Gt=_p;else if(gp(nt))if(xp)Gt=Ux;else{Gt=Cx;var pe=wx}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&$u($.elementType)&&(Gt=_p):Gt=Dx;if(Gt&&(Gt=Gt(e,$))){vp(_t,Gt,r,ft);break t}pe&&pe(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(pe=$?Ja($):window,e){case"focusin":(gp(pe)||pe.contentEditable==="true")&&(Lr=pe,dc=$,ks=null);break;case"focusout":ks=dc=Lr=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Rp(_t,r,ft);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":Rp(_t,r,ft)}var qt;if(uc)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Ur?pp(e,r)&&(te="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(te="onCompositionStart");te&&(fp&&r.locale!=="ko"&&(Ur||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ur&&(qt=sp()):(ga=ft,ac="value"in ga?ga.value:ga.textContent,Ur=!0)),pe=Ql($,te),0<pe.length&&(te=new up(te,e,null,r,ft),_t.push({event:te,listeners:pe}),qt?te.data=qt:(qt=mp(r),qt!==null&&(te.data=qt)))),(qt=Ex?Tx(e,r):bx(e,r))&&(te=Ql($,"onBeforeInput"),0<te.length&&(pe=new up("onBeforeInput","beforeinput",null,r,ft),_t.push({event:pe,listeners:te}),pe.data=qt)),my(_t,e,$,r,ft)}Qg(_t,n)})}function _o(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ql(e,n){for(var r=n+"Capture",l=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ps(e,r),c!=null&&l.unshift(_o(e,c,d)),c=Ps(e,n),c!=null&&l.push(_o(e,c,d))),e.tag===3)return l;e=e.return}return[]}function ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $g(e,n,r,l,c){for(var d=n._reactName,M=[];r!==null&&r!==l;){var A=r,P=A.alternate,$=A.stateNode;if(A=A.tag,P!==null&&P===l)break;A!==5&&A!==26&&A!==27||$===null||(P=$,c?($=Ps(r,d),$!=null&&M.unshift(_o(r,$,P))):c||($=Ps(r,d),$!=null&&M.push(_o(r,$,P)))),r=r.return}M.length!==0&&e.push({event:n,listeners:M})}var xy=/\r\n?/g,yy=/\u0000|\uFFFD/g;function t0(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(yy,"")}function e0(e,n){return n=t0(n),t0(e)===n}function Jl(){}function Be(e,n,r,l,c,d){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||yi(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&yi(e,""+l);break;case"className":Ut(e,"class",l);break;case"tabIndex":Ut(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(e,r,l);break;case"style":ip(e,l,d);break;case"data":if(n!=="object"){Ut(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=sl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Be(e,n,"name",c.name,c,null),Be(e,n,"formEncType",c.formEncType,c,null),Be(e,n,"formMethod",c.formMethod,c,null),Be(e,n,"formTarget",c.formTarget,c,null)):(Be(e,n,"encType",c.encType,c,null),Be(e,n,"method",c.method,c,null),Be(e,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=sl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Jl);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=sl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":_e("beforetoggle",e),_e("toggle",e),At(e,"popover",l);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":At(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=K_.get(r)||r,At(e,r,l))}}function If(e,n,r,l,c,d){switch(r){case"style":ip(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?yi(e,l):(typeof l=="number"||typeof l=="bigint")&&yi(e,""+l);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),d=e[Sn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,l,c);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):At(e,r,l)}}}function bn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var l=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var M=r[d];if(M!=null)switch(d){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Be(e,n,d,M,r,null)}}c&&Be(e,n,"srcSet",r.srcSet,r,null),l&&Be(e,n,"src",r.src,r,null);return;case"input":_e("invalid",e);var A=d=M=c=null,P=null,$=null;for(l in r)if(r.hasOwnProperty(l)){var ft=r[l];if(ft!=null)switch(l){case"name":c=ft;break;case"type":M=ft;break;case"checked":P=ft;break;case"defaultChecked":$=ft;break;case"value":d=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,n));break;default:Be(e,n,l,ft,r,null)}}Ve(e,d,A,P,$,M,c,!1),Pe(e);return;case"select":_e("invalid",e),l=M=d=null;for(c in r)if(r.hasOwnProperty(c)&&(A=r[c],A!=null))switch(c){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Be(e,n,c,A,r,null)}n=d,r=M,e.multiple=!!l,n!=null?ln(e,!!l,n,!1):r!=null&&ln(e,!!l,r,!0);return;case"textarea":_e("invalid",e),d=c=l=null;for(M in r)if(r.hasOwnProperty(M)&&(A=r[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":c=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Be(e,n,M,A,r,null)}Mn(e,l,c,d),Pe(e);return;case"option":for(P in r)if(r.hasOwnProperty(P)&&(l=r[P],l!=null))switch(P){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Be(e,n,P,l,r,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(l=0;l<vo.length;l++)_e(vo[l],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(l=r[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Be(e,n,$,l,r,null)}return;default:if($u(n)){for(ft in r)r.hasOwnProperty(ft)&&(l=r[ft],l!==void 0&&If(e,n,ft,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&Be(e,n,A,l,r,null))}function Sy(e,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,M=null,A=null,P=null,$=null,ft=null;for(at in r){var _t=r[at];if(r.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=_t;default:l.hasOwnProperty(at)||Be(e,n,at,null,l,_t)}}for(var nt in l){var at=l[nt];if(_t=r[nt],l.hasOwnProperty(nt)&&(at!=null||_t!=null))switch(nt){case"type":d=at;break;case"name":c=at;break;case"checked":$=at;break;case"defaultChecked":ft=at;break;case"value":M=at;break;case"defaultValue":A=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,n));break;default:at!==_t&&Be(e,n,nt,at,l,_t)}}Bi(e,M,A,P,$,ft,d,c);return;case"select":at=M=A=nt=null;for(d in r)if(P=r[d],r.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":at=P;default:l.hasOwnProperty(d)||Be(e,n,d,null,l,P)}for(c in l)if(d=l[c],P=r[c],l.hasOwnProperty(c)&&(d!=null||P!=null))switch(c){case"value":nt=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==P&&Be(e,n,c,d,l,P)}n=A,r=M,l=at,nt!=null?ln(e,!!r,nt,!1):!!l!=!!r&&(n!=null?ln(e,!!r,n,!0):ln(e,!!r,r?[]:"",!1));return;case"textarea":at=nt=null;for(A in r)if(c=r[A],r.hasOwnProperty(A)&&c!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,l,c)}for(M in l)if(c=l[M],d=r[M],l.hasOwnProperty(M)&&(c!=null||d!=null))switch(M){case"value":nt=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==d&&Be(e,n,M,c,l,d)}mn(e,nt,at);return;case"option":for(var ie in r)if(nt=r[ie],r.hasOwnProperty(ie)&&nt!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Be(e,n,ie,null,l,nt)}for(P in l)if(nt=l[P],at=r[P],l.hasOwnProperty(P)&&nt!==at&&(nt!=null||at!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Be(e,n,P,nt,l,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in r)nt=r[$t],r.hasOwnProperty($t)&&nt!=null&&!l.hasOwnProperty($t)&&Be(e,n,$t,null,l,nt);for($ in l)if(nt=l[$],at=r[$],l.hasOwnProperty($)&&nt!==at&&(nt!=null||at!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,n));break;default:Be(e,n,$,nt,l,at)}return;default:if($u(n)){for(var Ie in r)nt=r[Ie],r.hasOwnProperty(Ie)&&nt!==void 0&&!l.hasOwnProperty(Ie)&&If(e,n,Ie,void 0,l,nt);for(ft in l)nt=l[ft],at=r[ft],!l.hasOwnProperty(ft)||nt===at||nt===void 0&&at===void 0||If(e,n,ft,nt,l,at);return}}for(var q in r)nt=r[q],r.hasOwnProperty(q)&&nt!=null&&!l.hasOwnProperty(q)&&Be(e,n,q,null,l,nt);for(_t in l)nt=l[_t],at=r[_t],!l.hasOwnProperty(_t)||nt===at||nt==null&&at==null||Be(e,n,_t,nt,l,at)}var Ff=null,Hf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function n0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function My(){var e=window.event;return e&&e.type==="popstate"?e===Vf?!1:(Vf=e,!0):(Vf=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(e){return r0.resolve(null).then(e).catch(by)}:a0;function by(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function s0(e,n){var r=n,l=0,c=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<l&&8>l){r=l;var M=e.ownerDocument;if(r&1&&xo(M.documentElement),r&2&&xo(M.body),r&4)for(r=M.head,xo(r),M=r.firstChild;M;){var A=M.nextSibling,P=M.nodeName;M[ha]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||r.removeChild(M),M=A}}if(c===0){e.removeChild(d),Ro(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:l=r.charCodeAt(0)-48;else l=0;r=d}while(r);Ro(n)}function kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":kf(r),da(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Ay(e,n,r,l){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ha])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function Ry(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=hi(e.nextSibling),e===null))return null;return e}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function wy(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Wf=null;function o0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function l0(e,n,r){switch(n=$l(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);da(e)}var ri=new Map,u0=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=K.d;K.d={f:Cy,r:Dy,D:Uy,C:Ly,L:Ny,m:Oy,X:zy,S:Py,M:By};function Cy(){var e=Ji.f(),n=Wl();return e||n}function Dy(e){var n=Pi(e);n!==null&&n.tag===5&&n.type==="form"?Cm(n):Ji.r(e)}var is=typeof document>"u"?null:document;function c0(e,n,r){var l=is;if(l&&typeof n=="string"&&n){var c=Xe(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),u0.has(c)||(u0.add(c),e={rel:e,crossOrigin:r,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),bn(n,"link",e),nn(n),l.head.appendChild(n)))}}function Uy(e){Ji.D(e),c0("dns-prefetch",e,null)}function Ly(e,n){Ji.C(e,n),c0("preconnect",e,n)}function Ny(e,n,r){Ji.L(e,n,r);var l=is;if(l&&e&&n){var c='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Xe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Xe(r.imageSizes)+'"]')):c+='[href="'+Xe(e)+'"]';var d=c;switch(n){case"style":d=as(e);break;case"script":d=rs(e)}ri.has(d)||(e=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),ri.set(d,e),l.querySelector(c)!==null||n==="style"&&l.querySelector(yo(d))||n==="script"&&l.querySelector(So(d))||(n=l.createElement("link"),bn(n,"link",e),nn(n),l.head.appendChild(n)))}}function Oy(e,n){Ji.m(e,n);var r=is;if(r&&e){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Xe(l)+'"][href="'+Xe(e)+'"]',d=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=rs(e)}if(!ri.has(d)&&(e=g({rel:"modulepreload",href:e},n),ri.set(d,e),r.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(So(d)))return}l=r.createElement("link"),bn(l,"link",e),nn(l),r.head.appendChild(l)}}}function Py(e,n,r){Ji.S(e,n,r);var l=is;if(l&&e){var c=pa(l).hoistableStyles,d=as(e);n=n||"default";var M=c.get(d);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(yo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},r),(r=ri.get(d))&&qf(e,r);var P=M=l.createElement("link");nn(P),bn(P,"link",e),P._p=new Promise(function($,ft){P.onload=$,P.onerror=ft}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,eu(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:A},c.set(d,M)}}}function zy(e,n){Ji.X(e,n);var r=is;if(r&&e){var l=pa(r).hoistableScripts,c=rs(e),d=l.get(c);d||(d=r.querySelector(So(c)),d||(e=g({src:e,async:!0},n),(n=ri.get(c))&&Yf(e,n),d=r.createElement("script"),nn(d),bn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(c,d))}}function By(e,n){Ji.M(e,n);var r=is;if(r&&e){var l=pa(r).hoistableScripts,c=rs(e),d=l.get(c);d||(d=r.querySelector(So(c)),d||(e=g({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Yf(e,n),d=r.createElement("script"),nn(d),bn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(c,d))}}function f0(e,n,r,l){var c=(c=Et.current)?tu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=as(r.href),r=pa(c).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=as(r.href);var d=pa(c).hoistableStyles,M=d.get(e);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=c.querySelector(yo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),ri.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ri.set(e,r),d||Iy(c,e,r,M.state))),n&&l===null)throw Error(a(528,""));return M}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(r),r=pa(c).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function as(e){return'href="'+Xe(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function h0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Iy(e,n,r,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),bn(n,"link",r),nn(n),e.head.appendChild(n))}function rs(e){return'[src="'+Xe(e)+'"]'}function So(e){return"script[async]"+e}function d0(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Xe(r.href)+'"]');if(l)return n.instance=l,nn(l),l;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nn(l),bn(l,"style",c),eu(l,r.precedence,e),n.instance=l;case"stylesheet":c=as(r.href);var d=e.querySelector(yo(c));if(d)return n.state.loading|=4,n.instance=d,nn(d),d;l=h0(r),(c=ri.get(c))&&qf(l,c),d=(e.ownerDocument||e).createElement("link"),nn(d);var M=d;return M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),bn(d,"link",l),n.state.loading|=4,eu(d,r.precedence,e),n.instance=d;case"script":return d=rs(r.src),(c=e.querySelector(So(d)))?(n.instance=c,nn(c),c):(l=r,(c=ri.get(d))&&(l=g({},r),Yf(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),bn(c,"link",l),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,eu(l,r.precedence,e));return n.instance}function eu(e,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,d=c,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===n)d=A;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nu=null;function p0(e,n,r){if(nu===null){var l=new Map,c=nu=new Map;c.set(r,l)}else c=nu,l=c.get(r),l||(l=new Map,c.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var d=r[c];if(!(d[ha]||d[on]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var A=l.get(M);A?A.push(d):l.set(M,[d])}}return l}function m0(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function Fy(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Mo=null;function Hy(){}function Gy(e,n,r){if(Mo===null)throw Error(a(475));var l=Mo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=as(r.href),d=e.querySelector(yo(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=iu.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=d,nn(d);return}d=e.ownerDocument||e,r=h0(r),(c=ri.get(c))&&qf(r,c),d=d.createElement("link"),nn(d);var M=d;M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),bn(d,"link",r),n.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=iu.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function Vy(){if(Mo===null)throw Error(a(475));var e=Mo;return e.stylesheets&&e.count===0&&jf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&jf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function iu(){if(this.count--,this.count===0){if(this.stylesheets)jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function jf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,n.forEach(ky,e),au=null,iu.call(e))}function ky(e,n){if(!(n.state.loading&4)){var r=au.get(e);if(r)var l=r.get(null);else{r=new Map,au.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var M=c[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}c=n.instance,M=c.getAttribute("data-precedence"),d=r.get(M)||l,d===l&&r.set(null,c),r.set(M,c),this.count++,l=iu.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Eo={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Xy(e,n,r,l,c,d,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function v0(e,n,r,l,c,d,M,A,P,$,ft,_t){return e=new Xy(e,n,r,M,A,P,$,_t),n=1,d===!0&&(n|=24),d=Xn(3,null,null,n),e.current=d,d.stateNode=e,n=wc(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:n},Lc(d),e}function _0(e){return e?(e=zr,e):zr}function x0(e,n,r,l,c,d){c=_0(c),l.context===null?l.context=c:l.pendingContext=c,l=xa(n),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=ya(e,l,n),r!==null&&(Zn(r,e,n),Js(r,e,n))}function y0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Zf(e,n){y0(e,n),(e=e.alternate)&&y0(e,n)}function S0(e){if(e.tag===13){var n=Pr(e,67108864);n!==null&&Zn(n,e,67108864),Zf(e,67108864)}}var ru=!0;function Wy(e,n,r,l){var c=z.T;z.T=null;var d=K.p;try{K.p=2,Kf(e,n,r,l)}finally{K.p=d,z.T=c}}function qy(e,n,r,l){var c=z.T;z.T=null;var d=K.p;try{K.p=8,Kf(e,n,r,l)}finally{K.p=d,z.T=c}}function Kf(e,n,r,l){if(ru){var c=Qf(l);if(c===null)Bf(e,n,l,su,r),E0(e,l);else if(jy(c,e,n,r,l))l.stopPropagation();else if(E0(e,l),n&4&&-1<Yy.indexOf(e)){for(;c!==null;){var d=Pi(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Yt(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var P=1<<31-zt(M);A.entanglements[1]|=P,M&=~P}bi(d),(Le&6)===0&&(kl=ge()+500,go(0))}}break;case 13:A=Pr(d,2),A!==null&&Zn(A,d,2),Wl(),Zf(d,2)}if(d=Qf(l),d===null&&Bf(e,n,l,su,r),d===c)break;c=d}c!==null&&l.stopPropagation()}else Bf(e,n,l,null,r)}}function Qf(e){return e=ec(e),Jf(e)}var su=null;function Jf(e){if(su=null,e=Oi(e),e!==null){var n=u(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return su=e,null}function M0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case ye:return 2;case Zt:return 8;case se:case $e:return 32;case N:return 268435456;default:return 32}default:return 32}}var $f=!1,Na=null,Oa=null,Pa=null,To=new Map,bo=new Map,za=[],Yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E0(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(e,n,r,l,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Pi(n),n!==null&&S0(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function jy(e,n,r,l,c){switch(n){case"focusin":return Na=Ao(Na,e,n,r,l,c),!0;case"dragenter":return Oa=Ao(Oa,e,n,r,l,c),!0;case"mouseover":return Pa=Ao(Pa,e,n,r,l,c),!0;case"pointerover":var d=c.pointerId;return To.set(d,Ao(To.get(d)||null,e,n,r,l,c)),!0;case"gotpointercapture":return d=c.pointerId,bo.set(d,Ao(bo.get(d)||null,e,n,r,l,c)),!0}return!1}function T0(e){var n=Oi(e.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(r.tag===13){var l=jn();l=ae(l);var c=Pr(r,l);c!==null&&Zn(c,r,l),Zf(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ou(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Qf(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);tc=l,r.target.dispatchEvent(l),tc=null}else return n=Pi(r),n!==null&&S0(n),e.blockedOn=r,!1;n.shift()}return!0}function b0(e,n,r){ou(e)&&r.delete(n)}function Zy(){$f=!1,Na!==null&&ou(Na)&&(Na=null),Oa!==null&&ou(Oa)&&(Oa=null),Pa!==null&&ou(Pa)&&(Pa=null),To.forEach(b0),bo.forEach(b0)}function lu(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Zy)))}var uu=null;function A0(e){uu!==e&&(uu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uu===e&&(uu=null);for(var n=0;n<e.length;n+=3){var r=e[n],l=e[n+1],c=e[n+2];if(typeof l!="function"){if(Jf(l||r)===null)continue;break}var d=Pi(r);d!==null&&(e.splice(n,3),n-=3,Qc(d,{pending:!0,data:c,method:r.method,action:l},l,c))}}))}function Ro(e){function n(P){return lu(P,e)}Na!==null&&lu(Na,e),Oa!==null&&lu(Oa,e),Pa!==null&&lu(Pa,e),To.forEach(n),bo.forEach(n);for(var r=0;r<za.length;r++){var l=za[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<za.length&&(r=za[0],r.blockedOn===null);)T0(r),r.blockedOn===null&&za.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var c=r[l],d=r[l+1],M=c[Sn]||null;if(typeof d=="function")M||A0(r);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(c=d,M=d[Sn]||null)A=M.formAction;else if(Jf(c)!==null)continue}else A=M.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),A0(r)}}}function th(e){this._internalRoot=e}cu.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=jn();x0(r,l,e,n,null,null)},cu.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;x0(e.current,2,null,e,null,null),Wl(),n[Pn]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var r=0;r<za.length&&n!==0&&n<za[r].priority;r++);za.splice(r,0,e),r===0&&T0(e)}};var R0=t.version;if(R0!=="19.1.1")throw Error(a(527,R0,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Ky={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{dt=fu.inject(Ky),mt=fu}catch{}}return Co.createRoot=function(e,n){if(!o(e))throw Error(a(299));var r=!1,l="",c=km,d=Xm,M=Wm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=v0(e,1,!1,null,null,r,l,c,d,M,A,null),e[Pn]=n.current,zf(e),new th(n)},Co.hydrateRoot=function(e,n,r){if(!o(e))throw Error(a(299));var l=!1,c="",d=km,M=Xm,A=Wm,P=null,$=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(P=r.unstable_transitionCallbacks),r.formState!==void 0&&($=r.formState)),n=v0(e,1,!0,n,r??null,l,c,d,M,A,P,$),n.context=_0(null),r=n.current,l=jn(),l=ae(l),c=xa(l),c.callback=null,ya(r,c,l),r=l,n.current.lanes=r,It(n,r),bi(n),e[Pn]=n.current,zf(e),new cu(n)},Co.version="19.1.1",Co}var B0;function sS(){if(B0)return ih.exports;B0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=rS(),ih.exports}var oS=sS();/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var I0="popstate";function F0(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function lS(s={}){function t(a,o){let u=o.state?.masked,{pathname:f,search:h,hash:p}=u||a.location;return Xh("",{pathname:f,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",u?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function i(a,o){return typeof o=="string"?o:Vo(o)}return cS(t,i,null,s)}function Ke(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ui(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uS(){return Math.random().toString(36).substring(2,10)}function H0(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Xh(s,t,i=null,a,o){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ds(t):t,state:i,key:t&&t.key||a||uS(),unstable_mask:o}}function Vo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ds(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let a=s.indexOf("?");a>=0&&(t.search=s.substring(a),s=s.substring(0,a)),s&&(t.pathname=s)}return t}function cS(s,t,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,f=o.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let y=g(),x=y==null?null:y-m;m=y,p&&p({action:h,location:T.location,delta:x})}function _(y,x){h="PUSH";let O=F0(y)?y:Xh(T.location,y,x);m=g()+1;let D=H0(O,m),C=T.createHref(O.unstable_mask||O);try{f.pushState(D,"",C)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(C)}u&&p&&p({action:h,location:T.location,delta:1})}function S(y,x){h="REPLACE";let O=F0(y)?y:Xh(T.location,y,x);m=g();let D=H0(O,m),C=T.createHref(O.unstable_mask||O);f.replaceState(D,"",C),u&&p&&p({action:h,location:T.location,delta:0})}function E(y){return fS(y)}let T={get action(){return h},get location(){return s(o,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(I0,v),p=y,()=>{o.removeEventListener(I0,v),p=null}},createHref(y){return t(o,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return f.go(y)}};return T}function fS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(i,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:Vo(s);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function Jv(s,t,i="/"){return hS(s,t,i,!1)}function hS(s,t,i,a){let o=typeof t=="string"?Ds(t):t,u=la(o.pathname||"/",i);if(u==null)return null;let f=$v(s);dS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=TS(u);h=MS(f[p],m,a)}return h}function $v(s,t=[],i=[],a="",o=!1){let u=(f,h,p=o,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&p)return;Ke(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=Ci([a,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(Ke(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),$v(f.children,t,_,v,p)),!(f.path==null&&!f.index)&&t.push({path:v,score:yS(v,f.index),routesMeta:_})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let p of t_(f.path))u(f,h,!0,p)}),t}function t_(s){let t=s.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let f=t_(a.join("/")),h=[];return h.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&h.push(...f),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function dS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:SS(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var pS=/^:[\w-]+$/,mS=3,gS=2,vS=1,_S=10,xS=-2,G0=s=>s==="*";function yS(s,t){let i=s.split("/"),a=i.length;return i.some(G0)&&(a+=xS),t&&(a+=gS),i.filter(o=>!G0(o)).reduce((o,u)=>o+(pS.test(u)?mS:u===""?vS:_S),a)}function SS(s,t){return s.length===t.length&&s.slice(0,-1).every((a,o)=>a===t[o])?s[s.length-1]-t[t.length-1]:0}function MS(s,t,i=!1){let{routesMeta:a}=s,o={},u="/",f=[];for(let h=0;h<a.length;++h){let p=a[h],m=h===a.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=Xu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),_=p.route;if(!v&&m&&i&&!a[a.length-1].route.index&&(v=Xu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),f.push({params:o,pathname:Ci([u,v.pathname]),pathnameBase:wS(Ci([u,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(u=Ci([u,v.pathnameBase]))}return f}function Xu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,a]=ES(s.path,s.caseSensitive,s.end),o=t.match(i);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},_)=>{if(g==="*"){let E=h[_]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[_];return v&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:s}}function ES(s,t=!1,i=!0){Ui(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p,m,g)=>{if(a.push({paramName:h,isOptional:p!=null}),p){let v=g.charAt(m+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function TS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ui(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function la(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=s.charAt(i);return a&&a!=="/"?null:s.slice(i)||"/"}var bS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function AS(s,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof s=="string"?Ds(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=V0(i.substring(1),"/"):u=V0(i,t)):u=t,{pathname:u,search:CS(a),hash:DS(o)}}function V0(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function oh(s,t,i,a){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function RS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function e_(s){let t=RS(s);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Nd(s,t,i,a=!1){let o;typeof s=="string"?o=Ds(s):(o={...s},Ke(!o.pathname||!o.pathname.includes("?"),oh("?","pathname","search",o)),Ke(!o.pathname||!o.pathname.includes("#"),oh("#","pathname","hash",o)),Ke(!o.search||!o.search.includes("#"),oh("#","search","hash",o)));let u=s===""||o.pathname==="",f=u?"/":o.pathname,h;if(f==null)h=i;else{let v=t.length-1;if(!a&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}h=v>=0?t[v]:"/"}let p=AS(o,h),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Ci=s=>s.join("/").replace(/\/\/+/g,"/"),wS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),CS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,DS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,US=class{constructor(s,t,i,a=!1){this.status=s,this.statusText=t||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function LS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function NS(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var n_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function i_(s,t){let i=s;if(typeof i!="string"||!bS.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,o=!1;if(n_)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),h=la(f.pathname,t);f.origin===u.origin&&h!=null?i=h+f.search+f.hash:o=!0}catch{Ui(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var a_=["POST","PUT","PATCH","DELETE"];new Set(a_);var OS=["GET",...a_];new Set(OS);var Us=ht.createContext(null);Us.displayName="DataRouter";var ju=ht.createContext(null);ju.displayName="DataRouterState";var PS=ht.createContext(!1),r_=ht.createContext({isTransitioning:!1});r_.displayName="ViewTransition";var zS=ht.createContext(new Map);zS.displayName="Fetchers";var BS=ht.createContext(null);BS.displayName="Await";var ui=ht.createContext(null);ui.displayName="Navigation";var jo=ht.createContext(null);jo.displayName="Location";var ua=ht.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Od=ht.createContext(null);Od.displayName="RouteError";var s_="REACT_ROUTER_ERROR",IS="REDIRECT",FS="ROUTE_ERROR_RESPONSE";function HS(s){if(s.startsWith(`${s_}:${IS}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function GS(s){if(s.startsWith(`${s_}:${FS}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new US(t.status,t.statusText,t.data)}catch{}}function VS(s,{relative:t}={}){Ke(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=ht.useContext(ui),{hash:o,pathname:u,search:f}=Ko(s,{relative:t}),h=u;return i!=="/"&&(h=u==="/"?i:Ci([i,u])),a.createHref({pathname:h,search:f,hash:o})}function Zo(){return ht.useContext(jo)!=null}function Za(){return Ke(Zo(),"useLocation() may be used only in the context of a <Router> component."),ht.useContext(jo).location}var o_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function l_(s){ht.useContext(ui).static||ht.useLayoutEffect(s)}function kS(){let{isDataRoute:s}=ht.useContext(ua);return s?nM():XS()}function XS(){Ke(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ht.useContext(Us),{basename:t,navigator:i}=ht.useContext(ui),{matches:a}=ht.useContext(ua),{pathname:o}=Za(),u=JSON.stringify(e_(a)),f=ht.useRef(!1);return l_(()=>{f.current=!0}),ht.useCallback((p,m={})=>{if(Ui(f.current,o_),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=Nd(p,JSON.parse(u),o,m.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ci([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,u,o,s])}ht.createContext(null);function Ko(s,{relative:t}={}){let{matches:i}=ht.useContext(ua),{pathname:a}=Za(),o=JSON.stringify(e_(i));return ht.useMemo(()=>Nd(s,JSON.parse(o),a,t==="path"),[s,o,a,t])}function WS(s,t){return u_(s,t)}function u_(s,t,i){Ke(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=ht.useContext(ui),{matches:o}=ht.useContext(ua),u=o[o.length-1],f=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let y=m&&m.path||"";f_(h,!m||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let g=Za(),v;if(t){let y=typeof t=="string"?Ds(t):t;Ke(p==="/"||y.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=g;let _=v.pathname||"/",S=_;if(p!=="/"){let y=p.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=Jv(s,{pathname:S});Ui(m||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ui(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=KS(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Ci([p,a.encodeLocation?a.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:Ci([p,a.encodeLocation?a.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),o,i);return t&&T?ht.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},T):T}function qS(){let s=eM(),t=LS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ht.createElement(ht.Fragment,null,ht.createElement("p",null,"💿 Hey developer 👋"),ht.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ht.createElement("code",{style:u},"ErrorBoundary")," or"," ",ht.createElement("code",{style:u},"errorElement")," prop on your route.")),ht.createElement(ht.Fragment,null,ht.createElement("h2",null,"Unexpected Application Error!"),ht.createElement("h3",{style:{fontStyle:"italic"}},t),i?ht.createElement("pre",{style:o},i):null,f)}var YS=ht.createElement(qS,null),c_=class extends ht.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=GS(s.digest);i&&(s=i)}let t=s!==void 0?ht.createElement(ua.Provider,{value:this.props.routeContext},ht.createElement(Od.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ht.createElement(jS,{error:s},t):t}};c_.contextType=PS;var lh=new WeakMap;function jS({children:s,error:t}){let{basename:i}=ht.useContext(ui);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=HS(t.digest);if(a){let o=lh.get(t);if(o)throw o;let u=i_(a.location,i);if(n_&&!lh.get(t))if(u.isExternal||a.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:a.replace}));throw lh.set(t,f),f}return ht.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function ZS({routeContext:s,match:t,children:i}){let a=ht.useContext(Us);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ht.createElement(ua.Provider,{value:s},i)}function KS(s,t=[],i){let a=i?.state;if(s==null){if(!a)return null;if(a.errors)s=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)s=a.matches;else return null}let o=s,u=a?.errors;if(u!=null){let g=o.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);Ke(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,h=-1;if(i&&a){f=a.renderFallback;for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=g),v.route.id){let{loaderData:_,errors:S}=a,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){i.isStatic&&(f=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let p=i?.onError,m=a&&p?(g,v)=>{p(g,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:NS(a.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,_)=>{let S,E=!1,T=null,y=null;a&&(S=u&&v.route.id?u[v.route.id]:void 0,T=v.route.errorElement||YS,f&&(h<0&&_===0?(f_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):h===_&&(E=!0,y=v.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,_+1)),O=()=>{let D;return S?D=T:E?D=y:v.route.Component?D=ht.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=g,ht.createElement(ZS,{match:v,routeContext:{outlet:g,matches:x,isDataRoute:a!=null},children:D})};return a&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?ht.createElement(c_,{location:a.location,revalidation:a.revalidation,component:T,error:S,children:O(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:m}):O()},null)}function Pd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QS(s){let t=ht.useContext(Us);return Ke(t,Pd(s)),t}function JS(s){let t=ht.useContext(ju);return Ke(t,Pd(s)),t}function $S(s){let t=ht.useContext(ua);return Ke(t,Pd(s)),t}function zd(s){let t=$S(s),i=t.matches[t.matches.length-1];return Ke(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function tM(){return zd("useRouteId")}function eM(){let s=ht.useContext(Od),t=JS("useRouteError"),i=zd("useRouteError");return s!==void 0?s:t.errors?.[i]}function nM(){let{router:s}=QS("useNavigate"),t=zd("useNavigate"),i=ht.useRef(!1);return l_(()=>{i.current=!0}),ht.useCallback(async(o,u={})=>{Ui(i.current,o_),i.current&&(typeof o=="number"?await s.navigate(o):await s.navigate(o,{fromRouteId:t,...u}))},[s,t])}var k0={};function f_(s,t,i){!t&&!k0[s]&&(k0[s]=!0,Ui(!1,i))}ht.memo(iM);function iM({routes:s,future:t,state:i,isStatic:a,onError:o}){return u_(s,void 0,{state:i,isStatic:a,onError:o})}function Pu(s){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function aM({basename:s="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:u=!1,unstable_useTransitions:f}){Ke(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),p=ht.useMemo(()=>({basename:h,navigator:o,static:u,unstable_useTransitions:f,future:{}}),[h,o,u,f]);typeof i=="string"&&(i=Ds(i));let{pathname:m="/",search:g="",hash:v="",state:_=null,key:S="default",unstable_mask:E}=i,T=ht.useMemo(()=>{let y=la(m,h);return y==null?null:{location:{pathname:y,search:g,hash:v,state:_,key:S,unstable_mask:E},navigationType:a}},[h,m,g,v,_,S,a,E]);return Ui(T!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:ht.createElement(ui.Provider,{value:p},ht.createElement(jo.Provider,{children:t,value:T}))}function rM({children:s,location:t}){return WS(Wh(s),t)}function Wh(s,t=[]){let i=[];return ht.Children.forEach(s,(a,o)=>{if(!ht.isValidElement(a))return;let u=[...t,o];if(a.type===ht.Fragment){i.push.apply(i,Wh(a.props.children,u));return}Ke(a.type===Pu,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=Wh(a.props.children,u)),i.push(f)}),i}var zu="get",Bu="application/x-www-form-urlencoded";function Zu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function sM(s){return Zu(s)&&s.tagName.toLowerCase()==="button"}function oM(s){return Zu(s)&&s.tagName.toLowerCase()==="form"}function lM(s){return Zu(s)&&s.tagName.toLowerCase()==="input"}function uM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function cM(s,t){return s.button===0&&(!t||t==="_self")&&!uM(s)}var hu=null;function fM(){if(hu===null)try{new FormData(document.createElement("form"),0),hu=!1}catch{hu=!0}return hu}var hM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uh(s){return s!=null&&!hM.has(s)?(Ui(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bu}"`),null):s}function dM(s,t){let i,a,o,u,f;if(oM(s)){let h=s.getAttribute("action");a=h?la(h,t):null,i=s.getAttribute("method")||zu,o=uh(s.getAttribute("enctype"))||Bu,u=new FormData(s)}else if(sM(s)||lM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(a=p?la(p,t):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||zu,o=uh(s.getAttribute("formenctype"))||uh(h.getAttribute("enctype"))||Bu,u=new FormData(h,s),!fM()){let{name:m,type:g,value:v}=s;if(g==="image"){let _=m?`${m}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else m&&u.append(m,v)}}else{if(Zu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=zu,a=null,o=Bu,f=s}return u&&o==="text/plain"&&(f=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function pM(s,t,i,a){let o=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:t&&la(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${a}`,o}async function mM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function vM(s,t,i){let a=await Promise.all(s.map(async o=>{let u=t.routes[o.route.id];if(u){let f=await mM(u,i);return f.links?f.links():[]}return[]}));return SM(a.flat(1).filter(gM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function X0(s,t,i,a,o,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,m)=>f(p,m)||h(p,m)):u==="data"?t.filter((p,m)=>{let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function _M(s,t,{includeHydrateFallback:i}={}){return xM(s.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function xM(s){return[...new Set(s)]}function yM(s){let t={},i=Object.keys(s).sort();for(let a of i)t[a]=s[a];return t}function SM(s,t){let i=new Set;return new Set(t),s.reduce((a,o)=>{let u=JSON.stringify(yM(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function h_(){let s=ht.useContext(Us);return Bd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function MM(){let s=ht.useContext(ju);return Bd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Id=ht.createContext(void 0);Id.displayName="FrameworkContext";function d_(){let s=ht.useContext(Id);return Bd(s,"You must render this element inside a <HydratedRouter> element"),s}function EM(s,t){let i=ht.useContext(Id),[a,o]=ht.useState(!1),[u,f]=ht.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=t,_=ht.useRef(null);ht.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=x=>{x.forEach(O=>{f(O.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[s]),ht.useEffect(()=>{if(a){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[a]);let S=()=>{o(!0)},E=()=>{o(!1),f(!1)};return i?s!=="intent"?[u,_,{}]:[u,_,{onFocus:Do(h,S),onBlur:Do(p,E),onMouseEnter:Do(m,S),onMouseLeave:Do(g,E),onTouchStart:Do(v,S)}]:[!1,_,{}]}function Do(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function TM({page:s,...t}){let{router:i}=h_(),a=ht.useMemo(()=>Jv(i.routes,s,i.basename),[i.routes,s,i.basename]);return a?ht.createElement(AM,{page:s,matches:a,...t}):null}function bM(s){let{manifest:t,routeModules:i}=d_(),[a,o]=ht.useState([]);return ht.useEffect(()=>{let u=!1;return vM(s,t,i).then(f=>{u||o(f)}),()=>{u=!0}},[s,t,i]),a}function AM({page:s,matches:t,...i}){let a=Za(),{future:o,manifest:u,routeModules:f}=d_(),{basename:h}=h_(),{loaderData:p,matches:m}=MM(),g=ht.useMemo(()=>X0(s,t,m,u,a,"data"),[s,t,m,u,a]),v=ht.useMemo(()=>X0(s,t,m,u,a,"assets"),[s,t,m,u,a]),_=ht.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let T=new Set,y=!1;if(t.forEach(O=>{let D=u.routes[O.route.id];!D||!D.hasLoader||(!g.some(C=>C.route.id===O.route.id)&&O.route.id in p&&f[O.route.id]?.shouldRevalidate||D.hasClientLoader?y=!0:T.add(O.route.id))}),T.size===0)return[];let x=pM(s,h,o.unstable_trailingSlashAwareDataRequests,"data");return y&&T.size>0&&x.searchParams.set("_routes",t.filter(O=>T.has(O.route.id)).map(O=>O.route.id).join(",")),[x.pathname+x.search]},[h,o.unstable_trailingSlashAwareDataRequests,p,a,u,g,t,s,f]),S=ht.useMemo(()=>_M(v,u),[v,u]),E=bM(v);return ht.createElement(ht.Fragment,null,_.map(T=>ht.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),S.map(T=>ht.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:y})=>ht.createElement("link",{key:T,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function RM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var wM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wM&&(window.__reactRouterVersion="7.13.1")}catch{}function CM({basename:s,children:t,unstable_useTransitions:i,window:a}){let o=ht.useRef();o.current==null&&(o.current=lS({window:a,v5Compat:!0}));let u=o.current,[f,h]=ht.useState({action:u.action,location:u.location}),p=ht.useCallback(m=>{i===!1?h(m):ht.startTransition(()=>h(m))},[i]);return ht.useLayoutEffect(()=>u.listen(p),[u,p]),ht.createElement(aM,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var p_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fd=ht.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:f,unstable_mask:h,state:p,target:m,to:g,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:S,...E},T){let{basename:y,navigator:x,unstable_useTransitions:O}=ht.useContext(ui),D=typeof g=="string"&&p_.test(g),C=i_(g,y);g=C.to;let I=VS(g,{relative:o}),H=Za(),B=null;if(h){let ct=Nd(h,[],H.unstable_mask?H.unstable_mask.pathname:"/",!0);y!=="/"&&(ct.pathname=ct.pathname==="/"?y:Ci([y,ct.pathname])),B=x.createHref(ct)}let[X,U,w]=EM(a,E),V=NM(g,{replace:f,unstable_mask:h,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:_,unstable_defaultShouldRevalidate:S,unstable_useTransitions:O});function lt(ct){t&&t(ct),ct.defaultPrevented||V(ct)}let ot=!(C.isExternal||u),gt=ht.createElement("a",{...E,...w,href:(ot?B:void 0)||C.absoluteURL||I,onClick:ot?lt:t,ref:RM(T,U),target:m,"data-discover":!D&&i==="render"?"true":void 0});return X&&!D?ht.createElement(ht.Fragment,null,gt,ht.createElement(TM,{page:I})):gt});Fd.displayName="Link";var DM=ht.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:f,viewTransition:h,children:p,...m},g){let v=Ko(f,{relative:m.relative}),_=Za(),S=ht.useContext(ju),{navigator:E,basename:T}=ht.useContext(ui),y=S!=null&&IM(v)&&h===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,O=_.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(O=O.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&T&&(D=la(D,T)||D);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let I=O===x||!o&&O.startsWith(x)&&O.charAt(C)==="/",H=D!=null&&(D===x||!o&&D.startsWith(x)&&D.charAt(x.length)==="/"),B={isActive:I,isPending:H,isTransitioning:y},X=I?t:void 0,U;typeof a=="function"?U=a(B):U=[a,I?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(B):u;return ht.createElement(Fd,{...m,"aria-current":X,className:U,ref:g,style:w,to:f,viewTransition:h},typeof p=="function"?p(B):p)});DM.displayName="NavLink";var UM=ht.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:u,method:f=zu,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:_,...S},E)=>{let{unstable_useTransitions:T}=ht.useContext(ui),y=zM(),x=BM(h,{relative:m}),O=f.toLowerCase()==="get"?"get":"post",D=typeof h=="string"&&p_.test(h),C=I=>{if(p&&p(I),I.defaultPrevented)return;I.preventDefault();let H=I.nativeEvent.submitter,B=H?.getAttribute("formmethod")||f,X=()=>y(H||I.currentTarget,{fetcherKey:t,method:B,navigate:i,replace:o,state:u,relative:m,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:_});T&&i!==!1?ht.startTransition(()=>X()):X()};return ht.createElement("form",{ref:E,method:O,action:x,onSubmit:a?p:C,...S,"data-discover":!D&&s==="render"?"true":void 0})});UM.displayName="Form";function LM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m_(s){let t=ht.useContext(Us);return Ke(t,LM(s)),t}function NM(s,{target:t,replace:i,unstable_mask:a,state:o,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let g=kS(),v=Za(),_=Ko(s,{relative:f});return ht.useCallback(S=>{if(cM(S,t)){S.preventDefault();let E=i!==void 0?i:Vo(v)===Vo(_),T=()=>g(s,{replace:E,unstable_mask:a,state:o,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p});m?ht.startTransition(()=>T()):T()}},[v,g,_,i,a,o,t,s,u,f,h,p,m])}var OM=0,PM=()=>`__${String(++OM)}__`;function zM(){let{router:s}=m_("useSubmit"),{basename:t}=ht.useContext(ui),i=tM(),a=s.fetch,o=s.navigate;return ht.useCallback(async(u,f={})=>{let{action:h,method:p,encType:m,formData:g,body:v}=dM(u,t);if(f.navigate===!1){let _=f.fetcherKey||PM();await a(_,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||p,formEncType:f.encType||m,flushSync:f.flushSync})}else await o(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||p,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,o,t,i])}function BM(s,{relative:t}={}){let{basename:i}=ht.useContext(ui),a=ht.useContext(ua);Ke(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...Ko(s||".",{relative:t})},f=Za();if(s==null){u.search=f.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Ci([i,u.pathname])),Vo(u)}function IM(s,{relative:t}={}){let i=ht.useContext(r_);Ke(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=m_("useViewTransitionState"),o=Ko(s,{relative:t});if(!i.isTransitioning)return!1;let u=la(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=la(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Xu(o.pathname,f)!=null||Xu(o.pathname,u)!=null}const FM="/assets/bird-D9jvbFeL.png",HM="/assets/chess-DDN_g1lg.png",GM="/assets/flower-D4XUVlS7.png",VM="/assets/space-CbU1frjk.png",kM="/assets/pickle-Ddit1OTS.png",XM=[{src:FM,alt:"Bird"},{src:VM,alt:"Space"},{src:GM,alt:"Flower"},{src:HM,alt:"Chess"},{src:kM,alt:"Pickle"}];function WM(){return it.jsx("div",{className:"gallery",children:XM.map((s,t)=>it.jsx("img",{src:s.src,alt:s.alt,className:`gallery-item gallery-item-${t+1}`},s.alt))})}function qM(){return it.jsxs("div",{id:"hero",className:"sections hero-extended",children:[it.jsxs("div",{className:"hero-text",children:[it.jsx("h1",{children:"Bella Wang"}),it.jsx("p",{children:"Electrical Engineering Student @ UBC"}),it.jsxs("div",{children:[it.jsx("button",{children:it.jsx("a",{href:"#projects",children:"View Projects"})}),it.jsx("button",{children:it.jsx("a",{href:"https://github.com/bella7898",children:"Github"})})]})]}),it.jsx("div",{className:"hero-gallery",children:it.jsx(WM,{})})]})}const W0=[{role:"Project Research Assistant",org:"Metro Vancouver — Project Delivery Department",period:"05/2026 – Present",color:"#8ba9fa",points:["Supported development of project management standards","Developed Sharepoint team sites to support the accessibility of project management resources"]},{role:"Electrical Sound Localization Subteam",org:"UBC Subbots",period:"09/2025 – Present",color:"#8ba9fa",points:["Designed a Printed Circuit Board for an interface between the ADS8528 chip and DE10 Lite FPGA board","Handled mechanical constraints by measuring existing DE10 Lite header and standoff placement and 3d printng PCB board outline to test initial connections","Optimized Python sound localization simulation software"]},{role:"League Coordinator",org:"BC Junior Chess Association",period:"09/2023 - 06/2024",color:"#8ba9fa",points:["Organized annual BCJCA High School Chess League, consisting of district qualifiers and final championship tournament","Collaborated with chess club leaders across the province to run qualifying events"]}],q0=["Python","Java","C","R","React","React Native","Next.js","Expo Go","Flask","KiCad","Altium Designer","SolidWorks","SystemVerilog","Nios V Assembly","Embedded C","Quartus / Waveform","Standards Development","Technical Documentation"];function Y0({role:s,org:t,period:i,color:a,points:o}){return it.jsxs("div",{style:{textAlign:"left"},children:[it.jsx("div",{style:{marginBottom:"6px"},children:it.jsx("span",{style:{fontSize:"16px",fontWeight:"700",color:"#e5e7eb"},children:s})}),it.jsxs("div",{style:{marginBottom:"12px"},children:[it.jsx("span",{style:{fontSize:"13px",color:a},children:t}),it.jsxs("span",{style:{fontSize:"13px",color:"#9ca3af"},children:[" · ",i]})]}),it.jsx("ul",{style:{margin:0,paddingLeft:"18px"},children:o.map((u,f)=>it.jsx("li",{style:{fontSize:"14px",color:"#d1d5db",lineHeight:"1.6",marginBottom:"4px"},children:u},f))})]})}function YM({name:s}){return it.jsx("span",{style:{display:"inline-block",padding:"8px 18px",fontSize:"14px",color:"#e5e7eb",background:"transparent",border:"1px solid #8ba9fa66",borderRadius:"999px",whiteSpace:"nowrap",marginRight:"12px"},children:s})}function jM(){return it.jsxs("div",{id:"experience",className:"sections",style:{padding:"40px 5rem"},children:[it.jsx("h1",{style:{marginBottom:"32px"},children:"Experience"}),it.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:W0.map((s,t)=>{const i=t%2===0?"left":"right";return it.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 32px 1fr",columnGap:"32px",alignItems:"center"},children:[i==="left"?it.jsx(Y0,{...s}):it.jsx("div",{}),it.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"stretch",minHeight:"80px"},children:[it.jsx("div",{style:{width:"2px",flex:1,background:t===0?"transparent":s.color}}),it.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:s.color,margin:"6px 0",flexShrink:0}}),it.jsx("div",{style:{width:"2px",flex:1,background:t===W0.length-1?"transparent":s.color}})]}),i==="right"?it.jsx(Y0,{...s}):it.jsx("div",{})]},s.role)})}),it.jsx("div",{style:{marginTop:"56px",overflow:"hidden",WebkitMaskImage:"linear-gradient(to right, transparent, black 8%, black 92%, transparent)",maskImage:"linear-gradient(to right, transparent, black 8%, black 92%, transparent)"},children:it.jsx("div",{style:{display:"flex",width:"max-content",animation:"skills-ribbon 40s linear infinite"},children:[...q0,...q0].map((s,t)=>it.jsx(YM,{name:s},t))})}),it.jsx("style",{children:`
        @keyframes skills-ribbon {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        #experience > div:last-of-type:hover > div {
          animation-play-state: paused;
        }
      `})]})}const ZM="/assets/reflowoven-DqIOnCgI.jpg",KM="/assets/retrotron-BMPtPsvX.jpg",QM="/assets/dreamtravels-DPdATjj3.jpg",JM="/assets/coolitdown-8eEhT8YX.jpg",$M="/assets/spamsenseai-BuuTezyn.png",tE="/assets/moodloop-DC4NsUjk.jpg",eE="/assets/focusfocus-9y1ZcT7G.jpg";function nE(){return it.jsx("div",{style:{position:"absolute",top:0,left:0,width:"90px",height:"90px",overflow:"hidden",pointerEvents:"none",zIndex:10},children:it.jsx("div",{style:{position:"absolute",top:"18px",left:"-28px",width:"120px",padding:"5px 0",backgroundColor:"#ffb433",color:"#5d4612",fontWeight:1e3,fontSize:"12px",letterSpacing:"1.2px",textAlign:"center",textTransform:"uppercase",transform:"rotate(-45deg)",boxShadow:"0 2px 6px rgba(0,0,0,0.3)"},children:"Winner"})})}const iE=["All","Hackathon","Course Project","Personal"];function aE(){const[s,t]=ht.useState("All"),i=[{event:"cmd-f 2026 Hackathon",type:"Hackathon",title:"Mood Loop",desc:"A physical keychain-sized mood tracker with an AI summarized dashboard, built with EMF8 microcontroller and Flask backend",img:tE,links:[{label:"Devpost",href:"https://devpost.com/software/moodloop",internal:!1},{label:"Github Repo",href:"https://github.com/kparibhasha/mood-loop",internal:!1}],isWinner:!0},{event:"Elec 291 Course Project",type:"Course Project",title:"Reflow Oven Controller",desc:"Designed and built a reflow oven controller using a DE10-Lite FPGA, with CV8052 soft core processor",img:ZM,links:[{label:"Project Report",to:"/reflowoven",internal:!0},{label:"Video",href:"https://www.youtube.com/watch?v=6cuWTV0r89I",internal:!1}],isWinner:!1},{event:"CPEN 211 Course Project",type:"Course Project",title:"Retro TRON Video Game",desc:"Embedded C video game on FPGA using VGA display and interrupts",img:KM},{event:"cmd-f 2025 Hackathon",type:"Hackathon",title:"Dream Travels",desc:"Your dream travel board React Website that uses Foursquare Places API",img:QM},{event:"UBC Physics Olympics",type:"Course Project",title:"Cool It Down! Prebuilt Machine",desc:"Prebuild machine - gravity powered copper cooling machine",img:JM},{type:"Personal",title:"Spam Sense AI",desc:"Trained DistilBERT model to identify spam vs non-spam (ham) messages",img:$M},{event:"VSHacks 2022",type:"Hackathon",title:"Focus Focus",desc:"A chrome extension that blocks distracting websites for lock in study sessions",img:eE,isWinner:!0}],a=s==="All"?i:i.filter(o=>o.type===s);return it.jsxs("div",{class:"sections",children:[it.jsx("h1",{children:"Projects"}),it.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.25rem",flexWrap:"wrap"},children:iE.map(o=>it.jsx("button",{onClick:()=>t(o),style:{padding:"5px 14px",borderRadius:"999px",border:"1px solid",borderColor:s===o?"#3a393b":"#d1d5db",background:s===o?"#3a393b":"transparent",color:s===o?"#fff":"#555",fontSize:"13px",cursor:"pointer",fontWeight:s===o?600:400,transition:"all 0.15s"},children:o},o))}),it.jsx("section",{id:"projects",className:"projects",style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"},children:a.map((o,u)=>it.jsxs("div",{className:"project-card",style:{position:"relative",overflow:"hidden",padding:0},children:[o.isWinner&&it.jsx(nE,{}),o.img&&it.jsx("img",{src:o.img,alt:o.title,style:{width:"100%",height:"160px",objectFit:"cover",display:"block"}}),it.jsxs("div",{style:{padding:"14px 16px"},children:[o.event&&it.jsx("p",{style:{margin:"0 0 4px",fontSize:"12px",color:"#888"},children:it.jsx("em",{children:o.event})}),it.jsx("h3",{style:{margin:"0 0 6px"},children:o.title}),it.jsx("p",{style:{margin:"0 0 10px"},children:o.desc}),o.links&&it.jsx("div",{style:{display:"flex",gap:"0.75rem",marginTop:"0.5rem"},children:o.links.map((f,h)=>f.internal?it.jsx(Fd,{to:f.to,className:"project-link",children:f.label},h):it.jsx("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:f.label},h))})]})]},u))})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="178",rE=0,j0=1,sE=2,g_=1,oE=2,aa=3,Ya=0,Hn=1,Ri=2,Wa=0,Ms=1,Z0=2,K0=3,Q0=4,lE=5,Er=100,uE=101,cE=102,fE=103,hE=104,dE=200,pE=201,mE=202,gE=203,qh=204,Yh=205,vE=206,_E=207,xE=208,yE=209,SE=210,ME=211,EE=212,TE=213,bE=214,jh=0,Zh=1,Kh=2,bs=3,Qh=4,Jh=5,$h=6,td=7,v_=0,AE=1,RE=2,qa=0,wE=1,CE=2,DE=3,UE=4,LE=5,NE=6,OE=7,__=300,As=301,Rs=302,ed=303,nd=304,Ku=306,id=1e3,br=1001,ad=1002,_i=1003,PE=1004,du=1005,wi=1006,ch=1007,Ar=1008,Li=1009,x_=1010,y_=1011,ko=1012,Gd=1013,Rr=1014,ra=1015,Qo=1016,Vd=1017,kd=1018,Xo=1020,S_=35902,M_=1021,E_=1022,vi=1023,Wo=1026,qo=1027,T_=1028,Xd=1029,b_=1030,Wd=1031,qd=1033,Iu=33776,Fu=33777,Hu=33778,Gu=33779,rd=35840,sd=35841,od=35842,ld=35843,ud=36196,cd=37492,fd=37496,hd=37808,dd=37809,pd=37810,md=37811,gd=37812,vd=37813,_d=37814,xd=37815,yd=37816,Sd=37817,Md=37818,Ed=37819,Td=37820,bd=37821,Vu=36492,Ad=36494,Rd=36495,A_=36283,wd=36284,Cd=36285,Dd=36286,zE=3200,BE=3201,R_=0,IE=1,Xa="",oi="srgb",ws="srgb-linear",Wu="linear",Fe="srgb",ss=7680,J0=519,FE=512,HE=513,GE=514,w_=515,VE=516,kE=517,XE=518,WE=519,$0=35044,tv="300 es",sa=2e3,qu=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const u=o.indexOf(i);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ev=1234567;const Io=Math.PI/180,Yo=180/Math.PI;function Ns(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[a&255]+Cn[a>>8&255]+Cn[a>>16&255]+Cn[a>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function Yd(s,t){return(s%t+t)%t}function qE(s,t,i,a,o){return a+(s-t)*(o-a)/(i-t)}function YE(s,t,i){return s!==t?(i-s)/(t-s):0}function Fo(s,t,i){return(1-i)*s+i*t}function jE(s,t,i,a){return Fo(s,t,1-Math.exp(-i*a))}function ZE(s,t=1){return t-Math.abs(Yd(s,t*2)-t)}function KE(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function QE(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function JE(s,t){return s+Math.floor(Math.random()*(t-s+1))}function $E(s,t){return s+Math.random()*(t-s)}function tT(s){return s*(.5-Math.random())}function eT(s){s!==void 0&&(ev=s);let t=ev+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nT(s){return s*Io}function iT(s){return s*Yo}function aT(s){return(s&s-1)===0&&s!==0}function rT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function sT(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function oT(s,t,i,a,o){const u=Math.cos,f=Math.sin,h=u(i/2),p=f(i/2),m=u((t+a)/2),g=f((t+a)/2),v=u((t-a)/2),_=f((t-a)/2),S=u((a-t)/2),E=f((a-t)/2);switch(o){case"XYX":s.set(h*g,p*v,p*_,h*m);break;case"YZY":s.set(p*_,h*g,p*v,h*m);break;case"ZXZ":s.set(p*v,p*_,h*g,h*m);break;case"XZX":s.set(h*g,p*E,p*S,h*m);break;case"YXY":s.set(p*S,h*g,p*E,h*m);break;case"ZYZ":s.set(p*E,p*S,h*g,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ys(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lT={DEG2RAD:Io,RAD2DEG:Yo,generateUUID:Ns,clamp:me,euclideanModulo:Yd,mapLinear:qE,inverseLerp:YE,lerp:Fo,damp:jE,pingpong:ZE,smoothstep:KE,smootherstep:QE,randInt:JE,randFloat:$E,randFloatSpread:tT,seededRandom:eT,degToRad:nT,radToDeg:iT,isPowerOfTwo:aT,ceilPowerOfTwo:rT,floorPowerOfTwo:sT,setQuaternionFromProperEuler:oT,normalize:Nn,denormalize:ys};class ee{constructor(t=0,i=0){ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,o=t.elements;return this.x=o[0]*i+o[3]*a+o[6],this.y=o[1]*i+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),o=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*o+t.x,this.y=u*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(t=0,i=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=o}static slerpFlat(t,i,a,o,u,f,h){let p=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];const _=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(v!==T||p!==_||m!==S||g!==E){let y=1-h;const x=p*_+m*S+g*E+v*T,O=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const I=Math.sqrt(D),H=Math.atan2(I,x*O);y=Math.sin(y*H)/I,h=Math.sin(h*H)/I}const C=h*O;if(p=p*y+_*C,m=m*y+S*C,g=g*y+E*C,v=v*y+T*C,y===1-h){const I=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=I,m*=I,g*=I,v*=I}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,a,o,u,f){const h=a[o],p=a[o+1],m=a[o+2],g=a[o+3],v=u[f],_=u[f+1],S=u[f+2],E=u[f+3];return t[i]=h*E+g*v+p*S-m*_,t[i+1]=p*E+g*_+m*v-h*S,t[i+2]=m*E+g*S+h*_-p*v,t[i+3]=g*E-h*v-p*_-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,o){return this._x=t,this._y=i,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,o=t._y,u=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(o/2),v=h(u/2),_=p(a/2),S=p(o/2),E=p(u/2);switch(f){case"XYZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"YZX":this._x=_*g*v+m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v-_*S*E;break;case"XZY":this._x=_*g*v-m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],o=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10],_=a+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-m)*S,this._z=(f-o)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(g-p)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(u+m)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(u-m)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-o)/S,this._x=(u+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,i/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,o=t._y,u=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+f*h+o*m-u*p,this._y=o*g+f*p+u*h-a*m,this._z=u*g+f*m+a*p-o*h,this._w=f*g-a*h-o*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,o=this._y,u=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*a+i*this._x,this._y=S*o+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-i)*g)/m,_=Math.sin(i*g)/m;return this._w=f*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,a=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(nv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(nv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*i+u[3]*a+u[6]*o,this.y=u[1]*i+u[4]*a+u[7]*o,this.z=u[2]*i+u[5]*a+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,o=this.z,u=t.elements,f=1/(u[3]*i+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*i+u[4]*a+u[8]*o+u[12])*f,this.y=(u[1]*i+u[5]*a+u[9]*o+u[13])*f,this.z=(u[2]*i+u[6]*a+u[10]*o+u[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,o=this.z,u=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*o-h*a),g=2*(h*i-u*o),v=2*(u*a-f*i);return this.x=i+p*m+f*v-h*g,this.y=a+p*g+h*m-u*v,this.z=o+p*v+u*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*i+u[4]*a+u[8]*o,this.y=u[1]*i+u[5]*a+u[9]*o,this.z=u[2]*i+u[6]*a+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,o=t.y,u=t.z,f=i.x,h=i.y,p=i.z;return this.x=o*p-u*h,this.y=u*f-a*p,this.z=a*h-o*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return i*i+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const o=Math.sin(i)*t;return this.x=o*Math.sin(a),this.y=Math.cos(i)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new W,nv=new Jo;class le{constructor(t,i,a,o,u,f,h,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,o,u,f,h,p,m)}set(t,i,a,o,u,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,o=i.elements,u=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],g=a[4],v=a[7],_=a[2],S=a[5],E=a[8],T=o[0],y=o[3],x=o[6],O=o[1],D=o[4],C=o[7],I=o[2],H=o[5],B=o[8];return u[0]=f*T+h*O+p*I,u[3]=f*y+h*D+p*H,u[6]=f*x+h*C+p*B,u[1]=m*T+g*O+v*I,u[4]=m*y+g*D+v*H,u[7]=m*x+g*C+v*B,u[2]=_*T+S*O+E*I,u[5]=_*y+S*D+E*H,u[8]=_*x+S*C+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],o=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-a*u*g+a*h*p+o*u*m-o*f*p}invert(){const t=this.elements,i=t[0],a=t[1],o=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=g*f-h*m,_=h*p-g*u,S=m*u-f*p,E=i*v+a*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(o*m-g*a)*T,t[2]=(h*a-o*f)*T,t[3]=_*T,t[4]=(g*i-o*p)*T,t[5]=(o*u-h*i)*T,t[6]=S*T,t[7]=(a*p-m*i)*T,t[8]=(f*i-a*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,o,u,f,h){const p=Math.cos(u),m=Math.sin(u);return this.set(a*p,a*m,-a*(p*f+m*h)+f+t,-o*m,o*p,-o*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(hh.makeScale(t,i)),this}rotate(t){return this.premultiply(hh.makeRotation(-t)),this}translate(t,i){return this.premultiply(hh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let o=0;o<9;o++)if(i[o]!==a[o])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new le;function C_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Yu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uT(){const s=Yu("canvas");return s.style.display="block",s}const iv={};function Es(s){s in iv||(iv[s]=!0,console.warn(s))}function cT(s,t,i){return new Promise(function(a,o){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:a()}}setTimeout(u,i)})}function fT(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hT(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const av=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rv=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dT(){const s={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(o,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Fe&&(o.r=oa(o.r),o.g=oa(o.g),o.b=oa(o.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(o.r=Ts(o.r),o.g=Ts(o.g),o.b=Ts(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xa?Wu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,f){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[ws]:{primaries:t,whitePoint:a,transfer:Wu,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:a,transfer:Fe,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Ae=dT();function oa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class pT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{os===void 0&&(os=Yu("canvas")),os.width=t.width,os.height=t.height;const o=os.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=os}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Yu("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=oa(u[f]/255)*255;return a.putImageData(o,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(oa(i[a]/255)*255):i[a]=oa(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mT=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?u.push(dh(o[f].image)):u.push(dh(o[f]))}else u=dh(o);a.url=u}return i||(t.images[this.uuid]=a),a}}function dh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gT=0;const ph=new W;class Gn extends Ls{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,a=br,o=br,u=wi,f=Ar,h=vi,p=Li,m=Gn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Ns(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==__)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case id:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case id:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=__;Gn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,a=0,o=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,o){return this.x=t,this.y=i,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,o=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*o+f[12]*u,this.y=f[1]*i+f[5]*a+f[9]*o+f[13]*u,this.z=f[2]*i+f[6]*a+f[10]*o+f[14]*u,this.w=f[3]*i+f[7]*a+f[11]*o+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,o,u;const p=t.elements,m=p[0],g=p[4],v=p[8],_=p[1],S=p[5],E=p[9],T=p[2],y=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,C=(S+1)/2,I=(x+1)/2,H=(g+_)/4,B=(v+T)/4,X=(E+y)/4;return D>C&&D>I?D<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(D),o=H/a,u=B/a):C>I?C<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(C),a=H/o,u=X/o):I<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(I),a=B/u,o=X/u),this.set(a,o,u,i),this}let O=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vT extends Ls{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const o={width:t,height:i,depth:a.depth},u=new Gn(o);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=i,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},t.textures[i].image);this.textures[i].source=new jd(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends vT{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class D_ extends Gn{constructor(t=null,i=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _T extends Gn{constructor(t=null,i=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,di):di.fromBufferAttribute(u,f),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),pu.copy(a.boundingBox)),pu.applyMatrix4(t.matrixWorld),this.union(pu)}const o=t.children;for(let u=0,f=o.length;u<f;u++)this.expandByObject(o[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),mu.subVectors(this.max,Uo),ls.subVectors(t.a,Uo),us.subVectors(t.b,Uo),cs.subVectors(t.c,Uo),Ia.subVectors(us,ls),Fa.subVectors(cs,us),mr.subVectors(ls,cs);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-mr.y,mr.x,0];return!mh(i,ls,us,cs,mu)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,ls,us,cs,mu))?!1:(gu.crossVectors(Ia,Fa),i=[gu.x,gu.y,gu.z],mh(i,ls,us,cs,mu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new W,new W,new W,new W,new W,new W,new W,new W],di=new W,pu=new $o,ls=new W,us=new W,cs=new W,Ia=new W,Fa=new W,mr=new W,Uo=new W,mu=new W,gu=new W,gr=new W;function mh(s,t,i,a,o){for(let u=0,f=s.length-3;u<=f;u+=3){gr.fromArray(s,u);const h=o.x*Math.abs(gr.x)+o.y*Math.abs(gr.y)+o.z*Math.abs(gr.z),p=t.dot(gr),m=i.dot(gr),g=a.dot(gr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const xT=new $o,Lo=new W,gh=new W;class Zd{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):xT.setFromPoints(t).getCenter(a);let o=0;for(let u=0,f=t.length;u<f;u++)o=Math.max(o,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),o=(a-this.radius)*.5;this.center.addScaledVector(Lo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(gh)),this.expandByPoint(Lo.copy(t.center).sub(gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new W,vh=new W,vu=new W,Ha=new W,_h=new W,_u=new W,xh=new W;class yT{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,a,o){vh.copy(t).add(i).multiplyScalar(.5),vu.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(vh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(vu),h=Ha.dot(this.direction),p=-Ha.dot(vu),m=Ha.lengthSq(),g=Math.abs(1-f*f);let v,_,S,E;if(g>0)if(v=f*p-h,_=f*h-p,E=u*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,S=v*(v+f*_+2*h)+_*(f*v+_+2*p)+m}else _=u,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _=-u,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _<=-E?(v=Math.max(0,-(-f*u+h)),_=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+_*(_+2*p)+m):_<=E?(v=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+m):(v=Math.max(0,-(f*u+h)),_=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+_*(_+2*p)+m);else _=f>0?-u:u,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(vh).addScaledVector(vu,_),S}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const a=ta.dot(this.direction),o=ta.dot(ta)-a*a,u=t.radius*t.radius;if(o>u)return null;const f=Math.sqrt(u-o),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,o,u,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(a=(t.min.x-_.x)*m,o=(t.max.x-_.x)*m):(a=(t.max.x-_.x)*m,o=(t.min.x-_.x)*m),g>=0?(u=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),a>f||u>o||((u>a||isNaN(a))&&(a=u),(f<o||isNaN(o))&&(o=f),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,a,o,u){_h.subVectors(i,t),_u.subVectors(a,t),xh.crossVectors(_h,_u);let f=this.direction.dot(xh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ha.subVectors(this.origin,t);const p=h*this.direction.dot(_u.crossVectors(Ha,_u));if(p<0)return null;const m=h*this.direction.dot(_h.cross(Ha));if(m<0||p+m>f)return null;const g=-h*Ha.dot(xh);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,a,o,u,f,h,p,m,g,v,_,S,E,T,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,o,u,f,h,p,m,g,v,_,S,E,T,y)}set(t,i,a,o,u,f,h,p,m,g,v,_,S,E,T,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=a,x[12]=o,x[1]=u,x[5]=f,x[9]=h,x[13]=p,x[2]=m,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,o=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=a[0]*o,i[1]=a[1]*o,i[2]=a[2]*o,i[3]=0,i[4]=a[4]*u,i[5]=a[5]*u,i[6]=a[6]*u,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,o=t.y,u=t.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=f*g,S=f*v,E=h*g,T=h*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=S+E*m,i[5]=_-T*m,i[9]=-h*p,i[2]=T-_*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const _=p*g,S=p*v,E=m*g,T=m*v;i[0]=_+T*h,i[4]=E*h-S,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+_*h,i[10]=f*p}else if(t.order==="ZXY"){const _=p*g,S=p*v,E=m*g,T=m*v;i[0]=_-T*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-_*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const _=f*g,S=f*v,E=h*g,T=h*v;i[0]=p*g,i[4]=E*m-S,i[8]=_*m+T,i[1]=p*v,i[5]=T*m+_,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const _=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=T-_*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*v+E,i[10]=_-T*v}else if(t.order==="XZY"){const _=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=_*v+T,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*g,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ST,t,MT)}lookAt(t,i,a){const o=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ga.crossVectors(a,Kn),Ga.lengthSq()===0&&(Math.abs(a.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ga.crossVectors(a,Kn)),Ga.normalize(),xu.crossVectors(Kn,Ga),o[0]=Ga.x,o[4]=xu.x,o[8]=Kn.x,o[1]=Ga.y,o[5]=xu.y,o[9]=Kn.y,o[2]=Ga.z,o[6]=xu.z,o[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,o=i.elements,u=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],g=a[1],v=a[5],_=a[9],S=a[13],E=a[2],T=a[6],y=a[10],x=a[14],O=a[3],D=a[7],C=a[11],I=a[15],H=o[0],B=o[4],X=o[8],U=o[12],w=o[1],V=o[5],lt=o[9],ot=o[13],gt=o[2],ct=o[6],z=o[10],K=o[14],j=o[3],Tt=o[7],L=o[11],tt=o[15];return u[0]=f*H+h*w+p*gt+m*j,u[4]=f*B+h*V+p*ct+m*Tt,u[8]=f*X+h*lt+p*z+m*L,u[12]=f*U+h*ot+p*K+m*tt,u[1]=g*H+v*w+_*gt+S*j,u[5]=g*B+v*V+_*ct+S*Tt,u[9]=g*X+v*lt+_*z+S*L,u[13]=g*U+v*ot+_*K+S*tt,u[2]=E*H+T*w+y*gt+x*j,u[6]=E*B+T*V+y*ct+x*Tt,u[10]=E*X+T*lt+y*z+x*L,u[14]=E*U+T*ot+y*K+x*tt,u[3]=O*H+D*w+C*gt+I*j,u[7]=O*B+D*V+C*ct+I*Tt,u[11]=O*X+D*lt+C*z+I*L,u[15]=O*U+D*ot+C*K+I*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],o=t[8],u=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],v=t[6],_=t[10],S=t[14],E=t[3],T=t[7],y=t[11],x=t[15];return E*(+u*p*v-o*m*v-u*h*_+a*m*_+o*h*S-a*p*S)+T*(+i*p*S-i*m*_+u*f*_-o*f*S+o*m*g-u*p*g)+y*(+i*m*v-i*h*S-u*f*v+a*f*S+u*h*g-a*m*g)+x*(-o*h*g-i*p*v+i*h*_+o*f*v-a*f*_+a*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],o=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=t[9],_=t[10],S=t[11],E=t[12],T=t[13],y=t[14],x=t[15],O=v*y*m-T*_*m+T*p*S-h*y*S-v*p*x+h*_*x,D=E*_*m-g*y*m-E*p*S+f*y*S+g*p*x-f*_*x,C=g*T*m-E*v*m+E*h*S-f*T*S-g*h*x+f*v*x,I=E*v*p-g*T*p-E*h*_+f*T*_+g*h*y-f*v*y,H=i*O+a*D+o*C+u*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=O*B,t[1]=(T*_*u-v*y*u-T*o*S+a*y*S+v*o*x-a*_*x)*B,t[2]=(h*y*u-T*p*u+T*o*m-a*y*m-h*o*x+a*p*x)*B,t[3]=(v*p*u-h*_*u-v*o*m+a*_*m+h*o*S-a*p*S)*B,t[4]=D*B,t[5]=(g*y*u-E*_*u+E*o*S-i*y*S-g*o*x+i*_*x)*B,t[6]=(E*p*u-f*y*u-E*o*m+i*y*m+f*o*x-i*p*x)*B,t[7]=(f*_*u-g*p*u+g*o*m-i*_*m-f*o*S+i*p*S)*B,t[8]=C*B,t[9]=(E*v*u-g*T*u-E*a*S+i*T*S+g*a*x-i*v*x)*B,t[10]=(f*T*u-E*h*u+E*a*m-i*T*m-f*a*x+i*h*x)*B,t[11]=(g*h*u-f*v*u-g*a*m+i*v*m+f*a*S-i*h*S)*B,t[12]=I*B,t[13]=(g*T*o-E*v*o+E*a*_-i*T*_-g*a*y+i*v*y)*B,t[14]=(E*h*o-f*T*o-E*a*p+i*T*p+f*a*y-i*h*y)*B,t[15]=(f*v*o-g*h*o+g*a*p-i*v*p-f*a*_+i*h*_)*B,this}scale(t){const i=this.elements,a=t.x,o=t.y,u=t.z;return i[0]*=a,i[4]*=o,i[8]*=u,i[1]*=a,i[5]*=o,i[9]*=u,i[2]*=a,i[6]*=o,i[10]*=u,i[3]*=a,i[7]*=o,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,o))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),o=Math.sin(i),u=1-a,f=t.x,h=t.y,p=t.z,m=u*f,g=u*h;return this.set(m*f+a,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+a,g*p-o*f,0,m*p-o*h,g*p+o*f,u*p*p+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,o,u,f){return this.set(1,a,u,0,t,1,f,0,i,o,1,0,0,0,0,1),this}compose(t,i,a){const o=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,m=u+u,g=f+f,v=h+h,_=u*m,S=u*g,E=u*v,T=f*g,y=f*v,x=h*v,O=p*m,D=p*g,C=p*v,I=a.x,H=a.y,B=a.z;return o[0]=(1-(T+x))*I,o[1]=(S+C)*I,o[2]=(E-D)*I,o[3]=0,o[4]=(S-C)*H,o[5]=(1-(_+x))*H,o[6]=(y+O)*H,o[7]=0,o[8]=(E+D)*B,o[9]=(y-O)*B,o[10]=(1-(_+T))*B,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,a){const o=this.elements;let u=fs.set(o[0],o[1],o[2]).length();const f=fs.set(o[4],o[5],o[6]).length(),h=fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],pi.copy(this);const m=1/u,g=1/f,v=1/h;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),a.x=u,a.y=f,a.z=h,this}makePerspective(t,i,a,o,u,f,h=sa){const p=this.elements,m=2*u/(i-t),g=2*u/(a-o),v=(i+t)/(i-t),_=(a+o)/(a-o);let S,E;if(h===sa)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(h===qu)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,o,u,f,h=sa){const p=this.elements,m=1/(i-t),g=1/(a-o),v=1/(f-u),_=(i+t)*m,S=(a+o)*g;let E,T;if(h===sa)E=(f+u)*v,T=-2*v;else if(h===qu)E=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let o=0;o<16;o++)if(i[o]!==a[o])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const fs=new W,pi=new je,ST=new W(0,0,0),MT=new W(1,1,1),Ga=new W,xu=new W,Kn=new W,sv=new je,ov=new Jo;class Ni{constructor(t=0,i=0,a=0,o=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,o=this._order){return this._x=t,this._y=i,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const o=t.elements,u=o[0],f=o[4],h=o[8],p=o[1],m=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sv,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ov.setFromEuler(this),this.setFromQuaternion(ov,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class U_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ET=0;const lv=new W,hs=new Jo,ea=new je,yu=new W,No=new W,TT=new W,bT=new Jo,uv=new W(1,0,0),cv=new W(0,1,0),fv=new W(0,0,1),hv={type:"added"},AT={type:"removed"},ds={type:"childadded",child:null},yh={type:"childremoved",child:null};class Un extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new W,i=new Ni,a=new Jo,o=new W(1,1,1);function u(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(uv,t)}rotateY(t){return this.rotateOnAxis(cv,t)}rotateZ(t){return this.rotateOnAxis(fv,t)}translateOnAxis(t,i){return lv.copy(t).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(uv,t)}translateY(t){return this.translateOnAxis(cv,t)}translateZ(t){return this.translateOnAxis(fv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?yu.copy(t):yu.set(t,i,a);const o=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(No,yu,this.up):ea.lookAt(yu,No,this.up),this.quaternion.setFromRotationMatrix(ea),o&&(ea.extractRotation(o.matrixWorld),hs.setFromRotationMatrix(ea),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hv),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AT),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hv),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,TT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,bT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Un.DEFAULT_UP=new W(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new W,na=new W,Sh=new W,ia=new W,ps=new W,ms=new W,dv=new W,Mh=new W,Eh=new W,Th=new W,bh=new He,Ah=new He,Rh=new He;class gi{constructor(t=new W,i=new W,a=new W){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,o){o.subVectors(a,i),mi.subVectors(t,i),o.cross(mi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,i,a,o,u){mi.subVectors(o,i),na.subVectors(a,i),Sh.subVectors(t,i);const f=mi.dot(mi),h=mi.dot(na),p=mi.dot(Sh),m=na.dot(na),g=na.dot(Sh),v=f*m-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,S=(m*p-h*g)*_,E=(f*g-h*p)*_;return u.set(1-S-E,E,S)}static containsPoint(t,i,a,o){return this.getBarycoord(t,i,a,o,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,a,o,u,f,h,p){return this.getBarycoord(t,i,a,o,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(f,ia.y),p.addScaledVector(h,ia.z),p)}static getInterpolatedAttribute(t,i,a,o,u,f){return bh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),bh.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,a),Rh.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(bh,u.x),f.addScaledVector(Ah,u.y),f.addScaledVector(Rh,u.z),f}static isFrontFacing(t,i,a,o){return mi.subVectors(a,i),na.subVectors(t,i),mi.cross(na).dot(o)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,o){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,a,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,o,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,a,o,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,o=this.b,u=this.c;let f,h;ps.subVectors(o,a),ms.subVectors(u,a),Mh.subVectors(t,a);const p=ps.dot(Mh),m=ms.dot(Mh);if(p<=0&&m<=0)return i.copy(a);Eh.subVectors(t,o);const g=ps.dot(Eh),v=ms.dot(Eh);if(g>=0&&v<=g)return i.copy(o);const _=p*v-g*m;if(_<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(a).addScaledVector(ps,f);Th.subVectors(t,u);const S=ps.dot(Th),E=ms.dot(Th);if(E>=0&&S<=E)return i.copy(u);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(a).addScaledVector(ms,h);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return dv.subVectors(u,o),h=(v-g)/(v-g+(S-E)),i.copy(o).addScaledVector(dv,h);const x=1/(y+T+_);return f=T*x,h=_*x,i.copy(a).addScaledVector(ps,f).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const L_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Su={h:0,s:0,l:0};function wh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,a,o=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=a,Ae.colorSpaceToWorking(this,o),this}setHSL(t,i,a,o=Ae.workingColorSpace){if(t=Yd(t,1),i=me(i,0,1),a=me(a,0,1),i===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+i):a+i-a*i,f=2*a-u;this.r=wh(f,u,t+1/3),this.g=wh(f,u,t),this.b=wh(f,u,t-1/3)}return Ae.colorSpaceToWorking(this,o),this}setStyle(t,i=oi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const a=L_[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Ae.workingToColorSpace(Dn.copy(this),t),Math.round(me(Dn.r*255,0,255))*65536+Math.round(me(Dn.g*255,0,255))*256+Math.round(me(Dn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Dn.copy(this),i);const a=Dn.r,o=Dn.g,u=Dn.b,f=Math.max(a,o,u),h=Math.min(a,o,u);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const v=f-h;switch(m=g<=.5?v/(f+h):v/(2-f-h),f){case a:p=(o-u)/v+(o<u?6:0);break;case o:p=(u-a)/v+2;break;case u:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=oi){Ae.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,a=Dn.g,o=Dn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,i,a){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(Su);const a=Fo(Va.h,Su.h,i),o=Fo(Va.s,Su.s,i),u=Fo(Va.l,Su.l,i);return this.setHSL(a,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,o=this.b,u=t.elements;return this.r=u[0]*i+u[3]*a+u[6]*o,this.g=u[1]*i+u[4]*a+u[7]*o,this.b=u[2]*i+u[5]*a+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new we;we.NAMES=L_;let RT=0;class tl extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ms,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(a.blending=this.blending),this.side!==Ya&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==qh&&(a.blendSrc=this.blendSrc),this.blendDst!==Yh&&(a.blendDst=this.blendDst),this.blendEquation!==Er&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=o(t.textures),f=o(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const o=i.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=i[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kd extends tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new W,Mu=new ee;let wT=0;class Di{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=$0,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=i.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Mu.fromBufferAttribute(this,i),Mu.applyMatrix3(t),this.setXY(i,Mu.x,Mu.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=ys(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=Nn(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),a=Nn(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,o){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),a=Nn(a,this.array),o=Nn(o,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,i,a,o,u){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),a=Nn(a,this.array),o=Nn(o,this.array),u=Nn(u,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$0&&(t.usage=this.usage),t}}class N_ extends Di{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class O_ extends Di{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class xi extends Di{constructor(t,i,a){super(new Float32Array(t),i,a)}}let CT=0;const si=new je,Ch=new Un,gs=new W,Qn=new $o,Oo=new $o,xn=new W;class ca extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(C_(t)?O_:N_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new le().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,a){return si.makeTranslation(t,i,a),this.applyMatrix4(si),this}scale(t,i,a){return si.makeScale(t,i,a),this.applyMatrix4(si),this}lookAt(t){return Ch.lookAt(t),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let o=0,u=t.length;o<u;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xi(a,3))}else{const a=Math.min(t.length,i.count);for(let o=0;o<a;o++){const u=t[o];i.setXYZ(o,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,o=i.length;a<o;a++){const u=i[a];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const a=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(Qn.min,Oo.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,Oo.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(Oo.min),Qn.expandByPoint(Oo.max))}Qn.getCenter(a);let o=0;for(let u=0,f=t.count;u<f;u++)xn.fromBufferAttribute(t,u),o=Math.max(o,a.distanceToSquared(xn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)xn.fromBufferAttribute(h,m),p&&(gs.fromBufferAttribute(t,m),xn.add(gs)),o=Math.max(o,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,o=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new W,p[X]=new W;const m=new W,g=new W,v=new W,_=new ee,S=new ee,E=new ee,T=new W,y=new W;function x(X,U,w){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,U),v.fromBufferAttribute(a,w),_.fromBufferAttribute(u,X),S.fromBufferAttribute(u,U),E.fromBufferAttribute(u,w),g.sub(m),v.sub(m),S.sub(_),E.sub(_);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),h[X].add(T),h[U].add(T),h[w].add(T),p[X].add(y),p[U].add(y),p[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,U=O.length;X<U;++X){const w=O[X],V=w.start,lt=w.count;for(let ot=V,gt=V+lt;ot<gt;ot+=3)x(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const D=new W,C=new W,I=new W,H=new W;function B(X){I.fromBufferAttribute(o,X),H.copy(I);const U=h[X];D.copy(U),D.sub(I.multiplyScalar(I.dot(U))).normalize(),C.crossVectors(H,U);const V=C.dot(p[X])<0?-1:1;f.setXYZW(X,D.x,D.y,D.z,V)}for(let X=0,U=O.length;X<U;++X){const w=O[X],V=w.start,lt=w.count;for(let ot=V,gt=V+lt;ot<gt;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const o=new W,u=new W,f=new W,h=new W,p=new W,m=new W,g=new W,v=new W;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);o.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,y),h.add(g),p.add(g),m.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,S=i.count;_<S;_+=3)o.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,u),v.subVectors(o,u),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,v=h.normalized,_=new m.constructor(p.length*g);let S=0,E=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*g;for(let x=0;x<g;x++)_[E++]=m[S++]}return new Di(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ca,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,a);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,v=m.length;g<v;g++){const _=m[g],S=t(_,a);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,_=m.length;v<_;v++){const S=m[v];g.push(S.toJSON(t.data))}g.length>0&&(o[p]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],v=u[m];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pv=new je,vr=new yT,Eu=new Zd,mv=new W,Tu=new W,bu=new W,Au=new W,Dh=new W,Ru=new W,gv=new W,wu=new W;class li extends Un{constructor(t=new ca,i=new Kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const o=i[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){Ru.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],v=u[p];g!==0&&(Dh.fromBufferAttribute(v,t),f?Ru.addScaledVector(Dh,g):Ru.addScaledVector(Dh.sub(i),g))}i.add(Ru)}return i}raycast(t,i){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Eu.copy(a.boundingSphere),Eu.applyMatrix4(u),vr.copy(t.ray).recast(t.near),!(Eu.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Eu,mv)===null||vr.origin.distanceToSquared(mv)>(t.far-t.near)**2))&&(pv.copy(u).invert(),vr.copy(t.ray).applyMatrix4(pv),!(a.boundingBox!==null&&vr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,a){let o;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=f[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,I=D;C<I;C+=3){const H=h.getX(C),B=h.getX(C+1),X=h.getX(C+2);o=Cu(this,x,t,a,m,g,v,H,B,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const O=h.getX(y),D=h.getX(y+1),C=h.getX(y+2);o=Cu(this,f,t,a,m,g,v,O,D,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=f[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,I=D;C<I;C+=3){const H=C,B=C+1,X=C+2;o=Cu(this,x,t,a,m,g,v,H,B,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const O=y,D=y+1,C=y+2;o=Cu(this,f,t,a,m,g,v,O,D,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function DT(s,t,i,a,o,u,f,h){let p;if(t.side===Hn?p=a.intersectTriangle(f,u,o,!0,h):p=a.intersectTriangle(o,u,f,t.side===Ya,h),p===null)return null;wu.copy(h),wu.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(wu);return m<i.near||m>i.far?null:{distance:m,point:wu.clone(),object:s}}function Cu(s,t,i,a,o,u,f,h,p,m){s.getVertexPosition(h,Tu),s.getVertexPosition(p,bu),s.getVertexPosition(m,Au);const g=DT(s,t,i,a,Tu,bu,Au,gv);if(g){const v=new W;gi.getBarycoord(gv,Tu,bu,Au,v),o&&(g.uv=gi.getInterpolatedAttribute(o,h,p,m,v,new ee)),u&&(g.uv1=gi.getInterpolatedAttribute(u,h,p,m,v,new ee)),f&&(g.normal=gi.getInterpolatedAttribute(f,h,p,m,v,new W),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new W,materialIndex:0};gi.getNormal(Tu,bu,Au,_.normal),g.face=_,g.barycoord=v}return g}class el extends ca{constructor(t=1,i=1,a=1,o=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:o,heightSegments:u,depthSegments:f};const h=this;o=Math.floor(o),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,a,i,t,f,u,0),E("z","y","x",1,-1,a,i,-t,f,u,1),E("x","z","y",1,1,t,a,i,o,f,2),E("x","z","y",1,-1,t,a,-i,o,f,3),E("x","y","z",1,-1,t,i,a,o,u,4),E("x","y","z",-1,-1,t,i,-a,o,u,5),this.setIndex(p),this.setAttribute("position",new xi(m,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(v,2));function E(T,y,x,O,D,C,I,H,B,X,U){const w=C/B,V=I/X,lt=C/2,ot=I/2,gt=H/2,ct=B+1,z=X+1;let K=0,j=0;const Tt=new W;for(let L=0;L<z;L++){const tt=L*V-ot;for(let yt=0;yt<ct;yt++){const Mt=yt*w-lt;Tt[T]=Mt*O,Tt[y]=tt*D,Tt[x]=gt,m.push(Tt.x,Tt.y,Tt.z),Tt[T]=0,Tt[y]=0,Tt[x]=H>0?1:-1,g.push(Tt.x,Tt.y,Tt.z),v.push(yt/B),v.push(1-L/X),K+=1}}for(let L=0;L<X;L++)for(let tt=0;tt<B;tt++){const yt=_+tt+ct*L,Mt=_+tt+ct*(L+1),J=_+(tt+1)+ct*(L+1),vt=_+(tt+1)+ct*L;p.push(yt,Mt,vt),p.push(Mt,J,vt),j+=6}h.addGroup(S,j,U),S+=j,_+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const o=s[i][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=o.clone():Array.isArray(o)?t[i][a]=o.slice():t[i][a]=o}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const a=Cs(s[i]);for(const o in a)t[o]=a[o]}return t}function UT(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function P_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const LT={clone:Cs,merge:On};var NT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NT,this.fragmentShader=OT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=UT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?i.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[o]={type:"m4",value:f.toArray()}:i.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class z_ extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new W,vv=new ee,_v=new ee;class Jn extends z_{constructor(t=50,i=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,vv,_v),i.subVectors(_v,vv)}setViewOffset(t,i,a,o,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Io*.5*this.fov)/this.zoom,a=2*i,o=this.aspect*a,u=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*o/p,i-=f.offsetY*a/m,o*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,i,i-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,_s=1;class PT extends Un{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn(vs,_s,t,i);o.layers=this.layers,this.add(o);const u=new Jn(vs,_s,t,i);u.layers=this.layers,this.add(u);const f=new Jn(vs,_s,t,i);f.layers=this.layers,this.add(f);const h=new Jn(vs,_s,t,i);h.layers=this.layers,this.add(h);const p=new Jn(vs,_s,t,i);p.layers=this.layers,this.add(p);const m=new Jn(vs,_s,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,o,u,f,h,p]=i;for(const m of i)this.remove(m);if(t===sa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===qu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,m,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(i,u),t.setRenderTarget(a,1,o),t.render(i,f),t.setRenderTarget(a,2,o),t.render(i,h),t.setRenderTarget(a,3,o),t.render(i,p),t.setRenderTarget(a,4,o),t.render(i,m),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(i,g),t.setRenderTarget(v,_,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class B_ extends Gn{constructor(t=[],i=As,a,o,u,f,h,p,m,g){super(t,i,a,o,u,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zT extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new B_(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new el(5,5,5),u=new ja({name:"CubemapFromEquirect",uniforms:Cs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Hn,blending:Wa});u.uniforms.tEquirect.value=i;const f=new li(o,u),h=i.minFilter;return i.minFilter===Ar&&(i.minFilter=wi),new PT(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,o=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,o);t.setRenderTarget(u)}}class zo extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BT={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let o=null,u=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,a),x=this._getHandJoint(m,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=i.getPose(t.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new zo;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class IT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Lh=new W,FT=new W,HT=new le;class Sr{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,o){return this.normal.set(t,i,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const o=Lh.subVectors(a,i).cross(FT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Lh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:i.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||HT.getNormalMatrix(t),o=this.coplanarPoint(Lh).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Zd,GT=new ee(.5,.5),Du=new W;class Qd{constructor(t=new Sr,i=new Sr,a=new Sr,o=new Sr,u=new Sr,f=new Sr){this.planes=[t,i,a,o,u,f]}set(t,i,a,o,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(a),h[3].copy(o),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=sa){const a=this.planes,o=t.elements,u=o[0],f=o[1],h=o[2],p=o[3],m=o[4],g=o[5],v=o[6],_=o[7],S=o[8],E=o[9],T=o[10],y=o[11],x=o[12],O=o[13],D=o[14],C=o[15];if(a[0].setComponents(p-u,_-m,y-S,C-x).normalize(),a[1].setComponents(p+u,_+m,y+S,C+x).normalize(),a[2].setComponents(p+f,_+g,y+E,C+O).normalize(),a[3].setComponents(p-f,_-g,y-E,C-O).normalize(),a[4].setComponents(p-h,_-v,y-T,C-D).normalize(),i===sa)a[5].setComponents(p+h,_+v,y+T,C+D).normalize();else if(i===qu)a[5].setComponents(h,v,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=GT.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,a=t.center,o=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const o=i[a];if(Du.x=o.normal.x>0?t.max.x:t.min.x,Du.y=o.normal.y>0?t.max.y:t.min.y,Du.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I_ extends Gn{constructor(t,i,a=Rr,o,u,f,h=_i,p=_i,m,g=Wo,v=1){if(g!==Wo&&g!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,o,u,f,h,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,o=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),u+=a.distanceTo(o),i.push(u),o=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const a=this.getLengths();let o=0;const u=a.length;let f;i?f=i:f=t*a[u-1];let h=0,p=u-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-f,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===f)return o/(u-1);const g=a[o],_=a[o+1]-g,S=(f-g)/_;return(o+S)/(u-1)}getTangent(t,i){let o=t-1e-4,u=t+1e-4;o<0&&(o=0),u>1&&(u=1);const f=this.getPoint(o),h=this.getPoint(u),p=i||(f.isVector2?new ee:new W);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i=!1){const a=new W,o=[],u=[],f=[],h=new W,p=new je;for(let S=0;S<=t;S++){const E=S/t;o[S]=this.getTangentAt(E,new W)}u[0]=new W,f[0]=new W;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=m&&(m=g,a.set(1,0,0)),v<=m&&(m=v,a.set(0,1,0)),_<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),u[0].crossVectors(o[0],h),f[0].crossVectors(o[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(me(o[S-1].dot(o[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(h,E))}f[S].crossVectors(o[S],u[S])}if(i===!0){let S=Math.acos(me(u[0].dot(u[t]),-1,1));S/=t,o[0].dot(h.crossVectors(u[0],u[t]))>0&&(S=-S);for(let E=1;E<=t;E++)u[E].applyMatrix4(p.makeRotationAxis(o[E],S*E)),f[E].crossVectors(o[E],u[E])}return{tangents:o,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class F_ extends fa{constructor(t=0,i=0,a=1,o=1,u=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=o,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,i=new ee){const a=i,o=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=o;for(;u>o;)u-=o;u<Number.EPSILON&&(f?u=0:u=o),this.aClockwise===!0&&!f&&(u===o?u=-o:u=u-o);const h=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,S=m-this.aY;p=_*g-S*v+this.aX,m=_*v+S*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class VT extends F_{constructor(t,i,a,o,u,f){super(t,i,a,a,o,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Jd(){let s=0,t=0,i=0,a=0;function o(u,f,h,p){s=u,t=h,i=-3*u+3*f-2*h-p,a=2*u-2*f+h+p}return{initCatmullRom:function(u,f,h,p,m){o(f,h,m*(h-u),m*(p-f))},initNonuniformCatmullRom:function(u,f,h,p,m,g,v){let _=(f-u)/m-(h-u)/(m+g)+(h-f)/g,S=(h-f)/g-(p-f)/(g+v)+(p-h)/v;_*=g,S*=g,o(f,h,_,S)},calc:function(u){const f=u*u,h=f*u;return s+t*u+i*f+a*h}}}const Uu=new W,Nh=new Jd,Oh=new Jd,Ph=new Jd;class H_ extends fa{constructor(t=[],i=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=o}getPoint(t,i=new W){const a=i,o=this.points,u=o.length,f=(u-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/u)+1)*u:p===0&&h===u-1&&(h=u-2,p=1);let m,g;this.closed||h>0?m=o[(h-1)%u]:(Uu.subVectors(o[0],o[1]).add(o[0]),m=Uu);const v=o[h%u],_=o[(h+1)%u];if(this.closed||h+2<u?g=o[(h+2)%u]:(Uu.subVectors(o[u-1],o[u-2]).add(o[u-1]),g=Uu),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),T=Math.pow(v.distanceToSquared(_),S),y=Math.pow(_.distanceToSquared(g),S);T<1e-4&&(T=1),E<1e-4&&(E=T),y<1e-4&&(y=T),Nh.initNonuniformCatmullRom(m.x,v.x,_.x,g.x,E,T,y),Oh.initNonuniformCatmullRom(m.y,v.y,_.y,g.y,E,T,y),Ph.initNonuniformCatmullRom(m.z,v.z,_.z,g.z,E,T,y)}else this.curveType==="catmullrom"&&(Nh.initCatmullRom(m.x,v.x,_.x,g.x,this.tension),Oh.initCatmullRom(m.y,v.y,_.y,g.y,this.tension),Ph.initCatmullRom(m.z,v.z,_.z,g.z,this.tension));return a.set(Nh.calc(p),Oh.calc(p),Ph.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const o=this.points[i];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(new W().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xv(s,t,i,a,o){const u=(a-t)*.5,f=(o-i)*.5,h=s*s,p=s*h;return(2*i-2*a+u+f)*p+(-3*i+3*a-2*u-f)*h+u*s+i}function kT(s,t){const i=1-s;return i*i*t}function XT(s,t){return 2*(1-s)*s*t}function WT(s,t){return s*s*t}function Ho(s,t,i,a){return kT(s,t)+XT(s,i)+WT(s,a)}function qT(s,t){const i=1-s;return i*i*i*t}function YT(s,t){const i=1-s;return 3*i*i*s*t}function jT(s,t){return 3*(1-s)*s*s*t}function ZT(s,t){return s*s*s*t}function Go(s,t,i,a,o){return qT(s,t)+YT(s,i)+jT(s,a)+ZT(s,o)}class KT extends fa{constructor(t=new ee,i=new ee,a=new ee,o=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=o}getPoint(t,i=new ee){const a=i,o=this.v0,u=this.v1,f=this.v2,h=this.v3;return a.set(Go(t,o.x,u.x,f.x,h.x),Go(t,o.y,u.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class QT extends fa{constructor(t=new W,i=new W,a=new W,o=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=o}getPoint(t,i=new W){const a=i,o=this.v0,u=this.v1,f=this.v2,h=this.v3;return a.set(Go(t,o.x,u.x,f.x,h.x),Go(t,o.y,u.y,f.y,h.y),Go(t,o.z,u.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class JT extends fa{constructor(t=new ee,i=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ee){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ee){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $T extends fa{constructor(t=new W,i=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new W){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new W){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tb extends fa{constructor(t=new ee,i=new ee,a=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new ee){const a=i,o=this.v0,u=this.v1,f=this.v2;return a.set(Ho(t,o.x,u.x,f.x),Ho(t,o.y,u.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G_ extends fa{constructor(t=new W,i=new W,a=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new W){const a=i,o=this.v0,u=this.v1,f=this.v2;return a.set(Ho(t,o.x,u.x,f.x),Ho(t,o.y,u.y,f.y),Ho(t,o.z,u.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eb extends fa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ee){const a=i,o=this.points,u=(o.length-1)*t,f=Math.floor(u),h=u-f,p=o[f===0?f:f-1],m=o[f],g=o[f>o.length-2?o.length-1:f+1],v=o[f>o.length-3?o.length-1:f+2];return a.set(xv(h,p.x,m.x,g.x,v.x),xv(h,p.y,m.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const o=this.points[i];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(new ee().fromArray(o))}return this}}var nb=Object.freeze({__proto__:null,ArcCurve:VT,CatmullRomCurve3:H_,CubicBezierCurve:KT,CubicBezierCurve3:QT,EllipseCurve:F_,LineCurve:JT,LineCurve3:$T,QuadraticBezierCurve:tb,QuadraticBezierCurve3:G_,SplineCurve:eb});class Qu extends ca{constructor(t=1,i=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:o};const u=t/2,f=i/2,h=Math.floor(a),p=Math.floor(o),m=h+1,g=p+1,v=t/h,_=i/p,S=[],E=[],T=[],y=[];for(let x=0;x<g;x++){const O=x*_-f;for(let D=0;D<m;D++){const C=D*v-u;E.push(C,-O,0),T.push(0,0,1),y.push(D/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<h;O++){const D=O+m*x,C=O+m*(x+1),I=O+1+m*(x+1),H=O+1+m*x;S.push(D,C,H),S.push(C,I,H)}this.setIndex(S),this.setAttribute("position",new xi(E,3)),this.setAttribute("normal",new xi(T,3)),this.setAttribute("uv",new xi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.width,t.height,t.widthSegments,t.heightSegments)}}class $d extends ca{constructor(t=new G_(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),i=64,a=1,o=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:o,closed:u};const f=t.computeFrenetFrames(i,u);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const h=new W,p=new W,m=new ee;let g=new W;const v=[],_=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new xi(v,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(S,2));function T(){for(let D=0;D<i;D++)y(D);y(u===!1?i:0),O(),x()}function y(D){g=t.getPointAt(D/i,g);const C=f.normals[D],I=f.binormals[D];for(let H=0;H<=o;H++){const B=H/o*Math.PI*2,X=Math.sin(B),U=-Math.cos(B);p.x=U*C.x+X*I.x,p.y=U*C.y+X*I.y,p.z=U*C.z+X*I.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,v.push(h.x,h.y,h.z)}}function x(){for(let D=1;D<=i;D++)for(let C=1;C<=o;C++){const I=(o+1)*(D-1)+(C-1),H=(o+1)*D+(C-1),B=(o+1)*D+C,X=(o+1)*(D-1)+C;E.push(I,H,X),E.push(H,B,X)}}function O(){for(let D=0;D<=i;D++)for(let C=0;C<=o;C++)m.x=D/i,m.y=C/o,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $d(new nb[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class yv extends tl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=R_,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ib extends tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ab extends tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tp extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const zh=new je,Sv=new W,Mv=new W;class V_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;Sv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Sv),Mv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Mv),i.updateMatrixWorld(),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ev=new je,Po=new W,Bh=new W;class rb extends V_{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,i=0){const a=this.camera,o=this.matrix,u=t.distance||a.far;u!==a.far&&(a.far=u,a.updateProjectionMatrix()),Po.setFromMatrixPosition(t.matrixWorld),a.position.copy(Po),Bh.copy(a.position),Bh.add(this._cubeDirections[i]),a.up.copy(this._cubeUps[i]),a.lookAt(Bh),a.updateMatrixWorld(),o.makeTranslation(-Po.x,-Po.y,-Po.z),Ev.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ev)}}class sb extends tp{constructor(t,i,a=0,o=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new rb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class k_ extends z_{constructor(t=-1,i=1,a=1,o=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=o,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,o,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-t,f=a+t,h=o+i,p=o-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ob extends V_{constructor(){super(new k_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lb extends tp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new ob}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ub extends tp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class cb extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Tv(s,t,i,a){const o=hb(a);switch(i){case M_:return s*t;case T_:return s*t/o.components*o.byteLength;case Xd:return s*t/o.components*o.byteLength;case b_:return s*t*2/o.components*o.byteLength;case Wd:return s*t*2/o.components*o.byteLength;case E_:return s*t*3/o.components*o.byteLength;case vi:return s*t*4/o.components*o.byteLength;case qd:return s*t*4/o.components*o.byteLength;case Iu:case Fu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hu:case Gu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:case ld:return Math.max(s,16)*Math.max(t,8)/4;case rd:case od:return Math.max(s,8)*Math.max(t,8)/2;case ud:case cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Md:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vu:case Ad:case Rd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case A_:case wd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cd:case Dd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hb(s){switch(s){case Li:case x_:return{byteLength:1,components:1};case ko:case y_:case Qo:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case Rr:case Gd:case ra:return{byteLength:4,components:1};case S_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X_(){let s=null,t=!1,i=null,a=null;function o(u,f){i(u,f),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function db(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:u,update:f}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
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
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
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
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
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
#endif`,Eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,wb=`#ifdef USE_BUMPMAP
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bb=`#define PI 3.141592653589793
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
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
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
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r1=`uniform bool receiveShadow;
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
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,h1=`struct PhysicalMaterial {
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
}`,d1=`
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E1=`#if defined( USE_POINTS_UV )
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
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
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
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z1=`#ifdef USE_NORMALMAP
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
#endif`,B1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tA=`#ifdef USE_SKINNING
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
#endif`,eA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nA=`#ifdef USE_SKINNING
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
#endif`,iA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oA=`#ifdef USE_TRANSMISSION
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
#endif`,lA=`#ifdef USE_TRANSMISSION
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pA=`uniform sampler2D t2D;
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`#include <common>
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
}`,yA=`#if DEPTH_PACKING == 3200
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
}`,SA=`#define DISTANCE
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
}`,MA=`#define DISTANCE
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`uniform float scale;
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
}`,AA=`uniform vec3 diffuse;
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
}`,RA=`#include <common>
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
}`,wA=`uniform vec3 diffuse;
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
}`,CA=`#define LAMBERT
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
}`,DA=`#define LAMBERT
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
}`,UA=`#define MATCAP
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
}`,LA=`#define MATCAP
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
}`,NA=`#define NORMAL
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
}`,OA=`#define NORMAL
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
}`,PA=`#define PHONG
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
}`,zA=`#define PHONG
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
}`,BA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,FA=`#define TOON
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
}`,HA=`#define TOON
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
}`,GA=`uniform float size;
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
}`,VA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,XA=`uniform vec3 color;
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
}`,WA=`uniform float rotation;
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
}`,qA=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:vb,alphatest_fragment:_b,alphatest_pars_fragment:xb,aomap_fragment:yb,aomap_pars_fragment:Sb,batching_pars_vertex:Mb,batching_vertex:Eb,begin_vertex:Tb,beginnormal_vertex:bb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:zb,common:Bb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Gb,emissivemap_fragment:Vb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:s1,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:t1,gradientmap_pars_fragment:e1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:a1,lights_pars_begin:r1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:u1,lights_phong_pars_fragment:c1,lights_physical_fragment:f1,lights_physical_pars_fragment:h1,lights_fragment_begin:d1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:v1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:S1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:b1,morphinstance_vertex:A1,morphcolor_vertex:R1,morphnormal_vertex:w1,morphtarget_pars_vertex:C1,morphtarget_vertex:D1,normal_fragment_begin:U1,normal_fragment_maps:L1,normal_pars_fragment:N1,normal_pars_vertex:O1,normal_vertex:P1,normalmap_pars_fragment:z1,clearcoat_normal_fragment_begin:B1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:H1,opaque_fragment:G1,packing:V1,premultiplied_alpha_fragment:k1,project_vertex:X1,dithering_fragment:W1,dithering_pars_fragment:q1,roughnessmap_fragment:Y1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:K1,shadowmap_vertex:Q1,shadowmask_pars_fragment:J1,skinbase_vertex:$1,skinning_pars_vertex:tA,skinning_vertex:eA,skinnormal_vertex:nA,specularmap_fragment:iA,specularmap_pars_fragment:aA,tonemapping_fragment:rA,tonemapping_pars_fragment:sA,transmission_fragment:oA,transmission_pars_fragment:lA,uv_pars_fragment:uA,uv_pars_vertex:cA,uv_vertex:fA,worldpos_vertex:hA,background_vert:dA,background_frag:pA,backgroundCube_vert:mA,backgroundCube_frag:gA,cube_vert:vA,cube_frag:_A,depth_vert:xA,depth_frag:yA,distanceRGBA_vert:SA,distanceRGBA_frag:MA,equirect_vert:EA,equirect_frag:TA,linedashed_vert:bA,linedashed_frag:AA,meshbasic_vert:RA,meshbasic_frag:wA,meshlambert_vert:CA,meshlambert_frag:DA,meshmatcap_vert:UA,meshmatcap_frag:LA,meshnormal_vert:NA,meshnormal_frag:OA,meshphong_vert:PA,meshphong_frag:zA,meshphysical_vert:BA,meshphysical_frag:IA,meshtoon_vert:FA,meshtoon_frag:HA,points_vert:GA,points_frag:VA,shadow_vert:kA,shadow_frag:XA,sprite_vert:WA,sprite_frag:qA},Ot={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ai={basic:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:On([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:On([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:On([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:On([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:On([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:On([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:On([Ot.common,Ot.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:On([Ot.lights,Ot.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ai.physical={uniforms:On([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Lu={r:0,b:0,g:0},xr=new Ni,YA=new je;function jA(s,t,i,a,o,u,f){const h=new we(0);let p=u===!0?0:1,m,g,v=null,_=0,S=null;function E(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?i:t).get(C)),C}function T(D){let C=!1;const I=E(D);I===null?x(h,p):I&&I.isColor&&(x(I,1),C=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,C){const I=E(C);I&&(I.isCubeTexture||I.mapping===Ku)?(g===void 0&&(g=new li(new el(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Cs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),xr.copy(C.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(YA.makeRotationFromEuler(xr)),g.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Fe,(v!==I||_!==I.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=I,_=I.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new li(new Qu(2,2),new ja({name:"BackgroundMaterial",uniforms:Cs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Fe,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||_!==I.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,_=I.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function x(D,C){D.getRGB(Lu,P_(s)),a.buffers.color.setClear(Lu.r,Lu.g,Lu.b,C,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,C=1){h.set(D),p=C,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(h,p)},render:T,addToRenderList:y,dispose:O}}function ZA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let u=o,f=!1;function h(w,V,lt,ot,gt){let ct=!1;const z=v(ot,lt,V);u!==z&&(u=z,m(u.object)),ct=S(w,ot,lt,gt),ct&&E(w,ot,lt,gt),gt!==null&&t.update(gt,s.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,C(w,V,lt,ot),gt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,V,lt){const ot=lt.wireframe===!0;let gt=a[w.id];gt===void 0&&(gt={},a[w.id]=gt);let ct=gt[V.id];ct===void 0&&(ct={},gt[V.id]=ct);let z=ct[ot];return z===void 0&&(z=_(p()),ct[ot]=z),z}function _(w){const V=[],lt=[],ot=[];for(let gt=0;gt<i;gt++)V[gt]=0,lt[gt]=0,ot[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:ot,object:w,attributes:{},index:null}}function S(w,V,lt,ot){const gt=u.attributes,ct=V.attributes;let z=0;const K=lt.getAttributes();for(const j in K)if(K[j].location>=0){const L=gt[j];let tt=ct[j];if(tt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),L===void 0||L.attribute!==tt||tt&&L.data!==tt.data)return!0;z++}return u.attributesNum!==z||u.index!==ot}function E(w,V,lt,ot){const gt={},ct=V.attributes;let z=0;const K=lt.getAttributes();for(const j in K)if(K[j].location>=0){let L=ct[j];L===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const tt={};tt.attribute=L,L&&L.data&&(tt.data=L.data),gt[j]=tt,z++}u.attributes=gt,u.attributesNum=z,u.index=ot}function T(){const w=u.newAttributes;for(let V=0,lt=w.length;V<lt;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const lt=u.newAttributes,ot=u.enabledAttributes,gt=u.attributeDivisors;lt[w]=1,ot[w]===0&&(s.enableVertexAttribArray(w),ot[w]=1),gt[w]!==V&&(s.vertexAttribDivisor(w,V),gt[w]=V)}function O(){const w=u.newAttributes,V=u.enabledAttributes;for(let lt=0,ot=V.length;lt<ot;lt++)V[lt]!==w[lt]&&(s.disableVertexAttribArray(lt),V[lt]=0)}function D(w,V,lt,ot,gt,ct,z){z===!0?s.vertexAttribIPointer(w,V,lt,gt,ct):s.vertexAttribPointer(w,V,lt,ot,gt,ct)}function C(w,V,lt,ot){T();const gt=ot.attributes,ct=lt.getAttributes(),z=V.defaultAttributeValues;for(const K in ct){const j=ct[K];if(j.location>=0){let Tt=gt[K];if(Tt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),Tt!==void 0){const L=Tt.normalized,tt=Tt.itemSize,yt=t.get(Tt);if(yt===void 0)continue;const Mt=yt.buffer,J=yt.type,vt=yt.bytesPerElement,Et=J===s.INT||J===s.UNSIGNED_INT||Tt.gpuType===Gd;if(Tt.isInterleavedBufferAttribute){const wt=Tt.data,Dt=wt.stride,ue=Tt.offset;if(wt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<j.locationSize;Jt++)x(j.location+Jt,wt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Jt=0;Jt<j.locationSize;Jt++)y(j.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Jt=0;Jt<j.locationSize;Jt++)D(j.location+Jt,tt/j.locationSize,J,L,Dt*vt,(ue+tt/j.locationSize*Jt)*vt,Et)}else{if(Tt.isInstancedBufferAttribute){for(let wt=0;wt<j.locationSize;wt++)x(j.location+wt,Tt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let wt=0;wt<j.locationSize;wt++)y(j.location+wt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let wt=0;wt<j.locationSize;wt++)D(j.location+wt,tt/j.locationSize,J,L,tt*vt,tt/j.locationSize*wt*vt,Et)}}else if(z!==void 0){const L=z[K];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(j.location,L);break;case 3:s.vertexAttrib3fv(j.location,L);break;case 4:s.vertexAttrib4fv(j.location,L);break;default:s.vertexAttrib1fv(j.location,L)}}}}O()}function I(){X();for(const w in a){const V=a[w];for(const lt in V){const ot=V[lt];for(const gt in ot)g(ot[gt].object),delete ot[gt];delete V[lt]}delete a[w]}}function H(w){if(a[w.id]===void 0)return;const V=a[w.id];for(const lt in V){const ot=V[lt];for(const gt in ot)g(ot[gt].object),delete ot[gt];delete V[lt]}delete a[w.id]}function B(w){for(const V in a){const lt=a[V];if(lt[w.id]===void 0)continue;const ot=lt[w.id];for(const gt in ot)g(ot[gt].object),delete ot[gt];delete lt[w.id]}}function X(){U(),f=!0,u!==o&&(u=o,m(u.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function KA(s,t,i){let a;function o(m){a=m}function u(m,g){s.drawArrays(a,m,g),i.update(g,a,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),i.update(g,a,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,a,1)}function p(m,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(a,m,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];i.update(E,a,1)}}this.setMode=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function QA(s,t,i,a){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(B){return!(B!==vi&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Li&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ra&&!X)}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:I,maxSamples:H}}function JA(s){const t=this;let i=null,a=0,o=!1,u=!1;const f=new Sr,h=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||a!==0||o;return o=_,a=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!o||E===null||E.length===0||u&&!y)u?g(null):m();else{const O=u?0:a,D=O*4;let C=x.clippingState||null;p.value=C,C=g(E,_,D,S);for(let I=0;I!==D;++I)C[I]=i[I];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,S,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const x=S+T*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,C=S;D!==T;++D,C+=4)f.copy(v[D]).applyMatrix4(O,h),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function $A(s){let t=new WeakMap;function i(f,h){return h===ed?f.mapping=As:h===nd&&(f.mapping=Rs),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===ed||h===nd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new zT(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",o),i(m.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const Ss=4,bv=[.125,.215,.35,.446,.526,.582],Tr=20,Ih=new k_,Av=new we;let Fh=null,Hh=0,Gh=0,Vh=!1;const Mr=(1+Math.sqrt(5))/2,xs=1/Mr,Rv=[new W(-Mr,xs,0),new W(Mr,xs,0),new W(-xs,0,Mr),new W(xs,0,Mr),new W(0,Mr,-xs),new W(0,Mr,xs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],tR=new W;class wv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,o=100,u={}){const{size:f=256,position:h=tR}=u;Fh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fh,Hh,Gh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,Nu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Qo,format:vi,colorSpace:ws,depthBuffer:!1},o=Cv(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(t,i,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eR(u)),this._blurMaterial=nR(u,t,i)}return o}_compileMaterial(t){const i=new li(this._lodPlanes[0],t);this._renderer.compile(i,Ih)}_sceneToCubeUV(t,i,a,o,u){const p=new Jn(90,1,i,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(Av),v.toneMapping=qa,v.autoClear=!1;const E=new Kd({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),T=new li(new el,E);let y=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,y=!0):(E.color.copy(Av),y=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[O],u.y,u.z)):D===1?(p.up.set(0,0,m[O]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[O],u.z)):(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[O]));const C=this._cubeSize;Nu(o,D*C,O>2?C:0,C,C),v.setRenderTarget(o),y&&v.render(T,p),v.render(t,p)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=_,t.background=x}_textureToCubeUV(t,i){const a=this._renderer,o=t.mapping===As||t.mapping===Rs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dv());const u=o?this._cubemapMaterial:this._equirectMaterial,f=new li(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Nu(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,Ih)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Rv[(o-u-1)%Rv.length];this._blur(t,u-1,u,f,h)}i.autoClear=a}_blur(t,i,a,o,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,o,"latitudinal",u),this._halfBlur(f,t,a,a,o,"longitudinal",u)}_halfBlur(t,i,a,o,u,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new li(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),T=u/E,y=isFinite(u)?1+Math.floor(g*T):Tr;y>Tr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Tr}`);const x=[];let O=0;for(let B=0;B<Tr;++B){const X=B/T,U=Math.exp(-X*X/2);x.push(U),B===0?O+=U:B<y&&(O+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-a;const C=this._sizeLods[o],I=3*C*(o>D-Ss?o-D+Ss:0),H=4*(this._cubeSize-C);Nu(i,I,H,3*C,2*C),p.setRenderTarget(i),p.render(v,Ih)}}function eR(s){const t=[],i=[],a=[];let o=s;const u=s-Ss+1+bv.length;for(let f=0;f<u;f++){const h=Math.pow(2,o);i.push(h);let p=1/h;f>s-Ss?p=bv[f-s+Ss-1]:f===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,T=3,y=2,x=1,O=new Float32Array(T*E*S),D=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let H=0;H<S;H++){const B=H%3*2/3-1,X=H>2?0:-1,U=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];O.set(U,T*E*H),D.set(_,y*E*H);const w=[H,H,H,H,H,H];C.set(w,x*E*H)}const I=new ca;I.setAttribute("position",new Di(O,T)),I.setAttribute("uv",new Di(D,y)),I.setAttribute("faceIndex",new Di(C,x)),t.push(I),o>Ss&&o--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function Cv(s,t,i){const a=new wr(s,t,i);return a.texture.mapping=Ku,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Nu(s,t,i,a,o){s.viewport.set(t,i,a,o),s.scissor.set(t,i,a,o)}function nR(s,t,i){const a=new Float32Array(Tr),o=new W(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Dv(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Uv(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

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
	`}function iR(s){let t=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===ed||p===nd,g=p===As||p===Rs;if(m||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new wv(s)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&o(S)?(i===null&&(i=new wv(s)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function aR(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return t[a]=o,o}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const o=i(a);return o===null&&Es("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function rR(s,t,i,a){const o={},u=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete o[_.id];const S=u.get(_);S&&(t.remove(S),u.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function m(v){const _=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let D=0,C=O.length;D<C;D+=3){const I=O[D+0],H=O[D+1],B=O[D+2];_.push(I,H,H,B,B,I)}}else if(E!==void 0){const O=E.array;T=E.version;for(let D=0,C=O.length/3-1;D<C;D+=3){const I=D+0,H=D+1,B=D+2;_.push(I,H,H,B,B,I)}}else return;const y=new(C_(_)?O_:N_)(_,1);y.version=T;const x=u.get(v);x&&t.remove(x),u.set(v,y)}function g(v){const _=u.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function sR(s,t,i){let a;function o(_){a=_}let u,f;function h(_){u=_.type,f=_.bytesPerElement}function p(_,S){s.drawElements(a,S,u,_*f),i.update(S,a,1)}function m(_,S,E){E!==0&&(s.drawElementsInstanced(a,S,u,_*f,E),i.update(S,a,E))}function g(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,u,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];i.update(y,a,1)}function v(_,S,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)m(_[x]/f,S[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,u,_,0,T,0,E);let x=0;for(let O=0;O<E;O++)x+=S[O]*T[O];i.update(x,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function oR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:a}}function lR(s,t,i){const a=new WeakMap,o=new He;function u(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let w=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var S=w;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let I=h.attributes.position.count*C,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*H*4*v),X=new D_(B,I,H,v);X.type=ra,X.needsUpdate=!0;const U=C*4;for(let V=0;V<v;V++){const lt=x[V],ot=O[V],gt=D[V],ct=I*H*4*V;for(let z=0;z<lt.count;z++){const K=z*U;E===!0&&(o.fromBufferAttribute(lt,z),B[ct+K+0]=o.x,B[ct+K+1]=o.y,B[ct+K+2]=o.z,B[ct+K+3]=0),T===!0&&(o.fromBufferAttribute(ot,z),B[ct+K+4]=o.x,B[ct+K+5]=o.y,B[ct+K+6]=o.z,B[ct+K+7]=0),y===!0&&(o.fromBufferAttribute(gt,z),B[ct+K+8]=o.x,B[ct+K+9]=o.y,B[ct+K+10]=o.z,B[ct+K+11]=gt.itemSize===4?o.w:1)}}_={count:v,texture:X,size:new ee(I,H)},a.set(h,_),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:u}}function uR(s,t,i,a){let o=new WeakMap;function u(p){const m=a.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==m&&(t.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return v}function f(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const W_=new Gn,Lv=new I_(1,1),q_=new D_,Y_=new _T,j_=new B_,Nv=[],Ov=[],Pv=new Float32Array(16),zv=new Float32Array(9),Bv=new Float32Array(4);function Os(s,t,i){const a=s[0];if(a<=0||a>0)return s;const o=t*i;let u=Nv[o];if(u===void 0&&(u=new Float32Array(o),Nv[o]=u),t!==0){a.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(u,h)}return u}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function Ju(s,t){let i=Ov[t];i===void 0&&(i=new Int32Array(t),Ov[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function cR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function fR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function hR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function dR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function pR(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,a))return;Bv.set(a),s.uniformMatrix2fv(this.addr,!1,Bv),hn(i,a)}}function mR(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,a))return;zv.set(a),s.uniformMatrix3fv(this.addr,!1,zv),hn(i,a)}}function gR(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,a))return;Pv.set(a),s.uniformMatrix4fv(this.addr,!1,Pv),hn(i,a)}}function vR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function _R(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function xR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function yR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function SR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function MR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function ER(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function TR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function bR(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?(Lv.compareFunction=w_,u=Lv):u=W_,i.setTexture2D(t||u,o)}function AR(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTexture3D(t||Y_,o)}function RR(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTextureCube(t||j_,o)}function wR(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTexture2DArray(t||q_,o)}function CR(s){switch(s){case 5126:return cR;case 35664:return fR;case 35665:return hR;case 35666:return dR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return vR;case 35667:case 35671:return _R;case 35668:case 35672:return xR;case 35669:case 35673:return yR;case 5125:return SR;case 36294:return MR;case 36295:return ER;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return wR}}function DR(s,t){s.uniform1fv(this.addr,t)}function UR(s,t){const i=Os(t,this.size,2);s.uniform2fv(this.addr,i)}function LR(s,t){const i=Os(t,this.size,3);s.uniform3fv(this.addr,i)}function NR(s,t){const i=Os(t,this.size,4);s.uniform4fv(this.addr,i)}function OR(s,t){const i=Os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function PR(s,t){const i=Os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function zR(s,t){const i=Os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function BR(s,t){s.uniform1iv(this.addr,t)}function IR(s,t){s.uniform2iv(this.addr,t)}function FR(s,t){s.uniform3iv(this.addr,t)}function HR(s,t){s.uniform4iv(this.addr,t)}function GR(s,t){s.uniform1uiv(this.addr,t)}function VR(s,t){s.uniform2uiv(this.addr,t)}function kR(s,t){s.uniform3uiv(this.addr,t)}function XR(s,t){s.uniform4uiv(this.addr,t)}function WR(s,t,i){const a=this.cache,o=t.length,u=Ju(i,o);fn(a,u)||(s.uniform1iv(this.addr,u),hn(a,u));for(let f=0;f!==o;++f)i.setTexture2D(t[f]||W_,u[f])}function qR(s,t,i){const a=this.cache,o=t.length,u=Ju(i,o);fn(a,u)||(s.uniform1iv(this.addr,u),hn(a,u));for(let f=0;f!==o;++f)i.setTexture3D(t[f]||Y_,u[f])}function YR(s,t,i){const a=this.cache,o=t.length,u=Ju(i,o);fn(a,u)||(s.uniform1iv(this.addr,u),hn(a,u));for(let f=0;f!==o;++f)i.setTextureCube(t[f]||j_,u[f])}function jR(s,t,i){const a=this.cache,o=t.length,u=Ju(i,o);fn(a,u)||(s.uniform1iv(this.addr,u),hn(a,u));for(let f=0;f!==o;++f)i.setTexture2DArray(t[f]||q_,u[f])}function ZR(s){switch(s){case 5126:return DR;case 35664:return UR;case 35665:return LR;case 35666:return NR;case 35674:return OR;case 35675:return PR;case 35676:return zR;case 5124:case 35670:return BR;case 35667:case 35671:return IR;case 35668:case 35672:return FR;case 35669:case 35673:return HR;case 5125:return GR;case 36294:return VR;case 36295:return kR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return YR;case 36289:case 36303:case 36311:case 36292:return jR}}class KR{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=CR(i.type)}}class QR{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ZR(i.type)}}class JR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const o=this.seq;for(let u=0,f=o.length;u!==f;++u){const h=o[u];h.setValue(t,i[h.id],a)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function Iv(s,t){s.seq.push(t),s.map[t.id]=t}function $R(s,t,i){const a=s.name,o=a.length;for(kh.lastIndex=0;;){const u=kh.exec(a),f=kh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===o){Iv(i,m===void 0?new KR(h,s,t):new QR(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new JR(h),Iv(i,v)),i=v}}}class ku{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const u=t.getActiveUniform(i,o),f=t.getUniformLocation(i,u.name);$R(u,f,this)}}setValue(t,i,a,o){const u=this.map[i];u!==void 0&&u.setValue(t,a,o)}setOptional(t,i,a){const o=i[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,i,a,o){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,i){const a=[];for(let o=0,u=t.length;o!==u;++o){const f=t[o];f.id in i&&a.push(f)}return a}}function Fv(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const tw=37297;let ew=0;function nw(s,t){const i=s.split(`
`),a=[],o=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=o;f<u;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const Hv=new le;function iw(s){Ae._getMatrix(Hv,Ae.workingColorSpace,s);const t=`mat3( ${Hv.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(s)){case Wu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Gv(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+o+`

`+nw(s.getShaderSource(t),f)}else return o}function aw(s,t){const i=iw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function rw(s,t){let i;switch(t){case wE:i="Linear";break;case CE:i="Reinhard";break;case DE:i="Cineon";break;case UE:i="ACESFilmic";break;case NE:i="AgX";break;case OE:i="Neutral";break;case LE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new W;function sw(){Ae.getLuminanceCoefficients(Ou);const s=Ou.x.toFixed(4),t=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ow(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function lw(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function uw(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=s.getActiveAttrib(t,o),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function Bo(s){return s!==""}function Vv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(s){return s.replace(cw,hw)}const fw=new Map;function hw(s,t){let i=fe[t];if(i===void 0){const a=fw.get(t);if(a!==void 0)i=fe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Ud(i)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xv(s){return s.replace(dw,pw)}function pw(s,t,i,a){let o="";for(let u=parseInt(t);u<parseInt(i);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Wv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function mw(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===g_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===oE?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function gw(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case Ku:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vw(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function _w(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case v_:t="ENVMAP_BLENDING_MULTIPLY";break;case AE:t="ENVMAP_BLENDING_MIX";break;case RE:t="ENVMAP_BLENDING_ADD";break}return t}function xw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function yw(s,t,i,a){const o=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=mw(i),m=gw(i),g=vw(i),v=_w(i),_=xw(i),S=ow(i),E=lw(u),T=o.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(y=[Wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[Wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?fe.tonemapping_pars_fragment:"",i.toneMapping!==qa?rw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,aw("linearToOutputTexel",i.outputColorSpace),sw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),f=Ud(f),f=Vv(f,i),f=kv(f,i),h=Ud(h),h=Vv(h,i),h=kv(h,i),f=Xv(f),h=Xv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=O+y+f,C=O+x+h,I=Fv(o,o.VERTEX_SHADER,D),H=Fv(o,o.FRAGMENT_SHADER,C);o.attachShader(T,I),o.attachShader(T,H),i.index0AttributeName!==void 0?o.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function B(V){if(s.debug.checkShaderErrors){const lt=o.getProgramInfoLog(T).trim(),ot=o.getShaderInfoLog(I).trim(),gt=o.getShaderInfoLog(H).trim();let ct=!0,z=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ct=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,I,H);else{const K=Gv(o,I,"vertex"),j=Gv(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+K+`
`+j)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(ot===""||gt==="")&&(z=!1);z&&(V.diagnostics={runnable:ct,programLog:lt,vertexShader:{log:ot,prefix:y},fragmentShader:{log:gt,prefix:x}})}o.deleteShader(I),o.deleteShader(H),X=new ku(o,T),U=uw(o,T)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,tw)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ew++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=H,this}let Sw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(i),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new Ew(t),i.set(t,a)),a}}class Ew{constructor(t){this.id=Sw++,this.code=t,this.usedTimes=0}}function Tw(s,t,i,a,o,u,f){const h=new U_,p=new Mw,m=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return m.add(U),U===0?"uv":`uv${U}`}function y(U,w,V,lt,ot){const gt=lt.fog,ct=ot.geometry,z=U.isMeshStandardMaterial?lt.environment:null,K=(U.isMeshStandardMaterial?i:t).get(U.envMap||z),j=K&&K.mapping===Ku?K.image.height:null,Tt=E[U.type];U.precision!==null&&(S=o.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const L=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,tt=L!==void 0?L.length:0;let yt=0;ct.morphAttributes.position!==void 0&&(yt=1),ct.morphAttributes.normal!==void 0&&(yt=2),ct.morphAttributes.color!==void 0&&(yt=3);let Mt,J,vt,Et;if(Tt){const Te=Ai[Tt];Mt=Te.vertexShader,J=Te.fragmentShader}else Mt=U.vertexShader,J=U.fragmentShader,p.update(U),vt=p.getVertexShaderID(U),Et=p.getFragmentShaderID(U);const wt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),ue=ot.isInstancedMesh===!0,Jt=ot.isBatchedMesh===!0,Oe=!!U.map,Ge=!!U.matcap,xe=!!K,F=!!U.aoMap,yn=!!U.lightMap,Ee=!!U.bumpMap,ge=!!U.normalMap,kt=!!U.displacementMap,ye=!!U.emissiveMap,Zt=!!U.metalnessMap,se=!!U.roughnessMap,$e=U.anisotropy>0,N=U.clearcoat>0,b=U.dispersion>0,et=U.iridescence>0,dt=U.sheen>0,mt=U.transmission>0,ut=$e&&!!U.anisotropyMap,zt=N&&!!U.clearcoatMap,Lt=N&&!!U.clearcoatNormalMap,Vt=N&&!!U.clearcoatRoughnessMap,Xt=et&&!!U.iridescenceMap,St=et&&!!U.iridescenceThicknessMap,Bt=dt&&!!U.sheenColorMap,Yt=dt&&!!U.sheenRoughnessMap,jt=!!U.specularMap,Ct=!!U.specularColorMap,re=!!U.specularIntensityMap,k=mt&&!!U.transmissionMap,Nt=mt&&!!U.thicknessMap,bt=!!U.gradientMap,It=!!U.alphaMap,Rt=U.alphaTest>0,xt=!!U.alphaHash,Ht=!!U.extensions;let ae=qa;U.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Ue={shaderID:Tt,shaderType:U.type,shaderName:U.name,vertexShader:Mt,fragmentShader:J,defines:U.defines,customVertexShaderID:vt,customFragmentShaderID:Et,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Jt,batchingColor:Jt&&ot._colorsTexture!==null,instancing:ue,instancingColor:ue&&ot.instanceColor!==null,instancingMorph:ue&&ot.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ws,alphaToCoverage:!!U.alphaToCoverage,map:Oe,matcap:Ge,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:yn,bumpMap:Ee,normalMap:ge,displacementMap:_&&kt,emissiveMap:ye,normalMapObjectSpace:ge&&U.normalMapType===IE,normalMapTangentSpace:ge&&U.normalMapType===R_,metalnessMap:Zt,roughnessMap:se,anisotropy:$e,anisotropyMap:ut,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,dispersion:b,iridescence:et,iridescenceMap:Xt,iridescenceThicknessMap:St,sheen:dt,sheenColorMap:Bt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:re,transmission:mt,transmissionMap:k,thicknessMap:Nt,gradientMap:bt,opaque:U.transparent===!1&&U.blending===Ms&&U.alphaToCoverage===!1,alphaMap:It,alphaTest:Rt,alphaHash:xt,combine:U.combine,mapUv:Oe&&T(U.map.channel),aoMapUv:F&&T(U.aoMap.channel),lightMapUv:yn&&T(U.lightMap.channel),bumpMapUv:Ee&&T(U.bumpMap.channel),normalMapUv:ge&&T(U.normalMap.channel),displacementMapUv:kt&&T(U.displacementMap.channel),emissiveMapUv:ye&&T(U.emissiveMap.channel),metalnessMapUv:Zt&&T(U.metalnessMap.channel),roughnessMapUv:se&&T(U.roughnessMap.channel),anisotropyMapUv:ut&&T(U.anisotropyMap.channel),clearcoatMapUv:zt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:St&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&T(U.sheenRoughnessMap.channel),specularMapUv:jt&&T(U.specularMap.channel),specularColorMapUv:Ct&&T(U.specularColorMap.channel),specularIntensityMapUv:re&&T(U.specularIntensityMap.channel),transmissionMapUv:k&&T(U.transmissionMap.channel),thicknessMapUv:Nt&&T(U.thicknessMap.channel),alphaMapUv:It&&T(U.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ge||$e),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ct.attributes.uv&&(Oe||It),fog:!!gt,useFog:U.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Dt,skinning:ot.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Oe&&U.map.isVideoTexture===!0&&Ae.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:ye&&U.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ri,flipSided:U.side===Hn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Ht&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&U.extensions.multiDraw===!0||Jt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ue.vertexUv1s=m.has(1),Ue.vertexUv2s=m.has(2),Ue.vertexUv3s=m.has(3),m.clear(),Ue}function x(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)w.push(V),w.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(O(w,U),D(w,U),w.push(s.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function O(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function D(U,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const w=E[U.type];let V;if(w){const lt=Ai[w];V=LT.clone(lt.uniforms)}else V=U.uniforms;return V}function I(U,w){let V;for(let lt=0,ot=g.length;lt<ot;lt++){const gt=g[lt];if(gt.cacheKey===w){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new yw(s,w,U,u),g.push(V)),V}function H(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function B(U){p.remove(U)}function X(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:I,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:X}}function bw(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function o(f,h,p){s.get(f)[h]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:a,update:o,dispose:u}}function Aw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function qv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Yv(){const s=[];let t=0;const i=[],a=[],o=[];function u(){t=0,i.length=0,a.length=0,o.length=0}function f(v,_,S,E,T,y){let x=s[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=T,x.group=y),t++,x}function h(v,_,S,E,T,y){const x=f(v,_,S,E,T,y);S.transmission>0?a.push(x):S.transparent===!0?o.push(x):i.push(x)}function p(v,_,S,E,T,y){const x=f(v,_,S,E,T,y);S.transmission>0?a.unshift(x):S.transparent===!0?o.unshift(x):i.unshift(x)}function m(v,_){i.length>1&&i.sort(v||Aw),a.length>1&&a.sort(_||qv),o.length>1&&o.sort(_||qv)}function g(){for(let v=t,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:a,transparent:o,init:u,push:h,unshift:p,finish:g,sort:m}}function Rw(){let s=new WeakMap;function t(a,o){const u=s.get(a);let f;return u===void 0?(f=new Yv,s.set(a,[f])):o>=u.length?(f=new Yv,u.push(f)):f=u[o],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function ww(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new we};break;case"SpotLight":i={position:new W,direction:new W,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=i,i}}}function Cw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Dw=0;function Uw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Lw(s){const t=new ww,i=Cw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new W);const o=new W,u=new je,f=new je;function h(m){let g=0,v=0,_=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let S=0,E=0,T=0,y=0,x=0,O=0,D=0,C=0,I=0,H=0,B=0;m.sort(Uw);for(let U=0,w=m.length;U<w;U++){const V=m[U],lt=V.color,ot=V.intensity,gt=V.distance,ct=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=lt.r*ot,v+=lt.g*ot,_+=lt.b*ot;else if(V.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(V.sh.coefficients[z],ot);B++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,j=i.get(V);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,a.directionalShadow[S]=j,a.directionalShadowMap[S]=ct,a.directionalShadowMatrix[S]=V.shadow.matrix,O++}a.directional[S]=z,S++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(lt).multiplyScalar(ot),z.distance=gt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,a.spot[T]=z;const K=V.shadow;if(V.map&&(a.spotLightMap[I]=V.map,I++,K.updateMatrices(V),V.castShadow&&H++),a.spotLightMatrix[T]=K.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,a.spotShadow[T]=j,a.spotShadowMap[T]=ct,C++}T++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(lt).multiplyScalar(ot),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),a.rectArea[y]=z,y++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const K=V.shadow,j=i.get(V);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,a.pointShadow[E]=j,a.pointShadowMap[E]=ct,a.pointShadowMatrix[E]=V.shadow.matrix,D++}a.point[E]=z,E++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(ot),z.groundColor.copy(V.groundColor).multiplyScalar(ot),a.hemi[x]=z,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const X=a.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==O||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==I||X.numLightProbes!==B)&&(a.directional.length=S,a.spot.length=T,a.rectArea.length=y,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=C+I-H,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=B,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=O,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=I,X.numLightProbes=B,a.version=Dw++)}function p(m,g){let v=0,_=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let x=0,O=m.length;x<O;x++){const D=m[x];if(D.isDirectionalLight){const C=a.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),v++}else if(D.isSpotLight){const C=a.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(D.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const C=a.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const C=a.hemi[T];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:a}}function jv(s){const t=new Lw(s),i=[],a=[];function o(g){m.camera=g,i.length=0,a.length=0}function u(g){i.push(g)}function f(g){a.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function Nw(s){let t=new WeakMap;function i(o,u=0){const f=t.get(o);let h;return f===void 0?(h=new jv(s),t.set(o,[h])):u>=f.length?(h=new jv(s),f.push(h)):h=f[u],h}function a(){t=new WeakMap}return{get:i,dispose:a}}const Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
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
}`;function zw(s,t,i){let a=new Qd;const o=new ee,u=new ee,f=new He,h=new ib({depthPacking:BE}),p=new ab,m={},g=i.maxTextureSize,v={[Ya]:Hn,[Hn]:Ya,[Ri]:Ri},_=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Ow,fragmentShader:Pw}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new ca;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new li(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g_;let x=this.type;this.render=function(H,B,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const U=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Wa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ot=x!==aa&&this.type===aa,gt=x===aa&&this.type!==aa;for(let ct=0,z=H.length;ct<z;ct++){const K=H[ct],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const Tt=j.getFrameExtents();if(o.multiply(Tt),u.copy(j.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/Tt.x),o.x=u.x*Tt.x,j.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/Tt.y),o.y=u.y*Tt.y,j.mapSize.y=u.y)),j.map===null||ot===!0||gt===!0){const tt=this.type!==aa?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new wr(o.x,o.y,tt),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const L=j.getViewportCount();for(let tt=0;tt<L;tt++){const yt=j.getViewport(tt);f.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),lt.viewport(f),j.updateMatrices(K,tt),a=j.getFrustum(),C(B,X,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&O(j,X),j.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(U,w,V)};function O(H,B){const X=t.update(T);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new wr(o.x,o.y)),_.uniforms.shadow_pass.value=H.map.texture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,X,_,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,X,S,T,null)}function D(H,B,X,U){let w=null;const V=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=X.isPointLight===!0?p:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const lt=w.uuid,ot=B.uuid;let gt=m[lt];gt===void 0&&(gt={},m[lt]=gt);let ct=gt[ot];ct===void 0&&(ct=w.clone(),gt[ot]=ct,B.addEventListener("dispose",I)),w=ct}if(w.visible=B.visible,w.wireframe=B.wireframe,U===aa?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:v[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const lt=s.properties.get(w);lt.light=X}return w}function C(H,B,X,U,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===aa)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const ot=t.update(H),gt=H.material;if(Array.isArray(gt)){const ct=ot.groups;for(let z=0,K=ct.length;z<K;z++){const j=ct[z],Tt=gt[j.materialIndex];if(Tt&&Tt.visible){const L=D(H,Tt,U,w);H.onBeforeShadow(s,H,B,X,ot,L,j),s.renderBufferDirect(X,null,ot,L,H,j),H.onAfterShadow(s,H,B,X,ot,L,j)}}}else if(gt.visible){const ct=D(H,gt,U,w);H.onBeforeShadow(s,H,B,X,ot,ct,null),s.renderBufferDirect(X,null,ot,ct,H,null),H.onAfterShadow(s,H,B,X,ot,ct,null)}}const lt=H.children;for(let ot=0,gt=lt.length;ot<gt;ot++)C(lt[ot],B,X,U,w)}function I(H){H.target.removeEventListener("dispose",I);for(const X in m){const U=m[X],w=H.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const Bw={[jh]:Zh,[Kh]:$h,[Qh]:td,[bs]:Jh,[Zh]:jh,[$h]:Kh,[td]:Qh,[Jh]:bs};function Iw(s,t){function i(){let k=!1;const Nt=new He;let bt=null;const It=new He(0,0,0,0);return{setMask:function(Rt){bt!==Rt&&!k&&(s.colorMask(Rt,Rt,Rt,Rt),bt=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,xt,Ht,ae,Ue){Ue===!0&&(Rt*=ae,xt*=ae,Ht*=ae),Nt.set(Rt,xt,Ht,ae),It.equals(Nt)===!1&&(s.clearColor(Rt,xt,Ht,ae),It.copy(Nt))},reset:function(){k=!1,bt=null,It.set(-1,0,0,0)}}}function a(){let k=!1,Nt=!1,bt=null,It=null,Rt=null;return{setReversed:function(xt){if(Nt!==xt){const Ht=t.get("EXT_clip_control");xt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Nt=xt;const ae=Rt;Rt=null,this.setClear(ae)}},getReversed:function(){return Nt},setTest:function(xt){xt?wt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(xt){bt!==xt&&!k&&(s.depthMask(xt),bt=xt)},setFunc:function(xt){if(Nt&&(xt=Bw[xt]),It!==xt){switch(xt){case jh:s.depthFunc(s.NEVER);break;case Zh:s.depthFunc(s.ALWAYS);break;case Kh:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Qh:s.depthFunc(s.EQUAL);break;case Jh:s.depthFunc(s.GEQUAL);break;case $h:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=xt}},setLocked:function(xt){k=xt},setClear:function(xt){Rt!==xt&&(Nt&&(xt=1-xt),s.clearDepth(xt),Rt=xt)},reset:function(){k=!1,bt=null,It=null,Rt=null,Nt=!1}}}function o(){let k=!1,Nt=null,bt=null,It=null,Rt=null,xt=null,Ht=null,ae=null,Ue=null;return{setTest:function(Te){k||(Te?wt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Te){Nt!==Te&&!k&&(s.stencilMask(Te),Nt=Te)},setFunc:function(Te,Vn,dn){(bt!==Te||It!==Vn||Rt!==dn)&&(s.stencilFunc(Te,Vn,dn),bt=Te,It=Vn,Rt=dn)},setOp:function(Te,Vn,dn){(xt!==Te||Ht!==Vn||ae!==dn)&&(s.stencilOp(Te,Vn,dn),xt=Te,Ht=Vn,ae=dn)},setLocked:function(Te){k=Te},setClear:function(Te){Ue!==Te&&(s.clearStencil(Te),Ue=Te)},reset:function(){k=!1,Nt=null,bt=null,It=null,Rt=null,xt=null,Ht=null,ae=null,Ue=null}}}const u=new i,f=new a,h=new o,p=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,S=[],E=null,T=!1,y=null,x=null,O=null,D=null,C=null,I=null,H=null,B=new we(0,0,0),X=0,U=!1,w=null,V=null,lt=null,ot=null,gt=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=K>=2);let Tt=null,L={};const tt=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Mt=new He().fromArray(tt),J=new He().fromArray(yt);function vt(k,Nt,bt,It){const Rt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(k,xt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<bt;Ht++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Nt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return xt}const Et={};Et[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),wt(s.DEPTH_TEST),f.setFunc(bs),Ee(!1),ge(j0),wt(s.CULL_FACE),F(Wa);function wt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Dt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function ue(k,Nt){return v[k]!==Nt?(s.bindFramebuffer(k,Nt),v[k]=Nt,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Nt),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Jt(k,Nt){let bt=S,It=!1;if(k){bt=_.get(Nt),bt===void 0&&(bt=[],_.set(Nt,bt));const Rt=k.textures;if(bt.length!==Rt.length||bt[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Ht=Rt.length;xt<Ht;xt++)bt[xt]=s.COLOR_ATTACHMENT0+xt;bt.length=Rt.length,It=!0}}else bt[0]!==s.BACK&&(bt[0]=s.BACK,It=!0);It&&s.drawBuffers(bt)}function Oe(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Ge={[Er]:s.FUNC_ADD,[uE]:s.FUNC_SUBTRACT,[cE]:s.FUNC_REVERSE_SUBTRACT};Ge[fE]=s.MIN,Ge[hE]=s.MAX;const xe={[dE]:s.ZERO,[pE]:s.ONE,[mE]:s.SRC_COLOR,[qh]:s.SRC_ALPHA,[SE]:s.SRC_ALPHA_SATURATE,[xE]:s.DST_COLOR,[vE]:s.DST_ALPHA,[gE]:s.ONE_MINUS_SRC_COLOR,[Yh]:s.ONE_MINUS_SRC_ALPHA,[yE]:s.ONE_MINUS_DST_COLOR,[_E]:s.ONE_MINUS_DST_ALPHA,[ME]:s.CONSTANT_COLOR,[EE]:s.ONE_MINUS_CONSTANT_COLOR,[TE]:s.CONSTANT_ALPHA,[bE]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,Nt,bt,It,Rt,xt,Ht,ae,Ue,Te){if(k===Wa){T===!0&&(Dt(s.BLEND),T=!1);return}if(T===!1&&(wt(s.BLEND),T=!0),k!==lE){if(k!==y||Te!==U){if((x!==Er||C!==Er)&&(s.blendEquation(s.FUNC_ADD),x=Er,C=Er),Te)switch(k){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Z0:s.blendFunc(s.ONE,s.ONE);break;case K0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Q0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Z0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case K0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,D=null,I=null,H=null,B.set(0,0,0),X=0,y=k,U=Te}return}Rt=Rt||Nt,xt=xt||bt,Ht=Ht||It,(Nt!==x||Rt!==C)&&(s.blendEquationSeparate(Ge[Nt],Ge[Rt]),x=Nt,C=Rt),(bt!==O||It!==D||xt!==I||Ht!==H)&&(s.blendFuncSeparate(xe[bt],xe[It],xe[xt],xe[Ht]),O=bt,D=It,I=xt,H=Ht),(ae.equals(B)===!1||Ue!==X)&&(s.blendColor(ae.r,ae.g,ae.b,Ue),B.copy(ae),X=Ue),y=k,U=!1}function yn(k,Nt){k.side===Ri?Dt(s.CULL_FACE):wt(s.CULL_FACE);let bt=k.side===Hn;Nt&&(bt=!bt),Ee(bt),k.blending===Ms&&k.transparent===!1?F(Wa):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const It=k.stencilWrite;h.setTest(It),It&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function ge(k){k!==rE?(wt(s.CULL_FACE),k!==V&&(k===j0?s.cullFace(s.BACK):k===sE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),V=k}function kt(k){k!==lt&&(z&&s.lineWidth(k),lt=k)}function ye(k,Nt,bt){k?(wt(s.POLYGON_OFFSET_FILL),(ot!==Nt||gt!==bt)&&(s.polygonOffset(Nt,bt),ot=Nt,gt=bt)):Dt(s.POLYGON_OFFSET_FILL)}function Zt(k){k?wt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function se(k){k===void 0&&(k=s.TEXTURE0+ct-1),Tt!==k&&(s.activeTexture(k),Tt=k)}function $e(k,Nt,bt){bt===void 0&&(Tt===null?bt=s.TEXTURE0+ct-1:bt=Tt);let It=L[bt];It===void 0&&(It={type:void 0,texture:void 0},L[bt]=It),(It.type!==k||It.texture!==Nt)&&(Tt!==bt&&(s.activeTexture(bt),Tt=bt),s.bindTexture(k,Nt||Et[k]),It.type=k,It.texture=Nt)}function N(){const k=L[Tt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(k){Mt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function Yt(k){J.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function jt(k,Nt){let bt=m.get(Nt);bt===void 0&&(bt=new WeakMap,m.set(Nt,bt));let It=bt.get(k);It===void 0&&(It=s.getUniformBlockIndex(Nt,k.name),bt.set(k,It))}function Ct(k,Nt){const It=m.get(Nt).get(k);p.get(Nt)!==It&&(s.uniformBlockBinding(Nt,It,k.__bindingPointIndex),p.set(Nt,It))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Tt=null,L={},v={},_=new WeakMap,S=[],E=null,T=!1,y=null,x=null,O=null,D=null,C=null,I=null,H=null,B=new we(0,0,0),X=0,U=!1,w=null,V=null,lt=null,ot=null,gt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:wt,disable:Dt,bindFramebuffer:ue,drawBuffers:Jt,useProgram:Oe,setBlending:F,setMaterial:yn,setFlipSided:Ee,setCullFace:ge,setLineWidth:kt,setPolygonOffset:ye,setScissorTest:Zt,activeTexture:se,bindTexture:$e,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Xt,texImage3D:St,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Lt,texStorage3D:Vt,texSubImage2D:dt,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Bt,viewport:Yt,reset:re}}function Fw(s,t,i,a,o,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ee,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):Yu("canvas")}function T(N,b,et){let dt=1;const mt=$e(N);if((mt.width>et||mt.height>et)&&(dt=et/Math.max(mt.width,mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(dt*mt.width),zt=Math.floor(dt*mt.height);v===void 0&&(v=E(ut,zt));const Lt=b?E(ut,zt):v;return Lt.width=ut,Lt.height=zt,Lt.getContext("2d").drawImage(N,0,0,ut,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ut+"x"+zt+")."),Lt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,b,et,dt,mt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=b;if(b===s.RED&&(et===s.FLOAT&&(ut=s.R32F),et===s.HALF_FLOAT&&(ut=s.R16F),et===s.UNSIGNED_BYTE&&(ut=s.R8)),b===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.R8UI),et===s.UNSIGNED_SHORT&&(ut=s.R16UI),et===s.UNSIGNED_INT&&(ut=s.R32UI),et===s.BYTE&&(ut=s.R8I),et===s.SHORT&&(ut=s.R16I),et===s.INT&&(ut=s.R32I)),b===s.RG&&(et===s.FLOAT&&(ut=s.RG32F),et===s.HALF_FLOAT&&(ut=s.RG16F),et===s.UNSIGNED_BYTE&&(ut=s.RG8)),b===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RG8UI),et===s.UNSIGNED_SHORT&&(ut=s.RG16UI),et===s.UNSIGNED_INT&&(ut=s.RG32UI),et===s.BYTE&&(ut=s.RG8I),et===s.SHORT&&(ut=s.RG16I),et===s.INT&&(ut=s.RG32I)),b===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),et===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),et===s.UNSIGNED_INT&&(ut=s.RGB32UI),et===s.BYTE&&(ut=s.RGB8I),et===s.SHORT&&(ut=s.RGB16I),et===s.INT&&(ut=s.RGB32I)),b===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),et===s.UNSIGNED_INT&&(ut=s.RGBA32UI),et===s.BYTE&&(ut=s.RGBA8I),et===s.SHORT&&(ut=s.RGBA16I),et===s.INT&&(ut=s.RGBA32I)),b===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),b===s.RGBA){const zt=mt?Wu:Ae.getTransfer(dt);et===s.FLOAT&&(ut=s.RGBA32F),et===s.HALF_FLOAT&&(ut=s.RGBA16F),et===s.UNSIGNED_BYTE&&(ut=zt===Fe?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(N,b){let et;return N?b===null||b===Rr||b===Xo?et=s.DEPTH24_STENCIL8:b===ra?et=s.DEPTH32F_STENCIL8:b===ko&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rr||b===Xo?et=s.DEPTH_COMPONENT24:b===ra?et=s.DEPTH_COMPONENT32F:b===ko&&(et=s.DEPTH_COMPONENT16),et}function I(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==_i&&N.minFilter!==wi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function H(N){const b=N.target;b.removeEventListener("dispose",H),X(b),b.isVideoTexture&&g.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),w(b)}function X(N){const b=a.get(N);if(b.__webglInit===void 0)return;const et=N.source,dt=_.get(et);if(dt){const mt=dt[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&U(N),Object.keys(dt).length===0&&_.delete(et)}a.remove(N)}function U(N){const b=a.get(N);s.deleteTexture(b.__webglTexture);const et=N.source,dt=_.get(et);delete dt[b.__cacheKey],f.memory.textures--}function w(N){const b=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let mt=0;mt<b.__webglFramebuffer[dt].length;mt++)s.deleteFramebuffer(b.__webglFramebuffer[dt][mt]);else s.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)s.deleteFramebuffer(b.__webglFramebuffer[dt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=N.textures;for(let dt=0,mt=et.length;dt<mt;dt++){const ut=a.get(et[dt]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),f.memory.textures--),a.remove(et[dt])}a.remove(N)}let V=0;function lt(){V=0}function ot(){const N=V;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),V+=1,N}function gt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ct(N,b){const et=a.get(N);if(N.isVideoTexture&&Zt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const dt=N.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(et,N,b);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+b)}function z(N,b){const et=a.get(N);if(N.version>0&&et.__version!==N.version){Et(et,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+b)}function K(N,b){const et=a.get(N);if(N.version>0&&et.__version!==N.version){Et(et,N,b);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+b)}function j(N,b){const et=a.get(N);if(N.version>0&&et.__version!==N.version){wt(et,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+b)}const Tt={[id]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[ad]:s.MIRRORED_REPEAT},L={[_i]:s.NEAREST,[PE]:s.NEAREST_MIPMAP_NEAREST,[du]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[ch]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},tt={[FE]:s.NEVER,[WE]:s.ALWAYS,[HE]:s.LESS,[w_]:s.LEQUAL,[GE]:s.EQUAL,[XE]:s.GEQUAL,[VE]:s.GREATER,[kE]:s.NOTEQUAL};function yt(N,b){if(b.type===ra&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===wi||b.magFilter===ch||b.magFilter===du||b.magFilter===Ar||b.minFilter===wi||b.minFilter===ch||b.minFilter===du||b.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Tt[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Tt[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Tt[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==du&&b.minFilter!==Ar||b.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function Mt(N,b){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",H));const dt=b.source;let mt=_.get(dt);mt===void 0&&(mt={},_.set(dt,mt));const ut=gt(b);if(ut!==N.__cacheKey){mt[ut]===void 0&&(mt[ut]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,et=!0),mt[ut].usedTimes++;const zt=mt[N.__cacheKey];zt!==void 0&&(mt[N.__cacheKey].usedTimes--,zt.usedTimes===0&&U(b)),N.__cacheKey=ut,N.__webglTexture=mt[ut].texture}return et}function J(N,b,et){return Math.floor(Math.floor(N/et)/b)}function vt(N,b,et,dt){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,et,dt,b.data);else{ut.sort((St,Bt)=>St.start-Bt.start);let zt=0;for(let St=1;St<ut.length;St++){const Bt=ut[zt],Yt=ut[St],jt=Bt.start+Bt.count,Ct=J(Yt.start,b.width,4),re=J(Bt.start,b.width,4);Yt.start<=jt+1&&Ct===re&&J(Yt.start+Yt.count-1,b.width,4)===Ct?Bt.count=Math.max(Bt.count,Yt.start+Yt.count-Bt.start):(++zt,ut[zt]=Yt)}ut.length=zt+1;const Lt=s.getParameter(s.UNPACK_ROW_LENGTH),Vt=s.getParameter(s.UNPACK_SKIP_PIXELS),Xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let St=0,Bt=ut.length;St<Bt;St++){const Yt=ut[St],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),re=jt%b.width,k=Math.floor(jt/b.width),Nt=Ct,bt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,re,k,Nt,bt,et,dt,b.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xt)}}function Et(N,b,et){let dt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=s.TEXTURE_3D);const mt=Mt(N,b),ut=b.source;i.bindTexture(dt,N.__webglTexture,s.TEXTURE0+et);const zt=a.get(ut);if(ut.version!==zt.__version||mt===!0){i.activeTexture(s.TEXTURE0+et);const Lt=Ae.getPrimaries(Ae.workingColorSpace),Vt=b.colorSpace===Xa?null:Ae.getPrimaries(b.colorSpace),Xt=b.colorSpace===Xa||Lt===Vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let St=T(b.image,!1,o.maxTextureSize);St=se(b,St);const Bt=u.convert(b.format,b.colorSpace),Yt=u.convert(b.type);let jt=D(b.internalFormat,Bt,Yt,b.colorSpace,b.isVideoTexture);yt(dt,b);let Ct;const re=b.mipmaps,k=b.isVideoTexture!==!0,Nt=zt.__version===void 0||mt===!0,bt=ut.dataReady,It=I(b,St);if(b.isDepthTexture)jt=C(b.format===qo,b.type),Nt&&(k?i.texStorage2D(s.TEXTURE_2D,1,jt,St.width,St.height):i.texImage2D(s.TEXTURE_2D,0,jt,St.width,St.height,0,Bt,Yt,null));else if(b.isDataTexture)if(re.length>0){k&&Nt&&i.texStorage2D(s.TEXTURE_2D,It,jt,re[0].width,re[0].height);for(let Rt=0,xt=re.length;Rt<xt;Rt++)Ct=re[Rt],k?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Bt,Yt,Ct.data);b.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(s.TEXTURE_2D,It,jt,St.width,St.height),bt&&vt(b,St,Bt,Yt)):i.texImage2D(s.TEXTURE_2D,0,jt,St.width,St.height,0,Bt,Yt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,jt,re[0].width,re[0].height,St.depth);for(let Rt=0,xt=re.length;Rt<xt;Rt++)if(Ct=re[Rt],b.format!==vi)if(Bt!==null)if(k){if(bt)if(b.layerUpdates.size>0){const Ht=Tv(Ct.width,Ct.height,b.format,b.type);for(const ae of b.layerUpdates){const Ue=Ct.data.subarray(ae*Ht/Ct.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,ae,Ct.width,Ct.height,1,Bt,Ue)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,St.depth,Bt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,St.depth,Bt,Yt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,St.depth,0,Bt,Yt,Ct.data)}else{k&&Nt&&i.texStorage2D(s.TEXTURE_2D,It,jt,re[0].width,re[0].height);for(let Rt=0,xt=re.length;Rt<xt;Rt++)Ct=re[Rt],b.format!==vi?Bt!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Bt,Yt,Ct.data)}else if(b.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,jt,St.width,St.height,St.depth),bt)if(b.layerUpdates.size>0){const Rt=Tv(St.width,St.height,b.format,b.type);for(const xt of b.layerUpdates){const Ht=St.data.subarray(xt*Rt/St.data.BYTES_PER_ELEMENT,(xt+1)*Rt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,Bt,Yt,Ht)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Bt,Yt,St.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,St.width,St.height,St.depth,0,Bt,Yt,St.data);else if(b.isData3DTexture)k?(Nt&&i.texStorage3D(s.TEXTURE_3D,It,jt,St.width,St.height,St.depth),bt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Bt,Yt,St.data)):i.texImage3D(s.TEXTURE_3D,0,jt,St.width,St.height,St.depth,0,Bt,Yt,St.data);else if(b.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(s.TEXTURE_2D,It,jt,St.width,St.height);else{let Rt=St.width,xt=St.height;for(let Ht=0;Ht<It;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,jt,Rt,xt,0,Bt,Yt,null),Rt>>=1,xt>>=1}}else if(re.length>0){if(k&&Nt){const Rt=$e(re[0]);i.texStorage2D(s.TEXTURE_2D,It,jt,Rt.width,Rt.height)}for(let Rt=0,xt=re.length;Rt<xt;Rt++)Ct=re[Rt],k?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Bt,Yt,Ct):i.texImage2D(s.TEXTURE_2D,Rt,jt,Bt,Yt,Ct);b.generateMipmaps=!1}else if(k){if(Nt){const Rt=$e(St);i.texStorage2D(s.TEXTURE_2D,It,jt,Rt.width,Rt.height)}bt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,Yt,St)}else i.texImage2D(s.TEXTURE_2D,0,jt,Bt,Yt,St);y(b)&&x(dt),zt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function wt(N,b,et){if(b.image.length!==6)return;const dt=Mt(N,b),mt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+et);const ut=a.get(mt);if(mt.version!==ut.__version||dt===!0){i.activeTexture(s.TEXTURE0+et);const zt=Ae.getPrimaries(Ae.workingColorSpace),Lt=b.colorSpace===Xa?null:Ae.getPrimaries(b.colorSpace),Vt=b.colorSpace===Xa||zt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,Bt=[];for(let xt=0;xt<6;xt++)!Xt&&!St?Bt[xt]=T(b.image[xt],!0,o.maxCubemapSize):Bt[xt]=St?b.image[xt].image:b.image[xt],Bt[xt]=se(b,Bt[xt]);const Yt=Bt[0],jt=u.convert(b.format,b.colorSpace),Ct=u.convert(b.type),re=D(b.internalFormat,jt,Ct,b.colorSpace),k=b.isVideoTexture!==!0,Nt=ut.__version===void 0||dt===!0,bt=mt.dataReady;let It=I(b,Yt);yt(s.TEXTURE_CUBE_MAP,b);let Rt;if(Xt){k&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,re,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){Rt=Bt[xt].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){const ae=Rt[Ht];b.format!==vi?jt!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,ae.width,ae.height,jt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,ae.width,ae.height,jt,Ct,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,re,ae.width,ae.height,0,jt,Ct,ae.data)}}}else{if(Rt=b.mipmaps,k&&Nt){Rt.length>0&&It++;const xt=$e(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,re,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt[xt].width,Bt[xt].height,jt,Ct,Bt[xt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,Bt[xt].width,Bt[xt].height,0,jt,Ct,Bt[xt].data);for(let Ht=0;Ht<Rt.length;Ht++){const Ue=Rt[Ht].image[xt].image;k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Ue.width,Ue.height,jt,Ct,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,re,Ue.width,Ue.height,0,jt,Ct,Ue.data)}}else{k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,Ct,Bt[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,jt,Ct,Bt[xt]);for(let Ht=0;Ht<Rt.length;Ht++){const ae=Rt[Ht];k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,jt,Ct,ae.image[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,re,jt,Ct,ae.image[xt])}}}y(b)&&x(s.TEXTURE_CUBE_MAP),ut.__version=mt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Dt(N,b,et,dt,mt,ut){const zt=u.convert(et.format,et.colorSpace),Lt=u.convert(et.type),Vt=D(et.internalFormat,zt,Lt,et.colorSpace),Xt=a.get(b),St=a.get(et);if(St.__renderTarget=b,!Xt.__hasExternalTextures){const Bt=Math.max(1,b.width>>ut),Yt=Math.max(1,b.height>>ut);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?i.texImage3D(mt,ut,Vt,Bt,Yt,b.depth,0,zt,Lt,null):i.texImage2D(mt,ut,Vt,Bt,Yt,0,zt,Lt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ye(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,mt,St.__webglTexture,0,kt(b)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,mt,St.__webglTexture,ut),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(N,b,et){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const dt=b.depthTexture,mt=dt&&dt.isDepthTexture?dt.type:null,ut=C(b.stencilBuffer,mt),zt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=kt(b);ye(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,ut,b.width,b.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,ut,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ut,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,N)}else{const dt=b.textures;for(let mt=0;mt<dt.length;mt++){const ut=dt[mt],zt=u.convert(ut.format,ut.colorSpace),Lt=u.convert(ut.type),Vt=D(ut.internalFormat,zt,Lt,ut.colorSpace),Xt=kt(b);et&&ye(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Vt,b.width,b.height):ye(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Vt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Vt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Jt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=a.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);const mt=dt.__webglTexture,ut=kt(b);if(b.depthTexture.format===Wo)ye(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(b.depthTexture.format===qo)ye(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Oe(N){const b=a.get(N),et=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",mt)};dt.addEventListener("dispose",mt),b.__depthDisposeCallback=mt}b.__boundDepthTexture=dt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=N.texture.mipmaps;dt&&dt.length>0?Jt(b.__webglFramebuffer[0],N):Jt(b.__webglFramebuffer,N)}else if(et){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=s.createRenderbuffer(),ue(b.__webglDepthbuffer[dt],N,!1);else{const mt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ue(b.__webglDepthbuffer,N,!1);else{const mt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(N,b,et){const dt=a.get(N);b!==void 0&&Dt(dt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Oe(N)}function xe(N){const b=N.texture,et=a.get(N),dt=a.get(b);N.addEventListener("dispose",B);const mt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,zt=mt.length>1;if(zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=b.version,f.memory.textures++),ut){et.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Lt]=[];for(let Vt=0;Vt<b.mipmaps.length;Vt++)et.__webglFramebuffer[Lt][Vt]=s.createFramebuffer()}else et.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)et.__webglFramebuffer[Lt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(zt)for(let Lt=0,Vt=mt.length;Lt<Vt;Lt++){const Xt=a.get(mt[Lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&ye(N)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Lt=0;Lt<mt.length;Lt++){const Vt=mt[Lt];et.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt]);const Xt=u.convert(Vt.format,Vt.colorSpace),St=u.convert(Vt.type),Bt=D(Vt.internalFormat,Xt,St,Vt.colorSpace,N.isXRRenderTarget===!0),Yt=kt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Bt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),yt(s.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Vt=0;Vt<b.mipmaps.length;Vt++)Dt(et.__webglFramebuffer[Lt][Vt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Vt);else Dt(et.__webglFramebuffer[Lt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Lt=0,Vt=mt.length;Lt<Vt;Lt++){const Xt=mt[Lt],St=a.get(Xt);i.bindTexture(s.TEXTURE_2D,St.__webglTexture),yt(s.TEXTURE_2D,Xt),Dt(et.__webglFramebuffer,N,Xt,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,0),y(Xt)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,dt.__webglTexture),yt(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Vt=0;Vt<b.mipmaps.length;Vt++)Dt(et.__webglFramebuffer[Vt],N,b,s.COLOR_ATTACHMENT0,Lt,Vt);else Dt(et.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Lt,0);y(b)&&x(Lt),i.unbindTexture()}N.depthBuffer&&Oe(N)}function F(N){const b=N.textures;for(let et=0,dt=b.length;et<dt;et++){const mt=b[et];if(y(mt)){const ut=O(N),zt=a.get(mt).__webglTexture;i.bindTexture(ut,zt),x(ut),i.unbindTexture()}}}const yn=[],Ee=[];function ge(N){if(N.samples>0){if(ye(N)===!1){const b=N.textures,et=N.width,dt=N.height;let mt=s.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=a.get(N),Lt=b.length>1;if(Lt)for(let Xt=0;Xt<b.length;Xt++)i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Vt=N.texture.mipmaps;Vt&&Vt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Xt=0;Xt<b.length;Xt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Xt]);const St=a.get(b[Xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,et,dt,0,0,et,dt,mt,s.NEAREST),p===!0&&(yn.length=0,Ee.length=0,yn.push(s.COLOR_ATTACHMENT0+Xt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(yn.push(ut),Ee.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let Xt=0;Xt<b.length;Xt++){i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Xt]);const St=a.get(b[Xt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,St,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function kt(N){return Math.min(o.maxSamples,N.samples)}function ye(N){const b=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Zt(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function se(N,b){const et=N.colorSpace,dt=N.format,mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==ws&&et!==Xa&&(Ae.getTransfer(et)===Fe?(dt!==vi||mt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=ot,this.resetTextureUnits=lt,this.setTexture2D=ct,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=Ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ye}function Hw(s,t){function i(a,o=Xa){let u;const f=Ae.getTransfer(o);if(a===Li)return s.UNSIGNED_BYTE;if(a===Vd)return s.UNSIGNED_SHORT_4_4_4_4;if(a===kd)return s.UNSIGNED_SHORT_5_5_5_1;if(a===S_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===x_)return s.BYTE;if(a===y_)return s.SHORT;if(a===ko)return s.UNSIGNED_SHORT;if(a===Gd)return s.INT;if(a===Rr)return s.UNSIGNED_INT;if(a===ra)return s.FLOAT;if(a===Qo)return s.HALF_FLOAT;if(a===M_)return s.ALPHA;if(a===E_)return s.RGB;if(a===vi)return s.RGBA;if(a===Wo)return s.DEPTH_COMPONENT;if(a===qo)return s.DEPTH_STENCIL;if(a===T_)return s.RED;if(a===Xd)return s.RED_INTEGER;if(a===b_)return s.RG;if(a===Wd)return s.RG_INTEGER;if(a===qd)return s.RGBA_INTEGER;if(a===Iu||a===Fu||a===Hu||a===Gu)if(f===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Iu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Iu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Fu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===rd||a===sd||a===od||a===ld)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===od)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ld)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ud||a===cd||a===fd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===ud||a===cd)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===fd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===hd||a===dd||a===pd||a===md||a===gd||a===vd||a===_d||a===xd||a===yd||a===Sd||a===Md||a===Ed||a===Td||a===bd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===hd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===dd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===md)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===gd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===vd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===_d)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===xd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Sd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Md)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ed)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Td)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===bd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Vu||a===Ad||a===Rd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Vu)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Rd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===A_||a===wd||a===Cd||a===Dd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Vu)return u.COMPRESSED_RED_RGTC1_EXT;if(a===wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Cd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Xo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vw=`
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

}`;class kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,a){if(this.texture===null){const o=new Gn,u=t.properties.get(o);u.__webglTexture=i.texture,(i.depthNear!==a.depthNear||i.depthFar!==a.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new ja({vertexShader:Gw,fragmentShader:Vw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new Qu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xw extends Ls{constructor(t,i){super();const a=this;let o=null,u=1,f=null,h="local-floor",p=1,m=null,g=null,v=null,_=null,S=null,E=null;const T=new kw,y=i.getContextAttributes();let x=null,O=null;const D=[],C=[],I=new ee;let H=null;const B=new Jn;B.viewport=new He;const X=new Jn;X.viewport=new He;const U=[B,X],w=new cb;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let vt=D[J];return vt===void 0&&(vt=new Uh,D[J]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(J){let vt=D[J];return vt===void 0&&(vt=new Uh,D[J]=vt),vt.getGripSpace()},this.getHand=function(J){let vt=D[J];return vt===void 0&&(vt=new Uh,D[J]=vt),vt.getHandSpace()};function ot(J){const vt=C.indexOf(J.inputSource);if(vt===-1)return;const Et=D[vt];Et!==void 0&&(Et.update(J.inputSource,J.frame,m||f),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function gt(){o.removeEventListener("select",ot),o.removeEventListener("selectstart",ot),o.removeEventListener("selectend",ot),o.removeEventListener("squeeze",ot),o.removeEventListener("squeezestart",ot),o.removeEventListener("squeezeend",ot),o.removeEventListener("end",gt),o.removeEventListener("inputsourceschange",ct);for(let J=0;J<D.length;J++){const vt=C[J];vt!==null&&(C[J]=null,D[J].disconnect(vt))}V=null,lt=null,T.reset(),t.setRenderTarget(x),S=null,_=null,v=null,o=null,O=null,Mt.stop(),a.isPresenting=!1,t.setPixelRatio(H),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",ot),o.addEventListener("selectstart",ot),o.addEventListener("selectend",ot),o.addEventListener("squeeze",ot),o.addEventListener("squeezestart",ot),o.addEventListener("squeezeend",ot),o.addEventListener("end",gt),o.addEventListener("inputsourceschange",ct),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,wt=null,Dt=null;y.depth&&(Dt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=y.stencil?qo:Wo,wt=y.stencil?Xo:Rr);const ue={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:u};v=new XRWebGLBinding(o,i),_=v.createProjectionLayer(ue),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new wr(_.textureWidth,_.textureHeight,{format:vi,type:Li,depthTexture:new I_(_.textureWidth,_.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Et={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,i,Et),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new wr(S.framebufferWidth,S.framebufferHeight,{format:vi,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(h),Mt.setContext(o),Mt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ct(J){for(let vt=0;vt<J.removed.length;vt++){const Et=J.removed[vt],wt=C.indexOf(Et);wt>=0&&(C[wt]=null,D[wt].disconnect(Et))}for(let vt=0;vt<J.added.length;vt++){const Et=J.added[vt];let wt=C.indexOf(Et);if(wt===-1){for(let ue=0;ue<D.length;ue++)if(ue>=C.length){C.push(Et),wt=ue;break}else if(C[ue]===null){C[ue]=Et,wt=ue;break}if(wt===-1)break}const Dt=D[wt];Dt&&Dt.connect(Et)}}const z=new W,K=new W;function j(J,vt,Et){z.setFromMatrixPosition(vt.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const wt=z.distanceTo(K),Dt=vt.projectionMatrix.elements,ue=Et.projectionMatrix.elements,Jt=Dt[14]/(Dt[10]-1),Oe=Dt[14]/(Dt[10]+1),Ge=(Dt[9]+1)/Dt[5],xe=(Dt[9]-1)/Dt[5],F=(Dt[8]-1)/Dt[0],yn=(ue[8]+1)/ue[0],Ee=Jt*F,ge=Jt*yn,kt=wt/(-F+yn),ye=kt*-F;if(vt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ye),J.translateZ(kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(vt.projectionMatrix),J.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Zt=Jt+kt,se=Oe+kt,$e=Ee-ye,N=ge+(wt-ye),b=Ge*Oe/se*Zt,et=xe*Oe/se*Zt;J.projectionMatrix.makePerspective($e,N,b,et,Zt,se),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Tt(J,vt){vt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(vt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let vt=J.near,Et=J.far;T.texture!==null&&(T.depthNear>0&&(vt=T.depthNear),T.depthFar>0&&(Et=T.depthFar)),w.near=X.near=B.near=vt,w.far=X.far=B.far=Et,(V!==w.near||lt!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,lt=w.far),B.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,w.layers.mask=B.layers.mask|X.layers.mask;const wt=J.parent,Dt=w.cameras;Tt(w,wt);for(let ue=0;ue<Dt.length;ue++)Tt(Dt[ue],wt);Dt.length===2?j(w,B,X):w.projectionMatrix.copy(B.projectionMatrix),L(J,w,wt)};function L(J,vt,Et){Et===null?J.matrix.copy(vt.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(vt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(vt.projectionMatrix),J.projectionMatrixInverse.copy(vt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Yo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(J){p=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let tt=null;function yt(J,vt){if(g=vt.getViewerPose(m||f),E=vt,g!==null){const Et=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let wt=!1;Et.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let Jt=0;Jt<Et.length;Jt++){const Oe=Et[Jt];let Ge=null;if(S!==null)Ge=S.getViewport(Oe);else{const F=v.getViewSubImage(_,Oe);Ge=F.viewport,Jt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let xe=U[Jt];xe===void 0&&(xe=new Jn,xe.layers.enable(Jt),xe.viewport=new He,U[Jt]=xe),xe.matrix.fromArray(Oe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Oe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Jt===0&&(w.matrix.copy(xe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(xe)}const Dt=o.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Jt=v.getDepthInformation(Et[0]);Jt&&Jt.isValid&&Jt.texture&&T.init(t,Jt,o.renderState)}}for(let Et=0;Et<D.length;Et++){const wt=C[Et],Dt=D[Et];wt!==null&&Dt!==void 0&&Dt.update(wt,vt,m||f)}tt&&tt(J,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),E=null}const Mt=new X_;Mt.setAnimationLoop(yt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const yr=new Ni,Ww=new je;function qw(s,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,P_(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,O,D,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),v(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x)):x.isMeshStandardMaterial?(u(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(u(y,x),E(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),T(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,O,D):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Hn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Hn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=t.get(x),D=O.envMap,C=O.envMapRotation;D&&(y.envMap.value=D,yr.copy(C),yr.x*=-1,yr.y*=-1,yr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),y.envMapRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(yr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,O,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const O=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Yw(s,t,i,a){let o={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,D){const C=D.program;a.uniformBlockBinding(O,C)}function m(O,D){let C=o[O.id];C===void 0&&(E(O),C=g(O),o[O.id]=C,O.addEventListener("dispose",y));const I=D.program;a.updateUBOMapping(O,I);const H=t.render.frame;u[O.id]!==H&&(_(O),u[O.id]=H)}function g(O){const D=v();O.__bindingPointIndex=D;const C=s.createBuffer(),I=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,I,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function v(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const D=o[O.id],C=O.uniforms,I=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,B=C.length;H<B;H++){const X=Array.isArray(C[H])?C[H]:[C[H]];for(let U=0,w=X.length;U<w;U++){const V=X[U];if(S(V,H,U,I)===!0){const lt=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let ct=0;ct<ot.length;ct++){const z=ot[ct],K=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,lt+gt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,gt),gt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,D,C,I){const H=O.value,B=D+"_"+C;if(I[B]===void 0)return typeof H=="number"||typeof H=="boolean"?I[B]=H:I[B]=H.clone(),!0;{const X=I[B];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return I[B]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function E(O){const D=O.uniforms;let C=0;const I=16;for(let B=0,X=D.length;B<X;B++){const U=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,V=U.length;w<V;w++){const lt=U[w],ot=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,ct=ot.length;gt<ct;gt++){const z=ot[gt],K=T(z),j=C%I,Tt=j%K.boundary,L=j+Tt;C+=Tt,L!==0&&I-L<K.storage&&(C+=I-L),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=C,C+=K.storage}}}const H=C%I;return H>0&&(C+=I-H),O.__size=C,O.__cache={},this}function T(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function y(O){const D=O.target;D.removeEventListener("dispose",y);const C=f.indexOf(D.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function x(){for(const O in o)s.deleteBuffer(o[O]);f=[],o={},u={}}return{bind:p,update:m,dispose:x}}class jw{constructor(t={}){const{canvas:i=uT(),context:a=null,depth:o=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const O=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=oi;let H=0,B=0,X=null,U=-1,w=null;const V=new He,lt=new He;let ot=null;const gt=new we(0);let ct=0,z=i.width,K=i.height,j=1,Tt=null,L=null;const tt=new He(0,0,z,K),yt=new He(0,0,z,K);let Mt=!1;const J=new Qd;let vt=!1,Et=!1;const wt=new je,Dt=new je,ue=new W,Jt=new He,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function xe(){return X===null?j:1}let F=a;function yn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hd}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",xt,!1),F===null){const Y="webgl2";if(F=yn(Y,R),F===null)throw yn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,ge,kt,ye,Zt,se,$e,N,b,et,dt,mt,ut,zt,Lt,Vt,Xt,St,Bt,Yt,jt,Ct,re,k;function Nt(){Ee=new aR(F),Ee.init(),Ct=new Hw(F,Ee),ge=new QA(F,Ee,t,Ct),kt=new Iw(F,Ee),ge.reverseDepthBuffer&&_&&kt.buffers.depth.setReversed(!0),ye=new oR(F),Zt=new bw,se=new Fw(F,Ee,kt,Zt,ge,Ct,ye),$e=new $A(C),N=new iR(C),b=new db(F),re=new ZA(F,b),et=new rR(F,b,ye,re),dt=new uR(F,et,b,ye),Bt=new lR(F,ge,se),Vt=new JA(Zt),mt=new Tw(C,$e,N,Ee,ge,re,Vt),ut=new qw(C,Zt),zt=new Rw,Lt=new Nw(Ee),St=new jA(C,$e,N,kt,dt,S,p),Xt=new zw(C,dt,ge),k=new Yw(F,ye,ge,kt),Yt=new KA(F,Ee,ye),jt=new sR(F,Ee,ye),ye.programs=mt.programs,C.capabilities=ge,C.extensions=Ee,C.properties=Zt,C.renderLists=zt,C.shadowMap=Xt,C.state=kt,C.info=ye}Nt();const bt=new Xw(C,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,Y,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=Y,i.width=Math.floor(R*j),i.height=Math.floor(Y*j),rt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*j,K*j).floor()},this.setDrawingBufferSize=function(R,Y,rt){z=R,K=Y,j=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,Y,rt,st){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,Y,rt,st),kt.viewport(V.copy(tt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Y,rt,st){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,rt,st),kt.scissor(lt.copy(yt).multiplyScalar(j).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){kt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let st=0;if(R){let Z=!1;if(X!==null){const At=X.texture.format;Z=At===qd||At===Wd||At===Xd}if(Z){const At=X.texture.type,Ut=At===Li||At===Rr||At===ko||At===Xo||At===Vd||At===kd,Pt=St.getClearColor(),Ft=St.getClearAlpha(),ne=Pt.r,Qt=Pt.g,Wt=Pt.b;Ut?(E[0]=ne,E[1]=Qt,E[2]=Wt,E[3]=Ft,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=ne,T[1]=Qt,T[2]=Wt,T[3]=Ft,F.clearBufferiv(F.COLOR,0,T))}else st|=F.COLOR_BUFFER_BIT}Y&&(st|=F.DEPTH_BUFFER_BIT),rt&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),St.dispose(),zt.dispose(),Lt.dispose(),Zt.dispose(),$e.dispose(),N.dispose(),dt.dispose(),re.dispose(),k.dispose(),mt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",on),bt.removeEventListener("sessionend",Sn),Pn.stop()};function It(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=ye.autoReset,Y=Xt.enabled,rt=Xt.autoUpdate,st=Xt.needsUpdate,Z=Xt.type;Nt(),ye.autoReset=R,Xt.enabled=Y,Xt.autoUpdate=rt,Xt.needsUpdate=st,Xt.type=Z}function xt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const Y=R.target;Y.removeEventListener("dispose",Ht),ae(Y)}function ae(R){Ue(R),Zt.remove(R)}function Ue(R){const Y=Zt.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){mt.releaseProgram(rt)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,st,Z,At){Y===null&&(Y=Oe);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=Ja(R,Y,rt,st,Z);kt.setMaterial(st,Ut);let Ft=rt.index,ne=1;if(st.wireframe===!0){if(Ft=et.getWireframeAttribute(rt),Ft===void 0)return;ne=2}const Qt=rt.drawRange,Wt=rt.attributes.position;let ce=Qt.start*ne,Ce=(Qt.start+Qt.count)*ne;At!==null&&(ce=Math.max(ce,At.start*ne),Ce=Math.min(Ce,(At.start+At.count)*ne)),Ft!==null?(ce=Math.max(ce,0),Ce=Math.min(Ce,Ft.count)):Wt!=null&&(ce=Math.max(ce,0),Ce=Math.min(Ce,Wt.count));const qe=Ce-ce;if(qe<0||qe===1/0)return;re.setup(Z,st,Pt,rt,Ft);let de,De=Yt;if(Ft!==null&&(de=b.get(Ft),De=jt,De.setIndex(de)),Z.isMesh)st.wireframe===!0?(kt.setLineWidth(st.wireframeLinewidth*xe()),De.setMode(F.LINES)):De.setMode(F.TRIANGLES);else if(Z.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),kt.setLineWidth(Kt*xe()),Z.isLineSegments?De.setMode(F.LINES):Z.isLineLoop?De.setMode(F.LINE_LOOP):De.setMode(F.LINE_STRIP)}else Z.isPoints?De.setMode(F.POINTS):Z.isSprite&&De.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))De.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,Pe=Z._multiDrawCounts,Se=Z._multiDrawCount,pn=Ft?b.get(Ft).bytesPerElement:1,ma=Zt.get(st).currentProgram.getUniforms();for(let Xe=0;Xe<Se;Xe++)ma.setValue(F,"_gl_DrawID",Xe),De.render(Kt[Xe]/pn,Pe[Xe])}else if(Z.isInstancedMesh)De.renderInstances(ce,qe,Z.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Pe=Math.min(rt.instanceCount,Kt);De.renderInstances(ce,qe,Pe)}else De.render(ce,qe)};function Te(R,Y,rt){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,da(R,Y,rt),R.side=Ya,R.needsUpdate=!0,da(R,Y,rt),R.side=Ri):da(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),x=Lt.get(rt),x.init(Y),D.push(x),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const st=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const At=Z.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Pt=At[Ut];Te(Pt,rt,Z),st.add(Pt)}else Te(At,rt,Z),st.add(At)}),x=D.pop(),st},this.compileAsync=function(R,Y,rt=null){const st=this.compile(R,Y,rt);return new Promise(Z=>{function At(){if(st.forEach(function(Ut){Zt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){Z(R);return}setTimeout(At,10)}Ee.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Vn=null;function dn(R){Vn&&Vn(R)}function on(){Pn.stop()}function Sn(){Pn.start()}const Pn=new X_;Pn.setAnimationLoop(dn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){Vn=R,bt.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},bt.addEventListener("sessionstart",on),bt.addEventListener("sessionend",Sn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Y),Y=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,X),x=Lt.get(R,D.length),x.init(Y),D.push(x),Dt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Dt),Et=this.localClippingEnabled,vt=Vt.init(this.clippingPlanes,Et),y=zt.get(R,O.length),y.init(),O.push(y),bt.enabled===!0&&bt.isPresenting===!0){const At=C.xr.getDepthSensingMesh();At!==null&&Ka(At,Y,-1/0,C.sortObjects)}Ka(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Tt,L),Ge=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ge&&St.addToRenderList(y,R),this.info.render.frame++,vt===!0&&Vt.beginShadows();const rt=x.state.shadowsArray;Xt.render(rt,R,Y),vt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,Z=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const At=Y.cameras;if(Z.length>0)for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];il(st,Z,R,Ft)}Ge&&St.render(R);for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];nl(y,R,Ft,Ft.viewport)}}else Z.length>0&&il(st,Z,R,Y),Ge&&St.render(R),nl(y,R,Y);X!==null&&B===0&&(se.updateMultisampleRenderTarget(X),se.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,Y),re.resetDefaultState(),U=-1,w=null,D.pop(),D.length>0?(x=D[D.length-1],vt===!0&&Vt.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ka(R,Y,rt,st){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){st&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Ut=dt.update(R),Pt=R.material;Pt.visible&&y.push(R,Ut,Pt,rt,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ut=dt.update(R),Pt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Jt.copy(Ut.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(Pt)){const Ft=Ut.groups;for(let ne=0,Qt=Ft.length;ne<Qt;ne++){const Wt=Ft[ne],ce=Pt[Wt.materialIndex];ce&&ce.visible&&y.push(R,Ut,ce,rt,Jt.z,Wt)}}else Pt.visible&&y.push(R,Ut,Pt,rt,Jt.z,null)}}const At=R.children;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++)Ka(At[Ut],Y,rt,st)}function nl(R,Y,rt,st){const Z=R.opaque,At=R.transmissive,Ut=R.transparent;x.setupLightsView(rt),vt===!0&&Vt.setGlobalState(C.clippingPlanes,rt),st&&kt.viewport(V.copy(st)),Z.length>0&&Qa(Z,Y,rt),At.length>0&&Qa(At,Y,rt),Ut.length>0&&Qa(Ut,Y,rt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function il(R,Y,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new wr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Qo:Li,minFilter:Ar,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const At=x.state.transmissionRenderTarget[st.id],Ut=st.viewport||V;At.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget(),Ft=C.getActiveCubeFace(),ne=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(gt),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),Ge&&St.render(rt);const Qt=C.toneMapping;C.toneMapping=qa;const Wt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),vt===!0&&Vt.setGlobalState(C.clippingPlanes,st),Qa(R,rt,st),se.updateMultisampleRenderTarget(At),se.updateRenderTargetMipmap(At),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ce=0,qe=Y.length;Ce<qe;Ce++){const de=Y[Ce],De=de.object,Kt=de.geometry,Pe=de.material,Se=de.group;if(Pe.side===Ri&&De.layers.test(st.layers)){const pn=Pe.side;Pe.side=Hn,Pe.needsUpdate=!0,ha(De,rt,st,Kt,Pe,Se),Pe.side=pn,Pe.needsUpdate=!0,ce=!0}}ce===!0&&(se.updateMultisampleRenderTarget(At),se.updateRenderTargetMipmap(At))}C.setRenderTarget(Pt,Ft,ne),C.setClearColor(gt,ct),Wt!==void 0&&(st.viewport=Wt),C.toneMapping=Qt}function Qa(R,Y,rt){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,At=R.length;Z<At;Z++){const Ut=R[Z],Pt=Ut.object,Ft=Ut.geometry,ne=Ut.group;let Qt=Ut.material;Qt.allowOverride===!0&&st!==null&&(Qt=st),Pt.layers.test(rt.layers)&&ha(Pt,Y,rt,Ft,Qt,ne)}}function ha(R,Y,rt,st,Z,At){R.onBeforeRender(C,Y,rt,st,Z,At),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,Y,rt,st,R,At),Z.transparent===!0&&Z.side===Ri&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,st,Z,R,At),Z.side=Ya,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,st,Z,R,At),Z.side=Ri):C.renderBufferDirect(rt,Y,st,Z,R,At),R.onAfterRender(C,Y,rt,st,Z,At)}function da(R,Y,rt){Y.isScene!==!0&&(Y=Oe);const st=Zt.get(R),Z=x.state.lights,At=x.state.shadowsArray,Ut=Z.state.version,Pt=mt.getParameters(R,Z.state,At,Y,rt),Ft=mt.getProgramCacheKey(Pt);let ne=st.programs;st.environment=R.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(R.isMeshStandardMaterial?N:$e).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",Ht),ne=new Map,st.programs=ne);let Qt=ne.get(Ft);if(Qt!==void 0){if(st.currentProgram===Qt&&st.lightsStateVersion===Ut)return Pi(R,Pt),Qt}else Pt.uniforms=mt.getUniforms(R),R.onBeforeCompile(Pt,C),Qt=mt.acquireProgram(Pt,Ft),ne.set(Ft,Qt),st.uniforms=Pt.uniforms;const Wt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Vt.uniform),Pi(R,Pt),st.needsLights=nn(R),st.lightsStateVersion=Ut,st.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=Qt,st.uniformsList=null,Qt}function Oi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ku.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Pi(R,Y){const rt=Zt.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Ja(R,Y,rt,st,Z){Y.isScene!==!0&&(Y=Oe),se.resetTextureUnits();const At=Y.fog,Ut=st.isMeshStandardMaterial?Y.environment:null,Pt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ws,Ft=(st.isMeshStandardMaterial?N:$e).get(st.envMap||Ut),ne=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let qe=qa;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=C.toneMapping);const de=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,De=de!==void 0?de.length:0,Kt=Zt.get(st),Pe=x.state.lights;if(vt===!0&&(Et===!0||R!==w)){const mn=R===w&&st.id===U;Vt.setState(st,R,mn)}let Se=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Pe.state.version||Kt.outputColorSpace!==Pt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Ft||st.fog===!0&&Kt.fog!==At||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Vt.numPlanes||Kt.numIntersection!==Vt.numIntersection)||Kt.vertexAlphas!==ne||Kt.vertexTangents!==Qt||Kt.morphTargets!==Wt||Kt.morphNormals!==ce||Kt.morphColors!==Ce||Kt.toneMapping!==qe||Kt.morphTargetsCount!==De)&&(Se=!0):(Se=!0,Kt.__version=st.version);let pn=Kt.currentProgram;Se===!0&&(pn=da(st,Y,Z));let ma=!1,Xe=!1,Bi=!1;const Ve=pn.getUniforms(),An=Kt.uniforms;if(kt.useProgram(pn.program)&&(ma=!0,Xe=!0,Bi=!0),st.id!==U&&(U=st.id,Xe=!0),ma||w!==R){kt.buffers.depth.getReversed()?(wt.copy(R.projectionMatrix),fT(wt),hT(wt),Ve.setValue(F,"projectionMatrix",wt)):Ve.setValue(F,"projectionMatrix",R.projectionMatrix),Ve.setValue(F,"viewMatrix",R.matrixWorldInverse);const Mn=Ve.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,ue.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xe=!0,Bi=!0)}if(Z.isSkinnedMesh){Ve.setOptional(F,Z,"bindMatrix"),Ve.setOptional(F,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ve.setValue(F,"boneTexture",mn.boneTexture,se))}Z.isBatchedMesh&&(Ve.setOptional(F,Z,"batchingTexture"),Ve.setValue(F,"batchingTexture",Z._matricesTexture,se),Ve.setOptional(F,Z,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",Z._indirectTexture,se),Ve.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",Z._colorsTexture,se));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Bt.update(Z,rt,pn),(Xe||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Ve.setValue(F,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=Ft,An.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),Xe&&(Ve.setValue(F,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&pa(An,Bi),At&&st.fog===!0&&ut.refreshFogUniforms(An,At),ut.refreshMaterialUniforms(An,st,j,K,x.state.transmissionRenderTarget[R.id]),ku.upload(F,Oi(Kt),An,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ku.upload(F,Oi(Kt),An,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ve.setValue(F,"center",Z.center),Ve.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Ve.setValue(F,"normalMatrix",Z.normalMatrix),Ve.setValue(F,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const mn=st.uniformsGroups;for(let Mn=0,yi=mn.length;Mn<yi;Mn++){const Ii=mn[Mn];k.update(Ii,pn),k.bind(Ii,pn)}}return pn}function pa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,rt){const st=Zt.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=Y,Zt.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=Zt.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const al=F.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){X=R,H=Y,B=rt;let st=!0,Z=null,At=!1,Ut=!1;if(R){const Ft=Zt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Ft.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Ft.__hasExternalTextures)se.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Ft.__boundDepthTexture!==Wt){if(Wt!==null&&Zt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ut=!0);const Qt=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[Y])?Z=Qt[Y][rt]:Z=Qt[Y],At=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Z=Qt[rt]:Z=Qt,V.copy(R.viewport),lt.copy(R.scissor),ot=R.scissorTest}else V.copy(tt).multiplyScalar(j).floor(),lt.copy(yt).multiplyScalar(j).floor(),ot=Mt;if(rt!==0&&(Z=al),kt.bindFramebuffer(F.FRAMEBUFFER,Z)&&st&&kt.drawBuffers(R,Z),kt.viewport(V),kt.scissor(lt),kt.setScissorTest(ot),At){const Ft=Zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,rt)}else if(Ut){const Ft=Zt.get(R.texture),ne=Y;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,rt,ne)}else if(R!==null&&rt!==0){const Ft=Zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(R,Y,rt,st,Z,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){kt.bindFramebuffer(F.FRAMEBUFFER,Ft);try{const ne=R.textures[Pt],Qt=ne.format,Wt=ne.type;if(!ge.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-st&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(Y,rt,st,Z,Ct.convert(Qt),Ct.convert(Wt),At))}finally{const ne=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,st,Z,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(Y>=0&&Y<=R.width-st&&rt>=0&&rt<=R.height-Z){kt.bindFramebuffer(F.FRAMEBUFFER,Ft);const ne=R.textures[Pt],Qt=ne.format,Wt=ne.type;if(!ge.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(Y,rt,st,Z,Ct.convert(Qt),Ct.convert(Wt),0);const Ce=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,Ce);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cT(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(ce),F.deleteSync(qe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const st=Math.pow(2,-rt),Z=Math.floor(R.image.width*st),At=Math.floor(R.image.height*st),Ut=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;se.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Ut,Pt,Z,At),kt.unbindTexture()};const rl=F.createFramebuffer(),zi=F.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,st=null,Z=0,At=null){At===null&&(Z!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Z,Z=0):At=0);let Ut,Pt,Ft,ne,Qt,Wt,ce,Ce,qe;const de=R.isCompressedTexture?R.mipmaps[At]:R.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,Ft=rt.isBox3?rt.max.z-rt.min.z:1,ne=rt.min.x,Qt=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Z);Ut=Math.floor(de.width*ln),Pt=Math.floor(de.height*ln),R.isDataArrayTexture?Ft=de.depth:R.isData3DTexture?Ft=Math.floor(de.depth*ln):Ft=1,ne=0,Qt=0,Wt=0}st!==null?(ce=st.x,Ce=st.y,qe=st.z):(ce=0,Ce=0,qe=0);const De=Ct.convert(Y.format),Kt=Ct.convert(Y.type);let Pe;Y.isData3DTexture?(se.setTexture3D(Y,0),Pe=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Pe=F.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Pe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=F.getParameter(F.UNPACK_ROW_LENGTH),pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ma=F.getParameter(F.UNPACK_SKIP_PIXELS),Xe=F.getParameter(F.UNPACK_SKIP_ROWS),Bi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Ve=R.isDataArrayTexture||R.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const ln=Zt.get(R),mn=Zt.get(Y),Mn=Zt.get(ln.__renderTarget),yi=Zt.get(mn.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ii=0;Ii<Ft;Ii++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,Z,Wt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(Y).__webglTexture,At,qe+Ii)),F.blitFramebuffer(ne,Qt,Ut,Pt,ce,Ce,Ut,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Zt.has(R)){const ln=Zt.get(R),mn=Zt.get(Y);kt.bindFramebuffer(F.READ_FRAMEBUFFER,rl),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,zi);for(let Mn=0;Mn<Ft;Mn++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,Z,Wt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,Z),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,At,qe+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,At),Z!==0?F.blitFramebuffer(ne,Qt,Ut,Pt,ce,Ce,Ut,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(Pe,At,ce,Ce,qe+Mn,ne,Qt,Ut,Pt):F.copyTexSubImage2D(Pe,At,ce,Ce,ne,Qt,Ut,Pt);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Pe,At,ce,Ce,qe,Ut,Pt,Ft,De,Kt,de.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,At,ce,Ce,qe,Ut,Pt,Ft,De,de.data):F.texSubImage3D(Pe,At,ce,Ce,qe,Ut,Pt,Ft,De,Kt,de):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,ce,Ce,Ut,Pt,De,Kt,de.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,ce,Ce,de.width,de.height,De,de.data):F.texSubImage2D(F.TEXTURE_2D,At,ce,Ce,Ut,Pt,De,Kt,de);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ma),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bi),At===0&&Y.generateMipmaps&&F.generateMipmap(Pe),kt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,rt=null,st=null,Z=0){return Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,rt,st,Z)},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){H=0,B=0,X=null,kt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Zv=7312370,Z_=10467583;function Zw(s=18,t=12){const i=[],a=[],f=m=>Math.pow(Math.sin(Math.PI*m),1.7);for(let m=0;m<=t;m++){const g=m/t;for(let v=0;v<=s;v++){const _=v/s*2-1,S=_*1.35*f(g),E=g*2.6,T=.4*Math.cos(_*Math.PI/2)*(.5+.5*Math.sin(Math.PI*g));i.push(S,T,E)}}const h=s+1;for(let m=0;m<t;m++)for(let g=0;g<s;g++){const v=m*h+g,_=v+1,S=v+h,E=S+1;a.push(v,S,_,_,S,E)}const p=new ca;return p.setAttribute("position",new xi(i,3)),p.setIndex(a),p.computeVertexNormals(),p.userData={segsU:s,segsV:t,maxWidth:1.35,bodyLength:2.6,widthAt:f,basePositions:i.slice(),backTipY:.4*.5},p}function Kw(s,t){const{segsU:i,segsV:a,basePositions:o}=s.userData,u=s.attributes.position,f=i+1;for(let h=0;h<=a;h++){const p=h/a;for(let m=0;m<=i;m++){const g=h*f+m,v=m/i*2-1,_=o[g*3+1],S=.34*Math.pow(Math.abs(v),1.4)*Math.sin(2*Math.PI*(p*1.15-t*.7));u.setY(g,_+S)}}u.needsUpdate=!0,s.computeVertexNormals()}function Qw(s,t,i){const a=[];for(let u=0;u<=6;u++){const f=u/6,h=t+f*1.7,p=1+f*.65,g=.3*(.25+.75*f)*Math.sin(2*Math.PI*(p*1.15-s*.7));a.push(new W(0,i+g,h))}return a}function Kv(s,{scale:t=1,path:i,timeOffset:a=0}){const o=new zo;o.scale.setScalar(t),s.add(o);const u=Zw(),f=new yv({color:Zv,roughness:.35,metalness:.1,transparent:!0,opacity:.55,side:Ri,emissive:1714794,emissiveIntensity:.3}),h=new li(u,f);o.add(h);const p=new Kd({color:Z_,wireframe:!0,transparent:!0,opacity:.16}),m=new li(u,p);o.add(m);const g=new yv({color:Zv,transparent:!0,opacity:.7,roughness:.4});let v=null,_=0;function S(T){const y=T+a;Kw(u,y),v&&(o.remove(v),v.geometry.dispose());const x=new H_(Qw(y,u.userData.bodyLength,u.userData.backTipY)),O=new $d(x,16,.02,6,!1);v=new li(O,g),o.add(v);const D=i.x(y),C=i.z(y),I=i.y(y),H=.45,B=i.x(y+H),X=i.z(y+H);let w=Math.atan2(B-D,X-C)+Math.PI-_;w=Math.atan2(Math.sin(w),Math.cos(w)),_+=w*.035,o.position.set(D,I,C),o.rotation.y=_;const lt=lT.clamp(w*2.4,-.3,.3);o.rotation.z=lt,o.rotation.x=-.15}function E(){s.remove(o),u.dispose(),f.dispose(),p.dispose(),g.dispose(),v&&v.geometry.dispose()}return{update:S,dispose:E}}function Jw(){const s=ht.useRef(null);return ht.useEffect(()=>{const t=s.current;if(!t)return;const i=new IT,a=new Jn(38,1,.1,80);a.position.set(0,15,10.5),a.lookAt(0,0,1);const o=new jw({antialias:!0,alpha:!0});o.setClearColor(0,0),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(o.domElement);const u=new lb(16777215,1.1);u.position.set(2,4,3),i.add(u);const f=new sb(Z_,1.4,16);f.position.set(-2,1.5,-2),i.add(f),i.add(new ub(3820154,.6));const h=Kv(i,{scale:1,timeOffset:0,path:{seed:0,x:T=>6.8*Math.sin(T*.11)+2.9*Math.sin(T*.27+1.3),z:T=>4.8*Math.sin(T*.08+.5)+2.2*Math.sin(T*.19+2.1)-.4,y:T=>.55*Math.sin(T*.15)+.25*Math.sin(T*.34+1)}}),p=Kv(i,{scale:1.6,timeOffset:38,path:{seed:2.4,x:T=>5.5*Math.sin(T*.075+2)+2.4*Math.sin(T*.21+.4)-1.5,z:T=>3.6*Math.sin(T*.13+1.1)+1.9*Math.sin(T*.05+3)+1.2,y:T=>.4*Math.sin(T*.1+1.8)+.2*Math.sin(T*.24+.6)}});let m,g=0;const v=new fb;function _(){const T=t.clientWidth||1,y=t.clientHeight||1;o.setSize(T,y),a.aspect=T/y,a.updateProjectionMatrix()}_();const S=new ResizeObserver(_);S.observe(t);function E(){m=requestAnimationFrame(E);const T=v.getDelta();g+=T,h.update(g),p.update(g),o.render(i,a)}return E(),()=>{cancelAnimationFrame(m),S.disconnect(),h.dispose(),p.dispose(),o.dispose(),t.contains(o.domElement)&&t.removeChild(o.domElement)}},[]),it.jsx("div",{ref:s,"aria-hidden":"true",style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0}})}function $w(){return it.jsxs("div",{className:"sections",id:"contact",style:{position:"relative"},children:[it.jsx(Jw,{}),it.jsxs("div",{style:{position:"relative",zIndex:1},children:[it.jsx("h1",{children:"Contact"}),it.jsx("p",{children:"I'm currently looking for 2027 opportunities! Get in touch with me through: "}),it.jsxs("div",{className:"contact-links",children:[it.jsx("a",{href:"mailto:wbella@student.ubc.ca",children:it.jsx("i",{class:"fa-regular fa-envelope"})}),it.jsx("a",{href:"https://github.com/bella7898",children:it.jsx("i",{class:"fa-brands fa-github"})}),it.jsx("a",{href:"https://www.instagram.com/wbella101/",children:it.jsx("i",{class:"fa-brands fa-instagram"})}),it.jsx("a",{href:"https://www.linkedin.com/in/bella-wang-878919231/",children:it.jsx("i",{class:"fa-brands fa-linkedin"})})]})]})]})}function tC(){return it.jsx("div",{children:"404 - Page Not Found"})}const Qv=[{id:"introduction",title:"Introduction",content:[{type:"paragraph",text:"This project focuses on the design of a reflow oven controller capable of accurately following a predefined thermal profile for surface-mount soldering applications. The overall system integrates a microcontroller-based control unit, a solid-state relay for power regulation, and a temperature sensing thermocouple to provide real-time feedback."},{type:"paragraph",text:"The DE10-Lite board was employed with a keypad interface for user input, while an analog amplification circuit was assembled to condition the low-level thermocouple voltage for precise temperature measurement. A finite state machine regulates heating stages according to specified temperature thresholds and timing constraints, and a Python-based data visualization system tracks and displays a specific temperature profile within a ±3 °C error margin."},{type:"subheading",text:"Hardware Specifications"},{type:"specs",items:["Terasic DE10-Lite FPGA board","OP07 Operational Amplifier + LMC7660 Voltage Converter","LM335 Temperature Sensor + LM4040 Voltage Reference","K-Type Thermocouple Wire","OSEPP LCD-01G 16×2 Liquid Crystal Display","4×4 Keypad module","2× MG995 Servo Motors","ISD1820 Voice Recording Module + LM386 Audio Amplifier"]},{type:"subheading",text:"Software Specifications"},{type:"specs",items:["CV8052 Assembly — settable parameters via keypad, real-time temperature updates","Python TempPlot.py — serial communication, matplotlib stripchart","Computer Vision — OpenCV + YOLO hand gesture detection (yolov8x-tuned-hand-gestures)"]}]},{id:"investigation",title:"Investigation",content:[{type:"subheading",text:"Idea Generation"},{type:"paragraph",text:"The project began with a collaborative discussion around the main objective: design and build a circuit controlling a reflow oven capable of accurately following a solder reflow temperature profile. The group divided into three subteams:"},{type:"teams",items:[{name:"FSM Team",desc:"Designed the finite state machine governing overall system operation — reflow stage definitions, timing logic, and PWM control signals."},{name:"Temperature Team",desc:"Ensured accurate thermocouple readings, collected validation data, and integrated subsystems into the final code."},{name:"UI Team",desc:"Developed the keypad input system, buzzer alerts, LCD display features, and Python visualization code."}]},{type:"subheading",text:"Data Collection & Analysis"},{type:"paragraph",text:"To determine an appropriate gain for the OP07 chip, thermocouple voltage was measured at 20°C and 250°C, yielding a gain of 303 (using 100kΩ and 330Ω resistors). The LM4040 reference was measured at a steady 4.1088V. Initial error was observed at 4–5.5°C, addressed by applying a 3°C software offset and a 50ms ADC channel-switching delay. After calibration, measurement error was reduced to within ±3°C."}]},{id:"design",title:"Design",content:[{type:"subheading",text:"FSM Architecture"},{type:"states",items:[{state:"State 0",label:"Parameter Input",desc:"User configures soakTemp, soakTime, reflowTemp, reflowTime via keypad."},{state:"State 1",label:"Heat to Soak Temp",desc:"Safety check: if oven doesn't reach 50°C within 60s, process terminates."},{state:"State 2",label:"Soak Phase",desc:"Maintains temperature at soak setpoint for configured duration."},{state:"State 3",label:"Heat to Reflow Temp",desc:"Ramps temperature up to reflow target."},{state:"State 4",label:"Reflow Phase",desc:"Holds reflow temperature for configured duration."},{state:"State 5",label:"Cool Down",desc:"Servo motors open oven door. System waits for temp < 60°C before returning to State 0."}]},{type:"subheading",text:"PWM Control Strategy"},{type:"paragraph",text:"PWM control was selected over PID due to simpler FSM integration while still providing sufficient temperature tracking. Extensive testing determined the optimal duty cycle:"},{type:"table",headers:["PWM (%)","Overshoot (°C)","Result"],rows:[["10","25–30 below","❌ Below setpoint"],["15","10–20 above","✅ Selected — best stability"],["20","20–30 above","❌ Excessive on long runs"],["25","25–30 above","❌ Excessive overshoot"]]},{type:"subheading",text:"Safety Features"},{type:"specs",items:["Failsafe in State 1: terminates if oven doesn't reach 50°C within 60 seconds","Stop button available in all states to immediately cut oven power","Servo-automated door opening eliminates burn risk during cooling","FSM waits for oven temp < 60°C before signaling process completion","Servo subsystem on a separate breadboard with external 6V supply to prevent FPGA instability"]},{type:"subheading",text:"Additional Features"},{type:"teams",items:[{name:"Auto Door Opener",desc:"Two MG995 servo motors open the oven door at the cooling stage. Servos are on a separate 6V-powered breadboard to avoid current spikes affecting the FPGA."},{name:"Keypad Interface",desc:"4x4 matrix keypad allows user input of soak and reflow temperatures and durations. Parameters are stored in registers and displayed on the LCD for confirmation before starting the process."},{name:"Voice Feedback",desc:"ISD1820 voice recording module plays user-recorded messages at FSM stage transitions. LM386 amplifier boosts output without high-gain distortion."},{name:"Computer Vision",desc:"YOLO hand gesture model detects ASL 'O' gesture via webcam to start the reflow process remotely, eliminating the need for physical interaction."}]}]},{id:"results",title:"Results",content:[{type:"paragraph",text:"After recalibration and software offset adjustments, temperature measurement error was consistently within ±3°C across the full 25–240°C range (10 trials per temperature point). The complete validation table is shown below."},{type:"validation"},{type:"paragraph",text:"Final reflow parameters used in successful PCB soldering: Soak Temp 150°C, Soak Time 75s, Reflow Temp 217°C, Reflow Time 35s, PWM 15%."}]},{id:"conclusion",title:"Conclusion",content:[{type:"paragraph",text:"The reflow oven controller successfully follows SMT solder profiles with user-configurable parameters, accurate temperature sensing within ±3°C, and a robust finite state machine implementation in 8052 assembly. Extra features — servo-controlled door opener, voice feedback, and computer vision control — significantly improved safety and usability."},{type:"paragraph",text:"Despite technical challenges in temperature accuracy and FSM integration, all issues were systematically resolved. The project required an estimated 45 hours of development across the full team."},{type:"specs",items:["±3°C temperature accuracy achieved across full 25–240°C range","PWM 15% selected as optimal duty cycle for soak and reflow stages","Servo automated door-opening eliminates manual burn risk","YOLO computer vision enables contactless oven activation","GitHub version control used throughout for parallel development"]}]}],eC=[[25,.1,1.3,1.4,.1,1.6,1.3,.3,1.8,1.9,1.7],[30,1.2,1.2,.3,2.2,1.2,2.2,1.3,1.7,1.6,2.8],[40,2.9,1,1.9,1.8,1.7,2.4,2.3,.9,1.7,1.4],[50,1.4,2,.2,.8,.2,.1,1.8,.7,.5,1.3],[60,.9,2.6,1,1.8,2.7,2.6,1.5,.3,1.2,.6],[70,.6,1.3,1.2,1,.6,1.3,1.8,.4,.1,1.1],[80,.1,1.1,.7,1.1,.6,.5,1,.5,1.2,.6],[90,.6,.7,1,1.3,.4,.1,1,1.2,2.9,1.2],[100,1,.1,0,.9,.3,.6,1.5,2.2,1.3,1.2],[110,.3,.9,.2,1,.6,1.4,1.4,2,1.9,.45],[120,.3,.2,1.1,.1,.5,1.9,2.5,1.4,.8,1.8],[130,.3,.9,.7,1.3,.3,1.2,2.1,2.7,.5,.9],[140,0,.9,2.2,1.4,1.8,2,.8,.4,.8,1.3],[150,.8,.3,.4,.6,.3,1.2,.6,.3,1.3,1.5],[160,.1,1.4,2.2,1.5,1.4,2.8,1.6,2.2,.9,.2],[170,.3,2.6,1.2,.1,1.8,.2,.4,.9,.3,1.4],[180,.1,1.2,1.2,.8,.3,1.2,1.4,.4,.9,.2],[190,.6,2,.4,1.3,.9,2,.5,1.4,.6,1.9],[200,.6,.8,.5,1.2,.6,1.6,.1,.3,1.4,.8],[210,0,.2,.8,.2,.7,.7,2.4,.3,.5,.2],[220,1.4,.5,.8,1.2,.9,1.1,.6,.3,1.4,.7],[230,.2,1.3,.2,1,.6,1.2,.5,2.3,2.3,.9],[240,1,1,.1,.5,1.2,.4,1.1,.6,1.9,2.6]];function nC(){return it.jsxs("div",{style:{overflowX:"auto",marginTop:"1rem"},children:[it.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.72rem",fontFamily:"'Courier New', monospace"},children:[it.jsx("thead",{children:it.jsxs("tr",{children:[it.jsx("th",{style:{background:"#3a0040d8",color:"#c37fe0",padding:"6px 10px",textAlign:"left",borderBottom:"2px solid #b55ab8",whiteSpace:"nowrap"},children:"Temp (°C)"}),[1,2,3,4,5,6,7,8,9,10].map(s=>it.jsxs("th",{style:{background:"#3a0040d8",color:"#cb7fe0",padding:"6px 8px",textAlign:"center",borderBottom:"2px solid #a85ab8"},children:["Trial ",s]},s))]})}),it.jsx("tbody",{children:eC.map(([s,...t],i)=>it.jsxs("tr",{style:{background:i%2===0?"rgba(0,0,0,0.04)":"transparent"},children:[it.jsx("td",{style:{padding:"5px 10px",color:"#67307a",fontWeight:"bold",borderRight:"1px solid rgba(0,0,0,0.1)"},children:s}),t.map((a,o)=>it.jsx("td",{style:{padding:"5px 8px",textAlign:"center",color:a>=2.5?"#c0392b":a>=1.5?"#e67e22":"#27ae60"},children:a},o))]},s))})]}),it.jsx("p",{style:{fontSize:"0.7rem",color:"rgba(0,0,0,0.45)",marginTop:"0.5rem",fontStyle:"italic"},children:"Values represent absolute error in °C. Green <1.5°C · Orange 1.5–2.5°C · Red ≥2.5°C (rare). All within ±3°C spec."})]})}function iC({section:s,isActive:t,onClick:i}){return ht.useRef(),it.jsx("div",{style:{marginBottom:"0.5rem"},children:it.jsxs("button",{onClick:i,style:{width:"100%",background:t?"rgba(162, 60, 180, 0.12)":"transparent",border:t?"1px solid rgba(148, 60, 180, 0.6)":"1px solid rgba(0,0,0,0.12)",borderRadius:"6px",padding:"0.75rem 1rem",color:t?"#67307a":"rgba(0,0,0,0.5)",textAlign:"left",cursor:"pointer",fontSize:"0.85rem",fontFamily:"'Courier New', monospace",letterSpacing:"0.05em",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"0.5rem"},children:[it.jsx("span",{style:{opacity:.5},children:t?"▼":"▶"}),s.title.toUpperCase()]})})}function aC(s){return s.map((t,i)=>t.type==="paragraph"?it.jsx("p",{style:{color:"rgba(0,0,0,0.75)",lineHeight:1.8,marginBottom:"1rem",fontSize:"0.9rem"},children:t.text},i):t.type==="subheading"?it.jsx("h3",{style:{color:"rgb(221, 127, 224)",fontFamily:"'Courier New', monospace",fontSize:"0.8rem",letterSpacing:"0.12em",textTransform:"uppercase",marginTop:"1.5rem",marginBottom:"0.75rem",borderLeft:"3px solid #d37fe0",paddingLeft:"0.75rem"},children:t.text},i):t.type==="specs"?it.jsx("ul",{style:{listStyle:"none",padding:0,margin:"0 0 1rem 0"},children:t.items.map((a,o)=>it.jsxs("li",{style:{color:"rgba(0,0,0,0.7)",fontSize:"0.85rem",padding:"0.4rem 0",paddingLeft:"1.2rem",borderBottom:"1px solid rgba(0,0,0,0.06)",position:"relative",lineHeight:1.6},children:[it.jsx("span",{style:{position:"absolute",left:0,color:"#c97fe0"},children:"›"}),a]},o))},i):t.type==="teams"?it.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",marginBottom:"1rem"},children:t.items.map((a,o)=>it.jsxs("div",{style:{background:"rgba(0,0,0,0.03)",border:"1px solid rgba(154, 60, 180, 0.25)",borderRadius:"8px",padding:"0.85rem 1rem"},children:[it.jsx("div",{style:{color:"#ce7fe0",fontFamily:"'Courier New', monospace",fontSize:"0.8rem",fontWeight:"bold",marginBottom:"0.3rem"},children:a.name}),it.jsx("div",{style:{color:"rgba(0,0,0,0.65)",fontSize:"0.85rem",lineHeight:1.6},children:a.desc})]},o))},i):t.type==="states"?it.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1rem"},children:t.items.map((a,o)=>it.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start",padding:"0.75rem",background:"rgba(0,0,0,0.03)",borderRadius:"6px",borderLeft:"3px solid rgba(164, 60, 180, 0.5)"},children:[it.jsxs("div",{style:{minWidth:"70px"},children:[it.jsx("div",{style:{color:"#c47fe0",fontFamily:"'Courier New', monospace",fontSize:"0.7rem"},children:a.state}),it.jsx("div",{style:{color:"rgba(0,0,0,0.45)",fontSize:"0.7rem",marginTop:"2px"},children:a.label})]}),it.jsx("div",{style:{color:"rgba(0,0,0,0.65)",fontSize:"0.82rem",lineHeight:1.6},children:a.desc})]},o))},i):t.type==="table"?it.jsx("div",{style:{overflowX:"auto",marginBottom:"1rem"},children:it.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.82rem"},children:[it.jsx("thead",{children:it.jsx("tr",{children:t.headers.map((a,o)=>it.jsx("th",{style:{background:"rgba(224,201,127,0.15)",color:"#c97fe0",padding:"8px 12px",textAlign:"left",fontFamily:"'Courier New', monospace",fontSize:"0.75rem",letterSpacing:"0.05em",borderBottom:"1px solid rgba(224,201,127,0.3)"},children:a},o))})}),it.jsx("tbody",{children:t.rows.map((a,o)=>it.jsx("tr",{style:{borderBottom:"1px solid rgba(0,0,0,0.06)"},children:a.map((u,f)=>it.jsx("td",{style:{padding:"8px 12px",color:u.includes("✅")?"#27ae60":u.includes("❌")?"#c0392b":"rgba(0,0,0,0.7)"},children:u},f))},o))})]})},i):t.type==="validation"?it.jsx(nC,{},i):null)}function rC(){const[s,t]=ht.useState("introduction"),i=Qv.find(a=>a.id===s);return it.jsxs("div",{style:{minHeight:"100vh",color:"#111",fontFamily:"Georgia, serif",padding:"2rem",overflowY:"auto",position:"relative",zindex:10},children:[it.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto 2.5rem"},children:[it.jsx("div",{style:{fontFamily:"'Courier New', monospace",fontSize:"0.7rem",color:"rgb(183, 83, 206)",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"0.5rem"},children:"ELEC 291 · Winter 2025 · UBC ECE · Group A01"}),it.jsxs("h1",{style:{fontSize:"clamp(1.5rem, 4vw, 2.5rem)",fontFamily:"'Courier New', monospace",fontWeight:"bold",margin:0,lineHeight:1.2,color:"#111"},children:["Reflow Oven",it.jsx("span",{style:{color:"#c97fe0"},children:" Controller"})]}),it.jsx("div",{style:{marginTop:"0.75rem",height:"1px",background:"linear-gradient(to right, rgba(224, 127, 224, 0.6), transparent)"}}),it.jsx("p",{style:{marginTop:"0.75rem",color:"rgba(0,0,0,0.5)",fontSize:"0.85rem",lineHeight:1.6},children:"A microcontroller-based SMT soldering system with FSM control, thermocouple sensing, and automated safety features."})]}),it.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",display:"flex",gap:"2rem",alignItems:"flex-start"},children:[it.jsxs("div",{style:{width:"180px",flexShrink:0,top:"1rem"},children:[Qv.map(a=>it.jsx(iC,{section:a,isActive:s===a.id,onClick:()=>t(a.id)},a.id)),it.jsx("div",{style:{marginTop:"1.5rem",padding:"1rem",background:"rgba(162, 60, 180, 0.07)",border:"1px solid rgba(158, 60, 180, 0.2)",borderRadius:"8px"},children:[["±3°C","Accuracy"],["6","Team members"],["5","FSM States"],["~45hrs","Dev time"]].map(([a,o])=>it.jsxs("div",{style:{marginBottom:"0.75rem"},children:[it.jsx("div",{style:{color:"#ce7fe0",fontFamily:"'Courier New', monospace",fontSize:"1rem",fontWeight:"bold"},children:a}),it.jsx("div",{style:{color:"rgba(0,0,0,0.45)",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em"},children:o})]},o))})]}),it.jsxs("div",{style:{flex:1,minWidth:0,background:"rgba(0,0,0,0.02)",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"12px",padding:"2rem"},children:[it.jsx("h2",{style:{fontFamily:"'Courier New', monospace",fontSize:"1rem",color:"#d57fe0",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:0,marginBottom:"1.5rem",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(224,201,127,0.2)"},children:i.title}),aC(i.content)]})]}),it.jsxs("div",{style:{maxWidth:"900px",margin:"3rem auto 0",paddingTop:"1rem",borderTop:"1px solid rgba(0,0,0,0.1)",display:"flex",justifyContent:"space-between",color:"rgba(0,0,0,0.35)",fontSize:"0.72rem",fontFamily:"'Courier New', monospace"},children:[it.jsx("span",{children:"ELEC 291 · Project 1 · February 2026"}),it.jsx("span",{children:"University of British Columbia"})]})]})}function sC(){const s=ht.useRef();return it.jsxs("div",{className:"container",ref:s,children:[it.jsx(qM,{}),it.jsx(jM,{}),it.jsx(aE,{}),it.jsx($w,{})]})}function oC(){return it.jsxs("div",{children:[it.jsxs("div",{className:"navbar",children:[it.jsx("a",{className:"heroLink",href:"#hero",children:"Bella Wang"}),it.jsxs("div",{className:"nav-links",children:[it.jsx("a",{href:"#skills",children:"Skills"}),it.jsx("a",{href:"#projects",children:"Projects"}),it.jsx("a",{href:"#contact",children:"Contact"}),it.jsx("button",{children:"View Resume"})]})]}),it.jsxs(rM,{children:[it.jsx(Pu,{path:"/",element:it.jsx(sC,{})}),it.jsx(Pu,{path:"*",element:it.jsx(tC,{})}),it.jsx(Pu,{path:"/reflowoven",element:it.jsx(rC,{})})]})]})}oS.createRoot(document.getElementById("root")).render(it.jsx(CM,{children:it.jsx(oC,{})}));
