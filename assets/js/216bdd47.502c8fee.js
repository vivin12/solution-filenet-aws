"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[224],{6870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(5893),r=n(1151);const s={},a="Staging",o={id:"Prepare/Stage/Introduction",title:"Staging",description:"In this section we will examine the pre-requisite actions that need to take place in order to prepare your environment for FileNet Content Manager.",source:"@site/docs/2-Prepare/Stage/Introduction.mdx",sourceDirName:"2-Prepare/Stage",slug:"/Prepare/Stage/Introduction",permalink:"/solution-filenet-aws/Prepare/Stage/Introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/2-Prepare/Stage/Introduction.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Learn",permalink:"/solution-filenet-aws/Prepare/learn"},next:{title:"Pre-Requisites",permalink:"/solution-filenet-aws/Prepare/Stage/solution-stage-pre-reqs"}},l={},c=[{value:"1. Pre-Requisites",id:"1-pre-requisites",level:2},{value:"2. Image Pre-Staging",id:"2-image-pre-staging",level:2},{value:"3. Account and Clients",id:"3-account-and-clients",level:2},{value:"4. EKS Cluster",id:"4-eks-cluster",level:2},{value:"5. RDS",id:"5-rds",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"staging",children:"Staging"}),"\n",(0,i.jsx)(t.p,{children:"In this section we will examine the pre-requisite actions that need to take place in order to prepare your environment for FileNet Content Manager."}),"\n",(0,i.jsxs)(t.h2,{id:"1-pre-requisites",children:["1. ",(0,i.jsx)(t.a,{href:"/Prepare/Stage/solution-stage-pre-reqs",children:"Pre-Requisites"})]}),"\n",(0,i.jsx)(t.p,{children:"This document describes the cluster sizing and software minimum requirements."}),"\n",(0,i.jsxs)(t.h2,{id:"2-image-pre-staging",children:["2. ",(0,i.jsx)(t.a,{href:"/Prepare/Stage/solution-stage-image-prep",children:"Image Pre-Staging"})]}),"\n",(0,i.jsx)(t.p,{children:"This is a purely optional pre-requisite that should only be followed if you require the FileNet Content Manager images to be pre-staged in a private repository as your environment is living on a private VPC."}),"\n",(0,i.jsxs)(t.h2,{id:"3-account-and-clients",children:["3. ",(0,i.jsx)(t.a,{href:"/Prepare/Stage/solution-stage-aws",children:"Account and Clients"})]}),"\n",(0,i.jsxs)(t.p,{children:["This walks you through the configuration of the ",(0,i.jsx)(t.code,{children:"aws-cli"})," for your local computer."]}),"\n",(0,i.jsxs)(t.h2,{id:"4-eks-cluster",children:["4. ",(0,i.jsx)(t.a,{href:"/Prepare/Stage/solution-stage-eks",children:"EKS Cluster"})]}),"\n",(0,i.jsxs)(t.p,{children:["This section will take you through deploying an EKS cluster in AWS using ",(0,i.jsx)(t.code,{children:"aws-cli"})," as well as the ",(0,i.jsx)(t.code,{children:"eksctl"})," command line utilities. It will also guide you through installing the required cluster components:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"NGINX Ingress Controller"}),"\n",(0,i.jsx)(t.li,{children:"EBS for block storage"}),"\n",(0,i.jsx)(t.li,{children:"EFS for file storage"}),"\n",(0,i.jsx)(t.li,{children:"AWS Load Balancer Controller"}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"5-rds",children:["5. ",(0,i.jsx)(t.a,{href:"/Prepare/Stage/solution-stage-rds",children:"RDS"})]}),"\n",(0,i.jsx)(t.p,{children:"This is an optional pre-requisite. In the course of our example deployment we will be describing the installation and configuration of Postgres as a pod running in your cluster. If you prefer to use the AWS managed database services, this document will take you through spinning up an RDS Postgres instance in AWS."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);