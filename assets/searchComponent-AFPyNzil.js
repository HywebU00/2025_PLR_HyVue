import{_ as k,t as w,w as e,n as _,O as s,q as n,m as l,u as B,U as P,V as G}from"./index-DwEr7Let.js";import{V as S}from"./VDataTableServer-BAPcuSbw.js";import{V as i}from"./VBtn-BjEHOAzx.js";import{l as y}from"./index-D3N2UtV5.js";import{V as C}from"./index-Yk99g-NO.js";import{V,a as j,b as m,c as o}from"./VRow-MQaNUakL.js";import{V as N}from"./VSelect-BoTxN4Mx.js";import{V as U}from"./VCard-DIHCtxa9.js";import{V as z}from"./VForm-DeRuk-TT.js";import{V as c}from"./VTextField-D2OEqK2w.js";import"./VPagination-D5aewMeE.js";import"./VCheckboxBtn-CznappFC.js";import"./VInput-CU2OCdcu.js";import"./VChip-BNYTUwT9.js";import"./VAvatar-BRUsNzjW.js";import"./VImg-CyWWH2-x.js";import"./VTable-CrPIBgNF.js";import"./filter-CymZF5xq.js";import"./VDivider-Cm2nfwhw.js";import"./forwardRefs-B931MWyl.js";import"./VList-DXzLa3sW.js";import"./ssrBoot-7kTSErjG.js";import"./createSimpleFunctional-Cb4dQTMC.js";import"./VMenu-DhxW33hp.js";import"./scopeId-Bzhy7B2t.js";import"./VCardText-yULoW1hW.js";const E=[{name:{ISBN:"9789573311478",book:"",class:"大新",iron:"操作",status:"審核中",author:[{name:"王小明",function:"15%"},{name:"陳小美",function:"15%"}]}}],F={async fetch({page:a,itemsPerPage:t,sortBy:d}){return new Promise(p=>{setTimeout(()=>{const u=(a-1)*t,f=u+t,r=E.slice();if(d.length){const v=d[0].key,I=d[0].order;r.sort((T,$)=>{const b=T[v],x=$[v];return I==="desc"?x-b:b-x})}const g=r.slice(u,f);p({items:g,total:r.length})},500)})}},D={data:()=>({itemsPerPage:5,headers:[{title:"已登記著作",key:"name",align:"start",sortable:!1},{title:"著作人",key:"author",align:"start",sortable:!1},{title:"補償金酬比例",key:"function",align:"center",sortable:!1,width:100},{title:"操作",key:"iron",align:"start",sortable:!1,width:150},{title:"狀態",key:"status",align:"start",sortable:!1}],customItemsPerPageText:"每頁顯示項目",serverItems:[],loading:!0,totalItems:0}),methods:{loadItems({page:a,itemsPerPage:t,sortBy:d}){this.loading=!0,F.fetch({page:a,itemsPerPage:t,sortBy:d}).then(({items:p,total:u})=>{this.serverItems=p,this.totalItems=u,this.loading=!1})}},computed:{}},O={rowspan:"2"},h={class:"d-md-flex justify-space-between"},q={class:""},A={rowspan:"2"},K={class:"btnGroup d-flex"},R={rowspan:"2",class:""},H={class:"d-md-flex justify-space-between"},J={class:""},L={rowspan:"2"},M={class:"btnGroup d-flex"};function Q(a,t,d,p,u,f){return _(),w(S,{"items-per-page":a.itemsPerPage,"onUpdate:itemsPerPage":t[0]||(t[0]=r=>a.itemsPerPage=r),headers:a.headers,"items-length":a.totalItems,items:a.serverItems,loading:a.loading,"item-value":"name",class:"dataTableServer bookTable checkTable",color:"primary","items-per-page-text":a.customItemsPerPageText,"onUpdate:options":f.loadItems},{item:e(({item:r})=>[s("tr",null,[s("td",O,[s("div",h,[t[1]||(t[1]=s("div",{class:""},[s("div",{class:""},[s("span",{class:"title"},"ISBN:"),n("789573311478")]),s("div",{class:""},[s("span",{class:"title"},"書名:"),n("和小星說童話")]),s("div",{class:""},[s("span",{class:"title"},"出版社:"),n(" 大新 ")]),s("div",{class:"tag"},"累積借閱次數：101次")],-1)),s("div",q,[l(i,{elevation:"0",class:"mt-2 mt-md-0 iconBtn",rounded:"md",variant:"outlined"},{default:e(()=>[l(y,{icon:"mdi-delete"})]),_:1})])])]),t[4]||(t[4]=s("td",{class:""},"王小明",-1)),t[5]||(t[5]=s("td",null,"85%",-1)),s("td",A,[s("div",K,[l(i,{elevation:"0",color:"primary",class:"mr-1"},{default:e(()=>t[2]||(t[2]=[n("審核紀錄")])),_:1}),l(i,{elevation:"0",color:"primary",variant:"outlined"},{default:e(()=>t[3]||(t[3]=[n("調整補償酬金比例")])),_:1})])]),t[6]||(t[6]=s("td",{rowspan:"2",class:""},"無更改",-1))]),t[13]||(t[13]=s("tr",null,[s("td",null,"史瑞家"),s("td",null,"85%")],-1)),s("tr",null,[s("td",R,[s("div",H,[t[7]||(t[7]=s("div",{class:""},[s("div",{class:""},[s("span",{class:"title"},"ISBN:"),n("789573311478")]),s("div",{class:""},[s("span",{class:"title"},"書名:"),n("和小星說童話")]),s("div",{class:""},[s("span",{class:"title"},"出版社:"),n(" 大新 ")]),s("div",{class:"tag"},"累積借閱次數：101次")],-1)),s("div",J,[l(i,{elevation:"0",class:"mt-2 mt-md-0 iconBtn",rounded:"md",variant:"outlined"},{default:e(()=>[l(y,{icon:"mdi-delete"})]),_:1})])])]),t[10]||(t[10]=s("td",{class:""},"王小明",-1)),t[11]||(t[11]=s("td",null,"85%",-1)),s("td",L,[s("div",M,[l(i,{elevation:"0",color:"primary",class:"mr-1"},{default:e(()=>t[8]||(t[8]=[n("審核紀錄")])),_:1}),l(i,{elevation:"0",color:"primary",variant:"outlined"},{default:e(()=>t[9]||(t[9]=[n("調整補償酬金比例")])),_:1})])]),t[12]||(t[12]=s("td",{rowspan:"2",class:""},"審核中",-1))]),t[14]||(t[14]=s("tr",null,[s("td",null,"史瑞家"),s("td",null,"85%")],-1))]),_:1},8,["items-per-page","headers","items-length","items","loading","items-per-page-text","onUpdate:options"])}const W=k(D,[["render",Q]]),X={data:()=>({tab:null,expand:!1,functionGroupToggle:0,page:1,panel:1,selection:1}),methods:{},mounted(){},components:{checkTable:W}},Y={class:"ml-auto"},Z={class:"pa-2"},tt={class:"d-flex justify-center formBtnGrp mt-3"},st={class:"ml-auto mt-sm-0 mt-2 titleBtnGrp"};function lt(a,t,d,p,u,f){const r=B("checkTable");return _(),w(V,{class:"container"},{default:e(()=>[l(j,{items:["首頁","節點","節點"]}),l(m,null,{default:e(()=>[t[12]||(t[12]=s("h2",null,[s("span",null,"補償酬金調整設定")],-1)),l(o,{class:"d-flex align-center",cols:"12"},{default:e(()=>t[1]||(t[1]=[s("h3",{class:"mx-2 h3"},"查詢條件",-1)])),_:1}),l(o,{class:"d-block align-center d-sm-flex"},{default:e(()=>[l(i,{class:"mb-2 showExpandBtn",color:"primary","prepend-icon":"mdi-magnify",size:"large",onClick:t[0]||(t[0]=g=>a.expand=!a.expand)},{default:e(()=>t[2]||(t[2]=[n(" 搜尋條件 ")])),_:1}),s("div",Y,[l(N,{class:"ml-auto filterSelect",label:"下拉式選單",density:"compact",variant:"outlined","single-line":"","hide-details":"auto",items:["選項ㄧ","選項二","選項三"]})])]),_:1}),l(o,{cols:"12"},{default:e(()=>[l(C,null,{default:e(()=>[P(s("div",null,[l(U,{class:"mb-6 showExpandCard"},{default:e(()=>[s("div",Z,[l(z,null,{default:e(()=>[l(V,null,{default:e(()=>[l(m,{class:"formGrp"},{default:e(()=>[l(o,null,{default:e(()=>t[3]||(t[3]=[s("span",{class:"fromTitle"}," 查詢 ",-1)])),_:1})]),_:1}),l(m,{class:"formGrp"},{default:e(()=>[l(o,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:e(()=>t[4]||(t[4]=[s("label",{class:"text-primary",for:""},"ISBN",-1)])),_:1}),l(o,null,{default:e(()=>[l(c,{variant:"outlined","single-line":"",label:"","hide-details":"",density:"compact"})]),_:1})]),_:1}),l(m,{class:"formGrp"},{default:e(()=>[l(o,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:e(()=>t[5]||(t[5]=[s("label",{class:"text-primary",for:""},"書名",-1)])),_:1}),l(o,null,{default:e(()=>[l(c,{variant:"outlined","single-line":"",label:"","hide-details":"",density:"compact"})]),_:1})]),_:1}),l(m,{class:"formGrp"},{default:e(()=>[l(o,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:e(()=>t[6]||(t[6]=[s("label",{class:"text-primary",for:""},"著作人",-1)])),_:1}),l(o,null,{default:e(()=>[l(c,{variant:"outlined","single-line":"",label:"","hide-details":"",density:"compact"})]),_:1})]),_:1}),l(m,{class:"formGrp"},{default:e(()=>[l(o,{class:"pb-0 d-flex justify-lg-end",cols:"12",lg:"2"},{default:e(()=>t[7]||(t[7]=[s("label",{class:"text-primary",for:""},"審核狀態",-1)])),_:1}),l(o,null,{default:e(()=>[l(c,{variant:"outlined","single-line":"",label:"","hide-details":"",density:"compact"})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(o,null,{default:e(()=>[s("div",tt,[l(i,{text:"搜尋",variant:"flat",class:"bg-primary elevation-0 mx-1",size:"large"}),l(i,{class:"bg-secondary elevation-0 mx-1",size:"large",text:"重設",variant:"flat"})])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})],512),[[G,a.expand]])]),_:1})]),_:1}),l(o,{class:"d-block align-center d-sm-flex pb-0",cols:"12"},{default:e(()=>[t[11]||(t[11]=s("h4",{class:"mx-2 h4"},"已登記作品清單",-1)),s("div",st,[l(i,{class:"mx-1",color:"secondary"},{default:e(()=>t[8]||(t[8]=[n(" 編輯報表 ")])),_:1}),l(i,{class:"mx-1",color:"primary"},{default:e(()=>t[9]||(t[9]=[n(" 匯出報表 ")])),_:1}),l(i,{class:"mx-1",color:"info"},{default:e(()=>t[10]||(t[10]=[n(" 編輯報表 ")])),_:1})])]),_:1}),l(o,null,{default:e(()=>[l(r)]),_:1})]),_:1})]),_:1})}const Gt=k(X,[["render",lt]]);export{Gt as default};
