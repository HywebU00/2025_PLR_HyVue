import{_ as b,a as g,b as y}from"./icon_userCheck.3a737747.js";import{_ as h,l as x,v,w as a,n as l,aR as i,V as o,b5 as n,a8 as s,q as d}from"./index.f3b302f9.js";import{V as f,a as V,b as e,c as t}from"./VRow.cd4837b9.js";import{V as G}from"./VForm.ee685158.js";import{V as k}from"./VCheckbox.736e4da7.js";import{V as T,a as _,b as j,c as m}from"./VWindowItem.b266209e.js";import{V as w}from"./VCardText.7e40a240.js";const p=""+new URL("Pica.e48a1a11.png",import.meta.url).href,z={data:()=>({tab:null,functionGroupToggle:0,page:1,panel:1,selection:1}),methods:{},mounted(){},components:{}},B=s("h2",null,[s("span",null,"\u4F7F\u7528\u8005\u8A3B\u518A")],-1),C=s("ul",null,[s("li",{class:"active"},[s("div",{class:"icon"},[s("img",{src:b,alt:""})]),s("div",{class:""},[s("span",null,"Step 1"),s("div",{class:""},"\u9078\u64C7\u8EAB\u4EFD \u5EFA\u7ACB\u5E33\u865F")])]),s("li",null,[s("div",{class:"icon"},[s("img",{src:g,alt:""})]),s("div",{class:""},[s("span",null,"Step 2"),s("div",{class:""},"\u586B\u5BEB\u500B\u4EBA\u8CC7\u6599\u55AE\u4F4D")])]),s("li",null,[s("div",{class:"icon"},[s("img",{src:y,alt:""})]),s("div",{class:""},[s("span",null,"Step 3"),s("div",{class:""},"\u8EAB\u5206\u9A57\u8B49 \u958B\u901A\u5E33\u865F")])])],-1),N=s("label",{class:"text-primary",for:""},"\u5E33\u865F",-1),S=s("label",{class:"text-primary",for:""},"\u96FB\u5B50\u90F5\u4EF6",-1),$=s("label",{class:"text-primary",for:""},"\u8EAB\u4EFD",-1),A=s("span",{class:"fromTitle"},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u8ACB\u78BA\u8A8D\u53CA\u586B\u5BEB\u8A73\u7D30\u8CC7\u8A0A ")],-1),I=s("label",{class:"text-primary",for:""},[d("\u4F7F\u7528VAT\u767B\u5165 "),s("span",{class:"d-none d-lg-inline"},[s("br")]),d(" \u5FEB\u901F\u901A\u95DC")],-1),L=s("span",{class:"info text-error"},"\u8ACB\u78BA\u8A8D\u4EE5\u4E0B\u5FC5\u586B\u9805\u76EE(\u7531VAT\u5E36\u56DE\u4E4B\u8A0A\u606F\u7121\u6CD5\u7DE8\u8F2F\uFF0C\u5982\u6709\u554F\u984C\u8ACB\u6D3D\u5BA2\u670D)",-1),P=s("label",{class:"text-primary",for:""},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u516C\u53F8\u5718\u9AD4\u540D\u7A31")],-1),R=s("label",{class:"text-primary",for:""},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u767B\u8A18\u5730\u5740")],-1),U=s("label",{class:"text-primary",for:""},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u806F\u7D61\u5730\u5740")],-1),F=s("label",{class:"text-primary",for:""},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u806F\u7D61\u96FB\u8A71")],-1),W=s("label",{class:"text-primary",for:""},"\u5E02\u5167\u96FB\u8A71",-1),q=s("label",{class:"text-primary",for:""},"\u884C\u52D5\u96FB\u8A71",-1),D=s("span",{class:"d-block my-3 text-info info"},"\u806F\u7D61\u96FB\u8A71\u53EF\u4E8C\u9078\u4E00\u586B\u5BEB",-1),E=s("label",{class:"text-primary",for:""},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u767B\u8A18\u5730\u5740")],-1),H=s("span",{class:"d-block my-3 text-info info"},"\u532F\u6B3E\u5E33\u865F\u9700\u70BA\u672C\u4EBA/\u516C\u53F8\u6236\u982D\uFF0C\u6236\u540D\u9700\u8207\u59D3\u540D\u6216\u516C\u53F8\u3001\u5718\u9AD4\u540D\u76F8\u540C\uFF0C\u5982\u56E0\u5E33\u6236\u540D\u7A31\u4E0D\u7B26\u800C\u5C0E\u81F4\u532F\u6B3E\u932F\u8AA4\uFF0C\u532F\u6B3E\u624B\u7E8C\u8CBB\u65BC\u9996\u6B21\u767C\u751F\u6642\u7531\u672C\u90E8\u8CA0\u64D4\uFF0C\u5F8C\u7E8C\u767C\u751F\u8005\u5247\u7531\u53D7\u6B3E\u4EBA\u81EA\u884C\u8CA0\u64D4\u3002",-1),J=s("span",{class:"fromTitle"},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u8ACB\u9078\u64C7\u8EAB\u4EFD\u9A57\u8B49\u65B9\u5F0F ")],-1),K={class:"tab"},M=s("ul",{class:"infoList"},[s("li",null,"1.\u8ACB\u5C07\u5361\u7247\u63D2\u5165\u8B80\u5361\u6A5F\u5F8C\uFF0C\u9EDE\u9078\u300C\u8B80\u53D6\u5361\u7247\u300D"),s("li",null,"2.\u8ACB\u8F38\u5165PIN\u78BC"),s("li",null,"3.\u9EDE\u9078\u9001\u51FA")],-1),O=s("div",{class:"img"},[s("img",{src:p,alt:""})],-1),Q=s("label",{class:"text-primary",for:""},[s("abbr",{class:"necessary",title:"\u70BA\u5FC5\u586B(\u9078)\u6B04\u4F4D,\u4E0D\u80FD\u70BA\u7A7A\u767D\u3002"},"* "),d(" \u516C\u53F8\u5718\u9AD4\u540D\u7A31")],-1),X=s("ul",{class:"infoList"},[s("li",null,"1.\u8ACB\u5C07\u5361\u7247\u63D2\u5165\u8B80\u5361\u6A5F\u5F8C\uFF0C\u9EDE\u9078\u300C\u8B80\u53D6\u5361\u7247\u300D"),s("li",null,"2.\u8ACB\u8F38\u5165PIN\u78BC"),s("li",null,"3.\u9EDE\u9078\u9001\u51FA")],-1),Y=s("div",{class:"img"},[s("img",{src:p,alt:""})],-1),Z=s("ul",{class:"infoText"},[s("li",null,"\u7D71\u4E00\u7DE8\u865F\uFF1A16541333"),s("li",null,"\u59D3\u540D\uFF1A\u51CC\u7DB2\u6587\u5316")],-1),ll=s("span",{class:"alert text-error"}," \u8ACB\u6CE8\u610F\uFF0C\u9808\u8207\u5E33\u865F\u7684\u7D71\u4E00\u7DE8\u865F\u8207\u516C\u53F8\u5718\u9AD4\u540D\u7A31\u5B8C\u5168\u7B26\u5408\u65B9\u53EF\u9A57\u8B49\u6210\u529F ",-1),al={class:"d-flex justify-center formBtnGrp"};function sl(c,u,el,tl,il,dl){return x(),v(f,{class:"container"},{default:a(()=>[l(V,{items:["\u9996\u9801","\u7BC0\u9EDE","\u7BC0\u9EDE"]}),l(t,null,{default:a(()=>[B,l(e,{class:"stepBar"},{default:a(()=>[C]),_:1}),l(G,null,{default:a(()=>[l(f,null,{default:a(()=>[l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[N]),_:1}),l(e,null,{default:a(()=>[l(i,{variant:"outlined","single-line":"",label:"16541333","hide-details":"",density:"compact"})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[S]),_:1}),l(e,null,{default:a(()=>[l(i,{variant:"outlined","single-line":"",label:"abc@hyweb.com.tw","hide-details":"",density:"compact"})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[$]),_:1}),l(e,null,{default:a(()=>[l(i,{variant:"outlined","single-line":"",label:"\u516C\u53F8\u51FA\u7248\u8005\u66A8\u5275\u4F5C\u8005","hide-details":"",density:"compact"})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,null,{default:a(()=>[A]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[I]),_:1}),l(e,null,{default:a(()=>[l(t,null,{default:a(()=>[l(e,{cols:"12"},{default:a(()=>[l(o,{text:"VAT\u5E33\u865F\u767B\u5165\u6210\u529F",variant:"flat",size:"x-large",class:"bg-primary btn elevation-0 mx-2"})]),_:1}),l(e,{cols:"12"},{default:a(()=>[L]),_:1})]),_:1})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[P]),_:1}),l(e,null,{default:a(()=>[l(i,{variant:"outlined","single-line":"",label:"\u516C\u53F8\u51FA\u7248\u8005\u66A8\u5275\u4F5C\u8005",messages:"\u8ACB\u8F38\u5165\u60A8\u7684\u771F\u5BE6\u59D3\u540D\uFF0C\u6B32\u767B\u8A18\u4F5C\u54C1\u8005\u9700\u8981\u9032\u884C\u8EAB\u4EFD\u9A57\u8B49\uFF0C\u8ACB\u52D9\u5FC5\u8F38\u5165\u6B63\u78BA\u59D3\u540D",density:"compact"})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[R]),_:1}),l(e,{cols:"6",md:"4",lg:"2"},{default:a(()=>[l(n,{variant:"outlined",density:"compact",label:"",class:"h-100","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),_:1}),l(e,{cols:"6",md:"4",lg:"2"},{default:a(()=>[l(n,{variant:"outlined",density:"compact",label:"",class:"h-100","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),_:1}),l(e,{cols:"12",lg:"6"},{default:a(()=>[l(i,{density:"compact",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","single-line":"","hide-details":"auto",variant:"outlined"})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[U]),_:1}),l(e,{cols:"6",md:"4",lg:"2"},{default:a(()=>[l(n,{variant:"outlined",density:"compact",label:"",class:"h-100","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),_:1}),l(e,{cols:"6",md:"4",lg:"2"},{default:a(()=>[l(n,{variant:"outlined",density:"compact",label:"",class:"h-100","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),_:1}),l(e,{cols:"12",lg:"6"},{default:a(()=>[l(i,{density:"compact",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","single-line":"","hide-details":"auto",variant:"outlined"})]),_:1}),l(e,{cols:"2",class:"d-none d-lg-block"}),l(e,{class:"ml-3 pa-0"},{default:a(()=>[l(k,{label:"\u540C\u767B\u8A18\u5730\u5740","hide-details":"auto"})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[F]),_:1}),l(e,{cols:"12",lg:"10"},{default:a(()=>[l(t,{class:"formGrp"},{default:a(()=>[l(e,{cols:"12",class:"pa-lg-0 pl-lg-1 pb-0 pl-2"},{default:a(()=>[W]),_:1}),l(e,{cols:"5",lg:"3"},{default:a(()=>[l(i,{variant:"outlined","single-line":"",label:"","hide-details":"",density:"compact"})]),_:1}),l(e,{cols:"7",lg:"9"},{default:a(()=>[l(i,{density:"compact","single-line":"",variant:"outlined",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto"})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{cols:"12",class:"pa-lg-0 pl-lg-1 pb-0 pl-2"},{default:a(()=>[q]),_:1}),l(e,{cols:"5",lg:"3"},{default:a(()=>[l(i,{density:"compact",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",variant:"outlined","single-line":""})]),_:1}),l(e,{cols:"7",lg:"9"},{default:a(()=>[l(i,{density:"compact",variant:"outlined",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto","single-line":""})]),_:1})]),_:1})]),_:1}),l(e,{cols:"2",class:"d-none d-lg-block"}),l(e,{class:"ml-3 pa-0"},{default:a(()=>[D]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:a(()=>[E]),_:1}),l(e,null,{default:a(()=>[l(t,null,{default:a(()=>[l(e,null,{default:a(()=>[l(i,{density:"compact",label:"\u51CC\u7DB2\u51FA\u7248\u80A1\u4EFD\u6709\u9650\u516C\u53F8","single-line":"","hide-details":"auto",variant:"outlined"})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{cols:"6",md:"4",lg:"2"},{default:a(()=>[l(n,{variant:"outlined",density:"compact",label:"",class:"h-100","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),_:1}),l(e,{cols:"6",md:"4",lg:"2"},{default:a(()=>[l(n,{variant:"outlined",density:"compact",label:"",class:"h-100","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),_:1}),l(e,{cols:"12",lg:"8"},{default:a(()=>[l(i,{density:"compact",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","single-line":"","hide-details":"auto",variant:"outlined"})]),_:1}),l(e,{class:"ml-3 pa-0"},{default:a(()=>[H]),_:1})]),_:1})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,null,{default:a(()=>[J]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(e,null,{default:a(()=>[s("div",K,[l(T,{modelValue:c.tab,"onUpdate:modelValue":u[0]||(u[0]=r=>c.tab=r),"align-tabs":"start"},{default:a(()=>[l(_,{value:"one"},{default:a(()=>[d("\u5DE5\u5546\u6191\u8B49\u9A57\u8B49")]),_:1}),l(_,{value:"two"},{default:a(()=>[d("\u4E0A\u50B3\u8B49\u660E\u6587\u4EF6")]),_:1})]),_:1},8,["modelValue"]),l(w,null,{default:a(()=>[l(j,{modelValue:c.tab,"onUpdate:modelValue":u[1]||(u[1]=r=>c.tab=r)},{default:a(()=>[l(m,{value:"one"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{cols:"12",md:"6"},{default:a(()=>[M,O]),_:1}),l(e,{class:"btnGrp",cols:"12",md:"6"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,null,{default:a(()=>[l(o,{size:"x-large",class:"bg-secondary btn elevation-0 mx-2",text:"\u8B80\u53D6\u5361\u7247",block:"",variant:"flat"})]),_:1})]),_:1}),l(t,{class:"mx-0"},{default:a(()=>[l(e,{class:"pb-0 d-flex",cols:"12"},{default:a(()=>[Q]),_:1}),l(e,null,{default:a(()=>[l(i,{variant:"outlined","single-line":"",label:"\u516C\u53F8\u51FA\u7248\u8005\u66A8\u5275\u4F5C\u8005",messages:"",density:"compact","hide-details":""})]),_:1})]),_:1}),l(t,{class:""},{default:a(()=>[l(e,null,{default:a(()=>[l(o,{text:"\u9001\u51FA",variant:"flat",size:"x-large",block:"",class:"bg-primary btn elevation-0 mx-2"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(m,{value:"two"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{cols:"12",md:"6"},{default:a(()=>[X,Y]),_:1}),l(e,{class:"btnGrp",cols:"12",md:"6"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,null,{default:a(()=>[l(o,{size:"x-large",class:"bg-secondary btn elevation-0 mx-2",text:"\u91CD\u65B0\u8B80\u53D6\u5361\u7247",block:"",variant:"flat"})]),_:1})]),_:1}),l(t,{class:"mx-0"},{default:a(()=>[l(e,{class:"pb-0 d-flex",cols:"12"},{default:a(()=>[Z,ll]),_:1})]),_:1}),l(t,{class:""},{default:a(()=>[l(e,null,{default:a(()=>[l(o,{text:"\u9A57\u8B49\u8EAB\u4EFD",variant:"flat",size:"x-large",block:"",class:"bg-primary btn elevation-0 mx-2"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1})]),_:1})]),_:1}),s("div",al,[l(o,{text:"\u5132\u5B58\u4E26\u7E7C\u7E8C\u9A57\u8B49\u8EAB\u4EFD",variant:"flat",size:"x-large",class:"bg-primary btn elevation-0 mx-2"}),l(o,{size:"x-large",class:"bg-secondary btn elevation-0 mx-2",text:"\u91CD\u65B0\u8A2D\u5B9A",variant:"flat"})])]),_:1})]),_:1})]),_:1})}const ml=h(z,[["render",sl]]);export{ml as default};
