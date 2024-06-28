import{c as je,b4 as Qe,b5 as vt,b6 as mt,b7 as St,H as Rt,b8 as Et,I as Ht,b9 as Tt,d as f,aK as Lt,g as Ue,f as h,O as Be,ba as Dt,a6 as Pt,U as ne,V as Nt,r as E,w as me,W as G,bb as $t,aN as Kt,ac as jt,ad as Qt,o as gt,bc as Ut,bd as Wt,be as rt,a8 as ke,bf as Xt,bg as Yt,aj as Ne,bh as Gt,P as ve,T as Jt,a7 as Zt,b1 as el,h as tl}from"./index.30dd2348.js";import{a as ll,Q as ul}from"./QItem.2b7551f8.js";import{Q as nl}from"./QItemLabel.580fc480.js";import{Q as ol}from"./QMenu.19c3a5ff.js";import{r as Ke}from"./rtl.276c3f1b.js";import{n as ct}from"./format.b9446fb2.js";var il=je({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:vt,setup(){return mt(St({tagProp:!0}))}});const al={xs:8,sm:10,md:14,lg:20,xl:24};var rl=je({name:"QChip",props:{...Rt,...Et,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:a}){const{proxy:{$q:y}}=Ue(),M=Ht(e,y),i=Tt(e,al),F=f(()=>e.selected===!0||e.icon!==void 0),b=f(()=>e.selected===!0?e.iconSelected||y.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||y.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||y.lang.label.remove};return{chip:d,remove:D}});function C(d){d.keyCode===13&&k(d)}function k(d){e.disable||(a("update:selected",!e.selected),a("click",d))}function A(d){(d.keyCode===void 0||d.keyCode===13)&&(ne(d),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function L(){const d=[];z.value===!0&&d.push(h("div",{class:"q-focus-helper"})),F.value===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const D=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Dt(c.default,D))),e.iconRight&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...w.value.remove,onClick:A,onKeyup:A})),d}return()=>{if(e.modelValue===!1)return;const d={class:r.value,style:i.value};return z.value===!0&&Object.assign(d,w.value.chip,{onClick:k,onKeyup:C}),Lt("div",d,L(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Pt,e.ripple]])}}});const K=1e3,cl=["start","center","end","start-force","center-force","end-force"],ht=Array.prototype.filter,sl=window.getComputedStyle(document.body).overflowAnchor===void 0?Nt:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];ht.call(a,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const y=a[c];y&&y.dataset&&(y.dataset.qVsAnchor="")}))};function Se(e,c){return e+c}function $e(e,c,a,y,M,i,F,b){const g=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-F-b,scrollMaxSize:0,offsetStart:-F,offsetEnd:-b};if(M===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=g.scrollLeft,r.scrollViewSize+=g.clientWidth),r.scrollMaxSize=g.scrollWidth,i===!0&&(r.scrollStart=(Ke===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=g.scrollTop,r.scrollViewSize+=g.clientHeight),r.scrollMaxSize=g.scrollHeight),a!==null)for(let w=a.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=w[z]);if(y!==null)for(let w=y.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=w[z]);if(c!==e){const w=g.getBoundingClientRect(),C=c.getBoundingClientRect();M===!0?(r.offsetStart+=C.left-w.left,r.offsetEnd-=C.width):(r.offsetStart+=C.top-w.top,r.offsetEnd-=C.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function st(e,c,a,y){c==="end"&&(c=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(y===!0&&(c=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):a===!0?(y===!0&&(c=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function xe(e,c,a,y){if(a>=y)return 0;const M=c.length,i=Math.floor(a/K),F=Math.floor((y-1)/K)+1;let b=e.slice(i,F).reduce(Se,0);return a%K!==0&&(b-=c.slice(i*K,a).reduce(Se,0)),y%K!==0&&y!==M&&(b-=c.slice(y,F*K).reduce(Se,0)),b}const bt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},wl=Object.keys(bt),dt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bt};function dl({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:a,virtualScrollItemSizeComputed:y}){const M=Ue(),{props:i,emit:F,proxy:b}=M,{$q:g}=b;let z,r,w,C=[],k;const A=E(0),L=E(0),d=E({}),D=E(null),W=E(null),T=E(null),O=E({from:0,to:0}),pe=f(()=>i.tableColspan!==void 0?i.tableColspan:100);y===void 0&&(y=f(()=>i.virtualScrollItemSize));const _=f(()=>y.value+";"+i.virtualScrollHorizontal),X=f(()=>_.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(_,J);function J(){oe(r,!0)}function ge(l){oe(l===void 0?r:l)}function Z(l,o){const v=c();if(v==null||v.nodeType===8)return;const q=$e(v,a(),D.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);w!==q.scrollViewSize&&j(q.scrollViewSize),P(v,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,cl.indexOf(o)!==-1?o:r!==-1&&l>r?"end":"start")}function qe(){const l=c();if(l==null||l.nodeType===8)return;const o=$e(l,a(),D.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),v=e.value-1,q=o.scrollMaxSize-o.offsetStart-o.offsetEnd-L.value;if(z===o.scrollStart)return;if(o.scrollMaxSize<=0){P(l,o,0,0);return}w!==o.scrollViewSize&&j(o.scrollViewSize),he(O.value.from);const B=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(k[v],o.scrollViewSize/2));if(B>0&&Math.ceil(o.scrollStart)>=B){P(l,o,v,o.scrollMaxSize-o.offsetEnd-C.reduce(Se,0));return}let V=0,S=o.scrollStart-o.offsetStart,R=S;if(S<=q&&S+o.scrollViewSize>=A.value)S-=A.value,V=O.value.from,R=S;else for(let m=0;S>=C[m]&&V<v;m++)S-=C[m],V+=K;for(;S>0&&V<v;)S-=k[V],S>-o.scrollViewSize?(V++,R=S):R=k[V]+S;P(l,o,V,R)}function P(l,o,v,q,B){const V=typeof B=="string"&&B.indexOf("-force")!==-1,S=V===!0?B.replace("-force",""):B,R=S!==void 0?S:"start";let m=Math.max(0,v-d.value[R]),N=m+d.value.total;N>e.value&&(N=e.value,m=Math.max(0,N-d.value.total)),z=o.scrollStart;const Y=m!==O.value.from||N!==O.value.to;if(Y===!1&&S===void 0){be(v);return}const{activeElement:ze}=document,Q=T.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",Ae),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Ae)})),sl(Q,v-m);const Ie=S!==void 0?k.slice(m,v).reduce(Se,0):0;if(Y===!0){const ee=N>=O.value.from&&m<=O.value.to?O.value.to:N;O.value={from:m,to:ee},A.value=xe(C,k,0,m),L.value=xe(C,k,N,e.value),requestAnimationFrame(()=>{O.value.to!==N&&z===o.scrollStart&&(O.value={from:O.value.from,to:N},L.value=xe(C,k,N,e.value))})}requestAnimationFrame(()=>{if(z!==o.scrollStart)return;Y===!0&&he(m);const ee=k.slice(m,v).reduce(Se,0),te=ee+o.offsetStart+A.value,Me=te+k[v];let we=te+q;if(S!==void 0){const Ee=ee-Ie,Ve=o.scrollStart+Ee;we=V!==!0&&Ve<te&&Me<Ve+o.scrollViewSize?Ve:S==="end"?Me-o.scrollViewSize:te-(S==="start"?0:Math.round((o.scrollViewSize-k[v])/2))}z=we,st(l,we,i.virtualScrollHorizontal,g.lang.rtl),be(v)})}function he(l){const o=T.value;if(o){const v=ht.call(o.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),q=v.length,B=i.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let V=l,S,R;for(let m=0;m<q;){for(S=B(v[m]),m++;m<q&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)S+=B(v[m]),m++;R=S-k[V],R!==0&&(k[V]+=R,C[Math.floor(V/K)]+=R),V++}}}function Ae(){T.value!==null&&T.value!==void 0&&T.value.focus()}function oe(l,o){const v=1*y.value;(o===!0||Array.isArray(k)===!1)&&(k=[]);const q=k.length;k.length=e.value;for(let V=e.value-1;V>=q;V--)k[V]=v;const B=Math.floor((e.value-1)/K);C=[];for(let V=0;V<=B;V++){let S=0;const R=Math.min((V+1)*K,e.value);for(let m=V*K;m<R;m++)S+=k[m];C.push(S)}r=-1,z=void 0,A.value=xe(C,k,0,O.value.from),L.value=xe(C,k,O.value.to,e.value),l>=0?(he(O.value.from),G(()=>{Z(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const S=c();S!=null&&S.nodeType!==8&&(l=$e(S,a(),D.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const o=parseFloat(i.virtualScrollSliceRatioBefore)||0,v=parseFloat(i.virtualScrollSliceRatioAfter)||0,q=1+o+v,B=l===void 0||l<=0?1:Math.ceil(l/y.value),V=Math.max(1,B,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/q));d.value={total:Math.ceil(V*q),start:Math.ceil(V*o),center:Math.ceil(V*(.5+o)),end:Math.ceil(V*(1+o)),view:B}}function Re(l,o){const v=i.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+v]:y.value+"px"};return[l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[h("tr",[h("td",{style:{[v]:`${A.value}px`,...q},colspan:pe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[v]:`${A.value}px`,...q}}),h(l,{class:"q-virtual-scroll__content",key:"content",ref:T,tabindex:-1},o.flat()),l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[h("tr",[h("td",{style:{[v]:`${L.value}px`,...q},colspan:pe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[v]:`${L.value}px`,...q}})]}function be(l){r!==l&&(i.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:O.value.from,to:O.value.to-1,direction:l<r?"decrease":"increase",ref:b}),r=l)}j();const ie=$t(qe,g.platform.is.ios===!0?120:35);Kt(()=>{j()});let ye=!1;return jt(()=>{ye=!0}),Qt(()=>{if(ye!==!0)return;const l=c();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,i.virtualScrollHorizontal,g.lang.rtl):Z(r)}),gt(()=>{ie.cancel()}),Object.assign(b,{scrollTo:Z,reset:J,refresh:ge}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:oe,padVirtualScroll:Re,scrollTo:Z,reset:J,refresh:ge}}const ft=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);var Vl=je({name:"QSelect",inheritAttrs:!1,props:{...dt,...Ut,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:dt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...vt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:c,emit:a}){const{proxy:y}=Ue(),{$q:M}=y,i=E(!1),F=E(!1),b=E(-1),g=E(""),z=E(!1),r=E(!1);let w=null,C=null,k,A,L,d=null,D,W,T,O;const pe=E(null),_=E(null),X=E(null),J=E(null),ge=E(null),Z=Wt(e),qe=Gt(ut),P=f(()=>Array.isArray(e.options)?e.options.length:0),he=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ae,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:j,padVirtualScroll:Re,onVirtualScrollEvt:be,scrollTo:ie,setVirtualScrollSize:ye}=dl({virtualScrollLength:P,getVirtualScrollTarget:Ct,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:he}),l=St(),o=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&k!==void 0?k:[],s=n.map(p=>Vt(p,u));return e.modelValue===null&&t===!0?s.filter(p=>p!==null):s}return n}),v=f(()=>{const t={};return vl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),q=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(o.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),R=f(()=>P.value===0),m=f(()=>o.value.map(t=>$.value(t)).join(", ")),N=f(()=>e.displayValue!==void 0?e.displayValue:m.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>o.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:wt,toggleOption:le,tabindex:Q.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:n}=Ae.value;return e.options.slice(t,n).map((u,s)=>{const p=ae.value(u)===!0,x=Le(u)===!0,H=t+s,I={clickable:!0,active:x,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${H}`,onClick:()=>{le(u)}};return p!==!0&&(b.value===H&&(I.focused=!0),M.platform.is.desktop===!0&&(I.onMousemove=()=>{i.value===!0&&re(H)})),{index:H,opt:u,html:Y.value(u),label:$.value(u),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),Ee=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Te(e.optionValue,"value")),$=f(()=>Te(e.optionLabel,"label")),ae=f(()=>Te(e.optionDisable,"disable")),Oe=f(()=>o.value.map(t=>U.value(t))),yt=f(()=>{const t={onInput:ut,onChange:qe,onKeydown:et,onKeyup:Je,onKeypress:Ze,onFocus:Ye,onClick(n){A===!0&&ve(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});me(o,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&i.value!==!0||B.value!==!0)&&(L!==!0&&fe(),(F.value===!0||i.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(i,De),me(P,Bt);function We(t){return e.emitValue===!0?U.value(t):t}function He(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const n=e.modelValue.slice();a("remove",{index:t,value:n.splice(t,1)[0]}),a("update:modelValue",n)}else a("update:modelValue",null)}function wt(t){He(t),l.focus()}function Xe(t,n){const u=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce($.value(t),!0,!0),a("update:modelValue",u);return}if(o.value.length===0){a("add",{index:0,value:u}),a("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const s=e.modelValue.slice();a("add",{index:s.length,value:u}),s.push(u),a("update:modelValue",s)}function le(t,n){if(l.editable.value!==!0||t===void 0||ae.value(t)===!0)return;const u=U.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?$.value(t):"",!0,!0),ue()),_.value!==null&&_.value.focus(),(o.value.length===0||ke(U.value(o.value[0]),u)!==!0)&&a("update:modelValue",e.emitValue===!0?u:t);return}if((A!==!0||z.value===!0)&&l.focus(),Ye(),o.value.length===0){const x=e.emitValue===!0?u:t;a("add",{index:0,value:x}),a("update:modelValue",e.multiple===!0?[x]:x);return}const s=e.modelValue.slice(),p=Oe.value.findIndex(x=>ke(x,u));if(p!==-1)a("remove",{index:p,value:s.splice(p,1)[0]});else{if(e.maxValues!==void 0&&s.length>=e.maxValues)return;const x=e.emitValue===!0?u:t;a("add",{index:s.length,value:x}),s.push(x)}a("update:modelValue",s)}function re(t){if(M.platform.is.desktop!==!0)return;const n=t!==-1&&t<P.value?t:-1;b.value!==n&&(b.value=n)}function _e(t=1,n){if(i.value===!0){let u=b.value;do u=ct(u+t,-1,P.value-1);while(u!==-1&&u!==b.value&&ae.value(e.options[u])===!0);b.value!==u&&(re(u),ie(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(u>=0?$.value(e.options[u]):D,!0))}}function Vt(t,n){const u=s=>ke(U.value(s),t);return e.options.find(u)||n.find(u)||t}function Te(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:s=>s!==null&&typeof s=="object"&&u in s?s[u]:s}function Le(t){const n=U.value(t);return Oe.value.find(u=>ke(u,n))!==void 0}function Ye(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===m.value)&&_.value.select()}function Ge(t){Jt(t,27)===!0&&i.value===!0&&(ve(t),ue(),fe()),a("keyup",t)}function Je(t){const{value:n}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),s=x=>{const H=e.options.find(I=>x.value(I).toLocaleLowerCase()===u);return H===void 0?!1:(o.value.indexOf(H)===-1?le(H):ue(),!0)},p=x=>{s(U)!==!0&&(s($)===!0||x===!0||ce(n,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Ze(t){a("keypress",t)}function et(t){if(a("keydown",t),Zt(t)===!0)return;const n=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(b.value!==-1||n===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),b.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(ne(t),b.value=Math.max(-1,Math.min(P.value,b.value+(t.keyCode===33?-1:1)*oe.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),_e(t.keyCode===38?-1:1,e.multiple));const s=P.value;if((T===void 0||O<Date.now())&&(T=""),s>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||T.length!==0)){i.value!==!0&&de(t);const p=t.key.toLocaleLowerCase(),x=T.length===1&&T[0]===p;O=Date.now()+1500,x===!1&&(ne(t),T+=p);const H=new RegExp("^"+T.split("").map(Pe=>fl.indexOf(Pe)!==-1?"\\"+Pe:Pe).join(".*"),"i");let I=b.value;if(x===!0||I<0||H.test($.value(e.options[I]))!==!0)do I=ct(I+1,-1,s-1);while(I!==b.value&&(ae.value(e.options[I])===!0||H.test($.value(e.options[I]))!==!0));b.value!==I&&G(()=>{re(I),ie(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Fe($.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ne(t),b.value!==-1&&b.value<s){le(e.options[b.value]);return}if(n===!0){const p=(x,H)=>{if(H){if(ft(H)!==!0)return}else H=e.newValueMode;if(Ce("",e.multiple!==!0,!0),x==null)return;(H==="toggle"?le:Xe)(x,H==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),ue())};if(e.onNewValue!==void 0?a("newValue",g.value,p):p(g.value),e.multiple!==!0)return}i.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return A===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ct(){return tt()}function kt(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?te.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?te.value.map((t,n)=>h(rl,{key:"option-"+n,removable:l.editable.value===!0&&ae.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(n)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[h("span",{[ze.value===!0?"innerHTML":"textContent"]:N.value})]}function lt(){if(R.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:g.value}):void 0;const t=c.option!==void 0?c.option:u=>h(ul,{key:u.index,...u.itemProps},()=>h(ll,()=>h(nl,()=>h("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Re("div",Me.value.map(t));return c["before-options"]!==void 0&&(n=c["before-options"]().concat(n)),tl(c["after-options"],n)}function xt(t,n){const u=n===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,s={ref:n===!0?_:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&A===!0&&(Array.isArray(s.class)===!0?s.class=[...s.class,"no-pointer-events"]:s.class+=" no-pointer-events"),h("input",s)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),L=!0,D=g.value,l.focused.value!==!0&&(A!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(g.value)},e.inputDebounce)))}function Fe(t,n){g.value!==t&&(g.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?a("inputValue",t):C=setTimeout(()=>{C=null,a("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){L=u!==!0,e.useInput===!0&&(Fe(t,!0),(n===!0||u!==!0)&&(D=t),n!==!0&&ce(t))}function ce(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?a("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&L!==!0&&t===$.value(o.value[0])&&(t="");const s=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);d!==null&&clearTimeout(d),d=s,a("filter",t,(p,x)=>{(n===!0||l.focused.value===!0)&&d===s&&(clearTimeout(d),typeof p=="function"&&p(),r.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?i.value===!0&&ue():i.value===!0?De(!0):i.value=!0),typeof x=="function"&&G(()=>{x(y)}),typeof u=="function"&&G(()=>{u(y)})}))},()=>{l.focused.value===!0&&d===s&&(clearTimeout(d),l.innerLoading.value=!1,r.value=!1),i.value===!0&&(i.value=!1)})}function pt(){return h(ol,{ref:X,class:S.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&R.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ee.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:be,onBeforeShow:ot,onBeforeHide:qt,onShow:At},lt)}function qt(t){it(t),se()}function At(){ye()}function zt(t){ve(t),_.value!==null&&_.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function It(t){ve(t),G(()=>{z.value=!1})}function Mt(){const t=[h(il,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:q.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:zt,onBlur:It},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(h("div",{ref:ge,class:S.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Ne,onScrollPassive:be},lt())),h(el,{ref:J,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:Ot,onHide:_t,onShow:Ft},()=>h("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Ot(t){it(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function _t(t){ue(),l.focused.value===!1&&a("blur",t),fe()}function Ft(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),ye()}function se(){F.value!==!0&&(b.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(a("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function de(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),F.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(g.value):(R.value!==!0||c["no-option"]!==void 0)&&(i.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&$.value(o.value[0])||"",!0,!0)}function De(t){let n=-1;if(t===!0){if(o.value.length!==0){const u=U.value(o.value[0]);n=e.options.findIndex(s=>ke(U.value(s),u))}j(n)}re(n)}function Bt(t,n){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),G(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>n?j():De(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function ot(t){t!==void 0&&ve(t),a("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&ve(t),a("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function at(){A=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||R.value===!1:!0),W=M.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return Xt(at),Yt(nt),at(),gt(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(y,{showPopup:de,hidePopup:ue,removeAtIndex:He,add:Xe,toggleOption:le,getOptionIndex:()=>b.value,setOptionIndex:re,moveOptionSelection:_e,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:Le,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ae.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:pe,targetRef:_,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||R.value!==!0||c["no-option"]!==void 0))return A===!0?Mt():pt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if(Ne(t),A!==!0&&i.value===!0){se(),_.value!==null&&_.value.focus();return}de(t)}},getControl:t=>{const n=kt(),u=t===!0||F.value!==!0||A!==!0;if(e.useInput===!0)n.push(xt(t,u));else if(l.editable.value===!0){const p=u===!0?Ie.value:void 0;n.push(h("input",{ref:u===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:et,onKeyup:Ge,onKeypress:Ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Je}))}if(Z.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const p=Oe.value.map(x=>h("option",{value:x,selected:!0}));n.push(h("select",{class:"hidden",name:Z.value,multiple:e.multiple},p))}const s=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...s,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[h(Be,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:we.value})]:null}),mt(l)}});export{Vl as Q,rl as a,dl as b,wl as c,dt as u};