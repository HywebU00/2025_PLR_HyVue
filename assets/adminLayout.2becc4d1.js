import{p as z,i as Ce,c as d,r as ye,a as ne,u as Xe,b as D,g as Ze,s as M,o as pe,d as qe,f as tt,e as at,h as nt,j as lt,k as be,_ as Te,l as G,m as le,n as a,w as r,q as B,V as R,t as xe,v as Ke,x as ae,y as we,z as U,A as Se,B as _e,C as X,D as ie,E as Ie,F as Be,G as Le,H as ge,I as J,J as $e,K as Me,L as Ee,M as je,N as ot,O as Ve,P as it,Q as ut,R as O,S as Ge,T as st,U as Ne,W as H,X as rt,Y as ct,Z as vt,$ as dt,a0 as mt,a1 as ft,a2 as gt,a3 as ht,a4 as yt,a5 as oe,a6 as pt,a7 as ve,a8 as P,a9 as de,aa as ee,ab as me,ac as bt,ad as K,ae as x,af as Ae,ag as fe,ah as j}from"./index.5e6662b5.js";const he=Symbol.for("vuetify:layout"),Je=Symbol.for("vuetify:layout-item"),De=1e3,wt=z({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Re=z({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function St(){const e=Ce(he);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Pe(e){var f;const n=Ce(he);if(!n)throw new Error("[Vuetify] Could not find injected layout");const l=(f=e.id)!=null?f:`layout-item-${at()}`,u=Ze("useLayoutItem");qe(Je,{id:l});const o=M(!1);nt(()=>o.value=!0),lt(()=>o.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:v}=n.register(u,{...e,active:d(()=>o.value?!1:e.active.value),id:l});return be(()=>n.unregister(l)),{layoutItemStyles:t,layoutRect:n.layoutRect,layoutItemScrimStyles:v}}const kt=(e,n,l,u)=>{let o={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...o}}];for(const v of e){const f=n.get(v),i=l.get(v),m=u.get(v);if(!f||!i||!m)continue;const s={...o,[f.value]:parseInt(o[f.value],10)+(m.value?parseInt(i.value,10):0)};t.push({id:v,layer:s}),o=s}return t};function Vt(e){const n=Ce(he,null),l=d(()=>n?n.rootZIndex.value-100:De),u=ye([]),o=ne(new Map),t=ne(new Map),v=ne(new Map),f=ne(new Map),i=ne(new Map),{resizeRef:m,contentRect:s}=Xe(),w=d(()=>{var h;const c=new Map,p=(h=e.overlaps)!=null?h:[];for(const T of p.filter(k=>k.includes(":"))){const[k,E]=T.split(":");if(!u.value.includes(k)||!u.value.includes(E))continue;const W=o.get(k),Y=o.get(E),Z=t.get(k),q=t.get(E);!W||!Y||!Z||!q||(c.set(E,{position:W.value,amount:parseInt(Z.value,10)}),c.set(k,{position:Y.value,amount:-parseInt(q.value,10)}))}return c}),y=d(()=>{const c=[...new Set([...v.values()].map(h=>h.value))].sort((h,T)=>h-T),p=[];for(const h of c){const T=u.value.filter(k=>{var E;return((E=v.get(k))==null?void 0:E.value)===h});p.push(...T)}return kt(p,o,t,f)}),g=d(()=>!Array.from(i.values()).some(c=>c.value)),S=d(()=>y.value[y.value.length-1].layer),I=d(()=>({"--v-layout-left":D(S.value.left),"--v-layout-right":D(S.value.right),"--v-layout-top":D(S.value.top),"--v-layout-bottom":D(S.value.bottom),...g.value?void 0:{transition:"none"}})),L=d(()=>y.value.slice(1).map((c,p)=>{let{id:h}=c;const{layer:T}=y.value[p],k=t.get(h),E=o.get(h);return{id:h,...T,size:Number(k.value),position:E.value}})),V=c=>L.value.find(p=>p.id===c),C=Ze("createLayout"),_=M(!1);pe(()=>{_.value=!0}),qe(he,{register:(c,p)=>{let{id:h,order:T,position:k,layoutSize:E,elementSize:W,active:Y,disableTransitions:Z,absolute:q}=p;v.set(h,T),o.set(h,k),t.set(h,E),f.set(h,Y),Z&&i.set(h,Z);const ue=tt(Je,C==null?void 0:C.vnode).indexOf(c);ue>-1?u.value.splice(ue,0,h):u.value.push(h);const se=d(()=>L.value.findIndex(F=>F.id===h)),$=d(()=>l.value+y.value.length*2-se.value*2),re=d(()=>{const F=k.value==="left"||k.value==="right",Q=k.value==="right",et=k.value==="bottom",ze={[k.value]:0,zIndex:$.value,transform:`translate${F?"X":"Y"}(${(Y.value?0:-110)*(Q||et?-1:1)}%)`,position:q.value||l.value!==De?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!_.value)return ze;const A=L.value[se.value];if(!A)throw new Error(`[Vuetify] Could not find layout item "${h}"`);const ke=w.value.get(h);return ke&&(A[ke.position]+=ke.amount),{...ze,height:F?`calc(100% - ${A.top}px - ${A.bottom}px)`:W.value?`${W.value}px`:void 0,left:Q?void 0:`${A.left}px`,right:Q?`${A.right}px`:void 0,top:k.value!=="bottom"?`${A.top}px`:void 0,bottom:k.value!=="top"?`${A.bottom}px`:void 0,width:F?W.value?`${W.value}px`:void 0:`calc(100% - ${A.left}px - ${A.right}px)`}}),ce=d(()=>({zIndex:$.value-1}));return{layoutItemStyles:re,layoutItemScrimStyles:ce,zIndex:$}},unregister:c=>{v.delete(c),o.delete(c),t.delete(c),f.delete(c),i.delete(c),u.value=u.value.filter(p=>p!==c)},mainRect:S,mainStyles:I,getLayoutItem:V,items:L,layoutRect:s,rootZIndex:l});const N=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),b=d(()=>({zIndex:l.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:N,layoutStyles:b,getLayoutItem:V,items:L,layoutRect:s,layoutRef:m}}const xt={},Ct={class:"functionList"};function Tt(e,n,l,u,o,t){return G(),le("div",Ct,[a(R,{class:""},{default:r(()=>[B(" \u9996\u9801 ")]),_:1}),a(R,{variant:"flat",color:"primary ",class:"","prepend-icon":"mdi-account-outline"},{default:r(()=>[B("\u767B\u5165")]),_:1}),a(R,null,{default:r(()=>[B(" \u5E33\u865F\u7DAD\u8B77 ")]),_:1})])}const _t=Te(xt,[["render",Tt]]),It={};function Bt(e,n){const l=xe("router-view");return G(),Ke(l)}const Lt=Te(It,[["render",Bt]]),$t=""+new URL("f_logo.96878035.png",import.meta.url).href;const Mt=z({...ae(),...wt({fullHeight:!0}),...we()},"VApp"),Et=U()({name:"VApp",props:Mt(),setup(e,n){let{slots:l}=n;const u=Se(e),{layoutClasses:o,layoutStyles:t,getLayoutItem:v,items:f,layoutRef:i}=Vt(e),{rtlClasses:m}=_e();return X(()=>{var s;return a("div",{ref:i,class:["v-application",u.themeClasses.value,o.value,m.value,e.class],style:[t.value,e.style]},[a("div",{class:"v-application__wrap"},[(s=l.default)==null?void 0:s.call(l)])])}),{getLayoutItem:v,items:f,theme:u}}});const Nt=z({text:String,...ae(),...ie()},"VToolbarTitle"),Rt=U()({name:"VToolbarTitle",props:Nt(),setup(e,n){let{slots:l}=n;return X(()=>{const u=!!(l.default||l.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[u&&a("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,(o=l.default)==null?void 0:o.call(l)])]}})}),{}}}),Pt=[null,"prominent","default","comfortable","compact"],Qe=z({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Pt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ie(),...ae(),...Be(),...Le(),...ie({tag:"header"}),...we()},"VToolbar"),We=U()({name:"VToolbar",props:Qe(),setup(e,n){var g;let{slots:l}=n;const{backgroundColorClasses:u,backgroundColorStyles:o}=ge(J(e,"color")),{borderClasses:t}=$e(e),{elevationClasses:v}=Me(e),{roundedClasses:f}=Ee(e),{themeClasses:i}=Se(e),{rtlClasses:m}=_e(),s=M(!!(e.extended||((g=l.extension)==null?void 0:g.call(l)))),w=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=d(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return je({VBtn:{variant:"text"}}),X(()=>{var V;const S=!!(e.title||l.title),I=!!(l.image||e.image),L=(V=l.extension)==null?void 0:V.call(l);return s.value=!!(e.extended||L),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,t.value,v.value,f.value,i.value,m.value,e.class],style:[o.value,e.style]},{default:()=>[I&&a("div",{key:"image",class:"v-toolbar__image"},[l.image?a(Ve,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):a(ot,{key:"image-img",cover:!0,src:e.image},null)]),a(Ve,{defaults:{VTabs:{height:D(w.value)}}},{default:()=>{var C,_,N;return[a("div",{class:"v-toolbar__content",style:{height:D(w.value)}},[l.prepend&&a("div",{class:"v-toolbar__prepend"},[(C=l.prepend)==null?void 0:C.call(l)]),S&&a(Rt,{key:"title",text:e.title},{text:l.title}),(_=l.default)==null?void 0:_.call(l),l.append&&a("div",{class:"v-toolbar__append"},[(N=l.append)==null?void 0:N.call(l)])])]}}),a(Ve,{defaults:{VTabs:{height:D(y.value)}}},{default:()=>[a(it,null,{default:()=>[s.value&&a("div",{class:"v-toolbar__extension",style:{height:D(y.value)}},[L])]})]})]})}),{contentHeight:w,extensionHeight:y}}}),Ht=z({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function zt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:l}=n;let u=0;const o=ye(null),t=M(0),v=M(0),f=M(0),i=M(!1),m=M(!1),s=d(()=>Number(e.scrollThreshold)),w=d(()=>ut((s.value-t.value)/s.value||0)),y=()=>{const g=o.value;!g||l&&!l.value||(u=t.value,t.value="window"in g?g.pageYOffset:g.scrollTop,m.value=t.value<u,f.value=Math.abs(t.value-s.value))};return O(m,()=>{v.value=v.value||t.value}),O(i,()=>{v.value=0}),pe(()=>{O(()=>e.scrollTarget,g=>{var I;const S=g?document.querySelector(g):window;!S||S!==o.value&&((I=o.value)==null||I.removeEventListener("scroll",y),o.value=S,o.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),be(()=>{var g;(g=o.value)==null||g.removeEventListener("scroll",y)}),l&&O(l,y,{immediate:!0}),{scrollThreshold:s,currentScroll:t,currentThreshold:f,isScrollActive:i,scrollRatio:w,isScrollingUp:m,savedScroll:v}}const At=z({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Qe(),...Re(),...Ht(),height:{type:[Number,String],default:64}},"VAppBar"),Oe=U()({name:"VAppBar",props:At(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const u=ye(),o=Ge(e,"modelValue"),t=d(()=>{var C,_;const V=new Set((_=(C=e.scrollBehavior)==null?void 0:C.split(" "))!=null?_:[]);return{hide:V.has("hide"),inverted:V.has("inverted"),collapse:V.has("collapse"),elevate:V.has("elevate"),fadeImage:V.has("fade-image")}}),v=d(()=>{const V=t.value;return V.hide||V.inverted||V.collapse||V.elevate||V.fadeImage||!o.value}),{currentScroll:f,scrollThreshold:i,isScrollingUp:m,scrollRatio:s}=zt(e,{canScroll:v}),w=d(()=>e.collapse||t.value.collapse&&(t.value.inverted?s.value>0:s.value===0)),y=d(()=>e.flat||t.value.elevate&&(t.value.inverted?f.value>0:f.value===0)),g=d(()=>t.value.fadeImage?t.value.inverted?1-s.value:s.value:void 0),S=d(()=>{var _,N,b,c;if(t.value.hide&&t.value.inverted)return 0;const V=(N=(_=u.value)==null?void 0:_.contentHeight)!=null?N:0,C=(c=(b=u.value)==null?void 0:b.extensionHeight)!=null?c:0;return V+C});st(d(()=>!!e.scrollBehavior),()=>{rt(()=>{t.value.hide?t.value.inverted?o.value=f.value>i.value:o.value=m.value||f.value<i.value:o.value=!0})});const{ssrBootStyles:I}=Ne(),{layoutItemStyles:L}=Pe({id:e.name,order:d(()=>parseInt(e.order,10)),position:J(e,"location"),layoutSize:S,elementSize:M(void 0),active:o,absolute:J(e,"absolute")});return X(()=>{const[V]=We.filterProps(e);return a(We,H({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...L.value,"--v-toolbar-image-opacity":g.value,height:void 0,...I.value},e.style]},V,{collapse:w.value,flat:y.value}),l)}),{}}}),Dt=z({...ct({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ye=U()({name:"VAppBarNavIcon",props:Dt(),setup(e,n){let{slots:l}=n;return X(()=>a(R,H(e,{class:["v-app-bar-nav-icon"]}),l)),{}}});const Wt=z({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Ie(),...ae(),...Be(),...Re(),...Le(),...ie({tag:"footer"}),...we()},"VFooter"),Ot=U()({name:"VFooter",props:Wt(),setup(e,n){let{slots:l}=n;const{themeClasses:u}=Se(e),{backgroundColorClasses:o,backgroundColorStyles:t}=ge(J(e,"color")),{borderClasses:v}=$e(e),{elevationClasses:f}=Me(e),{roundedClasses:i}=Ee(e),m=M(32),{resizeRef:s}=Xe(g=>{!g.length||(m.value=g[0].target.clientHeight)}),w=d(()=>e.height==="auto"?m.value:parseInt(e.height,10)),{layoutItemStyles:y}=Pe({id:e.name,order:d(()=>parseInt(e.order,10)),position:d(()=>"bottom"),layoutSize:w,elementSize:d(()=>e.height==="auto"?void 0:w.value),active:d(()=>e.app),absolute:J(e,"absolute")});return X(()=>a(e.tag,{ref:s,class:["v-footer",u.value,o.value,v.value,f.value,i.value,e.class],style:[t.value,e.app?y.value:{height:D(e.height)},e.style]},l)),{}}});const Yt=z({scrollable:Boolean,...ae(),...ie({tag:"main"})},"VMain"),Ft=U()({name:"VMain",props:Yt(),setup(e,n){let{slots:l}=n;const{mainStyles:u}=St(),{ssrBootStyles:o}=Ne();return X(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,o.value,e.style]},{default:()=>{var t,v;return[e.scrollable?a("div",{class:"v-main__scroller"},[(t=l.default)==null?void 0:t.call(l)]):(v=l.default)==null?void 0:v.call(l)]}})),{}}});function Ut(e){let{rootEl:n,isSticky:l,layoutItemStyles:u}=e;const o=M(!1),t=M(0),v=d(()=>{const m=typeof o.value=="boolean"?"top":o.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[m]:D(t.value)}:{top:u.value.top}]});pe(()=>{O(l,m=>{m?window.addEventListener("scroll",i,{passive:!0}):window.removeEventListener("scroll",i)},{immediate:!0})}),be(()=>{window.removeEventListener("scroll",i)});let f=0;function i(){var I;const m=f>window.scrollY?"up":"down",s=n.value.getBoundingClientRect(),w=parseFloat((I=u.value.top)!=null?I:0),y=window.scrollY-Math.max(0,t.value-w),g=s.height+Math.max(t.value,w)-window.scrollY-window.innerHeight,S=parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y"))||0;s.height<window.innerHeight-w?(o.value="top",t.value=w):m==="up"&&o.value==="bottom"||m==="down"&&o.value==="top"?(t.value=window.scrollY+s.top-S,o.value=!0):m==="down"&&g<=0?(t.value=0,o.value="bottom"):m==="up"&&y<=0&&(S?o.value!=="top"&&(t.value=-y+S+w,o.value="top"):(t.value=s.top+y,o.value="top")),f=window.scrollY}return{isStuck:o,stickyStyles:v}}const Xt=100,Zt=20;function Fe(e){const n=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*n}function Ue(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const u=Fe(n),o=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);n+=(o-u)*Math.abs(o),l===e.length-1&&(n*=.5)}return Fe(n)*1e3}function qt(){const e={};function n(o){Array.from(o.changedTouches).forEach(t=>{var f;((f=e[t.identifier])!=null?f:e[t.identifier]=new vt(Zt)).push([o.timeStamp,t])})}function l(o){Array.from(o.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(o){var m;const t=(m=e[o])==null?void 0:m.values().reverse();if(!t)throw new Error(`No samples for touch id ${o}`);const v=t[0],f=[],i=[];for(const s of t){if(v[0]-s[0]>Xt)break;f.push({t:s[0],d:s[1].clientX}),i.push({t:s[0],d:s[1].clientY})}return{x:Ue(f),y:Ue(i),get direction(){const{x:s,y:w}=this,[y,g]=[Math.abs(s),Math.abs(w)];return y>g&&s>=0?"right":y>g&&s<=0?"left":g>y&&w>=0?"down":g>y&&w<=0?"up":Kt()}}}return{addMovement:n,endTouch:l,getVelocity:u}}function Kt(){throw new Error}function jt(e){let{isActive:n,isTemporary:l,width:u,touchless:o,position:t}=e;pe(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",_,{passive:!0})}),be(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",_)});const v=d(()=>["left","right"].includes(t.value)),{addMovement:f,endTouch:i,getVelocity:m}=qt();let s=!1;const w=M(!1),y=M(0),g=M(0);let S;function I(b,c){return(t.value==="left"?b:t.value==="right"?document.documentElement.clientWidth-b:t.value==="top"?b:t.value==="bottom"?document.documentElement.clientHeight-b:te())-(c?u.value:0)}function L(b){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const p=t.value==="left"?(b-g.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-b-g.value)/u.value:t.value==="top"?(b-g.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-b-g.value)/u.value:te();return c?Math.max(0,Math.min(1,p)):p}function V(b){if(o.value)return;const c=b.changedTouches[0].clientX,p=b.changedTouches[0].clientY,h=25,T=t.value==="left"?c<h:t.value==="right"?c>document.documentElement.clientWidth-h:t.value==="top"?p<h:t.value==="bottom"?p>document.documentElement.clientHeight-h:te(),k=n.value&&(t.value==="left"?c<u.value:t.value==="right"?c>document.documentElement.clientWidth-u.value:t.value==="top"?p<u.value:t.value==="bottom"?p>document.documentElement.clientHeight-u.value:te());(T||k||n.value&&l.value)&&(s=!0,S=[c,p],g.value=I(v.value?c:p,n.value),y.value=L(v.value?c:p),i(b),f(b))}function C(b){const c=b.changedTouches[0].clientX,p=b.changedTouches[0].clientY;if(s){if(!b.cancelable){s=!1;return}const T=Math.abs(c-S[0]),k=Math.abs(p-S[1]);(v.value?T>k&&T>3:k>T&&k>3)?(w.value=!0,s=!1):(v.value?k:T)>3&&(s=!1)}if(!w.value)return;b.preventDefault(),f(b);const h=L(v.value?c:p,!1);y.value=Math.max(0,Math.min(1,h)),h>1?g.value=I(v.value?c:p,!0):h<0&&(g.value=I(v.value?c:p,!1))}function _(b){if(s=!1,!w.value)return;f(b),w.value=!1;const c=m(b.changedTouches[0].identifier),p=Math.abs(c.x),h=Math.abs(c.y);(v.value?p>h&&p>400:h>p&&h>3)?n.value=c.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||te()):n.value=y.value>.5}const N=d(()=>w.value?{transform:t.value==="left"?`translateX(calc(-100% + ${y.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${y.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${y.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${y.value*u.value}px))`:te(),transition:"none"}:void 0);return{isDragging:w,dragProgress:y,dragStyles:N}}function te(){throw new Error}const Gt=["start","end","left","right","top","bottom"],Jt=z({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Gt.includes(e)},sticky:Boolean,...Ie(),...ae(),...Be(),...Re(),...Le(),...ie({tag:"nav"}),...we()},"VNavigationDrawer"),Qt=U()({name:"VNavigationDrawer",props:Jt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,n){let{attrs:l,emit:u,slots:o}=n;const{isRtl:t}=_e(),{themeClasses:v}=Se(e),{borderClasses:f}=$e(e),{backgroundColorClasses:i,backgroundColorStyles:m}=ge(J(e,"color")),{elevationClasses:s}=Me(e),{mobile:w}=dt(),{roundedClasses:y}=Ee(e),g=mt(),S=Ge(e,"modelValue",null,$=>!!$),{ssrBootStyles:I}=Ne(),{scopeId:L}=ft(),V=ye(),C=M(!1),_=d(()=>e.rail&&e.expandOnHover&&C.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),N=d(()=>gt(e.location,t.value)),b=d(()=>!e.permanent&&(w.value||e.temporary)),c=d(()=>e.sticky&&!b.value&&N.value!=="bottom");e.expandOnHover&&e.rail!=null&&O(C,$=>u("update:rail",!$)),e.disableResizeWatcher||O(b,$=>!e.permanent&&pt(()=>S.value=!$)),!e.disableRouteWatcher&&g&&O(g.currentRoute,()=>b.value&&(S.value=!1)),O(()=>e.permanent,$=>{$&&(S.value=!0)}),ht(()=>{e.modelValue!=null||b.value||(S.value=e.permanent||!w.value)});const{isDragging:p,dragProgress:h,dragStyles:T}=jt({isActive:S,isTemporary:b,width:_,touchless:J(e,"touchless"),position:N}),k=d(()=>{const $=b.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):_.value;return p.value?$*h.value:$}),{layoutItemStyles:E,layoutItemScrimStyles:W}=Pe({id:e.name,order:d(()=>parseInt(e.order,10)),position:N,layoutSize:k,elementSize:_,active:d(()=>S.value||p.value),disableTransitions:d(()=>p.value),absolute:d(()=>e.absolute||c.value&&typeof Y.value!="string")}),{isStuck:Y,stickyStyles:Z}=Ut({rootEl:V,isSticky:c,layoutItemStyles:E}),q=ge(d(()=>typeof e.scrim=="string"?e.scrim:null)),He=d(()=>({...p.value?{opacity:h.value*.2,transition:"none"}:void 0,...W.value}));je({VList:{bgColor:"transparent"}});function ue(){C.value=!0}function se(){C.value=!1}return X(()=>{const $=o.image||e.image;return a(oe,null,[a(e.tag,H({ref:V,onMouseenter:ue,onMouseleave:se,class:["v-navigation-drawer",`v-navigation-drawer--${N.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":C.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":b.value,"v-navigation-drawer--active":S.value,"v-navigation-drawer--sticky":c.value},v.value,i.value,f.value,s.value,y.value,e.class],style:[m.value,E.value,T.value,I.value,Z.value,e.style]},L,l),{default:()=>{var re,ce,F,Q;return[$&&a("div",{key:"image",class:"v-navigation-drawer__img"},[o.image?(re=o.image)==null?void 0:re.call(o,{image:e.image}):a("img",{src:e.image,alt:""},null)]),o.prepend&&a("div",{class:"v-navigation-drawer__prepend"},[(ce=o.prepend)==null?void 0:ce.call(o)]),a("div",{class:"v-navigation-drawer__content"},[(F=o.default)==null?void 0:F.call(o)]),o.append&&a("div",{class:"v-navigation-drawer__append"},[(Q=o.append)==null?void 0:Q.call(o)])]}}),a(yt,{name:"fade-transition"},{default:()=>[b.value&&(p.value||S.value)&&!!e.scrim&&a("div",H({class:["v-navigation-drawer__scrim",q.backgroundColorClasses.value],style:[He.value,q.backgroundColorStyles.value],onClick:()=>S.value=!1},L),null)]})])}),{isStuck:Y}}}),ea={data:()=>({tab:null,drawer:!0,rail:!1,value:0,windowWidth:"",railWidth:"0",open:["Users"],theme:"default",themeDark:"false",opened:["\u6848\u4EF6\u7BA1\u7406"],overlay:!1,isSmallScreen:window.innerWidth<768}),components:{functionNavigation:_t,pageView:Lt},methods:{menuTarget(e){this.opened=e.slice(-1)},pushLink(e){this.$router.push({path:e})}},mounted(){this.windowWidth=window.innerWidth}},ta=P("h1",{class:"logoText"},"\u516C\u5171\u51FA\u501F\u6B0A\u767B\u8A18\u7CFB\u7D71",-1),aa={class:""},na={class:"navlist"},la={class:""},oa=P("div",{class:"footerImg"},[P("img",{src:$t,alt:""})],-1),ia=P("ul",null,[P("li",null,"\u96B1\u79C1\u6B0A\u653F\u7B56"),P("li",null,"\u7DB2\u7AD9\u5B89\u5168\u653F\u7B56"),P("li",null,"\u653F\u5E9C\u7DB2\u7AD9\u8CC7\u6599\u958B\u653E\u5BA3\u544A")],-1);function ua(e,n,l,u,o,t){const v=xe("functionNavigation"),f=xe("pageView");return G(),Ke(Et,{id:"inspire"},{default:r(()=>[a(Oe,{class:"nav elevation-0"},{default:r(()=>[a(Ye,{icon:"mdi-menu",width:"64",class:"rounded-0 h-100 ml-0 phoneBtn",onClick:n[0]||(n[0]=ve(i=>[e.rail=!e.rail,e.overlay=!0],["stop"]))}),ta,a(v)]),_:1}),a(Oe,{class:"pcMenu bg-primary elevation-0"},{default:r(()=>[P("div",aa,[a(R,{variant:"plain","append-icon":"mdi-chevron-down"},{default:r(()=>[B(" \u51FA\u7248\u54C1\u724C\u7BA1\u7406 "),a(de,{activator:"parent","open-on-hover":""},{default:r(()=>[a(ee,null,{default:r(()=>[(G(),le(oe,null,me(2,i=>a(x,{key:i,link:""},{append:r(()=>[a(Ae,{icon:"mdi-chevron-down",size:"x-small"})]),default:r(()=>[a(fe,null,{default:r(()=>[B("Item "+j(i),1)]),_:2},1024),a(de,{"open-on-focus":!1,activator:"parent","open-on-hover":"",submenu:""},{default:r(()=>[a(ee,null,{default:r(()=>[(G(),le(oe,null,me(2,m=>a(x,{key:m,link:""},{append:r(()=>[a(Ae,{icon:"mdi-chevron-down",size:"x-small"})]),default:r(()=>[a(fe,null,{default:r(()=>[B("Item "+j(i)+" - "+j(m),1)]),_:2},1024),a(de,{"open-on-focus":!1,activator:"parent","open-on-hover":"",submenu:""},{default:r(()=>[a(ee,null,{default:r(()=>[(G(),le(oe,null,me(2,s=>a(x,{key:s,link:""},{default:r(()=>[a(fe,null,{default:r(()=>[B("Item "+j(i)+" - "+j(m)+" - "+j(s),1)]),_:2},1024)]),_:2},1024)),64))]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),a(R,{variant:"plain","append-icon":"mdi-chevron-down"},{default:r(()=>[B(" \u5B50\u5E33\u865F\u7BA1\u7406 "),a(de,{activator:"parent","open-on-hover":""},{default:r(()=>[a(ee,null,{default:r(()=>[(G(),le(oe,null,me(2,i=>a(x,{key:i,link:""},{default:r(()=>[a(fe,null,{default:r(()=>[B("Item "+j(i),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),a(R,{variant:"plain"},{default:r(()=>[B(" \u4F5C\u8005\u59D4\u8A17\u7BA1\u7406 ")]),_:1}),a(R,{variant:"plain"},{default:r(()=>[B(" \u8457\u4F5C\u4EBA\u540D\u7BA1\u7406 ")]),_:1}),a(R,{variant:"plain"},{default:r(()=>[B(" \u767B\u8A18\u8457\u4F5C ")]),_:1}),a(R,{variant:"plain"},{default:r(()=>[B(" \u88DC\u511F\u91D1\u67E5\u8A62 ")]),_:1}),a(R,{variant:"plain"},{default:r(()=>[B(" \u88DC\u511F\u916C\u91D1\u8ABF\u6574\u7BA1\u7406 ")]),_:1})])]),_:1}),a(Ft,null,{default:r(()=>[a(Qt,{modelValue:e.drawer,"onUpdate:modelValue":n[18]||(n[18]=i=>e.drawer=i),class:bt(["navDrawer",{hidden:!e.rail}]),rail:!e.rail,permanent:"","rail-width":e.railWidth,width:"256"},{default:r(()=>[a(Ye,{icon:"mdi-chevron-left",width:"64",class:"rounded-0 ml-0 ml-auto mobileBtn",onClick:n[1]||(n[1]=ve(i=>[e.rail=!e.rail,e.overlay=!1],["stop"]))}),a(ee,{density:"compact",nav:"",class:"text-navText",opened:e.opened,"onUpdate:opened":t.menuTarget},{default:r(()=>[a(K,{value:"\u51FA\u7248\u54C1\u724C\u7BA1\u7406"},{activator:r(({props:i})=>[a(x,H({color:"white","prepend-icon":""},i,{title:"\u51FA\u7248\u54C1\u724C\u7BA1\u7406",onClick:n[2]||(n[2]=ve(m=>e.overlay=!1,["stop"]))}),null,16)]),default:r(()=>[a(x,{title:"item1",value:"item1",onClick:n[3]||(n[3]=i=>t.pushLink(""))}),a(x,{title:"item2",value:"item2",onClick:n[4]||(n[4]=i=>t.pushLink(""))}),a(x,{title:"item3",value:"item3",onClick:n[5]||(n[5]=i=>t.pushLink(""))})]),_:1}),a(K,{value:"\u5B50\u5E33\u865F\u7BA1\u7406"},{activator:r(({props:i})=>[a(x,H({"prepend-icon":""},i,{color:"white",title:"\u5B50\u5E33\u865F\u7BA1\u7406",onClick:n[6]||(n[6]=ve(m=>e.overlay=!1,["stop"]))}),null,16)]),default:r(()=>[a(x,{title:"item1",value:"item1",onClick:n[7]||(n[7]=i=>t.pushLink(""))}),a(x,{title:"item2",value:"item2",onClick:n[8]||(n[8]=i=>t.pushLink(""))}),a(x,{title:"item3",value:"item3",onClick:n[9]||(n[9]=i=>t.pushLink(""))})]),_:1}),a(K,{value:"\u4F5C\u8005\u59D4\u8A17\u7BA1\u7406"},{activator:r(({props:i})=>[a(x,H({"prepend-icon":""},i,{"append-icon":"",title:"\u4F5C\u8005\u59D4\u8A17\u7BA1\u7406",onClick:n[10]||(n[10]=m=>t.pushLink(""))}),null,16)]),_:1}),a(K,{value:"\u8457\u4F5C\u4EBA\u540D\u7BA1\u7406"},{activator:r(({props:i})=>[a(x,H({"prepend-icon":""},i,{"append-icon":"",title:"\u8457\u4F5C\u4EBA\u540D\u7BA1\u7406",onClick:n[11]||(n[11]=m=>t.pushLink(""))}),null,16)]),_:1}),a(K,{value:"\u767B\u8A18\u8457\u4F5C"},{activator:r(({props:i})=>[a(x,H({"prepend-icon":""},i,{"append-icon":"",title:"\u767B\u8A18\u8457\u4F5C",onClick:n[12]||(n[12]=m=>t.pushLink(""))}),null,16)]),_:1}),a(K,{value:"\u88DC\u511F\u91D1\u67E5\u8A62"},{activator:r(({props:i})=>[a(x,H({"prepend-icon":""},i,{"append-icon":"",title:"\u88DC\u511F\u91D1\u67E5\u8A62",onClick:n[13]||(n[13]=m=>t.pushLink(""))}),null,16)]),_:1}),a(K,{value:"\u88DC\u511F\u916C\u91D1\u8ABF\u6574\u7BA1\u7406"},{activator:r(({props:i})=>[a(x,H({"prepend-icon":""},i,{"append-icon":"",title:"\u88DC\u511F\u916C\u91D1\u8ABF\u6574\u7BA1\u7406",onClick:n[14]||(n[14]=m=>t.pushLink(""))}),null,16)]),_:1}),P("ul",na,[P("li",null,[a(R,{variant:"plain",block:"",onClick:n[15]||(n[15]=i=>t.pushLink(""))},{default:r(()=>[B("\u56DE\u9996\u9801 ")]),_:1})]),P("li",null,[a(R,{variant:"plain",block:"",onClick:n[16]||(n[16]=i=>t.pushLink(""))},{default:r(()=>[B(" \u767B\u5165 ")]),_:1})]),P("li",null,[a(R,{variant:"plain",block:"",onClick:n[17]||(n[17]=i=>t.pushLink(""))},{default:r(()=>[B(" \u5E33\u865F\u7DAD\u8B77 ")]),_:1})])])]),_:1},8,["opened","onUpdate:opened"])]),_:1},8,["modelValue","class","rail","rail-width"]),a(f)]),_:1}),a(Ot,{class:"footer"},{default:r(()=>[P("div",la,[oa,a(ee,{lines:"one"},{default:r(()=>[a(x,null,{default:r(()=>[ia]),_:1}),a(x,{title:"\u570B\u7ACB\u516C\u5171\u8CC7\u8A0A\u5716\u66F8\u9928\u7248\u6B0A\u6240\u6709 \xA9 2020 All Rights Reserved."}),a(x,{title:"\u8AEE\u8A62\u96FB\u8A71\uFF1A(04)2262-5100\u8F491402\u30011413"}),a(x,{title:"\u8AEE\u8A62\u4FE1\u7BB1\uFF1Aplrservice@nlpi.edu.tw"}),a(x,{title:"\u5EFA\u8B70\u700F\u89BD\u5668\uFF1AMicrosoft Edge\u3001Firefox\u3001Chrome(\u87A2\u5E55\u8A2D\u5B9A\u6700\u4F73\u986F\u793A\u6548\u679C\u70BA1280*1024)"})]),_:1})])]),_:1})]),_:1})}const ra=Te(ea,[["render",ua]]);export{ra as default};
