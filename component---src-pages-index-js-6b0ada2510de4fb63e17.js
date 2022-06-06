"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[678],{6434:function(e,r,n){var t=n(1531),o=n(7294),a=n(7194),i=n(1807),l=n(8529),c=n(3059),u=n(3815),s=n(9447),d=n(6700),m=["leftIcon","rightIcon","iconSpacing","iconsSize","children","verticalAlign"],g=(0,a.css)(["",";",";",";"],(0,s.J)("hoverColor"),(0,s.J)("hoverBg","backgroundColor"),(0,s.J)("hoverBorder","borderColor")),h=a.default.button.withConfig({shouldForwardProp:c.ZP}).withConfig({displayName:"Button__ButtonBase",componentId:"sc-onvwh0-0"})(["padding:0;border:none;font-family:inherit;line-height:1;text-decoration:none;"," "," "," "," "," "," "," appearance:none;transition:all ","ms;cursor:pointer;&:hover,&:focus{"," outline:none;}"," ",""],i.cp,i.bK,i.FK,i.Dh,i.$_,i.Cg,i.E0,(0,l.Z)("duration",250),(function(e){return!e.disabled&&g}),(function(e){return e.active&&!e.disabled&&g}),(function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "})),f=function(e){return o.createElement(u.Z,Object.assign({as:"span"},e))},p=(0,d.Z)((function(e){var r=e.leftIcon,n=e.rightIcon,a=e.iconSpacing,i=e.iconsSize,l=e.children,c=e.verticalAlign,s=(0,t.Z)(e,m);return o.createElement(h,s,r?o.createElement(u.Z,{as:r,mr:a,verticalAlign:c,fontSize:i}):null,o.createElement(f,{verticalAlign:c},l),n?o.createElement(u.Z,{as:n,ml:a,verticalAlign:c,fontSize:i}):null)}));p.defaultProps={border:"2px solid",borderColor:"primary",bg:"primary",color:"white",hoverColor:"white",hoverBg:"primaryHover",hoverBorder:"primaryHover",px:"1.5em",py:"0.75em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"0.25em",display:"inline-block",verticalAlign:"middle",iconsSize:"1.25em"},p.displayName="Button",p.Danger=function(e){return o.createElement(p,Object.assign({bg:"danger",borderColor:"danger",hoverBg:"dangerHover",hoverBorder:"dangerHover"},e))},p.Secondary=function(e){return o.createElement(p,Object.assign({bg:"secondary",border:"2px solid",borderColor:"secondary",hoverBg:"secondaryHover",hoverBorder:"secondaryHover"},e))},p.Outline=function(e){return o.createElement(p,Object.assign({border:"2px solid",borderColor:"primary",bg:"transparent",color:"primary",hoverColor:"white",hoverBg:"primary"},e))},p.Outline.Danger=function(e){return o.createElement(p.Danger,Object.assign({border:"2px solid",borderColor:"danger",bg:"transparent",color:"danger",hoverColor:"white",hoverBg:"danger"},e))},p.Transparent=function(e){return o.createElement(p,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},e))},r.Z=p},7411:function(e,r,n){var t=n(7294),o=n(3815),a=n(51),i=function(e){return t.createElement(o.Z,e)};i.defaultProps={mx:"auto",px:["1em",null,"2em"],py:"2em",width:1,maxWidth:a.Zo},i.displayName="Container",r.Z=i},9447:function(e,r,n){n.d(r,{J:function(){return o}});var t=n(1807),o=function(e,r){return void 0===r&&(r="color"),(0,t.oB)({prop:e,cssProperty:r,key:"colors"})}},5485:function(e,r,n){var t=n(7294),o=n(1827),a=n(7411),i=n(8387);r.Z=function(e){return function(r){var n=(0,o.Z)(),l=n.isSignedIn,c=n.AuthButton;return l?t.createElement(e,r):t.createElement(a.Z,null,t.createElement(i.Z,null,"請先登入"),t.createElement(c,null))}}},1827:function(e,r,n){var t=n(1531),o=n(7294),a=n(6434),i=n(1457),l=["isSignedIn","signIn","signOut"];r.Z=function(){var e=(0,o.useContext)(i.Z),r=e.isSignedIn,n=e.signIn,c=e.signOut,u=(0,t.Z)(e,l),s=(0,o.useCallback)((function(){return o.createElement(a.Z,{onClick:r?c:n},r?"Logout":"Login")}),[r]);return Object.assign({AuthButton:s,isSignedIn:r,signIn:n,signOut:c},u)}},4106:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var t=n(5485),o=n(7294),a=n(9550),i=n(7411),l=n(6434),c=n(3815),u=n(8387),s=[[{name:"Marketing",href:"/marketing"}],[{name:"DRAM",href:"/dram"},{name:"DRAM Technology",href:"/dram/tech"}],[{name:"Flash",href:"/flash"},{name:"Flash Technology",href:"/flash/tech"}]],d=function(){return o.createElement(i.Z,{maxWidth:"640px"},o.createElement(u.Z,null,"Roadmap Tools:"),s.map((function(e,r){return o.createElement(c.Z,{my:"0.5em",mx:"-0.5em",key:r},e.map((function(e,r){return o.createElement(l.Z,{key:r,m:"0.5em",as:a.rU,to:e.href},e.name," ",">")})))})))},m=(0,t.Z)(d)}}]);
//# sourceMappingURL=component---src-pages-index-js-6b0ada2510de4fb63e17.js.map