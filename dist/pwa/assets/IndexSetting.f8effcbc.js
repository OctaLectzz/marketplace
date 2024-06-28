import{Q as A}from"./QSkeleton.01e1d850.js";import{V as Le,F as $e,f as v,P as Ee,a7 as le,aj as Z,Q as B,O as He,c as Ne,H as Oe,I as Qe,bw as Fe,r as S,d as T,w as V,j as ae,o as Re,g as Ae,U as Ue,W as je,aA as De,m as E,x as H,q as u,p as f,aU as N,a$ as P,z,D as Ie,A as ee,C as te,B as U,b0 as re,u as Ke,n as Me,aP as We,b1 as j}from"./index.30dd2348.js";import{Q as Ge}from"./QSpinnerGears.3a9ff54e.js";import{Q as se}from"./QForm.550ba64a.js";import{Q as Xe}from"./QPage.b9e58bdc.js";import{u as ue}from"./use-quasar.67b6ac9a.js";import{u as W}from"./setting-store.da2b3ed1.js";import{Q as Je}from"./QSpace.005ac978.js";import{Q as Ye}from"./QBtnDropdown.8e6f75ac.js";import{Q as Ze}from"./QTooltip.3ed074ee.js";import{a as oe,Q as Ve}from"./QItem.2b7551f8.js";import{u as et,a as tt,b as ot}from"./use-fullscreen.13a86615.js";import{Q as it}from"./QSpinnerHourglass.0262d2ae.js";import{C as ie}from"./ClosePopup.b6be3405.js";import"./axios.66ae61ea.js";import"./QBtnGroup.e96b8949.js";import"./QMenu.19c3a5ff.js";import"./selection.64adb4fb.js";function ce(t,e){if(e&&t===e)return null;const o=t.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return t;const l=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,a=l.display;return a==="block"||a==="table"?t:ce(t.parentNode)}function D(t,e,o){return!t||t===document.body?!1:o===!0&&t===e||(e===document?document.body:e).contains(t.parentNode)}function de(t,e,o){if(o||(o=document.createRange(),o.selectNode(t),o.setStart(t,0)),e.count===0)o.setEnd(t,e.count);else if(e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(o.setEnd(t,e.count),e.count=0);else for(let l=0;e.count!==0&&l<t.childNodes.length;l++)o=de(t.childNodes[l],e,o);return o}const nt=/^https?:\/\//;class lt{constructor(e,o){this.el=e,this.eVm=o,this._range=null}get selection(){if(this.el){const e=document.getSelection();if(D(e.anchorNode,this.el,!0)&&D(e.focusNode,this.el,!0))return e}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const e=this.selection;return e!==null&&e.rangeCount?e.getRangeAt(0):this._range}get parent(){const e=this.range;if(e!==null){const o=e.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const e=this.parent;return e!==null?ce(e,this.el):null}save(e=this.range){e!==null&&(this._range=e)}restore(e=this._range){const o=document.createRange(),l=document.getSelection();e!==null?(o.setStart(e.startContainer,e.startOffset),o.setEnd(e.endContainer,e.endOffset),l.removeAllRanges(),l.addRange(o)):(l.selectAllChildren(this.el),l.collapseToEnd())}savePosition(){let e=-1,o;const l=document.getSelection(),a=this.el.parentNode;if(l.focusNode&&D(l.focusNode,a))for(o=l.focusNode,e=l.focusOffset;o&&o!==a;)o!==this.el&&o.previousSibling?(o=o.previousSibling,e+=o.textContent.length):o=o.parentNode;this.savedPos=e}restorePosition(e=0){if(this.savedPos>0&&this.savedPos<e){const o=window.getSelection(),l=de(this.el,{count:this.savedPos});l&&(l.collapse(!1),o.removeAllRanges(),o.addRange(l))}}hasParent(e,o){const l=o?this.parent:this.blockParent;return l!==null?l.nodeName.toLowerCase()===e.toLowerCase():!1}hasParents(e,o,l=this.parent){return l===null?!1:e.includes(l.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(e,o,l.parentNode):!1}is(e,o){if(this.selection===null)return!1;switch(e){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(e)===o;case"fontName":const l=document.queryCommandValue(e);return l===`"${o}"`||l===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(e);return o!==void 0?a===o:a}}getParentAttribute(e){return this.parent!==null?this.parent.getAttribute(e):null}can(e){if(e==="outdent")return this.hasParents(["blockquote","li"],!0);if(e==="indent")return this.hasParents(["li"],!0);if(e==="link")return this.selection!==null||this.is("link")}apply(e,o,l=Le){if(e==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(e,o)&&(e="outdent",o=null),o==="PRE"&&this.is(e,"PRE")&&(o="P");else if(e==="print"){l();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(e==="link"){const a=this.getParentAttribute("href");if(a===null){const h=this.selectWord(this.selection),r=h?h.toString():"";if(!r.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=nt.test(r)?r:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(h.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(e==="fullscreen"){this.eVm.toggleFullscreen(),l();return}else if(e==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),l();return}document.execCommand(e,!1,o),l()}selectWord(e){if(e===null||e.isCollapsed!==!0||e.modify===void 0)return e;const o=document.createRange();o.setStart(e.anchorNode,e.anchorOffset),o.setEnd(e.focusNode,e.focusOffset);const l=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const a=e.focusNode,h=e.focusOffset;return e.collapse(e.anchorNode,e.anchorOffset),e.modify("move",l[0],"character"),e.modify("move",l[1],"word"),e.extend(a,h),e.modify("extend",l[1],"character"),e.modify("extend",l[0],"word"),e}}function fe(t,e,o){e.handler?e.handler(t,o,o.caret):o.runCmd(e.cmd,e.param)}function G(t){return v("div",{class:"q-editor__toolbar-group"},t)}function me(t,e,o,l=!1){const a=l||(e.type==="toggle"?e.toggled?e.toggled(t):e.cmd&&t.caret.is(e.cmd,e.param):!1),h=[];if(e.tip&&t.$q.platform.is.desktop){const r=e.key?v("div",[v("small",`(CTRL + ${String.fromCharCode(e.key)})`)]):null;h.push(v(Ze,{delay:1e3},()=>[v("div",{innerHTML:e.tip}),r]))}return v(B,{...t.buttonProps.value,icon:e.icon!==null?e.icon:void 0,color:a?e.toggleColor||t.props.toolbarToggleColor:e.color||t.props.toolbarColor,textColor:a&&!t.props.toolbarPush?null:e.textColor||t.props.toolbarTextColor,label:e.label,disable:e.disable?typeof e.disable=="function"?e.disable(t):!0:!1,size:"sm",onClick(r){o&&o(),fe(r,e,t)}},()=>h)}function at(t,e){const o=e.list==="only-icons";let l=e.label,a=e.icon!==null?e.icon:void 0,h,r;function c(){y.component.proxy.hide()}if(o)r=e.options.map(s=>{const w=s.type===void 0?t.caret.is(s.cmd,s.param):!1;return w&&(l=s.tip,a=s.icon!==null?s.icon:void 0),me(t,s,c,w)}),h=t.toolbarBackgroundClass.value,r=[G(r)];else{const s=t.props.toolbarToggleColor!==void 0?`text-${t.props.toolbarToggleColor}`:null,w=t.props.toolbarTextColor!==void 0?`text-${t.props.toolbarTextColor}`:null,_=e.list==="no-icons";r=e.options.map(g=>{const q=g.disable?g.disable(t):!1,m=g.type===void 0?t.caret.is(g.cmd,g.param):!1;m&&(l=g.tip,a=g.icon!==null?g.icon:void 0);const p=g.htmlTip;return v(Ve,{active:m,activeClass:s,clickable:!0,disable:q,dense:!0,onClick(C){c(),t.contentRef.value!==null&&t.contentRef.value.focus(),t.caret.restore(),fe(C,g,t)}},()=>[_===!0?null:v(oe,{class:m?s:w,side:!0},()=>v(He,{name:g.icon!==null?g.icon:void 0})),v(oe,p?()=>v("div",{class:"text-no-wrap",innerHTML:g.htmlTip}):g.tip?()=>v("div",{class:"text-no-wrap"},g.tip):void 0)])}),h=[t.toolbarBackgroundClass.value,w]}const b=e.highlight&&l!==e.label,y=v(Ye,{...t.buttonProps.value,noCaps:!0,noWrap:!0,color:b?t.props.toolbarToggleColor:t.props.toolbarColor,textColor:b&&!t.props.toolbarPush?null:t.props.toolbarTextColor,label:e.fixedLabel?e.label:l,icon:e.fixedIcon?e.icon!==null?e.icon:void 0:a,contentClass:h,onShow:s=>t.emit("dropdownShow",s),onHide:s=>t.emit("dropdownHide",s),onBeforeShow:s=>t.emit("dropdownBeforeShow",s),onBeforeHide:s=>t.emit("dropdownBeforeHide",s)},()=>r);return y}function rt(t){if(t.caret)return t.buttons.value.filter(e=>!t.isViewingSource.value||e.find(o=>o.cmd==="viewsource")).map(e=>G(e.map(o=>t.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?$e(t.slots[o.slot]):o.type==="dropdown"?at(t,o):me(t,o))))}function st(t,e,o,l={}){const a=Object.keys(l);if(a.length===0)return{};const h={default_font:{cmd:"fontName",param:t,icon:o,tip:e}};return a.forEach(r=>{const c=l[r];h[r]={cmd:"fontName",param:c,icon:o,tip:c,htmlTip:`<font face="${c}">${c}</font>`}}),h}function ut(t){if(t.caret){const e=t.props.toolbarColor||t.props.toolbarTextColor;let o=t.editLinkUrl.value;const l=()=>{t.caret.restore(),o!==t.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),t.editLinkUrl.value=null};return[v("div",{class:`q-mx-xs text-${e}`},`${t.$q.lang.editor.url}: `),v("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:a=>{Ee(a),o=a.target.value},onKeydown:a=>{if(le(a)!==!0)switch(a.keyCode){case 13:return Z(a),l();case 27:Z(a),t.caret.restore(),(!t.editLinkUrl.value||t.editLinkUrl.value==="https://")&&document.execCommand("unlink"),t.editLinkUrl.value=null;break}}}),G([v(B,{key:"qedt_btm_rem",tabindex:-1,...t.buttonProps.value,label:t.$q.lang.label.remove,noCaps:!0,onClick:()=>{t.caret.restore(),document.execCommand("unlink"),t.editLinkUrl.value=null}}),v(B,{key:"qedt_btm_upd",...t.buttonProps.value,label:t.$q.lang.label.update,noCaps:!0,onClick:l})])]}}const ct=Object.prototype.toString,I=Object.prototype.hasOwnProperty,dt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(t=>"[object "+t+"]"));function ne(t){if(t!==Object(t)||dt.has(ct.call(t))===!0||t.constructor&&I.call(t,"constructor")===!1&&I.call(t.constructor.prototype,"isPrototypeOf")===!1)return!1;let e;for(e in t);return e===void 0||I.call(t,e)}function pe(){let t,e,o,l,a,h,r=arguments[0]||{},c=1,b=!1;const y=arguments.length;for(typeof r=="boolean"&&(b=r,r=arguments[1]||{},c=2),Object(r)!==r&&typeof r!="function"&&(r={}),y===c&&(r=this,c--);c<y;c++)if((t=arguments[c])!==null)for(e in t)o=r[e],l=t[e],r!==l&&(b===!0&&l&&((a=Array.isArray(l))||ne(l)===!0)?(a===!0?h=Array.isArray(o)===!0?o:[]:h=ne(o)===!0?o:{},r[e]=pe(b,h,l)):l!==void 0&&(r[e]=l));return r}var K=Ne({name:"QEditor",props:{...Oe,...et,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:t=>t.length===0||t.every(e=>e.length),default:()=>[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:t=>["div","p"].includes(t),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...tt,"update:modelValue","keydown","click","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(t,{slots:e,emit:o}){const{proxy:l}=Ae(),{$q:a}=l,h=Qe(t,a),{inFullscreen:r,toggleFullscreen:c}=ot(),b=Fe(),y=S(null),s=S(null),w=S(null),_=S(!1),g=T(()=>!t.readonly&&!t.disable);let q,m,p=t.modelValue;document.execCommand("defaultParagraphSeparator",!1,t.paragraphTag),q=window.getComputedStyle(document.body).fontFamily;const C=T(()=>t.toolbarBg?` bg-${t.toolbarBg}`:""),he=T(()=>{const i=t.toolbarOutline!==!0&&t.toolbarPush!==!0;return{type:"a",flat:i,noWrap:!0,outline:t.toolbarOutline,push:t.toolbarPush,rounded:t.toolbarRounded,dense:!0,color:t.toolbarColor,disable:!g.value,size:"sm"}}),O=T(()=>{const i=a.lang.editor,n=a.iconSet.editor;return{bold:{cmd:"bold",icon:n.bold,tip:i.bold,key:66},italic:{cmd:"italic",icon:n.italic,tip:i.italic,key:73},strike:{cmd:"strikeThrough",icon:n.strikethrough,tip:i.strikethrough,key:83},underline:{cmd:"underline",icon:n.underline,tip:i.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:n.unorderedList,tip:i.unorderedList},ordered:{cmd:"insertOrderedList",icon:n.orderedList,tip:i.orderedList},subscript:{cmd:"subscript",icon:n.subscript,tip:i.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:n.superscript,tip:i.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:d=>d.caret&&!d.caret.can("link"),icon:n.hyperlink,tip:i.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:n.toggleFullscreen,tip:i.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:n.viewSource,tip:i.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:n.quote,tip:i.quote,key:81},left:{cmd:"justifyLeft",icon:n.left,tip:i.left},center:{cmd:"justifyCenter",icon:n.center,tip:i.center},right:{cmd:"justifyRight",icon:n.right,tip:i.right},justify:{cmd:"justifyFull",icon:n.justify,tip:i.justify},print:{type:"no-state",cmd:"print",icon:n.print,tip:i.print,key:80},outdent:{type:"no-state",disable:d=>d.caret&&!d.caret.can("outdent"),cmd:"outdent",icon:n.outdent,tip:i.outdent},indent:{type:"no-state",disable:d=>d.caret&&!d.caret.can("indent"),cmd:"indent",icon:n.indent,tip:i.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:n.removeFormat,tip:i.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:n.hr,tip:i.hr},undo:{type:"no-state",cmd:"undo",icon:n.undo,tip:i.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:n.redo,tip:i.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:n.heading1||n.heading,tip:i.heading1,htmlTip:`<h1 class="q-ma-none">${i.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:n.heading2||n.heading,tip:i.heading2,htmlTip:`<h2 class="q-ma-none">${i.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:n.heading3||n.heading,tip:i.heading3,htmlTip:`<h3 class="q-ma-none">${i.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:n.heading4||n.heading,tip:i.heading4,htmlTip:`<h4 class="q-ma-none">${i.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:n.heading5||n.heading,tip:i.heading5,htmlTip:`<h5 class="q-ma-none">${i.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:n.heading6||n.heading,tip:i.heading6,htmlTip:`<h6 class="q-ma-none">${i.heading6}</h6>`},p:{cmd:"formatBlock",param:t.paragraphTag,icon:n.heading,tip:i.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:n.code,htmlTip:`<code>${i.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:n.size1||n.size,tip:i.size1,htmlTip:`<font size="1">${i.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:n.size2||n.size,tip:i.size2,htmlTip:`<font size="2">${i.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:n.size3||n.size,tip:i.size3,htmlTip:`<font size="3">${i.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:n.size4||n.size,tip:i.size4,htmlTip:`<font size="4">${i.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:n.size5||n.size,tip:i.size5,htmlTip:`<font size="5">${i.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:n.size6||n.size,tip:i.size6,htmlTip:`<font size="6">${i.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:n.size7||n.size,tip:i.size7,htmlTip:`<font size="7">${i.size7}</font>`}}}),X=T(()=>{const i=t.definitions||{},n=t.definitions||t.fonts?pe(!0,{},O.value,i,st(q,a.lang.editor.defaultFont,a.iconSet.editor.font,t.fonts)):O.value;return t.toolbar.map(d=>d.map(k=>{if(k.options)return{type:"dropdown",icon:k.icon,label:k.label,size:"sm",dense:!0,fixedLabel:k.fixedLabel,fixedIcon:k.fixedIcon,highlight:k.highlight,list:k.list,options:k.options.map(Be=>n[Be])};const L=n[k];return L?L.type==="no-state"||i[k]&&(L.cmd===void 0||O.value[L.cmd]&&O.value[L.cmd].type==="no-state")?L:Object.assign({type:"toggle"},L):{type:"slot",slot:k}}))}),x={$q:a,props:t,slots:e,emit:o,inFullscreen:r,toggleFullscreen:c,runCmd:F,isViewingSource:_,editLinkUrl:w,toolbarBackgroundClass:C,buttonProps:he,contentRef:s,buttons:X,setContent:Q};V(()=>t.modelValue,i=>{p!==i&&(p=i,Q(i,!0))}),V(w,i=>{o(`link${i?"Show":"Hide"}`)});const ge=T(()=>t.toolbar&&t.toolbar.length!==0),ve=T(()=>{const i={},n=d=>{d.key&&(i[d.key]={cmd:d.cmd,param:d.param})};return X.value.forEach(d=>{d.forEach(k=>{k.options?k.options.forEach(n):n(k)})}),i}),ye=T(()=>r.value?t.contentStyle:[{minHeight:t.minHeight,height:t.height,maxHeight:t.maxHeight},t.contentStyle]),be=T(()=>`q-editor q-editor--${_.value===!0?"source":"default"}`+(t.disable===!0?" disabled":"")+(r.value===!0?" fullscreen column":"")+(t.square===!0?" q-editor--square no-border-radius":"")+(t.flat===!0?" q-editor--flat":"")+(t.dense===!0?" q-editor--dense":"")+(h.value===!0?" q-editor--dark q-dark":"")),we=T(()=>[t.contentClass,"q-editor__content",{col:r.value,"overflow-auto":r.value||t.maxHeight}]),ke=T(()=>t.disable===!0?{"aria-disabled":"true"}:{});function Se(){if(s.value!==null){const i=`inner${_.value===!0?"Text":"HTML"}`,n=s.value[i];n!==t.modelValue&&(p=n,o("update:modelValue",n))}}function Ce(i){if(o("keydown",i),i.ctrlKey!==!0||le(i)===!0){$();return}const n=i.keyCode,d=ve.value[n];if(d!==void 0){const{cmd:k,param:L}=d;Ue(i),F(k,L,!1)}}function _e(i){$(),o("click",i)}function xe(i){if(s.value!==null){const{scrollTop:n,scrollHeight:d}=s.value;m=d-n}x.caret.save(),o("blur",i)}function Te(i){je(()=>{s.value!==null&&m!==void 0&&(s.value.scrollTop=s.value.scrollHeight-m)}),o("focus",i)}function qe(i){const n=y.value;if(n!==null&&n.contains(i.target)===!0&&(i.relatedTarget===null||n.contains(i.relatedTarget)!==!0)){const d=`inner${_.value===!0?"Text":"HTML"}`;x.caret.restorePosition(s.value[d].length),$()}}function ze(i){const n=y.value;n!==null&&n.contains(i.target)===!0&&(i.relatedTarget===null||n.contains(i.relatedTarget)!==!0)&&(x.caret.savePosition(),$())}function J(){m=void 0}function Y(i){x.caret.save()}function Q(i,n){if(s.value!==null){n===!0&&x.caret.savePosition();const d=`inner${_.value===!0?"Text":"HTML"}`;s.value[d]=i,n===!0&&(x.caret.restorePosition(s.value[d].length),$())}}function F(i,n,d=!0){R(),x.caret.restore(),x.caret.apply(i,n,()=>{R(),x.caret.save(),d&&$()})}function $(){setTimeout(()=>{w.value=null,l.$forceUpdate()},1)}function R(){De(()=>{s.value!==null&&s.value.focus({preventScroll:!0})})}function Pe(){return s.value}return ae(()=>{x.caret=l.caret=new lt(s.value,x),Q(t.modelValue),$(),document.addEventListener("selectionchange",Y)}),Re(()=>{document.removeEventListener("selectionchange",Y)}),Object.assign(l,{runCmd:F,refreshToolbar:$,focus:R,getContentEl:Pe}),()=>{let i;if(ge.value){const n=[v("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+C.value},rt(x))];w.value!==null&&n.push(v("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+C.value},ut(x))),i=v("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},n)}return v("div",{ref:y,class:be.value,style:{height:r.value===!0?"100%":null},...ke.value,onFocusin:qe,onFocusout:ze},[i,v("div",{ref:s,style:ye.value,class:we.value,contenteditable:g.value,placeholder:t.placeholder,...b.listeners.value,onInput:Se,onKeydown:Ce,onClick:_e,onBlur:xe,onFocus:Te,onMousedown:J,onTouchstartPassive:J})])}}});const ft={class:"text-h6"},mt={class:"row justify-center"},pt={key:0,class:"col-10 q-ma-sm"},ht={key:1,class:"col-10 q-ma-sm"},gt={key:2,class:"col-10 q-ma-sm"},M={__name:"EditSetting",props:["title","edit","item"],emits:["edited"],setup(t,{emit:e}){const o=ue(),l=e,{title:a,edit:h,item:r}=t,c=S({id:r.id,version:r.version,terms:r.terms,tutorial:r.tutorial,privacy_policy:r.privacy_policy}),b=S([["left","center","right","justify"],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","cut"],["print","fullscreen"],[{label:o.lang.editor.formatting,icon:o.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:o.lang.editor.fontSize,icon:o.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:o.lang.editor.defaultFont,icon:o.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","poppins","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]]),y=S({poppins:"Poppins",arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}),s=S([q=>!!q||"Data harus diisi"]),w=S(!1),_=T(()=>w.value),g=async()=>{w.value=!0;try{await W().edit(c.value),o.notify({message:a+" berhasil diedit",icon:"check",color:"positive"}),l("edited")}catch(q){console.error("Error submitting form:",q),o.notify({message:q.response.data.message||a+" gagal diedit, Silahkan coba lagi nanti",icon:"warning",color:"negative"})}w.value=!1};return(q,m)=>(E(),H("div",null,[u(se,{onSubmit:g},{default:f(()=>[u(N,{style:{"min-width":"400px"}},{default:f(()=>[u(P,{class:"row items-center q-py-sm"},{default:f(()=>[z("div",ft,"Edit "+Ie(t.title),1),u(Je),ee(u(B,{icon:"close",flat:"",round:"",dense:""},null,512),[[ie]])]),_:1}),u(te),u(P,{class:"scroll",style:{height:"77vh"}},{default:f(()=>[z("div",mt,[t.title==="Tutorial"?(E(),H("div",pt,[u(K,{modelValue:c.value.tutorial,"onUpdate:modelValue":m[0]||(m[0]=p=>c.value.tutorial=p),toolbar:b.value,fonts:y.value,rules:s.value,style:{width:"100%","min-height":"470px"}},null,8,["modelValue","toolbar","fonts","rules"])])):U("",!0),t.title==="Syarat dan Ketentuan"?(E(),H("div",ht,[u(K,{modelValue:c.value.terms,"onUpdate:modelValue":m[1]||(m[1]=p=>c.value.terms=p),toolbar:b.value,fonts:y.value,rules:s.value,style:{width:"100%","min-height":"470px"}},null,8,["modelValue","toolbar","fonts","rules"])])):U("",!0),t.title==="Kebijakan Privasi"?(E(),H("div",gt,[u(K,{modelValue:c.value.privacy_policy,"onUpdate:modelValue":m[2]||(m[2]=p=>c.value.privacy_policy=p),toolbar:b.value,fonts:y.value,rules:s.value,style:{width:"100%","min-height":"470px"}},null,8,["modelValue","toolbar","fonts","rules"])])):U("",!0)])]),_:1}),u(te),u(re,{align:"right",class:"text-primary"},{default:f(()=>[ee(u(B,{label:"Batal",color:"primary",flat:""},null,512),[[ie]]),u(B,{type:"submit",label:"Edit",color:"primary",loading:w.value,disable:_.value},{loading:f(()=>[u(it,{class:"on-center"})]),_:1},8,["loading","disable"])]),_:1})]),_:1})]),_:1})]))}},vt={key:0,class:"q-my-lg"},yt={key:1,class:"q-my-lg"},bt=z("div",{class:"text-h5 text-bold text-center"},"Konfigurasi",-1),wt={class:"row justify-center"},kt={class:"col-10 q-ma-sm"},St=z("div",{class:"text-bold"},"Versi :",-1),Ct=z("div",{class:"text-h5 text-bold text-center"},"Tutorial",-1),_t=["innerHTML"],xt=z("div",{class:"text-h5 text-bold text-center"},"Syarat dan Ketentuan",-1),Tt=["innerHTML"],qt=z("div",{class:"text-h5 text-bold text-center"},"Kebijakan Privasi",-1),zt=["innerHTML"],Wt={__name:"IndexSetting",setup(t){const e=ue(),o=Ke(),l=S({version:""}),a=S([]),h=S(!0),r=async()=>{try{const m=await W().dashboard();a.value=m.data.data,h.value=!1,l.value=m.data.data}catch(m){console.error("Error fetching data:",m),m.response.data.status==="failed"&&o.push("/notfound")}};ae(()=>{r()});const c=S(!1),b=S(!1),y=S(!1),s=()=>{c.value=!1,b.value=!1,y.value=!1,r()},w=S({version:[m=>!!m||"Versi harus diisi"]}),_=S(!1),g=T(()=>_.value||!l.value.version),q=async()=>{_.value=!0;try{await W().edit(l.value),e.notify({message:"Konfigurasi berhasil diedit",icon:"check",color:"positive"}),r()}catch(m){console.error("Error submitting form:",m),e.notify({message:m.response.data.message||"Konfigurasi gagal diedit, Silahkan coba lagi nanti",icon:"warning",color:"negative"})}_.value=!1};return(m,p)=>(E(),Me(Xe,{class:"q-pa-sm"},{default:f(()=>[h.value?(E(),H("div",vt,[u(A,{height:"300px",class:"q-my-md"}),u(A,{height:"500px",class:"q-my-md"}),u(A,{height:"500px",class:"q-my-md"})])):(E(),H("div",yt,[u(N,{class:"bg-white my-card q-my-md",bordered:""},{default:f(()=>[u(se,{onSubmit:q},{default:f(()=>[u(P,{class:"bg-blue-grey-2 q-pa-lg"},{default:f(()=>[bt]),_:1}),u(P,null,{default:f(()=>[z("div",wt,[z("div",kt,[St,u(We,{modelValue:l.value.version,"onUpdate:modelValue":p[0]||(p[0]=C=>l.value.version=C),label:"Versi",class:"q-mb-sm",rules:w.value.version,dense:"",outlined:"",required:""},null,8,["modelValue","rules"])])])]),_:1}),u(re,{align:"right",class:"text-primary"},{default:f(()=>[u(B,{type:"submit",label:"Simpan",color:"primary",loading:_.value,disable:g.value,class:"q-ma-md"},{loading:f(()=>[u(Ge)]),_:1},8,["loading","disable"])]),_:1})]),_:1})]),_:1}),u(N,{class:"bg-white my-card q-my-md",bordered:""},{default:f(()=>[u(P,{class:"bg-blue-grey-2 q-pa-lg"},{default:f(()=>[u(B,{color:"warning",field:"edit",icon:"edit",class:"absolute absolute-top-right q-ma-md",onClick:p[2]||(p[2]=C=>c.value=!0),dense:"",round:""},{default:f(()=>[u(j,{modelValue:c.value,"onUpdate:modelValue":p[1]||(p[1]=C=>c.value=C),"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:f(()=>[u(M,{onEdited:s,title:"Tutorial",item:a.value},null,8,["item"])]),_:1},8,["modelValue"])]),_:1}),Ct]),_:1}),u(P,{class:"q-pa-md"},{default:f(()=>[z("div",{innerHTML:a.value.tutorial},null,8,_t)]),_:1})]),_:1}),u(N,{class:"bg-white my-card q-my-md",bordered:""},{default:f(()=>[u(P,{class:"bg-blue-grey-2 q-pa-lg"},{default:f(()=>[u(B,{color:"warning",field:"edit",icon:"edit",class:"absolute absolute-top-right q-ma-md",onClick:p[4]||(p[4]=C=>b.value=!0),dense:"",round:""},{default:f(()=>[u(j,{modelValue:b.value,"onUpdate:modelValue":p[3]||(p[3]=C=>b.value=C),"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:f(()=>[u(M,{onEdited:s,title:"Syarat dan Ketentuan",item:a.value},null,8,["item"])]),_:1},8,["modelValue"])]),_:1}),xt]),_:1}),u(P,{class:"q-pa-md"},{default:f(()=>[z("div",{innerHTML:a.value.terms},null,8,Tt)]),_:1})]),_:1}),u(N,{class:"bg-white my-card q-my-md",bordered:""},{default:f(()=>[u(P,{class:"bg-blue-grey-2 q-pa-lg"},{default:f(()=>[u(B,{color:"warning",field:"edit",icon:"edit",class:"absolute absolute-top-right q-ma-md",onClick:p[6]||(p[6]=C=>y.value=!0),dense:"",round:""},{default:f(()=>[u(j,{modelValue:y.value,"onUpdate:modelValue":p[5]||(p[5]=C=>y.value=C),"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:f(()=>[u(M,{onEdited:s,title:"Kebijakan Privasi",item:a.value},null,8,["item"])]),_:1},8,["modelValue"])]),_:1}),qt]),_:1}),u(P,{class:"q-pa-md"},{default:f(()=>[z("div",{innerHTML:a.value.privacy_policy},null,8,zt)]),_:1})]),_:1})]))]),_:1}))}};export{Wt as default};