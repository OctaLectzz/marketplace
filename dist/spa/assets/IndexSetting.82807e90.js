import{Q as j}from"./QSkeleton.72d58935.js";import{V as $e,G as Ee,f as v,P as He,a7 as ae,aj as J,Q as B,F as Ne,c as Oe,I as Qe,J as Fe,bt as Re,r as S,d as x,w as X,j as re,o as Ae,g as je,U as Ie,W as Ue,aA as De,m as $,x as H,q as u,p as h,a_ as O,b0 as L,z as q,D as Me,A as Y,C as Q,v as Z,B as V,b2 as se,u as Ke,n as We,aQ as Ge,a$ as ee}from"./index.3411a222.js";import{Q as Je}from"./QSpinnerGears.11fcd29c.js";import{Q as ue}from"./QForm.f0266572.js";import{Q as Xe}from"./QPage.47df145d.js";import{u as ce}from"./use-quasar.a53b7e3f.js";import{u as D}from"./setting-store.9a36211a.js";import{Q as Ye}from"./QSpace.b7b875dd.js";import{Q as Ze}from"./QBtnDropdown.774f53b6.js";import{Q as Ve}from"./QTooltip.fba44378.js";import{a as te,Q as et}from"./QItem.3b7e9927.js";import{u as tt,a as ot,b as it}from"./use-fullscreen.7b6777f7.js";import{Q as nt}from"./QSpinnerHourglass.f1de36e7.js";import{C as oe}from"./ClosePopup.5a4db590.js";import"./axios.7b547941.js";import"./QBtnGroup.37460e18.js";import"./QMenu.2d1a1d67.js";import"./selection.3ca1e304.js";function de(t,e){if(e&&t===e)return null;const o=t.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return t;const l=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,a=l.display;return a==="block"||a==="table"?t:de(t.parentNode)}function I(t,e,o){return!t||t===document.body?!1:o===!0&&t===e||(e===document?document.body:e).contains(t.parentNode)}function fe(t,e,o){if(o||(o=document.createRange(),o.selectNode(t),o.setStart(t,0)),e.count===0)o.setEnd(t,e.count);else if(e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(o.setEnd(t,e.count),e.count=0);else for(let l=0;e.count!==0&&l<t.childNodes.length;l++)o=fe(t.childNodes[l],e,o);return o}const lt=/^https?:\/\//;class at{constructor(e,o){this.el=e,this.eVm=o,this._range=null}get selection(){if(this.el){const e=document.getSelection();if(I(e.anchorNode,this.el,!0)&&I(e.focusNode,this.el,!0))return e}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const e=this.selection;return e!==null&&e.rangeCount?e.getRangeAt(0):this._range}get parent(){const e=this.range;if(e!==null){const o=e.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const e=this.parent;return e!==null?de(e,this.el):null}save(e=this.range){e!==null&&(this._range=e)}restore(e=this._range){const o=document.createRange(),l=document.getSelection();e!==null?(o.setStart(e.startContainer,e.startOffset),o.setEnd(e.endContainer,e.endOffset),l.removeAllRanges(),l.addRange(o)):(l.selectAllChildren(this.el),l.collapseToEnd())}savePosition(){let e=-1,o;const l=document.getSelection(),a=this.el.parentNode;if(l.focusNode&&I(l.focusNode,a))for(o=l.focusNode,e=l.focusOffset;o&&o!==a;)o!==this.el&&o.previousSibling?(o=o.previousSibling,e+=o.textContent.length):o=o.parentNode;this.savedPos=e}restorePosition(e=0){if(this.savedPos>0&&this.savedPos<e){const o=window.getSelection(),l=fe(this.el,{count:this.savedPos});l&&(l.collapse(!1),o.removeAllRanges(),o.addRange(l))}}hasParent(e,o){const l=o?this.parent:this.blockParent;return l!==null?l.nodeName.toLowerCase()===e.toLowerCase():!1}hasParents(e,o,l=this.parent){return l===null?!1:e.includes(l.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(e,o,l.parentNode):!1}is(e,o){if(this.selection===null)return!1;switch(e){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(e)===o;case"fontName":const l=document.queryCommandValue(e);return l===`"${o}"`||l===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(e);return o!==void 0?a===o:a}}getParentAttribute(e){return this.parent!==null?this.parent.getAttribute(e):null}can(e){if(e==="outdent")return this.hasParents(["blockquote","li"],!0);if(e==="indent")return this.hasParents(["li"],!0);if(e==="link")return this.selection!==null||this.is("link")}apply(e,o,l=$e){if(e==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(e,o)&&(e="outdent",o=null),o==="PRE"&&this.is(e,"PRE")&&(o="P");else if(e==="print"){l();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(e==="link"){const a=this.getParentAttribute("href");if(a===null){const f=this.selectWord(this.selection),r=f?f.toString():"";if(!r.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=lt.test(r)?r:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(f.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(e==="fullscreen"){this.eVm.toggleFullscreen(),l();return}else if(e==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),l();return}document.execCommand(e,!1,o),l()}selectWord(e){if(e===null||e.isCollapsed!==!0||e.modify===void 0)return e;const o=document.createRange();o.setStart(e.anchorNode,e.anchorOffset),o.setEnd(e.focusNode,e.focusOffset);const l=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const a=e.focusNode,f=e.focusOffset;return e.collapse(e.anchorNode,e.anchorOffset),e.modify("move",l[0],"character"),e.modify("move",l[1],"word"),e.extend(a,f),e.modify("extend",l[1],"character"),e.modify("extend",l[0],"word"),e}}function me(t,e,o){e.handler?e.handler(t,o,o.caret):o.runCmd(e.cmd,e.param)}function M(t){return v("div",{class:"q-editor__toolbar-group"},t)}function he(t,e,o,l=!1){const a=l||(e.type==="toggle"?e.toggled?e.toggled(t):e.cmd&&t.caret.is(e.cmd,e.param):!1),f=[];if(e.tip&&t.$q.platform.is.desktop){const r=e.key?v("div",[v("small",`(CTRL + ${String.fromCharCode(e.key)})`)]):null;f.push(v(Ve,{delay:1e3},()=>[v("div",{innerHTML:e.tip}),r]))}return v(B,{...t.buttonProps.value,icon:e.icon!==null?e.icon:void 0,color:a?e.toggleColor||t.props.toolbarToggleColor:e.color||t.props.toolbarColor,textColor:a&&!t.props.toolbarPush?null:e.textColor||t.props.toolbarTextColor,label:e.label,disable:e.disable?typeof e.disable=="function"?e.disable(t):!0:!1,size:"sm",onClick(r){o&&o(),me(r,e,t)}},()=>f)}function rt(t,e){const o=e.list==="only-icons";let l=e.label,a=e.icon!==null?e.icon:void 0,f,r;function d(){C.component.proxy.hide()}if(o)r=e.options.map(s=>{const y=s.type===void 0?t.caret.is(s.cmd,s.param):!1;return y&&(l=s.tip,a=s.icon!==null?s.icon:void 0),he(t,s,d,y)}),f=t.toolbarBackgroundClass.value,r=[M(r)];else{const s=t.props.toolbarToggleColor!==void 0?`text-${t.props.toolbarToggleColor}`:null,y=t.props.toolbarTextColor!==void 0?`text-${t.props.toolbarTextColor}`:null,T=e.list==="no-icons";r=e.options.map(p=>{const g=p.disable?p.disable(t):!1,m=p.type===void 0?t.caret.is(p.cmd,p.param):!1;m&&(l=p.tip,a=p.icon!==null?p.icon:void 0);const b=p.htmlTip;return v(et,{active:m,activeClass:s,clickable:!0,disable:g,dense:!0,onClick(E){d(),t.contentRef.value!==null&&t.contentRef.value.focus(),t.caret.restore(),me(E,p,t)}},()=>[T===!0?null:v(te,{class:m?s:y,side:!0},()=>v(Ne,{name:p.icon!==null?p.icon:void 0})),v(te,b?()=>v("div",{class:"text-no-wrap",innerHTML:p.htmlTip}):p.tip?()=>v("div",{class:"text-no-wrap"},p.tip):void 0)])}),f=[t.toolbarBackgroundClass.value,y]}const w=e.highlight&&l!==e.label,C=v(Ze,{...t.buttonProps.value,noCaps:!0,noWrap:!0,color:w?t.props.toolbarToggleColor:t.props.toolbarColor,textColor:w&&!t.props.toolbarPush?null:t.props.toolbarTextColor,label:e.fixedLabel?e.label:l,icon:e.fixedIcon?e.icon!==null?e.icon:void 0:a,contentClass:f,onShow:s=>t.emit("dropdownShow",s),onHide:s=>t.emit("dropdownHide",s),onBeforeShow:s=>t.emit("dropdownBeforeShow",s),onBeforeHide:s=>t.emit("dropdownBeforeHide",s)},()=>r);return C}function st(t){if(t.caret)return t.buttons.value.filter(e=>!t.isViewingSource.value||e.find(o=>o.cmd==="viewsource")).map(e=>M(e.map(o=>t.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?Ee(t.slots[o.slot]):o.type==="dropdown"?rt(t,o):he(t,o))))}function ut(t,e,o,l={}){const a=Object.keys(l);if(a.length===0)return{};const f={default_font:{cmd:"fontName",param:t,icon:o,tip:e}};return a.forEach(r=>{const d=l[r];f[r]={cmd:"fontName",param:d,icon:o,tip:d,htmlTip:`<font face="${d}">${d}</font>`}}),f}function ct(t){if(t.caret){const e=t.props.toolbarColor||t.props.toolbarTextColor;let o=t.editLinkUrl.value;const l=()=>{t.caret.restore(),o!==t.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),t.editLinkUrl.value=null};return[v("div",{class:`q-mx-xs text-${e}`},`${t.$q.lang.editor.url}: `),v("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:a=>{He(a),o=a.target.value},onKeydown:a=>{if(ae(a)!==!0)switch(a.keyCode){case 13:return J(a),l();case 27:J(a),t.caret.restore(),(!t.editLinkUrl.value||t.editLinkUrl.value==="https://")&&document.execCommand("unlink"),t.editLinkUrl.value=null;break}}}),M([v(B,{key:"qedt_btm_rem",tabindex:-1,...t.buttonProps.value,label:t.$q.lang.label.remove,noCaps:!0,onClick:()=>{t.caret.restore(),document.execCommand("unlink"),t.editLinkUrl.value=null}}),v(B,{key:"qedt_btm_upd",...t.buttonProps.value,label:t.$q.lang.label.update,noCaps:!0,onClick:l})])]}}const dt=Object.prototype.toString,U=Object.prototype.hasOwnProperty,ft=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(t=>"[object "+t+"]"));function ie(t){if(t!==Object(t)||ft.has(dt.call(t))===!0||t.constructor&&U.call(t,"constructor")===!1&&U.call(t.constructor.prototype,"isPrototypeOf")===!1)return!1;let e;for(e in t);return e===void 0||U.call(t,e)}function pe(){let t,e,o,l,a,f,r=arguments[0]||{},d=1,w=!1;const C=arguments.length;for(typeof r=="boolean"&&(w=r,r=arguments[1]||{},d=2),Object(r)!==r&&typeof r!="function"&&(r={}),C===d&&(r=this,d--);d<C;d++)if((t=arguments[d])!==null)for(e in t)o=r[e],l=t[e],r!==l&&(w===!0&&l&&((a=Array.isArray(l))||ie(l)===!0)?(a===!0?f=Array.isArray(o)===!0?o:[]:f=ie(o)===!0?o:{},r[e]=pe(w,f,l)):l!==void 0&&(r[e]=l));return r}var ne=Oe({name:"QEditor",props:{...Qe,...tt,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:t=>t.length===0||t.every(e=>e.length),default:()=>[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:t=>["div","p"].includes(t),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...ot,"update:modelValue","keydown","click","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(t,{slots:e,emit:o}){const{proxy:l}=je(),{$q:a}=l,f=Fe(t,a),{inFullscreen:r,toggleFullscreen:d}=it(),w=Re(),C=S(null),s=S(null),y=S(null),T=S(!1),p=x(()=>!t.readonly&&!t.disable);let g,m,b=t.modelValue;document.execCommand("defaultParagraphSeparator",!1,t.paragraphTag),g=window.getComputedStyle(document.body).fontFamily;const E=x(()=>t.toolbarBg?` bg-${t.toolbarBg}`:""),ge=x(()=>{const i=t.toolbarOutline!==!0&&t.toolbarPush!==!0;return{type:"a",flat:i,noWrap:!0,outline:t.toolbarOutline,push:t.toolbarPush,rounded:t.toolbarRounded,dense:!0,color:t.toolbarColor,disable:!p.value,size:"sm"}}),N=x(()=>{const i=a.lang.editor,n=a.iconSet.editor;return{bold:{cmd:"bold",icon:n.bold,tip:i.bold,key:66},italic:{cmd:"italic",icon:n.italic,tip:i.italic,key:73},strike:{cmd:"strikeThrough",icon:n.strikethrough,tip:i.strikethrough,key:83},underline:{cmd:"underline",icon:n.underline,tip:i.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:n.unorderedList,tip:i.unorderedList},ordered:{cmd:"insertOrderedList",icon:n.orderedList,tip:i.orderedList},subscript:{cmd:"subscript",icon:n.subscript,tip:i.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:n.superscript,tip:i.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:c=>c.caret&&!c.caret.can("link"),icon:n.hyperlink,tip:i.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:n.toggleFullscreen,tip:i.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:n.viewSource,tip:i.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:n.quote,tip:i.quote,key:81},left:{cmd:"justifyLeft",icon:n.left,tip:i.left},center:{cmd:"justifyCenter",icon:n.center,tip:i.center},right:{cmd:"justifyRight",icon:n.right,tip:i.right},justify:{cmd:"justifyFull",icon:n.justify,tip:i.justify},print:{type:"no-state",cmd:"print",icon:n.print,tip:i.print,key:80},outdent:{type:"no-state",disable:c=>c.caret&&!c.caret.can("outdent"),cmd:"outdent",icon:n.outdent,tip:i.outdent},indent:{type:"no-state",disable:c=>c.caret&&!c.caret.can("indent"),cmd:"indent",icon:n.indent,tip:i.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:n.removeFormat,tip:i.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:n.hr,tip:i.hr},undo:{type:"no-state",cmd:"undo",icon:n.undo,tip:i.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:n.redo,tip:i.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:n.heading1||n.heading,tip:i.heading1,htmlTip:`<h1 class="q-ma-none">${i.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:n.heading2||n.heading,tip:i.heading2,htmlTip:`<h2 class="q-ma-none">${i.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:n.heading3||n.heading,tip:i.heading3,htmlTip:`<h3 class="q-ma-none">${i.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:n.heading4||n.heading,tip:i.heading4,htmlTip:`<h4 class="q-ma-none">${i.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:n.heading5||n.heading,tip:i.heading5,htmlTip:`<h5 class="q-ma-none">${i.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:n.heading6||n.heading,tip:i.heading6,htmlTip:`<h6 class="q-ma-none">${i.heading6}</h6>`},p:{cmd:"formatBlock",param:t.paragraphTag,icon:n.heading,tip:i.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:n.code,htmlTip:`<code>${i.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:n.size1||n.size,tip:i.size1,htmlTip:`<font size="1">${i.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:n.size2||n.size,tip:i.size2,htmlTip:`<font size="2">${i.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:n.size3||n.size,tip:i.size3,htmlTip:`<font size="3">${i.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:n.size4||n.size,tip:i.size4,htmlTip:`<font size="4">${i.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:n.size5||n.size,tip:i.size5,htmlTip:`<font size="5">${i.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:n.size6||n.size,tip:i.size6,htmlTip:`<font size="6">${i.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:n.size7||n.size,tip:i.size7,htmlTip:`<font size="7">${i.size7}</font>`}}}),K=x(()=>{const i=t.definitions||{},n=t.definitions||t.fonts?pe(!0,{},N.value,i,ut(g,a.lang.editor.defaultFont,a.iconSet.editor.font,t.fonts)):N.value;return t.toolbar.map(c=>c.map(k=>{if(k.options)return{type:"dropdown",icon:k.icon,label:k.label,size:"sm",dense:!0,fixedLabel:k.fixedLabel,fixedIcon:k.fixedIcon,highlight:k.highlight,list:k.list,options:k.options.map(Le=>n[Le])};const z=n[k];return z?z.type==="no-state"||i[k]&&(z.cmd===void 0||N.value[z.cmd]&&N.value[z.cmd].type==="no-state")?z:Object.assign({type:"toggle"},z):{type:"slot",slot:k}}))}),_={$q:a,props:t,slots:e,emit:o,inFullscreen:r,toggleFullscreen:d,runCmd:R,isViewingSource:T,editLinkUrl:y,toolbarBackgroundClass:E,buttonProps:ge,contentRef:s,buttons:K,setContent:F};X(()=>t.modelValue,i=>{b!==i&&(b=i,F(i,!0))}),X(y,i=>{o(`link${i?"Show":"Hide"}`)});const ve=x(()=>t.toolbar&&t.toolbar.length!==0),ye=x(()=>{const i={},n=c=>{c.key&&(i[c.key]={cmd:c.cmd,param:c.param})};return K.value.forEach(c=>{c.forEach(k=>{k.options?k.options.forEach(n):n(k)})}),i}),be=x(()=>r.value?t.contentStyle:[{minHeight:t.minHeight,height:t.height,maxHeight:t.maxHeight},t.contentStyle]),ke=x(()=>`q-editor q-editor--${T.value===!0?"source":"default"}`+(t.disable===!0?" disabled":"")+(r.value===!0?" fullscreen column":"")+(t.square===!0?" q-editor--square no-border-radius":"")+(t.flat===!0?" q-editor--flat":"")+(t.dense===!0?" q-editor--dense":"")+(f.value===!0?" q-editor--dark q-dark":"")),we=x(()=>[t.contentClass,"q-editor__content",{col:r.value,"overflow-auto":r.value||t.maxHeight}]),Se=x(()=>t.disable===!0?{"aria-disabled":"true"}:{});function Ce(){if(s.value!==null){const i=`inner${T.value===!0?"Text":"HTML"}`,n=s.value[i];n!==t.modelValue&&(b=n,o("update:modelValue",n))}}function _e(i){if(o("keydown",i),i.ctrlKey!==!0||ae(i)===!0){P();return}const n=i.keyCode,c=ye.value[n];if(c!==void 0){const{cmd:k,param:z}=c;Ie(i),R(k,z,!1)}}function xe(i){P(),o("click",i)}function Te(i){if(s.value!==null){const{scrollTop:n,scrollHeight:c}=s.value;m=c-n}_.caret.save(),o("blur",i)}function qe(i){Ue(()=>{s.value!==null&&m!==void 0&&(s.value.scrollTop=s.value.scrollHeight-m)}),o("focus",i)}function ze(i){const n=C.value;if(n!==null&&n.contains(i.target)===!0&&(i.relatedTarget===null||n.contains(i.relatedTarget)!==!0)){const c=`inner${T.value===!0?"Text":"HTML"}`;_.caret.restorePosition(s.value[c].length),P()}}function Be(i){const n=C.value;n!==null&&n.contains(i.target)===!0&&(i.relatedTarget===null||n.contains(i.relatedTarget)!==!0)&&(_.caret.savePosition(),P())}function W(){m=void 0}function G(i){_.caret.save()}function F(i,n){if(s.value!==null){n===!0&&_.caret.savePosition();const c=`inner${T.value===!0?"Text":"HTML"}`;s.value[c]=i,n===!0&&(_.caret.restorePosition(s.value[c].length),P())}}function R(i,n,c=!0){A(),_.caret.restore(),_.caret.apply(i,n,()=>{A(),_.caret.save(),c&&P()})}function P(){setTimeout(()=>{y.value=null,l.$forceUpdate()},1)}function A(){De(()=>{s.value!==null&&s.value.focus({preventScroll:!0})})}function Pe(){return s.value}return re(()=>{_.caret=l.caret=new at(s.value,_),F(t.modelValue),P(),document.addEventListener("selectionchange",G)}),Ae(()=>{document.removeEventListener("selectionchange",G)}),Object.assign(l,{runCmd:R,refreshToolbar:P,focus:A,getContentEl:Pe}),()=>{let i;if(ve.value){const n=[v("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+E.value},st(_))];y.value!==null&&n.push(v("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+E.value},ct(_))),i=v("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},n)}return v("div",{ref:C,class:ke.value,style:{height:r.value===!0?"100%":null},...Se.value,onFocusin:ze,onFocusout:Be},[i,v("div",{ref:s,style:be.value,class:we.value,contenteditable:p.value,placeholder:t.placeholder,...w.listeners.value,onInput:Ce,onKeydown:_e,onClick:xe,onBlur:Te,onFocus:qe,onMousedown:W,onTouchstartPassive:W})])}}});const mt={class:"text-h6"},ht={class:"row justify-center"},pt={key:0,class:"col-10 q-ma-sm"},gt={key:1,class:"col-10 q-ma-sm"},le={__name:"EditSetting",props:["title","edit","item"],emits:["edited"],setup(t,{emit:e}){const o=ce(),l=e,{title:a,edit:f,item:r}=t,d=S({id:r.id,terms:r.terms,tutorial:r.tutorial}),w=S([[{label:o.lang.editor.align,icon:o.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:o.lang.editor.align,icon:o.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:o.lang.editor.formatting,icon:o.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:o.lang.editor.fontSize,icon:o.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:o.lang.editor.defaultFont,icon:o.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]]),C=S({arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}),s=S([g=>!!g||"Data harus diisi"]),y=S(!1),T=x(()=>y.value),p=async()=>{y.value=!0;try{await D().edit(d.value),o.notify({message:a+" berhasil diedit",icon:"check",color:"positive"}),l("edited")}catch(g){console.error("Error submitting form:",g),o.notify({message:g.response.data.message||a+" gagal diedit, Silahkan coba lagi nanti",icon:"warning",color:"negative"})}y.value=!1};return(g,m)=>($(),H("div",null,[u(ue,{onSubmit:p},{default:h(()=>[u(O,{style:{"min-width":"400px"}},{default:h(()=>[u(L,{class:"row items-center q-py-sm"},{default:h(()=>[q("div",mt,"Edit "+Me(t.title),1),u(Ye),Y(u(B,{icon:"close",flat:"",round:"",dense:""},null,512),[[oe]])]),_:1}),u(Q),u(L,{class:"scroll",style:{height:"77vh"}},{default:h(()=>[q("div",ht,[t.title==="Tutorial"?($(),H("div",pt,[u(ne,{modelValue:d.value.tutorial,"onUpdate:modelValue":m[0]||(m[0]=b=>d.value.tutorial=b),toolbar:w.value,fonts:C.value,rules:s.value,dense:Z(o).screen.lt.md,style:{width:"100%","min-height":"470px"}},null,8,["modelValue","toolbar","fonts","rules","dense"])])):V("",!0),t.title==="Syarat dan Ketentuan"?($(),H("div",gt,[u(ne,{modelValue:d.value.terms,"onUpdate:modelValue":m[1]||(m[1]=b=>d.value.terms=b),toolbar:w.value,fonts:C.value,rules:s.value,dense:Z(o).screen.lt.md,style:{width:"100%","min-height":"470px"}},null,8,["modelValue","toolbar","fonts","rules","dense"])])):V("",!0)])]),_:1}),u(Q),u(se,{align:"right",class:"text-primary"},{default:h(()=>[Y(u(B,{label:"Batal",color:"primary",flat:""},null,512),[[oe]]),u(B,{type:"submit",label:"Edit",color:"primary",loading:y.value,disable:T.value},{loading:h(()=>[u(nt,{class:"on-center"})]),_:1},8,["loading","disable"])]),_:1})]),_:1})]),_:1})]))}},vt=q("div",{class:"text-h5 q-ma-md"},"Pengaturan",-1),yt={key:0,class:"q-my-lg"},bt={key:1,class:"q-my-lg"},kt=q("div",{class:"text-h6"},"Konfigurasi",-1),wt={class:"row justify-center"},St={class:"col-10 q-ma-sm"},Ct=q("div",{class:"text-bold"},"Versi :",-1),_t=q("div",{class:"text-h6 text-center"},"Tutorial",-1),xt=["innerHTML"],Tt=q("div",{class:"text-h6 text-center"},"Syarat dan Ketentuan",-1),qt=["innerHTML"],Kt={__name:"IndexSetting",setup(t){const e=ce(),o=Ke(),l=S({version:""}),a=S([]),f=S(!0),r=async()=>{try{const g=await D().dashboard();a.value=g.data.data,f.value=!1,l.value=g.data.data}catch(g){console.error("Error fetching data:",g),g.response.data.status==="failed"&&o.push("/notfound")}};re(()=>{r()});const d=S(!1),w=S(!1),C=()=>{d.value=!1,w.value=!1,r()},s=S({version:[g=>!!g||"Versi harus diisi"]}),y=S(!1),T=x(()=>y.value||!l.value.version),p=async()=>{y.value=!0;try{await D().edit(l.value),e.notify({message:"Konfigurasi berhasil diedit",icon:"check",color:"positive"}),r()}catch(g){console.error("Error submitting form:",g),e.notify({message:g.response.data.message||"Konfigurasi gagal diedit, Silahkan coba lagi nanti",icon:"warning",color:"negative"})}y.value=!1};return(g,m)=>($(),We(Xe,{class:"q-pa-sm"},{default:h(()=>[vt,f.value?($(),H("div",yt,[u(j,{height:"300px",class:"q-my-md"}),u(j,{height:"500px",class:"q-my-md"}),u(j,{height:"500px",class:"q-my-md"})])):($(),H("div",bt,[u(O,{class:"bg-white my-card q-my-md",bordered:""},{default:h(()=>[u(ue,{onSubmit:p},{default:h(()=>[u(L,{class:"row items-center q-py-sm"},{default:h(()=>[kt]),_:1}),u(L,null,{default:h(()=>[q("div",wt,[q("div",St,[Ct,u(Ge,{modelValue:l.value.version,"onUpdate:modelValue":m[0]||(m[0]=b=>l.value.version=b),label:"Versi",class:"q-mb-sm",rules:s.value.version,dense:"",outlined:"",required:""},null,8,["modelValue","rules"])])])]),_:1}),u(se,{align:"right",class:"text-primary"},{default:h(()=>[u(B,{type:"submit",label:"Simpan",color:"primary",loading:y.value,disable:T.value,class:"q-ma-md"},{loading:h(()=>[u(Je)]),_:1},8,["loading","disable"])]),_:1})]),_:1})]),_:1}),u(O,{class:"bg-white my-card q-pa-md q-my-md",bordered:""},{default:h(()=>[u(L,null,{default:h(()=>[u(B,{color:"warning",field:"edit",icon:"edit",class:"absolute absolute-top-right q-mx-xs",onClick:m[2]||(m[2]=b=>d.value=!0),dense:"",round:""},{default:h(()=>[u(ee,{modelValue:d.value,"onUpdate:modelValue":m[1]||(m[1]=b=>d.value=b),"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:h(()=>[u(le,{onEdited:C,title:"Tutorial",item:a.value},null,8,["item"])]),_:1},8,["modelValue"])]),_:1}),_t,u(Q,{class:"q-mt-md"})]),_:1}),u(L,null,{default:h(()=>[q("div",{innerHTML:a.value.tutorial},null,8,xt)]),_:1})]),_:1}),u(O,{class:"bg-white my-card q-pa-md q-my-md",bordered:""},{default:h(()=>[u(L,null,{default:h(()=>[u(B,{color:"warning",field:"edit",icon:"edit",class:"absolute absolute-top-right q-mx-xs",onClick:m[4]||(m[4]=b=>w.value=!0),dense:"",round:""},{default:h(()=>[u(ee,{modelValue:w.value,"onUpdate:modelValue":m[3]||(m[3]=b=>w.value=b),"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",persistent:""},{default:h(()=>[u(le,{onEdited:C,title:"Syarat dan Ketentuan",item:a.value},null,8,["item"])]),_:1},8,["modelValue"])]),_:1}),Tt,u(Q,{class:"q-mt-md"})]),_:1}),u(L,null,{default:h(()=>[q("div",{innerHTML:a.value.terms},null,8,qt)]),_:1})]),_:1})]))]),_:1}))}};export{Kt as default};
