import{m as f,u as b,k as P,V as y,b as H,s as N,c as Y,v as Z,w as q,x as G,d as J,y as K,a as Q,l as U,R as W,f as X,z as ee,n as ae,A as te,g as ne,B as de,C as ie,D as se,h as le,E as re,P as ce,F as ue}from"./index.c23348a7.js";import{x as p,B as oe,n,p as S,Y as o,v as ve,y as me,c as I,Z as ke,$ as ge}from"./index.0fed8dcb.js";import{c as x}from"./createSimpleFunctional.47eb7c01.js";import{V as h}from"./VAvatar.03f6cd19.js";import{V as ye}from"./VCardText.8a842f6e.js";import{V as fe}from"./VImg.d8a613d6.js";const be=p()({name:"VCardActions",props:f(),setup(e,s){let{slots:t}=s;return oe({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),pe=x("v-card-subtitle"),Ce=x("v-card-title"),Ve=S({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:String,title:String,...f(),...P()},"VCardItem"),Ae=p()({name:"VCardItem",props:Ve(),setup(e,s){let{slots:t}=s;return b(()=>{var r;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),m=!!(l||t.append),k=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(h,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[k&&n(Ce,{key:"title"},{default:()=>{var d,i;return[(i=(d=t.title)==null?void 0:d.call(t))!=null?i:e.title]}}),g&&n(pe,{key:"subtitle"},{default:()=>{var d,i;return[(i=(d=t.subtitle)==null?void 0:d.call(t))!=null?i:e.subtitle]}}),(r=t.default)==null?void 0:r.call(t)]),m&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(y,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):l&&n(h,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ie=S({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...H(),...f(),...P(),...N(),...Y(),...Z(),...q(),...G(),...J(),...K(),...Q(),...ve(),...U({variant:"elevated"})},"VCard"),Te=p()({name:"VCard",directives:{Ripple:W},props:Ie(),setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:v}=me(e),{borderClasses:l}=X(e),{colorClasses:m,colorStyles:k,variantClasses:g}=ee(e),{densityClasses:r}=ae(e),{dimensionStyles:d}=te(e),{elevationClasses:i}=ne(e),{loaderClasses:B}=de(e),{locationStyles:D}=ie(e),{positionClasses:T}=se(e),{roundedClasses:L}=le(e),c=re(e,t),_=I(()=>e.link!==!1&&c.isLink.value),u=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return b(()=>{const R=_.value?"a":e.tag,E=!!(a.title||e.title),F=!!(a.subtitle||e.subtitle),w=E||F,M=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),$=!!(a.image||e.image),j=w||O||M,z=!!(a.text||e.text);return ke(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u.value},v.value,l.value,m.value,r.value,i.value,B.value,T.value,L.value,g.value,e.class],style:[k.value,d.value,D.value,e.style],href:c.href.value,onClick:u.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[$&&n("div",{key:"image",class:"v-card__image"},[a.image?n(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(fe,{key:"image-img",cover:!0,src:e.image},null)]),n(ce,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),j&&n(Ae,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&n(ye,{key:"text"},{default:()=>{var V,A;return[(A=(V=a.text)==null?void 0:V.call(a))!=null?A:e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(be,null,{default:a.actions}),ue(u.value,"v-card")]}}),[[ge("ripple"),u.value&&e.ripple]])}),{}}});export{Te as V,be as a,Ae as b,Ce as c,pe as d};
