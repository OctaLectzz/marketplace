import{Q as B}from"./QAjaxBar.355128ec.js";import{aR as S,r as l,aS as q,m as u,x as _,q as o,n as f,p as m,aD as y,z as e,O as g,aQ as k,aP as x,aE as D,D as E}from"./index.30dd2348.js";import{Q as K}from"./QSkeleton.01e1d850.js";import{Q as w}from"./QPage.b9e58bdc.js";import{u as C}from"./category-store.917ac677.js";import{_ as L}from"./ProductsView.7842c4bf.js";import"./format.b9446fb2.js";import"./axios.66ae61ea.js";import"./QImg.3cf10b4b.js";const R=e("div",null,[e("div",{class:"text-h4 text-bold text-center"},"Semua Produk di Kategori")],-1),j={class:"search-container q-my-xl"},z={class:"q-my-md"},I=e("div",{class:"text-h5"},"Produk Terkait",-1),M={class:"row justify-center"},N={class:"text-h4 text-bold text-center"},T={class:"search-container q-my-xl"},U=e("div",{class:"text-h5"},"Produk Terkait",-1),Z={__name:"ShowCategoryPage",setup(A){const p=S(),c=l(!0),n=l([]),P=async s=>{c.value=!0;try{const a=await C().show(s);n.value=a.data.data}catch(a){console.error("Error fetching data:",a)}c.value=!1};q(()=>{p.name=="home.category.show"&&P(p.params.slug)});const Q=l([]),r=l(""),h=l(null),v=l(!1),i=async()=>{v.value=!0;try{Q.value=[];const s=h.value;s.start();const t=(await C().show(p.params.slug)).data.data.products.filter(d=>{const b=d.name&&d.name.toLowerCase().includes(r.value.toLowerCase()),V=d.description&&d.description.toLowerCase().includes(r.value.toLowerCase());return b||V});n.value.products=[...t],s.stop()}catch(s){console.error("Error fetching data:",s)}v.value=!1};return(s,a)=>(u(),_(y,null,[o(B,{ref_key:"searchBar",ref:h,position:"top",color:"primary",size:"8px","skip-hijack":""},null,512),c.value?(u(),f(w,{key:0},{default:m(()=>[R,e("div",j,[o(x,{type:"text",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),label:"Cari Produk...",class:"search-all",onKeyup:k(i,["enter"]),dense:"",borderless:""},{append:m(()=>[o(g,{name:"search",class:"search-icon",onClick:i})]),_:1},8,["modelValue"])]),e("div",z,[I,e("div",M,[(u(),_(y,null,D(6,t=>e("div",{class:"col-sm-4 col-md-3 q-ma-sm",key:t},[o(K,{width:"100%",height:"150px",style:{"border-radius":"20px"}})])),64))])])]),_:1})):(u(),f(w,{key:1},{default:m(()=>[e("div",null,[e("div",N,"Semua Produk di Kategori "+E(n.value.name),1)]),e("div",T,[o(x,{type:"text",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=t=>r.value=t),label:"Cari Produk...",class:"search-all",onKeyup:k(i,["enter"]),dense:"",borderless:""},{append:m(()=>[o(g,{name:"search",class:"search-icon",onClick:i})]),_:1},8,["modelValue"])]),U,o(L,{products:n.value.products,loading:c.value},null,8,["products","loading"])]),_:1}))],64))}};export{Z as default};
