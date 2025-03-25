(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gr(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ao="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xo=gr(Ao);function Ks(e){return!!e||e===""}function mr(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=q(r)?Oo(r):mr(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(q(e))return e;if(z(e))return e}}const Do=/;(?![^(]*\))/g,So=/:(.+)/;function Oo(e){const t={};return e.split(Do).forEach(n=>{if(n){const r=n.split(So);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xt(e){let t="";if(q(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const r=xt(e[n]);r&&(t+=r+" ")}else if(z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Mo(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=on(e[r],t[r]);return n}function on(e,t){if(e===t)return!0;let n=Yr(e),r=Yr(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Dt(e),r=Dt(t),n||r)return e===t;if(n=x(e),r=x(t),n||r)return n&&r?Mo(e,t):!1;if(n=z(e),r=z(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!on(e[o],t[o]))return!1}}return String(e)===String(t)}function qs(e,t){return e.findIndex(n=>on(n,t))}const Po=e=>q(e)?e:e==null?"":x(e)||z(e)&&(e.toString===Gs||!O(e.toString))?JSON.stringify(e,Ys,2):String(e),Ys=(e,t)=>t&&t.__v_isRef?Ys(e,t.value):ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:cn(t)?{[`Set(${t.size})`]:[...t.values()]}:z(t)&&!x(t)&&!Xs(t)?String(t):t,L={},at=[],he=()=>{},Ro=()=>!1,$o=/^on[^a-z]/,an=e=>$o.test(e),br=e=>e.startsWith("onUpdate:"),Z=Object.assign,_r=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Bo=Object.prototype.hasOwnProperty,P=(e,t)=>Bo.call(e,t),x=Array.isArray,ct=e=>Ft(e)==="[object Map]",cn=e=>Ft(e)==="[object Set]",Yr=e=>Ft(e)==="[object Date]",O=e=>typeof e=="function",q=e=>typeof e=="string",Dt=e=>typeof e=="symbol",z=e=>e!==null&&typeof e=="object",Js=e=>z(e)&&O(e.then)&&O(e.catch),Gs=Object.prototype.toString,Ft=e=>Gs.call(e),Fo=e=>Ft(e).slice(8,-1),Xs=e=>Ft(e)==="[object Object]",yr=e=>q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kt=gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ln=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},No=/-(\w)/g,ye=ln(e=>e.replace(No,(t,n)=>n?n.toUpperCase():"")),Lo=/\B([A-Z])/g,ht=ln(e=>e.replace(Lo,"-$1").toLowerCase()),un=ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=ln(e=>e?`on${un(e)}`:""),St=(e,t)=>!Object.is(e,t),qt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Gt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ko=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Jr;const jo=()=>Jr||(Jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let be;class Ho{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&be&&(this.parent=be,this.index=(be.scopes||(be.scopes=[])).push(this)-1)}run(t){if(this.active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Uo(e,t=be){t&&t.active&&t.effects.push(e)}const wr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Zs=e=>(e.w&Be)>0,Qs=e=>(e.n&Be)>0,Vo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Be},Wo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Zs(s)&&!Qs(s)?s.delete(e):t[n++]=s,s.w&=~Be,s.n&=~Be}t.length=n}},qn=new WeakMap;let It=0,Be=1;const Yn=30;let ue;const ze=Symbol(""),Jn=Symbol("");class Ir{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uo(this,r)}run(){if(!this.active)return this.fn();let t=ue,n=Se;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ue,ue=this,Se=!0,Be=1<<++It,It<=Yn?Vo(this):Gr(this),this.fn()}finally{It<=Yn&&Wo(this),Be=1<<--It,ue=this.parent,Se=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ue===this?this.deferStop=!0:this.active&&(Gr(this),this.onStop&&this.onStop(),this.active=!1)}}function Gr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Se=!0;const ei=[];function pt(){ei.push(Se),Se=!1}function gt(){const e=ei.pop();Se=e===void 0?!0:e}function ae(e,t,n){if(Se&&ue){let r=qn.get(e);r||qn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=wr()),ti(s)}}function ti(e,t){let n=!1;It<=Yn?Qs(e)||(e.n|=Be,n=!Zs(e)):n=!e.has(ue),n&&(e.add(ue),ue.deps.push(e))}function ve(e,t,n,r,s,i){const o=qn.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&x(e))o.forEach((c,f)=>{(f==="length"||f>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":x(e)?yr(n)&&a.push(o.get("length")):(a.push(o.get(ze)),ct(e)&&a.push(o.get(Jn)));break;case"delete":x(e)||(a.push(o.get(ze)),ct(e)&&a.push(o.get(Jn)));break;case"set":ct(e)&&a.push(o.get(ze));break}if(a.length===1)a[0]&&Gn(a[0]);else{const c=[];for(const f of a)f&&c.push(...f);Gn(wr(c))}}function Gn(e,t){const n=x(e)?e:[...e];for(const r of n)r.computed&&Xr(r);for(const r of n)r.computed||Xr(r)}function Xr(e,t){(e!==ue||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const zo=gr("__proto__,__v_isRef,__isVue"),ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dt)),Ko=Er(),qo=Er(!1,!0),Yo=Er(!0),Zr=Jo();function Jo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(B)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pt();const r=B(this)[t].apply(this,n);return gt(),r}}),e}function Er(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?fa:ai:t?oi:ii).get(r))return r;const o=x(r);if(!e&&o&&P(Zr,s))return Reflect.get(Zr,s,i);const a=Reflect.get(r,s,i);return(Dt(s)?ni.has(s):zo(s))||(e||ae(r,"get",s),t)?a:Y(a)?o&&yr(s)?a:a.value:z(a)?e?ci(a):dn(a):a}}const Go=ri(),Xo=ri(!0);function ri(e=!1){return function(n,r,s,i){let o=n[r];if(Ot(o)&&Y(o)&&!Y(s))return!1;if(!e&&!Ot(s)&&(Xn(s)||(s=B(s),o=B(o)),!x(n)&&Y(o)&&!Y(s)))return o.value=s,!0;const a=x(n)&&yr(r)?Number(r)<n.length:P(n,r),c=Reflect.set(n,r,s,i);return n===B(i)&&(a?St(s,o)&&ve(n,"set",r,s):ve(n,"add",r,s)),c}}function Zo(e,t){const n=P(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ve(e,"delete",t,void 0),r}function Qo(e,t){const n=Reflect.has(e,t);return(!Dt(t)||!ni.has(t))&&ae(e,"has",t),n}function ea(e){return ae(e,"iterate",x(e)?"length":ze),Reflect.ownKeys(e)}const si={get:Ko,set:Go,deleteProperty:Zo,has:Qo,ownKeys:ea},ta={get:Yo,set(e,t){return!0},deleteProperty(e,t){return!0}},na=Z({},si,{get:qo,set:Xo}),vr=e=>e,fn=e=>Reflect.getPrototypeOf(e);function Ht(e,t,n=!1,r=!1){e=e.__v_raw;const s=B(e),i=B(t);n||(t!==i&&ae(s,"get",t),ae(s,"get",i));const{has:o}=fn(s),a=r?vr:n?Ar:Mt;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Ut(e,t=!1){const n=this.__v_raw,r=B(n),s=B(e);return t||(e!==s&&ae(r,"has",e),ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Vt(e,t=!1){return e=e.__v_raw,!t&&ae(B(e),"iterate",ze),Reflect.get(e,"size",e)}function Qr(e){e=B(e);const t=B(this);return fn(t).has.call(t,e)||(t.add(e),ve(t,"add",e,e)),this}function es(e,t){t=B(t);const n=B(this),{has:r,get:s}=fn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?St(t,o)&&ve(n,"set",e,t):ve(n,"add",e,t),this}function ts(e){const t=B(this),{has:n,get:r}=fn(t);let s=n.call(t,e);s||(e=B(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ve(t,"delete",e,void 0),i}function ns(){const e=B(this),t=e.size!==0,n=e.clear();return t&&ve(e,"clear",void 0,void 0),n}function Wt(e,t){return function(r,s){const i=this,o=i.__v_raw,a=B(o),c=t?vr:e?Ar:Mt;return!e&&ae(a,"iterate",ze),o.forEach((f,h)=>r.call(s,c(f),c(h),i))}}function zt(e,t,n){return function(...r){const s=this.__v_raw,i=B(s),o=ct(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,f=s[e](...r),h=n?vr:t?Ar:Mt;return!t&&ae(i,"iterate",c?Jn:ze),{next(){const{value:_,done:I}=f.next();return I?{value:_,done:I}:{value:a?[h(_[0]),h(_[1])]:h(_),done:I}},[Symbol.iterator](){return this}}}}function Ae(e){return function(...t){return e==="delete"?!1:this}}function ra(){const e={get(i){return Ht(this,i)},get size(){return Vt(this)},has:Ut,add:Qr,set:es,delete:ts,clear:ns,forEach:Wt(!1,!1)},t={get(i){return Ht(this,i,!1,!0)},get size(){return Vt(this)},has:Ut,add:Qr,set:es,delete:ts,clear:ns,forEach:Wt(!1,!0)},n={get(i){return Ht(this,i,!0)},get size(){return Vt(this,!0)},has(i){return Ut.call(this,i,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Wt(!0,!1)},r={get(i){return Ht(this,i,!0,!0)},get size(){return Vt(this,!0)},has(i){return Ut.call(this,i,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Wt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zt(i,!1,!1),n[i]=zt(i,!0,!1),t[i]=zt(i,!1,!0),r[i]=zt(i,!0,!0)}),[e,n,t,r]}const[sa,ia,oa,aa]=ra();function Tr(e,t){const n=t?e?aa:oa:e?ia:sa;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(P(n,s)&&s in r?n:r,s,i)}const ca={get:Tr(!1,!1)},la={get:Tr(!1,!0)},ua={get:Tr(!0,!1)},ii=new WeakMap,oi=new WeakMap,ai=new WeakMap,fa=new WeakMap;function da(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ha(e){return e.__v_skip||!Object.isExtensible(e)?0:da(Fo(e))}function dn(e){return Ot(e)?e:Cr(e,!1,si,ca,ii)}function pa(e){return Cr(e,!1,na,la,oi)}function ci(e){return Cr(e,!0,ta,ua,ai)}function Cr(e,t,n,r,s){if(!z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=ha(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function lt(e){return Ot(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function Xn(e){return!!(e&&e.__v_isShallow)}function li(e){return lt(e)||Ot(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function ui(e){return Gt(e,"__v_skip",!0),e}const Mt=e=>z(e)?dn(e):e,Ar=e=>z(e)?ci(e):e;function fi(e){Se&&ue&&(e=B(e),ti(e.dep||(e.dep=wr())))}function di(e,t){e=B(e),e.dep&&Gn(e.dep)}function Y(e){return!!(e&&e.__v_isRef===!0)}function On(e){return ga(e,!1)}function ga(e,t){return Y(e)?e:new ma(e,t)}class ma{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:B(t),this._value=n?t:Mt(t)}get value(){return fi(this),this._value}set value(t){t=this.__v_isShallow?t:B(t),St(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Mt(t),di(this))}}function ba(e){return Y(e)?e.value:e}const _a={get:(e,t,n)=>ba(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Y(s)&&!Y(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function hi(e){return lt(e)?e:new Proxy(e,_a)}function ya(e){const t=x(e)?new Array(e.length):{};for(const n in e)t[n]=Ia(e,n);return t}class wa{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ia(e,t,n){const r=e[t];return Y(r)?r:new wa(e,t,n)}class Ea{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ir(t,()=>{this._dirty||(this._dirty=!0,di(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=B(this);return fi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function va(e,t,n=!1){let r,s;const i=O(e);return i?(r=e,s=he):(r=e.get,s=e.set),new Ea(r,s,i||!s,n)}function Oe(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Nt(i,t,n)}return s}function pe(e,t,n,r){if(O(e)){const i=Oe(e,t,n,r);return i&&Js(i)&&i.catch(o=>{Nt(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(pe(e[i],t,n,r));return s}function Nt(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const f=i.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Oe(c,null,10,[e,o,a]);return}}Ta(e,n,s,r)}function Ta(e,t,n,r=!0){console.error(e)}let Xt=!1,Zn=!1;const se=[];let Ee=0;const vt=[];let Et=null,rt=0;const Tt=[];let xe=null,st=0;const pi=Promise.resolve();let xr=null,Qn=null;function Ca(e){const t=xr||pi;return e?t.then(this?e.bind(this):e):t}function Aa(e){let t=Ee+1,n=se.length;for(;t<n;){const r=t+n>>>1;Pt(se[r])<e?t=r+1:n=r}return t}function Dr(e){(!se.length||!se.includes(e,Xt&&e.allowRecurse?Ee+1:Ee))&&e!==Qn&&(e.id==null?se.push(e):se.splice(Aa(e.id),0,e),gi())}function gi(){!Xt&&!Zn&&(Zn=!0,xr=pi.then(_i))}function xa(e){const t=se.indexOf(e);t>Ee&&se.splice(t,1)}function mi(e,t,n,r){x(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),gi()}function Da(e){mi(e,Et,vt,rt)}function Sa(e){mi(e,xe,Tt,st)}function hn(e,t=null){if(vt.length){for(Qn=t,Et=[...new Set(vt)],vt.length=0,rt=0;rt<Et.length;rt++)Et[rt]();Et=null,rt=0,Qn=null,hn(e,t)}}function bi(e){if(hn(),Tt.length){const t=[...new Set(Tt)];if(Tt.length=0,xe){xe.push(...t);return}for(xe=t,xe.sort((n,r)=>Pt(n)-Pt(r)),st=0;st<xe.length;st++)xe[st]();xe=null,st=0}}const Pt=e=>e.id==null?1/0:e.id;function _i(e){Zn=!1,Xt=!0,hn(e),se.sort((n,r)=>Pt(n)-Pt(r));const t=he;try{for(Ee=0;Ee<se.length;Ee++){const n=se[Ee];n&&n.active!==!1&&Oe(n,null,14)}}finally{Ee=0,se.length=0,bi(),Xt=!1,xr=null,(se.length||vt.length||Tt.length)&&_i(e)}}function Oa(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||L;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:_,trim:I}=r[h]||L;I&&(s=n.map(v=>v.trim())),_&&(s=n.map(ko))}let a,c=r[a=Sn(t)]||r[a=Sn(ye(t))];!c&&i&&(c=r[a=Sn(ht(t))]),c&&pe(c,e,6,s);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,pe(f,e,6,s)}}function yi(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!O(e)){const c=f=>{const h=yi(f,t,!0);h&&(a=!0,Z(o,h))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(r.set(e,null),null):(x(i)?i.forEach(c=>o[c]=null):Z(o,i),r.set(e,o),o)}function pn(e,t){return!e||!an(t)?!1:(t=t.slice(2).replace(/Once$/,""),P(e,t[0].toLowerCase()+t.slice(1))||P(e,ht(t))||P(e,t))}let fe=null,gn=null;function Zt(e){const t=fe;return fe=e,gn=e&&e.type.__scopeId||null,t}function Ma(e){gn=e}function Pa(){gn=null}function Ra(e,t=fe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&hs(-1);const i=Zt(t),o=e(...s);return Zt(i),r._d&&hs(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Mn(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:f,render:h,renderCache:_,data:I,setupState:v,ctx:D,inheritAttrs:k}=e;let M,R;const V=Zt(e);try{if(n.shapeFlag&4){const G=s||r;M=_e(h.call(G,G,_,i,v,I,D)),R=c}else{const G=t;M=_e(G.length>1?G(i,{attrs:c,slots:a,emit:f}):G(i,null)),R=t.props?c:$a(c)}}catch(G){Ct.length=0,Nt(G,e,1),M=ie(Rt)}let J=M;if(R&&k!==!1){const G=Object.keys(R),{shapeFlag:Ze}=J;G.length&&Ze&7&&(o&&G.some(br)&&(R=Ba(R,o)),J=ut(J,R))}return n.dirs&&(J=ut(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),M=J,Zt(V),M}const $a=e=>{let t;for(const n in e)(n==="class"||n==="style"||an(n))&&((t||(t={}))[n]=e[n]);return t},Ba=(e,t)=>{const n={};for(const r in e)(!br(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Fa(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?rs(r,o,f):!!o;if(c&8){const h=t.dynamicProps;for(let _=0;_<h.length;_++){const I=h[_];if(o[I]!==r[I]&&!pn(f,I))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?rs(r,o,f):!0:!!o;return!1}function rs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!pn(n,i))return!0}return!1}function Na({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const La=e=>e.__isSuspense;function ka(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):Sa(e)}function ja(e,t){if(K){let n=K.provides;const r=K.parent&&K.parent.provides;r===n&&(n=K.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){const r=K||fe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&O(t)?t.call(r.proxy):t}}const ss={};function Rn(e,t,n){return wi(e,t,n)}function wi(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=L){const a=K;let c,f=!1,h=!1;if(Y(e)?(c=()=>e.value,f=Xn(e)):lt(e)?(c=()=>e,r=!0):x(e)?(h=!0,f=e.some(R=>lt(R)||Xn(R)),c=()=>e.map(R=>{if(Y(R))return R.value;if(lt(R))return Ve(R);if(O(R))return Oe(R,a,2)})):O(e)?t?c=()=>Oe(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return _&&_(),pe(e,a,3,[I])}:c=he,t&&r){const R=c;c=()=>Ve(R())}let _,I=R=>{_=M.onStop=()=>{Oe(R,a,4)}};if(dt)return I=he,t?n&&pe(t,a,3,[c(),h?[]:void 0,I]):c(),he;let v=h?[]:ss;const D=()=>{if(!!M.active)if(t){const R=M.run();(r||f||(h?R.some((V,J)=>St(V,v[J])):St(R,v)))&&(_&&_(),pe(t,a,3,[R,v===ss?void 0:v,I]),v=R)}else M.run()};D.allowRecurse=!!t;let k;s==="sync"?k=D:s==="post"?k=()=>ee(D,a&&a.suspense):k=()=>Da(D);const M=new Ir(c,k);return t?n?D():v=M.run():s==="post"?ee(M.run.bind(M),a&&a.suspense):M.run(),()=>{M.stop(),a&&a.scope&&_r(a.scope.effects,M)}}function Ha(e,t,n){const r=this.proxy,s=q(e)?e.includes(".")?Ii(r,e):()=>r[e]:e.bind(r,r);let i;O(t)?i=t:(i=t.handler,n=t);const o=K;ft(this);const a=wi(s,i.bind(r),n);return o?ft(o):Ke(),a}function Ii(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ve(e,t){if(!z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Y(e))Ve(e.value,t);else if(x(e))for(let n=0;n<e.length;n++)Ve(e[n],t);else if(cn(e)||ct(e))e.forEach(n=>{Ve(n,t)});else if(Xs(e))for(const n in e)Ve(e[n],t);return e}function Sr(e){return O(e)?{setup:e,name:e.name}:e}const Yt=e=>!!e.type.__asyncLoader;function Ua(e){O(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=e;let c=null,f,h=0;const _=()=>(h++,c=null,I()),I=()=>{let v;return c||(v=c=t().catch(D=>{if(D=D instanceof Error?D:new Error(String(D)),a)return new Promise((k,M)=>{a(D,()=>k(_()),()=>M(D),h+1)});throw D}).then(D=>v!==c&&c?c:(D&&(D.__esModule||D[Symbol.toStringTag]==="Module")&&(D=D.default),f=D,D)))};return Sr({name:"AsyncComponentWrapper",__asyncLoader:I,get __asyncResolved(){return f},setup(){const v=K;if(f)return()=>$n(f,v);const D=V=>{c=null,Nt(V,v,13,!r)};if(o&&v.suspense||dt)return I().then(V=>()=>$n(V,v)).catch(V=>(D(V),()=>r?ie(r,{error:V}):null));const k=On(!1),M=On(),R=On(!!s);return s&&setTimeout(()=>{R.value=!1},s),i!=null&&setTimeout(()=>{if(!k.value&&!M.value){const V=new Error(`Async component timed out after ${i}ms.`);D(V),M.value=V}},i),I().then(()=>{k.value=!0,v.parent&&Or(v.parent.vnode)&&Dr(v.parent.update)}).catch(V=>{D(V),M.value=V}),()=>{if(k.value&&f)return $n(f,v);if(M.value&&r)return ie(r,{error:M.value});if(n&&!R.value)return ie(n)}}})}function $n(e,{vnode:{ref:t,props:n,children:r,shapeFlag:s},parent:i}){const o=ie(e,n,r);return o.ref=t,o}const Or=e=>e.type.__isKeepAlive;function Va(e,t){Ei(e,"a",t)}function Wa(e,t){Ei(e,"da",t)}function Ei(e,t,n=K){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(mn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Or(s.parent.vnode)&&za(r,t,n,s),s=s.parent}}function za(e,t,n,r){const s=mn(t,e,r,!0);vi(()=>{_r(r[t],s)},n)}function mn(e,t,n=K,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;pt(),ft(n);const a=pe(t,n,e,o);return Ke(),gt(),a});return r?s.unshift(i):s.push(i),i}}const Te=e=>(t,n=K)=>(!dt||e==="sp")&&mn(e,t,n),Ka=Te("bm"),qa=Te("m"),Ya=Te("bu"),Ja=Te("u"),Ga=Te("bum"),vi=Te("um"),Xa=Te("sp"),Za=Te("rtg"),Qa=Te("rtc");function ec(e,t=K){mn("ec",e,t)}function Bd(e,t){const n=fe;if(n===null)return e;const r=_n(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,f=L]=t[i];O(o)&&(o={mounted:o,updated:o}),o.deep&&Ve(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:f})}return e}function Le(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pt(),pe(c,n,8,[e.el,a,e,t]),gt())}}const Ti="components";function tc(e,t){return rc(Ti,e,!0,t)||e}const nc=Symbol();function rc(e,t,n=!0,r=!1){const s=fe||K;if(s){const i=s.type;if(e===Ti){const a=Bc(i,!1);if(a&&(a===t||a===ye(t)||a===un(ye(t))))return i}const o=is(s[e]||i[e],t)||is(s.appContext[e],t);return!o&&r?i:o}}function is(e,t){return e&&(e[t]||e[ye(t)]||e[un(ye(t))])}function os(e,t,n,r){let s;const i=n&&n[r];if(x(e)||q(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(z(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const f=o[a];s[a]=t(e[f],f,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const er=e=>e?Bi(e)?_n(e)||e.proxy:er(e.parent):null,Qt=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>er(e.parent),$root:e=>er(e.root),$emit:e=>e.emit,$options:e=>Ai(e),$forceUpdate:e=>e.f||(e.f=()=>Dr(e.update)),$nextTick:e=>e.n||(e.n=Ca.bind(e.proxy)),$watch:e=>Ha.bind(e)}),sc={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let f;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(r!==L&&P(r,t))return o[t]=1,r[t];if(s!==L&&P(s,t))return o[t]=2,s[t];if((f=e.propsOptions[0])&&P(f,t))return o[t]=3,i[t];if(n!==L&&P(n,t))return o[t]=4,n[t];tr&&(o[t]=0)}}const h=Qt[t];let _,I;if(h)return t==="$attrs"&&ae(e,"get",t),h(e);if((_=a.__cssModules)&&(_=_[t]))return _;if(n!==L&&P(n,t))return o[t]=4,n[t];if(I=c.config.globalProperties,P(I,t))return I[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return s!==L&&P(s,t)?(s[t]=n,!0):r!==L&&P(r,t)?(r[t]=n,!0):P(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==L&&P(e,o)||t!==L&&P(t,o)||(a=i[0])&&P(a,o)||P(r,o)||P(Qt,o)||P(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:P(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let tr=!0;function ic(e){const t=Ai(e),n=e.proxy,r=e.ctx;tr=!1,t.beforeCreate&&as(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:f,created:h,beforeMount:_,mounted:I,beforeUpdate:v,updated:D,activated:k,deactivated:M,beforeDestroy:R,beforeUnmount:V,destroyed:J,unmounted:G,render:Ze,renderTracked:vn,renderTriggered:Tn,errorCaptured:Lt,serverPrefetch:Ne,expose:mt,inheritAttrs:Qe,components:bt,directives:kt,filters:Ur}=t;if(f&&oc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const W in o){const j=o[W];O(j)&&(r[W]=j.bind(n))}if(s){const W=s.call(n,n);z(W)&&(e.data=dn(W))}if(tr=!0,i)for(const W in i){const j=i[W],we=O(j)?j.bind(n,n):O(j.get)?j.get.bind(n,n):he,An=!O(j)&&O(j.set)?j.set.bind(n):he,_t=Nc({get:we,set:An});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>_t.value,set:et=>_t.value=et})}if(a)for(const W in a)Ci(a[W],r,n,W);if(c){const W=O(c)?c.call(n):c;Reflect.ownKeys(W).forEach(j=>{ja(j,W[j])})}h&&as(h,e,"c");function Q(W,j){x(j)?j.forEach(we=>W(we.bind(n))):j&&W(j.bind(n))}if(Q(Ka,_),Q(qa,I),Q(Ya,v),Q(Ja,D),Q(Va,k),Q(Wa,M),Q(ec,Lt),Q(Qa,vn),Q(Za,Tn),Q(Ga,V),Q(vi,G),Q(Xa,Ne),x(mt))if(mt.length){const W=e.exposed||(e.exposed={});mt.forEach(j=>{Object.defineProperty(W,j,{get:()=>n[j],set:we=>n[j]=we})})}else e.exposed||(e.exposed={});Ze&&e.render===he&&(e.render=Ze),Qe!=null&&(e.inheritAttrs=Qe),bt&&(e.components=bt),kt&&(e.directives=kt)}function oc(e,t,n=he,r=!1){x(e)&&(e=nr(e));for(const s in e){const i=e[s];let o;z(i)?"default"in i?o=Pn(i.from||s,i.default,!0):o=Pn(i.from||s):o=Pn(i),Y(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function as(e,t,n){pe(x(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ci(e,t,n,r){const s=r.includes(".")?Ii(n,r):()=>n[r];if(q(e)){const i=t[e];O(i)&&Rn(s,i)}else if(O(e))Rn(s,e.bind(n));else if(z(e))if(x(e))e.forEach(i=>Ci(i,t,n,r));else{const i=O(e.handler)?e.handler.bind(n):t[e.handler];O(i)&&Rn(s,i,e)}}function Ai(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(f=>en(c,f,o,!0)),en(c,t,o)),i.set(t,c),c}function en(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&en(e,i,n,!0),s&&s.forEach(o=>en(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=ac[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const ac={data:cs,props:je,emits:je,methods:je,computed:je,beforeCreate:X,created:X,beforeMount:X,mounted:X,beforeUpdate:X,updated:X,beforeDestroy:X,beforeUnmount:X,destroyed:X,unmounted:X,activated:X,deactivated:X,errorCaptured:X,serverPrefetch:X,components:je,directives:je,watch:lc,provide:cs,inject:cc};function cs(e,t){return t?e?function(){return Z(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function cc(e,t){return je(nr(e),nr(t))}function nr(e){if(x(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function X(e,t){return e?[...new Set([].concat(e,t))]:t}function je(e,t){return e?Z(Z(Object.create(null),e),t):t}function lc(e,t){if(!e)return t;if(!t)return e;const n=Z(Object.create(null),e);for(const r in t)n[r]=X(e[r],t[r]);return n}function uc(e,t,n,r=!1){const s={},i={};Gt(i,bn,1),e.propsDefaults=Object.create(null),xi(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:pa(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function fc(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=B(s),[c]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let _=0;_<h.length;_++){let I=h[_];if(pn(e.emitsOptions,I))continue;const v=t[I];if(c)if(P(i,I))v!==i[I]&&(i[I]=v,f=!0);else{const D=ye(I);s[D]=rr(c,a,D,v,e,!1)}else v!==i[I]&&(i[I]=v,f=!0)}}}else{xi(e,t,s,i)&&(f=!0);let h;for(const _ in a)(!t||!P(t,_)&&((h=ht(_))===_||!P(t,h)))&&(c?n&&(n[_]!==void 0||n[h]!==void 0)&&(s[_]=rr(c,a,_,void 0,e,!0)):delete s[_]);if(i!==a)for(const _ in i)(!t||!P(t,_)&&!0)&&(delete i[_],f=!0)}f&&ve(e,"set","$attrs")}function xi(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Kt(c))continue;const f=t[c];let h;s&&P(s,h=ye(c))?!i||!i.includes(h)?n[h]=f:(a||(a={}))[h]=f:pn(e.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(i){const c=B(n),f=a||L;for(let h=0;h<i.length;h++){const _=i[h];n[_]=rr(s,c,_,f[_],e,!P(f,_))}}return o}function rr(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=P(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&O(c)){const{propsDefaults:f}=s;n in f?r=f[n]:(ft(s),r=f[n]=c.call(null,t),Ke())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ht(n))&&(r=!0))}return r}function Di(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!O(e)){const h=_=>{c=!0;const[I,v]=Di(_,t,!0);Z(o,I),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!i&&!c)return r.set(e,at),at;if(x(i))for(let h=0;h<i.length;h++){const _=ye(i[h]);ls(_)&&(o[_]=L)}else if(i)for(const h in i){const _=ye(h);if(ls(_)){const I=i[h],v=o[_]=x(I)||O(I)?{type:I}:I;if(v){const D=ds(Boolean,v.type),k=ds(String,v.type);v[0]=D>-1,v[1]=k<0||D<k,(D>-1||P(v,"default"))&&a.push(_)}}}const f=[o,a];return r.set(e,f),f}function ls(e){return e[0]!=="$"}function us(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function fs(e,t){return us(e)===us(t)}function ds(e,t){return x(t)?t.findIndex(n=>fs(n,e)):O(t)&&fs(t,e)?0:-1}const Si=e=>e[0]==="_"||e==="$stable",Mr=e=>x(e)?e.map(_e):[_e(e)],dc=(e,t,n)=>{if(t._n)return t;const r=Ra((...s)=>Mr(t(...s)),n);return r._c=!1,r},Oi=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Si(s))continue;const i=e[s];if(O(i))t[s]=dc(s,i,r);else if(i!=null){const o=Mr(i);t[s]=()=>o}}},Mi=(e,t)=>{const n=Mr(t);e.slots.default=()=>n},hc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Gt(t,"_",n)):Oi(t,e.slots={})}else e.slots={},t&&Mi(e,t);Gt(e.slots,bn,1)},pc=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=L;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Z(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Oi(t,s)),o=t}else t&&(Mi(e,t),o={default:1});if(i)for(const a in s)!Si(a)&&!(a in o)&&delete s[a]};function Pi(){return{app:null,config:{isNativeTag:Ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gc=0;function mc(e,t){return function(r,s=null){O(r)||(r=Object.assign({},r)),s!=null&&!z(s)&&(s=null);const i=Pi(),o=new Set;let a=!1;const c=i.app={_uid:gc++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Lc,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&O(f.install)?(o.add(f),f.install(c,...h)):O(f)&&(o.add(f),f(c,...h))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,h){return h?(i.components[f]=h,c):i.components[f]},directive(f,h){return h?(i.directives[f]=h,c):i.directives[f]},mount(f,h,_){if(!a){const I=ie(r,s);return I.appContext=i,h&&t?t(I,f):e(I,f,_),a=!0,c._container=f,f.__vue_app__=c,_n(I.component)||I.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,h){return i.provides[f]=h,c}};return c}}function sr(e,t,n,r,s=!1){if(x(e)){e.forEach((I,v)=>sr(I,t&&(x(t)?t[v]:t),n,r,s));return}if(Yt(r)&&!s)return;const i=r.shapeFlag&4?_n(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,f=t&&t.r,h=a.refs===L?a.refs={}:a.refs,_=a.setupState;if(f!=null&&f!==c&&(q(f)?(h[f]=null,P(_,f)&&(_[f]=null)):Y(f)&&(f.value=null)),O(c))Oe(c,a,12,[o,h]);else{const I=q(c),v=Y(c);if(I||v){const D=()=>{if(e.f){const k=I?h[c]:c.value;s?x(k)&&_r(k,i):x(k)?k.includes(i)||k.push(i):I?(h[c]=[i],P(_,c)&&(_[c]=h[c])):(c.value=[i],e.k&&(h[e.k]=c.value))}else I?(h[c]=o,P(_,c)&&(_[c]=o)):v&&(c.value=o,e.k&&(h[e.k]=o))};o?(D.id=-1,ee(D,n)):D()}}}const ee=ka;function bc(e){return _c(e)}function _c(e,t){const n=jo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:f,setElementText:h,parentNode:_,nextSibling:I,setScopeId:v=he,cloneNode:D,insertStaticContent:k}=e,M=(l,u,d,g=null,p=null,y=null,E=!1,b=null,w=!!u.dynamicChildren)=>{if(l===u)return;l&&!wt(l,u)&&(g=jt(l),Ce(l,p,y,!0),l=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:m,ref:C,shapeFlag:T}=u;switch(m){case Pr:R(l,u,d,g);break;case Rt:V(l,u,d,g);break;case Bn:l==null&&J(u,d,g,E);break;case le:kt(l,u,d,g,p,y,E,b,w);break;default:T&1?vn(l,u,d,g,p,y,E,b,w):T&6?Ur(l,u,d,g,p,y,E,b,w):(T&64||T&128)&&m.process(l,u,d,g,p,y,E,b,w,tt)}C!=null&&p&&sr(C,l&&l.ref,y,u||l,!u)},R=(l,u,d,g)=>{if(l==null)r(u.el=a(u.children),d,g);else{const p=u.el=l.el;u.children!==l.children&&f(p,u.children)}},V=(l,u,d,g)=>{l==null?r(u.el=c(u.children||""),d,g):u.el=l.el},J=(l,u,d,g)=>{[l.el,l.anchor]=k(l.children,u,d,g,l.el,l.anchor)},G=({el:l,anchor:u},d,g)=>{let p;for(;l&&l!==u;)p=I(l),r(l,d,g),l=p;r(u,d,g)},Ze=({el:l,anchor:u})=>{let d;for(;l&&l!==u;)d=I(l),s(l),l=d;s(u)},vn=(l,u,d,g,p,y,E,b,w)=>{E=E||u.type==="svg",l==null?Tn(u,d,g,p,y,E,b,w):mt(l,u,p,y,E,b,w)},Tn=(l,u,d,g,p,y,E,b)=>{let w,m;const{type:C,props:T,shapeFlag:A,transition:S,patchFlag:$,dirs:F}=l;if(l.el&&D!==void 0&&$===-1)w=l.el=D(l.el);else{if(w=l.el=o(l.type,y,T&&T.is,T),A&8?h(w,l.children):A&16&&Ne(l.children,w,null,g,p,y&&C!=="foreignObject",E,b),F&&Le(l,null,g,"created"),T){for(const H in T)H!=="value"&&!Kt(H)&&i(w,H,null,T[H],y,l.children,g,p,Ie);"value"in T&&i(w,"value",null,T.value),(m=T.onVnodeBeforeMount)&&me(m,g,l)}Lt(w,l,l.scopeId,E,g)}F&&Le(l,null,g,"beforeMount");const N=(!p||p&&!p.pendingBranch)&&S&&!S.persisted;N&&S.beforeEnter(w),r(w,u,d),((m=T&&T.onVnodeMounted)||N||F)&&ee(()=>{m&&me(m,g,l),N&&S.enter(w),F&&Le(l,null,g,"mounted")},p)},Lt=(l,u,d,g,p)=>{if(d&&v(l,d),g)for(let y=0;y<g.length;y++)v(l,g[y]);if(p){let y=p.subTree;if(u===y){const E=p.vnode;Lt(l,E,E.scopeId,E.slotScopeIds,p.parent)}}},Ne=(l,u,d,g,p,y,E,b,w=0)=>{for(let m=w;m<l.length;m++){const C=l[m]=b?De(l[m]):_e(l[m]);M(null,C,u,d,g,p,y,E,b)}},mt=(l,u,d,g,p,y,E)=>{const b=u.el=l.el;let{patchFlag:w,dynamicChildren:m,dirs:C}=u;w|=l.patchFlag&16;const T=l.props||L,A=u.props||L;let S;d&&ke(d,!1),(S=A.onVnodeBeforeUpdate)&&me(S,d,u,l),C&&Le(u,l,d,"beforeUpdate"),d&&ke(d,!0);const $=p&&u.type!=="foreignObject";if(m?Qe(l.dynamicChildren,m,b,d,g,$,y):E||we(l,u,b,null,d,g,$,y,!1),w>0){if(w&16)bt(b,u,T,A,d,g,p);else if(w&2&&T.class!==A.class&&i(b,"class",null,A.class,p),w&4&&i(b,"style",T.style,A.style,p),w&8){const F=u.dynamicProps;for(let N=0;N<F.length;N++){const H=F[N],ce=T[H],nt=A[H];(nt!==ce||H==="value")&&i(b,H,ce,nt,p,l.children,d,g,Ie)}}w&1&&l.children!==u.children&&h(b,u.children)}else!E&&m==null&&bt(b,u,T,A,d,g,p);((S=A.onVnodeUpdated)||C)&&ee(()=>{S&&me(S,d,u,l),C&&Le(u,l,d,"updated")},g)},Qe=(l,u,d,g,p,y,E)=>{for(let b=0;b<u.length;b++){const w=l[b],m=u[b],C=w.el&&(w.type===le||!wt(w,m)||w.shapeFlag&70)?_(w.el):d;M(w,m,C,null,g,p,y,E,!0)}},bt=(l,u,d,g,p,y,E)=>{if(d!==g){for(const b in g){if(Kt(b))continue;const w=g[b],m=d[b];w!==m&&b!=="value"&&i(l,b,m,w,E,u.children,p,y,Ie)}if(d!==L)for(const b in d)!Kt(b)&&!(b in g)&&i(l,b,d[b],null,E,u.children,p,y,Ie);"value"in g&&i(l,"value",d.value,g.value)}},kt=(l,u,d,g,p,y,E,b,w)=>{const m=u.el=l?l.el:a(""),C=u.anchor=l?l.anchor:a("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:S}=u;S&&(b=b?b.concat(S):S),l==null?(r(m,d,g),r(C,d,g),Ne(u.children,d,C,p,y,E,b,w)):T>0&&T&64&&A&&l.dynamicChildren?(Qe(l.dynamicChildren,A,d,p,y,E,b),(u.key!=null||p&&u===p.subTree)&&Ri(l,u,!0)):we(l,u,d,C,p,y,E,b,w)},Ur=(l,u,d,g,p,y,E,b,w)=>{u.slotScopeIds=b,l==null?u.shapeFlag&512?p.ctx.activate(u,d,g,E,w):Cn(u,d,g,p,y,E,w):Q(l,u,w)},Cn=(l,u,d,g,p,y,E)=>{const b=l.component=Oc(l,g,p);if(Or(l)&&(b.ctx.renderer=tt),Mc(b),b.asyncDep){if(p&&p.registerDep(b,W),!l.el){const w=b.subTree=ie(Rt);V(null,w,u,d)}return}W(b,l,u,d,p,y,E)},Q=(l,u,d)=>{const g=u.component=l.component;if(Fa(l,u,d))if(g.asyncDep&&!g.asyncResolved){j(g,u,d);return}else g.next=u,xa(g.update),g.update();else u.el=l.el,g.vnode=u},W=(l,u,d,g,p,y,E)=>{const b=()=>{if(l.isMounted){let{next:C,bu:T,u:A,parent:S,vnode:$}=l,F=C,N;ke(l,!1),C?(C.el=$.el,j(l,C,E)):C=$,T&&qt(T),(N=C.props&&C.props.onVnodeBeforeUpdate)&&me(N,S,C,$),ke(l,!0);const H=Mn(l),ce=l.subTree;l.subTree=H,M(ce,H,_(ce.el),jt(ce),l,p,y),C.el=H.el,F===null&&Na(l,H.el),A&&ee(A,p),(N=C.props&&C.props.onVnodeUpdated)&&ee(()=>me(N,S,C,$),p)}else{let C;const{el:T,props:A}=u,{bm:S,m:$,parent:F}=l,N=Yt(u);if(ke(l,!1),S&&qt(S),!N&&(C=A&&A.onVnodeBeforeMount)&&me(C,F,u),ke(l,!0),T&&Dn){const H=()=>{l.subTree=Mn(l),Dn(T,l.subTree,l,p,null)};N?u.type.__asyncLoader().then(()=>!l.isUnmounted&&H()):H()}else{const H=l.subTree=Mn(l);M(null,H,d,g,l,p,y),u.el=H.el}if($&&ee($,p),!N&&(C=A&&A.onVnodeMounted)){const H=u;ee(()=>me(C,F,H),p)}(u.shapeFlag&256||F&&Yt(F.vnode)&&F.vnode.shapeFlag&256)&&l.a&&ee(l.a,p),l.isMounted=!0,u=d=g=null}},w=l.effect=new Ir(b,()=>Dr(m),l.scope),m=l.update=()=>w.run();m.id=l.uid,ke(l,!0),m()},j=(l,u,d)=>{u.component=l;const g=l.vnode.props;l.vnode=u,l.next=null,fc(l,u.props,g,d),pc(l,u.children,d),pt(),hn(void 0,l.update),gt()},we=(l,u,d,g,p,y,E,b,w=!1)=>{const m=l&&l.children,C=l?l.shapeFlag:0,T=u.children,{patchFlag:A,shapeFlag:S}=u;if(A>0){if(A&128){_t(m,T,d,g,p,y,E,b,w);return}else if(A&256){An(m,T,d,g,p,y,E,b,w);return}}S&8?(C&16&&Ie(m,p,y),T!==m&&h(d,T)):C&16?S&16?_t(m,T,d,g,p,y,E,b,w):Ie(m,p,y,!0):(C&8&&h(d,""),S&16&&Ne(T,d,g,p,y,E,b,w))},An=(l,u,d,g,p,y,E,b,w)=>{l=l||at,u=u||at;const m=l.length,C=u.length,T=Math.min(m,C);let A;for(A=0;A<T;A++){const S=u[A]=w?De(u[A]):_e(u[A]);M(l[A],S,d,null,p,y,E,b,w)}m>C?Ie(l,p,y,!0,!1,T):Ne(u,d,g,p,y,E,b,w,T)},_t=(l,u,d,g,p,y,E,b,w)=>{let m=0;const C=u.length;let T=l.length-1,A=C-1;for(;m<=T&&m<=A;){const S=l[m],$=u[m]=w?De(u[m]):_e(u[m]);if(wt(S,$))M(S,$,d,null,p,y,E,b,w);else break;m++}for(;m<=T&&m<=A;){const S=l[T],$=u[A]=w?De(u[A]):_e(u[A]);if(wt(S,$))M(S,$,d,null,p,y,E,b,w);else break;T--,A--}if(m>T){if(m<=A){const S=A+1,$=S<C?u[S].el:g;for(;m<=A;)M(null,u[m]=w?De(u[m]):_e(u[m]),d,$,p,y,E,b,w),m++}}else if(m>A)for(;m<=T;)Ce(l[m],p,y,!0),m++;else{const S=m,$=m,F=new Map;for(m=$;m<=A;m++){const re=u[m]=w?De(u[m]):_e(u[m]);re.key!=null&&F.set(re.key,m)}let N,H=0;const ce=A-$+1;let nt=!1,zr=0;const yt=new Array(ce);for(m=0;m<ce;m++)yt[m]=0;for(m=S;m<=T;m++){const re=l[m];if(H>=ce){Ce(re,p,y,!0);continue}let ge;if(re.key!=null)ge=F.get(re.key);else for(N=$;N<=A;N++)if(yt[N-$]===0&&wt(re,u[N])){ge=N;break}ge===void 0?Ce(re,p,y,!0):(yt[ge-$]=m+1,ge>=zr?zr=ge:nt=!0,M(re,u[ge],d,null,p,y,E,b,w),H++)}const Kr=nt?yc(yt):at;for(N=Kr.length-1,m=ce-1;m>=0;m--){const re=$+m,ge=u[re],qr=re+1<C?u[re+1].el:g;yt[m]===0?M(null,ge,d,qr,p,y,E,b,w):nt&&(N<0||m!==Kr[N]?et(ge,d,qr,2):N--)}}},et=(l,u,d,g,p=null)=>{const{el:y,type:E,transition:b,children:w,shapeFlag:m}=l;if(m&6){et(l.component.subTree,u,d,g);return}if(m&128){l.suspense.move(u,d,g);return}if(m&64){E.move(l,u,d,tt);return}if(E===le){r(y,u,d);for(let T=0;T<w.length;T++)et(w[T],u,d,g);r(l.anchor,u,d);return}if(E===Bn){G(l,u,d);return}if(g!==2&&m&1&&b)if(g===0)b.beforeEnter(y),r(y,u,d),ee(()=>b.enter(y),p);else{const{leave:T,delayLeave:A,afterLeave:S}=b,$=()=>r(y,u,d),F=()=>{T(y,()=>{$(),S&&S()})};A?A(y,$,F):F()}else r(y,u,d)},Ce=(l,u,d,g=!1,p=!1)=>{const{type:y,props:E,ref:b,children:w,dynamicChildren:m,shapeFlag:C,patchFlag:T,dirs:A}=l;if(b!=null&&sr(b,null,d,l,!0),C&256){u.ctx.deactivate(l);return}const S=C&1&&A,$=!Yt(l);let F;if($&&(F=E&&E.onVnodeBeforeUnmount)&&me(F,u,l),C&6)Co(l.component,d,g);else{if(C&128){l.suspense.unmount(d,g);return}S&&Le(l,null,u,"beforeUnmount"),C&64?l.type.remove(l,u,d,p,tt,g):m&&(y!==le||T>0&&T&64)?Ie(m,u,d,!1,!0):(y===le&&T&384||!p&&C&16)&&Ie(w,u,d),g&&Vr(l)}($&&(F=E&&E.onVnodeUnmounted)||S)&&ee(()=>{F&&me(F,u,l),S&&Le(l,null,u,"unmounted")},d)},Vr=l=>{const{type:u,el:d,anchor:g,transition:p}=l;if(u===le){To(d,g);return}if(u===Bn){Ze(l);return}const y=()=>{s(d),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:E,delayLeave:b}=p,w=()=>E(d,y);b?b(l.el,y,w):w()}else y()},To=(l,u)=>{let d;for(;l!==u;)d=I(l),s(l),l=d;s(u)},Co=(l,u,d)=>{const{bum:g,scope:p,update:y,subTree:E,um:b}=l;g&&qt(g),p.stop(),y&&(y.active=!1,Ce(E,l,u,d)),b&&ee(b,u),ee(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ie=(l,u,d,g=!1,p=!1,y=0)=>{for(let E=y;E<l.length;E++)Ce(l[E],u,d,g,p)},jt=l=>l.shapeFlag&6?jt(l.component.subTree):l.shapeFlag&128?l.suspense.next():I(l.anchor||l.el),Wr=(l,u,d)=>{l==null?u._vnode&&Ce(u._vnode,null,null,!0):M(u._vnode||null,l,u,null,null,null,d),bi(),u._vnode=l},tt={p:M,um:Ce,m:et,r:Vr,mt:Cn,mc:Ne,pc:we,pbc:Qe,n:jt,o:e};let xn,Dn;return t&&([xn,Dn]=t(tt)),{render:Wr,hydrate:xn,createApp:mc(Wr,xn)}}function ke({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ri(e,t,n=!1){const r=e.children,s=t.children;if(x(r)&&x(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=De(s[i]),a.el=o.el),n||Ri(o,a))}}function yc(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<f?i=a+1:o=a;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const wc=e=>e.__isTeleport,le=Symbol(void 0),Pr=Symbol(void 0),Rt=Symbol(void 0),Bn=Symbol(void 0),Ct=[];let de=null;function it(e=!1){Ct.push(de=e?null:[])}function Ic(){Ct.pop(),de=Ct[Ct.length-1]||null}let $t=1;function hs(e){$t+=e}function Ec(e){return e.dynamicChildren=$t>0?de||at:null,Ic(),$t>0&&de&&de.push(e),e}function ot(e,t,n,r,s,i){return Ec(te(e,t,n,r,s,i,!0))}function vc(e){return e?e.__v_isVNode===!0:!1}function wt(e,t){return e.type===t.type&&e.key===t.key}const bn="__vInternal",$i=({key:e})=>e!=null?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>e!=null?q(e)||Y(e)||O(e)?{i:fe,r:e,k:t,f:!!n}:e:null;function te(e,t=null,n=null,r=0,s=null,i=e===le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$i(t),ref:t&&Jt(t),scopeId:gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Rr(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=q(n)?8:16),$t>0&&!o&&de&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&de.push(c),c}const ie=Tc;function Tc(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===nc)&&(e=Rt),vc(e)){const a=ut(e,t,!0);return n&&Rr(a,n),$t>0&&!i&&de&&(a.shapeFlag&6?de[de.indexOf(e)]=a:de.push(a)),a.patchFlag|=-2,a}if(Fc(e)&&(e=e.__vccOpts),t){t=Cc(t);let{class:a,style:c}=t;a&&!q(a)&&(t.class=xt(a)),z(c)&&(li(c)&&!x(c)&&(c=Z({},c)),t.style=mr(c))}const o=q(e)?1:La(e)?128:wc(e)?64:z(e)?4:O(e)?2:0;return te(e,t,n,r,s,o,i,!0)}function Cc(e){return e?li(e)||bn in e?Z({},e):e:null}function ut(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?xc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&$i(a),ref:t&&t.ref?n&&s?x(s)?s.concat(Jt(t)):[s,Jt(t)]:Jt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ut(e.ssContent),ssFallback:e.ssFallback&&ut(e.ssFallback),el:e.el,anchor:e.anchor}}function Ac(e=" ",t=0){return ie(Pr,null,e,t)}function _e(e){return e==null||typeof e=="boolean"?ie(Rt):x(e)?ie(le,null,e.slice()):typeof e=="object"?De(e):ie(Pr,null,String(e))}function De(e){return e.el===null||e.memo?e:ut(e)}function Rr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Rr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(bn in t)?t._ctx=fe:s===3&&fe&&(fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:fe},n=32):(t=String(t),r&64?(n=16,t=[Ac(t)]):n=8);e.children=t,e.shapeFlag|=n}function xc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=xt([t.class,r.class]));else if(s==="style")t.style=mr([t.style,r.style]);else if(an(s)){const i=t[s],o=r[s];o&&i!==o&&!(x(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function me(e,t,n,r=null){pe(e,t,7,[n,r])}const Dc=Pi();let Sc=0;function Oc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Dc,i={uid:Sc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ho(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Di(r,s),emitsOptions:yi(r,s),emit:null,emitted:null,propsDefaults:L,inheritAttrs:r.inheritAttrs,ctx:L,data:L,props:L,attrs:L,slots:L,refs:L,setupState:L,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Oa.bind(null,i),e.ce&&e.ce(i),i}let K=null;const ft=e=>{K=e,e.scope.on()},Ke=()=>{K&&K.scope.off(),K=null};function Bi(e){return e.vnode.shapeFlag&4}let dt=!1;function Mc(e,t=!1){dt=t;const{props:n,children:r}=e.vnode,s=Bi(e);uc(e,n,s,t),hc(e,r);const i=s?Pc(e,t):void 0;return dt=!1,i}function Pc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ui(new Proxy(e.ctx,sc));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?$c(e):null;ft(e),pt();const i=Oe(r,e,0,[e.props,s]);if(gt(),Ke(),Js(i)){if(i.then(Ke,Ke),t)return i.then(o=>{ps(e,o,t)}).catch(o=>{Nt(o,e,0)});e.asyncDep=i}else ps(e,i,t)}else Fi(e,t)}function ps(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:z(t)&&(e.setupState=hi(t)),Fi(e,n)}let gs;function Fi(e,t,n){const r=e.type;if(!e.render){if(!t&&gs&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,f=Z(Z({isCustomElement:i,delimiters:a},o),c);r.render=gs(s,f)}}e.render=r.render||he}ft(e),pt(),ic(e),gt(),Ke()}function Rc(e){return new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}})}function $c(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Rc(e))},slots:e.slots,emit:e.emit,expose:t}}function _n(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(hi(ui(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)}}))}function Bc(e,t=!0){return O(e)?e.displayName||e.name:e.name||t&&e.__name}function Fc(e){return O(e)&&"__vccOpts"in e}const Nc=(e,t)=>va(e,t,dt),Lc="3.2.37",kc="http://www.w3.org/2000/svg",Ue=typeof document<"u"?document:null,ms=Ue&&Ue.createElement("template"),jc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Ue.createElementNS(kc,e):Ue.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ue.createTextNode(e),createComment:e=>Ue.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ue.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ms.innerHTML=r?`<svg>${e}</svg>`:e;const a=ms.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Hc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Uc(e,t,n){const r=e.style,s=q(n);if(n&&!s){for(const i in n)ir(r,i,n[i]);if(t&&!q(t))for(const i in t)n[i]==null&&ir(r,i,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const bs=/\s*!important$/;function ir(e,t,n){if(x(n))n.forEach(r=>ir(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Vc(e,t);bs.test(n)?e.setProperty(ht(r),n.replace(bs,""),"important"):e[r]=n}}const _s=["Webkit","Moz","ms"],Fn={};function Vc(e,t){const n=Fn[t];if(n)return n;let r=ye(t);if(r!=="filter"&&r in e)return Fn[t]=r;r=un(r);for(let s=0;s<_s.length;s++){const i=_s[s]+r;if(i in e)return Fn[t]=i}return t}const ys="http://www.w3.org/1999/xlink";function Wc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ys,t.slice(6,t.length)):e.setAttributeNS(ys,t,n);else{const i=xo(t);n==null||i&&!Ks(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function zc(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ks(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[Ni,Kc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let or=0;const qc=Promise.resolve(),Yc=()=>{or=0},Jc=()=>or||(qc.then(Yc),or=Ni());function Li(e,t,n,r){e.addEventListener(t,n,r)}function Gc(e,t,n,r){e.removeEventListener(t,n,r)}function Xc(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Zc(t);if(r){const f=i[t]=Qc(r,s);Li(e,a,f,c)}else o&&(Gc(e,a,o,c),i[t]=void 0)}}const ws=/(?:Once|Passive|Capture)$/;function Zc(e){let t;if(ws.test(e)){t={};let n;for(;n=e.match(ws);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[ht(e.slice(2)),t]}function Qc(e,t){const n=r=>{const s=r.timeStamp||Ni();(Kc||s>=n.attached-1)&&pe(el(r,n.value),t,5,[r])};return n.value=e,n.attached=Jc(),n}function el(e,t){if(x(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Is=/^on[a-z]/,tl=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?Hc(e,r,s):t==="style"?Uc(e,n,r):an(t)?br(t)||Xc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nl(e,t,r,s))?zc(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Wc(e,t,r,s))};function nl(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Is.test(t)&&O(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Is.test(t)&&q(n)?!1:t in e}const Es=e=>{const t=e.props["onUpdate:modelValue"]||!1;return x(t)?n=>qt(t,n):t},Fd={deep:!0,created(e,t,n){e._assign=Es(n),Li(e,"change",()=>{const r=e._modelValue,s=rl(e),i=e.checked,o=e._assign;if(x(r)){const a=qs(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const f=[...r];f.splice(a,1),o(f)}}else if(cn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(ki(e,i))})},mounted:vs,beforeUpdate(e,t,n){e._assign=Es(n),vs(e,t,n)}};function vs(e,{value:t,oldValue:n},r){e._modelValue=t,x(t)?e.checked=qs(t,r.props.value)>-1:cn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=on(t,ki(e,!0)))}function rl(e){return"_value"in e?e._value:e.value}function ki(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const sl=Z({patchProp:tl},jc);let Ts;function il(){return Ts||(Ts=bc(sl))}const ol=(...e)=>{const t=il().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=al(r);if(!s)return;const i=t._component;!O(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function al(e){return q(e)?document.querySelector(e):e}const cl="modulepreload",ll=function(e){return"/"+e},Cs={},ul=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=ll(s),s in Cs)return;Cs[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":cl,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,f)=>{a.addEventListener("load",c),a.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},fl=Ua(()=>ul(()=>import("./ToggleDarkMode.c030cf4c.js"),["assets/ToggleDarkMode.c030cf4c.js","assets/ToggleDarkMode.19b71d98.css"])),dl=[{id:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/luptiwahyu",hover:"hover:text-blue-600",visible:!0},{id:"gitlab",name:"GitLab",url:"https://gitlab.com/luptiwahyu",hover:"hover:text-orange-600",visible:!0},{id:"github",name:"GitHub",url:"https://github.com/luptiwahyu",hover:"hover:text-black",visible:!0},{id:"medium",name:"Medium",url:"https://medium.com/@luptiwahyu",hover:"hover:text-black",visible:!1},{id:"instagram",name:"Instagram",url:"https://instagram.com/luptiwahyu",hover:"hover:text-red-600",visible:!0}],hl=[{id:1,name:"Download Resume",url:"https://drive.google.com/file/d/1M83-G2iSuDM1xklobeTYyczb73hYWOpk/view?usp=sharing",visible:!0},{id:2,name:"Presentations",url:"https://slides.com/luptiwahyu",visible:!0},{id:3,name:"Angular Toastr",url:"https://github.com/luptiwahyu/angular-toastr",visible:!1},{id:4,name:"Semantic UI Icon",url:"https://github.com/luptiwahyu/sui-icon",visible:!1},{id:2,name:"Color Detection",url:"https://github.com/luptiwahyu/ColorDetection",visible:!1},{id:3,name:"Swift Tetris",url:"https://github.com/luptiwahyu/SwiftTetris",visible:!1}],pl=Sr({components:{ToggleDarkMode:fl},setup(){const e=dn({socialMedia:dl.filter(t=>t.visible),tags:hl.filter(t=>t.visible)});return{...ya(e)}}});const gl=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},$r=e=>(Ma("data-v-0bcf7139"),e=e(),Pa(),e),ml={id:"card",class:"w-[350px] m-auto p-5 rounded-lg shadow-lg bg-white dark:bg-gray-100"},bl={id:"header",class:"flex"},_l=$r(()=>te("div",{id:"avatar",class:"basis-1/2"},[te("div",{class:"avatar bg-blue-300 dark:bg-gray-400 duration-700"},"\u{1F468}\u{1F3FB}\u200D\u{1F4BB}")],-1)),yl={id:"dark-mode",class:"basis-1/2"},wl=$r(()=>te("div",{id:"name",class:"mt-3.5"},[te("div",{class:"text-lg font-bold"},"Lupti Wahyu"),te("div",{class:"text-gray-400 leading-none"},"he/him")],-1)),Il=$r(()=>te("div",{id:"description",class:"mt-3.5"},[te("div",null," Hey \u{1F44B} I'm a Frontend Developer with more than 8 years of experience. ")],-1)),El={id:"social-media",class:"mt-3.5"},vl=["href","title"],Tl={id:"tags",class:"mt-3.5 max-h-52 overflow-auto"},Cl=["href"];function Al(e,t,n,r,s,i){const o=tc("ToggleDarkMode");return it(),ot("div",ml,[te("div",bl,[_l,te("div",yl,[ie(o)])]),wl,Il,te("div",El,[(it(!0),ot(le,null,os(e.socialMedia,(a,c)=>(it(),ot("a",{key:a.id,target:"_blank",class:xt(["mr-2 no-underline leading-none text-xl text-gray-400",a.hover]),href:a.url,title:a.name},[te("i",{class:xt(["icon",a.id])},null,2)],10,vl))),128))]),te("div",Tl,[(it(!0),ot(le,null,os(e.tags,a=>(it(),ot("a",{key:a.id,href:a.url,target:"_blank",class:"text-xs no-underline py-[2px] px-[6px] border border-slate-600 text-slate-600 mb-2 inline-block mr-2.5 cursor-pointer"},Po(a.name),9,Cl))),128))])])}const xl=gl(pl,[["render",Al],["__scopeId","data-v-0bcf7139"]]),Dl={id:"container",class:"flex h-screen font-mono bg-[#CAD2C5] dark:bg-[#2F3E46] duration-700"},Sl=Sr({__name:"App",setup(e){return(t,n)=>(it(),ot("div",Dl,[ie(xl)]))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ol=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,f=c?e[s+2]:0,h=i>>2,_=(i&3)<<4|a>>4;let I=(a&15)<<2|f>>6,v=f&63;c||(v=64,o||(I=64)),r.push(n[h],n[_],n[I],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ji(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ol(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const _=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||f==null||_==null)throw new Ml;const I=i<<2|a>>4;if(r.push(I),f!==64){const v=a<<4&240|f>>2;if(r.push(v),_!==64){const D=f<<6&192|_;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ml extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pl=function(e){const t=ji(e);return Hi.encodeByteArray(t,!0)},Ui=function(e){return Pl(e).replace(/\./g,"")},Rl=function(e){try{return Hi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=()=>$l().__FIREBASE_DEFAULTS__,Fl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Nl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rl(e[1]);return t&&JSON.parse(t)},Ll=()=>{try{return Bl()||Fl()||Nl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vi=()=>{var e;return(e=Ll())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function jl(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Wi(){try{return typeof indexedDB=="object"}catch{return!1}}function zi(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Hl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="FirebaseError";class Xe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ul,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Vl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Xe(s,a,r)}}function Vl(e,t){return e.replace(Wl,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Wl=/\{\$([^}]+)}/g;function tn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(As(i)&&As(o)){if(!tn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function As(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=1e3,Kl=2,ql=4*60*60*1e3,Yl=.5;function xs(e,t=zl,n=Kl){const r=t*Math.pow(n,e),s=Math.round(Yl*r*(Math.random()-.5)*2);return Math.min(ql,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e){return e&&e._delegate?e._delegate:e}class Fe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new kl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xl(t))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=He){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=He){return this.instances.has(t)}getOptions(t=He){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=He){return this.component?this.component.multipleInstances?t:He:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gl(e){return e===He?void 0:e}function Xl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Jl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const Ql={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},eu=U.INFO,tu={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},nu=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=tu[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qi{constructor(t){this.name=t,this._logLevel=eu,this._logHandler=nu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ql[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const ru=(e,t)=>t.some(n=>e instanceof n);let Ds,Ss;function su(){return Ds||(Ds=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iu(){return Ss||(Ss=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yi=new WeakMap,ar=new WeakMap,Ji=new WeakMap,Nn=new WeakMap,Br=new WeakMap;function ou(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Me(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Yi.set(n,e)}).catch(()=>{}),Br.set(t,e),t}function au(e){if(ar.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ar.set(e,t)}let cr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ar.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ji.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cu(e){cr=e(cr)}function lu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ln(this),t,...n);return Ji.set(r,t.sort?t.sort():[t]),Me(r)}:iu().includes(e)?function(...t){return e.apply(Ln(this),t),Me(Yi.get(this))}:function(...t){return Me(e.apply(Ln(this),t))}}function uu(e){return typeof e=="function"?lu(e):(e instanceof IDBTransaction&&au(e),ru(e,su())?new Proxy(e,cr):e)}function Me(e){if(e instanceof IDBRequest)return ou(e);if(Nn.has(e))return Nn.get(e);const t=uu(e);return t!==e&&(Nn.set(e,t),Br.set(t,e)),t}const Ln=e=>Br.get(e);function fu(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Me(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const du=["get","getKey","getAll","getAllKeys","count"],hu=["put","add","delete","clear"],kn=new Map;function Os(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(kn.get(t))return kn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=hu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||du.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return kn.set(t,i),i}cu(e=>({...e,get:(t,n,r)=>Os(t,n)||e.get(t,n,r),has:(t,n)=>!!Os(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const lr="@firebase/app",Ms="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new qi("@firebase/app"),mu="@firebase/app-compat",bu="@firebase/analytics-compat",_u="@firebase/analytics",yu="@firebase/app-check-compat",wu="@firebase/app-check",Iu="@firebase/auth",Eu="@firebase/auth-compat",vu="@firebase/database",Tu="@firebase/database-compat",Cu="@firebase/functions",Au="@firebase/functions-compat",xu="@firebase/installations",Du="@firebase/installations-compat",Su="@firebase/messaging",Ou="@firebase/messaging-compat",Mu="@firebase/performance",Pu="@firebase/performance-compat",Ru="@firebase/remote-config",$u="@firebase/remote-config-compat",Bu="@firebase/storage",Fu="@firebase/storage-compat",Nu="@firebase/firestore",Lu="@firebase/firestore-compat",ku="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]",ju={[lr]:"fire-core",[mu]:"fire-core-compat",[_u]:"fire-analytics",[bu]:"fire-analytics-compat",[wu]:"fire-app-check",[yu]:"fire-app-check-compat",[Iu]:"fire-auth",[Eu]:"fire-auth-compat",[vu]:"fire-rtdb",[Tu]:"fire-rtdb-compat",[Cu]:"fire-fn",[Au]:"fire-fn-compat",[xu]:"fire-iid",[Du]:"fire-iid-compat",[Su]:"fire-fcm",[Ou]:"fire-fcm-compat",[Mu]:"fire-perf",[Pu]:"fire-perf-compat",[Ru]:"fire-rc",[$u]:"fire-rc-compat",[Bu]:"fire-gcs",[Fu]:"fire-gcs-compat",[Nu]:"fire-fst",[Lu]:"fire-fst-compat","fire-js":"fire-js",[ku]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map,fr=new Map;function Hu(e,t){try{e.container.addComponent(t)}catch(n){qe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ye(e){const t=e.name;if(fr.has(t))return qe.debug(`There were multiple attempts to register component ${t}.`),!1;fr.set(t,e);for(const n of nn.values())Hu(n,e);return!0}function wn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pe=new yn("app","Firebase",Uu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}function Gi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ur,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pe.create("bad-app-name",{appName:String(s)});if(n||(n=Vi()),!n)throw Pe.create("no-options");const i=nn.get(s);if(i){if(tn(n,i.options)&&tn(r,i.config))return i;throw Pe.create("duplicate-app",{appName:s})}const o=new Zl(s);for(const c of fr.values())o.addComponent(c);const a=new Vu(n,r,o);return nn.set(s,a),a}function Wu(e=ur){const t=nn.get(e);if(!t&&e===ur&&Vi())return Gi();if(!t)throw Pe.create("no-app",{appName:e});return t}function Re(e,t,n){var r;let s=(r=ju[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qe.warn(a.join(" "));return}Ye(new Fe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="firebase-heartbeat-database",Ku=1,Bt="firebase-heartbeat-store";let jn=null;function Xi(){return jn||(jn=fu(zu,Ku,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bt)}}}).catch(e=>{throw Pe.create("idb-open",{originalErrorMessage:e.message})})),jn}async function qu(e){try{return await(await Xi()).transaction(Bt).objectStore(Bt).get(Zi(e))}catch(t){if(t instanceof Xe)qe.warn(t.message);else{const n=Pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qe.warn(n.message)}}}async function Ps(e,t){try{const r=(await Xi()).transaction(Bt,"readwrite");await r.objectStore(Bt).put(t,Zi(e)),await r.done}catch(n){if(n instanceof Xe)qe.warn(n.message);else{const r=Pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qe.warn(r.message)}}}function Zi(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=1024,Ju=30*24*60*60*1e3;class Gu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ju}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rs(),{heartbeatsToSend:n,unsentEntries:r}=Xu(this._heartbeatsCache.heartbeats),s=Ui(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Rs(){return new Date().toISOString().substring(0,10)}function Xu(e,t=Yu){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$s(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$s(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wi()?zi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $s(e){return Ui(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e){Ye(new Fe("platform-logger",t=>new pu(t),"PRIVATE")),Ye(new Fe("heartbeat",t=>new Gu(t),"PRIVATE")),Re(lr,Ms,e),Re(lr,Ms,"esm2017"),Re("fire-js","")}Qu("");var ef="firebase",tf="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(ef,tf,"app");const nf=(e,t)=>t.some(n=>e instanceof n);let Bs,Fs;function rf(){return Bs||(Bs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sf(){return Fs||(Fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qi=new WeakMap,dr=new WeakMap,eo=new WeakMap,Hn=new WeakMap,Fr=new WeakMap;function of(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n($e(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Qi.set(n,e)}).catch(()=>{}),Fr.set(t,e),t}function af(e){if(dr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});dr.set(e,t)}let hr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return dr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||eo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cf(e){hr=e(hr)}function lf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Un(this),t,...n);return eo.set(r,t.sort?t.sort():[t]),$e(r)}:sf().includes(e)?function(...t){return e.apply(Un(this),t),$e(Qi.get(this))}:function(...t){return $e(e.apply(Un(this),t))}}function uf(e){return typeof e=="function"?lf(e):(e instanceof IDBTransaction&&af(e),nf(e,rf())?new Proxy(e,hr):e)}function $e(e){if(e instanceof IDBRequest)return of(e);if(Hn.has(e))return Hn.get(e);const t=uf(e);return t!==e&&(Hn.set(e,t),Fr.set(t,e)),t}const Un=e=>Fr.get(e);function ff(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=$e(o);return r&&o.addEventListener("upgradeneeded",c=>{r($e(o.result),c.oldVersion,c.newVersion,$e(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const df=["get","getKey","getAll","getAllKeys","count"],hf=["put","add","delete","clear"],Vn=new Map;function Ns(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vn.get(t))return Vn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=hf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||df.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Vn.set(t,i),i}cf(e=>({...e,get:(t,n,r)=>Ns(t,n)||e.get(t,n,r),has:(t,n)=>!!Ns(t,n)||e.has(t,n)}));const to="@firebase/installations",Nr="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=1e4,ro=`w:${Nr}`,so="FIS_v2",pf="https://firebaseinstallations.googleapis.com/v1",gf=60*60*1e3,mf="installations",bf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Je=new yn(mf,bf,_f);function io(e){return e instanceof Xe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo({projectId:e}){return`${pf}/projects/${e}/installations`}function ao(e){return{token:e.token,requestStatus:2,expiresIn:wf(e.expiresIn),creationTime:Date.now()}}async function co(e,t){const r=(await t.json()).error;return Je.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function lo({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function yf(e,{refreshToken:t}){const n=lo(e);return n.append("Authorization",If(t)),n}async function uo(e){const t=await e();return t.status>=500&&t.status<600?e():t}function wf(e){return Number(e.replace("s","000"))}function If(e){return`${so} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=oo(e),s=lo(e),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const o={fid:n,authVersion:so,appId:e.appId,sdkVersion:ro},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await uo(()=>fetch(r,a));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:ao(f.authToken)}}else throw await co("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=/^[cdef][\w-]{21}$/,pr="";function Cf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Af(e);return Tf.test(n)?n:pr}catch{return pr}}function Af(e){return vf(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;function po(e,t){const n=In(e);go(n,t),xf(n,t)}function go(e,t){const n=ho.get(e);if(!!n)for(const r of n)r(t)}function xf(e,t){const n=Df();n&&n.postMessage({key:e,fid:t}),Sf()}let We=null;function Df(){return!We&&"BroadcastChannel"in self&&(We=new BroadcastChannel("[Firebase] FID Change"),We.onmessage=e=>{go(e.data.key,e.data.fid)}),We}function Sf(){ho.size===0&&We&&(We.close(),We=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="firebase-installations-database",Mf=1,Ge="firebase-installations-store";let Wn=null;function Lr(){return Wn||(Wn=ff(Of,Mf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ge)}}})),Wn}async function rn(e,t){const n=In(e),s=(await Lr()).transaction(Ge,"readwrite"),i=s.objectStore(Ge),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&po(e,t.fid),t}async function mo(e){const t=In(e),r=(await Lr()).transaction(Ge,"readwrite");await r.objectStore(Ge).delete(t),await r.done}async function En(e,t){const n=In(e),s=(await Lr()).transaction(Ge,"readwrite"),i=s.objectStore(Ge),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&po(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e){let t;const n=await En(e.appConfig,r=>{const s=Pf(r),i=Rf(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===pr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Pf(e){const t=e||{fid:Cf(),registrationStatus:0};return bo(t)}function Rf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Je.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=$f(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Bf(e)}:{installationEntry:t}}async function $f(e,t){try{const n=await Ef(e,t);return rn(e.appConfig,n)}catch(n){throw io(n)&&n.customData.serverCode===409?await mo(e.appConfig):await rn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Bf(e){let t=await Ls(e.appConfig);for(;t.registrationStatus===1;)await fo(100),t=await Ls(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kr(e);return r||n}return t}function Ls(e){return En(e,t=>{if(!t)throw Je.create("installation-not-found");return bo(t)})}function bo(e){return Ff(e)?{fid:e.fid,registrationStatus:0}:e}function Ff(e){return e.registrationStatus===1&&e.registrationTime+no<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nf({appConfig:e,heartbeatServiceProvider:t},n){const r=Lf(e,n),s=yf(e,n),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const o={installation:{sdkVersion:ro,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await uo(()=>fetch(r,a));if(c.ok){const f=await c.json();return ao(f)}else throw await co("Generate Auth Token",c)}function Lf(e,{fid:t}){return`${oo(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(e,t=!1){let n;const r=await En(e.appConfig,i=>{if(!_o(i))throw Je.create("not-registered");const o=i.authToken;if(!t&&Hf(o))return i;if(o.requestStatus===1)return n=kf(e,t),i;{if(!navigator.onLine)throw Je.create("app-offline");const a=Vf(i);return n=jf(e,a),a}});return n?await n:r.authToken}async function kf(e,t){let n=await ks(e.appConfig);for(;n.authToken.requestStatus===1;)await fo(100),n=await ks(e.appConfig);const r=n.authToken;return r.requestStatus===0?jr(e,t):r}function ks(e){return En(e,t=>{if(!_o(t))throw Je.create("not-registered");const n=t.authToken;return Wf(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function jf(e,t){try{const n=await Nf(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await rn(e.appConfig,r),n}catch(n){if(io(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mo(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await rn(e.appConfig,r)}throw n}}function _o(e){return e!==void 0&&e.registrationStatus===2}function Hf(e){return e.requestStatus===2&&!Uf(e)}function Uf(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+gf}function Vf(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Wf(e){return e.requestStatus===1&&e.requestTime+no<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(e){const t=e,{installationEntry:n,registrationPromise:r}=await kr(t);return r?r.catch(console.error):jr(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(e,t=!1){const n=e;return await qf(n),(await jr(n,t)).token}async function qf(e){const{registrationPromise:t}=await kr(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(e){if(!e||!e.options)throw zn("App Configuration");if(!e.name)throw zn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw zn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function zn(e){return Je.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="installations",Jf="installations-internal",Gf=e=>{const t=e.getProvider("app").getImmediate(),n=Yf(t),r=wn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Xf=e=>{const t=e.getProvider("app").getImmediate(),n=wn(t,yo).getImmediate();return{getId:()=>zf(n),getToken:s=>Kf(n,s)}};function Zf(){Ye(new Fe(yo,Gf,"PUBLIC")),Ye(new Fe(Jf,Xf,"PRIVATE"))}Zf();Re(to,Nr);Re(to,Nr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="analytics",Qf="firebase_id",ed="origin",td=60*1e3,nd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hr="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new qi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},oe=new yn("analytics","Analytics",rd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e){if(!e.startsWith(Hr)){const t=oe.create("invalid-gtag-resource",{gtagURL:e});return ne.warn(t.message),""}return e}function wo(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function id(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function od(e,t){const n=id("firebase-js-sdk-policy",{createScriptURL:sd}),r=document.createElement("script"),s=`${Hr}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function ad(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function cd(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await wo(n)).find(f=>f.measurementId===s);c&&await t[c.appId]}}catch(a){ne.error(a)}e("config",s,i)}async function ld(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await wo(n);for(const c of o){const f=a.find(_=>_.measurementId===c),h=f&&t[f.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ne.error(i)}}function ud(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await ld(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await cd(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,f]=o;e("get",a,c,f)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ne.error(a)}}return s}function fd(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ud(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function dd(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Hr)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=30,pd=1e3;class gd{constructor(t={},n=pd){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Io=new gd;function md(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function bd(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:md(r)},i=nd.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw oe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function _d(e,t=Io,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw oe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw oe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Id;return setTimeout(async()=>{a.abort()},n!==void 0?n:td),Eo({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Eo(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Io){var i;const{appId:o,measurementId:a}=e;try{await yd(r,t)}catch(c){if(a)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await bd(e);return s.deleteThrottleMetadata(o),c}catch(c){const f=c;if(!wd(f)){if(s.deleteThrottleMetadata(o),a)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:a};throw c}const h=Number((i=f==null?void 0:f.customData)===null||i===void 0?void 0:i.httpStatus)===503?xs(n,s.intervalMillis,hd):xs(n,s.intervalMillis),_={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,_),ne.debug(`Calling attemptFetch again in ${h} millis`),Eo(e,_,r,s)}}function yd(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(oe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function wd(e){if(!(e instanceof Xe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Id{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ed(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(){if(Wi())try{await zi()}catch(e){return ne.warn(oe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ne.warn(oe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Td(e,t,n,r,s,i,o){var a;const c=_d(e);c.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>ne.error(v)),t.push(c);const f=vd().then(v=>{if(v)return r.getId()}),[h,_]=await Promise.all([c,f]);dd(i)||od(i,h.measurementId),s("js",new Date);const I=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return I[ed]="firebase",I.update=!0,_!=null&&(I[Qf]=_),s("config",h.measurementId,I),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t){this.app=t}_delete(){return delete At[this.app.options.appId],Promise.resolve()}}let At={},js=[];const Hs={};let Kn="dataLayer",Ad="gtag",Us,vo,Vs=!1;function xd(){const e=[];if(jl()&&e.push("This is a browser extension environment."),Hl()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=oe.create("invalid-analytics-context",{errorInfo:t});ne.warn(n.message)}}function Dd(e,t,n){xd();const r=e.options.appId;if(!r)throw oe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw oe.create("no-api-key");if(At[r]!=null)throw oe.create("already-exists",{id:r});if(!Vs){ad(Kn);const{wrappedGtag:i,gtagCore:o}=fd(At,js,Hs,Kn,Ad);vo=i,Us=o,Vs=!0}return At[r]=Td(e,js,Hs,t,Us,Kn,n),new Cd(e)}function Sd(e=Wu()){e=Ki(e);const t=wn(e,sn);return t.isInitialized()?t.getImmediate():Od(e)}function Od(e,t={}){const n=wn(e,sn);if(n.isInitialized()){const s=n.getImmediate();if(tn(t,n.getOptions()))return s;throw oe.create("already-initialized")}return n.initialize({options:t})}function Md(e,t,n,r){e=Ki(e),Ed(vo,At[e.app.options.appId],t,n,r).catch(s=>ne.error(s))}const Ws="@firebase/analytics",zs="0.10.0";function Pd(){Ye(new Fe(sn,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Dd(r,s,n)},"PUBLIC")),Ye(new Fe("analytics-internal",e,"PRIVATE")),Re(Ws,zs),Re(Ws,zs,"esm2017");function e(t){try{const n=t.getProvider(sn).getImmediate();return{logEvent:(r,s,i)=>Md(n,r,s,i)}}catch(n){throw oe.create("interop-component-reg-failed",{reason:n})}}}Pd();const Rd={apiKey:"AIzaSyBNvnsgS6M97ntNLTLDHWIDApdbj57tQkE",authDomain:"lupti-wahyu.firebaseapp.com",projectId:"lupti-wahyu",storageBucket:"lupti-wahyu.appspot.com",messagingSenderId:"907578403689",appId:"1:907578403689:web:860846d890538bbfed2bf8",measurementId:"G-5MX63EBYP2"},$d=Gi(Rd);Sd($d);ol(Sl).mount("#app");export{gl as _,it as a,te as b,ot as c,Sr as d,Y as i,xt as n,qa as o,On as r,ba as u,Fd as v,Bd as w};
