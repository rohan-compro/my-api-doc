"use strict";(self.webpackChunkmy_api_doc=self.webpackChunkmy_api_doc||[]).push([[953],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},475:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const o={sidebar_position:2},i="Create a Document",l={unversionedId:"tutorial-basics/create-a-document",id:"tutorial-basics/create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/tutorial-basics/create-a-document.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-document",permalink:"/my-api-doc/docs/tutorial-basics/create-a-document",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/create-a-document.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/my-api-doc/docs/tutorial-basics/create-a-page"},next:{title:"Create a Blog Post",permalink:"/my-api-doc/docs/tutorial-basics/create-a-blog-post"}},s=[{value:"Create your first Doc",id:"create-your-first-doc",children:[]},{value:"Configure the Sidebar",id:"configure-the-sidebar",children:[]}],c={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"create-a-document"},"Create a Document"),(0,n.yg)("p",null,"Documents are ",(0,n.yg)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"a ",(0,n.yg)("strong",{parentName:"li"},"sidebar")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"previous/next navigation")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"versioning"))),(0,n.yg)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,n.yg)("p",null,"Create a markdown file at ",(0,n.yg)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,n.yg)("p",null,"A new document is now available at ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),(0,n.yg)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,n.yg)("p",null,"Docusaurus automatically ",(0,n.yg)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,n.yg)("inlineCode",{parentName:"p"},"docs")," folder."),(0,n.yg)("p",null,"Add metadatas to customize the sidebar label and position:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,n.yg)("p",null,"It is also possible to create your sidebar explicitly in ",(0,n.yg)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    {\n      type: 'category',\n      label: 'Tutorial',\n-     items: [...],\n+     items: ['hello'],\n    },\n  ],\n};\n")))}p.isMDXComponent=!0}}]);