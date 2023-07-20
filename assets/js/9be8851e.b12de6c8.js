"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[641],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(4137));const o={title:"Log - Sprint 8 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-8",tags:["log","sprint"]},l=void 0,a={permalink:"/solution-filenet-aws/blog/flight-log-8",editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/edit/main/flight-logs/2023-06-08-cocreate.md",source:"@site/flight-logs/2023-06-08-cocreate.md",title:"Log - Sprint 8 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"log",permalink:"/solution-filenet-aws/blog/tags/log"},{label:"sprint",permalink:"/solution-filenet-aws/blog/tags/sprint"}],readingTime:.945,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 8 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-8",tags:["log","sprint"]},prevItem:{title:"Log - Sprint 9 \ud83d\udeeb",permalink:"/solution-filenet-aws/blog/flight-log-9"},nextItem:{title:"Log - Sprint 7 \ud83d\udeeb",permalink:"/solution-filenet-aws/blog/flight-log-7"}},s={authorsImageUrls:[]},c=[{value:"Date",id:"date",level:2},{value:"Key Accomplishments",id:"key-accomplishments",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Action Items",id:"action-items",level:2},{value:"Tracking",id:"tracking",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"date"},"Date"),(0,i.kt)("p",null,"Flight Log contain information relating to steps completed on 06/08/2023"),(0,i.kt)("h2",{id:"key-accomplishments"},"Key Accomplishments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verified that we can in fact use AWS ALB to create the Ingress instead of NGINX.  This can open doors to new possible solutions.")),(0,i.kt)("h2",{id:"challenges"},"Challenges"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We followed the same procedure presented by the IBM Dev team that we tried in our last working session and then verified that the certificate was present in the keystore. We wanted to verify if adjusting the resource quotas could have messed up the process for the pod creations. This resulted in the same error."),(0,i.kt)("li",{parentName:"ul"},"We attempted to switch the Ingress over to ALB instead of NGINX.  To do this we edited the Ingress annotations in the CR and made some edits directly through the Ingress.  This also resulted in us not being able to access the ACCE URL.")),(0,i.kt)("h2",{id:"action-items"},"Action Items"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We are going back to the IBM Dev team to see if we can solve this issue through AWS ALB or NGINX.")),(0,i.kt)("h2",{id:"tracking"},"Tracking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/mysupport/s/case/5003p00002iwdgWAAQ/filenet-container-deployment-to-eks"},"TS013093278")),(0,i.kt)("li",{parentName:"ul"},"[TS013196946]"," - Another open case"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zenhub.ibm.com/workspaces/st5-action-information-center-64343620d0cfd0000f03a114/issues/ibm-client-engineering/solution-filenet-aws/8"},"ibm-client-engineering/solution-filenet-aws#8")),(0,i.kt)("li",{parentName:"ul"},"Flight log was added by PR 06-12-2023")))}g.isMDXComponent=!0}}]);