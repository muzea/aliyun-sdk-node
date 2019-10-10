import { RestoreDBInstanceRequest } from "./RestoreDBInstance/req";
import { RestoreDBInstanceResponse } from "./RestoreDBInstance/res";
import { ModifyAccountDescriptionRequest } from "./ModifyAccountDescription/req";
import { ModifyAccountDescriptionResponse } from "./ModifyAccountDescription/res";
import { CreateMigrateTaskRequest } from "./CreateMigrateTask/req";
import { CreateMigrateTaskResponse } from "./CreateMigrateTask/res";
import { ModifyDBInstanceDescriptionRequest } from "./ModifyDBInstanceDescription/req";
import { ModifyDBInstanceDescriptionResponse } from "./ModifyDBInstanceDescription/res";
import { ModifyDBInstanceMaintainTimeRequest } from "./ModifyDBInstanceMaintainTime/req";
import { ModifyDBInstanceMaintainTimeResponse } from "./ModifyDBInstanceMaintainTime/res";
import { DescribeDBInstanceHAConfigRequest } from "./DescribeDBInstanceHAConfig/req";
import { DescribeDBInstanceHAConfigResponse } from "./DescribeDBInstanceHAConfig/res";
import { ModifyDBInstanceSpecRequest } from "./ModifyDBInstanceSpec/req";
import { ModifyDBInstanceSpecResponse } from "./ModifyDBInstanceSpec/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { AllocateInstancePublicConnectionRequest } from "./AllocateInstancePublicConnection/req";
import { AllocateInstancePublicConnectionResponse } from "./AllocateInstancePublicConnection/res";
import { ModifySecurityIpsRequest } from "./ModifySecurityIps/req";
import { ModifySecurityIpsResponse } from "./ModifySecurityIps/res";
import { ModifyInstanceAutoRenewalAttributeRequest } from "./ModifyInstanceAutoRenewalAttribute/req";
import { ModifyInstanceAutoRenewalAttributeResponse } from "./ModifyInstanceAutoRenewalAttribute/res";
import { DeleteDatabaseRequest } from "./DeleteDatabase/req";
import { DeleteDatabaseResponse } from "./DeleteDatabase/res";
import { CreateBackupRequest } from "./CreateBackup/req";
import { CreateBackupResponse } from "./CreateBackup/res";
import { ModifyCollationTimeZoneRequest } from "./ModifyCollationTimeZone/req";
import { ModifyCollationTimeZoneResponse } from "./ModifyCollationTimeZone/res";
import { DescribeMigrateTasksRequest } from "./DescribeMigrateTasks/req";
import { DescribeMigrateTasksResponse } from "./DescribeMigrateTasks/res";
import { ModifyDBInstanceConnectionModeRequest } from "./ModifyDBInstanceConnectionMode/req";
import { ModifyDBInstanceConnectionModeResponse } from "./ModifyDBInstanceConnectionMode/res";
import { ModifyDBInstanceNetworkTypeRequest } from "./ModifyDBInstanceNetworkType/req";
import { ModifyDBInstanceNetworkTypeResponse } from "./ModifyDBInstanceNetworkType/res";
import { DescribeLogBackupFilesRequest } from "./DescribeLogBackupFiles/req";
import { DescribeLogBackupFilesResponse } from "./DescribeLogBackupFiles/res";
import { DescribeErrorLogsRequest } from "./DescribeErrorLogs/req";
import { DescribeErrorLogsResponse } from "./DescribeErrorLogs/res";
import { DeleteBackupRequest } from "./DeleteBackup/req";
import { DeleteBackupResponse } from "./DeleteBackup/res";
import { DescribeDBInstancePerformanceRequest } from "./DescribeDBInstancePerformance/req";
import { DescribeDBInstancePerformanceResponse } from "./DescribeDBInstancePerformance/res";
import { PurgeDBInstanceLogRequest } from "./PurgeDBInstanceLog/req";
import { PurgeDBInstanceLogResponse } from "./PurgeDBInstanceLog/res";
import { RemoveTagsFromResourceRequest } from "./RemoveTagsFromResource/req";
import { RemoveTagsFromResourceResponse } from "./RemoveTagsFromResource/res";
import { DescribeDBInstanceMonitorRequest } from "./DescribeDBInstanceMonitor/req";
import { DescribeDBInstanceMonitorResponse } from "./DescribeDBInstanceMonitor/res";
import { DescribeInstanceAutoRenewalAttributeRequest } from "./DescribeInstanceAutoRenewalAttribute/req";
import { DescribeInstanceAutoRenewalAttributeResponse } from "./DescribeInstanceAutoRenewalAttribute/res";
import { ModifyDBInstanceTDERequest } from "./ModifyDBInstanceTDE/req";
import { ModifyDBInstanceTDEResponse } from "./ModifyDBInstanceTDE/res";
import { ModifyDBInstanceNetworkExpireTimeRequest } from "./ModifyDBInstanceNetworkExpireTime/req";
import { ModifyDBInstanceNetworkExpireTimeResponse } from "./ModifyDBInstanceNetworkExpireTime/res";
import { DescribeSlowLogRecordsRequest } from "./DescribeSlowLogRecords/req";
import { DescribeSlowLogRecordsResponse } from "./DescribeSlowLogRecords/res";
import { DescribeBinlogFilesRequest } from "./DescribeBinlogFiles/req";
import { DescribeBinlogFilesResponse } from "./DescribeBinlogFiles/res";
import { ModifyReadWriteSplittingConnectionRequest } from "./ModifyReadWriteSplittingConnection/req";
import { ModifyReadWriteSplittingConnectionResponse } from "./ModifyReadWriteSplittingConnection/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { DescribeDBInstanceProxyConfigurationRequest } from "./DescribeDBInstanceProxyConfiguration/req";
import { DescribeDBInstanceProxyConfigurationResponse } from "./DescribeDBInstanceProxyConfiguration/res";
import { CalculateDBInstanceWeightRequest } from "./CalculateDBInstanceWeight/req";
import { CalculateDBInstanceWeightResponse } from "./CalculateDBInstanceWeight/res";
import { GrantAccountPrivilegeRequest } from "./GrantAccountPrivilege/req";
import { GrantAccountPrivilegeResponse } from "./GrantAccountPrivilege/res";
import { DescribeDatabasesRequest } from "./DescribeDatabases/req";
import { DescribeDatabasesResponse } from "./DescribeDatabases/res";
import { RestartDBInstanceRequest } from "./RestartDBInstance/req";
import { RestartDBInstanceResponse } from "./RestartDBInstance/res";
import { RecoveryDBInstanceRequest } from "./RecoveryDBInstance/req";
import { RecoveryDBInstanceResponse } from "./RecoveryDBInstance/res";
import { MigrateToOtherZoneRequest } from "./MigrateToOtherZone/req";
import { MigrateToOtherZoneResponse } from "./MigrateToOtherZone/res";
import { CreateDBInstanceRequest } from "./CreateDBInstance/req";
import { CreateDBInstanceResponse } from "./CreateDBInstance/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { DescribeCollationTimeZonesRequest } from "./DescribeCollationTimeZones/req";
import { DescribeCollationTimeZonesResponse } from "./DescribeCollationTimeZones/res";
import { SwitchDBInstanceNetTypeRequest } from "./SwitchDBInstanceNetType/req";
import { SwitchDBInstanceNetTypeResponse } from "./SwitchDBInstanceNetType/res";
import { ModifyBackupPolicyRequest } from "./ModifyBackupPolicy/req";
import { ModifyBackupPolicyResponse } from "./ModifyBackupPolicy/res";
import { ReleaseInstancePublicConnectionRequest } from "./ReleaseInstancePublicConnection/req";
import { ReleaseInstancePublicConnectionResponse } from "./ReleaseInstancePublicConnection/res";
import { MigrateSecurityIPModeRequest } from "./MigrateSecurityIPMode/req";
import { MigrateSecurityIPModeResponse } from "./MigrateSecurityIPMode/res";
import { CloneDBInstanceRequest } from "./CloneDBInstance/req";
import { CloneDBInstanceResponse } from "./CloneDBInstance/res";
import { DescribeRenewalPriceRequest } from "./DescribeRenewalPrice/req";
import { DescribeRenewalPriceResponse } from "./DescribeRenewalPrice/res";
import { DescribeDBInstanceAttributeRequest } from "./DescribeDBInstanceAttribute/req";
import { DescribeDBInstanceAttributeResponse } from "./DescribeDBInstanceAttribute/res";
import { ModifyDBInstanceConnectionStringRequest } from "./ModifyDBInstanceConnectionString/req";
import { ModifyDBInstanceConnectionStringResponse } from "./ModifyDBInstanceConnectionString/res";
import { CreateDatabaseRequest } from "./CreateDatabase/req";
import { CreateDatabaseResponse } from "./CreateDatabase/res";
import { DescribeBackupDatabaseRequest } from "./DescribeBackupDatabase/req";
import { DescribeBackupDatabaseResponse } from "./DescribeBackupDatabase/res";
import { CopyDatabaseRequest } from "./CopyDatabase/req";
import { CopyDatabaseResponse } from "./CopyDatabase/res";
import { AddTagsToResourceRequest } from "./AddTagsToResource/req";
import { AddTagsToResourceResponse } from "./AddTagsToResource/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { ModifyDBInstanceHAConfigRequest } from "./ModifyDBInstanceHAConfig/req";
import { ModifyDBInstanceHAConfigResponse } from "./ModifyDBInstanceHAConfig/res";
import { ModifyParameterRequest } from "./ModifyParameter/req";
import { ModifyParameterResponse } from "./ModifyParameter/res";
import { CreateReadOnlyDBInstanceRequest } from "./CreateReadOnlyDBInstance/req";
import { CreateReadOnlyDBInstanceResponse } from "./CreateReadOnlyDBInstance/res";
import { ModifyDBInstanceMonitorRequest } from "./ModifyDBInstanceMonitor/req";
import { ModifyDBInstanceMonitorResponse } from "./ModifyDBInstanceMonitor/res";
import { DescribeDiagnosticReportListRequest } from "./DescribeDiagnosticReportList/req";
import { DescribeDiagnosticReportListResponse } from "./DescribeDiagnosticReportList/res";
import { ModifySQLCollectorPolicyRequest } from "./ModifySQLCollectorPolicy/req";
import { ModifySQLCollectorPolicyResponse } from "./ModifySQLCollectorPolicy/res";
import { DescribeSlowLogsRequest } from "./DescribeSlowLogs/req";
import { DescribeSlowLogsResponse } from "./DescribeSlowLogs/res";
import { ImportDatabaseBetweenInstancesRequest } from "./ImportDatabaseBetweenInstances/req";
import { ImportDatabaseBetweenInstancesResponse } from "./ImportDatabaseBetweenInstances/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { DeleteDBInstanceRequest } from "./DeleteDBInstance/req";
import { DeleteDBInstanceResponse } from "./DeleteDBInstance/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { DescribeResourceUsageRequest } from "./DescribeResourceUsage/req";
import { DescribeResourceUsageResponse } from "./DescribeResourceUsage/res";
import { DescribeSQLLogRecordsRequest } from "./DescribeSQLLogRecords/req";
import { DescribeSQLLogRecordsResponse } from "./DescribeSQLLogRecords/res";
import { ReleaseReadWriteSplittingConnectionRequest } from "./ReleaseReadWriteSplittingConnection/req";
import { ReleaseReadWriteSplittingConnectionResponse } from "./ReleaseReadWriteSplittingConnection/res";
import { RevokeAccountPrivilegeRequest } from "./RevokeAccountPrivilege/req";
import { RevokeAccountPrivilegeResponse } from "./RevokeAccountPrivilege/res";
import { CreateDiagnosticReportRequest } from "./CreateDiagnosticReport/req";
import { CreateDiagnosticReportResponse } from "./CreateDiagnosticReport/res";
import { DescribeBackupPolicyRequest } from "./DescribeBackupPolicy/req";
import { DescribeBackupPolicyResponse } from "./DescribeBackupPolicy/res";
import { DescribeDBInstanceIPArrayListRequest } from "./DescribeDBInstanceIPArrayList/req";
import { DescribeDBInstanceIPArrayListResponse } from "./DescribeDBInstanceIPArrayList/res";
import { CreateTempDBInstanceRequest } from "./CreateTempDBInstance/req";
import { CreateTempDBInstanceResponse } from "./CreateTempDBInstance/res";
import { ModifyDBDescriptionRequest } from "./ModifyDBDescription/req";
import { ModifyDBDescriptionResponse } from "./ModifyDBDescription/res";
import { DescribeDBInstanceNetInfoRequest } from "./DescribeDBInstanceNetInfo/req";
import { DescribeDBInstanceNetInfoResponse } from "./DescribeDBInstanceNetInfo/res";
import { DescribeBackupsRequest } from "./DescribeBackups/req";
import { DescribeBackupsResponse } from "./DescribeBackups/res";
import { DescribeDBInstancesRequest } from "./DescribeDBInstances/req";
import { DescribeDBInstancesResponse } from "./DescribeDBInstances/res";
import { DescribeDBInstanceTDERequest } from "./DescribeDBInstanceTDE/req";
import { DescribeDBInstanceTDEResponse } from "./DescribeDBInstanceTDE/res";
import { ModifyDBInstanceSSLRequest } from "./ModifyDBInstanceSSL/req";
import { ModifyDBInstanceSSLResponse } from "./ModifyDBInstanceSSL/res";
import { DescribeParameterTemplatesRequest } from "./DescribeParameterTemplates/req";
import { DescribeParameterTemplatesResponse } from "./DescribeParameterTemplates/res";
import { DescribeDBInstanceSSLRequest } from "./DescribeDBInstanceSSL/req";
import { DescribeDBInstanceSSLResponse } from "./DescribeDBInstanceSSL/res";
import { ModifyDBInstanceProxyConfigurationRequest } from "./ModifyDBInstanceProxyConfiguration/req";
import { ModifyDBInstanceProxyConfigurationResponse } from "./ModifyDBInstanceProxyConfiguration/res";
import { ModifyDBInstancePayTypeRequest } from "./ModifyDBInstancePayType/req";
import { ModifyDBInstancePayTypeResponse } from "./ModifyDBInstancePayType/res";
import { DescribeOssDownloadsRequest } from "./DescribeOssDownloads/req";
import { DescribeOssDownloadsResponse } from "./DescribeOssDownloads/res";
import { CopyDatabaseBetweenInstancesRequest } from "./CopyDatabaseBetweenInstances/req";
import { CopyDatabaseBetweenInstancesResponse } from "./CopyDatabaseBetweenInstances/res";
import { ResetAccountRequest } from "./ResetAccount/req";
import { ResetAccountResponse } from "./ResetAccount/res";
import { CancelImportRequest } from "./CancelImport/req";
import { CancelImportResponse } from "./CancelImport/res";
import { UpgradeDBInstanceEngineVersionRequest } from "./UpgradeDBInstanceEngineVersion/req";
import { UpgradeDBInstanceEngineVersionResponse } from "./UpgradeDBInstanceEngineVersion/res";
import { DescribeSQLLogFilesRequest } from "./DescribeSQLLogFiles/req";
import { DescribeSQLLogFilesResponse } from "./DescribeSQLLogFiles/res";
import { DescribeAccountsRequest } from "./DescribeAccounts/req";
import { DescribeAccountsResponse } from "./DescribeAccounts/res";
import { SwitchDBInstanceHARequest } from "./SwitchDBInstanceHA/req";
import { SwitchDBInstanceHAResponse } from "./SwitchDBInstanceHA/res";
import { DescribePriceRequest } from "./DescribePrice/req";
import { DescribePriceResponse } from "./DescribePrice/res";
import { AllocateReadWriteSplittingConnectionRequest } from "./AllocateReadWriteSplittingConnection/req";
import { AllocateReadWriteSplittingConnectionResponse } from "./AllocateReadWriteSplittingConnection/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { DescribeDBInstanceIpHostnameRequest } from "./DescribeDBInstanceIpHostname/req";
import { DescribeDBInstanceIpHostnameResponse } from "./DescribeDBInstanceIpHostname/res";
import { DescribeDTCSecurityIpHostsForSQLServerRequest } from "./DescribeDTCSecurityIpHostsForSQLServer/req";
import { DescribeDTCSecurityIpHostsForSQLServerResponse } from "./DescribeDTCSecurityIpHostsForSQLServer/res";
import { ModifyDTCSecurityIpHostsForSQLServerRequest } from "./ModifyDTCSecurityIpHostsForSQLServer/req";
import { ModifyDTCSecurityIpHostsForSQLServerResponse } from "./ModifyDTCSecurityIpHostsForSQLServer/res";
import { DescribeInstanceCrossBackupPolicyRequest } from "./DescribeInstanceCrossBackupPolicy/req";
import { DescribeInstanceCrossBackupPolicyResponse } from "./DescribeInstanceCrossBackupPolicy/res";
import { DescribeAvailableCrossRegionRequest } from "./DescribeAvailableCrossRegion/req";
import { DescribeAvailableCrossRegionResponse } from "./DescribeAvailableCrossRegion/res";
import { ModifyDBInstanceAutoUpgradeMinorVersionRequest } from "./ModifyDBInstanceAutoUpgradeMinorVersion/req";
import { ModifyDBInstanceAutoUpgradeMinorVersionResponse } from "./ModifyDBInstanceAutoUpgradeMinorVersion/res";
import { ModifyInstanceCrossBackupPolicyRequest } from "./ModifyInstanceCrossBackupPolicy/req";
import { ModifyInstanceCrossBackupPolicyResponse } from "./ModifyInstanceCrossBackupPolicy/res";
import { DescribeAvailableRecoveryTimeRequest } from "./DescribeAvailableRecoveryTime/req";
import { DescribeAvailableRecoveryTimeResponse } from "./DescribeAvailableRecoveryTime/res";
import { DescribeCrossRegionLogBackupFilesRequest } from "./DescribeCrossRegionLogBackupFiles/req";
import { DescribeCrossRegionLogBackupFilesResponse } from "./DescribeCrossRegionLogBackupFiles/res";
import { DescribeCrossRegionBackupsRequest } from "./DescribeCrossRegionBackups/req";
import { DescribeCrossRegionBackupsResponse } from "./DescribeCrossRegionBackups/res";
import { CreateDdrInstanceRequest } from "./CreateDdrInstance/req";
import { CreateDdrInstanceResponse } from "./CreateDdrInstance/res";
import { CheckCreateDdrDBInstanceRequest } from "./CheckCreateDdrDBInstance/req";
import { CheckCreateDdrDBInstanceResponse } from "./CheckCreateDdrDBInstance/res";
import { DescribeBackupTasksRequest } from "./DescribeBackupTasks/req";
import { DescribeBackupTasksResponse } from "./DescribeBackupTasks/res";
import { CreateOnlineDatabaseTaskRequest } from "./CreateOnlineDatabaseTask/req";
import { CreateOnlineDatabaseTaskResponse } from "./CreateOnlineDatabaseTask/res";
import { DescribeEventsRequest } from "./DescribeEvents/req";
import { DescribeEventsResponse } from "./DescribeEvents/res";
import { ModifyActionEventPolicyRequest } from "./ModifyActionEventPolicy/req";
import { ModifyActionEventPolicyResponse } from "./ModifyActionEventPolicy/res";
import { RestoreTableRequest } from "./RestoreTable/req";
import { RestoreTableResponse } from "./RestoreTable/res";
import { DescribeActionEventPolicyRequest } from "./DescribeActionEventPolicy/req";
import { DescribeActionEventPolicyResponse } from "./DescribeActionEventPolicy/res";
import { ModifyHASwitchConfigRequest } from "./ModifyHASwitchConfig/req";
import { ModifyHASwitchConfigResponse } from "./ModifyHASwitchConfig/res";
import { DescribeHASwitchConfigRequest } from "./DescribeHASwitchConfig/req";
import { DescribeHASwitchConfigResponse } from "./DescribeHASwitchConfig/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { DescribeInstanceVpcMigrateInfoRequest } from "./DescribeInstanceVpcMigrateInfo/req";
import { DescribeInstanceVpcMigrateInfoResponse } from "./DescribeInstanceVpcMigrateInfo/res";
import { AllocateInstancePrivateConnectionRequest } from "./AllocateInstancePrivateConnection/req";
import { AllocateInstancePrivateConnectionResponse } from "./AllocateInstancePrivateConnection/res";
import { AllocateInstanceVpcNetworkTypeRequest } from "./AllocateInstanceVpcNetworkType/req";
import { AllocateInstanceVpcNetworkTypeResponse } from "./AllocateInstanceVpcNetworkType/res";
import { CheckAccountNameAvailableRequest } from "./CheckAccountNameAvailable/req";
import { CheckAccountNameAvailableResponse } from "./CheckAccountNameAvailable/res";
import { CheckInstanceExistRequest } from "./CheckInstanceExist/req";
import { CheckInstanceExistResponse } from "./CheckInstanceExist/res";
import { CheckRecoveryConditionsRequest } from "./CheckRecoveryConditions/req";
import { CheckRecoveryConditionsResponse } from "./CheckRecoveryConditions/res";
import { CheckResourceRequest } from "./CheckResource/req";
import { CheckResourceResponse } from "./CheckResource/res";
import { CreateDBInstanceReplicaRequest } from "./CreateDBInstanceReplica/req";
import { CreateDBInstanceReplicaResponse } from "./CreateDBInstanceReplica/res";
import { CreateMigrateTaskForSQLServerRequest } from "./CreateMigrateTaskForSQLServer/req";
import { CreateMigrateTaskForSQLServerResponse } from "./CreateMigrateTaskForSQLServer/res";
import { DescibeImportsFromDatabaseRequest } from "./DescibeImportsFromDatabase/req";
import { DescibeImportsFromDatabaseResponse } from "./DescibeImportsFromDatabase/res";
import { DescribeAvailableInstanceClassRequest } from "./DescribeAvailableInstanceClass/req";
import { DescribeAvailableInstanceClassResponse } from "./DescribeAvailableInstanceClass/res";
import { DescribeCharacterSetNameRequest } from "./DescribeCharacterSetName/req";
import { DescribeCharacterSetNameResponse } from "./DescribeCharacterSetName/res";
import { DescribeCloudDbExpertServiceRequest } from "./DescribeCloudDbExpertService/req";
import { DescribeCloudDbExpertServiceResponse } from "./DescribeCloudDbExpertService/res";
import { DescribeCrossRegionBackupDBInstanceRequest } from "./DescribeCrossRegionBackupDBInstance/req";
import { DescribeCrossRegionBackupDBInstanceResponse } from "./DescribeCrossRegionBackupDBInstance/res";
import { DescribeDBInstanceByTagsRequest } from "./DescribeDBInstanceByTags/req";
import { DescribeDBInstanceByTagsResponse } from "./DescribeDBInstanceByTags/res";
import { DescribeDBInstancesAsCsvRequest } from "./DescribeDBInstancesAsCsv/req";
import { DescribeDBInstancesAsCsvResponse } from "./DescribeDBInstancesAsCsv/res";
import { DescribeDBInstancesByExpireTimeRequest } from "./DescribeDBInstancesByExpireTime/req";
import { DescribeDBInstancesByExpireTimeResponse } from "./DescribeDBInstancesByExpireTime/res";
import { DescribeDBInstancesByPerformanceRequest } from "./DescribeDBInstancesByPerformance/req";
import { DescribeDBInstancesByPerformanceResponse } from "./DescribeDBInstancesByPerformance/res";
import { DescribeMetaListRequest } from "./DescribeMetaList/req";
import { DescribeMetaListResponse } from "./DescribeMetaList/res";
import { DescribeMigrateTasksForSQLServerRequest } from "./DescribeMigrateTasksForSQLServer/req";
import { DescribeMigrateTasksForSQLServerResponse } from "./DescribeMigrateTasksForSQLServer/res";
import { DescribeModifyParameterLogRequest } from "./DescribeModifyParameterLog/req";
import { DescribeModifyParameterLogResponse } from "./DescribeModifyParameterLog/res";
import { DescribeOssDownloadsForSQLServerRequest } from "./DescribeOssDownloadsForSQLServer/req";
import { DescribeOssDownloadsForSQLServerResponse } from "./DescribeOssDownloadsForSQLServer/res";
import { DescribeProxyFunctionSupportRequest } from "./DescribeProxyFunctionSupport/req";
import { DescribeProxyFunctionSupportResponse } from "./DescribeProxyFunctionSupport/res";
import { DescribeReadDBInstanceDelayRequest } from "./DescribeReadDBInstanceDelay/req";
import { DescribeReadDBInstanceDelayResponse } from "./DescribeReadDBInstanceDelay/res";
import { DescribeSQLLogReportListRequest } from "./DescribeSQLLogReportList/req";
import { DescribeSQLLogReportListResponse } from "./DescribeSQLLogReportList/res";
import { DescribeSQLLogReportsRequest } from "./DescribeSQLLogReports/req";
import { DescribeSQLLogReportsResponse } from "./DescribeSQLLogReports/res";
import { DescribeSQLReportsRequest } from "./DescribeSQLReports/req";
import { DescribeSQLReportsResponse } from "./DescribeSQLReports/res";
import { DescribeSecurityGroupConfigurationRequest } from "./DescribeSecurityGroupConfiguration/req";
import { DescribeSecurityGroupConfigurationResponse } from "./DescribeSecurityGroupConfiguration/res";
import { DescribeTaskInfoRequest } from "./DescribeTaskInfo/req";
import { DescribeTaskInfoResponse } from "./DescribeTaskInfo/res";
import { DescribeTasksRequest } from "./DescribeTasks/req";
import { DescribeTasksResponse } from "./DescribeTasks/res";
import { DescribeTemplatesListRequest } from "./DescribeTemplatesList/req";
import { DescribeTemplatesListResponse } from "./DescribeTemplatesList/res";
import { EvaluateSupportByokShowRequest } from "./EvaluateSupportByokShow/req";
import { EvaluateSupportByokShowResponse } from "./EvaluateSupportByokShow/res";
import { GrantOperatorPermissionRequest } from "./GrantOperatorPermission/req";
import { GrantOperatorPermissionResponse } from "./GrantOperatorPermission/res";
import { ImportDataForSQLServerRequest } from "./ImportDataForSQLServer/req";
import { ImportDataForSQLServerResponse } from "./ImportDataForSQLServer/res";
import { MigrateToOtherRegionRequest } from "./MigrateToOtherRegion/req";
import { MigrateToOtherRegionResponse } from "./MigrateToOtherRegion/res";
import { ModifyMySQLDBInstanceDelayRequest } from "./ModifyMySQLDBInstanceDelay/req";
import { ModifyMySQLDBInstanceDelayResponse } from "./ModifyMySQLDBInstanceDelay/res";
import { ModifyReadonlyInstanceDelayReplicationTimeRequest } from "./ModifyReadonlyInstanceDelayReplicationTime/req";
import { ModifyReadonlyInstanceDelayReplicationTimeResponse } from "./ModifyReadonlyInstanceDelayReplicationTime/res";
import { ModifyReplicaDescriptionRequest } from "./ModifyReplicaDescription/req";
import { ModifyReplicaDescriptionResponse } from "./ModifyReplicaDescription/res";
import { ModifyResourceGroupRequest } from "./ModifyResourceGroup/req";
import { ModifyResourceGroupResponse } from "./ModifyResourceGroup/res";
import { ModifySecurityGroupConfigurationRequest } from "./ModifySecurityGroupConfiguration/req";
import { ModifySecurityGroupConfigurationResponse } from "./ModifySecurityGroupConfiguration/res";
import { PreCheckCreateOrderRequest } from "./PreCheckCreateOrder/req";
import { PreCheckCreateOrderResponse } from "./PreCheckCreateOrder/res";
import { PreCheckCreateOrderForCloneRequest } from "./PreCheckCreateOrderForClone/req";
import { PreCheckCreateOrderForCloneResponse } from "./PreCheckCreateOrderForClone/res";
import { PreCheckCreateOrderForDeferRequest } from "./PreCheckCreateOrderForDefer/req";
import { PreCheckCreateOrderForDeferResponse } from "./PreCheckCreateOrderForDefer/res";
import { PreCheckCreateOrderForDegradeRequest } from "./PreCheckCreateOrderForDegrade/req";
import { PreCheckCreateOrderForDegradeResponse } from "./PreCheckCreateOrderForDegrade/res";
import { PreCheckCreateOrderForModifyRequest } from "./PreCheckCreateOrderForModify/req";
import { PreCheckCreateOrderForModifyResponse } from "./PreCheckCreateOrderForModify/res";
import { PreCheckCreateOrderForRebuildRequest } from "./PreCheckCreateOrderForRebuild/req";
import { PreCheckCreateOrderForRebuildResponse } from "./PreCheckCreateOrderForRebuild/res";
import { PreCheckCreateOrderForTempUpgradeRequest } from "./PreCheckCreateOrderForTempUpgrade/req";
import { PreCheckCreateOrderForTempUpgradeResponse } from "./PreCheckCreateOrderForTempUpgrade/res";
import { PreCheckDBInstanceOperationRequest } from "./PreCheckDBInstanceOperation/req";
import { PreCheckDBInstanceOperationResponse } from "./PreCheckDBInstanceOperation/res";
import { RequestServiceOfCloudDBExpertRequest } from "./RequestServiceOfCloudDBExpert/req";
import { RequestServiceOfCloudDBExpertResponse } from "./RequestServiceOfCloudDBExpert/res";
import { ResetAccountForPGRequest } from "./ResetAccountForPG/req";
import { ResetAccountForPGResponse } from "./ResetAccountForPG/res";
import { RevokeOperatorPermissionRequest } from "./RevokeOperatorPermission/req";
import { RevokeOperatorPermissionResponse } from "./RevokeOperatorPermission/res";
import { SwitchDBInstanceVpcRequest } from "./SwitchDBInstanceVpc/req";
import { SwitchDBInstanceVpcResponse } from "./SwitchDBInstanceVpc/res";
import { UpgradeDBInstanceKernelVersionRequest } from "./UpgradeDBInstanceKernelVersion/req";
import { UpgradeDBInstanceKernelVersionResponse } from "./UpgradeDBInstanceKernelVersion/res";
import { CloneParameterGroupRequest } from "./CloneParameterGroup/req";
import { CloneParameterGroupResponse } from "./CloneParameterGroup/res";
import { CreateParameterGroupRequest } from "./CreateParameterGroup/req";
import { CreateParameterGroupResponse } from "./CreateParameterGroup/res";
import { DeleteParameterGroupRequest } from "./DeleteParameterGroup/req";
import { DeleteParameterGroupResponse } from "./DeleteParameterGroup/res";
import { DescribeParameterGroupRequest } from "./DescribeParameterGroup/req";
import { DescribeParameterGroupResponse } from "./DescribeParameterGroup/res";
import { DescribeParameterGroupsRequest } from "./DescribeParameterGroups/req";
import { DescribeParameterGroupsResponse } from "./DescribeParameterGroups/res";
import { ModifyParameterGroupRequest } from "./ModifyParameterGroup/req";
import { ModifyParameterGroupResponse } from "./ModifyParameterGroup/res";
import { DescribeDBProxyRequest } from "./DescribeDBProxy/req";
import { DescribeDBProxyResponse } from "./DescribeDBProxy/res";
import { DescribeDBProxyEndpointRequest } from "./DescribeDBProxyEndpoint/req";
import { DescribeDBProxyEndpointResponse } from "./DescribeDBProxyEndpoint/res";
import { DescribeDBProxyPerformanceRequest } from "./DescribeDBProxyPerformance/req";
import { DescribeDBProxyPerformanceResponse } from "./DescribeDBProxyPerformance/res";
import { ModifyDBProxyRequest } from "./ModifyDBProxy/req";
import { ModifyDBProxyResponse } from "./ModifyDBProxy/res";
import { ModifyDBProxyEndpointRequest } from "./ModifyDBProxyEndpoint/req";
import { ModifyDBProxyEndpointResponse } from "./ModifyDBProxyEndpoint/res";
import { ModifyDBProxyInstanceRequest } from "./ModifyDBProxyInstance/req";
import { ModifyDBProxyInstanceResponse } from "./ModifyDBProxyInstance/res";

