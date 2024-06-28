import{c as ue,bc as me,d as N,N as ce,f as Z,Q as q,h as ve,bt as _e,r as g,j as G,m as y,x,q as l,p as n,aU as D,a$ as V,A as R,C as B,z as s,y as M,v as j,aP as w,b0 as te,u as ge,n as J,bu as fe,t as I,D as h,O as ee,b1 as H,B as F,aE as pe,aD as be,bo as he,s as ye}from"./index.30dd2348.js";import{Q as X}from"./QTooltip.3ed074ee.js";import{a as T,Q as we}from"./QTable.2f8322cd.js";import{Q as le}from"./QItemLabel.580fc480.js";import{Q as xe,a as ae}from"./QItem.2b7551f8.js";import{Q as Ve}from"./QList.f7f71f64.js";import{Q as qe}from"./QPage.b9e58bdc.js";import{u as Y}from"./use-quasar.67b6ac9a.js";import{url as O}from"./axios.66ae61ea.js";import{u as K}from"./user-store.f67a660c.js";import{Q as oe}from"./QSpace.005ac978.js";import{Q as ke}from"./QBtnGroup.e96b8949.js";import{Q as S}from"./QSelect.68da1b0a.js";import{Q as ne}from"./QSpinnerGears.3a9ff54e.js";import{Q as ie}from"./QForm.550ba64a.js";import{C as W}from"./ClosePopup.b6be3405.js";import{u as de}from"./address-store.62c72731.js";import"./QMenu.19c3a5ff.js";import"./selection.64adb4fb.js";import"./use-fullscreen.13a86615.js";import"./rtl.276c3f1b.js";import"./format.b9446fb2.js";var re=ue({name:"QBtnToggle",props:{...me,modelValue:{required:!0},options:{type:Array,required:!0,validator:v=>v.every(k=>("label"in k||"icon"in k||"slot"in k)&&"value"in k)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(v,{slots:k,emit:L}){const _=N(()=>v.options.find(c=>c.value===v.modelValue)!==void 0),i=N(()=>({type:"hidden",name:v.name,value:v.modelValue})),d=_e(i),Q=N(()=>ce(v)),P=N(()=>({rounded:v.rounded,dense:v.dense,...Q.value})),$=N(()=>v.options.map((c,m)=>{const{attrs:C,value:z,slot:b,...u}=c;return{slot:b,props:{key:m,"aria-pressed":z===v.modelValue?"true":"false",...C,...u,...P.value,disable:v.disable===!0||u.disable===!0,color:z===v.modelValue?p(u,"toggleColor"):p(u,"color"),textColor:z===v.modelValue?p(u,"toggleTextColor"):p(u,"textColor"),noCaps:p(u,"noCaps")===!0,noWrap:p(u,"noWrap")===!0,size:p(u,"size"),padding:p(u,"padding"),ripple:p(u,"ripple"),stack:p(u,"stack")===!0,stretch:p(u,"stretch")===!0,onClick(t){U(z,c,t)}}}}));function U(c,m,C){v.readonly!==!0&&(v.modelValue===c?v.clearable===!0&&(L("update:modelValue",null,null),L("clear")):L("update:modelValue",c,m),L("click",C))}function p(c,m){return c[m]===void 0?v[m]:c[m]}function A(){const c=$.value.map(m=>Z(q,m.props,m.slot!==void 0?k[m.slot]:void 0));return v.name!==void 0&&v.disable!==!0&&_.value===!0&&d(c,"push"),ve(k.default,c)}return()=>Z(ke,{class:"q-btn-toggle",...Q.value,rounded:v.rounded,stretch:v.stretch,glossy:v.glossy,spread:v.spread},A)}});const $e=s("div",{class:"text-h6"},"Tambah Pengguna",-1),Ce={class:"row justify-center"},Ue={class:"col-md-3 q-ma-md"},Le=s("div",{class:"text-body1 text-bold"},"Foto profil",-1),Qe=["src"],Ae=s("div",{class:"text-subtitle2 text-grey-7"},"JPG atau PNG tidak lebih besar dari 5 MB",-1),Pe={class:"col-md-8 q-ma-md"},ze=s("div",{class:"text-body1 text-bold"},"Detail Akun",-1),Be={class:"row justify-center"},De={class:"col-md-5 col-xs-10 q-mx-md"},Fe=s("label",{class:"small mb-1",for:"username"},"Username",-1),Se={class:"col-md-5 col-xs-10 q-mx-md"},Ee=s("label",{class:"small mb-1",for:"name"},"Name",-1),Ie={class:"col-md-5 col-xs-10 q-mx-md"},Ne=s("label",{class:"small mb-1",for:"email"},"Email",-1),Ke={class:"col-md-5 col-xs-10 q-mx-md"},Te=s("label",{class:"small mb-1",for:"phone_number"},"Nomor Telepon",-1),je={class:"col-md-5 col-xs-10 q-mx-md"},Ge=s("label",{class:"small mb-1",for:"password"},"Kata Sandi",-1),Re={class:"col-md-5 col-xs-10 q-mx-md"},Me=s("label",{class:"small mb-1",for:"confirm_password"},"Konfirmasi Kata Sandi",-1),Oe={class:"col-10 q-mx-md"},We=s("label",{class:"small mb-1",for:"confirm_password"},"Role",-1),Je={class:"col-11 q-ma-md"},He=s("div",{class:"text-body1 text-bold"},"Alamat",-1),Xe={class:"row justify-center"},Ye={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Ze=s("label",{class:"small mb-1",for:"province"},"Provinsi",-1),el={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},ll=s("label",{class:"small mb-1",for:"regency"},"Kabupaten",-1),al={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},sl=s("label",{class:"small mb-1",for:"district"},"Kecamatan",-1),tl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},ol=s("label",{class:"small mb-1",for:"village"},"Kelurahan",-1),nl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},il=s("label",{class:"small mb-1",for:"country"},"Negara",-1),dl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},rl=s("label",{class:"small mb-1",for:"zip_code"},"Kode Pos",-1),ul={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},ml=s("label",{class:"small mb-1",for:"address_one"},"Alamat Lengkap",-1),cl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},vl=s("label",{class:"small mb-1",for:"address_two"},"Detail Alamat",-1),_l={__name:"CreateUser",emits:["added"],setup(v,{emit:k}){const L=Y(),_=k,i=g({avatar:"user-profile-default.jpg",username:"",name:"",email:"",password:"",confirm_password:"",role:"",phone_number:"",province:"",province_id:null,regency:"",regency_id:null,district:"",district_id:null,village:"",village_id:null,country:"",zip_code:null,address_one:"",address_two:""}),d=g([]),Q=async()=>{try{const o=await K().all();d.value=o.data.data}catch(o){console.error("Error fetching data:",o)}};G(()=>{Q()});const P=g([]),$=g([]),U=g([]),p=g([]),A=async()=>{try{const o=await de().all();P.value=o.data.provinces.map(e=>({id:e.id,label:e.name,value:e.name})),c.value.provinces=[...P.value],$.value=o.data.regencies.map(e=>({id:e.id,label:e.name,value:e.name})),c.value.regencies=[...$.value],U.value=o.data.districts.map(e=>({id:e.id,label:e.name,value:e.name})),c.value.districts=[...U.value],p.value=o.data.villages.map(e=>({id:e.id,label:e.name,value:e.name})),c.value.villages=[...p.value]}catch(o){console.error("Error fetching data:",o)}u.value=!1};G(()=>{A()});const c=g({provinces:[],regencies:[],districts:[],villages:[]}),m={provinces(o,e){e(()=>{const a=o.toLowerCase();c.value.provinces=P.value.filter(r=>r.value.toLowerCase().includes(a))})},regencies(o,e){e(()=>{const a=o.toLowerCase();c.value.regencies=$.value.filter(r=>r.value.toLowerCase().includes(a))})},districts(o,e){e(()=>{const a=o.toLowerCase();c.value.districts=U.value.filter(r=>r.value.toLowerCase().includes(a))})},villages(o,e){e(()=>{const a=o.toLowerCase();c.value.villages=p.value.filter(r=>r.value.toLowerCase().includes(a))})}},C=g(null),z=async o=>{o.preventDefault();const e=o.target.files[0];if(i.value.avatar=o.target.files[0],e){const a=new FileReader;a.onload=()=>{C.value.src=a.result},a.readAsDataURL(e)}},b=g({username:[o=>!!o||"Username harus diisi",o=>o.length>=6||"Username minimal 6 karakter",o=>o.length<=20||"Username maksimal 20 karakter",o=>typeof o=="string"&&d.value?!d.value.some(e=>e.username.toLowerCase()===o.toLowerCase())||"Username sudah ada":!0],name:[o=>!!o||"Nama harus diisi",o=>o.length<=50||"Nama maksimal 50 karakter"],email:[o=>!!o||"Email harus diisi",o=>/.+@.+/.test(o)||"Email tidak valid",o=>typeof o=="string"&&d.value?!d.value.some(e=>e.email.toLowerCase()===o.toLowerCase())||"Email sudah ada":!0],password:[o=>!!o||"Password harus diisi",o=>o.length>=8||"Password minimal 8 karakter"],confirm_password:[o=>!!o||"Konfirmasi Password harus diisi",o=>o===i.value.password||"Password tidak sama"]}),u=g(!1),t=N(()=>u.value||!i.value.username||!i.value.name||!i.value.email||!i.value.password||!i.value.confirm_password),f=async()=>{u.value=!0;try{i.value.province&&(i.value.province_id=P.value.find(o=>o.label===i.value.province).id),i.value.regency&&(i.value.regency_id=$.value.find(o=>o.label===i.value.regency).id),i.value.district&&(i.value.district_id=U.value.find(o=>o.label===i.value.district).id),i.value.village&&(i.value.village_id=p.value.find(o=>o.label===i.value.village).id),await K().create(i.value),L.notify({message:"Pengguna berhasil dibuat",icon:"check",color:"positive"}),_("added")}catch(o){console.error("Error submitting form:",o),L.notify({message:o.response.data.message||"Pengguna gagal dibuat, Silahkan coba lagi nanti",icon:"warning",color:"negative"})}u.value=!1};return(o,e)=>(y(),x("div",null,[l(ie,{onSubmit:f},{default:n(()=>[l(D,{style:{"min-width":"400px"}},{default:n(()=>[l(V,{class:"row items-center q-py-sm"},{default:n(()=>[$e,l(oe),R(l(q,{icon:"close",flat:"",round:"",dense:""},null,512),[[W]])]),_:1}),l(B),l(V,{class:"scroll",style:{"max-height":"77vh"}},{default:n(()=>[s("div",Ce,[s("div",Ue,[l(D,{style:{height:"100%"}},{default:n(()=>[l(V,{class:"bg-blue-grey-1"},{default:n(()=>[Le]),_:1}),l(B),l(V,{class:"text-center q-pa-md"},{default:n(()=>[l(M,{size:"100px",class:"q-my-md"},{default:n(()=>[s("img",{ref_key:"avatar",ref:C,src:j(O)+"/public/avatars/"+i.value.avatar},null,8,Qe)]),_:1}),Ae,l(q,{color:"primary",class:"q-my-md",label:"Unggah Foto baru",onClick:e[0]||(e[0]=a=>o.$refs.avatarInput.click()),"no-caps":""}),s("input",{type:"file",ref:"avatarInput",id:"avatarInput",style:{display:"none"},accept:"image/*",onChange:z},null,544)]),_:1})]),_:1})]),s("div",Pe,[l(D,{style:{height:"100%"}},{default:n(()=>[l(V,{class:"bg-blue-grey-1"},{default:n(()=>[ze]),_:1}),l(B),l(V,{class:"q-pa-md"},{default:n(()=>[s("div",Be,[s("div",De,[Fe,l(w,{modelValue:i.value.username,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value.username=a),id:"username",label:"Username",rules:b.value.username,outlined:"",dense:"",required:"",autofocus:""},null,8,["modelValue","rules"])]),s("div",Se,[Ee,l(w,{modelValue:i.value.name,"onUpdate:modelValue":e[2]||(e[2]=a=>i.value.name=a),id:"name",label:"Name",rules:b.value.name,outlined:"",dense:"",required:""},null,8,["modelValue","rules"])]),s("div",Ie,[Ne,l(w,{type:"email",modelValue:i.value.email,"onUpdate:modelValue":e[3]||(e[3]=a=>i.value.email=a),id:"email",label:"Email",rules:b.value.email,outlined:"",dense:"",required:""},null,8,["modelValue","rules"])]),s("div",Ke,[Te,l(w,{modelValue:i.value.phone_number,"onUpdate:modelValue":e[4]||(e[4]=a=>i.value.phone_number=a),id:"phone_number",label:"Nomor Telepon",mask:"#### - #### - ######",outlined:"",dense:""},null,8,["modelValue"])]),s("div",je,[Ge,l(w,{type:"password",modelValue:i.value.password,"onUpdate:modelValue":e[5]||(e[5]=a=>i.value.password=a),id:"password",label:"Kata Sandi",rules:b.value.password,outlined:"",dense:""},null,8,["modelValue","rules"])]),s("div",Re,[Me,l(w,{type:"password",modelValue:i.value.confirm_password,"onUpdate:modelValue":e[6]||(e[6]=a=>i.value.confirm_password=a),id:"confirm_password",label:"Konfirmasi Kata Sandi",rules:b.value.confirm_password,outlined:"",dense:""},null,8,["modelValue","rules"])]),s("div",Oe,[We,l(re,{modelValue:i.value.role,"onUpdate:modelValue":e[7]||(e[7]=a=>i.value.role=a),"toggle-color":"primary",class:"q-mx-md",options:[{label:"Admin",value:"Admin"},{label:"Mitra",value:"Mitra"},{label:"Customer",value:"Customer"}],push:"",glossy:""},null,8,["modelValue"])])])]),_:1})]),_:1})]),s("div",Je,[l(D,null,{default:n(()=>[l(V,{class:"bg-blue-grey-1"},{default:n(()=>[He]),_:1}),l(B),l(V,{class:"q-pa-md"},{default:n(()=>[s("div",Xe,[s("div",Ye,[Ze,l(S,{modelValue:i.value.province,"onUpdate:modelValue":e[8]||(e[8]=a=>i.value.province=a),options:c.value.provinces,onFilter:m.provinces,id:"province",label:"Provinsi","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",el,[ll,l(S,{modelValue:i.value.regency,"onUpdate:modelValue":e[9]||(e[9]=a=>i.value.regency=a),options:c.value.regencies,onFilter:m.regencies,id:"regency",label:"Kabupaten","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",al,[sl,l(S,{modelValue:i.value.district,"onUpdate:modelValue":e[10]||(e[10]=a=>i.value.district=a),options:c.value.districts,onFilter:m.districts,id:"district",label:"Kecamatan","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",tl,[ol,l(S,{modelValue:i.value.village,"onUpdate:modelValue":e[11]||(e[11]=a=>i.value.village=a),options:c.value.villages,onFilter:m.villages,id:"village",label:"Kelurahan","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",nl,[il,l(w,{modelValue:i.value.country,"onUpdate:modelValue":e[12]||(e[12]=a=>i.value.country=a),id:"country",label:"Negara",outlined:"",dense:""},null,8,["modelValue"])]),s("div",dl,[rl,l(w,{type:"number",modelValue:i.value.zip_code,"onUpdate:modelValue":e[13]||(e[13]=a=>i.value.zip_code=a),id:"zip_code",label:"Kode Pos",outlined:"",dense:""},null,8,["modelValue"])]),s("div",ul,[ml,l(w,{type:"textarea",modelValue:i.value.address_one,"onUpdate:modelValue":e[14]||(e[14]=a=>i.value.address_one=a),id:"address_one",label:"Alamat Lengkap",outlined:"",dense:""},null,8,["modelValue"])]),s("div",cl,[vl,l(w,{modelValue:i.value.address_two,"onUpdate:modelValue":e[15]||(e[15]=a=>i.value.address_two=a),id:"address_two",label:"Detail Alamat (Contoh : Dekat pohon besar)",outlined:"",dense:""},null,8,["modelValue"])])])]),_:1})]),_:1})])])]),_:1}),l(B),l(te,{align:"right",class:"text-primary"},{default:n(()=>[R(l(q,{label:"Batal",color:"primary",flat:""},null,512),[[W]]),l(q,{type:"submit",label:"Tambah",color:"primary",loading:u.value,disable:t.value},{loading:n(()=>[l(ne)]),_:1},8,["loading","disable"])]),_:1})]),_:1})]),_:1})]))}},gl=s("div",{class:"text-h6"},"Edit Pengguna",-1),fl={class:"row justify-center"},pl={class:"col-md-3 q-ma-md"},bl=s("div",{class:"text-body1 text-bold"},"Foto profil",-1),hl=["src"],yl=s("div",{class:"text-subtitle2 text-grey-7"},"JPG atau PNG tidak lebih besar dari 5 MB",-1),wl={class:"col-md-8 q-ma-md"},xl=s("div",{class:"text-body1 text-bold"},"Detail Akun",-1),Vl={class:"row justify-center"},ql={class:"col-md-5 col-xs-10 q-mx-md"},kl=s("label",{class:"small mb-1",for:"username"},"Username",-1),$l={class:"col-md-5 col-xs-10 q-mx-md"},Cl=s("label",{class:"small mb-1",for:"name"},"Name",-1),Ul={class:"col-md-5 col-xs-10 q-mx-md"},Ll=s("label",{class:"small mb-1",for:"email"},"Email",-1),Ql={class:"col-md-5 col-xs-10 q-mx-md"},Al=s("label",{class:"small mb-1",for:"phone_number"},"Nomor Telepon",-1),Pl={class:"col-10 q-mx-md"},zl=s("label",{class:"small mb-1",for:"confirm_password"},"Role",-1),Bl={class:"col-11 q-ma-md"},Dl=s("div",{class:"text-body1 text-bold"},"Alamat",-1),Fl={class:"row justify-center"},Sl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},El=s("label",{class:"small mb-1",for:"province"},"Provinsi",-1),Il={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Nl=s("label",{class:"small mb-1",for:"regency"},"Kabupaten",-1),Kl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Tl=s("label",{class:"small mb-1",for:"district"},"Kecamatan",-1),jl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Gl=s("label",{class:"small mb-1",for:"village"},"Kelurahan",-1),Rl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Ml=s("label",{class:"small mb-1",for:"country"},"Negara",-1),Ol={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Wl=s("label",{class:"small mb-1",for:"zip_code"},"Kode Pos",-1),Jl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Hl=s("label",{class:"small mb-1",for:"address_one"},"Alamat Lengkap",-1),Xl={class:"col-md-5 col-xs-10 q-my-sm q-mx-md"},Yl=s("label",{class:"small mb-1",for:"address_two"},"Detail Alamat",-1),se={__name:"EditUser",props:["item"],emits:["edited"],setup(v,{emit:k}){const L=Y(),{item:_}=v,i=k,d=g({id:_.id,avatar:_.avatar,username:_.username,name:_.name,email:_.email,role:_.role,phone_number:_.phone_number,province:_.province,province_id:_.province_id,regency:_.regency,regency_id:_.regency_id,district:_.district,district_id:_.district_id,village:_.village,village_id:_.village_id,country:_.country,zip_code:_.zip_code,address_one:_.address_one,address_two:_.address_two}),Q=g([]),P=async()=>{try{const e=await K().all();Q.value=e.data.data}catch(e){console.error("Error fetching data:",e)}};G(()=>{P()});const $=g([]),U=g([]),p=g([]),A=g([]),c=async()=>{try{const e=await de().all();$.value=e.data.provinces.map(a=>({id:a.id,label:a.name,value:a.name})),m.value.provinces=[...$.value],U.value=e.data.regencies.map(a=>({id:a.id,label:a.name,value:a.name})),m.value.regencies=[...U.value],p.value=e.data.districts.map(a=>({id:a.id,label:a.name,value:a.name})),m.value.districts=[...p.value],A.value=e.data.villages.map(a=>({id:a.id,label:a.name,value:a.name})),m.value.villages=[...A.value]}catch(e){console.error("Error fetching data:",e)}t.value=!1};G(()=>{c()});const m=g({provinces:[],regencies:[],districts:[],villages:[]}),C={provinces(e,a){a(()=>{const r=e.toLowerCase();m.value.provinces=$.value.filter(E=>E.value.toLowerCase().includes(r))})},regencies(e,a){a(()=>{const r=e.toLowerCase();m.value.regencies=U.value.filter(E=>E.value.toLowerCase().includes(r))})},districts(e,a){a(()=>{const r=e.toLowerCase();m.value.districts=p.value.filter(E=>E.value.toLowerCase().includes(r))})},villages(e,a){a(()=>{const r=e.toLowerCase();m.value.villages=A.value.filter(E=>E.value.toLowerCase().includes(r))})}},z=g(null),b=async e=>{e.preventDefault();const a=e.target.files[0];if(d.value.avatar=e.target.files[0],a){const r=new FileReader;r.onload=()=>{z.value.src=r.result},r.readAsDataURL(a)}},u=g({username:[e=>!!e||"Username harus diisi",e=>e.length>=6||"Username minimal 6 karakter",e=>e.length<=20||"Username maksimal 20 karakter",e=>typeof e=="string"&&Q.value?!Q.value.some(a=>a.username.toLowerCase()===e.toLowerCase()&&a.username.toLowerCase()!==_.username.toLowerCase())||"Username sudah ada":!0],name:[e=>!!e||"Nama harus diisi",e=>e.length<=50||"Nama maksimal 50 karakter"],email:[e=>!!e||"Email harus diisi",e=>/.+@.+/.test(e)||"Email tidak valid",e=>typeof e=="string"&&Q.value?!Q.value.some(a=>a.email.toLowerCase()===e.toLowerCase()&&a.email.toLowerCase()!==_.email.toLowerCase())||"Email sudah ada":!0]}),t=g(!1),f=N(()=>t.value||!d.value.username||!d.value.name||!d.value.email),o=async()=>{t.value=!0;try{d.value.province&&(d.value.province_id=$.value.find(e=>e.label===d.value.province).id),d.value.regency&&(d.value.regency_id=U.value.find(e=>e.label===d.value.regency).id),d.value.district&&(d.value.district_id=p.value.find(e=>e.label===d.value.district).id),d.value.village&&(d.value.village_id=A.value.find(e=>e.label===d.value.village).id),await K().edit(d.value),L.notify({message:"Pengguna berhasil diedit",icon:"check",color:"positive"}),i("edited")}catch(e){console.error("Error submitting form:",e),L.notify({message:e.response.data.message||"Pengguna gagal diedit, Silahkan coba lagi nanti",icon:"warning",color:"negative"})}t.value=!1};return(e,a)=>(y(),x("div",null,[l(ie,{onSubmit:o},{default:n(()=>[l(D,{style:{"min-width":"400px"}},{default:n(()=>[l(V,{class:"row items-center q-py-sm"},{default:n(()=>[gl,l(oe),R(l(q,{icon:"close",flat:"",round:"",dense:""},null,512),[[W]])]),_:1}),l(B),l(V,{class:"scroll",style:{"max-height":"77vh"}},{default:n(()=>[s("div",fl,[s("div",pl,[l(D,{style:{height:"100%"}},{default:n(()=>[l(V,{class:"bg-blue-grey-1"},{default:n(()=>[bl]),_:1}),l(B),l(V,{class:"text-center q-pa-md"},{default:n(()=>[l(M,{size:"100px",class:"q-my-md"},{default:n(()=>[s("img",{ref_key:"avatar",ref:z,src:j(O)+"/public/avatars/"+d.value.avatar},null,8,hl)]),_:1}),yl,l(q,{color:"primary",class:"q-my-md",label:"Unggah Foto baru",onClick:a[0]||(a[0]=r=>e.$refs.avatarInput.click()),"no-caps":""}),s("input",{type:"file",ref:"avatarInput",id:"avatarInput",style:{display:"none"},accept:"image/*",onChange:b},null,544)]),_:1})]),_:1})]),s("div",wl,[l(D,{style:{height:"100%"}},{default:n(()=>[l(V,{class:"bg-blue-grey-1"},{default:n(()=>[xl]),_:1}),l(B),l(V,{class:"q-pa-md"},{default:n(()=>[s("div",Vl,[s("div",ql,[kl,l(w,{modelValue:d.value.username,"onUpdate:modelValue":a[1]||(a[1]=r=>d.value.username=r),id:"username",label:"Username",rules:u.value.username,outlined:"",dense:"",required:"",autofocus:""},null,8,["modelValue","rules"])]),s("div",$l,[Cl,l(w,{modelValue:d.value.name,"onUpdate:modelValue":a[2]||(a[2]=r=>d.value.name=r),id:"name",label:"Name",rules:u.value.name,outlined:"",dense:"",required:""},null,8,["modelValue","rules"])]),s("div",Ul,[Ll,l(w,{type:"email",modelValue:d.value.email,"onUpdate:modelValue":a[3]||(a[3]=r=>d.value.email=r),id:"email",label:"Email",rules:u.value.email,outlined:"",dense:"",required:""},null,8,["modelValue","rules"])]),s("div",Ql,[Al,l(w,{modelValue:d.value.phone_number,"onUpdate:modelValue":a[4]||(a[4]=r=>d.value.phone_number=r),id:"phone_number",label:"Nomor Telepon",mask:"#### - #### - ######",outlined:"",dense:""},null,8,["modelValue"])]),s("div",Pl,[zl,l(re,{modelValue:d.value.role,"onUpdate:modelValue":a[5]||(a[5]=r=>d.value.role=r),"toggle-color":"primary",class:"q-mx-md",options:[{label:"Admin",value:"Admin"},{label:"Mitra",value:"Mitra"},{label:"Customer",value:"Customer"}],push:"",glossy:""},null,8,["modelValue"])])])]),_:1})]),_:1})]),s("div",Bl,[l(D,null,{default:n(()=>[l(V,{class:"bg-blue-grey-1"},{default:n(()=>[Dl]),_:1}),l(B),l(V,{class:"q-pa-md"},{default:n(()=>[s("div",Fl,[s("div",Sl,[El,l(S,{modelValue:d.value.province,"onUpdate:modelValue":a[6]||(a[6]=r=>d.value.province=r),options:m.value.provinces,onFilter:C.provinces,id:"province",label:"Provinsi","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",Il,[Nl,l(S,{modelValue:d.value.regency,"onUpdate:modelValue":a[7]||(a[7]=r=>d.value.regency=r),options:m.value.regencies,onFilter:C.regencies,id:"regency",label:"Kabupaten","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",Kl,[Tl,l(S,{modelValue:d.value.district,"onUpdate:modelValue":a[8]||(a[8]=r=>d.value.district=r),options:m.value.districts,onFilter:C.districts,id:"district",label:"Kecamatan","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",jl,[Gl,l(S,{modelValue:d.value.village,"onUpdate:modelValue":a[9]||(a[9]=r=>d.value.village=r),options:m.value.villages,onFilter:C.villages,id:"village",label:"Kelurahan","input-debounce":"0","use-input":"","fill-input":"","emit-value":"","hide-selected":"",outlined:"",dense:""},null,8,["modelValue","options","onFilter"])]),s("div",Rl,[Ml,l(w,{modelValue:d.value.country,"onUpdate:modelValue":a[10]||(a[10]=r=>d.value.country=r),id:"country",label:"Negara",outlined:"",dense:""},null,8,["modelValue"])]),s("div",Ol,[Wl,l(w,{type:"number",modelValue:d.value.zip_code,"onUpdate:modelValue":a[11]||(a[11]=r=>d.value.zip_code=r),id:"zip_code",label:"Kode Pos",outlined:"",dense:""},null,8,["modelValue"])]),s("div",Jl,[Hl,l(w,{type:"textarea",modelValue:d.value.address_one,"onUpdate:modelValue":a[12]||(a[12]=r=>d.value.address_one=r),id:"address_one",label:"Alamat Lengkap",outlined:"",dense:""},null,8,["modelValue"])]),s("div",Xl,[Yl,l(w,{modelValue:d.value.address_two,"onUpdate:modelValue":a[13]||(a[13]=r=>d.value.address_two=r),id:"address_two",label:"Detail Alamat (Contoh : Dekat pohon besar)",outlined:"",dense:""},null,8,["modelValue"])])])]),_:1})]),_:1})])])]),_:1}),l(B),l(te,{align:"right",class:"text-primary"},{default:n(()=>[R(l(q,{label:"Batal",color:"primary",flat:""},null,512),[[W]]),l(q,{type:"submit",label:"Edit",color:"primary",loading:t.value,disable:f.value},{loading:n(()=>[l(ne)]),_:1},8,["loading","disable"])]),_:1})]),_:1})]),_:1})]))}},Zl=s("div",{class:"text-h5 q-pr-lg"},"Pengguna",-1),ea={class:"text-body2 text-bold text-center q-pa-md"},la={dense:"",square:""},aa={dense:"",square:""},sa=["src"],ta={dense:"",square:""},oa={class:"text-bold"},na={dense:"",square:""},ia={key:0},da={key:1,class:"q-mr-xs"},ra={key:2,class:"q-mr-xs"},ua={key:3,class:"q-mr-xs"},ma={key:4,class:"q-mr-xs"},ca={key:5,class:"q-mr-xs"},va={key:6,class:"q-mr-xs"},_a={key:7},ga={key:0,dense:"",square:""},fa={key:1,dense:"",square:""},pa=["src"],ba={key:2,dense:"",square:""},ha={class:"text-bold"},ya={key:3,dense:"",square:""},wa={class:"text-subtitle2"},xa={key:4},Ra={__name:"IndexUser",setup(v){const k=Y(),L=ge(),_=g([]),i=async()=>{try{const b=await K().dashboard();_.value=b.data.data}catch(b){console.error("Error fetching data:",b),b.response.data.status==="failed"&&L.push("/notfound")}};G(()=>{i()});const d=g(!1),Q=()=>{d.value=!1,i()},P=b=>{b.editItemDialog=!1,i()},$=b=>{k.dialog({title:"WARNING!!!",message:"Apakah Anda yakin ingin menghapus data ini?",cancel:!0,persistent:!0}).onOk(async()=>{try{await K().delete(b.id),k.notify({message:"Pengguna berhasil dihapus",icon:"check",color:"positive"}),i()}catch(u){console.error("Error submitting form:",u),k.notify({message:u.response.data.message||"Pengguna gagal dihapus",icon:"warning",color:"negative"})}})},U=_,p=[{name:"id",field:"id",label:"No",headerStyle:"font-weight: bolder; font-size: 13px;"},{name:"avatar",field:"avatar",label:"Foto Profil",align:"center",sortable:!1,headerStyle:"font-weight: bolder; font-size: 13px;"},{name:"user",field:"name",label:"Pengguna",align:"left",sortable:!0,headerStyle:"font-weight: bolder; font-size: 13px;"},{name:"email",field:"email",label:"Email",align:"left",sortable:!0,headerStyle:"font-weight: bolder; font-size: 13px;"},{name:"role",field:"role",label:"Role",align:"left",sortable:!0,headerStyle:"font-weight: bolder; font-size: 13px;"},{name:"address",field:"address_one",label:"Alamat",align:"left",sortable:!0,headerStyle:"font-weight: bolder; font-size: 13px;"},{name:"action",field:"action",label:"Aksi",align:"center"}],A=g("horizontal"),c=g(""),m=g(!1),C=g({}),z=b=>{b.toggleFullscreen()};return(b,u)=>(y(),J(qe,{class:"q-pa-sm"},{default:n(()=>[l(we,{class:"dashboard-table","table-header-class":"bg-grey-2",title:"Pengguna","row-key":"__index",rows:j(U),columns:p,"hide-header":m.value,grid:m.value,filter:c.value,pagination:C.value,"onUpdate:pagination":u[5]||(u[5]=t=>C.value=t),"rows-per-page-options":[10,20,30],separator:A.value,"virtual-scroll":"",flat:"",bordered:""},{"top-right":n(t=>[l(fe,{modelValue:A.value,"onUpdate:modelValue":u[0]||(u[0]=f=>A.value=f),size:"xs",options:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"},{label:"Cell",value:"cell"},{label:"None",value:"none"}],class:"q-mx-md",inline:""},null,8,["modelValue"]),l(q,{color:"primary",icon:t.inFullscreen?"fullscreen_exit":"fullscreen",onClick:f=>z(t),flat:"",round:"",dense:""},{default:n(()=>[l(X,null,{default:n(()=>[I(h(t.inFullscreen?"Keluar Layar Penuh":"Beralih ke Layar Penuh"),1)]),_:2},1024)]),_:2},1032,["icon","onClick"]),l(q,{color:"primary",icon:m.value?"list":"grid_on",onClick:u[1]||(u[1]=f=>m.value=!m.value),class:"q-mr-sm",flat:"",round:"",dense:""},{default:n(()=>[l(X,null,{default:n(()=>[I(h(m.value?"List":"Grid"),1)]),_:1})]),_:1},8,["icon"]),l(w,{outlined:"",dense:"",debounce:"300",modelValue:c.value,"onUpdate:modelValue":u[2]||(u[2]=f=>c.value=f),placeholder:"Cari..."},{append:n(()=>[l(ee,{name:"search"})]),_:1},8,["modelValue"])]),"top-left":n(()=>[Zl,l(q,{color:"primary",icon:"add",class:"shadow-3 q-my-sm",onClick:u[3]||(u[3]=t=>d.value=!0),dense:""},{default:n(()=>[l(X,null,{default:n(()=>[I("Tambah Pengguna")]),_:1})]),_:1}),l(H,{modelValue:d.value,"onUpdate:modelValue":u[4]||(u[4]=t=>d.value=t),"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:n(()=>[l(_l,{onAdded:Q})]),_:1},8,["modelValue"])]),"no-data":n(()=>[s("div",ea,[l(ee,{name:"warning_amber",size:"25px",class:"q-mx-sm"}),I(" Tidak ada data yang tersedia. ")])]),"body-cell-id":n(t=>[l(T,{props:t},{default:n(()=>[s("div",la,h(t.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-avatar":n(t=>[l(T,{props:t},{default:n(()=>[s("div",aa,[l(M,{size:"60px"},{default:n(()=>[s("img",{src:j(O)+"/public/avatars/"+t.row.avatar},null,8,sa)]),_:2},1024)])]),_:2},1032,["props"])]),"body-cell-user":n(t=>[l(T,{props:t},{default:n(()=>[s("div",ta,[s("div",oa,h(t.row.name),1),s("div",null,h(t.row.username),1)])]),_:2},1032,["props"])]),"body-cell-address":n(t=>[l(T,{props:t},{default:n(()=>[s("div",na,[t.row.address_one?(y(),x("div",ia,h(t.row.address_one)+",",1)):F("",!0),t.row.village?(y(),x("span",da,h(t.row.village)+",",1)):F("",!0),t.row.district?(y(),x("span",ra,h(t.row.district)+",",1)):F("",!0),t.row.regency?(y(),x("span",ua,h(t.row.regency)+",",1)):F("",!0),t.row.province?(y(),x("span",ma,h(t.row.province)+",",1)):F("",!0),t.row.country?(y(),x("span",ca,h(t.row.country)+",",1)):F("",!0),t.row.zip_code?(y(),x("span",va,h(t.row.zip_code)+".",1)):F("",!0),t.row.address_two?(y(),x("div",_a,"("+h(t.row.address_two)+")",1)):F("",!0)])]),_:2},1032,["props"])]),"body-cell-action":n(t=>[l(T,{props:t},{default:n(()=>[l(q,{color:"warning",field:"edit",icon:"edit",class:"q-mx-xs",onClick:f=>t.row.editItemDialog=!0,dense:"",round:""},{default:n(()=>[l(H,{modelValue:t.row.editItemDialog,"onUpdate:modelValue":f=>t.row.editItemDialog=f,"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:n(()=>[l(se,{onEdited:f=>P(t.row),item:t.row},null,8,["onEdited","item"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["onClick"]),l(q,{color:"red",field:"delete",icon:"delete",class:"q-mx-xs",onClick:f=>$(t.row),dense:"",round:""},null,8,["onClick"])]),_:2},1032,["props"])]),item:n(t=>[s("div",{class:"q-pa-md col-xs-12 col-sm-6 col-md-6 col-lg-6 grid-style-transition",style:he(t.selected?"transform: scale(0.95);":"")},[l(D,{class:"q-pa-md"},{default:n(()=>[l(Ve,{dense:""},{default:n(()=>[(y(!0),x(be,null,pe(t.cols,f=>(y(),J(xe,{key:f.id},{default:n(()=>[l(ae,null,{default:n(()=>[l(le,null,{default:n(()=>[I(h(f.label),1)]),_:2},1024)]),_:2},1024),l(ae,{side:""},{default:n(()=>[f.name==="id"?(y(),x("div",ga,h(t.rowIndex+1),1)):f.name==="avatar"?(y(),x("div",fa,[l(M,{size:"60px"},{default:n(()=>[s("img",{src:j(O)+"/public/avatars/"+t.row.avatar},null,8,pa)]),_:2},1024)])):f.name==="user"?(y(),x("div",ba,[s("div",null,[s("span",ha,h(t.row.name&&t.row.name.length>10?t.row.name.substring(0,10)+"...":t.row.name),1),I(" ("+h(t.row.username&&t.row.username.length>10?t.row.username.substring(0,10)+"...":t.row.username)+") ",1)])])):f.name==="address"?(y(),x("div",ya,[s("div",wa,h(t.row.address_one&&t.row.address_one.length>25?t.row.address_one.substring(0,25)+"...":t.row.address_one),1)])):f.name==="action"?(y(),x("div",xa,[l(q,{color:"warning",field:"edit",icon:"edit",class:"q-mx-xs",onClick:o=>t.row.editItemDialog=!0,dense:"",round:""},{default:n(()=>[l(H,{modelValue:t.row.editItemDialog,"onUpdate:modelValue":o=>t.row.editItemDialog=o,"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:n(()=>[l(se,{onEdited:o=>P(t.row),item:t.row},null,8,["onEdited","item"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["onClick"]),l(q,{color:"red",field:"delete",icon:"delete",class:"q-mx-xs",onClick:o=>$(t.row),dense:"",round:""},null,8,["onClick"])])):(y(),J(le,{key:5,caption:"",class:ye(f.classes?f.classes:"")},{default:n(()=>[I(h(f.value),1)]),_:2},1032,["class"]))]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)],4)]),_:1},8,["rows","hide-header","grid","filter","pagination","separator"])]),_:1}))}};export{Ra as default};