"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[252],{8765:function(e,t,n){var r=n(7294),a=n(8371),l=n(8387),u=n(3815);t.Z=function(){var e=(0,r.useState)((function(){return(new Date).getFullYear()})),t=e[0],n=e[1],c=(0,r.useMemo)((function(){return r.createElement(a.Z,{as:"label",my:"1em",alignItems:"center"},r.createElement(l.Z,{mr:"0.5em"},"起始年分"),r.createElement(u.Z,{width:"12em"},r.createElement("input",{style:{lineHeight:2},type:"number",value:t,onChange:function(e){return n(+e.target.value)}})))}),[t]);return{startYear:t,yearControl:c}}},3320:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5485),a=n(7294),l=n(9261),u=n(4238),c=n.n(u),o=n(9550),s=n(7411),i=n(6434),m=n(8405),d=n(742),p=n(7194),f=n(3218),h=n.n(f),g=n(3815),E=p.default.table.withConfig({displayName:"SheetDataTable__StyledTable",componentId:"sc-7jx626-0"})(["width:max-content;th,td{white-space:pre-wrap;padding:0.5em;}"]),w=p.default.input.withConfig({displayName:"SheetDataTable__StyledInput",componentId:"sc-7jx626-1"})(["width:100%;"]);var v={Filter:function(e){var t=e.column,n=t.filterValue,r=t.preFilteredRows,l=t.setFilter,u=r.length;return a.createElement(w,{value:n||"",onChange:function(e){l(e.target.value||void 0)},placeholder:"Search "+u+" records..."})},canFilter:!1},y=function(e){var t=e.data,n=e.headerRow,r=(0,a.useMemo)((function(){return n.map((function(e,t){return h()(e)?Object.assign({},e):{Header:e,accessor:function(e){return e[t]},id:t}}))}),[n]),l=(0,d.useTable)({columns:r,data:t,defaultColumn:v,initialState:{selectedRowIds:t.reduce((function(e,t,n){return e[n]=!0,e}),{})}},d.useFilters),u=l.getTableProps,c=l.getTableBodyProps,o=l.headerGroups,s=l.rows,i=l.prepareRow;return a.createElement(g.Z,{overflowX:"auto"},a.createElement(E,u(),a.createElement("thead",null,o.map((function(e){return a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e,t){return a.createElement("th",e.getHeaderProps(),e.render("Header"),a.createElement("div",null,e.canFilter&&0===t?e.render("Filter"):null))})))}))),a.createElement("tbody",c(),s.map((function(e){return i(e),a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))))};y.defaultProps={onSelectRow:function(){}};var b=y,Z=n(7753),C=n(6016),S=n(8973),R=n(3452),k=n(7643),M=n(2601),P=n(8765),D=function(e){var t=e.data,n=e.compareSheetData,r=e.selectedSheet,u=(0,a.useState)(),o=u[0],s=u[1],d=(0,P.Z)(),p=d.startYear,f=d.yearControl,h=(0,a.useState)(0),g=h[0],E=h[1],w=(0,a.useMemo)((function(){return t&&t[0].some((function(e){return!e}))}),[t]),v=(0,M.Z)(t),y=(0,a.useMemo)((function(){return t?t.slice(w?2:1):[]}),[t,w]),R=(0,a.useMemo)((function(){return y.reduce((function(e,t){var n=e.length-1;return t[0]&&(n=e.push([])-1),e[n].push(t),e}),[])}),[y]),k=(0,a.useMemo)((function(){return n?n.slice(w?2:1):[]}),[n,w]),D=(0,a.useMemo)((function(){if(!c()(k))return[null,null];var e=0;return k.reduce((function(t,n){var r=t[0],a=t[1];return n[0]&&(e+=1),r[n[1]]=n,a[n[1]]=e,[r,a]}),[{},{}])}),[k]),F=D[0],_=D[1];return a.createElement(l.mQ,{style:{marginTop:"2em"}},a.createElement(l.td,null,a.createElement(l.OK,null,"簡報產生器"),a.createElement(l.OK,{disabled:!k.length},"更新對照表")),a.createElement(l.x4,null,f,R&&R[g]&&a.createElement(a.Fragment,null,a.createElement(b,{data:R[g],headerRow:v}),a.createElement(m.Z,{pageCount:R.length,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:function(e){var t=e.selected;return E(t)}}),a.createElement(Z.Z,{key:r,allData:y,headerRow:v.slice(0,v.length-2),page:g,data:R[g],compareMark:F,sheetName:r,startYear:p}),a.createElement(i.Z,{onClick:function(){return s(!0)},disabled:o},"批次下載",o?"中...":" ("+R.length+"頁)"),o&&a.createElement(C.Z,{allData:y,headerRow:v.slice(0,v.length-2),pages:R,compareMark:F,sheetName:r,startYear:p,onDownloaded:function(){return s(!1)}}))),a.createElement(l.x4,null,a.createElement(S.Z,{data:R,headerRow:v,compareMark:F,sheetName:r,comparePages:_})))},F=function(){return a.createElement(s.Z,null,a.createElement(k.Z,{as:o.rU,to:"/"},"< Home"),a.createElement(R.Z,{name:"marketing"},a.createElement(D,null)))},_=(0,r.Z)(F)}}]);
//# sourceMappingURL=component---src-pages-automotive-js-ce3d10eb917c66f22e06.js.map