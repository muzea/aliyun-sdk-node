import { AddContainerAppRequest } from "./AddContainerApp/req";
import { AddContainerAppResponse } from "./AddContainerApp/res";
import { AddLocalNodesRequest } from "./AddLocalNodes/req";
import { AddLocalNodesResponse } from "./AddLocalNodes/res";
import { AddNodesRequest } from "./AddNodes/req";
import { AddNodesResponse } from "./AddNodes/res";
import { AddQueueRequest } from "./AddQueue/req";
import { AddQueueResponse } from "./AddQueue/res";
import { AddUsersRequest } from "./AddUsers/req";
import { AddUsersResponse } from "./AddUsers/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
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
import { DeleteUsersRequest } from "./DeleteUsers/req";
import { DeleteUsersResponse } from "./DeleteUsers/res";
import { DescribeAutoScaleConfigRequest } from "./DescribeAutoScaleConfig/req";
import { DescribeAutoScaleConfigResponse } from "./DescribeAutoScaleConfig/res";
import { DescribeClusterRequest } from "./DescribeCluster/req";
import { DescribeClusterResponse } from "./DescribeCluster/res";
import { DescribeContainerAppRequest } from "./DescribeContainerApp/req";
import { DescribeContainerAppResponse } from "./DescribeContainerApp/res";
import { DescribeImageRequest } from "./DescribeImage/req";
import { DescribeImageResponse } from "./DescribeImage/res";
import { DescribeImageGatewayConfigRequest } from "./DescribeImageGatewayConfig/req";
import { DescribeImageGatewayConfigResponse } from "./DescribeImageGatewayConfig/res";
import { DescribeImagePriceRequest } from "./DescribeImagePrice/req";
import { DescribeImagePriceResponse } from "./DescribeImagePrice/res";
import { DescribeJobRequest } from "./DescribeJob/req";
import { DescribeJobResponse } from "./DescribeJob/res";
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
import { GetHybridClusterConfigRequest } from "./GetHybridClusterConfig/req";
import { GetHybridClusterConfigResponse } from "./GetHybridClusterConfig/res";
import { GetVisualServiceStatusRequest } from "./GetVisualServiceStatus/req";
import { GetVisualServiceStatusResponse } from "./GetVisualServiceStatus/res";
import { InstallSoftwareRequest } from "./InstallSoftware/req";
import { InstallSoftwareResponse } from "./InstallSoftware/res";
import { InvokeShellCommandRequest } from "./InvokeShellCommand/req";
import { InvokeShellCommandResponse } from "./InvokeShellCommand/res";
import { ListAvailableEcsTypesRequest } from "./ListAvailableEcsTypes/req";
import { ListAvailableEcsTypesResponse } from "./ListAvailableEcsTypes/res";
import { ListAvailableFileSystemTypesRequest } from "./ListAvailableFileSystemTypes/req";
import { ListAvailableFileSystemTypesResponse } from "./ListAvailableFileSystemTypes/res";
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
import { ListSoftwaresRequest } from "./ListSoftwares/req";
import { ListSoftwaresResponse } from "./ListSoftwares/res";
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
import { PullImageRequest } from "./PullImage/req";
import { PullImageResponse } from "./PullImage/res";
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
import { SetJobUserRequest } from "./SetJobUser/req";
import { SetJobUserResponse } from "./SetJobUser/res";
import { SetQueueRequest } from "./SetQueue/req";
import { SetQueueResponse } from "./SetQueue/res";
import { StartClusterRequest } from "./StartCluster/req";
import { StartClusterResponse } from "./StartCluster/res";
import { StartNodesRequest } from "./StartNodes/req";
import { StartNodesResponse } from "./StartNodes/res";
import { StartVisualServiceRequest } from "./StartVisualService/req";
import { StartVisualServiceResponse } from "./StartVisualService/res";
import { StopClusterRequest } from "./StopCluster/req";
import { StopClusterResponse } from "./StopCluster/res";
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
import { UpgradeClientRequest } from "./UpgradeClient/req";
import { UpgradeClientResponse } from "./UpgradeClient/res";
import { QueryServicePackAndPriceRequest } from "./QueryServicePackAndPrice/req";
import { QueryServicePackAndPriceResponse } from "./QueryServicePackAndPrice/res";
import { CreateGWSClusterRequest } from "./CreateGWSCluster/req";
import { CreateGWSClusterResponse } from "./CreateGWSCluster/res";
import { CreateGWSImageRequest } from "./CreateGWSImage/req";
import { CreateGWSImageResponse } from "./CreateGWSImage/res";
import { CreateGWSInstanceRequest } from "./CreateGWSInstance/req";
import { CreateGWSInstanceResponse } from "./CreateGWSInstance/res";
import { DeleteGWSClusterRequest } from "./DeleteGWSCluster/req";
import { DeleteGWSClusterResponse } from "./DeleteGWSCluster/res";
import { DeleteGWSInstanceRequest } from "./DeleteGWSInstance/req";
import { DeleteGWSInstanceResponse } from "./DeleteGWSInstance/res";
import { DescribeGWSClustersRequest } from "./DescribeGWSClusters/req";
import { DescribeGWSClustersResponse } from "./DescribeGWSClusters/res";
import { DescribeGWSImagesRequest } from "./DescribeGWSImages/req";
import { DescribeGWSImagesResponse } from "./DescribeGWSImages/res";
import { DescribeGWSInstancesRequest } from "./DescribeGWSInstances/req";
import { DescribeGWSInstancesResponse } from "./DescribeGWSInstances/res";
import { GetGWSConnectTicketRequest } from "./GetGWSConnectTicket/req";
import { GetGWSConnectTicketResponse } from "./GetGWSConnectTicket/res";
import { StartGWSInstanceRequest } from "./StartGWSInstance/req";
import { StartGWSInstanceResponse } from "./StartGWSInstance/res";
import { StopGWSInstanceRequest } from "./StopGWSInstance/req";
import { StopGWSInstanceResponse } from "./StopGWSInstance/res";
import { DescribeNFSClientStatusRequest } from "./DescribeNFSClientStatus/req";
import { DescribeNFSClientStatusResponse } from "./DescribeNFSClientStatus/res";
import { InstallNFSClientRequest } from "./InstallNFSClient/req";
import { InstallNFSClientResponse } from "./InstallNFSClient/res";
import { MountNFSRequest } from "./MountNFS/req";
import { MountNFSResponse } from "./MountNFS/res";
import { UpdateQueueConfigRequest } from "./UpdateQueueConfig/req";
import { UpdateQueueConfigResponse } from "./UpdateQueueConfig/res";
import { SetGWSInstanceUserRequest } from "./SetGWSInstanceUser/req";
import { SetGWSInstanceUserResponse } from "./SetGWSInstanceUser/res";

