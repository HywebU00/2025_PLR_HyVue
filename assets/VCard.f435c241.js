import{m as f,u as b,k as S,V as y,b as H,s as N,c as Y,v as Z,w as q,x as G,d as J,y as K,a as Q,l as U,R as W,f as X,z as ee,n as ae,A as te,g as ne,B as de,C as ie,D as se,h as le,E as ce,P as re,F as ue}from"./index.7bc00485.js";import{y as C,C as oe,n,p as x,Y as o,x as ve,z as me,c as h,Z as ke,$ as ge}from"./index.a945d85c.js";import{c as p}from"./createSimpleFunctional.cff037cd.js";import{V as P}from"./VAvatar.20500593.js";import{V as ye}from"./VImg.22d536b4.js";const fe=C()({name:"VCardActions",props:f(),setup(e,s){let{slots:t}=s;return oe({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),be=p("v-card-subtitle"),Ce=p("v-card-title"),pe=x({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:String,title:String,...f(),...S()},"VCardItem"),Ve=C()({name:"VCardItem",props:pe(),setup(e,s){let{slots:t}=s;return b(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),m=!!(l||t.append),k=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(P,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[k&&n(Ce,{key:"title"},{default:()=>{var d,i;return[(i=(d=t.title)==null?void 0:d.call(t))!=null?i:e.title]}}),g&&n(be,{key:"subtitle"},{default:()=>{var d,i;return[(i=(d=t.subtitle)==null?void 0:d.call(t))!=null?i:e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),m&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(y,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):l&&n(P,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ae=p("v-card-text"),Ie=x({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...H(),...f(),...S(),...N(),...Y(),...Z(),...q(),...G(),...J(),...K(),...Q(),...ve(),...U({variant:"elevated"})},"VCard"),De=C()({name:"VCard",directives:{Ripple:W},props:Ie(),setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:v}=me(e),{borderClasses:l}=X(e),{colorClasses:m,colorStyles:k,variantClasses:g}=ee(e),{densityClasses:c}=ae(e),{dimensionStyles:d}=te(e),{elevationClasses:i}=ne(e),{loaderClasses:B}=de(e),{locationStyles:D}=ie(e),{positionClasses:T}=se(e),{roundedClasses:L}=le(e),r=ce(e,t),_=h(()=>e.link!==!1&&r.isLink.value),u=h(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return b(()=>{const R=_.value?"a":e.tag,E=!!(a.title||e.title),F=!!(a.subtitle||e.subtitle),w=E||F,z=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),O=!!(a.image||e.image),$=w||M||z,j=!!(a.text||e.text);return ke(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u.value},v.value,l.value,m.value,c.value,i.value,B.value,T.value,L.value,g.value,e.class],style:[k.value,d.value,D.value,e.style],href:r.href.value,onClick:u.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var V;return[O&&n("div",{key:"image",class:"v-card__image"},[a.image?n(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ye,{key:"image-img",cover:!0,src:e.image},null)]),n(re,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),$&&n(Ve,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),j&&n(Ae,{key:"text"},{default:()=>{var A,I;return[(I=(A=a.text)==null?void 0:A.call(a))!=null?I:e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&n(fe,null,{default:a.actions}),ue(u.value,"v-card")]}}),[[ge("ripple"),u.value&&e.ripple]])}),{}}});export{De as V,fe as a,Ve as b,Ce as c,be as d,Ae as e};
