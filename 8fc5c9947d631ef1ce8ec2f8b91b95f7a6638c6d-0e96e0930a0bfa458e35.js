(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[862],{648:function(e,t,n){var r=n(1694),o=n(614),a=n(4326),i=n(5112)("toStringTag"),l=Object,u="Arguments"==a(function(){return arguments}());e.exports=r?a:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=l(e),i))?n:u?a(t):"Object"==(r=a(t))&&o(t.callee)?"Arguments":r}},6135:function(e,t,n){"use strict";var r=n(4948),o=n(3070),a=n(9114);e.exports=function(e,t,n){var i=r(t);i in e?o.f(e,i,a(0,n)):e[i]=n}},9974:function(e,t,n){var r=n(1702),o=n(9662),a=n(4374),i=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:a?i(e,t):function(){return e.apply(t,arguments)}}},1246:function(e,t,n){var r=n(648),o=n(8173),a=n(7497),i=n(5112)("iterator");e.exports=function(e){if(null!=e)return o(e,i)||o(e,"@@iterator")||a[r(e)]}},8554:function(e,t,n){var r=n(1460),o=n(9662),a=n(9670),i=n(6330),l=n(1246),u=TypeError;e.exports=function(e,t){var n=arguments.length<2?l(e):t;if(o(n))return a(r(n,e));throw u(i(e)+" is not iterable")}},7659:function(e,t,n){var r=n(5112),o=n(7497),a=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},408:function(e,t,n){var r=n(9974),o=n(1460),a=n(9670),i=n(6330),l=n(7659),u=n(6244),c=n(7976),m=n(8554),f=n(1246),s=n(9212),p=TypeError,d=function(e,t){this.stopped=e,this.result=t},h=d.prototype;e.exports=function(e,t,n){var g,v,y,x,E,b,w,Z=n&&n.that,S=!(!n||!n.AS_ENTRIES),k=!(!n||!n.IS_ITERATOR),D=!(!n||!n.INTERRUPTED),C=r(t,Z),M=function(e){return g&&s(g,"normal",e),new d(!0,e)},A=function(e){return S?(a(e),D?C(e[0],e[1],M):C(e[0],e[1])):D?C(e,M):C(e)};if(k)g=e;else{if(!(v=f(e)))throw p(i(e)+" is not iterable");if(l(v)){for(y=0,x=u(e);x>y;y++)if((E=A(e[y]))&&c(h,E))return E;return new d(!1)}g=m(e,v)}for(b=g.next;!(w=o(b,g)).done;){try{E=A(w.value)}catch(N){s(g,"throw",N)}if("object"==typeof E&&E&&c(h,E))return E}return new d(!1)}},9212:function(e,t,n){var r=n(1460),o=n(9670),a=n(8173);e.exports=function(e,t,n){var i,l;o(e);try{if(!(i=a(e,"return"))){if("throw"===t)throw n;return n}i=r(i,e)}catch(u){l=!0,i=u}if("throw"===t)throw n;if(l)throw i;return o(i),n}},7497:function(e){e.exports={}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},8559:function(e,t,n){var r=n(2109),o=n(408),a=n(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){a(t,e,n)}),{AS_ENTRIES:!0}),t}})},9510:function(e,t,n){"use strict";n.d(t,{Z:function(){return Re}});var r=n(1572),o=n(7294),a=n(9261),i=n(9550),l=n(4858),u=n(8765),c=n(7411),m=n(3815),f=n(8371),s=n(1318),p=n(6434),d=n(8405),h=n(7194),g=n(3218),v=n.n(g),y=n(6968),x=n.n(y),E=n(1763),b=n.n(E),w=n(9693),Z=n.n(w),S=n(7043),k=n.n(S),D=n(5558),C=n.n(D),M=n(6026),A=n.n(M),N=n(8387),I=n(3305),K=n(2889),H=n(1775),R=["disc","circle","square"],G=h.default.table.withConfig({displayName:"DramDataTable__StyledTable",componentId:"sc-oncz76-0"})(["table-layout:fixed;width:100%;th,td{white-space:pre;padding:0.5rem;border:3px solid white;line-height:1.25;}"]),P=[],T=function(e){return String(e).replace(/\{([^{]+)\}/g,(function(){return"<sup>"+(arguments.length<=1?void 0:arguments[1])+"</sup>"})).replace(/\{\{([^}]+)\}\}/g,(function(e,t){return'<span style="color: #D6262F">'+t+"</span>"}))},j={mp:"#A4CCDB",cs:"#4D9185",es:"#DC888A",sample:"#2F6EBA"},L=function e(t,n){void 0===n&&(n=0);var r=t.reduce((function(e,t){if(t.startsWith("-")){var n=e[e.length-1];n||(e.push([""]),n=e[e.length-1]),n[1]=n[1]||[],n[1].push(t.substring(1))}else e.push([t]);return e}),[]);return o.createElement(m.Z,{as:"ul",pl:"1em",style:{listStyleType:R[n%3]}},r.map((function(t,r){return o.createElement("li",{key:r},o.createElement("span",{dangerouslySetInnerHTML:{__html:T(t[0])}}),t[1]&&e(t[1],n+1))})))},O=function(e){var t=e.allData,n=e.data,a=e.notes,i=e.quater,l=e.year,u=e.type,c=e.headerKeys,s=e.name,p=e.scale,d=e.doubleHeader,h=e.compareMark,g=e.compareKeyIndex,y=(0,o.useState)([]),E=y[0],w=y[1],S=(0,o.useRef)(),D=(0,o.useMemo)((function(){var e=a.map((function(e){return c.find((function(t){return t.Header===e}))}));return e.some((function(e){return!e}))?[]:n.map((function(t){return e.map((function(e){return e.columns.map((function(e,n){var r=(0,e.accessor)(t);return(0,I.Z)(r,n)}))}))}))}),[n,c,a]),M=(0,o.useMemo)((function(){if(!Number.isNaN(u)){var e=l+(i-1)/4,t=l+1*u+(i-1)/4,n=function(n,r){if(!n)return!0;if("string"==typeof n)return!1;var o=n.year+n.month/12;return r?o>=e:o<=t};return D.map((function(e){return e.some((function(e){var t=e[0],r=e[1];return n(t)&&n(r,!0)}))}))}}),[D,i,l,u]),R=(0,o.useMemo)((function(){return D.filter((function(e,t){return M[t]}))}),[D,M]),O=(0,o.useMemo)((function(){return A()(u*(u<7?4:2)).map((function(e){return e?((u<7?i:1)+e)%(u<7?4:2)==1?l+C()(((u<7?i:1)+e)/(u<7?4:2)):"":l}))}),[u,i,l]),_=(0,o.useCallback)((function(e){var n;return null==t||null===(n=t[0])||void 0===n?void 0:n.findIndex((function(t){return e.test(t)}))}),[t]),W=(0,o.useMemo)((function(){return t&&b()(u)&&"mcp"===s?[t[0][_(/Package\s|\nBall/i)],t[0][_(/Product/i)],t[0][_(/SLC\s|\nNAND/i)],"",t[0][_(/LPDDR2/i)],""].concat((0,r.Z)(O)):k()("flash"===s?Z()([(null==n?void 0:n[0][_(/flash/i)])&&t[0][_(/flash/i)],(null==n?void 0:n[0][_(/S-NOR/i)])&&t[0][_(/S-NOR/i)],(null==n?void 0:n[0][_(/S-NAND/i)])&&t[0][_(/S-NAND/i)],(null==n?void 0:n[0][_(/^Density/i)])&&t[0][_(/^Density/i)]]):[null==t?void 0:t[0][_(/^Density/i)]],[null==t?void 0:t[0][_(/product/i)]],"flash"===s?null!=n&&n[0][_(/Description/i)]?"Description":[]:"Description",(0,r.Z)(O))}),[t,u,n,s,O,_]),z=(0,o.useMemo)((function(){if(d){var e=[];return W.slice(0).reverse().reduce((function(t,n,r){if(n){if(b()(n)&&!e.length)return t.push({Header:n,columns:[{Header:u<7?r?"Q4":"Q1":r?"H2":"H1",id:n+"-1"}]}),t;e.length?(b()(n)&&(e.push(r),t.push({Header:n,columns:e.slice().map((function(e,t,o){var a=o.length;return{Header:u<7?"Q"+(r<4?t+1:4-a+t+1):"H"+(t+1),id:n+"-"+(t+1)}}))})),b()(n)||"mcp"!==s||(e.push(r),t.push({Header:n,columns:e.map((function(e,t){return{Header:t?"I/O":"Density",id:n+"-"+(t+1)}}))})),e=[]):t.push({Header:n,id:r})}else e.push(r);return t}),[]).reverse()}return[]}),[d,u,W,s]),B=(0,o.useMemo)((function(){return z.reduce((function(e,t,n){return!e&&b()(t.Header)&&(e=n),e}),0)}),[z]),F=(0,o.useMemo)((function(){return z.findIndex((function(e){return/product/i.test(e.Header)}))}),[z]),q=(0,o.useMemo)((function(){return"mcp"===s?["7rem","12rem","12rem","12rem"]:B>3?["6.9rem","6.9rem","10.4rem","13.8rem"]:B>2?["9rem","12.75rem","16.25rem"]:["15rem","23rem"]}),[B,s]),U=(0,o.useMemo)((function(){if(!t)return[];var e=t[0].findIndex((function(e){return u>3&&"dram"==s?/7yrs\s|\nNote/i.test(e):/^note/i.test(e)}));return e<0?[]:n?(null==n?void 0:n[0][e].split("\n"))||"":[]}),[t,u,s,n]),Q=(0,o.useMemo)((function(){if(!t)return[];var e=t[0].findIndex((function(e){return/feature/i.test(e)})),r=t[0].findIndex((function(e){return/^7feature/i.test(e)}));return e<0||"dram"===s&&u>3&&r<0?[]:n?(null==n?void 0:n[0]["dram"===s&&u>3?r:e].split("\n"))||"":[]}),[t,n]),V=(0,o.useMemo)((function(){return t?(null==n?void 0:n.map((function(e,t){var r=null==h?void 0:h[e[g]],o=function(t,n){void 0===n&&(n=0);var o=+_(t)+n,a=e[o];return r&&r[o]!==a?"{{"+a+"}}":a};return"mcp"===s?[o(/Package\s|\nBall/i),o(/Product/i),o(/SLC\s|\nNAND/i),o(/SLC\s|\nNAND/i,1),o(/LPDDR2/i),o(/LPDDR2/i,1),{text:"",col:u>3?14:12,nm:o(/Technology/i)}]:k()("flash"===s?k()(n[0][_(/flash/i)]?o(/flash/i):[],n[0][_(/S-NOR/i)]?o(/S-NOR/i):[],n[0][_(/S-NAND/i)]?o(/S-NAND/i):[],n[0][_(/^Density/i)]?o(/^Density/i):[]):[o(/^Density/i)],[o(/Product/i),"flash"!==s?o(/I\/O\s|\nWidth/i)+" "+o(/Voltage/i)+"\n"+o(/Speed/i):o(/Description/i),{text:"flash"!==s?[o(/^Technology\s|\nNode/i),o(/^Process\s|\nNode/i),o(/Package/i)].filter(Boolean).join(", "):"",col:u>3?14:12,nrnd:"TRUE"===o(/NRND/i),nm:"flash"===s&&o(/Technology/i)}])}),[])).reduce((function(t,n,r){return M[r]?(!n[0]&&e&&(n[0]=e,e=void 0),t.push(n),t):(n[0]&&(e=n[0]),t)}),[]):[];var e}),[t,u,n,s,_,h,g,l,i]),Y=(0,o.useMemo)((function(){return z.reduce((function(e,t,n){return!e&&t.columns&&(e=n),e}),0)}),[z]),$=(0,o.useMemo)((function(){return z.reduce((function(e,t,n){return t.columns&&n<B&&(e+=t.columns.length),e}),0)}),[z,B]),X=(0,o.useMemo)((function(){return A()(Boolean(B-Y)?B-Y+$:B).map((function(e){return e==F?"#CACACA":e<F?"#B1B1B2":"#E8E8E8"}))}),[F,B,Y]),J=function(e){return null==V?void 0:V.map((function(t){return t[e]})).reverse().reduce((function(e,t,n,r){var o=r.length;return t?P.length?(x()(e,[o-n-1],P.length+1),P=[]):x()(e,[o-n-1],1):P.push(n),e}),{})};return(0,o.useEffect)((function(){if(S.current){var e=S.current.getBoundingClientRect(),t=S.current.querySelectorAll(".timeline-cell[data-nm");if(t.length){var n=[];t.forEach((function(t){var r,o=t.dataset.nm,a=t.getBoundingClientRect(),i=(a.top+a.height/2-e.top)/p,l=n[n.length-1];o!==(null===(r=l)||void 0===r?void 0:r.nm)&&(l={nm:o,left:(a.right-e.left)/p},n.push(l)),l.top=Math.min(l.top||i,i),l.bottom=Math.max(l.bottom||i,i)})),w(n)}}}),[V]),o.createElement(m.Z,{position:"relative",pl:"3.75em",pr:"1em",width:"1920px",height:"1080px",ref:S},E.length>0&&o.createElement(m.Z.FullAbsolute,null,E.map((function(e,t){var n=e.nm,r=e.top,a=e.bottom,i=e.left,l=n.split("|");return o.createElement(f.Z,{key:n+t,position:"absolute",style:{top:r,height:a-r,left:i},border:"1px solid",borderLeft:"none",alignItems:"center"},o.createElement(m.Z,{style:{writingMode:"vertical-rl",textRrientation:"mixed"},transform:"translateX("+(l.length+.8)+"em)",textAlign:"center",lineHeight:"0",width:"1.125em"},l.map((function(e,t){return o.createElement(N.Z,{key:t},e)}))))}))),o.createElement(K.Z,null,n[0][0]),o.createElement(f.Z,{pt:"7em"},o.createElement(G,{flex:1,style:{position:"relative",background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},o.createElement("thead",{style:{fontSize:"1.25rem",fontWeight:"900"}},o.createElement("tr",null,z.map((function(e,t){var n=e.Header,r=e.columns;return o.createElement(m.Z,{as:"th",style:{borderRight:t==B-1&&"10px solid"},height:"44px",width:q[t],fontSize:"mcp"==s&&!t&&"14px",color:"white",bg:b()(n)?"#C63B38":"#234B69",rowSpan:!r&&2,colSpan:(null==r?void 0:r.length)||1,key:t},n)}))),o.createElement("tr",null,z.map((function(e,t){var n=e.columns;return null==n?void 0:n.map((function(e,n,r){var a=e.Header,i=r.length;return o.createElement(m.Z,{as:"th",fontWeight:"bold",style:{borderRight:n===i-1?"3px solid white":B-Y&&t===B-1&&n===i-1&&"10px solid white",whiteSpace:"mcp"===s&&"nowrap"},height:"44px",bg:"#CACACA",width:"68px",key:n},a)}))})))),o.createElement("tbody",{style:{fontSize:"19px",height:"23em"}},V.map((function(e,t,n){var r=n.length;return o.createElement(m.Z,{as:"tr",key:t},e.map((function(e,n){var c;return e&&(v()(e)?o.createElement(m.Z,{as:"td",colSpan:e.col,key:n,position:"relative",overflow:"visible",className:"timeline-cell","data-nm":(null===(c=e.nm)||void 0===c?void 0:c.replace(/\n/g,"|"))||void 0,style:J(0)[t]?{borderBottom:"none",borderLeft:"10px solid white"}:{borderTop:"none",borderBottom:t===r-1?"3px solid white":"none",borderLeft:"10px solid white"}},o.createElement(H.Z,{data:R[t],startYear:l,startQuarter:3===u?i:1,yearSpan:u,colors:a.map((function(e){return j[e.toLocaleLowerCase()]}))}),o.createElement(m.Z,{position:"relative",pl:"8em"},o.createElement("span",{dangerouslySetInnerHTML:{__html:T(e.text)}}),e.nrnd&&o.createElement(N.Z.Inline,{fontWeight:"bold",color:"#234b69",pl:"1em"},"*NRND"))):o.createElement(m.Z,{as:"td",fontWeight:!n&&"bold",bg:X[n],rowSpan:J(n)[t],style:{whiteSpace:"mcp"===s&&n>0&&"nowrap"},key:n},o.createElement(f.Z,{minHeight:"2.25rem",alignItems:"center",justifyContent:n===z.findIndex((function(e){return/description/i.test(e.Header)}))?"flex-start":"center",textAlign:n===z.findIndex((function(e){return/description/i.test(e.Header)}))?"flex-start":"center",px:"mcp"===s?"0":"1em"},o.createElement(m.Z,{dangerouslySetInnerHTML:{__html:T(e)}}))))})))})))),o.createElement(f.Z,{flexDirection:"column",ml:"3.5em",width:"22.375em"},o.createElement(m.Z,{border:"1.5px solid transparent",bg:"transparent",p:"0.5rem"},"　"),o.createElement(f.Z,{mb:"1em"},a.map((function(e,t){return o.createElement(m.Z,{fontSize:"1.25rem",width:"100%",fontWeight:"bold",textAlign:"center",bg:j[e.toLocaleLowerCase()],color:"white",p:"0.375rem 0.5rem",key:t},e)}))),Q[0]&&o.createElement(o.Fragment,null,o.createElement(m.Z,{bg:"#9FA0A0",fontSize:"1.125rem",textAlign:"center",color:"white",p:"0.5rem",fontWeight:"bold"},"FEATURE"),o.createElement(m.Z,{p:"0.5rem",style:{background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},Q[0]&&L(Q))),o.createElement(m.Z,{bg:"#9FA0A0",fontSize:"1.125rem",textAlign:"center",color:"white",p:"0.5rem",fontWeight:"bold"},"NOTE"),o.createElement(m.Z,{flex:1,p:"0.5rem",style:{background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"}},U[0]&&L(U)))))},_=(n(8559),n(7739)),W=n.n(_),z=n(2492),B=n.n(z),F=n(2694),q=n(7546),U=n(1531),Q=n(928),V=n.n(Q),Y={mb:1,gb:1e3},$=function(e){var t=e.replace(/\D/g,""),n=e.replace(/[0-9\s]/g,"");return t*Y[n.toLowerCase()]},X=function(e){return e.sort((function(e,t){return $(t)-$(e)}))},J=n(8926),ee=n(251),te=["children"],ne=function(e,t,n){return Object.keys(W()(e,n)).reduce((function(e,n){var r=(null==t?void 0:t[n])||1;return e[r-1]=e[r-1]||[],e[r-1].push(n),e}),[])},re=function(e,t){if(1===e.length)return e[0];var n=e.map((function(e){return e.replace(/[0-9.]/g,"")})).reduce((function(e,t){if(!e)return t;for(var n=0;!t.substring(0,t.length-n).includes(e)&&n<t.length;)n+=1;return e.substring(0,e.length-n)}));return[e[0],V()(e)].map((function(e){return e.replace(n,"")})).join(t)+" "+n},oe=function(e){var t=e.children,n=(0,U.Z)(e,te);return o.createElement(f.Z,Object.assign({border:"1px solid #efefef",px:"4px",py:"2px",alignItems:"center"},n),o.createElement(N.Z.Mono,null,t))},ae=function(e){var t=e.groupData,n=e.mainKey,r=e.timeKey,a=e.colGroupItem,i=e.colGroupKey,l=e.rowGroupKey,u=e.timeColor,c=e.item,s=(0,o.useMemo)((function(){return t.filter((function(e){return a.includes(e[i])&&e[l]===c}))}),[a,i,t,c,l]),p=c.replace(/\D/g,""),d=c.replace(/[0-9\s]/g,"");return s.length>0&&o.createElement(f.Z,{my:"0.5em"},o.createElement(f.Z,{width:"74px",justifyContent:"center",alignItems:"center",bg:"#234b69",color:"white",border:"1px solid #efefef"},o.createElement(m.Z,{textAlign:"center",fontSize:"16px",lineHeight:"1.25",fontWeight:"900",whiteSpace:"nowrap"},p,o.createElement("br",null),d)),o.createElement(f.Z,{flex:"1",flexDirection:"column"},s.map((function(e,t){return o.createElement(f.Z,{key:t,fontSize:"16px",flex:"1"},o.createElement(oe,{flex:"1",bg:"white",fontWeight:"500",lineHeight:"2",fontSize:"18px"},e[n]),e[r]&&o.createElement(oe,{fontWeight:"500",bg:u,color:"white",width:"64px",justifyContent:"center"},e[r]))}))))},ie=(0,h.default)(m.Z).withConfig({displayName:"PortfolioTableRender__GradientGroup",componentId:"sc-1npw6bb-0"})(["position:relative;",""],(function(e){return e["data-name"]&&'\n    &::before {\n      content: "";\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 4px;\n      bottom: 0;\n      border-left: 1px solid black;\n    }\n    &::after {\n      content: attr(data-name);\n      font-size: 15px;\n      display: block;\n      position: absolute;\n      left: -24px;\n      top: 50%;\n      writing-mode: vertical-lr;\n      text-orientation: mixed;\n      transform: rotate(180deg) translateY(50%);\n      font-weight: 500;\n      white-space: nowrap;\n    }\n  '})),le=function(e){var t=e.data,n=e.colGroup,a=e.colGroupKey,i=e.rowGroup,l=e.rowGroupKey,u=e.mainKey,c=e.timeKey,s=e.timeColor,p=e.name,d=(0,o.useRef)();return o.createElement(J.Z,{noBg:!0,ref:d,name:p+"-portfolio"},o.createElement(f.Z,{pl:"92px",pr:"76px",pt:"126px",height:"1040px",justifyContent:"center",alignItems:"center",flexDirection:"column"},o.createElement(f.Z.HStack,{spacing:"34px",flex:"1"},t.map((function(e,t){var p=e[0],d=e[1],h=ne(d,n[p],a),g=ne(d,i[p],l);return o.createElement(f.Z,{key:t,flexDirection:"column",background:"linear-gradient(0deg, rgba(227,227,227,0.85), rgba(238,238,238,0.3))"},o.createElement(m.Z,{fontSize:"25px",bg:"#c63b38",color:"white",textAlign:"center",py:"6px",border:"2px solid white",fontWeight:"900"},p),o.createElement(f.Z,{flex:"1"},h.map((function(e,t){return o.createElement(f.Z,{key:t,width:"275px",flexDirection:"column"},o.createElement(m.Z,{bg:"#cacaca",textAlign:"center",fontSize:"23px",py:"7px",border:"2px solid white",borderLeftWidth:t>0&&"6px",fontWeight:"bold"},re(e,"/")),g.map((function(n,i){var m=X(n);return o.createElement(ie,{key:i,px:"0.5em",border:"2px solid white",borderLeftWidth:t>0&&"6px",className:"same-height","data-id":i+1+"/"+g.length,"data-name":0===t&&re((0,r.Z)(m).reverse()," - "),flex:"1"},m.map((function(t,n){return o.createElement(ae,{key:n,groupData:d,colGroupItem:e,colGroupKey:a,rowGroupKey:l,item:t,mainKey:u,timeKey:c,timeColor:s})})))})))}))))}))),o.createElement(f.Z.HStack,{width:"100%",mt:"10px",justifyContent:"flex-end",alignItems:"center",spacing:"16px"},o.createElement(ee.Z,{bg:s},V()(c.split("."))),o.createElement(ee.Z,{bg:"#9fa0a0"},"NOTE"),o.createElement(N.Z,null,"Roapmaps are subject to change."))))},ue=n(7361),ce=n.n(ue),me=n(1700),fe=n.n(me),se=h.default.table.withConfig({displayName:"CompactPortfolio__StyledTable",componentId:"sc-htf0zq-0"})(["th,td{border:3px solid white;}background:linear-gradient(0deg,rgba(227,227,227,0.85),rgba(238,238,238,0.3));"]),pe=/(\d+(.\d+)?)/,de=function(e,t){var n,r;return(null===(n=pe.exec(t))||void 0===n?void 0:n[1])-(null===(r=pe.exec(e))||void 0===r?void 0:r[1])},he=function(e){var t=e.name,n=e.colGroupKey,r=e.rowGroupKey,a=e.mainKey,i=e.timeKey,l=e.timeColor,u=e.data,c=(0,o.useMemo)((function(){var e=u.reduce((function(e,t){return e.concat(t[1])}),[]),t=W()(e,r);return X(Object.keys(t))}),[u,r]),s=(0,o.useMemo)((function(){return u.map((function(e){var t=e[1],r=W()(t,(function(e){var t;return null===(t=ce()(e,n))||void 0===t?void 0:t.replace(/\s|\t/g,"")}));return Object.entries(r).sort(de)}))}),[u,n]);return o.createElement(J.Z,{noBg:!0,name:t+"-portfolio-table"},o.createElement(m.Z,null,o.createElement(K.Z,null,fe()(t)+" Memery Portfolio"),o.createElement(f.Z,{position:"absolute",left:"86px",top:"125px",right:"86px",minHeight:"910px",flexDirection:"column"},o.createElement(m.Z,{flex:"1"},o.createElement(se,null,o.createElement("thead",null,o.createElement("tr",null,[["Product",1]].concat(u.map((function(e,t){return[e[0],s[t].length]}))).map((function(e,t){var n=e[0],r=e[1];return o.createElement(m.Z,{as:"th",key:t,bg:"#c63b38",fontSize:"25px",fontWeight:"900",color:"white",colSpan:r,px:"1em",py:"0.5em",whiteSpace:"nowrap",style:{borderLeftWidth:t>0&&"10px"}},n)}))),o.createElement("tr",null,o.createElement(m.Z,{fontWeight:"900",fontSize:"15px",as:"th",color:"white",bg:"#848484",py:"0.25rem"},"Voltage/",o.createElement("br",null),"Density"),u.map,s.reduce((function(e,t,n){return e.concat(t.map((function(e,t){var r=e[0];return o.createElement(m.Z,{as:"th",key:n+r,fontWeight:"700",fontSize:"23px",bg:"#cacaca",width:"197px",style:{borderLeftWidth:0===t&&"10px"}},r)})))}),[]))),o.createElement("tbody",null,c.map((function(e){var t=/^(\d+)(\D+)$/.exec(e);return o.createElement("tr",{key:e},o.createElement(m.Z,{as:"td",bg:"#cacaca",fontSize:"19px",fontWeight:"bold",textAlign:"center",height:"58px"},t?t[1]+" "+t[2]:e),s.reduce((function(t,n,u){return t.concat(n.map((function(t,n){var c=t[1];return o.createElement(m.Z,{as:"td",key:""+u+n,fontWeight:"500",fontSize:"19px",height:"58px",width:"197px",style:{borderLeftWidth:0===n&&"10px"},px:"0.5em"},c.filter((function(t){return t[r]===e})).map((function(e,t){return o.createElement(m.Z,{key:t,fontFamily:"'Noto Sans Mono', monospace",lineHeight:"1.25",whiteSpace:"nowrap",fontSize:"20px"},e[a],e[i]&&o.createElement(m.Z,{verticalAlign:"middle",display:"inline-block",px:"0.25em",color:"white",bg:l,ml:"0.5em",width:"68px",textAlign:"center",fontSize:"17px"},e[i]))})))})))}),[]))}))))),o.createElement(f.Z.HStack,{mt:"10px",justifyContent:"flex-end",alignItems:"center",spacing:"16px"},o.createElement(ee.Z,{bg:l},V()(i.split("."))),o.createElement(ee.Z,{bg:"#9fa0a0"},"NOTE"),o.createElement(N.Z,null,"Roapmaps are subject to change.")))))},ge=function(e){return e.replace(/^w/i,"").replace(/\[[^\]]+\]/g,"").replace(/\{[^}]+\}/g,"")},ve=["Portfolio.Part Number","Product"],ye="Product Line",xe="Density",Ee={dram:"Technology Node (nm)",flash:"Voltage"},be={dram:"Portfolio.MP",flash:"Portfolio.Sample"},we={dram:"#a4ccdb",flash:"#2f6eba"},Ze=h.default.table.withConfig({displayName:"PortfolioPage__StyledTable",componentId:"sc-1h13ara-0"})(["width:100%;th{border-bottom:1px solid #ccc;}td,th{padding:0.25em;text-align:center;}td:first-of-type{width:5em;}input{max-width:3em;}"]),Se=function(e){var t=e.label,n=e.title,r=e.onSetGroup,a=e.groups,i=e.items;return o.createElement(Ze,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{style:{width:"7.5em"}},t),o.createElement("th",null,n))),o.createElement("tbody",null,i.map((function(e,t){return o.createElement("tr",{key:t,p:"0.5em"},o.createElement("td",null,e),o.createElement("td",null,o.createElement(q.Z,{type:"number",min:"0",value:(null==a?void 0:a[e])||"1",onChange:function(t){var n;return r(((n={})[e]=t.target.value,n))}})))}))))},ke=function(e){var t=e.data,n=e.groupName,r=e.name,a=e.colGroup,i=e.onSetColGroup,l=e.rowGroup,u=e.onSetRowGroup,c=(0,o.useMemo)((function(){return Object.keys(W()(t,Ee[r]))}),[t,r]),f=(0,o.useMemo)((function(){return X(Object.keys(W()(t,xe)))}),[t]);return o.createElement(m.Z,{border:"1px solid",p:"0.5em"},o.createElement(m.Z,{textAlign:"center"},n),o.createElement("hr",null),o.createElement(Se,{label:Ee[r],title:"Group",onSetGroup:i,groups:a,items:c}),o.createElement(m.Z,{height:"1em"}),o.createElement(Se,{label:xe,title:"Index",onSetGroup:u,groups:l,items:f}))},De=function(e){var t=e.data,n=e.name,a=e.variant,i=e.headerKeys,l=e.filterKey,u=(0,o.useCallback)((function(e){var t;return(null!==(t=null==e?void 0:e.split("."))&&void 0!==t?t:[]).reduce((function(e,t){var n=null==e?void 0:e.find((function(e){var n,r=e.Header;return n=t,r.toLowerCase()===n.toLowerCase()}));return null!=n&&n.columns?null==n?void 0:n.columns:n}),i)}),[i]),c=(0,o.useMemo)((function(){var e=u(l),o=[ye,xe,Ee[n],be[n]],a=o.map(u),i=ve.map(u);return t.slice(2).filter((function(t){return!e||"TRUE"===e.accessor(t)})).reduce((function(e,t,l){var u,c=(null===(u=i[0])||void 0===u?void 0:u.accessor(t))||i[1].accessor(t);return e.concat(null==c?void 0:c.split("\n").map((function(i){return Object.fromEntries([[ve,ge(i)]].concat((0,r.Z)(o.map((function(r,o){var i,l,u,c=null===(i=a[o])||void 0===i||null===(l=i.accessor)||void 0===l?void 0:l.call(null,t);""===c&&r!==ye&&r!==be[n]&&(c=null===(u=e[e.length-1])||void 0===u?void 0:u[r]);return[r,c]})))))})))}),[]).filter((function(e){return null==e?void 0:e[ye]}))}),[t,n,l,u]),s=(0,o.useMemo)((function(){return W()(c,ye)}),[c]),p=(0,o.useMemo)((function(){return Object.keys(s).map((function(e){return e.trim()}))}),[s]),d=(0,F.x)({}),h=d[0],g=d[1],v=(0,o.useMemo)((function(){return Object.keys(h).filter((function(e){return h[e]}))}),[h]),y=(0,F.x)({}),x=y[0],E=y[1],b=(0,F.x)({}),w=b[0],Z=b[1];return o.createElement(o.Fragment,null,o.createElement("hr",null),o.createElement(N.Z,null,"Product Lines:"),o.createElement(m.Z,{mx:"-0.5em"},p.map((function(e,t){return e&&o.createElement(m.Z,{as:"label",display:"inline-block",m:"0.5em",key:t},o.createElement("input",{type:"checkbox",name:"group",checked:h[e],onChange:function(t){return g((function(n){n[e]=t.target.checked}))}}),o.createElement(N.Z,{as:"sapn",ml:"0.25rem"},e))})),v.length>0&&("compact"===a?o.createElement(he,{data:v.map((function(e){return[e,s[e]]})),colGroupKey:Ee[n],rowGroupKey:xe,mainKey:ve,timeKey:be[n],timeColor:we[n],name:n}):o.createElement(o.Fragment,null,o.createElement(N.Z,{my:"1em"},"利用下方Group與Index欄位可以做排版調整，同樣數字代表同一組，數字0代表隱藏"),o.createElement(f.Z.HStack,{my:"1em",sapcing:"1em"},v.map((function(e){return o.createElement(ke,{key:e,data:s[e],groupName:e,name:n,colGroup:x[e],onSetColGroup:function(t){return E((function(n){var r;n=B()(n,((r={})[e]=t,r))}))},rowGroup:w[e],onSetRowGroup:function(t){return Z((function(n){var r;n=B()(n,((r={})[e]=t,r))}))}})}))),o.createElement(m.Z,{mt:"1em"},o.createElement(le,{data:v.map((function(e){return[e,s[e]]})),colGroup:x,rowGroup:w,colGroupKey:Ee[n],rowGroupKey:xe,mainKey:ve,timeKey:be[n],timeColor:we[n],name:n}))))))},Ce=n(3452),Me=n(2601),Ae=function(e){var t=e.headerKeys,n=e.allData,r=e.pages,a=e.doubleHeader,i=e.quater,l=e.year,u=e.type,c=e.notes,f=e.name,s=e.onDownloaded,p=e.compareMark,d=e.compareKeyIndex,h=e.downloading,g=(0,o.useState)(0),v=g[0],y=g[1],x=(0,o.useRef)();return(0,o.useEffect)((function(){x.current&&x.current().then((function(){v===r.length-1?s():y(v+1)}))}),[v]),o.createElement(m.Z,{overflow:"hidden",width:"0",height:"0"},o.createElement(m.Z,{width:"1920px"},o.createElement(J.Z,{downloading:h,noBg:!0,key:v,name:f+"-"+u+"y-"+(v+1),downloadRef:x},o.createElement(O,{headerKeys:t,allData:n,data:r[v],doubleHeader:a,quater:i,year:l,type:u,notes:c,name:f,compareMark:p,compareKeyIndex:d}))))},Ne=n(8973),Ie=/^Density$/i,Ke=function(e){var t=e.selectedSheet,n=e.data,i=e.compareSheetData,c=e.name,s=(0,o.useMemo)((function(){return[{title:"3年",value:3},{title:"7年",value:7}].concat("flash"===c?[{title:"總表",value:"portfolio"},{title:"大總表",value:"compact"}]:[{title:"3年總表",value:"portfolio"},{title:"7年總表",value:"portfolio-7"}])}),[c]),h=(0,o.useMemo)((function(){return"flash"===c||"mcp"===c?["Sample","MP"]:["ES","CS","MP"]}),[c]),g=(0,o.useState)(3),v=g[0],y=g[1],x=(0,o.useState)(),E=x[0],b=x[1],w=(0,u.Z)(),Z=w.startYear,S=w.yearControl,k=w.startQuarter,D=w.quaterControl,C=(0,o.useState)(0),M=C[0],A=C[1],N=(0,o.useCallback)((function(e){if(!e)return null;var t=e;t[0][0]||(t=e.slice(1));var n=t[0].map((function(e){return Ie.test(e)}));n.some((function(e){return e}))&&(t=t.reduce((function(e,t,o){return 0===o?[t]:[].concat((0,r.Z)(e),[t.map((function(t,r){return!t&&n[r]?e[o-1][r]:t}))])}),[]));var o=t[0].findIndex((function(e){return"7yrs"===e})),a=t[1].findIndex((function(e){return"portfolio"===v?"3yrs"===e:"7yrs"===e}));return 7===v?t.filter((function(e){return"FALSE"!==e[o]})):"portfolio"===v||"portfolio-7"===v?t.filter((function(e){return"FALSE"!==e[a]})):t}),[v]),I=N(n),K=(0,Me.Z)(I),H=(0,o.useMemo)((function(){return I&&I[0].some((function(e){return!e}))}),[I]),R=(0,o.useMemo)((function(){return I?I.slice(H?2:1):[]}),[I,H]),G=(0,o.useMemo)((function(){return R.reduce((function(e,t){var n,r=e.length-1;return t[0]&&(r=e.push([])-1),null===(n=e[r])||void 0===n||n.push(t),e}),[])}),[R]),P=(0,Me.Z)(I),T=(0,o.useMemo)((function(){return i?N(i).slice(H?2:1):[]}),[N,i,H]),j=(0,o.useMemo)((function(){return null==I?void 0:I[0].findIndex((function(e){return/^product/i.test(e)}))}),[I]),L=(0,l.Z)(T,j),_=L[0],W=L[1];return o.createElement(a.mQ,{style:{marginTop:"2em"}},o.createElement(a.td,null,o.createElement(a.OK,null,"簡報產生器"),o.createElement(a.OK,{disabled:!T.length},"更新對照表")),o.createElement(a.x4,null,o.createElement(f.Z,{my:"1em",alignItems:"center"},S,D,t&&s.map((function(e,t){return"mcp"!==c&&o.createElement(p.Z.Outline,{active:v===e.value,mx:"0.25em",onClick:function(){return y(e.value)},key:t},e.title)}))),"number"==typeof v&&G&&G[M]&&o.createElement(o.Fragment,null,o.createElement(d.Z,{pageCount:G.length,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:function(e){var t=e.selected;return A(t)}}),o.createElement(J.Z,{noBg:!0,name:c+"-"+v+"y-"+(M+1)},o.createElement(O,{headerKeys:P,allData:I,compareMark:_,compareKeyIndex:j,data:G[M],doubleHeader:H,quater:k,year:Z,type:v,notes:h,name:c})),o.createElement(m.Z,null,o.createElement(p.Z,{onClick:function(){return b(!0)},disabled:E},"批次下載",E?"中...":" ("+G.length+"頁)"),E&&o.createElement(Ae,{headerKeys:P,allData:I,compareMark:_,compareKeyIndex:j,pages:G,doubleHeader:H,quater:k,year:Z,type:v,notes:h,name:c,downloading:E,onDownloaded:function(){return b(!1)}}))),/^portfolio/.test(v)&&I&&o.createElement(De,{data:I,name:c,headerKeys:P,filterKey:"Portfolio."+("flash"===c?"Sub":"portfolio-7"===v?"7yrs":"3yrs")}),"compact"===v&&I&&o.createElement(De,{data:I,name:c,headerKeys:P,filterKey:"Portfolio.All",variant:"compact"})),o.createElement(a.x4,null,o.createElement(Ne.Z,{keyIndex:j,name:c,data:G,headerRow:K,compareMark:_,sheetName:t,comparePages:W})))},He={mcp:"flash"},Re=function(e){var t=e.name,n=void 0===t?"dram":t;return o.createElement(c.Z,null,o.createElement(s.Z,{as:i.rU,to:"/"+(He[n]||n)},"< Home"),o.createElement(Ce.Z,{name:n},o.createElement(Ke,null)))}},4286:function(e){e.exports=function(e){return e.split("")}},1078:function(e,t,n){var r=n(2488),o=n(7285);e.exports=function e(t,n,a,i,l){var u=-1,c=t.length;for(a||(a=o),l||(l=[]);++u<c;){var m=t[u];n>0&&a(m)?n>1?e(m,n-1,a,i,l):r(l,m):i||(l[l.length]=m)}return l}},2491:function(e,t,n){var r=n(4865),o=n(1811),a=n(5776),i=n(3218),l=n(327);e.exports=function(e,t,n,u){if(!i(e))return e;for(var c=-1,m=(t=o(t,e)).length,f=m-1,s=e;null!=s&&++c<m;){var p=l(t[c]),d=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return e;if(c!=f){var h=s[p];void 0===(d=u?u(h,p,s):void 0)&&(d=i(h)?h:a(t[c+1])?[]:{})}r(s,p,d),s=s[p]}return e}},4259:function(e){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},180:function(e,t,n){var r=n(4259);e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},8805:function(e,t,n){var r=n(180),o=n(2689),a=n(3140),i=n(9833);e.exports=function(e){return function(t){t=i(t);var n=o(t)?a(t):void 0,l=n?n[0]:t.charAt(0),u=n?r(n,1).join(""):t.slice(1);return l[e]()+u}}},9179:function(e,t,n){var r=n(5639),o=n(554),a=n(4841),i=n(9833),l=r.isFinite,u=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=a(e),(n=null==n?0:u(o(n),292))&&l(e)){var r=(i(e)+"e").split("e"),c=t(r[0]+"e"+(+r[1]+n));return+((r=(i(c)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},7285:function(e,t,n){var r=n(2705),o=n(5694),a=n(1469),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(i&&e&&e[i])}},3140:function(e,t,n){var r=n(4286),o=n(2689),a=n(676);e.exports=function(e){return o(e)?a(e):r(e)}},676:function(e){var t="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+n+"|"+r+")"+"?",u="[\\ufe0e\\ufe0f]?",c=u+l+("(?:\\u200d(?:"+[o,a,i].join("|")+")"+u+l+")*"),m="(?:"+[o+n+"?",n,a,i,t].join("|")+")",f=RegExp(r+"(?="+r+")|"+m+c,"g");e.exports=function(e){return e.match(f)||[]}},9693:function(e){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var a=e[t];a&&(o[r++]=a)}return o}},7043:function(e,t,n){var r=n(2488),o=n(1078),a=n(278),i=n(1469);e.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),n=arguments[0],l=e;l--;)t[l-1]=arguments[l];return r(i(n)?a(n):[n],o(t,1))}},5558:function(e,t,n){var r=n(9179)("floor");e.exports=r},1763:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"number"==typeof e||o(e)&&"[object Number]"==r(e)}},6968:function(e,t,n){var r=n(2491);e.exports=function(e,t,n){return null==e?e:r(e,t,n)}},1700:function(e,t,n){var r=n(8805)("toUpperCase");e.exports=r}}]);
//# sourceMappingURL=8fc5c9947d631ef1ce8ec2f8b91b95f7a6638c6d-0e96e0930a0bfa458e35.js.map