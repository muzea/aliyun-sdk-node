import { AbortAndRollbackChangeOrderRequest } from "./AbortAndRollbackChangeOrder/req";
import { AbortAndRollbackChangeOrderResponse } from "./AbortAndRollbackChangeOrder/res";
import { AbortChangeOrderRequest } from "./AbortChangeOrder/req";
import { AbortChangeOrderResponse } from "./AbortChangeOrder/res";
import { BatchStartApplicationsRequest } from "./BatchStartApplications/req";
import { BatchStartApplicationsResponse } from "./BatchStartApplications/res";
import { BatchStopApplicationsRequest } from "./BatchStopApplications/req";
import { BatchStopApplicationsResponse } from "./BatchStopApplications/res";
import { BindSlbRequest } from "./BindSlb/req";
import { BindSlbResponse } from "./BindSlb/res";
import { ConfirmPipelineBatchRequest } from "./ConfirmPipelineBatch/req";
import { ConfirmPipelineBatchResponse } from "./ConfirmPipelineBatch/res";
import { CreateApplicationRequest } from "./CreateApplication/req";
import { CreateApplicationResponse } from "./CreateApplication/res";
import { CreateConfigMapRequest } from "./CreateConfigMap/req";
import { CreateConfigMapResponse } from "./CreateConfigMap/res";
import { CreateIngressRequest } from "./CreateIngress/req";
import { CreateIngressResponse } from "./CreateIngress/res";
import { CreateNamespaceRequest } from "./CreateNamespace/req";
import { CreateNamespaceResponse } from "./CreateNamespace/res";
import { DeleteApplicationRequest } from "./DeleteApplication/req";
import { DeleteApplicationResponse } from "./DeleteApplication/res";
import { DeleteConfigMapRequest } from "./DeleteConfigMap/req";
import { DeleteConfigMapResponse } from "./DeleteConfigMap/res";
import { DeleteIngressRequest } from "./DeleteIngress/req";
import { DeleteIngressResponse } from "./DeleteIngress/res";
import { DeleteNamespaceRequest } from "./DeleteNamespace/req";
import { DeleteNamespaceResponse } from "./DeleteNamespace/res";
import { DeployApplicationRequest } from "./DeployApplication/req";
import { DeployApplicationResponse } from "./DeployApplication/res";
import { DescribeApplicationConfigRequest } from "./DescribeApplicationConfig/req";
import { DescribeApplicationConfigResponse } from "./DescribeApplicationConfig/res";
import { DescribeApplicationGroupsRequest } from "./DescribeApplicationGroups/req";
import { DescribeApplicationGroupsResponse } from "./DescribeApplicationGroups/res";
import { DescribeApplicationImageRequest } from "./DescribeApplicationImage/req";
import { DescribeApplicationImageResponse } from "./DescribeApplicationImage/res";
import { DescribeApplicationInstancesRequest } from "./DescribeApplicationInstances/req";
import { DescribeApplicationInstancesResponse } from "./DescribeApplicationInstances/res";
import { DescribeApplicationSlbsRequest } from "./DescribeApplicationSlbs/req";
import { DescribeApplicationSlbsResponse } from "./DescribeApplicationSlbs/res";
import { DescribeApplicationStatusRequest } from "./DescribeApplicationStatus/req";
import { DescribeApplicationStatusResponse } from "./DescribeApplicationStatus/res";
import { DescribeChangeOrderRequest } from "./DescribeChangeOrder/req";
import { DescribeChangeOrderResponse } from "./DescribeChangeOrder/res";
import { DescribeComponentsRequest } from "./DescribeComponents/req";
import { DescribeComponentsResponse } from "./DescribeComponents/res";
import { DescribeConfigMapRequest } from "./DescribeConfigMap/req";
import { DescribeConfigMapResponse } from "./DescribeConfigMap/res";
import { DescribeEdasContainersRequest } from "./DescribeEdasContainers/req";
import { DescribeEdasContainersResponse } from "./DescribeEdasContainers/res";
import { DescribeIngressRequest } from "./DescribeIngress/req";
import { DescribeIngressResponse } from "./DescribeIngress/res";
import { DescribeInstanceLogRequest } from "./DescribeInstanceLog/req";
import { DescribeInstanceLogResponse } from "./DescribeInstanceLog/res";
import { DescribeInstanceSpecificationsRequest } from "./DescribeInstanceSpecifications/req";
import { DescribeInstanceSpecificationsResponse } from "./DescribeInstanceSpecifications/res";
import { DescribeNamespaceRequest } from "./DescribeNamespace/req";
import { DescribeNamespaceResponse } from "./DescribeNamespace/res";
import { DescribeNamespaceListRequest } from "./DescribeNamespaceList/req";
import { DescribeNamespaceListResponse } from "./DescribeNamespaceList/res";
import { DescribeNamespaceResourcesRequest } from "./DescribeNamespaceResources/req";
import { DescribeNamespaceResourcesResponse } from "./DescribeNamespaceResources/res";
import { DescribeNamespacesRequest } from "./DescribeNamespaces/req";
import { DescribeNamespacesResponse } from "./DescribeNamespaces/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ListAppEventsRequest } from "./ListAppEvents/req";
import { ListAppEventsResponse } from "./ListAppEvents/res";
import { ListAppVersionsRequest } from "./ListAppVersions/req";
import { ListAppVersionsResponse } from "./ListAppVersions/res";
import { ListApplicationsRequest } from "./ListApplications/req";
import { ListApplicationsResponse } from "./ListApplications/res";
import { ListChangeOrdersRequest } from "./ListChangeOrders/req";
import { ListChangeOrdersResponse } from "./ListChangeOrders/res";
import { ListConsumedServicesRequest } from "./ListConsumedServices/req";
import { ListConsumedServicesResponse } from "./ListConsumedServices/res";
import { ListIngressesRequest } from "./ListIngresses/req";
import { ListIngressesResponse } from "./ListIngresses/res";
import { ListLogConfigsRequest } from "./ListLogConfigs/req";
import { ListLogConfigsResponse } from "./ListLogConfigs/res";
import { ListNamespaceChangeOrdersRequest } from "./ListNamespaceChangeOrders/req";
import { ListNamespaceChangeOrdersResponse } from "./ListNamespaceChangeOrders/res";
import { ListNamespacedConfigMapsRequest } from "./ListNamespacedConfigMaps/req";
import { ListNamespacedConfigMapsResponse } from "./ListNamespacedConfigMaps/res";
import { ListPublishedServicesRequest } from "./ListPublishedServices/req";
import { ListPublishedServicesResponse } from "./ListPublishedServices/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { QueryResourceStaticsRequest } from "./QueryResourceStatics/req";
import { QueryResourceStaticsResponse } from "./QueryResourceStatics/res";
import { RescaleApplicationRequest } from "./RescaleApplication/req";
import { RescaleApplicationResponse } from "./RescaleApplication/res";
import { RescaleApplicationVerticallyRequest } from "./RescaleApplicationVertically/req";
import { RescaleApplicationVerticallyResponse } from "./RescaleApplicationVertically/res";
import { RestartApplicationRequest } from "./RestartApplication/req";
import { RestartApplicationResponse } from "./RestartApplication/res";
import { RestartInstancesRequest } from "./RestartInstances/req";
import { RestartInstancesResponse } from "./RestartInstances/res";
import { RollbackApplicationRequest } from "./RollbackApplication/req";
import { RollbackApplicationResponse } from "./RollbackApplication/res";
import { StartApplicationRequest } from "./StartApplication/req";
import { StartApplicationResponse } from "./StartApplication/res";
import { StopApplicationRequest } from "./StopApplication/req";
import { StopApplicationResponse } from "./StopApplication/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UnbindSlbRequest } from "./UnbindSlb/req";
import { UnbindSlbResponse } from "./UnbindSlb/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { UpdateAppSecurityGroupRequest } from "./UpdateAppSecurityGroup/req";
import { UpdateAppSecurityGroupResponse } from "./UpdateAppSecurityGroup/res";
import { UpdateConfigMapRequest } from "./UpdateConfigMap/req";
import { UpdateConfigMapResponse } from "./UpdateConfigMap/res";
import { UpdateIngressRequest } from "./UpdateIngress/req";
import { UpdateIngressResponse } from "./UpdateIngress/res";
import { UpdateNamespaceRequest } from "./UpdateNamespace/req";
import { UpdateNamespaceResponse } from "./UpdateNamespace/res";
import { UpdateNamespaceVpcRequest } from "./UpdateNamespaceVpc/req";
import { UpdateNamespaceVpcResponse } from "./UpdateNamespaceVpc/res";
import { DescribePipelineRequest } from "./DescribePipeline/req";
import { DescribePipelineResponse } from "./DescribePipeline/res";
import { OpenSaeServiceRequest } from "./OpenSaeService/req";
import { OpenSaeServiceResponse } from "./OpenSaeService/res";
import { UpdateApplicationScalingRuleRequest } from "./UpdateApplicationScalingRule/req";
import { UpdateApplicationScalingRuleResponse } from "./UpdateApplicationScalingRule/res";
import { DisableApplicationScalingRuleRequest } from "./DisableApplicationScalingRule/req";
import { DisableApplicationScalingRuleResponse } from "./DisableApplicationScalingRule/res";
import { CreateApplicationScalingRuleRequest } from "./CreateApplicationScalingRule/req";
import { CreateApplicationScalingRuleResponse } from "./CreateApplicationScalingRule/res";
import { DescribeApplicationScalingRulesRequest } from "./DescribeApplicationScalingRules/req";
import { DescribeApplicationScalingRulesResponse } from "./DescribeApplicationScalingRules/res";
import { EnableApplicationScalingRuleRequest } from "./EnableApplicationScalingRule/req";
import { EnableApplicationScalingRuleResponse } from "./EnableApplicationScalingRule/res";
import { DeleteApplicationScalingRuleRequest } from "./DeleteApplicationScalingRule/req";
import { DeleteApplicationScalingRuleResponse } from "./DeleteApplicationScalingRule/res";
import { ReduceApplicationCapacityByInstanceIdsRequest } from "./ReduceApplicationCapacityByInstanceIds/req";
import { ReduceApplicationCapacityByInstanceIdsResponse } from "./ReduceApplicationCapacityByInstanceIds/res";
import { ListGreyTagRouteRequest } from "./ListGreyTagRoute/req";
import { ListGreyTagRouteResponse } from "./ListGreyTagRoute/res";
import { DeleteGreyTagRouteRequest } from "./DeleteGreyTagRoute/req";
import { DeleteGreyTagRouteResponse } from "./DeleteGreyTagRoute/res";
import { UpdateGreyTagRouteRequest } from "./UpdateGreyTagRoute/req";
import { UpdateGreyTagRouteResponse } from "./UpdateGreyTagRoute/res";
import { CreateGreyTagRouteRequest } from "./CreateGreyTagRoute/req";
import { CreateGreyTagRouteResponse } from "./CreateGreyTagRoute/res";
import { DescribeGreyTagRouteRequest } from "./DescribeGreyTagRoute/req";
import { DescribeGreyTagRouteResponse } from "./DescribeGreyTagRoute/res";
import { DescribeApplicationScalingRuleRequest } from "./DescribeApplicationScalingRule/req";
import { DescribeApplicationScalingRuleResponse } from "./DescribeApplicationScalingRule/res";
import { DescribeConfigurationPriceRequest } from "./DescribeConfigurationPrice/req";
import { DescribeConfigurationPriceResponse } from "./DescribeConfigurationPrice/res";
import { GetArmsTopNMetricRequest } from "./GetArmsTopNMetric/req";
import { GetArmsTopNMetricResponse } from "./GetArmsTopNMetric/res";
import { GetAvailabilityMetricRequest } from "./GetAvailabilityMetric/req";
import { GetAvailabilityMetricResponse } from "./GetAvailabilityMetric/res";
import { GetChangeOrderMetricRequest } from "./GetChangeOrderMetric/req";
import { GetChangeOrderMetricResponse } from "./GetChangeOrderMetric/res";
import { GetScaleAppMetricRequest } from "./GetScaleAppMetric/req";
import { GetScaleAppMetricResponse } from "./GetScaleAppMetric/res";
import { GetWarningEventMetricRequest } from "./GetWarningEventMetric/req";
import { GetWarningEventMetricResponse } from "./GetWarningEventMetric/res";
import { UpdateApplicationDescriptionRequest } from "./UpdateApplicationDescription/req";
import { UpdateApplicationDescriptionResponse } from "./UpdateApplicationDescription/res";
import { UpdateApplicationVswitchesRequest } from "./UpdateApplicationVswitches/req";
import { UpdateApplicationVswitchesResponse } from "./UpdateApplicationVswitches/res";
import { DescribeAppServiceDetailRequest } from "./DescribeAppServiceDetail/req";
import { DescribeAppServiceDetailResponse } from "./DescribeAppServiceDetail/res";
import { ListAppServicesPageRequest } from "./ListAppServicesPage/req";
import { ListAppServicesPageResponse } from "./ListAppServicesPage/res";
import { CreateJobRequest } from "./CreateJob/req";
import { CreateJobResponse } from "./CreateJob/res";
import { DeleteHistoryJobRequest } from "./DeleteHistoryJob/req";
import { DeleteHistoryJobResponse } from "./DeleteHistoryJob/res";
import { DeleteJobRequest } from "./DeleteJob/req";
import { DeleteJobResponse } from "./DeleteJob/res";
import { DescribeJobStatusRequest } from "./DescribeJobStatus/req";
import { DescribeJobStatusResponse } from "./DescribeJobStatus/res";
import { DescribeJobRequest } from "./DescribeJob/req";
import { DescribeJobResponse } from "./DescribeJob/res";
import { ExecJobRequest } from "./ExecJob/req";
import { ExecJobResponse } from "./ExecJob/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { SuspendJobRequest } from "./SuspendJob/req";
import { SuspendJobResponse } from "./SuspendJob/res";
import { UpdateJobRequest } from "./UpdateJob/req";
import { UpdateJobResponse } from "./UpdateJob/res";
import { DescribeJobHistoryRequest } from "./DescribeJobHistory/req";
import { DescribeJobHistoryResponse } from "./DescribeJobHistory/res";
import { DescribeSecretRequest } from "./DescribeSecret/req";
import { DescribeSecretResponse } from "./DescribeSecret/res";
import { CreateSecretRequest } from "./CreateSecret/req";
import { CreateSecretResponse } from "./CreateSecret/res";
import { DeleteSecretRequest } from "./DeleteSecret/req";
import { DeleteSecretResponse } from "./DeleteSecret/res";
import { UpdateSecretRequest } from "./UpdateSecret/req";
import { UpdateSecretResponse } from "./UpdateSecret/res";
import { ListSecretsRequest } from "./ListSecrets/req";
import { ListSecretsResponse } from "./ListSecrets/res";