interface EHPC {
    AddContainerApp(query: AddContainerAppRequest): Promise<AddContainerAppResponse>;
    AddLocalNodes(query: AddLocalNodesRequest): Promise<AddLocalNodesResponse>;
    AddNodes(query: AddNodesRequest): Promise<AddNodesResponse>;
    AddQueue(query: AddQueueRequest): Promise<AddQueueResponse>;
    AddUsers(query: AddUsersRequest): Promise<AddUsersResponse>;
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    CreateHybridCluster(query: CreateHybridClusterRequest): Promise<CreateHybridClusterResponse>;
    CreateJobFile(query: CreateJobFileRequest): Promise<CreateJobFileResponse>;
    CreateJobTemplate(query: CreateJobTemplateRequest): Promise<CreateJobTemplateResponse>;
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    DeleteContainerApps(query: DeleteContainerAppsRequest): Promise<DeleteContainerAppsResponse>;
    DeleteImage(query: DeleteImageRequest): Promise<DeleteImageResponse>;
    DeleteJobTemplates(query: DeleteJobTemplatesRequest): Promise<DeleteJobTemplatesResponse>;
    DeleteJobs(query: DeleteJobsRequest): Promise<DeleteJobsResponse>;
    DeleteNodes(query: DeleteNodesRequest): Promise<DeleteNodesResponse>;
    DeleteQueue(query: DeleteQueueRequest): Promise<DeleteQueueResponse>;
    DeleteUsers(query: DeleteUsersRequest): Promise<DeleteUsersResponse>;
    DescribeAutoScaleConfig(query: DescribeAutoScaleConfigRequest): Promise<DescribeAutoScaleConfigResponse>;
    DescribeCluster(query: DescribeClusterRequest): Promise<DescribeClusterResponse>;
    DescribeContainerApp(query: DescribeContainerAppRequest): Promise<DescribeContainerAppResponse>;
    DescribeImage(query: DescribeImageRequest): Promise<DescribeImageResponse>;
    DescribeImageGatewayConfig(query: DescribeImageGatewayConfigRequest): Promise<DescribeImageGatewayConfigResponse>;
    DescribeImagePrice(query: DescribeImagePriceRequest): Promise<DescribeImagePriceResponse>;
    DescribeJob(query: DescribeJobRequest): Promise<DescribeJobResponse>;
    DescribePrice(query: DescribePriceRequest): Promise<DescribePriceResponse>;
    EditJobTemplate(query: EditJobTemplateRequest): Promise<EditJobTemplateResponse>;
    GetAccountingReport(query: GetAccountingReportRequest): Promise<GetAccountingReportResponse>;
    GetAutoScaleConfig(query: GetAutoScaleConfigRequest): Promise<GetAutoScaleConfigResponse>;
    GetCloudMetricLogs(query: GetCloudMetricLogsRequest): Promise<GetCloudMetricLogsResponse>;
    GetCloudMetricProfiling(query: GetCloudMetricProfilingRequest): Promise<GetCloudMetricProfilingResponse>;
    GetClusterVolumes(query: GetClusterVolumesRequest): Promise<GetClusterVolumesResponse>;
    GetHybridClusterConfig(query: GetHybridClusterConfigRequest): Promise<GetHybridClusterConfigResponse>;
    GetVisualServiceStatus(query: GetVisualServiceStatusRequest): Promise<GetVisualServiceStatusResponse>;
    InstallSoftware(query: InstallSoftwareRequest): Promise<InstallSoftwareResponse>;
    InvokeShellCommand(query: InvokeShellCommandRequest): Promise<InvokeShellCommandResponse>;
    ListAvailableEcsTypes(query: ListAvailableEcsTypesRequest): Promise<ListAvailableEcsTypesResponse>;
    ListAvailableFileSystemTypes(query: ListAvailableFileSystemTypesRequest): Promise<ListAvailableFileSystemTypesResponse>;
    ListCloudMetricProfilings(query: ListCloudMetricProfilingsRequest): Promise<ListCloudMetricProfilingsResponse>;
    ListClusterLogs(query: ListClusterLogsRequest): Promise<ListClusterLogsResponse>;
    ListClusters(query: ListClustersRequest): Promise<ListClustersResponse>;
    ListClustersMeta(query: ListClustersMetaRequest): Promise<ListClustersMetaResponse>;
    ListCommands(query: ListCommandsRequest): Promise<ListCommandsResponse>;
    ListContainerApps(query: ListContainerAppsRequest): Promise<ListContainerAppsResponse>;
    ListContainerImages(query: ListContainerImagesRequest): Promise<ListContainerImagesResponse>;
    ListCpfsFileSystems(query: ListCpfsFileSystemsRequest): Promise<ListCpfsFileSystemsResponse>;
    ListCurrentClientVersion(query: ListCurrentClientVersionRequest): Promise<ListCurrentClientVersionResponse>;
    ListCustomImages(query: ListCustomImagesRequest): Promise<ListCustomImagesResponse>;
    ListFileSystemWithMountTargets(query: ListFileSystemWithMountTargetsRequest): Promise<ListFileSystemWithMountTargetsResponse>;
    ListImages(query: ListImagesRequest): Promise<ListImagesResponse>;
    ListInstalledSoftware(query: ListInstalledSoftwareRequest): Promise<ListInstalledSoftwareResponse>;
    ListInvocationResults(query: ListInvocationResultsRequest): Promise<ListInvocationResultsResponse>;
    ListInvocationStatus(query: ListInvocationStatusRequest): Promise<ListInvocationStatusResponse>;
    ListJobTemplates(query: ListJobTemplatesRequest): Promise<ListJobTemplatesResponse>;
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    ListNodes(query: ListNodesRequest): Promise<ListNodesResponse>;
    ListNodesByQueue(query: ListNodesByQueueRequest): Promise<ListNodesByQueueResponse>;
    ListNodesNoPaging(query: ListNodesNoPagingRequest): Promise<ListNodesNoPagingResponse>;
    ListPreferredEcsTypes(query: ListPreferredEcsTypesRequest): Promise<ListPreferredEcsTypesResponse>;
    ListQueues(query: ListQueuesRequest): Promise<ListQueuesResponse>;
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    ListSoftwares(query: ListSoftwaresRequest): Promise<ListSoftwaresResponse>;
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    ListVolumes(query: ListVolumesRequest): Promise<ListVolumesResponse>;
    ModifyClusterAttributes(query: ModifyClusterAttributesRequest): Promise<ModifyClusterAttributesResponse>;
    ModifyContainerAppAttributes(query: ModifyContainerAppAttributesRequest): Promise<ModifyContainerAppAttributesResponse>;
    ModifyImageGatewayConfig(query: ModifyImageGatewayConfigRequest): Promise<ModifyImageGatewayConfigResponse>;
    ModifyUserGroups(query: ModifyUserGroupsRequest): Promise<ModifyUserGroupsResponse>;
    ModifyUserPasswords(query: ModifyUserPasswordsRequest): Promise<ModifyUserPasswordsResponse>;
    ModifyVisualServicePasswd(query: ModifyVisualServicePasswdRequest): Promise<ModifyVisualServicePasswdResponse>;
    PullImage(query: PullImageRequest): Promise<PullImageResponse>;
    RecoverCluster(query: RecoverClusterRequest): Promise<RecoverClusterResponse>;
    RerunJobs(query: RerunJobsRequest): Promise<RerunJobsResponse>;
    ResetNodes(query: ResetNodesRequest): Promise<ResetNodesResponse>;
    RunCloudMetricProfiling(query: RunCloudMetricProfilingRequest): Promise<RunCloudMetricProfilingResponse>;
    SetAutoScaleConfig(query: SetAutoScaleConfigRequest): Promise<SetAutoScaleConfigResponse>;
    SetJobUser(query: SetJobUserRequest): Promise<SetJobUserResponse>;
    SetQueue(query: SetQueueRequest): Promise<SetQueueResponse>;
    StartCluster(query: StartClusterRequest): Promise<StartClusterResponse>;
    StartNodes(query: StartNodesRequest): Promise<StartNodesResponse>;
    StartVisualService(query: StartVisualServiceRequest): Promise<StartVisualServiceResponse>;
    StopCluster(query: StopClusterRequest): Promise<StopClusterResponse>;
    StopJobs(query: StopJobsRequest): Promise<StopJobsResponse>;
    StopNodes(query: StopNodesRequest): Promise<StopNodesResponse>;
    StopVisualService(query: StopVisualServiceRequest): Promise<StopVisualServiceResponse>;
    SubmitJob(query: SubmitJobRequest): Promise<SubmitJobResponse>;
    UninstallSoftware(query: UninstallSoftwareRequest): Promise<UninstallSoftwareResponse>;
    UpdateClusterVolumes(query: UpdateClusterVolumesRequest): Promise<UpdateClusterVolumesResponse>;
    UpgradeClient(query: UpgradeClientRequest): Promise<UpgradeClientResponse>;
    QueryServicePackAndPrice(query: QueryServicePackAndPriceRequest): Promise<QueryServicePackAndPriceResponse>;
    CreateGWSCluster(query: CreateGWSClusterRequest): Promise<CreateGWSClusterResponse>;
    CreateGWSImage(query: CreateGWSImageRequest): Promise<CreateGWSImageResponse>;
    CreateGWSInstance(query: CreateGWSInstanceRequest): Promise<CreateGWSInstanceResponse>;
    DeleteGWSCluster(query: DeleteGWSClusterRequest): Promise<DeleteGWSClusterResponse>;
    DeleteGWSInstance(query: DeleteGWSInstanceRequest): Promise<DeleteGWSInstanceResponse>;
    DescribeGWSClusters(query: DescribeGWSClustersRequest): Promise<DescribeGWSClustersResponse>;
    DescribeGWSImages(query: DescribeGWSImagesRequest): Promise<DescribeGWSImagesResponse>;
    DescribeGWSInstances(query: DescribeGWSInstancesRequest): Promise<DescribeGWSInstancesResponse>;
    GetGWSConnectTicket(query: GetGWSConnectTicketRequest): Promise<GetGWSConnectTicketResponse>;
    StartGWSInstance(query: StartGWSInstanceRequest): Promise<StartGWSInstanceResponse>;
    StopGWSInstance(query: StopGWSInstanceRequest): Promise<StopGWSInstanceResponse>;
    DescribeNFSClientStatus(query: DescribeNFSClientStatusRequest): Promise<DescribeNFSClientStatusResponse>;
    InstallNFSClient(query: InstallNFSClientRequest): Promise<InstallNFSClientResponse>;
    MountNFS(query: MountNFSRequest): Promise<MountNFSResponse>;
    UpdateQueueConfig(query: UpdateQueueConfigRequest): Promise<UpdateQueueConfigResponse>;
    SetGWSInstanceUser(query: SetGWSInstanceUserRequest): Promise<SetGWSInstanceUserResponse>;
}
export default EHPC;
