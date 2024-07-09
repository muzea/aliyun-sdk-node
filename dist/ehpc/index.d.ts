import { AddContainerAppRequest } from "./AddContainerApp/req";
import { AddContainerAppResponse } from "./AddContainerApp/res";
import { AddLocalNodesRequest } from "./AddLocalNodes/req";
import { AddLocalNodesResponse } from "./AddLocalNodes/res";
import { AddQueueRequest } from "./AddQueue/req";
import { AddQueueResponse } from "./AddQueue/res";
import { AddSecurityGroupRequest } from "./AddSecurityGroup/req";
import { AddSecurityGroupResponse } from "./AddSecurityGroup/res";
import { AddNodesRequest } from "./AddNodes/req";
import { AddNodesResponse } from "./AddNodes/res";
import { AddUsersRequest } from "./AddUsers/req";
import { AddUsersResponse } from "./AddUsers/res";
import { ApplyNodesRequest } from "./ApplyNodes/req";
import { ApplyNodesResponse } from "./ApplyNodes/res";
import { CreateGWSClusterRequest } from "./CreateGWSCluster/req";
import { CreateGWSClusterResponse } from "./CreateGWSCluster/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { CreateGWSImageRequest } from "./CreateGWSImage/req";
import { CreateGWSImageResponse } from "./CreateGWSImage/res";
import { CreateGWSInstanceRequest } from "./CreateGWSInstance/req";
import { CreateGWSInstanceResponse } from "./CreateGWSInstance/res";
import { CreateHybridClusterRequest } from "./CreateHybridCluster/req";
import { CreateHybridClusterResponse } from "./CreateHybridCluster/res";
import { CreateJobFileRequest } from "./CreateJobFile/req";
import { CreateJobFileResponse } from "./CreateJobFile/res";
import { CreateJobTemplateRequest } from "./CreateJobTemplate/req";
import { CreateJobTemplateResponse } from "./CreateJobTemplate/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { DeleteContainerAppsRequest } from "./DeleteContainerApps/req";
import { DeleteContainerAppsResponse } from "./DeleteContainerApps/res";
import { DeleteGWSClusterRequest } from "./DeleteGWSCluster/req";
import { DeleteGWSClusterResponse } from "./DeleteGWSCluster/res";
import { DeleteGWSInstanceRequest } from "./DeleteGWSInstance/req";
import { DeleteGWSInstanceResponse } from "./DeleteGWSInstance/res";
import { DeleteImageRequest } from "./DeleteImage/req";
import { DeleteImageResponse } from "./DeleteImage/res";
import { DeleteJobTemplatesRequest } from "./DeleteJobTemplates/req";
import { DeleteJobTemplatesResponse } from "./DeleteJobTemplates/res";
import { DeleteJobsRequest } from "./DeleteJobs/req";
import { DeleteJobsResponse } from "./DeleteJobs/res";
import { DeleteNodesRequest } from "./DeleteNodes/req";
import { DeleteNodesResponse } from "./DeleteNodes/res";
import { DeleteQueueRequest } from "./DeleteQueue/req";
import { DeleteQueueResponse } from "./DeleteQueue/res";
import { DeleteSecurityGroupRequest } from "./DeleteSecurityGroup/req";
import { DeleteSecurityGroupResponse } from "./DeleteSecurityGroup/res";
import { DeleteUsersRequest } from "./DeleteUsers/req";
import { DeleteUsersResponse } from "./DeleteUsers/res";
import { DescribeAutoScaleConfigRequest } from "./DescribeAutoScaleConfig/req";
import { DescribeAutoScaleConfigResponse } from "./DescribeAutoScaleConfig/res";
import { DescribeClusterRequest } from "./DescribeCluster/req";
import { DescribeClusterResponse } from "./DescribeCluster/res";
import { DescribeContainerAppRequest } from "./DescribeContainerApp/req";
import { DescribeContainerAppResponse } from "./DescribeContainerApp/res";
import { DescribeGWSClusterPolicyRequest } from "./DescribeGWSClusterPolicy/req";
import { DescribeGWSClusterPolicyResponse } from "./DescribeGWSClusterPolicy/res";
import { DescribeGWSClustersRequest } from "./DescribeGWSClusters/req";
import { DescribeGWSClustersResponse } from "./DescribeGWSClusters/res";
import { DescribeGWSImagesRequest } from "./DescribeGWSImages/req";
import { DescribeGWSImagesResponse } from "./DescribeGWSImages/res";
import { DescribeGWSInstancesRequest } from "./DescribeGWSInstances/req";
import { DescribeGWSInstancesResponse } from "./DescribeGWSInstances/res";
import { DescribeImageRequest } from "./DescribeImage/req";
import { DescribeImageResponse } from "./DescribeImage/res";
import { DescribeImageGatewayConfigRequest } from "./DescribeImageGatewayConfig/req";
import { DescribeImageGatewayConfigResponse } from "./DescribeImageGatewayConfig/res";
import { DescribeImagePriceRequest } from "./DescribeImagePrice/req";
import { DescribeImagePriceResponse } from "./DescribeImagePrice/res";
import { DescribeJobRequest } from "./DescribeJob/req";
import { DescribeJobResponse } from "./DescribeJob/res";
import { DescribeNFSClientStatusRequest } from "./DescribeNFSClientStatus/req";
import { DescribeNFSClientStatusResponse } from "./DescribeNFSClientStatus/res";
import { DescribePriceRequest } from "./DescribePrice/req";
import { DescribePriceResponse } from "./DescribePrice/res";
import { EditJobTemplateRequest } from "./EditJobTemplate/req";
import { EditJobTemplateResponse } from "./EditJobTemplate/res";
import { GetAccountingReportRequest } from "./GetAccountingReport/req";
import { GetAccountingReportResponse } from "./GetAccountingReport/res";
import { GetAutoScaleConfigRequest } from "./GetAutoScaleConfig/req";
import { GetAutoScaleConfigResponse } from "./GetAutoScaleConfig/res";
import { GetCloudMetricLogsRequest } from "./GetCloudMetricLogs/req";
import { GetCloudMetricLogsResponse } from "./GetCloudMetricLogs/res";
import { GetCloudMetricProfilingRequest } from "./GetCloudMetricProfiling/req";
import { GetCloudMetricProfilingResponse } from "./GetCloudMetricProfiling/res";
import { GetClusterVolumesRequest } from "./GetClusterVolumes/req";
import { GetClusterVolumesResponse } from "./GetClusterVolumes/res";
import { GetGWSConnectTicketRequest } from "./GetGWSConnectTicket/req";
import { GetGWSConnectTicketResponse } from "./GetGWSConnectTicket/res";
import { GetHybridClusterConfigRequest } from "./GetHybridClusterConfig/req";
import { GetHybridClusterConfigResponse } from "./GetHybridClusterConfig/res";
import { GetIfEcsTypeSupportHtConfigRequest } from "./GetIfEcsTypeSupportHtConfig/req";
import { GetIfEcsTypeSupportHtConfigResponse } from "./GetIfEcsTypeSupportHtConfig/res";
import { GetVisualServiceStatusRequest } from "./GetVisualServiceStatus/req";
import { GetVisualServiceStatusResponse } from "./GetVisualServiceStatus/res";
import { InitializeEHPCRequest } from "./InitializeEHPC/req";
import { InitializeEHPCResponse } from "./InitializeEHPC/res";
import { InstallSoftwareRequest } from "./InstallSoftware/req";
import { InstallSoftwareResponse } from "./InstallSoftware/res";
import { InvokeShellCommandRequest } from "./InvokeShellCommand/req";
import { InvokeShellCommandResponse } from "./InvokeShellCommand/res";
import { ListAvailableEcsTypesRequest } from "./ListAvailableEcsTypes/req";
import { ListAvailableEcsTypesResponse } from "./ListAvailableEcsTypes/res";
import { ListCloudMetricProfilingsRequest } from "./ListCloudMetricProfilings/req";
import { ListCloudMetricProfilingsResponse } from "./ListCloudMetricProfilings/res";
import { ListClusterLogsRequest } from "./ListClusterLogs/req";
import { ListClusterLogsResponse } from "./ListClusterLogs/res";
import { ListClustersRequest } from "./ListClusters/req";
import { ListClustersResponse } from "./ListClusters/res";
import { ListClustersMetaRequest } from "./ListClustersMeta/req";
import { ListClustersMetaResponse } from "./ListClustersMeta/res";
import { ListCommandsRequest } from "./ListCommands/req";
import { ListCommandsResponse } from "./ListCommands/res";
import { ListContainerAppsRequest } from "./ListContainerApps/req";
import { ListContainerAppsResponse } from "./ListContainerApps/res";
import { ListContainerImagesRequest } from "./ListContainerImages/req";
import { ListContainerImagesResponse } from "./ListContainerImages/res";
import { ListCpfsFileSystemsRequest } from "./ListCpfsFileSystems/req";
import { ListCpfsFileSystemsResponse } from "./ListCpfsFileSystems/res";
import { ListCurrentClientVersionRequest } from "./ListCurrentClientVersion/req";
import { ListCurrentClientVersionResponse } from "./ListCurrentClientVersion/res";
import { ListCustomImagesRequest } from "./ListCustomImages/req";
import { ListCustomImagesResponse } from "./ListCustomImages/res";
import { ListFileSystemWithMountTargetsRequest } from "./ListFileSystemWithMountTargets/req";
import { ListFileSystemWithMountTargetsResponse } from "./ListFileSystemWithMountTargets/res";
import { ListImagesRequest } from "./ListImages/req";
import { ListImagesResponse } from "./ListImages/res";
import { ListInstalledSoftwareRequest } from "./ListInstalledSoftware/req";
import { ListInstalledSoftwareResponse } from "./ListInstalledSoftware/res";
import { ListInvocationResultsRequest } from "./ListInvocationResults/req";
import { ListInvocationResultsResponse } from "./ListInvocationResults/res";
import { ListInvocationStatusRequest } from "./ListInvocationStatus/req";
import { ListInvocationStatusResponse } from "./ListInvocationStatus/res";
import { ListJobTemplatesRequest } from "./ListJobTemplates/req";
import { ListJobTemplatesResponse } from "./ListJobTemplates/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { ListNodesRequest } from "./ListNodes/req";
import { ListNodesResponse } from "./ListNodes/res";
import { ListNodesByQueueRequest } from "./ListNodesByQueue/req";
import { ListNodesByQueueResponse } from "./ListNodesByQueue/res";
import { ListNodesNoPagingRequest } from "./ListNodesNoPaging/req";
import { ListNodesNoPagingResponse } from "./ListNodesNoPaging/res";
import { ListPreferredEcsTypesRequest } from "./ListPreferredEcsTypes/req";
import { ListPreferredEcsTypesResponse } from "./ListPreferredEcsTypes/res";
import { ListQueuesRequest } from "./ListQueues/req";
import { ListQueuesResponse } from "./ListQueues/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { ListSecurityGroupsRequest } from "./ListSecurityGroups/req";
import { ListSecurityGroupsResponse } from "./ListSecurityGroups/res";
import { ListSoftwaresRequest } from "./ListSoftwares/req";
import { ListSoftwaresResponse } from "./ListSoftwares/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { ListVolumesRequest } from "./ListVolumes/req";
import { ListVolumesResponse } from "./ListVolumes/res";
import { ModifyClusterAttributesRequest } from "./ModifyClusterAttributes/req";
import { ModifyClusterAttributesResponse } from "./ModifyClusterAttributes/res";
import { ModifyContainerAppAttributesRequest } from "./ModifyContainerAppAttributes/req";
import { ModifyContainerAppAttributesResponse } from "./ModifyContainerAppAttributes/res";
import { ModifyImageGatewayConfigRequest } from "./ModifyImageGatewayConfig/req";
import { ModifyImageGatewayConfigResponse } from "./ModifyImageGatewayConfig/res";
import { ModifyUserGroupsRequest } from "./ModifyUserGroups/req";
import { ModifyUserGroupsResponse } from "./ModifyUserGroups/res";
import { ModifyUserPasswordsRequest } from "./ModifyUserPasswords/req";
import { ModifyUserPasswordsResponse } from "./ModifyUserPasswords/res";
import { ModifyVisualServicePasswdRequest } from "./ModifyVisualServicePasswd/req";
import { ModifyVisualServicePasswdResponse } from "./ModifyVisualServicePasswd/res";
import { MountNFSRequest } from "./MountNFS/req";
import { MountNFSResponse } from "./MountNFS/res";
import { PullImageRequest } from "./PullImage/req";
import { PullImageResponse } from "./PullImage/res";
import { QueryServicePackAndPriceRequest } from "./QueryServicePackAndPrice/req";
import { QueryServicePackAndPriceResponse } from "./QueryServicePackAndPrice/res";
import { RecoverClusterRequest } from "./RecoverCluster/req";
import { RecoverClusterResponse } from "./RecoverCluster/res";
import { RerunJobsRequest } from "./RerunJobs/req";
import { RerunJobsResponse } from "./RerunJobs/res";
import { ResetNodesRequest } from "./ResetNodes/req";
import { ResetNodesResponse } from "./ResetNodes/res";
import { RunCloudMetricProfilingRequest } from "./RunCloudMetricProfiling/req";
import { RunCloudMetricProfilingResponse } from "./RunCloudMetricProfiling/res";
import { SetAutoScaleConfigRequest } from "./SetAutoScaleConfig/req";
import { SetAutoScaleConfigResponse } from "./SetAutoScaleConfig/res";
import { SetGWSClusterPolicyRequest } from "./SetGWSClusterPolicy/req";
import { SetGWSClusterPolicyResponse } from "./SetGWSClusterPolicy/res";
import { SetGWSInstanceNameRequest } from "./SetGWSInstanceName/req";
import { SetGWSInstanceNameResponse } from "./SetGWSInstanceName/res";
import { SetGWSInstanceUserRequest } from "./SetGWSInstanceUser/req";
import { SetGWSInstanceUserResponse } from "./SetGWSInstanceUser/res";
import { SetQueueRequest } from "./SetQueue/req";
import { SetQueueResponse } from "./SetQueue/res";
import { StartClusterRequest } from "./StartCluster/req";
import { StartClusterResponse } from "./StartCluster/res";
import { StartGWSInstanceRequest } from "./StartGWSInstance/req";
import { StartGWSInstanceResponse } from "./StartGWSInstance/res";
import { StartNodesRequest } from "./StartNodes/req";
import { StartNodesResponse } from "./StartNodes/res";
import { StartVisualServiceRequest } from "./StartVisualService/req";
import { StartVisualServiceResponse } from "./StartVisualService/res";
import { StopClusterRequest } from "./StopCluster/req";
import { StopClusterResponse } from "./StopCluster/res";
import { StopGWSInstanceRequest } from "./StopGWSInstance/req";
import { StopGWSInstanceResponse } from "./StopGWSInstance/res";
import { StopJobsRequest } from "./StopJobs/req";
import { StopJobsResponse } from "./StopJobs/res";
import { StopNodesRequest } from "./StopNodes/req";
import { StopNodesResponse } from "./StopNodes/res";
import { StopVisualServiceRequest } from "./StopVisualService/req";
import { StopVisualServiceResponse } from "./StopVisualService/res";
import { SubmitJobRequest } from "./SubmitJob/req";
import { SubmitJobResponse } from "./SubmitJob/res";
import { UninstallSoftwareRequest } from "./UninstallSoftware/req";
import { UninstallSoftwareResponse } from "./UninstallSoftware/res";
import { UpdateClusterVolumesRequest } from "./UpdateClusterVolumes/req";
import { UpdateClusterVolumesResponse } from "./UpdateClusterVolumes/res";
import { UpdateQueueConfigRequest } from "./UpdateQueueConfig/req";
import { UpdateQueueConfigResponse } from "./UpdateQueueConfig/res";
import { UpgradeClientRequest } from "./UpgradeClient/req";
import { UpgradeClientResponse } from "./UpgradeClient/res";
import { AddExistedNodesRequest } from "./AddExistedNodes/req";
import { AddExistedNodesResponse } from "./AddExistedNodes/res";
import { GetSchedulerInfoRequest } from "./GetSchedulerInfo/req";
import { GetSchedulerInfoResponse } from "./GetSchedulerInfo/res";
import { SetSchedulerInfoRequest } from "./SetSchedulerInfo/req";
import { SetSchedulerInfoResponse } from "./SetSchedulerInfo/res";
import { SyncUsersRequest } from "./SyncUsers/req";
import { SyncUsersResponse } from "./SyncUsers/res";
import { ListJobsWithFiltersRequest } from "./ListJobsWithFilters/req";
import { ListJobsWithFiltersResponse } from "./ListJobsWithFilters/res";
import { GetPostScriptsRequest } from "./GetPostScripts/req";
import { GetPostScriptsResponse } from "./GetPostScripts/res";
import { SetPostScriptsRequest } from "./SetPostScripts/req";
import { SetPostScriptsResponse } from "./SetPostScripts/res";
import { ListUpgradeClientsRequest } from "./ListUpgradeClients/req";
import { ListUpgradeClientsResponse } from "./ListUpgradeClients/res";
import { SummaryImagesRequest } from "./SummaryImages/req";
import { SummaryImagesResponse } from "./SummaryImages/res";
import { DeleteLocalImageRequest } from "./DeleteLocalImage/req";
import { DeleteLocalImageResponse } from "./DeleteLocalImage/res";
import { SummaryImagesInfoRequest } from "./SummaryImagesInfo/req";
import { SummaryImagesInfoResponse } from "./SummaryImagesInfo/res";
import { GetUserImageRequest } from "./GetUserImage/req";
import { GetUserImageResponse } from "./GetUserImage/res";
import { InspectImageRequest } from "./InspectImage/req";
import { InspectImageResponse } from "./InspectImage/res";
import { GetCommonImageRequest } from "./GetCommonImage/req";
import { GetCommonImageResponse } from "./GetCommonImage/res";
import { DescribeEstackImageRequest } from "./DescribeEstackImage/req";
import { DescribeEstackImageResponse } from "./DescribeEstackImage/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UnTagResourcesRequest } from "./UnTagResources/req";
import { UnTagResourcesResponse } from "./UnTagResources/res";
import { ListCommunityImagesRequest } from "./ListCommunityImages/req";
import { ListCommunityImagesResponse } from "./ListCommunityImages/res";
import { ListUsersAsyncRequest } from "./ListUsersAsync/req";
import { ListUsersAsyncResponse } from "./ListUsersAsync/res";
import { GetJobLogRequest } from "./GetJobLog/req";
import { GetJobLogResponse } from "./GetJobLog/res";
import { StopServerlessJobsRequest } from "./StopServerlessJobs/req";
import { StopServerlessJobsResponse } from "./StopServerlessJobs/res";
import { ListServerlessJobsRequest } from "./ListServerlessJobs/req";
import { ListServerlessJobsResponse } from "./ListServerlessJobs/res";
import { SubmitServerlessJobRequest } from "./SubmitServerlessJob/req";
import { SubmitServerlessJobResponse } from "./SubmitServerlessJob/res";
import { DescribeServerlessJobsRequest } from "./DescribeServerlessJobs/req";
import { DescribeServerlessJobsResponse } from "./DescribeServerlessJobs/res";

