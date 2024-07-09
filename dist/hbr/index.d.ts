import { CreateVaultRequest } from "./CreateVault/req";
import { CreateVaultResponse } from "./CreateVault/res";
import { CreateReplicationVaultRequest } from "./CreateReplicationVault/req";
import { CreateReplicationVaultResponse } from "./CreateReplicationVault/res";
import { DeleteVaultRequest } from "./DeleteVault/req";
import { DeleteVaultResponse } from "./DeleteVault/res";
import { DescribeVaultsRequest } from "./DescribeVaults/req";
import { DescribeVaultsResponse } from "./DescribeVaults/res";
import { UpdateVaultRequest } from "./UpdateVault/req";
import { UpdateVaultResponse } from "./UpdateVault/res";
import { DeleteBackupClientRequest } from "./DeleteBackupClient/req";
import { DeleteBackupClientResponse } from "./DeleteBackupClient/res";
import { DeleteBackupClientResourceRequest } from "./DeleteBackupClientResource/req";
import { DeleteBackupClientResourceResponse } from "./DeleteBackupClientResource/res";
import { DescribeBackupClientsRequest } from "./DescribeBackupClients/req";
import { DescribeBackupClientsResponse } from "./DescribeBackupClients/res";
import { InstallBackupClientsRequest } from "./InstallBackupClients/req";
import { InstallBackupClientsResponse } from "./InstallBackupClients/res";
import { UninstallBackupClientsRequest } from "./UninstallBackupClients/req";
import { UninstallBackupClientsResponse } from "./UninstallBackupClients/res";
import { UpgradeBackupClientsRequest } from "./UpgradeBackupClients/req";
import { UpgradeBackupClientsResponse } from "./UpgradeBackupClients/res";
import { UpdateClientSettingsRequest } from "./UpdateClientSettings/req";
import { UpdateClientSettingsResponse } from "./UpdateClientSettings/res";
import { CreateBackupPlanRequest } from "./CreateBackupPlan/req";
import { CreateBackupPlanResponse } from "./CreateBackupPlan/res";
import { DeleteBackupPlanRequest } from "./DeleteBackupPlan/req";
import { DeleteBackupPlanResponse } from "./DeleteBackupPlan/res";
import { DisableBackupPlanRequest } from "./DisableBackupPlan/req";
import { DisableBackupPlanResponse } from "./DisableBackupPlan/res";
import { DescribeBackupPlansRequest } from "./DescribeBackupPlans/req";
import { DescribeBackupPlansResponse } from "./DescribeBackupPlans/res";
import { EnableBackupPlanRequest } from "./EnableBackupPlan/req";
import { EnableBackupPlanResponse } from "./EnableBackupPlan/res";
import { ExecuteBackupPlanRequest } from "./ExecuteBackupPlan/req";
import { ExecuteBackupPlanResponse } from "./ExecuteBackupPlan/res";
import { UpdateBackupPlanRequest } from "./UpdateBackupPlan/req";
import { UpdateBackupPlanResponse } from "./UpdateBackupPlan/res";
import { CreateBackupJobRequest } from "./CreateBackupJob/req";
import { CreateBackupJobResponse } from "./CreateBackupJob/res";
import { CancelBackupJobRequest } from "./CancelBackupJob/req";
import { CancelBackupJobResponse } from "./CancelBackupJob/res";
import { DescribeBackupJobs2Request } from "./DescribeBackupJobs2/req";
import { DescribeBackupJobs2Response } from "./DescribeBackupJobs2/res";
import { DeleteSnapshotRequest } from "./DeleteSnapshot/req";
import { DeleteSnapshotResponse } from "./DeleteSnapshot/res";
import { SearchHistoricalSnapshotsRequest } from "./SearchHistoricalSnapshots/req";
import { SearchHistoricalSnapshotsResponse } from "./SearchHistoricalSnapshots/res";
import { DescribeOtsTableSnapshotsRequest } from "./DescribeOtsTableSnapshots/req";
import { DescribeOtsTableSnapshotsResponse } from "./DescribeOtsTableSnapshots/res";
import { DescribeRecoverableOtsInstancesRequest } from "./DescribeRecoverableOtsInstances/req";
import { DescribeRecoverableOtsInstancesResponse } from "./DescribeRecoverableOtsInstances/res";
import { CancelRestoreJobRequest } from "./CancelRestoreJob/req";
import { CancelRestoreJobResponse } from "./CancelRestoreJob/res";
import { CreateRestoreJobRequest } from "./CreateRestoreJob/req";
import { CreateRestoreJobResponse } from "./CreateRestoreJob/res";
import { DescribeRestoreJobs2Request } from "./DescribeRestoreJobs2/req";
import { DescribeRestoreJobs2Response } from "./DescribeRestoreJobs2/res";
import { CreateClientsRequest } from "./CreateClients/req";
import { CreateClientsResponse } from "./CreateClients/res";
import { CreateHanaBackupPlanRequest } from "./CreateHanaBackupPlan/req";
import { CreateHanaBackupPlanResponse } from "./CreateHanaBackupPlan/res";
import { CreateHanaInstanceRequest } from "./CreateHanaInstance/req";
import { CreateHanaInstanceResponse } from "./CreateHanaInstance/res";
import { CreateHanaRestoreRequest } from "./CreateHanaRestore/req";
import { CreateHanaRestoreResponse } from "./CreateHanaRestore/res";
import { DeleteHanaBackupPlanRequest } from "./DeleteHanaBackupPlan/req";
import { DeleteHanaBackupPlanResponse } from "./DeleteHanaBackupPlan/res";
import { DeleteHanaInstanceRequest } from "./DeleteHanaInstance/req";
import { DeleteHanaInstanceResponse } from "./DeleteHanaInstance/res";
import { DescribeClientsRequest } from "./DescribeClients/req";
import { DescribeClientsResponse } from "./DescribeClients/res";
import { DescribeHanaBackupPlansRequest } from "./DescribeHanaBackupPlans/req";
import { DescribeHanaBackupPlansResponse } from "./DescribeHanaBackupPlans/res";
import { DescribeHanaBackupSettingRequest } from "./DescribeHanaBackupSetting/req";
import { DescribeHanaBackupSettingResponse } from "./DescribeHanaBackupSetting/res";
import { DescribeHanaBackupsAsyncRequest } from "./DescribeHanaBackupsAsync/req";
import { DescribeHanaBackupsAsyncResponse } from "./DescribeHanaBackupsAsync/res";
import { DescribeHanaDatabasesRequest } from "./DescribeHanaDatabases/req";
import { DescribeHanaDatabasesResponse } from "./DescribeHanaDatabases/res";
import { DescribeHanaInstancesRequest } from "./DescribeHanaInstances/req";
import { DescribeHanaInstancesResponse } from "./DescribeHanaInstances/res";
import { DescribeHanaRestoresRequest } from "./DescribeHanaRestores/req";
import { DescribeHanaRestoresResponse } from "./DescribeHanaRestores/res";
import { DescribeHanaRetentionSettingRequest } from "./DescribeHanaRetentionSetting/req";
import { DescribeHanaRetentionSettingResponse } from "./DescribeHanaRetentionSetting/res";
import { DisableHanaBackupPlanRequest } from "./DisableHanaBackupPlan/req";
import { DisableHanaBackupPlanResponse } from "./DisableHanaBackupPlan/res";
import { EnableHanaBackupPlanRequest } from "./EnableHanaBackupPlan/req";
import { EnableHanaBackupPlanResponse } from "./EnableHanaBackupPlan/res";
import { StartHanaDatabaseAsyncRequest } from "./StartHanaDatabaseAsync/req";
import { StartHanaDatabaseAsyncResponse } from "./StartHanaDatabaseAsync/res";
import { StopHanaDatabaseAsyncRequest } from "./StopHanaDatabaseAsync/req";
import { StopHanaDatabaseAsyncResponse } from "./StopHanaDatabaseAsync/res";
import { UpdateHanaBackupPlanRequest } from "./UpdateHanaBackupPlan/req";
import { UpdateHanaBackupPlanResponse } from "./UpdateHanaBackupPlan/res";
import { UpdateHanaBackupSettingRequest } from "./UpdateHanaBackupSetting/req";
import { UpdateHanaBackupSettingResponse } from "./UpdateHanaBackupSetting/res";
import { UpdateHanaInstanceRequest } from "./UpdateHanaInstance/req";
import { UpdateHanaInstanceResponse } from "./UpdateHanaInstance/res";
import { UpdateHanaRetentionSettingRequest } from "./UpdateHanaRetentionSetting/req";
import { UpdateHanaRetentionSettingResponse } from "./UpdateHanaRetentionSetting/res";
import { UpgradeClientRequest } from "./UpgradeClient/req";
import { UpgradeClientResponse } from "./UpgradeClient/res";
import { UninstallClientRequest } from "./UninstallClient/req";
import { UninstallClientResponse } from "./UninstallClient/res";
import { DescribeTaskRequest } from "./DescribeTask/req";
import { DescribeTaskResponse } from "./DescribeTask/res";
import { DetachNasFileSystemRequest } from "./DetachNasFileSystem/req";
import { DetachNasFileSystemResponse } from "./DetachNasFileSystem/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeVaultReplicationRegionsRequest } from "./DescribeVaultReplicationRegions/req";
import { DescribeVaultReplicationRegionsResponse } from "./DescribeVaultReplicationRegions/res";
import { GenerateRamPolicyRequest } from "./GenerateRamPolicy/req";
import { GenerateRamPolicyResponse } from "./GenerateRamPolicy/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { DescribeUdmSnapshotsRequest } from "./DescribeUdmSnapshots/req";
import { DescribeUdmSnapshotsResponse } from "./DescribeUdmSnapshots/res";
import { AddContainerClusterRequest } from "./AddContainerCluster/req";
import { AddContainerClusterResponse } from "./AddContainerCluster/res";
import { DescribeContainerClusterRequest } from "./DescribeContainerCluster/req";
import { DescribeContainerClusterResponse } from "./DescribeContainerCluster/res";
import { AttachNasFileSystemRequest } from "./AttachNasFileSystem/req";
import { AttachNasFileSystemResponse } from "./AttachNasFileSystem/res";
import { CheckRoleRequest } from "./CheckRole/req";
import { CheckRoleResponse } from "./CheckRole/res";
import { DeleteClientRequest } from "./DeleteClient/req";
import { DeleteClientResponse } from "./DeleteClient/res";
import { DeleteUdmEcsInstanceRequest } from "./DeleteUdmEcsInstance/req";
import { DeleteUdmEcsInstanceResponse } from "./DeleteUdmEcsInstance/res";
import { OpenHbrServiceRequest } from "./OpenHbrService/req";
import { OpenHbrServiceResponse } from "./OpenHbrService/res";
import { UpdateContainerClusterRequest } from "./UpdateContainerCluster/req";
import { UpdateContainerClusterResponse } from "./UpdateContainerCluster/res";
import { DescribeCrossAccountsRequest } from "./DescribeCrossAccounts/req";
import { DescribeCrossAccountsResponse } from "./DescribeCrossAccounts/res";
import { DescribeCrossAccountsRequest } from "./DescribeCrossAccounts/req";
import { DescribeCrossAccountsResponse } from "./DescribeCrossAccounts/res";
import { UpdatePolicyBindingRequest } from "./UpdatePolicyBinding/req";
import { UpdatePolicyBindingResponse } from "./UpdatePolicyBinding/res";
import { DeletePolicyBindingRequest } from "./DeletePolicyBinding/req";
import { DeletePolicyBindingResponse } from "./DeletePolicyBinding/res";
import { DescribePolicyBindingsRequest } from "./DescribePolicyBindings/req";
import { DescribePolicyBindingsResponse } from "./DescribePolicyBindings/res";
import { CreatePolicyBindingsRequest } from "./CreatePolicyBindings/req";
import { CreatePolicyBindingsResponse } from "./CreatePolicyBindings/res";
import { CreateTempFileUploadUrlRequest } from "./CreateTempFileUploadUrl/req";
import { CreateTempFileUploadUrlResponse } from "./CreateTempFileUploadUrl/res";
import { GetTempFileDownloadLinkRequest } from "./GetTempFileDownloadLink/req";
import { GetTempFileDownloadLinkResponse } from "./GetTempFileDownloadLink/res";
import { UpdatePolicyV2Request } from "./UpdatePolicyV2/req";
import { UpdatePolicyV2Response } from "./UpdatePolicyV2/res";
import { DeletePolicyV2Request } from "./DeletePolicyV2/req";
import { DeletePolicyV2Response } from "./DeletePolicyV2/res";
import { DescribePoliciesV2Request } from "./DescribePoliciesV2/req";
import { DescribePoliciesV2Response } from "./DescribePoliciesV2/res";
import { CreatePolicyV2Request } from "./CreatePolicyV2/req";
import { CreatePolicyV2Response } from "./CreatePolicyV2/res";
import { ExecutePolicyV2Request } from "./ExecutePolicyV2/req";
import { ExecutePolicyV2Response } from "./ExecutePolicyV2/res";

