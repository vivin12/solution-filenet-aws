"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4960],{8363:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(5893),i=r(1151);const s={id:"solution-deploy-ier",sidebar_position:4,title:"IBM Enterprise Records"},o=void 0,a={id:"Create/Deploy/solution-deploy-ier",title:"IBM Enterprise Records",description:"Deploy IER Operator",source:"@site/docs/3-Create/Deploy/ier.mdx",sourceDirName:"3-Create/Deploy",slug:"/Create/Deploy/solution-deploy-ier",permalink:"/Create/Deploy/solution-deploy-ier",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-filenet-aws/tree/main/packages/create-docusaurus/templates/shared/docs/3-Create/Deploy/ier.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"solution-deploy-ier",sidebar_position:4,title:"IBM Enterprise Records"},sidebar:"tutorialSidebar",previous:{title:"FileNet Operator",permalink:"/Create/Deploy/solution-deploy-operator"},next:{title:"Configure",permalink:"/category/configure"}},c={},l=[{value:"Deploy IER Operator",id:"deploy-ier-operator",level:2},{value:"Preparing our env for IER operator",id:"preparing-our-env-for-ier-operator",level:3},{value:"Create Docker Registry Secret",id:"create-docker-registry-secret",level:3},{value:"Deploying the IER operator manually",id:"deploying-the-ier-operator-manually",level:3},{value:"Deploying IER CR",id:"deploying-ier-cr",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deploy-ier-operator",children:"Deploy IER Operator"}),"\n",(0,t.jsx)(n.p,{children:"If IBM Enterprise Records is required, you should have already staged the operator per the previous instructions in Staging."}),"\n",(0,t.jsxs)(n.p,{children:["Clone the ier-samples github repo ",(0,t.jsx)(n.a,{href:"https://github.com/ibm-ecm/ier-samples",children:"https://github.com/ibm-ecm/ier-samples"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone git@github.com:ibm-ecm/ier-samples.git\n"})}),"\n",(0,t.jsx)(n.h3,{id:"preparing-our-env-for-ier-operator",children:"Preparing our env for IER operator"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The following step is only required if you did not install the FileNet operator."})}),"\n",(0,t.jsx)(n.p,{children:"Create a shared PVC"}),"\n",(0,t.jsx)(n.p,{children:"This PVC is needed for jdbc drivers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: operator-shared-pvc\n  labels:\n    app.kubernetes.io/instance: ibm-dba\n    app.kubernetes.io/managed-by: ibm-dba\n    app.kubernetes.io/name: ibm-dba\n    release: 21.0.3\nspec:\n  accessModes:\n    - ReadWriteMany\n  storageClassName: efs-sc\n  resources:\n    requests:\n      storage: 1Gi\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: cp4a-shared-log-pvc\n  labels:\n    app.kubernetes.io/instance: ibm-dba\n    app.kubernetes.io/managed-by: ibm-dba\n    app.kubernetes.io/name: ibm-dba\n    release: 21.0.3\nspec:\n  accessModes:\n    - ReadWriteMany\n  storageClassName: efs-sc\n  resources:\n    requests:\n      storage: 100Gi\n"})}),"\n",(0,t.jsx)(n.p,{children:"Apply to the cluster"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl create -f descriptors/operator-shared-pvc.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-docker-registry-secret",children:"Create Docker Registry Secret"}),"\n",(0,t.jsxs)(n.p,{children:["If your cluster does not already have this secret ",(0,t.jsx)(n.code,{children:"admin.registrykey"})," this needs to be created."]}),"\n",(0,t.jsx)(n.p,{children:"Typically this would point to the IBM Cloud Registry, but can be modified to point to private registries instead."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'imagePullSecrets:\n   name: "admin.registrykey"\n\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The secret_name must match the imagePullSecrets.name parameter in the operator custom resource definition (.yaml) file, for example, admin.registrykey."})}),"\n",(0,t.jsx)(n.p,{children:"For an external Docker registry."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl create secret docker-registry admin.registrykey \\\n--docker-server=<registry_url> \\\n--docker-username=<your_account> \\\n--docker-password=<your_password> \\\n--docker-email=iertest@ibm.com\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploying-the-ier-operator-manually",children:"Deploying the IER operator manually"}),"\n",(0,t.jsxs)(n.p,{children:["Under the ",(0,t.jsx)(n.code,{children:"ier-samples"})," repo, the following files need to be updated"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ier-samples/operator/descripters/operator.yaml"})}),"\n",(0,t.jsxs)(n.p,{children:["Modify the ",(0,t.jsx)(n.code,{children:"image"})," parameter for containers (ansible and operator) and the ",(0,t.jsx)(n.code,{children:"imagePullSecrets"})," name in ",(0,t.jsx)(n.code,{children:"descriptors/operator.yaml"})," to a valid image registry URL. The value for ",(0,t.jsx)(n.code,{children:"imagePullSecrets"})," should be the IBM Pull secret or the registry secret set for your private registry."]}),"\n",(0,t.jsx)(n.p,{children:"Also update the tag to the latest ifix level for the operator."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      containers:\n        - name: operator\n          # Replace this with the built image name\n#          image: cp.icr.io/cp/cp4a/icp4a-operator@sha256:8c88f9268d06d1f8f86b572cfd0a481758f13ea2fb67011a473a1cc4a99523ac\n          image: cp.icr.io/cp/cp4a/icp4a-operator:21.0.3-IF023\n  -    \n  -   \n  - name: operator\n       # Replace this with the built image name\n       image: "cp.icr.io/cp/cp4a/icp4a-operator:21.0.3-IF023"      \n \n imagePullSecrets:\n   - name: "admin.registrykey"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Edit the namespace spec in the ",(0,t.jsx)(n.code,{children:"service_account.yaml"})," and ",(0,t.jsx)(n.code,{children:"operator.yaml"})," files to point to your namespace."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"metadata:\n   name: ibm-cp4a-operator\n   namespace: <my-project>\n"})}),"\n",(0,t.jsx)(n.p,{children:'Accept the IER license by setting value as "accept" for ier_license parameter in operator.yaml'}),"\n",(0,t.jsx)(n.p,{children:"To deploy each file on certified Kubernetes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext-ibm",children:"kubectl apply -f ./descriptors/ibm_cp4a_crd.yaml\nkubectl apply -f ./descriptors/service_account.yaml\nkubectl apply -f ./descriptors/role.yaml\nkubectl apply -f ./descriptors/role_binding.yaml\nkubectl apply -f ./descriptors/operator.yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deploying-ier-cr",children:"Deploying IER CR"}),"\n",(0,t.jsx)(n.p,{children:"The following is an example CR for the IER operator."}),"\n",(0,t.jsx)(n.p,{children:"Make sure to set the following secret name in the CR:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"     ier_secret_name: ibm-fncm-secret\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is important if you've already installed the FileNet operator in the cluster."}),"\n",(0,t.jsx)(n.p,{children:"Also be sure to update the image repository paths to point to the correct registry if you are pre-staging the images in a private registry."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ier_cr_full.yaml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'###############################################################################\n#\n# Licensed Materials - Property of IBM\n#\n# (C) Copyright IBM Corp. 2019. All Rights Reserved.\n#\n# US Government Users Restricted Rights - Use, duplication or\n# disclosure restricted by GSA ADP Schedule Contract with IBM Corp.\n#\n###############################################################################\napiVersion: icp4a.ibm.com/v1\nkind: ICP4ACluster\nmetadata:\n  name: ier\n  labels:\n    app.kubernetes.io/instance: ibm-dba\n    app.kubernetes.io/managed-by: ibm-dba\n    app.kubernetes.io/name: ibm-dba\n    release: 5.2.1.8\nspec:\n  ## TIPS: The names of all variables in the spec field are converted to snake_case by the operator before running ansible\n  ## For example, serviceAccount in the spec becomes service_account in ansible.\n  ## It is recommended that you perform some type validation in Ansible on the variables to ensure that\n  ## your application is receiving expected input.\n  appVersion: 5.2.1.8\n  ## MUST exist, used to accept ibm license, valid value only can be "accept"\n  ibm_license: "accept"\n  ## shared configuration among all tribe\n  shared_configuration:\n    no_log: false\n    ## This is the deployment context is ier. No update it required.\n    sc_deployment_context: ier\n    sc_image_repository: cp.icr.io\n    root_ca_secret: icp4a-root-ca\n    sc_optional_components: ier\n    ## Specify the RunAsUser for the security context of the pod.  This is usually a numeric value that corresponds to a user ID.\n    sc_run_as_user:\n    ## Shared custom TLS secret which will be used to sign all external routes if defined.\n    ## If this is not defined, all external routes will be signed with `root_ca_secret`\n    external_tls_certificate_secret: "letsencrypt-filenet-east-prod-cluster-cert"\n    ## For ROKS, this is used to enable the creation of ingresses. The default value is "false", which routes will be created.\n    sc_ingress_enable: true\n    ## For ROKS Ingress, provide TLS secret name for Ingress controller.\n    sc_ingress_tls_secret_name: "letsencrypt-filenet-east-prod-cluster-cert"\n    sc_deployment_hostname_suffix: "filenet.filenet-east.frwd-labs.link"\n    storage_configuration:\n      sc_slow_file_storage_classname: "efs-sc"\n      sc_medium_file_storage_classname: "efs-sc"\n      sc_fast_file_storage_classname: "efs-sc"\n    image_pull_secrets:\n    - "admin.registrykey"\n    ## This is the deployment type and the possible values are: user, non-production, and production.\n    sc_deployment_license: User\n    ## The deployment type as selected by the user.  Possible values are: Starter and Production\n    sc_deployment_type: Production\n    ## The platform to be deployed specified by the user.  Possible values are: OCP, ROKS, and other.  This is normally populated by the User script\n    ## based on input from the user.\n    sc_deployment_platform: "other"\n   \n\n  ########################################################################\n\n  ########   IBM Enterprise Records configuration      ########\n\n  ########################################################################\n  ier_configuration:\n      arch:\n        amd64: "3 - Most preferred"\n      replica_count: 2\n     # Optional: Use an existing certificate for automatic creation of OpenShift routes.\n     # Set this key if you have an external TLS certificate. Leave this empty if you don\'t have an external TLS certificate, operator will generate one for you.\n      ier_ext_tls_secret_name:\n     ## Optional. The Certificate Authority (CA) used to sign the external TLS secret for automatic creation of OpenShift routes.\n     ## Set this key if you have a CA to sign the external TLS certificate, leave this parameter empty if you don\'t have the CA of your external TLS certificate.\n      ier_auth_ca_secret_name:\n      \n      image:\n        repository: cp.icr.io/cp/cp4a/ier/ier\n        tag: ga-5218-ier-if005\n#        tag: ga-5217-ier-if012\n        pull_policy: IfNotPresent\n      ier_secret_name: ibm-fncm-secret\n     # Logging for workloads\n      log:\n        format: json\n     # resource and autoscaling setting\n      resources:\n        requests:\n          cpu: 500m\n          memory: 512Mi\n        limits:\n          cpu: 1\n          memory: 1536Mi\n     # Horizontal Pod Autoscaler\n      auto_scaling:\n        enabled: false\n        max_replicas: 3\n        min_replicas: 1\n        target_cpu_utilization_percentage: 80\n     # IER Production setting\n      ier_production_setting:\n        license: accept\n      collectd_enable_plugin_write_graphite: false\n      run_as_user: \n     # Specify the names of existing persistent volume claims to be used by your application.\n     # Specify an empty string if you don\'t have existing persistent volume claim.\n      datavolume:\n        existing_pvc_for_ier_instance: ""\n        \n      probe:\n        readiness:\n          initial_delay_seconds: 120\n          period_seconds: 5\n          timeout_seconds: 10\n          failure_threshold: 6\n        liveness:\n          initial_delay_seconds: 600\n          period_seconds: 5\n          timeout_seconds: 5\n          failure_threshold: 6\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);