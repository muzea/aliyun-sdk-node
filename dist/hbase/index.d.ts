import { CreateBackupPlanRequest } from "./CreateBackupPlan/req";
import { CreateBackupPlanResponse } from "./CreateBackupPlan/res";
import { ConvertInstanceRequest } from "./ConvertInstance/req";
import { ConvertInstanceResponse } from "./ConvertInstance/res";
import { AddUserHdfsInfoRequest } from "./AddUserHdfsInfo/req";
import { AddUserHdfsInfoResponse } from "./AddUserHdfsInfo/res";
import { CreateHbaseHaSlbRequest } from "./CreateHbaseHaSlb/req";
import { CreateHbaseHaSlbResponse } from "./CreateHbaseHaSlb/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { CreateMultiZoneClusterRequest } from "./CreateMultiZoneCluster/req";
import { CreateMultiZoneClusterResponse } from "./CreateMultiZoneCluster/res";
import { CreateRestorePlanRequest } from "./CreateRestorePlan/req";
import { CreateRestorePlanResponse } from "./CreateRestorePlan/res";
import { DeleteHBaseHaDBRequest } from "./DeleteHBaseHaDB/req";
import { DeleteHBaseHaDBResponse } from "./DeleteHBaseHaDB/res";
import { CreateServerlessClusterRequest } from "./CreateServerlessCluster/req";
import { CreateServerlessClusterResponse } from "./CreateServerlessCluster/res";
import { DeleteHbaseHaSlbRequest } from "./DeleteHbaseHaSlb/req";
import { DeleteHbaseHaSlbResponse } from "./DeleteHbaseHaSlb/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DeleteMultiZoneClusterRequest } from "./DeleteMultiZoneCluster/req";
import { DeleteMultiZoneClusterResponse } from "./DeleteMultiZoneCluster/res";
import { DeleteServerlessClusterRequest } from "./DeleteServerlessCluster/req";
import { DeleteServerlessClusterResponse } from "./DeleteServerlessCluster/res";
import { DeleteUserHdfsInfoRequest } from "./DeleteUserHdfsInfo/req";
import { DeleteUserHdfsInfoResponse } from "./DeleteUserHdfsInfo/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { DescribeBackupPlanConfigRequest } from "./DescribeBackupPlanConfig/req";
import { DescribeBackupPlanConfigResponse } from "./DescribeBackupPlanConfig/res";
import { DescribeBackupStatusRequest } from "./DescribeBackupStatus/req";
import { DescribeBackupStatusResponse } from "./DescribeBackupStatus/res";
import { DescribeBackupSummaryRequest } from "./DescribeBackupSummary/req";
import { DescribeBackupSummaryResponse } from "./DescribeBackupSummary/res";
import { DescribeBackupTablesRequest } from "./DescribeBackupTables/req";
import { DescribeBackupTablesResponse } from "./DescribeBackupTables/res";
import { DescribeDBInstanceUsageRequest } from "./DescribeDBInstanceUsage/req";
import { DescribeDBInstanceUsageResponse } from "./DescribeDBInstanceUsage/res";
import { DescribeClusterConnectionRequest } from "./DescribeClusterConnection/req";
import { DescribeClusterConnectionResponse } from "./DescribeClusterConnection/res";
import { DescribeDeletedInstancesRequest } from "./DescribeDeletedInstances/req";
import { DescribeDeletedInstancesResponse } from "./DescribeDeletedInstances/res";
import { DescribeDiskWarningLineRequest } from "./DescribeDiskWarningLine/req";
import { DescribeDiskWarningLineResponse } from "./DescribeDiskWarningLine/res";
import { DescribeEndpointsRequest } from "./DescribeEndpoints/req";
import { DescribeEndpointsResponse } from "./DescribeEndpoints/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeInstanceTypeRequest } from "./DescribeInstanceType/req";
import { DescribeInstanceTypeResponse } from "./DescribeInstanceType/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { DescribeIpWhitelistRequest } from "./DescribeIpWhitelist/req";
import { DescribeIpWhitelistResponse } from "./DescribeIpWhitelist/res";
import { DescribeMultiZoneAvailableRegionsRequest } from "./DescribeMultiZoneAvailableRegions/req";
import { DescribeMultiZoneAvailableRegionsResponse } from "./DescribeMultiZoneAvailableRegions/res";
import { DescribeMultiZoneAvailableResourceRequest } from "./DescribeMultiZoneAvailableResource/req";
import { DescribeMultiZoneAvailableResourceResponse } from "./DescribeMultiZoneAvailableResource/res";
import { DescribeMultiZoneClusterRequest } from "./DescribeMultiZoneCluster/req";
import { DescribeMultiZoneClusterResponse } from "./DescribeMultiZoneCluster/res";
import { DescribeRecoverableTimeRangeRequest } from "./DescribeRecoverableTimeRange/req";
import { DescribeRecoverableTimeRangeResponse } from "./DescribeRecoverableTimeRange/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeRestoreFullDetailsRequest } from "./DescribeRestoreFullDetails/req";
import { DescribeRestoreFullDetailsResponse } from "./DescribeRestoreFullDetails/res";
import { DescribeRestoreIncrDetailRequest } from "./DescribeRestoreIncrDetail/req";
import { DescribeRestoreIncrDetailResponse } from "./DescribeRestoreIncrDetail/res";
import { DescribeRestoreSchemaDetailsRequest } from "./DescribeRestoreSchemaDetails/req";
import { DescribeRestoreSchemaDetailsResponse } from "./DescribeRestoreSchemaDetails/res";
import { DescribeRestoreSummaryRequest } from "./DescribeRestoreSummary/req";
import { DescribeRestoreSummaryResponse } from "./DescribeRestoreSummary/res";
import { DescribeRestoreTablesRequest } from "./DescribeRestoreTables/req";
import { DescribeRestoreTablesResponse } from "./DescribeRestoreTables/res";
import { DescribeSecurityGroupsRequest } from "./DescribeSecurityGroups/req";
import { DescribeSecurityGroupsResponse } from "./DescribeSecurityGroups/res";
import { EnableHBaseueBackupRequest } from "./EnableHBaseueBackup/req";
import { EnableHBaseueBackupResponse } from "./EnableHBaseueBackup/res";
import { EnableHBaseueModuleRequest } from "./EnableHBaseueModule/req";
import { EnableHBaseueModuleResponse } from "./EnableHBaseueModule/res";
import { EvaluateMultiZoneResourceRequest } from "./EvaluateMultiZoneResource/req";
import { EvaluateMultiZoneResourceResponse } from "./EvaluateMultiZoneResource/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListTagsRequest } from "./ListTags/req";
import { ListTagsResponse } from "./ListTags/res";
import { ModifyBackupPlanConfigRequest } from "./ModifyBackupPlanConfig/req";
import { ModifyBackupPlanConfigResponse } from "./ModifyBackupPlanConfig/res";
import { ModifyClusterDeletionProtectionRequest } from "./ModifyClusterDeletionProtection/req";
import { ModifyClusterDeletionProtectionResponse } from "./ModifyClusterDeletionProtection/res";
import { ModifyDiskWarningLineRequest } from "./ModifyDiskWarningLine/req";
import { ModifyDiskWarningLineResponse } from "./ModifyDiskWarningLine/res";
import { ModifyInstanceMaintainTimeRequest } from "./ModifyInstanceMaintainTime/req";
import { ModifyInstanceMaintainTimeResponse } from "./ModifyInstanceMaintainTime/res";
import { ModifyInstanceTypeRequest } from "./ModifyInstanceType/req";
import { ModifyInstanceTypeResponse } from "./ModifyInstanceType/res";
import { ModifyInstanceNameRequest } from "./ModifyInstanceName/req";
import { ModifyInstanceNameResponse } from "./ModifyInstanceName/res";
import { ModifyIpWhitelistRequest } from "./ModifyIpWhitelist/req";
import { ModifyIpWhitelistResponse } from "./ModifyIpWhitelist/res";
import { ModifyMultiZoneClusterNodeTypeRequest } from "./ModifyMultiZoneClusterNodeType/req";
import { ModifyMultiZoneClusterNodeTypeResponse } from "./ModifyMultiZoneClusterNodeType/res";
import { ModifySecurityGroupsRequest } from "./ModifySecurityGroups/req";
import { ModifySecurityGroupsResponse } from "./ModifySecurityGroups/res";
import { ModifyUIAccountPasswordRequest } from "./ModifyUIAccountPassword/req";
import { ModifyUIAccountPasswordResponse } from "./ModifyUIAccountPassword/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { PurgeInstanceRequest } from "./PurgeInstance/req";
import { PurgeInstanceResponse } from "./PurgeInstance/res";
import { QueryHBaseHaDBRequest } from "./QueryHBaseHaDB/req";
import { QueryHBaseHaDBResponse } from "./QueryHBaseHaDB/res";
import { QueryXpackRelateDBRequest } from "./QueryXpackRelateDB/req";
import { QueryXpackRelateDBResponse } from "./QueryXpackRelateDB/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { ResizeColdStorageSizeRequest } from "./ResizeColdStorageSize/req";
import { ResizeColdStorageSizeResponse } from "./ResizeColdStorageSize/res";
import { ResizeDiskSizeRequest } from "./ResizeDiskSize/req";
import { ResizeDiskSizeResponse } from "./ResizeDiskSize/res";
import { ResizeMultiZoneClusterDiskSizeRequest } from "./ResizeMultiZoneClusterDiskSize/req";
import { ResizeMultiZoneClusterDiskSizeResponse } from "./ResizeMultiZoneClusterDiskSize/res";
import { ResizeMultiZoneClusterNodeCountRequest } from "./ResizeMultiZoneClusterNodeCount/req";
import { ResizeMultiZoneClusterNodeCountResponse } from "./ResizeMultiZoneClusterNodeCount/res";
import { ResizeNodeCountRequest } from "./ResizeNodeCount/req";
import { ResizeNodeCountResponse } from "./ResizeNodeCount/res";
import { RestartInstanceRequest } from "./RestartInstance/req";
import { RestartInstanceResponse } from "./RestartInstance/res";
import { SwitchHbaseHaSlbRequest } from "./SwitchHbaseHaSlb/req";
import { SwitchHbaseHaSlbResponse } from "./SwitchHbaseHaSlb/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UnTagResourcesRequest } from "./UnTagResources/req";
import { UnTagResourcesResponse } from "./UnTagResources/res";
import { UpgradeMinorVersionRequest } from "./UpgradeMinorVersion/req";
import { UpgradeMinorVersionResponse } from "./UpgradeMinorVersion/res";
import { UpgradeMultiZoneClusterRequest } from "./UpgradeMultiZoneCluster/req";
import { UpgradeMultiZoneClusterResponse } from "./UpgradeMultiZoneCluster/res";
import { XpackRelateDBRequest } from "./XpackRelateDB/req";
import { XpackRelateDBResponse } from "./XpackRelateDB/res";
import { AllocatePublicNetworkAddressRequest } from "./AllocatePublicNetworkAddress/req";
import { AllocatePublicNetworkAddressResponse } from "./AllocatePublicNetworkAddress/res";
import { CloseBackupRequest } from "./CloseBackup/req";
import { CloseBackupResponse } from "./CloseBackup/res";
import { CheckComponentsVersionRequest } from "./CheckComponentsVersion/req";
import { CheckComponentsVersionResponse } from "./CheckComponentsVersion/res";
import { CreateGlobalResourceRequest } from "./CreateGlobalResource/req";
import { CreateGlobalResourceResponse } from "./CreateGlobalResource/res";
import { CreateHBaseSlbServerRequest } from "./CreateHBaseSlbServer/req";
import { CreateHBaseSlbServerResponse } from "./CreateHBaseSlbServer/res";
import { DeleteGlobalResourceRequest } from "./DeleteGlobalResource/req";
import { DeleteGlobalResourceResponse } from "./DeleteGlobalResource/res";
import { DeleteHBaseSlbServerRequest } from "./DeleteHBaseSlbServer/req";
import { DeleteHBaseSlbServerResponse } from "./DeleteHBaseSlbServer/res";
import { DescribeBackupPolicyRequest } from "./DescribeBackupPolicy/req";
import { DescribeBackupPolicyResponse } from "./DescribeBackupPolicy/res";
import { DescribeBackupsRequest } from "./DescribeBackups/req";
import { DescribeBackupsResponse } from "./DescribeBackups/res";
import { DescribeColdStorageRequest } from "./DescribeColdStorage/req";
import { DescribeColdStorageResponse } from "./DescribeColdStorage/res";
import { DescribeSubDomainRequest } from "./DescribeSubDomain/req";
import { DescribeSubDomainResponse } from "./DescribeSubDomain/res";
import { GetMultimodeCmsUrlRequest } from "./GetMultimodeCmsUrl/req";
import { GetMultimodeCmsUrlResponse } from "./GetMultimodeCmsUrl/res";
import { ListHBaseInstancesRequest } from "./ListHBaseInstances/req";
import { ListHBaseInstancesResponse } from "./ListHBaseInstances/res";
import { ListInstanceServiceConfigHistoriesRequest } from "./ListInstanceServiceConfigHistories/req";
import { ListInstanceServiceConfigHistoriesResponse } from "./ListInstanceServiceConfigHistories/res";
import { ListInstanceServiceConfigurationsRequest } from "./ListInstanceServiceConfigurations/req";
import { ListInstanceServiceConfigurationsResponse } from "./ListInstanceServiceConfigurations/res";
import { ModifyBackupPolicyRequest } from "./ModifyBackupPolicy/req";
import { ModifyBackupPolicyResponse } from "./ModifyBackupPolicy/res";
import { ModifyInstanceServiceConfigRequest } from "./ModifyInstanceServiceConfig/req";
import { ModifyInstanceServiceConfigResponse } from "./ModifyInstanceServiceConfig/res";
import { OpenBackupRequest } from "./OpenBackup/req";
import { OpenBackupResponse } from "./OpenBackup/res";
import { RelateDbForHBaseHaRequest } from "./RelateDbForHBaseHa/req";
import { RelateDbForHBaseHaResponse } from "./RelateDbForHBaseHa/res";
import { ReleasePublicNetworkAddressRequest } from "./ReleasePublicNetworkAddress/req";
import { ReleasePublicNetworkAddressResponse } from "./ReleasePublicNetworkAddress/res";
import { DescribeServerlessClusterRequest } from "./DescribeServerlessCluster/req";
import { DescribeServerlessClusterResponse } from "./DescribeServerlessCluster/res";
import { CancelActiveOperationTasksRequest } from "./CancelActiveOperationTasks/req";
import { CancelActiveOperationTasksResponse } from "./CancelActiveOperationTasks/res";
import { DescribeActiveOperationTaskTypeRequest } from "./DescribeActiveOperationTaskType/req";
import { DescribeActiveOperationTaskTypeResponse } from "./DescribeActiveOperationTaskType/res";
import { ModifyActiveOperationTasksRequest } from "./ModifyActiveOperationTasks/req";
import { ModifyActiveOperationTasksResponse } from "./ModifyActiveOperationTasks/res";
import { DescribeActiveOperationTasksRequest } from "./DescribeActiveOperationTasks/req";
import { DescribeActiveOperationTasksResponse } from "./DescribeActiveOperationTasks/res";
import { SwitchServiceRequest } from "./SwitchService/req";
import { SwitchServiceResponse } from "./SwitchService/res";
import { ModifyAccountPasswordRequest } from "./ModifyAccountPassword/req";
import { ModifyAccountPasswordResponse } from "./ModifyAccountPassword/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { DescribeAccountsRequest } from "./DescribeAccounts/req";
import { DescribeAccountsResponse } from "./DescribeAccounts/res";
import { GrantRequest } from "./Grant/req";
import { GrantResponse } from "./Grant/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { RevokeRequest } from "./Revoke/req";
import { RevokeResponse } from "./Revoke/res";

