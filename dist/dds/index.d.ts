import { CreateDBInstanceRequest } from "./CreateDBInstance/req";
import { CreateDBInstanceResponse } from "./CreateDBInstance/res";
import { CreateShardingDBInstanceRequest } from "./CreateShardingDBInstance/req";
import { CreateShardingDBInstanceResponse } from "./CreateShardingDBInstance/res";
import { ModifyDBInstanceSpecRequest } from "./ModifyDBInstanceSpec/req";
import { ModifyDBInstanceSpecResponse } from "./ModifyDBInstanceSpec/res";
import { ModifyNodeSpecRequest } from "./ModifyNodeSpec/req";
import { ModifyNodeSpecResponse } from "./ModifyNodeSpec/res";
import { ModifyNodeSpecBatchRequest } from "./ModifyNodeSpecBatch/req";
import { ModifyNodeSpecBatchResponse } from "./ModifyNodeSpecBatch/res";
import { CreateNodeRequest } from "./CreateNode/req";
import { CreateNodeResponse } from "./CreateNode/res";
import { CreateNodeBatchRequest } from "./CreateNodeBatch/req";
import { CreateNodeBatchResponse } from "./CreateNodeBatch/res";
import { DeleteNodeRequest } from "./DeleteNode/req";
import { DeleteNodeResponse } from "./DeleteNode/res";
import { UpgradeDBInstanceEngineVersionRequest } from "./UpgradeDBInstanceEngineVersion/req";
import { UpgradeDBInstanceEngineVersionResponse } from "./UpgradeDBInstanceEngineVersion/res";
import { UpgradeDBInstanceKernelVersionRequest } from "./UpgradeDBInstanceKernelVersion/req";
import { UpgradeDBInstanceKernelVersionResponse } from "./UpgradeDBInstanceKernelVersion/res";
import { ModifyDBInstanceMaintainTimeRequest } from "./ModifyDBInstanceMaintainTime/req";
import { ModifyDBInstanceMaintainTimeResponse } from "./ModifyDBInstanceMaintainTime/res";
import { ModifyDBInstanceDescriptionRequest } from "./ModifyDBInstanceDescription/req";
import { ModifyDBInstanceDescriptionResponse } from "./ModifyDBInstanceDescription/res";
import { ModifyDBInstanceNetExpireTimeRequest } from "./ModifyDBInstanceNetExpireTime/req";
import { ModifyDBInstanceNetExpireTimeResponse } from "./ModifyDBInstanceNetExpireTime/res";
import { SwitchDBInstanceHARequest } from "./SwitchDBInstanceHA/req";
import { SwitchDBInstanceHAResponse } from "./SwitchDBInstanceHA/res";
import { RestartDBInstanceRequest } from "./RestartDBInstance/req";
import { RestartDBInstanceResponse } from "./RestartDBInstance/res";
import { DeleteDBInstanceRequest } from "./DeleteDBInstance/req";
import { DeleteDBInstanceResponse } from "./DeleteDBInstance/res";
import { DestroyInstanceRequest } from "./DestroyInstance/req";
import { DestroyInstanceResponse } from "./DestroyInstance/res";
import { DescribeDBInstancesOverviewRequest } from "./DescribeDBInstancesOverview/req";
import { DescribeDBInstancesOverviewResponse } from "./DescribeDBInstancesOverview/res";
import { DescribeReplicaSetRoleRequest } from "./DescribeReplicaSetRole/req";
import { DescribeReplicaSetRoleResponse } from "./DescribeReplicaSetRole/res";
import { DescribeKernelReleaseNotesRequest } from "./DescribeKernelReleaseNotes/req";
import { DescribeKernelReleaseNotesResponse } from "./DescribeKernelReleaseNotes/res";
import { DescribeAvailableEngineVersionRequest } from "./DescribeAvailableEngineVersion/req";
import { DescribeAvailableEngineVersionResponse } from "./DescribeAvailableEngineVersion/res";
import { DescribeDBInstancesRequest } from "./DescribeDBInstances/req";
import { DescribeDBInstancesResponse } from "./DescribeDBInstances/res";
import { DescribeDBInstanceAttributeRequest } from "./DescribeDBInstanceAttribute/req";
import { DescribeDBInstanceAttributeResponse } from "./DescribeDBInstanceAttribute/res";
import { DescribeRoleZoneInfoRequest } from "./DescribeRoleZoneInfo/req";
import { DescribeRoleZoneInfoResponse } from "./DescribeRoleZoneInfo/res";
import { DescribeInstanceAutoRenewalAttributeRequest } from "./DescribeInstanceAutoRenewalAttribute/req";
import { DescribeInstanceAutoRenewalAttributeResponse } from "./DescribeInstanceAutoRenewalAttribute/res";
import { DescribeActiveOperationTaskCountRequest } from "./DescribeActiveOperationTaskCount/req";
import { DescribeActiveOperationTaskCountResponse } from "./DescribeActiveOperationTaskCount/res";
import { DescribeActiveOperationTaskTypeRequest } from "./DescribeActiveOperationTaskType/req";
import { DescribeActiveOperationTaskTypeResponse } from "./DescribeActiveOperationTaskType/res";
import { EvaluateResourceRequest } from "./EvaluateResource/req";
import { EvaluateResourceResponse } from "./EvaluateResource/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { ModifyResourceGroupRequest } from "./ModifyResourceGroup/req";
import { ModifyResourceGroupResponse } from "./ModifyResourceGroup/res";
import { MigrateToOtherZoneRequest } from "./MigrateToOtherZone/req";
import { MigrateToOtherZoneResponse } from "./MigrateToOtherZone/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { MigrateAvailableZoneRequest } from "./MigrateAvailableZone/req";
import { MigrateAvailableZoneResponse } from "./MigrateAvailableZone/res";
import { AllocatePublicNetworkAddressRequest } from "./AllocatePublicNetworkAddress/req";
import { AllocatePublicNetworkAddressResponse } from "./AllocatePublicNetworkAddress/res";
import { ReleasePublicNetworkAddressRequest } from "./ReleasePublicNetworkAddress/req";
import { ReleasePublicNetworkAddressResponse } from "./ReleasePublicNetworkAddress/res";
import { ModifyInstanceVpcAuthModeRequest } from "./ModifyInstanceVpcAuthMode/req";
import { ModifyInstanceVpcAuthModeResponse } from "./ModifyInstanceVpcAuthMode/res";
import { DescribeShardingNetworkAddressRequest } from "./DescribeShardingNetworkAddress/req";
import { DescribeShardingNetworkAddressResponse } from "./DescribeShardingNetworkAddress/res";
import { ModifyDBInstanceNetworkTypeRequest } from "./ModifyDBInstanceNetworkType/req";
import { ModifyDBInstanceNetworkTypeResponse } from "./ModifyDBInstanceNetworkType/res";
import { ModifyDBInstanceConnectionStringRequest } from "./ModifyDBInstanceConnectionString/req";
import { ModifyDBInstanceConnectionStringResponse } from "./ModifyDBInstanceConnectionString/res";
import { ReleaseNodePrivateNetworkAddressRequest } from "./ReleaseNodePrivateNetworkAddress/req";
import { ReleaseNodePrivateNetworkAddressResponse } from "./ReleaseNodePrivateNetworkAddress/res";
import { AllocateNodePrivateNetworkAddressRequest } from "./AllocateNodePrivateNetworkAddress/req";
import { AllocateNodePrivateNetworkAddressResponse } from "./AllocateNodePrivateNetworkAddress/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeAccountsRequest } from "./DescribeAccounts/req";
import { DescribeAccountsResponse } from "./DescribeAccounts/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { ModifyAccountDescriptionRequest } from "./ModifyAccountDescription/req";
import { ModifyAccountDescriptionResponse } from "./ModifyAccountDescription/res";
import { DescribeSecurityGroupConfigurationRequest } from "./DescribeSecurityGroupConfiguration/req";
import { DescribeSecurityGroupConfigurationResponse } from "./DescribeSecurityGroupConfiguration/res";
import { ModifySecurityGroupConfigurationRequest } from "./ModifySecurityGroupConfiguration/req";
import { ModifySecurityGroupConfigurationResponse } from "./ModifySecurityGroupConfiguration/res";
import { DescribeSecurityIpsRequest } from "./DescribeSecurityIps/req";
import { DescribeSecurityIpsResponse } from "./DescribeSecurityIps/res";
import { ModifySecurityIpsRequest } from "./ModifySecurityIps/req";
import { ModifySecurityIpsResponse } from "./ModifySecurityIps/res";
import { CheckCloudResourceAuthorizedRequest } from "./CheckCloudResourceAuthorized/req";
import { CheckCloudResourceAuthorizedResponse } from "./CheckCloudResourceAuthorized/res";
import { DescribeUserEncryptionKeyListRequest } from "./DescribeUserEncryptionKeyList/req";
import { DescribeUserEncryptionKeyListResponse } from "./DescribeUserEncryptionKeyList/res";
import { DescribeDBInstanceEncryptionKeyRequest } from "./DescribeDBInstanceEncryptionKey/req";
import { DescribeDBInstanceEncryptionKeyResponse } from "./DescribeDBInstanceEncryptionKey/res";
import { DescribeDBInstanceTDEInfoRequest } from "./DescribeDBInstanceTDEInfo/req";
import { DescribeDBInstanceTDEInfoResponse } from "./DescribeDBInstanceTDEInfo/res";
import { ModifyDBInstanceTDERequest } from "./ModifyDBInstanceTDE/req";
import { ModifyDBInstanceTDEResponse } from "./ModifyDBInstanceTDE/res";
import { ModifyDBInstanceSSLRequest } from "./ModifyDBInstanceSSL/req";
import { ModifyDBInstanceSSLResponse } from "./ModifyDBInstanceSSL/res";
import { DescribeDBInstanceSSLRequest } from "./DescribeDBInstanceSSL/req";
import { DescribeDBInstanceSSLResponse } from "./DescribeDBInstanceSSL/res";
import { DescribeAuditRecordsRequest } from "./DescribeAuditRecords/req";
import { DescribeAuditRecordsResponse } from "./DescribeAuditRecords/res";
import { DescribeAuditPolicyRequest } from "./DescribeAuditPolicy/req";
import { DescribeAuditPolicyResponse } from "./DescribeAuditPolicy/res";
import { ModifyAuditLogFilterRequest } from "./ModifyAuditLogFilter/req";
import { ModifyAuditLogFilterResponse } from "./ModifyAuditLogFilter/res";
import { DescribeAuditLogFilterRequest } from "./DescribeAuditLogFilter/req";
import { DescribeAuditLogFilterResponse } from "./DescribeAuditLogFilter/res";
import { ModifyAuditPolicyRequest } from "./ModifyAuditPolicy/req";
import { ModifyAuditPolicyResponse } from "./ModifyAuditPolicy/res";
import { DescribeMongoDBLogConfigRequest } from "./DescribeMongoDBLogConfig/req";
import { DescribeMongoDBLogConfigResponse } from "./DescribeMongoDBLogConfig/res";
import { DescribeSlowLogRecordsRequest } from "./DescribeSlowLogRecords/req";
import { DescribeSlowLogRecordsResponse } from "./DescribeSlowLogRecords/res";
import { DescribeErrorLogRecordsRequest } from "./DescribeErrorLogRecords/req";
import { DescribeErrorLogRecordsResponse } from "./DescribeErrorLogRecords/res";
import { DescribeRunningLogRecordsRequest } from "./DescribeRunningLogRecords/req";
import { DescribeRunningLogRecordsResponse } from "./DescribeRunningLogRecords/res";
import { DescribeDBInstancePerformanceRequest } from "./DescribeDBInstancePerformance/req";
import { DescribeDBInstancePerformanceResponse } from "./DescribeDBInstancePerformance/res";
import { ModifyDBInstanceMonitorRequest } from "./ModifyDBInstanceMonitor/req";
import { ModifyDBInstanceMonitorResponse } from "./ModifyDBInstanceMonitor/res";
import { DescribeDBInstanceMonitorRequest } from "./DescribeDBInstanceMonitor/req";
import { DescribeDBInstanceMonitorResponse } from "./DescribeDBInstanceMonitor/res";
import { DescribeParameterModificationHistoryRequest } from "./DescribeParameterModificationHistory/req";
import { DescribeParameterModificationHistoryResponse } from "./DescribeParameterModificationHistory/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { DescribeParameterTemplatesRequest } from "./DescribeParameterTemplates/req";
import { DescribeParameterTemplatesResponse } from "./DescribeParameterTemplates/res";
import { ModifyParametersRequest } from "./ModifyParameters/req";
import { ModifyParametersResponse } from "./ModifyParameters/res";
import { DescribeBackupPolicyRequest } from "./DescribeBackupPolicy/req";
import { DescribeBackupPolicyResponse } from "./DescribeBackupPolicy/res";
import { ModifyBackupPolicyRequest } from "./ModifyBackupPolicy/req";
import { ModifyBackupPolicyResponse } from "./ModifyBackupPolicy/res";
import { CreateBackupRequest } from "./CreateBackup/req";
import { CreateBackupResponse } from "./CreateBackup/res";
import { DescribeBackupsRequest } from "./DescribeBackups/req";
import { DescribeBackupsResponse } from "./DescribeBackups/res";
import { RestoreDBInstanceRequest } from "./RestoreDBInstance/req";
import { RestoreDBInstanceResponse } from "./RestoreDBInstance/res";
import { DescribeBackupDBsRequest } from "./DescribeBackupDBs/req";
import { DescribeBackupDBsResponse } from "./DescribeBackupDBs/res";
import { CheckRecoveryConditionRequest } from "./CheckRecoveryCondition/req";
import { CheckRecoveryConditionResponse } from "./CheckRecoveryCondition/res";
import { DescribePriceRequest } from "./DescribePrice/req";
import { DescribePriceResponse } from "./DescribePrice/res";
import { ModifyInstanceAutoRenewalAttributeRequest } from "./ModifyInstanceAutoRenewalAttribute/req";
import { ModifyInstanceAutoRenewalAttributeResponse } from "./ModifyInstanceAutoRenewalAttribute/res";
import { TransformToPrePaidRequest } from "./TransformToPrePaid/req";
import { TransformToPrePaidResponse } from "./TransformToPrePaid/res";
import { RenewDBInstanceRequest } from "./RenewDBInstance/req";
import { RenewDBInstanceResponse } from "./RenewDBInstance/res";
import { DescribeRenewalPriceRequest } from "./DescribeRenewalPrice/req";
import { DescribeRenewalPriceResponse } from "./DescribeRenewalPrice/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { ModifyActiveOperationTasksRequest } from "./ModifyActiveOperationTasks/req";
import { ModifyActiveOperationTasksResponse } from "./ModifyActiveOperationTasks/res";
import { DescribeActiveOperationTasksRequest } from "./DescribeActiveOperationTasks/req";
import { DescribeActiveOperationTasksResponse } from "./DescribeActiveOperationTasks/res";
import { DescribeAvailabilityZonesRequest } from "./DescribeAvailabilityZones/req";
import { DescribeAvailabilityZonesResponse } from "./DescribeAvailabilityZones/res";
import { TransformInstanceChargeTypeRequest } from "./TransformInstanceChargeType/req";
import { TransformInstanceChargeTypeResponse } from "./TransformInstanceChargeType/res";
import { DescribeDBInstanceSwitchLogRequest } from "./DescribeDBInstanceSwitchLog/req";
import { DescribeDBInstanceSwitchLogResponse } from "./DescribeDBInstanceSwitchLog/res";
import { ModifyTaskInfoRequest } from "./ModifyTaskInfo/req";
import { ModifyTaskInfoResponse } from "./ModifyTaskInfo/res";
import { DescribeHistoryTasksStatRequest } from "./DescribeHistoryTasksStat/req";
import { DescribeHistoryTasksStatResponse } from "./DescribeHistoryTasksStat/res";
import { DescribeHistoryTasksRequest } from "./DescribeHistoryTasks/req";
import { DescribeHistoryTasksResponse } from "./DescribeHistoryTasks/res";
import { ModifyGlobalSecurityIPGroupRequest } from "./ModifyGlobalSecurityIPGroup/req";
import { ModifyGlobalSecurityIPGroupResponse } from "./ModifyGlobalSecurityIPGroup/res";
import { DescribeGlobalSecurityIPGroupRequest } from "./DescribeGlobalSecurityIPGroup/req";
import { DescribeGlobalSecurityIPGroupResponse } from "./DescribeGlobalSecurityIPGroup/res";
import { ModifyGlobalSecurityIPGroupNameRequest } from "./ModifyGlobalSecurityIPGroupName/req";
import { ModifyGlobalSecurityIPGroupNameResponse } from "./ModifyGlobalSecurityIPGroupName/res";
import { DescribeGlobalSecurityIPGroupRelationRequest } from "./DescribeGlobalSecurityIPGroupRelation/req";
import { DescribeGlobalSecurityIPGroupRelationResponse } from "./DescribeGlobalSecurityIPGroupRelation/res";
import { CreateGlobalSecurityIPGroupRequest } from "./CreateGlobalSecurityIPGroup/req";
import { CreateGlobalSecurityIPGroupResponse } from "./CreateGlobalSecurityIPGroup/res";
import { ModifyGlobalSecurityIPGroupRelationRequest } from "./ModifyGlobalSecurityIPGroupRelation/req";
import { ModifyGlobalSecurityIPGroupRelationResponse } from "./ModifyGlobalSecurityIPGroupRelation/res";
import { DeleteGlobalSecurityIPGroupRequest } from "./DeleteGlobalSecurityIPGroup/req";
import { DeleteGlobalSecurityIPGroupResponse } from "./DeleteGlobalSecurityIPGroup/res";
import { DescribeKmsKeysRequest } from "./DescribeKmsKeys/req";
import { DescribeKmsKeysResponse } from "./DescribeKmsKeys/res";
import { ModifyDBInstanceDiskTypeRequest } from "./ModifyDBInstanceDiskType/req";
import { ModifyDBInstanceDiskTypeResponse } from "./ModifyDBInstanceDiskType/res";
import { DescribeClusterRecoverTimeRequest } from "./DescribeClusterRecoverTime/req";
import { DescribeClusterRecoverTimeResponse } from "./DescribeClusterRecoverTime/res";
import { TransferClusterBackupRequest } from "./TransferClusterBackup/req";
import { TransferClusterBackupResponse } from "./TransferClusterBackup/res";
import { DescribeClusterBackupsRequest } from "./DescribeClusterBackups/req";
import { DescribeClusterBackupsResponse } from "./DescribeClusterBackups/res";
import { DescribeInstanceRecoverTimeRequest } from "./DescribeInstanceRecoverTime/req";
import { DescribeInstanceRecoverTimeResponse } from "./DescribeInstanceRecoverTime/res";
import { DescribeBackupTasksRequest } from "./DescribeBackupTasks/req";
import { DescribeBackupTasksResponse } from "./DescribeBackupTasks/res";
import { DescribeBackupStorageRequest } from "./DescribeBackupStorage/req";
import { DescribeBackupStorageResponse } from "./DescribeBackupStorage/res";
import { RestartNodeRequest } from "./RestartNode/req";
import { RestartNodeResponse } from "./RestartNode/res";

