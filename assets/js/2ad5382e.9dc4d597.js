"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6611],{6741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(5893),i=t(1151);const s={id:"solution-filenet-graphql",sidebar_position:4,title:"GraphQL"},o="GraphQL",a={id:"Create/use-cases/solution-filenet-graphql",title:"GraphQL",description:"Queries and Mutations",source:"@site/docs/3-Create/use-cases/graphql.mdx",sourceDirName:"3-Create/use-cases",slug:"/Create/use-cases/solution-filenet-graphql",permalink:"/solution-filenet-aws/Create/use-cases/solution-filenet-graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/3-Create/use-cases/graphql.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"solution-filenet-graphql",sidebar_position:4,title:"GraphQL"},sidebar:"tutorialSidebar",previous:{title:"Event Actions",permalink:"/solution-filenet-aws/Create/use-cases/solution-filenet-event-actions"},next:{title:"IER",permalink:"/solution-filenet-aws/Create/use-cases/IER"}},l={},c=[{value:"Queries and Mutations",id:"queries-and-mutations",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Lambda Functions",id:"lambda-functions",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Development Flow",id:"development-flow",level:3},{value:"Example: Uploading a file from an S3 bucket to Filenet",id:"example-uploading-a-file-from-an-s3-bucket-to-filenet",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"graphql",children:"GraphQL"}),"\n",(0,r.jsx)(n.h2,{id:"queries-and-mutations",children:"Queries and Mutations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Endpoint"}),": (filenet-root-link)/content-services-graphql/graphql","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"where home link comes before /acce/ and /navigator/ for the acce console and navigator, respectively"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"XSRF Token"}),": can be found in the page source of the graphiql page","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"XSRF/CSRF stands for Cross-Site Request Forgery, the token provides protection from this"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"xsrf authentication is enabled in the CR"}),"\n",(0,r.jsx)(n.li,{children:"if using GraphiQL, this also must be enabled in the CR"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lambda-functions",children:"Lambda Functions"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Endpoint"}),"\n",(0,r.jsx)(n.li,{children:"Authorization Header (Bearer Token)"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://ibm-client-engineering.github.io/solution-watson-orchestrate/Create/solution-prepare#aws-cli-install",children:"aws cli"})," and credentials"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"development-flow",children:"Development Flow"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["If possible, test your query in the graphiql interface (",(0,r.jsx)(n.em,{children:"Note: graphiql does not support file uploads as it cannot access local files"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Test your query as a curl command"}),"\n",(0,r.jsx)(n.li,{children:"Place the curl command into a Python function, making use of the json and requests libraries"}),"\n",(0,r.jsx)(n.li,{children:"Test running the Python function locally"}),"\n",(0,r.jsx)(n.li,{children:"Modify the Python function to run as a lambda function"}),"\n",(0,r.jsx)(n.li,{children:"Install the required python libraries into the lambda python environment"}),"\n",(0,r.jsx)(n.li,{children:"Invoke the function (ensure your role is allowed to execute the lambda function and if required, access s3 buckets)"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-uploading-a-file-from-an-s3-bucket-to-filenet",children:"Example: Uploading a file from an S3 bucket to Filenet"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"curl command:"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -H \'Authorization: Basic <insert xsrf token here>\' -H \'content-type: multipart/form-data\' --verbose \'(filenet-root-link)/content-services-graphql/graphql\' -F graphql=\'{"query":"mutation ($contvar:String) { createDocument (repositoryIdentifier: \\"<insert repo name here: ex. OS01>\\" fileInFolderIdentifier: \\"/<insert filenet folder path here ex. TRAVELERS/TEST-LOAN>\\" documentProperties: {name: \\"<insert document name here>\\" contentElements:{replace: [{type: CONTENT_TRANSFER contentType: \\"<insert content type here: ex. text/plain>\\" subContentTransfer: {content:$contvar} }]}} checkinAction: {} ) { id name }}", "variables":{"contvar":null}}\' -F \'contvar=@\\"C:/path/to/file/file.extension\\"\'\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mac/Linux:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -H \'Authorization: Basic <insert xsrf token here>\' -H \'content-type: multipart/form-data\' --verbose \'(filenet-root-link)/content-services-graphql/graphql\' -F graphql=\'{"query":"mutation ($contvar:String) { createDocument (repositoryIdentifier: \\"<insert repo name here: ex. OS01>\\" fileInFolderIdentifier: \\"/<insert filenet folder path here: ex. TRAVELERS/TEST-LOAN>\\" documentProperties: {name: \\"<insert document name here>\\" contentElements:{replace: [{type: CONTENT_TRANSFER contentType: \\"<insert content type here: ex. text/plain>\\" subContentTransfer: {content:$contvar} }]}} checkinAction: {} ) { id name }}", "variables":{"contvar":null}}\' -F \'contvar=@/path/to/file/file.extension\'\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Python function:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="file_upload_local_curl_query.py"',children:'import requests\nimport json\n\nfile_mac_linux = \'/path/to/file/filename.extension\'\nfile_windows = \'C:/path/to/file/filename.extension\'\nfile = file_<platform>                                  # pick your platform\nrepo_ID = "<insert repo name here>"                     # ex. OS01\nfolder_path = "<insert folder path here>"                # ex. /TRAVELERS/TEST-LOAN\ndocument_name = "<insert document name here>"           # ex. curl upload test\ncontent_type = "<insert content type here>"             # ex. text/plain\nfilenet_home_link = "<insert filenet home link>"\nxsrf_token = "<insert xsrf token here>"\n\n# Define the GraphQL query and variables\ngraphql_query = """\nmutation ($contvar: String) {\n    createDocument (\n        repositoryIdentifier: repo_ID\n        fileInFolderIdentifier: folder_path\n        documentProperties: {\n            name: document_name\n            contentElements: {\n                replace: [{\n                    type: CONTENT_TRANSFER\n                    contentType: content_type\n                    subContentTransfer: {\n                        content: $contvar\n                    }\n                }]\n            }\n        }\n        checkinAction: {}\n    ) {\n        id\n        name\n    }\n}\n"""\n\nvariables = {"contvar": None}\n\n# Define the GraphQL endpoint URL and headers\nurl = filenet_home_link + \'/content-services-graphql/graphql\'\nheaders = {\n    \'Authorization\': \'Basic \' + xsrf_token,\n}\n\noperations = json.dumps({\n            "query": graphql_query,\n            "variables": variables\n        })\n\ndata = {\n    "operations": operations\n}\n\n# Prepare the multipart form data\nfiles = {\n    \'contvar\': (file, open(file, \'rb\'), content_type)\n}\n\n# Send the request\nresponse = requests.post(url, headers=headers, files=files, data=data)\n\n# Handle the response\nif response.status_code == 200:\n    result = response.json()\n    print(response)\n    print(response.text)\n    # Process the GraphQL response here\n\n# Handle the error\nelse:\n    print(f"Request failed with status code {response.status_code}")\n    print(response.text)\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Test this function by running ",(0,r.jsx)(n.code,{children:"python3 local_curl_query.py"})]}),"\n",(0,r.jsx)(n.li,{children:"Python function as a lambda handler:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="file_upload_lambda_handler.py"',children:'import json\nimport requests\nimport boto3\nimport os\n\nrepo_ID = "<insert repo name here>"                                 # ex. OS01\nfolder_path = "<insert folder path here>"                           # ex. /TRAVELERS/TEST-LOAN\ndocument_name = "<insert document name here>"                       # ex. curl upload test\ncontent_type = "<insert content type here>"                         # ex. text/plain\nfilenet_home_link = "<insert filenet home link>"\nxsrf_token = "<insert xsrf token here>"\ns3_bucket_name = \'<insert filenet s3 bucket name here>\'             # ex. filenet-test-bucket\nfile_from_s3_bucket = \'<insert file to download from s3 bucket>\'    # ex. IBMContentManagerDevice.txt\ntarget_file = \'/tmp/<insert filename here with .extension>\'         # ex. test.txt\n\ndef lambda_handler(event = None, context = None):\n    # Define your GraphQL query and variables\n    graphql_query = """\n    mutation ($contvar: String) {\n        createDocument (\n            repositoryIdentifier: repo_ID\n            fileInFolderIdentifier: folder_path\n            documentProperties: {\n                name: document_name\n                contentElements: {\n                    replace: [{\n                        type: CONTENT_TRANSFER\n                        contentType: content_type\n                        subContentTransfer: {\n                            content: $contvar\n                        }\n                    }]\n                }\n            }\n            checkinAction: {}\n        ) {\n            id\n            name\n        }\n    }\n    """\n    \n    variables = {"contvar": None}\n\n    # Prepare the multipart form request\n    url = filenet_home_link + \'/content-services-graphql/graphql\'\n    headers = {\n        \'Authorization\': \'Basic \' + xsrf_token,\n    }\n\n    operations = json.dumps({\n                "query": graphql_query,\n                "variables": variables\n            })\n\n    data = {\n        "operations": operations\n    }\n\n    # Upload file to Lambda\'s /tmp directory\n    s3 = boto3.client(\'s3\')\n    s3.download_file(s3_bucket_name, file_from_s3_bucket, target_file)\n\n    files = {\n        \'contvar\': (target_file, open(target_file, \'rb\'), content_type)\n    }\n\n    # Send the request\n    response = requests.post(url, headers=headers, files=files, data=data)\n\n    # Handle the response\n    if response.status_code == 200:\n        result = response.json()\n        # Process the GraphQL response here\n    else:\n        print(f"Request failed with status code {response.status_code}")\n        # Handle the error\n\n    print(response)\n    print(response.text)\n    return result\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Install required python libraries into the lambda python environment"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow these ",(0,r.jsx)(n.a,{href:"https://ibm-client-engineering.github.io/solution-watson-orchestrate/Create/solution-prepare#aws-cli-install",children:"aws cli setup steps"})," if you haven't already"]}),"\n",(0,r.jsx)(n.li,{children:"Create a role that can execute lambda functions:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-aws_cli",children:"aws iam create-role --role-name filenet-lambda-s3 --assume-role-policy-document file://permissions.json\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="permissions.json"',children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "sts:AssumeRole"\n            ],\n            "Principal": {\n                "Service": [\n                    "lambda.amazonaws.com"\n                ]\n            }\n        }\n    ]\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"give that role permission to access s3 buckets (in this example we grant permission to perform all s3 bucket actions):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-aws_cli",children:"aws iam put-role-policy --role-name filenet-lambda-s3 --policy-name s3_permissions --policy-document file://s3permissions.json\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="s3permissions.json"',children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:*"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Continue to the ",(0,r.jsx)(n.a,{href:"https://ibm-client-engineering.github.io/solution-watson-orchestrate/Create/solution-prepare#environment-setup",children:"environment setup"})," to install the ",(0,r.jsx)(n.strong,{children:"boto3"}),", ",(0,r.jsx)(n.strong,{children:"json"})," and ",(0,r.jsx)(n.strong,{children:"requests"})," libraries"]}),"\n",(0,r.jsxs)(n.li,{children:["When creating the package, replace the filename with ",(0,r.jsx)(n.strong,{children:"file_upload_lambda_handler.py"})]}),"\n",(0,r.jsxs)(n.li,{children:["Then ",(0,r.jsx)(n.a,{href:"https://ibm-client-engineering.github.io/solution-watson-orchestrate/Create/solution-prepare#aws-lambda-create-function",children:"create the aws lambda function"}),", replce the ",(0,r.jsx)(n.em,{children:"function name"}),", as well as the ",(0,r.jsx)(n.em,{children:"role"})," and ",(0,r.jsx)(n.em,{children:"zip file path"})," parameters"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Invoke the function, replacing the function name you chose in the previous step:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-aws_cli",children:"aws lambda invoke --function-name <insert function name here> out --log-type Tail --query 'LogResult' --output test | base64 -d\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Your file should now appear in filenet under the chosen directory with the given name like so:\n",(0,r.jsx)(n.img,{src:"https://zenhub.ibm.com/images/649c3ae08710884b790df62c/7c134a68-dd80-4946-a0b7-cd714f74e7ee",alt:""})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);