"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{324:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(7294);var i=t(4334),a=t(5463),s=t(3702),o=t(9107),r=t(7306),l=t(1116),c=t(7325),d=t(3672),m=t(5893);function u(e){const{nextItem:n,prevItem:t}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,m.jsx)(d.Z,{...t,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,m.jsx)(d.Z,{...n,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,o.C)(),{title:t,description:i,date:s,tags:r,authors:l,frontMatter:c}=n,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(a.d,{title:t,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var g=t(7086),f=t(9501);function v(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:a}=(0,o.C)(),{nextItem:s,prevItem:c,frontMatter:d,unlisted:h}=i,{hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:x}=d;return(0,m.jsxs)(r.Z,{sidebar:n,toc:!v&&a.length>0?(0,m.jsx)(g.Z,{toc:a,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[h&&(0,m.jsx)(f.Z,{}),(0,m.jsx)(l.Z,{children:t}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function p(e){const n=e.content;return(0,m.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(a.FG,{className:(0,i.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(n,{})})]})})}},7086:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var i=t(4334),a=t(2728);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(5893);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,i.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(a.Z,{...t,linkClassName:r,linkActiveClassName:l})})}},2728:(e,n,t)=>{t.d(n,{Z:()=>f});var i=t(7294),a=t(107);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),c=l(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(3699),u=t(5893);function h(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const g=i.memo(h);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const f=(0,a.L)(),v=c??f.tableOfContents.minHeadingLevel,p=m??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>o({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:p});return d((0,i.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:p}}),[r,l,v,p])),(0,u.jsx)(g,{toc:x,className:t,linkClassName:r,...h})}},9501:(e,n,t)=>{t.d(n,{Z:()=>h});t(7294);var i=t(4334),a=t(7325),s=t(1514),o=t(5893);function r(){return(0,o.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(s.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(3702),m=t(9114);function u(e){let{className:n}=e;return(0,o.jsx)(m.Z,{type:"caution",title:(0,o.jsx)(r,{}),className:(0,i.Z)(n,d.k.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(u,{...e})]})}},7194:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var i=t(7325),a=t(512);const s={editThisPage:"editThisPage_U9Uk"};var o=t(5893);function r(e){let{editUrl:n}=e;return(0,o.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:(0,a.Z)("ThemeClassNames.common.editThisPage",s.editThisPage),children:(0,o.jsx)(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})})}}}]);