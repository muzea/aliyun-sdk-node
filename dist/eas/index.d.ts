import { CreateServiceRequest } from "./CreateService/req";
import { CreateServiceResponse } from "./CreateService/res";
import { CreateServiceAutoScalerRequest } from "./CreateServiceAutoScaler/req";
import { CreateServiceAutoScalerResponse } from "./CreateServiceAutoScaler/res";
import { CreateServiceMirrorRequest } from "./CreateServiceMirror/req";
import { CreateServiceMirrorResponse } from "./CreateServiceMirror/res";
import { DeleteServiceAutoScalerRequest } from "./DeleteServiceAutoScaler/req";
import { DeleteServiceAutoScalerResponse } from "./DeleteServiceAutoScaler/res";
import { DeleteServiceRequest } from "./DeleteService/req";
import { DeleteServiceResponse } from "./DeleteService/res";
import { DeleteServiceInstancesRequest } from "./DeleteServiceInstances/req";
import { DeleteServiceInstancesResponse } from "./DeleteServiceInstances/res";
import { DeleteServiceMirrorRequest } from "./DeleteServiceMirror/req";
import { DeleteServiceMirrorResponse } from "./DeleteServiceMirror/res";
import { DescribeServiceAutoScalerRequest } from "./DescribeServiceAutoScaler/req";
import { DescribeServiceAutoScalerResponse } from "./DescribeServiceAutoScaler/res";
import { DescribeServiceRequest } from "./DescribeService/req";
import { DescribeServiceResponse } from "./DescribeService/res";
import { DescribeServiceMirrorRequest } from "./DescribeServiceMirror/req";
import { DescribeServiceMirrorResponse } from "./DescribeServiceMirror/res";
import { ListServiceInstancesRequest } from "./ListServiceInstances/req";
import { ListServiceInstancesResponse } from "./ListServiceInstances/res";
import { ListServicesRequest } from "./ListServices/req";
import { ListServicesResponse } from "./ListServices/res";
import { ReleaseServiceRequest } from "./ReleaseService/req";
import { ReleaseServiceResponse } from "./ReleaseService/res";
import { StartServiceRequest } from "./StartService/req";
import { StartServiceResponse } from "./StartService/res";
import { StopServiceRequest } from "./StopService/req";
import { StopServiceResponse } from "./StopService/res";
import { UpdateServiceRequest } from "./UpdateService/req";
import { UpdateServiceResponse } from "./UpdateService/res";
import { UpdateServiceAutoScalerRequest } from "./UpdateServiceAutoScaler/req";
import { UpdateServiceAutoScalerResponse } from "./UpdateServiceAutoScaler/res";
import { UpdateServiceMirrorRequest } from "./UpdateServiceMirror/req";
import { UpdateServiceMirrorResponse } from "./UpdateServiceMirror/res";
import { UpdateServiceVersionRequest } from "./UpdateServiceVersion/req";
import { UpdateServiceVersionResponse } from "./UpdateServiceVersion/res";
import { DescribeResourceRequest } from "./DescribeResource/req";
import { DescribeResourceResponse } from "./DescribeResource/res";
import { UpdateResourceRequest } from "./UpdateResource/req";
import { UpdateResourceResponse } from "./UpdateResource/res";
import { UpdateResourceDLinkRequest } from "./UpdateResourceDLink/req";
import { UpdateResourceDLinkResponse } from "./UpdateResourceDLink/res";
import { DeleteResourceDLinkRequest } from "./DeleteResourceDLink/req";
import { DeleteResourceDLinkResponse } from "./DeleteResourceDLink/res";
import { CreateResourceRequest } from "./CreateResource/req";
import { CreateResourceResponse } from "./CreateResource/res";
import { DescribeServiceLogRequest } from "./DescribeServiceLog/req";
import { DescribeServiceLogResponse } from "./DescribeServiceLog/res";
import { CreateResourceLogRequest } from "./CreateResourceLog/req";
import { CreateResourceLogResponse } from "./CreateResourceLog/res";
import { CreateResourceInstancesRequest } from "./CreateResourceInstances/req";
import { CreateResourceInstancesResponse } from "./CreateResourceInstances/res";
import { DeleteResourceInstancesRequest } from "./DeleteResourceInstances/req";
import { DeleteResourceInstancesResponse } from "./DeleteResourceInstances/res";
import { ListResourceInstancesRequest } from "./ListResourceInstances/req";
import { ListResourceInstancesResponse } from "./ListResourceInstances/res";
import { ListResourcesRequest } from "./ListResources/req";
import { ListResourcesResponse } from "./ListResources/res";
import { DeleteResourceLogRequest } from "./DeleteResourceLog/req";
import { DeleteResourceLogResponse } from "./DeleteResourceLog/res";
import { DescribeResourceDLinkRequest } from "./DescribeResourceDLink/req";
import { DescribeResourceDLinkResponse } from "./DescribeResourceDLink/res";
import { ListResourceInstanceWorkerRequest } from "./ListResourceInstanceWorker/req";
import { ListResourceInstanceWorkerResponse } from "./ListResourceInstanceWorker/res";
import { ListResourceServicesRequest } from "./ListResourceServices/req";
import { ListResourceServicesResponse } from "./ListResourceServices/res";
import { DescribeResourceLogRequest } from "./DescribeResourceLog/req";
import { DescribeResourceLogResponse } from "./DescribeResourceLog/res";
import { DeleteResourceRequest } from "./DeleteResource/req";
import { DeleteResourceResponse } from "./DeleteResource/res";
import { CreateServiceCronScalerRequest } from "./CreateServiceCronScaler/req";
import { CreateServiceCronScalerResponse } from "./CreateServiceCronScaler/res";
import { DeleteServiceCronScalerRequest } from "./DeleteServiceCronScaler/req";
import { DeleteServiceCronScalerResponse } from "./DeleteServiceCronScaler/res";
import { DescribeServiceCronScalerRequest } from "./DescribeServiceCronScaler/req";
import { DescribeServiceCronScalerResponse } from "./DescribeServiceCronScaler/res";
import { UpdateServiceCronScalerRequest } from "./UpdateServiceCronScaler/req";
import { UpdateServiceCronScalerResponse } from "./UpdateServiceCronScaler/res";
import { DescribeBenchmarkTaskReportRequest } from "./DescribeBenchmarkTaskReport/req";
import { DescribeBenchmarkTaskReportResponse } from "./DescribeBenchmarkTaskReport/res";
import { CreateBenchmarkTaskRequest } from "./CreateBenchmarkTask/req";
import { CreateBenchmarkTaskResponse } from "./CreateBenchmarkTask/res";
import { ListBenchmarkTaskRequest } from "./ListBenchmarkTask/req";
import { ListBenchmarkTaskResponse } from "./ListBenchmarkTask/res";
import { DescribeBenchmarkTaskRequest } from "./DescribeBenchmarkTask/req";
import { DescribeBenchmarkTaskResponse } from "./DescribeBenchmarkTask/res";
import { UpdateBenchmarkTaskRequest } from "./UpdateBenchmarkTask/req";
import { UpdateBenchmarkTaskResponse } from "./UpdateBenchmarkTask/res";
import { StopBenchmarkTaskRequest } from "./StopBenchmarkTask/req";
import { StopBenchmarkTaskResponse } from "./StopBenchmarkTask/res";
import { DeleteBenchmarkTaskRequest } from "./DeleteBenchmarkTask/req";
import { DeleteBenchmarkTaskResponse } from "./DeleteBenchmarkTask/res";
import { StartBenchmarkTaskRequest } from "./StartBenchmarkTask/req";
import { StartBenchmarkTaskResponse } from "./StartBenchmarkTask/res";
import { ListServiceVersionsRequest } from "./ListServiceVersions/req";
import { ListServiceVersionsResponse } from "./ListServiceVersions/res";
import { DescribeServiceEventRequest } from "./DescribeServiceEvent/req";
import { DescribeServiceEventResponse } from "./DescribeServiceEvent/res";
import { ListGroupsRequest } from "./ListGroups/req";
import { ListGroupsResponse } from "./ListGroups/res";
import { DescribeGroupRequest } from "./DescribeGroup/req";
import { DescribeGroupResponse } from "./DescribeGroup/res";
import { UpdateResourceInstanceRequest } from "./UpdateResourceInstance/req";
import { UpdateResourceInstanceResponse } from "./UpdateResourceInstance/res";
import { UpdateServiceSafetyLockRequest } from "./UpdateServiceSafetyLock/req";
import { UpdateServiceSafetyLockResponse } from "./UpdateServiceSafetyLock/res";
import { CommitServiceRequest } from "./CommitService/req";
import { CommitServiceResponse } from "./CommitService/res";
import { DevelopServiceRequest } from "./DevelopService/req";
import { DevelopServiceResponse } from "./DevelopService/res";
import { RestartServiceRequest } from "./RestartService/req";
import { RestartServiceResponse } from "./RestartService/res";
import { UpdateServiceLabelRequest } from "./UpdateServiceLabel/req";
import { UpdateServiceLabelResponse } from "./UpdateServiceLabel/res";
import { DeleteServiceLabelRequest } from "./DeleteServiceLabel/req";
import { DeleteServiceLabelResponse } from "./DeleteServiceLabel/res";
import { ListServiceContainersRequest } from "./ListServiceContainers/req";
import { ListServiceContainersResponse } from "./ListServiceContainers/res";
import { DescribeServiceDiagnosisRequest } from "./DescribeServiceDiagnosis/req";
import { DescribeServiceDiagnosisResponse } from "./DescribeServiceDiagnosis/res";
import { DescribeServiceInstanceDiagnosisRequest } from "./DescribeServiceInstanceDiagnosis/req";
import { DescribeServiceInstanceDiagnosisResponse } from "./DescribeServiceInstanceDiagnosis/res";
import { DescribeSpotDiscountHistoryRequest } from "./DescribeSpotDiscountHistory/req";
import { DescribeSpotDiscountHistoryResponse } from "./DescribeSpotDiscountHistory/res";
import { DeleteGatewayRequest } from "./DeleteGateway/req";
import { DeleteGatewayResponse } from "./DeleteGateway/res";
import { CreateGatewayRequest } from "./CreateGateway/req";
import { CreateGatewayResponse } from "./CreateGateway/res";
import { DescribeGatewayRequest } from "./DescribeGateway/req";
import { DescribeGatewayResponse } from "./DescribeGateway/res";
import { ListGatewayIntranetLinkedVpcRequest } from "./ListGatewayIntranetLinkedVpc/req";
import { ListGatewayIntranetLinkedVpcResponse } from "./ListGatewayIntranetLinkedVpc/res";
import { DeleteGatewayIntranetLinkedVpcRequest } from "./DeleteGatewayIntranetLinkedVpc/req";
import { DeleteGatewayIntranetLinkedVpcResponse } from "./DeleteGatewayIntranetLinkedVpc/res";
import { CreateGatewayIntranetLinkedVpcRequest } from "./CreateGatewayIntranetLinkedVpc/req";
import { CreateGatewayIntranetLinkedVpcResponse } from "./CreateGatewayIntranetLinkedVpc/res";
import { UpdateGatewayRequest } from "./UpdateGateway/req";
import { UpdateGatewayResponse } from "./UpdateGateway/res";
import { CreateAppServiceRequest } from "./CreateAppService/req";
import { CreateAppServiceResponse } from "./CreateAppService/res";
import { UpdateAppServiceRequest } from "./UpdateAppService/req";
import { UpdateAppServiceResponse } from "./UpdateAppService/res";
import { UpdateServiceInstanceRequest } from "./UpdateServiceInstance/req";
import { UpdateServiceInstanceResponse } from "./UpdateServiceInstance/res";
import { CloneServiceRequest } from "./CloneService/req";
import { CloneServiceResponse } from "./CloneService/res";