interface HBASE {
    /**
     * 目前仅支持HBaseue。
     */
    CreateBackupPlan(query: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse>;
    /**
     * 调用ConvertInstance将实例从按量收费转为包年包月收费。
     */
    ConvertInstance(query: ConvertInstanceRequest): Promise<ConvertInstanceResponse>;
    /**
     * 在Xpack里增加用户自建的hdfs地址。
     */
    AddUserHdfsInfo(query: AddUserHdfsInfoRequest): Promise<AddUserHdfsInfoResponse>;
    /**
     * BDS集群创建高可用HBase后，此接口可用于创建对应的高可用thrift或高可用phoenix。
     */
    CreateHbaseHaSlb(query: CreateHbaseHaSlbRequest): Promise<CreateHbaseHaSlbResponse>;
    /**
     * 调用CreateCluster创建HBase集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 调用CreateMultiZoneCluster可以创建多可用区集群。
     */
    CreateMultiZoneCluster(query: CreateMultiZoneClusterRequest): Promise<CreateMultiZoneClusterResponse>;
    /**
     * 对于已开通备份恢复集群，可将已备份的数据恢复到当前region的其他同款HBaseue集群里。
     */
    CreateRestorePlan(query: CreateRestorePlanRequest): Promise<CreateRestorePlanResponse>;
    /**
     * 删除已创建的Ha实例。
     */
    DeleteHBaseHaDB(query: DeleteHBaseHaDBRequest): Promise<DeleteHBaseHaDBResponse>;
    /**
     * 新建HBase Serverless集群。
     */
    CreateServerlessCluster(query: CreateServerlessClusterRequest): Promise<CreateServerlessClusterResponse>;
    /**
     * 对照CreateHbaseHaSlb接口，此接口用于删除对应的高可用thrift或高可用phoenix。
     */
    DeleteHbaseHaSlb(query: DeleteHbaseHaSlbRequest): Promise<DeleteHbaseHaSlbResponse>;
    /**
     * 调用DeleteInstance释放HBase实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 通过DeleteMultiZoneCluster接口删除多可用区实例。
     */
    DeleteMultiZoneCluster(query: DeleteMultiZoneClusterRequest): Promise<DeleteMultiZoneClusterResponse>;
    /**
     * 删除HBase Serverless集群。
     */
    DeleteServerlessCluster(query: DeleteServerlessClusterRequest): Promise<DeleteServerlessClusterResponse>;
    /**
     * 调用DeleteUserHdfsInfo删除Xpack里用户自建的hdfs信息。
     */
    DeleteUserHdfsInfo(query: DeleteUserHdfsInfoRequest): Promise<DeleteUserHdfsInfoResponse>;
    /**
     * 调用DescribeAvailableResource查询可用资源。
     */
    DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    /**
     * 调用DescribeBackupPlanConfig接口查询备份计划配置。
     */
    DescribeBackupPlanConfig(query: DescribeBackupPlanConfigRequest): Promise<DescribeBackupPlanConfigResponse>;
    /**
     * 调用DescribeBackupStatus接口描述备份任务状态。
     */
    DescribeBackupStatus(query: DescribeBackupStatusRequest): Promise<DescribeBackupStatusResponse>;
    /**
     * HBaseue备份开启后，通过DescribeBackupSummary接口获取备份详情。
     */
    DescribeBackupSummary(query: DescribeBackupSummaryRequest): Promise<DescribeBackupSummaryResponse>;
    /**
     * 通过调用DescribeBackupTables接口获取某一次备份记录的备份表的信息。
     */
    DescribeBackupTables(query: DescribeBackupTablesRequest): Promise<DescribeBackupTablesResponse>;
    /**
     * 调用DescribeDBInstanceUsage根据集群id获取HBase集群运行水位状态。
     */
    DescribeDBInstanceUsage(query: DescribeDBInstanceUsageRequest): Promise<DescribeDBInstanceUsageResponse>;
    /**
     * 调用DescribeClusterConnection查询集群连接列表。
     */
    DescribeClusterConnection(query: DescribeClusterConnectionRequest): Promise<DescribeClusterConnectionResponse>;
    /**
     * 获取已删除但未完全释放的集群列表。
     */
    DescribeDeletedInstances(query: DescribeDeletedInstancesRequest): Promise<DescribeDeletedInstancesResponse>;
    /**
     * 目前仅支持HBase和HBaseue。
     */
    DescribeDiskWarningLine(query: DescribeDiskWarningLineRequest): Promise<DescribeDiskWarningLineResponse>;
    /**
     * 调用DescribeEndpoints查询HBase实例的数据库连接信息。
     */
    DescribeEndpoints(query: DescribeEndpointsRequest): Promise<DescribeEndpointsResponse>;
    /**
     * 调用DescribeInstance查询HBase实例的详细信息。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 调用DescribeInstanceType查询实例规格（cpu、mem）。
     */
    DescribeInstanceType(query: DescribeInstanceTypeRequest): Promise<DescribeInstanceTypeResponse>;
    /**
     * 调用DescribeInstances查询指定地域的HBase实例列表信息。
     */
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
     * 根据集群id获取集群白名单信息列表。
     */
    DescribeIpWhitelist(query: DescribeIpWhitelistRequest): Promise<DescribeIpWhitelistResponse>;
    /**
     * 调用DescribeMultiZoneAvailableRegions多可用区的可用地域组合。
     */
    DescribeMultiZoneAvailableRegions(query: DescribeMultiZoneAvailableRegionsRequest): Promise<DescribeMultiZoneAvailableRegionsResponse>;
    /**
     * 通过DescribeMultiZoneAvailableResource获取多可用区可购买的资源。
     */
    DescribeMultiZoneAvailableResource(query: DescribeMultiZoneAvailableResourceRequest): Promise<DescribeMultiZoneAvailableResourceResponse>;
    /**
     * 调用DescribeMultiZoneCluster可以获取多可用区实例的详情信息。
     */
    DescribeMultiZoneCluster(query: DescribeMultiZoneClusterRequest): Promise<DescribeMultiZoneClusterResponse>;
    /**
     * HBaseue备份开启后，可通过DescribeRecoverableTimeRange接口获取可恢复的时间范围。
     */
    DescribeRecoverableTimeRange(query: DescribeRecoverableTimeRangeRequest): Promise<DescribeRecoverableTimeRangeResponse>;
    /**
     * 调用DescribeRegions查询可用地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 对于已开启备份恢复的HBaseue集群，通过DescribeRestoreFullDetails接口查询具体某个全量恢复的详情。
     */
    DescribeRestoreFullDetails(query: DescribeRestoreFullDetailsRequest): Promise<DescribeRestoreFullDetailsResponse>;
    /**
     * 通过DescribeRestoreIncrDetail接口获取增量恢复详情。
     */
    DescribeRestoreIncrDetail(query: DescribeRestoreIncrDetailRequest): Promise<DescribeRestoreIncrDetailResponse>;
    /**
     * 对于已开启备份恢复的HBaseue集群，通过DescribeRestoreSchemaDetails接口查询具体恢复Schema的详情。
     */
    DescribeRestoreSchemaDetails(query: DescribeRestoreSchemaDetailsRequest): Promise<DescribeRestoreSchemaDetailsResponse>;
    /**
     * 对于已开通备份恢复的HBaseue集群，通过DescribeRestoreSummary接口获取数据恢复概要。
     */
    DescribeRestoreSummary(query: DescribeRestoreSummaryRequest): Promise<DescribeRestoreSummaryResponse>;
    /**
     * 对于已经发起过备份后恢复的集群，可通过DescribeRestoreTables获取对应恢复记录的详情。
     */
    DescribeRestoreTables(query: DescribeRestoreTablesRequest): Promise<DescribeRestoreTablesResponse>;
    /**
     * 调用DescribeSecurityGroups根据集群ID获取集群所属安全组信息。
     */
    DescribeSecurityGroups(query: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse>;
    /**
     * 开通HBaseue备份恢复。
     */
    EnableHBaseueBackup(query: EnableHBaseueBackupRequest): Promise<EnableHBaseueBackupResponse>;
    /**
     * 调用EnableHBaseueModule开通扩展服务。
     */
    EnableHBaseueModule(query: EnableHBaseueModuleRequest): Promise<EnableHBaseueModuleResponse>;
    /**
     * 调用EvaluateMultiZoneResource接口评估是否存在可用资源。
     */
    EvaluateMultiZoneResource(query: EvaluateMultiZoneResourceRequest): Promise<EvaluateMultiZoneResourceResponse>;
    /**
     * 通过ResourceId或者Tag（Key查询、key和value同时查询）获取标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 根据region获取该region下所有Tag。
     */
    ListTags(query: ListTagsRequest): Promise<ListTagsResponse>;
    /**
     * 对于已开通备份恢复的HBaseue集群。
     */
    ModifyBackupPlanConfig(query: ModifyBackupPlanConfigRequest): Promise<ModifyBackupPlanConfigResponse>;
    /**
     * 通过ModifyClusterDeletionProtection设置实例的是否删除保护属性。
     */
    ModifyClusterDeletionProtection(query: ModifyClusterDeletionProtectionRequest): Promise<ModifyClusterDeletionProtectionResponse>;
    /**
     * 对于HBase集群版和HBaseue集群可通过ModifyDiskWarningLine接口更改磁盘容量告警线，默认告警线为80%。
     */
    ModifyDiskWarningLine(query: ModifyDiskWarningLineRequest): Promise<ModifyDiskWarningLineResponse>;
    /**
     * 调用ModifyInstanceMaintainTime接口修改实例运维起始时间。
     */
    ModifyInstanceMaintainTime(query: ModifyInstanceMaintainTimeRequest): Promise<ModifyInstanceMaintainTimeResponse>;
    /**
     * 调用ModifyInstanceType更改实例的规格。
     */
    ModifyInstanceType(query: ModifyInstanceTypeRequest): Promise<ModifyInstanceTypeResponse>;
    /**
     * 调用ModifyInstanceName修改实例名称。
     */
    ModifyInstanceName(query: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse>;
    /**
     * 调用ModifyIpWhitelist修改实例的分组白名单。
     */
    ModifyIpWhitelist(query: ModifyIpWhitelistRequest): Promise<ModifyIpWhitelistResponse>;
    /**
     * 通过ModifyMultiZoneClusterNodeType修改多可用区实例的节点规格。
     */
    ModifyMultiZoneClusterNodeType(query: ModifyMultiZoneClusterNodeTypeRequest): Promise<ModifyMultiZoneClusterNodeTypeResponse>;
    /**
     * 调用ModifySecurityGroups修改集群所属安全组。
     */
    ModifySecurityGroups(query: ModifySecurityGroupsRequest): Promise<ModifySecurityGroupsResponse>;
    /**
     * 调用ModifyUIProxyAccountPassword重置集群管理UI访问密码。
     */
    ModifyUIAccountPassword(query: ModifyUIAccountPasswordRequest): Promise<ModifyUIAccountPasswordResponse>;
    /**
     * 调用MoveResourceGroup将目标实例移动至目标资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 针对已删除（未超过7天）但未完全清理的实例。
     */
    PurgeInstance(query: PurgeInstanceRequest): Promise<PurgeInstanceResponse>;
    /**
     * BDS集群查询高可用HBase列表。对照CreateHaCluster与CreateHbaseHaSlb。该接口会返回对应的高可用列表。
     */
    QueryHBaseHaDB(query: QueryHBaseHaDBRequest): Promise<QueryHBaseHaDBResponse>;
    /**
     * 调用QueryXpackRelateDB查询当前实例可关联的数据库列表。
     */
    QueryXpackRelateDB(query: QueryXpackRelateDBRequest): Promise<QueryXpackRelateDBResponse>;
    /**
     * 调用RenewInstance为HBase实例续费。
     */
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
     * 更改冷存储大小。
     */
    ResizeColdStorageSize(query: ResizeColdStorageSizeRequest): Promise<ResizeColdStorageSizeResponse>;
    /**
     * 调用ResizeDiskSize调整磁盘大小。
     */
    ResizeDiskSize(query: ResizeDiskSizeRequest): Promise<ResizeDiskSizeResponse>;
    /**
     * 调用ResizeMultiZoneClusterDiskSize接口修改多可用区实例的磁盘大小。
     */
    ResizeMultiZoneClusterDiskSize(query: ResizeMultiZoneClusterDiskSizeRequest): Promise<ResizeMultiZoneClusterDiskSizeResponse>;
    /**
     * 调用ResizeMultiZoneClusterNodeCount接口对多可用区实例进行扩节点。
     */
    ResizeMultiZoneClusterNodeCount(query: ResizeMultiZoneClusterNodeCountRequest): Promise<ResizeMultiZoneClusterNodeCountResponse>;
    /**
     * 调用ResizeNodeCount调整整个实例节点数。
     */
    ResizeNodeCount(query: ResizeNodeCountRequest): Promise<ResizeNodeCountResponse>;
    /**
     * 调用RestartInstance重启HBase集群。
     */
    RestartInstance(query: RestartInstanceRequest): Promise<RestartInstanceResponse>;
    /**
     * 对照CreateHbaseHaSlb接口，此接口用于高可用thrift或高可用phoenix的主备切换。
     */
    SwitchHbaseHaSlb(query: SwitchHbaseHaSlbRequest): Promise<SwitchHbaseHaSlbResponse>;
    /**
     * 实例增加Tag标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 对照TagResources。
     */
    UnTagResources(query: UnTagResourcesRequest): Promise<UnTagResourcesResponse>;
    /**
     * 集群通过UpgradeMinorVersion进行小版本升级。
     */
    UpgradeMinorVersion(query: UpgradeMinorVersionRequest): Promise<UpgradeMinorVersionResponse>;
    /**
     * 通过UpgradeMultiZoneCluster接口可以对多可用区实例进行组件的小版本升级。
     */
    UpgradeMultiZoneCluster(query: UpgradeMultiZoneClusterRequest): Promise<UpgradeMultiZoneClusterResponse>;
    /**
     * 调用XpackRelateDB关联数据库。
     */
    XpackRelateDB(query: XpackRelateDBRequest): Promise<XpackRelateDBResponse>;
    /**
     * 申请公网地址。
     */
    AllocatePublicNetworkAddress(query: AllocatePublicNetworkAddressRequest): Promise<AllocatePublicNetworkAddressResponse>;
    /**
     * 通过CloseBackup关闭hbase集群的备份恢复功能。
     */
    CloseBackup(query: CloseBackupRequest): Promise<CloseBackupResponse>;
    /**
     * 调用CheckComponentsVersion检查组件的版本是否为最新版本。
     */
    CheckComponentsVersion(query: CheckComponentsVersionRequest): Promise<CheckComponentsVersionResponse>;
    /**
     * 通过CreateGlobalResource创建集群里的全局资源。
     */
    CreateGlobalResource(query: CreateGlobalResourceRequest): Promise<CreateGlobalResourceResponse>;
    /**
     * 通过CreateHBaseSlbServer创建负载均衡服务。
     */
    CreateHBaseSlbServer(query: CreateHBaseSlbServerRequest): Promise<CreateHBaseSlbServerResponse>;
    /**
     * 通过DeleteGlobalResource删除该集群的全局资源。
     */
    DeleteGlobalResource(query: DeleteGlobalResourceRequest): Promise<DeleteGlobalResourceResponse>;
    /**
     * 调用DeleteHBaseSlbServer删除已开通的负载均衡服务。
     */
    DeleteHBaseSlbServer(query: DeleteHBaseSlbServerRequest): Promise<DeleteHBaseSlbServerResponse>;
    /**
     * 通过DescribeBackupPolicy获取hbase集群的备份规则。
     */
    DescribeBackupPolicy(query: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse>;
    /**
     * 通过DescribeBackups获取hbase集群备份记录信息。
     */
    DescribeBackups(query: DescribeBackupsRequest): Promise<DescribeBackupsResponse>;
    /**
     * 调用DescribeColdStorage获取实例的冷存储信息。
     */
    DescribeColdStorage(query: DescribeColdStorageRequest): Promise<DescribeColdStorageResponse>;
    /**
     * 调用DescribeSubDomain获取一个可用子域。
     */
    DescribeSubDomain(query: DescribeSubDomainRequest): Promise<DescribeSubDomainResponse>;
    /**
     * 根据集群id获取监控地址。
     */
    GetMultimodeCmsUrl(query: GetMultimodeCmsUrlRequest): Promise<GetMultimodeCmsUrlResponse>;
    /**
     * 调用ListHBaseInstances获取同一个vpc下的HBase实例。
     */
    ListHBaseInstances(query: ListHBaseInstancesRequest): Promise<ListHBaseInstancesResponse>;
    /**
     * 通过ListInstanceServiceConfigHistories获取集群参数的修改历史。
     */
    ListInstanceServiceConfigHistories(query: ListInstanceServiceConfigHistoriesRequest): Promise<ListInstanceServiceConfigHistoriesResponse>;
    /**
     * 通过ListInstanceServiceConfigurations获取集群配置项信息。
     */
    ListInstanceServiceConfigurations(query: ListInstanceServiceConfigurationsRequest): Promise<ListInstanceServiceConfigurationsResponse>;
    /**
     * 调用ModifyBackupPolicy更改HBase集群的备份计划。
     */
    ModifyBackupPolicy(query: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse>;
    /**
     * 调用ModifyInstanceServiceConfig更改集群配置，可修改的配置项可通过ListInstanceServiceConfigurations接口查看。
     */
    ModifyInstanceServiceConfig(query: ModifyInstanceServiceConfigRequest): Promise<ModifyInstanceServiceConfigResponse>;
    /**
     * 通过OpenBackup打开hbase集群的备份恢复功能。
     */
    OpenBackup(query: OpenBackupRequest): Promise<OpenBackupResponse>;
    /**
     * 调用此接口在BDS集群中增加添加主备双活实例。
     */
    RelateDbForHBaseHa(query: RelateDbForHBaseHaRequest): Promise<RelateDbForHBaseHaResponse>;
    /**
     * 释放公网地址。
     */
    ReleasePublicNetworkAddress(query: ReleasePublicNetworkAddressRequest): Promise<ReleasePublicNetworkAddressResponse>;
    /**
     * 调用DescribeServerlessCluster查询Serverless集群详情。
     */
    DescribeServerlessCluster(query: DescribeServerlessClusterRequest): Promise<DescribeServerlessClusterResponse>;
    /**
     * 调用CancelActiveOperationTasks接口取消运维事件任务。
     */
    CancelActiveOperationTasks(query: CancelActiveOperationTasksRequest): Promise<CancelActiveOperationTasksResponse>;
    /**
     * 调用DescribeActiveOperationTaskType接口查询HBase实例的运维任务类型，各类型的任务数量和详请。
     */
    DescribeActiveOperationTaskType(query: DescribeActiveOperationTaskTypeRequest): Promise<DescribeActiveOperationTaskTypeResponse>;
    /**
     * 调用ModifyActiveOperationTasks接口修改运维任务的计划切换时间。
     */
    ModifyActiveOperationTasks(query: ModifyActiveOperationTasksRequest): Promise<ModifyActiveOperationTasksResponse>;
    /**
     * 调用DescribeActiveOperationTasks接口查询HBase实例的运维任务详情。
     */
    DescribeActiveOperationTasks(query: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse>;
    /**
     * 开通或关闭扩展服务
     */
    SwitchService(query: SwitchServiceRequest): Promise<SwitchServiceResponse>;
    /**
     * 修改数据库访问账号密码。
     */
    ModifyAccountPassword(query: ModifyAccountPasswordRequest): Promise<ModifyAccountPasswordResponse>;
    /**
     * 创建宽表账号
     */
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * 查询数据库账号列表
     */
    DescribeAccounts(query: DescribeAccountsRequest): Promise<DescribeAccountsResponse>;
    /**
     * 授权账号权限。
     */
    Grant(query: GrantRequest): Promise<GrantResponse>;
    /**
     * 删除宽表数据库账号
     */
    DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * 回收宽表账号权限
     */
    Revoke(query: RevokeRequest): Promise<RevokeResponse>;
}
export default HBASE;