interface HBR {
    /**
     * 调用CreateVault接口创建一个备份仓库。
     */
    CreateVault(query: CreateVaultRequest): Promise<CreateVaultResponse>;
    /**
     * 创建一个镜像备份仓库。
     */
    CreateReplicationVault(query: CreateReplicationVaultRequest): Promise<CreateReplicationVaultResponse>;
    /**
     * 删除一个备份仓库。
     */
    DeleteVault(query: DeleteVaultRequest): Promise<DeleteVaultResponse>;
    /**
     * 获取一个或者多个符合条件的备份仓库信息。
     */
    DescribeVaults(query: DescribeVaultsRequest): Promise<DescribeVaultsResponse>;
    /**
     * 更新备份仓库的配置信息。
     */
    UpdateVault(query: UpdateVaultRequest): Promise<UpdateVaultResponse>;
    /**
     * 删除一个备份客户端。
     */
    DeleteBackupClient(query: DeleteBackupClientRequest): Promise<DeleteBackupClientResponse>;
    /**
     * 删除备份客户端的所属资源。
     */
    DeleteBackupClientResource(query: DeleteBackupClientResourceRequest): Promise<DeleteBackupClientResourceResponse>;
    /**
     * 获取一个或者多个符合条件的备份客户端信息。
     */
    DescribeBackupClients(query: DescribeBackupClientsRequest): Promise<DescribeBackupClientsResponse>;
    /**
     * 为一台或者多台ECS实例安装备份客户端。
     */
    InstallBackupClients(query: InstallBackupClientsRequest): Promise<InstallBackupClientsResponse>;
    /**
     * 为一台或者多台ECS实例卸载备份客户端。
     */
    UninstallBackupClients(query: UninstallBackupClientsRequest): Promise<UninstallBackupClientsResponse>;
    /**
     * 为一台或者多台ECS实例升级备份客户端。
     */
    UpgradeBackupClients(query: UpgradeBackupClientsRequest): Promise<UpgradeBackupClientsResponse>;
    /**
     * 更新一个备份客户端的配置。
     */
    UpdateClientSettings(query: UpdateClientSettingsRequest): Promise<UpdateClientSettingsResponse>;
    /**
     * 创建一个备份计划。
     */
    CreateBackupPlan(query: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse>;
    /**
     * 删除一个备份计划。
     */
    DeleteBackupPlan(query: DeleteBackupPlanRequest): Promise<DeleteBackupPlanResponse>;
    /**
     * 暂停一个备份计划。
     */
    DisableBackupPlan(query: DisableBackupPlanRequest): Promise<DisableBackupPlanResponse>;
    /**
     * 获取一个或者多个符合条件的备份计划。
     */
    DescribeBackupPlans(query: DescribeBackupPlansRequest): Promise<DescribeBackupPlansResponse>;
    /**
     * 继续一个备份计划。
     */
    EnableBackupPlan(query: EnableBackupPlanRequest): Promise<EnableBackupPlanResponse>;
    /**
     * 执行一个备份计划。
     */
    ExecuteBackupPlan(query: ExecuteBackupPlanRequest): Promise<ExecuteBackupPlanResponse>;
    /**
     * 更新一个备份计划。
     */
    UpdateBackupPlan(query: UpdateBackupPlanRequest): Promise<UpdateBackupPlanResponse>;
    /**
     * 创建一个手动备份任务。
     */
    CreateBackupJob(query: CreateBackupJobRequest): Promise<CreateBackupJobResponse>;
    /**
     * 取消一个备份任务。
     */
    CancelBackupJob(query: CancelBackupJobRequest): Promise<CancelBackupJobResponse>;
    /**
     * 查询一个或者多个符合条件的备份任务。
     */
    DescribeBackupJobs2(query: DescribeBackupJobs2Request): Promise<DescribeBackupJobs2Response>;
    /**
     * 删除一个备份快照。
     */
    DeleteSnapshot(query: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse>;
    /**
     * 获取一个或者多个符合条件的历史备份快照。
     */
    SearchHistoricalSnapshots(query: SearchHistoricalSnapshotsRequest): Promise<SearchHistoricalSnapshotsResponse>;
    /**
     * 查询表格存储备份详情。
     */
    DescribeOtsTableSnapshots(query: DescribeOtsTableSnapshotsRequest): Promise<DescribeOtsTableSnapshotsResponse>;
    /**
     * 查询可恢复表格存储实例的数据表。
     */
    DescribeRecoverableOtsInstances(query: DescribeRecoverableOtsInstancesRequest): Promise<DescribeRecoverableOtsInstancesResponse>;
    /**
     * 取消一个恢复任务。
     */
    CancelRestoreJob(query: CancelRestoreJobRequest): Promise<CancelRestoreJobResponse>;
    /**
     * 创建一个恢复任务。
     */
    CreateRestoreJob(query: CreateRestoreJobRequest): Promise<CreateRestoreJobResponse>;
    /**
     * 查询一个或者多个符合条件的恢复任务。
     */
    DescribeRestoreJobs2(query: DescribeRestoreJobs2Request): Promise<DescribeRestoreJobs2Response>;
    /**
     * 调用CreateClients接口在指定实例上安装一个或多个HBR备份客户端。
     */
    CreateClients(query: CreateClientsRequest): Promise<CreateClientsResponse>;
    /**
     * 创建一个SAP Hana备份计划。
     */
    CreateHanaBackupPlan(query: CreateHanaBackupPlanRequest): Promise<CreateHanaBackupPlanResponse>;
    /**
     * 注册SAP HANA实例。
     */
    CreateHanaInstance(query: CreateHanaInstanceRequest): Promise<CreateHanaInstanceResponse>;
    /**
     * 创建SAP HANA数据库恢复任务。
     */
    CreateHanaRestore(query: CreateHanaRestoreRequest): Promise<CreateHanaRestoreResponse>;
    /**
     * 删除一个SAP HANA备份计划。
     */
    DeleteHanaBackupPlan(query: DeleteHanaBackupPlanRequest): Promise<DeleteHanaBackupPlanResponse>;
    /**
     * 删除SAP HANA实例。
     */
    DeleteHanaInstance(query: DeleteHanaInstanceRequest): Promise<DeleteHanaInstanceResponse>;
    /**
     * 获取一个或多个符合条件的备份客户端。
     */
    DescribeClients(query: DescribeClientsRequest): Promise<DescribeClientsResponse>;
    /**
     * 获取一个或者多个符合条件的SAP HANA备份计划。
     */
    DescribeHanaBackupPlans(query: DescribeHanaBackupPlansRequest): Promise<DescribeHanaBackupPlansResponse>;
    /**
     * 查询SAP HANA数据库的备份参数。
     */
    DescribeHanaBackupSetting(query: DescribeHanaBackupSettingRequest): Promise<DescribeHanaBackupSettingResponse>;
    /**
     * 查询一个或多个符合条件的SAP HANA备份。
     */
    DescribeHanaBackupsAsync(query: DescribeHanaBackupsAsyncRequest): Promise<DescribeHanaBackupsAsyncResponse>;
    /**
     * 查询SAP HANA数据库信息。
     */
    DescribeHanaDatabases(query: DescribeHanaDatabasesRequest): Promise<DescribeHanaDatabasesResponse>;
    /**
     * 查询一个或多个符合条件的SAP HANA实例。
     */
    DescribeHanaInstances(query: DescribeHanaInstancesRequest): Promise<DescribeHanaInstancesResponse>;
    /**
     * 查询符合条件的SAP HANA恢复任务。
     */
    DescribeHanaRestores(query: DescribeHanaRestoresRequest): Promise<DescribeHanaRestoresResponse>;
    /**
     * 查询数据库的保留时间。
     */
    DescribeHanaRetentionSetting(query: DescribeHanaRetentionSettingRequest): Promise<DescribeHanaRetentionSettingResponse>;
    /**
     * 暂停指定的SAP HANA备份计划。
     */
    DisableHanaBackupPlan(query: DisableHanaBackupPlanRequest): Promise<DisableHanaBackupPlanResponse>;
    /**
     * 启动指定的SAP HANA备份计划。
     */
    EnableHanaBackupPlan(query: EnableHanaBackupPlanRequest): Promise<EnableHanaBackupPlanResponse>;
    /**
     * 启动数据库。
     */
    StartHanaDatabaseAsync(query: StartHanaDatabaseAsyncRequest): Promise<StartHanaDatabaseAsyncResponse>;
    /**
     * 停止SAP HANA数据库。
     */
    StopHanaDatabaseAsync(query: StopHanaDatabaseAsyncRequest): Promise<StopHanaDatabaseAsyncResponse>;
    /**
     * 更新SAP HANA备份计划。
     */
    UpdateHanaBackupPlan(query: UpdateHanaBackupPlanRequest): Promise<UpdateHanaBackupPlanResponse>;
    /**
     * 更新SAP HANA数据库备份参数。
     */
    UpdateHanaBackupSetting(query: UpdateHanaBackupSettingRequest): Promise<UpdateHanaBackupSettingResponse>;
    /**
     * 更新SAP HANA实例。
     */
    UpdateHanaInstance(query: UpdateHanaInstanceRequest): Promise<UpdateHanaInstanceResponse>;
    /**
     * 更新SAP HANA数据库的备份保留时间。
     */
    UpdateHanaRetentionSetting(query: UpdateHanaRetentionSettingRequest): Promise<UpdateHanaRetentionSettingResponse>;
    /**
     * 升级HBR备份客户端。
     */
    UpgradeClient(query: UpgradeClientRequest): Promise<UpgradeClientResponse>;
    /**
     * 调用UninstallClient接口卸载HBR备份客户端。
     */
    UninstallClient(query: UninstallClientRequest): Promise<UninstallClientResponse>;
    /**
     * 查询一个异步任务。
     */
    DescribeTask(query: DescribeTaskRequest): Promise<DescribeTaskResponse>;
    /**
     * 删除一个由混合云备份服务创建的内部挂载点。
     */
    DetachNasFileSystem(query: DetachNasFileSystemRequest): Promise<DetachNasFileSystemResponse>;
    /**
     * 查询可用地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询备份仓库异地复制可选的地域。
     */
    DescribeVaultReplicationRegions(query: DescribeVaultReplicationRegionsRequest): Promise<DescribeVaultReplicationRegionsResponse>;
    /**
     * 生成RAM策略。
     */
    GenerateRamPolicy(query: GenerateRamPolicyRequest): Promise<GenerateRamPolicyResponse>;
    /**
     * 修改实例所在的资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 查询整机备份快照。
     */
    DescribeUdmSnapshots(query: DescribeUdmSnapshotsRequest): Promise<DescribeUdmSnapshotsResponse>;
    /**
     * 注册一个容器集群。
     */
    AddContainerCluster(query: AddContainerClusterRequest): Promise<AddContainerClusterResponse>;
    /**
     * 查询符合条件的一个或多个容器集群。
     */
    DescribeContainerCluster(query: DescribeContainerClusterRequest): Promise<DescribeContainerClusterResponse>;
    /**
     * 用于NAS备份功能中创建内部挂载点。
     */
    AttachNasFileSystem(query: AttachNasFileSystemRequest): Promise<AttachNasFileSystemResponse>;
    /**
     * 用于检查用户是否有权限访问当前资源或页面。
     */
    CheckRole(query: CheckRoleRequest): Promise<CheckRoleResponse>;
    DeleteClient(query: DeleteClientRequest): Promise<DeleteClientResponse>;
    /**
     * 取消保护ECS整机备份实例。
     */
    DeleteUdmEcsInstance(query: DeleteUdmEcsInstanceRequest): Promise<DeleteUdmEcsInstanceResponse>;
    /**
     * 开通混合云备份服务。
     */
    OpenHbrService(query: OpenHbrServiceRequest): Promise<OpenHbrServiceResponse>;
    /**
     * 更新容器集群信息，包括容器集群名称、网络类型等。
     */
    UpdateContainerCluster(query: UpdateContainerClusterRequest): Promise<UpdateContainerClusterResponse>;
    /**
     * 用于跨账号备份中，查询被当前账号管理的跨账号信息。
     */
    DescribeCrossAccounts(query: DescribeCrossAccountsRequest): Promise<DescribeCrossAccountsResponse>;
    /**
     * 用于跨账号备份中，查询被当前账号管理的跨账号信息。
     */
    DescribeCrossAccounts(query: DescribeCrossAccountsRequest): Promise<DescribeCrossAccountsResponse>;
    /**
     * 修改策略与数据源的关联关系。
     */
    UpdatePolicyBinding(query: UpdatePolicyBindingRequest): Promise<UpdatePolicyBindingResponse>;
    /**
     * 将数据源与策略解绑，解绑后，策略将无法保护该数据源，请谨慎操作。
     */
    DeletePolicyBinding(query: DeletePolicyBindingRequest): Promise<DeletePolicyBindingResponse>;
    /**
     * 查询策略绑定的一个或多个数据源、查询数据源绑定的一个或多个策略。
     */
    DescribePolicyBindings(query: DescribePolicyBindingsRequest): Promise<DescribePolicyBindingsResponse>;
    /**
     * 将一个或多个数据源绑定到某个策略。
     */
    CreatePolicyBindings(query: CreatePolicyBindingsRequest): Promise<CreatePolicyBindingsResponse>;
    /**
     * 生成上传文件链接所需的参数和签名。
     */
    CreateTempFileUploadUrl(query: CreateTempFileUploadUrlRequest): Promise<CreateTempFileUploadUrlResponse>;
    /**
     * 获取任务报表等文件的下载链接。
     */
    GetTempFileDownloadLink(query: GetTempFileDownloadLinkRequest): Promise<GetTempFileDownloadLinkResponse>;
    /**
     * 修改一个策略。
     */
    UpdatePolicyV2(query: UpdatePolicyV2Request): Promise<UpdatePolicyV2Response>;
    /**
     * 删除一个策略。
     */
    DeletePolicyV2(query: DeletePolicyV2Request): Promise<DeletePolicyV2Response>;
    /**
     * 查询一个或多个策略。
     */
    DescribePoliciesV2(query: DescribePoliciesV2Request): Promise<DescribePoliciesV2Response>;
    /**
     * 创建一个策略。
     */
    CreatePolicyV2(query: CreatePolicyV2Request): Promise<CreatePolicyV2Response>;
    /**
     * 为一个或所有绑定的数据源执行策略。
     */
    ExecutePolicyV2(query: ExecutePolicyV2Request): Promise<ExecutePolicyV2Response>;
}
export default HBR;
