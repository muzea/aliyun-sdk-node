import { ListAliyunRegionRequest } from "./ListAliyunRegion/req";
import { ListAliyunRegionResponse } from "./ListAliyunRegion/res";
import { QueryRegionConfigRequest } from "./QueryRegionConfig/req";
import { QueryRegionConfigResponse } from "./QueryRegionConfig/res";
import { QueryMigrateRegionListRequest } from "./QueryMigrateRegionList/req";
import { QueryMigrateRegionListResponse } from "./QueryMigrateRegionList/res";
import { DeleteUserDefineRegionRequest } from "./DeleteUserDefineRegion/req";
import { DeleteUserDefineRegionResponse } from "./DeleteUserDefineRegion/res";
import { ListVpcRequest } from "./ListVpc/req";
import { ListVpcResponse } from "./ListVpc/res";
import { ListClusterRequest } from "./ListCluster/req";
import { ListClusterResponse } from "./ListCluster/res";
import { GetClusterRequest } from "./GetCluster/req";
import { GetClusterResponse } from "./GetCluster/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { ListApplicationEcuRequest } from "./ListApplicationEcu/req";
import { ListApplicationEcuResponse } from "./ListApplicationEcu/res";
import { ListResourceGroupRequest } from "./ListResourceGroup/req";
import { ListResourceGroupResponse } from "./ListResourceGroup/res";
import { ListSlbRequest } from "./ListSlb/req";
import { ListSlbResponse } from "./ListSlb/res";
import { GetPackageStorageCredentialRequest } from "./GetPackageStorageCredential/req";
import { GetPackageStorageCredentialResponse } from "./GetPackageStorageCredential/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { InsertClusterRequest } from "./InsertCluster/req";
import { InsertClusterResponse } from "./InsertCluster/res";
import { InsertClusterMemberRequest } from "./InsertClusterMember/req";
import { InsertClusterMemberResponse } from "./InsertClusterMember/res";
import { ListClusterMembersRequest } from "./ListClusterMembers/req";
import { ListClusterMembersResponse } from "./ListClusterMembers/res";
import { DeleteClusterMemberRequest } from "./DeleteClusterMember/req";
import { DeleteClusterMemberResponse } from "./DeleteClusterMember/res";
import { InstallAgentRequest } from "./InstallAgent/req";
import { InstallAgentResponse } from "./InstallAgent/res";
import { ListEcuByRegionRequest } from "./ListEcuByRegion/req";
import { ListEcuByRegionResponse } from "./ListEcuByRegion/res";
import { TransformClusterMemberRequest } from "./TransformClusterMember/req";
import { TransformClusterMemberResponse } from "./TransformClusterMember/res";
import { ListConvertableEcuRequest } from "./ListConvertableEcu/req";
import { ListConvertableEcuResponse } from "./ListConvertableEcu/res";
import { ListEcsNotInClusterRequest } from "./ListEcsNotInCluster/req";
import { ListEcsNotInClusterResponse } from "./ListEcsNotInCluster/res";
import { MigrateEcuRequest } from "./MigrateEcu/req";
import { MigrateEcuResponse } from "./MigrateEcu/res";
import { CreateIDCImportCommandRequest } from "./CreateIDCImportCommand/req";
import { CreateIDCImportCommandResponse } from "./CreateIDCImportCommand/res";
import { QueryMigrateEcuListRequest } from "./QueryMigrateEcuList/req";
import { QueryMigrateEcuListResponse } from "./QueryMigrateEcuList/res";
import { ListScaleOutEcuRequest } from "./ListScaleOutEcu/req";
import { ListScaleOutEcuResponse } from "./ListScaleOutEcu/res";
import { DeleteEcuRequest } from "./DeleteEcu/req";
import { DeleteEcuResponse } from "./DeleteEcu/res";
import { SynchronizeResourceRequest } from "./SynchronizeResource/req";
import { SynchronizeResourceResponse } from "./SynchronizeResource/res";
import { GetK8sClusterRequest } from "./GetK8sCluster/req";
import { GetK8sClusterResponse } from "./GetK8sCluster/res";
import { ImportK8sClusterRequest } from "./ImportK8sCluster/req";
import { ImportK8sClusterResponse } from "./ImportK8sCluster/res";
import { UpdateK8sResourceRequest } from "./UpdateK8sResource/req";
import { UpdateK8sResourceResponse } from "./UpdateK8sResource/res";
import { GetChangeOrderInfoRequest } from "./GetChangeOrderInfo/req";
import { GetChangeOrderInfoResponse } from "./GetChangeOrderInfo/res";
import { GetContainerConfigurationRequest } from "./GetContainerConfiguration/req";
import { GetContainerConfigurationResponse } from "./GetContainerConfiguration/res";
import { GetJvmConfigurationRequest } from "./GetJvmConfiguration/req";
import { GetJvmConfigurationResponse } from "./GetJvmConfiguration/res";
import { InsertOrUpdateRegionRequest } from "./InsertOrUpdateRegion/req";
import { InsertOrUpdateRegionResponse } from "./InsertOrUpdateRegion/res";
import { ListApplicationRequest } from "./ListApplication/req";
import { ListApplicationResponse } from "./ListApplication/res";
import { ListBuildPackRequest } from "./ListBuildPack/req";
import { ListBuildPackResponse } from "./ListBuildPack/res";
import { ListUserDefineRegionRequest } from "./ListUserDefineRegion/req";
import { ListUserDefineRegionResponse } from "./ListUserDefineRegion/res";
import { ListHistoryDeployVersionRequest } from "./ListHistoryDeployVersion/req";
import { ListHistoryDeployVersionResponse } from "./ListHistoryDeployVersion/res";
import { ListRecentChangeOrderRequest } from "./ListRecentChangeOrder/req";
import { ListRecentChangeOrderResponse } from "./ListRecentChangeOrder/res";
import { SwitchAdvancedMonitoringRequest } from "./SwitchAdvancedMonitoring/req";
import { SwitchAdvancedMonitoringResponse } from "./SwitchAdvancedMonitoring/res";
import { ContinuePipelineRequest } from "./ContinuePipeline/req";
import { ContinuePipelineResponse } from "./ContinuePipeline/res";
import { GetSecureTokenRequest } from "./GetSecureToken/req";
import { GetSecureTokenResponse } from "./GetSecureToken/res";
import { AbortChangeOrderRequest } from "./AbortChangeOrder/req";
import { AbortChangeOrderResponse } from "./AbortChangeOrder/res";
import { InsertApplicationRequest } from "./InsertApplication/req";
import { InsertApplicationResponse } from "./InsertApplication/res";
import { DeployApplicationRequest } from "./DeployApplication/req";
import { DeployApplicationResponse } from "./DeployApplication/res";
import { GetApplicationRequest } from "./GetApplication/req";
import { GetApplicationResponse } from "./GetApplication/res";
import { QueryApplicationStatusRequest } from "./QueryApplicationStatus/req";
import { QueryApplicationStatusResponse } from "./QueryApplicationStatus/res";
import { QueryEccInfoRequest } from "./QueryEccInfo/req";
import { QueryEccInfoResponse } from "./QueryEccInfo/res";
import { UpdateHookConfigurationRequest } from "./UpdateHookConfiguration/req";
import { UpdateHookConfigurationResponse } from "./UpdateHookConfiguration/res";
import { DeleteApplicationRequest } from "./DeleteApplication/req";
import { DeleteApplicationResponse } from "./DeleteApplication/res";
import { ScaleoutApplicationWithNewInstancesRequest } from "./ScaleoutApplicationWithNewInstances/req";
import { ScaleoutApplicationWithNewInstancesResponse } from "./ScaleoutApplicationWithNewInstances/res";
import { ScaleOutApplicationRequest } from "./ScaleOutApplication/req";
import { ScaleOutApplicationResponse } from "./ScaleOutApplication/res";
import { ScaleInApplicationRequest } from "./ScaleInApplication/req";
import { ScaleInApplicationResponse } from "./ScaleInApplication/res";
import { ModifyScalingRuleRequest } from "./ModifyScalingRule/req";
import { ModifyScalingRuleResponse } from "./ModifyScalingRule/res";
import { GetScalingRulesRequest } from "./GetScalingRules/req";
import { GetScalingRulesResponse } from "./GetScalingRules/res";
import { StartApplicationRequest } from "./StartApplication/req";
import { StartApplicationResponse } from "./StartApplication/res";
import { StopApplicationRequest } from "./StopApplication/req";
import { StopApplicationResponse } from "./StopApplication/res";
import { ResetApplicationRequest } from "./ResetApplication/req";
import { ResetApplicationResponse } from "./ResetApplication/res";
import { RestartApplicationRequest } from "./RestartApplication/req";
import { RestartApplicationResponse } from "./RestartApplication/res";
import { RollbackApplicationRequest } from "./RollbackApplication/req";
import { RollbackApplicationResponse } from "./RollbackApplication/res";
import { AddLogPathRequest } from "./AddLogPath/req";
import { AddLogPathResponse } from "./AddLogPath/res";
import { DeleteLogPathRequest } from "./DeleteLogPath/req";
import { DeleteLogPathResponse } from "./DeleteLogPath/res";
import { UpdateApplicationBaseInfoRequest } from "./UpdateApplicationBaseInfo/req";
import { UpdateApplicationBaseInfoResponse } from "./UpdateApplicationBaseInfo/res";
import { UpdateContainerRequest } from "./UpdateContainer/req";
import { UpdateContainerResponse } from "./UpdateContainer/res";
import { UpdateContainerConfigurationRequest } from "./UpdateContainerConfiguration/req";
import { UpdateContainerConfigurationResponse } from "./UpdateContainerConfiguration/res";
import { UpdateHealthCheckUrlRequest } from "./UpdateHealthCheckUrl/req";
import { UpdateHealthCheckUrlResponse } from "./UpdateHealthCheckUrl/res";
import { InsertDeployGroupRequest } from "./InsertDeployGroup/req";
import { InsertDeployGroupResponse } from "./InsertDeployGroup/res";
import { ListDeployGroupRequest } from "./ListDeployGroup/req";
import { ListDeployGroupResponse } from "./ListDeployGroup/res";
import { DeleteDeployGroupRequest } from "./DeleteDeployGroup/req";
import { DeleteDeployGroupResponse } from "./DeleteDeployGroup/res";
import { ChangeDeployGroupRequest } from "./ChangeDeployGroup/req";
import { ChangeDeployGroupResponse } from "./ChangeDeployGroup/res";
import { BindEcsSlbRequest } from "./BindEcsSlb/req";
import { BindEcsSlbResponse } from "./BindEcsSlb/res";
import { UnbindSlbRequest } from "./UnbindSlb/req";
import { UnbindSlbResponse } from "./UnbindSlb/res";
import { UpdateJvmConfigurationRequest } from "./UpdateJvmConfiguration/req";
import { UpdateJvmConfigurationResponse } from "./UpdateJvmConfiguration/res";
import { ListComponentsRequest } from "./ListComponents/req";
import { ListComponentsResponse } from "./ListComponents/res";
import { InsertK8sApplicationRequest } from "./InsertK8sApplication/req";
import { InsertK8sApplicationResponse } from "./InsertK8sApplication/res";
import { DeployK8sApplicationRequest } from "./DeployK8sApplication/req";
import { DeployK8sApplicationResponse } from "./DeployK8sApplication/res";
import { ScaleK8sApplicationRequest } from "./ScaleK8sApplication/req";
import { ScaleK8sApplicationResponse } from "./ScaleK8sApplication/res";
import { UpdateK8sApplicationBaseInfoRequest } from "./UpdateK8sApplicationBaseInfo/req";
import { UpdateK8sApplicationBaseInfoResponse } from "./UpdateK8sApplicationBaseInfo/res";
import { UpdateK8sApplicationConfigRequest } from "./UpdateK8sApplicationConfig/req";
import { UpdateK8sApplicationConfigResponse } from "./UpdateK8sApplicationConfig/res";
import { GetK8sApplicationRequest } from "./GetK8sApplication/req";
import { GetK8sApplicationResponse } from "./GetK8sApplication/res";
import { DeleteK8sApplicationRequest } from "./DeleteK8sApplication/req";
import { DeleteK8sApplicationResponse } from "./DeleteK8sApplication/res";
import { StartK8sApplicationRequest } from "./StartK8sApplication/req";
import { StartK8sApplicationResponse } from "./StartK8sApplication/res";
import { StopK8sApplicationRequest } from "./StopK8sApplication/req";
import { StopK8sApplicationResponse } from "./StopK8sApplication/res";
import { RollbackChangeOrderRequest } from "./RollbackChangeOrder/req";
import { RollbackChangeOrderResponse } from "./RollbackChangeOrder/res";
import { RestartK8sApplicationRequest } from "./RestartK8sApplication/req";
import { RestartK8sApplicationResponse } from "./RestartK8sApplication/res";
import { ConvertK8sResourceRequest } from "./ConvertK8sResource/req";
import { ConvertK8sResourceResponse } from "./ConvertK8sResource/res";
import { BindK8sSlbRequest } from "./BindK8sSlb/req";
import { BindK8sSlbResponse } from "./BindK8sSlb/res";
import { UnbindK8sSlbRequest } from "./UnbindK8sSlb/req";
import { UnbindK8sSlbResponse } from "./UnbindK8sSlb/res";
import { UpdateK8sSlbRequest } from "./UpdateK8sSlb/req";
import { UpdateK8sSlbResponse } from "./UpdateK8sSlb/res";
import { CreateK8sServiceRequest } from "./CreateK8sService/req";
import { CreateK8sServiceResponse } from "./CreateK8sService/res";
import { UpdateK8sServiceRequest } from "./UpdateK8sService/req";
import { UpdateK8sServiceResponse } from "./UpdateK8sService/res";
import { GetK8sServicesRequest } from "./GetK8sServices/req";
import { GetK8sServicesResponse } from "./GetK8sServices/res";
import { DeleteK8sServiceRequest } from "./DeleteK8sService/req";
import { DeleteK8sServiceResponse } from "./DeleteK8sService/res";
import { QuerySlsLogStoreListRequest } from "./QuerySlsLogStoreList/req";
import { QuerySlsLogStoreListResponse } from "./QuerySlsLogStoreList/res";
import { UpdateSlsLogStoreRequest } from "./UpdateSlsLogStore/req";
import { UpdateSlsLogStoreResponse } from "./UpdateSlsLogStore/res";
import { AbortAndRollbackChangeOrderRequest } from "./AbortAndRollbackChangeOrder/req";
import { AbortAndRollbackChangeOrderResponse } from "./AbortAndRollbackChangeOrder/res";
import { DescribeAppInstanceListRequest } from "./DescribeAppInstanceList/req";
import { DescribeAppInstanceListResponse } from "./DescribeAppInstanceList/res";
import { GetAppDeploymentRequest } from "./GetAppDeployment/req";
import { GetAppDeploymentResponse } from "./GetAppDeployment/res";
import { CreateApplicationScalingRuleRequest } from "./CreateApplicationScalingRule/req";
import { CreateApplicationScalingRuleResponse } from "./CreateApplicationScalingRule/res";
import { DescribeApplicationScalingRulesRequest } from "./DescribeApplicationScalingRules/req";
import { DescribeApplicationScalingRulesResponse } from "./DescribeApplicationScalingRules/res";
import { EnableApplicationScalingRuleRequest } from "./EnableApplicationScalingRule/req";
import { EnableApplicationScalingRuleResponse } from "./EnableApplicationScalingRule/res";
import { DisableApplicationScalingRuleRequest } from "./DisableApplicationScalingRule/req";
import { DisableApplicationScalingRuleResponse } from "./DisableApplicationScalingRule/res";
import { UpdateApplicationScalingRuleRequest } from "./UpdateApplicationScalingRule/req";
import { UpdateApplicationScalingRuleResponse } from "./UpdateApplicationScalingRule/res";
import { DeleteApplicationScalingRuleRequest } from "./DeleteApplicationScalingRule/req";
import { DeleteApplicationScalingRuleResponse } from "./DeleteApplicationScalingRule/res";
import { ListK8sIngressRulesRequest } from "./ListK8sIngressRules/req";
import { ListK8sIngressRulesResponse } from "./ListK8sIngressRules/res";
import { CreateK8sIngressRuleRequest } from "./CreateK8sIngressRule/req";
import { CreateK8sIngressRuleResponse } from "./CreateK8sIngressRule/res";
import { UpdateK8sIngressRuleRequest } from "./UpdateK8sIngressRule/req";
import { UpdateK8sIngressRuleResponse } from "./UpdateK8sIngressRule/res";
import { DeleteK8sIngressRuleRequest } from "./DeleteK8sIngressRule/req";
import { DeleteK8sIngressRuleResponse } from "./DeleteK8sIngressRule/res";
import { AuthorizeApplicationRequest } from "./AuthorizeApplication/req";
import { AuthorizeApplicationResponse } from "./AuthorizeApplication/res";
import { AuthorizeResourceGroupRequest } from "./AuthorizeResourceGroup/req";
import { AuthorizeResourceGroupResponse } from "./AuthorizeResourceGroup/res";
import { AuthorizeRoleRequest } from "./AuthorizeRole/req";
import { AuthorizeRoleResponse } from "./AuthorizeRole/res";
import { DeleteRoleRequest } from "./DeleteRole/req";
import { DeleteRoleResponse } from "./DeleteRole/res";
import { InsertRoleRequest } from "./InsertRole/req";
import { InsertRoleResponse } from "./InsertRole/res";
import { ListAuthorityRequest } from "./ListAuthority/req";
import { ListAuthorityResponse } from "./ListAuthority/res";
import { ListRoleRequest } from "./ListRole/req";
import { ListRoleResponse } from "./ListRole/res";
import { ListSubAccountRequest } from "./ListSubAccount/req";
import { ListSubAccountResponse } from "./ListSubAccount/res";
import { UpdateAccountInfoRequest } from "./UpdateAccountInfo/req";
import { UpdateAccountInfoResponse } from "./UpdateAccountInfo/res";
import { UpdateRoleRequest } from "./UpdateRole/req";
import { UpdateRoleResponse } from "./UpdateRole/res";
import { DeleteServiceGroupRequest } from "./DeleteServiceGroup/req";
import { DeleteServiceGroupResponse } from "./DeleteServiceGroup/res";
import { InsertServiceGroupRequest } from "./InsertServiceGroup/req";
import { InsertServiceGroupResponse } from "./InsertServiceGroup/res";
import { ListConsumedServicesRequest } from "./ListConsumedServices/req";
import { ListConsumedServicesResponse } from "./ListConsumedServices/res";
import { ListPublishedServicesRequest } from "./ListPublishedServices/req";
import { ListPublishedServicesResponse } from "./ListPublishedServices/res";
import { ListServiceGroupsRequest } from "./ListServiceGroups/req";
import { ListServiceGroupsResponse } from "./ListServiceGroups/res";
import { ListMethodsRequest } from "./ListMethods/req";
import { ListMethodsResponse } from "./ListMethods/res";
import { GetServiceProvidersPageRequest } from "./GetServiceProvidersPage/req";
import { GetServiceProvidersPageResponse } from "./GetServiceProvidersPage/res";
import { GetServiceConsumersPageRequest } from "./GetServiceConsumersPage/req";
import { GetServiceConsumersPageResponse } from "./GetServiceConsumersPage/res";
import { GetServiceMethodPageRequest } from "./GetServiceMethodPage/req";
import { GetServiceMethodPageResponse } from "./GetServiceMethodPage/res";
import { GetServiceListPageRequest } from "./GetServiceListPage/req";
import { GetServiceListPageResponse } from "./GetServiceListPage/res";
import { GetServiceDetailRequest } from "./GetServiceDetail/req";
import { GetServiceDetailResponse } from "./GetServiceDetail/res";
import { GetJavaStartUpConfigRequest } from "./GetJavaStartUpConfig/req";
import { GetJavaStartUpConfigResponse } from "./GetJavaStartUpConfig/res";
import { GetWebContainerConfigRequest } from "./GetWebContainerConfig/req";
import { GetWebContainerConfigResponse } from "./GetWebContainerConfig/res";
import { RetryChangeOrderTaskRequest } from "./RetryChangeOrderTask/req";
import { RetryChangeOrderTaskResponse } from "./RetryChangeOrderTask/res";
import { BindSlbRequest } from "./BindSlb/req";
import { BindSlbResponse } from "./BindSlb/res";
import { DeleteSwimmingLaneRequest } from "./DeleteSwimmingLane/req";
import { DeleteSwimmingLaneResponse } from "./DeleteSwimmingLane/res";
import { InsertSwimmingLaneRequest } from "./InsertSwimmingLane/req";
import { InsertSwimmingLaneResponse } from "./InsertSwimmingLane/res";
import { InsertSwimmingLaneGroupRequest } from "./InsertSwimmingLaneGroup/req";
import { InsertSwimmingLaneGroupResponse } from "./InsertSwimmingLaneGroup/res";
import { ListSwimmingLaneRequest } from "./ListSwimmingLane/req";
import { ListSwimmingLaneResponse } from "./ListSwimmingLane/res";
import { ListSwimmingLaneGroupRequest } from "./ListSwimmingLaneGroup/req";
import { ListSwimmingLaneGroupResponse } from "./ListSwimmingLaneGroup/res";
import { UpdateSwimmingLaneRequest } from "./UpdateSwimmingLane/req";
import { UpdateSwimmingLaneResponse } from "./UpdateSwimmingLane/res";
import { UpdateSwimmingLaneGroupRequest } from "./UpdateSwimmingLaneGroup/req";
import { UpdateSwimmingLaneGroupResponse } from "./UpdateSwimmingLaneGroup/res";
import { ListK8sSecretsRequest } from "./ListK8sSecrets/req";
import { ListK8sSecretsResponse } from "./ListK8sSecrets/res";
import { CreateK8sConfigMapRequest } from "./CreateK8sConfigMap/req";
import { CreateK8sConfigMapResponse } from "./CreateK8sConfigMap/res";
import { CreateK8sSecretRequest } from "./CreateK8sSecret/req";
import { CreateK8sSecretResponse } from "./CreateK8sSecret/res";
import { DeleteK8sConfigMapRequest } from "./DeleteK8sConfigMap/req";
import { DeleteK8sConfigMapResponse } from "./DeleteK8sConfigMap/res";
import { DeleteK8sSecretRequest } from "./DeleteK8sSecret/req";
import { DeleteK8sSecretResponse } from "./DeleteK8sSecret/res";
import { ListK8sConfigMapsRequest } from "./ListK8sConfigMaps/req";
import { ListK8sConfigMapsResponse } from "./ListK8sConfigMaps/res";
import { UpdateK8sConfigMapRequest } from "./UpdateK8sConfigMap/req";
import { UpdateK8sConfigMapResponse } from "./UpdateK8sConfigMap/res";
import { UpdateK8sSecretRequest } from "./UpdateK8sSecret/req";
import { UpdateK8sSecretResponse } from "./UpdateK8sSecret/res";
import { ListConfigTemplatesRequest } from "./ListConfigTemplates/req";
import { ListConfigTemplatesResponse } from "./ListConfigTemplates/res";
import { UpdateConfigTemplateRequest } from "./UpdateConfigTemplate/req";
import { UpdateConfigTemplateResponse } from "./UpdateConfigTemplate/res";
import { CreateConfigTemplateRequest } from "./CreateConfigTemplate/req";
import { CreateConfigTemplateResponse } from "./CreateConfigTemplate/res";
import { DeleteConfigTemplateRequest } from "./DeleteConfigTemplate/req";
import { DeleteConfigTemplateResponse } from "./DeleteConfigTemplate/res";
import { ListK8sNamespacesRequest } from "./ListK8sNamespaces/req";
import { ListK8sNamespacesResponse } from "./ListK8sNamespaces/res";
import { GetK8sAppPrecheckResultRequest } from "./GetK8sAppPrecheckResult/req";
import { GetK8sAppPrecheckResultResponse } from "./GetK8sAppPrecheckResult/res";
import { StartK8sAppPrecheckRequest } from "./StartK8sAppPrecheck/req";
import { StartK8sAppPrecheckResponse } from "./StartK8sAppPrecheck/res";

