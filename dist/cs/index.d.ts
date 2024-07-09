import { CancelComponentUpgradeRequest } from "./CancelComponentUpgrade/req";
import { CancelComponentUpgradeResponse } from "./CancelComponentUpgrade/res";
import { AttachInstancesRequest } from "./AttachInstances/req";
import { AttachInstancesResponse } from "./AttachInstances/res";
import { CancelClusterUpgradeRequest } from "./CancelClusterUpgrade/req";
import { CancelClusterUpgradeResponse } from "./CancelClusterUpgrade/res";
import { CancelWorkflowRequest } from "./CancelWorkflow/req";
import { CancelWorkflowResponse } from "./CancelWorkflow/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { CreateClusterNodePoolRequest } from "./CreateClusterNodePool/req";
import { CreateClusterNodePoolResponse } from "./CreateClusterNodePool/res";
import { CreateKubernetesTriggerRequest } from "./CreateKubernetesTrigger/req";
import { CreateKubernetesTriggerResponse } from "./CreateKubernetesTrigger/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { DeleteClusterNodepoolRequest } from "./DeleteClusterNodepool/req";
import { DeleteClusterNodepoolResponse } from "./DeleteClusterNodepool/res";
import { DeleteClusterNodesRequest } from "./DeleteClusterNodes/req";
import { DeleteClusterNodesResponse } from "./DeleteClusterNodes/res";
import { DeleteKubernetesTriggerRequest } from "./DeleteKubernetesTrigger/req";
import { DeleteKubernetesTriggerResponse } from "./DeleteKubernetesTrigger/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { DescirbeWorkflowRequest } from "./DescirbeWorkflow/req";
import { DescirbeWorkflowResponse } from "./DescirbeWorkflow/res";
import { DescribeAddonsRequest } from "./DescribeAddons/req";
import { DescribeAddonsResponse } from "./DescribeAddons/res";
import { DescribeClusterAddonUpgradeStatusRequest } from "./DescribeClusterAddonUpgradeStatus/req";
import { DescribeClusterAddonUpgradeStatusResponse } from "./DescribeClusterAddonUpgradeStatus/res";
import { DescribeClusterAddonsUpgradeStatusRequest } from "./DescribeClusterAddonsUpgradeStatus/req";
import { DescribeClusterAddonsUpgradeStatusResponse } from "./DescribeClusterAddonsUpgradeStatus/res";
import { DescribeClusterAddonsVersionRequest } from "./DescribeClusterAddonsVersion/req";
import { DescribeClusterAddonsVersionResponse } from "./DescribeClusterAddonsVersion/res";
import { DescribeClusterAttachScriptsRequest } from "./DescribeClusterAttachScripts/req";
import { DescribeClusterAttachScriptsResponse } from "./DescribeClusterAttachScripts/res";
import { DescribeClusterDetailRequest } from "./DescribeClusterDetail/req";
import { DescribeClusterDetailResponse } from "./DescribeClusterDetail/res";
import { DescribeClusterLogsRequest } from "./DescribeClusterLogs/req";
import { DescribeClusterLogsResponse } from "./DescribeClusterLogs/res";
import { DescribeClusterNodePoolDetailRequest } from "./DescribeClusterNodePoolDetail/req";
import { DescribeClusterNodePoolDetailResponse } from "./DescribeClusterNodePoolDetail/res";
import { DescribeClusterNodePoolsRequest } from "./DescribeClusterNodePools/req";
import { DescribeClusterNodePoolsResponse } from "./DescribeClusterNodePools/res";
import { DescribeClusterNodesRequest } from "./DescribeClusterNodes/req";
import { DescribeClusterNodesResponse } from "./DescribeClusterNodes/res";
import { DescribeClusterResourcesRequest } from "./DescribeClusterResources/req";
import { DescribeClusterResourcesResponse } from "./DescribeClusterResources/res";
import { DescribeClusterUserKubeconfigRequest } from "./DescribeClusterUserKubeconfig/req";
import { DescribeClusterUserKubeconfigResponse } from "./DescribeClusterUserKubeconfig/res";
import { DescribeClusterV2UserKubeconfigRequest } from "./DescribeClusterV2UserKubeconfig/req";
import { DescribeClusterV2UserKubeconfigResponse } from "./DescribeClusterV2UserKubeconfig/res";
import { DescribeClustersRequest } from "./DescribeClusters/req";
import { DescribeClustersResponse } from "./DescribeClusters/res";
import { DescribeClustersV1Request } from "./DescribeClustersV1/req";
import { DescribeClustersV1Response } from "./DescribeClustersV1/res";
import { DescribeExternalAgentRequest } from "./DescribeExternalAgent/req";
import { DescribeExternalAgentResponse } from "./DescribeExternalAgent/res";
import { DescribeKubernetesVersionMetadataRequest } from "./DescribeKubernetesVersionMetadata/req";
import { DescribeKubernetesVersionMetadataResponse } from "./DescribeKubernetesVersionMetadata/res";
import { DescribeTaskInfoRequest } from "./DescribeTaskInfo/req";
import { DescribeTaskInfoResponse } from "./DescribeTaskInfo/res";
import { DescribeTemplateAttributeRequest } from "./DescribeTemplateAttribute/req";
import { DescribeTemplateAttributeResponse } from "./DescribeTemplateAttribute/res";
import { DescribeTemplatesRequest } from "./DescribeTemplates/req";
import { DescribeTemplatesResponse } from "./DescribeTemplates/res";
import { DescribeUserQuotaRequest } from "./DescribeUserQuota/req";
import { DescribeUserQuotaResponse } from "./DescribeUserQuota/res";
import { GetUpgradeStatusRequest } from "./GetUpgradeStatus/req";
import { GetUpgradeStatusResponse } from "./GetUpgradeStatus/res";
import { GetKubernetesTriggerRequest } from "./GetKubernetesTrigger/req";
import { GetKubernetesTriggerResponse } from "./GetKubernetesTrigger/res";
import { InstallClusterAddonsRequest } from "./InstallClusterAddons/req";
import { InstallClusterAddonsResponse } from "./InstallClusterAddons/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ModifyClusterRequest } from "./ModifyCluster/req";
import { ModifyClusterResponse } from "./ModifyCluster/res";
import { ModifyClusterTagsRequest } from "./ModifyClusterTags/req";
import { ModifyClusterTagsResponse } from "./ModifyClusterTags/res";
import { ModifyClusterNodePoolRequest } from "./ModifyClusterNodePool/req";
import { ModifyClusterNodePoolResponse } from "./ModifyClusterNodePool/res";
import { PauseClusterUpgradeRequest } from "./PauseClusterUpgrade/req";
import { PauseClusterUpgradeResponse } from "./PauseClusterUpgrade/res";
import { PauseComponentUpgradeRequest } from "./PauseComponentUpgrade/req";
import { PauseComponentUpgradeResponse } from "./PauseComponentUpgrade/res";
import { RemoveWorkflowRequest } from "./RemoveWorkflow/req";
import { RemoveWorkflowResponse } from "./RemoveWorkflow/res";
import { ResumeComponentUpgradeRequest } from "./ResumeComponentUpgrade/req";
import { ResumeComponentUpgradeResponse } from "./ResumeComponentUpgrade/res";
import { ResumeUpgradeClusterRequest } from "./ResumeUpgradeCluster/req";
import { ResumeUpgradeClusterResponse } from "./ResumeUpgradeCluster/res";
import { ScaleClusterNodePoolRequest } from "./ScaleClusterNodePool/req";
import { ScaleClusterNodePoolResponse } from "./ScaleClusterNodePool/res";
import { UnInstallClusterAddonsRequest } from "./UnInstallClusterAddons/req";
import { UnInstallClusterAddonsResponse } from "./UnInstallClusterAddons/res";
import { UpdateK8sClusterUserConfigExpireRequest } from "./UpdateK8sClusterUserConfigExpire/req";
import { UpdateK8sClusterUserConfigExpireResponse } from "./UpdateK8sClusterUserConfigExpire/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { UpgradeClusterRequest } from "./UpgradeCluster/req";
import { UpgradeClusterResponse } from "./UpgradeCluster/res";
import { UpgradeClusterAddonsRequest } from "./UpgradeClusterAddons/req";
import { UpgradeClusterAddonsResponse } from "./UpgradeClusterAddons/res";
import { StartWorkflowRequest } from "./StartWorkflow/req";
import { StartWorkflowResponse } from "./StartWorkflow/res";
import { DescribeWorkflowsRequest } from "./DescribeWorkflows/req";
import { DescribeWorkflowsResponse } from "./DescribeWorkflows/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { OpenAckServiceRequest } from "./OpenAckService/req";
import { OpenAckServiceResponse } from "./OpenAckService/res";
import { DescribeUserPermissionRequest } from "./DescribeUserPermission/req";
import { DescribeUserPermissionResponse } from "./DescribeUserPermission/res";
import { GrantPermissionsRequest } from "./GrantPermissions/req";
import { GrantPermissionsResponse } from "./GrantPermissions/res";
import { MigrateClusterRequest } from "./MigrateCluster/req";
import { MigrateClusterResponse } from "./MigrateCluster/res";
import { DescribeEventsRequest } from "./DescribeEvents/req";
import { DescribeEventsResponse } from "./DescribeEvents/res";
import { StartAlertRequest } from "./StartAlert/req";
import { StartAlertResponse } from "./StartAlert/res";
import { StopAlertRequest } from "./StopAlert/req";
import { StopAlertResponse } from "./StopAlert/res";
import { UpdateContactGroupForAlertRequest } from "./UpdateContactGroupForAlert/req";
import { UpdateContactGroupForAlertResponse } from "./UpdateContactGroupForAlert/res";
import { DeleteAlertContactGroupRequest } from "./DeleteAlertContactGroup/req";
import { DeleteAlertContactGroupResponse } from "./DeleteAlertContactGroup/res";
import { DeleteAlertContactRequest } from "./DeleteAlertContact/req";
import { DeleteAlertContactResponse } from "./DeleteAlertContact/res";
import { CreateAutoscalingConfigRequest } from "./CreateAutoscalingConfig/req";
import { CreateAutoscalingConfigResponse } from "./CreateAutoscalingConfig/res";
import { CheckControlPlaneLogEnableRequest } from "./CheckControlPlaneLogEnable/req";
import { CheckControlPlaneLogEnableResponse } from "./CheckControlPlaneLogEnable/res";
import { SyncClusterNodePoolRequest } from "./SyncClusterNodePool/req";
import { SyncClusterNodePoolResponse } from "./SyncClusterNodePool/res";
import { UpdateControlPlaneLogRequest } from "./UpdateControlPlaneLog/req";
import { UpdateControlPlaneLogResponse } from "./UpdateControlPlaneLog/res";
import { UpgradeClusterNodepoolRequest } from "./UpgradeClusterNodepool/req";
import { UpgradeClusterNodepoolResponse } from "./UpgradeClusterNodepool/res";
import { CreateTriggerRequest } from "./CreateTrigger/req";
import { CreateTriggerResponse } from "./CreateTrigger/res";
import { DeleteTriggerRequest } from "./DeleteTrigger/req";
import { DeleteTriggerResponse } from "./DeleteTrigger/res";
import { DescribeTriggerRequest } from "./DescribeTrigger/req";
import { DescribeTriggerResponse } from "./DescribeTrigger/res";
import { ModifyClusterAddonRequest } from "./ModifyClusterAddon/req";
import { ModifyClusterAddonResponse } from "./ModifyClusterAddon/res";
import { DescribeClusterAddonMetadataRequest } from "./DescribeClusterAddonMetadata/req";
import { DescribeClusterAddonMetadataResponse } from "./DescribeClusterAddonMetadata/res";
import { DescribePolicyInstancesRequest } from "./DescribePolicyInstances/req";
import { DescribePolicyInstancesResponse } from "./DescribePolicyInstances/res";
import { ModifyPolicyInstanceRequest } from "./ModifyPolicyInstance/req";
import { ModifyPolicyInstanceResponse } from "./ModifyPolicyInstance/res";
import { DeployPolicyInstanceRequest } from "./DeployPolicyInstance/req";
import { DeployPolicyInstanceResponse } from "./DeployPolicyInstance/res";
import { DescribePolicyInstancesStatusRequest } from "./DescribePolicyInstancesStatus/req";
import { DescribePolicyInstancesStatusResponse } from "./DescribePolicyInstancesStatus/res";
import { DeletePolicyInstanceRequest } from "./DeletePolicyInstance/req";
import { DeletePolicyInstanceResponse } from "./DeletePolicyInstance/res";
import { DescribePoliciesRequest } from "./DescribePolicies/req";
import { DescribePoliciesResponse } from "./DescribePolicies/res";
import { DescribePolicyDetailsRequest } from "./DescribePolicyDetails/req";
import { DescribePolicyDetailsResponse } from "./DescribePolicyDetails/res";
import { DescribePolicyGovernanceInClusterRequest } from "./DescribePolicyGovernanceInCluster/req";
import { DescribePolicyGovernanceInClusterResponse } from "./DescribePolicyGovernanceInCluster/res";
import { RepairClusterNodePoolRequest } from "./RepairClusterNodePool/req";
import { RepairClusterNodePoolResponse } from "./RepairClusterNodePool/res";
import { FixNodePoolVulsRequest } from "./FixNodePoolVuls/req";
import { FixNodePoolVulsResponse } from "./FixNodePoolVuls/res";
import { DescribeNodePoolVulsRequest } from "./DescribeNodePoolVuls/req";
import { DescribeNodePoolVulsResponse } from "./DescribeNodePoolVuls/res";
import { PauseTaskRequest } from "./PauseTask/req";
import { PauseTaskResponse } from "./PauseTask/res";
import { ResumeTaskRequest } from "./ResumeTask/req";
import { ResumeTaskResponse } from "./ResumeTask/res";
import { CancelTaskRequest } from "./CancelTask/req";
import { CancelTaskResponse } from "./CancelTask/res";
import { DescribeClusterEventsRequest } from "./DescribeClusterEvents/req";
import { DescribeClusterEventsResponse } from "./DescribeClusterEvents/res";
import { DescribeClusterTasksRequest } from "./DescribeClusterTasks/req";
import { DescribeClusterTasksResponse } from "./DescribeClusterTasks/res";
import { ModifyNodePoolNodeConfigRequest } from "./ModifyNodePoolNodeConfig/req";
import { ModifyNodePoolNodeConfigResponse } from "./ModifyNodePoolNodeConfig/res";
import { RemoveNodePoolNodesRequest } from "./RemoveNodePoolNodes/req";
import { RemoveNodePoolNodesResponse } from "./RemoveNodePoolNodes/res";
import { DescribeSubaccountK8sClusterUserConfigRequest } from "./DescribeSubaccountK8sClusterUserConfig/req";
import { DescribeSubaccountK8sClusterUserConfigResponse } from "./DescribeSubaccountK8sClusterUserConfig/res";
import { ScanClusterVulsRequest } from "./ScanClusterVuls/req";
import { ScanClusterVulsResponse } from "./ScanClusterVuls/res";
import { DescribeClusterVulsRequest } from "./DescribeClusterVuls/req";
import { DescribeClusterVulsResponse } from "./DescribeClusterVuls/res";
import { AttachInstancesToNodePoolRequest } from "./AttachInstancesToNodePool/req";
import { AttachInstancesToNodePoolResponse } from "./AttachInstancesToNodePool/res";
import { DescribeClusterAddonInstanceRequest } from "./DescribeClusterAddonInstance/req";
import { DescribeClusterAddonInstanceResponse } from "./DescribeClusterAddonInstance/res";
import { DescribeUserClusterNamespacesRequest } from "./DescribeUserClusterNamespaces/req";
import { DescribeUserClusterNamespacesResponse } from "./DescribeUserClusterNamespaces/res";
import { ListClusterChecksRequest } from "./ListClusterChecks/req";
import { ListClusterChecksResponse } from "./ListClusterChecks/res";
import { GetClusterCheckRequest } from "./GetClusterCheck/req";
import { GetClusterCheckResponse } from "./GetClusterCheck/res";
import { RunClusterCheckRequest } from "./RunClusterCheck/req";
import { RunClusterCheckResponse } from "./RunClusterCheck/res";
import { CancelOperationPlanRequest } from "./CancelOperationPlan/req";
import { CancelOperationPlanResponse } from "./CancelOperationPlan/res";
import { ListOperationPlansRequest } from "./ListOperationPlans/req";
import { ListOperationPlansResponse } from "./ListOperationPlans/res";
import { GetClusterAddonInstanceRequest } from "./GetClusterAddonInstance/req";
import { GetClusterAddonInstanceResponse } from "./GetClusterAddonInstance/res";
import { DescribeAddonRequest } from "./DescribeAddon/req";
import { DescribeAddonResponse } from "./DescribeAddon/res";
import { ListClusterAddonInstancesRequest } from "./ListClusterAddonInstances/req";
import { ListClusterAddonInstancesResponse } from "./ListClusterAddonInstances/res";
import { ListAddonsRequest } from "./ListAddons/req";
import { ListAddonsResponse } from "./ListAddons/res";
import { UpdateUserPermissionsRequest } from "./UpdateUserPermissions/req";
import { UpdateUserPermissionsResponse } from "./UpdateUserPermissions/res";
import { GetClusterDiagnosisResultRequest } from "./GetClusterDiagnosisResult/req";
import { GetClusterDiagnosisResultResponse } from "./GetClusterDiagnosisResult/res";
import { GetClusterDiagnosisCheckItemsRequest } from "./GetClusterDiagnosisCheckItems/req";
import { GetClusterDiagnosisCheckItemsResponse } from "./GetClusterDiagnosisCheckItems/res";
import { CreateClusterDiagnosisRequest } from "./CreateClusterDiagnosis/req";
import { CreateClusterDiagnosisResponse } from "./CreateClusterDiagnosis/res";
import { CheckServiceRoleRequest } from "./CheckServiceRole/req";
import { CheckServiceRoleResponse } from "./CheckServiceRole/res";
import { UpdateResourcesDeleteProtectionRequest } from "./UpdateResourcesDeleteProtection/req";
import { UpdateResourcesDeleteProtectionResponse } from "./UpdateResourcesDeleteProtection/res";
import { DescribeResourcesDeleteProtectionRequest } from "./DescribeResourcesDeleteProtection/req";
import { DescribeResourcesDeleteProtectionResponse } from "./DescribeResourcesDeleteProtection/res";

