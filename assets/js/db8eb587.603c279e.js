"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4806],{1856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var s=t(5893),i=t(1151);const c={id:"solution-filenet-content-search-services",sidebar_position:5,title:"Content Search Services"},r="Content Search Services",l={id:"Uses/solution-filenet-content-search-services",title:"Content Search Services",description:"Adding the CONTAINS clause allows you to full-text search (to search the contents of the documents).",source:"@site/docs/4-Uses/content_search_services.mdx",sourceDirName:"4-Uses",slug:"/Uses/solution-filenet-content-search-services",permalink:"/solution-filenet-aws/Uses/solution-filenet-content-search-services",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/4-Uses/content_search_services.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"solution-filenet-content-search-services",sidebar_position:5,title:"Content Search Services"},sidebar:"tutorialSidebar",previous:{title:"IER",permalink:"/solution-filenet-aws/Uses/IER"},next:{title:"Transition",permalink:"/solution-filenet-aws/category/transition"}},o={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Upload the Sample Document",id:"upload-the-sample-document",level:2},{value:"Run the SQL Query",id:"run-the-sql-query",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"content-search-services",children:"Content Search Services"}),"\n",(0,s.jsxs)(n.p,{children:["Adding the ",(0,s.jsx)(n.em,{children:"CONTAINS"})," clause allows you to full-text search (to search the contents of the documents)."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/Create/Deploy/solution-deploy-operator#enabling-content-search-services",children:"Enable CSS"})," through the CR."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,s.jsx)(n.p,{children:"Follow the steps in the same Object Store in which CSS is enabled."})}),"\n",(0,s.jsx)(n.h2,{id:"upload-the-sample-document",children:"Upload the Sample Document"}),"\n",(0,s.jsxs)(n.p,{children:["Here we will upload ",(0,s.jsx)(n.a,{href:"https://github.ibm.com/ibm-client-engineering/solution-filenet-aws/files/1252245/doc.txt",children:"this simple text document"})," containing the word 'several' to filenet. Download it now by clicking on the link."]}),"\n",(0,s.jsx)(n.p,{children:"Open the acce console, navigate to the root folder (or folder of your choice), and create a new Document:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/559342cd-45dc-4d88-9396-c0fe55e7ec93",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["Give it a name of your choice and ensure that the ",(0,s.jsx)(n.em,{children:"With content"})," checkbox is selected:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/abae3d49-bce2-45ad-a83b-67d2009b5200",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:"Next"}),". Under ",(0,s.jsx)(n.strong,{children:"Content Elements"}),", click ",(0,s.jsx)(n.em,{children:"Add"}),", then ",(0,s.jsx)(n.em,{children:"Browse"})," and select the downloaded file:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/d2160270-596e-4ba0-b0be-a4bcbf981736",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:"Add Content"})," and ensure that the MIME type is text/plain."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/c3b21871-2598-45fd-b8bd-c9d7a0071e6f",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["Continue clicking ",(0,s.jsx)(n.em,{children:"Next"})," until you reach the ",(0,s.jsx)(n.strong,{children:"Summary"})," screen: Now, review your choices and click ",(0,s.jsx)(n.em,{children:"Finish"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/86e8219d-29db-4ddc-9526-cd626adbc9a3",alt:""})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/7b1b7bfe-57af-449b-aefb-35af14f8e188",alt:""})}),"\n",(0,s.jsx)(n.h2,{id:"run-the-sql-query",children:"Run the SQL Query"}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.em,{children:"Search"})," page:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/549ea01a-dd0c-4f6a-b7fb-3c5c66081182",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.em,{children:"New Object Store Search"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/89369fb4-d651-4dcf-bbd3-7632a25c16e7",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["Switch to the ",(0,s.jsx)(n.em,{children:"SQL View"}),". Here you will see a default query that retreives all metadata for all documents in the index area:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/c03f3f6c-2520-4ed2-bc3a-d0ecf10c6b92",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"Replace the sample query with the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SELECT d.This\nFROM Document d \nINNER JOIN ContentSearch c ON d.This = c.QueriedObject\nWHERE CONTAINS(d.*,'several')\nOPTIONS (FULLTEXTROWLIMIT 500)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and click ",(0,s.jsx)(n.em,{children:"Run"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/dff994dc-db7c-44d4-8255-b41607ee9495",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"The uploaded document appears in the search result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://media.github.ibm.com/user/436100/files/920d3400-490f-4732-a2fb-3fe707f88c1c",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"The document was found because its content contains the word 'several'."}),"\n",(0,s.jsx)(n.p,{children:"This is made possible due to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The content search services we enabled","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"index area corresponding to this object store"}),"\n",(0,s.jsx)(n.li,{children:"content based retreival"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["CONTAINS clause in the query","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"requires an INNER JOIN"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For more information on the SQL syntax, see ",(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/filenet-p8-platform/5.5.11?topic=reference-cbr-queries",children:"CBR queries"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);