"use strict";(self.webpackChunkmy_api_doc=self.webpackChunkmy_api_doc||[]).push([[90,714],{3525:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(6540),l=a(5680),o=a(5920),c=a(467),r=a(53),i=a(9777),s=a(9312),d=a(5515),m=a(1773),u=a(8168);const p=e=>n.createElement("svg",(0,u.A)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var b=a(4798),h=a(4676),E=a(6654),f=a(6359);const A="menuLinkText_OKON",g=(e,t)=>"link"===e.type?(0,i.ys)(e.href,t):"category"===e.type&&e.items.some((e=>g(e,t))),_=(0,n.memo)((function(e){let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(C,(0,u.A)({key:t,item:e},a)))))}));function C(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(N,(0,u.A)({item:t},a)):n.createElement(v,(0,u.A)({item:t},a))}function N(e){let{item:t,onItemClick:a,activePath:l,...o}=e;const{items:c,label:s,collapsible:d}=t,m=g(t,l),{collapsed:p,setCollapsed:b,toggleCollapsed:h}=(0,i.uW)({initialState:()=>!!d&&(!m&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const o=(0,i.ZC)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a])}({isActive:m,collapsed:p,setCollapsed:b}),n.createElement("li",{className:(0,r.A)(i.GN.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":p})},n.createElement("a",(0,u.A)({className:(0,r.A)("menu__link",{"menu__link--sublist":d,"menu__link--active":d&&m,[A]:!d}),onClick:d?e=>{e.preventDefault(),h()}:void 0,href:d?"#":void 0},o),s),n.createElement(i.Nt,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},n.createElement(_,{items:c,tabIndex:p?-1:0,onItemClick:a,activePath:l})))}function v(e){let{item:t,onItemClick:a,activePath:l,...o}=e;const{href:c,label:s}=t,d=g(t,l);return n.createElement("li",{className:(0,r.A)(i.GN.docs.docSidebarItemLink,"menu__list-item"),key:s},n.createElement(h.A,(0,u.A)({className:(0,r.A)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:c},(0,E.A)(c)&&{onClick:a},o),(0,E.A)(c)?s:n.createElement("span",null,s,n.createElement(f.A,null))))}const k="sidebar_a3j0",S="sidebarWithHideableNavbar_VlPv",T="sidebarHidden_OqfG",y="sidebarLogo_hmkv",I="menu_cyFh",w="menuWithAnnouncementBar_+O1J",M="collapseSidebarButton_eoK2",x="collapseSidebarButtonIcon_e+kA";function B(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,b.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.A)("button button--secondary button--outline",M),onClick:t},n.createElement(p,{className:x}))}function P(e){let{path:t,sidebar:a,onCollapse:l,isHidden:o}=e;const c=function(){const{isClosed:e}=(0,i.Mj)(),[t,a]=(0,n.useState)(!e);return(0,d.A)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:s},hideableSidebar:u}=(0,i.pN)(),{isClosed:p}=(0,i.Mj)();return n.createElement("div",{className:(0,r.A)(k,{[S]:s,[T]:o})},s&&n.createElement(m.A,{tabIndex:-1,className:y}),n.createElement("nav",{className:(0,r.A)("menu thin-scrollbar",I,{[w]:!p&&c})},n.createElement("ul",{className:(0,r.A)(i.GN.docs.docSidebarMenu,"menu__list")},n.createElement(_,{items:a,activePath:t}))),u&&n.createElement(B,{onClick:l}))}const F=e=>{let{toggleSidebar:t,sidebar:a,path:l}=e;return n.createElement("ul",{className:(0,r.A)(i.GN.docs.docSidebarMenu,"menu__list")},n.createElement(_,{items:a,activePath:l,onItemClick:()=>t()}))};function H(e){return n.createElement(i.Gh,{component:F,props:e})}const L=n.memo(P),D=n.memo(H);function G(e){const t=(0,s.A)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(L,e),l&&n.createElement(D,e))}var W=a(5582),R=a(9090),z=a(6347);const O="backToTopButton_i9tI",Y="backToTopButtonShow_wCmF";function j(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const q=function(){const e=(0,z.zy)(),{smoothScrollTop:t,cancelScrollToTop:a}=j(),[l,o]=(0,n.useState)(!1);return(0,d.A)(((e,t)=>{let{scrollY:n}=e;if(!t)return;const l=n<t.scrollY;if(l||a(),n<300)o(!1);else if(l){const e=document.documentElement.scrollHeight;n+window.innerHeight<e&&o(!0)}else o(!1)}),[e]),n.createElement("button",{className:(0,r.A)("clean-btn",O,{[Y]:l}),type:"button",onClick:()=>t()},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},K={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};var U=a(2602);function Z(e){let{currentDocRoute:t,versionMetadata:a,children:o}=e;const{pluginId:s,version:d}=a,m=t.sidebar,u=m?a.docsSidebars[m]:void 0,[h,E]=(0,n.useState)(!1),[f,A]=(0,n.useState)(!1),g=(0,n.useCallback)((()=>{f&&A(!1),E(!h)}),[f]);return n.createElement(c.A,{wrapperClassName:i.GN.wrapper.docsPages,pageClassName:i.GN.page.docsDocPage,searchMetadatas:{version:d,tag:(0,i.tU)(s,d)}},n.createElement("div",{className:K.docPage},n.createElement(q,null),u&&n.createElement("aside",{className:(0,r.A)(K.docSidebarContainer,{[K.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(K.docSidebarContainer)&&h&&A(!0)}},n.createElement(G,{key:m,sidebar:u,path:t.path,onCollapse:g,isHidden:f}),f&&n.createElement("div",{className:K.collapsedDocSidebar,title:(0,b.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:g,onClick:g},n.createElement(p,{className:K.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.A)(K.docMainContainer,{[K.docMainContainerEnhanced]:h||!u})},n.createElement("div",{className:(0,r.A)("container padding-top--md padding-bottom--lg",K.docItemWrapper,{[K.docItemWrapperEnhanced]:h})},n.createElement(l.xA,{components:W.A},o)))))}const J=function(e){const{route:{routes:t},versionMetadata:a,location:l}=e,c=t.find((e=>(0,z.B6)(l.pathname,e)));return c?n.createElement(n.Fragment,null,n.createElement(U.A,null,n.createElement("html",{className:a.className})),n.createElement(Z,{currentDocRoute:c,versionMetadata:a},(0,o.A)(t,{versionMetadata:a}))):n.createElement(R.default,e)}},9090:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(6540),l=a(467),o=a(4798);const c=function(){return n.createElement(l.A,{title:(0,o.T)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);