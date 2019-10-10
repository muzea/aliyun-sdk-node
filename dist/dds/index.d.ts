import { DescribeBackupsRequest } from "./DescribeBackups/req";
import { DescribeBackupsResponse } from "./DescribeBackups/res";
import { ModifyDBInstanceNetworkTypeRequest } from "./ModifyDBInstanceNetworkType/req";
import { ModifyDBInstanceNetworkTypeResponse } from "./ModifyDBInstanceNetworkType/res";
import { ModifyBackupPolicyRequest } from "./ModifyBackupPolicy/req";
import { ModifyBackupPolicyResponse } from "./ModifyBackupPolicy/res";
import { DescribeBackupPolicyRequest } from "./DescribeBackupPolicy/req";
import { DescribeBackupPolicyResponse } from "./DescribeBackupPolicy/res";
import { ModifyParametersRequest } from "./ModifyParameters/req";
import { ModifyParametersResponse } from "./ModifyParameters/res";
import { DescribeParameterTemplatesRequest } from "./DescribeParameterTemplates/req";
import { DescribeParameterTemplatesResponse } from "./DescribeParameterTemplates/res";
import { DescribeAvailableTimeRangeRequest } from "./DescribeAvailableTimeRange/req";
import { DescribeAvailableTimeRangeResponse } from "./DescribeAvailableTimeRange/res";
import { CreateRecommendationTaskRequest } from "./CreateRecommendationTask/req";
import { CreateRecommendationTaskResponse } from "./CreateRecommendationTask/res";
import { DescribeErrorLogRecordsRequest } from "./DescribeErrorLogRecords/req";
import { DescribeErrorLogRecordsResponse } from "./DescribeErrorLogRecords/res";
import { DescribeParameterModificationHistoryRequest } from "./DescribeParameterModificationHistory/req";
import { DescribeParameterModificationHistoryResponse } from "./DescribeParameterModificationHistory/res";
import { DescribeIndexRecommendationRequest } from "./DescribeIndexRecommendation/req";
import { DescribeIndexRecommendationResponse } from "./DescribeIndexRecommendation/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { DescribeDBInstancePerformanceRequest } from "./DescribeDBInstancePerformance/req";
import { DescribeDBInstancePerformanceResponse } from "./DescribeDBInstancePerformance/res";
import { DescribeDBInstanceSSLRequest } from "./DescribeDBInstanceSSL/req";
import { DescribeDBInstanceSSLResponse } from "./DescribeDBInstanceSSL/res";
import { DescribeSlowLogRecordsRequest } from "./DescribeSlowLogRecords/req";
import { DescribeSlowLogRecordsResponse } from "./DescribeSlowLogRecords/res";
import { DescribeRunningLogRecordsRequest } from "./DescribeRunningLogRecords/req";
import { DescribeRunningLogRecordsResponse } from "./DescribeRunningLogRecords/res";
import { DescribeAuditFilesRequest } from "./DescribeAuditFiles/req";
import { DescribeAuditFilesResponse } from "./DescribeAuditFiles/res";
import { AllocatePublicNetworkAddressRequest } from "./AllocatePublicNetworkAddress/req";
import { AllocatePublicNetworkAddressResponse } from "./AllocatePublicNetworkAddress/res";
import { UpgradeDBInstanceKernelVersionRequest } from "./UpgradeDBInstanceKernelVersion/req";
import { UpgradeDBInstanceKernelVersionResponse } from "./UpgradeDBInstanceKernelVersion/res";
import { ModifyDBInstanceMaintainTimeRequest } from "./ModifyDBInstanceMaintainTime/req";
import { ModifyDBInstanceMaintainTimeResponse } from "./ModifyDBInstanceMaintainTime/res";
import { DescribeAuditRecordsRequest } from "./DescribeAuditRecords/req";
import { DescribeAuditRecordsResponse } from "./DescribeAuditRecords/res";
import { DeleteDBInstanceRequest } from "./DeleteDBInstance/req";
import { DeleteDBInstanceResponse } from "./DeleteDBInstance/res";
import { CreateShardingDBInstanceRequest } from "./CreateShardingDBInstance/req";
import { CreateShardingDBInstanceResponse } from "./CreateShardingDBInstance/res";
import { CreateNodeRequest } from "./CreateNode/req";
import { CreateNodeResponse } from "./CreateNode/res";
import { ModifyNodeSpecRequest } from "./ModifyNodeSpec/req";
import { ModifyNodeSpecResponse } from "./ModifyNodeSpec/res";
import { DescribeShardingNetworkAddressRequest } from "./DescribeShardingNetworkAddress/req";
import { DescribeShardingNetworkAddressResponse } from "./DescribeShardingNetworkAddress/res";
import { ModifyDBInstanceSpecRequest } from "./ModifyDBInstanceSpec/req";
import { ModifyDBInstanceSpecResponse } from "./ModifyDBInstanceSpec/res";
import { CreateDBInstanceRequest } from "./CreateDBInstance/req";
import { CreateDBInstanceResponse } from "./CreateDBInstance/res";
import { ModifyAccountDescriptionRequest } from "./ModifyAccountDescription/req";
import { ModifyAccountDescriptionResponse } from "./ModifyAccountDescription/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { ModifyDBInstanceDescriptionRequest } from "./ModifyDBInstanceDescription/req";
import { ModifyDBInstanceDescriptionResponse } from "./ModifyDBInstanceDescription/res";
import { RestartDBInstanceRequest } from "./RestartDBInstance/req";
import { RestartDBInstanceResponse } from "./RestartDBInstance/res";
import { ReleasePublicNetworkAddressRequest } from "./ReleasePublicNetworkAddress/req";
import { ReleasePublicNetworkAddressResponse } from "./ReleasePublicNetworkAddress/res";
import { ModifyDBInstanceTDERequest } from "./ModifyDBInstanceTDE/req";
import { ModifyDBInstanceTDEResponse } from "./ModifyDBInstanceTDE/res";
import { ModifyDBInstanceConnectionStringRequest } from "./ModifyDBInstanceConnectionString/req";
import { ModifyDBInstanceConnectionStringResponse } from "./ModifyDBInstanceConnectionString/res";
import { DescribeKernelReleaseNotesRequest } from "./DescribeKernelReleaseNotes/req";
import { DescribeKernelReleaseNotesResponse } from "./DescribeKernelReleaseNotes/res";
import { DeleteNodeRequest } from "./DeleteNode/req";
import { DeleteNodeResponse } from "./DeleteNode/res";
import { DescribeReplicaSetRoleRequest } from "./DescribeReplicaSetRole/req";
import { DescribeReplicaSetRoleResponse } from "./DescribeReplicaSetRole/res";
import { ModifyInstanceVpcAuthModeRequest } from "./ModifyInstanceVpcAuthMode/req";
import { ModifyInstanceVpcAuthModeResponse } from "./ModifyInstanceVpcAuthMode/res";
import { DescribeDBInstanceTDEInfoRequest } from "./DescribeDBInstanceTDEInfo/req";
import { DescribeDBInstanceTDEInfoResponse } from "./DescribeDBInstanceTDEInfo/res";
import { UpgradeDBInstanceEngineVersionRequest } from "./UpgradeDBInstanceEngineVersion/req";
import { UpgradeDBInstanceEngineVersionResponse } from "./UpgradeDBInstanceEngineVersion/res";
import { MigrateAvailableZoneRequest } from "./MigrateAvailableZone/req";
import { MigrateAvailableZoneResponse } from "./MigrateAvailableZone/res";
import { DestroyInstanceRequest } from "./DestroyInstance/req";
import { DestroyInstanceResponse } from "./DestroyInstance/res";
import { DescribeAuditLogFilterRequest } from "./DescribeAuditLogFilter/req";
import { DescribeAuditLogFilterResponse } from "./DescribeAuditLogFilter/res";
import { DescribeBackupDBsRequest } from "./DescribeBackupDBs/req";
import { DescribeBackupDBsResponse } from "./DescribeBackupDBs/res";
import { ModifyAuditPolicyRequest } from "./ModifyAuditPolicy/req";
import { ModifyAuditPolicyResponse } from "./ModifyAuditPolicy/res";
import { DescribeRoleZoneInfoRequest } from "./DescribeRoleZoneInfo/req";
import { DescribeRoleZoneInfoResponse } from "./DescribeRoleZoneInfo/res";
import { DescribeRenewalPriceRequest } from "./DescribeRenewalPrice/req";
import { DescribeRenewalPriceResponse } from "./DescribeRenewalPrice/res";
import { ModifyAuditLogFilterRequest } from "./ModifyAuditLogFilter/req";
import { ModifyAuditLogFilterResponse } from "./ModifyAuditLogFilter/res";
import { DescribeSecurityIpsRequest } from "./DescribeSecurityIps/req";
import { DescribeSecurityIpsResponse } from "./DescribeSecurityIps/res";
import { ModifyDBInstanceSSLRequest } from "./ModifyDBInstanceSSL/req";
import { ModifyDBInstanceSSLResponse } from "./ModifyDBInstanceSSL/res";
import { ModifySecurityIpsRequest } from "./ModifySecurityIps/req";
import { ModifySecurityIpsResponse } from "./ModifySecurityIps/res";
import { CreateBackupRequest } from "./CreateBackup/req";
import { CreateBackupResponse } from "./CreateBackup/res";
import { RestoreDBInstanceRequest } from "./RestoreDBInstance/req";
import { RestoreDBInstanceResponse } from "./RestoreDBInstance/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeReplicaConflictInfoRequest } from "./DescribeReplicaConflictInfo/req";
import { DescribeReplicaConflictInfoResponse } from "./DescribeReplicaConflictInfo/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { SwithcDBInstanceHARequest } from "./SwithcDBInstanceHA/req";
import { SwithcDBInstanceHAResponse } from "./SwithcDBInstanceHA/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { AllocateNodePrivateNetworkAddressRequest } from "./AllocateNodePrivateNetworkAddress/req";
import { AllocateNodePrivateNetworkAddressResponse } from "./AllocateNodePrivateNetworkAddress/res";
import { CheckCloudResourceAuthorizedRequest } from "./CheckCloudResourceAuthorized/req";
import { CheckCloudResourceAuthorizedResponse } from "./CheckCloudResourceAuthorized/res";
import { CheckRecoveryConditionRequest } from "./CheckRecoveryCondition/req";
import { CheckRecoveryConditionResponse } from "./CheckRecoveryCondition/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { CreateStaticVerificationRequest } from "./CreateStaticVerification/req";
import { CreateStaticVerificationResponse } from "./CreateStaticVerification/res";
import { DescribeAccountsRequest } from "./DescribeAccounts/req";
import { DescribeAccountsResponse } from "./DescribeAccounts/res";
import { DescribeActiveOperationTaskRequest } from "./DescribeActiveOperationTask/req";
import { DescribeActiveOperationTaskResponse } from "./DescribeActiveOperationTask/res";
import { DescribeActiveOperationTaskCountRequest } from "./DescribeActiveOperationTaskCount/req";
import { DescribeActiveOperationTaskCountResponse } from "./DescribeActiveOperationTaskCount/res";
import { DescribeActiveOperationTaskRegionRequest } from "./DescribeActiveOperationTaskRegion/req";
import { DescribeActiveOperationTaskRegionResponse } from "./DescribeActiveOperationTaskRegion/res";
import { DescribeActiveOperationTaskTypeRequest } from "./DescribeActiveOperationTaskType/req";
import { DescribeActiveOperationTaskTypeResponse } from "./DescribeActiveOperationTaskType/res";
import { DescribeAuditPolicyRequest } from "./DescribeAuditPolicy/req";
import { DescribeAuditPolicyResponse } from "./DescribeAuditPolicy/res";
import { DescribeAvailableEngineVersionRequest } from "./DescribeAvailableEngineVersion/req";
import { DescribeAvailableEngineVersionResponse } from "./DescribeAvailableEngineVersion/res";
import { DescribeAvaliableTimeRangeRequest } from "./DescribeAvaliableTimeRange/req";
import { DescribeAvaliableTimeRangeResponse } from "./DescribeAvaliableTimeRange/res";
import { DescribeDBInstanceAttributeRequest } from "./DescribeDBInstanceAttribute/req";
import { DescribeDBInstanceAttributeResponse } from "./DescribeDBInstanceAttribute/res";
import { DescribeDBInstanceMonitorRequest } from "./DescribeDBInstanceMonitor/req";
import { DescribeDBInstanceMonitorResponse } from "./DescribeDBInstanceMonitor/res";
import { DescribeDBInstancesRequest } from "./DescribeDBInstances/req";
import { DescribeDBInstancesResponse } from "./DescribeDBInstances/res";
import { DescribeInstanceAutoRenewalAttributeRequest } from "./DescribeInstanceAutoRenewalAttribute/req";
import { DescribeInstanceAutoRenewalAttributeResponse } from "./DescribeInstanceAutoRenewalAttribute/res";
import { DescribeRdsVSwitchsRequest } from "./DescribeRdsVSwitchs/req";
import { DescribeRdsVSwitchsResponse } from "./DescribeRdsVSwitchs/res";
import { DescribeRdsVpcsRequest } from "./DescribeRdsVpcs/req";
import { DescribeRdsVpcsResponse } from "./DescribeRdsVpcs/res";
import { DescribeReplicaInitializeProgressRequest } from "./DescribeReplicaInitializeProgress/req";
import { DescribeReplicaInitializeProgressResponse } from "./DescribeReplicaInitializeProgress/res";
import { DescribeReplicaPerformanceRequest } from "./DescribeReplicaPerformance/req";
import { DescribeReplicaPerformanceResponse } from "./DescribeReplicaPerformance/res";
import { DescribeReplicaUsageRequest } from "./DescribeReplicaUsage/req";
import { DescribeReplicaUsageResponse } from "./DescribeReplicaUsage/res";
import { DescribeReplicasRequest } from "./DescribeReplicas/req";
import { DescribeReplicasResponse } from "./DescribeReplicas/res";
import { DescribeReplicationGroupRequest } from "./DescribeReplicationGroup/req";
import { DescribeReplicationGroupResponse } from "./DescribeReplicationGroup/res";
import { DescribeStaticVerificationListRequest } from "./DescribeStaticVerificationList/req";
import { DescribeStaticVerificationListResponse } from "./DescribeStaticVerificationList/res";
import { DescribeStrategyRequest } from "./DescribeStrategy/req";
import { DescribeStrategyResponse } from "./DescribeStrategy/res";
import { DescribeVerificationListRequest } from "./DescribeVerificationList/req";
import { DescribeVerificationListResponse } from "./DescribeVerificationList/res";
import { EvaluateFailOverSwitchRequest } from "./EvaluateFailOverSwitch/req";
import { EvaluateFailOverSwitchResponse } from "./EvaluateFailOverSwitch/res";
import { MigrateToOtherZoneRequest } from "./MigrateToOtherZone/req";
import { MigrateToOtherZoneResponse } from "./MigrateToOtherZone/res";
import { ModifyActiveOperationTaskRequest } from "./ModifyActiveOperationTask/req";
import { ModifyActiveOperationTaskResponse } from "./ModifyActiveOperationTask/res";
import { ModifyDBInstanceMonitorRequest } from "./ModifyDBInstanceMonitor/req";
import { ModifyDBInstanceMonitorResponse } from "./ModifyDBInstanceMonitor/res";
import { ModifyDBInstanceNetExpireTimeRequest } from "./ModifyDBInstanceNetExpireTime/req";
import { ModifyDBInstanceNetExpireTimeResponse } from "./ModifyDBInstanceNetExpireTime/res";
import { ModifyGuardDomainModeRequest } from "./ModifyGuardDomainMode/req";
import { ModifyGuardDomainModeResponse } from "./ModifyGuardDomainMode/res";
import { ModifyInstanceAutoRenewalAttributeRequest } from "./ModifyInstanceAutoRenewalAttribute/req";
import { ModifyInstanceAutoRenewalAttributeResponse } from "./ModifyInstanceAutoRenewalAttribute/res";
import { ModifyReplicaDescriptionRequest } from "./ModifyReplicaDescription/req";
import { ModifyReplicaDescriptionResponse } from "./ModifyReplicaDescription/res";
import { ModifyReplicaModeRequest } from "./ModifyReplicaMode/req";
import { ModifyReplicaModeResponse } from "./ModifyReplicaMode/res";
import { ModifyReplicaRecoveryModeRequest } from "./ModifyReplicaRecoveryMode/req";
import { ModifyReplicaRecoveryModeResponse } from "./ModifyReplicaRecoveryMode/res";
import { ModifyReplicaRelationRequest } from "./ModifyReplicaRelation/req";
import { ModifyReplicaRelationResponse } from "./ModifyReplicaRelation/res";
import { ModifyReplicaVerificationModeRequest } from "./ModifyReplicaVerificationMode/req";
import { ModifyReplicaVerificationModeResponse } from "./ModifyReplicaVerificationMode/res";
import { ReleaseNodePrivateNetworkAddressRequest } from "./ReleaseNodePrivateNetworkAddress/req";
import { ReleaseNodePrivateNetworkAddressResponse } from "./ReleaseNodePrivateNetworkAddress/res";
import { ReleaseReplicaRequest } from "./ReleaseReplica/req";
import { ReleaseReplicaResponse } from "./ReleaseReplica/res";
import { RenewDBInstanceRequest } from "./RenewDBInstance/req";
import { RenewDBInstanceResponse } from "./RenewDBInstance/res";
import { SampleRequest } from "./Sample/req";
import { SampleResponse } from "./Sample/res";
import { SwitchDBInstanceHARequest } from "./SwitchDBInstanceHA/req";
import { SwitchDBInstanceHAResponse } from "./SwitchDBInstanceHA/res";
import { TransformToPrePaidRequest } from "./TransformToPrePaid/req";
import { TransformToPrePaidResponse } from "./TransformToPrePaid/res";

