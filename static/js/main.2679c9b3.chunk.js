/*! For license information please see main.2679c9b3.chunk.js.LICENSE.txt */
(this["webpackJsonpwinbond-product-roadmap"]=this["webpackJsonpwinbond-product-roadmap"]||[]).push([[0],{248:function(e,t,n){e.exports=n.p+"static/media/bg.df9feb4f.png"},253:function(e,t,n){e.exports=n(567)},565:function(e,t){!function(){var e="object"===typeof window?window:"object"===typeof self?self:this,t=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder;e.URL=e.URL||e.webkitURL||function(e,t){return(t=document.createElement("a")).href=e,t};var n=e.Blob,r=URL.createObjectURL,o=URL.revokeObjectURL,a=e.Symbol&&e.Symbol.toStringTag,i=!1,c=!1,u=!!e.ArrayBuffer,s=t&&t.prototype.append&&t.prototype.getBlob;try{i=2===new Blob(["\xe4"]).size,c=2===new Blob([new Uint8Array([1,2])]).size}catch(w){}function f(e){return e.map((function(e){if(e.buffer instanceof ArrayBuffer){var t=e.buffer;if(e.byteLength!==t.byteLength){var n=new Uint8Array(e.byteLength);n.set(new Uint8Array(t,e.byteOffset,e.byteLength)),t=n.buffer}return t}return e}))}function d(e,n){n=n||{};var r=new t;return f(e).forEach((function(e){r.append(e)})),n.type?r.getBlob(n.type):r.getBlob()}function p(e,t){return new n(f(e),t||{})}e.Blob&&(d.prototype=Blob.prototype,p.prototype=Blob.prototype);var h="function"===typeof TextEncoder?TextEncoder.prototype.encode.bind(new TextEncoder):function(t){for(var n=0,r=t.length,o=e.Uint8Array||Array,a=0,i=Math.max(32,r+(r>>1)+7),c=new o(i>>3<<3);n<r;){var l=t.charCodeAt(n++);if(l>=55296&&l<=56319){if(n<r){var u=t.charCodeAt(n);56320===(64512&u)&&(++n,l=((1023&l)<<10)+(1023&u)+65536)}if(l>=55296&&l<=56319)continue}if(a+4>c.length){i+=8,i=(i*=1+n/t.length*2)>>3<<3;var s=new Uint8Array(i);s.set(c),c=s}if(0!==(4294967168&l)){if(0===(4294965248&l))c[a++]=l>>6&31|192;else if(0===(4294901760&l))c[a++]=l>>12&15|224,c[a++]=l>>6&63|128;else{if(0!==(4292870144&l))continue;c[a++]=l>>18&7|240,c[a++]=l>>12&63|128,c[a++]=l>>6&63|128}c[a++]=63&l|128}else c[a++]=l}return c.slice(0,a)},b="function"===typeof TextDecoder?TextDecoder.prototype.decode.bind(new TextDecoder):function(e){for(var t=e.length,n=[],r=0;r<t;){var o,a,i,c,l=e[r],u=null,s=l>239?4:l>223?3:l>191?2:1;if(r+s<=t)switch(s){case 1:l<128&&(u=l);break;case 2:128===(192&(o=e[r+1]))&&(c=(31&l)<<6|63&o)>127&&(u=c);break;case 3:o=e[r+1],a=e[r+2],128===(192&o)&&128===(192&a)&&(c=(15&l)<<12|(63&o)<<6|63&a)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:o=e[r+1],a=e[r+2],i=e[r+3],128===(192&o)&&128===(192&a)&&128===(192&i)&&(c=(15&l)<<18|(63&o)<<12|(63&a)<<6|63&i)>65535&&c<1114112&&(u=c)}null===u?(u=65533,s=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),r+=s}var f=n.length,d="";for(r=0;r<f;)d+=String.fromCharCode.apply(String,n.slice(r,r+=4096));return d};function m(){var t=!!e.ActiveXObject||"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,n=e.XMLHttpRequest&&e.XMLHttpRequest.prototype.send;t&&n&&(XMLHttpRequest.prototype.send=function(e){e instanceof Blob?(this.setRequestHeader("Content-Type",e.type),n.call(this,e)):n.call(this,e)});try{new File([],"")}catch(w){try{var r=new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name.replace(///g, ":");this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date();this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')();e.File=r}catch(w){r=function(e,t,n){var r=new Blob(e,n),o=n&&void 0!==n.lastModified?new Date(n.lastModified):new Date;return r.name=t.replace(/\//g,":"),r.lastModifiedDate=o,r.lastModified=+o,r.toString=function(){return"[object File]"},a&&(r[a]="File"),r};e.File=r}}}i?(m(),e.Blob=c?e.Blob:p):s?(m(),e.Blob=d):function(){function t(e){for(var t=new Array(e.byteLength),n=new Uint8Array(e),r=t.length;r--;)t[r]=n[r];return t}function n(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=[],r=0;r<e.length;r+=3){var o=e[r],a=r+1<e.length,i=a?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=o>>2,s=(3&o)<<4|i>>4,f=(15&i)<<2|l>>6,d=63&l;c||(d=64,a||(f=64)),n.push(t[u],t[s],t[f],t[d])}return n.join("")}var a=Object.create||function(e){function t(){}return t.prototype=e,new t};if(u)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function s(n,r){r=null==r?{}:r;for(var o=0,a=(n=n||[]).length;o<a;o++){var i=n[o];i instanceof s?n[o]=i._buffer:"string"===typeof i?n[o]=h(i):u&&(ArrayBuffer.prototype.isPrototypeOf(i)||c(i))?n[o]=t(i):u&&((f=i)&&DataView.prototype.isPrototypeOf(f))?n[o]=t(i.buffer):n[o]=h(String(i))}var f;this._buffer=e.Uint8Array?function(e){for(var t=0,n=e.length;n--;)t+=e[n].length;var r=new Uint8Array(t),o=0;for(n=0,l=e.length;n<l;n++){var a=e[n];r.set(a,o),o+=a.byteLength||a.length}return r}(n):[].concat.apply([],n),this.size=this._buffer.length,this.type=r.type||"",/[^\u0020-\u007E]/.test(this.type)?this.type="":this.type=this.type.toLowerCase()}function f(e,t,n){n=n||{};var r=s.call(this,e,n)||this;return r.name=t.replace(/\//g,":"),r.lastModifiedDate=n.lastModified?new Date(n.lastModified):new Date,r.lastModified=+r.lastModifiedDate,r}if(s.prototype.arrayBuffer=function(){return Promise.resolve(this._buffer)},s.prototype.text=function(){return Promise.resolve(b(this._buffer))},s.prototype.slice=function(e,t,n){return new s([this._buffer.slice(e||0,t||this._buffer.length)],{type:n})},s.prototype.toString=function(){return"[object Blob]"},f.prototype=a(s.prototype),f.prototype.constructor=f,Object.setPrototypeOf)Object.setPrototypeOf(f,s);else try{f.__proto__=s}catch(w){}function d(){if(!(this instanceof d))throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");var e=document.createDocumentFragment();this.addEventListener=e.addEventListener,this.dispatchEvent=function(t){var n=this["on"+t.type];"function"===typeof n&&n(t),e.dispatchEvent(t)},this.removeEventListener=e.removeEventListener}function p(e,t,n){if(!(t instanceof s))throw new TypeError("Failed to execute '"+n+"' on 'FileReader': parameter 1 is not of type 'Blob'.");e.result="",setTimeout((function(){this.readyState=d.LOADING,e.dispatchEvent(new Event("load")),e.dispatchEvent(new Event("loadend"))}))}f.prototype.toString=function(){return"[object File]"},d.EMPTY=0,d.LOADING=1,d.DONE=2,d.prototype.error=null,d.prototype.onabort=null,d.prototype.onerror=null,d.prototype.onload=null,d.prototype.onloadend=null,d.prototype.onloadstart=null,d.prototype.onprogress=null,d.prototype.readAsDataURL=function(e){p(this,e,"readAsDataURL"),this.result="data:"+e.type+";base64,"+n(e._buffer)},d.prototype.readAsText=function(e){p(this,e,"readAsText"),this.result=b(e._buffer)},d.prototype.readAsArrayBuffer=function(e){p(this,e,"readAsText"),this.result=(e._buffer.buffer||e._buffer).slice()},d.prototype.abort=function(){},URL.createObjectURL=function(e){return e instanceof s?"data:"+e.type+";base64,"+n(e._buffer):r.call(URL,e)},URL.revokeObjectURL=function(e){o&&o.call(URL,e)};var m=e.XMLHttpRequest&&e.XMLHttpRequest.prototype.send;m&&(XMLHttpRequest.prototype.send=function(e){e instanceof s?(this.setRequestHeader("Content-Type",e.type),m.call(this,b(e._buffer))):m.call(this,e)}),e.FileReader=d,e.File=f,e.Blob=s}(),a&&(File.prototype[a]="File",Blob.prototype[a]="Blob",FileReader.prototype[a]="FileReader");var g,v=e.Blob.prototype;function y(e){return new Promise((function(t,n){e.onload=e.onerror=function(r){e.onload=e.onerror=null,"load"===r.type?t(e.result||e):n(new Error("Failed to read the blob/file"))}}))}try{new ReadableStream({type:"bytes"}),g=function(){var e=0,t=this;return new ReadableStream({type:"bytes",autoAllocateChunkSize:524288,pull:function(n){var r=n.byobRequest.view;return t.slice(e,e+r.byteLength).arrayBuffer().then((function(o){var a=new Uint8Array(o),i=a.byteLength;e+=i,r.set(a),n.byobRequest.respond(i),e>=t.size&&n.close()}))}})}}catch(w){try{new ReadableStream({}),g=function(e){var t=0;e=this;return new ReadableStream({pull:function(n){return e.slice(t,t+524288).arrayBuffer().then((function(r){t+=r.byteLength;var o=new Uint8Array(r);n.enqueue(o),t==e.size&&n.close()}))}})}}catch(w){try{new Response("").body.getReader().read(),g=function(){return new Response(this).body}}catch(w){g=function(){throw new Error("Include https://github.com/MattiasBuelens/web-streams-polyfill")}}}}v.arrayBuffer||(v.arrayBuffer=function(){var e=new FileReader;return e.readAsArrayBuffer(this),y(e)}),v.text||(v.text=function(){var e=new FileReader;return e.readAsText(this),y(e)}),v.stream||(v.stream=g)}()},566:function(e,t){!function(e){"use strict";var t,n=e.Uint8Array,r=e.HTMLCanvasElement,o=r&&r.prototype,a=/\s*;\s*base64\s*(?:;|$)/i,i="toDataURL",c=function(e){for(var r,o,a=e.length,i=new n(a/4*3|0),c=0,l=0,u=[0,0],s=0,f=0;a--;)o=e.charCodeAt(c++),255!==(r=t[o-43])&&void 0!==r&&(u[1]=u[0],u[0]=o,f=f<<6|r,4===++s&&(i[l++]=f>>>16,61!==u[1]&&(i[l++]=f>>>8),61!==u[0]&&(i[l++]=f),s=0));return i};n&&(t=new n([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),!r||o.toBlob&&o.toBlobHD||(o.toBlob||(o.toBlob=function(e,t){if(t||(t="image/png"),this.mozGetAsFile)e(this.mozGetAsFile("canvas",t));else if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(t))e(this.msToBlob());else{var r,o=Array.prototype.slice.call(arguments,1),l=this[i].apply(this,o),u=l.indexOf(","),s=l.substring(u+1),f=a.test(l.substring(0,u));Blob.fake?((r=new Blob).encoding=f?"base64":"URI",r.data=s,r.size=s.length):n&&(r=f?new Blob([c(s)],{type:t}):new Blob([decodeURIComponent(s)],{type:t})),e(r)}}),!o.toBlobHD&&o.toDataURLHD?o.toBlobHD=function(){i="toDataURLHD";var e=this.toBlob();return i="toDataURL",e}:o.toBlobHD=o.toBlob)}("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||this.content||this)},567:function(e,t,n){"use strict";n.r(t);n(254),n(263);var r=n(0),o=n.n(r),a=n(57),i=n.n(a),c=n(15),l=(n(451),n(16)),u=n(17),s=n(109),f=n.n(s),d=n(154),p=n.n(d),h=function(e){return"".concat(16*e,"px")},b=[22,36,48,62,90,120].map(h),m=[22,36,46,58,86].map(h),g=[[3,"mobile"],[4,"tablet"]],v=b.map((function(e,t){var n=g.findIndex((function(e){return Object(u.a)(e,1)[0]>t}));return n>=0?n:g.length})),y=function(e){var t={};return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=JSON.stringify(r),i=t[a];if("undefined"!==typeof i)return"object"===typeof i&&null!==i?JSON.parse(JSON.stringify(i)):i;var c=e.apply(this,r);return t[a]=c,setTimeout((function(){delete t[a]}),36e5),"object"===typeof c&&null!==c?JSON.parse(JSON.stringify(c)):c}}((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length;return r<=1?t[0]:b.map((function(e,n){return p()(t,[v[n]],null)}))})),w={colors:{white:"#fff",black:"#000",text:"#000",primary:"#0E4E6E",gray:"#E1E1E1",red:"#D6262F",blue:"#0E4E6E"},breakpoints:b,containerWidth:m,font:'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',fontSize:"".concat(16,"px"),headerHeight:"5em",responsive:y,zOrder:f()(4).map((function(e){return Math.pow(10,e)}))};function O(){var e=Object(l.a)(["\n  body {\n    font-family: ",";\n    font-size: ",";\n    min-width: 100%;\n    min-height: 100%;\n  }\n"]);return O=function(){return e},e}var j=Object(c.b)(O(),w.font,w.fontSize),E=function(e){var t=e.children;return o.a.createElement(c.a,{theme:w},o.a.createElement(r.Fragment,null,t,o.a.createElement(j,null)))},x=n(569),R=n(251),B=n(243),S=function(e,t,n){return function(o){if(n)return o(t);var a=Object(B.a)(e,JSON.stringify(t)),i=Object(u.a)(a,2),c=i[0],l=i[1],s=o(c&&JSON.parse(c)),f=Object(u.a)(s,2),d=f[0],p=f[1];return Object(r.useEffect)((function(){l(JSON.stringify(d))}),[d]),[d,p]}},A=n(19),C=n(3),k=n(84),L=n(64),F=n(244),U=n.n(F),M=function(e,t){return Object(C.q)(function(e,t){return U()({prop:e,cssProperty:e},t)}(e,t))},T=function(e){return Object(r.forwardRef)((function(t,n){var r=t.is,a=Object(A.a)(t,["is"]);return r&&console.error('"is" is no longer supported, us "as" instead'),o.a.createElement(e,Object.assign({as:r,ref:n},a))}))};function D(){var e=Object(l.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return D=function(){return e},e}var P=T(c.d.div.withConfig({shouldForwardProp:L.a})(D(),C.p,C.l,C.n,C.t,C.e,C.n,C.u,C.b,C.i,C.c,C.m,M("whiteSpace"),M("overflow"),M("transform"),M("transition"),Object(C.q)({prop:"zOrder",cssProperty:"zIndex",key:"zOrder"}),(function(e){return e.onClick&&"cursor: pointer;"})));P.displayName="Box",P.Inline=Object(r.forwardRef)((function(e,t){return o.a.createElement(P,Object.assign({ref:t,as:"span",display:"inline-block",verticalAlign:"middle"},e))})),P.Absolute=Object(r.forwardRef)((function(e,t){return o.a.createElement(P,Object.assign({ref:t,position:"absolute"},e))})),P.FullAbsolute=Object(r.forwardRef)((function(e,t){return o.a.createElement(P.Absolute,Object.assign({ref:t,top:"0",left:"0",right:"0",bottom:"0"},e))})),P.Relative=Object(r.forwardRef)((function(e,t){return o.a.createElement(P,Object.assign({ref:t,position:"relative"},e))}));var H=P;function I(){var e=Object(l.a)(["\n  ","\n"]);return I=function(){return e},e}var z=Object(c.d)(H)(I(),C.j);z.defaultProps={display:"flex"},z.displayName="Flex";var _,q=(_=z,function(e){var t=e.as,n=Object(A.a)(e,["as"]);return o.a.createElement(_,Object.assign({forwardedAs:t},n))});function N(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return N=function(){return e},e}var W=T(c.d.p.withConfig({shouldForwardProp:L.a})(N(),C.t,C.h,C.p,C.e,C.n,M("textTransform")));W.defaultProps={fontSize:"1em"},W.Inline=function(e){return o.a.createElement(W,Object.assign({as:"span"},e))},W.Bold=function(e){return o.a.createElement(W,Object.assign({fontWeight:"bold"},e))},W.Thin=function(e){return o.a.createElement(W,Object.assign({fontWeight:"200"},e))},f()(1,7).forEach((function(e){W["H".concat(e)]=function(t){return o.a.createElement(W,Object.assign({as:"h".concat(e),fontSize:"".concat(1+.125*(6-e),"em")},t))}})),W.displayName="Text";var J=W;function G(){var e=Object(l.a)(["\n  font-family: inherit;\n  width: 100%;\n  padding: 0.25em;\n  border: 1px solid ",";\n  border-radius: 0;\n  font-size: 1em;\n  ","\n  &::placeholder {\n    color: ",";\n  }\n"]);return G=function(){return e},e}var K=c.d.input(G(),Object(k.a)("colors.gray"),C.r,Object(k.a)("colors.gray")),X=function(e){var t=e.label,n=e.labelWidth,a=e.name,i=e.placeholder,c=e.disabled,l=e.value,u=e.onChange,s=e.onBlur,f=e.onKeyUp,d=e.error,p=e.type,h=e.min,b=e.max,m=e.textAlign,g=e.step,v=Object(A.a)(e,["label","labelWidth","name","placeholder","disabled","value","onChange","onBlur","onKeyUp","error","type","min","max","textAlign","step"]);return o.a.createElement(q,Object.assign({as:"label",alignItems:"center"},v),t&&o.a.createElement(H,{mr:"1em",w:n},o.a.createElement(J,{fontWeight:"bold"},t)),o.a.createElement(H,{flex:"1"},Object(r.createElement)(K,{name:a,placeholder:i,disabled:c,value:l,onChange:u,onBlur:s,onKeyUp:f,type:p,min:h,max:b,textAlign:m,step:g}),d&&o.a.createElement(J,{fontSize:"0.8em",align:"left",color:"red",mt:"0.25rem"},d)))};X.displayName="Input";var V=X,Y=Object(r.createContext)({}),$=function(e){return"https://graph.microsoft.com/v1.0/me/drive/items/".concat(e,"/workbook/worksheets")},Q=function(e,t){return"https://graph.microsoft.com/v1.0/me/drive/items/".concat(e,"/workbook/worksheets/").concat(t,"/usedRange")},Z={scopes:["openid","profile","User.Read","Files.Read"]},ee=new x.a({auth:{clientId:"5ed0f7c5-cd47-4779-bfd3-53f5b0445c94",authority:"https://login.microsoftonline.com/common",redirectUri:"http://localhost:3000/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1}});function te(e,t){var n=new Headers,r="Bearer ".concat(t);n.append("Authorization",r);var o={method:"GET",headers:n};return console.log("request made to Graph API at: "+(new Date).toString()),fetch(e,o).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}function ne(e){return ee.acquireTokenSilent(e).catch((function(t){return console.log(t),console.log("silent token acquisition fails. acquiring token using popup"),ee.acquireTokenPopup(e).then((function(e){return e})).catch((function(e){console.log(e)}))}))}var re=function(e){var t=e.children,n=Object(r.useState)(ee.getAccount()),a=Object(u.a)(n,2),i=a[0],c=a[1],l=Object(r.useState)(),s=Object(u.a)(l,2),f=s[0],d=s[1],p=S("WORKBOOK_URL")(r.useState),h=Object(u.a)(p,2),b=h[0],m=h[1],g=S("WORKSHEETS")(r.useState),v=Object(u.a)(g,2),y=v[0],w=v[1],O=S("SHEET_DATA",{})(R.a),j=Object(u.a)(O,2),E=j[0],x=j[1],B=Object(r.useMemo)((function(){try{var e=new URL(b);return new URLSearchParams(e.search).get("resid")}catch(t){return""}}),[b]),A=Object(r.useCallback)((function(){ee.loginPopup(Z).then((function(e){console.log("id_token acquired at: "+(new Date).toString()),console.log(e),ee.getAccount()&&c(ee.getAccount())})).catch((function(e){console.log(e)}))}),[c]),C=Object(r.useCallback)((function(){i&&(ee.logout(),c(null))}),[c,i]),k=function(){i&&!f&&B&&(console.log("start load sheet"),d(!0),ne(Z).then((function(e){te($(B),e.accessToken).then((function(e){e.value&&w(e.value),d(!1)}))})).catch((function(e){console.log(e)})))},L=Object(r.useCallback)((function(e){i&&!f&&B&&!E[e]&&(console.log("start load sheet data"),d(!0),ne(Z).then((function(t){te(Q(B,e),t.accessToken).then((function(t){console.log(t),t&&x((function(n){n[e]=t})),d(!1)}))})).catch((function(e){console.log(e)})))}),[f,i,E,B]),F=Object(r.useCallback)((function(e){return o.a.createElement(V,Object.assign({label:"\u8cbc\u4e0aExcel\u9023\u7d50",value:b,onChange:function(e){return m(e.target.value)},onKeyUp:function(e){return 13===e.keyCode&&k()}},e))}),[b]);return o.a.createElement(Y.Provider,{value:{account:i,signIn:A,signOut:C,loadSheets:k,loadSheetData:L,loading:f,sheets:y,sheetData:E,WorkBookIdInput:F}},t)},oe=n(157),ae=n.n(oe),ie=function(e){return o.a.createElement(H,e)};ie.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:m},ie.displayName="Container";var ce=ie,le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"color";return Object(C.q)({prop:e,cssProperty:t,key:"colors"})};function ue(){var e=Object(l.a)(["\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  appearance: none;\n  transition: all ","ms;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    ","\n    outline: none;\n  }\n  ","\n  ","\n"]);return ue=function(){return e},e}function se(){var e=Object(l.a)(["\n  ",";\n  ",";\n  ",";\n"]);return se=function(){return e},e}var fe=Object(c.c)(se(),le("hoverColor"),le("hoverBg","backgroundColor"),le("hoverBorder","borderColor")),de=c.d.button.withConfig({shouldForwardProp:L.a})(ue(),C.t,C.l,C.n,C.p,C.e,C.b,C.c,Object(k.a)("duration",250),(function(e){return!e.disabled&&fe}),(function(e){return e.active&&!e.disabled&&fe}),(function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "})),pe=function(e){return o.a.createElement(H,Object.assign({as:"span"},e))},he=T((function(e){var t=e.leftIcon,n=e.rightIcon,r=e.iconSpacing,a=e.iconsSize,i=e.children,c=e.verticalAlign,l=Object(A.a)(e,["leftIcon","rightIcon","iconSpacing","iconsSize","children","verticalAlign"]);return o.a.createElement(de,l,t?o.a.createElement(H,{as:t,mr:r,verticalAlign:c,fontSize:a}):null,o.a.createElement(pe,{verticalAlign:c},i),n?o.a.createElement(H,{as:n,ml:r,verticalAlign:c,fontSize:a}):null)}));he.defaultProps={border:"2px solid",borderColor:"primary",bg:"primary",color:"white",hoverColor:"white",hoverBg:"primaryHover",hoverBorder:"primaryHover",px:"1.5em",py:"0.75em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"0.25em",display:"inline-block",verticalAlign:"middle",iconsSize:"1.25em"},he.displayName="Button",he.Danger=function(e){return o.a.createElement(he,Object.assign({bg:"danger",borderColor:"danger",hoverBg:"dangerHover",hoverBorder:"dangerHover"},e))},he.Secondary=function(e){return o.a.createElement(he,Object.assign({bg:"secondary",border:"2px solid",borderColor:"secondary",hoverBg:"secondaryHover",hoverBorder:"secondaryHover"},e))},he.Outline=function(e){return o.a.createElement(he,Object.assign({border:"2px solid",borderColor:"primary",bg:"transparent",color:"primary",hoverColor:"white"},e))},he.Outline.Danger=function(e){return o.a.createElement(he.Danger,Object.assign({border:"2px solid",borderColor:"danger",bg:"transparent",color:"danger",hoverColor:"white"},e))},he.Transparent=function(e){return o.a.createElement(he,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},e))};var be=he,me=n(249),ge=function(e){var t=e.options,n=e.name,a=e.onChange,i=e.value,c=e.label,l=Object(A.a)(e,["options","name","onChange","value","label"]),u=Object(r.useMemo)((function(){return t&&t.length?t.map((function(e){return"string"===typeof e?{label:e,value:e}:e})):[]}),[t]);return o.a.createElement(q,Object.assign({alignItems:"center"},l),o.a.createElement(J,{mr:"0.5em"},c),o.a.createElement(H,{width:"12em"},o.a.createElement(me.a,{defaultValue:i,isClearable:!0,name:n,options:u,onChange:a})))},ve=n(250),ye=n(65),we=n(31),Oe=n.n(we);function je(){var e=Object(l.a)(["\n  width: 100%;\n"]);return je=function(){return e},e}function Ee(){var e=Object(l.a)(["\nwidth: max-content;\nth,\ntd {\n  white-space: pre-wrap;\n  padding: 0.5em;\n}\n"]);return Ee=function(){return e},e}var xe=c.d.table(Ee()),Re=c.d.input(je()),Be=Object(r.forwardRef)((function(e,t){var n=e.indeterminate,a=Object(A.a)(e,["indeterminate"]),i=Object(r.useRef)(),c=t||i;return Object(r.useEffect)((function(){c.current.indeterminate=n}),[c,n]),o.a.createElement(o.a.Fragment,null,o.a.createElement("input",Object.assign({type:"checkbox",ref:c},a)))}));var Se={Filter:function(e){var t=e.column,n=t.filterValue,r=t.preFilteredRows,a=t.setFilter,i=r.length;return o.a.createElement(Re,{value:n||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"Search ".concat(i," records...")})},canFilter:!1},Ae=function(e){var t=e.data,n=e.headerRow,a=e.onSelectRow,i=Object(r.useMemo)((function(){return n.map((function(e,t){return Oe()(e)?Object.assign({},e):{Header:e,accessor:function(e){return e[t]},id:t}}))}),[n]),c=Object(ye.useTable)({columns:i,data:t,defaultColumn:Se},ye.useFilters,ye.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return o.a.createElement("div",null,o.a.createElement(Be,t()))},Cell:function(e){var t=e.row;return o.a.createElement("div",null,o.a.createElement(Be,t.getToggleRowSelectedProps()))}}].concat(Object(ve.a)(e))}))})),l=c.getTableProps,u=c.getTableBodyProps,s=c.headerGroups,f=c.rows,d=c.prepareRow,p=c.state.selectedRowIds;return Object(r.useEffect)((function(){a(p)}),[p]),o.a.createElement(H,{overflowX:"auto"},o.a.createElement(xe,l(),o.a.createElement("thead",null,s.map((function(e){return o.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e,t){return o.a.createElement("th",e.getHeaderProps(),e.render("Header"),o.a.createElement("div",null,e.canFilter&&1===t?e.render("Filter"):null))})))}))),o.a.createElement("tbody",u(),f.map((function(e){return d(e),o.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return o.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))))};Ae.defaultProps={onSelectRow:function(){}};var Ce=Ae,ke=n(252),Le=n(246),Fe=n.n(Le),Ue=n(247),Me=(n(565),n(566),function(){var e=document.createElement("canvas").getContext("2d");return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}());function Te(e,t,n,r){this.dom=e,this.canvas=null,this.ctx=null,this.width=t,this.height=n,this.data=null,this.bg=r,this.init()}Te.prototype.init=function(){this.width||(this.width=this.dom.clientWidth),this.height||(this.height=this.dom.clientHeight),this.canvas=document.createElement("canvas"),function(e,t,n,r){r||(r=Me);var o=e;o.width=t*r,o.height=n*r,o.style.width=t+"px",o.style.height=n+"px",o.getContext("2d").setTransform(r,0,0,r,0,0)}(this.canvas,this.width,this.height),this.ctx=this.canvas.getContext("2d"),this.backgroundColor||(this.backgroundColor=this.dom.style.backgroundColor||"#ffffff"),this._addBackgroundRect(),this.bg&&this.ctx.drawImage(this.bg,0,0),this._addNamespace(),this.data='<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(this.width,'" height="').concat(this.height,'">\n      <foreignObject width="100%" height="100%">').concat(this.dom.outerHTML,"</foreignObject>\n    </svg>")},Te.prototype._addNamespace=function(){this.dom.setAttribute("xmlns","http://www.w3.org/1999/xhtml")},Te.prototype._addBackgroundRect=function(){this.ctx.save(),this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.restore()},Te.prototype.toCanvas=function(e){var t="data:image/svg+xml; charset=utf8, "+encodeURIComponent(this.data),n=new Image,r=this;n.onload=function(){r.ctx.drawImage(n,0,0),URL.revokeObjectURL(t),e&&e(r.canvas)},n.src=t};var De=Te,Pe=n(248),He=n.n(Pe);function Ie(){var e=Object(l.a)(["\ncanvas {\n  width: 100%;\n  height: auto;\n}\n"]);return Ie=function(){return e},e}var ze=c.d.div(Ie()),_e=new Image;_e.src=He.a;var qe=function(e){var t=e.data,n=e.headerRow,a=e.allData,i=e.updatedMark,c=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useMemo)((function(){return n.slice(1,n.length-2).concat(n[0]).map((function(e,t){return Oe()(e)?Object.assign({},e):{Header:e,accessor:function(e){return e[t]},id:t}}))}),[n]),f=Object(ye.useTable)({columns:s,data:t}),d=f.getTableProps,p=f.getTableBodyProps,h=f.headerGroups,b=f.rows,m=f.prepareRow,g=Object(r.useMemo)((function(){var e={};return h.reduce((function(t,n,r){return t[r]=n.headers.map((function(n,o){if(n.placeholderOf)return e[n.placeholderOf.id]=[r,o],{};if(e[n.id]){var a=Object(u.a)(e[n.id],2),i=a[0],c=a[1];return t[i][c]={rowSpan:r-i+1,children:n.render("Header")},{}}return{colSpan:n.totalVisibleHeaderCount,children:n.render("Header")}})),t}),[])}),[h]),v=Object(r.useMemo)((function(){return b.reduce((function(e,t,n){m(t);var r=t.cells.map((function(t,r){if(t.value)return{children:t.render("Cell"),rowSpan:1,updated:i&&i[n][r]};if(0===n){var o=a.findIndex((function(e){return e[r+1]}));return{children:a[o][r+1],rowSpan:1,updated:i&&i[o][r+1]}}var c=Fe()(e,(function(e){return e[r].rowSpan}));return c>-1&&(e[c][r].rowSpan+=1),{}}));return e.concat([r])}),[])}),[b,m,a,i]),y=Object(r.useCallback)((function(){l.current.querySelector("canvas").toBlob((function(e){Object(Ue.saveAs)(e,"image.png")}))}),[l]);return Object(r.useEffect)((function(){var e=new De(c.current,1920,1080,_e);l.current.innerHTML="",e.toCanvas((function(e){e.style.width="100%",e.style.height="auto",l.current&&l.current.appendChild(e)}))}),[t,i]),o.a.createElement(H.Relative,{my:"2em"},o.a.createElement(ze,{ref:l}),o.a.createElement(be,{my:"0.5em",onClick:y},"\u4e0b\u8f09\u5716\u6a94"),o.a.createElement(H.Absolute,{width:1,height:1,opacity:0,overflow:"hidden"},o.a.createElement(H.Relative,{width:1920,height:1080,ref:c},o.a.createElement("table",Object.assign({style:{position:"absolute",top:144,left:64,right:96,bottom:170}},d()),o.a.createElement("thead",null,h.map((function(e,t){return o.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e,n){var r=g[t][n],a=r.children,i=Object(A.a)(r,["children"]);return a?o.a.createElement("th",Object.assign({},e.getHeaderProps(),i,{style:{background:"#0E4E6E",color:"white",padding:"0.5em",fontFamily:"Arial",fontWeight:"bold",fontSize:"24pt"}}),o.a.createElement("span",{style:{writingMode:"vertical-rl",textOrientation:"mixed",transform:"rotate(180deg)",whiteSpace:"pre"}},a)):null})))}))),o.a.createElement("tbody",p(),b.map((function(e,t){return o.a.createElement("tr",e.getRowProps(),e.cells.map((function(e,n){var r=v[t][n],a=r.children,i=r.updated,c=Object(A.a)(r,["children","updated"]);return a?o.a.createElement("td",Object.assign({},e.getCellProps(),c,{style:{fontFamily:"Arial",fontSize:"20pt",padding:"0.5em",whiteSpace:"pre",textAlign:"center",background:"#E1E1E1",color:i?"#D6262F":"black"}}),a):null})))})))))))},Ne=function(){var e=function(){var e=Object(r.useContext)(Y),t=e.account,n=e.signIn,a=e.signOut,i=Object(A.a)(e,["account","signIn","signOut"]),c=Object(r.useCallback)((function(){return o.a.createElement(be,{onClick:t?a:n},t?"Logout":"Login")}),[t]);return Object(ke.a)({AuthButton:c,account:t,signIn:n,signOut:a},i)}(),t=e.account,n=e.loadSheets,a=e.loading,i=e.sheets,c=e.AuthButton,l=e.loadSheetData,s=e.sheetData,f=e.WorkBookIdInput,d=Object(r.useState)(),p=Object(u.a)(d,2),h=p[0],b=p[1],m=Object(r.useState)(),g=Object(u.a)(m,2),v=g[0],w=g[1],O=Object(r.useState)({}),j=Object(u.a)(O,2),E=j[0],x=j[1],R=s[h],B=v&&s[v],S=Object(r.useMemo)((function(){return R&&R.text&&R.text[0].some((function(e){return!e}))}),[R]),C=Object(r.useMemo)((function(){if(!R||!R.text)return[];if(S){var e=R.text[0].length,t=[];return R.text[0].slice(0).reverse().reduce((function(n,r,o){return r?t.length?(t.push(o),n.push({Header:r,columns:t.slice().reverse().map((function(t){return{Header:R.text[1][e-t-1],accessor:function(n){return n[e-t-1]},id:"".concat(o,"-").concat(t)}}))}),t=[]):n.push({Header:r,accessor:function(t){return t[e-o-1]},id:o}):t.push(o),n}),[]).reverse()}return R.text[0]}),[R,S]),k=Object(r.useMemo)((function(){return R&&R.text?R.text.slice(S?2:1):[]}),[R,S]),L=Object(r.useMemo)((function(){return B&&B.text?B.text.slice(S?2:1):[]}),[B,S]),F=Object(r.useMemo)((function(){return R&&R.text?R.text.reduce((function(e,t,n){var r=S?2:1;return n>=r&&(e[n-r]=t),e}),{}):{}}),[R,S]),U=Object(r.useMemo)((function(){return ae()(E)?Object.entries(E).map((function(e){var t=Object(u.a)(e,2),n=t[0];return t[1]?F[n]:null})).filter(Boolean):[]}),[E,F]),M=Object(r.useMemo)((function(){if(!ae()(L))return null;var e=L.reduce((function(e,t){return e[t[0]]=t,e}),{});return U.map((function(t){var n=e[t[0]];return n?t.map((function(e,t){return e!==n[t]})):t.fill(!0)}))}),[U,L]);return o.a.createElement(ce,{py:y(0,"2em")},t?o.a.createElement(H,null,o.a.createElement(q,null,o.a.createElement(f,{flex:"1"}),o.a.createElement(H,{ml:"1em"},o.a.createElement(be,{disabled:a,my:"1em",onClick:n},"\u8f09\u5165\u8cc7\u6599\u8868"))),i&&o.a.createElement(o.a.Fragment,null,o.a.createElement(ge,{label:"\u9078\u64c7\u8cc7\u6599\u8868",onChange:function(e){e?(b(e.value),l(e.value)):b()},options:i.map((function(e){return e.name}))}),R&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Ce,{data:k,headerRow:C,onSelectRow:x}),o.a.createElement(ge,{my:"1em",label:"\u5c0d\u6bd4\u8cc7\u6599\u8868",onChange:function(e){e?(w(e.value),l(e.value)):w()},options:i.map((function(e){return e.name})).filter((function(e){return e!==h}))}),U.length?o.a.createElement(qe,{allData:k,data:U,headerRow:C,updatedMark:M}):null))):o.a.createElement(o.a.Fragment,null,o.a.createElement(J,null,"\u8acb\u5148\u767b\u5165"),o.a.createElement(c,null)))};var We=function(){return o.a.createElement(Ne,null)};i.a.render(o.a.createElement(E,null,o.a.createElement(re,null,o.a.createElement(We,null))),document.getElementById("root"))}},[[253,1,2]]]);
//# sourceMappingURL=main.2679c9b3.chunk.js.map