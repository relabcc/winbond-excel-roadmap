(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[603],{648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),u=n(5112)("toStringTag"),a=Object,l="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=a(e),u))?n:l?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},6135:function(e,t,n){"use strict";var r=n(4948),o=n(3070),i=n(9114);e.exports=function(e,t,n){var u=r(t);u in e?o.f(e,u,i(0,n)):e[u]=n}},9974:function(e,t,n){var r=n(1702),o=n(9662),i=n(4374),u=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?u(e,t):function(){return e.apply(t,arguments)}}},1246:function(e,t,n){var r=n(648),o=n(8173),i=n(7497),u=n(5112)("iterator");e.exports=function(e){if(null!=e)return o(e,u)||o(e,"@@iterator")||i[r(e)]}},8554:function(e,t,n){var r=n(1460),o=n(9662),i=n(9670),u=n(6330),a=n(1246),l=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(o(n))return i(r(n,e));throw l(u(e)+" is not iterable")}},7659:function(e,t,n){var r=n(5112),o=n(7497),i=r("iterator"),u=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||u[i]===e)}},408:function(e,t,n){var r=n(9974),o=n(1460),i=n(9670),u=n(6330),a=n(7659),l=n(6244),c=n(7976),f=n(8554),m=n(1246),d=n(9212),s=TypeError,p=function(e,t){this.stopped=e,this.result=t},h=p.prototype;e.exports=function(e,t,n){var g,x,v,y,E,b,w,Z=n&&n.that,S=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),D=!(!n||!n.INTERRUPTED),k=r(t,Z),C=function(e){return g&&d(g,"normal",e),new p(!0,e)},A=function(e){return S?(i(e),D?k(e[0],e[1],C):k(e[0],e[1])):D?k(e,C):k(e)};if(I)g=e;else{if(!(x=m(e)))throw s(u(e)+" is not iterable");if(a(x)){for(v=0,y=l(e);y>v;v++)if((E=A(e[v]))&&c(h,E))return E;return new p(!1)}g=f(e,x)}for(b=g.next;!(w=o(b,g)).done;){try{E=A(w.value)}catch(M){d(g,"throw",M)}if("object"==typeof E&&E&&c(h,E))return E}return new p(!1)}},9212:function(e,t,n){var r=n(1460),o=n(9670),i=n(8173);e.exports=function(e,t,n){var u,a;o(e);try{if(!(u=i(e,"return"))){if("throw"===t)throw n;return n}u=r(u,e)}catch(l){a=!0,u=l}if("throw"===t)throw n;if(a)throw u;return o(u),n}},7497:function(e){e.exports={}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},8559:function(e,t,n){var r=n(2109),o=n(408),i=n(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){i(t,e,n)}),{AS_ENTRIES:!0}),t}})},9151:function(e,t,n){"use strict";n.d(t,{Z:function(){return Me}});var r=n(1572),o=n(6026),i=n.n(o),u=n(1763),a=n.n(u),l=n(5558),c=n.n(l),f=n(7043),m=n.n(f),d=n(9693),s=n.n(d),p=n(7294),h=n(9261),g=n(5235),x=n(1554);var v=n(9550),y=n(7411),E=n(3815),b=n(8371),w=n(7643),Z=n(6434),S=n(8405),I=(n(51),n(7194)),D=n(3218),k=n.n(D),C=n(6968),A=n.n(C),M=n(8387),N=n(3305),R=n(2889),K=n(1775),T=I.default.table.withConfig({displayName:"DramDataTable__StyledTable",componentId:"sc-oncz76-0"})(["table-layout:fixed;width:100%;th,td{white-space:pre-wrap;padding:0.5rem;border:3px solid white;line-height:1.25;}"]),H=[],G=function(e){return String(e).replace(/\[([^[]+)\]/g,(function(){return"<sup>"+(arguments.length<=1?void 0:arguments[1])+"</sup>"}))},L={mp:"#A4CCDB",cs:"#4D9185",es:"#DC888A",sample:"#2F6EBA"},P=["#B1B1B2","#CACACA","#E8E8E8"],j=function e(t){var n=t.reduce((function(e,t){if(t.startsWith("-")){var n=e[e.length-1];n[1]=n[1]||[],n[1].push(t.substring(1))}else e.push([t]);return e}),[]);return p.createElement(E.Z,{as:"ul",pl:"1em"},n.map((function(t,n){return p.createElement("li",{key:n},p.createElement("span",{dangerouslySetInnerHTML:{__html:G(t[0])}}),t[1]&&e(t[1]))})))},O=function(e){var t=e.data,n=e.notes,r=e.bodyData,o=e.quater,u=e.year,l=e.type,c=e.headerRow,f=e.headerKeys,d=e.noteText,s=e.feature,h=e.name,g=e.scale,x=(0,p.useState)([]),v=x[0],y=x[1],w=(0,p.useMemo)((function(){return c.reduce((function(e,t,n){return!e&&a()(t.Header)&&(e=n),e}),0)}),[c]),Z=(0,p.useMemo)((function(){return"mcp"===h?["7rem","12rem","12rem","12rem"]:w>3?["6.9rem","6.9rem","10.4rem","13.8rem"]:["9rem","12.75rem","16.25rem"]}),[w]),S=(0,p.useRef)(),I=(0,p.useMemo)((function(){var e=n.map((function(e){return f.find((function(t){return t.Header===e}))}));return e.some((function(e){return!e}))?[]:t.map((function(t){return e.map((function(e){return e.columns.map((function(e,n){var r=(0,e.accessor)(t);return(0,N.Z)(r,n)}))}))}))}),[t,f,n]),D=function(e){return null==r?void 0:r.map((function(t){return t[e]})).reverse().reduce((function(e,t,n,r){var o=r.length;return t?H.length?(A()(e,[o-n-1],H.length+1),H=[]):A()(e,[o-n-1],1):H.push(n),e}),{})};return(0,p.useEffect)((function(){if(S.current){var e=S.current.getBoundingClientRect(),t=S.current.querySelectorAll(".timeline-cell[data-nm");if(t.length){var n=[];t.forEach((function(t){var r,o=t.dataset.nm,i=t.getBoundingClientRect(),u=(i.top+i.height/2-e.top)/g,a=n[n.length-1];o!==(null===(r=a)||void 0===r?void 0:r.nm)&&(a={nm:o,left:(i.right-e.left)/g},n.push(a)),a.top=Math.min(a.top||u,u),a.bottom=Math.max(a.bottom||u,u)})),y(n)}}}),[r]),p.createElement(E.Z,{position:"relative",pl:"3.75em",pr:"1em",width:"1920px",height:"1080px",ref:S},v.length>0&&p.createElement(E.Z.FullAbsolute,null,v.map((function(e,t){var n=e.nm,r=e.top,o=e.bottom,i=e.left;return p.createElement(b.Z,{key:n+t,position:"absolute",style:{top:r,height:o-r,left:i},border:"1px solid",borderLeft:"none",alignItems:"center"},p.createElement(E.Z,{style:{writingMode:"vertical-rl",textRrientation:"mixed"},transform:"translateX(120%)"},n))}))),p.createElement(R.Z,null,t[0][0]),p.createElement(b.Z,{pt:"7em"},p.createElement(T,{flex:1,style:{position:"relative",background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},p.createElement("thead",{style:{fontSize:"1.25rem"}},p.createElement("tr",null,c.map((function(e,t){var n=e.Header,r=e.columns;return p.createElement(E.Z,{as:"th",style:{borderRight:t==w-1&&"10px solid"},height:"44px",width:Z[t],color:"white",bg:a()(n)?"#C63B38":"#234B69",rowSpan:!r&&2,colSpan:(null==r?void 0:r.length)||1,key:t},n)}))),p.createElement("tr",null,c.map((function(e,t){var n=e.columns;return null==n?void 0:n.map((function(e,n){var r=e.Header;return p.createElement(E.Z,{as:"th",style:{borderRight:"mcp"==h&&3==t&&1==n&&"10px solid white"},height:"44px",bg:"#CACACA",width:"66px",key:n},r)}))})))),p.createElement("tbody",{style:{fontSize:"1.125rem",height:"23em"}},r.map((function(e,t){return p.createElement(E.Z,{as:"tr",key:t},e.map((function(e,r){return e&&(k()(e)?p.createElement(E.Z,{as:"td",colSpan:e.col,key:r,position:"relative",overflow:"visible",className:"timeline-cell","data-nm":e.nm||void 0,style:D(0)[t]?{borderBottom:"none",borderLeft:"10px solid white"}:{borderTop:"none",borderBottom:"none",borderLeft:"10px solid white"}},p.createElement(K.Z,{data:I[t],startYear:u,startQuarter:3===l?o:1,yearSpan:l,colors:n.map((function(e){return L[e.toLocaleLowerCase()]}))}),p.createElement(E.Z,{position:"relative",pl:"8em"},p.createElement("span",{dangerouslySetInnerHTML:{__html:G(e.text)}}),e.nrnd&&p.createElement(M.Z.Inline,{fontWeight:"bold",color:"#234b69",pl:"1em"},"*NRND"))):p.createElement(E.Z,{as:"td",fontWeight:!r&&"bold",bg:"mcp"===h?m()(P,i()(3).fill("#E8E8E8"))[r]:m()(i()(w-P.length).fill("#B1B1B2"),P)[r],rowSpan:D(r)[t],key:r},p.createElement(b.Z,{minHeight:"2.25rem",alignItems:"center",justifyContent:"mcp"===h?"center":r===w-1?"flex-start":"center",px:"mcp"===h?"0":"1em",dangerouslySetInnerHTML:{__html:G(e)}})))})))})))),p.createElement(b.Z,{flexDirection:"column",ml:"4em",width:"22.375em"},p.createElement(E.Z,{border:"1.5px solid transparent",bg:"transparent",p:"0.5rem"},"　"),p.createElement(b.Z,{mb:"1em"},n.map((function(e,t){return p.createElement(E.Z,{fontSize:"1.25rem",width:"100%",fontWeight:"bold",textAlign:"center",bg:L[e.toLocaleLowerCase()],color:"white",p:"0.375rem 0.5rem",key:t},e)}))),!c.some((function(e){return"Description"===e.Header}))&&p.createElement(p.Fragment,null,p.createElement(E.Z,{bg:"#9FA0A0",fontSize:"1.125rem",textAlign:"center",color:"white",p:"0.5rem",fontWeight:"bold"},"FEATURE"),p.createElement(E.Z,{p:"0.5rem",style:{background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},s[0]&&j(s))),p.createElement(E.Z,{bg:"#9FA0A0",fontSize:"1.125rem",textAlign:"center",color:"white",p:"0.5rem",fontWeight:"bold"},"NOTE"),p.createElement(E.Z,{flex:1,p:"0.5rem",style:{background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},d[0]&&j(d)))))},_=(n(8559),n(7739)),W=n.n(_),z=n(2492),B=n.n(z),F=n(2694),q=n(7546),U=n(1531),Q=n(928),V=n.n(Q),Y={mb:1,gb:1e3},X=function(e){var t=e.replace(/\D/g,""),n=e.replace(/[0-9\s]/g,"");return t*Y[n.toLowerCase()]},$=function(e){return e.sort((function(e,t){return X(t)-X(e)}))},J=n(8926),ee=n(251),te=["children"],ne=function(e,t,n){return Object.keys(W()(e,n)).reduce((function(e,n){var r=(null==t?void 0:t[n])||1;return e[r-1]=e[r-1]||[],e[r-1].push(n),e}),[])},re=function(e,t){if(1===e.length)return e[0];var n=e.map((function(e){return e.replace(/[0-9.]/g,"")})).reduce((function(e,t){if(!e)return t;for(var n=0;!t.substring(0,t.length-n).includes(e)&&n<t.length;)n+=1;return e.substring(0,e.length-n)}));return[e[0],V()(e)].map((function(e){return e.replace(n,"")})).join(t)+" "+n},oe=function(e){var t=e.children,n=(0,U.Z)(e,te);return p.createElement(b.Z,Object.assign({border:"1px solid #efefef",px:"4px",py:"2px",alignItems:"center"},n),p.createElement(M.Z.Mono,null,t))},ie=function(e){var t=e.groupData,n=e.mainKey,r=e.timeKey,o=e.colGroupItem,i=e.colGroupKey,u=e.rowGroupKey,a=e.timeColor,l=e.item,c=(0,p.useMemo)((function(){return t.filter((function(e){return o.includes(e[i])&&e[u]===l}))}),[o,i,t,l,u]),f=l.replace(/\D/g,""),m=l.replace(/[0-9\s]/g,"");return c.length>0&&p.createElement(b.Z,{my:"0.5em"},p.createElement(b.Z,{width:"74px",justifyContent:"center",alignItems:"center",bg:"#234b69",color:"white",border:"1px solid #efefef"},p.createElement(E.Z,{textAlign:"center",fontSize:"16px",lineHeight:"1.25",fontWeight:"900",whiteSpace:"nowrap"},f,p.createElement("br",null),m)),p.createElement(b.Z,{flex:"1",flexDirection:"column"},c.map((function(e,t){return p.createElement(b.Z,{key:t,fontSize:"16px",flex:"1"},p.createElement(oe,{flex:"1",bg:"white",fontWeight:"500",lineHeight:"2"},e[n]),e[r]&&p.createElement(oe,{fontWeight:"900",bg:a,color:"white"},e[r]))}))))},ue=(0,I.default)(E.Z).withConfig({displayName:"PortfolioTableRender__GradientGroup",componentId:"sc-1npw6bb-0"})(["position:relative;background:linear-gradient(0deg,rgba(227,227,227,0.85),rgba(238,238,238,0.3));",""],(function(e){return e["data-name"]&&'\n    &::before {\n      content: "";\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 4px;\n      bottom: 0;\n      border-left: 1px solid black;\n    }\n    &::after {\n      content: attr(data-name);\n      font-size: 15px;\n      display: block;\n      position: absolute;\n      left: -24px;\n      top: 50%;\n      writing-mode: vertical-lr;\n      text-orientation: mixed;\n      transform: rotate(180deg) translateY(50%);\n      font-weight: 500;\n      white-space: nowrap;\n    }\n  '})),ae=function(e){var t=e.data,n=e.colGroup,o=e.colGroupKey,i=e.rowGroup,u=e.rowGroupKey,a=e.mainKey,l=e.timeKey,c=e.timeColor,f=e.name,m=(0,p.useRef)();return p.createElement(J.Z,{ref:m,name:f+"-portfolio"},p.createElement(b.Z,{pl:"92px",pr:"76px",pt:"146px",height:"1048px",justifyContent:"center"},p.createElement(b.Z,{flexDirection:"column",alignItems:"flex-end"},p.createElement(b.Z.HStack,{spacing:"34px",flex:"1"},t.map((function(e,t){var f=e[0],m=e[1],d=ne(m,n[f],o),s=ne(m,i[f],u);return p.createElement(b.Z,{key:t,flexDirection:"column"},p.createElement(E.Z,{fontSize:"25px",bg:"#c63b38",color:"white",textAlign:"center",py:"6px",border:"2px solid white",fontWeight:"900"},f),p.createElement(b.Z.HStack,{flex:"1"},d.map((function(e,t){return p.createElement(b.Z,{key:t,width:"275px",flexDirection:"column"},p.createElement(E.Z,{bg:"#cacaca",textAlign:"center",fontSize:"23px",py:"7px",border:"2px solid white",fontWeight:"bold"},re(e,"/")),s.map((function(n,i){var f=$(n);return p.createElement(ue,{key:i,px:"0.5em",border:"2px solid white",className:"same-height","data-id":i+1+"/"+s.length,"data-name":0===t&&re((0,r.Z)(f).reverse()," - "),flex:"1"},f.map((function(t,n){return p.createElement(ie,{key:n,groupData:m,colGroupItem:e,colGroupKey:o,rowGroupKey:u,item:t,mainKey:a,timeKey:l,timeColor:c})})))})))}))))}))),p.createElement(b.Z.HStack,{mt:"10px",justifyContent:"flex-end",alignItems:"center",spacing:"16px"},p.createElement(ee.Z,{bg:c},V()(l.split("."))),p.createElement(ee.Z,{bg:"#9fa0a0"},"NOTE"),p.createElement(M.Z,null,"Roapmaps are subject to change.")))))},le=n(1700),ce=n.n(le),fe=I.default.table.withConfig({displayName:"CompactPortfolio__StyledTable",componentId:"sc-htf0zq-0"})(["th,td{border:3px solid white;}background:linear-gradient(0deg,rgba(227,227,227,0.85),rgba(238,238,238,0.3));"]),me=/(\d+(.\d+)?)/,de=function(e,t){var n,r;return(null===(n=me.exec(t))||void 0===n?void 0:n[1])-(null===(r=me.exec(e))||void 0===r?void 0:r[1])},se=function(e){var t=e.name,n=e.colGroupKey,r=e.rowGroupKey,o=e.mainKey,i=e.timeKey,u=e.timeColor,a=e.data,l=(0,p.useMemo)((function(){var e=a.reduce((function(e,t){return e.concat(t[1])}),[]),t=W()(e,r);return $(Object.keys(t))}),[a,r]),c=(0,p.useMemo)((function(){return a.map((function(e){var t=e[1],r=W()(t,n);return Object.entries(r).sort(de)}))}),[a,n]);return p.createElement(J.Z,{name:t+"-portfolio-table"},p.createElement(E.Z,null,p.createElement(R.Z,null,ce()(t)+" Memery Portfolio"),p.createElement(E.Z,{position:"absolute",left:"86px",top:"125px",right:"86px"},p.createElement(fe,null,p.createElement("thead",null,p.createElement("tr",null,[["Product",1]].concat(a.map((function(e,t){return[e[0],c[t].length]}))).map((function(e,t){var n=e[0],r=e[1];return p.createElement(E.Z,{as:"th",key:t,bg:"#c63b38",fontSize:"25px",fontWeight:"900",color:"white",colSpan:r,px:"1em",py:"0.5em",whiteSpace:"nowrap",style:{borderLeftWidth:t>0&&"10px"}},n)}))),p.createElement("tr",null,p.createElement(E.Z,{fontWeight:"900",fontSize:"15px",as:"th",color:"white",bg:"#848484",py:"0.25rem"},"Voltage/",p.createElement("br",null),"Density"),a.map,c.reduce((function(e,t,n){return e.concat(t.map((function(e,t){var r=e[0];return p.createElement(E.Z,{as:"th",key:n+r,fontWeight:"700",fontSize:"23px",bg:"#cacaca",width:"197px",style:{borderLeftWidth:0===t&&"10px"}},r)})))}),[]))),p.createElement("tbody",null,l.map((function(e){var t=/^(\d+)(\D+)$/.exec(e);return p.createElement("tr",{key:e},p.createElement(E.Z,{as:"td",bg:"#cacaca",fontSize:"19px",fontWeight:"bold",textAlign:"center",height:"58px"},t?t[1]+" "+t[2]:e),c.reduce((function(t,n,a){return t.concat(n.map((function(t,n){var l=t[1];return p.createElement(E.Z,{as:"td",key:""+a+n,fontWeight:"500",fontSize:"19px",height:"58px",width:"197px",style:{borderLeftWidth:0===n&&"10px"},px:"0.5em"},l.filter((function(t){return t[r]===e})).map((function(e,t){return p.createElement(E.Z,{key:t,fontFamily:"'Noto Sans Mono', monospace",lineHeight:"1.25",whiteSpace:"nowrap"},e[o],e[i]&&p.createElement(E.Z,{verticalAlign:"middle",display:"inline-block",px:"0.25em",fontSize:"15px",fontWeight:"900",color:"white",bg:u,ml:"0.5em"},e[i]))})))})))}),[]))})))),p.createElement(b.Z.HStack,{mt:"16px",justifyContent:"flex-end",alignItems:"center",spacing:"16px"},p.createElement(ee.Z,{bg:u},V()(i.split("."))),p.createElement(ee.Z,{bg:"#9fa0a0"},"NOTE"),p.createElement(M.Z,null,"Roapmaps are subject to change.")))))},pe=function(e){return e.substring(1).replace(/\[[^\]]+\]/g,"")},he="Product",ge="Product Line",xe="Density",ve={dram:"Technology Node (nm)",flash:"Voltage"},ye={dram:"Portfolio.MP",flash:"Portfolio.Sample"},Ee={dram:"#a4ccdb",flash:"#2f6eba"},be=I.default.table.withConfig({displayName:"PortfolioPage__StyledTable",componentId:"sc-1h13ara-0"})(["width:100%;th{border-bottom:1px solid #ccc;}td,th{padding:0.25em;}td:first-of-type{width:5em;}input{max-width:3em;}"]),we=function(e,t){return e.toLowerCase()===t.toLowerCase()},Ze=function(e){var t=e.label,n=e.onSetGroup,r=e.groups,o=e.items;return p.createElement(be,null,p.createElement("thead",null,p.createElement("tr",null,p.createElement("th",null),p.createElement("th",null,t))),p.createElement("tbody",null,o.map((function(e,t){return p.createElement("tr",{key:t,p:"0.5em"},p.createElement("td",null,e),p.createElement("td",null,p.createElement(q.Z,{type:"number",min:"0",value:(null==r?void 0:r[e])||"1",onChange:function(t){var r;return n(((r={})[e]=t.target.value,r))}})))}))))},Se=function(e){var t=e.data,n=e.groupName,r=e.name,o=e.colGroup,i=e.onSetColGroup,u=e.rowGroup,a=e.onSetRowGroup,l=(0,p.useMemo)((function(){return Object.keys(W()(t,ve[r]))}),[t,r]),c=(0,p.useMemo)((function(){return $(Object.keys(W()(t,xe)))}),[t]);return p.createElement(E.Z,{border:"1px solid",p:"0.5em"},p.createElement(E.Z,{textAlign:"center"},n),p.createElement("hr",null),p.createElement(Ze,{label:"Col",onSetGroup:i,groups:o,items:l}),p.createElement(E.Z,{height:"1em"}),p.createElement(Ze,{label:"Row",onSetGroup:a,groups:u,items:c}))},Ie=function(e){var t=e.data,n=e.name,o=e.variant,i=e.headerKeys,u=e.filterKey,a=(0,p.useCallback)((function(e){return e.split(".").reduce((function(e,t){var n=e.find((function(e){var n=e.Header;return we(n,t)}));return null!=n&&n.columns?null==n?void 0:n.columns:n}),i)}),[i]),l=(0,p.useMemo)((function(){var e=a(u),o=[ge,xe,ve[n],ye[n]],i=o.map(a),l=t[0].findIndex((function(e){return we(e,he)}));return t.slice(2).filter((function(t){return!e||"TRUE"===e.accessor(t)})).reduce((function(e,t,u){return e.concat(t[l].split("\n").map((function(a){return Object.fromEntries([[he,pe(a)]].concat((0,r.Z)(o.map((function(r,o){var a,l,c,f=null===(a=i[o])||void 0===a||null===(l=a.accessor)||void 0===l?void 0:l.call(null,t);""===f&&r!==ge&&r!==ye[n]&&(f=null===(c=e[u-1])||void 0===c?void 0:c[r]);return[r,f]})))))})))}),[]).filter((function(e){return e[ge]}))}),[t,n,u,a]),c=(0,p.useMemo)((function(){return W()(l,ge)}),[l]),f=(0,p.useMemo)((function(){return Object.keys(c).map((function(e){return e.trim()}))}),[c]),m=(0,F.x)({}),d=m[0],s=m[1],h=(0,p.useMemo)((function(){return Object.keys(d).filter((function(e){return d[e]}))}),[d]),g=(0,F.x)({}),x=g[0],v=g[1],y=(0,F.x)({}),w=y[0],Z=y[1];return p.createElement(p.Fragment,null,p.createElement("hr",null),p.createElement(M.Z,null,"Product Lines:"),p.createElement(E.Z,{mx:"-0.5em"},f.map((function(e){return e&&p.createElement(E.Z,{as:"label",display:"inline-block",m:"0.5em"},p.createElement("input",{type:"checkbox",name:"group",checked:d[e],onChange:function(t){return s((function(n){n[e]=t.target.checked}))}}),p.createElement(M.Z,{as:"sapn",ml:"0.25rem"},e))})),h.length>0&&("compact"===o?p.createElement(se,{data:h.map((function(e){return[e,c[e]]})),colGroupKey:ve[n],rowGroupKey:xe,mainKey:he,timeKey:ye[n],timeColor:Ee[n],name:n}):p.createElement(p.Fragment,null,p.createElement(M.Z,{my:"1em"},"利用下方Col跟Row可以做排版調整，同樣數字代表同一組，數字0代表隱藏"),p.createElement(b.Z.HStack,{my:"1em",sapcing:"1em"},h.map((function(e){return p.createElement(Se,{key:e,data:c[e],groupName:e,name:n,colGroup:x[e],onSetColGroup:function(t){return v((function(n){var r;n=B()(n,((r={})[e]=t,r))}))},rowGroup:w[e],onSetRowGroup:function(t){return Z((function(n){var r;n=B()(n,((r={})[e]=t,r))}))}})}))),p.createElement(E.Z,{mt:"1em"},p.createElement(ae,{data:h.map((function(e){return[e,c[e]]})),colGroup:x,rowGroup:w,colGroupKey:ve[n],rowGroupKey:xe,mainKey:he,timeKey:ye[n],timeColor:Ee[n],name:n}))))))},De=n(3452),ke=n(2601),Ce=function(e){var t=e.headerKeys,n=e.pages,r=e.headerRow,o=e.doubleHeader,i=e.bodyData,u=e.quater,a=e.year,l=e.type,c=e.half,f=e.noteText,m=e.notes,d=e.name,s=e.onDownloaded,h=(0,p.useState)(0),g=h[0],x=h[1],v=(0,p.useRef)();return(0,p.useEffect)((function(){v.current&&v.current().then((function(){g===n.length-1?s():x(g+1)}))}),[g]),p.createElement(E.Z,{overflow:"hidden",width:"0",height:"0"},p.createElement(E.Z,{width:"1920px"},p.createElement(J.Z,{key:g,name:d+"-"+l+"y-"+(g+1),downloadRef:v},p.createElement(O,{headerKeys:t,data:n[g],headerRow:r,doubleHeader:o,bodyData:i,quater:u,year:a,type:l,half:c,noteText:f,notes:m}))))},Ae=function(e){var t=e.selectedSheet,n=e.data,o=e.compareSheetData,u=e.name,l=(0,p.useMemo)((function(){return[{title:"3年",value:3},{title:"7年",value:7}].concat("flash"===u?[{title:"總表",value:"portfolio"},{title:"大總表",value:"compact"}]:[{title:"3年總表",value:"portfolio"},{title:"7年總表",value:"portfolio-7"}])}),[u]),f=(0,p.useMemo)((function(){return"flash"===u||"mcp"===u?["Sample","MP"]:["ES","CS","MP"]}),[u]),d=(0,p.useState)(3),v=d[0],y=d[1],w=(0,p.useState)(),I=w[0],D=w[1],k=(0,p.useState)(0),C=k[0],A=k[1],M=function(e){return(0,x.Z)(1,arguments),(0,g.Z)(e).getFullYear()}(new Date),N=function(e){(0,x.Z)(1,arguments);var t=(0,g.Z)(e);return Math.floor(t.getMonth()/3)+1}(new Date),R=(0,p.useMemo)((function(){if(!n)return null;if(!n[0][0])return n.slice(1);var e=n[0].findIndex((function(e){return"7yrs"===e})),t=n[1].findIndex((function(e){return"portfolio"===v?"3yrs"===e:"7yrs"===e}));return 7==v?n.filter((function(t){return"FALSE"!=t[e]})):"portfolio"==v||"portfolio-7"==v?n.filter((function(e){return"FALSE"!=e[t]})):n}),[n,v]),K=(0,p.useMemo)((function(){return R&&R[0].some((function(e){return!e}))}),[R]),T=(0,p.useMemo)((function(){return R?R.slice(K?2:1):[]}),[R,K]),H=(0,p.useMemo)((function(){return T.reduce((function(e,t){var n,r=e.length-1;return t[0]&&(r=e.push([])-1),null===(n=e[r])||void 0===n||n.push(t),e}),[])}),[T]),G=(0,p.useMemo)((function(){return i()(v*(v<7?4:2)).map((function(e){return e?((v<7?N:1)+e)%(v<7?4:2)==1?M+c()(((v<7?N:1)+e)/(v<7?4:2)):"":M}))}),[v,N]),L=(0,p.useMemo)((function(){var e,t,n,o,i;return R&&a()(v)&&"mcp"===u?[R[0][R[0].findIndex((function(e){return/Package Ball/i.test(e)}))],R[0][R[0].findIndex((function(e){return/Product/i.test(e)}))],R[0][R[0].findIndex((function(e){return/SLC NAND/i.test(e)}))],"",R[0][R[0].findIndex((function(e){return/LPDDR2/i.test(e)}))],""].concat((0,r.Z)(G)):m()("flash"===u?s()([(null==H||null===(e=H[C])||void 0===e?void 0:e[0][R[0].findIndex((function(e){return/flash/i.test(e)}))])&&R[0][R[0].findIndex((function(e){return/flash/i.test(e)}))],(null==H||null===(t=H[C])||void 0===t?void 0:t[0][R[0].findIndex((function(e){return/S-NOR Density/i.test(e)}))])&&R[0][R[0].findIndex((function(e){return/S-NOR Density/i.test(e)}))],(null==H||null===(n=H[C])||void 0===n?void 0:n[0][R[0].findIndex((function(e){return/S-NAND Density/i.test(e)}))])&&R[0][R[0].findIndex((function(e){return/S-NAND Density/i.test(e)}))],(null==H||null===(o=H[C])||void 0===o?void 0:o[0][R[0].findIndex((function(e){return/^Density/i.test(e)}))])&&R[0][R[0].findIndex((function(e){return/^Density/i.test(e)}))]]):[null==R?void 0:R[0][R[0].findIndex((function(e){return/^Density/i.test(e)}))]],[null==R?void 0:R[0][R[0].findIndex((function(e){return/product/i.test(e)}))],"flash"===u?null!=H&&null!==(i=H[C])&&void 0!==i&&i[0][null==R?void 0:R[0].findIndex((function(e){return/Description/i.test(e)}))]?"Description":"":"Description"].concat((0,r.Z)(G)))}),[R,v,M,N,C,H,u]),P=(0,ke.Z)(R),j=(0,p.useMemo)((function(){if(!R||"number"!=typeof v)return[];if(K){var e=[];return L.slice(0).reverse().reduce((function(t,n,r){if(n){if(a()(n)&&!e.length)return t.push({Header:n,columns:[{Header:v<7?r?"Q4":"Q1":r?"H2":"H1",id:n+"-1"}]}),t;e.length?(a()(n)&&(e.push(r),t.push({Header:n,columns:e.slice().reverse().map((function(e,t,r){var o=r.length;return{Header:v<7?"Q"+(4-o+t+1):"H"+(t+1),id:n+"-"+(t+1)}}))})),a()(n)||"mcp"!==u||(e.push(r),t.push({Header:n,columns:e.map((function(e,t){return{Header:t?"I/O":"Density",id:n+"-"+(t+1)}}))})),e=[]):t.push({Header:n,id:r})}else e.push(r);return t}),[]).reverse()}}),[R,K,v,L,u]),_=(0,p.useMemo)((function(){var e,t,n;if(!R)return[];var r=R[0].findIndex((function(e){return"note"===e.toLocaleLowerCase()}));return r<0?[]:H&&((null==H||null===(e=H[C])||void 0===e||null===(t=e[0])||void 0===t||null===(n=t[r])||void 0===n?void 0:n.split("\n"))||"")}),[R,H,C]),W=(0,p.useMemo)((function(){var e,t,n;if(!R)return[];var r=R[0].findIndex((function(e){return"feature"===e.toLocaleLowerCase()}));return r<0?[]:H&&((null==H||null===(e=H[C])||void 0===e||null===(t=e[0])||void 0===t||null===(n=t[r])||void 0===n?void 0:n.split("\n"))||"")}),[R,H,C]),z=(0,p.useMemo)((function(){var e;return R&&(null===(e=H[C])||void 0===e?void 0:e.reduce((function(e,t){return"mcp"==u?(e.push([t[R[0].findIndex((function(e){return/Package Ball/i.test(e)}))],t[R[0].findIndex((function(e){return/Product/i.test(e)}))],t[R[0].findIndex((function(e){return/SLC NAND/i.test(e)}))],t[R[0].findIndex((function(e){return/SLC NAND/i.test(e)}))+1],t[R[0].findIndex((function(e){return/LPDDR2/i.test(e)}))],t[R[0].findIndex((function(e){return/LPDDR2/i.test(e)}))+1],{text:"",col:v>3?14:12}]),e):(e.push(m()("flash"===u?m()(null!=H&&H[C][0][R[0].findIndex((function(e){return/flash/i.test(e)}))]?[t[R[0].findIndex((function(e){return/flash/i.test(e)}))]]:[],null!=H&&H[C][0][R[0].findIndex((function(e){return/S-NOR Density/i.test(e)}))]?[t[R[0].findIndex((function(e){return/S-NOR Density/i.test(e)}))]]:[],null!=H&&H[C][0][R[0].findIndex((function(e){return/S-NAND Density/i.test(e)}))]?[t[R[0].findIndex((function(e){return/S-NAND Density/i.test(e)}))]]:[],null!=H&&H[C][0][R[0].findIndex((function(e){return/^Density/i.test(e)}))]?t[R[0].findIndex((function(e){return/^Density/i.test(e)}))]:[]):[t[R[0].findIndex((function(e){return/^Density/i.test(e)}))]],[t[R[0].findIndex((function(e){return/Product/i.test(e)}))],"flash"!==u?t[R[0].findIndex((function(e){return/I\/O Width/i.test(e)}))]+" "+t[R[0].findIndex((function(e){return/Voltage/i.test(e)}))]+"\n"+t[R[0].findIndex((function(e){return/Speed/i.test(e)}))]:t[R[0].findIndex((function(e){return/Description/i.test(e)}))],{text:"flash"!==u?[R[0].findIndex((function(e){return/Technology Node/i.test(e)})),R[0].findIndex((function(e){return/Components/i.test(e)})),R[0].findIndex((function(e){return/Package/i.test(e)}))].map((function(e){return t[e]})).join(", "):"",col:v>3?14:12,nrnd:"TRUE"===t[R[0].findIndex((function(e){return/NRND/i.test(e)}))],nm:"flash"===u&&t[R[0].findIndex((function(e){return/Technology/i.test(e)}))]}])),e)}),[]))}),[H,C,v,R]),B=(0,p.useMemo)((function(){return o?o.slice(K?2:1):[]}),[o,K]);return console.log(z,L),p.createElement(h.mQ,{style:{marginTop:"2em"}},p.createElement(h.td,null,p.createElement(h.OK,null,"簡報產生器"),p.createElement(h.OK,{disabled:!B.length},"更新對照表")),p.createElement(h.x4,null,p.createElement(b.Z,{my:"1em",alignItems:"center"},t&&l.map((function(e,t){return p.createElement(Z.Z.Outline,{active:v===e.value,mx:"0.25em",onClick:function(){return y(e.value)},key:t},e.title)}))),"number"==typeof v&&H&&H[C]&&p.createElement(p.Fragment,null,p.createElement(S.Z,{pageCount:H.length,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:function(e){var t=e.selected;return A(t)}}),p.createElement(J.Z,{name:u+"-"+v+"y-"+(C+1)},p.createElement(O,{headerKeys:P,data:H[C],headerRow:j,doubleHeader:K,bodyData:z,quater:N,year:M,type:v,noteText:_,feature:W,notes:f,name:u})),p.createElement(E.Z,null,p.createElement(Z.Z,{onClick:function(){return D(!0)},disabled:I},"批次下載",I?"中...":" ("+H.length+"頁)"),I&&p.createElement(Ce,{headerKeys:P,pages:H,headerRow:j,doubleHeader:K,bodyData:z,quater:N,year:M,type:v,half:half,noteText:_,notes:f,name:u,onDownloaded:function(){return D(!1)}}))),/^portfolio/.test(v)&&R&&p.createElement(Ie,{data:R,name:u,headerKeys:P,filterKey:"Portfolio."+("flash"===u?"Sub":"portfolio-7"===v?"7yrs":"3yrs")}),"compact"===v&&R&&p.createElement(Ie,{data:R,name:u,headerKeys:P,filterKey:"Portfolio.All",variant:"compact"})))},Me=function(e){var t=e.name,n=void 0===t?"dram":t;return p.createElement(y.Z,null,p.createElement(w.Z,{as:v.rU,to:"/"},"< Home"),p.createElement(De.Z,{name:n},p.createElement(Ae,null)))}},4286:function(e){e.exports=function(e){return e.split("")}},1078:function(e,t,n){var r=n(2488),o=n(7285);e.exports=function e(t,n,i,u,a){var l=-1,c=t.length;for(i||(i=o),a||(a=[]);++l<c;){var f=t[l];n>0&&i(f)?n>1?e(f,n-1,i,u,a):r(a,f):u||(a[a.length]=f)}return a}},2491:function(e,t,n){var r=n(4865),o=n(1811),i=n(5776),u=n(3218),a=n(327);e.exports=function(e,t,n,l){if(!u(e))return e;for(var c=-1,f=(t=o(t,e)).length,m=f-1,d=e;null!=d&&++c<f;){var s=a(t[c]),p=n;if("__proto__"===s||"constructor"===s||"prototype"===s)return e;if(c!=m){var h=d[s];void 0===(p=l?l(h,s,d):void 0)&&(p=u(h)?h:i(t[c+1])?[]:{})}r(d,s,p),d=d[s]}return e}},4259:function(e){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}},180:function(e,t,n){var r=n(4259);e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},8805:function(e,t,n){var r=n(180),o=n(2689),i=n(3140),u=n(9833);e.exports=function(e){return function(t){t=u(t);var n=o(t)?i(t):void 0,a=n?n[0]:t.charAt(0),l=n?r(n,1).join(""):t.slice(1);return a[e]()+l}}},9179:function(e,t,n){var r=n(5639),o=n(554),i=n(4841),u=n(9833),a=r.isFinite,l=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=i(e),(n=null==n?0:l(o(n),292))&&a(e)){var r=(u(e)+"e").split("e"),c=t(r[0]+"e"+(+r[1]+n));return+((r=(u(c)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},7285:function(e,t,n){var r=n(2705),o=n(5694),i=n(1469),u=r?r.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||o(e)||!!(u&&e&&e[u])}},3140:function(e,t,n){var r=n(4286),o=n(2689),i=n(676);e.exports=function(e){return o(e)?i(e):r(e)}},676:function(e){var t="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",a="(?:"+n+"|"+r+")"+"?",l="[\\ufe0e\\ufe0f]?",c=l+a+("(?:\\u200d(?:"+[o,i,u].join("|")+")"+l+a+")*"),f="(?:"+[o+n+"?",n,i,u,t].join("|")+")",m=RegExp(r+"(?="+r+")|"+f+c,"g");e.exports=function(e){return e.match(m)||[]}},9693:function(e){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o}},7043:function(e,t,n){var r=n(2488),o=n(1078),i=n(278),u=n(1469);e.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),n=arguments[0],a=e;a--;)t[a-1]=arguments[a];return r(u(n)?i(n):[n],o(t,1))}},5558:function(e,t,n){var r=n(9179)("floor");e.exports=r},1763:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"number"==typeof e||o(e)&&"[object Number]"==r(e)}},6968:function(e,t,n){var r=n(2491);e.exports=function(e,t,n){return null==e?e:r(e,t,n)}},1700:function(e,t,n){var r=n(8805)("toUpperCase");e.exports=r}}]);
//# sourceMappingURL=ec58a79b1f25d0d9823ba1c77511002fa4113f93-e1ce84df8284d6fc2cba.js.map