interface EDAS {
    /**
     * 获取阿里云地域列表。
     */
    ListAliyunRegion(query: ListAliyunRegionRequest): Promise<ListAliyunRegionResponse>;
    /**
     * 获取不同地域的配置内容。
     */
    QueryRegionConfig(query: QueryRegionConfigRequest): Promise<QueryRegionConfigResponse>;
    /**
     * 查询可供迁移的命名空间列表。
     */
    QueryMigrateRegionList(query: QueryMigrateRegionListRequest): Promise<QueryMigrateRegionListResponse>;
    /**
     * 删除指定的自定义命名空间。
     */
    DeleteUserDefineRegion(query: DeleteUserDefineRegionRequest): Promise<DeleteUserDefineRegionResponse>;
    /**
     * 获取VPC列表，该接口适用于ECS集群和K8s集群。
     */
    ListVpc(query: ListVpcRequest): Promise<ListVpcResponse>;
    /**
     * 获取集群列表。
     */
    ListCluster(query: ListClusterRequest): Promise<ListClusterResponse>;
    /**
     * 获取指定集群的信息。
     */
    GetCluster(query: GetClusterRequest): Promise<GetClusterResponse>;
    /**
     * 用于删除ECS集群或取消导入K8s集群。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 获取ECU列表。
     */
    ListApplicationEcu(query: ListApplicationEcuRequest): Promise<ListApplicationEcuResponse>;
    /**
     * 获取资源组列表。
     */
    ListResourceGroup(query: ListResourceGroupRequest): Promise<ListResourceGroupResponse>;
    /**
     * 获取SLB列表。
     */
    ListSlb(query: ListSlbRequest): Promise<ListSlbResponse>;
    /**
     * 获取临时存储包所需的STS。
     */
    GetPackageStorageCredential(query: GetPackageStorageCredentialRequest): Promise<GetPackageStorageCredentialResponse>;
    /**
     * 调用TagResources为指定的资源统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询云资源已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用UntagResources接口为指定的资源列表统一解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用InsertCluster接口创建集群。
     */
    InsertCluster(query: InsertClusterRequest): Promise<InsertClusterResponse>;
    /**
     * 向ECS集群中导入ECS实例。
     */
    InsertClusterMember(query: InsertClusterMemberRequest): Promise<InsertClusterMemberResponse>;
    /**
     * 获取ECS实例列表。
     */
    ListClusterMembers(query: ListClusterMembersRequest): Promise<ListClusterMembersResponse>;
    /**
     * 调用DeleteClusterMember接口删除集群实例。
     */
    DeleteClusterMember(query: DeleteClusterMemberRequest): Promise<DeleteClusterMemberResponse>;
    /**
     * 使用ECS自带的云助手安装EDAS Agent（将ECS导入EDAS）。
     */
    InstallAgent(query: InstallAgentRequest): Promise<InstallAgentResponse>;
    /**
     * 获取指定命名空间下可用的ECU列表。
     */
    ListEcuByRegion(query: ListEcuByRegionRequest): Promise<ListEcuByRegionResponse>;
    /**
     * 接口导入或转移ECS实例。
     */
    TransformClusterMember(query: TransformClusterMemberRequest): Promise<TransformClusterMemberResponse>;
    /**
     * 调用ListConvertableEcu接口列出可导入到指定集群的ECS实例列表。本API适用于ECS集群。
     */
    ListConvertableEcu(query: ListConvertableEcuRequest): Promise<ListConvertableEcuResponse>;
    /**
     * 调用ListEcsNotInCluster接口获取所有未导入集群的ECS实例。
     */
    ListEcsNotInCluster(query: ListEcsNotInClusterRequest): Promise<ListEcsNotInClusterResponse>;
    /**
     * 转移ECU到指定命名空间的默认集群。
     */
    MigrateEcu(query: MigrateEcuRequest): Promise<MigrateEcuResponse>;
    /**
     * 调用CreateIDCImportCommand接口生成非阿里云ECS集群的导入命令。
     */
    CreateIDCImportCommand(query: CreateIDCImportCommandRequest): Promise<CreateIDCImportCommandResponse>;
    /**
     * 调用QueryMigrateEcuList来查询可迁移的实例列表。
     */
    QueryMigrateEcuList(query: QueryMigrateEcuListRequest): Promise<QueryMigrateEcuListResponse>;
    /**
     * 从指定集群或应用关联集群获取可用于应用扩容的ECU列表。该接口仅适用于ECS集群。
     */
    ListScaleOutEcu(query: ListScaleOutEcuRequest): Promise<ListScaleOutEcuResponse>;
    /**
     * 删除指定的 ECU。
     */
    DeleteEcu(query: DeleteEcuRequest): Promise<DeleteEcuResponse>;
    /**
     * 同步用户下的阿里云基础资源到EDAS。适用于ECS集群。
     */
    SynchronizeResource(query: SynchronizeResourceRequest): Promise<SynchronizeResourceResponse>;
    /**
     * 获取容器服务K8s集群或Serverless K8s集群列表。
     */
    GetK8sCluster(query: GetK8sClusterRequest): Promise<GetK8sClusterResponse>;
    /**
     * 调用ImportK8sCluster接口导入容器服务K8s集群或Serverless K8s集群。
     */
    ImportK8sCluster(query: ImportK8sClusterRequest): Promise<ImportK8sClusterResponse>;
    /**
     * 更新K8s资源。
     */
    UpdateK8sResource(query: UpdateK8sResourceRequest): Promise<UpdateK8sResourceResponse>;
    /**
     * 调用GetChangeOrderInfo接口查看变更流程详情。
     */
    GetChangeOrderInfo(query: GetChangeOrderInfoRequest): Promise<GetChangeOrderInfoResponse>;
    /**
     * 调用GetContainerConfiguration接口获取应用或应用分组的Tomcat配置。
     */
    GetContainerConfiguration(query: GetContainerConfigurationRequest): Promise<GetContainerConfigurationResponse>;
    /**
     * 调用GetJvmConfiguration接口获取应用或应用分组的JVM设置。
     */
    GetJvmConfiguration(query: GetJvmConfigurationRequest): Promise<GetJvmConfigurationResponse>;
    /**
     * 调用InsertOrUpdateRegion接口创建或编辑自定义命名空间。
     */
    InsertOrUpdateRegion(query: InsertOrUpdateRegionRequest): Promise<InsertOrUpdateRegionResponse>;
    /**
     * 获取应用列表。
     */
    ListApplication(query: ListApplicationRequest): Promise<ListApplicationResponse>;
    /**
     * 调用ListBuildPack接口获取容器版本列表。
     */
    ListBuildPack(query: ListBuildPackRequest): Promise<ListBuildPackResponse>;
    /**
     * 获取用户自定义命名空间列表。
     */
    ListUserDefineRegion(query: ListUserDefineRegionRequest): Promise<ListUserDefineRegionResponse>;
    /**
     * 调用ListHistoryDeployVersion接口，获取应用部署的历史版本列表。
     */
    ListHistoryDeployVersion(query: ListHistoryDeployVersionRequest): Promise<ListHistoryDeployVersionResponse>;
    /**
     * 调用ListRecentChangeOrder列出应用历史变更单列表。
     */
    ListRecentChangeOrder(query: ListRecentChangeOrderRequest): Promise<ListRecentChangeOrderResponse>;
    /**
     * 调用SwitchAdvancedMonitoring接口查询ECS和K8s集群中应用高级监控开关状态及控制接口。
     */
    SwitchAdvancedMonitoring(query: SwitchAdvancedMonitoringRequest): Promise<SwitchAdvancedMonitoringResponse>;
    /**
     * 调用ContinuePipeline接口手动确认执行下一批发布。
     */
    ContinuePipeline(query: ContinuePipelineRequest): Promise<ContinuePipelineResponse>;
    /**
     * 调用GetSecureToken获取指定命名空间的SecureToken信息，主要是用来获取指定命名空间的AccessKey ID、AccessKey Secret 、TenantId、地址服务器域名等信息。
     */
    GetSecureToken(query: GetSecureTokenRequest): Promise<GetSecureTokenResponse>;
    /**
     * 调用AbortChangeOrder接口终止变更流程。
     */
    AbortChangeOrder(query: AbortChangeOrderRequest): Promise<AbortChangeOrderResponse>;
    /**
     * 调用InsertApplication接口在ECS集群中创建应用。
     */
    InsertApplication(query: InsertApplicationRequest): Promise<InsertApplicationResponse>;
    /**
     * 调用DeployApplication接口在ECS集群中部署应用。
     */
    DeployApplication(query: DeployApplicationRequest): Promise<DeployApplicationResponse>;
    /**
     * 获取ECS集群中指定应用的信息。 。
     */
    GetApplication(query: GetApplicationRequest): Promise<GetApplicationResponse>;
    /**
     * 调用QueryApplicationStatus接口查询应用状态。
     */
    QueryApplicationStatus(query: QueryApplicationStatusRequest): Promise<QueryApplicationStatusResponse>;
    /**
     * 适用于容器服务K8s集群。
     */
    QueryEccInfo(query: QueryEccInfoRequest): Promise<QueryEccInfoResponse>;
    /**
     * 调用UpdateHookConfiguration来为应用或分组设置挂载脚本。
     */
    UpdateHookConfiguration(query: UpdateHookConfigurationRequest): Promise<UpdateHookConfigurationResponse>;
    /**
     * 调用DeleteApplication接口删除应用实例。
     */
    DeleteApplication(query: DeleteApplicationRequest): Promise<DeleteApplicationResponse>;
    /**
     * 在EDAS中代购ECS实例，并将代购的实例扩容到指定的应用分组。
     */
    ScaleoutApplicationWithNewInstances(query: ScaleoutApplicationWithNewInstancesRequest): Promise<ScaleoutApplicationWithNewInstancesResponse>;
    /**
     * 调用ScaleOutApplication接口扩容应用。
     */
    ScaleOutApplication(query: ScaleOutApplicationRequest): Promise<ScaleOutApplicationResponse>;
    /**
     * 使用ScaleInApplication缩容应用实例。
     */
    ScaleInApplication(query: ScaleInApplicationRequest): Promise<ScaleInApplicationResponse>;
    /**
     * 调用ModifyScalingRule接口修改弹性扩、缩容规则。
     */
    ModifyScalingRule(query: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse>;
    /**
     * 调用GetScalingRules接口获取扩缩容规则。
     */
    GetScalingRules(query: GetScalingRulesRequest): Promise<GetScalingRulesResponse>;
    /**
     * 调用StartApplication来启动应用。
     */
    StartApplication(query: StartApplicationRequest): Promise<StartApplicationResponse>;
    /**
     * 停止应用。
     */
    StopApplication(query: StopApplicationRequest): Promise<StopApplicationResponse>;
    /**
     * 重置一个应用。
     */
    ResetApplication(query: ResetApplicationRequest): Promise<ResetApplicationResponse>;
    /**
     * 适用于ECS应用。
     */
    RestartApplication(query: RestartApplicationRequest): Promise<RestartApplicationResponse>;
    /**
     * 调用RollbackApplication接口回滚应用。
     */
    RollbackApplication(query: RollbackApplicationRequest): Promise<RollbackApplicationResponse>;
    /**
     * 适用于在阿里云和非阿里云ECS集群中部署的应用。
     */
    AddLogPath(query: AddLogPathRequest): Promise<AddLogPathResponse>;
    /**
     * 适用于在阿里云和非阿里云ECS集群中部署的应用。
     */
    DeleteLogPath(query: DeleteLogPathRequest): Promise<DeleteLogPathResponse>;
    /**
     * 描述信息、Owner信息。
     */
    UpdateApplicationBaseInfo(query: UpdateApplicationBaseInfoRequest): Promise<UpdateApplicationBaseInfoResponse>;
    /**
     * 调用UpdateContainer接口更新HSF应用的EDAS-Container版本。EDAS-Container包含Ali-Tomcat和Pandora。
     */
    UpdateContainer(query: UpdateContainerRequest): Promise<UpdateContainerResponse>;
    /**
     * 调用UpdateContainerConfiguration接口设置ECS集群中应用或应用分组的Tomcat。
     */
    UpdateContainerConfiguration(query: UpdateContainerConfigurationRequest): Promise<UpdateContainerConfigurationResponse>;
    /**
     * 调用UpdateHealthCheckUrl来设置健康检查URL。
     */
    UpdateHealthCheckUrl(query: UpdateHealthCheckUrlRequest): Promise<UpdateHealthCheckUrlResponse>;
    /**
     * 调用InsertDeployGroup接口创建应用分组。
     */
    InsertDeployGroup(query: InsertDeployGroupRequest): Promise<InsertDeployGroupResponse>;
    /**
     * 调用ListDeployGroup接口获取部署分组列表。
     */
    ListDeployGroup(query: ListDeployGroupRequest): Promise<ListDeployGroupResponse>;
    /**
     * 调用DeleteDeployGroup来删除分组。
     */
    DeleteDeployGroup(query: DeleteDeployGroupRequest): Promise<DeleteDeployGroupResponse>;
    /**
     * 调用ChangeDeployGroup更换ECS集群应用中的ECS实例的分组。
     */
    ChangeDeployGroup(query: ChangeDeployGroupRequest): Promise<ChangeDeployGroupResponse>;
    /**
     * 调用BindEcsSlb接口来给部署在ECS集群中的应用绑定SLB。
     */
    BindEcsSlb(query: BindEcsSlbRequest): Promise<BindEcsSlbResponse>;
    /**
     * 调用UnbindSlb接口解除绑定SLB。
     */
    UnbindSlb(query: UnbindSlbRequest): Promise<UnbindSlbResponse>;
    /**
     * 调用UpdateJvmConfiguration来配置应用或应用分组的JVM。
     */
    UpdateJvmConfiguration(query: UpdateJvmConfigurationRequest): Promise<UpdateJvmConfigurationResponse>;
    /**
     * 调用ListComponents接口查询组件列表，本API适用于ECS集群中的应用。
     */
    ListComponents(query: ListComponentsRequest): Promise<ListComponentsResponse>;
    /**
     * 在容器服务K8s集群或Serverless K8s集群中创建应用。
     */
    InsertK8sApplication(query: InsertK8sApplicationRequest): Promise<InsertK8sApplicationResponse>;
    /**
     * 在容器服务K8s集群或Serverless K8s集群中部署应用。
     */
    DeployK8sApplication(query: DeployK8sApplicationRequest): Promise<DeployK8sApplicationResponse>;
    /**
     * 扩容或下线容器服务K8s集群的应用实例。
     */
    ScaleK8sApplication(query: ScaleK8sApplicationRequest): Promise<ScaleK8sApplicationResponse>;
    /**
     * 调用UpdateK8sApplicationBaseInfo接口修改K8s应用基本信息。
     */
    UpdateK8sApplicationBaseInfo(query: UpdateK8sApplicationBaseInfoRequest): Promise<UpdateK8sApplicationBaseInfoResponse>;
    /**
     * 调用UpdateK8sApplicationConfig接口修改容器服务K8s或Serverless K8s集群中应用的配置。
     */
    UpdateK8sApplicationConfig(query: UpdateK8sApplicationConfigRequest): Promise<UpdateK8sApplicationConfigResponse>;
    /**
     * 获取容器服务K8s集群或Serverless K8s集群中部署的应用信息。
     */
    GetK8sApplication(query: GetK8sApplicationRequest): Promise<GetK8sApplicationResponse>;
    /**
     * 调用DeleteK8sApplication接口删除容器服务K8s应用。
     */
    DeleteK8sApplication(query: DeleteK8sApplicationRequest): Promise<DeleteK8sApplicationResponse>;
    /**
     * 启动容器服务K8s或Serverless K8s集群中的应用。
     */
    StartK8sApplication(query: StartK8sApplicationRequest): Promise<StartK8sApplicationResponse>;
    /**
     * 停止部署在容器服务K8s集群或Serverless K8s集群中的应用。
     */
    StopK8sApplication(query: StopK8sApplicationRequest): Promise<StopK8sApplicationResponse>;
    /**
     * 调用RollbackChangeOrder终止应用的变更流程，并回滚应用。该接口适用于ECS集群中的应用。
     */
    RollbackChangeOrder(query: RollbackChangeOrderRequest): Promise<RollbackChangeOrderResponse>;
    /**
     * 调用RestartK8sApplication接口来重启部署在容器服务K8s集群或Serverless K8s集群中的应用。
     */
    RestartK8sApplication(query: RestartK8sApplicationRequest): Promise<RestartK8sApplicationResponse>;
    /**
     * 将一个Deployment资源转化为应用。
     */
    ConvertK8sResource(query: ConvertK8sResourceRequest): Promise<ConvertK8sResourceResponse>;
    /**
     * 绑定SLB到容器服务K8s集群中的应用。
     */
    BindK8sSlb(query: BindK8sSlbRequest): Promise<BindK8sSlbResponse>;
    /**
     * 调用UnbindK8sSlb解绑容器服务k8s应用的SLB。
     */
    UnbindK8sSlb(query: UnbindK8sSlbRequest): Promise<UnbindK8sSlbResponse>;
    /**
     * 调用UpdateK8sSlb更新容器服务K8s应用绑定的负载均衡SLB。
     */
    UpdateK8sSlb(query: UpdateK8sSlbRequest): Promise<UpdateK8sSlbResponse>;
    /**
     * 为K8s集群中的应用创建K8s服务Service。
     */
    CreateK8sService(query: CreateK8sServiceRequest): Promise<CreateK8sServiceResponse>;
    /**
     * 更新K8s集群中应用的K8s服务Service。
     */
    UpdateK8sService(query: UpdateK8sServiceRequest): Promise<UpdateK8sServiceResponse>;
    /**
     * 调用GetK8sServices接口获取K8s集群中应用的服务Service列表。
     */
    GetK8sServices(query: GetK8sServicesRequest): Promise<GetK8sServicesResponse>;
    /**
     * 删除K8s集群中应用的K8s服务Service。
     */
    DeleteK8sService(query: DeleteK8sServiceRequest): Promise<DeleteK8sServiceResponse>;
    /**
     * 调用 QuerySlsLogStoreList 接口查询应用的日志服务配置详情。
     */
    QuerySlsLogStoreList(query: QuerySlsLogStoreListRequest): Promise<QuerySlsLogStoreListResponse>;
    /**
     * 调用UpdateSlsLogStore接口配置应用的日志服务。
     */
    UpdateSlsLogStore(query: UpdateSlsLogStoreRequest): Promise<UpdateSlsLogStoreResponse>;
    /**
     * 调用AbortAndRollbackChangeOrder接口终止并回滚变更单，适用于容器服务K8s集群中的应用。
     */
    AbortAndRollbackChangeOrder(query: AbortAndRollbackChangeOrderRequest): Promise<AbortAndRollbackChangeOrderResponse>;
    /**
     * 调用DescribeAppInstanceList接口查询K8s应用实例列表。
     */
    DescribeAppInstanceList(query: DescribeAppInstanceListRequest): Promise<DescribeAppInstanceListResponse>;
    /**
     * 调用GetAppDeployment接口获取K8s应用的Deployment信息。
     */
    GetAppDeployment(query: GetAppDeploymentRequest): Promise<GetAppDeploymentResponse>;
    /**
     * 调用CreateApplicationScalingRule接口创建应用的弹性伸缩规则。
     */
    CreateApplicationScalingRule(query: CreateApplicationScalingRuleRequest): Promise<CreateApplicationScalingRuleResponse>;
    /**
     * 调用DescribeApplicationScalingRules接口获取应用的弹性伸缩规则。
     */
    DescribeApplicationScalingRules(query: DescribeApplicationScalingRulesRequest): Promise<DescribeApplicationScalingRulesResponse>;
    /**
     * 调用EnableApplicationScalingRule接口启用应用弹性伸缩规则。
     */
    EnableApplicationScalingRule(query: EnableApplicationScalingRuleRequest): Promise<EnableApplicationScalingRuleResponse>;
    /**
     * 调用DisableApplicationScalingRule接口禁用应用弹性伸缩规则。
     */
    DisableApplicationScalingRule(query: DisableApplicationScalingRuleRequest): Promise<DisableApplicationScalingRuleResponse>;
    /**
     * 调用UpdateApplicationScalingRule接口更新应用的弹性伸缩规则。
     */
    UpdateApplicationScalingRule(query: UpdateApplicationScalingRuleRequest): Promise<UpdateApplicationScalingRuleResponse>;
    /**
     * 调用DeleteApplicationScalingRule接口删除应用的弹性伸缩规则。
     */
    DeleteApplicationScalingRule(query: DeleteApplicationScalingRuleRequest): Promise<DeleteApplicationScalingRuleResponse>;
    /**
     * 获取应用路由列表。
     */
    ListK8sIngressRules(query: ListK8sIngressRulesRequest): Promise<ListK8sIngressRulesResponse>;
    /**
     * 调用CreateK8sIngressRule接口创建应用路由规则。
     */
    CreateK8sIngressRule(query: CreateK8sIngressRuleRequest): Promise<CreateK8sIngressRuleResponse>;
    /**
     * 更新应用路由规则。
     */
    UpdateK8sIngressRule(query: UpdateK8sIngressRuleRequest): Promise<UpdateK8sIngressRuleResponse>;
    /**
     * 调用DeleteK8sIngressRule接口删除应用路由规则。
     */
    DeleteK8sIngressRule(query: DeleteK8sIngressRuleRequest): Promise<DeleteK8sIngressRuleResponse>;
    /**
     * 为子账号或RAM用户授予应用的操作权限。
     */
    AuthorizeApplication(query: AuthorizeApplicationRequest): Promise<AuthorizeApplicationResponse>;
    /**
     * 为子账号或RAM用户授予指定资源组的操作权限。
     */
    AuthorizeResourceGroup(query: AuthorizeResourceGroupRequest): Promise<AuthorizeResourceGroupResponse>;
    /**
     * 授权角色。
     */
    AuthorizeRole(query: AuthorizeRoleRequest): Promise<AuthorizeRoleResponse>;
    /**
     * 删除角色。
     */
    DeleteRole(query: DeleteRoleRequest): Promise<DeleteRoleResponse>;
    /**
     * 创建角色。
     */
    InsertRole(query: InsertRoleRequest): Promise<InsertRoleResponse>;
    /**
     * 查询所有权限。
     */
    ListAuthority(query: ListAuthorityRequest): Promise<ListAuthorityResponse>;
    /**
     * 获取角色列表。
     */
    ListRole(query: ListRoleRequest): Promise<ListRoleResponse>;
    /**
     * 获取子账号和RAM用户列表。
     */
    ListSubAccount(query: ListSubAccountRequest): Promise<ListSubAccountResponse>;
    /**
     * 编辑账号信息。
     */
    UpdateAccountInfo(query: UpdateAccountInfoRequest): Promise<UpdateAccountInfoResponse>;
    /**
     * 编辑角色。
     */
    UpdateRole(query: UpdateRoleRequest): Promise<UpdateRoleResponse>;
    /**
     * 调用DeleteServiceGroup删除服务分组。
     */
    DeleteServiceGroup(query: DeleteServiceGroupRequest): Promise<DeleteServiceGroupResponse>;
    /**
     * 调用InsertServiceGroup创建服务分组。
     */
    InsertServiceGroup(query: InsertServiceGroupRequest): Promise<InsertServiceGroupResponse>;
    /**
     * 调用ListConsumedServices查询消费的服务。
     */
    ListConsumedServices(query: ListConsumedServicesRequest): Promise<ListConsumedServicesResponse>;
    /**
     * 调用ListPublishedServices查询发布的服务。
     */
    ListPublishedServices(query: ListPublishedServicesRequest): Promise<ListPublishedServicesResponse>;
    /**
     * 调用ListServiceGroups查询HSF应用的服务分组列表。
     */
    ListServiceGroups(query: ListServiceGroupsRequest): Promise<ListServiceGroupsResponse>;
    /**
     * 调用ListMethods接口查询服务方法列表。
     */
    ListMethods(query: ListMethodsRequest): Promise<ListMethodsResponse>;
    /**
     * 调用GetServiceProvidersPage接口获取服务提供者列表。
     */
    GetServiceProvidersPage(query: GetServiceProvidersPageRequest): Promise<GetServiceProvidersPageResponse>;
    /**
     * 获取服务消费者列表。
     */
    GetServiceConsumersPage(query: GetServiceConsumersPageRequest): Promise<GetServiceConsumersPageResponse>;
    /**
     * 调用GetServiceMethodPage接口获取服务接口元数据列表。
     */
    GetServiceMethodPage(query: GetServiceMethodPageRequest): Promise<GetServiceMethodPageResponse>;
    /**
     * 调用GetServiceListPage接口获取服务列表。
     */
    GetServiceListPage(query: GetServiceListPageRequest): Promise<GetServiceListPageResponse>;
    /**
     * 获取服务详情。
     */
    GetServiceDetail(query: GetServiceDetailRequest): Promise<GetServiceDetailResponse>;
    /**
     * 调用GetJavaStartUpConfig接口获取应用的Java启动参数配置。
     */
    GetJavaStartUpConfig(query: GetJavaStartUpConfigRequest): Promise<GetJavaStartUpConfigResponse>;
    /**
     * 调用GetWebContainerConfig接口获取应用的Tomcat配置。
     */
    GetWebContainerConfig(query: GetWebContainerConfigRequest): Promise<GetWebContainerConfigResponse>;
    /**
     * 调用RetryChangeOrderTask接口重试失败的发布单任务。
     */
    RetryChangeOrderTask(query: RetryChangeOrderTaskRequest): Promise<RetryChangeOrderTaskResponse>;
    /**
     * 调用BindSlb接口绑定SLB到指定应用。
     */
    BindSlb(query: BindSlbRequest): Promise<BindSlbResponse>;
    /**
     * 删除全链路流量控制流控泳道。
     */
    DeleteSwimmingLane(query: DeleteSwimmingLaneRequest): Promise<DeleteSwimmingLaneResponse>;
    /**
     * 新建泳道。
     */
    InsertSwimmingLane(query: InsertSwimmingLaneRequest): Promise<InsertSwimmingLaneResponse>;
    /**
     * 新建泳道组。
     */
    InsertSwimmingLaneGroup(query: InsertSwimmingLaneGroupRequest): Promise<InsertSwimmingLaneGroupResponse>;
    /**
     * 获取泳道组下的泳道列表。
     */
    ListSwimmingLane(query: ListSwimmingLaneRequest): Promise<ListSwimmingLaneResponse>;
    /**
     * 获取泳道组列表。
     */
    ListSwimmingLaneGroup(query: ListSwimmingLaneGroupRequest): Promise<ListSwimmingLaneGroupResponse>;
    UpdateSwimmingLane(query: UpdateSwimmingLaneRequest): Promise<UpdateSwimmingLaneResponse>;
    /**
     * 更新泳道组。
     */
    UpdateSwimmingLaneGroup(query: UpdateSwimmingLaneGroupRequest): Promise<UpdateSwimmingLaneGroupResponse>;
    /**
     * 调用ListK8sSecrets接口获取K8s保密配置列表。
     */
    ListK8sSecrets(query: ListK8sSecretsRequest): Promise<ListK8sSecretsResponse>;
    /**
     * 调用CreateK8sConfigMap接口创建K8s配置项。
     */
    CreateK8sConfigMap(query: CreateK8sConfigMapRequest): Promise<CreateK8sConfigMapResponse>;
    /**
     * 调用CreateK8sSecret接口创建K8s保密配置。
     */
    CreateK8sSecret(query: CreateK8sSecretRequest): Promise<CreateK8sSecretResponse>;
    /**
     * 调用DeleteK8sConfigMap接口删除K8s配置项。
     */
    DeleteK8sConfigMap(query: DeleteK8sConfigMapRequest): Promise<DeleteK8sConfigMapResponse>;
    /**
     * 调用DeleteK8sSecret接口删除K8s保密配置。
     */
    DeleteK8sSecret(query: DeleteK8sSecretRequest): Promise<DeleteK8sSecretResponse>;
    /**
     * 调用ListK8sConfigMaps接口获取K8s配置项列表。
     */
    ListK8sConfigMaps(query: ListK8sConfigMapsRequest): Promise<ListK8sConfigMapsResponse>;
    /**
     * 调用UpdateK8sConfigMap接口更新K8s配置项。
     */
    UpdateK8sConfigMap(query: UpdateK8sConfigMapRequest): Promise<UpdateK8sConfigMapResponse>;
    /**
     * 调用UpdateK8sSecret接口更新K8s保密配置。
     */
    UpdateK8sSecret(query: UpdateK8sSecretRequest): Promise<UpdateK8sSecretResponse>;
    /**
     * 调用ListConfigTemplates接口获取配置模板列表。
     */
    ListConfigTemplates(query: ListConfigTemplatesRequest): Promise<ListConfigTemplatesResponse>;
    /**
     * 调用UpdateConfigTemplate接口更新配置模板。
     * 。
     */
    UpdateConfigTemplate(query: UpdateConfigTemplateRequest): Promise<UpdateConfigTemplateResponse>;
    /**
     * 调用CreateConfigTemplate接口创建配置模板。
     * 。
     */
    CreateConfigTemplate(query: CreateConfigTemplateRequest): Promise<CreateConfigTemplateResponse>;
    /**
     * 调用DeleteConfigTemplate接口删除配置模板。
     */
    DeleteConfigTemplate(query: DeleteConfigTemplateRequest): Promise<DeleteConfigTemplateResponse>;
    /**
     * 调用ListK8sNamespaces接口获取K8s命名空间列表。
     */
    ListK8sNamespaces(query: ListK8sNamespacesRequest): Promise<ListK8sNamespacesResponse>;
    /**
     * 调用GetK8sAppPrecheckResult接口获取K8s应用预检结果。
     */
    GetK8sAppPrecheckResult(query: GetK8sAppPrecheckResultRequest): Promise<GetK8sAppPrecheckResultResponse>;
    /**
     * 调用StartK8sAppPrecheck接口开始K8s应用变更预检。
     */
    StartK8sAppPrecheck(query: StartK8sAppPrecheckRequest): Promise<StartK8sAppPrecheckResponse>;
}
export default EDAS;
