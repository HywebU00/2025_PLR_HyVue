import{p as w,s as j,c as I,$ as i,G as L,aj as v,ay as O}from"./index-5Bd6KcWI.js";const S=(t,c,e)=>t==null||c==null?-1:t.toString().toLocaleLowerCase().indexOf(c.toString().toLocaleLowerCase()),A=w({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function x(t,c,e){var g;const f=[],s=(e==null?void 0:e.default)??S,y=e!=null&&e.filterKeys?v(e.filterKeys):!1,m=Object.keys((e==null?void 0:e.customKeyFilter)??{}).length;if(!(t!=null&&t.length))return f;e:for(let r=0;r<t.length;r++){const[a,M=a]=v(t[r]),h={},u={};let l=-1;if((c||m>0)&&!(e!=null&&e.noFilter)){if(typeof a=="object"){const K=y||Object.keys(M);for(const n of K){const b=O(M,n),k=(g=e==null?void 0:e.customKeyFilter)==null?void 0:g[n];if(l=k?k(b,c,a):s(b,c,a),l!==-1&&l!==!1)k?h[n]=l:u[n]=l;else if((e==null?void 0:e.filterMode)==="every")continue e}}else l=s(a,c,a),l!==-1&&l!==!1&&(u.title=l);const d=Object.keys(u).length,F=Object.keys(h).length;if(!d&&!F||(e==null?void 0:e.filterMode)==="union"&&F!==m&&!d||(e==null?void 0:e.filterMode)==="intersection"&&(F!==m||!d))continue}f.push({index:r,matches:{...u,...h}})}return f}function C(t,c,e,f){const s=j([]),y=j(new Map),m=I(()=>f!=null&&f.transform?i(c).map(r=>[r,f.transform(r)]):i(c));L(()=>{const r=typeof e=="function"?e():i(e),a=typeof r!="string"&&typeof r!="number"?"":String(r),M=x(m.value,a,{customKeyFilter:{...t.customKeyFilter,...i(f==null?void 0:f.customKeyFilter)},default:t.customFilter,filterKeys:t.filterKeys,filterMode:t.filterMode,noFilter:t.noFilter}),h=i(c),u=[],l=new Map;M.forEach(d=>{let{index:F,matches:K}=d;const n=h[F];u.push(n),l.set(n.value,K)}),s.value=u,y.value=l});function g(r){return y.value.get(r.value)}return{filteredItems:s,filteredMatches:y,getMatches:g}}export{A as m,C as u};
