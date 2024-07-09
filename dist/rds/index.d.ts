import { DescribePriceRequest } from "./DescribePrice/req";
import { DescribePriceResponse } from "./DescribePrice/res";
import { DescribeRenewalPriceRequest } from "./DescribeRenewalPrice/req";
import { DescribeRenewalPriceResponse } from "./DescribeRenewalPrice/res";
import { TransformDBInstancePayTypeRequest } from "./TransformDBInstancePayType/req";
import { TransformDBInstancePayTypeResponse } from "./TransformDBInstancePayType/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { CreateDBInstanceRequest } from "./CreateDBInstance/req";
import { CreateDBInstanceResponse } from "./CreateDBInstance/res";
import { StopDBInstanceRequest } from "./StopDBInstance/req";
import { StopDBInstanceResponse } from "./StopDBInstance/res";
import { StartDBInstanceRequest } from "./StartDBInstance/req";
import { StartDBInstanceResponse } from "./StartDBInstance/res";
import { ModifyDBInstanceSpecRequest } from "./ModifyDBInstanceSpec/req";
import { ModifyDBInstanceSpecResponse } from "./ModifyDBInstanceSpec/res";
import { ModifyDasInstanceConfigRequest } from "./ModifyDasInstanceConfig/req";
import { ModifyDasInstanceConfigResponse } from "./ModifyDasInstanceConfig/res";
import { DescribeAvailableZonesRequest } from "./DescribeAvailableZones/req";
import { DescribeAvailableZonesResponse } from "./DescribeAvailableZones/res";
import { DescribeAvailableClassesRequest } from "./DescribeAvailableClasses/req";
import { DescribeAvailableClassesResponse } from "./DescribeAvailableClasses/res";
import { DescribeDBInstanceAttributeRequest } from "./DescribeDBInstanceAttribute/req";
import { DescribeDBInstanceAttributeResponse } from "./DescribeDBInstanceAttribute/res";
import { GetDBInstanceTopologyRequest } from "./GetDBInstanceTopology/req";
import { GetDBInstanceTopologyResponse } from "./GetDBInstanceTopology/res";
import { DescribeDBInstancesRequest } from "./DescribeDBInstances/req";
import { DescribeDBInstancesResponse } from "./DescribeDBInstances/res";
import { ListClassesRequest } from "./ListClasses/req";
import { ListClassesResponse } from "./ListClasses/res";
import { DescribeDBInstancesByExpireTimeRequest } from "./DescribeDBInstancesByExpireTime/req";
import { DescribeDBInstancesByExpireTimeResponse } from "./DescribeDBInstancesByExpireTime/res";
import { MigrateToOtherZoneRequest } from "./MigrateToOtherZone/req";
import { MigrateToOtherZoneResponse } from "./MigrateToOtherZone/res";
import { ModifyHADiagnoseConfigRequest } from "./ModifyHADiagnoseConfig/req";
import { ModifyHADiagnoseConfigResponse } from "./ModifyHADiagnoseConfig/res";
import { DeleteDBInstanceRequest } from "./DeleteDBInstance/req";
import { DeleteDBInstanceResponse } from "./DeleteDBInstance/res";
import { DescribeAnalyticdbByPrimaryDBInstanceRequest } from "./DescribeAnalyticdbByPrimaryDBInstance/req";
import { DescribeAnalyticdbByPrimaryDBInstanceResponse } from "./DescribeAnalyticdbByPrimaryDBInstance/res";
import { CheckCloudResourceAuthorizedRequest } from "./CheckCloudResourceAuthorized/req";
import { CheckCloudResourceAuthorizedResponse } from "./CheckCloudResourceAuthorized/res";
import { UpgradeDBInstanceEngineVersionRequest } from "./UpgradeDBInstanceEngineVersion/req";
import { UpgradeDBInstanceEngineVersionResponse } from "./UpgradeDBInstanceEngineVersion/res";
import { DescribeDBMiniEngineVersionsRequest } from "./DescribeDBMiniEngineVersions/req";
import { DescribeDBMiniEngineVersionsResponse } from "./DescribeDBMiniEngineVersions/res";
import { UpgradeDBInstanceMajorVersionPrecheckRequest } from "./UpgradeDBInstanceMajorVersionPrecheck/req";
import { UpgradeDBInstanceMajorVersionPrecheckResponse } from "./UpgradeDBInstanceMajorVersionPrecheck/res";
import { DescribeUpgradeMajorVersionPrecheckTaskRequest } from "./DescribeUpgradeMajorVersionPrecheckTask/req";
import { DescribeUpgradeMajorVersionPrecheckTaskResponse } from "./DescribeUpgradeMajorVersionPrecheckTask/res";
import { UpgradeDBInstanceMajorVersionRequest } from "./UpgradeDBInstanceMajorVersion/req";
import { UpgradeDBInstanceMajorVersionResponse } from "./UpgradeDBInstanceMajorVersion/res";
import { DescribeUpgradeMajorVersionTasksRequest } from "./DescribeUpgradeMajorVersionTasks/req";
import { DescribeUpgradeMajorVersionTasksResponse } from "./DescribeUpgradeMajorVersionTasks/res";
import { AllocateInstancePublicConnectionRequest } from "./AllocateInstancePublicConnection/req";
import { AllocateInstancePublicConnectionResponse } from "./AllocateInstancePublicConnection/res";
import { DescribeDBInstanceNetInfoRequest } from "./DescribeDBInstanceNetInfo/req";
import { DescribeDBInstanceNetInfoResponse } from "./DescribeDBInstanceNetInfo/res";
import { ModifyDBInstanceConnectionStringRequest } from "./ModifyDBInstanceConnectionString/req";
import { ModifyDBInstanceConnectionStringResponse } from "./ModifyDBInstanceConnectionString/res";
import { SwitchDBInstanceNetTypeRequest } from "./SwitchDBInstanceNetType/req";
import { SwitchDBInstanceNetTypeResponse } from "./SwitchDBInstanceNetType/res";
import { ModifyDBInstanceNetworkTypeRequest } from "./ModifyDBInstanceNetworkType/req";
import { ModifyDBInstanceNetworkTypeResponse } from "./ModifyDBInstanceNetworkType/res";
import { SwitchDBInstanceVpcRequest } from "./SwitchDBInstanceVpc/req";
import { SwitchDBInstanceVpcResponse } from "./SwitchDBInstanceVpc/res";
import { DescribeVSwitchesRequest } from "./DescribeVSwitches/req";
import { DescribeVSwitchesResponse } from "./DescribeVSwitches/res";
import { DescribeHASwitchConfigRequest } from "./DescribeHASwitchConfig/req";
import { DescribeHASwitchConfigResponse } from "./DescribeHASwitchConfig/res";
import { DescribeDedicatedHostGroupsRequest } from "./DescribeDedicatedHostGroups/req";
import { DescribeDedicatedHostGroupsResponse } from "./DescribeDedicatedHostGroups/res";
import { DescribeEventsRequest } from "./DescribeEvents/req";
import { DescribeEventsResponse } from "./DescribeEvents/res";
import { QueryNotifyRequest } from "./QueryNotify/req";
import { QueryNotifyResponse } from "./QueryNotify/res";
import { ConfirmNotifyRequest } from "./ConfirmNotify/req";
import { ConfirmNotifyResponse } from "./ConfirmNotify/res";
import { CreateDiagnosticReportRequest } from "./CreateDiagnosticReport/req";
import { CreateDiagnosticReportResponse } from "./CreateDiagnosticReport/res";
import { DescribeDiagnosticReportListRequest } from "./DescribeDiagnosticReportList/req";
import { DescribeDiagnosticReportListResponse } from "./DescribeDiagnosticReportList/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { DescribeAccountsRequest } from "./DescribeAccounts/req";
import { DescribeAccountsResponse } from "./DescribeAccounts/res";
import { ModifyAccountDescriptionRequest } from "./ModifyAccountDescription/req";
import { ModifyAccountDescriptionResponse } from "./ModifyAccountDescription/res";
import { DescribeInstanceKeywordsRequest } from "./DescribeInstanceKeywords/req";
import { DescribeInstanceKeywordsResponse } from "./DescribeInstanceKeywords/res";
import { ModifyPGHbaConfigRequest } from "./ModifyPGHbaConfig/req";
import { ModifyPGHbaConfigResponse } from "./ModifyPGHbaConfig/res";
import { DescribePGHbaConfigRequest } from "./DescribePGHbaConfig/req";
import { DescribePGHbaConfigResponse } from "./DescribePGHbaConfig/res";
import { DescribeModifyPGHbaConfigLogRequest } from "./DescribeModifyPGHbaConfigLog/req";
import { DescribeModifyPGHbaConfigLogResponse } from "./DescribeModifyPGHbaConfigLog/res";
import { GrantAccountPrivilegeRequest } from "./GrantAccountPrivilege/req";
import { GrantAccountPrivilegeResponse } from "./GrantAccountPrivilege/res";
import { RevokeAccountPrivilegeRequest } from "./RevokeAccountPrivilege/req";
import { RevokeAccountPrivilegeResponse } from "./RevokeAccountPrivilege/res";
import { CreateDatabaseRequest } from "./CreateDatabase/req";
import { CreateDatabaseResponse } from "./CreateDatabase/res";
import { DeleteDatabaseRequest } from "./DeleteDatabase/req";
import { DeleteDatabaseResponse } from "./DeleteDatabase/res";
import { ModifyDBDescriptionRequest } from "./ModifyDBDescription/req";
import { ModifyDBDescriptionResponse } from "./ModifyDBDescription/res";
import { CopyDatabaseBetweenInstancesRequest } from "./CopyDatabaseBetweenInstances/req";
import { CopyDatabaseBetweenInstancesResponse } from "./CopyDatabaseBetweenInstances/res";
import { DescribeDatabasesRequest } from "./DescribeDatabases/req";
import { DescribeDatabasesResponse } from "./DescribeDatabases/res";
import { DescribeCharacterSetNameRequest } from "./DescribeCharacterSetName/req";
import { DescribeCharacterSetNameResponse } from "./DescribeCharacterSetName/res";
import { CreateReadOnlyDBInstanceRequest } from "./CreateReadOnlyDBInstance/req";
import { CreateReadOnlyDBInstanceResponse } from "./CreateReadOnlyDBInstance/res";
import { DescribeReadDBInstanceDelayRequest } from "./DescribeReadDBInstanceDelay/req";
import { DescribeReadDBInstanceDelayResponse } from "./DescribeReadDBInstanceDelay/res";
import { ReceiveDBInstanceRequest } from "./ReceiveDBInstance/req";
import { ReceiveDBInstanceResponse } from "./ReceiveDBInstance/res";
import { SwitchGuardToMasterInstanceRequest } from "./SwitchGuardToMasterInstance/req";
import { SwitchGuardToMasterInstanceResponse } from "./SwitchGuardToMasterInstance/res";
import { CreateDBNodesRequest } from "./CreateDBNodes/req";
import { CreateDBNodesResponse } from "./CreateDBNodes/res";
import { DeleteDBNodesRequest } from "./DeleteDBNodes/req";
import { DeleteDBNodesResponse } from "./DeleteDBNodes/res";
import { DescribeDBInstanceEndpointsRequest } from "./DescribeDBInstanceEndpoints/req";
import { DescribeDBInstanceEndpointsResponse } from "./DescribeDBInstanceEndpoints/res";
import { CreateDBInstanceEndpointRequest } from "./CreateDBInstanceEndpoint/req";
import { CreateDBInstanceEndpointResponse } from "./CreateDBInstanceEndpoint/res";
import { DeleteDBInstanceEndpointRequest } from "./DeleteDBInstanceEndpoint/req";
import { DeleteDBInstanceEndpointResponse } from "./DeleteDBInstanceEndpoint/res";
import { ModifyDBInstanceEndpointRequest } from "./ModifyDBInstanceEndpoint/req";
import { ModifyDBInstanceEndpointResponse } from "./ModifyDBInstanceEndpoint/res";
import { CreateDBInstanceEndpointAddressRequest } from "./CreateDBInstanceEndpointAddress/req";
import { CreateDBInstanceEndpointAddressResponse } from "./CreateDBInstanceEndpointAddress/res";
import { DeleteDBInstanceEndpointAddressRequest } from "./DeleteDBInstanceEndpointAddress/req";
import { DeleteDBInstanceEndpointAddressResponse } from "./DeleteDBInstanceEndpointAddress/res";
import { ModifyDBInstanceEndpointAddressRequest } from "./ModifyDBInstanceEndpointAddress/req";
import { ModifyDBInstanceEndpointAddressResponse } from "./ModifyDBInstanceEndpointAddress/res";
import { AllocateReadWriteSplittingConnectionRequest } from "./AllocateReadWriteSplittingConnection/req";
import { AllocateReadWriteSplittingConnectionResponse } from "./AllocateReadWriteSplittingConnection/res";
import { ReleaseReadWriteSplittingConnectionRequest } from "./ReleaseReadWriteSplittingConnection/req";
import { ReleaseReadWriteSplittingConnectionResponse } from "./ReleaseReadWriteSplittingConnection/res";
import { CalculateDBInstanceWeightRequest } from "./CalculateDBInstanceWeight/req";
import { CalculateDBInstanceWeightResponse } from "./CalculateDBInstanceWeight/res";
import { ModifyDBProxyRequest } from "./ModifyDBProxy/req";
import { ModifyDBProxyResponse } from "./ModifyDBProxy/res";
import { UpgradeDBProxyInstanceKernelVersionRequest } from "./UpgradeDBProxyInstanceKernelVersion/req";
import { UpgradeDBProxyInstanceKernelVersionResponse } from "./UpgradeDBProxyInstanceKernelVersion/res";
import { ModifyDBProxyInstanceRequest } from "./ModifyDBProxyInstance/req";
import { ModifyDBProxyInstanceResponse } from "./ModifyDBProxyInstance/res";
import { ModifyDBProxyEndpointRequest } from "./ModifyDBProxyEndpoint/req";
import { ModifyDBProxyEndpointResponse } from "./ModifyDBProxyEndpoint/res";
import { DescribeDBProxyRequest } from "./DescribeDBProxy/req";
import { DescribeDBProxyResponse } from "./DescribeDBProxy/res";
import { DescribeDBProxyEndpointRequest } from "./DescribeDBProxyEndpoint/req";
import { DescribeDBProxyEndpointResponse } from "./DescribeDBProxyEndpoint/res";
import { DescribeDBProxyPerformanceRequest } from "./DescribeDBProxyPerformance/req";
import { DescribeDBProxyPerformanceResponse } from "./DescribeDBProxyPerformance/res";
import { CreateDBProxyEndpointAddressRequest } from "./CreateDBProxyEndpointAddress/req";
import { CreateDBProxyEndpointAddressResponse } from "./CreateDBProxyEndpointAddress/res";
import { ModifyDBProxyEndpointAddressRequest } from "./ModifyDBProxyEndpointAddress/req";
import { ModifyDBProxyEndpointAddressResponse } from "./ModifyDBProxyEndpointAddress/res";
import { DeleteDBProxyEndpointAddressRequest } from "./DeleteDBProxyEndpointAddress/req";
import { DeleteDBProxyEndpointAddressResponse } from "./DeleteDBProxyEndpointAddress/res";
import { ModifyDbProxyInstanceSslRequest } from "./ModifyDbProxyInstanceSsl/req";
import { ModifyDbProxyInstanceSslResponse } from "./ModifyDbProxyInstanceSsl/res";
import { GetDbProxyInstanceSslRequest } from "./GetDbProxyInstanceSsl/req";
import { GetDbProxyInstanceSslResponse } from "./GetDbProxyInstanceSsl/res";
import { DescribeSecurityGroupConfigurationRequest } from "./DescribeSecurityGroupConfiguration/req";
import { DescribeSecurityGroupConfigurationResponse } from "./DescribeSecurityGroupConfiguration/res";
import { ModifySecurityIpsRequest } from "./ModifySecurityIps/req";
import { ModifySecurityIpsResponse } from "./ModifySecurityIps/res";
import { DescribeDBInstanceSSLRequest } from "./DescribeDBInstanceSSL/req";
import { DescribeDBInstanceSSLResponse } from "./DescribeDBInstanceSSL/res";
import { ModifyDBInstanceSSLRequest } from "./ModifyDBInstanceSSL/req";
import { ModifyDBInstanceSSLResponse } from "./ModifyDBInstanceSSL/res";
import { DescribeDBInstanceTDERequest } from "./DescribeDBInstanceTDE/req";
import { DescribeDBInstanceTDEResponse } from "./DescribeDBInstanceTDE/res";
import { ModifyDBInstanceTDERequest } from "./ModifyDBInstanceTDE/req";
import { ModifyDBInstanceTDEResponse } from "./ModifyDBInstanceTDE/res";
import { DescribeDTCSecurityIpHostsForSQLServerRequest } from "./DescribeDTCSecurityIpHostsForSQLServer/req";
import { DescribeDTCSecurityIpHostsForSQLServerResponse } from "./DescribeDTCSecurityIpHostsForSQLServer/res";
import { DescribeDBInstanceEncryptionKeyRequest } from "./DescribeDBInstanceEncryptionKey/req";
import { DescribeDBInstanceEncryptionKeyResponse } from "./DescribeDBInstanceEncryptionKey/res";
import { CreateServiceLinkedRoleRequest } from "./CreateServiceLinkedRole/req";
import { CreateServiceLinkedRoleResponse } from "./CreateServiceLinkedRole/res";
import { ModifyDBInstanceDeletionProtectionRequest } from "./ModifyDBInstanceDeletionProtection/req";
import { ModifyDBInstanceDeletionProtectionResponse } from "./ModifyDBInstanceDeletionProtection/res";
import { CheckServiceLinkedRoleRequest } from "./CheckServiceLinkedRole/req";
import { CheckServiceLinkedRoleResponse } from "./CheckServiceLinkedRole/res";
import { DescribeSQLCollectorPolicyRequest } from "./DescribeSQLCollectorPolicy/req";
import { DescribeSQLCollectorPolicyResponse } from "./DescribeSQLCollectorPolicy/res";
import { ModifySQLCollectorPolicyRequest } from "./ModifySQLCollectorPolicy/req";
import { ModifySQLCollectorPolicyResponse } from "./ModifySQLCollectorPolicy/res";
import { DescribeSQLLogRecordsRequest } from "./DescribeSQLLogRecords/req";
import { DescribeSQLLogRecordsResponse } from "./DescribeSQLLogRecords/res";
import { DescribeSQLLogFilesRequest } from "./DescribeSQLLogFiles/req";
import { DescribeSQLLogFilesResponse } from "./DescribeSQLLogFiles/res";
import { ModifySQLCollectorRetentionRequest } from "./ModifySQLCollectorRetention/req";
import { ModifySQLCollectorRetentionResponse } from "./ModifySQLCollectorRetention/res";
import { DescribeSlowLogRecordsRequest } from "./DescribeSlowLogRecords/req";
import { DescribeSlowLogRecordsResponse } from "./DescribeSlowLogRecords/res";
import { DescribeSlowLogsRequest } from "./DescribeSlowLogs/req";
import { DescribeSlowLogsResponse } from "./DescribeSlowLogs/res";
import { CreateBackupRequest } from "./CreateBackup/req";
import { CreateBackupResponse } from "./CreateBackup/res";
import { DescribeBackupsRequest } from "./DescribeBackups/req";
import { DescribeBackupsResponse } from "./DescribeBackups/res";
import { DescribeDetachedBackupsRequest } from "./DescribeDetachedBackups/req";
import { DescribeDetachedBackupsResponse } from "./DescribeDetachedBackups/res";
import { DescribeBackupPolicyRequest } from "./DescribeBackupPolicy/req";
import { DescribeBackupPolicyResponse } from "./DescribeBackupPolicy/res";
import { ModifyBackupPolicyRequest } from "./ModifyBackupPolicy/req";
import { ModifyBackupPolicyResponse } from "./ModifyBackupPolicy/res";
import { DeleteBackupRequest } from "./DeleteBackup/req";
import { DeleteBackupResponse } from "./DeleteBackup/res";
import { CloneDBInstanceRequest } from "./CloneDBInstance/req";
import { CloneDBInstanceResponse } from "./CloneDBInstance/res";
import { CreateTempDBInstanceRequest } from "./CreateTempDBInstance/req";
import { CreateTempDBInstanceResponse } from "./CreateTempDBInstance/res";
import { DescribeLocalAvailableRecoveryTimeRequest } from "./DescribeLocalAvailableRecoveryTime/req";
import { DescribeLocalAvailableRecoveryTimeResponse } from "./DescribeLocalAvailableRecoveryTime/res";
import { RecoveryDBInstanceRequest } from "./RecoveryDBInstance/req";
import { RecoveryDBInstanceResponse } from "./RecoveryDBInstance/res";
import { RestoreTableRequest } from "./RestoreTable/req";
import { RestoreTableResponse } from "./RestoreTable/res";
import { DescribeMetaListRequest } from "./DescribeMetaList/req";
import { DescribeMetaListResponse } from "./DescribeMetaList/res";
import { CheckCreateDdrDBInstanceRequest } from "./CheckCreateDdrDBInstance/req";
import { CheckCreateDdrDBInstanceResponse } from "./CheckCreateDdrDBInstance/res";
import { CreateDdrInstanceRequest } from "./CreateDdrInstance/req";
import { CreateDdrInstanceResponse } from "./CreateDdrInstance/res";
import { RestoreDdrTableRequest } from "./RestoreDdrTable/req";
import { RestoreDdrTableResponse } from "./RestoreDdrTable/res";
import { ModifyInstanceCrossBackupPolicyRequest } from "./ModifyInstanceCrossBackupPolicy/req";
import { ModifyInstanceCrossBackupPolicyResponse } from "./ModifyInstanceCrossBackupPolicy/res";
import { DescribeCrossBackupMetaListRequest } from "./DescribeCrossBackupMetaList/req";
import { DescribeCrossBackupMetaListResponse } from "./DescribeCrossBackupMetaList/res";
import { DescribeCrossRegionBackupsRequest } from "./DescribeCrossRegionBackups/req";
import { DescribeCrossRegionBackupsResponse } from "./DescribeCrossRegionBackups/res";
import { DescribeAvailableCrossRegionRequest } from "./DescribeAvailableCrossRegion/req";
import { DescribeAvailableCrossRegionResponse } from "./DescribeAvailableCrossRegion/res";
import { DescribeAvailableRecoveryTimeRequest } from "./DescribeAvailableRecoveryTime/req";
import { DescribeAvailableRecoveryTimeResponse } from "./DescribeAvailableRecoveryTime/res";
import { DescribeResourceUsageRequest } from "./DescribeResourceUsage/req";
import { DescribeResourceUsageResponse } from "./DescribeResourceUsage/res";
import { DescribeDBInstancePerformanceRequest } from "./DescribeDBInstancePerformance/req";
import { DescribeDBInstancePerformanceResponse } from "./DescribeDBInstancePerformance/res";
import { DescribeAvailableMetricsRequest } from "./DescribeAvailableMetrics/req";
import { DescribeAvailableMetricsResponse } from "./DescribeAvailableMetrics/res";
import { ModifyDBInstanceMetricsRequest } from "./ModifyDBInstanceMetrics/req";
import { ModifyDBInstanceMetricsResponse } from "./ModifyDBInstanceMetrics/res";
import { DescribeDBInstanceMetricsRequest } from "./DescribeDBInstanceMetrics/req";
import { DescribeDBInstanceMetricsResponse } from "./DescribeDBInstanceMetrics/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { ModifyParameterRequest } from "./ModifyParameter/req";
import { ModifyParameterResponse } from "./ModifyParameter/res";
import { DescribeParameterTemplatesRequest } from "./DescribeParameterTemplates/req";
import { DescribeParameterTemplatesResponse } from "./DescribeParameterTemplates/res";
import { CreateParameterGroupRequest } from "./CreateParameterGroup/req";
import { CreateParameterGroupResponse } from "./CreateParameterGroup/res";
import { ModifyParameterGroupRequest } from "./ModifyParameterGroup/req";
import { ModifyParameterGroupResponse } from "./ModifyParameterGroup/res";
import { CloneParameterGroupRequest } from "./CloneParameterGroup/req";
import { CloneParameterGroupResponse } from "./CloneParameterGroup/res";
import { DescribeParameterGroupsRequest } from "./DescribeParameterGroups/req";
import { DescribeParameterGroupsResponse } from "./DescribeParameterGroups/res";
import { DescribeParameterGroupRequest } from "./DescribeParameterGroup/req";
import { DescribeParameterGroupResponse } from "./DescribeParameterGroup/res";
import { DeleteParameterGroupRequest } from "./DeleteParameterGroup/req";
import { DeleteParameterGroupResponse } from "./DeleteParameterGroup/res";
import { CreateMigrateTaskRequest } from "./CreateMigrateTask/req";
import { CreateMigrateTaskResponse } from "./CreateMigrateTask/res";
import { DescribeOssDownloadsRequest } from "./DescribeOssDownloads/req";
import { DescribeOssDownloadsResponse } from "./DescribeOssDownloads/res";
import { CreateOnlineDatabaseTaskRequest } from "./CreateOnlineDatabaseTask/req";
import { CreateOnlineDatabaseTaskResponse } from "./CreateOnlineDatabaseTask/res";
import { DescribeMigrateTasksRequest } from "./DescribeMigrateTasks/req";
import { DescribeMigrateTasksResponse } from "./DescribeMigrateTasks/res";
import { DescribeMigrateTaskByIdRequest } from "./DescribeMigrateTaskById/req";
import { DescribeMigrateTaskByIdResponse } from "./DescribeMigrateTaskById/res";
import { ModifyReadWriteSplittingConnectionRequest } from "./ModifyReadWriteSplittingConnection/req";
import { ModifyReadWriteSplittingConnectionResponse } from "./ModifyReadWriteSplittingConnection/res";
import { ListUserBackupFilesRequest } from "./ListUserBackupFiles/req";
import { ListUserBackupFilesResponse } from "./ListUserBackupFiles/res";
import { CreateCloudMigrationPrecheckTaskRequest } from "./CreateCloudMigrationPrecheckTask/req";
import { CreateCloudMigrationPrecheckTaskResponse } from "./CreateCloudMigrationPrecheckTask/res";
import { DescribeCloudMigrationPrecheckResultRequest } from "./DescribeCloudMigrationPrecheckResult/req";
import { DescribeCloudMigrationPrecheckResultResponse } from "./DescribeCloudMigrationPrecheckResult/res";
import { CreateCloudMigrationTaskRequest } from "./CreateCloudMigrationTask/req";
import { CreateCloudMigrationTaskResponse } from "./CreateCloudMigrationTask/res";
import { ActivateMigrationTargetInstanceRequest } from "./ActivateMigrationTargetInstance/req";
import { ActivateMigrationTargetInstanceResponse } from "./ActivateMigrationTargetInstance/res";
import { DescribeCloudMigrationResultRequest } from "./DescribeCloudMigrationResult/req";
import { DescribeCloudMigrationResultResponse } from "./DescribeCloudMigrationResult/res";
import { DescribeGadInstancesRequest } from "./DescribeGadInstances/req";
import { DescribeGadInstancesResponse } from "./DescribeGadInstances/res";
import { CreateGADInstanceRequest } from "./CreateGADInstance/req";
import { CreateGADInstanceResponse } from "./CreateGADInstance/res";
import { CreateGadInstanceMemberRequest } from "./CreateGadInstanceMember/req";
import { CreateGadInstanceMemberResponse } from "./CreateGadInstanceMember/res";
import { DeleteGadInstanceRequest } from "./DeleteGadInstance/req";
import { DeleteGadInstanceResponse } from "./DeleteGadInstance/res";
import { DetachGadInstanceMemberRequest } from "./DetachGadInstanceMember/req";
import { DetachGadInstanceMemberResponse } from "./DetachGadInstanceMember/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { MigrateConnectionToOtherZoneRequest } from "./MigrateConnectionToOtherZone/req";
import { MigrateConnectionToOtherZoneResponse } from "./MigrateConnectionToOtherZone/res";
import { ModifyDBInstanceMonitorRequest } from "./ModifyDBInstanceMonitor/req";
import { ModifyDBInstanceMonitorResponse } from "./ModifyDBInstanceMonitor/res";
import { DescribeDBInstanceIpHostnameRequest } from "./DescribeDBInstanceIpHostname/req";
import { DescribeDBInstanceIpHostnameResponse } from "./DescribeDBInstanceIpHostname/res";
import { DescribeActionEventPolicyRequest } from "./DescribeActionEventPolicy/req";
import { DescribeActionEventPolicyResponse } from "./DescribeActionEventPolicy/res";
import { MigrateSecurityIPModeRequest } from "./MigrateSecurityIPMode/req";
import { MigrateSecurityIPModeResponse } from "./MigrateSecurityIPMode/res";
import { ModifyResourceGroupRequest } from "./ModifyResourceGroup/req";
import { ModifyResourceGroupResponse } from "./ModifyResourceGroup/res";
import { ModifyCollationTimeZoneRequest } from "./ModifyCollationTimeZone/req";
import { ModifyCollationTimeZoneResponse } from "./ModifyCollationTimeZone/res";
import { CheckInstanceExistRequest } from "./CheckInstanceExist/req";
import { CheckInstanceExistResponse } from "./CheckInstanceExist/res";
import { DescribeCrossRegionBackupDBInstanceRequest } from "./DescribeCrossRegionBackupDBInstance/req";
import { DescribeCrossRegionBackupDBInstanceResponse } from "./DescribeCrossRegionBackupDBInstance/res";
import { RestartDBInstanceRequest } from "./RestartDBInstance/req";
import { RestartDBInstanceResponse } from "./RestartDBInstance/res";
import { ModifyDBInstancePayTypeRequest } from "./ModifyDBInstancePayType/req";
import { ModifyDBInstancePayTypeResponse } from "./ModifyDBInstancePayType/res";
import { ModifyDBInstanceNetworkExpireTimeRequest } from "./ModifyDBInstanceNetworkExpireTime/req";
import { ModifyDBInstanceNetworkExpireTimeResponse } from "./ModifyDBInstanceNetworkExpireTime/res";
import { SwitchDBInstanceHARequest } from "./SwitchDBInstanceHA/req";
import { SwitchDBInstanceHAResponse } from "./SwitchDBInstanceHA/res";
import { ModifyDBInstanceProxyConfigurationRequest } from "./ModifyDBInstanceProxyConfiguration/req";
import { ModifyDBInstanceProxyConfigurationResponse } from "./ModifyDBInstanceProxyConfiguration/res";
import { ModifyReadonlyInstanceDelayReplicationTimeRequest } from "./ModifyReadonlyInstanceDelayReplicationTime/req";
import { ModifyReadonlyInstanceDelayReplicationTimeResponse } from "./ModifyReadonlyInstanceDelayReplicationTime/res";
import { DescribeDBInstancesForCloneRequest } from "./DescribeDBInstancesForClone/req";
import { DescribeDBInstancesForCloneResponse } from "./DescribeDBInstancesForClone/res";
import { ModifyDBInstanceAutoUpgradeMinorVersionRequest } from "./ModifyDBInstanceAutoUpgradeMinorVersion/req";
import { ModifyDBInstanceAutoUpgradeMinorVersionResponse } from "./ModifyDBInstanceAutoUpgradeMinorVersion/res";
import { DescribeRdsResourceSettingsRequest } from "./DescribeRdsResourceSettings/req";
import { DescribeRdsResourceSettingsResponse } from "./DescribeRdsResourceSettings/res";
import { ModifyDTCSecurityIpHostsForSQLServerRequest } from "./ModifyDTCSecurityIpHostsForSQLServer/req";
import { ModifyDTCSecurityIpHostsForSQLServerResponse } from "./ModifyDTCSecurityIpHostsForSQLServer/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { DescribeBackupDatabaseRequest } from "./DescribeBackupDatabase/req";
import { DescribeBackupDatabaseResponse } from "./DescribeBackupDatabase/res";
import { ModifyInstanceAutoRenewalAttributeRequest } from "./ModifyInstanceAutoRenewalAttribute/req";
import { ModifyInstanceAutoRenewalAttributeResponse } from "./ModifyInstanceAutoRenewalAttribute/res";
import { AddTagsToResourceRequest } from "./AddTagsToResource/req";
import { AddTagsToResourceResponse } from "./AddTagsToResource/res";
import { DescibeImportsFromDatabaseRequest } from "./DescibeImportsFromDatabase/req";
import { DescibeImportsFromDatabaseResponse } from "./DescibeImportsFromDatabase/res";
import { DescribeInstanceCrossBackupPolicyRequest } from "./DescribeInstanceCrossBackupPolicy/req";
import { DescribeInstanceCrossBackupPolicyResponse } from "./DescribeInstanceCrossBackupPolicy/res";
import { DescribeDBInstanceDetailRequest } from "./DescribeDBInstanceDetail/req";
import { DescribeDBInstanceDetailResponse } from "./DescribeDBInstanceDetail/res";
import { UnlockAccountRequest } from "./UnlockAccount/req";
import { UnlockAccountResponse } from "./UnlockAccount/res";
import { DestroyDBInstanceRequest } from "./DestroyDBInstance/req";
import { DestroyDBInstanceResponse } from "./DestroyDBInstance/res";
import { UpgradeDBInstanceKernelVersionRequest } from "./UpgradeDBInstanceKernelVersion/req";
import { UpgradeDBInstanceKernelVersionResponse } from "./UpgradeDBInstanceKernelVersion/res";
import { DescribeCollationTimeZonesRequest } from "./DescribeCollationTimeZones/req";
import { DescribeCollationTimeZonesResponse } from "./DescribeCollationTimeZones/res";
import { GrantOperatorPermissionRequest } from "./GrantOperatorPermission/req";
import { GrantOperatorPermissionResponse } from "./GrantOperatorPermission/res";
import { DeleteBackupFileRequest } from "./DeleteBackupFile/req";
import { DeleteBackupFileResponse } from "./DeleteBackupFile/res";
import { ReleaseInstanceConnectionRequest } from "./ReleaseInstanceConnection/req";
import { ReleaseInstanceConnectionResponse } from "./ReleaseInstanceConnection/res";
import { DescribeCrossRegionLogBackupFilesRequest } from "./DescribeCrossRegionLogBackupFiles/req";
import { DescribeCrossRegionLogBackupFilesResponse } from "./DescribeCrossRegionLogBackupFiles/res";
import { ReleaseInstancePublicConnectionRequest } from "./ReleaseInstancePublicConnection/req";
import { ReleaseInstancePublicConnectionResponse } from "./ReleaseInstancePublicConnection/res";
import { DescribeInstanceAutoRenewalAttributeRequest } from "./DescribeInstanceAutoRenewalAttribute/req";
import { DescribeInstanceAutoRenewalAttributeResponse } from "./DescribeInstanceAutoRenewalAttribute/res";
import { ModifyDBInstanceMaintainTimeRequest } from "./ModifyDBInstanceMaintainTime/req";
import { ModifyDBInstanceMaintainTimeResponse } from "./ModifyDBInstanceMaintainTime/res";
import { DescribeDBInstancesByPerformanceRequest } from "./DescribeDBInstancesByPerformance/req";
import { DescribeDBInstancesByPerformanceResponse } from "./DescribeDBInstancesByPerformance/res";
import { RebuildDBInstanceRequest } from "./RebuildDBInstance/req";
import { RebuildDBInstanceResponse } from "./RebuildDBInstance/res";
import { CopyDatabaseRequest } from "./CopyDatabase/req";
import { CopyDatabaseResponse } from "./CopyDatabase/res";
import { DescribeModifyParameterLogRequest } from "./DescribeModifyParameterLog/req";
import { DescribeModifyParameterLogResponse } from "./DescribeModifyParameterLog/res";
import { CancelImportRequest } from "./CancelImport/req";
import { CancelImportResponse } from "./CancelImport/res";
import { DescribeDBInstanceHAConfigRequest } from "./DescribeDBInstanceHAConfig/req";
import { DescribeDBInstanceHAConfigResponse } from "./DescribeDBInstanceHAConfig/res";
import { ModifyActionEventPolicyRequest } from "./ModifyActionEventPolicy/req";
import { ModifyActionEventPolicyResponse } from "./ModifyActionEventPolicy/res";
import { RevokeOperatorPermissionRequest } from "./RevokeOperatorPermission/req";
import { RevokeOperatorPermissionResponse } from "./RevokeOperatorPermission/res";
import { DescribeDedicatedHostsRequest } from "./DescribeDedicatedHosts/req";
import { DescribeDedicatedHostsResponse } from "./DescribeDedicatedHosts/res";
import { DescribeSQLCollectorRetentionRequest } from "./DescribeSQLCollectorRetention/req";
import { DescribeSQLCollectorRetentionResponse } from "./DescribeSQLCollectorRetention/res";
import { ModifyHASwitchConfigRequest } from "./ModifyHASwitchConfig/req";
import { ModifyHASwitchConfigResponse } from "./ModifyHASwitchConfig/res";
import { PurgeDBInstanceLogRequest } from "./PurgeDBInstanceLog/req";
import { PurgeDBInstanceLogResponse } from "./PurgeDBInstanceLog/res";
import { DescribeTasksRequest } from "./DescribeTasks/req";
import { DescribeTasksResponse } from "./DescribeTasks/res";
import { DescribeSQLLogReportListRequest } from "./DescribeSQLLogReportList/req";
import { DescribeSQLLogReportListResponse } from "./DescribeSQLLogReportList/res";
import { DescribeDBInstanceProxyConfigurationRequest } from "./DescribeDBInstanceProxyConfiguration/req";
import { DescribeDBInstanceProxyConfigurationResponse } from "./DescribeDBInstanceProxyConfiguration/res";
import { DescribeBackupTasksRequest } from "./DescribeBackupTasks/req";
import { DescribeBackupTasksResponse } from "./DescribeBackupTasks/res";
import { DescribeDBInstanceIPArrayListRequest } from "./DescribeDBInstanceIPArrayList/req";
import { DescribeDBInstanceIPArrayListResponse } from "./DescribeDBInstanceIPArrayList/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { LockAccountRequest } from "./LockAccount/req";
import { LockAccountResponse } from "./LockAccount/res";
import { DescribeLogBackupFilesRequest } from "./DescribeLogBackupFiles/req";
import { DescribeLogBackupFilesResponse } from "./DescribeLogBackupFiles/res";
import { DescribeErrorLogsRequest } from "./DescribeErrorLogs/req";
import { DescribeErrorLogsResponse } from "./DescribeErrorLogs/res";
import { ResetAccountRequest } from "./ResetAccount/req";
import { ResetAccountResponse } from "./ResetAccount/res";
import { DescribeDBInstancesAsCsvRequest } from "./DescribeDBInstancesAsCsv/req";
import { DescribeDBInstancesAsCsvResponse } from "./DescribeDBInstancesAsCsv/res";
import { MigrateDBInstanceRequest } from "./MigrateDBInstance/req";
import { MigrateDBInstanceResponse } from "./MigrateDBInstance/res";
import { ModifySecurityGroupConfigurationRequest } from "./ModifySecurityGroupConfiguration/req";
import { ModifySecurityGroupConfigurationResponse } from "./ModifySecurityGroupConfiguration/res";
import { DescribeBinlogFilesRequest } from "./DescribeBinlogFiles/req";
import { DescribeBinlogFilesResponse } from "./DescribeBinlogFiles/res";
import { ModifyDBInstanceDescriptionRequest } from "./ModifyDBInstanceDescription/req";
import { ModifyDBInstanceDescriptionResponse } from "./ModifyDBInstanceDescription/res";
import { TerminateMigrateTaskRequest } from "./TerminateMigrateTask/req";
import { TerminateMigrateTaskResponse } from "./TerminateMigrateTask/res";
import { ModifyDBInstanceHAConfigRequest } from "./ModifyDBInstanceHAConfig/req";
import { ModifyDBInstanceHAConfigResponse } from "./ModifyDBInstanceHAConfig/res";
import { CheckDBNameAvailableRequest } from "./CheckDBNameAvailable/req";
import { CheckDBNameAvailableResponse } from "./CheckDBNameAvailable/res";
import { RemoveTagsFromResourceRequest } from "./RemoveTagsFromResource/req";
import { RemoveTagsFromResourceResponse } from "./RemoveTagsFromResource/res";
import { DescribeDBInstanceMonitorRequest } from "./DescribeDBInstanceMonitor/req";
import { DescribeDBInstanceMonitorResponse } from "./DescribeDBInstanceMonitor/res";
import { CheckAccountNameAvailableRequest } from "./CheckAccountNameAvailable/req";
import { CheckAccountNameAvailableResponse } from "./CheckAccountNameAvailable/res";
import { ModifyDBInstanceConnectionModeRequest } from "./ModifyDBInstanceConnectionMode/req";
import { ModifyDBInstanceConnectionModeResponse } from "./ModifyDBInstanceConnectionMode/res";
import { DescribeHADiagnoseConfigRequest } from "./DescribeHADiagnoseConfig/req";
import { DescribeHADiagnoseConfigResponse } from "./DescribeHADiagnoseConfig/res";
import { DeleteUserBackupFileRequest } from "./DeleteUserBackupFile/req";
import { DeleteUserBackupFileResponse } from "./DeleteUserBackupFile/res";
import { ImportUserBackupFileRequest } from "./ImportUserBackupFile/req";
import { ImportUserBackupFileResponse } from "./ImportUserBackupFile/res";
import { UpdateUserBackupFileRequest } from "./UpdateUserBackupFile/req";
import { UpdateUserBackupFileResponse } from "./UpdateUserBackupFile/res";
import { DescribeRegionInfosRequest } from "./DescribeRegionInfos/req";
import { DescribeRegionInfosResponse } from "./DescribeRegionInfos/res";
import { DeleteADSettingRequest } from "./DeleteADSetting/req";
import { DeleteADSettingResponse } from "./DeleteADSetting/res";
import { DescribeADInfoRequest } from "./DescribeADInfo/req";
import { DescribeADInfoResponse } from "./DescribeADInfo/res";
import { DescribeCustinsResourceInfoRequest } from "./DescribeCustinsResourceInfo/req";
import { DescribeCustinsResourceInfoResponse } from "./DescribeCustinsResourceInfo/res";
import { DescribeDBInstanceByTagsRequest } from "./DescribeDBInstanceByTags/req";
import { DescribeDBInstanceByTagsResponse } from "./DescribeDBInstanceByTags/res";
import { DescribeDBInstanceNetInfoForChannelRequest } from "./DescribeDBInstanceNetInfoForChannel/req";
import { DescribeDBInstanceNetInfoForChannelResponse } from "./DescribeDBInstanceNetInfoForChannel/res";
import { DescribeDBInstancePromoteActivityRequest } from "./DescribeDBInstancePromoteActivity/req";
import { DescribeDBInstancePromoteActivityResponse } from "./DescribeDBInstancePromoteActivity/res";
import { DescribeHostGroupElasticStrategyParametersRequest } from "./DescribeHostGroupElasticStrategyParameters/req";
import { DescribeHostGroupElasticStrategyParametersResponse } from "./DescribeHostGroupElasticStrategyParameters/res";
import { ModifyADInfoRequest } from "./ModifyADInfo/req";
import { ModifyADInfoResponse } from "./ModifyADInfo/res";
import { ModifyCustinsResourceRequest } from "./ModifyCustinsResource/req";
import { ModifyCustinsResourceResponse } from "./ModifyCustinsResource/res";
import { ModifyDBInstanceDelayedReplicationTimeRequest } from "./ModifyDBInstanceDelayedReplicationTime/req";
import { ModifyDBInstanceDelayedReplicationTimeResponse } from "./ModifyDBInstanceDelayedReplicationTime/res";
import { ModifyActiveOperationTasksRequest } from "./ModifyActiveOperationTasks/req";
import { ModifyActiveOperationTasksResponse } from "./ModifyActiveOperationTasks/res";
import { DescribeActiveOperationTasksRequest } from "./DescribeActiveOperationTasks/req";
import { DescribeActiveOperationTasksResponse } from "./DescribeActiveOperationTasks/res";
import { ModifyTaskInfoRequest } from "./ModifyTaskInfo/req";
import { ModifyTaskInfoResponse } from "./ModifyTaskInfo/res";
import { DescribeHistoryTasksRequest } from "./DescribeHistoryTasks/req";
import { DescribeHistoryTasksResponse } from "./DescribeHistoryTasks/res";
import { DescribeHistoryTasksStatRequest } from "./DescribeHistoryTasksStat/req";
import { DescribeHistoryTasksStatResponse } from "./DescribeHistoryTasksStat/res";
import { ModifyEventInfoRequest } from "./ModifyEventInfo/req";
import { ModifyEventInfoResponse } from "./ModifyEventInfo/res";
import { DescribeHistoryEventsRequest } from "./DescribeHistoryEvents/req";
import { DescribeHistoryEventsResponse } from "./DescribeHistoryEvents/res";
import { DescribeHistoryEventsStatRequest } from "./DescribeHistoryEventsStat/req";
import { DescribeHistoryEventsStatResponse } from "./DescribeHistoryEventsStat/res";
import { DescribeSecretsRequest } from "./DescribeSecrets/req";
import { DescribeSecretsResponse } from "./DescribeSecrets/res";
import { DeleteSecretRequest } from "./DeleteSecret/req";
import { DeleteSecretResponse } from "./DeleteSecret/res";
import { CreateSecretRequest } from "./CreateSecret/req";
import { CreateSecretResponse } from "./CreateSecret/res";
import { CreateYouhuiForOrderRequest } from "./CreateYouhuiForOrder/req";
import { CreateYouhuiForOrderResponse } from "./CreateYouhuiForOrder/res";
import { CreateOrderForDeleteDBNodesRequest } from "./CreateOrderForDeleteDBNodes/req";
import { CreateOrderForDeleteDBNodesResponse } from "./CreateOrderForDeleteDBNodes/res";
import { PreCheckCreateOrderForDeleteDBNodesRequest } from "./PreCheckCreateOrderForDeleteDBNodes/req";
import { PreCheckCreateOrderForDeleteDBNodesResponse } from "./PreCheckCreateOrderForDeleteDBNodes/res";
import { DescribeSupportOnlineResizeDiskRequest } from "./DescribeSupportOnlineResizeDisk/req";
import { DescribeSupportOnlineResizeDiskResponse } from "./DescribeSupportOnlineResizeDisk/res";
import { EvaluateLocalExtendDiskRequest } from "./EvaluateLocalExtendDisk/req";
import { EvaluateLocalExtendDiskResponse } from "./EvaluateLocalExtendDisk/res";
import { DescribeDBInstanceConnectivityRequest } from "./DescribeDBInstanceConnectivity/req";
import { DescribeDBInstanceConnectivityResponse } from "./DescribeDBInstanceConnectivity/res";
import { QueryRecommendByCodeRequest } from "./QueryRecommendByCode/req";
import { QueryRecommendByCodeResponse } from "./QueryRecommendByCode/res";
import { DescribeMarketingActivityRequest } from "./DescribeMarketingActivity/req";
import { DescribeMarketingActivityResponse } from "./DescribeMarketingActivity/res";
import { DescribeClassDetailsRequest } from "./DescribeClassDetails/req";
import { DescribeClassDetailsResponse } from "./DescribeClassDetails/res";
import { DescribeQuickSaleConfigRequest } from "./DescribeQuickSaleConfig/req";
import { DescribeQuickSaleConfigResponse } from "./DescribeQuickSaleConfig/res";
import { DescribeResourceDetailsRequest } from "./DescribeResourceDetails/req";
import { DescribeResourceDetailsResponse } from "./DescribeResourceDetails/res";
import { CreateDBInstanceForRebuildRequest } from "./CreateDBInstanceForRebuild/req";
import { CreateDBInstanceForRebuildResponse } from "./CreateDBInstanceForRebuild/res";
import { DescribeCurrentModifyOrderRequest } from "./DescribeCurrentModifyOrder/req";
import { DescribeCurrentModifyOrderResponse } from "./DescribeCurrentModifyOrder/res";
import { DescribeSlotsRequest } from "./DescribeSlots/req";
import { DescribeSlotsResponse } from "./DescribeSlots/res";
import { DeleteSlotRequest } from "./DeleteSlot/req";
import { DeleteSlotResponse } from "./DeleteSlot/res";
import { DescribeHostWebShellRequest } from "./DescribeHostWebShell/req";
import { DescribeHostWebShellResponse } from "./DescribeHostWebShell/res";
import { ModifyDatabaseConfigRequest } from "./ModifyDatabaseConfig/req";
import { ModifyDatabaseConfigResponse } from "./ModifyDatabaseConfig/res";
import { ModifyDBInstanceConfigRequest } from "./ModifyDBInstanceConfig/req";
import { ModifyDBInstanceConfigResponse } from "./ModifyDBInstanceConfig/res";
import { CreatePostgresExtensionsRequest } from "./CreatePostgresExtensions/req";
import { CreatePostgresExtensionsResponse } from "./CreatePostgresExtensions/res";
import { UpdatePostgresExtensionsRequest } from "./UpdatePostgresExtensions/req";
import { UpdatePostgresExtensionsResponse } from "./UpdatePostgresExtensions/res";
import { DeletePostgresExtensionsRequest } from "./DeletePostgresExtensions/req";
import { DeletePostgresExtensionsResponse } from "./DeletePostgresExtensions/res";
import { DescribePostgresExtensionsRequest } from "./DescribePostgresExtensions/req";
import { DescribePostgresExtensionsResponse } from "./DescribePostgresExtensions/res";
import { AttachWhitelistTemplateToInstanceRequest } from "./AttachWhitelistTemplateToInstance/req";
import { AttachWhitelistTemplateToInstanceResponse } from "./AttachWhitelistTemplateToInstance/res";
import { DescribeWhitelistTemplateLinkedInstanceRequest } from "./DescribeWhitelistTemplateLinkedInstance/req";
import { DescribeWhitelistTemplateLinkedInstanceResponse } from "./DescribeWhitelistTemplateLinkedInstance/res";
import { DescribeInstanceLinkedWhitelistTemplateRequest } from "./DescribeInstanceLinkedWhitelistTemplate/req";
import { DescribeInstanceLinkedWhitelistTemplateResponse } from "./DescribeInstanceLinkedWhitelistTemplate/res";
import { DescribeWhitelistTemplateRequest } from "./DescribeWhitelistTemplate/req";
import { DescribeWhitelistTemplateResponse } from "./DescribeWhitelistTemplate/res";
import { DescribeAllWhitelistTemplateRequest } from "./DescribeAllWhitelistTemplate/req";
import { DescribeAllWhitelistTemplateResponse } from "./DescribeAllWhitelistTemplate/res";
import { DetachWhitelistTemplateToInstanceRequest } from "./DetachWhitelistTemplateToInstance/req";
import { DetachWhitelistTemplateToInstanceResponse } from "./DetachWhitelistTemplateToInstance/res";
import { ModifyWhitelistTemplateRequest } from "./ModifyWhitelistTemplate/req";
import { ModifyWhitelistTemplateResponse } from "./ModifyWhitelistTemplate/res";
import { ModifyDBNodeRequest } from "./ModifyDBNode/req";
import { ModifyDBNodeResponse } from "./ModifyDBNode/res";
import { DescribeKmsAssociateResourcesRequest } from "./DescribeKmsAssociateResources/req";
import { DescribeKmsAssociateResourcesResponse } from "./DescribeKmsAssociateResources/res";
import { ModifyDBInstanceSecurityGroupRuleRequest } from "./ModifyDBInstanceSecurityGroupRule/req";
import { ModifyDBInstanceSecurityGroupRuleResponse } from "./ModifyDBInstanceSecurityGroupRule/res";
import { DeleteDBInstanceSecurityGroupRuleRequest } from "./DeleteDBInstanceSecurityGroupRule/req";
import { DeleteDBInstanceSecurityGroupRuleResponse } from "./DeleteDBInstanceSecurityGroupRule/res";
import { CreateDBInstanceSecurityGroupRuleRequest } from "./CreateDBInstanceSecurityGroupRule/req";
import { CreateDBInstanceSecurityGroupRuleResponse } from "./CreateDBInstanceSecurityGroupRule/res";
import { DescribeDBInstanceSecurityGroupRuleRequest } from "./DescribeDBInstanceSecurityGroupRule/req";
import { DescribeDBInstanceSecurityGroupRuleResponse } from "./DescribeDBInstanceSecurityGroupRule/res";

