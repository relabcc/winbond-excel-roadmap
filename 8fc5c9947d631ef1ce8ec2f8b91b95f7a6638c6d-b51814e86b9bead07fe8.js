(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[862],{648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),u=n(5112)("toStringTag"),a=Object,l="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=a(e),u))?n:l?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},6135:function(e,t,n){"use strict";var r=n(4948),o=n(3070),i=n(9114);e.exports=function(e,t,n){var u=r(t);u in e?o.f(e,u,i(0,n)):e[u]=n}},9974:function(e,t,n){var r=n(1702),o=n(9662),i=n(4374),u=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?u(e,t):function(){return e.apply(t,arguments)}}},1246:function(e,t,n){var r=n(648),o=n(8173),i=n(7497),u=n(5112)("iterator");e.exports=function(e){if(null!=e)return o(e,u)||o(e,"@@iterator")||i[r(e)]}},8554:function(e,t,n){var r=n(6916),o=n(9662),i=n(9670),u=n(6330),a=n(1246),l=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(o(n))return i(r(n,e));throw l(u(e)+" is not iterable")}},7659:function(e,t,n){var r=n(5112),o=n(7497),i=r("iterator"),u=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||u[i]===e)}},408:function(e,t,n){var r=n(9974),o=n(6916),i=n(9670),u=n(6330),a=n(7659),l=n(6244),c=n(7976),f=n(8554),m=n(1246),s=n(9212),d=TypeError,p=function(e,t){this.stopped=e,this.result=t},h=p.prototype;e.exports=function(e,t,n){var g,x,v,y,E,b,w,Z=n&&n.that,S=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),D=!(!n||!n.INTERRUPTED),k=r(t,Z),C=function(e){return g&&s(g,"normal",e),new p(!0,e)},A=function(e){return S?(i(e),D?k(e[0],e[1],C):k(e[0],e[1])):D?k(e,C):k(e)};if(I)g=e;else{if(!(x=m(e)))throw d(u(e)+" is not iterable");if(a(x)){for(v=0,y=l(e);y>v;v++)if((E=A(e[v]))&&c(h,E))return E;return new p(!1)}g=f(e,x)}for(b=g.next;!(w=o(b,g)).done;){try{E=A(w.value)}catch(M){s(g,"throw",M)}if("object"==typeof E&&E&&c(h,E))return E}return new p(!1)}},9212:function(e,t,n){var r=n(6916),o=n(9670),i=n(8173);e.exports=function(e,t,n){var u,a;o(e);try{if(!(u=i(e,"return"))){if("throw"===t)throw n;return n}u=r(u,e)}catch(l){a=!0,u=l}if("throw"===t)throw n;if(a)throw u;return o(u),n}},7497:function(e){e.exports={}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},8559:function(e,t,n){var r=n(2109),o=n(408),i=n(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){i(t,e,n)}),{AS_ENTRIES:!0}),t}})},4910:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ke}});n(1469);var r=n(7294),o=n(9261),i=n(5235),u=n(1554);var a=n(5714),l=n(9550),c=n(7411),f=n(3815),m=n(8371),s=n(1318),d=n(6434),p=n(8405),h=(n(51),n(1572)),g=n(6026),x=n.n(g),v=n(5558),y=n.n(v),E=n(7043),b=n.n(E),w=n(9693),Z=n.n(w),S=n(7194),I=n(3218),D=n.n(I),k=n(6968),C=n.n(k),A=n(1763),M=n.n(A),N=n(8387),K=n(3305),H=n(2889),R=n(1775),G=S.default.table.withConfig({displayName:"DramDataTable__StyledTable",componentId:"sc-oncz76-0"})(["table-layout:fixed;width:100%;th,td{white-space:pre;padding:0.5rem;border:3px solid white;line-height:1.25;}"]),L=[],P=function(e){return String(e).replace(/\[([^[]+)\]/g,(function(){return"<sup>"+(arguments.length<=1?void 0:arguments[1])+"</sup>"}))},T={mp:"#A4CCDB",cs:"#4D9185",es:"#DC888A",sample:"#2F6EBA"},j=function e(t){var n=t.reduce((function(e,t){if(t.startsWith("-")){var n=e[e.length-1];n||(e.push([""]),n=e[e.length-1]),n[1]=n[1]||[],n[1].push(t.substring(1))}else e.push([t]);return e}),[]);return r.createElement(f.Z,{as:"ul",pl:"1em"},n.map((function(t,n){return r.createElement("li",{key:n},r.createElement("span",{dangerouslySetInnerHTML:{__html:P(t[0])}}),t[1]&&e(t[1]))})))},O=function(e){var t=e.allData,n=e.data,o=e.notes,i=e.quater,u=e.year,a=e.type,l=e.headerKeys,c=e.name,s=e.scale,d=e.doubleHeader,p=(0,r.useState)([]),g=p[0],v=p[1],E=(0,r.useRef)(),w=(0,r.useMemo)((function(){var e=o.map((function(e){return l.find((function(t){return t.Header===e}))}));return e.some((function(e){return!e}))?[]:n.map((function(t){return e.map((function(e){return e.columns.map((function(e,n){var r=(0,e.accessor)(t);return(0,K.Z)(r,n)}))}))}))}),[n,l,o]),S=(0,r.useMemo)((function(){return x()(a*(a<7?4:2)).map((function(e){return e?((a<7?i:1)+e)%(a<7?4:2)==1?u+y()(((a<7?i:1)+e)/(a<7?4:2)):"":u}))}),[a,i,u]),I=(0,r.useMemo)((function(){return t&&M()(a)&&"mcp"===c?[t[0][t[0].findIndex((function(e){return/Package\s|\nBall/i.test(e)}))],t[0][t[0].findIndex((function(e){return/Product/i.test(e)}))],t[0][t[0].findIndex((function(e){return/SLC\s|\nNAND/i.test(e)}))],"",t[0][t[0].findIndex((function(e){return/LPDDR2/i.test(e)}))],""].concat((0,h.Z)(S)):b()("flash"===c?Z()([(null==n?void 0:n[0][t[0].findIndex((function(e){return/flash/i.test(e)}))])&&t[0][t[0].findIndex((function(e){return/flash/i.test(e)}))],(null==n?void 0:n[0][t[0].findIndex((function(e){return/S-NOR/i.test(e)}))])&&t[0][t[0].findIndex((function(e){return/S-NOR/i.test(e)}))],(null==n?void 0:n[0][t[0].findIndex((function(e){return/S-NAND/i.test(e)}))])&&t[0][t[0].findIndex((function(e){return/S-NAND/i.test(e)}))],(null==n?void 0:n[0][t[0].findIndex((function(e){return/^Density/i.test(e)}))])&&t[0][t[0].findIndex((function(e){return/^Density/i.test(e)}))]]):[null==t?void 0:t[0][t[0].findIndex((function(e){return/^Density/i.test(e)}))]],[null==t?void 0:t[0][t[0].findIndex((function(e){return/product/i.test(e)}))]],"flash"===c?null!=n&&n[0][null==t?void 0:t[0].findIndex((function(e){return/Description/i.test(e)}))]?"Description":[]:"Description",(0,h.Z)(S))}),[t,a,n,c,S]),k=(0,r.useMemo)((function(){if(d){var e=[];return I.slice(0).reverse().reduce((function(t,n,r){if(n){if(M()(n)&&!e.length)return t.push({Header:n,columns:[{Header:a<7?r?"Q4":"Q1":r?"H2":"H1",id:n+"-1"}]}),t;e.length?(M()(n)&&(e.push(r),t.push({Header:n,columns:e.slice().reverse().map((function(e,t,r){var o=r.length;return{Header:a<7?"Q"+(4-o+t+1):"H"+(t+1),id:n+"-"+(t+1)}}))})),M()(n)||"mcp"!==c||(e.push(r),t.push({Header:n,columns:e.map((function(e,t){return{Header:t?"I/O":"Density",id:n+"-"+(t+1)}}))})),e=[]):t.push({Header:n,id:r})}else e.push(r);return t}),[]).reverse()}return[]}),[d,a,I,c]),A=(0,r.useMemo)((function(){return k.reduce((function(e,t,n){return!e&&M()(t.Header)&&(e=n),e}),0)}),[k]),O=(0,r.useMemo)((function(){return k.findIndex((function(e){return/product/i.test(e.Header)}))}),[k]),_=(0,r.useMemo)((function(){return"mcp"===c?["7rem","12rem","12rem","12rem"]:A>3?["6.9rem","6.9rem","10.4rem","13.8rem"]:A>2?["9rem","12.75rem","16.25rem"]:["15rem","23rem"]}),[A,c]),W=(0,r.useMemo)((function(){if(!t)return[];var e=t[0].findIndex((function(e){return a>3&&"dram"==c?/7yrs\s|\nNote/i.test(e):/^note/i.test(e)}));return e<0?[]:n?(null==n?void 0:n[0][e].split("\n"))||"":[]}),[t,a,c,n]),z=(0,r.useMemo)((function(){if(!t)return[];var e=t[0].findIndex((function(e){return"feature"===e.toLocaleLowerCase()}));return e<0?[]:n?(null==n?void 0:n[0][e].split("\n"))||"":[]}),[t,n]),B=(0,r.useMemo)((function(){return t&&(null==n?void 0:n.reduce((function(e,r){return"mcp"==c?(e.push([r[t[0].findIndex((function(e){return/Package\s|\nBall/i.test(e)}))],r[t[0].findIndex((function(e){return/Product/i.test(e)}))],r[t[0].findIndex((function(e){return/SLC\s|\nNAND/i.test(e)}))],r[t[0].findIndex((function(e){return/SLC\s|\nNAND/i.test(e)}))+1],r[t[0].findIndex((function(e){return/LPDDR2/i.test(e)}))],r[t[0].findIndex((function(e){return/LPDDR2/i.test(e)}))+1],{text:"",col:a>3?14:12}]),e):(e.push(b()("flash"===c?b()(n[0][t[0].findIndex((function(e){return/flash/i.test(e)}))]?[r[t[0].findIndex((function(e){return/flash/i.test(e)}))]]:[],n[0][t[0].findIndex((function(e){return/S-NOR/i.test(e)}))]?[r[t[0].findIndex((function(e){return/S-NOR/i.test(e)}))]]:[],n[0][t[0].findIndex((function(e){return/S-NAND/i.test(e)}))]?[r[t[0].findIndex((function(e){return/S-NAND/i.test(e)}))]]:[],n[0][t[0].findIndex((function(e){return/^Density/i.test(e)}))]?r[t[0].findIndex((function(e){return/^Density/i.test(e)}))]:[]):[r[t[0].findIndex((function(e){return/^Density/i.test(e)}))]],[r[t[0].findIndex((function(e){return/Product/i.test(e)}))],"flash"!==c?r[t[0].findIndex((function(e){return/I\/O\s|\nWidth/i.test(e)}))]+" "+r[t[0].findIndex((function(e){return/Voltage/i.test(e)}))]+"\n"+r[t[0].findIndex((function(e){return/Speed/i.test(e)}))]:r[t[0].findIndex((function(e){return/Description/i.test(e)}))],{text:"flash"!==c?[t[0].findIndex((function(e){return/Technology\s|\nNode/i.test(e)})),t[0].findIndex((function(e){return/Components/i.test(e)})),t[0].findIndex((function(e){return/Package/i.test(e)}))].map((function(e){return r[e]})).join(", "):"",col:a>3?14:12,nrnd:"TRUE"===r[t[0].findIndex((function(e){return/NRND/i.test(e)}))],nm:"flash"===c&&r[t[0].findIndex((function(e){return/Technology/i.test(e)}))]}])),e)}),[]))}),[t,a,n,c]),F=(0,r.useMemo)((function(){return k.reduce((function(e,t,n){return!e&&t.columns&&(e=n),e}),0)}),[k]),q=(0,r.useMemo)((function(){return k.reduce((function(e,t,n){return t.columns&&n<A&&(e+=t.columns.length),e}),0)}),[k,A]),U=(0,r.useMemo)((function(){return x()(Boolean(A-F)?A-F+q:A).map((function(e){return e==O?"#CACACA":e<O?"#B1B1B2":"#E8E8E8"}))}),[O,A,F]),Q=function(e){return null==B?void 0:B.map((function(t){return t[e]})).reverse().reduce((function(e,t,n,r){var o=r.length;return t?L.length?(C()(e,[o-n-1],L.length+1),L=[]):C()(e,[o-n-1],1):L.push(n),e}),{})};return(0,r.useEffect)((function(){if(E.current){var e=E.current.getBoundingClientRect(),t=E.current.querySelectorAll(".timeline-cell[data-nm");if(t.length){var n=[];t.forEach((function(t){var r,o=t.dataset.nm,i=t.getBoundingClientRect(),u=(i.top+i.height/2-e.top)/s,a=n[n.length-1];o!==(null===(r=a)||void 0===r?void 0:r.nm)&&(a={nm:o,left:(i.right-e.left)/s},n.push(a)),a.top=Math.min(a.top||u,u),a.bottom=Math.max(a.bottom||u,u)})),v(n)}}}),[B]),r.createElement(f.Z,{position:"relative",pl:"3.75em",pr:"1em",width:"1920px",height:"1080px",ref:E},g.length>0&&r.createElement(f.Z.FullAbsolute,null,g.map((function(e,t){var n=e.nm,o=e.top,i=e.bottom,u=e.left;return r.createElement(m.Z,{key:n+t,position:"absolute",style:{top:o,height:i-o,left:u},border:"1px solid",borderLeft:"none",alignItems:"center"},r.createElement(f.Z,{style:{writingMode:"vertical-rl",textRrientation:"mixed"},transform:"translateX(120%)"},n))}))),r.createElement(H.Z,null,n[0][0]),r.createElement(m.Z,{pt:"7em"},r.createElement(G,{flex:1,style:{position:"relative",background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},r.createElement("thead",{style:{fontSize:"1.25rem",fontWeight:"900"}},r.createElement("tr",null,k.map((function(e,t){var n=e.Header,o=e.columns;return r.createElement(f.Z,{as:"th",style:{borderRight:t==A-1&&"10px solid"},height:"44px",width:_[t],fontSize:"mcp"==c&&!t&&"14px",color:"white",bg:M()(n)?"#C63B38":"#234B69",rowSpan:!o&&2,colSpan:(null==o?void 0:o.length)||1,key:t},n)}))),r.createElement("tr",null,k.map((function(e,t){var n=e.columns;return null==n?void 0:n.map((function(e,n){var o=e.Header;return r.createElement(f.Z,{as:"th",fontWeight:"bold",style:{borderRight:"mcp"==c&&3==t&&1==n&&"10px solid white",whiteSpace:"mcp"===c&&"nowrap"},height:"44px",bg:"#CACACA",width:"68px",key:n},o)}))})))),r.createElement("tbody",{style:{fontSize:"19px",height:"23em"}},B.map((function(e,t){return r.createElement(f.Z,{as:"tr",key:t},e.map((function(e,n){return e&&(D()(e)?r.createElement(f.Z,{as:"td",colSpan:e.col,key:n,position:"relative",overflow:"visible",className:"timeline-cell","data-nm":e.nm||void 0,style:Q(0)[t]?{borderBottom:"none",borderLeft:"10px solid white"}:{borderTop:"none",borderBottom:"none",borderLeft:"10px solid white"}},r.createElement(R.Z,{data:w[t],startYear:u,startQuarter:3===a?i:1,yearSpan:a,colors:o.map((function(e){return T[e.toLocaleLowerCase()]}))}),r.createElement(f.Z,{position:"relative",pl:"8em"},r.createElement("span",{dangerouslySetInnerHTML:{__html:P(e.text)}}),e.nrnd&&r.createElement(N.Z.Inline,{fontWeight:"bold",color:"#234b69",pl:"1em"},"*NRND"))):r.createElement(f.Z,{as:"td",fontWeight:!n&&"bold",bg:U[n],rowSpan:Q(n)[t],style:{whiteSpace:"mcp"===c&&n>0&&"nowrap"},key:n},r.createElement(m.Z,{minHeight:"2.25rem",alignItems:"center",justifyContent:"mcp"===c?"center":n===k.findIndex((function(e){return/description/i.test(e.Header)}))?"flex-start":"center",px:"mcp"===c?"0":"1em"},r.createElement(f.Z,{dangerouslySetInnerHTML:{__html:P(e)}}))))})))})))),r.createElement(m.Z,{flexDirection:"column",ml:"mcp"==c?"2em":"3.5em",width:"22.375em"},r.createElement(f.Z,{border:"1.5px solid transparent",bg:"transparent",p:"0.5rem"},"　"),r.createElement(m.Z,{mb:"1em"},o.map((function(e,t){return r.createElement(f.Z,{fontSize:"1.25rem",width:"100%",fontWeight:"bold",textAlign:"center",bg:T[e.toLocaleLowerCase()],color:"white",p:"0.375rem 0.5rem",key:t},e)}))),!k.some((function(e){return"Description"===e.Header}))&&z[0]&&r.createElement(r.Fragment,null,r.createElement(f.Z,{bg:"#9FA0A0",fontSize:"1.125rem",textAlign:"center",color:"white",p:"0.5rem",fontWeight:"bold"},"FEATURE"),r.createElement(f.Z,{p:"0.5rem",style:{background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},z[0]&&j(z))),r.createElement(f.Z,{bg:"#9FA0A0",fontSize:"1.125rem",textAlign:"center",color:"white",p:"0.5rem",fontWeight:"bold"},"NOTE"),r.createElement(f.Z,{flex:1,p:"0.5rem",style:{background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},W[0]&&j(W)))))},_=(n(8559),n(7739)),W=n.n(_),z=n(2492),B=n.n(z),F=n(2694),q=n(7546),U=n(1531),Q=n(928),V=n.n(Q),Y={mb:1,gb:1e3},X=function(e){var t=e.replace(/\D/g,""),n=e.replace(/[0-9\s]/g,"");return t*Y[n.toLowerCase()]},$=function(e){return e.sort((function(e,t){return X(t)-X(e)}))},J=n(8926),ee=n(251),te=["children"],ne=function(e,t,n){return Object.keys(W()(e,n)).reduce((function(e,n){var r=(null==t?void 0:t[n])||1;return e[r-1]=e[r-1]||[],e[r-1].push(n),e}),[])},re=function(e,t){if(1===e.length)return e[0];var n=e.map((function(e){return e.replace(/[0-9.]/g,"")})).reduce((function(e,t){if(!e)return t;for(var n=0;!t.substring(0,t.length-n).includes(e)&&n<t.length;)n+=1;return e.substring(0,e.length-n)}));return[e[0],V()(e)].map((function(e){return e.replace(n,"")})).join(t)+" "+n},oe=function(e){var t=e.children,n=(0,U.Z)(e,te);return r.createElement(m.Z,Object.assign({border:"1px solid #efefef",px:"4px",py:"2px",alignItems:"center"},n),r.createElement(N.Z.Mono,null,t))},ie=function(e){var t=e.groupData,n=e.mainKey,o=e.timeKey,i=e.colGroupItem,u=e.colGroupKey,a=e.rowGroupKey,l=e.timeColor,c=e.item,s=(0,r.useMemo)((function(){return t.filter((function(e){return i.includes(e[u])&&e[a]===c}))}),[i,u,t,c,a]),d=c.replace(/\D/g,""),p=c.replace(/[0-9\s]/g,"");return s.length>0&&r.createElement(m.Z,{my:"0.5em"},r.createElement(m.Z,{width:"74px",justifyContent:"center",alignItems:"center",bg:"#234b69",color:"white",border:"1px solid #efefef"},r.createElement(f.Z,{textAlign:"center",fontSize:"16px",lineHeight:"1.25",fontWeight:"900",whiteSpace:"nowrap"},d,r.createElement("br",null),p)),r.createElement(m.Z,{flex:"1",flexDirection:"column"},s.map((function(e,t){return r.createElement(m.Z,{key:t,fontSize:"16px",flex:"1"},r.createElement(oe,{flex:"1",bg:"white",fontWeight:"500",lineHeight:"2",fontSize:"18px"},e[n]),e[o]&&r.createElement(oe,{fontWeight:"500",bg:l,color:"white",width:"64px",justifyContent:"center"},e[o]))}))))},ue=(0,S.default)(f.Z).withConfig({displayName:"PortfolioTableRender__GradientGroup",componentId:"sc-1npw6bb-0"})(["position:relative;",""],(function(e){return e["data-name"]&&'\n    &::before {\n      content: "";\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 4px;\n      bottom: 0;\n      border-left: 1px solid black;\n    }\n    &::after {\n      content: attr(data-name);\n      font-size: 15px;\n      display: block;\n      position: absolute;\n      left: -24px;\n      top: 50%;\n      writing-mode: vertical-lr;\n      text-orientation: mixed;\n      transform: rotate(180deg) translateY(50%);\n      font-weight: 500;\n      white-space: nowrap;\n    }\n  '})),ae=function(e){var t=e.data,n=e.colGroup,o=e.colGroupKey,i=e.rowGroup,u=e.rowGroupKey,a=e.mainKey,l=e.timeKey,c=e.timeColor,s=e.name,d=(0,r.useRef)();return r.createElement(J.Z,{ref:d,name:s+"-portfolio"},r.createElement(m.Z,{pl:"92px",pr:"76px",pt:"126px",height:"1040px",justifyContent:"center",alignItems:"center",flexDirection:"column"},r.createElement(m.Z.HStack,{spacing:"34px",flex:"1"},t.map((function(e,t){var s=e[0],d=e[1],p=ne(d,n[s],o),g=ne(d,i[s],u);return r.createElement(m.Z,{key:t,flexDirection:"column",background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"},r.createElement(f.Z,{fontSize:"25px",bg:"#c63b38",color:"white",textAlign:"center",py:"6px",border:"2px solid white",fontWeight:"900"},s),r.createElement(m.Z,{flex:"1"},p.map((function(e,t){return r.createElement(m.Z,{key:t,width:"275px",flexDirection:"column"},r.createElement(f.Z,{bg:"#cacaca",textAlign:"center",fontSize:"23px",py:"7px",border:"2px solid white",borderLeftWidth:t>0&&"6px",fontWeight:"bold"},re(e,"/")),g.map((function(n,i){var f=$(n);return r.createElement(ue,{key:i,px:"0.5em",border:"2px solid white",borderLeftWidth:t>0&&"6px",className:"same-height","data-id":i+1+"/"+g.length,"data-name":0===t&&re((0,h.Z)(f).reverse()," - "),flex:"1"},f.map((function(t,n){return r.createElement(ie,{key:n,groupData:d,colGroupItem:e,colGroupKey:o,rowGroupKey:u,item:t,mainKey:a,timeKey:l,timeColor:c})})))})))}))))}))),r.createElement(m.Z.HStack,{width:"100%",mt:"10px",justifyContent:"flex-end",alignItems:"center",spacing:"16px"},r.createElement(ee.Z,{bg:c},V()(l.split("."))),r.createElement(ee.Z,{bg:"#9fa0a0"},"NOTE"),r.createElement(N.Z,null,"Roapmaps are subject to change."))))},le=n(7361),ce=n.n(le),fe=n(1700),me=n.n(fe),se=S.default.table.withConfig({displayName:"CompactPortfolio__StyledTable",componentId:"sc-htf0zq-0"})(["th,td{border:3px solid white;}background:linear-gradient(0deg,rgba(227,227,227,0.85),rgba(238,238,238,0.3));"]),de=/(\d+(.\d+)?)/,pe=function(e,t){var n,r;return(null===(n=de.exec(t))||void 0===n?void 0:n[1])-(null===(r=de.exec(e))||void 0===r?void 0:r[1])},he=function(e){var t=e.name,n=e.colGroupKey,o=e.rowGroupKey,i=e.mainKey,u=e.timeKey,a=e.timeColor,l=e.data,c=(0,r.useMemo)((function(){var e=l.reduce((function(e,t){return e.concat(t[1])}),[]),t=W()(e,o);return $(Object.keys(t))}),[l,o]),s=(0,r.useMemo)((function(){return l.map((function(e){var t=e[1],r=W()(t,(function(e){var t;return null===(t=ce()(e,n))||void 0===t?void 0:t.replace(/\s|\t/g,"")}));return Object.entries(r).sort(pe)}))}),[l,n]);return r.createElement(J.Z,{name:t+"-portfolio-table"},r.createElement(f.Z,null,r.createElement(H.Z,null,me()(t)+" Memery Portfolio"),r.createElement(m.Z,{position:"absolute",left:"86px",top:"125px",right:"86px",minHeight:"910px",flexDirection:"column"},r.createElement(f.Z,{flex:"1"},r.createElement(se,null,r.createElement("thead",null,r.createElement("tr",null,[["Product",1]].concat(l.map((function(e,t){return[e[0],s[t].length]}))).map((function(e,t){var n=e[0],o=e[1];return r.createElement(f.Z,{as:"th",key:t,bg:"#c63b38",fontSize:"25px",fontWeight:"900",color:"white",colSpan:o,px:"1em",py:"0.5em",whiteSpace:"nowrap",style:{borderLeftWidth:t>0&&"10px"}},n)}))),r.createElement("tr",null,r.createElement(f.Z,{fontWeight:"900",fontSize:"15px",as:"th",color:"white",bg:"#848484",py:"0.25rem"},"Voltage/",r.createElement("br",null),"Density"),l.map,s.reduce((function(e,t,n){return e.concat(t.map((function(e,t){var o=e[0];return r.createElement(f.Z,{as:"th",key:n+o,fontWeight:"700",fontSize:"23px",bg:"#cacaca",width:"197px",style:{borderLeftWidth:0===t&&"10px"}},o)})))}),[]))),r.createElement("tbody",null,c.map((function(e){var t=/^(\d+)(\D+)$/.exec(e);return r.createElement("tr",{key:e},r.createElement(f.Z,{as:"td",bg:"#cacaca",fontSize:"19px",fontWeight:"bold",textAlign:"center",height:"58px"},t?t[1]+" "+t[2]:e),s.reduce((function(t,n,l){return t.concat(n.map((function(t,n){var c=t[1];return r.createElement(f.Z,{as:"td",key:""+l+n,fontWeight:"500",fontSize:"19px",height:"58px",width:"197px",style:{borderLeftWidth:0===n&&"10px"},px:"0.5em"},c.filter((function(t){return t[o]===e})).map((function(e,t){return r.createElement(f.Z,{key:t,fontFamily:"'Noto Sans Mono', monospace",lineHeight:"1.25",whiteSpace:"nowrap",fontSize:"20px"},e[i],e[u]&&r.createElement(f.Z,{verticalAlign:"middle",display:"inline-block",px:"0.25em",color:"white",bg:a,ml:"0.5em",width:"68px",textAlign:"center",fontSize:"17px"},e[u]))})))})))}),[]))}))))),r.createElement(m.Z.HStack,{mt:"10px",justifyContent:"flex-end",alignItems:"center",spacing:"16px"},r.createElement(ee.Z,{bg:a},V()(u.split("."))),r.createElement(ee.Z,{bg:"#9fa0a0"},"NOTE"),r.createElement(N.Z,null,"Roapmaps are subject to change.")))))},ge=function(e){return e.replace(/^w/i,"").replace(/\[[^\]]+\]/g,"")},xe=["Portfolio.Part Number","Product"],ve="Product Line",ye="Density",Ee={dram:"Technology Node (nm)",flash:"Voltage"},be={dram:"Portfolio.MP",flash:"Portfolio.Sample"},we={dram:"#a4ccdb",flash:"#2f6eba"},Ze=S.default.table.withConfig({displayName:"PortfolioPage__StyledTable",componentId:"sc-1h13ara-0"})(["width:100%;th{border-bottom:1px solid #ccc;}td,th{padding:0.25em;}td:first-of-type{width:5em;}input{max-width:3em;}"]),Se=function(e){var t=e.label,n=e.onSetGroup,o=e.groups,i=e.items;return r.createElement(Ze,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null),r.createElement("th",null,t))),r.createElement("tbody",null,i.map((function(e,t){return r.createElement("tr",{key:t,p:"0.5em"},r.createElement("td",null,e),r.createElement("td",null,r.createElement(q.Z,{type:"number",min:"0",value:(null==o?void 0:o[e])||"1",onChange:function(t){var r;return n(((r={})[e]=t.target.value,r))}})))}))))},Ie=function(e){var t=e.data,n=e.groupName,o=e.name,i=e.colGroup,u=e.onSetColGroup,a=e.rowGroup,l=e.onSetRowGroup,c=(0,r.useMemo)((function(){return Object.keys(W()(t,Ee[o]))}),[t,o]),m=(0,r.useMemo)((function(){return $(Object.keys(W()(t,ye)))}),[t]);return r.createElement(f.Z,{border:"1px solid",p:"0.5em"},r.createElement(f.Z,{textAlign:"center"},n),r.createElement("hr",null),r.createElement(Se,{label:"Col",onSetGroup:u,groups:i,items:c}),r.createElement(f.Z,{height:"1em"}),r.createElement(Se,{label:"Row",onSetGroup:l,groups:a,items:m}))},De=function(e){var t=e.data,n=e.name,o=e.variant,i=e.headerKeys,u=e.filterKey,a=(0,r.useCallback)((function(e){var t;return(null!==(t=null==e?void 0:e.split("."))&&void 0!==t?t:[]).reduce((function(e,t){var n=null==e?void 0:e.find((function(e){var n,r=e.Header;return n=t,r.toLowerCase()===n.toLowerCase()}));return null!=n&&n.columns?null==n?void 0:n.columns:n}),i)}),[i]),l=(0,r.useMemo)((function(){var e=a(u),r=[ve,ye,Ee[n],be[n]],o=r.map(a),i=xe.map(a);return t.slice(2).filter((function(t){return!e||"TRUE"===e.accessor(t)})).reduce((function(e,t,u){var a,l=(null===(a=i[0])||void 0===a?void 0:a.accessor(t))||i[1].accessor(t);return e.concat(null==l?void 0:l.split("\n").map((function(i){return Object.fromEntries([[xe,ge(i)]].concat((0,h.Z)(r.map((function(r,i){var a,l,c,f=null===(a=o[i])||void 0===a||null===(l=a.accessor)||void 0===l?void 0:l.call(null,t);""===f&&r!==ve&&r!==be[n]&&(f=null===(c=e[u-1])||void 0===c?void 0:c[r]);return[r,f]})))))})))}),[]).filter((function(e){return null==e?void 0:e[ve]}))}),[t,n,u,a]),c=(0,r.useMemo)((function(){return W()(l,ve)}),[l]),s=(0,r.useMemo)((function(){return Object.keys(c).map((function(e){return e.trim()}))}),[c]),d=(0,F.x)({}),p=d[0],g=d[1],x=(0,r.useMemo)((function(){return Object.keys(p).filter((function(e){return p[e]}))}),[p]),v=(0,F.x)({}),y=v[0],E=v[1],b=(0,F.x)({}),w=b[0],Z=b[1];return r.createElement(r.Fragment,null,r.createElement("hr",null),r.createElement(N.Z,null,"Product Lines:"),r.createElement(f.Z,{mx:"-0.5em"},s.map((function(e){return e&&r.createElement(f.Z,{as:"label",display:"inline-block",m:"0.5em"},r.createElement("input",{type:"checkbox",name:"group",checked:p[e],onChange:function(t){return g((function(n){n[e]=t.target.checked}))}}),r.createElement(N.Z,{as:"sapn",ml:"0.25rem"},e))})),x.length>0&&("compact"===o?r.createElement(he,{data:x.map((function(e){return[e,c[e]]})),colGroupKey:Ee[n],rowGroupKey:ye,mainKey:xe,timeKey:be[n],timeColor:we[n],name:n}):r.createElement(r.Fragment,null,r.createElement(N.Z,{my:"1em"},"利用下方Col跟Row可以做排版調整，同樣數字代表同一組，數字0代表隱藏"),r.createElement(m.Z.HStack,{my:"1em",sapcing:"1em"},x.map((function(e){return r.createElement(Ie,{key:e,data:c[e],groupName:e,name:n,colGroup:y[e],onSetColGroup:function(t){return E((function(n){var r;n=B()(n,((r={})[e]=t,r))}))},rowGroup:w[e],onSetRowGroup:function(t){return Z((function(n){var r;n=B()(n,((r={})[e]=t,r))}))}})}))),r.createElement(f.Z,{mt:"1em"},r.createElement(ae,{data:x.map((function(e){return[e,c[e]]})),colGroup:y,rowGroup:w,colGroupKey:Ee[n],rowGroupKey:ye,mainKey:xe,timeKey:be[n],timeColor:we[n],name:n}))))))},ke=n(3452),Ce=n(2601),Ae=function(e){var t=e.headerKeys,n=e.allData,o=e.pages,i=e.doubleHeader,u=e.quater,a=e.year,l=e.type,c=e.notes,m=e.name,s=e.onDownloaded,d=(0,r.useState)(0),p=d[0],h=d[1],g=(0,r.useRef)();return(0,r.useEffect)((function(){g.current&&g.current().then((function(){p===o.length-1?s():h(p+1)}))}),[p]),r.createElement(f.Z,{overflow:"hidden",width:"0",height:"0"},r.createElement(f.Z,{width:"1920px"},r.createElement(J.Z,{key:p,name:m+"-"+l+"y-"+(p+1),downloadRef:g},r.createElement(O,{headerKeys:t,allData:n,data:o[p],doubleHeader:i,quater:u,year:a,type:l,notes:c,name:m}))))},Me=function(e){var t=e.selectedSheet,n=e.data,l=e.compareSheetData,c=e.name,s=(0,r.useMemo)((function(){return[{title:"3年",value:3},{title:"7年",value:7}].concat("flash"===c?[{title:"總表",value:"portfolio"},{title:"大總表",value:"compact"}]:[{title:"3年總表",value:"portfolio"},{title:"7年總表",value:"portfolio-7"}])}),[c]),h=(0,r.useMemo)((function(){return"flash"===c||"mcp"===c?["Sample","MP"]:["ES","CS","MP"]}),[c]),g=(0,r.useState)(3),x=g[0],v=g[1],y=(0,r.useState)(),E=y[0],b=y[1],w=(0,r.useState)(0),Z=w[0],S=w[1],I=function(e){return(0,u.Z)(1,arguments),(0,i.Z)(e).getFullYear()}(new Date),D=(0,a.Z)(new Date),k=(0,r.useMemo)((function(){if(!n)return null;if(!n[0][0])return n.slice(1);var e=n[0].findIndex((function(e){return"7yrs"===e})),t=n[1].findIndex((function(e){return"portfolio"===x?"3yrs"===e:"7yrs"===e}));return 7==x?n.filter((function(t){return"FALSE"!=t[e]})):"portfolio"==x||"portfolio-7"==x?n.filter((function(e){return"FALSE"!=e[t]})):n}),[n,x]),C=(0,r.useMemo)((function(){return k&&k[0].some((function(e){return!e}))}),[k]),A=(0,r.useMemo)((function(){return k?k.slice(C?2:1):[]}),[k,C]),M=(0,r.useMemo)((function(){return A.reduce((function(e,t){var n,r=e.length-1;return t[0]&&(r=e.push([])-1),null===(n=e[r])||void 0===n||n.push(t),e}),[])}),[A]),N=(0,Ce.Z)(k),K=(0,r.useMemo)((function(){return l?l.slice(C?2:1):[]}),[l,C]);return r.createElement(o.mQ,{style:{marginTop:"2em"}},r.createElement(o.td,null,r.createElement(o.OK,null,"簡報產生器"),r.createElement(o.OK,{disabled:!K.length},"更新對照表")),r.createElement(o.x4,null,r.createElement(m.Z,{my:"1em",alignItems:"center"},t&&s.map((function(e,t){return"mcp"!==c&&r.createElement(d.Z.Outline,{active:x===e.value,mx:"0.25em",onClick:function(){return v(e.value)},key:t},e.title)}))),"number"==typeof x&&M&&M[Z]&&r.createElement(r.Fragment,null,r.createElement(p.Z,{pageCount:M.length,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:function(e){var t=e.selected;return S(t)}}),r.createElement(J.Z,{name:c+"-"+x+"y-"+(Z+1)},r.createElement(O,{headerKeys:N,allData:k,data:M[Z],doubleHeader:C,quater:D,year:I,type:x,notes:h,name:c})),r.createElement(f.Z,null,r.createElement(d.Z,{onClick:function(){return b(!0)},disabled:E},"批次下載",E?"中...":" ("+M.length+"頁)"),E&&r.createElement(Ae,{headerKeys:N,allData:k,pages:M,doubleHeader:C,quater:D,year:I,type:x,notes:h,name:c,onDownloaded:function(){return b(!1)}}))),/^portfolio/.test(x)&&k&&r.createElement(De,{data:k,name:c,headerKeys:N,filterKey:"Portfolio."+("flash"===c?"Sub":"portfolio-7"===x?"7yrs":"3yrs")}),"compact"===x&&k&&r.createElement(De,{data:k,name:c,headerKeys:N,filterKey:"Portfolio.All",variant:"compact"})))},Ne={mcp:"flash"},Ke=function(e){var t=e.name,n=void 0===t?"dram":t;return r.createElement(c.Z,null,r.createElement(s.Z,{as:l.rU,to:"/"+(Ne[n]||n)},"< Home"),r.createElement(ke.Z,{name:n},r.createElement(Me,null)))}},4286:function(e){e.exports=function(e){return e.split("")}},1078:function(e,t,n){var r=n(2488),o=n(7285);e.exports=function e(t,n,i,u,a){var l=-1,c=t.length;for(i||(i=o),a||(a=[]);++l<c;){var f=t[l];n>0&&i(f)?n>1?e(f,n-1,i,u,a):r(a,f):u||(a[a.length]=f)}return a}},2491:function(e,t,n){var r=n(4865),o=n(1811),i=n(5776),u=n(3218),a=n(327);e.exports=function(e,t,n,l){if(!u(e))return e;for(var c=-1,f=(t=o(t,e)).length,m=f-1,s=e;null!=s&&++c<f;){var d=a(t[c]),p=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return e;if(c!=m){var h=s[d];void 0===(p=l?l(h,d,s):void 0)&&(p=u(h)?h:i(t[c+1])?[]:{})}r(s,d,p),s=s[d]}return e}},4259:function(e){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}},180:function(e,t,n){var r=n(4259);e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},8805:function(e,t,n){var r=n(180),o=n(2689),i=n(3140),u=n(9833);e.exports=function(e){return function(t){t=u(t);var n=o(t)?i(t):void 0,a=n?n[0]:t.charAt(0),l=n?r(n,1).join(""):t.slice(1);return a[e]()+l}}},9179:function(e,t,n){var r=n(5639),o=n(554),i=n(4841),u=n(9833),a=r.isFinite,l=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=i(e),(n=null==n?0:l(o(n),292))&&a(e)){var r=(u(e)+"e").split("e"),c=t(r[0]+"e"+(+r[1]+n));return+((r=(u(c)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},7285:function(e,t,n){var r=n(2705),o=n(5694),i=n(1469),u=r?r.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||o(e)||!!(u&&e&&e[u])}},3140:function(e,t,n){var r=n(4286),o=n(2689),i=n(676);e.exports=function(e){return o(e)?i(e):r(e)}},676:function(e){var t="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",a="(?:"+n+"|"+r+")"+"?",l="[\\ufe0e\\ufe0f]?",c=l+a+("(?:\\u200d(?:"+[o,i,u].join("|")+")"+l+a+")*"),f="(?:"+[o+n+"?",n,i,u,t].join("|")+")",m=RegExp(r+"(?="+r+")|"+f+c,"g");e.exports=function(e){return e.match(m)||[]}},9693:function(e){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o}},7043:function(e,t,n){var r=n(2488),o=n(1078),i=n(278),u=n(1469);e.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),n=arguments[0],a=e;a--;)t[a-1]=arguments[a];return r(u(n)?i(n):[n],o(t,1))}},5558:function(e,t,n){var r=n(9179)("floor");e.exports=r},1763:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"number"==typeof e||o(e)&&"[object Number]"==r(e)}},6968:function(e,t,n){var r=n(2491);e.exports=function(e,t,n){return null==e?e:r(e,t,n)}},1700:function(e,t,n){var r=n(8805)("toUpperCase");e.exports=r}}]);
//# sourceMappingURL=8fc5c9947d631ef1ce8ec2f8b91b95f7a6638c6d-b51814e86b9bead07fe8.js.map