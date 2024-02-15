"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4505],{3380:(c,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>t,toc:()=>o});var r=n(5893),a=n(1151);const p={id:"solution-stage-image-prep",sidebar_position:2,title:"Image Pre-Staging"},i=void 0,t={id:"Prepare/Stage/solution-stage-image-prep",title:"Image Pre-Staging",description:"Container Image preparation",source:"@site/docs/2-Prepare/Stage/Images.mdx",sourceDirName:"2-Prepare/Stage",slug:"/Prepare/Stage/solution-stage-image-prep",permalink:"/solution-filenet-aws/Prepare/Stage/solution-stage-image-prep",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/2-Prepare/Stage/Images.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"solution-stage-image-prep",sidebar_position:2,title:"Image Pre-Staging"},sidebar:"tutorialSidebar",previous:{title:"Pre-Requisites",permalink:"/solution-filenet-aws/Prepare/Stage/solution-stage-pre-reqs"},next:{title:"AWS Account and Client",permalink:"/solution-filenet-aws/Prepare/Stage/solution-stage-aws"}},s={},o=[{value:"Container Image preparation",id:"container-image-preparation",level:2}];function d(c){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...c.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"container-image-preparation",children:"Container Image preparation"}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsx)(e.p,{children:"If there is a requirement to pre-stage the FileNet images whether in a private registry or airgapped installs, the following steps should be taken. Otherwise the images will be pulled down from the IBM Registry."})}),"\n",(0,r.jsx)(e.p,{children:"First retrieve your IBM ENTITLEMENT KEY from here"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://myibm.ibm.com/products-services/containerlibrary",children:"IBM Container Library"})}),"\n",(0,r.jsx)(e.p,{children:"On a host with docker installed:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"export ENTITLED_REGISTRY=cp.icr.io\nexport ENTITLED_REGISTRY_USER=cp\nexport ENTITLED_REGISTRY_KEY=[ENTITLEMENT KEY]\n"})}),"\n",(0,r.jsx)(e.p,{children:'Also export your private registry credentials. You will need to know the values for "LOCAL REGISTRY ADDRESS," "LOCAL REGISTRY USER," and "LOCAL REGISTRY KEY".'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"export LOCAL_REGISTRY=[LOCAL REGISTRY ADDRESS]\nexport LOCAL_REGISTRY_USER=[LOCAL REGISTRY USER]\nexport LOCAL_REGISTRY_KEY=[LOCAL REGISTRY KEY]\n"})}),"\n",(0,r.jsx)(e.p,{children:"Login to IBM Entitled Registry with Docker"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'docker login "$ENTITLED_REGISTRY" -u "$ENTITLED_REGISTRY_USER" -p "$ENTITLED_REGISTRY_KEY"\n'})}),"\n",(0,r.jsxs)(e.p,{children:["The following image list comes from the ",(0,r.jsx)(e.a,{href:"https://www.ibm.com/support/pages/filenet-p8-fix-pack-compatibility-matrices",children:"IBM FileNet P8 Fix Pack Compatibility Matrices"})]}),"\n",(0,r.jsxs)(e.admonition,{type:"note",children:[(0,r.jsx)(e.p,{children:"The following tag formats are subject to change."}),(0,r.jsx)(e.p,{children:"Last updated: 2/13/23"})]}),"\n",(0,r.jsx)(e.p,{children:"Image tag formats:"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Component"}),(0,r.jsx)(e.th,{children:"Repo Link"}),(0,r.jsx)(e.th,{children:"Tag Format"}),(0,r.jsx)(e.th,{children:"Latest Version"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cpe"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/fncm/cpe"}),(0,r.jsx)(e.td,{children:"ga-55x-p8cpe"}),(0,r.jsx)(e.td,{children:"5.5.12-0-507 (x = 12)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cpe-sso"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/fncm/cpe-sso"}),(0,r.jsx)(e.td,{children:"ga-55x-p8cpe"}),(0,r.jsx)(e.td,{children:"5.5.12-0-507 (x = 12)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"css"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/fncm/css"}),(0,r.jsx)(e.td,{children:"ga-55x-p8css"}),(0,r.jsx)(e.td,{children:"5.5.12-0-21 (x = 12)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cmis"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/fncm/cmis"}),(0,r.jsx)(e.td,{children:"ga-30x-cmis-if00x"}),(0,r.jsx)(e.td,{children:"3.0.7.0 IF004 (x x = 7 4)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"extshare"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/fncm/extshare"}),(0,r.jsx)(e.td,{children:"ga-30x-es"}),(0,r.jsx)(e.td,{children:"3.0.15.0 (x = 15)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"graphql"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/fncm/graphql"}),(0,r.jsx)(e.td,{children:"ga-55x-p8cgql"}),(0,r.jsx)(e.td,{children:"5.5.12-52 (x = 12)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"navigator"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/ban/navigator"}),(0,r.jsx)(e.td,{children:"ga-30x-icn"}),(0,r.jsx)(e.td,{children:"3.0.15.0 (x = 15)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"navigator-sso"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/ban/navigator-sso"}),(0,r.jsx)(e.td,{children:"ga-30x-icn"}),(0,r.jsx)(e.td,{children:"3.0.15.0 (x = 15)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"taskmgr"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/fncm/taskmgr"}),(0,r.jsx)(e.td,{children:"ga-30x-tm"}),(0,r.jsx)(e.td,{children:"3.0.15.0 (x = 15)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"operator-container"}),(0,r.jsx)(e.td,{children:"icr.io/cpopen/ibm-fncm-operator-container"}),(0,r.jsxs)(e.td,{children:["icp4a-content-operator",":xx",".0.x"]}),(0,r.jsx)(e.td,{children:"23.0.2 (xx x = 23 2)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ier"}),(0,r.jsx)(e.td,{children:"cp.icr.io/cp/cp4a/ier/ier"}),(0,r.jsx)(e.td,{children:"ga-52xx-IF005-ier-2302"}),(0,r.jsx)(e.td,{children:"5.2.1.8 IF005 (xx= 18)"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"On your local host with docker installed, run the following pull commands:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker pull cp.icr.io/cp/cp4a/fncm/cpe:ga-5512-p8cpe\ndocker pull cp.icr.io/cp/cp4a/fncm/cpe-sso:ga-5512-p8cpe\ndocker pull cp.icr.io/cp/cp4a/fncm/css:ga-5512-p8css\ndocker pull cp.icr.io/cp/cp4a/fncm/cmis:ga-307-cmis-if004\ndocker pull cp.icr.io/cp/cp4a/fncm/extshare:ga-3015-es\ndocker pull cp.icr.io/cp/cp4a/fncm/graphql:ga-5512-p8cgql\ndocker pull cp.icr.io/cp/cp4a/ban/navigator:ga-3015-icn\ndocker pull cp.icr.io/cp/cp4a/ban/navigator-sso:ga-3015-icn\ndocker pull cp.icr.io/cp/cp4a/fncm/taskmgr:ga-3015-tm\ndocker pull icr.io/cpopen/icp4a-content-operator:23.0.2\n"})}),"\n",(0,r.jsx)(e.p,{children:"If including the IER container, also pull that image:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker pull cp.icr.io/cp/cp4a/ier/ier:ga-5218-ier-if005\n"})}),"\n",(0,r.jsx)(e.p,{children:"Docker login to your private registry"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'docker login "$LOCAL_REGISTRY" -u "$LOCAL_REGISTRY_USER" -p "$LOCAL_REGISTRY_KEY"\n'})}),"\n",(0,r.jsx)(e.p,{children:"Let's tag the images we've pulled to be pushed to the private registry:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker tag cp.icr.io/cp/cp4a/fncm/cpe:ga-5512-p8cpe $LOCAL_REGISTRY/cp/cp4a/fncm/cpe:ga-5512-p8cpe\ndocker tag cp.icr.io/cp/cp4a/fncm/cpe:ga-5512-p8cpe-amd64 $LOCAL_REGISTRY/cp/cp4a/fncm/cpe:ga-5512-p8cpe-amd64\ndocker tag cp.icr.io/cp/cp4a/fncm/cpe-sso:ga-5512-p8cpe $LOCAL_REGISTRY/cp/cp4a/fncm/cpe-sso:ga-5512-p8cpe\ndocker tag cp.icr.io/cp/cp4a/fncm/cpe-sso:ga-5512-p8cpe-amd64 $LOCAL_REGISTRY/cp/cp4a/fncm/cpe-sso:ga-5512-p8cpe-amd64\ndocker tag cp.icr.io/cp/cp4a/fncm/css:ga-5512-p8css $LOCAL_REGISTRY/cp/cp4a/fncm/css:ga-5512-p8css\ndocker tag cp.icr.io/cp/cp4a/fncm/css:ga-5512-p8css-amd64 $LOCAL_REGISTRY/cp/cp4a/fncm/css:ga-5512-p8css-amd64\ndocker tag cp.icr.io/cp/cp4a/fncm/cmis:ga-307-cmis-if004 $LOCAL_REGISTRY/cp/cp4a/fncm/cmis:ga-307-cmis-if004\ndocker tag cp.icr.io/cp/cp4a/fncm/cmis:ga-307-cmis-if004-amd64 $LOCAL_REGISTRY/cp/cp4a/fncm/cmis:ga-307-cmis-if004-amd64\ndocker tag cp.icr.io/cp/cp4a/fncm/extshare:ga-3015-es $LOCAL_REGISTRY/cp/cp4a/fncm/extshare:ga-3015-es\ndocker tag cp.icr.io/cp/cp4a/fncm/extshare:ga-3015-es-amd64 $LOCAL_REGISTRY/cp/cp4a/fncm/extshare:ga-3015-es-amd64\ndocker tag cp.icr.io/cp/cp4a/fncm/graphql:ga-5512-p8cgql $LOCAL_REGISTRY/cp/cp4a/fncm/graphql:ga-5512-p8cgql\ndocker tag cp.icr.io/cp/cp4a/fncm/graphql:ga-5512-p8cgql-amd64 $LOCAL_REGISTRY/cp/cp4a/fncm/graphql:ga-5512-p8cgql-amd64\ndocker tag cp.icr.io/cp/cp4a/ban/navigator:ga-3015-icn $LOCAL_REGISTRY/cp/cp4a/ban/navigator:ga-3015-icn\ndocker tag cp.icr.io/cp/cp4a/ban/navigator:ga-3015-icn-amd64 $LOCAL_REGISTRY/cp/cp4a/ban/navigator:ga-3015-icn-amd64\ndocker tag cp.icr.io/cp/cp4a/ban/navigator-sso:ga-3015-icn $LOCAL_REGISTRY/cp/cp4a/ban/navigator-sso:ga-3015-icn\ndocker tag cp.icr.io/cp/cp4a/ban/navigator-sso:ga-3015-icn-amd64 $LOCAL_REGISTRY/cp/cp4a/ban/navigator-sso:ga-3015-icn-amd64\ndocker tag cp.icr.io/cp/cp4a/fncm/taskmgr:ga-3015-tm $LOCAL_REGISTRY/cp/cp4a/fncm/taskmgr:ga-3015-tm\ndocker tag cp.icr.io/cp/cp4a/fncm/taskmgr:ga-3015-tm-amd64 $LOCAL_REGISTRY/cp/cp4a/fncm/taskmgr:ga-3015-tm-amd64\ndocker tag icr.io/cpopen/icp4a-content-operator:23.0.2 $LOCAL_REGISTRY/cpopen/icp4a-content-operator:23.0.2\ndocker tag icr.io/cpopen/icp4a-content-operator:23.0.2 $LOCAL_REGISTRY/cpopen/icp4a-content-operator:23.0.2-amd64\n"})}),"\n",(0,r.jsx)(e.p,{children:"If including IER"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker tag cp.icr.io/cp/cp4a/ier/ier:ga-5218-ier-if005 $LOCAL_REGISTRY/cp/cp4a/ier/ier:ga-5218-ier-if005\n"})}),"\n",(0,r.jsx)(e.p,{children:"Now let's push the images to the local or private registry"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker push $LOCAL_REGISTRY/cp/cp4a/fncm/cpe:ga-5512-p8cpe\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/cpe:ga-5512-p8cpe-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/cpe-sso:ga-5512-p8cpe\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/cpe-sso:ga-5512-p8cpe-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/css:ga-5512-p8css\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/css:ga-5512-p8css-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/cmis:ga-307-cmis-if004\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/cmis:ga-307-cmis-if004-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/extshare:ga-3015-es\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/extshare:ga-3015-es-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/graphql:ga-5512-p8cgql\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/graphql:ga-5512-p8cgql-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/ban/navigator:ga-3015-icn\ndocker push $LOCAL_REGISTRY/cp/cp4a/ban/navigator:ga-3015-icn-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/ban/navigator-sso:ga-3015-icn\ndocker push $LOCAL_REGISTRY/cp/cp4a/ban/navigator-sso:ga-3015-icn-amd64\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/taskmgr:ga-3015-tm\ndocker push $LOCAL_REGISTRY/cp/cp4a/fncm/taskmgr:ga-3015-tm-amd64\ndocker push $LOCAL_REGISTRY/cpopen/icp4a-content-operator:23.0.2\ndocker push $LOCAL_REGISTRY/cpopen/icp4a-content-operator:23.0.2-amd64\n"})}),"\n",(0,r.jsx)(e.p,{children:"If including IER"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"docker push $LOCAL_REGISTRY/cp/cp4a/icp4a-operator:21.0.3-IF023\ndocker push $LOCAL_REGISTRY/cp/cp4a/ier/ier:ga-5218-ier-if005\n"})})]})}function l(c={}){const{wrapper:e}={...(0,a.a)(),...c.components};return e?(0,r.jsx)(e,{...c,children:(0,r.jsx)(d,{...c})}):d(c)}},1151:(c,e,n)=>{n.d(e,{Z:()=>t,a:()=>i});var r=n(7294);const a={},p=r.createContext(a);function i(c){const e=r.useContext(p);return r.useMemo((function(){return"function"==typeof c?c(e):{...e,...c}}),[e,c])}function t(c){let e;return e=c.disableParentContext?"function"==typeof c.components?c.components(a):c.components||a:i(c.components),r.createElement(p.Provider,{value:e},c.children)}}}]);