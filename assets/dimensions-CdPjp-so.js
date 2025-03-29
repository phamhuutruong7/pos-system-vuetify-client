import{p as u,Z as v,c as r,am as c,ac as S,an as x,ao as z,ap as N,aq as P,E as $,j as o,g as B,r as I,ar as H,as as V,t as W,e as w,m as T,h as R,$ as D,at as E,au as F,i as j}from"./index-dD_1TUt8.js";const K=u({border:[Boolean,Number,String]},"border");function L(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{borderClasses:r(()=>{const t=c(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))a.push(`border-${l}`);return a})}}function k(e){return S(()=>{const s=[],n={};if(e.value.background)if(x(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&z(e.value.background)){const t=N(e.value.background);if(t.a==null||t.a===1){const a=P(t);n.color=a,n.caretColor=a}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(x(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function q(e,s){const n=r(()=>({text:c(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=k(n);return{textColorClasses:t,textColorStyles:a}}function M(e,s){const n=r(()=>({background:c(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=k(n);return{backgroundColorClasses:t,backgroundColorStyles:a}}const Q=u({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function X(e){return{elevationClasses:r(()=>{const n=c(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Y=u({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function _(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{roundedClasses:r(()=>{const t=c(e)?e.value:e.rounded,a=c(e)?e.value:e.tile,l=[];if(t===!0||t==="")l.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))l.push(`rounded-${i}`);else(a||t===!1)&&l.push("rounded-0");return l})}}const O=u({tag:{type:String,default:"div"}},"tag"),U=["x-small","small","default","large","x-large"],Z=u({size:{type:[String,Number],default:"default"}},"size");function A(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return S(()=>{let n,t;return $(U,e.size)?n=`${s}--size-${e.size}`:e.size&&(t={width:o(e.size),height:o(e.size)}),{sizeClasses:n,sizeStyles:t}})}const G=u({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:D,...R(),...Z(),...O({tag:"i"}),...T()},"VIcon"),p=B()({name:"VIcon",props:G(),setup(e,s){let{attrs:n,slots:t}=s;const a=I(),{themeClasses:l}=H(),{iconData:i}=V(r(()=>a.value||e.icon)),{sizeClasses:d}=A(e),{textColorClasses:g,textColorStyles:y}=q(W(e,"color"));return w(()=>{var C,b;const f=(C=t.default)==null?void 0:C.call(t);f&&(a.value=(b=E(f).filter(h=>h.type===F&&h.children&&typeof h.children=="string")[0])==null?void 0:b.children);const m=!!(n.onClick||n.onClickOnce);return j(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,d.value,g.value,{"v-icon--clickable":m,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:o(e.size),height:o(e.size),width:o(e.size)},y.value,e.style],role:m?"button":void 0,"aria-hidden":!m,tabindex:m?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}}),ee=u({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function te(e){return{dimensionStyles:r(()=>{const n={},t=o(e.height),a=o(e.maxHeight),l=o(e.maxWidth),i=o(e.minHeight),d=o(e.minWidth),g=o(e.width);return t!=null&&(n.height=t),a!=null&&(n.maxHeight=a),l!=null&&(n.maxWidth=l),i!=null&&(n.minHeight=i),d!=null&&(n.minWidth=d),g!=null&&(n.width=g),n})}}export{p as V,L as a,X as b,_ as c,Y as d,Q as e,K as f,te as g,ee as h,k as i,A as j,Z as k,q as l,O as m,M as u};