interface EAS {
    /**
     * 创建PAI-EAS服务。
     */
    CreateService(query: CreateServiceRequest): Promise<CreateServiceResponse>;
    /**
     * 开通服务自动扩缩容功能，为服务创建自动扩缩控制器。
     */
    CreateServiceAutoScaler(query: CreateServiceAutoScalerRequest): Promise<CreateServiceAutoScalerResponse>;
    /**
     * 开启服务流量镜像功能，可以将一个服务接受到的请求镜像到另一个服务上。
     */
    CreateServiceMirror(query: CreateServiceMirrorRequest): Promise<CreateServiceMirrorResponse>;
    /**
     * 删除服务已有的弹性伸缩控制器，关闭自动弹性伸缩功能。
     */
    DeleteServiceAutoScaler(query: DeleteServiceAutoScalerRequest): Promise<DeleteServiceAutoScalerResponse>;
    /**
     * 删除指定的服务。
     */
    DeleteService(query: DeleteServiceRequest): Promise<DeleteServiceResponse>;
    /**
     * 调用DeleteServiceInstances重启服务的指定实例。
     */
    DeleteServiceInstances(query: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse>;
    /**
     * 关闭服务流量镜像功能。
     */
    DeleteServiceMirror(query: DeleteServiceMirrorRequest): Promise<DeleteServiceMirrorResponse>;
    /**
     * 查看服务的自动扩缩配置详情。
     */
    DescribeServiceAutoScaler(query: DescribeServiceAutoScalerRequest): Promise<DescribeServiceAutoScalerResponse>;
    /**
     * 获取指定服务的详细信息。
     */
    DescribeService(query: DescribeServiceRequest): Promise<DescribeServiceResponse>;
    /**
     * 查看指定服务的流量镜像配置详情。
     */
    DescribeServiceMirror(query: DescribeServiceMirrorRequest): Promise<DescribeServiceMirrorResponse>;
    /**
     * 获取指定服务的实例列表。
     */
    ListServiceInstances(query: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse>;
    /**
     * 获取当前用户的服务列表。
     */
    ListServices(query: ListServicesRequest): Promise<ListServicesResponse>;
    /**
     * 执行分组发布或蓝绿发布切流。
     */
    ReleaseService(query: ReleaseServiceRequest): Promise<ReleaseServiceResponse>;
    /**
     * 启动一个已停止状态的服务。
     */
    StartService(query: StartServiceRequest): Promise<StartServiceResponse>;
    /**
     * 停止一个运行中的服务。
     */
    StopService(query: StopServiceRequest): Promise<StopServiceResponse>;
    /**
     * 用于服务的模型或Processor更新。如果只更新metadata.instance字段，则用于服务扩缩容功能。
     */
    UpdateService(query: UpdateServiceRequest): Promise<UpdateServiceResponse>;
    /**
     * 修改服务已有的自动扩缩控制器配置。
     */
    UpdateServiceAutoScaler(query: UpdateServiceAutoScalerRequest): Promise<UpdateServiceAutoScalerResponse>;
    /**
     * 更新服务流量镜像配置。
     */
    UpdateServiceMirror(query: UpdateServiceMirrorRequest): Promise<UpdateServiceMirrorResponse>;
    /**
     * 更新服务的当前版本，用于服务在历史版本的切换，可实现回滚功能。
     */
    UpdateServiceVersion(query: UpdateServiceVersionRequest): Promise<UpdateServiceVersionResponse>;
    /**
     * 查看资源组详情。
     */
    DescribeResource(query: DescribeResourceRequest): Promise<DescribeResourceResponse>;
    /**
     * 更新专属资源组信息。
     */
    UpdateResource(query: UpdateResourceRequest): Promise<UpdateResourceResponse>;
    /**
     * 更新指定专属资源组的VPC直连配置。
     */
    UpdateResourceDLink(query: UpdateResourceDLinkRequest): Promise<UpdateResourceDLinkResponse>;
    /**
     * 关闭专属资源组VPC直连功能。
     */
    DeleteResourceDLink(query: DeleteResourceDLinkRequest): Promise<DeleteResourceDLinkResponse>;
    /**
     * 创建一个新的资源组。
     */
    CreateResource(query: CreateResourceRequest): Promise<CreateResourceResponse>;
    /**
     * 获取指定服务的日志信息。
     */
    DescribeServiceLog(query: DescribeServiceLogRequest): Promise<DescribeServiceLogResponse>;
    /**
     * 开通资源组SLS日志投递功能。
     */
    CreateResourceLog(query: CreateResourceLogRequest): Promise<CreateResourceLogResponse>;
    /**
     * 在专属资源组中创建新的机器实例。
     */
    CreateResourceInstances(query: CreateResourceInstancesRequest): Promise<CreateResourceInstancesResponse>;
    /**
     * 删除专属资源组中的机器实例，普通用户仅允许删除后付费实例。
     */
    DeleteResourceInstances(query: DeleteResourceInstancesRequest): Promise<DeleteResourceInstancesResponse>;
    /**
     * 获取指定专属资源组中的机器实例列表。
     */
    ListResourceInstances(query: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse>;
    /**
     * 获取当前用户的专属资源组列表。
     */
    ListResources(query: ListResourcesRequest): Promise<ListResourcesResponse>;
    /**
     * 关闭专属资源组SLS日志投递功能。
     */
    DeleteResourceLog(query: DeleteResourceLogRequest): Promise<DeleteResourceLogResponse>;
    /**
     * 查看专属资源组VPC直连配置详情。
     */
    DescribeResourceDLink(query: DescribeResourceDLinkRequest): Promise<DescribeResourceDLinkResponse>;
    /**
     * 列举资源实例的服务Worker列表。
     */
    ListResourceInstanceWorker(query: ListResourceInstanceWorkerRequest): Promise<ListResourceInstanceWorkerResponse>;
    /**
     * 列举专属资源组中已部署的服务列表。
     */
    ListResourceServices(query: ListResourceServicesRequest): Promise<ListResourceServicesResponse>;
    /**
     * 查看专属资源组SLS日志投递配置详情。
     */
    DescribeResourceLog(query: DescribeResourceLogRequest): Promise<DescribeResourceLogResponse>;
    /**
     * 删除一个已有的资源组，仅当资源组中无任务服务和资源实例的情况下才允许删除。
     */
    DeleteResource(query: DeleteResourceRequest): Promise<DeleteResourceResponse>;
    /**
     * 开通服务定时扩缩容功能。
     */
    CreateServiceCronScaler(query: CreateServiceCronScalerRequest): Promise<CreateServiceCronScalerResponse>;
    /**
     * 关闭服务定时扩缩容功能。
     */
    DeleteServiceCronScaler(query: DeleteServiceCronScalerRequest): Promise<DeleteServiceCronScalerResponse>;
    /**
     * 查看服务的定时扩缩容配置详情。
     */
    DescribeServiceCronScaler(query: DescribeServiceCronScalerRequest): Promise<DescribeServiceCronScalerResponse>;
    /**
     * 更新服务定时扩缩容配置信息。
     */
    UpdateServiceCronScaler(query: UpdateServiceCronScalerRequest): Promise<UpdateServiceCronScalerResponse>;
    /**
     * 查看指定压测任务的报告。
     */
    DescribeBenchmarkTaskReport(query: DescribeBenchmarkTaskReportRequest): Promise<DescribeBenchmarkTaskReportResponse>;
    /**
     * 调用CreateBenchmarkTask，创建压测任务。
     */
    CreateBenchmarkTask(query: CreateBenchmarkTaskRequest): Promise<CreateBenchmarkTaskResponse>;
    /**
     * 查看当前用户部署的所有压测任务。
     */
    ListBenchmarkTask(query: ListBenchmarkTaskRequest): Promise<ListBenchmarkTaskResponse>;
    /**
     * 查看指定压测任务的详细配置信息。
     */
    DescribeBenchmarkTask(query: DescribeBenchmarkTaskRequest): Promise<DescribeBenchmarkTaskResponse>;
    /**
     * 更新指定的压测任务。
     */
    UpdateBenchmarkTask(query: UpdateBenchmarkTaskRequest): Promise<UpdateBenchmarkTaskResponse>;
    /**
     * 停止指定的压测任务。
     */
    StopBenchmarkTask(query: StopBenchmarkTaskRequest): Promise<StopBenchmarkTaskResponse>;
    /**
     * 删除指定的压测任务。
     */
    DeleteBenchmarkTask(query: DeleteBenchmarkTaskRequest): Promise<DeleteBenchmarkTaskResponse>;
    /**
     * 启动指定的压测任务。
     */
    StartBenchmarkTask(query: StartBenchmarkTaskRequest): Promise<StartBenchmarkTaskResponse>;
    /**
     * 查询服务历史版本。
     */
    ListServiceVersions(query: ListServiceVersionsRequest): Promise<ListServiceVersionsResponse>;
    /**
     * 查询服务近期部署事件。
     */
    DescribeServiceEvent(query: DescribeServiceEventRequest): Promise<DescribeServiceEventResponse>;
    /**
     * 列举已创建的服务群组。
     */
    ListGroups(query: ListGroupsRequest): Promise<ListGroupsResponse>;
    /**
     * 查看服务群组信息。
     */
    DescribeGroup(query: DescribeGroupRequest): Promise<DescribeGroupResponse>;
    /**
     * 更新专属资源组机器实例的调度状态。
     */
    UpdateResourceInstance(query: UpdateResourceInstanceRequest): Promise<UpdateResourceInstanceResponse>;
    /**
     * 更新服务安全锁，可以一定程度上避免对服务的误操作。
     */
    UpdateServiceSafetyLock(query: UpdateServiceSafetyLockRequest): Promise<UpdateServiceSafetyLockResponse>;
    /**
     * Commit自定义容器服务中的Worker0容器，并作为新镜像重新部署服务。
     */
    CommitService(query: CommitServiceRequest): Promise<CommitServiceResponse>;
    /**
     * 将容器服务转为开发模式，或退出开发模式。
     */
    DevelopService(query: DevelopServiceRequest): Promise<DevelopServiceResponse>;
    /**
     * 重启服务。
     */
    RestartService(query: RestartServiceRequest): Promise<RestartServiceResponse>;
    /**
     * 新增服务标签，或更新已有的服务标签。
     */
    UpdateServiceLabel(query: UpdateServiceLabelRequest): Promise<UpdateServiceLabelResponse>;
    /**
     * 删除已有的服务标签。
     */
    DeleteServiceLabel(query: DeleteServiceLabelRequest): Promise<DeleteServiceLabelResponse>;
    /**
     * 查询服务的容器列表。
     */
    ListServiceContainers(query: ListServiceContainersRequest): Promise<ListServiceContainersResponse>;
    /**
     * 查看服务的诊断详情。
     */
    DescribeServiceDiagnosis(query: DescribeServiceDiagnosisRequest): Promise<DescribeServiceDiagnosisResponse>;
    /**
     * 查看服务实例的诊断详情。
     */
    DescribeServiceInstanceDiagnosis(query: DescribeServiceInstanceDiagnosisRequest): Promise<DescribeServiceInstanceDiagnosisResponse>;
    /**
     * 查询抢占式实例历史价格。关于抢占式实例，请参考高级配置：抢占型实例选择。
     */
    DescribeSpotDiscountHistory(query: DescribeSpotDiscountHistoryRequest): Promise<DescribeSpotDiscountHistoryResponse>;
    /**
     * 删除私有网关。
     */
    DeleteGateway(query: DeleteGatewayRequest): Promise<DeleteGatewayResponse>;
    /**
     * 创建私有网关，目前仅支持在自运维资源组中创建私有网关。
     */
    CreateGateway(query: CreateGatewayRequest): Promise<CreateGatewayResponse>;
    /**
     * 查看私有网关详情。
     */
    DescribeGateway(query: DescribeGatewayRequest): Promise<DescribeGatewayResponse>;
    /**
     * 查看私有网关内网访问端点列表。
     */
    ListGatewayIntranetLinkedVpc(query: ListGatewayIntranetLinkedVpcRequest): Promise<ListGatewayIntranetLinkedVpcResponse>;
    /**
     * 删除私有网关内网访问端点。
     */
    DeleteGatewayIntranetLinkedVpc(query: DeleteGatewayIntranetLinkedVpcRequest): Promise<DeleteGatewayIntranetLinkedVpcResponse>;
    /**
     * 创建私有网关内网访问端点。
     */
    CreateGatewayIntranetLinkedVpc(query: CreateGatewayIntranetLinkedVpcRequest): Promise<CreateGatewayIntranetLinkedVpcResponse>;
    /**
     * 更新私有网关。
     */
    UpdateGateway(query: UpdateGatewayRequest): Promise<UpdateGatewayResponse>;
    /**
     * 创建应用服务。
     */
    CreateAppService(query: CreateAppServiceRequest): Promise<CreateAppServiceResponse>;
    /**
     * 更新应用服务。
     */
    UpdateAppService(query: UpdateAppServiceRequest): Promise<UpdateAppServiceResponse>;
    /**
     * 更新服务实例属性，目前只支持隔离服务实例。
     */
    UpdateServiceInstance(query: UpdateServiceInstanceRequest): Promise<UpdateServiceInstanceResponse>;
    /**
     * 复制服务。
     */
    CloneService(query: CloneServiceRequest): Promise<CloneServiceResponse>;
}
export default EAS;
