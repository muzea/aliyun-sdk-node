import { AddClientToBlackListRequest } from "./AddClientToBlackList/req";
import { AddClientToBlackListResponse } from "./AddClientToBlackList/res";
import { AddTagsRequest } from "./AddTags/req";
import { AddTagsResponse } from "./AddTags/res";
import { CancelAutoSnapshotPolicyRequest } from "./CancelAutoSnapshotPolicy/req";
import { CancelAutoSnapshotPolicyResponse } from "./CancelAutoSnapshotPolicy/res";
import { ApplyAutoSnapshotPolicyRequest } from "./ApplyAutoSnapshotPolicy/req";
import { ApplyAutoSnapshotPolicyResponse } from "./ApplyAutoSnapshotPolicy/res";
import { CancelDirQuotaRequest } from "./CancelDirQuota/req";
import { CancelDirQuotaResponse } from "./CancelDirQuota/res";
import { CreateAccessGroupRequest } from "./CreateAccessGroup/req";
import { CreateAccessGroupResponse } from "./CreateAccessGroup/res";
import { CreateAccessRuleRequest } from "./CreateAccessRule/req";
import { CreateAccessRuleResponse } from "./CreateAccessRule/res";
import { CreateAutoSnapshotPolicyRequest } from "./CreateAutoSnapshotPolicy/req";
import { CreateAutoSnapshotPolicyResponse } from "./CreateAutoSnapshotPolicy/res";
import { CreateFileSystemRequest } from "./CreateFileSystem/req";
import { CreateFileSystemResponse } from "./CreateFileSystem/res";
import { CreateLDAPConfigRequest } from "./CreateLDAPConfig/req";
import { CreateLDAPConfigResponse } from "./CreateLDAPConfig/res";
import { CreateLifecyclePolicyRequest } from "./CreateLifecyclePolicy/req";
import { CreateLifecyclePolicyResponse } from "./CreateLifecyclePolicy/res";
import { CreateMountTargetRequest } from "./CreateMountTarget/req";
import { CreateMountTargetResponse } from "./CreateMountTarget/res";
import { CreateSnapshotRequest } from "./CreateSnapshot/req";
import { CreateSnapshotResponse } from "./CreateSnapshot/res";
import { DeleteAccessGroupRequest } from "./DeleteAccessGroup/req";
import { DeleteAccessGroupResponse } from "./DeleteAccessGroup/res";
import { DeleteAccessRuleRequest } from "./DeleteAccessRule/req";
import { DeleteAccessRuleResponse } from "./DeleteAccessRule/res";
import { DeleteAutoSnapshotPolicyRequest } from "./DeleteAutoSnapshotPolicy/req";
import { DeleteAutoSnapshotPolicyResponse } from "./DeleteAutoSnapshotPolicy/res";
import { DeleteFileSystemRequest } from "./DeleteFileSystem/req";
import { DeleteFileSystemResponse } from "./DeleteFileSystem/res";
import { DeleteLDAPConfigRequest } from "./DeleteLDAPConfig/req";
import { DeleteLDAPConfigResponse } from "./DeleteLDAPConfig/res";
import { DeleteLifecyclePolicyRequest } from "./DeleteLifecyclePolicy/req";
import { DeleteLifecyclePolicyResponse } from "./DeleteLifecyclePolicy/res";
import { DeleteSnapshotRequest } from "./DeleteSnapshot/req";
import { DeleteSnapshotResponse } from "./DeleteSnapshot/res";
import { DeleteMountTargetRequest } from "./DeleteMountTarget/req";
import { DeleteMountTargetResponse } from "./DeleteMountTarget/res";
import { DescribeAccessGroupsRequest } from "./DescribeAccessGroups/req";
import { DescribeAccessGroupsResponse } from "./DescribeAccessGroups/res";
import { DescribeAccessRulesRequest } from "./DescribeAccessRules/req";
import { DescribeAccessRulesResponse } from "./DescribeAccessRules/res";
import { DescribeAutoSnapshotPoliciesRequest } from "./DescribeAutoSnapshotPolicies/req";
import { DescribeAutoSnapshotPoliciesResponse } from "./DescribeAutoSnapshotPolicies/res";
import { DescribeAutoSnapshotTasksRequest } from "./DescribeAutoSnapshotTasks/req";
import { DescribeAutoSnapshotTasksResponse } from "./DescribeAutoSnapshotTasks/res";
import { DescribeBlackListClientsRequest } from "./DescribeBlackListClients/req";
import { DescribeBlackListClientsResponse } from "./DescribeBlackListClients/res";
import { DescribeDirQuotasRequest } from "./DescribeDirQuotas/req";
import { DescribeDirQuotasResponse } from "./DescribeDirQuotas/res";
import { DescribeFileSystemStatisticsRequest } from "./DescribeFileSystemStatistics/req";
import { DescribeFileSystemStatisticsResponse } from "./DescribeFileSystemStatistics/res";
import { DescribeFileSystemsRequest } from "./DescribeFileSystems/req";
import { DescribeFileSystemsResponse } from "./DescribeFileSystems/res";
import { DescribeLifecyclePoliciesRequest } from "./DescribeLifecyclePolicies/req";
import { DescribeLifecyclePoliciesResponse } from "./DescribeLifecyclePolicies/res";
import { DescribeLogAnalysisRequest } from "./DescribeLogAnalysis/req";
import { DescribeLogAnalysisResponse } from "./DescribeLogAnalysis/res";
import { DescribeMountTargetsRequest } from "./DescribeMountTargets/req";
import { DescribeMountTargetsResponse } from "./DescribeMountTargets/res";
import { DescribeMountedClientsRequest } from "./DescribeMountedClients/req";
import { DescribeMountedClientsResponse } from "./DescribeMountedClients/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeSnapshotsRequest } from "./DescribeSnapshots/req";
import { DescribeSnapshotsResponse } from "./DescribeSnapshots/res";
import { DescribeStoragePackagesRequest } from "./DescribeStoragePackages/req";
import { DescribeStoragePackagesResponse } from "./DescribeStoragePackages/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ModifyAccessGroupRequest } from "./ModifyAccessGroup/req";
import { ModifyAccessGroupResponse } from "./ModifyAccessGroup/res";
import { ModifyAccessRuleRequest } from "./ModifyAccessRule/req";
import { ModifyAccessRuleResponse } from "./ModifyAccessRule/res";
import { ModifyAutoSnapshotPolicyRequest } from "./ModifyAutoSnapshotPolicy/req";
import { ModifyAutoSnapshotPolicyResponse } from "./ModifyAutoSnapshotPolicy/res";
import { ModifyFileSystemRequest } from "./ModifyFileSystem/req";
import { ModifyFileSystemResponse } from "./ModifyFileSystem/res";
import { ModifyLDAPConfigRequest } from "./ModifyLDAPConfig/req";
import { ModifyLDAPConfigResponse } from "./ModifyLDAPConfig/res";
import { ModifyLifecyclePolicyRequest } from "./ModifyLifecyclePolicy/req";
import { ModifyLifecyclePolicyResponse } from "./ModifyLifecyclePolicy/res";
import { ModifyMountTargetRequest } from "./ModifyMountTarget/req";
import { ModifyMountTargetResponse } from "./ModifyMountTarget/res";
import { OpenNASServiceRequest } from "./OpenNASService/req";
import { OpenNASServiceResponse } from "./OpenNASService/res";
import { RemoveClientFromBlackListRequest } from "./RemoveClientFromBlackList/req";
import { RemoveClientFromBlackListResponse } from "./RemoveClientFromBlackList/res";
import { RemoveTagsRequest } from "./RemoveTags/req";
import { RemoveTagsResponse } from "./RemoveTags/res";
import { ResetFileSystemRequest } from "./ResetFileSystem/req";
import { ResetFileSystemResponse } from "./ResetFileSystem/res";
import { SetDirQuotaRequest } from "./SetDirQuota/req";
import { SetDirQuotaResponse } from "./SetDirQuota/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { UpgradeFileSystemRequest } from "./UpgradeFileSystem/req";
import { UpgradeFileSystemResponse } from "./UpgradeFileSystem/res";
import { CancelLifecycleRetrieveJobRequest } from "./CancelLifecycleRetrieveJob/req";
import { CancelLifecycleRetrieveJobResponse } from "./CancelLifecycleRetrieveJob/res";
import { CreateLifecycleRetrieveJobRequest } from "./CreateLifecycleRetrieveJob/req";
import { CreateLifecycleRetrieveJobResponse } from "./CreateLifecycleRetrieveJob/res";
import { ListLifecycleRetrieveJobsRequest } from "./ListLifecycleRetrieveJobs/req";
import { ListLifecycleRetrieveJobsResponse } from "./ListLifecycleRetrieveJobs/res";
import { ListDirectoriesAndFilesRequest } from "./ListDirectoriesAndFiles/req";
import { ListDirectoriesAndFilesResponse } from "./ListDirectoriesAndFiles/res";
import { GetDirectoryOrFilePropertiesRequest } from "./GetDirectoryOrFileProperties/req";
import { GetDirectoryOrFilePropertiesResponse } from "./GetDirectoryOrFileProperties/res";
import { RetryLifecycleRetrieveJobRequest } from "./RetryLifecycleRetrieveJob/req";
import { RetryLifecycleRetrieveJobResponse } from "./RetryLifecycleRetrieveJob/res";
import { UpdateRecycleBinAttributeRequest } from "./UpdateRecycleBinAttribute/req";
import { UpdateRecycleBinAttributeResponse } from "./UpdateRecycleBinAttribute/res";
import { CancelRecycleBinJobRequest } from "./CancelRecycleBinJob/req";
import { CancelRecycleBinJobResponse } from "./CancelRecycleBinJob/res";
import { CreateRecycleBinRestoreJobRequest } from "./CreateRecycleBinRestoreJob/req";
import { CreateRecycleBinRestoreJobResponse } from "./CreateRecycleBinRestoreJob/res";
import { EnableRecycleBinRequest } from "./EnableRecycleBin/req";
import { EnableRecycleBinResponse } from "./EnableRecycleBin/res";
import { DisableAndCleanRecycleBinRequest } from "./DisableAndCleanRecycleBin/req";
import { DisableAndCleanRecycleBinResponse } from "./DisableAndCleanRecycleBin/res";
import { ListRecentlyRecycledDirectoriesRequest } from "./ListRecentlyRecycledDirectories/req";
import { ListRecentlyRecycledDirectoriesResponse } from "./ListRecentlyRecycledDirectories/res";
import { ListRecycledDirectoriesAndFilesRequest } from "./ListRecycledDirectoriesAndFiles/req";
import { ListRecycledDirectoriesAndFilesResponse } from "./ListRecycledDirectoriesAndFiles/res";
import { CreateRecycleBinDeleteJobRequest } from "./CreateRecycleBinDeleteJob/req";
import { CreateRecycleBinDeleteJobResponse } from "./CreateRecycleBinDeleteJob/res";
import { ListRecycleBinJobsRequest } from "./ListRecycleBinJobs/req";
import { ListRecycleBinJobsResponse } from "./ListRecycleBinJobs/res";
import { GetRecycleBinAttributeRequest } from "./GetRecycleBinAttribute/req";
import { GetRecycleBinAttributeResponse } from "./GetRecycleBinAttribute/res";
import { CreateLogAnalysisRequest } from "./CreateLogAnalysis/req";
import { CreateLogAnalysisResponse } from "./CreateLogAnalysis/res";
import { DeleteLogAnalysisRequest } from "./DeleteLogAnalysis/req";
import { DeleteLogAnalysisResponse } from "./DeleteLogAnalysis/res";
import { DescribeNfsAclRequest } from "./DescribeNfsAcl/req";
import { DescribeNfsAclResponse } from "./DescribeNfsAcl/res";
import { DescribeSmbAclRequest } from "./DescribeSmbAcl/req";
import { DescribeSmbAclResponse } from "./DescribeSmbAcl/res";
import { DisableNfsAclRequest } from "./DisableNfsAcl/req";
import { DisableNfsAclResponse } from "./DisableNfsAcl/res";
import { DisableSmbAclRequest } from "./DisableSmbAcl/req";
import { DisableSmbAclResponse } from "./DisableSmbAcl/res";
import { EnableNfsAclRequest } from "./EnableNfsAcl/req";
import { EnableNfsAclResponse } from "./EnableNfsAcl/res";
import { EnableSmbAclRequest } from "./EnableSmbAcl/req";
import { EnableSmbAclResponse } from "./EnableSmbAcl/res";
import { ModifySmbAclRequest } from "./ModifySmbAcl/req";
import { ModifySmbAclResponse } from "./ModifySmbAcl/res";
import { CreateDataFlowTaskRequest } from "./CreateDataFlowTask/req";
import { CreateDataFlowTaskResponse } from "./CreateDataFlowTask/res";
import { CancelDataFlowAutoRefreshRequest } from "./CancelDataFlowAutoRefresh/req";
import { CancelDataFlowAutoRefreshResponse } from "./CancelDataFlowAutoRefresh/res";
import { ModifyDataFlowAutoRefreshRequest } from "./ModifyDataFlowAutoRefresh/req";
import { ModifyDataFlowAutoRefreshResponse } from "./ModifyDataFlowAutoRefresh/res";
import { DescribeDataFlowTasksRequest } from "./DescribeDataFlowTasks/req";
import { DescribeDataFlowTasksResponse } from "./DescribeDataFlowTasks/res";
import { ApplyDataFlowAutoRefreshRequest } from "./ApplyDataFlowAutoRefresh/req";
import { ApplyDataFlowAutoRefreshResponse } from "./ApplyDataFlowAutoRefresh/res";
import { DeleteDataFlowRequest } from "./DeleteDataFlow/req";
import { DeleteDataFlowResponse } from "./DeleteDataFlow/res";
import { ModifyDataFlowRequest } from "./ModifyDataFlow/req";
import { ModifyDataFlowResponse } from "./ModifyDataFlow/res";
import { DescribeDataFlowsRequest } from "./DescribeDataFlows/req";
import { DescribeDataFlowsResponse } from "./DescribeDataFlows/res";
import { StopDataFlowRequest } from "./StopDataFlow/req";
import { StopDataFlowResponse } from "./StopDataFlow/res";
import { StartDataFlowRequest } from "./StartDataFlow/req";
import { StartDataFlowResponse } from "./StartDataFlow/res";
import { CreateDataFlowRequest } from "./CreateDataFlow/req";
import { CreateDataFlowResponse } from "./CreateDataFlow/res";
import { CancelDataFlowTaskRequest } from "./CancelDataFlowTask/req";
import { CancelDataFlowTaskResponse } from "./CancelDataFlowTask/res";
import { CreateFilesetRequest } from "./CreateFileset/req";
import { CreateFilesetResponse } from "./CreateFileset/res";
import { DeleteFilesetRequest } from "./DeleteFileset/req";
import { DeleteFilesetResponse } from "./DeleteFileset/res";
import { ModifyFilesetRequest } from "./ModifyFileset/req";
import { ModifyFilesetResponse } from "./ModifyFileset/res";
import { DescribeFilesetsRequest } from "./DescribeFilesets/req";
import { DescribeFilesetsResponse } from "./DescribeFilesets/res";
import { DescribeProtocolMountTargetRequest } from "./DescribeProtocolMountTarget/req";
import { DescribeProtocolMountTargetResponse } from "./DescribeProtocolMountTarget/res";
import { DeleteProtocolServiceRequest } from "./DeleteProtocolService/req";
import { DeleteProtocolServiceResponse } from "./DeleteProtocolService/res";
import { ModifyProtocolMountTargetRequest } from "./ModifyProtocolMountTarget/req";
import { ModifyProtocolMountTargetResponse } from "./ModifyProtocolMountTarget/res";
import { ModifyProtocolServiceRequest } from "./ModifyProtocolService/req";
import { ModifyProtocolServiceResponse } from "./ModifyProtocolService/res";
import { CreateProtocolServiceRequest } from "./CreateProtocolService/req";
import { CreateProtocolServiceResponse } from "./CreateProtocolService/res";
import { CreateProtocolMountTargetRequest } from "./CreateProtocolMountTarget/req";
import { CreateProtocolMountTargetResponse } from "./CreateProtocolMountTarget/res";
import { DeleteProtocolMountTargetRequest } from "./DeleteProtocolMountTarget/req";
import { DeleteProtocolMountTargetResponse } from "./DeleteProtocolMountTarget/res";
import { DescribeProtocolServiceRequest } from "./DescribeProtocolService/req";
import { DescribeProtocolServiceResponse } from "./DescribeProtocolService/res";
import { CreateFileRequest } from "./CreateFile/req";
import { CreateFileResponse } from "./CreateFile/res";
import { DescribeAccessPointRequest } from "./DescribeAccessPoint/req";
import { DescribeAccessPointResponse } from "./DescribeAccessPoint/res";
import { CreateDirRequest } from "./CreateDir/req";
import { CreateDirResponse } from "./CreateDir/res";
import { CreateAccessPointRequest } from "./CreateAccessPoint/req";
import { CreateAccessPointResponse } from "./CreateAccessPoint/res";
import { DeleteAccessPointRequest } from "./DeleteAccessPoint/req";
import { DeleteAccessPointResponse } from "./DeleteAccessPoint/res";
import { DescribeAccessPointsRequest } from "./DescribeAccessPoints/req";
import { DescribeAccessPointsResponse } from "./DescribeAccessPoints/res";
import { ModifyAccessPointRequest } from "./ModifyAccessPoint/req";
import { ModifyAccessPointResponse } from "./ModifyAccessPoint/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";

