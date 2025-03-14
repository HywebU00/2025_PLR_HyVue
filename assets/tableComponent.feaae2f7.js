import{d as N}from"./dataTableServer.cb502215.js";import{t as k,l as c,v as z,w as l,a8 as e,ah as o,n as t,q as s,V as d,W as w,a9 as T,_ as U,ai as u,aJ as g,m,ab as _,a5 as y,aK as $,aL as v,bv as G,N as I}from"./index.f3b302f9.js";import{V as f}from"./VCard.8b9acadd.js";import{_ as D}from"./06.312e17cd.js";import{V as b,a as L,c as p,b as r}from"./VRow.cd4837b9.js";import{V as S}from"./VPagination.563659bb.js";import{V as B}from"./VCheckbox.736e4da7.js";import"./VCardText.7e40a240.js";const q={class:""},F={class:""},J={class:""},K={class:"btnGroup d-flex"},M={class:"d-flex justify-center align-center"},O={data(){return{customItemsPerPageText:"\u6BCF\u9801\u986F\u793A\u9805\u76EE",headers:[{title:"\u5E33\u865F",align:"start",sortable:!1,key:"name"},{title:"\u8077\u7A31",key:"title",align:"start"},{title:"\u55AE\u4F4D",key:"class",align:"start"},{title:"\u52D5\u4F5C",key:"action",align:"center",width:"150"},{title:"\u72C0\u614B\u8A2D\u5B9A",key:"status",align:"end",width:"30"}]}}},R=Object.assign(O,{__name:"dataTable",setup(n){const i=[{name:"\u5E33\u865F1",title:"\u8077\u7A311",class:"\u55AE\u4F4D1",action:"\u52D5\u4F5C1",status:"\u72C0\u614B\u8A2D\u5B9A"},{name:"\u5E33\u865F2",title:"\u8077\u7A312",class:"\u55AE\u4F4D2",action:"\u52D5\u4F5C2",status:"\u72C0\u614B\u8A2D\u5B9A"},{name:"\u5E33\u865F3",title:"\u8077\u7A313",class:"\u55AE\u4F4D3",action:"\u52D5\u4F5C3",status:"\u72C0\u614B\u8A2D\u5B9A"}];return(x,P)=>{const C=k("v-data-table");return c(),z(C,{headers:x.headers,items:i,"items-per-page-text":x.customItemsPerPageText},{item:l(({item:h})=>[e("tr",null,[e("td",q,o(h.name),1),e("td",F,o(h.class),1),e("td",J,o(h.title),1),e("td",null,[e("div",K,[t(d,{elevation:"0",color:"primary",size:"small",class:"mr-1"},{default:l(()=>[s("\u522A\u9664")]),_:1}),t(d,{elevation:"0",color:"primary",variant:"outlined",size:"small"},{default:l(()=>[s("\u65B0\u589E")]),_:1})])]),e("td",M,[t(T,{transition:"slide-y-transition"},{activator:l(({props:V})=>[t(d,w({icon:"mdi-cog",class:"ma-2"},V,{size:"x-small"}),null,16)]),default:l(()=>[t(f,{class:"pa-2"},{default:l(()=>[t(d,{size:"small",variant:"outlined",class:"my-1",block:"",color:"primary","prepend-icon":"mdi-delete"},{default:l(()=>[s("\u522A\u9664")]),_:1}),t(d,{size:"small",variant:"outlined",class:"my-1",block:"","prepend-icon":"mdi-pencil",color:"primary"},{default:l(()=>[s("\u7DE8\u8F2F")]),_:1})]),_:1})]),_:1})])])]),_:1},8,["headers","items-per-page-text"])}}}),W={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}]}),methods:{},components:{dataTableServer:N,dataTable:R}},A=e("h2",null,"\u7279\u6B8A\u7BC4\u4F8B\u9801\u9762 - \u7DB2\u7AD9\u7E3D\u89BD",-1),H={class:""},Q=e("thead",{class:"bg-thead"},[e("tr",null,[e("th",{class:"text-left",style:{width:"50px"}}),e("th",{class:"text-center",style:{width:"50px"}},"\u5E8F\u865F"),e("th",{class:"text-left"},"\u7F6E\u9802"),e("th",{class:"text-center",style:{"min-width":"400px"}},"\u6A19\u984C"),e("th",{class:"text-left"},"\u8CC7\u6599\u5206\u985E"),e("th",{class:"text-left"},"\u4E0A\u7DDA\u65E5\u671F"),e("th",{class:"text-left"},"\u4E0B\u7DDA\u65E5\u671F"),e("th",{class:"text-left"},"\u8A9E\u7CFB"),e("th",{class:"text-left"},"\u72C0\u614B"),e("th",{class:"text-left",style:{width:"100px"}},"\u52D5\u4F5C")])],-1),X={class:"text-center"},Y={class:"btnGroup d-flex"},Z={class:"text-center pb-5"},tt={class:""},lt=e("thead",{class:"bg-thead"},[e("tr",null,[e("th",{class:"text-left",style:{width:"50px"}}),e("th",{class:"text-center",style:{width:"50px"}},"\u5E8F\u865F"),e("th",{class:"text-left"},"\u5716\u7247"),e("th",{class:"text-center",style:{"min-width":"400px"}},"\u6A19\u984C"),e("th",{class:"text-left"},"\u8CC7\u6599\u5206\u985E"),e("th",{class:"text-left"},"\u72C0\u614B"),e("th",{class:"text-left",style:{width:"100px"}},"\u52D5\u4F5C")])],-1),et={class:"text-center"},at={class:"text-center pb-5"},st={class:""},dt={class:""};function ot(n,i,x,P,C,h){const V=k("dataTableServer"),j=k("dataTable");return c(),z(b,{class:"container"},{default:l(()=>[t(L,{items:["\u9996\u9801","\u7BC0\u9EDE","\u7BC0\u9EDE"]}),t(u,{class:"pt-1 mb-3"}),A,t(u,{class:"mt-3 mb-4"}),t(f,{class:"mb-5"},{default:l(()=>[e("div",H,[t(b,{class:"container"},{default:l(()=>[t(p,{class:"mb-1"},{default:l(()=>[t(r,{cols:"12",class:"py-0"},{default:l(()=>[e("div",null,[t(g,{modelValue:n.selection,"onUpdate:modelValue":i[0]||(i[0]=a=>n.selection=a)},{default:l(()=>[(c(),m(y,null,_(6,a=>t(v,{key:a,color:"primary",link:"",label:""},{default:l(()=>[s(" \u6A19\u7C64 ")]),_:2},1024)),64))]),_:1},8,["modelValue"])]),t(u,{class:"my-2"})]),_:1}),t(r,{class:"pb-0 justify-space-between d-flex",cols:"12"},{default:l(()=>[t(T,{transition:"slide-y-transition"},{activator:l(({props:a})=>[t(d,w({variant:"flat",color:"primary ",size:"small","prepend-icon":"mdi-cog-outline"},a),{default:l(()=>[s("\u6279\u6B21\u8655\u7406")]),_:2},1040)]),default:l(()=>[t(f,{class:"pa-2"},{default:l(()=>[t(d,{size:"small",variant:"outlined",class:"my-1",block:"",color:"primary","prepend-icon":"mdi-delete"},{default:l(()=>[s("\u522A\u9664")]),_:1}),t(d,{size:"small",variant:"outlined",class:"my-1",block:"","prepend-icon":"mdi-pencil",color:"primary"},{default:l(()=>[s("\u7DE8\u8F2F")]),_:1}),t(d,{size:"small",variant:"outlined",class:"my-1",block:"",color:"primary","prepend-icon":"mdi-delete"},{default:l(()=>[s("\u8A2D\u5B9A")]),_:1})]),_:1})]),_:1}),t(d,{variant:"flat",color:"primary ",size:"small","prepend-icon":"mdi-plus"},{default:l(()=>[s("\u65B0\u589E")]),_:1})]),_:1})]),_:1}),t(p,{class:"mt-0"},{default:l(()=>[t(r,null,{default:l(()=>[t($,null,{default:l(()=>[Q,e("tbody",null,[(c(!0),m(y,null,_(n.data,a=>(c(),m("tr",{key:a.name},[e("td",null,[t(B,{value:"1",label:"","hide-details":"",type:"checkbox"})]),e("td",X,o(a.id),1),e("td",null,[a.top==!0?(c(),z(v,{key:0,label:"",color:"primary"},{default:l(()=>[s("\u7F6E\u9802")]),_:1})):G("",!0)]),e("td",null,o(a.title),1),e("td",null,o(a.class),1),e("td",null,o(a.dateStart),1),e("td",null,o(a.dateEnd),1),e("td",null,o(a.lang),1),e("td",null,o(a.status),1),e("td",null,[e("div",Y,[t(d,{size:"x-small",icon:"mdi-delete",variant:"text"}),t(d,{size:"x-small",icon:"mdi-pencil",variant:"text"})])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e("div",Z,[t(S,{modelValue:n.page,"onUpdate:modelValue":i[1]||(i[1]=a=>n.page=a),length:5,rounded:"0","active-color":"primary",color:"primary",size:"small"},null,8,["modelValue"])])])]),_:1}),t(u,{class:"border-opacity-100 my-8",color:"#ccc"},{default:l(()=>[s("\u5206\u9694\u7DDA")]),_:1}),t(f,{class:"mb-5"},{default:l(()=>[e("div",tt,[t(b,{class:"container"},{default:l(()=>[t(p,{class:"mb-1"},{default:l(()=>[t(r,{cols:"12",class:"py-0"},{default:l(()=>[e("div",null,[t(g,{modelValue:n.selection,"onUpdate:modelValue":i[2]||(i[2]=a=>n.selection=a)},{default:l(()=>[(c(),m(y,null,_(6,a=>t(v,{key:a,color:"primary",link:"",label:""},{default:l(()=>[s(" \u6A19\u7C64 ")]),_:2},1024)),64))]),_:1},8,["modelValue"])]),t(u,{class:"my-2"})]),_:1}),t(r,{class:"pb-0 justify-end d-flex",cols:"12"},{default:l(()=>[t(d,{variant:"flat",color:"primary ",size:"small","prepend-icon":"mdi-plus"},{default:l(()=>[s("\u65B0\u589E")]),_:1})]),_:1})]),_:1}),t(p,{class:"mt-0"},{default:l(()=>[t(r,null,{default:l(()=>[t($,null,{default:l(()=>[lt,e("tbody",null,[(c(!0),m(y,null,_(n.data,a=>(c(),m("tr",{key:a.name},[e("td",null,[t(B,{value:"1",label:"","hide-details":"",type:"checkbox"})]),e("td",et,o(a.id),1),e("td",null,[t(I,{width:60,"aspect-ratio":"1/1",cover:"",src:D})]),e("td",null,o(a.title),1),e("td",null,o(a.class),1),e("td",null,o(a.status),1),e("td",null,[t(T,{transition:"slide-y-transition"},{activator:l(({props:E})=>[t(d,w({icon:"mdi-chevron-down",class:"ma-2"},E,{size:"x-small"}),null,16)]),default:l(()=>[t(f,{class:"pa-2"},{default:l(()=>[t(d,{size:"small",variant:"outlined",class:"my-1",block:"",color:"primary","prepend-icon":"mdi-delete"},{default:l(()=>[s("\u522A\u9664")]),_:1}),t(d,{size:"small",variant:"outlined",class:"my-1",block:"","prepend-icon":"mdi-pencil",color:"primary"},{default:l(()=>[s("\u7DE8\u8F2F")]),_:1})]),_:1})]),_:1})])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e("div",at,[t(S,{modelValue:n.page,"onUpdate:modelValue":i[3]||(i[3]=a=>n.page=a),length:5,rounded:"0","active-color":"primary",color:"primary",size:"small"},null,8,["modelValue"])])])]),_:1}),t(u,{class:"border-opacity-100 my-8",color:"#ccc"},{default:l(()=>[s(" dataTableServer\u6A23\u5F0F")]),_:1}),t(f,{class:"mb-5"},{default:l(()=>[e("div",st,[t(b,{class:"container"},{default:l(()=>[t(p,{class:"mb-1"},{default:l(()=>[t(r,{cols:"12",class:"py-0"},{default:l(()=>[e("div",null,[t(g,{modelValue:n.selection,"onUpdate:modelValue":i[4]||(i[4]=a=>n.selection=a)},{default:l(()=>[(c(),m(y,null,_(6,a=>t(v,{key:a,color:"primary",link:"",label:""},{default:l(()=>[s(" \u6A19\u7C64 ")]),_:2},1024)),64))]),_:1},8,["modelValue"])]),t(u,{class:"my-2"})]),_:1}),t(r,{class:"pb-0 justify-end d-flex",cols:"12"},{default:l(()=>[t(d,{variant:"flat",color:"primary ",size:"small","prepend-icon":"mdi-plus"},{default:l(()=>[s("\u65B0\u589E")]),_:1})]),_:1})]),_:1}),t(p,{class:"mt-0"},{default:l(()=>[t(r,null,{default:l(()=>[t(V)]),_:1})]),_:1})]),_:1})])]),_:1}),t(u,{class:"border-opacity-100 my-8",color:"#ccc"},{default:l(()=>[s(" dataTable\u6A23\u5F0F ")]),_:1}),t(f,null,{default:l(()=>[e("div",dt,[t(b,null,{default:l(()=>[t(p,{class:"mt-0"},{default:l(()=>[t(r,null,{default:l(()=>[t(j)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})}const _t=U(W,[["render",ot]]);export{_t as default};
