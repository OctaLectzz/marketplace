import{r as l,j as k,k as x,m as V,x as b,q as t,p as _,z as a,aQ as n,Q as U,t as w}from"./index.3411a222.js";import{Q as q}from"./QSpinnerGears.11fcd29c.js";import{Q}from"./QForm.f0266572.js";import{u as S}from"./use-quasar.a53b7e3f.js";import{u as E}from"./auth-store.8e49de40.js";import{u as P}from"./user-store.70fb05d9.js";import"./axios.7b547941.js";const N={class:"q-my-xl",style:{"max-width":"500px",margin:"auto"}},C=a("div",{class:"text-h5 text-center q-mx-lg"},"Memulai untuk jual beli dengan cara terbaru",-1),B={class:"row justify-between"},I={class:"col-5"},L={class:"q-my-xs"},j=a("label",{for:"email"},"Username",-1),z={class:"col-5"},F={class:"q-my-xs"},K=a("label",{for:"email"},"Name",-1),M={class:"q-my-xs"},R=a("label",{for:"email"},"Email",-1),A={class:"q-my-xs"},G=a("label",{for:"password"},"Password",-1),T={class:"q-my-xs"},$=a("label",{for:"confirm_password"},"Konfirmasi Password",-1),D={class:"q-mt-sm text-center",style:{"font-size":"12px"}},H={class:"text-bold cursor-pointer"},se={__name:"RegisterPage",setup(J){const f=S(),m=l(""),c=l(""),p=l(""),d=l(""),v=l(""),r=l([]),g=async()=>{try{const e=await P().all();r.value=e.data.data}catch(e){console.error("Error fetching data:",e)}};k(()=>{g()});const i=l({username:[e=>!!e||"Username harus diisi",e=>e.length>=6||"Username minimal 6 karakter",e=>e.length<=20||"Username maksimal 20 karakter",e=>typeof e=="string"&&r.value?!r.value.some(s=>s.username.toLowerCase()===e.toLowerCase())||"Username sudah ada":!0],name:[e=>!!e||"Nama harus diisi",e=>e.length<=50||"Nama maksimal 50 karakter"],email:[e=>!!e||"Email harus diisi",e=>/.+@.+/.test(e)||"Email tidak valid",e=>typeof e=="string"&&r.value?!r.value.some(s=>s.email.toLowerCase()===e.toLowerCase())||"Email sudah ada":!0],password:[e=>!!e||"Password harus diisi",e=>e.length>=8||"Password minimal 8 karakter"],confirm_password:[e=>!!e||"Konfirmasi Password harus diisi",e=>e===d.value||"Password tidak sama"]}),u=l(!1),h=async()=>{u.value=!0;try{const e=await E().register(m.value,c.value,p.value,d.value,v.value);localStorage.setItem("token",e.data.data.token),localStorage.setItem("role",e.data.data.user.role),f.notify({message:"Register Berhasil",icon:"check",color:"positive"}),window.location.reload()}catch(e){console.error("Error submitting form:",e),f.notify({message:e.response.data.message||"Format Email dan Password masih salah",icon:"warning",color:"negative"})}u.value=!1};return(e,s)=>{const y=x("router-link");return V(),b("div",N,[C,t(Q,{onSubmit:h,class:"q-my-lg"},{default:_(()=>[a("div",B,[a("div",I,[a("div",L,[j,t(n,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=o=>m.value=o),type:"text",id:"username",rules:i.value.username,outlined:"",dense:""},null,8,["modelValue","rules"])])]),a("div",z,[a("div",F,[K,t(n,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=o=>c.value=o),id:"name",rules:i.value.name,outlined:"",dense:""},null,8,["modelValue","rules"])])])]),a("div",M,[R,t(n,{modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=o=>p.value=o),type:"email",id:"email",rules:i.value.email,outlined:"",dense:""},null,8,["modelValue","rules"])]),a("div",A,[G,t(n,{modelValue:d.value,"onUpdate:modelValue":s[3]||(s[3]=o=>d.value=o),type:"password",id:"password",rules:i.value.password,outlined:"",dense:""},null,8,["modelValue","rules"])]),a("div",T,[$,t(n,{modelValue:v.value,"onUpdate:modelValue":s[4]||(s[4]=o=>v.value=o),type:"password",id:"confirm_password",rules:i.value.confirm_password,outlined:"",dense:""},null,8,["modelValue","rules"])]),t(U,{type:"submit",color:"primary",label:"Sign Up Now",class:"full-width q-mt-sm",loading:u.value,disable:u.value,"no-caps":""},{loading:_(()=>[t(q)]),_:1},8,["loading","disable"]),a("div",D,[a("div",H,[w(" Sudah mempunyai akun? "),t(y,{to:{name:"login"},class:"text-primary"},{default:_(()=>[w("Sign In")]),_:1})])])]),_:1})])}}};export{se as default};