interface DDS {
    /**
     * 创建或克隆云数据库MongoDB版副本集实例。
     */
    CreateDBInstance(query: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse>;
    /**
     * 创建或者克隆MongoDB分片集群实例。
     */
    CreateShardingDBInstance(query: CreateShardingDBInstanceRequest): Promise<CreateShardingDBInstanceResponse>;
    /**
     * 变更云数据库MongoDB单节点实例、副本集实例和Serverless实例（仅中国站支持Serverless实例）的规格或存储空间。
     */
    ModifyDBInstanceSpec(query: ModifyDBInstanceSpecRequest): Promise<ModifyDBInstanceSpecResponse>;
    /**
     * 变更MongoDB分片集群实例中节点的规格和存储空间。
     */
    ModifyNodeSpec(query: ModifyNodeSpecRequest): Promise<ModifyNodeSpecResponse>;
    /**
     * 变更云数据库MongoDB分片集群实例中一个或多个Mongos节点、Shard节点的配置。
     */
    ModifyNodeSpecBatch(query: ModifyNodeSpecBatchRequest): Promise<ModifyNodeSpecBatchResponse>;
    /**
     * 为云数据库MongoDB分片集群实例添加Shard节点或Mongos节点。
     */
    CreateNode(query: CreateNodeRequest): Promise<CreateNodeResponse>;
    /**
     * 为云数据库MongoDB分片集群实例批量添加Mongos节点、Shard节点。
     */
    CreateNodeBatch(query: CreateNodeBatchRequest): Promise<CreateNodeBatchResponse>;
    /**
     * 删除MongoDB分片集群实例中的Shard节点或Mongos节点。
     */
    DeleteNode(query: DeleteNodeRequest): Promise<DeleteNodeResponse>;
    /**
     * 升级MongoDB实例的数据库版本。
     */
    UpgradeDBInstanceEngineVersion(query: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse>;
    /**
     * 升级MongoDB实例的数据库小版本。
     */
    UpgradeDBInstanceKernelVersion(query: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse>;
    /**
     * 修改MongoDB实例的可维护时间。
     */
    ModifyDBInstanceMaintainTime(query: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse>;
    /**
     * 修改MongoDB实例名称。
     */
    ModifyDBInstanceDescription(query: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse>;
    /**
     * 延长MongoDB实例的经典网络保留时长。
     */
    ModifyDBInstanceNetExpireTime(query: ModifyDBInstanceNetExpireTimeRequest): Promise<ModifyDBInstanceNetExpireTimeResponse>;
    /**
     * 切换MongoDB实例中的主备节点。
     */
    SwitchDBInstanceHA(query: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse>;
    /**
     * 重启MongoDB实例。
     */
    RestartDBInstance(query: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse>;
    /**
     * 释放MongoDB实例。
     */
    DeleteDBInstance(query: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse>;
    /**
     * 销毁MongoDB实例。
     */
    DestroyInstance(query: DestroyInstanceRequest): Promise<DestroyInstanceResponse>;
    /**
     * 查询一个或多个云数据库MongoDB实例的概览信息。
     */
    DescribeDBInstancesOverview(query: DescribeDBInstancesOverviewRequest): Promise<DescribeDBInstancesOverviewResponse>;
    /**
     * 查询MongoDB实例中的角色信息及连接信息。
     */
    DescribeReplicaSetRole(query: DescribeReplicaSetRoleRequest): Promise<DescribeReplicaSetRoleResponse>;
    /**
     * 查询MongoDB实例的小版本发布日志。
     */
    DescribeKernelReleaseNotes(query: DescribeKernelReleaseNotesRequest): Promise<DescribeKernelReleaseNotesResponse>;
    /**
     * 查询MongoDB实例可升级的版本。
     */
    DescribeAvailableEngineVersion(query: DescribeAvailableEngineVersionRequest): Promise<DescribeAvailableEngineVersionResponse>;
    /**
     * 查询MongoDB实例列表。
     */
    DescribeDBInstances(query: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse>;
    /**
     * 查询云数据库MongoDB实例的信息。
     */
    DescribeDBInstanceAttribute(query: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 查询MongoDB实例的各节点的角色和所属的可用区。
     */
    DescribeRoleZoneInfo(query: DescribeRoleZoneInfoRequest): Promise<DescribeRoleZoneInfoResponse>;
    /**
     * 查询MongoDB实例是否为自动付费。
     */
    DescribeInstanceAutoRenewalAttribute(query: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse>;
    /**
     * 查询MongoDB实例的运维任务数量。
     */
    DescribeActiveOperationTaskCount(query: DescribeActiveOperationTaskCountRequest): Promise<DescribeActiveOperationTaskCountResponse>;
    /**
     * 查询实例的运维任务类型以及各类型的任务数量。
     */
    DescribeActiveOperationTaskType(query: DescribeActiveOperationTaskTypeRequest): Promise<DescribeActiveOperationTaskTypeResponse>;
    /**
     * 在新购实例或对实例进行变配之前，评估是否有足够的资源。
     */
    EvaluateResource(query: EvaluateResourceRequest): Promise<EvaluateResourceResponse>;
    /**
     * 查询指定可用区的资源信息。
     */
    DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    /**
     * 将MongoDB实例移动到指定资源组。
     */
    ModifyResourceGroup(query: ModifyResourceGroupRequest): Promise<ModifyResourceGroupResponse>;
    /**
     * 迁移MongoDB实例到其他可用区。
     */
    MigrateToOtherZone(query: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse>;
    /**
     * 查看MongoDB实例支持的所有地域和可用区。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 迁移MongoDB实例的可用区。
     */
    MigrateAvailableZone(query: MigrateAvailableZoneRequest): Promise<MigrateAvailableZoneResponse>;
    /**
     * 分配公网地址。
     */
    AllocatePublicNetworkAddress(query: AllocatePublicNetworkAddressRequest): Promise<AllocatePublicNetworkAddressResponse>;
    /**
     * 释放MongoDB实例的公网连接地址。
     */
    ReleasePublicNetworkAddress(query: ReleasePublicNetworkAddressRequest): Promise<ReleasePublicNetworkAddressResponse>;
    /**
     * 关闭MongoDB实例的专有网络免密访问功能。
     */
    ModifyInstanceVpcAuthMode(query: ModifyInstanceVpcAuthModeRequest): Promise<ModifyInstanceVpcAuthModeResponse>;
    /**
     * 查询MongoDB分片集群实例的连接信息。
     */
    DescribeShardingNetworkAddress(query: DescribeShardingNetworkAddressRequest): Promise<DescribeShardingNetworkAddressResponse>;
    /**
     * 切换MongoDB实例的网络类型。
     */
    ModifyDBInstanceNetworkType(query: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse>;
    /**
     * 修改MongoDB实例的连接地址和端口。
     */
    ModifyDBInstanceConnectionString(query: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse>;
    /**
     * 释放分片集群实例的Shard节点或ConfigServer节点的内网连接地址。
     */
    ReleaseNodePrivateNetworkAddress(query: ReleaseNodePrivateNetworkAddressRequest): Promise<ReleaseNodePrivateNetworkAddressResponse>;
    /**
     * 为云数据库MongoDB分片集群实例的Shard节点或ConfigServer节点申请内网连接地址。
     */
    AllocateNodePrivateNetworkAddress(query: AllocateNodePrivateNetworkAddressRequest): Promise<AllocateNodePrivateNetworkAddressResponse>;
    /**
     * 为一个或多个MongoDB实例绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询MongoDB实例和标签的绑定关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询目标地域中所有的标签信息。
     */
    DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
     * 如果该标签没有绑定到其他实例，则该标签会被删除。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询MongoDB实例的数据库账号信息。
     */
    DescribeAccounts(query: DescribeAccountsRequest): Promise<DescribeAccountsResponse>;
    /**
     * 重置MongoDB实例中root账号的密码。
     */
    ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
     * 修改MongoDB实例中root账号的备注信息。
     */
    ModifyAccountDescription(query: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 查询MongoDB实例绑定的ECS安全组信息。
     */
    DescribeSecurityGroupConfiguration(query: DescribeSecurityGroupConfigurationRequest): Promise<DescribeSecurityGroupConfigurationResponse>;
    /**
     * 更改MongoDB实例已绑定的ECS安全组。
     */
    ModifySecurityGroupConfiguration(query: ModifySecurityGroupConfigurationRequest): Promise<ModifySecurityGroupConfigurationResponse>;
    /**
     * 查询MongoDB实例的IP白名单。
     */
    DescribeSecurityIps(query: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse>;
    /**
     * 修改MongoDB实例的IP白名单。
     */
    ModifySecurityIps(query: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse>;
    /**
     * 查询KMS密钥是否已授权给MongoDB实例。
     */
    CheckCloudResourceAuthorized(query: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse>;
    /**
     * 查询实例的自定义密钥列表。
     */
    DescribeUserEncryptionKeyList(query: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse>;
    /**
     * 查询MongoDB实例的某个密钥的详情。
     */
    DescribeDBInstanceEncryptionKey(query: DescribeDBInstanceEncryptionKeyRequest): Promise<DescribeDBInstanceEncryptionKeyResponse>;
    /**
     * 查询MongoDB实例的透明数据加密TDE（Transparent Data Encryption）是否开启。
     */
    DescribeDBInstanceTDEInfo(query: DescribeDBInstanceTDEInfoRequest): Promise<DescribeDBInstanceTDEInfoResponse>;
    /**
     * 修改MongoDB实例的透明数据加密TDE（Transparent Data Encryption）状态。
     */
    ModifyDBInstanceTDE(query: ModifyDBInstanceTDERequest): Promise<ModifyDBInstanceTDEResponse>;
    /**
     * 修改MongoDB实例的SSL配置。
     */
    ModifyDBInstanceSSL(query: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse>;
    /**
     * 查询MongoDB实例的SSL设置详情。
     */
    DescribeDBInstanceSSL(query: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse>;
    /**
     * 查询MongoDB实例的审计日志。
     */
    DescribeAuditRecords(query: DescribeAuditRecordsRequest): Promise<DescribeAuditRecordsResponse>;
    /**
     * 查询MongoDB实例的审计日志是否开启。
     */
    DescribeAuditPolicy(query: DescribeAuditPolicyRequest): Promise<DescribeAuditPolicyResponse>;
    /**
     * 修改MongoDB实例审计日志的采集类型。
     */
    ModifyAuditLogFilter(query: ModifyAuditLogFilterRequest): Promise<ModifyAuditLogFilterResponse>;
    /**
     * 查询MongoDB实例审计日志采集的日志类型。
     */
    DescribeAuditLogFilter(query: DescribeAuditLogFilterRequest): Promise<DescribeAuditLogFilterResponse>;
    /**
     * 设置MongoDB实例的审计日志开关或日志存储时长。
     */
    ModifyAuditPolicy(query: ModifyAuditPolicyRequest): Promise<ModifyAuditPolicyResponse>;
    /**
     * 查看MongoDB日志服务的配置。
     */
    DescribeMongoDBLogConfig(query: DescribeMongoDBLogConfigRequest): Promise<DescribeMongoDBLogConfigResponse>;
    /**
     * 查询MongoDB实例运行出现的慢日志明细。
     */
    DescribeSlowLogRecords(query: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse>;
    /**
     * 查询MongoDB实例的错误日志。
     */
    DescribeErrorLogRecords(query: DescribeErrorLogRecordsRequest): Promise<DescribeErrorLogRecordsResponse>;
    /**
     * 查询MongoDB实例的运行日志。
     */
    DescribeRunningLogRecords(query: DescribeRunningLogRecordsRequest): Promise<DescribeRunningLogRecordsResponse>;
    /**
     * 查询MongoDB实例性能数据。
     */
    DescribeDBInstancePerformance(query: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse>;
    /**
     * 设置MongoDB实例的监控采集粒度。
     */
    ModifyDBInstanceMonitor(query: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse>;
    /**
     * 查询MongoDB实例的监控采集粒度。
     */
    DescribeDBInstanceMonitor(query: DescribeDBInstanceMonitorRequest): Promise<DescribeDBInstanceMonitorResponse>;
    /**
     * 查询MongoDB实例参数的修改记录。
     */
    DescribeParameterModificationHistory(query: DescribeParameterModificationHistoryRequest): Promise<DescribeParameterModificationHistoryResponse>;
    /**
     * 查询MongoDB实例的参数配置信息。
     */
    DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
     * 查询MongoDB实例默认的参数模板列表。
     */
    DescribeParameterTemplates(query: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse>;
    /**
     * 修改MongoDB实例的参数。
     */
    ModifyParameters(query: ModifyParametersRequest): Promise<ModifyParametersResponse>;
    /**
     * 查询MongoDB实例的备份策略。
     */
    DescribeBackupPolicy(query: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse>;
    /**
     * 修改MongoDB实例的备份策略。
     */
    ModifyBackupPolicy(query: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse>;
    /**
     * 创建MongoDB实例备份。
     */
    CreateBackup(query: CreateBackupRequest): Promise<CreateBackupResponse>;
    /**
     * 查询MongoDB实例的备份列表。
     */
    DescribeBackups(query: DescribeBackupsRequest): Promise<DescribeBackupsResponse>;
    /**
     * 恢复数据至当前MongoDB实例。
     */
    RestoreDBInstance(query: RestoreDBInstanceRequest): Promise<RestoreDBInstanceResponse>;
    /**
     * 在为MongoDB实例执行单库恢复前，您可以调用本接口查询指定的时间点或备份集内包含的数据库。
     */
    DescribeBackupDBs(query: DescribeBackupDBsRequest): Promise<DescribeBackupDBsResponse>;
    /**
     * 检查MongoDB实例是否满足数据恢复的条件。
     */
    CheckRecoveryCondition(query: CheckRecoveryConditionRequest): Promise<CheckRecoveryConditionResponse>;
    /**
     * 查询创建MongoDB实例、升级配置或续费操作产生的费用。
     */
    DescribePrice(query: DescribePriceRequest): Promise<DescribePriceResponse>;
    /**
     * 设置MongoDB实例的自动续费功能。
     */
    ModifyInstanceAutoRenewalAttribute(query: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse>;
    /**
     * 将按量付费的MongoDB实例转换为包年包月（预付费）实例。
     */
    TransformToPrePaid(query: TransformToPrePaidRequest): Promise<TransformToPrePaidResponse>;
    /**
     * 手动续费包年包月的MongoDB实例。
     */
    RenewDBInstance(query: RenewDBInstanceRequest): Promise<RenewDBInstanceResponse>;
    /**
     * 查询指定MongoDB实例续费一个月的价格。
     */
    DescribeRenewalPrice(query: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse>;
    /**
     * 创建MongoDB云盘版分片集群实例的Shard只读账号。
     */
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * 该接口用于修改云数据库MongoDB实例计划内运维任务的切换时间。
     */
    ModifyActiveOperationTasks(query: ModifyActiveOperationTasksRequest): Promise<ModifyActiveOperationTasksResponse>;
    /**
     * 查询MongoDB实例的运维任务列表。
     */
    DescribeActiveOperationTasks(query: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse>;
    /**
     * 查询MongoDB实例支持的可用区列表。
     */
    DescribeAvailabilityZones(query: DescribeAvailabilityZonesRequest): Promise<DescribeAvailabilityZonesResponse>;
    /**
     * 转换云数据库MongoDB实例的付费类型，将按量付费（后付费）实例转换为包年包月（预付费）实例或者包年包月实例转换为按量付费实例。
     */
    TransformInstanceChargeType(query: TransformInstanceChargeTypeRequest): Promise<TransformInstanceChargeTypeResponse>;
    /**
     * 查询实例的主备切换日志。
     */
    DescribeDBInstanceSwitchLog(query: DescribeDBInstanceSwitchLogRequest): Promise<DescribeDBInstanceSwitchLogResponse>;
    /**
     * 任务操作，修改任务中心的任务信息。
     */
    ModifyTaskInfo(query: ModifyTaskInfoRequest): Promise<ModifyTaskInfoResponse>;
    /**
     * 查看任务中心任务的概览信息。
     */
    DescribeHistoryTasksStat(query: DescribeHistoryTasksStatRequest): Promise<DescribeHistoryTasksStatResponse>;
    /**
     * 查看任务中心的任务列表。
     */
    DescribeHistoryTasks(query: DescribeHistoryTasksRequest): Promise<DescribeHistoryTasksResponse>;
    /**
     * 修改云数据库 MongoDB 版的全局IP白名单模板。
     */
    ModifyGlobalSecurityIPGroup(query: ModifyGlobalSecurityIPGroupRequest): Promise<ModifyGlobalSecurityIPGroupResponse>;
    /**
     * 查询全局IP白名单模板。
     */
    DescribeGlobalSecurityIPGroup(query: DescribeGlobalSecurityIPGroupRequest): Promise<DescribeGlobalSecurityIPGroupResponse>;
    /**
     * 修改全局IP白名单模板名称。
     */
    ModifyGlobalSecurityIPGroupName(query: ModifyGlobalSecurityIPGroupNameRequest): Promise<ModifyGlobalSecurityIPGroupNameResponse>;
    /**
     * 查询实例与全局IP白名单模板关系映射。
     */
    DescribeGlobalSecurityIPGroupRelation(query: DescribeGlobalSecurityIPGroupRelationRequest): Promise<DescribeGlobalSecurityIPGroupRelationResponse>;
    /**
     * 创建全局IP白名单模板。
     */
    CreateGlobalSecurityIPGroup(query: CreateGlobalSecurityIPGroupRequest): Promise<CreateGlobalSecurityIPGroupResponse>;
    /**
     * 修改全局白名单模板与MongoDB实例的映射关系。
     */
    ModifyGlobalSecurityIPGroupRelation(query: ModifyGlobalSecurityIPGroupRelationRequest): Promise<ModifyGlobalSecurityIPGroupRelationResponse>;
    /**
     * 删除全局IP白名单模板。
     */
    DeleteGlobalSecurityIPGroup(query: DeleteGlobalSecurityIPGroupRequest): Promise<DeleteGlobalSecurityIPGroupResponse>;
    /**
     * 查询云盘加密可选择的Kms密钥。
     */
    DescribeKmsKeys(query: DescribeKmsKeysRequest): Promise<DescribeKmsKeysResponse>;
    /**
     * 修改云数据库 MongoDB 版的磁盘类型。
     */
    ModifyDBInstanceDiskType(query: ModifyDBInstanceDiskTypeRequest): Promise<ModifyDBInstanceDiskTypeResponse>;
    /**
     * 查询云数据库 MongoDB 版云盘版分片集群实例的可恢复时间。
     */
    DescribeClusterRecoverTime(query: DescribeClusterRecoverTimeRequest): Promise<DescribeClusterRecoverTimeResponse>;
    /**
     * 将云数据库 MongoDB 版分片集群实例的备份模式切换为集群备份模式。切换至集群备份模式后，实例将支持高频备份。
     */
    TransferClusterBackup(query: TransferClusterBackupRequest): Promise<TransferClusterBackupResponse>;
    /**
     * 查询云数据库 MongoDB 版云盘版分片集群的集群备份集列表。
     */
    DescribeClusterBackups(query: DescribeClusterBackupsRequest): Promise<DescribeClusterBackupsResponse>;
    /**
     * 查询云数据库 MongoDB 版云盘版副本集实例的可恢复时间。
     */
    DescribeInstanceRecoverTime(query: DescribeInstanceRecoverTimeRequest): Promise<DescribeInstanceRecoverTimeResponse>;
    /**
     * 查询MongoDB云盘版副本集或分片集进行中的备份任务。
     */
    DescribeBackupTasks(query: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse>;
    /**
     * 查询MongoDB云盘版副本集或分片集群的备份使用量。
     */
    DescribeBackupStorage(query: DescribeBackupStorageRequest): Promise<DescribeBackupStorageResponse>;
    /**
     * 重启MongoDB实例的单个节点。
     */
    RestartNode(query: RestartNodeRequest): Promise<RestartNodeResponse>;
}
export default DDS;
