import{f as k,g as p,d as C,h,e as c,V as A,i as F}from"./VInput.c6b01e4f.js";import{p as f,y as V,n as a,t as n,a9 as O,Y as m,d as U,c as x,F as L,aF as N,L as _}from"./index.a945d85c.js";import{u as y}from"./index.7bc00485.js";const D=f({...k({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),z=V()({name:"VRadio",props:D(),setup(e,l){let{slots:s}=l;return y(()=>a(p,n(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const M=f({height:{type:[Number,String],default:"auto"},...C(),...O(h(),["multiple"]),trueIcon:{type:m,default:"$radioOn"},falseIcon:{type:m,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),B=V()({name:"VRadioGroup",inheritAttrs:!1,props:M(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:t}=l;const v=U(),i=x(()=>e.id||`radio-group-${v}`),o=L(e,"modelValue");return y(()=>{const[b,I]=N(s),[g,T]=c.filterProps(e),[R,Y]=p.filterProps(e),r=t.label?t.label({label:e.label,props:{for:i.value}}):e.label;return a(c,n({class:["v-radio-group",e.class],style:e.style},b,g,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,id:i.value}),{...t,default:u=>{let{id:d,messagesId:P,isDisabled:G,isReadonly:S}=u;return a(_,null,[r&&a(A,{id:d.value},{default:()=>[r]}),a(F,n(R,{id:d.value,"aria-describedby":P.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:S.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:o.value,"onUpdate:modelValue":$=>o.value=$}),t)])}})}),{}}});export{B as V,z as a};
