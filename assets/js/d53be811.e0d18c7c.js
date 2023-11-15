"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8925],{2866:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=n(5893),t=n(1151);const l={id:"solution-filenet-workflow",sidebar_position:1,title:"Workflows"},c=void 0,r={id:"Create/use-cases/solution-filenet-workflow",title:"Workflows",description:"FileNet Workflows",source:"@site/docs/3-Create/use-cases/filenet_workflow.mdx",sourceDirName:"3-Create/use-cases",slug:"/Create/use-cases/solution-filenet-workflow",permalink:"/Create/use-cases/solution-filenet-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/3-Create/use-cases/filenet_workflow.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"solution-filenet-workflow",sidebar_position:1,title:"Workflows"},sidebar:"tutorialSidebar",previous:{title:"Use Cases",permalink:"/category/use-cases"},next:{title:"Content Replication",permalink:"/Create/use-cases/solution-filenet-async-replication"}},o={},a=[{value:"FileNet Workflows",id:"filenet-workflows",level:2},{value:"Setup Components",id:"setup-components",level:2},{value:"Standalone Process Designer",id:"standalone-process-designer",level:3},{value:"Version info",id:"version-info",level:4},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Setup Steps",id:"setup-steps",level:4},{value:"Creating a Workflow System and Connection Point within Filenet",id:"creating-a-workflow-system-and-connection-point-within-filenet",level:5},{value:"SSL Configuration (adding the site certificate into the jre keystore)",id:"ssl-configuration-adding-the-site-certificate-into-the-jre-keystore",level:5},{value:"Configuring and Launching the Process Designer",id:"configuring-and-launching-the-process-designer",level:5},{value:"Enabling Workflow Tab on Content Navigator",id:"enabling-workflow-tab-on-content-navigator",level:3},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Configuration Steps",id:"configuration-steps",level:4},{value:"Creating Workflows",id:"creating-workflows",level:2},{value:"Claim Filing &amp; Processing",id:"claim-filing--processing",level:3},{value:"Using Web Services",id:"using-web-services",level:3},{value:"Initiating Attachments",id:"initiating-attachments",level:3},{value:"Creating a Subclass (optional)",id:"creating-a-subclass-optional",level:4},{value:"Creating the Subscription",id:"creating-the-subscription",level:4},{value:"Workflow Init Attachment",id:"workflow-init-attachment",level:4}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"filenet-workflows",children:"FileNet Workflows"}),"\n",(0,s.jsx)(i.h2,{id:"setup-components",children:"Setup Components"}),"\n",(0,s.jsx)(i.h3,{id:"standalone-process-designer",children:"Standalone Process Designer"}),"\n",(0,s.jsx)(i.h4,{id:"version-info",children:"Version info"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"IBM Content Platform Engine - 5.5.11.0"}),"\n",(0,s.jsx)(i.li,{children:"IBM Content Navigator 3.0.14"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A ",(0,s.jsx)(i.a,{href:"https://www.java.com/en/download/",children:"Java Runtime Environment"})," (JRE 1.8 or newer)"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.ibm.com/docs/en/b2b-integrator/6.0.2?topic=installation-setting-java-variables",children:"Add Java to PATH"})}),"\n",(0,s.jsxs)(i.li,{children:["Install the Filenet Content Manager CPE tools package from IBM Passport Advantage using the part number ",(0,s.jsx)(i.code,{children:"M0CTDML"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"setup-steps",children:"Setup Steps"}),"\n",(0,s.jsx)(i.h5,{id:"creating-a-workflow-system-and-connection-point-within-filenet",children:"Creating a Workflow System and Connection Point within Filenet"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Open up and log into the acce console."}),"\n",(0,s.jsx)(i.li,{children:"Open the Object Store in which you want to store Workflow data."}),"\n",(0,s.jsxs)(i.li,{children:["Click on ",(0,s.jsx)(i.em,{children:"Administrative->Workflow"})," System."]}),"\n",(0,s.jsx)(i.li,{children:"Click New."}),"\n",(0,s.jsxs)(i.li,{children:["Under ",(0,s.jsx)(i.em,{children:"Table Spaces -> Data"}),", enter the tablespace where you want workflow files to be stored. \u2003\u2003 ",(0,s.jsxs)(i.em,{children:["Note: see ",(0,s.jsx)(i.a,{href:"https://ibm-client-engineering.github.io/solution-filenet-aws/Create/solution-deploy/#create-databases",children:"Create Databases"})," for the tablespaces configuration, including their names."]})]}),"\n",(0,s.jsxs)(i.li,{children:["Under ",(0,s.jsx)(i.em,{children:"Workflow System Security Groups -> Administration Group"}),", enter the admin group you want to assign to the Workflow System. These two can be found in your filenet configuration within the CR. \u2003\u2003 ",(0,s.jsxs)(i.em,{children:["Note: see ",(0,s.jsx)(i.a,{href:"https://ibm-client-engineering.github.io/solution-filenet-aws/Create/solution-deploy/#deploying-cr",children:"Deploying CR"}),". The admin group is specified under"]})," ",(0,s.jsx)(i.code,{children:"initialize_configuration: ic_ldap_admins_groups_name"})," in the CR."]}),"\n",(0,s.jsxs)(i.li,{children:["Continue through the steps, adding Connection Point and Isolated Region names and enter the ",(0,s.jsx)(i.em,{children:"Isolated Region Number"})," (1 if it\u2019s your first in this object store, and so on)."]}),"\n",(0,s.jsxs)(i.li,{children:["If you wish, you can ",(0,s.jsx)(i.em,{children:"Specify Isolated Region Table Space (Optional)"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Review all the details and click ",(0,s.jsx)(i.em,{children:"Finish"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Navigate to ",(0,s.jsx)(i.em,{children:"Workflow System->Connection Points"})," to confirm that it was successfully created:"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/9fa61a24-ae0d-4cf1-8b49-ca529857c829",alt:""})}),"\n",(0,s.jsx)(i.h5,{id:"ssl-configuration-adding-the-site-certificate-into-the-jre-keystore",children:"SSL Configuration (adding the site certificate into the jre keystore)"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Launch ",(0,s.jsx)(i.a,{href:"https://www.google.com/chrome/",children:"Google Chrome"})]}),"\n",(0,s.jsx)(i.li,{children:"Navigate to the ACCE console"}),"\n",(0,s.jsx)(i.li,{children:"Click on the following-"}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.em,{children:"Lock Icon"})," on the left side of the url:"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/dfb9f7d5-12b9-42ee-8ced-376e2772ac48",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Connection is secure"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/e0855502-5992-4a16-9e66-e061f298a4e6",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Certificate is valid"}),", ",(0,s.jsx)(i.em,{children:"Details"})," and then ",(0,s.jsx)(i.em,{children:"Export..."}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/857a7863-5d60-4822-acea-b7d111065669",alt:""})}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsxs)(i.li,{children:["Export ",(0,s.jsx)(i.strong,{children:"full certificate chain"})," (usually the second option in Save as) and ",(0,s.jsx)(i.strong,{children:"change extension to .crt"})," instead of .cert:"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/0b848a56-7cd9-43bb-b44c-32dc49fe35b5",alt:""})}),"\n",(0,s.jsxs)(i.ol,{start:"5",children:["\n",(0,s.jsx)(i.li,{children:"Run the appropriate command to import it into your JRE keystore (keystore tool is found in the JAVA HOME directory under the bin folder)"}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Windows:\n",(0,s.jsx)(i.code,{children:"..\\..\\bin\\keytool -import -keystore ..\\..\\lib\\security\\cacerts -file cpe_websphere_ssl_cert.crt"})]}),"\n",(0,s.jsxs)(i.li,{children:["Mac/Linux:\n",(0,s.jsx)(i.code,{children:"../../bin/keytool -import -keystore ../../lib/security/cacerts -file cpe_websphere_ssl_cert.crt"})]}),"\n"]}),"\n",(0,s.jsxs)(i.ol,{start:"6",children:["\n",(0,s.jsxs)(i.li,{children:["When prompted with ",(0,s.jsx)(i.em,{children:"Trust this certificate? [no]"}),", respond with ",(0,s.jsx)(i.em,{children:"yes"})]}),"\n",(0,s.jsxs)(i.li,{children:["You should see an ",(0,s.jsx)(i.code,{children:"added to keystore"})," message"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Note:"}),"\nIf you are importing a key again, you may encounter the following error: \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\n",(0,s.jsx)(i.code,{children:"keytool error: java.lang.Exception: Certificate not imported, alias <mykey> already exists"})]}),"\n",(0,s.jsxs)(i.p,{children:["In which case you must delete the old key before importing the new one. Do so by running the following command with administrator priviledges (On Windows, run cmd as an Administrator. On Mac/Linux prepend ",(0,s.jsx)(i.code,{children:"sudo"})," to the following command):"]}),"\n",(0,s.jsx)(i.p,{children:"keytool -delete -keystore ../lib/security/cacerts -alias mykey"}),"\n",(0,s.jsx)(i.h5,{id:"configuring-and-launching-the-process-designer",children:"Configuring and Launching the Process Designer"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Unzip the Process Designer zip file and all zip files within it for your platform. Beware that on Windows, unzipping the folders leads to a slightly different folder structure by default- there will be two peclient folders, one inside another. This can be 'fixed' by moving the one with the content into its parent."}),"\n",(0,s.jsxs)(i.li,{children:["Navigate to: ",(0,s.jsx)(i.code,{children:"<unzipped_folder>/cpetools-<platform>/peclient/"})]}),"\n",(0,s.jsx)(i.li,{children:"Open this folder in any text editor or IDE (ex. code .)."}),"\n",(0,s.jsx)(i.li,{children:"Open:"}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"shell/cpetoolenv.sh"})," (Linux/Mac)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"batch/cpetoolenv.bat"})," (Windows)"]}),"\n"]}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsxs)(i.li,{children:["Set the ",(0,s.jsx)(i.code,{children:"PE_CLIENT_INSTALL_DIR"})," to the full path of the ",(0,s.jsx)(i.code,{children:"cpe_tools-<platform>"})," directory, i.e., ",(0,s.jsx)(i.code,{children:"/Users/\u2026/<unzipped_folder>/cpetools-linux"}),", beware of any spaces in the folder path."]}),"\n",(0,s.jsxs)(i.li,{children:["Open ",(0,s.jsx)(i.code,{children:"config/WcmApiConfig.properties"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Set the ",(0,s.jsx)(i.code,{children:"RemoteServerUrl"})]}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If you access the acce console at ",(0,s.jsx)(i.code,{children:"<host_link>/acce/"}),", then confirm you can access the ping page at ",(0,s.jsx)(i.code,{children:"<host_link>/peengine/IOR/ping"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/b287ddce-8d76-44a8-a848-b01e06184755",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If you can get to this page, then your ",(0,s.jsx)(i.code,{children:"RemoteServerUrl"})," is likely to be ",(0,s.jsx)(i.code,{children:"<host_link>/wsi/FNCEWS40TOM"}),". Check that you can also reach this page. If successful, it should display an xml document like so:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/ff515d36-8ec7-4c9f-b7c9-0a3bcbf02907",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.ol,{start:"7",children:["\n",(0,s.jsx)(i.li,{children:"Open a command line utility (i.e., Terminal [Mac], cmd [Windows])."}),"\n",(0,s.jsx)(i.li,{children:"Navigate (cd) to:"}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Windows: ",(0,s.jsx)(i.code,{children:"<unzipped_folder>/cpetools-win/peclient/batch"})]}),"\n",(0,s.jsxs)(i.li,{children:["Mac/Linux: ",(0,s.jsx)(i.code,{children:"<unzipped_folder>/cpetools-linux/peclient/shell"})]}),"\n"]}),"\n",(0,s.jsxs)(i.ol,{start:"9",children:["\n",(0,s.jsx)(i.li,{children:"Run:"}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Windows: ",(0,s.jsx)(i.code,{children:"pedesigner.bat <connection_point>"})]}),"\n",(0,s.jsxs)(i.li,{children:["Mac/Linux: ",(0,s.jsx)(i.code,{children:"sh ./pedesigner.sh <connection_point>"})]}),"\n"]}),"\n",(0,s.jsxs)(i.ol,{start:"10",children:["\n",(0,s.jsx)(i.li,{children:"Enter credentials used to login to the ACCE console."}),"\n",(0,s.jsx)(i.li,{children:"Process Designer should open up!"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"enabling-workflow-tab-on-content-navigator",children:"Enabling Workflow Tab on Content Navigator"}),"\n",(0,s.jsx)(i.h4,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Workflow system and connection point have been created via the acce console in Object Store X (OSX)"}),"\n",(0,s.jsx)(i.li,{children:"A repository has been setup within the Navigator"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"configuration-steps",children:"Configuration Steps"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Open the Navigator"}),"\n",(0,s.jsxs)(i.li,{children:["Navigate to ",(0,s.jsx)(i.em,{children:"Administration->Repositories->OSX"})," (double click)"]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.em,{children:"Connect"}),"\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/7ed9e621-9c62-44b4-a3cb-38db5f11db1e",alt:""})]}),"\n",(0,s.jsxs)(i.li,{children:["Navigate to ",(0,s.jsx)(i.em,{children:"Configuration Parameters -> Workflow Connection Point -> WF_CON_POINT_NAME"})," (for this repo we want to use this connection point):\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/fb8d266a-371d-4fa4-acc8-938aaf006a46",alt:""})]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.em,{children:"Save and Close"})]}),"\n",(0,s.jsxs)(i.li,{children:["Navigate to ",(0,s.jsx)(i.em,{children:"Administration->Desktops->icn_desktop"})," (default one)"]}),"\n",(0,s.jsxs)(i.li,{children:["Double check that the default repo matches OSX:\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/4f2616a6-7c3c-4c5b-aae6-6ec358a484c9",alt:""})]}),"\n",(0,s.jsxs)(i.li,{children:["Navigate to ",(0,s.jsx)(i.em,{children:"Layout->Check Work"}),":\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/2376c113-0a9c-4f91-8380-5c0e2180e6de",alt:""})]}),"\n",(0,s.jsxs)(i.li,{children:["Navigate to ",(0,s.jsx)(i.em,{children:"Workflows->Select OSX repo under Repository"}),":\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/b6de3c23-f814-44a1-88c5-dcee6bc45e5f",alt:""})]}),"\n",(0,s.jsxs)(i.li,{children:["Select ApplicationSpace DefaultApplication and add it to the Selected Application Spaces:\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/01bdc0b2-7d6e-4a2c-a75c-8ab6f4dd272d",alt:""}),"\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/3cf30464-de1e-4be5-9f14-c3542e2eaee5",alt:""})]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.em,{children:"Save and Close"})," and ",(0,s.jsx)(i.em,{children:"Refresh"})]}),"\n",(0,s.jsx)(i.li,{children:"You should see the Work tab (with in-baskets, if you have created and committed them via the Process Designer):"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u2003\u2003\u2003\u2003\u2003\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/6fc830ea-081b-4442-ad41-4c0a3e311ddc",alt:""}),"\n\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\n",(0,s.jsx)(i.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/222bbe90-5145-40dd-8ddb-1062f8d78305",alt:""})]}),"\n",(0,s.jsx)(i.h2,{id:"creating-workflows",children:"Creating Workflows"}),"\n",(0,s.jsx)(i.h3,{id:"claim-filing--processing",children:"Claim Filing & Processing"}),"\n",(0,s.jsx)(i.p,{children:"The following workflow was demonstrated and then subsequently recreated and tested in Traveler's environment. It is a sample workflow for processing a claim application. We expanded on this by triggering it via a document upload using a subscription created in the acce console, which we will also mark as an initiating attachment to automatically include it in the triggered workflow (see below)."}),"\n",(0,s.jsxs)(i.p,{children:["Workflow preview:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/4465abd7-143d-4385-8050-ee2a57a91bb7",alt:""})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/0e65b54f-53bf-4f68-861b-18682b2608a7",alt:""})}),"\n",(0,s.jsx)(i.p,{children:"Workflow download:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.ibm.com/ibm-client-engineering/solution-filenet-aws/files/1242809/ClaimApplication.pep.zip",children:"ClaimApplication.pep.zip"})}),"\n",(0,s.jsx)(i.h3,{id:"using-web-services",children:"Using Web Services"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["In order to enable pasting wsdl partner links, navigate to ",(0,s.jsx)(i.em,{children:"View -> Configuration"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/db04cbaf-6cdd-439e-9310-38b6e2d594b6",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Right click on the connection point and click ",(0,s.jsx)(i.em,{children:"Properties..."}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/bb20e3ed-ad22-4927-9bac-531eec0f55e1",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Under ",(0,s.jsx)(i.em,{children:"Web Services"}),", check ",(0,s.jsx)(i.em,{children:"Enable Process Designer to enter WSDL links without browsing for Web services"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/95c4e89d-fabc-41d0-85ec-a51fe141a1b5",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Now you can paste links in ",(0,s.jsx)(i.em,{children:"Workflow Properties"})," under ",(0,s.jsx)(i.em,{children:"Web Services"})," in the ",(0,s.jsx)(i.em,{children:"Partner Links"})," section:"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/29c67c90-2903-4f98-92cb-8a3d0ad3dd26",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Next, open up the Palette Menu and check ",(0,s.jsx)(i.em,{children:"Web Services Palette"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/7a174e99-650e-4a98-8860-f368ba4eb496",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Now you can drag in ",(0,s.jsx)(i.em,{children:"Invoke"})," and select the created ",(0,s.jsx)(i.em,{children:"Partner Link"})," as well as the desired ",(0,s.jsx)(i.em,{children:"Operation"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/719a4799-369b-4e6b-b09a-ec76c3e24a78",alt:""})}),"\n",(0,s.jsxs)(i.p,{children:["Note that for web services that require SSL (ex. ",(0,s.jsx)(i.em,{children:"https://..."}),"), you must add a secret containing the certificate to the trusted_certificate_list in the CR."]}),"\n",(0,s.jsx)(i.h3,{id:"initiating-attachments",children:"Initiating Attachments"}),"\n",(0,s.jsx)(i.p,{children:"Initiating attachments are attachments to Workflows that automatically get incorporated into them on upload, via a Subscription that triggers a workflow on Document Creation."}),"\n",(0,s.jsx)(i.h4,{id:"creating-a-subclass-optional",children:"Creating a Subclass (optional)"}),"\n",(0,s.jsx)(i.p,{children:"If desired, you can create a subclass of an exisitng one to use as a more specific type. This can provide finer granularity when, for example, triggering workflows."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Within the acce console, navigte to your choice of object store, go to ",(0,s.jsx)(i.em,{children:"Classes"})," under ",(0,s.jsx)(i.em,{children:"Data Design"})," and double click on a class you would like to form a subclass for. Next, click on ",(0,s.jsx)(i.em,{children:"Actions"})," and ",(0,s.jsx)(i.em,{children:"New Class"}),":\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/6374e1f9-7a2e-46ec-9ca0-5250ffdcd8ea",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Enter a name and description:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/6a4aad75-72ae-46c0-8d5c-04c90fb04096",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.em,{children:"Finish"}),":"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/cc0ab9b9-380f-4701-91ec-387615d123f2",alt:""})}),"\n",(0,s.jsx)(i.h4,{id:"creating-the-subscription",children:"Creating the Subscription"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the acce console under your choice of object store, navigate to ",(0,s.jsx)(i.em,{children:"Events, Actions, Processes"})," and then to ",(0,s.jsx)(i.em,{children:"Subscriptions"}),":\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/a8d51fa1-55e2-4640-a5ef-68bbf59a4d1f",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.em,{children:"New"})," and enter a name and description:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/298624d4-42a4-4a91-a864-d9c9e89dc50f",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Specify the class (and optionally subclass) you would like to subscribe to:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/714ebd0f-246e-4d54-a576-56e4bcbd45c0",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Check ",(0,s.jsx)(i.em,{children:"Create a workflow subscription"})," to allow this subscription to trigger a workflow:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/e51cc792-63ef-489e-9eba-ebcdc5f723a0",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Select the events you would like to trigger the workflow. ",(0,s.jsx)(i.em,{children:"Creation"})," of a document signifies a document upload:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/e3158b7a-0eeb-43a4-b50a-76f0a48d1883",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Specify which Workflow you would like this subscription to trigger:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/e1b73b54-2bcf-48b8-b992-94dc940f5907",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Optionally map properties from the uploaded document (",(0,s.jsx)(i.em,{children:"Property name"}),") to the Workflow (",(0,s.jsx)(i.em,{children:"Data field name"}),"):\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/1c47382e-f8b2-4f32-b001-03af611448b2",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Ensure the subscription is enabled and if you would like, include subclasses:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/72fdeb48-fbf6-40d8-935f-1c4fdae3ae7c",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Review the details and click ",(0,s.jsx)(i.em,{children:"Finish"}),":"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/73330507-6e63-4524-a224-45e5cfb928ec",alt:""}),"\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/bb803613-3dd6-4134-8272-c40790343a2d",alt:""})]}),"\n",(0,s.jsx)(i.h4,{id:"workflow-init-attachment",children:"Workflow Init Attachment"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Under ",(0,s.jsx)(i.em,{children:"Workflow Properties"})," in the ",(0,s.jsx)(i.em,{children:"Attachments"})," tab, create an attachment by double clicking under the ",(0,s.jsx)(i.em,{children:"Name"})," field, typing a name and pressing Enter:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/75ca2f4b-f3f5-4aec-ab24-f5c05553aed1",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["On the right sidebar, mark this as the ",(0,s.jsx)(i.em,{children:"Initiating attachment"})," by clicking the following icon, which should then appear left of the attachment name:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/c9a35503-02b8-44c1-bec0-7da6611ba876",alt:""}),"\n\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/33d603f9-6313-4a6f-9036-10d4ad9e82e2",alt:""})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"From the palette menu, drag in a component node:"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/83dabcd3-90e6-4dbb-b881-cbce049fb45f",alt:""})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Configure this component by selecting an operation to extract information from the uploaded attachment, such as its given title, for example, which corresponds to symbolicPropName:\n",(0,s.jsx)(i.img,{src:"https://media.github.ibm.com/user/436100/files/320f420c-2c6d-454a-8203-4a55799f3edf",alt:""})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This then populates the return value, which can be used elsewhere in the Workflow as desired"})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>c});var s=n(7294);const t={},l=s.createContext(t);function c(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);