interface RDS {
    /**
     * 该接口用于查询RDS实例的价格信息。
     */
    DescribePrice(query: DescribePriceRequest): Promise<DescribePriceResponse>;
    /**
     * 该接口用于查询包年包月RDS实例续费的费用。
     */
    DescribeRenewalPrice(query: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse>;
    /**
     * 该接口用于变更RDS实例的计费方式。
     */
    TransformDBInstancePayType(query: TransformDBInstancePayTypeRequest): Promise<TransformDBInstancePayTypeResponse>;
    /**
     * 该接口用于为RDS实例手动续费。
     */
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
     * 该接口用于创建RDS实例。
     */
    CreateDBInstance(query: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse>;
    /**
     * 该接口用于暂停RDS实例。
     */
    StopDBInstance(query: StopDBInstanceRequest): Promise<StopDBInstanceResponse>;
    /**
     * 该接口用于启动暂停的RDS实例。
     */
    StartDBInstance(query: StartDBInstanceRequest): Promise<StartDBInstanceResponse>;
    /**
     * 该接口用于变更RDS实例的规格和存储空间等。
     */
    ModifyDBInstanceSpec(query: ModifyDBInstanceSpecRequest): Promise<ModifyDBInstanceSpecResponse>;
    /**
     * 该接口用于设置RDS实例的存储空间自动扩容功能。
     */
    ModifyDasInstanceConfig(query: ModifyDasInstanceConfigRequest): Promise<ModifyDasInstanceConfigResponse>;
    /**
     * 该接口用于查询RDS的可用区资源。
     */
    DescribeAvailableZones(query: DescribeAvailableZonesRequest): Promise<DescribeAvailableZonesResponse>;
    /**
     * 该接口用于查询RDS实例的可变更规格及存储空间等信息。
     */
    DescribeAvailableClasses(query: DescribeAvailableClassesRequest): Promise<DescribeAvailableClassesResponse>;
    /**
     * 该接口用于查询RDS实例的详细信息。
     */
    DescribeDBInstanceAttribute(query: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 该接口用于查看RDS实例的拓扑结构。
     */
    GetDBInstanceTopology(query: GetDBInstanceTopologyRequest): Promise<GetDBInstanceTopologyResponse>;
    /**
     * 该接口用于查询RDS的实例列表。
     */
    DescribeDBInstances(query: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse>;
    /**
     * 该接口用于查询RDS实例所有规格的详情。
     */
    ListClasses(query: ListClassesRequest): Promise<ListClassesResponse>;
    /**
     * 该接口用于通过包年包月实例的剩余可用时间查询RDS实例信息。
     */
    DescribeDBInstancesByExpireTime(query: DescribeDBInstancesByExpireTimeRequest): Promise<DescribeDBInstancesByExpireTimeResponse>;
    /**
     * 该接口用于迁移RDS实例的可用区。
     */
    MigrateToOtherZone(query: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse>;
    /**
     * 该接口用于修改RDS实例的可用性检测方式。
     */
    ModifyHADiagnoseConfig(query: ModifyHADiagnoseConfigRequest): Promise<ModifyHADiagnoseConfigResponse>;
    /**
     * 该接口用于释放RDS实例。
     */
    DeleteDBInstance(query: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse>;
    /**
     * 该接口用于查询RDS MySQL实例关联的分析型实例数量。
     */
    DescribeAnalyticdbByPrimaryDBInstance(query: DescribeAnalyticdbByPrimaryDBInstanceRequest): Promise<DescribeAnalyticdbByPrimaryDBInstanceResponse>;
    /**
     * 该接口用于查询RDS实例的权限状态。
     */
    CheckCloudResourceAuthorized(query: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse>;
    /**
     * 该接口用于升级RDS MySQL的数据库大版本。
     */
    UpgradeDBInstanceEngineVersion(query: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse>;
    /**
     * 该接口用于查询可用的MySQL或PostgreSQL小版本列表。
     */
    DescribeDBMiniEngineVersions(query: DescribeDBMiniEngineVersionsRequest): Promise<DescribeDBMiniEngineVersionsResponse>;
    /**
     * 该接口用于执行RDS MySQL及RDS PostgreSQL大版本升级前检查。
     */
    UpgradeDBInstanceMajorVersionPrecheck(query: UpgradeDBInstanceMajorVersionPrecheckRequest): Promise<UpgradeDBInstanceMajorVersionPrecheckResponse>;
    /**
     * 该接口用于查询RDS MySQL及RDS PostgreSQL大版本升级前检查的检查报告。
     */
    DescribeUpgradeMajorVersionPrecheckTask(query: DescribeUpgradeMajorVersionPrecheckTaskRequest): Promise<DescribeUpgradeMajorVersionPrecheckTaskResponse>;
    /**
     * 该接口用于发起RDS PostgreSQL实例大版本升级任务。
     */
    UpgradeDBInstanceMajorVersion(query: UpgradeDBInstanceMajorVersionRequest): Promise<UpgradeDBInstanceMajorVersionResponse>;
    /**
     * 该接口用于查询RDS PostgreSQL实例大版本升级的历史任务。
     */
    DescribeUpgradeMajorVersionTasks(query: DescribeUpgradeMajorVersionTasksRequest): Promise<DescribeUpgradeMajorVersionTasksResponse>;
    /**
     * 该接口用于为RDS实例申请外网连接地址。
     */
    AllocateInstancePublicConnection(query: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse>;
    /**
     * 该接口用于查询RDS实例的所有连接地址信息。
     */
    DescribeDBInstanceNetInfo(query: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse>;
    /**
     * 该接口用于修改实例的连接地址和端口。
     */
    ModifyDBInstanceConnectionString(query: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse>;
    /**
     * 该接口用于切换经典网络实例的内外网地址。
     */
    SwitchDBInstanceNetType(query: SwitchDBInstanceNetTypeRequest): Promise<SwitchDBInstanceNetTypeResponse>;
    /**
     * 该接口用于将经典网络的RDS实例切换为VPC网络。
     */
    ModifyDBInstanceNetworkType(query: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse>;
    /**
     * 该接口用于切换RDS实例的专有网络VPC和交换机。
     */
    SwitchDBInstanceVpc(query: SwitchDBInstanceVpcRequest): Promise<SwitchDBInstanceVpcResponse>;
    /**
     * 该接口用于查询专有网络VPC下虚拟交换机的详细信息。
     */
    DescribeVSwitches(query: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse>;
    /**
     * 该接口用于查询RDS实例主备自动切换的设置。
     */
    DescribeHASwitchConfig(query: DescribeHASwitchConfigRequest): Promise<DescribeHASwitchConfigResponse>;
    /**
     * 查询RDS专属集群信息。
     */
    DescribeDedicatedHostGroups(query: DescribeDedicatedHostGroupsRequest): Promise<DescribeDedicatedHostGroupsResponse>;
    /**
     * 该接口用于查询RDS历史事件记录列表。
     */
    DescribeEvents(query: DescribeEventsRequest): Promise<DescribeEventsResponse>;
    /**
     * 该接口用于查询RDS的通知。
     */
    QueryNotify(query: QueryNotifyRequest): Promise<QueryNotifyResponse>;
    /**
     * 该接口用于确认主账号下RDS控制台的轮播消息。
     */
    ConfirmNotify(query: ConfirmNotifyRequest): Promise<ConfirmNotifyResponse>;
    /**
     * 该接口用于创建诊断报告。
     */
    CreateDiagnosticReport(query: CreateDiagnosticReportRequest): Promise<CreateDiagnosticReportResponse>;
    /**
     * 该接口用于查询诊断报告列表。
     */
    DescribeDiagnosticReportList(query: DescribeDiagnosticReportListRequest): Promise<DescribeDiagnosticReportListResponse>;
    /**
     * 该接口用于创建数据库账号。
     */
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * 该接口用于删除数据库账号。
     */
    DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * 该接口用于重置数据库账号的密码。
     */
    ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
     * 该接口用于查询RDS实例的账号信息。
     */
    DescribeAccounts(query: DescribeAccountsRequest): Promise<DescribeAccountsResponse>;
    /**
     * 该接口用于修改数据库账号的描述信息。
     */
    ModifyAccountDescription(query: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 该接口用于查询RDS实例的保留关键字，即创建数据库或账号时禁用的关键字。
     */
    DescribeInstanceKeywords(query: DescribeInstanceKeywordsRequest): Promise<DescribeInstanceKeywordsResponse>;
    /**
     * 该接口用于修改RDS PostgreSQL实例的pg_hba.conf文件配置。
     */
    ModifyPGHbaConfig(query: ModifyPGHbaConfigRequest): Promise<ModifyPGHbaConfigResponse>;
    /**
     * 该接口用于查询RDS PostgreSQL实例的pg_hba.conf文件的配置。
     */
    DescribePGHbaConfig(query: DescribePGHbaConfigRequest): Promise<DescribePGHbaConfigResponse>;
    /**
     * 该接口用于查询RDS PostgreSQL实例的pg_hba.conf文件的修改记录。
     */
    DescribeModifyPGHbaConfigLog(query: DescribeModifyPGHbaConfigLogRequest): Promise<DescribeModifyPGHbaConfigLogResponse>;
    /**
     * 该接口用于授权数据库账号访问指定的数据库。
     */
    GrantAccountPrivilege(query: GrantAccountPrivilegeRequest): Promise<GrantAccountPrivilegeResponse>;
    /**
     * 该接口用于撤销账号对数据库的访问权限。
     */
    RevokeAccountPrivilege(query: RevokeAccountPrivilegeRequest): Promise<RevokeAccountPrivilegeResponse>;
    /**
     * 该接口用于在RDS实例下创建数据库。
     */
    CreateDatabase(query: CreateDatabaseRequest): Promise<CreateDatabaseResponse>;
    /**
     * 该接口用于删除RDS实例下的指定数据库。
     */
    DeleteDatabase(query: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse>;
    /**
     * 该接口用于修改数据库的备注。
     */
    ModifyDBDescription(query: ModifyDBDescriptionRequest): Promise<ModifyDBDescriptionResponse>;
    /**
     * 该接口用于在RDS SQL Server实例间复制数据库。
     */
    CopyDatabaseBetweenInstances(query: CopyDatabaseBetweenInstancesRequest): Promise<CopyDatabaseBetweenInstancesResponse>;
    /**
     * 该接口用于查询RDS实例下的数据库信息。
     */
    DescribeDatabases(query: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse>;
    /**
     * 该接口用于查询RDS实例支持的字符集。
     */
    DescribeCharacterSetName(query: DescribeCharacterSetNameRequest): Promise<DescribeCharacterSetNameResponse>;
    /**
     * 该接口用于为RDS实例创建一个只读实例。
     */
    CreateReadOnlyDBInstance(query: CreateReadOnlyDBInstanceRequest): Promise<CreateReadOnlyDBInstanceResponse>;
    /**
     * 该接口用于查询RDS只读实例的延迟信息。
     */
    DescribeReadDBInstanceDelay(query: DescribeReadDBInstanceDelayRequest): Promise<DescribeReadDBInstanceDelayResponse>;
    /**
     * 该接口用于将主实例切换成灾备实例，将灾备实例切换成主实例。
     */
    ReceiveDBInstance(query: ReceiveDBInstanceRequest): Promise<ReceiveDBInstanceResponse>;
    /**
     * 该接口用于将灾备实例切换成主实例。
     */
    SwitchGuardToMasterInstance(query: SwitchGuardToMasterInstanceRequest): Promise<SwitchGuardToMasterInstanceResponse>;
    /**
     * 该接口用于为RDS集群系列实例新增节点。
     */
    CreateDBNodes(query: CreateDBNodesRequest): Promise<CreateDBNodesResponse>;
    /**
     * 该接口用于为RDS集群系列实例删除节点。
     */
    DeleteDBNodes(query: DeleteDBNodesRequest): Promise<DeleteDBNodesResponse>;
    /**
     * 该接口用于查询RDS集群系列实例的Endpoint信息。
     */
    DescribeDBInstanceEndpoints(query: DescribeDBInstanceEndpointsRequest): Promise<DescribeDBInstanceEndpointsResponse>;
    /**
     * 该接口用于为RDS集群系列实例创建Endpoint。
     */
    CreateDBInstanceEndpoint(query: CreateDBInstanceEndpointRequest): Promise<CreateDBInstanceEndpointResponse>;
    /**
     * 该接口用于删除RDS集群系列实例的Endpoint。
     */
    DeleteDBInstanceEndpoint(query: DeleteDBInstanceEndpointRequest): Promise<DeleteDBInstanceEndpointResponse>;
    /**
     * 该接口用于修改RDS集群系列实例的Endpoint权重信息。
     */
    ModifyDBInstanceEndpoint(query: ModifyDBInstanceEndpointRequest): Promise<ModifyDBInstanceEndpointResponse>;
    /**
     * 该接口用于为RDS集群系列实例创建Endpoint的外网连接地址。
     */
    CreateDBInstanceEndpointAddress(query: CreateDBInstanceEndpointAddressRequest): Promise<CreateDBInstanceEndpointAddressResponse>;
    /**
     * 该接口用于释放RDS集群系列实例的Endpoint的外网连接地址。
     */
    DeleteDBInstanceEndpointAddress(query: DeleteDBInstanceEndpointAddressRequest): Promise<DeleteDBInstanceEndpointAddressResponse>;
    /**
     * 该接口用于修改RDS集群系列实例的Endpoint连接地址信息。
     */
    ModifyDBInstanceEndpointAddress(query: ModifyDBInstanceEndpointAddressRequest): Promise<ModifyDBInstanceEndpointAddressResponse>;
    /**
     * 该接口用于申请只读地址。
     */
    AllocateReadWriteSplittingConnection(query: AllocateReadWriteSplittingConnectionRequest): Promise<AllocateReadWriteSplittingConnectionResponse>;
    /**
     * 该接口用于释放读写分离地址。
     */
    ReleaseReadWriteSplittingConnection(query: ReleaseReadWriteSplittingConnectionRequest): Promise<ReleaseReadWriteSplittingConnectionResponse>;
    /**
     * 该接口用于查询系统权重分配值。
     */
    CalculateDBInstanceWeight(query: CalculateDBInstanceWeightRequest): Promise<CalculateDBInstanceWeightResponse>;
    /**
     * 该接口用于开启或者修改RDS实例的数据库代理实例功能。
     */
    ModifyDBProxy(query: ModifyDBProxyRequest): Promise<ModifyDBProxyResponse>;
    /**
     * 该接口用于升级数据库代理的内核小版本。
     */
    UpgradeDBProxyInstanceKernelVersion(query: UpgradeDBProxyInstanceKernelVersionRequest): Promise<UpgradeDBProxyInstanceKernelVersionResponse>;
    /**
     * 该接口用于变更RDS数据库代理实例相关配置。
     */
    ModifyDBProxyInstance(query: ModifyDBProxyInstanceRequest): Promise<ModifyDBProxyInstanceResponse>;
    /**
     * 该接口用于配置RDS实例数据库代理连接地址的访问策略。
     */
    ModifyDBProxyEndpoint(query: ModifyDBProxyEndpointRequest): Promise<ModifyDBProxyEndpointResponse>;
    /**
     * 该接口用于查询RDS实例的数据库代理设置详情。
     */
    DescribeDBProxy(query: DescribeDBProxyRequest): Promise<DescribeDBProxyResponse>;
    /**
     * 该接口用于查询RDS实例数据库代理的连接地址信息。
     */
    DescribeDBProxyEndpoint(query: DescribeDBProxyEndpointRequest): Promise<DescribeDBProxyEndpointResponse>;
    /**
     * 该接口用于查询RDS实例数据库代理的性能数据。
     */
    DescribeDBProxyPerformance(query: DescribeDBProxyPerformanceRequest): Promise<DescribeDBProxyPerformanceResponse>;
    /**
     * 该接口用于新增RDS实例数据库代理的连接地址。
     */
    CreateDBProxyEndpointAddress(query: CreateDBProxyEndpointAddressRequest): Promise<CreateDBProxyEndpointAddressResponse>;
    /**
     * 该接口用于修改RDS实例数据库代理的连接地址。
     */
    ModifyDBProxyEndpointAddress(query: ModifyDBProxyEndpointAddressRequest): Promise<ModifyDBProxyEndpointAddressResponse>;
    /**
     * 该接口用于删除RDS实例数据库代理的连接地址。
     */
    DeleteDBProxyEndpointAddress(query: DeleteDBProxyEndpointAddressRequest): Promise<DeleteDBProxyEndpointAddressResponse>;
    /**
     * 该接口用于设置RDS MySQL数据库代理连接地址的SSL加密。
     */
    ModifyDbProxyInstanceSsl(query: ModifyDbProxyInstanceSslRequest): Promise<ModifyDbProxyInstanceSslResponse>;
    /**
     * 该接口用于查询RDS MySQL数据库代理连接地址SSL加密信息。
     */
    GetDbProxyInstanceSsl(query: GetDbProxyInstanceSslRequest): Promise<GetDbProxyInstanceSslResponse>;
    /**
     * 该接口用于查询指定RDS实例和ECS安全组的关联信息。
     */
    DescribeSecurityGroupConfiguration(query: DescribeSecurityGroupConfigurationRequest): Promise<DescribeSecurityGroupConfigurationResponse>;
    /**
     * 该接口用于修改RDS实例的IP白名单。
     */
    ModifySecurityIps(query: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse>;
    /**
     * 该接口用于查询RDS实例的SSL配置情况。
     */
    DescribeDBInstanceSSL(query: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse>;
    /**
     * 该接口用于修改RDS实例的SSL链路配置。
     */
    ModifyDBInstanceSSL(query: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse>;
    /**
     * 该接口用于查询RDS实例的透明数据加密TDE的加密状态。
     */
    DescribeDBInstanceTDE(query: DescribeDBInstanceTDERequest): Promise<DescribeDBInstanceTDEResponse>;
    /**
     * 该接口用于开启RDS实例的透明数据加密TDE功能，并支持修改加密状态。
     */
    ModifyDBInstanceTDE(query: ModifyDBInstanceTDERequest): Promise<ModifyDBInstanceTDEResponse>;
    /**
     * 该接口用于查询RDS SQL Server实例的分布式事务白名单信息。
     */
    DescribeDTCSecurityIpHostsForSQLServer(query: DescribeDTCSecurityIpHostsForSQLServerRequest): Promise<DescribeDTCSecurityIpHostsForSQLServerResponse>;
    /**
     * 查询RDS实例是否开启了云盘加密，以及密钥详情。
     */
    DescribeDBInstanceEncryptionKey(query: DescribeDBInstanceEncryptionKeyRequest): Promise<DescribeDBInstanceEncryptionKeyResponse>;
    /**
     * 该接口用于创建服务关联角色（SLR）。
     */
    CreateServiceLinkedRole(query: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 该接口用于开启或关闭RDS实例的释放保护功能。
     */
    ModifyDBInstanceDeletionProtection(query: ModifyDBInstanceDeletionProtectionRequest): Promise<ModifyDBInstanceDeletionProtectionResponse>;
    /**
     * 该接口用于查看是否已创建服务关联角色（SLR）。
     */
    CheckServiceLinkedRole(query: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse>;
    /**
     * 该接口用于查询RDS实例的SQL洞察（SQL审计）功能是否开启。
     */
    DescribeSQLCollectorPolicy(query: DescribeSQLCollectorPolicyRequest): Promise<DescribeSQLCollectorPolicyResponse>;
    /**
     * 该接口用于开启或关闭实例的SQL洞察（SQL审计）功能。
     */
    ModifySQLCollectorPolicy(query: ModifySQLCollectorPolicyRequest): Promise<ModifySQLCollectorPolicyResponse>;
    /**
     * 该接口用于查询RDS实例的SQL洞察（SQL审计）日志。
     */
    DescribeSQLLogRecords(query: DescribeSQLLogRecordsRequest): Promise<DescribeSQLLogRecordsResponse>;
    /**
     * 该接口用于查询SQL洞察（SQL审计）导出文件列表。不支持查询通过控制台手动导出的SQL洞察日志文件，只支持查询通过DescribeSQLLogRecords接口生成（请求参数Form取值为File）的SQL洞察文件列表。
     */
    DescribeSQLLogFiles(query: DescribeSQLLogFilesRequest): Promise<DescribeSQLLogFilesResponse>;
    /**
     * 该接口用于修改RDS实例的SQL洞察日志保存时长。
     */
    ModifySQLCollectorRetention(query: ModifySQLCollectorRetentionRequest): Promise<ModifySQLCollectorRetentionResponse>;
    /**
     * 该接口用于查看实例的慢日志明细。
     */
    DescribeSlowLogRecords(query: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse>;
    /**
     * 该接口用于查询慢日志统计情况。
     */
    DescribeSlowLogs(query: DescribeSlowLogsRequest): Promise<DescribeSlowLogsResponse>;
    /**
     * 该接口用于为RDS实例创建一个备份集。
     */
    CreateBackup(query: CreateBackupRequest): Promise<CreateBackupResponse>;
    /**
     * 该接口用于查看RDS实例的备份集列表。
     */
    DescribeBackups(query: DescribeBackupsRequest): Promise<DescribeBackupsResponse>;
    /**
     * 该接口用于查看已被释放的RDS实例的备份集列表。
     */
    DescribeDetachedBackups(query: DescribeDetachedBackupsRequest): Promise<DescribeDetachedBackupsResponse>;
    /**
     * 该接口用于查询RDS实例的备份设置。
     */
    DescribeBackupPolicy(query: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse>;
    /**
     * 该接口用于修改RDS实例的备份策略设置。
     */
    ModifyBackupPolicy(query: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse>;
    /**
     * 该接口用于删除RDS实例的数据备份文件。
     */
    DeleteBackup(query: DeleteBackupRequest): Promise<DeleteBackupResponse>;
    /**
     * 该接口用于将历史数据恢复至一个新实例（称为克隆实例）。
     */
    CloneDBInstance(query: CloneDBInstanceRequest): Promise<CloneDBInstanceResponse>;
    /**
     * 该接口用于为RDS SQL Server 2008 R2本地盘实例创建临时实例。
     */
    CreateTempDBInstance(query: CreateTempDBInstanceRequest): Promise<CreateTempDBInstanceResponse>;
    /**
     * 该接口用于查询RDS实例备份可恢复的时间范围。
     */
    DescribeLocalAvailableRecoveryTime(query: DescribeLocalAvailableRecoveryTimeRequest): Promise<DescribeLocalAvailableRecoveryTimeResponse>;
    /**
     * 该接口用于将RDS SQL Server备份数据恢复到新实例上。
     */
    RecoveryDBInstance(query: RecoveryDBInstanceRequest): Promise<RecoveryDBInstanceResponse>;
    /**
     * 该接口拥有恢复RDS实例的某些数据库或表到原实例。
     */
    RestoreTable(query: RestoreTableRequest): Promise<RestoreTableResponse>;
    /**
     * 该接口用于查询目标备份集中可恢复的库表信息。
     */
    DescribeMetaList(query: DescribeMetaListRequest): Promise<DescribeMetaListResponse>;
    /**
     * 该接口用于预检查某RDS实例是否可以用跨地域备份集进行跨地域恢复。
     */
    CheckCreateDdrDBInstance(query: CheckCreateDdrDBInstanceRequest): Promise<CheckCreateDdrDBInstanceResponse>;
    /**
     * 该接口用于跨地域恢复数据到新实例。
     */
    CreateDdrInstance(query: CreateDdrInstanceRequest): Promise<CreateDdrInstanceResponse>;
    /**
     * 该接口用于跨地域恢复数据到已有实例。
     */
    RestoreDdrTable(query: RestoreDdrTableRequest): Promise<RestoreDdrTableResponse>;
    /**
     * 该接口用于修改RDS跨地域备份设置。
     */
    ModifyInstanceCrossBackupPolicy(query: ModifyInstanceCrossBackupPolicyRequest): Promise<ModifyInstanceCrossBackupPolicyResponse>;
    /**
     * 该接口用于查询RDS实例跨地域备份的库表信息。
     */
    DescribeCrossBackupMetaList(query: DescribeCrossBackupMetaListRequest): Promise<DescribeCrossBackupMetaListResponse>;
    /**
     * 该接口用于查询某RDS实例跨地域数据备份文件列表。
     */
    DescribeCrossRegionBackups(query: DescribeCrossRegionBackupsRequest): Promise<DescribeCrossRegionBackupsResponse>;
    /**
     * 该接口用于查询所选地域当前可以进行跨地域备份的目的地域。
     */
    DescribeAvailableCrossRegion(query: DescribeAvailableCrossRegionRequest): Promise<DescribeAvailableCrossRegionResponse>;
    /**
     * 该接口用于查询某跨地域备份文件可恢复哪个时间段的数据。
     */
    DescribeAvailableRecoveryTime(query: DescribeAvailableRecoveryTimeRequest): Promise<DescribeAvailableRecoveryTimeResponse>;
    /**
     * 该接口用于查询RDS实例的空间使用信息。
     */
    DescribeResourceUsage(query: DescribeResourceUsageRequest): Promise<DescribeResourceUsageResponse>;
    /**
     * 该接口用于查询实例性能数据。
     */
    DescribeDBInstancePerformance(query: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse>;
    /**
     * 该接口用于获取RDS PostgreSQL实例支持的所有增强监控指标。
     */
    DescribeAvailableMetrics(query: DescribeAvailableMetricsRequest): Promise<DescribeAvailableMetricsResponse>;
    /**
     * 该接口用于变更RDS PostgreSQL实例展示的增强监控指标。
     */
    ModifyDBInstanceMetrics(query: ModifyDBInstanceMetricsRequest): Promise<ModifyDBInstanceMetricsResponse>;
    /**
     * 该接口用于查询RDS PostgreSQL实例已开启展示的增强指标。
     */
    DescribeDBInstanceMetrics(query: DescribeDBInstanceMetricsRequest): Promise<DescribeDBInstanceMetricsResponse>;
    /**
     * 该接口用于查询实例当前的参数配置。
     */
    DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
     * 该接口用于修改RDS实例的参数值。
     */
    ModifyParameter(query: ModifyParameterRequest): Promise<ModifyParameterResponse>;
    /**
     * 该接口用于查询数据库参数模板。
     */
    DescribeParameterTemplates(query: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse>;
    /**
     * 该接口用于创建RDS参数模板。
     */
    CreateParameterGroup(query: CreateParameterGroupRequest): Promise<CreateParameterGroupResponse>;
    /**
     * 该接口用于修改RDS参数模板。
     */
    ModifyParameterGroup(query: ModifyParameterGroupRequest): Promise<ModifyParameterGroupResponse>;
    /**
     * 该接口用于复制RDS参数模板到当前地域或其他地域内。
     */
    CloneParameterGroup(query: CloneParameterGroupRequest): Promise<CloneParameterGroupResponse>;
    /**
     * 该接口用于查询目标地域的参数模板列表。
     */
    DescribeParameterGroups(query: DescribeParameterGroupsRequest): Promise<DescribeParameterGroupsResponse>;
    /**
     * 该接口用于查询指定的RDS参数模板信息。
     */
    DescribeParameterGroup(query: DescribeParameterGroupRequest): Promise<DescribeParameterGroupResponse>;
    /**
     * 该接口用于删除RDS参数模板。
     */
    DeleteParameterGroup(query: DeleteParameterGroupRequest): Promise<DeleteParameterGroupResponse>;
    /**
     * 该接口用于将OSS上的备份文件还原到RDS SQL Server实例，实现数据上云。
     */
    CreateMigrateTask(query: CreateMigrateTaskRequest): Promise<CreateMigrateTaskResponse>;
    /**
     * 该接口用于查询RDS SQL Server备份数据上云任务的文件详情。
     */
    DescribeOssDownloads(query: DescribeOssDownloadsRequest): Promise<DescribeOssDownloadsResponse>;
    /**
     * 该接口用于打开RDS SQL Server备份数据上云任务的数据库。
     */
    CreateOnlineDatabaseTask(query: CreateOnlineDatabaseTaskRequest): Promise<CreateOnlineDatabaseTaskResponse>;
    /**
     * 该接口用于查询RDS SQL Server实例备份数据上云任务列表。
     */
    DescribeMigrateTasks(query: DescribeMigrateTasksRequest): Promise<DescribeMigrateTasksResponse>;
    /**
     * 该接口用于查询SQL Server的某个OSS备份上云任务的信息。
     */
    DescribeMigrateTaskById(query: DescribeMigrateTaskByIdRequest): Promise<DescribeMigrateTaskByIdResponse>;
    /**
     * 该接口用于修改读写分离链路的延迟阈值和各个实例的读权重。
     */
    ModifyReadWriteSplittingConnection(query: ModifyReadWriteSplittingConnectionRequest): Promise<ModifyReadWriteSplittingConnectionResponse>;
    /**
     * 该接口用于查询所有已导入至RDS的用户备份的详情。
     */
    ListUserBackupFiles(query: ListUserBackupFilesRequest): Promise<ListUserBackupFilesResponse>;
    /**
     * 该接口用于创建RDS PostgreSQL一键上云前检查任务。
     */
    CreateCloudMigrationPrecheckTask(query: CreateCloudMigrationPrecheckTaskRequest): Promise<CreateCloudMigrationPrecheckTaskResponse>;
    /**
     * 该接口用于查询一键上云前检查报告详细信息。
     */
    DescribeCloudMigrationPrecheckResult(query: DescribeCloudMigrationPrecheckResultRequest): Promise<DescribeCloudMigrationPrecheckResultResponse>;
    /**
     * 该接口用于创建RDS PostgreSQL迁移上云任务。
     */
    CreateCloudMigrationTask(query: CreateCloudMigrationTaskRequest): Promise<CreateCloudMigrationTaskResponse>;
    /**
     * 该接口用于执行RDS PostgreSQL上云切换，将RDS PostgreSQL提升为主库，正式提供服务。
     */
    ActivateMigrationTargetInstance(query: ActivateMigrationTargetInstanceRequest): Promise<ActivateMigrationTargetInstanceResponse>;
    /**
     * 该接口用于查询RDS PostgreSQL迁移上云任务详情。
     */
    DescribeCloudMigrationResult(query: DescribeCloudMigrationResultRequest): Promise<DescribeCloudMigrationResultResponse>;
    /**
     * 该接口用于查询RDS MySQL全球多活数据库集群列表或目标集群的详细信息。
     */
    DescribeGadInstances(query: DescribeGadInstancesRequest): Promise<DescribeGadInstancesResponse>;
    /**
     * 该接口用于创建RDS全球多活数据库集群。
     */
    CreateGADInstance(query: CreateGADInstanceRequest): Promise<CreateGADInstanceResponse>;
    /**
     * 该接口用于在RDS全球多活数据库集群中添加节点。
     */
    CreateGadInstanceMember(query: CreateGadInstanceMemberRequest): Promise<CreateGadInstanceMemberResponse>;
    /**
     * 该接口用于删除RDS全球多活数据库集群。
     */
    DeleteGadInstance(query: DeleteGadInstanceRequest): Promise<DeleteGadInstanceResponse>;
    /**
     * 该接口用于移除RDS全球多活数据库集群中的单元节点。
     */
    DetachGadInstanceMember(query: DetachGadInstanceMemberRequest): Promise<DetachGadInstanceMemberResponse>;
    /**
     * 该接口用于为指定的RDS实例创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 该接口用于为指定的RDS实例解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 该接口用于查询一个或多个RDS实例已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 该接口用于迁移RDS实例的可用区。
     */
    MigrateConnectionToOtherZone(query: MigrateConnectionToOtherZoneRequest): Promise<MigrateConnectionToOtherZoneResponse>;
    /**
     * 该接口用于修改监控频率。
     */
    ModifyDBInstanceMonitor(query: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse>;
    /**
     * 该接口用于查询RDS SQL Server实例底层ECS实例的Hostname。
     */
    DescribeDBInstanceIpHostname(query: DescribeDBInstanceIpHostnameRequest): Promise<DescribeDBInstanceIpHostnameResponse>;
    /**
     * 该接口用于查询RDS的历史事件功能是否开启。
     */
    DescribeActionEventPolicy(query: DescribeActionEventPolicyRequest): Promise<DescribeActionEventPolicyResponse>;
    /**
     * 该接口用于将RDS实例的白名单从通用模式切换为高安全模式。
     */
    MigrateSecurityIPMode(query: MigrateSecurityIPModeRequest): Promise<MigrateSecurityIPModeResponse>;
    /**
     * 该接口用于将RDS实例移动到指定资源组。
     */
    ModifyResourceGroup(query: ModifyResourceGroupRequest): Promise<ModifyResourceGroupResponse>;
    /**
     * 修改RDS SQL Server系统字符集排序规则和时区。
     */
    ModifyCollationTimeZone(query: ModifyCollationTimeZoneRequest): Promise<ModifyCollationTimeZoneResponse>;
    /**
     * 该接口用于查询目标RDS实例是否存在。
     */
    CheckInstanceExist(query: CheckInstanceExistRequest): Promise<CheckInstanceExistResponse>;
    /**
     * 该接口用于查询所选地域的哪些实例开启了跨地域备份，以及这些实例的跨地域备份设置。
     */
    DescribeCrossRegionBackupDBInstance(query: DescribeCrossRegionBackupDBInstanceRequest): Promise<DescribeCrossRegionBackupDBInstanceResponse>;
    /**
     * 该接口用于手动重启RDS实例。
     */
    RestartDBInstance(query: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse>;
    /**
     * 该接口用于将按量付费实例变更为包年包月实例。
     */
    ModifyDBInstancePayType(query: ModifyDBInstancePayTypeRequest): Promise<ModifyDBInstancePayTypeResponse>;
    /**
     * 该接口用于修改混访模式下经典网络地址的过期时间。
     */
    ModifyDBInstanceNetworkExpireTime(query: ModifyDBInstanceNetworkExpireTimeRequest): Promise<ModifyDBInstanceNetworkExpireTimeResponse>;
    /**
     * 该接口用于RDS实例的手动主备切换。
     */
    SwitchDBInstanceHA(query: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse>;
    /**
     * 调用ModifyDBInstanceProxyConfiguration接口设置数据库代理，已下线。
     */
    ModifyDBInstanceProxyConfiguration(query: ModifyDBInstanceProxyConfigurationRequest): Promise<ModifyDBInstanceProxyConfigurationResponse>;
    /**
     * 该接口用于修改RDS MySQL只读实例的延迟复制时间。
     */
    ModifyReadonlyInstanceDelayReplicationTime(query: ModifyReadonlyInstanceDelayReplicationTimeRequest): Promise<ModifyReadonlyInstanceDelayReplicationTimeResponse>;
    /**
     * 调用DescribeDBInstancesForClone查看实例列表。
     */
    DescribeDBInstancesForClone(query: DescribeDBInstancesForCloneRequest): Promise<DescribeDBInstancesForCloneResponse>;
    /**
     * 该接口用于修改RDS MySQL或RDS PostgreSQL实例升级小版本的方式。
     */
    ModifyDBInstanceAutoUpgradeMinorVersion(query: ModifyDBInstanceAutoUpgradeMinorVersionRequest): Promise<ModifyDBInstanceAutoUpgradeMinorVersionResponse>;
    /**
     * 此API已废弃，不再使用。
     */
    DescribeRdsResourceSettings(query: DescribeRdsResourceSettingsRequest): Promise<DescribeRdsResourceSettingsResponse>;
    /**
     * 该接口用于为RDS SQL Server实例设置分布式事务白名单。
     */
    ModifyDTCSecurityIpHostsForSQLServer(query: ModifyDTCSecurityIpHostsForSQLServerRequest): Promise<ModifyDTCSecurityIpHostsForSQLServerResponse>;
    /**
     * 该接口用于查询RDS实例的标签信息。
     */
    DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
     * 查询备份集下的数据库列表，已下线。
     */
    DescribeBackupDatabase(query: DescribeBackupDatabaseRequest): Promise<DescribeBackupDatabaseResponse>;
    /**
     * 该接口用于修改RDS实例的自动续费设置。
     */
    ModifyInstanceAutoRenewalAttribute(query: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse>;
    /**
     * 该接口用于为实例绑定标签。
     */
    AddTagsToResource(query: AddTagsToResourceRequest): Promise<AddTagsToResourceResponse>;
    /**
     * 该接口用于查看实例迁移状态列表。
     */
    DescibeImportsFromDatabase(query: DescibeImportsFromDatabaseRequest): Promise<DescibeImportsFromDatabaseResponse>;
    /**
     * 该接口用于查询跨地域备份设置。
     */
    DescribeInstanceCrossBackupPolicy(query: DescribeInstanceCrossBackupPolicyRequest): Promise<DescribeInstanceCrossBackupPolicyResponse>;
    /**
     * 调用DescribeDBInstanceDetail接口查询实例详情。
     */
    DescribeDBInstanceDetail(query: DescribeDBInstanceDetailRequest): Promise<DescribeDBInstanceDetailResponse>;
    /**
     * 该接口用于解锁RDS PostgreSQL实例的数据库账号。
     */
    UnlockAccount(query: UnlockAccountRequest): Promise<UnlockAccountResponse>;
    /**
     * 该接口用于销毁回收站中的RDS实例。
     */
    DestroyDBInstance(query: DestroyDBInstanceRequest): Promise<DestroyDBInstanceResponse>;
    /**
     * 该接口用于升级RDS实例的内核小版本。
     */
    UpgradeDBInstanceKernelVersion(query: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse>;
    /**
     * 该接口用于查询RDS SQL Server支持的字符集排序规则和时区。
     */
    DescribeCollationTimeZones(query: DescribeCollationTimeZonesRequest): Promise<DescribeCollationTimeZonesResponse>;
    /**
     * 该接口用于授权服务账号。
     */
    GrantOperatorPermission(query: GrantOperatorPermissionRequest): Promise<GrantOperatorPermissionResponse>;
    /**
     * 该接口用于删除RDS SQL Server的备份文件。
     */
    DeleteBackupFile(query: DeleteBackupFileRequest): Promise<DeleteBackupFileResponse>;
    /**
     * 该接口用于释放RDS实例的外网连接地址。
     */
    ReleaseInstanceConnection(query: ReleaseInstanceConnectionRequest): Promise<ReleaseInstanceConnectionResponse>;
    /**
     * 该接口用于查询跨地域日志备份文件列表。
     */
    DescribeCrossRegionLogBackupFiles(query: DescribeCrossRegionLogBackupFilesRequest): Promise<DescribeCrossRegionLogBackupFilesResponse>;
    /**
     * 该接口用于释放实例的外网连接地址。
     */
    ReleaseInstancePublicConnection(query: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse>;
    /**
     * 该接口用于查询RDS实例自动续费情况。
     */
    DescribeInstanceAutoRenewalAttribute(query: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse>;
    /**
     * 该接口用于修改RDS实例的可维护时间段。
     */
    ModifyDBInstanceMaintainTime(query: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse>;
    /**
     * 调用DescribeDBInstancesByPerformance接口查询实例性能。
     */
    DescribeDBInstancesByPerformance(query: DescribeDBInstancesByPerformanceRequest): Promise<DescribeDBInstancesByPerformanceResponse>;
    /**
     * 调用RebuildDBInstance接口重建专属集群中的RDS备实例。
     */
    RebuildDBInstance(query: RebuildDBInstanceRequest): Promise<RebuildDBInstanceResponse>;
    /**
     * 复制数据库SQL Server 2008 R2版，已下线。
     */
    CopyDatabase(query: CopyDatabaseRequest): Promise<CopyDatabaseResponse>;
    /**
     * 该接口用于查询RDS实例的参数修改日志。
     */
    DescribeModifyParameterLog(query: DescribeModifyParameterLogRequest): Promise<DescribeModifyParameterLogResponse>;
    /**
     * 该接口用于取消RDS SQL Server实例的迁移任务，已下线。
     */
    CancelImport(query: CancelImportRequest): Promise<CancelImportResponse>;
    /**
     * 该接口用于查询RDS实例的高可用模式和数据复制方式。
     */
    DescribeDBInstanceHAConfig(query: DescribeDBInstanceHAConfigRequest): Promise<DescribeDBInstanceHAConfigResponse>;
    /**
     * 该接口用于开启或关闭RDS的历史事件功能。
     */
    ModifyActionEventPolicy(query: ModifyActionEventPolicyRequest): Promise<ModifyActionEventPolicyResponse>;
    /**
     * 该接口用于撤销阿里云服务账号对RDS实例的访问权限。
     */
    RevokeOperatorPermission(query: RevokeOperatorPermissionRequest): Promise<RevokeOperatorPermissionResponse>;
    /**
     * 查询专属集群内的主机信息。
     */
    DescribeDedicatedHosts(query: DescribeDedicatedHostsRequest): Promise<DescribeDedicatedHostsResponse>;
    /**
     * 该接口用于查询RDS实例的SQL洞察日志保存时长。
     */
    DescribeSQLCollectorRetention(query: DescribeSQLCollectorRetentionRequest): Promise<DescribeSQLCollectorRetentionResponse>;
    /**
     * 该接口用于开启或关闭RDS实例的主备自动切换功能。
     */
    ModifyHASwitchConfig(query: ModifyHASwitchConfigRequest): Promise<ModifyHASwitchConfigResponse>;
    /**
     * 该接口用于清理RDS实例的本地日志。
     */
    PurgeDBInstanceLog(query: PurgeDBInstanceLogRequest): Promise<PurgeDBInstanceLogResponse>;
    /**
     * 调用DescribeTasks接口查询RDS实例正在进行中的任务。
     */
    DescribeTasks(query: DescribeTasksRequest): Promise<DescribeTasksResponse>;
    /**
     * 该接口用于查看SQL日志运行报告列表。
     */
    DescribeSQLLogReportList(query: DescribeSQLLogReportListRequest): Promise<DescribeSQLLogReportListResponse>;
    /**
     * 该接口用于查看数据库代理设置。
     */
    DescribeDBInstanceProxyConfiguration(query: DescribeDBInstanceProxyConfigurationRequest): Promise<DescribeDBInstanceProxyConfigurationResponse>;
    /**
     * 该接口用于查询RDS实例的备份任务列表。
     */
    DescribeBackupTasks(query: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse>;
    /**
     * 该接口用于查询RDS实例的IP白名单。
     */
    DescribeDBInstanceIPArrayList(query: DescribeDBInstanceIPArrayListRequest): Promise<DescribeDBInstanceIPArrayListResponse>;
    /**
     * 该接口用于查询所有RDS地域的详情。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 该接口用于锁定RDS PostgreSQL实例的数据库账号。
     */
    LockAccount(query: LockAccountRequest): Promise<LockAccountResponse>;
    /**
     * 该接口用于查询RDS SQL Server实例的日志备份文件。
     */
    DescribeLogBackupFiles(query: DescribeLogBackupFilesRequest): Promise<DescribeLogBackupFilesResponse>;
    /**
     * 该接口查询实例某段时间内的错误日志。
     */
    DescribeErrorLogs(query: DescribeErrorLogsRequest): Promise<DescribeErrorLogsResponse>;
    /**
     * 该接口用于重置高权限账号的权限。
     */
    ResetAccount(query: ResetAccountRequest): Promise<ResetAccountResponse>;
    /**
     * 该接口用于查询实例列表。
     */
    DescribeDBInstancesAsCsv(query: DescribeDBInstancesAsCsvRequest): Promise<DescribeDBInstancesAsCsvResponse>;
    /**
     * 调用MigrateDBInstance接口迁移专属集群内的RDS实例。
     */
    MigrateDBInstance(query: MigrateDBInstanceRequest): Promise<MigrateDBInstanceResponse>;
    /**
     * 该接口用于修改指定RDS实例和ECS安全组的关联信息。
     */
    ModifySecurityGroupConfiguration(query: ModifySecurityGroupConfigurationRequest): Promise<ModifySecurityGroupConfigurationResponse>;
    /**
     * 该接口用于查询RDS MySQL/RDS MariaDB实例的Binlog日志或RDS PostgreSQL实例的Wal日志。
     */
    DescribeBinlogFiles(query: DescribeBinlogFilesRequest): Promise<DescribeBinlogFilesResponse>;
    /**
     * 该接口用于修改RDS实例的名称。
     */
    ModifyDBInstanceDescription(query: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse>;
    /**
     * 该接口用于终止进行中的RDS SQL Server的备份上云任务。
     */
    TerminateMigrateTask(query: TerminateMigrateTaskRequest): Promise<TerminateMigrateTaskResponse>;
    /**
     * 该接口用于修改RDS实例的高可用模式和数据复制方式。
     */
    ModifyDBInstanceHAConfig(query: ModifyDBInstanceHAConfigRequest): Promise<ModifyDBInstanceHAConfigResponse>;
    /**
     * 该接口用于检查数据库名称是否重复或不符合命名规范。
     */
    CheckDBNameAvailable(query: CheckDBNameAvailableRequest): Promise<CheckDBNameAvailableResponse>;
    /**
     * 该接口用于解绑标签。
     */
    RemoveTagsFromResource(query: RemoveTagsFromResourceRequest): Promise<RemoveTagsFromResourceResponse>;
    /**
     * 该接口用于查询监控频率。
     */
    DescribeDBInstanceMonitor(query: DescribeDBInstanceMonitorRequest): Promise<DescribeDBInstanceMonitorResponse>;
    /**
     * 该接口用于检查目标需要创建的账号名称是否可用。
     */
    CheckAccountNameAvailable(query: CheckAccountNameAvailableRequest): Promise<CheckAccountNameAvailableResponse>;
    /**
     * 开启或关闭数据库代理，已下线。
     */
    ModifyDBInstanceConnectionMode(query: ModifyDBInstanceConnectionModeRequest): Promise<ModifyDBInstanceConnectionModeResponse>;
    /**
     * 该接口用于查询RDS实例的可用性检测方式。
     */
    DescribeHADiagnoseConfig(query: DescribeHADiagnoseConfigRequest): Promise<DescribeHADiagnoseConfigResponse>;
    /**
     * 该接口用于删除RDS MySQL的目标用户备份。
     */
    DeleteUserBackupFile(query: DeleteUserBackupFileRequest): Promise<DeleteUserBackupFileResponse>;
    /**
     * 该接口用于将自建库MySQL 5.7的备份数据导入至RDS。
     */
    ImportUserBackupFile(query: ImportUserBackupFileRequest): Promise<ImportUserBackupFileResponse>;
    /**
     * 该接口用于变更用户备份的备注信息和保留时长。
     */
    UpdateUserBackupFile(query: UpdateUserBackupFileRequest): Promise<UpdateUserBackupFileResponse>;
    /**
     * 该接口用于获取地域列表。
     */
    DescribeRegionInfos(query: DescribeRegionInfosRequest): Promise<DescribeRegionInfosResponse>;
    /**
     * 该接口用于将当前RDS SQL Server实例退出所在域。
     */
    DeleteADSetting(query: DeleteADSettingRequest): Promise<DeleteADSettingResponse>;
    /**
     * 该接口用于查询当前实例域相关信息, 包括是否已经加入域、域名称、所使用账号等。
     */
    DescribeADInfo(query: DescribeADInfoRequest): Promise<DescribeADInfoResponse>;
    DescribeCustinsResourceInfo(query: DescribeCustinsResourceInfoRequest): Promise<DescribeCustinsResourceInfoResponse>;
    /**
     * 该接口用于获取实例绑定的标签信息。
     */
    DescribeDBInstanceByTags(query: DescribeDBInstanceByTagsRequest): Promise<DescribeDBInstanceByTagsResponse>;
    /**
     * 该接口用于查询RDS实例的所有连接地址信息。
     */
    DescribeDBInstanceNetInfoForChannel(query: DescribeDBInstanceNetInfoForChannelRequest): Promise<DescribeDBInstanceNetInfoForChannelResponse>;
    /**
     * 该接口已下线，暂无法使用。
     */
    DescribeDBInstancePromoteActivity(query: DescribeDBInstancePromoteActivityRequest): Promise<DescribeDBInstancePromoteActivityResponse>;
    DescribeHostGroupElasticStrategyParameters(query: DescribeHostGroupElasticStrategyParametersRequest): Promise<DescribeHostGroupElasticStrategyParametersResponse>;
    /**
     * 该接口用于修改RDS SQL Server实例的AD域信息。
     */
    ModifyADInfo(query: ModifyADInfoRequest): Promise<ModifyADInfoResponse>;
    /**
     * 修改实例资源
     */
    ModifyCustinsResource(query: ModifyCustinsResourceRequest): Promise<ModifyCustinsResourceResponse>;
    /**
     * 该接口用于设置MySQL只读实例的延迟时间。
     */
    ModifyDBInstanceDelayedReplicationTime(query: ModifyDBInstanceDelayedReplicationTimeRequest): Promise<ModifyDBInstanceDelayedReplicationTimeResponse>;
    /**
     * 该接口用于修改RDS实例计划内运维任务的切换时间。
     */
    ModifyActiveOperationTasks(query: ModifyActiveOperationTasksRequest): Promise<ModifyActiveOperationTasksResponse>;
    /**
     * 该接口用于查看RDS实例的计划内运维任务详情。
     */
    DescribeActiveOperationTasks(query: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse>;
    /**
     * 任务中心修改任务信息
     */
    ModifyTaskInfo(query: ModifyTaskInfoRequest): Promise<ModifyTaskInfoResponse>;
    /**
     * 该接口用于获取历史任务记录，支持创建时间30天内的任务。
     */
    DescribeHistoryTasks(query: DescribeHistoryTasksRequest): Promise<DescribeHistoryTasksResponse>;
    /**
     * 任务中心任务统计
     */
    DescribeHistoryTasksStat(query: DescribeHistoryTasksStatRequest): Promise<DescribeHistoryTasksStatResponse>;
    /**
     * 事件中心修改事件信息
     */
    ModifyEventInfo(query: ModifyEventInfoRequest): Promise<ModifyEventInfoResponse>;
    /**
     * 事件中心事件列表
     */
    DescribeHistoryEvents(query: DescribeHistoryEventsRequest): Promise<DescribeHistoryEventsResponse>;
    /**
     * 事件中心事件统计
     */
    DescribeHistoryEventsStat(query: DescribeHistoryEventsStatRequest): Promise<DescribeHistoryEventsStatResponse>;
    /**
     * 该接口用于查询Data API用户凭证。
     */
    DescribeSecrets(query: DescribeSecretsRequest): Promise<DescribeSecretsResponse>;
    /**
     * 调用DeleteSecret接口删除Data API用户凭证。
     */
    DeleteSecret(query: DeleteSecretRequest): Promise<DeleteSecretResponse>;
    /**
     * 该接口用于创建Data API用户凭证。
     */
    CreateSecret(query: CreateSecretRequest): Promise<CreateSecretResponse>;
    /**
     * 下单领券接口
     */
    CreateYouhuiForOrder(query: CreateYouhuiForOrderRequest): Promise<CreateYouhuiForOrderResponse>;
    /**
     * 该接口用于为RDS MySQL集群系列实例删除节点。
     */
    CreateOrderForDeleteDBNodes(query: CreateOrderForDeleteDBNodesRequest): Promise<CreateOrderForDeleteDBNodesResponse>;
    PreCheckCreateOrderForDeleteDBNodes(query: PreCheckCreateOrderForDeleteDBNodesRequest): Promise<PreCheckCreateOrderForDeleteDBNodesResponse>;
    /**
     * 该接口用于查询RDS SQL Server实例是否支持在线扩盘。
     */
    DescribeSupportOnlineResizeDisk(query: DescribeSupportOnlineResizeDiskRequest): Promise<DescribeSupportOnlineResizeDiskResponse>;
    /**
     * 评估紧急本地扩容磁盘解锁可使用的磁盘空间
     */
    EvaluateLocalExtendDisk(query: EvaluateLocalExtendDiskRequest): Promise<EvaluateLocalExtendDiskResponse>;
    /**
     * 获取实例链路诊断信息
     */
    DescribeDBInstanceConnectivity(query: DescribeDBInstanceConnectivityRequest): Promise<DescribeDBInstanceConnectivityResponse>;
    /**
     * rds机器人热点问题
     */
    QueryRecommendByCode(query: QueryRecommendByCodeRequest): Promise<QueryRecommendByCodeResponse>;
    /**
     * 获取RDS营销项目中待升级实例信息
     */
    DescribeMarketingActivity(query: DescribeMarketingActivityRequest): Promise<DescribeMarketingActivityResponse>;
    /**
     * 该接口用于通过规格代码查询规格详情。
     */
    DescribeClassDetails(query: DescribeClassDetailsRequest): Promise<DescribeClassDetailsResponse>;
    /**
     * 查询RDS快捷售卖配置
     */
    DescribeQuickSaleConfig(query: DescribeQuickSaleConfigRequest): Promise<DescribeQuickSaleConfigResponse>;
    /**
     * 概览页资源详情
     */
    DescribeResourceDetails(query: DescribeResourceDetailsRequest): Promise<DescribeResourceDetailsResponse>;
    /**
     * 该接口用于重建已进入回收站的实例。
     */
    CreateDBInstanceForRebuild(query: CreateDBInstanceForRebuildRequest): Promise<CreateDBInstanceForRebuildResponse>;
    /**
     * 查询实例最新变配订单
     */
    DescribeCurrentModifyOrder(query: DescribeCurrentModifyOrderRequest): Promise<DescribeCurrentModifyOrderResponse>;
    /**
     * 该接口用于查询实例的所有Replication Slot。
     */
    DescribeSlots(query: DescribeSlotsRequest): Promise<DescribeSlotsResponse>;
    /**
     * 该接口用于删除实例的指定Replication Slot。
     */
    DeleteSlot(query: DeleteSlotRequest): Promise<DeleteSlotResponse>;
    /**
     * 该接口用于查询RDS SQL Server实例的主机WebShell登录信息。
     */
    DescribeHostWebShell(query: DescribeHostWebShellRequest): Promise<DescribeHostWebShellResponse>;
    /**
     * 该接口用于修改RDS SQL Server数据库属性。
     */
    ModifyDatabaseConfig(query: ModifyDatabaseConfigRequest): Promise<ModifyDatabaseConfigResponse>;
    /**
     * 该接口用于修改RDS实例的配置项。
     */
    ModifyDBInstanceConfig(query: ModifyDBInstanceConfigRequest): Promise<ModifyDBInstanceConfigResponse>;
    /**
     * 该接口用于在目标数据库下安装指定插件。
     */
    CreatePostgresExtensions(query: CreatePostgresExtensionsRequest): Promise<CreatePostgresExtensionsResponse>;
    /**
     * 该接口用于升级目标数据库下的指定插件。
     */
    UpdatePostgresExtensions(query: UpdatePostgresExtensionsRequest): Promise<UpdatePostgresExtensionsResponse>;
    /**
     * 该接口用于删除实例目标数据库下的指定插件。
     */
    DeletePostgresExtensions(query: DeletePostgresExtensionsRequest): Promise<DeletePostgresExtensionsResponse>;
    /**
     * 该接口用于获取实例目标数据库下所有插件的信息。
     */
    DescribePostgresExtensions(query: DescribePostgresExtensionsRequest): Promise<DescribePostgresExtensionsResponse>;
    /**
     * 该接口用于将白名单模板关联到实例。
     */
    AttachWhitelistTemplateToInstance(query: AttachWhitelistTemplateToInstanceRequest): Promise<AttachWhitelistTemplateToInstanceResponse>;
    /**
     * 该接口用于根据白名单模板查询关联的实例。
     */
    DescribeWhitelistTemplateLinkedInstance(query: DescribeWhitelistTemplateLinkedInstanceRequest): Promise<DescribeWhitelistTemplateLinkedInstanceResponse>;
    /**
     * 该接口用于根据实例的名称查询关联的白名单模板。
     */
    DescribeInstanceLinkedWhitelistTemplate(query: DescribeInstanceLinkedWhitelistTemplateRequest): Promise<DescribeInstanceLinkedWhitelistTemplateResponse>;
    /**
     * 该接口用于获取指定的白名单模板信息。
     */
    DescribeWhitelistTemplate(query: DescribeWhitelistTemplateRequest): Promise<DescribeWhitelistTemplateResponse>;
    /**
     * 该接口用于批量获取白名单模板，支持模糊查询。
     */
    DescribeAllWhitelistTemplate(query: DescribeAllWhitelistTemplateRequest): Promise<DescribeAllWhitelistTemplateResponse>;
    /**
     * 该接口用于取消关联的白名单模板与实例。
     */
    DetachWhitelistTemplateToInstance(query: DetachWhitelistTemplateToInstanceRequest): Promise<DetachWhitelistTemplateToInstanceResponse>;
    /**
     * 该接口用于编辑白名单模板，包括创建、修改、删除白名单模板的操作。
     */
    ModifyWhitelistTemplate(query: ModifyWhitelistTemplateRequest): Promise<ModifyWhitelistTemplateResponse>;
    /**
     * 该接口用于变更RDS MySQL集群系列实例节点的规格、存储类型、存储空间。
     */
    ModifyDBNode(query: ModifyDBNodeRequest): Promise<ModifyDBNodeResponse>;
    /**
     * 该接口用于查询KMS的指定资源是否关联了RDS实例。
     */
    DescribeKmsAssociateResources(query: DescribeKmsAssociateResourcesRequest): Promise<DescribeKmsAssociateResourcesResponse>;
    /**
     * 该接口用于修改RDS SQL Server实例的安全组规则。
     */
    ModifyDBInstanceSecurityGroupRule(query: ModifyDBInstanceSecurityGroupRuleRequest): Promise<ModifyDBInstanceSecurityGroupRuleResponse>;
    /**
     * 该接口用于删除RDS SQL Server实例已设置的安全组规则。
     */
    DeleteDBInstanceSecurityGroupRule(query: DeleteDBInstanceSecurityGroupRuleRequest): Promise<DeleteDBInstanceSecurityGroupRuleResponse>;
    /**
     * 该接口用于为RDS SQL Server实例添加安全组规则。
     */
    CreateDBInstanceSecurityGroupRule(query: CreateDBInstanceSecurityGroupRuleRequest): Promise<CreateDBInstanceSecurityGroupRuleResponse>;
    /**
     * 该接口用于查询RDS SQL Server实例的安全组规则。
     */
    DescribeDBInstanceSecurityGroupRule(query: DescribeDBInstanceSecurityGroupRuleRequest): Promise<DescribeDBInstanceSecurityGroupRuleResponse>;
}
export default RDS;