interface RDS {
    /**
    * 调用RestoreDBInstance接口恢复备份集到原实例（覆盖性恢复），已下线。
    */ RestoreDBInstance(query: RestoreDBInstanceRequest): Promise<RestoreDBInstanceResponse>;
    /**
    * 调用ModifyAccountDescription接口修改数据库账号的描述。
    */ ModifyAccountDescription(query: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse>;
    /**
    * 调用CreateMigrateTask接口将OSS上的备份文件还原到RDS实例，实现数据上云。
    */ CreateMigrateTask(query: CreateMigrateTaskRequest): Promise<CreateMigrateTaskResponse>;
    /**
    * 调用ModifyDBInstanceDescription接口修改RDS实例的描述。
    */ ModifyDBInstanceDescription(query: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse>;
    /**
    * 调用ModifyDBInstanceMaintainTime接口修改RDS实例可维护时间段。
    */ ModifyDBInstanceMaintainTime(query: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse>;
    /**
    * 调用DescribeDBInstanceHAConfig接口查询RDS实例高可用模式和数据复制方式。
    */ DescribeDBInstanceHAConfig(query: DescribeDBInstanceHAConfigRequest): Promise<DescribeDBInstanceHAConfigResponse>;
    /**
    * 调用ModifyDBInstanceSpec接口变更RDS实例（包括常规实例和只读实例，不包括灾备实例和临时实例）的规格或存储空间。
    */ ModifyDBInstanceSpec(query: ModifyDBInstanceSpecRequest): Promise<ModifyDBInstanceSpecResponse>;
    /**
    * 调用DescribeRegions接口查询当前可选的RDS地域和可用区信息。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 调用AllocateInstancePublicConnection接口申请实例的外网地址。
    */ AllocateInstancePublicConnection(query: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse>;
    /**
    * 调用ModifySecurityIps接口修改白名单。
    */ ModifySecurityIps(query: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse>;
    ModifyInstanceAutoRenewalAttribute(query: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse>;
    /**
    * 调用DeleteDatabase接口删除实例下的某个数据库。
    */ DeleteDatabase(query: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse>;
    /**
    * 调用CreateBackup接口为实例创建一个备份集。
    */ CreateBackup(query: CreateBackupRequest): Promise<CreateBackupResponse>;
    /**
    * 调用ModifyCollationTimeZone接口修改系统库的字符集排序规则和时区，已下线。
    */ ModifyCollationTimeZone(query: ModifyCollationTimeZoneRequest): Promise<ModifyCollationTimeZoneResponse>;
    /**
    * 调用DescribeMigrateTasks接口查询备份数据上云任务列表。
    */ DescribeMigrateTasks(query: DescribeMigrateTasksRequest): Promise<DescribeMigrateTasksResponse>;
    /**
    * 调用ModifyDBInstanceConnectionMode接口开启或关闭数据库代理，已下线。
    */ ModifyDBInstanceConnectionMode(query: ModifyDBInstanceConnectionModeRequest): Promise<ModifyDBInstanceConnectionModeResponse>;
    /**
    * 调用ModifyDBInstanceNetworkType接口切换RDS实例网络类型。
    */ ModifyDBInstanceNetworkType(query: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse>;
    /**
    * 调用DescribeLogBackupFiles接口查询实例的日志备份文件。
    */ DescribeLogBackupFiles(query: DescribeLogBackupFilesRequest): Promise<DescribeLogBackupFilesResponse>;
    /**
    * 调用DescribeErrorLogs接口查看实例某段时间内的错误日志。
    */ DescribeErrorLogs(query: DescribeErrorLogsRequest): Promise<DescribeErrorLogsResponse>;
    /**
    * 调用DeleteBackup接口删除数据备份文件。
    */ DeleteBackup(query: DeleteBackupRequest): Promise<DeleteBackupResponse>;
    /**
    * 调用DescribeDBInstancePerformance接口查看实例性能数据。
    */ DescribeDBInstancePerformance(query: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse>;
    /**
    * 调用PurgeDBInstanceLog接口清理或收缩RDS实例日志。
    */ PurgeDBInstanceLog(query: PurgeDBInstanceLogRequest): Promise<PurgeDBInstanceLogResponse>;
    /**
    * 调用RemoveTagsFromResource接口解绑标签。
    */ RemoveTagsFromResource(query: RemoveTagsFromResourceRequest): Promise<RemoveTagsFromResourceResponse>;
    /**
    * 调用DescribeDBInstanceMonitor接口查询监控频率。
    */ DescribeDBInstanceMonitor(query: DescribeDBInstanceMonitorRequest): Promise<DescribeDBInstanceMonitorResponse>;
    DescribeInstanceAutoRenewalAttribute(query: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse>;
    /**
    * 调用ModifyDBInstanceTDE接口开启RDS实例透明数据加密功能。
    */ ModifyDBInstanceTDE(query: ModifyDBInstanceTDERequest): Promise<ModifyDBInstanceTDEResponse>;
    /**
    * 调用ModifyDBInstanceNetworkExpireTime接口修改连接地址过期时间。
    */ ModifyDBInstanceNetworkExpireTime(query: ModifyDBInstanceNetworkExpireTimeRequest): Promise<ModifyDBInstanceNetworkExpireTimeResponse>;
    /**
    * 调用DescribeSlowLogRecords接口查看实例的慢日志明细。
    */ DescribeSlowLogRecords(query: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse>;
    /**
    * 调用DescribeBinlogFiles接口查看Binlog日志。
    */ DescribeBinlogFiles(query: DescribeBinlogFilesRequest): Promise<DescribeBinlogFilesResponse>;
    /**
    * 调用ModifyReadWriteSplittingConnection接口修改读写分离链路的延迟阈值和各个实例的读权重。
    */ ModifyReadWriteSplittingConnection(query: ModifyReadWriteSplittingConnectionRequest): Promise<ModifyReadWriteSplittingConnectionResponse>;
    /**
    * 调用DeleteAccount接口删除数据库账号。
    */ DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
    * 调用DescribeDBInstanceProxyConfiguration接口查看数据库代理设置，已下线。
    */ DescribeDBInstanceProxyConfiguration(query: DescribeDBInstanceProxyConfigurationRequest): Promise<DescribeDBInstanceProxyConfigurationResponse>;
    /**
    * 调用CalculateDBInstanceWeight接口查询系统权重分配值。
    */ CalculateDBInstanceWeight(query: CalculateDBInstanceWeightRequest): Promise<CalculateDBInstanceWeightResponse>;
    /**
    * 调用GrantAccountPrivilege接口授权账号访问数据库。
    */ GrantAccountPrivilege(query: GrantAccountPrivilegeRequest): Promise<GrantAccountPrivilegeResponse>;
    /**
    * 调用DescribeDatabases接口查看实例下的数据库信息。
    */ DescribeDatabases(query: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse>;
    /**
    * 调用RestartDBInstance接口重启RDS实例。
    */ RestartDBInstance(query: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse>;
    /**
    * 调用RecoveryDBInstance接口恢复数据库。
    */ RecoveryDBInstance(query: RecoveryDBInstanceRequest): Promise<RecoveryDBInstanceResponse>;
    /**
    * 调用MigrateToOtherZone接口将RDS实例迁移至其他可用区。
    */ MigrateToOtherZone(query: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse>;
    /**
    * 调用CreateDBInstance接口创建一个RDS实例。
    */ CreateDBInstance(query: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse>;
    /**
    * 调用CreateAccount接口创建管理数据库的账号。
    */ CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
    * 调用DescribeCollationTimeZones接口查看支持的字符集排序规则和时区。
    */ DescribeCollationTimeZones(query: DescribeCollationTimeZonesRequest): Promise<DescribeCollationTimeZonesResponse>;
    /**
    * 调用SwitchDBInstanceNetType接口切换内外网地址。
    */ SwitchDBInstanceNetType(query: SwitchDBInstanceNetTypeRequest): Promise<SwitchDBInstanceNetTypeResponse>;
    /**
    * 调用ModifyBackupPolicy接口修改备份设置。
    */ ModifyBackupPolicy(query: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse>;
    /**
    * 调用ReleaseInstancePublicConnection接口释放实例的外网连接地址。
    */ ReleaseInstancePublicConnection(query: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse>;
    /**
    * 调用MigrateSecurityIPMode接口把白名单从通用模式切换为高安全模式。
    */ MigrateSecurityIPMode(query: MigrateSecurityIPModeRequest): Promise<MigrateSecurityIPModeResponse>;
    /**
    * 调用CloneDBInstance接口将历史数据恢复至一个新实例（称为克隆实例）。
    */ CloneDBInstance(query: CloneDBInstanceRequest): Promise<CloneDBInstanceResponse>;
    DescribeRenewalPrice(query: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse>;
    /**
    * 调用DescribeDBInstanceAttribute接口查看RDS实例的详细信息。
    */ DescribeDBInstanceAttribute(query: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse>;
    /**
    * 调用ModifyDBInstanceConnectionString接口修改实例的连接地址和端口。
    */ ModifyDBInstanceConnectionString(query: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse>;
    /**
    * 调用CreateDatabase接口在某个实例下创建数据库。
    */ CreateDatabase(query: CreateDatabaseRequest): Promise<CreateDatabaseResponse>;
    /**
    * 调用DescribeBackupDatabase接口查询备份集下的数据库列表，已下线。
    */ DescribeBackupDatabase(query: DescribeBackupDatabaseRequest): Promise<DescribeBackupDatabaseResponse>;
    /**
    * 调用CopyDatabase接口复制数据库SQL Server 2008 R2版，已下线。
    */ CopyDatabase(query: CopyDatabaseRequest): Promise<CopyDatabaseResponse>;
    /**
    * 调用AddTagsToResource接口为实例绑定标签。
    */ AddTagsToResource(query: AddTagsToResourceRequest): Promise<AddTagsToResourceResponse>;
    /**
    * 调用ResetAccountPassword接口重置账号密码。
    */ ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
    * 调用ModifyDBInstanceHAConfig接口修改实例的高可用模式和数据复制方式。
    */ ModifyDBInstanceHAConfig(query: ModifyDBInstanceHAConfigRequest): Promise<ModifyDBInstanceHAConfigResponse>;
    /**
    * 调用ModifyParameter接口修改实例参数。
    */ ModifyParameter(query: ModifyParameterRequest): Promise<ModifyParameterResponse>;
    /**
    * 调用CreateReadOnlyDBInstance接口为某个实例创建一个只读实例。
    */ CreateReadOnlyDBInstance(query: CreateReadOnlyDBInstanceRequest): Promise<CreateReadOnlyDBInstanceResponse>;
    /**
    * 调用ModifyDBInstanceMonitor修改监控频率。
    */ ModifyDBInstanceMonitor(query: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse>;
    /**
    * 调用DescribeDiagnosticReportList接口获取诊断报告列表。
    */ DescribeDiagnosticReportList(query: DescribeDiagnosticReportListRequest): Promise<DescribeDiagnosticReportListResponse>;
    /**
    * 调用ModifySQLCollectorPolicy接口开启或关闭实例的SQL审计功能。
    */ ModifySQLCollectorPolicy(query: ModifySQLCollectorPolicyRequest): Promise<ModifySQLCollectorPolicyResponse>;
    /**
    * 调用DescribeSlowLogs查看慢日志统计情况。
    */ DescribeSlowLogs(query: DescribeSlowLogsRequest): Promise<DescribeSlowLogsResponse>;
    /**
    * 调用ImportDatabaseBetweenInstances接口从其它RDS实例迁入数据。
    */ ImportDatabaseBetweenInstances(query: ImportDatabaseBetweenInstancesRequest): Promise<ImportDatabaseBetweenInstancesResponse>;
    /**
    * 调用DescribeParameters接口查询实例当前的参数配置。
    */ DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
    * 调用DeleteDBInstance接口释放RDS实例。
    */ DeleteDBInstance(query: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse>;
    /**
    * 调用RenewInstance接口对RDS实例进行手动续费。
    */ RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
    * 调用DescribeResourceUsage接口查看实例的空间利用信息。
    */ DescribeResourceUsage(query: DescribeResourceUsageRequest): Promise<DescribeResourceUsageResponse>;
    /**
    * 调用DescribeSQLLogRecords接口查询实例的SQL审计日志。
    */ DescribeSQLLogRecords(query: DescribeSQLLogRecordsRequest): Promise<DescribeSQLLogRecordsResponse>;
    /**
    * 调用ReleaseReadWriteSplittingConnection接口释放读写分离地址。
    */ ReleaseReadWriteSplittingConnection(query: ReleaseReadWriteSplittingConnectionRequest): Promise<ReleaseReadWriteSplittingConnectionResponse>;
    /**
    * 调用RevokeAccountPrivilege接口撤销账号对数据库的访问权限。
    */ RevokeAccountPrivilege(query: RevokeAccountPrivilegeRequest): Promise<RevokeAccountPrivilegeResponse>;
    /**
    * 调用CreateDiagnosticReport接口创建诊断报告。
    */ CreateDiagnosticReport(query: CreateDiagnosticReportRequest): Promise<CreateDiagnosticReportResponse>;
    /**
    * 调用DescribeBackupPolicy接口查看实例备份设置。
    */ DescribeBackupPolicy(query: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse>;
    /**
    * 调用DescribeDBInstanceIPArrayList接口查看RDS实例IP白名单。
    */ DescribeDBInstanceIPArrayList(query: DescribeDBInstanceIPArrayListRequest): Promise<DescribeDBInstanceIPArrayListResponse>;
    /**
    * 调用CreateTempDBInstance接口创建临时实例。
    */ CreateTempDBInstance(query: CreateTempDBInstanceRequest): Promise<CreateTempDBInstanceResponse>;
    /**
    * 调用ModifyDBDescription接口修改数据库备注。
    */ ModifyDBDescription(query: ModifyDBDescriptionRequest): Promise<ModifyDBDescriptionResponse>;
    /**
    * 调用DescribeDBInstanceNetInfo接口查看实例的所有连接地址信息。
    */ DescribeDBInstanceNetInfo(query: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse>;
    /**
    * 调用DescribeBackups接口查看备份集列表。
    */ DescribeBackups(query: DescribeBackupsRequest): Promise<DescribeBackupsResponse>;
    /**
    * 调用DescribeDBInstances接口查看RDS实例列表或被RAM授权的实例列表。
    */ DescribeDBInstances(query: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse>;
    /**
    * 调用DescribeDBInstanceTDE接口查询实例数据加密状态。
    */ DescribeDBInstanceTDE(query: DescribeDBInstanceTDERequest): Promise<DescribeDBInstanceTDEResponse>;
    /**
    * 调用ModifyDBInstanceSSL接口修改实例SSL链路。
    */ ModifyDBInstanceSSL(query: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse>;
    /**
    * 调用DescribeParameterTemplates接口查看数据库参数模板。
    */ DescribeParameterTemplates(query: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse>;
    /**
    * 调用DescribeDBInstanceSSL接口查询实例SSL设置。
    */ DescribeDBInstanceSSL(query: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse>;
    /**
    * 调用ModifyDBInstanceProxyConfiguration接口设置数据库代理，已下线。
    */ ModifyDBInstanceProxyConfiguration(query: ModifyDBInstanceProxyConfigurationRequest): Promise<ModifyDBInstanceProxyConfigurationResponse>;
    ModifyDBInstancePayType(query: ModifyDBInstancePayTypeRequest): Promise<ModifyDBInstancePayTypeResponse>;
    /**
    * 调用DescribeOssDownloads接口查看备份数据上云任务的文件详情。
    */ DescribeOssDownloads(query: DescribeOssDownloadsRequest): Promise<DescribeOssDownloadsResponse>;
    /**
    * 调用CopyDatabaseBetweenInstances接口在实例间复制数据库。
    */ CopyDatabaseBetweenInstances(query: CopyDatabaseBetweenInstancesRequest): Promise<CopyDatabaseBetweenInstancesResponse>;
    /**
    * 调用ResetAccount接口重置高权限账号的权限。
    */ ResetAccount(query: ResetAccountRequest): Promise<ResetAccountResponse>;
    /**
    * 调用CancelImport接口用于取消RDS实例迁移任务。
    */ CancelImport(query: CancelImportRequest): Promise<CancelImportResponse>;
    /**
    * 调用UpgradeDBInstanceEngineVersion接口升级实例数据库版本。
    */ UpgradeDBInstanceEngineVersion(query: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse>;
    /**
    * 调用DescribeSQLLogFiles接口查询SQL审计文件列表。
    */ DescribeSQLLogFiles(query: DescribeSQLLogFilesRequest): Promise<DescribeSQLLogFilesResponse>;
    /**
    * 调用DescribeAccounts接口查看实例的帐号信息。
    */ DescribeAccounts(query: DescribeAccountsRequest): Promise<DescribeAccountsResponse>;
    /**
    * 调用SwitchDBInstanceHA接口切换RDS实例的主备实例。
    */ SwitchDBInstanceHA(query: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse>;
    DescribePrice(query: DescribePriceRequest): Promise<DescribePriceResponse>;
    /**
    * 调用AllocateReadWriteSplittingConnection接口申请读写分离地址。
    */ AllocateReadWriteSplittingConnection(query: AllocateReadWriteSplittingConnectionRequest): Promise<AllocateReadWriteSplittingConnectionResponse>;
    /**
    * 调用DescribeTags接口查询RDS实例的标签。
    */ DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
    * 调用DescribeDBInstanceIpHostname接口查询RDS实例的底层ECS实例的hostname。
    */ DescribeDBInstanceIpHostname(query: DescribeDBInstanceIpHostnameRequest): Promise<DescribeDBInstanceIpHostnameResponse>;
    /**
    * 调用DescribeDTCSecurityIpHostsForSQLServer接口查询RDS实例的分布式事务白名单信息。
    */ DescribeDTCSecurityIpHostsForSQLServer(query: DescribeDTCSecurityIpHostsForSQLServerRequest): Promise<DescribeDTCSecurityIpHostsForSQLServerResponse>;
    /**
    * 调用ModifyDTCSecurityIpHostsForSQLServer接口设置分布式事务白名单。
    */ ModifyDTCSecurityIpHostsForSQLServer(query: ModifyDTCSecurityIpHostsForSQLServerRequest): Promise<ModifyDTCSecurityIpHostsForSQLServerResponse>;
    /**
    * 调用DescribeInstanceCrossBackupPolicy接口查询跨地域备份设置。
    */ DescribeInstanceCrossBackupPolicy(query: DescribeInstanceCrossBackupPolicyRequest): Promise<DescribeInstanceCrossBackupPolicyResponse>;
    /**
    * 调用DescribeAvailableCrossRegion接口查询所选地域当前可以进行跨地域备份的目的地域。
    */ DescribeAvailableCrossRegion(query: DescribeAvailableCrossRegionRequest): Promise<DescribeAvailableCrossRegionResponse>;
    /**
    * 调用ModifyDBInstanceAutoUpgradeMinorVersion接口修改RDS实例升级小版本的方式。
    */ ModifyDBInstanceAutoUpgradeMinorVersion(query: ModifyDBInstanceAutoUpgradeMinorVersionRequest): Promise<ModifyDBInstanceAutoUpgradeMinorVersionResponse>;
    /**
    * 调用ModifyInstanceCrossBackupPolicy接口修改RDS跨地域备份设置。
    */ ModifyInstanceCrossBackupPolicy(query: ModifyInstanceCrossBackupPolicyRequest): Promise<ModifyInstanceCrossBackupPolicyResponse>;
    /**
    * 调用DescribeAvailableRecoveryTime接口查询某跨地域备份文件可恢复哪个时间段的数据。
    */ DescribeAvailableRecoveryTime(query: DescribeAvailableRecoveryTimeRequest): Promise<DescribeAvailableRecoveryTimeResponse>;
    /**
    * 调用DescribeCrossRegionLogBackupFiles接口查看跨地域日志备份文件列表。
    */ DescribeCrossRegionLogBackupFiles(query: DescribeCrossRegionLogBackupFilesRequest): Promise<DescribeCrossRegionLogBackupFilesResponse>;
    /**
    * 调用DescribeCrossRegionBackups接口查看某RDS实例跨地域数据备份文件列表。
    */ DescribeCrossRegionBackups(query: DescribeCrossRegionBackupsRequest): Promise<DescribeCrossRegionBackupsResponse>;
    /**
    * 调用CreateDdrInstance接口跨地域恢复数据到新实例。
    */ CreateDdrInstance(query: CreateDdrInstanceRequest): Promise<CreateDdrInstanceResponse>;
    /**
    * 调用CheckCreateDdrDBInstance接口预检查某RDS实例是否可以用跨地域备份集进行跨地域恢复。
    */ CheckCreateDdrDBInstance(query: CheckCreateDdrDBInstanceRequest): Promise<CheckCreateDdrDBInstanceResponse>;
    /**
    * 调用DescribeBackupTasks接口查询实例的备份任务列表。
    */ DescribeBackupTasks(query: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse>;
    /**
    * 在备份数据上云时调用CreateOnlineDatabaseTask接口打开数据库。
    */ CreateOnlineDatabaseTask(query: CreateOnlineDatabaseTaskRequest): Promise<CreateOnlineDatabaseTaskResponse>;
    /**
    * 调用DescribeEvents接口查询RDS事件记录列表。
    */ DescribeEvents(query: DescribeEventsRequest): Promise<DescribeEventsResponse>;
    /**
    * 调用ModifyActionEventPolicy接口开启或关闭RDS历史事件功能。
    */ ModifyActionEventPolicy(query: ModifyActionEventPolicyRequest): Promise<ModifyActionEventPolicyResponse>;
    /**
    * 调用RestoreTable接口恢复RDS实例的某个数据库或表到原实例上。
    */ RestoreTable(query: RestoreTableRequest): Promise<RestoreTableResponse>;
    /**
    * 调用DescribeActionEventPolicy接口查看RDS历史事件功能开启情况。
    */ DescribeActionEventPolicy(query: DescribeActionEventPolicyRequest): Promise<DescribeActionEventPolicyResponse>;
    /**
    * 调用ModifyHASwitchConfig接口开启或关闭RDS实例的主备切换功能。
    */ ModifyHASwitchConfig(query: ModifyHASwitchConfigRequest): Promise<ModifyHASwitchConfigResponse>;
    /**
    * 调用DescribeHASwitchConfig接口查看RDS实例主备自动切换设置。
    */ DescribeHASwitchConfig(query: DescribeHASwitchConfigRequest): Promise<DescribeHASwitchConfigResponse>;
    /**
    * 调用DescribeAvailableResource接口查询某地域可售卖资源信息。
    */ DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    DescribeInstanceVpcMigrateInfo(query: DescribeInstanceVpcMigrateInfoRequest): Promise<DescribeInstanceVpcMigrateInfoResponse>;
    AllocateInstancePrivateConnection(query: AllocateInstancePrivateConnectionRequest): Promise<AllocateInstancePrivateConnectionResponse>;
    AllocateInstanceVpcNetworkType(query: AllocateInstanceVpcNetworkTypeRequest): Promise<AllocateInstanceVpcNetworkTypeResponse>;
    CheckAccountNameAvailable(query: CheckAccountNameAvailableRequest): Promise<CheckAccountNameAvailableResponse>;
    CheckInstanceExist(query: CheckInstanceExistRequest): Promise<CheckInstanceExistResponse>;
    CheckRecoveryConditions(query: CheckRecoveryConditionsRequest): Promise<CheckRecoveryConditionsResponse>;
    CheckResource(query: CheckResourceRequest): Promise<CheckResourceResponse>;
    CreateDBInstanceReplica(query: CreateDBInstanceReplicaRequest): Promise<CreateDBInstanceReplicaResponse>;
    CreateMigrateTaskForSQLServer(query: CreateMigrateTaskForSQLServerRequest): Promise<CreateMigrateTaskForSQLServerResponse>;
    DescibeImportsFromDatabase(query: DescibeImportsFromDatabaseRequest): Promise<DescibeImportsFromDatabaseResponse>;
    DescribeAvailableInstanceClass(query: DescribeAvailableInstanceClassRequest): Promise<DescribeAvailableInstanceClassResponse>;
    DescribeCharacterSetName(query: DescribeCharacterSetNameRequest): Promise<DescribeCharacterSetNameResponse>;
    DescribeCloudDbExpertService(query: DescribeCloudDbExpertServiceRequest): Promise<DescribeCloudDbExpertServiceResponse>;
    DescribeCrossRegionBackupDBInstance(query: DescribeCrossRegionBackupDBInstanceRequest): Promise<DescribeCrossRegionBackupDBInstanceResponse>;
    DescribeDBInstanceByTags(query: DescribeDBInstanceByTagsRequest): Promise<DescribeDBInstanceByTagsResponse>;
    DescribeDBInstancesAsCsv(query: DescribeDBInstancesAsCsvRequest): Promise<DescribeDBInstancesAsCsvResponse>;
    DescribeDBInstancesByExpireTime(query: DescribeDBInstancesByExpireTimeRequest): Promise<DescribeDBInstancesByExpireTimeResponse>;
    DescribeDBInstancesByPerformance(query: DescribeDBInstancesByPerformanceRequest): Promise<DescribeDBInstancesByPerformanceResponse>;
    DescribeMetaList(query: DescribeMetaListRequest): Promise<DescribeMetaListResponse>;
    DescribeMigrateTasksForSQLServer(query: DescribeMigrateTasksForSQLServerRequest): Promise<DescribeMigrateTasksForSQLServerResponse>;
    DescribeModifyParameterLog(query: DescribeModifyParameterLogRequest): Promise<DescribeModifyParameterLogResponse>;
    DescribeOssDownloadsForSQLServer(query: DescribeOssDownloadsForSQLServerRequest): Promise<DescribeOssDownloadsForSQLServerResponse>;
    DescribeProxyFunctionSupport(query: DescribeProxyFunctionSupportRequest): Promise<DescribeProxyFunctionSupportResponse>;
    DescribeReadDBInstanceDelay(query: DescribeReadDBInstanceDelayRequest): Promise<DescribeReadDBInstanceDelayResponse>;
    DescribeSQLLogReportList(query: DescribeSQLLogReportListRequest): Promise<DescribeSQLLogReportListResponse>;
    DescribeSQLLogReports(query: DescribeSQLLogReportsRequest): Promise<DescribeSQLLogReportsResponse>;
    DescribeSQLReports(query: DescribeSQLReportsRequest): Promise<DescribeSQLReportsResponse>;
    DescribeSecurityGroupConfiguration(query: DescribeSecurityGroupConfigurationRequest): Promise<DescribeSecurityGroupConfigurationResponse>;
    DescribeTaskInfo(query: DescribeTaskInfoRequest): Promise<DescribeTaskInfoResponse>;
    DescribeTasks(query: DescribeTasksRequest): Promise<DescribeTasksResponse>;
    DescribeTemplatesList(query: DescribeTemplatesListRequest): Promise<DescribeTemplatesListResponse>;
    EvaluateSupportByokShow(query: EvaluateSupportByokShowRequest): Promise<EvaluateSupportByokShowResponse>;
    GrantOperatorPermission(query: GrantOperatorPermissionRequest): Promise<GrantOperatorPermissionResponse>;
    ImportDataForSQLServer(query: ImportDataForSQLServerRequest): Promise<ImportDataForSQLServerResponse>;
    MigrateToOtherRegion(query: MigrateToOtherRegionRequest): Promise<MigrateToOtherRegionResponse>;
    ModifyMySQLDBInstanceDelay(query: ModifyMySQLDBInstanceDelayRequest): Promise<ModifyMySQLDBInstanceDelayResponse>;
    ModifyReadonlyInstanceDelayReplicationTime(query: ModifyReadonlyInstanceDelayReplicationTimeRequest): Promise<ModifyReadonlyInstanceDelayReplicationTimeResponse>;
    ModifyReplicaDescription(query: ModifyReplicaDescriptionRequest): Promise<ModifyReplicaDescriptionResponse>;
    ModifyResourceGroup(query: ModifyResourceGroupRequest): Promise<ModifyResourceGroupResponse>;
    ModifySecurityGroupConfiguration(query: ModifySecurityGroupConfigurationRequest): Promise<ModifySecurityGroupConfigurationResponse>;
    PreCheckCreateOrder(query: PreCheckCreateOrderRequest): Promise<PreCheckCreateOrderResponse>;
    PreCheckCreateOrderForClone(query: PreCheckCreateOrderForCloneRequest): Promise<PreCheckCreateOrderForCloneResponse>;
    PreCheckCreateOrderForDefer(query: PreCheckCreateOrderForDeferRequest): Promise<PreCheckCreateOrderForDeferResponse>;
    PreCheckCreateOrderForDegrade(query: PreCheckCreateOrderForDegradeRequest): Promise<PreCheckCreateOrderForDegradeResponse>;
    PreCheckCreateOrderForModify(query: PreCheckCreateOrderForModifyRequest): Promise<PreCheckCreateOrderForModifyResponse>;
    PreCheckCreateOrderForRebuild(query: PreCheckCreateOrderForRebuildRequest): Promise<PreCheckCreateOrderForRebuildResponse>;
    PreCheckCreateOrderForTempUpgrade(query: PreCheckCreateOrderForTempUpgradeRequest): Promise<PreCheckCreateOrderForTempUpgradeResponse>;
    PreCheckDBInstanceOperation(query: PreCheckDBInstanceOperationRequest): Promise<PreCheckDBInstanceOperationResponse>;
    RequestServiceOfCloudDBExpert(query: RequestServiceOfCloudDBExpertRequest): Promise<RequestServiceOfCloudDBExpertResponse>;
    ResetAccountForPG(query: ResetAccountForPGRequest): Promise<ResetAccountForPGResponse>;
    RevokeOperatorPermission(query: RevokeOperatorPermissionRequest): Promise<RevokeOperatorPermissionResponse>;
    SwitchDBInstanceVpc(query: SwitchDBInstanceVpcRequest): Promise<SwitchDBInstanceVpcResponse>;
    UpgradeDBInstanceKernelVersion(query: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse>;
    CloneParameterGroup(query: CloneParameterGroupRequest): Promise<CloneParameterGroupResponse>;
    CreateParameterGroup(query: CreateParameterGroupRequest): Promise<CreateParameterGroupResponse>;
    DeleteParameterGroup(query: DeleteParameterGroupRequest): Promise<DeleteParameterGroupResponse>;
    DescribeParameterGroup(query: DescribeParameterGroupRequest): Promise<DescribeParameterGroupResponse>;
    DescribeParameterGroups(query: DescribeParameterGroupsRequest): Promise<DescribeParameterGroupsResponse>;
    ModifyParameterGroup(query: ModifyParameterGroupRequest): Promise<ModifyParameterGroupResponse>;
    DescribeDBProxy(query: DescribeDBProxyRequest): Promise<DescribeDBProxyResponse>;
    DescribeDBProxyEndpoint(query: DescribeDBProxyEndpointRequest): Promise<DescribeDBProxyEndpointResponse>;
    DescribeDBProxyPerformance(query: DescribeDBProxyPerformanceRequest): Promise<DescribeDBProxyPerformanceResponse>;
    ModifyDBProxy(query: ModifyDBProxyRequest): Promise<ModifyDBProxyResponse>;
    ModifyDBProxyEndpoint(query: ModifyDBProxyEndpointRequest): Promise<ModifyDBProxyEndpointResponse>;
    ModifyDBProxyInstance(query: ModifyDBProxyInstanceRequest): Promise<ModifyDBProxyInstanceResponse>;
}
export default RDS;
