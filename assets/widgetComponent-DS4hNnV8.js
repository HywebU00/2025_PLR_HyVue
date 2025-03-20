import{_ as ye,l as B,O as d,U as Me,a1 as re,t as G,q as S,R as je,M as I,S as Le,V as Ne,Q as ae,u as ge,n as _,m as e,v as Ue,p as ze,ao as Ke,r as q,s as M,E as te,c as F,aj as qe,D as H,L as de,ap as He,H as P,al as Qe,aA as ce,aB as fe,av as We,aC as Je,aD as Xe,w as a}from"./index-5Bd6KcWI.js";import{l as L,p as Ye,u as Ze,q as $e,V as el}from"./index-C3SjwJ2A.js";import{V as W}from"./VBtn-utBO7MJ-.js";import{V as me,a as ll,b as h,c as s}from"./VRow-Wpobei_C.js";import{V as tl}from"./VCard-tNkv9I44.js";import{V as al}from"./VForm-PYTTa-MC.js";import{V as A,m as nl}from"./VTextField-B-CAtx5K.js";import{u as sl,m as ul,a as ol}from"./VSelect-Ch9J0Nhq.js";import{u as il,m as rl}from"./filter-4oN7F2qa.js";import{d as dl}from"./VInput-DuDNqFKH.js";import{f as cl}from"./forwardRefs-B931MWyl.js";import{u as fl,V as ml,a as ve}from"./VList-Bqmd7xpu.js";import{V as vl}from"./VMenu-DllX6AqE.js";import{V as pl}from"./VCheckboxBtn-B-i6qTN9.js";import{V as yl}from"./VAvatar-BphtOsIa.js";import{a as gl}from"./VChip-BORc87j9.js";import{V as pe,a as Q}from"./VRadioGroup-Bl4iTOHZ.js";import{V as hl}from"./VTextarea-Bj541Pva.js";import"./createSimpleFunctional-D5ig2i7H.js";import"./VCardText-DdULDfg5.js";import"./VImg-DQurc6ac.js";import"./index-ChruMJsS.js";import"./ssrBoot-DenGAWSG.js";import"./VDivider-Bgs1xue9.js";import"./scopeId-C-WohLir.js";const bl={name:"TreeItem",props:{model:Object},data(){return{isOpen:!0}},computed:{isFolder(){return this.model.children&&this.model.children.length}},methods:{toggle(){this.isFolder&&(this.isOpen=!this.isOpen)},changeType(){this.isFolder||(this.model.children=[],this.addChild(),this.isOpen=!0)}}},xl={class:"d-flex treeTitle"},Vl={key:0,class:"iconList"},_l={key:0};function kl(t,n,o,E,x,v){const k=ge("tree-item",!0);return _(),B("li",null,[d("div",{class:Le({bold:v.isFolder}),onClick:n[0]||(n[0]=(...V)=>v.toggle&&v.toggle(...V)),onDblclick:n[1]||(n[1]=(...V)=>v.changeType&&v.changeType(...V))},[d("div",xl,[v.isFolder?(_(),B("span",Vl,[x.isOpen?(_(),G(L,{key:0,class:"mr-2",icon:"mdi-folder-open",color:"primary"})):(_(),G(L,{key:1,class:"mr-2",icon:"mdi-folder",color:"primary"}))])):(_(),G(L,{key:1,class:"mr-2",icon:"mdi-file-document",color:"info"})),S(" "+je(o.model.name)+" ",1),v.isFolder?(_(),B(I,{key:2},[x.isOpen?(_(),G(W,{key:0,density:"compact",variant:"text",icon:"mdi-chevron-up"})):(_(),G(W,{key:1,density:"compact",variant:"text",icon:"mdi-chevron-down"}))],64)):re("",!0)])],34),v.isFolder?Me((_(),B("ul",_l,[(_(!0),B(I,null,ae(o.model.children,V=>(_(),B("div",{class:"d-flex",key:V},[e(k,{class:"item",model:V},null,8,["model"])]))),128))],512)),[[Ne,x.isOpen]]):re("",!0)])}const wl=ye(bl,[["render",kl]]);function Cl(t,n,o){if(n==null)return t;if(Array.isArray(n))throw new Error("Multiple matches is not implemented");return typeof n=="number"&&~n?e(I,null,[e("span",{class:"v-autocomplete__unmask"},[t.substr(0,n)]),e("span",{class:"v-autocomplete__mask"},[t.substr(n,o)]),e("span",{class:"v-autocomplete__unmask"},[t.substr(n+o)])]):t}const Sl=ze({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...rl({filterKeys:["title"]}),...ul(),...Qe(nl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$e({transition:!1})},"VAutocomplete"),j=Ue()({name:"VAutocomplete",props:Sl(),emits:{"update:focused":t=>!0,"update:search":t=>!0,"update:modelValue":t=>!0,"update:menu":t=>!0},setup(t,n){let{slots:o}=n;const{t:E}=Ke(),x=q(),v=M(!1),k=M(!0),V=M(!1),ne=q(),J=q(),X=te(t,"menu"),p=F({get:()=>X.value,set:l=>{var u;X.value&&!l&&((u=ne.value)!=null&&u.ΨopenChildren.size)||(X.value=l)}}),f=M(-1),he=F(()=>{var l;return(l=x.value)==null?void 0:l.color}),se=F(()=>p.value?t.closeText:t.openText),{items:ue,transformIn:be,transformOut:xe}=fl(t),{textColorClasses:Ve,textColorStyles:_e}=Ye(he),y=te(t,"search",""),r=te(t,"modelValue",[],l=>be(l===null?[null]:qe(l)),l=>{const u=xe(l);return t.multiple?u:u[0]??null}),ke=F(()=>typeof t.counterValue=="function"?t.counterValue(r.value):typeof t.counterValue=="number"?t.counterValue:r.value.length),N=dl(t),{filteredItems:Y,getMatches:we}=il(t,ue,()=>k.value?"":y.value),D=F(()=>t.hideSelected?Y.value.filter(l=>!r.value.some(u=>u.value===l.value)):Y.value),U=F(()=>!!(t.chips||o.chip)),O=F(()=>U.value||!!o.selection),Ce=F(()=>r.value.map(l=>l.props.value)),Z=F(()=>{var u;return(t.autoSelectFirst===!0||t.autoSelectFirst==="exact"&&y.value===((u=D.value[0])==null?void 0:u.title))&&D.value.length>0&&!k.value&&!V.value}),$=F(()=>t.hideNoData&&!D.value.length||N.isReadonly.value||N.isDisabled.value),ee=q(),Se=sl(ee,x);function Fe(l){t.openOnClear&&(p.value=!0),y.value=""}function De(){$.value||(p.value=!0)}function Ae(l){$.value||(v.value&&(l.preventDefault(),l.stopPropagation()),p.value=!p.value)}function Be(l){var u;l.key!==" "&&ce(l)&&((u=x.value)==null||u.focus())}function Ie(l){var i,c,w;if(N.isReadonly.value)return;const u=x.value.selectionStart,m=r.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(p.value=!0),["Escape"].includes(l.key)&&(p.value=!1),Z.value&&["Enter","Tab"].includes(l.key)&&!r.value.some(g=>{let{value:b}=g;return b===D.value[0].value})&&T(D.value[0]),l.key==="ArrowDown"&&Z.value&&((i=ee.value)==null||i.focus("next")),["Backspace","Delete"].includes(l.key)){if(!t.multiple&&O.value&&r.value.length>0&&!y.value)return T(r.value[0],!1);if(~f.value){l.preventDefault();const g=f.value;T(r.value[f.value],!1),f.value=g>=m-1?m-2:g}else l.key==="Backspace"&&!y.value&&(f.value=m-1);return}if(t.multiple)if(l.key==="ArrowLeft"){if(f.value<0&&u>0)return;const g=f.value>-1?f.value-1:m-1;r.value[g]?f.value=g:(f.value=-1,x.value.setSelectionRange((c=y.value)==null?void 0:c.length,(w=y.value)==null?void 0:w.length))}else if(l.key==="ArrowRight"){if(f.value<0)return;const g=f.value+1;r.value[g]?f.value=g:(f.value=-1,x.value.setSelectionRange(0,0))}else~f.value&&ce(l)&&(f.value=-1)}function Te(l){if(fe(x.value,":autofill")||fe(x.value,":-webkit-autofill")){const u=ue.value.find(m=>m.title===l.target.value);u&&T(u)}}function Re(){var l;t.eager&&((l=J.value)==null||l.calculateVisibleItems())}function Pe(){var l;v.value&&(k.value=!0,(l=x.value)==null||l.focus())}function Ge(l){v.value=!0,setTimeout(()=>{V.value=!0})}function Ee(l){V.value=!1}function Oe(l){(l==null||l===""&&!t.multiple&&!O.value)&&(r.value=[])}const le=M(!1);function T(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(t.multiple){const m=r.value.findIndex(c=>(t.valueComparator||We)(c.value,l.value)),i=u??!~m;if(~m){const c=i?[...r.value,l]:[...r.value];c.splice(m,1),r.value=c}else i&&(r.value=[...r.value,l]);t.clearOnSelect&&(y.value="")}else{const m=u!==!1;r.value=m?[l]:[],y.value=m&&!O.value?l.title:"",de(()=>{p.value=!1,k.value=!0})}}return H(v,(l,u)=>{var m;l!==u&&(l?(le.value=!0,y.value=t.multiple||O.value?"":String(((m=r.value.at(-1))==null?void 0:m.props.title)??""),k.value=!0,de(()=>le.value=!1)):(!t.multiple&&y.value==null&&(r.value=[]),p.value=!1,r.value.some(i=>{let{title:c}=i;return c===y.value})||(y.value=""),f.value=-1))}),H(y,l=>{!v.value||le.value||(l&&(p.value=!0),k.value=!l)}),H(p,()=>{if(!t.hideSelected&&p.value&&r.value.length){const l=D.value.findIndex(u=>r.value.some(m=>u.value===m.value));He&&window.requestAnimationFrame(()=>{var u;l>=0&&((u=J.value)==null||u.scrollToIndex(l))})}}),H(()=>t.items,(l,u)=>{p.value||v.value&&!u.length&&l.length&&(p.value=!0)}),Ze(()=>{const l=!!(!t.hideNoData||D.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),u=r.value.length>0,m=A.filterProps(t);return e(A,P({ref:x},m,{modelValue:y.value,"onUpdate:modelValue":[i=>y.value=i,Oe],focused:v.value,"onUpdate:focused":i=>v.value=i,validationValue:r.externalValue,counterValue:ke.value,dirty:u,onChange:Te,class:["v-autocomplete",`v-autocomplete--${t.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":p.value,"v-autocomplete--chips":!!t.chips,"v-autocomplete--selection-slot":!!O.value,"v-autocomplete--selecting-index":f.value>-1},t.class],style:t.style,readonly:N.isReadonly.value,placeholder:u?void 0:t.placeholder,"onClick:clear":Fe,"onMousedown:control":De,onKeydown:Ie}),{...o,default:()=>e(I,null,[e(vl,P({ref:ne,modelValue:p.value,"onUpdate:modelValue":i=>p.value=i,activator:"parent",contentClass:"v-autocomplete__content",disabled:$.value,eager:t.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:t.transition,onAfterEnter:Re,onAfterLeave:Pe},t.menuProps),{default:()=>[l&&e(ml,P({ref:ee,selected:Ce.value,selectStrategy:t.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:Be,onFocusin:Ge,onFocusout:Ee,tabindex:"-1","aria-live":"polite",color:t.itemColor??t.color},Se,t.listProps),{default:()=>{var i,c,w;return[(i=o["prepend-item"])==null?void 0:i.call(o),!D.value.length&&!t.hideNoData&&(((c=o["no-data"])==null?void 0:c.call(o))??e(ve,{key:"no-data",title:E(t.noDataText)},null)),e(ol,{ref:J,renderless:!0,items:D.value},{default:g=>{var ie;let{item:b,index:R,itemRef:C}=g;const oe=P(b.props,{ref:C,key:b.value,active:Z.value&&R===0?!0:void 0,onClick:()=>T(b,null)});return((ie=o.item)==null?void 0:ie.call(o,{item:b,index:R,props:oe}))??e(ve,P(oe,{role:"option"}),{prepend:z=>{let{isSelected:K}=z;return e(I,null,[t.multiple&&!t.hideSelected?e(pl,{key:b.value,modelValue:K,ripple:!1,tabindex:"-1"},null):void 0,b.props.prependAvatar&&e(yl,{image:b.props.prependAvatar},null),b.props.prependIcon&&e(L,{icon:b.props.prependIcon},null)])},title:()=>{var z,K;return k.value?b.title:Cl(b.title,(z=we(b))==null?void 0:z.title,((K=y.value)==null?void 0:K.length)??0)}})}}),(w=o["append-item"])==null?void 0:w.call(o)]}})]}),r.value.map((i,c)=>{function w(C){C.stopPropagation(),C.preventDefault(),T(i,!1)}const g={"onClick:close":w,onKeydown(C){C.key!=="Enter"&&C.key!==" "||(C.preventDefault(),C.stopPropagation(),w(C))},onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},b=U.value?!!o.chip:!!o.selection,R=b?Xe(U.value?o.chip({item:i,index:c,props:g}):o.selection({item:i,index:c})):void 0;if(!(b&&!R))return e("div",{key:i.value,class:["v-autocomplete__selection",c===f.value&&["v-autocomplete__selection--selected",Ve.value]],style:c===f.value?_e.value:{}},[U.value?o.chip?e(el,{key:"chip-defaults",defaults:{VChip:{closable:t.closableChips,size:"small",text:i.title}}},{default:()=>[R]}):e(gl,P({key:"chip",closable:t.closableChips,size:"small",text:i.title,disabled:i.props.disabled},g),null):R??e("span",{class:"v-autocomplete__selection-text"},[i.title,t.multiple&&c<r.value.length-1&&e("span",{class:"v-autocomplete__selection-comma"},[S(",")])])])})]),"append-inner":function(){var g;for(var i=arguments.length,c=new Array(i),w=0;w<i;w++)c[w]=arguments[w];return e(I,null,[(g=o["append-inner"])==null?void 0:g.call(o,...c),t.menuIcon?e(L,{class:"v-autocomplete__menu-icon",icon:t.menuIcon,onMousedown:Ae,onClick:Je,"aria-label":E(se.value),title:E(se.value),tabindex:"-1"},null):void 0])}})}),cl({isFocused:v,isPristine:k,menu:p,search:y,filteredItems:Y,select:T},x)}}),Fl={name:"分類Ａ",children:[{name:"分類Ａ-1"},{name:"分類Ａ-2"},{name:"分類Ａ-3",children:[{name:"分類Ａ-3.1"},{name:"分類Ａ-3.2"},{name:"分類Ａ-3.3"},{name:"分類Ａ-3.4"}]}]},Dl={name:"分類B",children:[{name:"分類B-1"},{name:"分類B-2"},{name:"分類B-3",children:[{name:"分類B-3.1"},{name:"分類B-3.2"},{name:"分類B-3.3"},{name:"分類B-3.4"}]}]},Al={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,data:[{id:"1",top:!0,title:"大更沒於正時節直只們來壓算有先，求化化看雨的",class:"最新消息",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"繁體中文",status:"待審"},{id:"2",top:!0,title:"大更沒於正時節直只們來壓算有先，求化化看雨的",class:"最新消息",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"繁體中文",status:"待審"},{id:"3",top:!1,title:"大更沒於正時節直只們來壓算有先，求化化看雨的",class:"最新消息",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"繁體中文",status:"待審"}],treeData:Fl,treeData2:Dl}),methods:{},components:{TreeItem:wl}},Bl={class:"d-flex justify-center formBtnGrp"};function Il(t,n,o,E,x,v){const k=ge("tree-item");return _(),G(me,{class:"container"},{default:a(()=>[e(ll,{items:["首頁","節點","節點"]}),e(h,null,{default:a(()=>[n[14]||(n[14]=d("h2",null,[d("span",null,"使用者註冊")],-1)),e(s,{class:"px-1",md:"3",cols:"12"},{default:a(()=>[e(tl,{class:"treeviewBlock pa-2"},{default:a(()=>[d("ul",null,[e(k,{class:"item",model:t.treeData},null,8,["model"]),e(k,{class:"item",model:t.treeData2},null,8,["model"])])]),_:1})]),_:1}),e(s,{class:"px-4",md:"9",cols:"12"},{default:a(()=>[e(al,null,{default:a(()=>[e(me,{class:"container"},{default:a(()=>[e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[0]||(n[0]=[d("label",{for:"type"},[S("族名 "),d("abbr",{class:"necessary",title:"為必填(選)欄位,不能為空白。"},"*")],-1)])),_:1}),e(s,null,{default:a(()=>[e(A,{variant:"outlined","single-line":"","hide-details":"auto","error-messages":"測試測試",density:"compact"})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[1]||(n[1]=[d("label",{for:"type"},[S("族別 "),d("abbr",{class:"necessary",title:"為必填(選)欄位,不能為空白。"},"*")],-1)])),_:1}),e(s,null,{default:a(()=>[e(j,{id:"type",color:"secondary","hide-details":"auto","single-line":"",variant:"outlined",density:"compact",items:["布農族","阿美族","卑南族"]})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[2]||(n[2]=[d("label",{for:"mail"},[S("Email "),d("abbr",{class:"necessary",title:"為必填(選)欄位,不能為空白。"},"*")],-1)])),_:1}),e(s,null,{default:a(()=>[e(A,{variant:"outlined","single-line":"","hide-details":"auto",id:"mail",density:"compact"})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[3]||(n[3]=[d("label",{for:"type"},[S("行動電話 "),d("abbr",{class:"necessary",title:"為必填(選)欄位,不能為空白。"},"*")],-1)])),_:1}),e(s,null,{default:a(()=>[e(A,{variant:"outlined","single-line":"",density:"compact","hide-details":"auto"})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[4]||(n[4]=[d("label",{for:"list"},[S("多選選單 "),d("abbr",{class:"necessary",title:"為必填(選)欄位,不能為空白。"},"*")],-1)])),_:1}),e(s,null,{default:a(()=>[e(pe,{inline:"",label:"",color:"primary","hide-details":"auto"},{default:a(()=>[e(Q,{label:"公司團體",value:"1"}),e(Q,{label:"個人",value:"2"})]),_:1})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[5]||(n[5]=[d("label",{for:""},"交辦事項 ",-1)])),_:1}),e(s,null,{default:a(()=>[e(A,{variant:"outlined","hide-details":"auto","single-line":"",density:"compact"})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[6]||(n[6]=[d("label",{for:""},"文字輸入 ",-1)])),_:1}),e(s,null,{default:a(()=>[e(hl,{placeholder:"請輸入文字",variant:"outlined","hide-details":"auto",density:"compact","auto-grow":"",rows:"6","row-height":"30",shaped:"",class:"mb-2"})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:"pb-0 d-flex justify-lg-end"},{default:a(()=>n[7]||(n[7]=[d("label",{for:""},"單選 ",-1)])),_:1}),e(s,null,{default:a(()=>[e(pe,{inline:"",color:"info","hide-details":"auto"},{default:a(()=>[e(Q,{label:"是",value:"true"}),e(Q,{label:"否",value:"false"})]),_:1})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:""},{default:a(()=>n[8]||(n[8]=[d("label",{class:"pb-0 d-flex justify-lg-end",for:""},"住址",-1)])),_:1}),e(s,null,{default:a(()=>[e(h,null,{default:a(()=>[e(s,{cols:"6",md:"3"},{default:a(()=>[e(j,{color:"secondary",variant:"outlined","single-line":"","hide-details":"auto",density:"compact",placeholder:"輸入地址",items:["台北市","新北市","基隆市"]})]),_:1}),e(s,{cols:"6",md:"3"},{default:a(()=>[e(j,{variant:"outlined","single-line":"","hide-details":"auto",color:"secondary",density:"compact",placeholder:"輸入地址",items:["台北市","新北市","基隆市"]})]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(A,{variant:"outlined","single-line":"","hide-details":"auto",density:"compact"})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp"},{default:a(()=>[e(s,{cols:"12",md:"2",class:""},{default:a(()=>n[9]||(n[9]=[d("label",{class:"pb-0 d-flex justify-lg-end",for:""},"兩欄欄位",-1)])),_:1}),e(s,null,{default:a(()=>[e(h,null,{default:a(()=>[e(s,{cols:"12",md:"6"},{default:a(()=>[e(j,{color:"secondary",variant:"outlined","single-line":"","hide-details":"auto",density:"compact",placeholder:"輸入地址",items:["台北市","新北市","基隆市"]})]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(j,{variant:"outlined","single-line":"",color:"secondary",density:"compact","hide-details":"auto",placeholder:"輸入地址",items:["台北市","新北市","基隆市"]})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{class:"d-flex formGrp formGrp_2"},{default:a(()=>[e(s,{cols:"12",md:"6"},{default:a(()=>[e(h,null,{default:a(()=>[e(s,{class:"bg-thead formGrpTitle mb-5 mx-3"},{default:a(()=>n[10]||(n[10]=[S("應領數")])),_:1})]),_:1}),(_(),B(I,null,ae(3,V=>e(h,{class:"d-flex formGrp",key:V},{default:a(()=>[e(s,{cols:"12",md:"3",class:""},{default:a(()=>n[11]||(n[11]=[d("label",{for:"type"},[S("欄位一 "),d("abbr",{class:"necessary",title:"為必填(選)欄位,不能為空白。"},"*")],-1)])),_:1}),e(s,null,{default:a(()=>[e(A,{variant:"outlined","hide-details":"auto","single-line":"",density:"compact"})]),_:1})]),_:2},1024)),64))]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(h,null,{default:a(()=>[e(s,{class:"bg-thead formGrpTitle mb-5 mx-3"},{default:a(()=>n[12]||(n[12]=[S("扣領數")])),_:1})]),_:1}),(_(),B(I,null,ae(3,V=>e(h,{class:"d-flex formGrp",key:V},{default:a(()=>[e(s,{cols:"12",md:"3",class:""},{default:a(()=>n[13]||(n[13]=[d("label",{for:"type"},[S("欄位一 "),d("abbr",{class:"necessary",title:"為必填(選)欄位,不能為空白。"},"*")],-1)])),_:1}),e(s,null,{default:a(()=>[e(A,{variant:"outlined","single-line":"",density:"compact","hide-details":"auto"})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1}),d("div",Bl,[e(W,{text:"確定註冊",variant:"flat",size:"x-large",class:"bg-primary btn elevation-0 mx-2"}),e(W,{size:"x-large",class:"bg-secondary btn elevation-0 mx-2",text:"重新設定",variant:"flat"})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const at=ye(Al,[["render",Il]]);export{at as default};
