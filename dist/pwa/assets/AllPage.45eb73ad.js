import{Q as g}from"./QSkeleton.01e1d850.js";import{Q as f}from"./QPage.b9e58bdc.js";import{aR as D,r as x,aS as B,k as S,m as t,x as m,n as o,p as a,B as r,aD as y,q as i,aE as v,aU as w,a$ as k,O as C,t as c,z as s,D as l,v as I,Q as N}from"./index.30dd2348.js";import{Q as _}from"./QBadge.041d9b52.js";import{Q as P}from"./QImg.3cf10b4b.js";import{url as R}from"./axios.66ae61ea.js";import{u as z}from"./transaction-store.c0db26c0.js";const E=s("span",null,"Pesanan",-1),F={class:"text-grey-5 transaction-subtitle q-mx-sm"},T={class:""},V={class:"float-right transaction-title"},U={class:"row"},A={class:"col-md-1 col-sm-2 col-xs-3 q-mx-xs"},L={class:"col-5 q-mx-xs"},O={class:"transaction-title",style:{"line-height":"1.2"}},$={class:"text-grey-10 transaction-title",style:{"line-height":"1.2"}},j={class:"text-grey-7 transaction-subtitle"},G=s("hr",null,null,-1),H={class:"large-screen transaction-title text-bold q-mb-sm float-right"},J={class:"text-primary",style:{"font-size":"18px"}},K={class:"small-screen transaction-title text-bold q-mb-sm"},M={class:"text-primary",style:{"font-size":"18px"}},W={key:0,class:"transaction-title"},X={key:2,class:"text-subtitle1 text-center text-grey-7 q-mt-md"},it={__name:"AllPage",setup(Y){const b=D(),d=x(!0),p=x([]),q=async()=>{d.value=!0;try{const n=await z().getByUser();p.value=n.data.data}catch(n){console.error("Error fetching data:",n)}d.value=!1};B(()=>{b.name=="home.order"&&q()});const h=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0}).format(n);return(n,Z)=>{const Q=S("router-link");return t(),m(y,null,[d.value?(t(),o(f,{key:0},{default:a(()=>[i(g,{height:"200px",class:"q-my-md"}),i(g,{height:"300px",class:"q-my-md"}),i(g,{height:"300px",class:"q-my-md"})]),_:1})):r("",!0),!d.value&&p.value&&p.value.length>0?(t(),o(f,{key:1},{default:a(()=>[(t(!0),m(y,null,v(p.value,e=>(t(),o(Q,{key:e.id,to:{name:"home.transaction",params:{invoice:e.invoice}},class:"products-link text-dark"},{default:a(()=>[d.value?r("",!0):(t(),o(w,{key:0,class:"my-card q-my-md q-pb-lg"},{default:a(()=>[i(k,{class:"bg-grey-2 text-body1 text-bold text-primary"},{default:a(()=>[i(C,{name:"shopping_cart_checkout",size:"20px",class:"q-mx-sm"}),E,e.shipping_status==0?(t(),o(_,{key:0,color:"grey",class:"float-right"},{default:a(()=>[c("Belum Dibayar")]),_:1})):r("",!0),e.shipping_status==1?(t(),o(_,{key:1,color:"warning",class:"float-right"},{default:a(()=>[c("Sedang Dikemas")]),_:1})):r("",!0),e.shipping_status==2?(t(),o(_,{key:2,color:"green",class:"float-right"},{default:a(()=>[c("Sedang Dikirim")]),_:1})):r("",!0),e.shipping_status==3?(t(),o(_,{key:3,color:"blue",class:"float-right"},{default:a(()=>[c("Selesai")]),_:1})):r("",!0),e.shipping_status==4?(t(),o(_,{key:4,color:"red",class:"float-right"},{default:a(()=>[c("Dibatalkan")]),_:1})):r("",!0),s("div",F,l(e.invoice),1)]),_:2},1024),i(k,{class:"q-pa-lg"},{default:a(()=>[(t(!0),m(y,null,v(e.transaction_details,u=>(t(),m("div",{key:u.id,class:"text-subtitle2 q-my-md"},[s("div",T,[s("div",V,l(h(u.product.price)),1),s("div",U,[s("div",A,[i(P,{src:I(R)+"/public/products/"+u.product.photos[0].photo,ratio:1/1,class:"q-mx-sm transaction-image"},null,8,["src"])]),s("div",L,[s("div",O,l(u.product.name),1),s("div",$,"x "+l(u.quantity),1),s("div",j,l(u.product.category.name),1)])])])]))),128)),G,s("div",H,[c(" Total Pesanan : "),s("span",J,l(h(e.total_price)),1)]),s("div",K,[c(" Total Pesanan : "),s("span",M,l(h(e.total_price)),1)]),e.resi?(t(),m("div",W,"Resi : "+l(e.resi),1)):r("",!0),e.shipping_status==0?(t(),o(N,{key:1,to:{name:"home.transaction",params:{invoice:e.invoice}},color:"primary",label:"Bayar Sekarang",dense:"","no-caps":""},null,8,["to"])):r("",!0)]),_:2},1024)]),_:2},1024))]),_:2},1032,["to"]))),128))]),_:1})):(t(),m("div",X,"Data tidak ditemukan."))],64)}}};export{it as default};