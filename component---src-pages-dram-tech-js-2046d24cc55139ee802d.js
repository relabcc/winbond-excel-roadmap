(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[736],{8595:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(3935),a=n(7294),l=n(9550),u=n(7194),o=n(6026),c=n.n(o),i=n(6604),m=n.n(i),s=n(7910),f=n(3452),d=n(7411),p=n(2601),v=n(8765),h=n(5714),g=n(8371),E=n(8387),b=n(3815),y=function(){var e=(0,a.useState)((function(){return(0,h.Z)(new Date)})),t=e[0],n=e[1],r=(0,a.useMemo)((function(){return a.createElement(g.Z,{as:"label",my:"1em",alignItems:"center"},a.createElement(E.Z,{mr:"0.5em"},"起始季度"),a.createElement(b.Z,{width:"6em"},a.createElement(b.Z,{as:"select",p:"0.5em",onChange:function(e){return n(+e.target.value)},value:t},a.createElement("option",{value:"1"},"Q1"),a.createElement("option",{value:"2"},"Q2"),a.createElement("option",{value:"3"},"Q3"),a.createElement("option",{value:"4"},"Q4"))))}),[t]);return{startQuarter:t,quarterControl:r}},Z=n(1318),S=n(8926),k=n(1775),R=n(3305),w=n(8405),C=n(251),x=n(2889),H={dram:["#72afc7","#234b68"],flash:["#00af9c","#0b6660"]},Q={NOR:H.flash[0],NAND:H.flash[1]},Y=u.default.table.withConfig({displayName:"TechRoadmap__StyledTable",componentId:"sc-1im8ovf-0"})(["background:linear-gradient(0deg,rgba(227,227,227,0.85),rgba(238,238,238,0.3));height:100%;th,td{border:3px solid #fff;line-height:2.5;}"]),M=function(e){var t=e.fab,n=e.data,l=e.startYear,u=e.yearSpan,o=e.color,i=e.timelineRef,s=e.scale,f=e.boundBox,d=e.startQuarter,p=300/e.count,v=(0,a.useState)([]),h=v[0],g=v[1],E=(0,a.useMemo)((function(){return n.map((function(){return[(0,a.createRef)(),(0,a.createRef)()]}))}),[n]);return(0,a.useEffect)((function(){g(E.map((function(e){var t,n,r=e[0],a=e[1],l=null===(t=r.current)||void 0===t?void 0:t.getBoundingClientRect(),u=null===(n=a.current)||void 0===n?void 0:n.getBoundingClientRect();if(!u)return{};var o=u.bottom-l.top;return m()({left:l.left-f.left,width:u.right-l.left,top:l.top+o/2/2-f.top+window.scrollY,height:o/2},(function(e){return e/s}))})))}),[E,f,u]),a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement(b.Z,{as:"td",whiteSpace:"pre-wrap",bg:"#cacaca",textAlign:"center",style:{borderRightWidth:12},color:"#c63b38",fontSize:"27.5px",fontWeight:"bold"},t),c()(u*(u>3?2:4)).map((function(e,t,r){var l=r.length,u=t===l-1;return a.createElement("td",{key:t},n.map((function(e,r){var l;return 0===t&&(l=E[r][0]),u&&(l=E[r][1]),a.createElement(b.Z,{key:r,height:2*p,mt:0===r&&p/2,mb:r===n.length-1&&p/2,ref:l})})))}))),(null==i?void 0:i.current)&&r.createPortal(a.createElement(a.Fragment,null,n.map((function(e,t){return a.createElement(b.Z,{key:t,position:"absolute",style:h[t]},a.createElement(k.Z,{data:e.timeline,colors:[e.color||o],startQuarter:d,startYear:l,yearSpan:u,thickness:50},e.name))}))),i.current))},F=function(e){var t,n=e.data,r=e.headerRow,l=e.startYear,u=e.startQuarter,o=e.name,i=e.scale,m=e.yearSpan,f=void 0===m?3:m,d=(0,a.useState)({}),p=d[0],v=d[1],h=(0,a.useMemo)((function(){var e=1===u||f>3,t=function(e){return(f>3?"H":"Q")+(e+1)};return c()(f+(e?0:1)).map((function(n){return e?c()(f>3?2:4).map(t):0===n?c()(u-1,4).map(t):n===f?c()(u-1).map(t):c()(4).map(t)}))}),[f,u]),E=(0,a.useCallback)((function(e){var t,n,a,l,u,c,i,m,s,f,d=null!==(t=null===(n=r.find((function(e){return/Technology/i.test(e.Header)})))||void 0===n?void 0:n.accessor(e))&&void 0!==t?t:"",p=null!==(a=null===(l=r.find((function(e){return/density/i.test(e.Header)})))||void 0===l?void 0:l.accessor(e))&&void 0!==a?a:"",v=null!==(u=null===(c=r.find((function(e){return/Start/i.test(e.Header)})))||void 0===c?void 0:c.accessor(e))&&void 0!==u?u:"",h=null!==(i=null===(m=r.find((function(e){return/End/i.test(e.Header)})))||void 0===m?void 0:m.accessor(e))&&void 0!==i?i:"",g="flash"===o&&null!==(s=null===(f=r.find((function(e){return/Type/i.test(e.Header)})))||void 0===f?void 0:f.accessor(e))&&void 0!==s?s:"";return{name:g+" "+d+" "+p,timeline:[[(0,R.Z)(v),(0,R.Z)(h,1)]],color:Q[g]}}),[r,o]),y=(0,a.useMemo)((function(){var e,t=null===(e=r.find((function(e){return/fab/i.test(e.Header)})))||void 0===e?void 0:e.accessor;return t?n.reduce((function(e,n){var r=t(n),a=e.length;r&&(a=e.push({fab:r,data:[]}));var o,c=E(n),i=l+(u-1)/4,m=l+f+(u-1)/4;c.timeline[0].every((function(e,t){if(!e)return!0;if("string"==typeof e)return!1;var n=e.year+e.month/12;return t?n>=i:n<m}))&&(null===(o=e[a-1])||void 0===o||o.data.push(c));return e}),[]):[]}),[n,r,u,l,E,f]),Z=(0,a.useMemo)((function(){return y.map((function(){return(0,a.createRef)()}))}),[y]);return a.createElement(b.Z,null,a.createElement(x.Z,null,null===(t=n[0])||void 0===t?void 0:t[0]),a.createElement(s.Z,{bounds:!0,onResize:function(e){v(e.bounds)}},(function(e){var t=e.measureRef;return a.createElement(b.Z,{position:"absolute",left:"170px",top:"162px",right:"183px",bottom:"130px",ref:t},a.createElement(Y,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement(b.Z,{as:"th",fontWeight:"900",bg:"#efefef",rowSpan:2,width:"222px",style:{borderRightWidth:12}}),h.map((function(e,t){return a.createElement(b.Z,{key:t,color:"white",as:"th",bg:"#c63b38",colSpan:e.length,fontSize:"26px",fontWeight:"700"},l+t)}))),a.createElement("tr",null,h.reduce((function(e,t,n){return e.concat(t.map((function(e){return a.createElement(b.Z,{as:"th",bg:"#cacaca",key:e+n,width:"112px",fontSize:"24px"},e)})))}),[]))),a.createElement("tbody",null,y.map((function(e,t){var r=e.fab,c=e.data;return a.createElement(M,{key:r,data:c,fab:r,startYear:l,yearSpan:f,startQuarter:f>3?1:u,timelineRef:Z[t],color:H[o][t],scale:i,boundBox:p,count:n.length})})))),a.createElement(g.Z.HStack,{mt:"1em",justifyContent:"flex-end",alignItems:"center",spacing:"1.25em"},a.createElement(C.Z,{bg:"#9fa0a0"},"NOTE"),a.createElement(b.Z,null,"Roapmaps are subject to change.")),y.map((function(e,t){var n=e.fab;return a.createElement(b.Z.FullAbsolute,{key:n,ref:Z[t]})})))})))},W=function(e){var t=e.name,n=e.value,r=e.onChange,l=e.children,u=e.checked;return a.createElement(b.Z,{as:"label"},a.createElement("input",{type:"radio",name:t,value:n,onChange:r,checked:u}),a.createElement(b.Z,{as:"span",ml:"0.5em"},l))},_=[{label:"3 Years",value:3},{label:"7 Years",value:7}],B=function(e){var t=e.data,n=e.name,r=(0,v.Z)(),l=r.startYear,u=r.yearControl,o=y(),c=o.startQuarter,i=o.quarterControl,m=(0,a.useState)(0),s=m[0],f=m[1],d=(0,a.useState)(3),h=d[0],b=d[1],Z=(0,p.Z)(t,0),k=(0,a.useMemo)((function(){return t?t.slice(1):[]}),[t]),R=(0,a.useMemo)((function(){return k.reduce((function(e,t){var n,r=e.length-1;return t[0]&&(r=e.push([])-1),null===(n=e[r])||void 0===n||n.push(t),e}),[])}),[k]),C=(0,a.useMemo)((function(){return Z.every((function(e){return!/fab/i.test(e.Header)}))}),[Z]);return a.createElement(a.Fragment,null,a.createElement(g.Z.HStack,{alignItems:"center"},u,i,a.createElement(g.Z.HStack,{spacing:"1.5em"},_.map((function(e){var t=e.value,n=e.label;return a.createElement(W,{name:"yearSpan",value:t,onChange:function(){return b(t)},checked:h===t,key:t},n)})))),R&&R[s]&&(C?a.createElement(E.Z,{fontWeight:"bold",my:"1em"},"Invalid Sheet Format."):a.createElement(a.Fragment,null,a.createElement(w.Z,{pageCount:R.length,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:function(e){var t=e.selected;return f(t)}}),a.createElement(S.Z,{noBg:!0,name:n+"-tech-roadmap",key:h},a.createElement(F,{data:R[s],headerRow:Z,startYear:l,startQuarter:c,name:n,yearSpan:h})))))},I=function(e){var t=e.name;return a.createElement(d.Z,null,a.createElement(Z.Z,{as:l.rU,to:"/"+t},"< Home"),a.createElement(f.Z,{name:t},a.createElement(B,null)))}},261:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(5485),l=n(8595);t.default=(0,a.Z)((function(e){return r.createElement(l.Z,Object.assign({name:"dram"},e))}))},6604:function(e,t,n){var r=n(9465),a=n(7816),l=n(7206);e.exports=function(e,t){var n={};return t=l(t,3),a(e,(function(e,a,l){r(n,a,t(e,a,l))})),n}}}]);
//# sourceMappingURL=component---src-pages-dram-tech-js-2046d24cc55139ee802d.js.map