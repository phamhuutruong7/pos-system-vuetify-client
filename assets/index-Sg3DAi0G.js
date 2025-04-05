import{al as tt,am as nt,g as $,p as M,L as at,e as J,i as c,h as D,c as A,J as ot,an as he,ao as Ae,M as Rt,F as pe,z as ue,a4 as me,a as it,a2 as lt,a6 as rt,U as G,m as st,r as W,ap as Y,b as Oe,O as I,ad as z,aq as Mt,D as Ve,j as H,N as je,w as Le,ar as ct,Z as Ne,V as ut,as as He,at as Ft,s as te,ae as jt,P as Ht,au as dt,Y as Wt,R as $t,W as Dt,S as zt,t as qt,Q as Gt,av as Ut,a3 as Kt,I as Yt,k as ft,E as Jt,l as vt,o as mt,n as P,v as U,y as ee,H as Qt}from"./index-BIaGJMr-.js";import{p as _e,m as ne,s as Te,k as yt,w as We,V as $e,h as xe,t as gt,R as Xt,a as Zt,n as en,o as tn,b as nn,D as an,E as on,F as ln,c as rn,l as sn,v as cn,g as Ce,L as un,q as dn,r as fn,d as vn,G as mn,H as yn,I as gn,e as hn,f as bn,J as De,K as be,N as ke,O as ze,P as qe,C as kn,B as wn,u as Sn,z as pn,y as xn,Q as Cn,M as En,S as Pn,T as An,j as On}from"./scopeId-Ds4OgZK1.js";class K{constructor(n){let{x:t,y:a,width:o,height:i}=n;this.x=t,this.y=a,this.width=o,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ge(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Vn(e){return Array.isArray(e)?new K({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ln(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,i,r,l,d;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),i=Number(o[0]),r=Number(o[5]),l=Number(o[12]),d=Number(o[13]);else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),i=Number(o[0]),r=Number(o[3]),l=Number(o[4]),d=Number(o[5]);else return new K(n);const f=t.transformOrigin,s=n.x-l-(1-i)*parseFloat(f),k=n.y-d-(1-r)*parseFloat(f.slice(f.indexOf(" ")+1)),x=i?n.width/i:e.offsetWidth+1,p=r?n.height/r:e.offsetHeight+1;return new K({x:s,y:k,width:x,height:p})}else return new K(n)}function Nn(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const fe=new WeakMap;function _n(e,n){Object.keys(n).forEach(t=>{if(tt(t)){const a=nt(t),o=fe.get(e);if(n[t]==null)o==null||o.forEach(i=>{const[r,l]=i;r===a&&(e.removeEventListener(a,l),o.delete(i))});else if(!o||![...o].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=o||new Set;i.add([a,n[t]]),fe.has(e)||fe.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Tn(e,n){Object.keys(n).forEach(t=>{if(tt(t)){const a=nt(t),o=fe.get(e);o==null||o.forEach(i=>{const[r,l]=i;r===a&&(e.removeEventListener(a,l),o.delete(i))})}else e.removeAttribute(t)})}function ht(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const Bn="cubic-bezier(0.4, 0, 0.2, 1)";function In(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Rn(e):Be(e))return e;e=e.parentElement}return document.scrollingElement}function ye(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Be(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Be(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Rn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Mn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Fn=M({fluid:{type:Boolean,default:!1},...D(),...Te(),...ne()},"VContainer"),jn=$()({name:"VContainer",props:Fn(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=at(),{dimensionStyles:o}=_e(e);return J(()=>c(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[o.value,e.style]},t)),{}}}),bt=he.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),kt=he.reduce((e,n)=>{const t="offset"+Ae(n);return e[t]={type:[String,Number],default:null},e},{}),wt=he.reduce((e,n)=>{const t="order"+Ae(n);return e[t]={type:[String,Number],default:null},e},{}),Ue={col:Object.keys(bt),offset:Object.keys(kt),order:Object.keys(wt)};function Hn(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const o=n.replace(e,"");a+=`-${o}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Wn=["auto","start","end","center","baseline","stretch"],$n=M({cols:{type:[Boolean,String,Number],default:!1},...bt,offset:{type:[String,Number],default:null},...kt,order:{type:[String,Number],default:null},...wt,alignSelf:{type:String,default:null,validator:e=>Wn.includes(e)},...D(),...ne()},"VCol"),le=$()({name:"VCol",props:$n(),setup(e,n){let{slots:t}=n;const a=A(()=>{const o=[];let i;for(i in Ue)Ue[i].forEach(l=>{const d=e[l],f=Hn(i,l,d);f&&o.push(f)});const r=o.some(l=>l.startsWith("v-col-"));return o.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return ot(e.tag,{class:[a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),Ie=["start","end","center"],St=["space-between","space-around","space-evenly"];function Re(e,n){return he.reduce((t,a)=>{const o=e+Ae(a);return t[o]=n(),t},{})}const Dn=[...Ie,"baseline","stretch"],pt=e=>Dn.includes(e),xt=Re("align",()=>({type:String,default:null,validator:pt})),zn=[...Ie,...St],Ct=e=>zn.includes(e),Et=Re("justify",()=>({type:String,default:null,validator:Ct})),qn=[...Ie,...St,"stretch"],Pt=e=>qn.includes(e),At=Re("alignContent",()=>({type:String,default:null,validator:Pt})),Ke={align:Object.keys(xt),justify:Object.keys(Et),alignContent:Object.keys(At)},Gn={align:"align",justify:"justify",alignContent:"align-content"};function Un(e,n,t){let a=Gn[e];if(t!=null){if(n){const o=n.replace(e,"");a+=`-${o}`}return a+=`-${t}`,a.toLowerCase()}}const Kn=M({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:pt},...xt,justify:{type:String,default:null,validator:Ct},...Et,alignContent:{type:String,default:null,validator:Pt},...At,...D(),...ne()},"VRow"),Yn=$()({name:"VRow",props:Kn(),setup(e,n){let{slots:t}=n;const a=A(()=>{const o=[];let i;for(i in Ke)Ke[i].forEach(r=>{const l=e[r],d=Un(i,r,l);d&&o.push(d)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return ot(e.tag,{class:["v-row",a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),Jn="/pos-system-vuetify-client/assets/logo-DtuIbWiQ.png",Qn=$()({name:"VCardActions",props:D(),setup(e,n){let{slots:t}=n;return Rt({VBtn:{slim:!0,variant:"text"}}),J(()=>{var a;return c("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Xn=M({opacity:[Number,String],...D(),...ne()},"VCardSubtitle"),Zn=$()({name:"VCardSubtitle",props:Xn(),setup(e,n){let{slots:t}=n;return J(()=>c(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),ea=yt("v-card-title"),ta=M({appendAvatar:String,appendIcon:me,prependAvatar:String,prependIcon:me,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...D(),...gt()},"VCardItem"),na=$()({name:"VCardItem",props:ta(),setup(e,n){let{slots:t}=n;return J(()=>{var f;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),r=!!(i||t.append),l=!!(e.title!=null||t.title),d=!!(e.subtitle!=null||t.subtitle);return c("div",{class:["v-card-item",e.class],style:e.style},[o&&c("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?c(xe,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):c(pe,null,[e.prependAvatar&&c(We,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c($e,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),c("div",{class:"v-card-item__content"},[l&&c(ea,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??ue(e.title)]}}),d&&c(Zn,{key:"subtitle"},{default:()=>{var s;return[((s=t.subtitle)==null?void 0:s.call(t))??ue(e.subtitle)]}}),(f=t.default)==null?void 0:f.call(t)]),r&&c("div",{key:"append",class:"v-card-item__append"},[t.append?c(xe,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):c(pe,null,[e.appendIcon&&c($e,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(We,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),aa=M({opacity:[Number,String],...D(),...ne()},"VCardText"),oa=$()({name:"VCardText",props:aa(),setup(e,n){let{slots:t}=n;return J(()=>c(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),ia=M({appendAvatar:String,appendIcon:me,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:me,ripple:{type:[Boolean,Object],default:!0},subtitle:{type:[String,Number,Boolean],default:void 0},text:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...bn(),...D(),...gt(),...Te(),...hn(),...gn(),...yn(),...mn(),...vn(),...fn(),...ne(),...st(),...dn({variant:"elevated"})},"VCard"),re=$()({name:"VCard",directives:{Ripple:Xt},props:ia(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=it(e),{borderClasses:i}=Zt(e),{colorClasses:r,colorStyles:l,variantClasses:d}=en(e),{densityClasses:f}=tn(e),{dimensionStyles:s}=_e(e),{elevationClasses:k}=nn(e),{loaderClasses:x}=an(e),{locationStyles:p}=on(e),{positionClasses:y}=ln(e),{roundedClasses:v}=rn(e),C=sn(e,t),O=A(()=>e.link!==!1&&C.isLink.value),w=A(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return J(()=>{const S=O.value?"a":e.tag,L=!!(a.title||e.title!=null),_=!!(a.subtitle||e.subtitle!=null),B=L||_,V=!!(a.append||e.appendAvatar||e.appendIcon),u=!!(a.prepend||e.prependAvatar||e.prependIcon),N=!!(a.image||e.image),ae=B||u||V,E=!!(a.text||e.text!=null);return lt(c(S,G({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":w.value},o.value,i.value,r.value,f.value,k.value,x.value,y.value,v.value,d.value,e.class],style:[l.value,s.value,p.value,e.style],onClick:w.value&&C.navigate,tabindex:e.disabled?-1:void 0},C.linkProps),{default:()=>{var h;return[N&&c("div",{key:"image",class:"v-card__image"},[a.image?c(xe,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):c(Ce,{key:"image-img",cover:!0,src:e.image},null)]),c(un,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ae&&c(na,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),E&&c(oa,{key:"text"},{default:()=>{var m;return[((m=a.text)==null?void 0:m.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&c(Qn,null,{default:a.actions}),cn(w.value,"v-card")]}}),[[rt("ripple"),w.value&&e.ripple]])}),{}}}),Ye=yt("v-kbd","kbd");function we(e,n){return{x:e.x+n.x,y:e.y+n.y}}function la(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Je(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return we({x:o,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return we({x:o,y:i},n)}return we({x:n.width/2,y:n.height/2},n)}const Ot={static:ca,connected:da},ra=M({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ot},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function sa(e,n){const t=W({}),a=W();Y&&Oe(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var r,l;I(()=>e.locationStrategy,i),z(()=>{window.removeEventListener("resize",o),a.value=void 0}),window.addEventListener("resize",o,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation:a.value=(l=Ot[e.locationStrategy](n,e,t))==null?void 0:l.updateLocation});function o(i){var r;(r=a.value)==null||r.call(a,i)}return{contentStyles:t,updateLocation:a}}function ca(){}function ua(e,n){const t=Ln(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function da(e,n,t){(Array.isArray(e.target.value)||Mn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:i}=Mt(()=>{const y=De(n.location,e.isRtl.value),v=n.origin==="overlap"?y:n.origin==="auto"?be(y):De(n.origin,e.isRtl.value);return y.side===v.side&&y.align===ke(v).align?{preferredAnchor:ze(y),preferredOrigin:ze(v)}:{preferredAnchor:y,preferredOrigin:v}}),[r,l,d,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>A(()=>{const v=parseFloat(n[y]);return isNaN(v)?1/0:v})),s=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const y=n.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let k=!1;const x=new ResizeObserver(()=>{k&&p()});I([e.target,e.contentEl],(y,v)=>{let[C,O]=y,[w,S]=v;w&&!Array.isArray(w)&&x.unobserve(w),C&&!Array.isArray(C)&&x.observe(C),S&&x.unobserve(S),O&&x.observe(O)},{immediate:!0}),z(()=>{x.disconnect()});function p(){if(k=!1,requestAnimationFrame(()=>k=!0),!e.target.value||!e.contentEl.value)return;const y=Vn(e.target.value),v=ua(e.contentEl.value,e.isRtl.value),C=ye(e.contentEl.value),O=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=C.reduce((E,h)=>{const m=h.getBoundingClientRect(),b=new K({x:h===document.documentElement?0:m.x,y:h===document.documentElement?0:m.y,width:h.clientWidth,height:h.clientHeight});return E?new K({x:Math.max(E.left,b.left),y:Math.max(E.top,b.top),width:Math.min(E.right,b.right)-Math.max(E.left,b.left),height:Math.min(E.bottom,b.bottom)-Math.max(E.top,b.top)}):b},void 0);w.x+=O,w.y+=O,w.width-=O*2,w.height-=O*2;let S={anchor:o.value,origin:i.value};function L(E){const h=new K(v),m=Je(E.anchor,y),b=Je(E.origin,h);let{x:F,y:j}=la(m,b);switch(E.anchor.side){case"top":j-=s.value[0];break;case"bottom":j+=s.value[0];break;case"left":F-=s.value[0];break;case"right":F+=s.value[0];break}switch(E.anchor.align){case"top":j-=s.value[1];break;case"bottom":j+=s.value[1];break;case"left":F-=s.value[1];break;case"right":F+=s.value[1];break}return h.x+=F,h.y+=j,h.width=Math.min(h.width,d.value),h.height=Math.min(h.height,f.value),{overflows:Ge(h,w),x:F,y:j}}let _=0,B=0;const V={x:0,y:0},u={x:!1,y:!1};let N=-1;for(;!(N++>10);){const{x:E,y:h,overflows:m}=L(S);_+=E,B+=h,v.x+=E,v.y+=h;{const b=qe(S.anchor),F=m.x.before||m.x.after,j=m.y.before||m.y.after;let Q=!1;if(["x","y"].forEach(T=>{if(T==="x"&&F&&!u.x||T==="y"&&j&&!u.y){const q={anchor:{...S.anchor},origin:{...S.origin}},X=T==="x"?b==="y"?ke:be:b==="y"?be:ke;q.anchor=X(q.anchor),q.origin=X(q.origin);const{overflows:Z}=L(q);(Z[T].before<=m[T].before&&Z[T].after<=m[T].after||Z[T].before+Z[T].after<(m[T].before+m[T].after)/2)&&(S=q,Q=u[T]=!0)}}),Q)continue}m.x.before&&(_+=m.x.before,v.x+=m.x.before),m.x.after&&(_-=m.x.after,v.x-=m.x.after),m.y.before&&(B+=m.y.before,v.y+=m.y.before),m.y.after&&(B-=m.y.after,v.y-=m.y.after);{const b=Ge(v,w);V.x=w.width-b.x.before-b.x.after,V.y=w.height-b.y.before-b.y.after,_+=b.x.before,v.x+=b.x.before,B+=b.y.before,v.y+=b.y.before}break}const ae=qe(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:H(Se(B)),left:e.isRtl.value?void 0:H(Se(_)),right:e.isRtl.value?H(Se(-_)):void 0,minWidth:H(ae==="y"?Math.min(r.value,y.width):r.value),maxWidth:H(Qe(je(V.x,r.value===1/0?0:r.value,d.value))),maxHeight:H(Qe(je(V.y,l.value===1/0?0:l.value,f.value)))}),{available:V,contentBox:v}}return I(()=>[o.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>p()),Ve(()=>{const y=p();if(!y)return;const{available:v,contentBox:C}=y;C.height>v.y&&requestAnimationFrame(()=>{p(),requestAnimationFrame(()=>{p()})})}),{updateLocation:p}}function Se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Qe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ee=!0;const ge=[];function fa(e){!Ee||ge.length?(ge.push(e),Pe()):(Ee=!1,e(),Pe())}let Xe=-1;function Pe(){cancelAnimationFrame(Xe),Xe=requestAnimationFrame(()=>{const e=ge.shift();e&&e(),ge.length?Pe():Ee=!0})}const ve={none:null,close:ya,block:ga,reposition:ha},va=M({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ve}},"VOverlay-scroll-strategies");function ma(e,n){if(!Y)return;let t;Le(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=ct(),await new Promise(a=>setTimeout(a)),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=ve[e.scrollStrategy])==null||a.call(ve,n,e,t)}))}),z(()=>{t==null||t.stop()})}function ya(e){function n(t){e.isActive.value=!1}Vt(e.targetEl.value??e.contentEl.value,n)}function ga(e,n){var r;const t=(r=e.root.value)==null?void 0:r.offsetParent,a=[...new Set([...ye(e.targetEl.value,n.contained?t:void 0),...ye(e.contentEl.value,n.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,i=(l=>Be(l)&&l)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,d)=>{l.style.setProperty("--v-body-scroll-x",H(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",H(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",H(o)),l.classList.add("v-overlay-scroll-blocked")}),z(()=>{a.forEach((l,d)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(l.style.getPropertyValue("--v-body-scroll-y")),k=l.style.scrollBehavior;l.style.scrollBehavior="auto",l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-s,l.style.scrollBehavior=k}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function ha(e,n,t){let a=!1,o=-1,i=-1;function r(l){fa(()=>{var s,k;const d=performance.now();(k=(s=e.updateLocation).value)==null||k.call(s,l),a=(performance.now()-d)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{Vt(e.targetEl.value??e.contentEl.value,l=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{r(l)})})):r(l)})})}),z(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(o)})}function Vt(e,n){const t=[document,...ye(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),z(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const ba=Symbol.for("vuetify:v-menu"),ka=M({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...wn()},"VOverlay-activator");function wa(e,n){let{isActive:t,isTop:a,contentEl:o}=n;const i=Ne("useActivator"),r=W();let l=!1,d=!1,f=!0;const s=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),k=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:x,runCloseDelay:p}=kn(e,u=>{u===(e.openOnHover&&l||s.value&&d)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==u&&(f=!0),t.value=u)}),y=W(),v={onClick:u=>{u.stopPropagation(),r.value=u.currentTarget||u.target,t.value||(y.value=[u.clientX,u.clientY]),t.value=!t.value},onMouseenter:u=>{var N;(N=u.sourceCapabilities)!=null&&N.firesTouchEvents||(l=!0,r.value=u.currentTarget||u.target,x())},onMouseleave:u=>{l=!1,p()},onFocus:u=>{Ft(u.target,":focus-visible")!==!1&&(d=!0,u.stopPropagation(),r.value=u.currentTarget||u.target,x())},onBlur:u=>{d=!1,u.stopPropagation(),p()}},C=A(()=>{const u={};return k.value&&(u.onClick=v.onClick),e.openOnHover&&(u.onMouseenter=v.onMouseenter,u.onMouseleave=v.onMouseleave),s.value&&(u.onFocus=v.onFocus,u.onBlur=v.onBlur),u}),O=A(()=>{const u={};if(e.openOnHover&&(u.onMouseenter=()=>{l=!0,x()},u.onMouseleave=()=>{l=!1,p()}),s.value&&(u.onFocusin=()=>{d=!0,x()},u.onFocusout=()=>{d=!1,p()}),e.closeOnContentClick){const N=ut(ba,null);u.onClick=()=>{t.value=!1,N==null||N.closeParents()}}return u}),w=A(()=>{const u={};return e.openOnHover&&(u.onMouseenter=()=>{f&&(l=!0,f=!1,x())},u.onMouseleave=()=>{l=!1,p()}),u});I(a,u=>{var N;u&&(e.openOnHover&&!l&&(!s.value||!d)||s.value&&!d&&(!e.openOnHover||!l))&&!((N=o.value)!=null&&N.contains(document.activeElement))&&(t.value=!1)}),I(t,u=>{u||setTimeout(()=>{y.value=void 0})},{flush:"post"});const S=He();Le(()=>{S.value&&Ve(()=>{r.value=S.el})});const L=He(),_=A(()=>e.target==="cursor"&&y.value?y.value:L.value?L.el:Lt(e.target,i)||r.value),B=A(()=>Array.isArray(_.value)?void 0:_.value);let V;return I(()=>!!e.activator,u=>{u&&Y?(V=ct(),V.run(()=>{Sa(e,i,{activatorEl:r,activatorEvents:C})})):V&&V.stop()},{flush:"post",immediate:!0}),z(()=>{V==null||V.stop()}),{activatorEl:r,activatorRef:S,target:_,targetEl:B,targetRef:L,activatorEvents:C,contentEvents:O,scrimEvents:w}}function Sa(e,n,t){let{activatorEl:a,activatorEvents:o}=t;I(()=>e.activator,(d,f)=>{if(f&&d!==f){const s=l(f);s&&r(s)}d&&Ve(()=>i())},{immediate:!0}),I(()=>e.activatorProps,()=>{i()}),z(()=>{r()});function i(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&_n(d,G(o.value,f))}function r(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&Tn(d,G(o.value,f))}function l(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=Lt(d,n);return a.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,a.value}}function Lt(e,n){var a,o;if(!e)return;let t;if(e==="parent"){let i=(o=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:o.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function pa(){if(!Y)return te(!1);const{ssr:e}=jt();if(e){const n=te(!1);return Ht(()=>{n.value=!0}),n}else return te(!0)}const xa=M({eager:Boolean},"lazy");function Ca(e,n){const t=te(!1),a=A(()=>t.value||e.eager||n.value);I(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}const Ze=Symbol.for("vuetify:stack"),se=dt([]);function Ea(e,n,t){const a=Ne("useStack"),o=!t,i=ut(Ze,void 0),r=dt({activeChildren:new Set});Dt(Ze,r);const l=te(Number(n.value));Oe(e,()=>{var k;const s=(k=se.at(-1))==null?void 0:k[1];l.value=s?s+10:Number(n.value),o&&se.push([a.uid,l.value]),i==null||i.activeChildren.add(a.uid),z(()=>{if(o){const x=Wt(se).findIndex(p=>p[0]===a.uid);se.splice(x,1)}i==null||i.activeChildren.delete(a.uid)})});const d=te(!0);o&&Le(()=>{var k;const s=((k=se.at(-1))==null?void 0:k[0])===a.uid;setTimeout(()=>d.value=s)});const f=A(()=>!r.activeChildren.size);return{globalTop:$t(d),localTop:f,stackStyles:A(()=>({zIndex:l.value}))}}function Pa(e){return{teleportTarget:A(()=>{const t=e();if(t===!0||!Y)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=[...a.children].find(i=>i.matches(".v-overlay-container"));return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Aa(){return!0}function Nt(e,n,t){if(!e||_t(e,t)===!1)return!1;const a=ht(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(i=>i==null?void 0:i.contains(e.target))}function _t(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Aa)(e)}function Oa(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Nt(e,n,t)&&setTimeout(()=>{_t(e,t)&&a&&a(e)},0)}function et(e,n){const t=ht(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Va={mounted(e,n){const t=o=>Oa(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=Nt(o,e,n)};et(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},beforeUnmount(e,n){e._clickOutside&&(et(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function La(e){const{modelValue:n,color:t,...a}=e;return c(Yt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&c("div",G({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Na=M({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...ka(),...D(),...Te(),...xa(),...ra(),...va(),...st(),...Pn()},"VOverlay"),ce=$()({name:"VOverlay",directives:{ClickOutside:Va},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Na()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,keydown:e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const i=Ne("VOverlay"),r=W(),l=W(),d=W(),f=zt(e,"modelValue"),s=A({get:()=>f.value,set:g=>{g&&e.disabled||(f.value=g)}}),{themeClasses:k}=it(e),{rtlClasses:x,isRtl:p}=at(),{hasContent:y,onAfterLeave:v}=Ca(e,s),C=Sn(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:O,localTop:w,stackStyles:S}=Ea(s,qt(e,"zIndex"),e._disableGlobalStack),{activatorEl:L,activatorRef:_,target:B,targetEl:V,targetRef:u,activatorEvents:N,contentEvents:ae,scrimEvents:E}=wa(e,{isActive:s,isTop:w,contentEl:d}),{teleportTarget:h}=Pa(()=>{var oe,ie,Fe;const g=e.attach||e.contained;if(g)return g;const R=((oe=L==null?void 0:L.value)==null?void 0:oe.getRootNode())||((Fe=(ie=i.proxy)==null?void 0:ie.$el)==null?void 0:Fe.getRootNode());return R instanceof ShadowRoot?R:!1}),{dimensionStyles:m}=_e(e),b=pa(),{scopeId:F}=pn();I(()=>e.disabled,g=>{g&&(s.value=!1)});const{contentStyles:j,updateLocation:Q}=sa(e,{isRtl:p,contentEl:d,target:B,isActive:s});ma(e,{root:r,contentEl:d,targetEl:V,isActive:s,updateLocation:Q});function T(g){o("click:outside",g),e.persistent?de():s.value=!1}function q(g){return s.value&&O.value&&(!e.scrim||g.target===l.value||g instanceof MouseEvent&&g.shadowTarget===l.value)}Y&&I(s,g=>{g?window.addEventListener("keydown",X):window.removeEventListener("keydown",X)},{immediate:!0}),Gt(()=>{Y&&window.removeEventListener("keydown",X)});function X(g){var R,oe,ie;g.key==="Escape"&&O.value&&((R=d.value)!=null&&R.contains(document.activeElement)||o("keydown",g),e.persistent?de():(s.value=!1,(oe=d.value)!=null&&oe.contains(document.activeElement)&&((ie=L.value)==null||ie.focus())))}function Z(g){g.key==="Escape"&&!O.value||o("keydown",g)}const Tt=xn();Oe(()=>e.closeOnBack,()=>{Cn(Tt,g=>{O.value&&s.value?(g(!1),e.persistent?de():s.value=!1):g()})});const Me=W();I(()=>s.value&&(e.absolute||e.contained)&&h.value==null,g=>{if(g){const R=In(r.value);R&&R!==document.scrollingElement&&(Me.value=R.scrollTop)}});function de(){e.noClickAnimation||d.value&&Nn(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Bn})}function Bt(){o("afterEnter")}function It(){v(),o("afterLeave")}return J(()=>{var g;return c(pe,null,[(g=t.activator)==null?void 0:g.call(t,{isActive:s.value,targetRef:u,props:G({ref:_},N.value,e.activatorProps)}),b.value&&y.value&&c(Ut,{disabled:!h.value,to:h.value},{default:()=>[c("div",G({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},k.value,x.value,e.class],style:[S.value,{"--v-overlay-opacity":e.opacity,top:H(Me.value)},e.style],ref:r,onKeydown:Z},F,a),[c(La,G({color:C,modelValue:s.value&&!!e.scrim,ref:l},E.value),null),c(En,{appear:!0,persisted:!0,transition:e.transition,target:B.value,onAfterEnter:Bt,onAfterLeave:It},{default:()=>{var R;return[lt(c("div",G({ref:d,class:["v-overlay__content",e.contentClass],style:[m.value,j.value]},ae.value,e.contentProps),[(R=t.default)==null?void 0:R.call(t,{isActive:s})]),[[Kt,s.value],[rt("click-outside"),{handler:T,closeConditional:q,include:()=>[L.value]}]])]}})])]})])}),{activatorEl:L,scrimEl:l,target:B,animateClick:de,contentEl:d,globalTop:O,localTop:w,updateLocation:Q}}}),_a={class:"text-center"},Ta={class:"text-subtitle-1"},Ba=ft({__name:"HelloWorld",setup(e){const{locale:n}=Jt(),t=W(n.value==="en");I(t,i=>{n.value=i?"en":"fr"});const a=n.value,o=()=>{t.value=!t.value};return(i,r)=>(mt(),vt(jn,{class:"fill-height"},{default:P(()=>[c(An,{class:"align-centerfill-height mx-auto","max-width":"900"},{default:P(()=>[c(Ce,{class:"mb-4",height:"150",src:Jn}),U("div",_a,[r[0]||(r[0]=U("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1)),r[1]||(r[1]=U("h1",{class:"text-h2 font-weight-bold"},"Vuetify",-1)),U("h3",null,ue(i.$t("helloworld.maintext")),1),c(On,{class:"mt-4",color:"primary",onClick:o},{default:P(()=>[ee(ue(Qt(a)==="en"?"Switch to French":"Switch to English"),1)]),_:1})]),r[8]||(r[8]=U("div",{class:"py-4"},null,-1)),c(Yn,null,{default:P(()=>[c(le,{cols:"12"},{default:P(()=>[c(re,{class:"py-4",color:"surface-variant",image:"https://cdn.vuetifyjs.com/docs/images/one/create/feature.png","prepend-icon":"mdi-rocket-launch-outline",rounded:"lg",variant:"outlined"},{image:P(()=>[c(Ce,{position:"top right"})]),title:P(()=>r[2]||(r[2]=[U("h2",{class:"text-h5 font-weight-bold"},"Get started",-1)])),subtitle:P(()=>[U("div",Ta,[r[5]||(r[5]=ee(" Replace this page by removing ")),c(Ye,null,{default:P(()=>r[3]||(r[3]=[ee(ue("<HelloWorld />"))])),_:1}),r[6]||(r[6]=ee(" in ")),c(Ye,null,{default:P(()=>r[4]||(r[4]=[ee("pages/index.vue")])),_:1}),r[7]||(r[7]=ee(". "))])]),default:P(()=>[c(ce,{opacity:".12",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),c(le,{cols:"6"},{default:P(()=>[c(re,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/","prepend-icon":"mdi-text-box-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Learn about all things Vuetify in our documentation.",target:"_blank",title:"Documentation",variant:"text"},{default:P(()=>[c(ce,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),c(le,{cols:"6"},{default:P(()=>[c(re,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","prepend-icon":"mdi-star-circle-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Explore available framework Features.",target:"_blank",title:"Features",variant:"text"},{default:P(()=>[c(ce,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),c(le,{cols:"6"},{default:P(()=>[c(re,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/components/all","prepend-icon":"mdi-widgets-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Discover components in the API Explorer.",target:"_blank",title:"Components",variant:"text"},{default:P(()=>[c(ce,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),c(le,{cols:"6"},{default:P(()=>[c(re,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://discord.vuetifyjs.com","prepend-icon":"mdi-account-group-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Connect with Vuetify developers.",target:"_blank",title:"Community",variant:"text"},{default:P(()=>[c(ce,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ma=ft({__name:"index",setup(e){return(n,t)=>{const a=Ba;return mt(),vt(a)}}});export{Ma as default};
