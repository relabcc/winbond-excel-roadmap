"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[801],{7910:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(4038),i=n(1531),o=n(366),s=n(7294),a=n(5697),c=n.n(a),u=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),h="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,f=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),l="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(f):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var d=["top","right","bottom","left","width","height","size","weight"],p="undefined"!=typeof MutationObserver,v=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){l(o)}function a(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){h&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),p?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){h&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;d.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),m=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||f},b=R(0,0,0,0);function g(e){return parseFloat(e)||0}function w(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+g(e["border-"+n+"-width"])}),0)}function y(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return b;var r=_(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=g(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,a=g(r.width),c=g(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==t&&(a-=w(r,"left","right")+o),Math.round(c+s)!==n&&(c-=w(r,"top","bottom")+s)),!function(e){return e===_(e).document.documentElement}(e)){var u=Math.round(a+o)-t,h=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(h)&&(c-=h)}return R(i.left,i.top,a,c)}var O="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof _(e).SVGGraphicsElement}:function(e){return e instanceof _(e).SVGElement&&"function"==typeof e.getBBox};function E(e){return h?O(e)?function(e){var t=e.getBBox();return R(0,0,t.width,t.height)}(e):y(e):b}function R(e,t,n,r){return{x:e,y:t,width:n,height:r}}var x=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=R(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=E(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),z=function(e,t){var n,r,i,o,s,a,c,u=(r=(n=t).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),m(c,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),c);m(this,{target:e,contentRect:u})},M=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new u,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof _(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new x(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof _(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new z(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),A="undefined"!=typeof WeakMap?new WeakMap:new u,Z=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=v.getInstance(),r=new M(t,n,this);A.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){Z.prototype[e]=function(){var t;return(t=A.get(this))[e].apply(t,arguments)}}));var T=void 0!==f.ResizeObserver?f.ResizeObserver:Z,k=["client","offset","scroll","bounds","margin"];function S(e){var t=[];return k.forEach((function(n){e[n]&&t.push(n)})),t}function D(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var r=e.getBoundingClientRect();n.bounds={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height}}if(t.indexOf("margin")>-1){var i=getComputedStyle(e);n.margin={top:i?parseInt(i.marginTop):0,right:i?parseInt(i.marginRight):0,bottom:i?parseInt(i.marginBottom):0,left:i?parseInt(i.marginLeft):0}}return n}function C(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||window}var L=function(e){return function(t){var n,a;return a=n=function(n){function a(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=n.call.apply(n,[this].concat(i))||this).state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},t._animationFrameID=null,t._resizeObserver=null,t._node=null,t._window=null,t.measure=function(n){var r=D(t._node,e||S(t.props));n&&(r.entry=n[0].contentRect),t._animationFrameID=t._window.requestAnimationFrame((function(){null!==t._resizeObserver&&(t.setState({contentRect:r}),"function"==typeof t.props.onResize&&t.props.onResize(r))}))},t._handleRef=function(e){null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.unobserve(t._node),t._node=e,t._window=C(t._node);var n=t.props.innerRef;n&&("function"==typeof n?n(t._node):n.current=t._node),null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.observe(t._node)},t}(0,o.Z)(a,n);var c=a.prototype;return c.componentDidMount=function(){this._resizeObserver=null!==this._window&&this._window.ResizeObserver?new this._window.ResizeObserver(this.measure):new T(this.measure),null!==this._node&&(this._resizeObserver.observe(this._node),"function"==typeof this.props.onResize&&this.props.onResize(D(this._node,e||S(this.props))))},c.componentWillUnmount=function(){null!==this._window&&this._window.cancelAnimationFrame(this._animationFrameID),null!==this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},c.render=function(){var e=this.props,n=(e.innerRef,e.onResize,(0,i.Z)(e,["innerRef","onResize"]));return(0,s.createElement)(t,(0,r.Z)({},n,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},a}(s.Component),n.propTypes={client:c().bool,offset:c().bool,scroll:c().bool,bounds:c().bool,margin:c().bool,innerRef:c().oneOfType([c().object,c().func]),onResize:c().func},a}}()((function(e){var t=e.measure,n=e.measureRef,r=e.contentRect;return(0,e.children)({measure:t,measureRef:n,contentRect:r})}));L.displayName="Measure",L.propTypes.children=c().func;var j=L},1318:function(e,t,n){var r=n(7194),i=n(1807),o=n(3059),s=n(9447),a=n(6700),c=(0,r.css)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{",";}"],i.JB,i.Dh,i.$_,i.Ue,i.Nv,i.rX,i.jf,(function(e){return e.disabled&&"\n    pointer-events: none;\n  "}),(0,s.J)("hoverColor")),u=(0,a.Z)(r.default.a.withConfig({shouldForwardProp:o.ZP}).withConfig({displayName:"Link",componentId:"sc-53k5wg-0"})(["",""],c));u.displayName="Link",u.defaultProps={fontWeight:"bold",target:"_blank"},t.Z=u},1775:function(e,t,n){var r=n(7294),i=n(7194),o=n(3815),s=n(8371),a=(0,i.default)(s.Z).withConfig({displayName:"DramTimeline__Timeline",componentId:"sc-1egpdlv-0"})(["top:0;bottom:0;position:absolute;",""],(function(e){return"true"===e["data-extended"]&&'\n    &::after {\n      content: "";\n      position: absolute;\n      display: block;\n      top: 0;\n      right: -'+e.height+"px;\n      border-width: "+e.height/2+"px;\n      border-style: solid;\n      border-color: transparent transparent transparent "+e.bg+";\n    }\n  "}));t.Z=function(e){var t=e.data,n=e.startYear,i=e.startQuarter,s=e.yearSpan,c=e.colors,u=e.thickness,h=void 0===u?32:u,f=e.children,l=(0,r.useCallback)((function(e,t){if(void 0===t&&(t=0),t&&!e)return 101;if(!e||e.year<n)return 0;var r=4*(e.year-n)+((e.month+t)/3-i+1);return Math.max(0,r/(4*s)*100)}),[n,i,s]);return r.createElement(o.Z,{position:"absolute",left:"0",right:"0",height:h+"px",top:"50%",transform:"translateY(-50%)"},t&&t.map((function(e,t){if("-"===e[0]||"-"===e[1])return null;var n=l(e[0]);if(n>100)return null;var i=l(e[1],1);return r.createElement(a,{key:t,bg:c[t],style:{left:n+"%",width:Math.min(100,i)-n+"%"},height:h,"data-start":e[0].str,"data-end":e[1].str,"data-extended":String(i>100),fontSize:"27.5px",color:"white",fontWeight:"bold",whiteSpace:"nowrap",alignItems:"center"},f&&r.createElement(o.Z,{width:"100%",pl:"0.5em",pr:"1em",textAlign:"right"},f))})))}},251:function(e,t,n){var r=n(3815),i=n(7294);t.Z=function(e){return i.createElement(r.Z,Object.assign({textAlign:"center",width:"112px",color:"white",py:"4px",fontSize:"19px",fontWeight:"900"},e))}},8926:function(e,t,n){var r=n(7294),i=n(7910),o=n(2956),s=n(3815),a=n(1320),c=n(9855),u=n(6210),h=n(6434),f=(0,r.forwardRef)((function(e,t){var n=e.children,f=e.noBg,l=e.width,d=void 0===l?1920:l,p=e.height,v=void 0===p?1080:p,m=e.name,_=e.downloading,b=e.downloadRef,g=(0,r.useState)(!1),w=g[0],y=g[1],O=(0,r.useState)(1),E=O[0],R=O[1],x=(0,r.useRef)(),z=function(){return new Promise((function(e){y(!0);var t=(new Date).toLocaleDateString();new u.Z(x.current,d,v).toCanvas((function(n){n.toBlob((function(n){(0,o.saveAs)(n,t+"-"+m+".png"),y(!1),e()}))}))}))};return(0,r.useEffect)((function(){b&&(b.current=z)}),[b]),r.createElement(r.Fragment,null,r.createElement(i.Z,{bounds:!0,onResize:function(e){R(e.bounds.width/d)}},(function(e){var t=e.measureRef;return r.createElement("div",{ref:t})})),r.createElement(s.Z,{pt:v/d*100+"%",position:"relative"},r.createElement(s.Z.FullAbsolute,{style:{transform:"scale("+E+")",transformOrigin:"0 0"},ref:t},r.createElement(c.Z,{position:"relative",width:d,height:v,ref:x,src:f&&(w||_)?null:a.Z,pointerEvents:"none",userSelect:"none",fontFamily:"'Noto Sans', sans-serif"},(0,r.cloneElement)(n,{scale:E})))),r.createElement(h.Z,{disabled:w,my:"2em",onClick:z},"下載"))}));t.Z=f},2889:function(e,t,n){var r=n(3815),i=n(51),o=n(7294);t.Z=function(e){var t=e.children;return o.createElement(r.Z,{position:"absolute",top:55,left:64,transform:"translateY(-50%)",fontSize:"54px",color:"darkGray",fontWeight:"900",whiteSpace:"nowrap",fontFamily:i.ZP.font},t)}},3305:function(e,t){var n=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],r=[/^([1-4])Q'?(\d{2})$/i,/^(\d{2})Q([1-4])$/i,/^Q([1-4])'?(\d{2})$/i],i=new RegExp("("+n.join("|")+")'?(\\d{2})","i"),o=function(e,t){return void 0===t&&(t=0),3*(e-1)+2*t},s=2e3;t.Z=function(e,t){for(var a,c=0;!a&&c<r.length;)a=e.match(r[c]),c++;if(a){var u=a,h=u[1],f=u[2];return 1===h.length?{str:e,year:+f+s,month:o(h,t)}:{str:e,year:+h+s,month:o(f,t)}}if(a=e.match(i)){var l=a,d=l[1];return{str:e,year:+l[2]+s,month:n.findIndex((function(e){return e===d.toLowerCase()}))}}return e}}}]);
//# sourceMappingURL=34fceb7130794ad3360c84be3404449055c0f20f-a0607061b9b5f04d4bc7.js.map