interface CS {
    /**
     * 取消集群组件升级。
     */
    CancelComponentUpgrade(query: CancelComponentUpgradeRequest): Promise<CancelComponentUpgradeResponse>;
    /**
     * 添加已有ECS实例到ACK集群。
     */
    AttachInstances(query: AttachInstancesRequest): Promise<AttachInstancesResponse>;
    /**
     * 取消处于升级状态的ACK集群。
     */
    CancelClusterUpgrade(query: CancelClusterUpgradeRequest): Promise<CancelClusterUpgradeResponse>;
    /**
     * 调用CancelWorkflow取消正在运行中的工作流。
     */
    CancelWorkflow(query: CancelWorkflowRequest): Promise<CancelWorkflowResponse>;
    /**
     * 您可以通过OpenAPI创建ACK集群，包含ACK托管集群、ACK专有集群、ACK Serverless集群，ACK Edge集群以及注册集群。创建集群时，您将完成集群信息、集群组件以及ACK相关云资源的配置。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 通过节点池，您可以更方便地对节点进行分组管理，例如节点运维、节点配置、开启节点自动弹性伸缩、批量管理、指定调度等。您可以调用CreateClusterNodePool为集群创建节点池。推荐您使用托管节点池，以帮助您自动完成部分节点运维操作，例如高危CVE漏洞自动修复、部分故障修复等，从而降低您的节点运维负担。
     */
    CreateClusterNodePool(query: CreateClusterNodePoolRequest): Promise<CreateClusterNodePoolResponse>;
    /**
     * 为应用创建触发器。
     */
    CreateKubernetesTrigger(query: CreateKubernetesTriggerRequest): Promise<CreateKubernetesTriggerResponse>;
    /**
     * 如果您的集群无需使用，请删除集群并选择是否删除或保留集群的相关资源。删除集群前，请手动清理工作负载（无状态、有状态、任务和定时任务），否则可能导致集群删除失败。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 编排模板是对一组Kubernetes集群资源的定义和描述，以声明性方式描述应用应该如何运行或者配置。您可以基于这些模板自动化部署和管理集群中的资源，例如Pods、Services、Deployments、ConfigMaps、PersistentVolumes等。您可以调用CreateTemplate接口创建一个编排模板。
     */
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    /**
     * 您可以调用DeleteClusterNodepool接口删除不再使用的节点池。
     */
    DeleteClusterNodepool(query: DeleteClusterNodepoolRequest): Promise<DeleteClusterNodepoolResponse>;
    /**
     * 当您不再需要集群节点继续工作时，可以调用DeleteClusterNodes接口将集群中的节点移出集群。移除节点时，您可以选择是否同时释放ECS、是否自动排空节点。移除节点会涉及Pod迁移，可能会影响业务，请在业务低峰期操作并提前做好相关的数据备份。
     */
    DeleteClusterNodes(query: DeleteClusterNodesRequest): Promise<DeleteClusterNodesResponse>;
    /**
     * 根据应用触发器ID，删除应用触发器。
     */
    DeleteKubernetesTrigger(query: DeleteKubernetesTriggerRequest): Promise<DeleteKubernetesTriggerResponse>;
    /**
     * 当您无需使用某些编排模板时，您可以调用DeleteTemplate接口删除编排模板。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 调用DescribeWorkflow查询单个工作流的详细信息。
     */
    DescirbeWorkflow(query: DescirbeWorkflowRequest): Promise<DescirbeWorkflowResponse>;
    /**
     * 查询平台支持的所有组件的详情。
     */
    DescribeAddons(query: DescribeAddonsRequest): Promise<DescribeAddonsResponse>;
    /**
     * 调用DescribeClusterAddonUpgradeStatus查询集群组件升级状态。
     */
    DescribeClusterAddonUpgradeStatus(query: DescribeClusterAddonUpgradeStatusRequest): Promise<DescribeClusterAddonUpgradeStatusResponse>;
    /**
     * 根据组件名称查询该组件升级状态。
     */
    DescribeClusterAddonsUpgradeStatus(query: DescribeClusterAddonsUpgradeStatusRequest): Promise<DescribeClusterAddonsUpgradeStatusResponse>;
    /**
     * 根据集群ID，查询集群中已安装的所有组件的详情。
     */
    DescribeClusterAddonsVersion(query: DescribeClusterAddonsVersionRequest): Promise<DescribeClusterAddonsVersionResponse>;
    /**
     * 如果需要将已有ECS实例添加到ACK集群中作为Worker节点，或移除Worker节点后需将节点实例重新加入节点池，ACK支持手动将已有节点到节点池。您可以调用DescribeClusterAttachScripts接口获取添加已有节点的脚本。
     */
    DescribeClusterAttachScripts(query: DescribeClusterAttachScriptsRequest): Promise<DescribeClusterAttachScriptsResponse>;
    /**
     * 您可以调用DescribeClusterDetail接口，根据集群ID查询指定集群的详细信息。
     */
    DescribeClusterDetail(query: DescribeClusterDetailRequest): Promise<DescribeClusterDetailResponse>;
    /**
     * 您可以调用DescribeClusterLogs接口检索集群的日志数据，以便在出现集群问题时进行根因分析和溯源。
     */
    DescribeClusterLogs(query: DescribeClusterLogsRequest): Promise<DescribeClusterLogsResponse>;
    /**
     * 您可以根据节点池ID，调用DescribeClusterNodePoolDetail接口查询集群中目标节点池的配置。
     */
    DescribeClusterNodePoolDetail(query: DescribeClusterNodePoolDetailRequest): Promise<DescribeClusterNodePoolDetailResponse>;
    /**
     * 您可以调用DescribeClusterNodePools接口，查询集群的节点池列表及节点池详细信息。
     */
    DescribeClusterNodePools(query: DescribeClusterNodePoolsRequest): Promise<DescribeClusterNodePoolsResponse>;
    /**
     * 您可以调用DescribeClusterNodes接口，查询符合条件的节点列表信息。
     */
    DescribeClusterNodes(query: DescribeClusterNodesRequest): Promise<DescribeClusterNodesResponse>;
    /**
     * 您在使用容器服务 Kubernetes 版过程中，会同时使用其他关联的阿里云云产品资源。您可以调用DescribeClusterResources接口查询指定集群的关联资源，例如VPC、SLB等。如果您需要查询节点池或节点资源，您可以调用DescribeClusterNodePools或DescribeClusterNodes接口。
     */
    DescribeClusterResources(query: DescribeClusterResourcesRequest): Promise<DescribeClusterResourcesResponse>;
    /**
     * KubeConfig用于在客户端配置ACK集群的访问凭据，包含访问目标集群的身份和认证数据等信息。使用kubectl管理集群时，您需要通过KubeConfig来连接。请妥善管理集群的KubeConfig凭据，并在无需使用凭据时及时完成吊销，避免KubeConfig泄露带来的数据泄露等安全风险。
     */
    DescribeClusterUserKubeconfig(query: DescribeClusterUserKubeconfigRequest): Promise<DescribeClusterUserKubeconfigResponse>;
    /**
     * 获取集群kubeconfig接口
     */
    DescribeClusterV2UserKubeconfig(query: DescribeClusterV2UserKubeconfigRequest): Promise<DescribeClusterV2UserKubeconfigResponse>;
    /**
     * 查看容器服务中创建的所有集群（包括Swarm和Kubernetes集群）。
     */
    DescribeClusters(query: DescribeClustersRequest): Promise<DescribeClustersResponse>;
    /**
     * 您可以调用DescribeClustersV1接口查看本账号下符合条件的ACK集群（例如指定集群类型、集群规格）列表信息。
     */
    DescribeClustersV1(query: DescribeClustersV1Request): Promise<DescribeClustersV1Response>;
    /**
     * 根据集群ID查询集群中部署注册集群的代理配置。
     */
    DescribeExternalAgent(query: DescribeExternalAgentRequest): Promise<DescribeExternalAgentResponse>;
    /**
     * 您可以调用DescribeKubernetesVersionMetadata接口查询Kubernetes版本的详细信息，包括Kubernetes版本信息、版本的发布日期和过期时间、兼容的操作系统，使用的运行时等。
     */
    DescribeKubernetesVersionMetadata(query: DescribeKubernetesVersionMetadataRequest): Promise<DescribeKubernetesVersionMetadataResponse>;
    /**
     * 您可以调用DescribeTaskInfo接口，查询集群任务的详细信息，例如任务类型、运行状态、运行阶段等。
     */
    DescribeTaskInfo(query: DescribeTaskInfoRequest): Promise<DescribeTaskInfoResponse>;
    /**
     * 编排模板是对一组Kubernetes集群资源的定义和描述，以声明性方式描述应用应该如何运行或者配置。您可以调用DescribeTemplateAttribute接口，查询目标编排模板的详细信息，包括访问权限、YAML内容、标签等。
     */
    DescribeTemplateAttribute(query: DescribeTemplateAttributeRequest): Promise<DescribeTemplateAttributeResponse>;
    /**
     * 编排模板是对一组Kubernetes集群资源的定义和描述，以声明性方式描述应用应该如何运行或者配置。您可以调用DescribeTemplates接口获取已创建的编排模板的列表，并查询编排模板的详细信息，包括访问权限、YAML内容、标签等。
     */
    DescribeTemplates(query: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse>;
    /**
     * 您可以调用DescribeUserQuota接口，查询ACK集群、节点池、节点的相关配额。如需扩大配额，请前往配额中心申请。
     */
    DescribeUserQuota(query: DescribeUserQuotaRequest): Promise<DescribeUserQuotaResponse>;
    /**
     * 根据集群ID，查询该集群的升级状态。
     */
    GetUpgradeStatus(query: GetUpgradeStatusRequest): Promise<GetUpgradeStatusResponse>;
    /**
     * 根据应用名称查询该应用的触发器。
     */
    GetKubernetesTrigger(query: GetKubernetesTriggerRequest): Promise<GetKubernetesTriggerResponse>;
    /**
     * 为了增强Kubernetes能力，ACK集群支持了多种组件，例如托管的核心组件，应用、日志和监控、网络、存储、安全组件等。您可以调用InstallClusterAddons接口，通过组件名称和版本安装组件。
     */
    InstallClusterAddons(query: InstallClusterAddonsRequest): Promise<InstallClusterAddonsResponse>;
    /**
     * 您可以为集群添加标签键值对，让集群开发或运维人员能够更灵活地对集群进行分类管理，更好的支持监控、成本分析、租户隔离等需求。您可以调用ListTagResources接口，获取资源标签的列表并查询标签的详细信息，例如键值对、绑定的集群等。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 创建ACK集群后，如需修改集群的配置，您可以调用ModifyCluster接口来完成。
     */
    ModifyCluster(query: ModifyClusterRequest): Promise<ModifyClusterResponse>;
    /**
     * 您可以为集群添加标签键值对，让集群开发或运维人员能够更灵活地对集群进行分类管理，更好的支持监控、成本分析、租户隔离等需求。您可以调用ModifyClusterTags接口，修改集群标签。
     */
    ModifyClusterTags(query: ModifyClusterTagsRequest): Promise<ModifyClusterTagsResponse>;
    /**
     * 您可以根据节点池ID，调用ModifyClusterNodePool接口更新目标节点池的配置。
     */
    ModifyClusterNodePool(query: ModifyClusterNodePoolRequest): Promise<ModifyClusterNodePoolResponse>;
    /**
     * 暂停用户集群升级。
     */
    PauseClusterUpgrade(query: PauseClusterUpgradeRequest): Promise<PauseClusterUpgradeResponse>;
    /**
     * 调用PauseComponentUpgrade暂停组件升级。
     */
    PauseComponentUpgrade(query: PauseComponentUpgradeRequest): Promise<PauseComponentUpgradeResponse>;
    /**
     * 调用RemoveWorkflow删除某个指定工作流。
     */
    RemoveWorkflow(query: RemoveWorkflowRequest): Promise<RemoveWorkflowResponse>;
    /**
     * 调用ResumeComponentUpgrade重新启动被暂停的组件升级任务。
     */
    ResumeComponentUpgrade(query: ResumeComponentUpgradeRequest): Promise<ResumeComponentUpgradeResponse>;
    /**
     * 根据集群ID，恢复升级处于升级暂停状态的集群。
     */
    ResumeUpgradeCluster(query: ResumeUpgradeClusterRequest): Promise<ResumeUpgradeClusterResponse>;
    /**
     * 根据节点池ID，扩容节点池节点。
     */
    ScaleClusterNodePool(query: ScaleClusterNodePoolRequest): Promise<ScaleClusterNodePoolResponse>;
    /**
     * 当您无需使用集群某些组件时，您可以调用UnInstallClusterAddons接口指定组件名称，删除组件，并选择是否删除关联的阿里云云资源。
     */
    UnInstallClusterAddons(query: UnInstallClusterAddonsRequest): Promise<UnInstallClusterAddonsResponse>;
    /**
     * ACK集群下发的KubeConfig过期时间默认为3年。您可以使用阿里云账号（主账号）自定义配置，调用UpdateK8sClusterUserConfigExpire接口指定RAM用户或角色在ACK集群中下发的KubeConfig的过期时间（1～876000小时）。
     */
    UpdateK8sClusterUserConfigExpire(query: UpdateK8sClusterUserConfigExpireRequest): Promise<UpdateK8sClusterUserConfigExpireResponse>;
    /**
     * 编排模板是对一组Kubernetes集群资源的定义和描述，以声明性方式描述应用应该如何运行或者配置。您可以调用UpdateTemplate接口更新编排模板配置。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 为避免过期版本集群潜在的安全和稳定性风险，同时享用新集群版本的新功能，请随ACK集群的版本发布节奏升级集群。升级集群前，请参考Kubernetes版本说明帮助文档了解待升级版本的版本解读、废弃资源API、升级注意事项等，避免因高版本的功能变更导致业务功能不兼容，继而影响集群正常运行。升级集群前请先进行集群升级检查。升级集群版本可能会影响业务，请评估影响后在业务低峰期操作并提前做好相关的数据备份。
     */
    UpgradeCluster(query: UpgradeClusterRequest): Promise<UpgradeClusterResponse>;
    /**
     * 您可以调用UpgradeClusterAddons接口升级集群组件实例的版本，从而享受新版本带来的功能优化、缺陷修复等。请依次逐个组件升级，确认一个组件升级成功后再升级下一个组件。升级组件前，请了解每个组件升级的注意事项。升级集群组件实例版本可能会影响业务，请评估影响后在业务低峰期操作并提前做好相关的数据备份。
     */
    UpgradeClusterAddons(query: UpgradeClusterAddonsRequest): Promise<UpgradeClusterAddonsResponse>;
    /**
     * 调用StartWorkflow创建一个新的基因工作流。
     */
    StartWorkflow(query: StartWorkflowRequest): Promise<StartWorkflowResponse>;
    /**
     * 调用DescribeWorkflows查询已创建的所有工作流。
     */
    DescribeWorkflows(query: DescribeWorkflowsRequest): Promise<DescribeWorkflowsResponse>;
    /**
     * 您可以为集群添加标签键值对，让集群开发或运维人员能够更灵活地对集群进行分类管理，更好的支持监控、成本分析、租户隔离等需求。您可以调用TagResources接口，为集群绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 当您无需使用集群的标签键值对时，您可以调用UntagResources接口，删除资源标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 首次使用容器服务Kubernetes版（Alibaba Cloud Container Service for Kubernetes，简称容器服务ACK）时，您需要使用阿里云账号（主账号）或有相应权限的RAM用户（子账号）开通并授权容器服务。
     */
    OpenAckService(query: OpenAckServiceRequest): Promise<OpenAckServiceResponse>;
    /**
     * 在ACK集群中，您可以创建并指定不同RAM用户或角色拥有不同的访问权限，从而确保安全访问控制和资源隔离。您可以调用DescribeUserPermission接口查询RAM用户或角色拥有的集群权限详情，包括可访问的资源、权限的作用范围、预置的角色类型、权限来源等。
     */
    DescribeUserPermission(query: DescribeUserPermissionRequest): Promise<DescribeUserPermissionResponse>;
    /**
     * 在ACK集群中，非集群创建者或阿里云账号（主账号）在集群中默认没有任何RBAC权限。您可以调用GrantPermissions接口，更新RAM用户或角色拥有的RBAC访问权限，包括可访问的资源、权限的作用范围、预置的角色类型等，从而更好地管理集群的安全访问控制。
     */
    GrantPermissions(query: GrantPermissionsRequest): Promise<GrantPermissionsResponse>;
    /**
     * ACK集群Pro版是在ACK集群基础版的基础上发展而来的集群类型，继承了原托管版集群的所有优势，例如控制面托管、控制面高可用等。同时，ACK集群Pro版进一步增强了集群的可靠性、安全性和调度性，并且支持赔付标准的SLA，适合生产环境下有着大规模业务，对稳定性和安全性有高要求的企业客户。建议您将ACK集群基础版迁移至ACK集群Pro版。
     */
    MigrateCluster(query: MigrateClusterRequest): Promise<MigrateClusterResponse>;
    /**
     * 集群操作事件包括集群创建、集群变更、节点池创建、节点池扩容、Addon安装、集群升级等。您可以调用DescribeEvents接口，查询某类事件的详细信息，包括事件级别、时间状态、时间发生时间等。
     */
    DescribeEvents(query: DescribeEventsRequest): Promise<DescribeEventsResponse>;
    StartAlert(query: StartAlertRequest): Promise<StartAlertResponse>;
    /**
     * 停止ACK报警中心中报警规则，停止整个报警规则集分组、单个报警规则。
     */
    StopAlert(query: StopAlertRequest): Promise<StopAlertResponse>;
    UpdateContactGroupForAlert(query: UpdateContactGroupForAlertRequest): Promise<UpdateContactGroupForAlertResponse>;
    DeleteAlertContactGroup(query: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse>;
    DeleteAlertContact(query: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse>;
    /**
     * 您可以创建自动弹性伸缩配置，让系统能够按照配置的伸缩规则自动增加或减少计算资源，满足您的集群工作负载的需求。创建过程中，您可以指定扩缩容的度量指标和阈值、扩容顺序、静默时间等。
     */
    CreateAutoscalingConfig(query: CreateAutoscalingConfigRequest): Promise<CreateAutoscalingConfigResponse>;
    /**
     * ACK托管集群支持收集控制面组件日志并投递到您的SLS Log Project中。控制面组件包括Kube API Server、Kube Scheduler、Kube Controller Manager、Cloud Controller Manager等核心组件。您可以调用CheckControlPlaneLogEnable接口，查询控制面组件当前的日志配置，包括日志保存时间、采集的组件等。
     */
    CheckControlPlaneLogEnable(query: CheckControlPlaneLogEnableRequest): Promise<CheckControlPlaneLogEnableResponse>;
    /**
     * 您可以调用SyncClusterNodePool接口同步集群节点池，包含节点池元数据、节点池内节点信息等。
     */
    SyncClusterNodePool(query: SyncClusterNodePoolRequest): Promise<SyncClusterNodePoolResponse>;
    /**
     * ACK托管集群支持收集控制面组件日志并投递到您的SLS Log Project中。控制面组件包括Kube API Server、Kube Scheduler、Kube Controller Manager、Cloud Controller Manager等核心组件。您可以调用UpdateControlPlaneLog接口，修改控制面组件日志配置，例如日志保存时间、采集的组件等。
     */
    UpdateControlPlaneLog(query: UpdateControlPlaneLogRequest): Promise<UpdateControlPlaneLogResponse>;
    /**
     * 您可以调用UpgradeClusterNodepool接口升级指定集群节点池的kubelet版本（建议与控制面版本一致）、操作系统版本或容器运行时版本。
     */
    UpgradeClusterNodepool(query: UpgradeClusterNodepoolRequest): Promise<UpgradeClusterNodepoolResponse>;
    /**
     * 为应用创建触发器。
     */
    CreateTrigger(query: CreateTriggerRequest): Promise<CreateTriggerResponse>;
    /**
     * 删除应用触发器。
     */
    DeleteTrigger(query: DeleteTriggerRequest): Promise<DeleteTriggerResponse>;
    /**
     * 查询指定的触发器。
     */
    DescribeTrigger(query: DescribeTriggerRequest): Promise<DescribeTriggerResponse>;
    /**
     * 您可以调用ModifyClusterAddon配置修改已安装的集群组件实例的配置。修改配置可能会影响业务，请评估影响后在业务低峰期操作并提前做好相关的数据备份。
     */
    ModifyClusterAddon(query: ModifyClusterAddonRequest): Promise<ModifyClusterAddonResponse>;
    /**
     * 调用DescribeClusterAddonMetadata查询特定集群可使用的指定组件版本信息，包括组件版本、可配置参数等。
     */
    DescribeClusterAddonMetadata(query: DescribeClusterAddonMetadataRequest): Promise<DescribeClusterAddonMetadataResponse>;
    /**
     * 您可以在ACK集群中选择安全策略类型，配置相关实施动作、作用范围等，创建并部署一个策略实例。您可以调用DescribePolicyInstances接口，获取集群中指定策略规则实例的详细信息，例如策略描述、治理等级等。
     */
    DescribePolicyInstances(query: DescribePolicyInstancesRequest): Promise<DescribePolicyInstancesResponse>;
    /**
     * 您可以调用ModifyPolicyInstance接口，在指定集群中更新策略规则实例，调整策略实例的治理动作（告警或拦截）、作用的命名空间范围等。
     */
    ModifyPolicyInstance(query: ModifyPolicyInstanceRequest): Promise<ModifyPolicyInstanceResponse>;
    /**
     * 您可以在ACK集群中选择安全策略类型，配置策略实例的治理动作（告警或拦截）、作用的命名空间范围等，以创建并部署一个策略实例。您可以调用DeployPolicyInstance接口，在指定集群的命名空间中部署策略规则实例。
     */
    DeployPolicyInstance(query: DeployPolicyInstanceRequest): Promise<DeployPolicyInstanceResponse>;
    /**
     * 您可以调用DescribePolicyInstancesStatus接口，查询集群当前不同策略类型对应的实例部署状态，包括每种策略规则对应开启的实例计数，以及不同治理等级下开启的策略种类计数。
     */
    DescribePolicyInstancesStatus(query: DescribePolicyInstancesStatusRequest): Promise<DescribePolicyInstancesStatusResponse>;
    /**
     * 您可以调用DeletePolicyInstance接口，在指定集群中删除策略规则实例。
     */
    DeletePolicyInstance(query: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse>;
    /**
     * ACK集群容器安全策略供了种类丰富的内置规则库，包括Compliance、Infra、K8s-general和PSP，旨在确保容器在生产环境中的安全运行。您可以调用DescribePolicies接口，查询策略治理规则库的列表。
     */
    DescribePolicies(query: DescribePoliciesRequest): Promise<DescribePoliciesResponse>;
    /**
     * ACK集群容器安全策略供了种类丰富的内置规则库，包括Compliance、Infra、K8s-general和PSP，旨在确保容器在生产环境中的安全运行。您可以调用DescribePolicyDetails接口，查询指定策略治理规则的详细信息，例如规则模板描述、规则治理动作、规则治理等级等。
     */
    DescribePolicyDetails(query: DescribePolicyDetailsRequest): Promise<DescribePolicyDetailsResponse>;
    /**
     * ACK集群容器安全策略供了种类丰富的内置规则库，包括Compliance、Infra、K8s-general和PSP，旨在确保容器在生产环境中的安全运行。您可以调用DescribePolicyGovernanceInCluster接口，查询目标集群策略治理的详细信息，例如集群当前启用的不同等级策略计数统计、策略治理审计日志、拦截和告警情况等。
     */
    DescribePolicyGovernanceInCluster(query: DescribePolicyGovernanceInClusterRequest): Promise<DescribePolicyGovernanceInClusterResponse>;
    /**
     * 您可以调用RepairClusterNodePool接口修复指定集群节点池的异常节点，使节点保持正常运行状态。
     */
    RepairClusterNodePool(query: RepairClusterNodePoolRequest): Promise<RepairClusterNodePoolResponse>;
    /**
     * 阿里云云安全产品会定期扫描ECS节点上的安全漏洞，并提供对应的修复建议与方法。某些CVE的修复可能需要重启节点，请确保集群有充足的节点用于排水操作。您可以调用FixNodePoolVuls接口修复指定集群节点池的节点漏洞，提高集群节点的安全性。
     */
    FixNodePoolVuls(query: FixNodePoolVulsRequest): Promise<FixNodePoolVulsResponse>;
    /**
     * 您可以根据节点池ID调用DescribeNodePoolVuls接口查看节点池的安全漏洞详细信息，包括漏洞名称、漏洞等级等。建议您定期扫描节点池的安全漏洞，提高集群安全性。
     */
    DescribeNodePoolVuls(query: DescribeNodePoolVulsRequest): Promise<DescribeNodePoolVulsResponse>;
    /**
     * 您可以调用PauseTask接口，暂停执行中的集群任务。
     */
    PauseTask(query: PauseTaskRequest): Promise<PauseTaskResponse>;
    /**
     * 您可以调用ResumeTask接口，恢复已暂停的集群任务。
     */
    ResumeTask(query: ResumeTaskRequest): Promise<ResumeTaskResponse>;
    /**
     * 您可以调用CancelTask接口，取消集群任务的执行。
     */
    CancelTask(query: CancelTaskRequest): Promise<CancelTaskResponse>;
    /**
     * 集群操作事件包括集群创建、集群变更、节点池创建、节点池扩容、Addon安装、集群升级等。您可以调用DescribeClusterEvents接口，获取指定集群中发生的事件列表，并查询事件的详细信息，包括事件级别、时间状态、时间发生时间等。
     */
    DescribeClusterEvents(query: DescribeClusterEventsRequest): Promise<DescribeClusterEventsResponse>;
    /**
     * 您可以调用DescribeClusterTasks接口，查询集群下的任务列表。
     */
    DescribeClusterTasks(query: DescribeClusterTasksRequest): Promise<DescribeClusterTasksResponse>;
    /**
     * 您可以调用ModifyNodePoolNodeConfig接口修改集群节点池中节点配置信息，例如kubelet配置、节点轮转配置等。修改节点配置会按批次变更节点配置并重启kubelet, 可能会对节点运行和工作负载运行产生一定影响，请在业务低峰期操作。
     */
    ModifyNodePoolNodeConfig(query: ModifyNodePoolNodeConfigRequest): Promise<ModifyNodePoolNodeConfigResponse>;
    /**
     * 当您不再需要集群节点继续工作时，可以调用RemoveNodePoolNodes接口将集群中的节点移出节点池，并同时调整期望节点数。移除节点时，您可以选择是否同时释放ECS、是否自动排空节点。移除节点会涉及Pod迁移，可能会影响业务，请在业务低峰期操作并提前做好相关的数据备份。
     */
    RemoveNodePoolNodes(query: RemoveNodePoolNodesRequest): Promise<RemoveNodePoolNodesResponse>;
    /**
     * 作为集群权限管理者，您可以使用阿里云账号（主账号）为账号内指定RAM用户或RAM角色签发包含其身份信息的KubeConfig凭证，用于连接ACK集群。您可以调用DescribeSubaccountK8sClusterUserConfig接口，签发或获取账号内任意RAM用户或角色的KubeConfig。
     */
    DescribeSubaccountK8sClusterUserConfig(query: DescribeSubaccountK8sClusterUserConfigRequest): Promise<DescribeSubaccountK8sClusterUserConfigResponse>;
    /**
     * 您可以调用ScanClusterVuls接口扫描ACK集群中潜在的安全漏洞，包括容器工作负载漏洞、三方软件漏洞、CVE漏洞、WebCMS漏洞、Windows操作系统漏洞等。建议您定期扫描集群的安全漏洞，提高集群安全性。
     */
    ScanClusterVuls(query: ScanClusterVulsRequest): Promise<ScanClusterVulsResponse>;
    /**
     * 您可以根据集群ID调用DescribeClusterVuls接口查看集群的安全漏洞详细信息，包括漏洞名称、漏洞类型、漏洞等级等。建议您定期扫描集群的安全漏洞，提高集群安全性。
     */
    DescribeClusterVuls(query: DescribeClusterVulsRequest): Promise<DescribeClusterVulsResponse>;
    /**
     * 如果需要将已有ECS实例添加到ACK集群中作为Worker节点，或移除Worker节点后需将节点实例重新加入节点池，您可以调用AttachInstancesToNodePool将已有节点添加到节点池。
     */
    AttachInstancesToNodePool(query: AttachInstancesToNodePoolRequest): Promise<AttachInstancesToNodePoolResponse>;
    /**
     * 调用DescribeClusterAddonInstance查询已安装的集群组件的版本、状态和配置等信息。
     */
    DescribeClusterAddonInstance(query: DescribeClusterAddonInstanceRequest): Promise<DescribeClusterAddonInstanceResponse>;
    /**
     * 在ACK集群中，可以通过Kubernetes命名空间对集群访问者进行权限和资源的逻辑隔离，只被授予指定命名空间下RBAC权限的用户将无法访问集群其他命名空间内的资源。您可以调用DescribeUserClusterNamespaces接口，查看当前RAM用户或角色在指定的ACK集群内被授予了哪些命名空间内资源的RBAC访问权限。
     */
    DescribeUserClusterNamespaces(query: DescribeUserClusterNamespacesRequest): Promise<DescribeUserClusterNamespacesResponse>;
    /**
     * 容器智能运维平台提供丰富的Kubernetes集群检查能力，包括集群升级检查、集群迁移检查、组件安装检查、组件升级检查、节点池检查等。您可以调用ListClusterChecks接口，根据集群ID查询集群检查的列表和检查相关信息，例如检查类型、状态、创建和完成时间等。
     */
    ListClusterChecks(query: ListClusterChecksRequest): Promise<ListClusterChecksResponse>;
    /**
     * 容器智能运维平台提供丰富的Kubernetes集群检查能力，包括集群升级检查、集群迁移检查、组件安装检查、组件升级检查、节点池检查等。您可以调用GetClusterCheck接口，根据集群ID和检查任务ID查看指定检查任务的相关信息，例如检查状态、具体检查项、检查创建和完成时间等。
     */
    GetClusterCheck(query: GetClusterCheckRequest): Promise<GetClusterCheckResponse>;
    /**
     * 容器智能运维平台提供丰富的Kubernetes集群检查能力，包括集群升级检查、集群迁移检查、组件安装检查、组件升级检查、节点池检查等。在正式执行升级、迁移或安装操作前，容器智能运维平台会自动触发检查，仅当检查通过后您才可以执行变更操作。您也可以手动调用RunClusterCheck接口执行集群检查。建议您定期对集群进行检查和维护，预防集群安全风险。
     */
    RunClusterCheck(query: RunClusterCheckRequest): Promise<RunClusterCheckResponse>;
    /**
     * 使用CancelOperationPlan取消已存在但未执行的自动运维任务执行计划。
     */
    CancelOperationPlan(query: CancelOperationPlanRequest): Promise<CancelOperationPlanResponse>;
    /**
     * 获取自动运维执行计划列表
     */
    ListOperationPlans(query: ListOperationPlansRequest): Promise<ListOperationPlansResponse>;
    /**
     * 您可以调用GetClusterAddonInstance接口查询集群中目标组件的详细信息，包括目标组件实例的版本、参数配置、日志功能启用状态等。
     */
    GetClusterAddonInstance(query: GetClusterAddonInstanceRequest): Promise<GetClusterAddonInstanceResponse>;
    /**
     * 您可以调用DescribeAddon接口，根据指定地域、集群类型、集群子类型（profile）、集群版本、组件名称等参数查询目标组件的信息，包括组件托管与否、组件分类、支持的自定义参数Schema、兼容的操作系统架构、该版本要求的最低集群版本等。
     */
    DescribeAddon(query: DescribeAddonRequest): Promise<DescribeAddonResponse>;
    /**
     * 您可以调用ListClusterAddonInstances接口获取目标集群已安装的组件实例列表并查询组件实例的相关信息，包括组件版本、状态等。
     */
    ListClusterAddonInstances(query: ListClusterAddonInstancesRequest): Promise<ListClusterAddonInstancesResponse>;
    /**
     * 您可以调用ListAddons接口，根据指定地域、集群类型、集群子类型（profile）、集群版本等参数获取可用组件的列表，并查询组件的详细信息，包括组件托管与否、支持的自定义参数Schema、兼容的操作系统架构等。
     */
    ListAddons(query: ListAddonsRequest): Promise<ListAddonsResponse>;
    /**
     * 在ACK集群中，非集群创建者或阿里云账号（主账号）在集群中默认没有任何RBAC权限。您可以调用UpdateUserPermissions接口，更新RAM用户或角色拥有的RBAC访问权限，包括可访问的资源、权限的作用范围、预置的角色类型等，从而更好地管理集群的安全访问控制。
     */
    UpdateUserPermissions(query: UpdateUserPermissionsRequest): Promise<UpdateUserPermissionsResponse>;
    /**
     * 获取集群诊断结果
     */
    GetClusterDiagnosisResult(query: GetClusterDiagnosisResultRequest): Promise<GetClusterDiagnosisResultResponse>;
    /**
     * 获取集群诊断检查项
     */
    GetClusterDiagnosisCheckItems(query: GetClusterDiagnosisCheckItemsRequest): Promise<GetClusterDiagnosisCheckItemsResponse>;
    /**
     * 发起集群诊断
     */
    CreateClusterDiagnosis(query: CreateClusterDiagnosisRequest): Promise<CreateClusterDiagnosisResponse>;
    /**
     * 检查当前阿里云账号是否已授权指定服务角色。
     */
    CheckServiceRole(query: CheckServiceRoleRequest): Promise<CheckServiceRoleResponse>;
    /**
     * 更新指定资源的删除保护状态，当前支持开启或关闭删除保护的资源类型有namespaces和services。
     */
    UpdateResourcesDeleteProtection(query: UpdateResourcesDeleteProtectionRequest): Promise<UpdateResourcesDeleteProtectionResponse>;
    /**
     * 查询指定资源是否开启删除保护，当前支持查询的删除保护资源包括namespaces和services。
     */
    DescribeResourcesDeleteProtection(query: DescribeResourcesDeleteProtectionRequest): Promise<DescribeResourcesDeleteProtectionResponse>;
}
export default CS;