interface SAE {
    /**
     * 调用AbortAndRollbackChangeOrder接口终止或回滚变更单。
     */
    AbortAndRollbackChangeOrder(query: AbortAndRollbackChangeOrderRequest): Promise<AbortAndRollbackChangeOrderResponse>;
    /**
     * 调用AbortChangeOrder接口终止变更单。
     */
    AbortChangeOrder(query: AbortChangeOrderRequest): Promise<AbortChangeOrderResponse>;
    /**
     * 调用BatchStartApplications接口批量启动应用。
     */
    BatchStartApplications(query: BatchStartApplicationsRequest): Promise<BatchStartApplicationsResponse>;
    /**
     * 调用BatchStopApplications接口批量停止应用。
     */
    BatchStopApplications(query: BatchStopApplicationsRequest): Promise<BatchStopApplicationsResponse>;
    /**
     * 调用BindSlb接口为应用绑定SLB。
     */
    BindSlb(query: BindSlbRequest): Promise<BindSlbResponse>;
    /**
     * 调用ConfirmPipelineBatch接口确认是否开始下一批次。
     */
    ConfirmPipelineBatch(query: ConfirmPipelineBatchRequest): Promise<ConfirmPipelineBatchResponse>;
    /**
     * 调用CreateApplication接口创建一个应用。
     */
    CreateApplication(query: CreateApplicationRequest): Promise<CreateApplicationResponse>;
    /**
     * 创建命名空间中的ConfigMap实例。
     */
    CreateConfigMap(query: CreateConfigMapRequest): Promise<CreateConfigMapResponse>;
    /**
     * 调用CreateIngress接口创建一条路由规则。
     */
    CreateIngress(query: CreateIngressRequest): Promise<CreateIngressResponse>;
    /**
     * 调用CreateNamespace接口创建命名空间。
     */
    CreateNamespace(query: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
    /**
     * 调用DeleteApplication接口删除应用。
     */
    DeleteApplication(query: DeleteApplicationRequest): Promise<DeleteApplicationResponse>;
    /**
     * 调用DeleteConfigMap接口删除ConfigMap实例。
     */
    DeleteConfigMap(query: DeleteConfigMapRequest): Promise<DeleteConfigMapResponse>;
    /**
     * 删除ingress实例。
     */
    DeleteIngress(query: DeleteIngressRequest): Promise<DeleteIngressResponse>;
    /**
     * 调用DeleteNamespace接口删除命名空间。
     */
    DeleteNamespace(query: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;
    /**
     * 调用DeployApplication接口部署应用。
     */
    DeployApplication(query: DeployApplicationRequest): Promise<DeployApplicationResponse>;
    /**
     * 调用DescribeApplicationConfig接口获取应用配置信息。
     */
    DescribeApplicationConfig(query: DescribeApplicationConfigRequest): Promise<DescribeApplicationConfigResponse>;
    /**
     * 调用DescribeApplicationGroups接口获取应用实例分组。
     */
    DescribeApplicationGroups(query: DescribeApplicationGroupsRequest): Promise<DescribeApplicationGroupsResponse>;
    /**
     * 调用DescribeApplicationImage接口描述应用镜像信息。
     */
    DescribeApplicationImage(query: DescribeApplicationImageRequest): Promise<DescribeApplicationImageResponse>;
    /**
     * 调用DescribeApplicationInstances接口获取应用实例列表。
     */
    DescribeApplicationInstances(query: DescribeApplicationInstancesRequest): Promise<DescribeApplicationInstancesResponse>;
    /**
     * 调用DescribeApplicationSlbs接口获取应用SLB配置信息。
     */
    DescribeApplicationSlbs(query: DescribeApplicationSlbsRequest): Promise<DescribeApplicationSlbsResponse>;
    /**
     * 调用DescribeApplicationStatus接口获取应用的状态信息。
     */
    DescribeApplicationStatus(query: DescribeApplicationStatusRequest): Promise<DescribeApplicationStatusResponse>;
    /**
     * 调用DescribeChangeOrder接口查询变更单信息。
     */
    DescribeChangeOrder(query: DescribeChangeOrderRequest): Promise<DescribeChangeOrderResponse>;
    /**
     * 调用DescribeComponents接口获取应用创建部署时所需的组件版本。
     */
    DescribeComponents(query: DescribeComponentsRequest): Promise<DescribeComponentsResponse>;
    /**
     * 调用DescribeConfigMap接口查询ConfigMap实例详情。
     */
    DescribeConfigMap(query: DescribeConfigMapRequest): Promise<DescribeConfigMapResponse>;
    /**
     * 调用DescribeEdasContainers接口获取应用微服务容器组件列表。
     */
    DescribeEdasContainers(query: DescribeEdasContainersRequest): Promise<DescribeEdasContainersResponse>;
    /**
     * 调用DescribeIngress接口查询Ingress配置详情。
     */
    DescribeIngress(query: DescribeIngressRequest): Promise<DescribeIngressResponse>;
    /**
     * 调用DescribeInstanceLog接口获取实例日志。
     */
    DescribeInstanceLog(query: DescribeInstanceLogRequest): Promise<DescribeInstanceLogResponse>;
    /**
     * 调用DescribeInstanceSpecifications接口获取应用实例规格信息。
     */
    DescribeInstanceSpecifications(query: DescribeInstanceSpecificationsRequest): Promise<DescribeInstanceSpecificationsResponse>;
    /**
     * 调用DescribeNamespace接口查询命名空间详细信息。
     */
    DescribeNamespace(query: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse>;
    /**
     * 调用DescribeNamespaceList接口获取命名空间列表。
     */
    DescribeNamespaceList(query: DescribeNamespaceListRequest): Promise<DescribeNamespaceListResponse>;
    /**
     * 调用DescribeNamespaceResources接口查询命名空间内的资源信息。
     */
    DescribeNamespaceResources(query: DescribeNamespaceResourcesRequest): Promise<DescribeNamespaceResourcesResponse>;
    /**
     * 调用DescribeNamespaces接口查询命名空间列表。
     */
    DescribeNamespaces(query: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse>;
    /**
     * 调用DescribeRegions接口查询可用地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用ListAppEvents接口查看应用事件。
     */
    ListAppEvents(query: ListAppEventsRequest): Promise<ListAppEventsResponse>;
    /**
     * 调用ListAppVersions接口查看应用的历史版本。
     */
    ListAppVersions(query: ListAppVersionsRequest): Promise<ListAppVersionsResponse>;
    /**
     * 调用ListApplications接口获取应用列表。
     */
    ListApplications(query: ListApplicationsRequest): Promise<ListApplicationsResponse>;
    /**
     * 调用ListChangeOrders接口获取变更单列表。
     */
    ListChangeOrders(query: ListChangeOrdersRequest): Promise<ListChangeOrdersResponse>;
    /**
     * 调用ListConsumedServices接口获取订阅的微服务列表。
     */
    ListConsumedServices(query: ListConsumedServicesRequest): Promise<ListConsumedServicesResponse>;
    /**
     * 调用ListIngresses接口获取Ingress列表。
     */
    ListIngresses(query: ListIngressesRequest): Promise<ListIngressesResponse>;
    /**
     * 调用ListLogConfigs接口获取应用日志列表。
     */
    ListLogConfigs(query: ListLogConfigsRequest): Promise<ListLogConfigsResponse>;
    /**
     * 调用ListNamespaceChangeOrders接口获取命名空间发布单列表。
     */
    ListNamespaceChangeOrders(query: ListNamespaceChangeOrdersRequest): Promise<ListNamespaceChangeOrdersResponse>;
    /**
     * 获取命名空间内ConfigMap实例列表。
     */
    ListNamespacedConfigMaps(query: ListNamespacedConfigMapsRequest): Promise<ListNamespacedConfigMapsResponse>;
    /**
     * 调用ListPublishedServices接口获取发布的微服务列表。
     */
    ListPublishedServices(query: ListPublishedServicesRequest): Promise<ListPublishedServicesResponse>;
    /**
     * 调用ListTagResources接口查询应用和标签的对应关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用QueryResourceStatics接口获取应用的资源使用量。
     */
    QueryResourceStatics(query: QueryResourceStaticsRequest): Promise<QueryResourceStaticsResponse>;
    /**
     * 调用RescaleApplication接口完成应用扩缩。
     */
    RescaleApplication(query: RescaleApplicationRequest): Promise<RescaleApplicationResponse>;
    /**
     * 调用RescaleApplicationVertically接口更改应用实例规格。
     */
    RescaleApplicationVertically(query: RescaleApplicationVerticallyRequest): Promise<RescaleApplicationVerticallyResponse>;
    /**
     * 调用RestartApplication接口重启应用。
     */
    RestartApplication(query: RestartApplicationRequest): Promise<RestartApplicationResponse>;
    /**
     * 调用RestartInstances接口重启应用实例。
     */
    RestartInstances(query: RestartInstancesRequest): Promise<RestartInstancesResponse>;
    /**
     * 调用RollbackApplication接口回退应用历史版本。
     */
    RollbackApplication(query: RollbackApplicationRequest): Promise<RollbackApplicationResponse>;
    /**
     * 调用StartApplication接口启动应用。
     */
    StartApplication(query: StartApplicationRequest): Promise<StartApplicationResponse>;
    /**
     * 调用StopApplication接口停止应用。
     */
    StopApplication(query: StopApplicationRequest): Promise<StopApplicationResponse>;
    /**
     * 调用TagResources接口为指定资源添加标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用UnbindSlb接口解绑私网或公网SLB。
     */
    UnbindSlb(query: UnbindSlbRequest): Promise<UnbindSlbResponse>;
    /**
     * 调用UntagResources接口解除指定资源和标签之间的绑定关系。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用UpdateAppSecurityGroup接口更新应用安全组。
     */
    UpdateAppSecurityGroup(query: UpdateAppSecurityGroupRequest): Promise<UpdateAppSecurityGroupResponse>;
    /**
     * 调用UpdateConfigMap接口更新ConfigMap实例。
     */
    UpdateConfigMap(query: UpdateConfigMapRequest): Promise<UpdateConfigMapResponse>;
    /**
     * 调用UpdateIngress接口更新Ingress实例配置。
     */
    UpdateIngress(query: UpdateIngressRequest): Promise<UpdateIngressResponse>;
    /**
     * 调用UpdateNamespace接口更新命名空间信息。
     */
    UpdateNamespace(query: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse>;
    /**
     * 调用UpdateNamespaceVpc接口更新命名空间绑定的VPC。
     */
    UpdateNamespaceVpc(query: UpdateNamespaceVpcRequest): Promise<UpdateNamespaceVpcResponse>;
    /**
     * 调用DescribePipeline接口查看批次信息。
     */
    DescribePipeline(query: DescribePipelineRequest): Promise<DescribePipelineResponse>;
    /**
     * 免费开通SAE服务。
     */
    OpenSaeService(query: OpenSaeServiceRequest): Promise<OpenSaeServiceResponse>;
    /**
     * 更新应用弹性伸缩策略。
     */
    UpdateApplicationScalingRule(query: UpdateApplicationScalingRuleRequest): Promise<UpdateApplicationScalingRuleResponse>;
    /**
     * 调用DisableApplicationScalingRule接口禁用应用弹性伸缩策略。
     */
    DisableApplicationScalingRule(query: DisableApplicationScalingRuleRequest): Promise<DisableApplicationScalingRuleResponse>;
    /**
     * 创建应用弹性伸缩策略。
     */
    CreateApplicationScalingRule(query: CreateApplicationScalingRuleRequest): Promise<CreateApplicationScalingRuleResponse>;
    /**
     * 查询应用弹性伸缩策略。
     */
    DescribeApplicationScalingRules(query: DescribeApplicationScalingRulesRequest): Promise<DescribeApplicationScalingRulesResponse>;
    /**
     * 启用应用弹性伸缩策略。
     */
    EnableApplicationScalingRule(query: EnableApplicationScalingRuleRequest): Promise<EnableApplicationScalingRuleResponse>;
    /**
     * 调用CreateApplicationScalingRule接口删除应用弹性伸缩策略。
     */
    DeleteApplicationScalingRule(query: DeleteApplicationScalingRuleRequest): Promise<DeleteApplicationScalingRuleResponse>;
    /**
     * 根据实例ID缩容。
     */
    ReduceApplicationCapacityByInstanceIds(query: ReduceApplicationCapacityByInstanceIdsRequest): Promise<ReduceApplicationCapacityByInstanceIdsResponse>;
    /**
     * 根据应用ID查询灰度规则详情。
     */
    ListGreyTagRoute(query: ListGreyTagRouteRequest): Promise<ListGreyTagRouteResponse>;
    /**
     * 根据规则ID删除灰度规则。
     */
    DeleteGreyTagRoute(query: DeleteGreyTagRouteRequest): Promise<DeleteGreyTagRouteResponse>;
    /**
     * 更新灰度规则。
     */
    UpdateGreyTagRoute(query: UpdateGreyTagRouteRequest): Promise<UpdateGreyTagRouteResponse>;
    /**
     * 为Spring Cloud或Dubbo应用创建灰度规则。
     */
    CreateGreyTagRoute(query: CreateGreyTagRouteRequest): Promise<CreateGreyTagRouteResponse>;
    /**
     * 根据规则ID查询灰度规则详情。
     */
    DescribeGreyTagRoute(query: DescribeGreyTagRouteRequest): Promise<DescribeGreyTagRouteResponse>;
    /**
     * 调用DescribeApplicationScalingRules接口查询应用的单个弹性伸缩策略。
     */
    DescribeApplicationScalingRule(query: DescribeApplicationScalingRuleRequest): Promise<DescribeApplicationScalingRuleResponse>;
    DescribeConfigurationPrice(query: DescribeConfigurationPriceRequest): Promise<DescribeConfigurationPriceResponse>;
    /**
     * 调用GetArmsTopNMetric接口获取应用监控的Top N应用列表。
     */
    GetArmsTopNMetric(query: GetArmsTopNMetricRequest): Promise<GetArmsTopNMetricResponse>;
    /**
     * 调用GetAvailabilityMetric接口获取实例总数异常的Top N应用列表。
     */
    GetAvailabilityMetric(query: GetAvailabilityMetricRequest): Promise<GetAvailabilityMetricResponse>;
    /**
     * 调用GetChangeOrderMetric接口获取异常变更单的Top N 应用列表。
     */
    GetChangeOrderMetric(query: GetChangeOrderMetricRequest): Promise<GetChangeOrderMetricResponse>;
    /**
     * 调用GetScaleAppMetric接口获取弹性生效的Top N应用列表。
     */
    GetScaleAppMetric(query: GetScaleAppMetricRequest): Promise<GetScaleAppMetricResponse>;
    /**
     * 调用GetWarningEventMetric接口获取Warning事件的Top N应用列表。
     */
    GetWarningEventMetric(query: GetWarningEventMetricRequest): Promise<GetWarningEventMetricResponse>;
    /**
     * 调用UpdateApplicationDescription接口更新应用描述。
     */
    UpdateApplicationDescription(query: UpdateApplicationDescriptionRequest): Promise<UpdateApplicationDescriptionResponse>;
    UpdateApplicationVswitches(query: UpdateApplicationVswitchesRequest): Promise<UpdateApplicationVswitchesResponse>;
    /**
     * 调用DescribeAppServiceDetail接口获取应用服务的元数据详情。
     */
    DescribeAppServiceDetail(query: DescribeAppServiceDetailRequest): Promise<DescribeAppServiceDetailResponse>;
    /**
     * 调用ListAppServicesPage接口获取应用服务列表。
     */
    ListAppServicesPage(query: ListAppServicesPageRequest): Promise<ListAppServicesPageResponse>;
    /**
     * 调用CreateJob接口更新任务模板。
     */
    CreateJob(query: CreateJobRequest): Promise<CreateJobResponse>;
    /**
     * 调用DeleteHistoryJob接口删除任务。
     */
    DeleteHistoryJob(query: DeleteHistoryJobRequest): Promise<DeleteHistoryJobResponse>;
    /**
     * 调用DeleteJob接口删除任务模板。
     */
    DeleteJob(query: DeleteJobRequest): Promise<DeleteJobResponse>;
    /**
     * 调用DescribeJobStatus接口查询任务状态。
     */
    DescribeJobStatus(query: DescribeJobStatusRequest): Promise<DescribeJobStatusResponse>;
    /**
     * 调用DescribeJob接口获取任务模板配置信息。
     */
    DescribeJob(query: DescribeJobRequest): Promise<DescribeJobResponse>;
    /**
     * 调用ExecJob接口执行任务。
     */
    ExecJob(query: ExecJobRequest): Promise<ExecJobResponse>;
    /**
     * 调用ListJobs接口获取任务模板列表。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 调用SuspendJob接口暂停任务。
     */
    SuspendJob(query: SuspendJobRequest): Promise<SuspendJobResponse>;
    /**
     * 调用UpdateJob接口更新任务模板。
     */
    UpdateJob(query: UpdateJobRequest): Promise<UpdateJobResponse>;
    /**
     * 调用DescribeJobHistory接口查询任务记录。
     */
    DescribeJobHistory(query: DescribeJobHistoryRequest): Promise<DescribeJobHistoryResponse>;
    /**
     * 调用DescribeSecret接口查询Secret实例详情。
     */
    DescribeSecret(query: DescribeSecretRequest): Promise<DescribeSecretResponse>;
    /**
     * 调用CreateSecret接口创建命名空间中的Secret实例。
     */
    CreateSecret(query: CreateSecretRequest): Promise<CreateSecretResponse>;
    /**
     * 调用DeleteSecret接口删除Secret实例。
     */
    DeleteSecret(query: DeleteSecretRequest): Promise<DeleteSecretResponse>;
    /**
     * 调用UpdateSecret接口更新Secret实例。
     */
    UpdateSecret(query: UpdateSecretRequest): Promise<UpdateSecretResponse>;
    /**
     * 调用ListSecrets接口获取命名空间内Secret实例列表。
     */
    ListSecrets(query: ListSecretsRequest): Promise<ListSecretsResponse>;
}
export default SAE;