interface NAS {
    /**
     * 从CPFS服务中，将客户端加入黑名单，逐出其写入请求，起到IO Fence作用。
     */
    AddClientToBlackList(query: AddClientToBlackListRequest): Promise<AddClientToBlackListResponse>;
    /**
     * 添加或者覆盖一个或者多个标签到一个文件系统实例。
     */
    AddTags(query: AddTagsRequest): Promise<AddTagsResponse>;
    /**
     * 取消一个或者多个文件系统的自动快照策略。
     */
    CancelAutoSnapshotPolicy(query: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse>;
    /**
     * 为一个或者多个文件系统应用自动快照策略。
     */
    ApplyAutoSnapshotPolicy(query: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse>;
    /**
     * 取消文件系统的目录配额。
     */
    CancelDirQuota(query: CancelDirQuotaRequest): Promise<CancelDirQuotaResponse>;
    /**
     * 创建权限组。
     */
    CreateAccessGroup(query: CreateAccessGroupRequest): Promise<CreateAccessGroupResponse>;
    /**
     * 创建权限组规则。
     */
    CreateAccessRule(query: CreateAccessRuleRequest): Promise<CreateAccessRuleResponse>;
    /**
     * 创建一条自动快照策略。
     */
    CreateAutoSnapshotPolicy(query: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse>;
    /**
     * 创建一个文件系统。
     */
    CreateFileSystem(query: CreateFileSystemRequest): Promise<CreateFileSystemResponse>;
    /**
     * 添加LDAP配置。
     */
    CreateLDAPConfig(query: CreateLDAPConfigRequest): Promise<CreateLDAPConfigResponse>;
    /**
     * 创建一个生命周期管理策略。
     */
    CreateLifecyclePolicy(query: CreateLifecyclePolicyRequest): Promise<CreateLifecyclePolicyResponse>;
    /**
     * 创建挂载点。
     */
    CreateMountTarget(query: CreateMountTargetRequest): Promise<CreateMountTargetResponse>;
    /**
     * 创建一个快照。
     */
    CreateSnapshot(query: CreateSnapshotRequest): Promise<CreateSnapshotResponse>;
    /**
     * 删除已有的权限组。
     */
    DeleteAccessGroup(query: DeleteAccessGroupRequest): Promise<DeleteAccessGroupResponse>;
    /**
     * 删除已创建的权限组规则。
     */
    DeleteAccessRule(query: DeleteAccessRuleRequest): Promise<DeleteAccessRuleResponse>;
    /**
     * 删除一条自动快照策略。
     */
    DeleteAutoSnapshotPolicy(query: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse>;
    /**
     * 删除一个文件系统。
     */
    DeleteFileSystem(query: DeleteFileSystemRequest): Promise<DeleteFileSystemResponse>;
    /**
     * 用于删除LDAP设置。
     */
    DeleteLDAPConfig(query: DeleteLDAPConfigRequest): Promise<DeleteLDAPConfigResponse>;
    /**
     * 删除一个生命周期管理策略。
     */
    DeleteLifecyclePolicy(query: DeleteLifecyclePolicyRequest): Promise<DeleteLifecyclePolicyResponse>;
    /**
     * 删除指定的快照或取消正在创建的快照任务。
     */
    DeleteSnapshot(query: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse>;
    /**
     * 删除已存在挂载点。
     */
    DeleteMountTarget(query: DeleteMountTargetRequest): Promise<DeleteMountTargetResponse>;
    /**
     * 查询权限组信息。
     */
    DescribeAccessGroups(query: DescribeAccessGroupsRequest): Promise<DescribeAccessGroupsResponse>;
    /**
     * 查询权限规则描述。
     */
    DescribeAccessRules(query: DescribeAccessRulesRequest): Promise<DescribeAccessRulesResponse>;
    /**
     * 查询已创建的自动快照策略。
     */
    DescribeAutoSnapshotPolicies(query: DescribeAutoSnapshotPoliciesRequest): Promise<DescribeAutoSnapshotPoliciesResponse>;
    /**
     * 查询自动快照的任务列表。
     */
    DescribeAutoSnapshotTasks(query: DescribeAutoSnapshotTasksRequest): Promise<DescribeAutoSnapshotTasksResponse>;
    /**
     * 获取CPFS服务中黑名单客户端的状态。
     */
    DescribeBlackListClients(query: DescribeBlackListClientsRequest): Promise<DescribeBlackListClientsResponse>;
    /**
     * 获取文件系统每个目录配额的详细信息。
     */
    DescribeDirQuotas(query: DescribeDirQuotasRequest): Promise<DescribeDirQuotasResponse>;
    /**
     * 列出当前账号下文件系统的统计信息。
     */
    DescribeFileSystemStatistics(query: DescribeFileSystemStatisticsRequest): Promise<DescribeFileSystemStatisticsResponse>;
    /**
     * 查询文件系统信息。
     */
    DescribeFileSystems(query: DescribeFileSystemsRequest): Promise<DescribeFileSystemsResponse>;
    /**
     * 获取生命周期管理策略列表。
     */
    DescribeLifecyclePolicies(query: DescribeLifecyclePoliciesRequest): Promise<DescribeLifecyclePoliciesResponse>;
    /**
     * 列出日志分析中配置的日志转储信息。
     */
    DescribeLogAnalysis(query: DescribeLogAnalysisRequest): Promise<DescribeLogAnalysisResponse>;
    /**
     * 查询挂载点信息。
     */
    DescribeMountTargets(query: DescribeMountTargetsRequest): Promise<DescribeMountTargetsResponse>;
    /**
     * 查询已挂载的客户端列表。
     */
    DescribeMountedClients(query: DescribeMountedClientsRequest): Promise<DescribeMountedClientsResponse>;
    /**
     * 查询可以使用的阿里云地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询指定文件系统一个或多个快照的信息。
     */
    DescribeSnapshots(query: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse>;
    /**
     * 查询存储包列表信息。
     */
    DescribeStoragePackages(query: DescribeStoragePackagesRequest): Promise<DescribeStoragePackagesResponse>;
    /**
     * 查询一个地域下的所有可用区及可用区所支持的文件系统类型。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 查询标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 修改权限组。
     */
    ModifyAccessGroup(query: ModifyAccessGroupRequest): Promise<ModifyAccessGroupResponse>;
    /**
     * 修改一个权限组规则。
     */
    ModifyAccessRule(query: ModifyAccessRuleRequest): Promise<ModifyAccessRuleResponse>;
    /**
     * 修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的文件系统随即执行修改后的自动快照策略。
     */
    ModifyAutoSnapshotPolicy(query: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse>;
    /**
     * 修改文件系统的描述信息。
     */
    ModifyFileSystem(query: ModifyFileSystemRequest): Promise<ModifyFileSystemResponse>;
    /**
     * 用于修改LDAP配置。
     */
    ModifyLDAPConfig(query: ModifyLDAPConfigRequest): Promise<ModifyLDAPConfigResponse>;
    /**
     * 修改一个生命周期管理策略。
     */
    ModifyLifecyclePolicy(query: ModifyLifecyclePolicyRequest): Promise<ModifyLifecyclePolicyResponse>;
    /**
     * 修改挂载点信息。
     */
    ModifyMountTarget(query: ModifyMountTargetRequest): Promise<ModifyMountTargetResponse>;
    /**
     * 开通NAS服务。
     */
    OpenNASService(query: OpenNASServiceRequest): Promise<OpenNASServiceResponse>;
    /**
     * 从CPFS服务中，将客户端移出黑名单，恢复其写入请求。
     */
    RemoveClientFromBlackList(query: RemoveClientFromBlackListRequest): Promise<RemoveClientFromBlackListResponse>;
    /**
     * 可以从一个文件系统实例上解绑一个或多个标签。
     */
    RemoveTags(query: RemoveTagsRequest): Promise<RemoveTagsResponse>;
    /**
     * 使文件系统回滚至某一历史快照的文件系统状态。
     */
    ResetFileSystem(query: ResetFileSystemRequest): Promise<ResetFileSystemResponse>;
    /**
     * 设置文件系统的目录配额。
     */
    SetDirQuota(query: SetDirQuotaRequest): Promise<SetDirQuotaResponse>;
    /**
     * 为指定文件系统创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 删除指定文件系统标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 扩容极速型NAS文件系统或CPFS文件系统的存储容量。
     */
    UpgradeFileSystem(query: UpgradeFileSystemRequest): Promise<UpgradeFileSystemResponse>;
    /**
     * 取消任务状态为运行中（active）的一个数据取回任务。
     */
    CancelLifecycleRetrieveJob(query: CancelLifecycleRetrieveJobRequest): Promise<CancelLifecycleRetrieveJobResponse>;
    /**
     * 创建一个数据取回任务。
     */
    CreateLifecycleRetrieveJob(query: CreateLifecycleRetrieveJobRequest): Promise<CreateLifecycleRetrieveJobResponse>;
    /**
     * 获取已创建的数据取回任务列表。
     */
    ListLifecycleRetrieveJobs(query: ListLifecycleRetrieveJobsRequest): Promise<ListLifecycleRetrieveJobsResponse>;
    /**
     * 获取通用型NAS指定目录下的低频存储文件和包含低频存储文件的子目录列表。
     */
    ListDirectoriesAndFiles(query: ListDirectoriesAndFilesRequest): Promise<ListDirectoriesAndFilesResponse>;
    /**
     * 查询指定目录下是否包含低频存储和归档存储文件，或者查询指定文件是否为低频存储或归档存储文件。
     */
    GetDirectoryOrFileProperties(query: GetDirectoryOrFilePropertiesRequest): Promise<GetDirectoryOrFilePropertiesResponse>;
    /**
     * 重试任务状态为已失败（failed）的数据取回任务。
     */
    RetryLifecycleRetrieveJob(query: RetryLifecycleRetrieveJobRequest): Promise<RetryLifecycleRetrieveJobResponse>;
    /**
     * 修改一个回收站中数据的保留时间。
     */
    UpdateRecycleBinAttribute(query: UpdateRecycleBinAttributeRequest): Promise<UpdateRecycleBinAttributeResponse>;
    /**
     * 取消一个回收站中正在运行中的任务。
     */
    CancelRecycleBinJob(query: CancelRecycleBinJobRequest): Promise<CancelRecycleBinJobResponse>;
    /**
     * 恢复一个暂存回收站中的文件。
     */
    CreateRecycleBinRestoreJob(query: CreateRecycleBinRestoreJobRequest): Promise<CreateRecycleBinRestoreJobResponse>;
    /**
     * 开启回收站功能。
     */
    EnableRecycleBin(query: EnableRecycleBinRequest): Promise<EnableRecycleBinResponse>;
    /**
     * 关闭通用型NAS文件系统的回收站功能，并清空回收站中的数据。
     */
    DisableAndCleanRecycleBin(query: DisableAndCleanRecycleBinRequest): Promise<DisableAndCleanRecycleBinResponse>;
    /**
     * 查询最近执行过删除操作的目录。
     */
    ListRecentlyRecycledDirectories(query: ListRecentlyRecycledDirectoriesRequest): Promise<ListRecentlyRecycledDirectoriesResponse>;
    /**
     * 查询已删除的文件或目录。
     */
    ListRecycledDirectoriesAndFiles(query: ListRecycledDirectoriesAndFilesRequest): Promise<ListRecycledDirectoriesAndFilesResponse>;
    /**
     * 创建一个彻底删除回收站中暂存的文件或目录的任务。
     */
    CreateRecycleBinDeleteJob(query: CreateRecycleBinDeleteJobRequest): Promise<CreateRecycleBinDeleteJobResponse>;
    /**
     * 查询回收站中的一个或多个任务信息。
     */
    ListRecycleBinJobs(query: ListRecycleBinJobsRequest): Promise<ListRecycleBinJobsResponse>;
    /**
     * 查询指定通用型NAS文件系统的回收站配置。
     */
    GetRecycleBinAttribute(query: GetRecycleBinAttributeRequest): Promise<GetRecycleBinAttributeResponse>;
    /**
     * 将通用型NAS文件系统日志转储到日志服务中。
     */
    CreateLogAnalysis(query: CreateLogAnalysisRequest): Promise<CreateLogAnalysisResponse>;
    /**
     * 停止通用型NAS文件系统的日志转储。
     */
    DeleteLogAnalysis(query: DeleteLogAnalysisRequest): Promise<DeleteLogAnalysisResponse>;
    /**
     * 查询指定文件系统是否启用了NFS ACL功能。
     */
    DescribeNfsAcl(query: DescribeNfsAclRequest): Promise<DescribeNfsAclResponse>;
    /**
     * 查看SMB AD ACL功能。
     */
    DescribeSmbAcl(query: DescribeSmbAclRequest): Promise<DescribeSmbAclResponse>;
    /**
     * 关闭NFS ACL功能。
     */
    DisableNfsAcl(query: DisableNfsAclRequest): Promise<DisableNfsAclResponse>;
    /**
     * 关闭SMB AD ACL功能。
     */
    DisableSmbAcl(query: DisableSmbAclRequest): Promise<DisableSmbAclResponse>;
    /**
     * 开启NFS ACL功能。
     */
    EnableNfsAcl(query: EnableNfsAclRequest): Promise<EnableNfsAclResponse>;
    /**
     * 开启SMB AD ACL功能。
     */
    EnableSmbAcl(query: EnableSmbAclRequest): Promise<EnableSmbAclResponse>;
    /**
     * 更新SMB AD ACL功能。
     */
    ModifySmbAcl(query: ModifySmbAclRequest): Promise<ModifySmbAclResponse>;
    /**
     * 创建一个数据流动任务。
     */
    CreateDataFlowTask(query: CreateDataFlowTaskRequest): Promise<CreateDataFlowTaskResponse>;
    /**
     * 取消指定数据流动上的自动更新配置。
     */
    CancelDataFlowAutoRefresh(query: CancelDataFlowAutoRefreshRequest): Promise<CancelDataFlowAutoRefreshResponse>;
    /**
     * 修改数据流动中的自动更新配置。
     */
    ModifyDataFlowAutoRefresh(query: ModifyDataFlowAutoRefreshRequest): Promise<ModifyDataFlowAutoRefreshResponse>;
    /**
     * 查询数据流动任务。
     */
    DescribeDataFlowTasks(query: DescribeDataFlowTasksRequest): Promise<DescribeDataFlowTasksResponse>;
    /**
     * 为指定数据流动配置自动更新。
     */
    ApplyDataFlowAutoRefresh(query: ApplyDataFlowAutoRefreshRequest): Promise<ApplyDataFlowAutoRefreshResponse>;
    /**
     * 删除一个数据流动。
     */
    DeleteDataFlow(query: DeleteDataFlowRequest): Promise<DeleteDataFlowResponse>;
    /**
     * 修改数据流动的属性。
     */
    ModifyDataFlow(query: ModifyDataFlowRequest): Promise<ModifyDataFlowResponse>;
    /**
     * 查询一个CPFS文件系统的数据流动信息。
     */
    DescribeDataFlows(query: DescribeDataFlowsRequest): Promise<DescribeDataFlowsResponse>;
    /**
     * 停用一个数据流动。
     */
    StopDataFlow(query: StopDataFlowRequest): Promise<StopDataFlowResponse>;
    /**
     * 启用一个数据流动。
     */
    StartDataFlow(query: StartDataFlowRequest): Promise<StartDataFlowResponse>;
    /**
     * 创建一个CPFS文件系统与源端存储的数据流动。
     */
    CreateDataFlow(query: CreateDataFlowRequest): Promise<CreateDataFlowResponse>;
    /**
     * 取消一个未执行状态的数据流动任务。
     */
    CancelDataFlowTask(query: CancelDataFlowTaskRequest): Promise<CancelDataFlowTaskResponse>;
    /**
     * 创建一个Fileset。
     */
    CreateFileset(query: CreateFilesetRequest): Promise<CreateFilesetResponse>;
    /**
     * 删除一个Fileset。
     */
    DeleteFileset(query: DeleteFilesetRequest): Promise<DeleteFilesetResponse>;
    /**
     * 修改一个Fileset信息。
     */
    ModifyFileset(query: ModifyFilesetRequest): Promise<ModifyFilesetResponse>;
    /**
     * 查询已创建的Fileset列表信息。
     */
    DescribeFilesets(query: DescribeFilesetsRequest): Promise<DescribeFilesetsResponse>;
    /**
     * 查询协议服务导出目录。
     */
    DescribeProtocolMountTarget(query: DescribeProtocolMountTargetRequest): Promise<DescribeProtocolMountTargetResponse>;
    /**
     * 删除CPFS文件系统的协议服务。
     */
    DeleteProtocolService(query: DeleteProtocolServiceRequest): Promise<DeleteProtocolServiceResponse>;
    /**
     * 修改协议服务的导出目录参数，只能修改权限组和描述信息。VPC ID和vSwitch ID不允许修改，如果需要修改，需要删除导出目录再新建。
     */
    ModifyProtocolMountTarget(query: ModifyProtocolMountTargetRequest): Promise<ModifyProtocolMountTargetResponse>;
    /**
     * 修改一个协议服务，支持修改协议服务描述信息。
     */
    ModifyProtocolService(query: ModifyProtocolServiceRequest): Promise<ModifyProtocolServiceResponse>;
    /**
     * 创建CPFS文件系统的协议服务，创建协议服务过程大约需要5～10分钟。
     */
    CreateProtocolService(query: CreateProtocolServiceRequest): Promise<CreateProtocolServiceResponse>;
    /**
     * 创建一个协议服务导出目录。
     */
    CreateProtocolMountTarget(query: CreateProtocolMountTargetRequest): Promise<CreateProtocolMountTargetResponse>;
    /**
     * 删除一个协议服务导出目录。
     */
    DeleteProtocolMountTarget(query: DeleteProtocolMountTargetRequest): Promise<DeleteProtocolMountTargetResponse>;
    /**
     * 查询协议服务信息。
     */
    DescribeProtocolService(query: DescribeProtocolServiceRequest): Promise<DescribeProtocolServiceResponse>;
    /**
     * 创建目录或者文件。
     */
    CreateFile(query: CreateFileRequest): Promise<CreateFileResponse>;
    /**
     * 查询接入点详情。
     */
    DescribeAccessPoint(query: DescribeAccessPointRequest): Promise<DescribeAccessPointResponse>;
    /**
     * 在文件系统中创建目录。
     */
    CreateDir(query: CreateDirRequest): Promise<CreateDirResponse>;
    /**
     * 创建接入点。
     */
    CreateAccessPoint(query: CreateAccessPointRequest): Promise<CreateAccessPointResponse>;
    /**
     * 删除接入点。
     */
    DeleteAccessPoint(query: DeleteAccessPointRequest): Promise<DeleteAccessPointResponse>;
    /**
     * 查询接入点信息。
     */
    DescribeAccessPoints(query: DescribeAccessPointsRequest): Promise<DescribeAccessPointsResponse>;
    /**
     * 修改接入点信息。
     */
    ModifyAccessPoint(query: ModifyAccessPointRequest): Promise<ModifyAccessPointResponse>;
    /**
     * 修改文件系统实例所属的资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
}
export default NAS;
