"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4649],{8360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(5893),o=n(1151);const s={title:"Log - Sprint 2 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-2",tags:["log","sprint"]},r=void 0,l={permalink:"/blog/flight-log-2",editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/edit/main/flight-logs/2023-05-09-cocreate.md",source:"@site/flight-logs/2023-05-09-cocreate.md",title:"Log - Sprint 2 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2023-05-09T00:00:00.000Z",formattedDate:"May 9, 2023",tags:[{label:"log",permalink:"/blog/tags/log"},{label:"sprint",permalink:"/blog/tags/sprint"}],readingTime:1.94,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 2 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-2",tags:["log","sprint"]},unlisted:!1,prevItem:{title:"Log - Sprint 3 \ud83d\udeeb",permalink:"/blog/flight-log-3"},nextItem:{title:"Log - Sprint 1 \ud83d\udeeb",permalink:"/blog/flight-log-1"}},a={authorsImageUrls:[]},c=[{value:"Date",id:"date",level:2},{value:"Key Accomplishments",id:"key-accomplishments",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Action Items",id:"action-items",level:2},{value:"Up Next",id:"up-next",level:2}];function h(e){const t={h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"date",children:"Date"}),"\n",(0,i.jsx)(t.p,{children:"Flight Logs contain information relating to steps completed between 05/09 - 05/12"}),"\n",(0,i.jsx)(t.h2,{id:"key-accomplishments",children:"Key Accomplishments"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Worked with engineering to fix the resource issues with the original operator build and successfully deployed operator with correct resources sizes."}),"\n",(0,i.jsx)(t.li,{children:"Successfully applied CR to point to the correct repo for navigator image after patching daemonset."}),"\n",(0,i.jsx)(t.li,{children:"Successfully got the Ingress to work and connect to the host through the browser on a secure connection."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"challenges",children:"Challenges"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This customer environment requires the resource restrictions set into any container spun up. The temporary job pod which uses the operator limit does not contain any mechanism to set these restrictions."}),"\n",(0,i.jsx)(t.li,{children:"The customer was having issues accessing the newly made Operator image, due to registry access permissions. We had to push image to a public registry with the tag trv2202 for the customer to pull and then have them push it to their own private registry."}),"\n",(0,i.jsx)(t.li,{children:"We had issues bringing the Filenet pods online after successfully getting the new Operator image in the client environment."}),"\n",(0,i.jsx)(t.li,{children:"Folder-prepare-container kept erroring out due to us implementing a readOnlyRootFilesystem and prevented Dynatrace."}),"\n",(0,i.jsx)(t.li,{children:"We had issues connecting to the host through the browser when trying to get the Ingress to work.  We thought this was due to the host name being in the wrong location in the YAML file, but it was actually due to the route 53 external DNS operator taking some time to pick everything up."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Operator deployment takes care of requesting resources for new containers. Operator deployment creates an initialization container that spins up and it does not have the ability to set up CPU and memory limits. In the future, managing resources in environment can take care of this issue."}),"\n",(0,i.jsx)(t.li,{children:"When applying the Ingress, give the route 53 DNS operator time to pick up the correct host name before trying to access it through the browser."}),"\n",(0,i.jsx)(t.li,{children:'When accessing the host, we need to create a certificate to give it a secure connection.  This will prevent any "insecure connection" connection loops.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"action-items",children:"Action Items"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Followup with engineering to allow RW root fs to allow Dynatrace to work"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"up-next",children:"Up Next"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Use the Operator to bootstrap the gcd domain and object store and then create a navigator desktop using the CR file."}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(7294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);