interface DDS {
    /**
    * 调用DescribeBackups接口查询MongoDB实例的备份列表。
    */ DescribeBackups(query: DescribeBackupsRequest): Promise<DescribeBackupsResponse>;
    /**
    * 调用ModifyDBInstanceNetworkType接口切换MongoDB实例的网络类型。
    */ ModifyDBInstanceNetworkType(query: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse>;
    /**
    * 调用ModifyBackupPolicy接口修改MongoDB实例的备份策略。
    */ ModifyBackupPolicy(query: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse>;
    /**
    * 调用DescribeBackupPolicy接口查询MongoDB实例的备份策略。
    */ DescribeBackupPolicy(query: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse>;
    /**
    * 调用ModifyParameters接口修改MongoDB实例的参数。
    */ ModifyParameters(query: ModifyParametersRequest): Promise<ModifyParametersResponse>;
    /**
    * 调用DescribeParameterTemplates接口查询MongoDB实例默认的参数模板列表。
    */ DescribeParameterTemplates(query: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse>;
    /**
    * 调用DescribeAvailableTimeRange接口查询MongoDB实例索引分析报告的分析时间段和生成状态。
    */ DescribeAvailableTimeRange(query: DescribeAvailableTimeRangeRequest): Promise<DescribeAvailableTimeRangeResponse>;
    /**
    * 调用CreateRecommendationTask接口为MongoDB实例创建索引分析任务。
    */ CreateRecommendationTask(query: CreateRecommendationTaskRequest): Promise<CreateRecommendationTaskResponse>;
    /**
    * 调用DescribeErrorLogRecords接口查询MongoDB实例的错误日志。
    */ DescribeErrorLogRecords(query: DescribeErrorLogRecordsRequest): Promise<DescribeErrorLogRecordsResponse>;
    /**
    * 调用DescribeParameterModificationHistory接口查询MongoDB实例参数的修改记录。
    */ DescribeParameterModificationHistory(query: DescribeParameterModificationHistoryRequest): Promise<DescribeParameterModificationHistoryResponse>;
    /**
    * 调用DescribeIndexRecommendation接口查询MongoDB实例的索引推荐详情。
    */ DescribeIndexRecommendation(query: DescribeIndexRecommendationRequest): Promise<DescribeIndexRecommendationResponse>;
    /**
    * 调用DescribeParameters接口查询MongoDB实例的参数配置信息。
    */ DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
    * 调用DescribeDBInstancePerformance接口查询MongoDB实例性能数据。
    */ DescribeDBInstancePerformance(query: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse>;
    /**
    * 调用DescribeDBInstanceSSL接口查询MongoDB实例的SSL设置详情。
    */ DescribeDBInstanceSSL(query: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse>;
    /**
    * 调用DescribeSlowLogRecords接口查询MongoDB实例运行出现的慢操作日志明细。
    */ DescribeSlowLogRecords(query: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse>;
    /**
    * 调用DescribeRunningLogRecords接口查询MongoDB实例的运行日志。
    */ DescribeRunningLogRecords(query: DescribeRunningLogRecordsRequest): Promise<DescribeRunningLogRecordsResponse>;
    /**
    * 调用DescribeAuditFiles接口查询MongoDB实例的审计日志文件。
    */ DescribeAuditFiles(query: DescribeAuditFilesRequest): Promise<DescribeAuditFilesResponse>;
    /**
    * 调用AllocatePublicNetworkAddress接口为MongoDB实例申请公网连接地址。
    */ AllocatePublicNetworkAddress(query: AllocatePublicNetworkAddressRequest): Promise<AllocatePublicNetworkAddressResponse>;
    /**
    * 调用UpgradeDBInstanceKernelVersion接口升级MongoDB实例的数据库小版本。
    */ UpgradeDBInstanceKernelVersion(query: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse>;
    /**
    * 调用ModifyDBInstanceMaintainTime接口修改MongoDB实例的可维护时间。
    */ ModifyDBInstanceMaintainTime(query: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse>;
    /**
    * 调用DescribeAuditRecords接口查询MongoDB实例的审计日志。
    */ DescribeAuditRecords(query: DescribeAuditRecordsRequest): Promise<DescribeAuditRecordsResponse>;
    /**
    * 调用DeleteDBInstance接口释放MongoDB实例。
    */ DeleteDBInstance(query: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse>;
    /**
    * 调用CreateShardingDBInstance接口创建或者克隆MongoDB分片集群实例。
    */ CreateShardingDBInstance(query: CreateShardingDBInstanceRequest): Promise<CreateShardingDBInstanceResponse>;
    /**
    * 调用CreateNode接口为MongoDB分片集群实例增加Shard节点或Mongos节点。
    */ CreateNode(query: CreateNodeRequest): Promise<CreateNodeResponse>;
    /**
    * 调用ModifyNodeSpec接口变更MongoDB分片集群实例中节点的规格和存储空间。
    */ ModifyNodeSpec(query: ModifyNodeSpecRequest): Promise<ModifyNodeSpecResponse>;
    /**
    * 调用DescribeShardingNetworkAddress接口查询MongoDB分片集群实例的连接信息。
    */ DescribeShardingNetworkAddress(query: DescribeShardingNetworkAddressRequest): Promise<DescribeShardingNetworkAddressResponse>;
    /**
    * 调用ModifyDBInstanceSpec接口变更MongoDB单节点或副本集实例的规格或存储空间。
    */ ModifyDBInstanceSpec(query: ModifyDBInstanceSpecRequest): Promise<ModifyDBInstanceSpecResponse>;
    /**
    * 该接口用于创建MongoDB副本集实例，同时也可用于克隆MongoDB副本集实例。
    */ CreateDBInstance(query: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse>;
    /**
    * 调用ModifyAccountDescription接口修改MongoDB实例中root账号的备注信息。
    */ ModifyAccountDescription(query: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse>;
    /**
    * 调用ResetAccountPassword接口重置MongoDB实例中root账号的密码。
    */ ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
    * 调用ModifyDBInstanceDescription接口修改MongoDB实例名称。
    */ ModifyDBInstanceDescription(query: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse>;
    /**
    * 调用RestartDBInstance接口重启MongoDB实例。
    */ RestartDBInstance(query: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse>;
    /**
    * 调用ReleasePublicNetworkAddress接口释放MongoDB实例的公网连接地址。
    */ ReleasePublicNetworkAddress(query: ReleasePublicNetworkAddressRequest): Promise<ReleasePublicNetworkAddressResponse>;
    /**
    * 调用ModifyDBInstanceTDE接口修改MongoDB实例的透明数据加密TDE（Transparent Data Encryption）状态。
    */ ModifyDBInstanceTDE(query: ModifyDBInstanceTDERequest): Promise<ModifyDBInstanceTDEResponse>;
    /**
    * 调用ModifyDBInstanceConnectionString接口修改MongoDB实例的连接地址。
    */ ModifyDBInstanceConnectionString(query: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse>;
    /**
    * 调用DescribeKernelReleaseNotes接口查询MongoDB实例的小版本发布日志。
    */ DescribeKernelReleaseNotes(query: DescribeKernelReleaseNotesRequest): Promise<DescribeKernelReleaseNotesResponse>;
    /**
    * 调用DeleteNode接口删除MongoDB分片集群实例中的Shard节点或Mongos节点。
    */ DeleteNode(query: DeleteNodeRequest): Promise<DeleteNodeResponse>;
    /**
    * 调用DescribeReplicaSetRole接口查询MongoDB实例中的角色信息及连接信息。
    */ DescribeReplicaSetRole(query: DescribeReplicaSetRoleRequest): Promise<DescribeReplicaSetRoleResponse>;
    /**
    * 调用ModifyInstanceVpcAuthMode接口开启或关闭MongoDB实例的专有网络免密访问功能。
    */ ModifyInstanceVpcAuthMode(query: ModifyInstanceVpcAuthModeRequest): Promise<ModifyInstanceVpcAuthModeResponse>;
    /**
    * 调用DescribeDBInstanceTDEInfo接口查询MongoDB实例的透明数据加密TDE（Transparent Data Encryption）是否开启。
    */ DescribeDBInstanceTDEInfo(query: DescribeDBInstanceTDEInfoRequest): Promise<DescribeDBInstanceTDEInfoResponse>;
    /**
    * 调用UpgradeDBInstanceEngineVersion接口升级MongoDB实例的数据库版本。
    */ UpgradeDBInstanceEngineVersion(query: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse>;
    /**
    * 调用MigrateAvailableZone接口迁移MongoDB实例的可用区。
    */ MigrateAvailableZone(query: MigrateAvailableZoneRequest): Promise<MigrateAvailableZoneResponse>;
    /**
    * 调用DestroyInstance接口销毁MongoDB实例。
    */ DestroyInstance(query: DestroyInstanceRequest): Promise<DestroyInstanceResponse>;
    /**
    * 调用DescribeAuditLogFilter接口查询MongoDB实例审计日志采集的日志类型。
    */ DescribeAuditLogFilter(query: DescribeAuditLogFilterRequest): Promise<DescribeAuditLogFilterResponse>;
    /**
    * 在为MongoDB实例执行单库恢复前，调用DescribeBackupDBs接口，查询指定的时间点或备份集内包含的数据库。
    */ DescribeBackupDBs(query: DescribeBackupDBsRequest): Promise<DescribeBackupDBsResponse>;
    /**
    * 调用ModifyAuditPolicy接口设置MongoDB实例的审计日志开关或日志存储时长。
    */ ModifyAuditPolicy(query: ModifyAuditPolicyRequest): Promise<ModifyAuditPolicyResponse>;
    /**
    * 调用DescribeRoleZoneInfo接口查询MongoDB实例的各节点的角色和所属的可用区
    */ DescribeRoleZoneInfo(query: DescribeRoleZoneInfoRequest): Promise<DescribeRoleZoneInfoResponse>;
    /**
    * 调用DescribeRenewalPrice接口查询指定MongoDB实例续费一个月的价格。
    */ DescribeRenewalPrice(query: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse>;
    /**
    * 调用ModifyAuditLogFilter接口修改MongoDB实例审计日志的采集类型。
    */ ModifyAuditLogFilter(query: ModifyAuditLogFilterRequest): Promise<ModifyAuditLogFilterResponse>;
    /**
    * 调用DescribeSecurityIps接口查询MongoDB实例的IP白名单。
    */ DescribeSecurityIps(query: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse>;
    /**
    * 调用ModifyDBInstanceSSL接口修改MongoDB实例的SSL配置。
    */ ModifyDBInstanceSSL(query: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse>;
    /**
    * 调用ModifySecurityIps接口修改MongoDB实例的IP白名单。
    */ ModifySecurityIps(query: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse>;
    /**
    * 调用CreateBackup接口手动备份MongoDB实例。
    */ CreateBackup(query: CreateBackupRequest): Promise<CreateBackupResponse>;
    /**
    * 调用RestoreDBInstance接口恢复数据至当前MongoDB实例。
    */ RestoreDBInstance(query: RestoreDBInstanceRequest): Promise<RestoreDBInstanceResponse>;
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    DescribeReplicaConflictInfo(query: DescribeReplicaConflictInfoRequest): Promise<DescribeReplicaConflictInfoResponse>;
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    SwithcDBInstanceHA(query: SwithcDBInstanceHARequest): Promise<SwithcDBInstanceHAResponse>;
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    AllocateNodePrivateNetworkAddress(query: AllocateNodePrivateNetworkAddressRequest): Promise<AllocateNodePrivateNetworkAddressResponse>;
    CheckCloudResourceAuthorized(query: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse>;
    CheckRecoveryCondition(query: CheckRecoveryConditionRequest): Promise<CheckRecoveryConditionResponse>;
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    CreateStaticVerification(query: CreateStaticVerificationRequest): Promise<CreateStaticVerificationResponse>;
    DescribeAccounts(query: DescribeAccountsRequest): Promise<DescribeAccountsResponse>;
    DescribeActiveOperationTask(query: DescribeActiveOperationTaskRequest): Promise<DescribeActiveOperationTaskResponse>;
    DescribeActiveOperationTaskCount(query: DescribeActiveOperationTaskCountRequest): Promise<DescribeActiveOperationTaskCountResponse>;
    DescribeActiveOperationTaskRegion(query: DescribeActiveOperationTaskRegionRequest): Promise<DescribeActiveOperationTaskRegionResponse>;
    DescribeActiveOperationTaskType(query: DescribeActiveOperationTaskTypeRequest): Promise<DescribeActiveOperationTaskTypeResponse>;
    DescribeAuditPolicy(query: DescribeAuditPolicyRequest): Promise<DescribeAuditPolicyResponse>;
    DescribeAvailableEngineVersion(query: DescribeAvailableEngineVersionRequest): Promise<DescribeAvailableEngineVersionResponse>;
    DescribeAvaliableTimeRange(query: DescribeAvaliableTimeRangeRequest): Promise<DescribeAvaliableTimeRangeResponse>;
    DescribeDBInstanceAttribute(query: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse>;
    DescribeDBInstanceMonitor(query: DescribeDBInstanceMonitorRequest): Promise<DescribeDBInstanceMonitorResponse>;
    DescribeDBInstances(query: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse>;
    DescribeInstanceAutoRenewalAttribute(query: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse>;
    DescribeRdsVSwitchs(query: DescribeRdsVSwitchsRequest): Promise<DescribeRdsVSwitchsResponse>;
    DescribeRdsVpcs(query: DescribeRdsVpcsRequest): Promise<DescribeRdsVpcsResponse>;
    DescribeReplicaInitializeProgress(query: DescribeReplicaInitializeProgressRequest): Promise<DescribeReplicaInitializeProgressResponse>;
    DescribeReplicaPerformance(query: DescribeReplicaPerformanceRequest): Promise<DescribeReplicaPerformanceResponse>;
    DescribeReplicaUsage(query: DescribeReplicaUsageRequest): Promise<DescribeReplicaUsageResponse>;
    DescribeReplicas(query: DescribeReplicasRequest): Promise<DescribeReplicasResponse>;
    DescribeReplicationGroup(query: DescribeReplicationGroupRequest): Promise<DescribeReplicationGroupResponse>;
    DescribeStaticVerificationList(query: DescribeStaticVerificationListRequest): Promise<DescribeStaticVerificationListResponse>;
    DescribeStrategy(query: DescribeStrategyRequest): Promise<DescribeStrategyResponse>;
    DescribeVerificationList(query: DescribeVerificationListRequest): Promise<DescribeVerificationListResponse>;
    EvaluateFailOverSwitch(query: EvaluateFailOverSwitchRequest): Promise<EvaluateFailOverSwitchResponse>;
    MigrateToOtherZone(query: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse>;
    ModifyActiveOperationTask(query: ModifyActiveOperationTaskRequest): Promise<ModifyActiveOperationTaskResponse>;
    ModifyDBInstanceMonitor(query: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse>;
    ModifyDBInstanceNetExpireTime(query: ModifyDBInstanceNetExpireTimeRequest): Promise<ModifyDBInstanceNetExpireTimeResponse>;
    ModifyGuardDomainMode(query: ModifyGuardDomainModeRequest): Promise<ModifyGuardDomainModeResponse>;
    ModifyInstanceAutoRenewalAttribute(query: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse>;
    ModifyReplicaDescription(query: ModifyReplicaDescriptionRequest): Promise<ModifyReplicaDescriptionResponse>;
    ModifyReplicaMode(query: ModifyReplicaModeRequest): Promise<ModifyReplicaModeResponse>;
    ModifyReplicaRecoveryMode(query: ModifyReplicaRecoveryModeRequest): Promise<ModifyReplicaRecoveryModeResponse>;
    ModifyReplicaRelation(query: ModifyReplicaRelationRequest): Promise<ModifyReplicaRelationResponse>;
    ModifyReplicaVerificationMode(query: ModifyReplicaVerificationModeRequest): Promise<ModifyReplicaVerificationModeResponse>;
    ReleaseNodePrivateNetworkAddress(query: ReleaseNodePrivateNetworkAddressRequest): Promise<ReleaseNodePrivateNetworkAddressResponse>;
    ReleaseReplica(query: ReleaseReplicaRequest): Promise<ReleaseReplicaResponse>;
    RenewDBInstance(query: RenewDBInstanceRequest): Promise<RenewDBInstanceResponse>;
    Sample(query: SampleRequest): Promise<SampleResponse>;
    SwitchDBInstanceHA(query: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse>;
    TransformToPrePaid(query: TransformToPrePaidRequest): Promise<TransformToPrePaidResponse>;
}
export default DDS;
