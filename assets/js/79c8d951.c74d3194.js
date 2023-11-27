"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1078],{5207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(5893),o=t(1151);const i={id:"solution-lessons",sidebar_position:1,title:"Lessons Learned"},a=void 0,r={id:"Transition/solution-lessons",title:"Lessons Learned",description:"Throughout our journey on this project, the team encountered many obstacles. This section will outline any errors, blockers, and setbacks the team faced. We will discuss how these blockers were identified and resolved.",source:"@site/docs/4-Transition/lessons.md",sourceDirName:"4-Transition",slug:"/Transition/solution-lessons",permalink:"/solution-filenet-aws/Transition/solution-lessons",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/4-Transition/lessons.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"solution-lessons",sidebar_position:1,title:"Lessons Learned"},sidebar:"tutorialSidebar",previous:{title:"Transition",permalink:"/solution-filenet-aws/category/transition"}},l={},c=[{value:"DynaTrace and FileNet",id:"dynatrace-and-filenet",level:3},{value:"The Problem",id:"the-problem",level:4},{value:"The Solution",id:"the-solution",level:4},{value:"Summary",id:"summary",level:4},{value:"Creating A Document With Content Fails and Displays A Network Error Message",id:"creating-a-document-with-content-fails-and-displays-a-network-error-message",level:3},{value:"The Problem",id:"the-problem-1",level:4},{value:"The Solution",id:"the-solution-1",level:4},{value:"Summary",id:"summary-1",level:4},{value:"IBM Content Navigator",id:"ibm-content-navigator",level:3},{value:"The Problem",id:"the-problem-2",level:4},{value:"The Solution",id:"the-solution-2",level:4},{value:"Summary",id:"summary-2",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Throughout our journey on this project, the team encountered many obstacles. This section will outline any errors, blockers, and setbacks the team faced. We will discuss how these blockers were identified and resolved."}),"\n",(0,s.jsx)(n.h3,{id:"dynatrace-and-filenet",children:"DynaTrace and FileNet"}),"\n",(0,s.jsx)(n.h4,{id:"the-problem",children:"The Problem"}),"\n",(0,s.jsx)(n.p,{children:"While setting up FileNet on EKS, one of the elements the team had to take into account was the client's use of DynaTrace. Dynatrace is a performance monitoring and application performance management (APM) solution that can be used to monitor and analyze the performance of applications and services. When Dynatrace is used in a Kubernetes environment, it typically involves deploying Dynatrace agents or components as sidecar containers or as part of your application's deployment. These agents collect data about the performance of your applications, containers, and Kubernetes infrastructure and send that data to the Dynatrace platform for analysis."}),"\n",(0,s.jsx)(n.p,{children:"During the initial setup of FileNet, the team was given a namespace that Dynatrace would be disabled in. The team was able to setup FileNet in this namespace and everything was working as intended. The FileNet containers were up and running in a healthy state for several weeks. The team was moving forward and completing use cases during this time. However, one day the team joined a session with the client and a large number of the pods were in CrashLoopBackoff."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/adcc307e-f0ea-4fda-9aa2-758d9c98e635",alt:"FileNet Lessons Learn 1.png"})}),"\n",(0,s.jsx)(n.p,{children:"The team tried all the usual troubleshooting steps like restarting the pods, scaling up and down the operator and other common troubleshooting steps. However, the crashing pods persisted and the team began to dig into the logs. After searching through several FileNet logs, the team looked through the logs of an init container associated with one of the failing pods. Here the team saw the following error:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cp: cannot open '/var/lib/dynatrace/oneagent/agent/config/deployment.conf' for reading: permission denied\ncp: cannot open '/var/lib/dynatrace/oneagent/agent/config/deploymentChangesDataBackup' for reading: permission denied\ncp: cannot access '/var/lib/dynatrace/oneagent/agent/watchdog': permission denied \n"})}),"\n",(0,s.jsx)(n.p,{children:"The team was able to find these logs using the following steps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl describe <NameOfFailingPod>\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the output there should be an 'Init Containers' section that has the name of the init container."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/56736d1a-2cd4-4edd-9eaa-579e542a58d9",alt:"FileNet Lessons Learn 2.png"})}),"\n",(0,s.jsx)(n.p,{children:"We can now view the logs using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl logs <NameOfFailingPod> -c <NameOfInitContainer>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"the-solution",children:"The Solution"}),"\n",(0,s.jsx)(n.p,{children:"Dynatrace requires write access to the filesystem of the host or container where it is running to function correctly. Dynatrace agents and components need to store data, logs, and configuration information, which typically requires write access to the filesystem. In our case, FileNet filesystem is set to read-only. The team could request the client make modifications to DynaTrace. However, these accommodations were made previously and there are no guarantees that future updates to the cluster wouldn't re-enable DynaTrace in the namespace. The easiest solution would be to allow DynaTrace read/write access to FileNet's filesystem. This would eliminate any future errors and allow the client to continue to monitor with DynaTrace."}),"\n",(0,s.jsx)(n.p,{children:"Earlier versions of FileNet have the filesystem set to read only by default. However, with the release of FileNet Version 5.5.11, FileNet deployments now have the option to set the filesystem to read/write."}),"\n",(0,s.jsx)(n.p,{children:"To accomplish this, we needed to update FileNet version 5.5.11 and then set the filesystem to read/write. For instructions on updating, please reference the upgrade section."}),"\n",(0,s.jsx)(n.p,{children:"Once FileNet is upgraded to 5.5.11, we can enable the read/write file system in the CR with the following line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"shared_configuration:\n  sc_disable_read_only_root_filesystem: true\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now that the filesystem has been set to read/write, DynaTrace will no longer crash the pods."}),"\n",(0,s.jsx)(n.h4,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"DynaTrace requires a read/wite filesystem to operate correctly. FileNet has a read-only filesystem by default. The team upgraded to FileNet version 5.5.11 that has an option to disable read-only filesystem. This fixed the crashing pods."}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-document-with-content-fails-and-displays-a-network-error-message",children:"Creating A Document With Content Fails and Displays A Network Error Message"}),"\n",(0,s.jsx)(n.h4,{id:"the-problem-1",children:"The Problem"}),"\n",(0,s.jsx)(n.p,{children:"While the team was working on use cases with the client, we ran into a blocker when trying to upload a document. When uploading a document the team was receiving the following error message:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/6cd0cd1b-291c-4983-85b0-12083f4b6ff0",alt:"FileNet Lessons Learn 3.png"})}),"\n",(0,s.jsx)(n.p,{children:"The team was able to access the Administrative Console for Content Engine (ACCE) and it appeared that the menus and other FileNet systems were working properly. After further testing, the team was able to create a document without this error occurring. The error was only presenting when creating a document that contained content. The team tried all the usual troubleshooting steps like restarting the pods, scaling up and down the operator and other common troubleshooting steps. However, the error when creating a document with content persisted and the team began to dig into the logs."}),"\n",(0,s.jsx)(n.p,{children:"Due to the nature of the error, the team suspected that this was being caused by some type of networking or ingress problem. So the team decided to do a network trace. This involves recording network logs in a web browser and refers to capturing and logging all network activity that occurs when you interact with a website or web application in the web browser. The team used Google Chrome for this network trace. The following outlines the steps for obtaining the logs used for troubleshooting:"}),"\n",(0,s.jsx)(n.p,{children:'First we need to make sure "Enable Trace Logging" is enabled on the Domain level. To do this click "P8DOMAIN" from the menu on the left side. This should bring up a "P8DOMAIN" window. Scroll through the tabs until you get to the tab "Trace Subsystem". In this tab you should see a check box titled "Enable Trace Logging". Select this box.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/acf547d6-fbfe-4bcb-a672-1a4971d74770",alt:"FileNet Lessons Learn 4.png"})}),"\n",(0,s.jsx)(n.p,{children:'In the same window, you should see "Subsystems". This lists which traces to enable for which systems.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/2b9ed02a-c0e7-4ca2-a820-c9b2c79c0f3b",alt:"FileNet Lessons Learn 5.png"})}),"\n",(0,s.jsx)(n.p,{children:"For the following subsystems, make sure you select Detail, Moderate, and Summary checkboxes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Content Storage Trace Flags"}),"\n",(0,s.jsx)(n.li,{children:"Database Trace Flags"}),"\n",(0,s.jsx)(n.li,{children:"EJB Trace Flags"}),"\n",(0,s.jsx)(n.li,{children:"Engine Trace Flags"}),"\n",(0,s.jsx)(n.li,{children:"Error Trace Flags"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Double check your selections and if they're correct, hit the save button."}),"\n",(0,s.jsx)(n.p,{children:'Now lets setup network logging in the browser. Again, we will be using Chrome for this. Inside the Chrome webpage, right click anywhere on the page. A menu will appear. Select "inspect" from the menu and this should bring up a Chrome debugging window. Select the network tab. Make sure "record network log" is off (It will appear as a grey circle when off). Also make sure "Preserve log" is unselected.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/0e96fca8-9247-4fe3-9979-5362b8046bb5",alt:"FileNet Lessons Learn 7.png"})}),"\n",(0,s.jsx)(n.p,{children:'Now hit the "Record Network Log" button again to start recording network activity (The Record Network Log will have a red square when recording). Next enable the "Preserve log" option. If done correctly Chrome should now display an empty log with "Record Network Log" and "Preserve log" enabled.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/df17983c-42ae-4759-bfdb-9346f78e8299",alt:"FileNet Lessons Learn 8.png"})}),"\n",(0,s.jsx)(n.p,{children:'Now go back to the ACCE console. We will recreate the error for the logs. So we need to create a document with content. Once we get the error message again, we can examine the Chrome debugging window again. We can turn off "Record Network Log". Scrolling through the header, there is a file with an error. Here we saw the error was "413 Payload Too Large".'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/2b397a71-3f88-4617-a85d-17fc67cd3456",alt:"FileNet Lessons Learn 9.png"})}),"\n",(0,s.jsx)(n.p,{children:'Optionally we could select the export button. This will export the logs to a file. When viewing the file we saw the same "413 Payload Too Large" error.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'...\n"response": {\n          "status": 413,\n          "statusText": "Payload Too Large",\n          "httpVersion": "http/2.0",\n...\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"So in this situation, the NGINX server was rejecting the request due to the body size exceeding the limit."}),"\n",(0,s.jsx)(n.h4,{id:"the-solution-1",children:"The Solution"}),"\n",(0,s.jsxs)(n.p,{children:["The way the team resolved this was pretty straight forward. We needed to add an annotation to the FileNet CR within EKS. We added this ",(0,s.jsx)(n.code,{children:'nginx.ingress.kubernetes.io/proxy-body-size: "0"'})," annotation to the ",(0,s.jsx)(n.code,{children:"shared_configuration"})," section of the CR."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'shared_configuration:\n  ## The deployment context as selected. \n  sc_deployment_context: FNCM\n  show_sensitive_log: true\n  no_log: false \n  sc_ingress_enable: true \n  sc_service_type: NodePort\n  sc_deployment_hostname_suffix: \n  sc_ingress_tis_secret_name: "filenet-poc-tls"\n  sc_ingress_annotations:\n  // highlight-next-line\n    - nginx.ingress.kubernetes.io/proxy-body-size: "0"\n    - nginx.ingress.kubernetes.io/affinity: cookie\n    - nginx.ingress.kubernetes.io/force-ssl-redirect: "true"\n    - nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"\n    - nginx.ingress.kubernetes.io/secure-backends: "true"\n    - nginx.ingress.kubernetes.io/session-cookie-name: route\n    - nginx.ingress.kubernetes.10/session-cookie-hash: sha1\n    - kubernetes.io/ingress.class: nginx\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"nginx.ingress.kubernetes.io/proxy-body-size"})," is set to 0, this removes they payload limit size. With this change to the CR, we were able to create documents with content successfully."]}),"\n",(0,s.jsx)(n.h4,{id:"summary-1",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:['The NGINX server was rejecting the payload with an error "413 Payload Too Large". This caused the failure when creating a document with content. The team resolved this by removing the payload limitation by adding ',(0,s.jsx)(n.code,{children:'nginx.ingress.kubernetes.io/proxy-body-size: "0"'})," annotation to the CR."]}),"\n",(0,s.jsx)(n.h3,{id:"ibm-content-navigator",children:"IBM Content Navigator"}),"\n",(0,s.jsx)(n.h4,{id:"the-problem-2",children:"The Problem"}),"\n",(0,s.jsx)(n.p,{children:"While modifying settings in the navigator, we encountered the following error:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/c026119b-3b95-4323-b2e4-279285b67e7a",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["The team proceeded to view the logs within one of the navigator pods and repeated the triggering action, following the debugging steps outlined above under ",(0,s.jsx)(n.a,{href:"http://localhost:3000/solution-filenet-aws/Transition/solution-lessons#dynatrace-and-filenet",children:"Dynatrace and Filenet"}),". We were able to find the following system error stack trace:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/930eb18f-5d12-4f66-b9af-1bc27cf2aa24",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"Thus the problem was identified as a cyrpto error within the Navigator:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"com.ibm.ecm.crypto.CipherException: Failed to encrypt\n"})}),"\n",(0,s.jsx)(n.h4,{id:"the-solution-2",children:"The Solution"}),"\n",(0,s.jsxs)(n.p,{children:["Matching our error to the one found in ",(0,s.jsx)(n.a,{href:"https://www.ibm.com/support/pages/troubleshooting-crypto-errors-ibm-content-navigator",children:"troubleshooting crypto errors in icn"}),", namely ",(0,s.jsx)(n.strong,{children:"com.ibm.ecm.crypto.CipherException: Failed to encrypt/decrypt"}),", we followed ",(0,s.jsx)(n.a,{href:"https://www.ibm.com/support/pages/node/876336",children:"the recommended steps"})," to fix the problem."]}),"\n",(0,s.jsx)(n.p,{children:"Using Chrome, we opened the developer tools:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/c56bf2b7-c127-4488-a99d-7c47ac14ef83",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"Next, we switched to the Console and ran"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# run the first and then the next\nicn.admin.keys.rotateKEK()\nicn.admin.keys.rotateDEKs()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/161bc288-a40d-4806-acb2-fd33a058badd",alt:""})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Although the Console may give warnings such as ",(0,s.jsx)(n.em,{children:"The action was canceled"}),", you will know that it was succcessful if you see the ",(0,s.jsx)(n.em,{children:"x keys were rotated"})," message at the bottom of the browser window, as can be see in the image above."]})}),"\n",(0,s.jsx)(n.p,{children:"After applying these changes, the error was gone and we instead encountered the following message indicating that the setting changes were accepted:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/7a6dbd4b-f524-43c4-88d3-83bcaaa9b4d2",alt:""})}),"\n",(0,s.jsx)(n.h4,{id:"summary-2",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["The IBM Content Navigator was blocking all setting changes. This is because either the data encryption key (DEK) was not encrypted using the current key encryption key (KEK) or the secret was not encrypted using the current DEK. This resulted in a ",(0,s.jsx)(n.code,{children:"com.ibm.ecm.crypto.CipherException: Failed to encrypt"})," error, found in the navigator logs. The team resolved this by running the ",(0,s.jsx)(n.code,{children:"icn.admin.keys.rotateKEK()"})," and ",(0,s.jsx)(n.code,{children:"icn.admin.keys.rotateDEKs()"})," commands in the browser console to rotate the keys."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(7294);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);