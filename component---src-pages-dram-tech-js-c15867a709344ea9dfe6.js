(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[736],{5395:function(e,t,n){"use strict";var r=n(3935),a=n(7294),l=n(9550),u=n(7194),c=n(6026),o=n.n(c),i=n(6604),m=n.n(i),s=n(7910),f=n(3452),d=n(7411),g=n(2601),h=n(8765),p=n(8387),v=n(3815),b=n(7643),E=n(8926),y=n(1775),Z=n(3305),k=n(8405),S=n(8371),R=n(251),C=n(2889),w={dram:["#72afc7","#234b68"],flash:["#00af9c","#0b6660"]},x=u.default.table.withConfig({displayName:"TechRoadmap__StyledTable",componentId:"sc-1im8ovf-0"})(["th,td{border:3px solid #fff;line-height:2.5;}"]),H=function(e){var t=e.fab,n=e.data,l=e.years,u=e.color,c=e.timelineRef,i=e.scale,s=e.boundBox,f=(0,a.useState)([]),d=f[0],g=f[1],h=(0,a.useMemo)((function(){return n.map((function(){return[(0,a.createRef)(),(0,a.createRef)()]}))}),[n]);return(0,a.useEffect)((function(){g(h.map((function(e){var t,n,r=e[0],a=e[1],l=null===(t=r.current)||void 0===t?void 0:t.getBoundingClientRect(),u=null===(n=a.current)||void 0===n?void 0:n.getBoundingClientRect();if(!u)return{};var c=u.bottom-l.top;return m()({left:l.left-s.left,width:u.right-l.left,top:l.top+c/2/2-s.top,height:c/2},(function(e){return e/i}))})))}),[h,s,l.length]),a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement(v.Z,{as:"td",whiteSpace:"pre-wrap",bg:"#cacaca",textAlign:"center",style:{borderRightWidth:12},color:"#c63b38",fontSize:"27.5px",fontWeight:"bold"},t),o()(l.length*(l.length>3?2:4)).map((function(e,t,r){var l=r.length,u=t===l-1;return a.createElement("td",{key:t,style:{background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},n.map((function(e,r){var l;return 0===t&&(l=h[r][0]),u&&(l=h[r][1]),a.createElement(v.Z,{key:r,height:100,mt:0===r&&25,mb:r===n.length-1&&25,ref:l})})))}))),(null==c?void 0:c.current)&&r.createPortal(a.createElement(a.Fragment,null,n.map((function(e,t){return a.createElement(v.Z,{key:t,position:"absolute",style:d[t]},a.createElement(y.Z,{data:e.timeline,colors:[u],startQuarter:1,startYear:l[0],yearSpan:l.length,thickness:50},e.name))}))),c.current))},M=function(e){var t,n=e.data,r=e.headerRow,l=e.startYear,u=e.name,c=e.scale,i=e.yearSpan,m=void 0===i?3:i,f=(0,a.useState)({}),d=f[0],g=f[1],h=(0,a.useMemo)((function(){return o()(m)}),[m]),p=(0,a.useCallback)((function(e){var t,n,a,l,u,c,o,i,m=null!==(t=null===(n=r.find((function(e){return/Technology/i.test(e.Header)})))||void 0===n?void 0:n.accessor(e))&&void 0!==t?t:"",s=null!==(a=null===(l=r.find((function(e){return/density/i.test(e.Header)})))||void 0===l?void 0:l.accessor(e))&&void 0!==a?a:"",f=null!==(u=null===(c=r.find((function(e){return/Start/i.test(e.Header)})))||void 0===c?void 0:c.accessor(e))&&void 0!==u?u:"",d=null!==(o=null===(i=r.find((function(e){return/End/i.test(e.Header)})))||void 0===i?void 0:i.accessor(e))&&void 0!==o?o:"";return{name:m+" "+s,timeline:[[(0,Z.Z)(f),(0,Z.Z)(d,1)]]}}),[r]),b=(0,a.useMemo)((function(){var e,t=null===(e=r.find((function(e){return/fab/i.test(e.Header)})))||void 0===e?void 0:e.accessor;return t?n.reduce((function(e,n){var r,a=t(n),l=e.length;return a&&(l=e.push({fab:a,data:[]})),null===(r=e[l-1])||void 0===r||r.data.push(p(n)),e}),[]):[]}),[n,r,p]),E=(0,a.useMemo)((function(){return o()(m>3?2:4).map((function(e){return(m>3?"H":"Q")+(e+1)}))}),[m]),y=(0,a.useMemo)((function(){return b.map((function(){return(0,a.createRef)()}))}),[b]);return a.createElement(v.Z,null,a.createElement(C.Z,null,null===(t=n[0])||void 0===t?void 0:t[0]),a.createElement(s.Z,{bounds:!0,onResize:function(e){g(e.bounds)}},(function(e){var t=e.measureRef;return a.createElement(v.Z,{position:"absolute",left:"170px",top:"162px",right:"183px",ref:t},a.createElement(x,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement(v.Z,{as:"th",fontWeight:"900",bg:"#efefef",rowSpan:2,width:"222px",style:{borderRightWidth:12}}),h.map((function(e){return a.createElement(v.Z,{key:e,color:"white",as:"th",bg:"#c63b38",colSpan:m>3?2:4,fontSize:"26px",fontWeight:"700"},l+e)}))),a.createElement("tr",null,h.reduce((function(e,t){return e.concat(E.map((function(e){return a.createElement(v.Z,{as:"th",bg:"#cacaca",key:e+t,width:"112px",fontSize:"24px"},e)})))}),[]))),a.createElement("tbody",null,b.map((function(e,t){var n=e.fab,r=e.data;return a.createElement(H,{key:n,data:r,fab:n,years:h.map((function(e){return e+l})),timelineRef:y[t],color:w[u][t],scale:c,boundBox:d})})))),a.createElement(S.Z.HStack,{mt:"1em",justifyContent:"flex-end",alignItems:"center",spacing:"1.25em"},a.createElement(R.Z,{bg:"#9fa0a0"},"NOTE"),a.createElement(v.Z,null,"Roapmaps are subject to change.")),b.map((function(e,t){var n=e.fab;return a.createElement(v.Z.FullAbsolute,{key:n,ref:y[t]})})))})))},Y=function(e){var t=e.name,n=e.value,r=e.onChange,l=e.children,u=e.checked;return a.createElement(v.Z,{as:"label"},a.createElement("input",{type:"radio",name:t,value:n,onChange:r,checked:u}),a.createElement(v.Z,{as:"span",ml:"0.5em"},l))},F=[{label:"3 Years",value:3},{label:"7 Years",value:7}],W=function(e){var t=e.data,n=e.name,r=(0,h.Z)(),l=r.startYear,u=r.yearControl,c=(0,a.useState)(0),o=c[0],i=c[1],m=(0,a.useState)(3),s=m[0],f=m[1],d=(0,g.Z)(t,0),v=(0,a.useMemo)((function(){return t?t.slice(1):[]}),[t]),b=(0,a.useMemo)((function(){return v.reduce((function(e,t){var n,r=e.length-1;return t[0]&&(r=e.push([])-1),null===(n=e[r])||void 0===n||n.push(t),e}),[])}),[v]),y=(0,a.useMemo)((function(){return d.every((function(e){return!/fab/i.test(e.Header)}))}),[d]);return a.createElement(a.Fragment,null,a.createElement(S.Z.HStack,{alignItems:"center"},u,a.createElement(S.Z.HStack,{spacing:"1.25em"},F.map((function(e){var t=e.value,n=e.label;return a.createElement(Y,{name:"yearSpan",value:t,onChange:function(){return f(t)},checked:s===t,key:t},n)})))),b&&b[o]&&(y?a.createElement(p.Z,{fontWeight:"bold",my:"1em"},"Invalid Sheet Format."):a.createElement(a.Fragment,null,a.createElement(k.Z,{pageCount:b.length,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:function(e){var t=e.selected;return i(t)}}),a.createElement(E.Z,{name:n+"-tech-roadmap"},a.createElement(M,{data:b[o],headerRow:d,startYear:l,name:n,yearSpan:s})))))};t.Z=function(e){var t=e.name;return a.createElement(d.Z,null,a.createElement(b.Z,{as:l.rU,to:"/"},"< Home"),a.createElement(f.Z,{name:t},a.createElement(W,null)))}},8765:function(e,t,n){"use strict";var r=n(7294),a=n(8371),l=n(8387),u=n(3815);t.Z=function(){var e=(0,r.useState)((function(){return(new Date).getFullYear()})),t=e[0],n=e[1],c=(0,r.useMemo)((function(){return r.createElement(a.Z,{as:"label",my:"1em",alignItems:"center"},r.createElement(l.Z,{mr:"0.5em"},"起始年分"),r.createElement(u.Z,{width:"12em"},r.createElement("input",{style:{lineHeight:2},type:"number",value:t,onChange:function(e){return n(+e.target.value)}})))}),[t]);return{startYear:t,yearControl:c}}},261:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(5485),l=n(5395);t.default=(0,a.Z)((function(e){return r.createElement(l.Z,Object.assign({name:"dram"},e))}))},6604:function(e,t,n){var r=n(9465),a=n(7816),l=n(7206);e.exports=function(e,t){var n={};return t=l(t,3),a(e,(function(e,a,l){r(n,a,t(e,a,l))})),n}}}]);
//# sourceMappingURL=component---src-pages-dram-tech-js-c15867a709344ea9dfe6.js.map