import{c as D}from"./createSimpleFunctional-BxkIgS7G.js";import{r as I,s as L,i as $,d as p,A as E,B as F,e as R,z as j,v as w,a as O,f as H,C as M,D as N,g as q,j as G,x as J,m as K,y as Q,l as U,V as d}from"./index-BzWcjpbC.js";import{v as W,p as X,E as Y,c as o,x as Z,A as ee,ao as ae,m as t,z as te,ag as le,H as ne}from"./index-PzMJY4qj.js";import{V as se}from"./VBtn-CHakrgOT.js";const oe=D("v-alert-title"),re=["success","info","warning","error"],ie=X({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:le,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...K(),...J(),...G(),...q(),...N(),...M(),...H(),...O(),...te(),...w({variant:"flat"})},"VAlert"),me=W()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=Y(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=Z(e),{colorClasses:k,colorStyles:b,variantClasses:V}=I(y),{densityClasses:P}=L(e),{dimensionStyles:C}=$(e),{elevationClasses:g}=p(e),{locationStyles:x}=E(e),{positionClasses:S}=F(e),{roundedClasses:_}=R(e),{textColorClasses:A,textColorStyles:B}=j(ee(e,"borderColor")),{t:T}=ae(),i=o(()=>({"aria-label":T(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),h=!!(a.title||e.title),z=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[b.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[Q(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",A.value],style:B.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(U,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[h&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),z&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(se,ne({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{me as V};
