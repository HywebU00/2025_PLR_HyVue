import{m as Se,V as L,a as xe,b as ie,u as ee,c as Te,d as Ce}from"./VBtn.8afb6780.js";import{q as ke,u as Y,m as J,a as Z,j as te,k as Ve,n as we,e as ze,M as Be}from"./index.c23348a7.js";import{p as X,a9 as Ee,x as W,c as y,s as B,r as F,n as m,G as K,Y as ne,z as ue,J as Ie,S as Pe,D as ce,ab as Re,C as _e,E as $e,A as _,B as Me,k as N,aI as re,v as He,y as Ae,aB as Oe,b as Ye,Z as ve,$ as Xe,i as We,a8 as Ge,M as Le}from"./index.0fed8dcb.js";import{a as Fe,s as De}from"./forwardRefs.7b10ae4c.js";import{c as oe}from"./index.1654fabb.js";import{m as je,u as qe}from"./lazy.bc7b0eb4.js";import{u as Ue}from"./ssrBoot.451fbf1e.js";const de=Symbol.for("vuetify:v-tabs"),Ke=X({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Ee(Se({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ne=W()({name:"VTab",props:Ke(),setup(e,o){let{slots:t,attrs:n}=o;const{textColorClasses:r,textColorStyles:s}=ke(e,"sliderColor"),a=y(()=>e.direction==="horizontal"),l=B(!1),c=F(),u=F();function v(x){var f,g;let{value:S}=x;if(l.value=S,S){const E=(g=(f=c.value)==null?void 0:f.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),P=u.value;if(!E||!P)return;const I=getComputedStyle(E).color,k=E.getBoundingClientRect(),V=P.getBoundingClientRect(),h=a.value?"x":"y",b=a.value?"X":"Y",T=a.value?"right":"bottom",w=a.value?"width":"height",$=k[h],D=V[h],R=$>D?k[T]-V[T]:k[h]-V[h],j=Math.sign(R)>0?a.value?"right":"bottom":Math.sign(R)<0?a.value?"left":"top":"center",C=(Math.abs(R)+(Math.sign(R)<0?k[w]:V[w]))/Math.max(k[w],V[w]),H=k[w]/V[w],G=1.5;Fe(P,{backgroundColor:[I,"currentcolor"],transform:[`translate${b}(${R}px) scale${b}(${H})`,`translate${b}(${R/G}px) scale${b}(${(C-1)/G+1})`,"none"],transformOrigin:Array(3).fill(j)},{duration:225,easing:De})}}return Y(()=>{const[x]=L.filterProps(e);return m(L,K({symbol:de,ref:c,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},x,n,{"onGroup:selected":v}),{default:()=>{var S,f;return[(f=(S=t.default)==null?void 0:S.call(t))!=null?f:e.text,!e.hideSlider&&m("div",{ref:u,class:["v-tab__slider",r.value],style:s.value},null)]}})}),{}}});function ae(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function le(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,currentScrollOffset:s,isHorizontal:a}=e;const l=a?o.clientWidth:o.clientHeight,c=a?o.offsetLeft:o.offsetTop,u=r&&a?n-c-l:c,v=t+s,x=l+u,S=l*.4;return u<=s?s=Math.max(u-S,0):v<=x&&(s=Math.min(s-(v-x-S),n-t)),s}function Je(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,isHorizontal:s}=e;const a=s?o.clientWidth:o.clientHeight,l=s?o.offsetLeft:o.offsetTop,c=r&&s?n-l-a/2-t/2:l+a/2-t/2;return Math.min(n-t,Math.max(0,c))}const Ze=Symbol.for("vuetify:v-slide-group"),fe=X({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:ne,default:"$next"},prevIcon:{type:ne,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...J(),...Z(),...xe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),se=W()({name:"VSlideGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isRtl:n}=ue(),{mobile:r}=Ie(),s=ie(e,e.symbol),a=B(!1),l=B(0),c=B(0),u=B(0),v=y(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:S}=ee(),{resizeRef:f,contentRect:g}=ee(),E=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[0]):-1),P=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[s.selected.value.length-1]):-1);if(Pe){let i=-1;ce(()=>[s.selected.value,S.value,g.value,v.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(S.value&&g.value){const d=v.value?"width":"height";c.value=S.value[d],u.value=g.value[d],a.value=c.value+1<u.value}if(E.value>=0&&f.value){const d=f.value.children[P.value];E.value===0||!a.value?l.value=0:e.centerActive?l.value=Je({selectedElement:d,containerSize:c.value,contentSize:u.value,isRtl:n.value,isHorizontal:v.value}):a.value&&(l.value=le({selectedElement:d,containerSize:c.value,contentSize:u.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:v.value}))}})})}const I=B(!1);let k=0,V=0;function h(i){const d=v.value?"clientX":"clientY";V=(n.value&&v.value?-1:1)*l.value,k=i.touches[0][d],I.value=!0}function b(i){if(!a.value)return;const d=v.value?"clientX":"clientY",z=n.value&&v.value?-1:1;l.value=z*(V+k-i.touches[0][d])}function T(i){const d=u.value-c.value;l.value<0||!a.value?l.value=0:l.value>=d&&(l.value=d),I.value=!1}function w(){!x.value||(x.value[v.value?"scrollLeft":"scrollTop"]=0)}const $=B(!1);function D(i){if($.value=!0,!(!a.value||!f.value)){for(const d of i.composedPath())for(const z of f.value.children)if(z===d){l.value=le({selectedElement:z,containerSize:c.value,contentSize:u.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:v.value});return}}}function R(i){$.value=!1}function j(i){var d;!$.value&&!(i.relatedTarget&&((d=f.value)==null?void 0:d.contains(i.relatedTarget)))&&C()}function Q(i){!f.value||(v.value?i.key==="ArrowRight"?C(n.value?"prev":"next"):i.key==="ArrowLeft"&&C(n.value?"next":"prev"):i.key==="ArrowDown"?C("next"):i.key==="ArrowUp"&&C("prev"),i.key==="Home"?C("first"):i.key==="End"&&C("last"))}function C(i){var d,z,A,O,p;if(!!f.value)if(!i)(d=Re(f.value)[0])==null||d.focus();else if(i==="next"){const M=(z=f.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;M?M.focus():C("first")}else if(i==="prev"){const M=(A=f.value.querySelector(":focus"))==null?void 0:A.previousElementSibling;M?M.focus():C("last")}else i==="first"?(O=f.value.firstElementChild)==null||O.focus():i==="last"&&((p=f.value.lastElementChild)==null||p.focus())}function H(i){const d=l.value+(i==="prev"?-1:1)*c.value;l.value=_e(d,0,u.value-c.value)}const G=y(()=>{let i=l.value>u.value-c.value?-(u.value-c.value)+ae(u.value-c.value-l.value):-l.value;l.value<=0&&(i=ae(-l.value));const d=n.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${d*i}px)`,transition:I.value?"none":"",willChange:I.value?"transform":""}}),q=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),U=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return a.value||Math.abs(l.value)>0;case"mobile":return r.value||a.value||Math.abs(l.value)>0;default:return!r.value&&(a.value||Math.abs(l.value)>0)}}),be=y(()=>Math.abs(l.value)>0),ye=y(()=>u.value>Math.abs(l.value)+c.value);return Y(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":U.value,"v-slide-group--is-overflowing":a.value},e.class],style:e.style,tabindex:$.value||s.selected.value.length?-1:0,onFocus:j},{default:()=>{var i,d,z,A,O;return[U.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!be.value}],onClick:()=>H("prev")},[(d=(i=t.prev)==null?void 0:i.call(t,q.value))!=null?d:m(oe,null,{default:()=>[m(te,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:w},[m("div",{ref:f,class:"v-slide-group__content",style:G.value,onTouchstartPassive:h,onTouchmovePassive:b,onTouchendPassive:T,onFocusin:D,onFocusout:R,onKeydown:Q},[(z=t.default)==null?void 0:z.call(t,q.value)])]),U.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ye.value}],onClick:()=>H("next")},[(O=(A=t.next)==null?void 0:A.call(t,q.value))!=null?O:m(oe,null,{default:()=>[m(te,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:H,scrollOffset:l,focus:C}}});function Qe(e){return e?e.map(o=>typeof o=="string"?{title:o,value:o}:o):[]}const pe=X({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...fe({mandatory:"force"}),...Ve(),...Z()},"VTabs"),bt=W()({name:"VTabs",props:pe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=$e(e,"modelValue"),r=y(()=>Qe(e.items)),{densityClasses:s}=we(e),{backgroundColorClasses:a,backgroundColorStyles:l}=ze(_(e,"bgColor"));return Me({VTab:{color:_(e,"color"),direction:_(e,"direction"),stacked:_(e,"stacked"),fixed:_(e,"fixedTabs"),sliderColor:_(e,"sliderColor"),hideSlider:_(e,"hideSlider")}}),Y(()=>{const[c]=se.filterProps(e);return m(se,K(c,{modelValue:n.value,"onUpdate:modelValue":u=>n.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,a.value,e.class],style:[{"--v-tabs-height":N(e.height)},l.value,e.style],role:"tablist",symbol:de}),{default:()=>[t.default?t.default():r.value.map(u=>m(Ne,K(u,{key:u.title}),null))]})}),{}}});const et=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:r}=e,s=.5,a=16;e.offsetX=t-o,e.offsetY=r-n,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<o-a&&e.left(e),e.right&&t>o+a&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<n-a&&e.up(e),e.down&&r>n+a&&e.down(e))};function tt(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function nt(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),et(o)}function ot(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function at(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>tt(t,o),touchend:t=>nt(t,o),touchmove:t=>ot(t,o)}}function lt(e,o){var l,c,u;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,r=(l=t==null?void 0:t.options)!=null?l:{passive:!0},s=(c=o.instance)==null?void 0:c.$.uid;if(!n||!s)return;const a=at(o.value);n._touchHandlers=(u=n._touchHandlers)!=null?u:Object.create(null),n._touchHandlers[s]=a,re(a).forEach(v=>{n.addEventListener(v,a[v],r)})}function st(e,o){var s,a;const t=(s=o.value)!=null&&s.parent?e.parentElement:e,n=(a=o.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const r=t._touchHandlers[n];re(r).forEach(l=>{t.removeEventListener(l,r[l])}),delete t._touchHandlers[n]}const he={mounted:lt,unmounted:st},it=he,me=Symbol.for("vuetify:v-window"),ge=Symbol.for("vuetify:v-window-group"),ut=X({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...J(),...Z(),...He()},"VWindow"),yt=W()({name:"VWindow",directives:{Touch:he},props:ut(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Ae(e),{isRtl:r}=ue(),{t:s}=Oe(),a=ie(e,ge),l=F(),c=y(()=>r.value?!e.reverse:e.reverse),u=B(!1),v=y(()=>{const h=e.direction==="vertical"?"y":"x",T=(c.value?!u.value:u.value)?"-reverse":"";return`v-window-${h}${T}-transition`}),x=B(0),S=F(void 0),f=y(()=>a.items.value.findIndex(h=>a.selected.value.includes(h.id)));ce(f,(h,b)=>{const T=a.items.value.length,w=T-1;T<=2?u.value=h<b:h===w&&b===0?u.value=!0:h===0&&b===w?u.value=!1:u.value=h<b}),Ye(me,{transition:v,isReversed:u,transitionCount:x,transitionHeight:S,rootRef:l});const g=y(()=>e.continuous||f.value!==0),E=y(()=>e.continuous||f.value!==a.items.value.length-1);function P(){g.value&&a.prev()}function I(){E.value&&a.next()}const k=y(()=>{const h=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:a.prev,ariaLabel:s("$vuetify.carousel.prev")};h.push(g.value?t.prev?t.prev({props:b}):m(L,b,null):m("div",null,null));const T={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:a.next,ariaLabel:s("$vuetify.carousel.next")};return h.push(E.value?t.next?t.next({props:T}):m(L,T,null):m("div",null,null)),h}),V=y(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?P():I()},right:()=>{c.value?I():P()},start:b=>{let{originalEvent:T}=b;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return Y(()=>ve(m(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var h,b;return[m("div",{class:"v-window__container",style:{height:S.value}},[(h=t.default)==null?void 0:h.call(t,{group:a}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[k.value])]),(b=t.additional)==null?void 0:b.call(t,{group:a})]}}),[[Xe("touch"),V.value]])),{group:a}}}),ct=X({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...J(),...Te(),...je()},"VWindowItem"),St=W()({name:"VWindowItem",directives:{Touch:it},props:ct(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=We(me),r=Ce(e,ge),{isBooted:s}=Ue();if(!n||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=B(!1),l=y(()=>s.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function u(){var g;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=N((g=n.rootRef.value)==null?void 0:g.clientHeight)),n.transitionCount.value+=1)}function v(){c()}function x(g){!a.value||Le(()=>{!l.value||!a.value||!n||(n.transitionHeight.value=N(g.clientHeight))})}const S=y(()=>{const g=n.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof g!="string"?n.transition.value:g,onBeforeEnter:u,onAfterEnter:c,onEnterCancelled:v,onBeforeLeave:u,onAfterLeave:c,onLeaveCancelled:v,onEnter:x}:!1}),{hasContent:f}=qe(e,r.isSelected);return Y(()=>m(Be,{transition:S.value,disabled:!s.value},{default:()=>{var g;return[ve(m("div",{class:["v-window-item",r.selectedClass.value,e.class],style:e.style},[f.value&&((g=t.default)==null?void 0:g.call(t))]),[[Ge,r.isSelected.value]])]}})),{groupItem:r}}});export{bt as V,Ne as a,yt as b,St as c};
