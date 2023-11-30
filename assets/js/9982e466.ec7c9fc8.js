"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7451],{4259:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=s(5893),t=s(1151);const a={id:"solution-stage-eks",sidebar_position:4,title:"EKS Cluster"},l=void 0,i={id:"Prepare/Stage/solution-stage-eks",title:"EKS Cluster",description:"Create AWS VPC and EKS Cluster",source:"@site/docs/2-Prepare/Stage/EKS.mdx",sourceDirName:"2-Prepare/Stage",slug:"/Prepare/Stage/solution-stage-eks",permalink:"/solution-filenet-aws/Prepare/Stage/solution-stage-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/2-Prepare/Stage/EKS.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"solution-stage-eks",sidebar_position:4,title:"EKS Cluster"},sidebar:"tutorialSidebar",previous:{title:"AWS Account and Client",permalink:"/solution-filenet-aws/Prepare/Stage/solution-stage-aws"},next:{title:"AWS RDS for Postgres",permalink:"/solution-filenet-aws/Prepare/Stage/solution-stage-rds"}},o={},c=[{value:"Create AWS VPC and EKS Cluster",id:"create-aws-vpc-and-eks-cluster",level:2},{value:"Installing or updating <code>eksctl</code>",id:"installing-or-updating-eksctl",level:3},{value:"Deploying a cluster with <code>eksctl</code>",id:"deploying-a-cluster-with-eksctl",level:3},{value:"OIDC",id:"oidc",level:3},{value:"Configure <code>kubectl</code>",id:"configure-kubectl",level:3},{value:"Installing Cluster components",id:"installing-cluster-components",level:2},{value:"Install the EKS helm repo",id:"install-the-eks-helm-repo",level:3},{value:"Install the EBS driver to the cluster",id:"install-the-ebs-driver-to-the-cluster",level:3},{value:"Enable EFS on the cluster",id:"enable-efs-on-the-cluster",level:3},{value:"Install the AWS Load Balancer Controller.",id:"install-the-aws-load-balancer-controller",level:3},{value:"Install NGINX Controller",id:"install-nginx-controller",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-aws-vpc-and-eks-cluster",children:"Create AWS VPC and EKS Cluster"}),"\n",(0,r.jsxs)(n.h3,{id:"installing-or-updating-eksctl",children:["Installing or updating ",(0,r.jsx)(n.code,{children:"eksctl"})]}),"\n",(0,r.jsx)(n.p,{children:"For this we are going to use homebrew"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"brew tap weaveworks/tap\n\nbrew install weaveworks/tap/eksctl\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"We are going to create an IAM user with admin privs to create and own this whole cluster."})}),"\n",(0,r.jsx)(n.p,{children:'In the web management UI for AWS, go to IAM settings and create a user with admin privileges but no management console access. We created a user called "K8-Admin"'}),"\n",(0,r.jsxs)(n.p,{children:["Delete or rename your ",(0,r.jsx)(n.code,{children:"~/.aws/credentials"})," file and re-run ",(0,r.jsx)(n.code,{children:"aws configure"})," with the new user's Access and secret access keys."]}),"\n",(0,r.jsxs)(n.h3,{id:"deploying-a-cluster-with-eksctl",children:["Deploying a cluster with ",(0,r.jsx)(n.code,{children:"eksctl"})]}),"\n",(0,r.jsxs)(n.p,{children:["Run the ",(0,r.jsx)(n.code,{children:"eksctl"})," command below to create your first cluster and perform the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a 6-node Kubernetes cluster named ",(0,r.jsx)(n.code,{children:"filenet-east"})," with one node type as ",(0,r.jsx)(n.code,{children:"m5.xlarge"})," and region as ",(0,r.jsx)(n.code,{children:"us-east-1"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Define a minimum of one node (",(0,r.jsx)(n.code,{children:"--nodes-min 1"}),") and a maximum of six-node (",(0,r.jsx)(n.code,{children:"--nodes-max 6"}),") for this node group managed by EKS. The node group is named ",(0,r.jsx)(n.code,{children:"standard-workers"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Create a node group with the name ",(0,r.jsx)(n.code,{children:"filenet-workers"})," and select a machine type for the ",(0,r.jsx)(n.code,{children:"filenet-workers"})," node group."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'eksctl create cluster \\\n--name filenet-east \\\n--version 1.24 \\\n--region us-east-1 \\\n--with-oidc \\\n--zones us-east-1a,us-east-1b,us-east-1c \\\n--nodegroup-name filenet-workers \\\n--node-type m5.xlarge \\\n--nodes 6 \\\n--nodes-min 1 \\\n--nodes-max 6 \\\n--tags "Product=FileNet" \\\n--managed\n'})}),"\n",(0,r.jsx)(n.h3,{id:"oidc",children:"OIDC"}),"\n",(0,r.jsxs)(n.p,{children:["Associate an IAM oidc provider with the cluster if you didn't include ",(0,r.jsx)(n.code,{children:"--with-oidc"})," above. Make sure to use the region you created the cluster in."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eksctl utils associate-iam-oidc-provider --region=us-west-1 --cluster=filenet-east --approve\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"configure-kubectl",children:["Configure ",(0,r.jsx)(n.code,{children:"kubectl"})]}),"\n",(0,r.jsxs)(n.p,{children:["Once the cluster is up, add it to your kube config. ",(0,r.jsx)(n.code,{children:"eksctl"})," will probably do this for you."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"aws eks update-kubeconfig --name filenet-east --region us-east-1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-cluster-components",children:"Installing Cluster components"}),"\n",(0,r.jsx)(n.h3,{id:"install-the-eks-helm-repo",children:"Install the EKS helm repo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"helm repo add eks https://aws.github.io/eks-charts\nhelm repo update\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-the-ebs-driver-to-the-cluster",children:"Install the EBS driver to the cluster"}),"\n",(0,r.jsx)(n.p,{children:"We install the EBS CSI driver as this gives us access to GP3 block storage."}),"\n",(0,r.jsx)(n.p,{children:"Download the example ebs iam policy"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -o iam-policy-example-ebs.json https://raw.githubusercontent.com/kubernetes-sigs/aws-ebs-csi-driver/master/docs/example-iam-policy.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create the policy. You can change  ",(0,r.jsx)(n.code,{children:"AmazonEKS_EBS_CSI_Driver_Policy"})," to a different name, but if you do, make sure to change it in later steps too."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'aws iam create-policy \\\n--policy-name AmazonEKS_EBS_CSI_Driver_Policy \\\n--policy-document file://iam-policy-example-ebs.json\n\n{\n    "Policy": {\n        "PolicyName": "AmazonEKS_EBS_CSI_Driver_Policy",\n        "PolicyId": "ANPA24LVTCGN5YOUAVX2V",\n        "Arn": "arn:aws:iam::<ACCOUNT ID>:policy/AmazonEKS_EBS_CSI_Driver_Policy",\n        "Path": "/",\n        "DefaultVersionId": "v1",\n        "AttachmentCount": 0,\n        "PermissionsBoundaryUsageCount": 0,\n        "IsAttachable": true,\n        "CreateDate": "2023-04-19T14:17:03+00:00",\n        "UpdateDate": "2023-04-19T14:17:03+00:00"\n    }\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Take note of the ",(0,r.jsx)(n.code,{children:"arn"})," entry for the policy that is returned above as you will need it below."]}),"\n",(0,r.jsx)(n.p,{children:"Create the service account"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eksctl create iamserviceaccount \\\n  --name ebs-csi-controller-sa \\\n  --namespace kube-system \\\n  --cluster filenet-east \\\n  --attach-policy-arn arn:aws:iam::<ACCOUNT ID>:policy/AmazonEKS_EBS_CSI_Driver_Policy \\\n  --approve \\\n  --role-only \\\n  --role-name AmazonEKS_EBS_CSI_DriverRole\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Take note of the ",(0,r.jsx)(n.code,{children:"arn"})," entry for the role that is returned above as you will need it below."]}),"\n",(0,r.jsx)(n.p,{children:"Create the addon for the cluster"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eksctl create addon \\\n--name aws-ebs-csi-driver \\\n--cluster filenet-east \\\n--service-account-role-arn arn:aws:iam::<ACCOUNT ID>:role/AmazonEKS_EBS_CSI_DriverRole \\\n--force\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create the following StorageClass yaml to use gp3"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"gp3-sc.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: ebs-gp3-sc\nprovisioner: ebs.csi.aws.com\nparameters:\n  type: gp3\n  fsType: ext4\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create the storage class"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f gp3-sc.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"enable-efs-on-the-cluster",children:"Enable EFS on the cluster"}),"\n",(0,r.jsxs)(n.p,{children:["By default when we create a cluster with eksctl it defines and installs ",(0,r.jsx)(n.code,{children:"gp2"})," storage class which is backed by Amazon's EBS (elastic block storage). After that we installed the EBS CSI driver to support ",(0,r.jsx)(n.code,{children:"gp3"}),". However, both ",(0,r.jsx)(n.code,{children:"gp2"})," and ",(0,r.jsx)(n.code,{children:"gp3"})," are both block storage. They will not support RWX in our cluster. We need to install an EFS storage class."]}),"\n",(0,r.jsxs)(n.p,{children:["Download the IAM policy document from GitHub. You can also view the ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/aws-efs-csi-driver/blob/master/docs/iam-policy-example.json",children:"policy document"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"curl -o iam-policy-example-efs.json https://raw.githubusercontent.com/kubernetes-sigs/aws-efs-csi-driver/master/docs/iam-policy-example.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create the policy. You can change ",(0,r.jsx)(n.code,{children:"AmazonEKS_EFS_CSI_Driver_Policy"})," to a different name, but if you do, make sure to change it in later steps too."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'aws iam create-policy \\\n--policy-name AmazonEKS_EFS_CSI_Driver_Policy \\\n--policy-document file://iam-policy-example-efs.json\n\n{\n    "Policy": {\n        "PolicyName": "AmazonEKS_EFS_CSI_Driver_Policy",\n        "PolicyId": "ANPA24LVTCGN7YGDYRWJT",\n        "Arn": "arn:aws:iam::<ACCOUNT ID>:policy/AmazonEKS_EFS_CSI_Driver_Policy",\n        "Path": "/",\n        "DefaultVersionId": "v1",\n        "AttachmentCount": 0,\n        "PermissionsBoundaryUsageCount": 0,\n        "IsAttachable": true,\n        "CreateDate": "2023-01-24T17:24:00+00:00",\n        "UpdateDate": "2023-01-24T17:24:00+00:00"\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Take note of the returned policy ",(0,r.jsx)(n.code,{children:"Arn"})," as you will need it in the next step."]}),"\n",(0,r.jsxs)(n.p,{children:["Create an IAM role and attach the IAM policy to it. Annotate the Kubernetes service account with the IAM role ARN and the IAM role with the Kubernetes service account name. You can create the role using ",(0,r.jsx)(n.code,{children:"eksctl"})," or the AWS CLI. We're going to use ",(0,r.jsx)(n.code,{children:"eksctl"}),", Also our ",(0,r.jsx)(n.code,{children:"Arn"})," is returned in the output above, so we'll use it here."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"eksctl create iamserviceaccount \\\n    --cluster filenet-east \\\n    --namespace kube-system \\\n    --name efs-csi-controller-sa \\\n    --attach-policy-arn arn:aws:iam::<ACCOUNT ID>:policy/AmazonEKS_EFS_CSI_Driver_Policy \\\n    --approve \\\n    --region us-east-1\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once created, check the iam service account is created running the following command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"eksctl get iamserviceaccount --cluster <cluster-name>\n\nNAMESPACE\tNAME\t\t\t\tROLE ARN\nkube-system\taws-load-balancer-controller\tarn:aws:iam::748107796891:role/AmazonEKSLoadBalancerControllerRole\nkube-system\tefs-csi-controller-sa\t\tarn:aws:iam::748107796891:role/eksctl-filenet-cluster-east-addon-iamserviceaccount-ku-Role1-1SCBRU1DS52QY\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we just need our add-on registry address. This can be found here: ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html",children:"https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html"})]}),"\n",(0,r.jsxs)(n.p,{children:["Let's install the driver add-on to our clusters. We're going to use ",(0,r.jsx)(n.code,{children:"helm"})," for this."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"helm repo add aws-efs-csi-driver https://kubernetes-sigs.github.io/aws-efs-csi-driver/\n\nhelm repo update\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Install a release of the driver using the Helm chart. Replace the repository address with the cluster's ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html",children:"container image address"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"helm upgrade -i aws-efs-csi-driver aws-efs-csi-driver/aws-efs-csi-driver \\\n    --namespace kube-system \\\n    --set image.repository=602401143452.dkr.ecr.us-east-1.amazonaws.com/eks/aws-efs-csi-driver \\\n    --set controller.serviceAccount.create=false \\\n    --set controller.serviceAccount.name=efs-csi-controller-sa\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we need to create the filesystem in EFS so we can use it"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export clustername=filenet-east\nexport region=us-east-1\n"})}),"\n",(0,r.jsx)(n.p,{children:"Get our VPC ID"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'vpc_id=$(aws eks describe-cluster \\\n    --name $clustername \\\n    --query "cluster.resourcesVpcConfig.vpcId" \\\n    --region $region \\\n    --output text)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Retrieve the CIDR range for your cluster's VPC and store it in a variable for use in a later step."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'cidr_range=$(aws ec2 describe-vpcs \\\n    --vpc-ids $vpc_id \\\n    --query "Vpcs[].CidrBlock" \\\n    --output text \\\n    --region $region)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Create a security group with an inbound rule that allows inbound NFS traffic for your Amazon EFS mount points."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'security_group_id=$(aws ec2 create-security-group \\\n    --group-name EFS4FileNetSecurityGroup \\\n    --description "EFS security group for Filenet Clusters" \\\n    --vpc-id $vpc_id \\\n    --region $region \\\n    --output text)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Create an inbound rule that allows inbound NFS traffic from the CIDR for your cluster's VPC."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"aws ec2 authorize-security-group-ingress \\\n    --group-id $security_group_id \\\n    --protocol tcp \\\n    --port 2049 \\\n    --region $region \\\n    --cidr $cidr_range\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a file system."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"file_system_id=$(aws efs create-file-system \\\n    --region $region \\\n    --encrypted \\\n    --performance-mode generalPurpose \\\n    --query 'FileSystemId' \\\n    --output text)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create mount targets."}),"\n",(0,r.jsx)(n.p,{children:"Determine the IDs of the subnets in your VPC and which Availability Zone the subnet is in."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"aws ec2 describe-subnets \\\n    --filters \"Name=vpc-id,Values=$vpc_id\" \\\n    --query 'Subnets[*].{SubnetId: SubnetId,AvailabilityZone: AvailabilityZone,CidrBlock: CidrBlock}' \\\n    --region $region \\\n    --output table\n"})}),"\n",(0,r.jsx)(n.p,{children:"Should output the following"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"----------------------------------------------------------------------\n|                           DescribeSubnets                          |\n+------------------+--------------------+----------------------------+\n| AvailabilityZone |     CidrBlock      |         SubnetId           |\n+------------------+--------------------+----------------------------+\n|  us-east-1a      |  192.168.96.0/19   |  subnet-0fd12c21a45619f4e  |\n|  us-east-1b      |  192.168.128.0/19  |  subnet-0025586d6737aba67  |\n|  us-east-1b      |  192.168.32.0/19   |  subnet-0a437b71592c4cf58  |\n|  us-east-1c      |  192.168.64.0/19   |  subnet-0475c77b9a7ba7d9e  |\n|  us-east-1c      |  192.168.160.0/19  |  subnet-0b1178e74f7800166  |\n|  us-east-1a      |  192.168.0.0/19    |  subnet-0db3c49d9c87a7437  |\n+------------------+--------------------+----------------------------\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add mount targets for the subnets that your nodes are in."}),"\n",(0,r.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"for subnet in $(aws ec2 describe-subnets --filters \"Name=vpc-id,Values=$vpc_id\" --query 'Subnets[*].{SubnetId: SubnetId,AvailabilityZone: AvailabilityZone,CidrBlock: CidrBlock}' --region $region --output text | awk '{print $3}') ; do aws efs create-mount-target --file-system-id $file_system_id --region $region --subnet-id $subnet --security-groups $security_group_id ; done\n"})}),"\n",(0,r.jsx)(n.p,{children:"This wraps the below command in a for loop that will iterate through your subnet ids."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"aws efs create-mount-target \\\n    --file-system-id $file_system_id \\\n    --region $region \\\n    --subnet-id <SUBNETID> \\\n    --security-groups $security_group_id\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a storage class for dynamic provisioning"}),"\n",(0,r.jsxs)(n.p,{children:["Let's get our filesystem ID if we don't already have it above. However if you ran the above steps, ",(0,r.jsx)(n.code,{children:"$file_system_id"})," should already be defined."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'aws efs describe-file-systems \\\n--query "FileSystems[*].FileSystemId" \\\n--region $region \\\n--output text\n\nfs-071439ffb7e10b67b\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Download a ",(0,r.jsx)(n.code,{children:"StorageClass"})," manifest for Amazon EFS."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"curl -o EFSStorageClass.yaml https://raw.githubusercontent.com/kubernetes-sigs/aws-efs-csi-driver/master/examples/kubernetes/dynamic_provisioning/specs/storageclass.yaml\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Update it with the storage class id"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sed -i 's/fileSystemId:.*/fileSystemId: fs-0f2f504e89fd0033f/' EFSStorageClass.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Deploy the storage class."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f EFSStorageClass.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finally, verify it's there"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"kubectl get sc\nNAME            PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nefs-sc          efs.csi.aws.com         Delete          Immediate              false                  7s\ngp2 (default)   kubernetes.io/aws-ebs   Delete          WaitForFirstConsumer   false                  13d\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-the-aws-load-balancer-controller",children:"Install the AWS Load Balancer Controller."}),"\n",(0,r.jsx)(n.p,{children:"Download an IAM policy for the AWS Load Balancer Controller that allows it to make calls to AWS APIs on your behalf."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/install/iam_policy.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create an IAM policy using the policy downloaded in the previous step."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'aws iam create-policy \\\n    --policy-name AWSLoadBalancerControllerIAMPolicy \\\n    --policy-document file://iam_policy.json\n\n{\n    "Policy": {\n        "PolicyName": "AWSLoadBalancerControllerIAMPolicy",\n        "PolicyId": "ANPA24LVTCGNV55JFAAP5",\n        "Arn": "arn:aws:iam::<ACCOUNT ID>:policy/AWSLoadBalancerControllerIAMPolicy",\n        "Path": "/",\n        "DefaultVersionId": "v1",\n        "AttachmentCount": 0,\n        "PermissionsBoundaryUsageCount": 0,\n        "IsAttachable": true,\n        "CreateDate": "2023-01-17T20:22:23+00:00",\n        "UpdateDate": "2023-01-17T20:22:23+00:00"\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Take note of the returned policy ",(0,r.jsx)(n.code,{children:"arn"})," value from the policy above as you will need it in the next step."]}),"\n",(0,r.jsxs)(n.p,{children:["Create a Kubernetes service account named ",(0,r.jsx)(n.code,{children:"aws-load-balancer-controller"})," in the ",(0,r.jsx)(n.code,{children:"kube-system"})," namespace for the AWS Load Balancer Controller and annotate the Kubernetes service account with the name of the IAM role."]}),"\n",(0,r.jsxs)(n.p,{children:["For our example, we are calling the cluster ",(0,r.jsx)(n.code,{children:"filenet-east"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"eksctl create iamserviceaccount \\\n  --cluster=filenet-east \\\n  --namespace=kube-system \\\n  --name=aws-load-balancer-controller \\\n  --role-name AmazonEKSLoadBalancerControllerRole \\\n  --attach-policy-arn=arn:aws:iam::748107796891:policy/AWSLoadBalancerControllerIAMPolicy \\\n  --approve\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now install the AWS Load Balancer Controller with helm"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm install aws-load-balancer-controller eks/aws-load-balancer-controller \\\n  -n kube-system \\\n  --set clusterName=filenet-east \\\n  --set serviceAccount.create=false \\\n  --set serviceAccount.name=aws-load-balancer-controller \n\nNAME: aws-load-balancer-controller\nLAST DEPLOYED: Tue Jan 17 15:33:50 2023\nNAMESPACE: kube-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nAWS Load Balancer controller installed!\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-nginx-controller",children:"Install NGINX Controller"}),"\n",(0,r.jsx)(n.p,{children:"Pull down the NGINX controller deployment"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"wget -O nginx-deploy.yaml https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/aws/deploy.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Modify the deployment file and add the following annotations"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'service.beta.kubernetes.io/aws-load-balancer-type: "external"\nservice.beta.kubernetes.io/aws-load-balancer-nlb-target-type: "instance"\nservice.beta.kubernetes.io/aws-load-balancer-scheme: "internet-facing"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Also search for the following configmap entry in the deployment file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'---\napiVersion: v1\ndata:\n  allow-snippet-annotations: "false"\nkind: ConfigMap\nmetadata:\n  labels:\n    app.kubernetes.io/component: controller\n    app.kubernetes.io/instance: ingress-nginx\n    app.kubernetes.io/name: ingress-nginx\n    app.kubernetes.io/part-of: ingress-nginx\n    app.kubernetes.io/version: 1.9.1\n  name: ingress-nginx-controller\n  namespace: ingress-nginx\n---\n'})}),"\n",(0,r.jsx)(n.p,{children:"We want to add the following annotations:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'allow-snippet-annotations: "true"\nenable-underscores-in-headers: "true"\nnginx.ingress.kubernetes.io/proxy-body-size: "0"\n'})}),"\n",(0,r.jsx)(n.p,{children:"So now our config map should look like this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'---\napiVersion: v1\ndata:\n  allow-snippet-annotations: "false"\nkind: ConfigMap\nmetadata:\n  annotations:\n    allow-snippet-annotations: "true"\n    enable-underscores-in-headers: "true"\n    nginx.ingress.kubernetes.io/proxy-body-size: "0" \n  labels:\n    app.kubernetes.io/component: controller\n    app.kubernetes.io/instance: ingress-nginx\n    app.kubernetes.io/name: ingress-nginx\n    app.kubernetes.io/part-of: ingress-nginx\n    app.kubernetes.io/version: 1.9.1\n  name: ingress-nginx-controller\n  namespace: ingress-nginx\n---\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now apply the deployment"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f nginx-deploy.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify the deployment"}),"\n",(0,r.jsx)(n.p,{children:"Command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get ingressclass\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plainText",children:"NAME    CONTROLLER             PARAMETERS                             AGE \nalb     ingress.k8s.aws/alb    IngressClassParams.elbv2.k8s.aws/alb   19h \nnginx   k8s.io/ingress-nginx   none                                   15h\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once created, check the iam service account is created running the following command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"eksctl get iamserviceaccount --cluster <cluster-name>\n\nNAMESPACE\tNAME\t\t\t\tROLE ARN\nkube-system\taws-load-balancer-controller\tarn:aws:iam::748107796891:role/AmazonEKSLoadBalancerControllerRole\nkube-system\tefs-csi-controller-sa\t\tarn:aws:iam::748107796891:role/eksctl-filenet-cluster-east-addon-iamserviceaccount-ku-Role1-1SCBRU1DS52QY\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we just need our add-on registry address. This can be found here: ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html",children:"https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html"})]}),"\n",(0,r.jsxs)(n.p,{children:["Let's install the driver add-on to our clusters. We're going to use ",(0,r.jsx)(n.code,{children:"helm"})," for this."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"helm repo add aws-efs-csi-driver https://kubernetes-sigs.github.io/aws-efs-csi-driver/\n\nhelm repo update\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Install a release of the driver using the Helm chart. Replace the repository address with the cluster's ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html",children:"container image address"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'helm upgrade -i aws-efs-csi-driver aws-efs-csi-driver/aws-efs-csi-driver \\\n    --namespace kube-system \\\n    --set image.repository=602401143452.dkr.ecr.us-east-1.amazonaws.com/eks/aws-efs-csi-driver \\\n    --set controller.serviceAccount.create=false \\\n    --set controller.serviceAccount.name=efs-csi-controller-sa\n\nRelease "aws-efs-csi-driver" does not exist. Installing it now.\nNAME: aws-efs-csi-driver\nLAST DEPLOYED: Tue Jan 24 12:42:42 2023\nNAMESPACE: kube-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nTo verify that aws-efs-csi-driver has started, run:\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Apply the storage class with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f StorageClass.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finally, verify it's there"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl get sc\nNAME            PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nefs-sc          efs.csi.aws.com         Delete          Immediate              false                  7s\ngp2 (default)   kubernetes.io/aws-ebs   Delete          WaitForFirstConsumer   false                  13d\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var r=s(7294);const t={},a=r.createContext(t);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);