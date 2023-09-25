"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||g[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Log - Sprint 15 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-15",tags:["log","sprint"]},l=void 0,a={permalink:"/solution-filenet-aws/blog/flight-log-15",editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/edit/main/flight-logs/2023-09-20-cocreate.md",source:"@site/flight-logs/2023-09-20-cocreate.md",title:"Log - Sprint 15 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2023-09-20T00:00:00.000Z",formattedDate:"September 20, 2023",tags:[{label:"log",permalink:"/solution-filenet-aws/blog/tags/log"},{label:"sprint",permalink:"/solution-filenet-aws/blog/tags/sprint"}],readingTime:.74,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 15 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-15",tags:["log","sprint"]},prevItem:{title:"Log - Sprint 16 \ud83d\udeeb",permalink:"/solution-filenet-aws/blog/flight-log-16"},nextItem:{title:"Log - Sprint 14 \ud83d\udeeb",permalink:"/solution-filenet-aws/blog/flight-log-14"}},s={authorsImageUrls:[]},c=[{value:"Work in Progress",id:"work-in-progress",level:2},{value:"Currently Tracking",id:"currently-tracking",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Tracking",id:"tracking",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"work-in-progress"},"Work in Progress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Today the team began to walk through an installation of Process Designer in the client's environment."),(0,i.kt)("li",{parentName:"ul"},"The team ran into an error while trying to setup Process Designer in the Windows VM."),(0,i.kt)("li",{parentName:"ul"},'There were some differences in the java versions. We were using the JDK and the client had the JRE. But after setting the JAVA_HOME, it looks like Process Designer was able to locate Java. However, Process Designer gave an error that it was unable to load "main class". ')),(0,i.kt)("h2",{id:"currently-tracking"},"Currently Tracking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We opened a ticket and the team is working with support to troubleshoot this error.")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The team will continue to work on the installation of Process Designer in our next session."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zenhub.ibm.com/workspaces/st5-action-information-center-64343620d0cfd0000f03a114/issues/ibm-client-engineering/solution-filenet-aws/17"},"ibm-client-engineering/solution-filenet-aws#17")),(0,i.kt)("li",{parentName:"ul"},'This flight log is being submitted via PR "09/22/2023 Documentation"')))),(0,i.kt)("h2",{id:"tracking"},"Tracking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cases open: 1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Case TS014232963")))))}g.isMDXComponent=!0}}]);