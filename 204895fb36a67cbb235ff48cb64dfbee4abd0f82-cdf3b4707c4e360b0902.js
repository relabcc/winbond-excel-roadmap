(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[710],{9261:function(e,n,t){"use strict";t.d(n,{OK:function(){return j},td:function(){return w},x4:function(){return S},mQ:function(){return x}});var r=t(7294);function a(e){return function(n){return!!n.type&&n.type.tabsRole===e}}var l=a("Tab"),c=a("TabList"),u=a("TabPanel");function s(e,n){return r.Children.map(e,(function(e){return null===e?null:function(e){return l(e)||c(e)||u(e)}(e)?n(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,Object.assign({},e.props,{children:s(e.props.children,n)})):e}))}function o(e,n){return r.Children.forEach(e,(function(e){null!==e&&(l(e)||u(e)?n(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(c(e)&&n(e),o(e.props.children,n)))}))}function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function f(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}function d(e){var n=0;return o(e,(function(e){l(e)&&n++})),n}var b,p=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function v(e){return e&&"getAttribute"in e}function m(e){return v(e)&&e.getAttribute("data-rttab")}function h(e){return v(e)&&"true"===e.getAttribute("aria-disabled")}var N=function(e){var n=(0,r.useRef)([]),t=(0,r.useRef)([]),a=(0,r.useRef)();function o(n,t){n<0||n>=N()||(0,e.onSelect)(n,e.selectedIndex,t)}function i(e){for(var n=N(),t=e+1;t<n;t++)if(!h(y(t)))return t;for(var r=0;r<e;r++)if(!h(y(r)))return r;return e}function v(e){for(var n=e;n--;)if(!h(y(n)))return n;for(n=N();n-- >e;)if(!h(y(n)))return n;return e}function N(){return d(e.children)}function y(e){return n.current["tabs-"+e]}function C(e){var n=e.target;do{if(x(n)){if(h(n))return;return void o([].slice.call(n.parentNode.children).filter(m).indexOf(n),e)}}while(null!=(n=n.parentNode))}function x(e){if(!m(e))return!1;var n=e.parentElement;do{if(n===a.current)return!0;if(n.getAttribute("data-rttabs"))break;n=n.parentElement}while(n);return!1}e.children;var g=e.className,R=(e.disabledTabClassName,e.domRef),w=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,p));return r.createElement("div",Object.assign({},w,{className:f(g),onClick:C,onKeyDown:function(n){var t=e.direction,r=e.disableUpDownKeys;if(x(n.target)){var a=e.selectedIndex,l=!1,c=!1;"Space"!==n.code&&32!==n.keyCode&&"Enter"!==n.code&&13!==n.keyCode||(l=!0,c=!1,C(n)),"ArrowLeft"!==n.code&&37!==n.keyCode&&(r||38!==n.keyCode&&"ArrowUp"!==n.code)?"ArrowRight"!==n.code&&39!==n.keyCode&&(r||40!==n.keyCode&&"ArrowDown"!==n.code)?35===n.keyCode||"End"===n.code?(a=function(){for(var e=N();e--;)if(!h(y(e)))return e;return null}(),l=!0,c=!0):36!==n.keyCode&&"Home"!==n.code||(a=function(){for(var e=N(),n=0;n<e;n++)if(!h(y(n)))return n;return null}(),l=!0,c=!0):(a="rtl"===t?v(a):i(a),l=!0,c=!0):(a="rtl"===t?i(a):v(a),l=!0,c=!0),l&&n.preventDefault(),c&&o(a,n)}},ref:function(e){a.current=e,R&&R(e)},"data-rttabs":!0}),function(){var a=0,o=e.children,i=e.disabledTabClassName,f=e.focus,d=e.forceRenderTabPanel,p=e.selectedIndex,v=e.selectedTabClassName,m=e.selectedTabPanelClassName,h=e.environment;t.current=t.current||[];for(var C=t.current.length-N(),x=(0,r.useId)();C++<0;)t.current.push(""+x+t.current.length);return s(o,(function(e){var o=e;if(c(e)){var N=0,C=!1;null==b&&function(e){var n=e||("undefined"!=typeof window?window:void 0);try{b=!(void 0===n||!n.document||!n.document.activeElement)}catch(t){b=!1}}(h);var x=h||("undefined"!=typeof window?window:void 0);b&&x&&(C=r.Children.toArray(e.props.children).filter(l).some((function(e,n){return x.document.activeElement===y(n)}))),o=(0,r.cloneElement)(e,{children:s(e.props.children,(function(e){var a="tabs-"+N,l=p===N,c={tabRef:function(e){n.current[a]=e},id:t.current[N],selected:l,focus:l&&(f||C)};return v&&(c.selectedClassName=v),i&&(c.disabledClassName=i),N++,(0,r.cloneElement)(e,c)}))})}else if(u(e)){var g={id:t.current[a],selected:p===a};d&&(g.forceRender=d),m&&(g.selectedClassName=m),a++,o=(0,r.cloneElement)(e,g)}return o}))}())};N.defaultProps={className:"react-tabs",focus:!1};var y=N,C=function(e){var n=e.children,t=e.defaultFocus,a=e.defaultIndex,l=e.focusTabOnClick,c=e.onSelect,u=(0,r.useState)(t),s=u[0],o=u[1],i=(0,r.useState)(function(e){return null===e.selectedIndex?1:0}(e)),f=i[0],b=(0,r.useState)(1===f?a||0:null),p=b[0],v=b[1];if((0,r.useEffect)((function(){o(!1)}),[]),1===f){var m=d(n);(0,r.useEffect)((function(){if(null!=p){var e=Math.max(0,m-1);v(Math.min(p,e))}}),[m])}var h=Object.assign({},e);return h.focus=s,h.onSelect=function(e,n,t){"function"==typeof c&&!1===c(e,n,t)||(l&&o(!0),1===f&&v(e))},null!=p&&(h.selectedIndex=p),delete h.defaultFocus,delete h.defaultIndex,delete h.focusTabOnClick,r.createElement(y,h,n)};C.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},C.tabsRole="Tabs";var x=C,g=["children","className"];var R=function(e){var n=e.children,t=e.className,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,g);return r.createElement("ul",Object.assign({},a,{className:f(t),role:"tablist"}),n)};R.tabsRole="TabList",R.defaultProps={className:"react-tabs__tab-list"};var w=R,T=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];var O="react-tabs__tab",k={className:O,disabledClassName:O+"--disabled",focus:!1,id:null,selected:!1,selectedClassName:O+"--selected"},E=function(e){var n,t=(0,r.useRef)(),a=e.children,l=e.className,c=e.disabled,u=e.disabledClassName,s=e.focus,o=e.id,i=e.selected,d=e.selectedClassName,b=e.tabIndex,p=e.tabRef,v=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,T);return(0,r.useEffect)((function(){i&&s&&t.current.focus()}),[i,s]),r.createElement("li",Object.assign({},v,{className:f(l,(n={},n[d]=i,n[u]=c,n)),ref:function(e){t.current=e,p&&p(e)},role:"tab",id:"tab"+o,"aria-selected":i?"true":"false","aria-disabled":c?"true":"false","aria-controls":"panel"+o,tabIndex:b||(i?"0":null),"data-rttab":!0}),a)};E.tabsRole="Tab",E.defaultProps=k;var j=E,I=["children","className","forceRender","id","selected","selectedClassName"];var P="react-tabs__tab-panel",_={className:P,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},A=function(e){var n,t=e.children,a=e.className,l=e.forceRender,c=e.id,u=e.selected,s=e.selectedClassName,o=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,I);return r.createElement("div",Object.assign({},o,{className:f(a,(n={},n[s]=u,n)),role:"tabpanel",id:"panel"+c,"aria-labelledby":"tab"+c}),l||u?t:null)};A.tabsRole="TabPanel",A.defaultProps=_;var S=A},4174:function(e){e.exports=function(e,n,t,r){for(var a=-1,l=null==e?0:e.length;++a<l;){var c=e[a];n(r,c,t(c),e)}return r}},1119:function(e,n,t){var r=t(4140);e.exports=function(e,n,t,a){return r(e,(function(e,r,l){n(a,e,t(e),l)})),a}},4140:function(e,n,t){var r=t(7816),a=t(9291)(r);e.exports=a},5189:function(e,n,t){var r=t(4174),a=t(1119),l=t(7206),c=t(1469);e.exports=function(e,n){return function(t,u){var s=c(t)?r:a,o=n?n():{};return s(t,e,l(u,2),o)}}},9291:function(e,n,t){var r=t(8612);e.exports=function(e,n){return function(t,a){if(null==t)return t;if(!r(t))return e(t,a);for(var l=t.length,c=n?l:-1,u=Object(t);(n?c--:++c<l)&&!1!==a(u[c],c,u););return t}}},2689:function(e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},7739:function(e,n,t){var r=t(9465),a=t(5189),l=Object.prototype.hasOwnProperty,c=a((function(e,n,t){l.call(e,t)?e[t].push(n):r(e,t,[n])}));e.exports=c},928:function(e){e.exports=function(e){var n=null==e?0:e.length;return n?e[n-1]:void 0}},554:function(e,n,t){var r=t(8601);e.exports=function(e){var n=r(e),t=n%1;return n==n?t?n-t:n:0}}}]);
//# sourceMappingURL=204895fb36a67cbb235ff48cb64dfbee4abd0f82-cdf3b4707c4e360b0902.js.map