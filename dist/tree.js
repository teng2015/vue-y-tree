!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueTree=t():e.VueTree=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(9);Object.defineProperty(t,"xTree",{enumerable:!0,get:function(){return n(o)["default"]}});var i=r(34);Object.defineProperty(t,"yTree",{enumerable:!0,get:function(){return n(i)["default"]}})},function(e,t,r){e.exports=!r(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var r=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=f[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(a(n.parts[i],t))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(a(n.parts[i],t));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],s=o[1],l=o[2],a=o[3],u={css:s,media:l,sourceMap:a};r[i]?r[i].parts.push(u):t.push(r[i]={id:i,parts:[u]})}return t}function i(e,t){var r=y(),n=x[x.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function a(e,t){var r,n,o;if(t.singleton){var i=h++;r=v||(v=l(t)),n=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=l(t),n=c.bind(null,r),o=function(){s(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function u(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function c(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=d(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var l=r[s],a=f[l.id];a.refs--,i.push(a)}if(e){var u=o(e);n(u,t)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete f[a.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){var n=r(19),o=r(24),i=r(26),s=Object.defineProperty;t.f=r(1)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(l){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n,o;r(36),n=r(10),o=r(31),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(15),s=n(i);t["default"]={name:"x-tree",data:function(){return{treeId:""+1*new Date+Math.round(1e3*Math.random())}},components:{"display-component":function(e){e(this.displayComponent)},"tree-container":{template:['<li  v-if="isLi" :style="liStyle"  class="x-tree x-tree-subnode"><slot></slot></li>','<div v-else      :style="divStyle" class="x-tree x-tree-root" :class="extraClass"><slot></slot></div>'].join(""),props:{isLi:{type:Boolean,"default":!0},divStyle:{type:Object},liStyle:{type:Object},extraClass:{type:String}}}},props:(o={tree:{type:Object,required:!0},childrenName:{type:String,"default":"children"},valueName:{type:String,"default":"value"},idName:{type:String},displayComponent:{type:Object},isRoot:{type:Boolean,"default":!0},isFold:{type:Boolean,"default":!0},isSelected:{type:Boolean,"default":!1}},(0,s["default"])(o,"displayComponent",{type:Object}),(0,s["default"])(o,"displayArgs",{type:Object}),(0,s["default"])(o,"treeStyle",{type:Object,"default":function(){return{rootDiv:{},rootLi:{},valueDiv:{},ul:{}}}}),(0,s["default"])(o,"extraClass",{type:String}),o),computed:{hasChildren:function(){return!!(this.tree&&this.tree[this.childrenName]&&this.tree[this.childrenName].length)},id:function(){return this.idName?this.tree[this.idName]:this.treeId}},methods:{toggleFold:function(){return this.isFold=!this.isFold,this.isFold},select:function(){this.$dispatch("click",{id:this.id,value:this.tree[this.valueName]})}},created:function(){this.isRoot&&this.$on("click",function(e){var t=this,r=e.id,n=e.value;setTimeout(function(){t.isSelected=r===t.id,t.$broadcast("reset-select",r),t.$dispatch("tree-select",n)},0)}),this.$on("reset-select",function(e){return this.isSelected=this.id===e,!0})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{treeDisplay:r(35)}},components:{"x-tree":r(9)},props:{childrenName:{type:String,"default":"children"},valueName:{type:String,"default":"value"},tree:{type:Object,"default":function(){return{}}},isRoot:{type:Boolean,"default":!0},isFold:{type:Boolean,"default":!0},treeStyle:{type:Object,"default":function(){return{rootDiv:{},rootLi:{},valueDiv:{},ul:{}}}},extraClass:{type:String},displayArgs:{type:Object}}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(13),i=n(o);t["default"]={props:{value:{type:[Object,String],required:!0},toggleFold:{type:Function,required:!0},select:{type:Function,required:!0},isRoot:{type:Boolean,required:!0},isFold:{type:Boolean,required:!0},isSelected:{type:Boolean,required:!0},hasChildren:{type:Boolean,required:!0},args:{type:Object}},computed:{text:function(){return this.valueToString(this.value)},valueToString:function(){return(this.args||{}).valueToString||function(e){return(0,i["default"])(e)}}}}},function(e,t,r){e.exports={"default":r(16),__esModule:!0}},function(e,t,r){e.exports={"default":r(17),__esModule:!0}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=r(14),i=n(o);t["default"]=function(e,t,r){return t in e?(0,i["default"])(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(2),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},function(e,t,r){r(27);var n=r(2).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){var n=r(3);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(18);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){var n=r(3),o=r(7).document,i=n(o)&&n(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,r){var n=r(7),o=r(2),i=r(20),s=r(23),l="prototype",a=function(e,t,r){var u,c,f,d=e&a.F,p=e&a.G,y=e&a.S,v=e&a.P,h=e&a.B,x=e&a.W,g=p?o:o[t]||(o[t]={}),m=g[l],b=p?n:y?n[t]:(n[t]||{})[l];p&&(r=t);for(u in r)c=!d&&b&&void 0!==b[u],c&&u in g||(f=c?b[u]:r[u],g[u]=p&&"function"!=typeof b[u]?r[u]:h&&c?i(f,n):x&&b[u]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[l]=e[l],t}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[u]=f,e&a.R&&m&&!m[u]&&s(m,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,t,r){var n=r(8),o=r(25);e.exports=r(1)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){e.exports=!r(1)&&!r(6)(function(){return 7!=Object.defineProperty(r(21)("div"),"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(3);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){var n=r(22);n(n.S+n.F*!r(1),"Object",{defineProperty:r(8).f})},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,".x-tree ul{margin:0}.x-tree-subnode{list-style-type:none}.x-tree .is-selected{font-weight:700}",""])},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,".y-tree ul{padding-left:20px}",""])},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,".y-tree-display{display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:3px;line-height:23px}.y-tree-display:hover{background:#ebf2fd}.y-tree-display.selected{color:#fff;background:#3a78e0}.y-tree-arrow{margin:6px 10px 0;width:0;height:0;border:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:8px solid #999;-webkit-transition:all .2s ease;transition:all .2s ease}.y-tree-display.selected .y-tree-arrow{border-left-color:#fff}.y-tree-arrow.unfold{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.y-tree-arrow.hidden{visibility:hidden}.y-tree-content{-webkit-box-flex:1;-ms-flex:1;flex:1}",""])},function(e,t){e.exports=' <tree-container :is-li=!isRoot :li-style=treeStyle.rootLi :div-style=treeStyle.rootDiv :extra-class=extraClass> <component v-if=!!displayComponent is=display-component :value=tree[valueName] :toggle-fold=toggleFold :select=select :has-children=hasChildren :is-root=isRoot :is-fold=isFold :is-selected=isSelected :args=displayArgs></component> <div v-else :style=treeStyle.valueDiv :class="{\'is-selected\': isSelected}"> <span v-on:click=toggleFold>{{tree[valueName]}}</span> <span v-if="hasChildren && isFold" v-on:click=toggleFold>[+]</span> <span v-if="hasChildren && !isFold" v-on:click=toggleFold>[-]</span> </div> <ul :style=treeStyle.ul v-if=hasChildren v-show=!isFold> <x-tree v-for="child in tree[childrenName]" :tree=child :children-name=childrenName :value-name=valueName :display-component=displayComponent :display-args=displayArgs :tree-style=treeStyle :is-root=false></x-tree> </ul> </tree-container> '},function(e,t){e.exports=" <x-tree extra-class=y-tree :tree=tree :value-name=valueName :children-name=childrenName :is-root=isRoot :is-fold=isFold :tree-style=treeStyle :display-component=treeDisplay :display-args=displayArgs> </x-tree> "},function(e,t){e.exports=' <div class=y-tree-display :class="{selected: isSelected}"> <div class=y-tree-arrow :class="{ unfold: !isFold, hidden: !hasChildren }" v-on:click=toggleFold></div> <div class=y-tree-content v-on:click=select>{{ text }}</div> </div> '},function(e,t,r){var n,o;r(37),n=r(11),o=r(32),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},function(e,t,r){var n,o;r(38),n=r(12),o=r(33),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},function(e,t,r){var n=r(28);"string"==typeof n&&(n=[[e.id,n,""]]);r(5)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,r){var n=r(29);"string"==typeof n&&(n=[[e.id,n,""]]);r(5)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,r){var n=r(30);"string"==typeof n&&(n=[[e.id,n,""]]);r(5)(n,{});n.locals&&(e.exports=n.locals)}])});
//# sourceMappingURL=tree.js.map