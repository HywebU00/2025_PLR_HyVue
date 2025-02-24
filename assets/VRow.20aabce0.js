import{m,u as S,z as M,a as V,F as z,r as K,l as x,d as Y,e as J,o as W,h as q,k as H,i as Q}from"./VImg.43d0d8d8.js";import{p as v,y as g,n as c,c as C,Y as X,B as f,C as Z,L as p,t as ee,A as te,aA as B,az as P,aw as A}from"./index.803d499b.js";const ae=v({divider:[Number,String],...m()},"VBreadcrumbsDivider"),ne=g()({name:"VBreadcrumbsDivider",props:ae(),setup(e,n){let{slots:t}=n;return S(()=>{var s,a;return c("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[(a=(s=t==null?void 0:t.default)==null?void 0:s.call(t))!=null?a:e.divider])}),{}}}),se=v({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...m(),...M(),...V({tag:"li"})},"VBreadcrumbsItem"),le=g()({name:"VBreadcrumbsItem",props:se(),setup(e,n){let{slots:t,attrs:s}=n;const a=z(e,s),l=C(()=>{var i;return e.active||((i=a.isActive)==null?void 0:i.value)}),u=C(()=>l.value?e.activeColor:e.color),{textColorClasses:o,textColorStyles:r}=K(u);return S(()=>c(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":l.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:l.value&&e.activeClass},o.value,e.class],style:[r.value,e.style],"aria-current":l.value?"page":void 0},{default:()=>{var i,k,d,b;return[a.isLink.value?c("a",{class:"v-breadcrumbs-item--link",href:a.href.value,"aria-current":l.value?"page":void 0,onClick:a.navigate},[(b=(d=t.default)==null?void 0:d.call(t))!=null?b:e.title]):(k=(i=t.default)==null?void 0:i.call(t))!=null?k:e.title]}})),{}}}),re=v({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:X,items:{type:Array,default:()=>[]},...m(),...x(),...Y(),...V({tag:"ul"})},"VBreadcrumbs"),Ve=g()({name:"VBreadcrumbs",props:re(),setup(e,n){let{slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:a}=J(f(e,"bgColor")),{densityClasses:l}=W(e),{roundedClasses:u}=q(e);Z({VBreadcrumbsDivider:{divider:f(e,"divider")},VBreadcrumbsItem:{activeClass:f(e,"activeClass"),activeColor:f(e,"activeColor"),color:f(e,"color"),disabled:f(e,"disabled")}});const o=C(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return S(()=>{const r=!!(t.prepend||e.icon);return c(e.tag,{class:["v-breadcrumbs",s.value,l.value,u.value,e.class],style:[a.value,e.style]},{default:()=>{var i;return[r&&c("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?c(Q,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):c(H,{key:"prepend-icon",start:!0,icon:e.icon},null)]),o.value.map((k,d,b)=>{let{item:L,raw:j}=k;return c(p,null,[c(le,ee({key:L.title,disabled:d>=b.length-1},L),{default:t.title?()=>{var y;return(y=t.title)==null?void 0:y.call(t,{item:j,index:d})}:void 0}),d<b.length-1&&c(ne,null,{default:t.divider?()=>{var y;return(y=t.divider)==null?void 0:y.call(t,{item:j,index:d})}:void 0})])}),(i=t.default)==null?void 0:i.call(t)]}})}),{}}});const ie=v({fluid:{type:Boolean,default:!1},...m(),...V()},"VContainer"),ke=g()({name:"VContainer",props:ie(),setup(e,n){let{slots:t}=n;const{rtlClasses:s}=te();return S(()=>c(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),I=(()=>B.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),R=(()=>B.reduce((e,n)=>{const t="offset"+P(n);return e[t]={type:[String,Number],default:null},e},{}))(),E=(()=>B.reduce((e,n)=>{const t="order"+P(n);return e[t]={type:[String,Number],default:null},e},{}))(),w={col:Object.keys(I),offset:Object.keys(R),order:Object.keys(E)};function ce(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const oe=["auto","start","end","center","baseline","stretch"],ue=v({cols:{type:[Boolean,String,Number],default:!1},...I,offset:{type:[String,Number],default:null},...R,order:{type:[String,Number],default:null},...E,alignSelf:{type:String,default:null,validator:e=>oe.includes(e)},...m(),...V()},"VCol"),Se=g()({name:"VCol",props:ue(),setup(e,n){let{slots:t}=n;const s=C(()=>{const a=[];let l;for(l in w)w[l].forEach(o=>{const r=e[o],i=ce(l,o,r);i&&a.push(i)});const u=a.some(o=>o.startsWith("v-col-"));return a.push({"v-col":!u||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return A(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),N=["start","end","center"],D=["space-between","space-around","space-evenly"];function h(e,n){return B.reduce((t,s)=>{const a=e+P(s);return t[a]=n(),t},{})}const de=[...N,"baseline","stretch"],_=e=>de.includes(e),G=h("align",()=>({type:String,default:null,validator:_})),fe=[...N,...D],O=e=>fe.includes(e),T=h("justify",()=>({type:String,default:null,validator:O})),me=[...N,...D,"stretch"],F=e=>me.includes(e),U=h("alignContent",()=>({type:String,default:null,validator:F})),$={align:Object.keys(G),justify:Object.keys(T),alignContent:Object.keys(U)},ve={align:"align",justify:"justify",alignContent:"align-content"};function ge(e,n,t){let s=ve[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const be=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_},...G,justify:{type:String,default:null,validator:O},...T,alignContent:{type:String,default:null,validator:F},...U,...m(),...V()},"VRow"),Be=g()({name:"VRow",props:be(),setup(e,n){let{slots:t}=n;const s=C(()=>{const a=[];let l;for(l in $)$[l].forEach(u=>{const o=e[u],r=ge(l,u,o);r&&a.push(r)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return A(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}});export{ke as V,Ve as a,Se as b,Be as c};
