"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1611],{2736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const l={title:"Log - Sprint 4 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-4",tags:["log","sprint"]},o=void 0,r={permalink:"/solution-filenet-aws/blog/flight-log-4",editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/edit/main/flight-logs/2023-05-25-cocreate.md",source:"@site/flight-logs/2023-05-25-cocreate.md",title:"Log - Sprint 4 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2023-05-25T00:00:00.000Z",formattedDate:"May 25, 2023",tags:[{label:"log",permalink:"/solution-filenet-aws/blog/tags/log"},{label:"sprint",permalink:"/solution-filenet-aws/blog/tags/sprint"}],readingTime:1.255,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 4 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-4",tags:["log","sprint"]},unlisted:!1,prevItem:{title:"Log - Sprint 5 \ud83d\udeeb",permalink:"/solution-filenet-aws/blog/flight-log-5"},nextItem:{title:"Log - Sprint 3 \ud83d\udeeb",permalink:"/solution-filenet-aws/blog/flight-log-3"}},a={authorsImageUrls:[]},c=[{value:"Date",id:"date",level:2},{value:"Key Accomplishments",id:"key-accomplishments",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Action Items",id:"action-items",level:2},{value:"Tracking",id:"tracking",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"date",children:"Date"}),"\n",(0,i.jsx)(n.p,{children:"Flight Logs contain information relating to steps completed between 05/22/23 - 05/26/23"}),"\n",(0,i.jsx)(n.h2,{id:"key-accomplishments",children:"Key Accomplishments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Redesigned our openldap implementation to take the following into account:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CPE is happier with an openldap implementation that seems like IBM TDS."}),"\n",(0,i.jsx)(n.li,{children:"Added annotations to the CR to reflect a TDS installation despite still being an openldap deployment"}),"\n",(0,i.jsx)(n.li,{children:"Removed any stateful storage from the Openldap deployment"}),"\n",(0,i.jsxs)(n.li,{children:["Added a schema ldif to add specific TDS annotations to the users ldif and updated documentation to reflect those changes - ",(0,i.jsx)(n.a,{href:"https://github.com/ibm-client-engineering/solution-filenet-aws/pull/13",children:"PR#13"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Updated the ",(0,i.jsx)(n.code,{children:"ibm-fncm-secret"})," with the correct user (cpadmin vs ldap_admin) in customer environment."]}),"\n",(0,i.jsxs)(n.li,{children:["Successfully boostrapped CPE in the customer environment by deleting the previous ",(0,i.jsx)(n.code,{children:"fncmcluster"})," and re-applying the CR."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"challenges",children:"Challenges"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Resource restrictions were rearing their ugly head when changes were made to the CR and applied. Apparently the behavior of the when pods need to be redeployed is to actually deploy the new pods and then terminate the old ones once the new ones were up. This was causing violations of the resource quotas."}),"\n",(0,i.jsxs)(n.li,{children:["Ingress still appears to be broken in both our reference environment and the customer environment. Still tracking this in ",(0,i.jsx)(n.a,{href:"https://www.ibm.com/mysupport/s/case/5003p00002iwdgWAAQ/filenet-container-deployment-to-eks",children:"TS013093278"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"action-items",children:"Action Items"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Continue working with development to solve the ingress issue."}),"\n",(0,i.jsx)(n.li,{children:"They are sending our error logs and events to web sphere team to see if they can find the root cause of these errors"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tracking",children:"Tracking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.ibm.com/mysupport/s/case/5003p00002iwdgWAAQ/filenet-container-deployment-to-eks",children:"TS013093278"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://zenhub.ibm.com/workspaces/st5-action-information-center-64343620d0cfd0000f03a114/issues/ibm-client-engineering/solution-filenet-aws/8",children:"ibm-client-engineering/solution-filenet-aws#8"})}),"\n",(0,i.jsx)(n.li,{children:"Flight log was added by PR 5/30/2023"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(7294);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);