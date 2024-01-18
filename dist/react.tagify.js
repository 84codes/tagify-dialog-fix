/**
 * Tagify (v 4.18.3) - tags input component
 * By undefined
 * https://github.com/yairEO/tagify
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * THE SOFTWARE IS NOT PERMISSIBLE TO BE SOLD.
 */

!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.React.tagify=n()}(this,(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.MixedTags=void 0;var e,n=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u(n);if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=r?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(o,d,i):o[d]=e[d]}o.default=e,t&&t.set(e,o);return o}(require("react")),t=require("react-dom/server"),o=require("prop-types"),r=(e=require("./tagify.js"))&&e.__esModule?e:{default:e};const d=["children"];function u(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(u=function(e){return e?t:n})(e)}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},d=Object.keys(e);for(o=0;o<d.length;o++)t=d[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)t=d[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const c=e=>e;const l=e=>{let o=e.name,d=e.value,u=e.loading,i=void 0!==u&&u,a=e.onInput,l=void 0===a?c:a,s=e.onAdd,f=void 0===s?c:s,p=e.onRemove,y=void 0===p?c:p,g=e.onEditInput,v=void 0===g?c:g,w=e.onEditBeforeUpdate,h=void 0===w?c:w,O=e.onEditUpdated,b=void 0===O?c:O,m=e.onEditStart,E=void 0===m?c:m,j=e.onEditKeydown,D=void 0===j?c:j,M=e.onInvalid,x=void 0===M?c:M,S=e.onClick,k=void 0===S?c:S,I=e.onKeydown,R=void 0===I?c:I,N=e.onFocus,P=void 0===N?c:N,T=e.onBlur,C=void 0===T?c:T,U=e.onChange,F=void 0===U?c:U,_=e.onDropdownShow,V=void 0===_?c:_,q=e.onDropdownHide,B=void 0===q?c:q,K=e.onDropdownSelect,A=void 0===K?c:K,W=e.onDropdownScroll,H=void 0===W?c:W,J=e.onDropdownNoMatch,z=void 0===J?c:J,G=e.onDropdownUpdated,L=void 0===G?c:G,Q=e.readOnly,X=e.disabled,Y=e.children,Z=e.settings,$=void 0===Z?{}:Z,ee=e.InputMode,ne=void 0===ee?"input":ee,te=e.autoFocus,oe=e.className,re=e.whitelist,de=e.tagifyRef,ue=e.placeholder,ie=void 0===ue?"":ue,ae=e.defaultValue,ce=e.showDropdown;const le=(0,n.useRef)(),se=(0,n.useRef)(),fe=(0,n.useRef)(),pe=ae||d,ye=(0,n.useMemo)((()=>({ref:se,name:o,defaultValue:Y||"string"==typeof pe?pe:JSON.stringify(pe),className:oe,readOnly:Q,disabled:X,autoFocus:te,placeholder:ie})),[]),ge=(0,n.useCallback)((()=>{te&&fe.current&&fe.current.DOM.input.focus()}),[fe]);return(0,n.useEffect)((()=>{!function(e){if(e)for(let o in e){let r=e[o];String(r).includes("jsxRuntime")&&(e[o]=function(){for(var e=arguments.length,o=new Array(e),d=0;d<e;d++)o[d]=arguments[d];return(0,t.renderToStaticMarkup)(n.default.createElement(r,{props:o}))})}}($.templates),"textarea"==ne&&($.mode="mix"),re&&re.length&&($.whitelist=re);const e=new r.default(se.current,$);return e.on("input",l).on("add",f).on("remove",y).on("invalid",x).on("keydown",R).on("focus",P).on("blur",C).on("click",k).on("change",F).on("edit:input",v).on("edit:beforeUpdate",h).on("edit:updated",b).on("edit:start",E).on("edit:keydown",D).on("dropdown:show",V).on("dropdown:hide",B).on("dropdown:select",A).on("dropdown:scroll",H).on("dropdown:noMatch",z).on("dropdown:updated",L),de&&(de.current=e),fe.current=e,ge(),()=>{e.destroy()}}),[]),(0,n.useEffect)((()=>{ge()}),[te]),(0,n.useEffect)((()=>{le.current&&(fe.current.settings.whitelist.length=0,re&&re.length&&fe.current.settings.whitelist.push(...re))}),[re]),(0,n.useEffect)((()=>{const e=fe.current.getInputValue();le.current&&!((e,n)=>{const t=e=>"string"==typeof e?e:JSON.stringify(e);return t(e)==t(n)})(d,e)&&fe.current.loadOriginalValues(d)}),[d]),(0,n.useEffect)((()=>{le.current&&fe.current.toggleClass(oe)}),[oe]),(0,n.useEffect)((()=>{le.current&&fe.current.loading(i)}),[i]),(0,n.useEffect)((()=>{le.current&&fe.current.setReadonly(Q)}),[Q]),(0,n.useEffect)((()=>{le.current&&fe.current.setDisabled(X)}),[X]),(0,n.useEffect)((()=>{const e=fe.current;le.current&&(ce?(e.dropdown.show.call(e,ce),e.toggleFocusClass(!0)):e.dropdown.hide.call(e))}),[ce]),(0,n.useEffect)((()=>{le.current=!0}),[]),n.default.createElement("div",{className:"tags-input"},n.default.createElement(ne,ye))};l.propTypes={name:o.string,value:(0,o.oneOfType)([o.string,o.array]),loading:o.bool,children:(0,o.oneOfType)([o.string,o.array]),onChange:o.func,readOnly:o.bool,settings:o.object,InputMode:o.string,autoFocus:o.bool,className:o.string,tagifyRef:o.object,whitelist:o.array,placeholder:o.string,defaultValue:(0,o.oneOfType)([o.string,o.array]),showDropdown:(0,o.oneOfType)([o.string,o.bool]),onInput:o.func,onAdd:o.func,onRemove:o.func,onEditInput:o.func,onEditBeforeUpdate:o.func,onEditUpdated:o.func,onEditStart:o.func,onEditKeydown:o.func,onInvalid:o.func,onClick:o.func,onKeydown:o.func,onFocus:o.func,onBlur:o.func,onDropdownShow:o.func,onDropdownHide:o.func,onDropdownSelect:o.func,onDropdownScroll:o.func,onDropdownNoMatch:o.func,onDropdownUpdated:o.func};const s=n.default.memo(l);s.displayName="Tags";exports.MixedTags=e=>{let t=e.children,o=a(e,d);return n.default.createElement(s,i({InputMode:"textarea"},o),t)};var f=s;return exports.default=f,exports}));