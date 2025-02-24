import{a0 as Le,a1 as De,y as fe,n as T,t as B,T as re,p as W,r as I,S as q,G as de,E as F,a2 as V,a3 as Ue,c as C,M as ee,k as D,D as he,H as ve,a4 as Be,i as me,U as Ye,g as ye,a5 as Ge,s as z,J as Xe,o as Je,a as Ve,b as Re,a6 as Ze,V as Qe,x as et,F as Ne,z as tt,A as nt,B as ot,a7 as at,Z as it,a8 as rt,$ as st,L as lt,a9 as ct,d as ut,aa as ft,ab as we,ac as Ee}from"./index.803d499b.js";import{a as G,d as dt,s as se,b as vt,n as Ie,B as te,g as be,f as mt}from"./forwardRefs.7b10ae4c.js";import{H as xe,I as ne,J as oe,K as pe,L as Se,m as yt,v as gt,M as ht,e as wt,B as Et,j as bt,u as He,N as xt,O as pt,i as St}from"./VImg.43d0d8d8.js";import{m as Ot,u as Pt}from"./lazy.fd33ecf6.js";const X=new WeakMap;function kt(e,n){Object.keys(n).forEach(t=>{if(Le(t)){const o=De(t),a=X.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[s,i]=r;s===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),X.has(e)||X.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ct(e,n){Object.keys(n).forEach(t=>{if(Le(t)){const o=De(t),a=X.get(e);a==null||a.forEach(r=>{const[s,i]=r;s===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(t)})}function $e(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function At(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Tt(e):ge(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ge(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Tt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Mt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Ft=W({target:Object},"v-dialog-transition"),Lt=fe()({name:"VDialogTransition",props:Ft(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,r){var y;await new Promise(E=>requestAnimationFrame(E)),await new Promise(E=>requestAnimationFrame(E)),a.style.visibility="";const{x:s,y:i,sx:c,sy:d,speed:f}=Pe(e.target,a),m=G(a,[{transform:`translate(${s}px, ${i}px) scale(${c}, ${d})`,opacity:0},{}],{duration:225*f,easing:dt});(y=Oe(a))==null||y.forEach(E=>{G(E,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:se})}),m.finished.then(()=>r())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,r){var y;await new Promise(E=>requestAnimationFrame(E));const{x:s,y:i,sx:c,sy:d,speed:f}=Pe(e.target,a);G(a,[{},{transform:`translate(${s}px, ${i}px) scale(${c}, ${d})`,opacity:0}],{duration:125*f,easing:vt}).finished.then(()=>r()),(y=Oe(a))==null||y.forEach(E=>{G(E,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:se})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?T(re,B({name:"dialog-transition"},o,{css:!1}),t):T(re,{name:"dialog-transition"},t)}});function Oe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Pe(e,n){const t=e.getBoundingClientRect(),o=Ie(n),[a,r]=getComputedStyle(n).transformOrigin.split(" ").map(h=>parseFloat(h)),[s,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;s==="left"||i==="left"?c-=t.width/2:(s==="right"||i==="right")&&(c+=t.width/2);let d=t.top+t.height/2;s==="top"||i==="top"?d-=t.height/2:(s==="bottom"||i==="bottom")&&(d+=t.height/2);const f=t.width/o.width,m=t.height/o.height,y=Math.max(1,f,m),E=f/y||0,g=m/y||0,u=o.width*o.height/(window.innerWidth*window.innerHeight),w=u>.12?Math.min(1.5,(u-.12)*10+1):1;return{x:c-(a+o.left),y:d-(r+o.top),sx:E,sy:g,speed:w}}function ae(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Dt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function ke(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return ae({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ae({x:a,y:r},n)}return ae({x:n.width/2,y:n.height/2},n)}const _e={static:Rt,connected:It},Bt=W({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in _e},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Vt(e,n){const t=I({}),o=I();q&&(de(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var s,i;F(()=>e.locationStrategy,r),V(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(i=_e[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation}),window.addEventListener("resize",a,{passive:!0}),V(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(r){var s;(s=o.value)==null||s.call(o,r)}return{contentStyles:t,updateLocation:o}}function Rt(){}function Nt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ie(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function It(e,n,t){Mt(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Ue(()=>{const g=xe(n.location,e.isRtl.value),u=n.origin==="overlap"?g:n.origin==="auto"?ne(g):xe(n.origin,e.isRtl.value);return g.side===u.side&&g.align===oe(u).align?{preferredAnchor:pe(g),preferredOrigin:pe(u)}:{preferredAnchor:g,preferredOrigin:u}}),[s,i,c,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>C(()=>{const u=parseFloat(n[g]);return isNaN(u)?1/0:u})),f=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let m=!1;const y=new ResizeObserver(()=>{m&&E()});F([e.activatorEl,e.contentEl],(g,u)=>{let[w,h]=g,[v,l]=u;v&&y.unobserve(v),w&&y.observe(w),l&&y.unobserve(l),h&&y.observe(h)},{immediate:!0}),V(()=>{y.disconnect()});function E(){if(m=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>m=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const g=e.activatorEl.value.getBoundingClientRect(),u=Nt(e.contentEl.value,e.isRtl.value),w=Z(e.contentEl.value),h=12;w.length||(w.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(u.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),u.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const v=w.reduce((O,S)=>{const b=S.getBoundingClientRect(),p=new te({x:S===document.documentElement?0:b.x,y:S===document.documentElement?0:b.y,width:S.clientWidth,height:S.clientHeight});return O?new te({x:Math.max(O.left,p.left),y:Math.max(O.top,p.top),width:Math.min(O.right,p.right)-Math.max(O.left,p.left),height:Math.min(O.bottom,p.bottom)-Math.max(O.top,p.top)}):p},void 0);v.x+=h,v.y+=h,v.width-=h*2,v.height-=h*2;let l={anchor:a.value,origin:r.value};function k(O){const S=new te(u),b=ke(O.anchor,g),p=ke(O.origin,S);let{x:M,y:L}=Dt(b,p);switch(O.anchor.side){case"top":L-=f.value[0];break;case"bottom":L+=f.value[0];break;case"left":M-=f.value[0];break;case"right":M+=f.value[0];break}switch(O.anchor.align){case"top":L-=f.value[1];break;case"bottom":L+=f.value[1];break;case"left":M-=f.value[1];break;case"right":M+=f.value[1];break}return S.x+=M,S.y+=L,S.width=Math.min(S.width,c.value),S.height=Math.min(S.height,d.value),{overflows:be(S,v),x:M,y:L}}let R=0,H=0;const $={x:0,y:0},K={x:!1,y:!1};let U=-1;for(;!(U++>10);){const{x:O,y:S,overflows:b}=k(l);R+=O,H+=S,u.x+=O,u.y+=S;{const p=Se(l.anchor),M=b.x.before||b.x.after,L=b.y.before||b.y.after;let j=!1;if(["x","y"].forEach(P=>{if(P==="x"&&M&&!K.x||P==="y"&&L&&!K.y){const x={anchor:{...l.anchor},origin:{...l.origin}},A=P==="x"?p==="y"?oe:ne:p==="y"?ne:oe;x.anchor=A(x.anchor),x.origin=A(x.origin);const{overflows:_}=k(x);(_[P].before<=b[P].before&&_[P].after<=b[P].after||_[P].before+_[P].after<(b[P].before+b[P].after)/2)&&(l=x,j=K[P]=!0)}}),j)continue}b.x.before&&(R+=b.x.before,u.x+=b.x.before),b.x.after&&(R-=b.x.after,u.x-=b.x.after),b.y.before&&(H+=b.y.before,u.y+=b.y.before),b.y.after&&(H-=b.y.after,u.y-=b.y.after);{const p=be(u,v);$.x=v.width-p.x.before-p.x.after,$.y=v.height-p.y.before-p.y.after,R+=p.x.before,u.x+=p.x.before,H+=p.y.before,u.y+=p.y.before}break}const N=Se(l.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${l.anchor.side} ${l.anchor.align}`,transformOrigin:`${l.origin.side} ${l.origin.align}`,top:D(ie(H)),left:e.isRtl.value?void 0:D(ie(R)),right:e.isRtl.value?D(ie(-R)):void 0,minWidth:D(N==="y"?Math.min(s.value,g.width):s.value),maxWidth:D(Ce(he($.x,s.value===1/0?0:s.value,c.value))),maxHeight:D(Ce(he($.y,i.value===1/0?0:i.value,d.value)))}),{available:$,contentBox:u}}return F(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>E()),ee(()=>{const g=E();if(!g)return;const{available:u,contentBox:w}=g;w.height>u.y&&requestAnimationFrame(()=>{E(),requestAnimationFrame(()=>{E()})})}),{updateLocation:E}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ce(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const Q=[];function Ht(e){!le||Q.length?(Q.push(e),ce()):(le=!1,e(),ce())}let Ae=-1;function ce(){cancelAnimationFrame(Ae),Ae=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?ce():le=!0})}const J={none:null,close:Wt,block:qt,reposition:jt},$t=W({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function _t(e,n){if(!q)return;let t;ve(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Be(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),V(()=>{t==null||t.stop()})}function Wt(e){var t;function n(o){e.isActive.value=!1}We((t=e.activatorEl.value)!=null?t:e.contentEl.value,n)}function qt(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Z(e.activatorEl.value,n.contained?t:void 0),...Z(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>ge(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,c)=>{i.style.setProperty("--v-body-scroll-x",D(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",D(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",D(a)),i.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((i,c)=>{const d=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-d,i.scrollTop=-f}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function jt(e,n,t){let o=!1,a=-1,r=-1;function s(i){Ht(()=>{var f,m;const c=performance.now();(m=(f=e.updateLocation).value)==null||m.call(f,i),o=(performance.now()-c)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{var i;We((i=e.activatorEl.value)!=null?i:e.contentEl.value,c=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(c)})})):s(c)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function We(e,n){const t=[document,...Z(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const ue=Symbol.for("vuetify:v-menu"),zt=W({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Kt(e,n){const t={},o=a=>()=>{if(!q)return Promise.resolve(!0);const r=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(s=>{var c;const i=parseInt((c=e[a])!=null?c:0,10);t[a]=window.setTimeout(()=>{n==null||n(r),s(r)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Ut=W({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...zt()},"VOverlay-activator");function Yt(e,n){let{isActive:t,isTop:o}=n;const a=I();let r=!1,s=!1,i=!0;const c=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:f,runCloseDelay:m}=Kt(e,l=>{l===(e.openOnHover&&r||c.value&&s)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(i=!0),t.value=l)}),y={onClick:l=>{l.stopPropagation(),a.value=l.currentTarget||l.target,t.value=!t.value},onMouseenter:l=>{var k;(k=l.sourceCapabilities)!=null&&k.firesTouchEvents||(r=!0,a.value=l.currentTarget||l.target,f())},onMouseleave:l=>{r=!1,m()},onFocus:l=>{Ge(l.target,":focus-visible")!==!1&&(s=!0,l.stopPropagation(),a.value=l.currentTarget||l.target,f())},onBlur:l=>{s=!1,l.stopPropagation(),m()}},E=C(()=>{const l={};return d.value&&(l.onClick=y.onClick),e.openOnHover&&(l.onMouseenter=y.onMouseenter,l.onMouseleave=y.onMouseleave),c.value&&(l.onFocus=y.onFocus,l.onBlur=y.onBlur),l}),g=C(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{r=!0,f()},l.onMouseleave=()=>{r=!1,m()}),c.value&&(l.onFocusin=()=>{s=!0,f()},l.onFocusout=()=>{s=!1,m()}),e.closeOnContentClick){const k=me(ue,null);l.onClick=()=>{t.value=!1,k==null||k.closeParents()}}return l}),u=C(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{i&&(r=!0,i=!1,f())},l.onMouseleave=()=>{r=!1,m()}),l});F(o,l=>{l&&(e.openOnHover&&!r&&(!c.value||!s)||c.value&&!s&&(!e.openOnHover||!r))&&(t.value=!1)});const w=I();ve(()=>{!w.value||ee(()=>{a.value=Ye(w.value)})});const h=ye("useActivator");let v;return F(()=>!!e.activator,l=>{l&&q?(v=Be(),v.run(()=>{Gt(e,h,{activatorEl:a,activatorEvents:E})})):v&&v.stop()},{flush:"post",immediate:!0}),V(()=>{v==null||v.stop()}),{activatorEl:a,activatorRef:w,activatorEvents:E,contentEvents:g,scrimEvents:u}}function Gt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;F(()=>e.activator,(c,d)=>{if(d&&c!==d){const f=i(d);f&&s(f)}c&&ee(()=>r())},{immediate:!0}),F(()=>e.activatorProps,()=>{r()}),V(()=>{s()});function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||kt(c,B(a.value,d))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||Ct(c,B(a.value,d))}function i(){var f,m;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,d;if(c)if(c==="parent"){let y=(m=(f=n==null?void 0:n.proxy)==null?void 0:f.$el)==null?void 0:m.parentNode;for(;y.hasAttribute("data-no-activator");)y=y.parentNode;d=y}else typeof c=="string"?d=document.querySelector(c):"$el"in c?d=c.$el:d=c;return o.value=(d==null?void 0:d.nodeType)===Node.ELEMENT_NODE?d:null,o.value}}function Xt(){if(!q)return z(!1);const{ssr:e}=Xe();if(e){const n=z(!1);return Je(()=>{n.value=!0}),n}else return z(!0)}function qe(){const n=ye("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Te=Symbol.for("vuetify:stack"),Y=Ve([]);function Jt(e,n,t){const o=ye("useStack"),a=!t,r=me(Te,void 0),s=Ve({activeChildren:new Set});Re(Te,s);const i=z(+n.value);de(e,()=>{var m;const f=(m=Y.at(-1))==null?void 0:m[1];i.value=f?f+10:+n.value,a&&Y.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),V(()=>{if(a){const y=Ze(Y).findIndex(E=>E[0]===o.uid);Y.splice(y,1)}r==null||r.activeChildren.delete(o.uid)})});const c=z(!0);a&&ve(()=>{var m;const f=((m=Y.at(-1))==null?void 0:m[0])===o.uid;setTimeout(()=>c.value=f)});const d=C(()=>!s.activeChildren.size);return{globalTop:Qe(c),localTop:d,stackStyles:C(()=>({zIndex:i.value}))}}function Zt(e){return{teleportTarget:C(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Qt(){return!0}function je(e,n,t){if(!e||ze(e,t)===!1)return!1;const o=$e(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function ze(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Qt)(e)}function en(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&je(e,n,t)&&setTimeout(()=>{ze(e,t)&&o&&o(e)},0)}function Me(e,n){const t=$e(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const tn={mounted(e,n){const t=a=>en(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=je(a,e,n)};Me(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){!e._clickOutside||(Me(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function nn(e){const{modelValue:n,color:t,...o}=e;return T(re,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&T("div",B({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ke=W({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Ut(),...yt(),...gt(),...Ot(),...Bt(),...$t(),...et(),...ht()},"VOverlay"),Fe=fe()({name:"VOverlay",directives:{ClickOutside:tn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ke()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=Ne(e,"modelValue"),s=C({get:()=>r.value,set:x=>{x&&e.disabled||(r.value=x)}}),{teleportTarget:i}=Zt(C(()=>e.attach||e.contained)),{themeClasses:c}=tt(e),{rtlClasses:d,isRtl:f}=nt(),{hasContent:m,onAfterLeave:y}=Pt(e,s),E=wt(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:u,stackStyles:w}=Jt(s,ot(e,"zIndex"),e._disableGlobalStack),{activatorEl:h,activatorRef:v,activatorEvents:l,contentEvents:k,scrimEvents:R}=Yt(e,{isActive:s,isTop:u}),{dimensionStyles:H}=Et(e),$=Xt(),{scopeId:K}=qe();F(()=>e.disabled,x=>{x&&(s.value=!1)});const U=I(),N=I(),{contentStyles:O,updateLocation:S}=Vt(e,{isRtl:f,contentEl:N,activatorEl:h,isActive:s});_t(e,{root:U,contentEl:N,activatorEl:h,isActive:s,updateLocation:S});function b(x){a("click:outside",x),e.persistent?P():s.value=!1}function p(){return s.value&&g.value}q&&F(s,x=>{x?window.addEventListener("keydown",M):window.removeEventListener("keydown",M)},{immediate:!0});function M(x){var A,_;x.key==="Escape"&&g.value&&(e.persistent?P():(s.value=!1,(A=N.value)!=null&&A.contains(document.activeElement)&&((_=h.value)==null||_.focus())))}const L=bt();de(()=>e.closeOnBack,()=>{pt(L,x=>{g.value&&s.value?(x(!1),e.persistent?P():s.value=!1):x()})});const j=I();F(()=>s.value&&(e.absolute||e.contained)&&i.value==null,x=>{if(x){const A=At(U.value);A&&A!==document.scrollingElement&&(j.value=A.scrollTop)}});function P(){e.noClickAnimation||N.value&&G(N.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:se})}return He(()=>{var x;return T(lt,null,[(x=t.activator)==null?void 0:x.call(t,{isActive:s.value,props:B({ref:v},l.value,e.activatorProps)}),$.value&&m.value&&T(at,{disabled:!i.value,to:i.value},{default:()=>[T("div",B({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,d.value,e.class],style:[w.value,{top:D(j.value)},e.style],ref:U},K,o),[T(nn,B({color:E,modelValue:s.value&&!!e.scrim},R.value),null),T(xt,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterLeave:()=>{y(),a("afterLeave")}},{default:()=>{var A;return[it(T("div",B({ref:N,class:["v-overlay__content",e.contentClass],style:[H.value,O.value]},k.value,e.contentProps),[(A=t.default)==null?void 0:A.call(t,{isActive:s})]),[[rt,s.value],[st("click-outside"),{handler:b,closeConditional:p,include:()=>[h.value]}]])]}})])]})])}),{activatorEl:h,animateClick:P,contentEl:N,globalTop:g,localTop:u,updateLocation:S}}}),on=W({id:String,...ct(Ke({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Lt}}),["absolute"])},"VMenu"),cn=fe()({name:"VMenu",props:on(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Ne(e,"modelValue"),{scopeId:a}=qe(),r=ut(),s=C(()=>e.id||`v-menu-${r}`),i=I(),c=me(ue,null),d=z(0);Re(ue,{register(){++d.value},unregister(){--d.value},closeParents(){setTimeout(()=>{d.value||(o.value=!1,c==null||c.closeParents())},40)}});function f(u){var v,l,k;const w=u.relatedTarget,h=u.target;w!==h&&((v=i.value)==null?void 0:v.contentEl)&&((l=i.value)==null?void 0:l.globalTop)&&![document,i.value.contentEl].includes(h)&&!i.value.contentEl.contains(h)&&((k=we(i.value.contentEl)[0])==null||k.focus())}F(o,u=>{u?(c==null||c.register(),document.addEventListener("focusin",f,{once:!0})):(c==null||c.unregister(),document.removeEventListener("focusin",f))});function m(){c==null||c.closeParents()}function y(u){var w,h,v;e.disabled||u.key==="Tab"&&(ft(we((w=i.value)==null?void 0:w.contentEl,!1),u.shiftKey?"prev":"next",k=>k.tabIndex>=0)||(o.value=!1,(v=(h=i.value)==null?void 0:h.activatorEl)==null||v.focus()))}function E(u){var h;if(e.disabled)return;const w=(h=i.value)==null?void 0:h.contentEl;w&&o.value?u.key==="ArrowDown"?(u.preventDefault(),Ee(w,"next")):u.key==="ArrowUp"&&(u.preventDefault(),Ee(w,"prev")):["ArrowDown","ArrowUp"].includes(u.key)&&(o.value=!0,u.preventDefault(),setTimeout(()=>setTimeout(()=>E(u))))}const g=C(()=>B({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":s.value,onKeydown:E},e.activatorProps));return He(()=>{const[u]=Fe.filterProps(e);return T(Fe,B({ref:i,class:["v-menu",e.class],style:e.style},u,{modelValue:o.value,"onUpdate:modelValue":w=>o.value=w,absolute:!0,activatorProps:g.value,"onClick:outside":m,onKeydown:y},a),{activator:t.activator,default:function(){for(var w=arguments.length,h=new Array(w),v=0;v<w;v++)h[v]=arguments[v];return T(St,{root:"VMenu"},{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t,...h)]}})}})}),mt({id:s,\u03A8openChildren:d},i)}});export{cn as V,Lt as a,At as g,qe as u};
