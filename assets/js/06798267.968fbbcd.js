"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3373],{2094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(5893),o=n(1151);const l={title:"Log - Sprint 3 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-3",tags:["log","sprint"]},s=void 0,r={permalink:"/blog/flight-log-3",editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/edit/main/flight-logs/2023-05-19-cocreate.md",source:"@site/flight-logs/2023-05-19-cocreate.md",title:"Log - Sprint 3 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2023-05-19T00:00:00.000Z",formattedDate:"May 19, 2023",tags:[{label:"log",permalink:"/blog/tags/log"},{label:"sprint",permalink:"/blog/tags/sprint"}],readingTime:1.165,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 3 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-3",tags:["log","sprint"]},unlisted:!1,prevItem:{title:"Log - Sprint 4 \ud83d\udeeb",permalink:"/blog/flight-log-4"},nextItem:{title:"Log - Sprint 2 \ud83d\udeeb",permalink:"/blog/flight-log-2"}},a={authorsImageUrls:[]},c=[{value:"Date",id:"date",level:2},{value:"Key Accomplishments",id:"key-accomplishments",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Action Items",id:"action-items",level:2},{value:"Up Next",id:"up-next",level:2},{value:"Tracking",id:"tracking",level:2}];function h(e){const t={h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"date",children:"Date"}),"\n",(0,i.jsx)(t.p,{children:"Flight Logs contain information relating to steps completed between 05/18 - 05/19"}),"\n",(0,i.jsx)(t.h2,{id:"key-accomplishments",children:"Key Accomplishments"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Successfully edited the configuration information within the CR. This information included fields under the sections 'shared_configuration', 'initialize_configuration', as well as the requested resources."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"challenges",children:"Challenges"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"CPE initialization failed"}),"\n",(0,i.jsx)(t.li,{children:"After applying the new CR we received errors due to something preventing the Ingress from bootstrapping acce. Whenever we would login to ACCE, we would be presented with a blank screen"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Operator deployment takes care of requesting resources for new containers. Operator deployment creates an initialization container that spins up and it does not have the ability to set up CPU and memory limits. In the future, managing resources in environment can take care of this issue."}),"\n",(0,i.jsx)(t.li,{children:"When applying the Ingress, give the route 53 DNS operator time to pick up the correct host name before trying to access it through the browser."}),"\n",(0,i.jsx)(t.li,{children:'When accessing the host, we need to create a certificate to give it a secure connection.  This will prevent any "insecure connection" connection loops.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"action-items",children:"Action Items"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Followup with engineering to allow RW root fs to allow Dynatrace to work"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"up-next",children:"Up Next"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Use the Operator to bootstrap the gcd domain and object store and then create a navigator desktop using the CR file."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"tracking",children:"Tracking"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Flight log was added by PR 5/30/2023"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const o={},l=i.createContext(o);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);