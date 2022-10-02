!function(){var e={184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var l=o.apply(null,a);l&&e.push(l)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};a.r(e),a.d(e,{metadata:function(){return r},name:function(){return E},settings:function(){return P}});var t=window.wp.element,n=window.lodash,o=window.wp.blocks,s=(window.wp.richText,window.wp.i18n),l=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("circle",{cx:"6.5",cy:"8",r:"1"}),(0,t.createElement)("path",{d:"M20,8H13.75a.25.25,0,0,1-.25-.25V5.5a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9A1,1,0,0,0,20,8Zm0,10a.54.54,0,0,1-.53.54H4.53A.54.54,0,0,1,4,18V6a.54.54,0,0,1,.53-.54H12A.54.54,0,0,1,12.5,6V8.25a.54.54,0,0,0,.53.54h6.44a.54.54,0,0,1,.53.54Z"})),r=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/tabs","title":"Tabs","description":"This is tabs block.","category":"smb","attributes":{"tabs":{"type":"string","default":"[]"},"matchHeight":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-match-height","default":"false"},"tabsJustification":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-tabs-justification","default":"flex-start"},"tabsId":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-tabs-id","default":""},"orientation":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-orientation","default":"horizontal"}},"supports":{"html":false},"example":{"attributes":{"tabs":"[{\\"title\\":\\"Tab\\",\\"tabPanelId\\":\\"1\\"},{\\"title\\": \\"Tab\\",\\"tabPanelId\\":\\"2\\"}]"},"innerBlocks":[{"name":"snow-monkey-blocks/tab-panel","attributes":{"tabPanelId":"1","ariaHidden":"false"},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]},{"name":"snow-monkey-blocks/tab-panel","attributes":{"tabPanelId":"2","ariaHidden":"true"},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]}]},"style":"snow-monkey-blocks/tabs","editorStyle":"snow-monkey-blocks/tabs/editor","editorScript":"file:../../dist/block/tabs/editor.js"}');function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var c=a(184),b=a.n(c),d=window.wp.blockEditor,m=function(e){let{icon:a,size:n=24,...o}=e;return(0,t.cloneElement)(a,{width:n,height:n,...o})},u=window.wp.primitives,p=(0,t.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),h=(0,t.createElement)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(u.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),k=(0,t.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),w=(0,t.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})),f=(0,t.createElement)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(u.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),g=(0,t.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),y=window.wp.components,_=window.wp.data;const v=["snow-monkey-blocks/tab-panel"],{name:E}=r,P={icon:{foreground:"#cd162c",src:l},edit:function(e){let{attributes:a,setAttributes:l,className:r,clientId:c}=e;const{tabs:u,matchHeight:E,tabsJustification:P,tabsId:I,orientation:S}=a,B=JSON.parse(u),{removeBlocks:x,insertBlocks:N,moveBlocksUp:O,moveBlocksDown:z,updateBlockAttributes:j}=(0,_.useDispatch)("core/block-editor"),{getBlockOrder:$,getBlock:C}=(0,_.useSelect)((e=>({getBlockOrder:e("core/block-editor").getBlockOrder,getBlock:e("core/block-editor").getBlock})),[]),[H,L]=(0,t.useState)(void 0);(0,t.useEffect)((()=>{0<B.length&&L(B[0].tabPanelId),I||l({tabsId:c})}),[]),(0,t.useEffect)((()=>{1>B.length||$(c).forEach((e=>{const t=C(e);j(e,{ariaHidden:t.attributes.tabPanelId===B[0].tabPanelId?"false":"true"})}))}),[B]),(0,t.useEffect)((()=>{2>document.querySelectorAll(`[data-tabs-id="${I}"]`).length||($(c).forEach(((e,t)=>{const a=`block-${e}`;B[t].tabPanelId=a,j(e,{tabPanelId:a})})),l({tabsId:c,tabs:JSON.stringify(B)}),L(B[0].tabPanelId))}),[c]),(0,t.useEffect)((()=>{const e=$(c);if(e.length===B.length)return;let t={...B};const a=[];e.forEach(((e,o)=>{const s=C(e),l=(0,n.find)(t,{tabPanelId:s.attributes.tabPanelId});if(l)a[o]=l,t=(0,n.reject)(t,{tabPanelId:s.attributes.tabPanelId});else{const t=(0,n.find)(B,{tabPanelId:s.attributes.tabPanelId}),l=`block-${e}`;j(e,{tabPanelId:l}),a[o]={tabPanelId:l,title:t.title}}})),B.length>a.length&&L(a[0].tabPanelId),l({tabs:JSON.stringify(a)})}),[C(c).innerBlocks]);const J="vertical"===S||"horizontal"===S&&"true"===E,M=b()("smb-tabs",r),T=(0,d.useBlockProps)({className:M}),V=(0,d.useInnerBlocksProps)({className:"smb-tabs__body"},{allowedBlocks:v,templateLock:!1,renderAppender:!1});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(d.InspectorControls,null,(0,t.createElement)(y.PanelBody,{title:(0,s.__)("Block settings","snow-monkey-blocks")},(0,t.createElement)(y.SelectControl,{label:(0,s.__)("Tabs orientation","snow-monkey-blocks"),value:S,onChange:e=>l({orientation:e}),options:[{value:"horizontal",label:(0,s.__)("Horizontal","snow-monkey-blocks")},{value:"vertical",label:(0,s.__)("Vertical","snow-monkey-blocks")}]}),"horizontal"===S&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(y.ToggleControl,{label:(0,s.__)("Align the height of each tab panels","snow-monkey-blocks"),checked:"true"===E,onChange:e=>l({matchHeight:e?"true":"false"})}),(0,t.createElement)(y.SelectControl,{label:(0,s.__)("Tabs justification","snow-monkey-blocks"),value:P,onChange:e=>l({tabsJustification:e}),options:[{label:(0,s.__)("Left","snow-monkey-blocks"),value:"flex-start"},{label:(0,s.__)("Center","snow-monkey-blocks"),value:"center"},{label:(0,s.__)("Right","snow-monkey-blocks"),value:"flex-end"},{label:(0,s.__)("Stretch","snow-monkey-blocks"),value:"stretch"}]})))),(0,t.createElement)("div",i({},T,{"data-tabs-id":I,"data-orientation":S,"data-match-height":J?"true":E,"data-tabs-justification":"horizontal"===S?P:void 0}),(0,t.createElement)("div",{className:"smb-tabs__tabs","data-has-tabs":1<B.length?"true":"false"},B.map(((e,a)=>{const n=$(c)[a];return(0,t.createElement)("div",{className:"smb-tabs__tab-wrapper",key:`${c}-${a}`,"aria-selected":H===e.tabPanelId?"true":"false"},0<a&&(0,t.createElement)("button",{className:"smb-tabs__up-tab",onClick:()=>{O(n?[n]:[],c);const e=B[a];B.splice(a,1),B.splice(a-1,0,e),l({tabs:JSON.stringify(B)}),L(B[a-1].tabPanelId)},"aria-label":"horizontal"===S?(0,s.__)("Move to left","snow-monkey-blocks"):(0,s.__)("Move to up","snow-monkey-blocks")},(0,t.createElement)(m,{icon:"horizontal"===S?p:h})),1<B.length&&(0,t.createElement)("button",{className:"smb-tabs__remove-tab",onClick:()=>{x(n?[n]:[],!1),B.splice(a,1),l({tabs:JSON.stringify(B)}),L(B[0].tabPanelId)},"aria-label":(0,s.__)("Remove this tab","snow-monkey-blocks")},(0,t.createElement)(m,{icon:k})),B.length-1>a&&(0,t.createElement)("button",{className:"smb-tabs__down-tab",onClick:()=>{z(n?[n]:[],c);const e=B[a];B.splice(a,1),B.splice(a+1,0,e),l({tabs:JSON.stringify(B)}),L(B[a+1].tabPanelId)},"aria-label":"horizontal"===S?(0,s.__)("Move to right","snow-monkey-blocks"):(0,s.__)("Move to down","snow-monkey-blocks")},(0,t.createElement)(m,{icon:"horizontal"===S?w:f})),(0,t.createElement)("button",{className:"smb-tabs__tab",role:"tab","aria-controls":e.tabPanelId,"aria-selected":H===e.tabPanelId?"true":"false",onClick:()=>{L(e.tabPanelId)}},(0,t.createElement)(d.RichText,{value:e.title,onChange:e=>{B[a].title=e,l({tabs:JSON.stringify(B)})},placeholder:(0,s.__)("Tab","snow-monkey-blocks")})))})),(0,t.createElement)("div",{className:"smb-tabs__tab-wrapper"},(0,t.createElement)("button",{className:"smb-tabs__tab smb-tabs__add-tab",onClick:()=>{const e=(0,o.createBlock)("snow-monkey-blocks/tab-panel"),t=`block-${e.clientId}`;e.attributes.tabPanelId=t,N(e,B.length,c,!1),B.push({tabPanelId:t}),l({tabs:JSON.stringify(B)}),L(t)}},(0,t.createElement)(m,{icon:g})))),(0,t.createElement)("div",V),!!H&&!J&&(0,t.createElement)("style",null,`[data-tabs-id="${I}"] > .smb-tabs__body > .smb-tab-panel:not(#${H}) {display: none !important}`),!!H&&J&&(0,t.createElement)("style",null,B.map(((e,t)=>`[data-tabs-id="${I}"] > .smb-tabs__body > .smb-tab-panel:nth-child(${t+1}) {left: ${-100*t}%}`)),`[data-tabs-id="${I}"] > .smb-tabs__body > .smb-tab-panel:not(#${H}) {visibility: hidden !important}`)))},save:function(e){let{attributes:a,className:n}=e;const{tabs:o,matchHeight:s,tabsJustification:l,tabsId:r,orientation:c}=a,m=JSON.parse(o),u="vertical"===c||"horizontal"===c&&"true"===s,p=b()("smb-tabs",n);return(0,t.createElement)("div",i({},d.useBlockProps.save({className:p}),{"data-tabs-id":r,"data-orientation":c,"data-match-height":u?"true":s,"data-tabs-justification":"horizontal"===c?l:void 0}),0<m.length&&(0,t.createElement)("div",{className:"smb-tabs__tabs"},m.map(((e,a)=>(0,t.createElement)("div",{className:"smb-tabs__tab-wrapper",key:a},(0,t.createElement)(d.RichText.Content,{tagName:"button",value:e.title,className:"smb-tabs__tab",role:"tab","aria-controls":e.tabPanelId,"aria-selected":0===a?"true":"false"}))))),(0,t.createElement)("div",d.useInnerBlocksProps.save({className:"smb-tabs__body"})),u&&(0,t.createElement)("style",null,m.map(((e,t)=>`[data-tabs-id="${r}"] > .smb-tabs__body > .smb-tab-panel:nth-child(${t+1}) {left: ${-100*t}%}`))))},styles:[{name:"default",label:(0,s.__)("Default","snow-monkey-blocks"),isDefault:!0},{name:"simple",label:(0,s.__)("Simple","snow-monkey-blocks")},{name:"line",label:(0,s.__)("Line","snow-monkey-blocks")}]};(e=>{if(!e)return;const{metadata:t,settings:a,name:n}=e;t&&(t.title&&(t.title=(0,s.__)(t.title,"snow-monkey-blocks"),a.title=t.title),t.description&&(t.description=(0,s.__)(t.description,"snow-monkey-blocks"),a.description=t.description),t.keywords&&(t.keywords=(0,s.__)(t.keywords,"snow-monkey-blocks"),a.keywords=t.keywords)),(0,o.registerBlockType)({name:n,...t},a)})(e)}()}();