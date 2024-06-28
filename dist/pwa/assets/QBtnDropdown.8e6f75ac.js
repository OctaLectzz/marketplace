import{c as k,J as m,L as H,r as h,M as I,d as r,N as M,w as v,j as O,f as i,O as P,F as V,Q as s,g as x,P as _}from"./index.30dd2348.js";import{Q as j}from"./QBtnGroup.e96b8949.js";import{Q as R}from"./QMenu.19c3a5ff.js";const L=Object.keys(m);function z(e){return L.reduce((o,t)=>{const l=e[t];return l!==void 0&&(o[t]=l),o},{})}var G=k({name:"QBtnDropdown",props:{...m,...H,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:t}){const{proxy:l}=x(),u=h(e.modelValue),a=h(null),c=I(),f=r(()=>{const n={"aria-expanded":u.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c.value,"aria-label":e.toggleAriaLabel||l.$q.lang.label[u.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),B=r(()=>"q-btn-dropdown__arrow"+(u.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=r(()=>M(e)),w=r(()=>z(e));v(()=>e.modelValue,n=>{a.value!==null&&a.value[n?"show":"hide"]()}),v(()=>e.split,d);function S(n){u.value=!0,t("beforeShow",n)}function q(n){t("show",n),t("update:modelValue",!0)}function C(n){u.value=!1,t("beforeHide",n)}function A(n){t("hide",n),t("update:modelValue",!1)}function D(n){t("click",n)}function y(n){_(n),d(),t("click",n)}function Q(n){a.value!==null&&a.value.toggle(n)}function g(n){a.value!==null&&a.value.show(n)}function d(n){a.value!==null&&a.value.hide(n)}return Object.assign(l,{show:g,hide:d,toggle:Q}),O(()=>{e.modelValue===!0&&g()}),()=>{const n=[i(P,{class:B.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(i(R,{ref:a,id:c.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:S,onShow:q,onBeforeHide:C,onHide:A},o.default)),e.split===!1?i(s,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:D},{default:()=>V(o.label,[]).concat(n),loading:o.loading}):i(j,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[i(s,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:y},{default:o.label,loading:o.loading}),i(s,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{G as Q};