interface EHPC {
    /**
     * 新增容器应用操作不会进行镜像的拉取，拉取镜像请参照PullImage。
     */
    AddContainerApp(query: AddContainerAppRequest): Promise<AddContainerAppResponse>;
    /**
     * 增加本地计算节点到混合云集群或者云上集群。
     */
    AddLocalNodes(query: AddLocalNodesRequest): Promise<AddLocalNodesResponse>;
    /**
     * 调用AddQueue为指定集群新建一个队列。
     */
    AddQueue(query: AddQueueRequest): Promise<AddQueueResponse>;
    /**
     * 调用AddSecurityGroup将集群加入到指定的安全组。
     */
    AddSecurityGroup(query: AddSecurityGroupRequest): Promise<AddSecurityGroupResponse>;
    /**
     * 调用AddNodes添加一个或多个计算节点到指定集群。
     */
    AddNodes(query: AddNodesRequest): Promise<AddNodesResponse>;
    /**
     * 调用AddUsers为指定集群新增一个或多个用户。
     */
    AddUsers(query: AddUsersRequest): Promise<AddUsersResponse>;
    /**
     * 调用ApplyNodes添加一个或多个按量计费或抢占式计算节点到指定集群中。
     */
    ApplyNodes(query: ApplyNodesRequest): Promise<ApplyNodesResponse>;
    /**
     * 每个E-HPC集群只能创建一个可视化服务。
     */
    CreateGWSCluster(query: CreateGWSClusterRequest): Promise<CreateGWSClusterResponse>;
    /**
     * 创建一个按量付费或者预付费（包年包月）集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 调用CreateGWSImage创建一个自定义的可视化实例镜像。
     */
    CreateGWSImage(query: CreateGWSImageRequest): Promise<CreateGWSImageResponse>;
    /**
     * 调用CreateGWSInstance创建一个可视化实例。
     */
    CreateGWSInstance(query: CreateGWSInstanceRequest): Promise<CreateGWSInstanceResponse>;
    /**
     * 调用CreateHybridCluster创建一个混合云集群。
     */
    CreateHybridCluster(query: CreateHybridClusterRequest): Promise<CreateHybridClusterResponse>;
    /**
     * 调用CreateJobFile创建一个作业文件。
     */
    CreateJobFile(query: CreateJobFileRequest): Promise<CreateJobFileResponse>;
    /**
     * 调用CreateJobTemplate创建作业模板。
     */
    CreateJobTemplate(query: CreateJobTemplateRequest): Promise<CreateJobTemplateResponse>;
    /**
     * 调用DeleteCluster释放指定集群。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 调用DeleteContainerApps批量删除容器应用。
     */
    DeleteContainerApps(query: DeleteContainerAppsRequest): Promise<DeleteContainerAppsResponse>;
    /**
     * 调用DeleteGWSCluster删除可视化服务集群。
     */
    DeleteGWSCluster(query: DeleteGWSClusterRequest): Promise<DeleteGWSClusterResponse>;
    /**
     * 调用DeleteGWSInstance删除可视化实例。
     */
    DeleteGWSInstance(query: DeleteGWSInstanceRequest): Promise<DeleteGWSInstanceResponse>;
    /**
     * 调用DeleteImage删除本地镜像。
     */
    DeleteImage(query: DeleteImageRequest): Promise<DeleteImageResponse>;
    /**
     * 调用DeleteJobTemplates删除一个或多个作业模板。
     */
    DeleteJobTemplates(query: DeleteJobTemplatesRequest): Promise<DeleteJobTemplatesResponse>;
    /**
     * 调用DeleteJobs删除指定集群中一个或多个作业。
     */
    DeleteJobs(query: DeleteJobsRequest): Promise<DeleteJobsResponse>;
    /**
     * 调用DeleteNodes删除指定集群中一个或多个计算节点。
     */
    DeleteNodes(query: DeleteNodesRequest): Promise<DeleteNodesResponse>;
    /**
     * 调用DeleteQueue删除一个集群中的队列。
     */
    DeleteQueue(query: DeleteQueueRequest): Promise<DeleteQueueResponse>;
    /**
     * 调用DeleteSecurityGroup将集群移出指定的安全组。
     */
    DeleteSecurityGroup(query: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse>;
    /**
     * 调用DeleteUsers删除一个或多个集群用户。
     */
    DeleteUsers(query: DeleteUsersRequest): Promise<DeleteUsersResponse>;
    /**
     * 调用DescribeAutoScaleConfig查询指定集群的自动伸缩配置信息。
     */
    DescribeAutoScaleConfig(query: DescribeAutoScaleConfigRequest): Promise<DescribeAutoScaleConfigResponse>;
    /**
     * 调用DescribeCluster查询指定集群信息。
     */
    DescribeCluster(query: DescribeClusterRequest): Promise<DescribeClusterResponse>;
    /**
     * 调用DescribeContainerApp查询指定容器应用信息。
     */
    DescribeContainerApp(query: DescribeContainerAppRequest): Promise<DescribeContainerAppResponse>;
    /**
     * 调用DescribeGWSClusterPolicy查看可视化服务的配置信息。
     */
    DescribeGWSClusterPolicy(query: DescribeGWSClusterPolicyRequest): Promise<DescribeGWSClusterPolicyResponse>;
    /**
     * 调用DescribeGWSClusters查询可视化服务集群信息。
     */
    DescribeGWSClusters(query: DescribeGWSClustersRequest): Promise<DescribeGWSClustersResponse>;
    /**
     * 调用DescribeGWSImages查询可视化镜像信息。
     */
    DescribeGWSImages(query: DescribeGWSImagesRequest): Promise<DescribeGWSImagesResponse>;
    /**
     * 调用DescribeGWSInstances查询可视化集群实例信息。
     */
    DescribeGWSInstances(query: DescribeGWSInstancesRequest): Promise<DescribeGWSInstancesResponse>;
    /**
     * 调用DescribeImage查询指定集群本地镜像信息。
     */
    DescribeImage(query: DescribeImageRequest): Promise<DescribeImageResponse>;
    /**
     * 调用DescribeImageGatewayConfig查询指定集群shifter类型容器的镜像网关配置文件。
     */
    DescribeImageGatewayConfig(query: DescribeImageGatewayConfigRequest): Promise<DescribeImageGatewayConfigResponse>;
    /**
     * 调用DescribeImagePrice查询E-HPC支持的镜像市场的镜像价格。
     */
    DescribeImagePrice(query: DescribeImagePriceRequest): Promise<DescribeImagePriceResponse>;
    /**
     * 调用DescribeJob查询一个集群内指定作业的详细信息。
     */
    DescribeJob(query: DescribeJobRequest): Promise<DescribeJobResponse>;
    /**
     * 调用DescribeNFSClientStatus查询指定可视化实例部署NFS客户端的状态。
     */
    DescribeNFSClientStatus(query: DescribeNFSClientStatusRequest): Promise<DescribeNFSClientStatusResponse>;
    /**
     * 调用DescribePrice查询集群价格配置信息。
     */
    DescribePrice(query: DescribePriceRequest): Promise<DescribePriceResponse>;
    /**
     * 调用EditJobTemplate编辑作业模板。
     */
    EditJobTemplate(query: EditJobTemplateRequest): Promise<EditJobTemplateResponse>;
    /**
     * 调用GetAccountingReport获取指定集群的资源报表信息。
     */
    GetAccountingReport(query: GetAccountingReportRequest): Promise<GetAccountingReportResponse>;
    /**
     * 调用GetAutoScaleConfig获取指定集群的自动伸缩配置信息。
     */
    GetAutoScaleConfig(query: GetAutoScaleConfigRequest): Promise<GetAutoScaleConfigResponse>;
    /**
     * 调用GetCloudMetricLogs读取EHPC性能指标（CloudMetrics）日志。
     */
    GetCloudMetricLogs(query: GetCloudMetricLogsRequest): Promise<GetCloudMetricLogsResponse>;
    /**
     * 调用GetCloudMetricProfiling获取集群任务性能剖析结果。
     */
    GetCloudMetricProfiling(query: GetCloudMetricProfilingRequest): Promise<GetCloudMetricProfilingResponse>;
    /**
     * 调用GetClusterVolumes查询挂载到E-HPC指定集群中的存储资源。
     */
    GetClusterVolumes(query: GetClusterVolumesRequest): Promise<GetClusterVolumesResponse>;
    /**
     * 调用GetGWSConnectTicket获取连接可视化实例的Ticket。
     */
    GetGWSConnectTicket(query: GetGWSConnectTicketRequest): Promise<GetGWSConnectTicketResponse>;
    /**
     * 调用GetHybridClusterConfig获取指定混合云集群或指定计算节点的配置信息。
     */
    GetHybridClusterConfig(query: GetHybridClusterConfigRequest): Promise<GetHybridClusterConfigResponse>;
    /**
     * 调用GetIfEcsTypeSupportHtConfig查询指定的实例规格是否支持开启和关闭超线程。
     */
    GetIfEcsTypeSupportHtConfig(query: GetIfEcsTypeSupportHtConfigRequest): Promise<GetIfEcsTypeSupportHtConfigResponse>;
    /**
     * 调用GetVisualServiceStatus查询指定集群中VNC远程可视化服务状态。
     */
    GetVisualServiceStatus(query: GetVisualServiceStatusRequest): Promise<GetVisualServiceStatusResponse>;
    /**
     * 创建EHPC的服务关联角色（首次使用必须）。
     */
    InitializeEHPC(query: InitializeEHPCRequest): Promise<InitializeEHPCResponse>;
    /**
     * 调用InstallSoftware为指定集群安装软件。
     */
    InstallSoftware(query: InstallSoftwareRequest): Promise<InstallSoftwareResponse>;
    /**
     * 调用InvokeShellCommand在指定的集群节点内执行交互命令。
     */
    InvokeShellCommand(query: InvokeShellCommandRequest): Promise<InvokeShellCommandResponse>;
    /**
     * 调用ListAvailableEcsTypes查询可用的ECS实例规格资源。
     */
    ListAvailableEcsTypes(query: ListAvailableEcsTypesRequest): Promise<ListAvailableEcsTypesResponse>;
    /**
     * 调用ListCloudMetricProfilings查询指定集群的历史性能剖析信息。
     */
    ListCloudMetricProfilings(query: ListCloudMetricProfilingsRequest): Promise<ListCloudMetricProfilingsResponse>;
    /**
     * 调用ListClusterLogs查询集群三天内的操作记录。
     */
    ListClusterLogs(query: ListClusterLogsRequest): Promise<ListClusterLogsResponse>;
    /**
     * 查询用户账号中在每个地域拥有的所有集群的列表。
     */
    ListClusters(query: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * 调用ListClustersMeta查询集群元数据列表。
     */
    ListClustersMeta(query: ListClustersMetaRequest): Promise<ListClustersMetaResponse>;
    /**
     * 调用ListCommands查看指定集群内的交互命令列表。
     */
    ListCommands(query: ListCommandsRequest): Promise<ListCommandsResponse>;
    /**
     * 调用ListContainerApps查询容器应用列表及详细信息。
     */
    ListContainerApps(query: ListContainerAppsRequest): Promise<ListContainerAppsResponse>;
    /**
     * 调用ListContainerImages查询指定集群的本地镜像列表。
     */
    ListContainerImages(query: ListContainerImagesRequest): Promise<ListContainerImagesResponse>;
    /**
     * 调用 ListCpfsFileSystems查询CPFS文件系统及其挂载点信息。
     */
    ListCpfsFileSystems(query: ListCpfsFileSystemsRequest): Promise<ListCpfsFileSystemsResponse>;
    /**
     * 调用ListCurrentClientVersion查询集群客户端（ehpcutil）的最新版本号。
     */
    ListCurrentClientVersion(query: ListCurrentClientVersionRequest): Promise<ListCurrentClientVersionResponse>;
    /**
     * 查询E-HPC产品支持的自定义和共享的镜像列表。
     */
    ListCustomImages(query: ListCustomImagesRequest): Promise<ListCustomImagesResponse>;
    /**
     * 调用ListFileSystemWithMountTargets查询文件系统和挂载点。
     */
    ListFileSystemWithMountTargets(query: ListFileSystemWithMountTargetsRequest): Promise<ListFileSystemWithMountTargetsResponse>;
    /**
     * 调用ListImages查询E-HPC支持的镜像列表。
     */
    ListImages(query: ListImagesRequest): Promise<ListImagesResponse>;
    /**
     * 调用ListInstalledSoftware查询指定集群已安装的软件列表。
     */
    ListInstalledSoftware(query: ListInstalledSoftwareRequest): Promise<ListInstalledSoftwareResponse>;
    /**
     * 调用ListInvocationResults查看指定集群内交互命令的运行结果。
     */
    ListInvocationResults(query: ListInvocationResultsRequest): Promise<ListInvocationResultsResponse>;
    /**
     * 调用ListInvocationStatus查看执行的交互命令运行的状态。
     */
    ListInvocationStatus(query: ListInvocationStatusRequest): Promise<ListInvocationStatusResponse>;
    /**
     * 调用ListJobTemplates查询作业模板列表。
     */
    ListJobTemplates(query: ListJobTemplatesRequest): Promise<ListJobTemplatesResponse>;
    /**
     * 调用ListJobs查询指定集群中的作业列表。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 调用ListNodes查询指定集群中的节点列表。
     */
    ListNodes(query: ListNodesRequest): Promise<ListNodesResponse>;
    /**
     * 按队列分组查询用户账户下单个集群的节点信息。
     */
    ListNodesByQueue(query: ListNodesByQueueRequest): Promise<ListNodesByQueueResponse>;
    /**
     * 不分页查询用户指定集群中的所有节点信息。
     */
    ListNodesNoPaging(query: ListNodesNoPagingRequest): Promise<ListNodesNoPagingResponse>;
    /**
     * 查询 E-HPC 推荐的 ECS 实例规格。
     */
    ListPreferredEcsTypes(query: ListPreferredEcsTypesRequest): Promise<ListPreferredEcsTypesResponse>;
    /**
     * 调用ListQueues查询指定集群的队列列表。
     */
    ListQueues(query: ListQueuesRequest): Promise<ListQueuesResponse>;
    /**
     * 调用ListRegions查询可以使用E-HPC的地域列表。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 调用ListSecurityGroups查询指定集群加入的安全组列表。
     */
    ListSecurityGroups(query: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse>;
    /**
     * 查询 E-HPC 产品支持安装的软件列表。
     */
    ListSoftwares(query: ListSoftwaresRequest): Promise<ListSoftwaresResponse>;
    /**
     * 调用ListTasks查询指定集群下异步API的返回结果。
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    /**
     * 调用ListUsers查询集群用户列表。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 调用ListVolumes查询文件系统列表。
     */
    ListVolumes(query: ListVolumesRequest): Promise<ListVolumesResponse>;
    /**
     * 调用ModifyClusterAttributes修改指定集群的基本信息，包括修改集群名称、集群描述和集群镜像。
     */
    ModifyClusterAttributes(query: ModifyClusterAttributesRequest): Promise<ModifyClusterAttributesResponse>;
    /**
     * 调用ModifyContainerAppAttributes修改一个容器应用的部分属性，目前支持修改容器应用的描述。
     */
    ModifyContainerAppAttributes(query: ModifyContainerAppAttributesRequest): Promise<ModifyContainerAppAttributesResponse>;
    /**
     * 调用ModifyImageGatewayConfig修改指定集群的镜像网关配置文件。
     */
    ModifyImageGatewayConfig(query: ModifyImageGatewayConfigRequest): Promise<ModifyImageGatewayConfigResponse>;
    /**
     * 调用ModifyUserGroups修改一个或多个用户所属的用户组。
     */
    ModifyUserGroups(query: ModifyUserGroupsRequest): Promise<ModifyUserGroupsResponse>;
    /**
     * 调用ModifyUserPasswords修改一个或多个用户的密码。
     */
    ModifyUserPasswords(query: ModifyUserPasswordsRequest): Promise<ModifyUserPasswordsResponse>;
    /**
     * 调用ModifyVisualServicePasswd设置指定集群的VNC远程可视化服务的连接密码。
     */
    ModifyVisualServicePasswd(query: ModifyVisualServicePasswdRequest): Promise<ModifyVisualServicePasswdResponse>;
    /**
     * 调用MountNFS在可视化实例挂载NAS。
     */
    MountNFS(query: MountNFSRequest): Promise<MountNFSResponse>;
    /**
     * 调用PullImage来拉取镜像。
     */
    PullImage(query: PullImageRequest): Promise<PullImageResponse>;
    /**
     * 调用QueryServicePackAndPrice查询集群的总核数、购买的服务包信息，以及当前按量付费的情况。
     */
    QueryServicePackAndPrice(query: QueryServicePackAndPriceRequest): Promise<QueryServicePackAndPriceResponse>;
    /**
     * 调用RecoverCluster重置并修复异常集群。
     */
    RecoverCluster(query: RecoverClusterRequest): Promise<RecoverClusterResponse>;
    /**
     * 调用RerunJobs重新运行一个或多个作业。
     */
    RerunJobs(query: RerunJobsRequest): Promise<RerunJobsResponse>;
    /**
     * 调用ResetNodes重置一个或多个计算节点。
     */
    ResetNodes(query: ResetNodesRequest): Promise<ResetNodesResponse>;
    /**
     * 调用RunCloudMetricProfiling启动指定集群的性能剖析。
     */
    RunCloudMetricProfiling(query: RunCloudMetricProfilingRequest): Promise<RunCloudMetricProfilingResponse>;
    /**
     * 调用SetAutoScaleConfig设置指定集群的自动伸缩配置信息。
     */
    SetAutoScaleConfig(query: SetAutoScaleConfigRequest): Promise<SetAutoScaleConfigResponse>;
    /**
     * 调用SetGWSClusterPolicy为可视化服务配置策略。
     */
    SetGWSClusterPolicy(query: SetGWSClusterPolicyRequest): Promise<SetGWSClusterPolicyResponse>;
    /**
     * 调用SetGWSInstanceName设置可视化实例名称。
     */
    SetGWSInstanceName(query: SetGWSInstanceNameRequest): Promise<SetGWSInstanceNameResponse>;
    /**
     * 调用SetGWSInstanceUser为可视化实例分配可使用该实例的用户。
     */
    SetGWSInstanceUser(query: SetGWSInstanceUserRequest): Promise<SetGWSInstanceUserResponse>;
    /**
     * 调用SetQueue移动计算节点到指定队列。
     */
    SetQueue(query: SetQueueRequest): Promise<SetQueueResponse>;
    /**
     * 调用StartCluster启动指定集群。
     */
    StartCluster(query: StartClusterRequest): Promise<StartClusterResponse>;
    /**
     * 调用StartGWSInstance启动一个可视化实例。
     */
    StartGWSInstance(query: StartGWSInstanceRequest): Promise<StartGWSInstanceResponse>;
    /**
     * 调用StartNodes启动集群中的一个或多个节点。
     */
    StartNodes(query: StartNodesRequest): Promise<StartNodesResponse>;
    /**
     * 调用StartVisualService启动指定集群的VNC远程可视化服务。
     */
    StartVisualService(query: StartVisualServiceRequest): Promise<StartVisualServiceResponse>;
    /**
     * 调用StopCluster停止指定集群。
     */
    StopCluster(query: StopClusterRequest): Promise<StopClusterResponse>;
    /**
     * 调用StopGWSInstance停止一个可视化实例。
     */
    StopGWSInstance(query: StopGWSInstanceRequest): Promise<StopGWSInstanceResponse>;
    /**
     * 调用StopJobs停止指定集群中一个或多个作业。
     */
    StopJobs(query: StopJobsRequest): Promise<StopJobsResponse>;
    /**
     * 调用StopNodes停止集群中的一个或多个节点。
     */
    StopNodes(query: StopNodesRequest): Promise<StopNodesResponse>;
    /**
     * 调用StopVisualService停止指定集群的VNC远程可视化服务。
     */
    StopVisualService(query: StopVisualServiceRequest): Promise<StopVisualServiceResponse>;
    /**
     * 调用SubmitJob在指定集群提交作业。
     */
    SubmitJob(query: SubmitJobRequest): Promise<SubmitJobResponse>;
    /**
     * 调用UninstallSoftware卸载指定集群中已安装的软件。
     */
    UninstallSoftware(query: UninstallSoftwareRequest): Promise<UninstallSoftwareResponse>;
    /**
     * 调用UpdateClusterVolumes为指定集群挂载新的存储资源。
     */
    UpdateClusterVolumes(query: UpdateClusterVolumesRequest): Promise<UpdateClusterVolumesResponse>;
    /**
     * 为集群中的队列更新资源组和计算节点实例的信息。
     */
    UpdateQueueConfig(query: UpdateQueueConfigRequest): Promise<UpdateQueueConfigResponse>;
    /**
     * 调用UpgradeClient升级集群客户端（ehpcutil）到目标版本。
     */
    UpgradeClient(query: UpgradeClientRequest): Promise<UpgradeClientResponse>;
    /**
     * 添加一个或多个已创建的ECS实例作为计算节点，加入到指定集群中。
     */
    AddExistedNodes(query: AddExistedNodesRequest): Promise<AddExistedNodesResponse>;
    /**
     * 调用GetSchedulerInfo查询指定集群的调度信息。
     */
    GetSchedulerInfo(query: GetSchedulerInfoRequest): Promise<GetSchedulerInfoResponse>;
    /**
     * 为指定集群设置调度器配置信息。
     */
    SetSchedulerInfo(query: SetSchedulerInfoRequest): Promise<SetSchedulerInfoResponse>;
    /**
     * 调用SyncUsers在混合云代理模式下，同步本地集群用户到线上混合云集群中。
     */
    SyncUsers(query: SyncUsersRequest): Promise<SyncUsersResponse>;
    /**
     * 按照相关参数查询指定作业详情。
     */
    ListJobsWithFilters(query: ListJobsWithFiltersRequest): Promise<ListJobsWithFiltersResponse>;
    /**
     * 调用GetPostScripts查询指定集群的后处理脚本。
     */
    GetPostScripts(query: GetPostScriptsRequest): Promise<GetPostScriptsResponse>;
    /**
     * 调用SetPostScripts设置集群后处理脚本。
     */
    SetPostScripts(query: SetPostScriptsRequest): Promise<SetPostScriptsResponse>;
    /**
     * 调用ListUpgradeClients查询集群当前可升级的客户端（ehpcutil）最新版本和历史升级操作。
     */
    ListUpgradeClients(query: ListUpgradeClientsRequest): Promise<ListUpgradeClientsResponse>;
    /**
     * 调用SummaryImages获取指定集群上的全部镜像名称，便于您管理集群上的镜像。
     */
    SummaryImages(query: SummaryImagesRequest): Promise<SummaryImagesResponse>;
    /**
     * 调用DeleteLocalImage删除已下载到集群的镜像。
     */
    DeleteLocalImage(query: DeleteLocalImageRequest): Promise<DeleteLocalImageResponse>;
    /**
     * 调用SummaryImagesInfo获取指定集群上已有镜像的详细信息，包括镜像获取日期，镜像大小等内容。
     */
    SummaryImagesInfo(query: SummaryImagesInfoRequest): Promise<SummaryImagesInfoResponse>;
    /**
     * 调用GetUserImage将您保存在OSS中的自有镜像，拉取到指定集群中，并按E-HPC标准镜像管理方式进行管理。
     */
    GetUserImage(query: GetUserImageRequest): Promise<GetUserImageResponse>;
    /**
     * 调用InspectImage展示镜像构建信息，即容器镜像inspect信息。
     */
    InspectImage(query: InspectImageRequest): Promise<InspectImageResponse>;
    /**
     * 获取ehpc当前提供的镜像，包括intel oneapi镜像，pytorch镜像，TensorFlow镜像等。
     */
    GetCommonImage(query: GetCommonImageRequest): Promise<GetCommonImageResponse>;
    /**
     * 调用DescribeEstackImage查询E-HPC基础镜像。
     */
    DescribeEstackImage(query: DescribeEstackImageRequest): Promise<DescribeEstackImageResponse>;
    /**
     * 调用TagResources为指定资源创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用ListTagResources查询资源绑定的标签信息。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用UnTagResources为指定的资源解绑标签。
     */
    UnTagResources(query: UnTagResourcesRequest): Promise<UnTagResourcesResponse>;
    /**
     * 调用ListCommunityImages查询社区镜像。
     */
    ListCommunityImages(query: ListCommunityImagesRequest): Promise<ListCommunityImagesResponse>;
    /**
     * 调用ListUsersAsync异步查询集群中的用户列表。
     */
    ListUsersAsync(query: ListUsersAsyncRequest): Promise<ListUsersAsyncResponse>;
    /**
     * 获取指定作业的输出日志。
     */
    GetJobLog(query: GetJobLogRequest): Promise<GetJobLogResponse>;
    /**
     * 按照作业ID或子任务ID（数组作业）停止集群中一个或多个Serverless作业。当传入数组作业的作业ID时，会停止该作业下的所有子任务。
     */
    StopServerlessJobs(query: StopServerlessJobsRequest): Promise<StopServerlessJobsResponse>;
    /**
     * 按照过滤条件查询Serverless作业列表。
     */
    ListServerlessJobs(query: ListServerlessJobsRequest): Promise<ListServerlessJobsResponse>;
    /**
     * 调用SubmitServerlessJob提交Serverless作业到E-HPC集群。
     */
    SubmitServerlessJob(query: SubmitServerlessJobRequest): Promise<SubmitServerlessJobResponse>;
    /**
     * 按照作业ID或子任务ID（数组作业）查询Serverless作业详细信息。当前仅支持传入单个作业ID或单个子任务ID。
     */
    DescribeServerlessJobs(query: DescribeServerlessJobsRequest): Promise<DescribeServerlessJobsResponse>;
}
export default EHPC;
