import { CreateDBInstanceRequest } from "./CreateDBInstance/req";
import { CreateDBInstanceResponse } from "./CreateDBInstance/res";
import { DeleteDBInstanceRequest } from "./DeleteDBInstance/req";
import { DeleteDBInstanceResponse } from "./DeleteDBInstance/res";
import { DescribeDataReDistributeInfoRequest } from "./DescribeDataReDistributeInfo/req";
import { DescribeDataReDistributeInfoResponse } from "./DescribeDataReDistributeInfo/res";
import { DescribeDBInstanceAttributeRequest } from "./DescribeDBInstanceAttribute/req";
import { DescribeDBInstanceAttributeResponse } from "./DescribeDBInstanceAttribute/res";
import { DescribeDBClusterNodeRequest } from "./DescribeDBClusterNode/req";
import { DescribeDBClusterNodeResponse } from "./DescribeDBClusterNode/res";
import { DescribeDBInstancesRequest } from "./DescribeDBInstances/req";
import { DescribeDBInstancesResponse } from "./DescribeDBInstances/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ModifyDBInstanceDescriptionRequest } from "./ModifyDBInstanceDescription/req";
import { ModifyDBInstanceDescriptionResponse } from "./ModifyDBInstanceDescription/res";
import { ModifyDBInstanceMaintainTimeRequest } from "./ModifyDBInstanceMaintainTime/req";
import { ModifyDBInstanceMaintainTimeResponse } from "./ModifyDBInstanceMaintainTime/res";
import { ModifyDBInstanceResourceGroupRequest } from "./ModifyDBInstanceResourceGroup/req";
import { ModifyDBInstanceResourceGroupResponse } from "./ModifyDBInstanceResourceGroup/res";
import { ModifyVectorConfigurationRequest } from "./ModifyVectorConfiguration/req";
import { ModifyVectorConfigurationResponse } from "./ModifyVectorConfiguration/res";
import { RestartDBInstanceRequest } from "./RestartDBInstance/req";
import { RestartDBInstanceResponse } from "./RestartDBInstance/res";
import { UpgradeDBInstanceRequest } from "./UpgradeDBInstance/req";
import { UpgradeDBInstanceResponse } from "./UpgradeDBInstance/res";
import { UpgradeDBVersionRequest } from "./UpgradeDBVersion/req";
import { UpgradeDBVersionResponse } from "./UpgradeDBVersion/res";
import { DescribeModifyParameterLogRequest } from "./DescribeModifyParameterLog/req";
import { DescribeModifyParameterLogResponse } from "./DescribeModifyParameterLog/res";
import { DescribeAvailableResourcesRequest } from "./DescribeAvailableResources/req";
import { DescribeAvailableResourcesResponse } from "./DescribeAvailableResources/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { ModifyParametersRequest } from "./ModifyParameters/req";
import { ModifyParametersResponse } from "./ModifyParameters/res";
import { ModifyBackupPolicyRequest } from "./ModifyBackupPolicy/req";
import { ModifyBackupPolicyResponse } from "./ModifyBackupPolicy/res";
import { DescribeDataBackupsRequest } from "./DescribeDataBackups/req";
import { DescribeDataBackupsResponse } from "./DescribeDataBackups/res";
import { DescribeBackupPolicyRequest } from "./DescribeBackupPolicy/req";
import { DescribeBackupPolicyResponse } from "./DescribeBackupPolicy/res";
import { DescribeLogBackupsRequest } from "./DescribeLogBackups/req";
import { DescribeLogBackupsResponse } from "./DescribeLogBackups/res";
import { ResumeInstanceRequest } from "./ResumeInstance/req";
import { ResumeInstanceResponse } from "./ResumeInstance/res";
import { PauseInstanceRequest } from "./PauseInstance/req";
import { PauseInstanceResponse } from "./PauseInstance/res";
import { DescribeSupportFeaturesRequest } from "./DescribeSupportFeatures/req";
import { DescribeSupportFeaturesResponse } from "./DescribeSupportFeatures/res";
import { ModifyDBInstanceConfigRequest } from "./ModifyDBInstanceConfig/req";
import { ModifyDBInstanceConfigResponse } from "./ModifyDBInstanceConfig/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { DescribeAccountsRequest } from "./DescribeAccounts/req";
import { DescribeAccountsResponse } from "./DescribeAccounts/res";
import { DescribeDiagnosisDimensionsRequest } from "./DescribeDiagnosisDimensions/req";
import { DescribeDiagnosisDimensionsResponse } from "./DescribeDiagnosisDimensions/res";
import { ModifyAccountDescriptionRequest } from "./ModifyAccountDescription/req";
import { ModifyAccountDescriptionResponse } from "./ModifyAccountDescription/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { DescribeDataShareInstancesRequest } from "./DescribeDataShareInstances/req";
import { DescribeDataShareInstancesResponse } from "./DescribeDataShareInstances/res";
import { DescribeDataSharePerformanceRequest } from "./DescribeDataSharePerformance/req";
import { DescribeDataSharePerformanceResponse } from "./DescribeDataSharePerformance/res";
import { SetDataShareInstanceRequest } from "./SetDataShareInstance/req";
import { SetDataShareInstanceResponse } from "./SetDataShareInstance/res";
import { DescribeDiagnosisSQLInfoRequest } from "./DescribeDiagnosisSQLInfo/req";
import { DescribeDiagnosisSQLInfoResponse } from "./DescribeDiagnosisSQLInfo/res";
import { DescribeDBInstanceIndexUsageRequest } from "./DescribeDBInstanceIndexUsage/req";
import { DescribeDBInstanceIndexUsageResponse } from "./DescribeDBInstanceIndexUsage/res";
import { DescribeDBInstanceDataBloatRequest } from "./DescribeDBInstanceDataBloat/req";
import { DescribeDBInstanceDataBloatResponse } from "./DescribeDBInstanceDataBloat/res";
import { DescribeDBInstanceDataSkewRequest } from "./DescribeDBInstanceDataSkew/req";
import { DescribeDBInstanceDataSkewResponse } from "./DescribeDBInstanceDataSkew/res";
import { DescribeDiagnosisRecordsRequest } from "./DescribeDiagnosisRecords/req";
import { DescribeDiagnosisRecordsResponse } from "./DescribeDiagnosisRecords/res";
import { DescribeDBInstanceDiagnosisSummaryRequest } from "./DescribeDBInstanceDiagnosisSummary/req";
import { DescribeDBInstanceDiagnosisSummaryResponse } from "./DescribeDBInstanceDiagnosisSummary/res";
import { DownloadDiagnosisRecordsRequest } from "./DownloadDiagnosisRecords/req";
import { DownloadDiagnosisRecordsResponse } from "./DownloadDiagnosisRecords/res";
import { DescribeDownloadRecordsRequest } from "./DescribeDownloadRecords/req";
import { DescribeDownloadRecordsResponse } from "./DescribeDownloadRecords/res";
import { DescribeDBClusterPerformanceRequest } from "./DescribeDBClusterPerformance/req";
import { DescribeDBClusterPerformanceResponse } from "./DescribeDBClusterPerformance/res";
import { DescribeDBInstancePerformanceRequest } from "./DescribeDBInstancePerformance/req";
import { DescribeDBInstancePerformanceResponse } from "./DescribeDBInstancePerformance/res";
import { DescribeWaitingSQLRecordsRequest } from "./DescribeWaitingSQLRecords/req";
import { DescribeWaitingSQLRecordsResponse } from "./DescribeWaitingSQLRecords/res";
import { DescribeWaitingSQLInfoRequest } from "./DescribeWaitingSQLInfo/req";
import { DescribeWaitingSQLInfoResponse } from "./DescribeWaitingSQLInfo/res";
import { DescribeHealthStatusRequest } from "./DescribeHealthStatus/req";
import { DescribeHealthStatusResponse } from "./DescribeHealthStatus/res";
import { CreateDBInstancePlanRequest } from "./CreateDBInstancePlan/req";
import { CreateDBInstancePlanResponse } from "./CreateDBInstancePlan/res";
import { UpdateDBInstancePlanRequest } from "./UpdateDBInstancePlan/req";
import { UpdateDBInstancePlanResponse } from "./UpdateDBInstancePlan/res";
import { DescribeDBInstancePlansRequest } from "./DescribeDBInstancePlans/req";
import { DescribeDBInstancePlansResponse } from "./DescribeDBInstancePlans/res";
import { SetDBInstancePlanStatusRequest } from "./SetDBInstancePlanStatus/req";
import { SetDBInstancePlanStatusResponse } from "./SetDBInstancePlanStatus/res";
import { DeleteDBInstancePlanRequest } from "./DeleteDBInstancePlan/req";
import { DeleteDBInstancePlanResponse } from "./DeleteDBInstancePlan/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { DescribeDBInstanceIPArrayListRequest } from "./DescribeDBInstanceIPArrayList/req";
import { DescribeDBInstanceIPArrayListResponse } from "./DescribeDBInstanceIPArrayList/res";
import { ModifySecurityIpsRequest } from "./ModifySecurityIps/req";
import { ModifySecurityIpsResponse } from "./ModifySecurityIps/res";
import { CheckServiceLinkedRoleRequest } from "./CheckServiceLinkedRole/req";
import { CheckServiceLinkedRoleResponse } from "./CheckServiceLinkedRole/res";
import { CreateServiceLinkedRoleRequest } from "./CreateServiceLinkedRole/req";
import { CreateServiceLinkedRoleResponse } from "./CreateServiceLinkedRole/res";
import { DescribeDBInstanceSSLRequest } from "./DescribeDBInstanceSSL/req";
import { DescribeDBInstanceSSLResponse } from "./DescribeDBInstanceSSL/res";
import { ModifyDBInstanceSSLRequest } from "./ModifyDBInstanceSSL/req";
import { ModifyDBInstanceSSLResponse } from "./ModifyDBInstanceSSL/res";
import { DescribeUserEncryptionKeyListRequest } from "./DescribeUserEncryptionKeyList/req";
import { DescribeUserEncryptionKeyListResponse } from "./DescribeUserEncryptionKeyList/res";
import { DescribeSQLLogCountRequest } from "./DescribeSQLLogCount/req";
import { DescribeSQLLogCountResponse } from "./DescribeSQLLogCount/res";
import { DescribeSQLLogsV2Request } from "./DescribeSQLLogsV2/req";
import { DescribeSQLLogsV2Response } from "./DescribeSQLLogsV2/res";
import { ModifySQLCollectorPolicyRequest } from "./ModifySQLCollectorPolicy/req";
import { ModifySQLCollectorPolicyResponse } from "./ModifySQLCollectorPolicy/res";
import { DescribeDBInstanceErrorLogRequest } from "./DescribeDBInstanceErrorLog/req";
import { DescribeDBInstanceErrorLogResponse } from "./DescribeDBInstanceErrorLog/res";
import { AllocateInstancePublicConnectionRequest } from "./AllocateInstancePublicConnection/req";
import { AllocateInstancePublicConnectionResponse } from "./AllocateInstancePublicConnection/res";
import { DescribeDBInstanceNetInfoRequest } from "./DescribeDBInstanceNetInfo/req";
import { DescribeDBInstanceNetInfoResponse } from "./DescribeDBInstanceNetInfo/res";
import { ModifyDBInstanceConnectionStringRequest } from "./ModifyDBInstanceConnectionString/req";
import { ModifyDBInstanceConnectionStringResponse } from "./ModifyDBInstanceConnectionString/res";
import { ReleaseInstancePublicConnectionRequest } from "./ReleaseInstancePublicConnection/req";
import { ReleaseInstancePublicConnectionResponse } from "./ReleaseInstancePublicConnection/res";
import { SwitchDBInstanceNetTypeRequest } from "./SwitchDBInstanceNetType/req";
import { SwitchDBInstanceNetTypeResponse } from "./SwitchDBInstanceNetType/res";
import { DescribeRdsVSwitchsRequest } from "./DescribeRdsVSwitchs/req";
import { DescribeRdsVSwitchsResponse } from "./DescribeRdsVSwitchs/res";
import { DescribeRdsVpcsRequest } from "./DescribeRdsVpcs/req";
import { DescribeRdsVpcsResponse } from "./DescribeRdsVpcs/res";
import { CreateSampleDataRequest } from "./CreateSampleData/req";
import { CreateSampleDataResponse } from "./CreateSampleData/res";
import { DescribeSampleDataRequest } from "./DescribeSampleData/req";
import { DescribeSampleDataResponse } from "./DescribeSampleData/res";
import { UnloadSampleDataRequest } from "./UnloadSampleData/req";
import { UnloadSampleDataResponse } from "./UnloadSampleData/res";
import { DescribeSQLLogsRequest } from "./DescribeSQLLogs/req";
import { DescribeSQLLogsResponse } from "./DescribeSQLLogs/res";
import { RebalanceDBInstanceRequest } from "./RebalanceDBInstance/req";
import { RebalanceDBInstanceResponse } from "./RebalanceDBInstance/res";
import { DescribeDiagnosisMonitorPerformanceRequest } from "./DescribeDiagnosisMonitorPerformance/req";
import { DescribeDiagnosisMonitorPerformanceResponse } from "./DescribeDiagnosisMonitorPerformance/res";
import { DescribeDownloadSQLLogsRequest } from "./DescribeDownloadSQLLogs/req";
import { DescribeDownloadSQLLogsResponse } from "./DescribeDownloadSQLLogs/res";
import { DownloadSQLLogsRecordsRequest } from "./DownloadSQLLogsRecords/req";
import { DownloadSQLLogsRecordsResponse } from "./DownloadSQLLogsRecords/res";
import { UpsertCollectionDataRequest } from "./UpsertCollectionData/req";
import { UpsertCollectionDataResponse } from "./UpsertCollectionData/res";
import { QueryCollectionDataRequest } from "./QueryCollectionData/req";
import { QueryCollectionDataResponse } from "./QueryCollectionData/res";
import { CreateNamespaceRequest } from "./CreateNamespace/req";
import { CreateNamespaceResponse } from "./CreateNamespace/res";
import { CreateCollectionRequest } from "./CreateCollection/req";
import { CreateCollectionResponse } from "./CreateCollection/res";
import { DeleteCollectionDataRequest } from "./DeleteCollectionData/req";
import { DeleteCollectionDataResponse } from "./DeleteCollectionData/res";
import { CreateVectorIndexRequest } from "./CreateVectorIndex/req";
import { CreateVectorIndexResponse } from "./CreateVectorIndex/res";
import { DescribeNamespaceRequest } from "./DescribeNamespace/req";
import { DescribeNamespaceResponse } from "./DescribeNamespace/res";
import { DeleteVectorIndexRequest } from "./DeleteVectorIndex/req";
import { DeleteVectorIndexResponse } from "./DeleteVectorIndex/res";
import { ListNamespacesRequest } from "./ListNamespaces/req";
import { ListNamespacesResponse } from "./ListNamespaces/res";
import { ListCollectionsRequest } from "./ListCollections/req";
import { ListCollectionsResponse } from "./ListCollections/res";
import { GrantCollectionRequest } from "./GrantCollection/req";
import { GrantCollectionResponse } from "./GrantCollection/res";
import { DeleteCollectionRequest } from "./DeleteCollection/req";
import { DeleteCollectionResponse } from "./DeleteCollection/res";
import { DeleteNamespaceRequest } from "./DeleteNamespace/req";
import { DeleteNamespaceResponse } from "./DeleteNamespace/res";
import { DescribeCollectionRequest } from "./DescribeCollection/req";
import { DescribeCollectionResponse } from "./DescribeCollection/res";
import { InitVectorDatabaseRequest } from "./InitVectorDatabase/req";
import { InitVectorDatabaseResponse } from "./InitVectorDatabase/res";
import { HandleActiveSQLRecordRequest } from "./HandleActiveSQLRecord/req";
import { HandleActiveSQLRecordResponse } from "./HandleActiveSQLRecord/res";
import { DescribeDBInstanceSupportMaxPerformanceRequest } from "./DescribeDBInstanceSupportMaxPerformance/req";
import { DescribeDBInstanceSupportMaxPerformanceResponse } from "./DescribeDBInstanceSupportMaxPerformance/res";
import { ResetIMVMonitorDataRequest } from "./ResetIMVMonitorData/req";
import { ResetIMVMonitorDataResponse } from "./ResetIMVMonitorData/res";
import { DescribeIMVInfosRequest } from "./DescribeIMVInfos/req";
import { DescribeIMVInfosResponse } from "./DescribeIMVInfos/res";
import { DescribeActiveSQLRecordsRequest } from "./DescribeActiveSQLRecords/req";
import { DescribeActiveSQLRecordsResponse } from "./DescribeActiveSQLRecords/res";
import { UpdateCollectionDataMetadataRequest } from "./UpdateCollectionDataMetadata/req";
import { UpdateCollectionDataMetadataResponse } from "./UpdateCollectionDataMetadata/res";
import { ModifyMasterSpecRequest } from "./ModifyMasterSpec/req";
import { ModifyMasterSpecResponse } from "./ModifyMasterSpec/res";
import { DescribeDBVersionInfosRequest } from "./DescribeDBVersionInfos/req";
import { DescribeDBVersionInfosResponse } from "./DescribeDBVersionInfos/res";
import { DeleteDocumentRequest } from "./DeleteDocument/req";
import { DeleteDocumentResponse } from "./DeleteDocument/res";
import { ListDocumentCollectionsRequest } from "./ListDocumentCollections/req";
import { ListDocumentCollectionsResponse } from "./ListDocumentCollections/res";
import { ListDocumentsRequest } from "./ListDocuments/req";
import { ListDocumentsResponse } from "./ListDocuments/res";
import { DescribeDocumentRequest } from "./DescribeDocument/req";
import { DescribeDocumentResponse } from "./DescribeDocument/res";
import { CreateDocumentCollectionRequest } from "./CreateDocumentCollection/req";
import { CreateDocumentCollectionResponse } from "./CreateDocumentCollection/res";
import { DeleteDocumentCollectionRequest } from "./DeleteDocumentCollection/req";
import { DeleteDocumentCollectionResponse } from "./DeleteDocumentCollection/res";
import { UpsertChunksRequest } from "./UpsertChunks/req";
import { UpsertChunksResponse } from "./UpsertChunks/res";
import { QueryContentRequest } from "./QueryContent/req";
import { QueryContentResponse } from "./QueryContent/res";
import { DeleteJDBCDataSourceRequest } from "./DeleteJDBCDataSource/req";
import { DeleteJDBCDataSourceResponse } from "./DeleteJDBCDataSource/res";
import { ModifyExternalDataServiceRequest } from "./ModifyExternalDataService/req";
import { ModifyExternalDataServiceResponse } from "./ModifyExternalDataService/res";
import { ListExternalDataSourcesRequest } from "./ListExternalDataSources/req";
import { ListExternalDataSourcesResponse } from "./ListExternalDataSources/res";
import { DescribeJDBCDataSourceRequest } from "./DescribeJDBCDataSource/req";
import { DescribeJDBCDataSourceResponse } from "./DescribeJDBCDataSource/res";
import { CreateExternalDataServiceRequest } from "./CreateExternalDataService/req";
import { CreateExternalDataServiceResponse } from "./CreateExternalDataService/res";
import { CheckJDBCSourceNetConnectionRequest } from "./CheckJDBCSourceNetConnection/req";
import { CheckJDBCSourceNetConnectionResponse } from "./CheckJDBCSourceNetConnection/res";
import { ListExternalDataServicesRequest } from "./ListExternalDataServices/req";
import { ListExternalDataServicesResponse } from "./ListExternalDataServices/res";
import { DeleteExternalDataServiceRequest } from "./DeleteExternalDataService/req";
import { DeleteExternalDataServiceResponse } from "./DeleteExternalDataService/res";
import { DescribeHadoopClustersInSameNetRequest } from "./DescribeHadoopClustersInSameNet/req";
import { DescribeHadoopClustersInSameNetResponse } from "./DescribeHadoopClustersInSameNet/res";
import { DescribeExternalDataServiceRequest } from "./DescribeExternalDataService/req";
import { DescribeExternalDataServiceResponse } from "./DescribeExternalDataService/res";
import { ModifyJDBCDataSourceRequest } from "./ModifyJDBCDataSource/req";
import { ModifyJDBCDataSourceResponse } from "./ModifyJDBCDataSource/res";
import { CheckHadoopNetConnectionRequest } from "./CheckHadoopNetConnection/req";
import { CheckHadoopNetConnectionResponse } from "./CheckHadoopNetConnection/res";
import { ListStreamingDataServicesRequest } from "./ListStreamingDataServices/req";
import { ListStreamingDataServicesResponse } from "./ListStreamingDataServices/res";
import { DeleteHadoopDataSourceRequest } from "./DeleteHadoopDataSource/req";
import { DeleteHadoopDataSourceResponse } from "./DeleteHadoopDataSource/res";
import { ListStreamingJobsRequest } from "./ListStreamingJobs/req";
import { ListStreamingJobsResponse } from "./ListStreamingJobs/res";
import { CheckHadoopDataSourceRequest } from "./CheckHadoopDataSource/req";
import { CheckHadoopDataSourceResponse } from "./CheckHadoopDataSource/res";
import { ModifyHadoopDataSourceRequest } from "./ModifyHadoopDataSource/req";
import { ModifyHadoopDataSourceResponse } from "./ModifyHadoopDataSource/res";
import { DescribeHadoopDataSourceRequest } from "./DescribeHadoopDataSource/req";
import { DescribeHadoopDataSourceResponse } from "./DescribeHadoopDataSource/res";
import { DeleteStreamingJobRequest } from "./DeleteStreamingJob/req";
import { DeleteStreamingJobResponse } from "./DeleteStreamingJob/res";
import { CreateJDBCDataSourceRequest } from "./CreateJDBCDataSource/req";
import { CreateJDBCDataSourceResponse } from "./CreateJDBCDataSource/res";
import { DescribeStreamingJobRequest } from "./DescribeStreamingJob/req";
import { DescribeStreamingJobResponse } from "./DescribeStreamingJob/res";
import { CreateStreamingJobRequest } from "./CreateStreamingJob/req";
import { CreateStreamingJobResponse } from "./CreateStreamingJob/res";
import { CreateHadoopDataSourceRequest } from "./CreateHadoopDataSource/req";
import { CreateHadoopDataSourceResponse } from "./CreateHadoopDataSource/res";
import { DescribeStreamingDataServiceRequest } from "./DescribeStreamingDataService/req";
import { DescribeStreamingDataServiceResponse } from "./DescribeStreamingDataService/res";
import { DeleteStreamingDataServiceRequest } from "./DeleteStreamingDataService/req";
import { DeleteStreamingDataServiceResponse } from "./DeleteStreamingDataService/res";
import { DescribeHadoopConfigsRequest } from "./DescribeHadoopConfigs/req";
import { DescribeHadoopConfigsResponse } from "./DescribeHadoopConfigs/res";
import { CreateStreamingDataServiceRequest } from "./CreateStreamingDataService/req";
import { CreateStreamingDataServiceResponse } from "./CreateStreamingDataService/res";
import { ModifyStreamingDataServiceRequest } from "./ModifyStreamingDataService/req";
import { ModifyStreamingDataServiceResponse } from "./ModifyStreamingDataService/res";
import { ListStreamingDataSourcesRequest } from "./ListStreamingDataSources/req";
import { ListStreamingDataSourcesResponse } from "./ListStreamingDataSources/res";
import { ModifyStreamingDataSourceRequest } from "./ModifyStreamingDataSource/req";
import { ModifyStreamingDataSourceResponse } from "./ModifyStreamingDataSource/res";
import { DeleteStreamingDataSourceRequest } from "./DeleteStreamingDataSource/req";
import { DeleteStreamingDataSourceResponse } from "./DeleteStreamingDataSource/res";
import { CreateStreamingDataSourceRequest } from "./CreateStreamingDataSource/req";
import { CreateStreamingDataSourceResponse } from "./CreateStreamingDataSource/res";
import { DescribeStreamingDataSourceRequest } from "./DescribeStreamingDataSource/req";
import { DescribeStreamingDataSourceResponse } from "./DescribeStreamingDataSource/res";
import { ModifyStreamingJobRequest } from "./ModifyStreamingJob/req";
import { ModifyStreamingJobResponse } from "./ModifyStreamingJob/res";
import { DescribeDBResourceManagementModeRequest } from "./DescribeDBResourceManagementMode/req";
import { DescribeDBResourceManagementModeResponse } from "./DescribeDBResourceManagementMode/res";
import { UnbindDBResourceGroupWithRoleRequest } from "./UnbindDBResourceGroupWithRole/req";
import { UnbindDBResourceGroupWithRoleResponse } from "./UnbindDBResourceGroupWithRole/res";
import { CreateDBResourceGroupRequest } from "./CreateDBResourceGroup/req";
import { CreateDBResourceGroupResponse } from "./CreateDBResourceGroup/res";
import { DescribeRolesRequest } from "./DescribeRoles/req";
import { DescribeRolesResponse } from "./DescribeRoles/res";
import { DeleteDBResourceGroupRequest } from "./DeleteDBResourceGroup/req";
import { DeleteDBResourceGroupResponse } from "./DeleteDBResourceGroup/res";
import { ModifyDBResourceGroupRequest } from "./ModifyDBResourceGroup/req";
import { ModifyDBResourceGroupResponse } from "./ModifyDBResourceGroup/res";
import { BindDBResourceGroupWithRoleRequest } from "./BindDBResourceGroupWithRole/req";
import { BindDBResourceGroupWithRoleResponse } from "./BindDBResourceGroupWithRole/res";
import { DescribeDBResourceGroupRequest } from "./DescribeDBResourceGroup/req";
import { DescribeDBResourceGroupResponse } from "./DescribeDBResourceGroup/res";
import { DisableDBResourceGroupRequest } from "./DisableDBResourceGroup/req";
import { DisableDBResourceGroupResponse } from "./DisableDBResourceGroup/res";
import { EnableDBResourceGroupRequest } from "./EnableDBResourceGroup/req";
import { EnableDBResourceGroupResponse } from "./EnableDBResourceGroup/res";
import { UpsertCollectionDataAsyncRequest } from "./UpsertCollectionDataAsync/req";
import { UpsertCollectionDataAsyncResponse } from "./UpsertCollectionDataAsync/res";
import { CancelUpsertCollectionDataJobRequest } from "./CancelUpsertCollectionDataJob/req";
import { CancelUpsertCollectionDataJobResponse } from "./CancelUpsertCollectionDataJob/res";
import { GetUpsertCollectionDataJobRequest } from "./GetUpsertCollectionDataJob/req";
import { GetUpsertCollectionDataJobResponse } from "./GetUpsertCollectionDataJob/res";
import { CancelUploadDocumentJobRequest } from "./CancelUploadDocumentJob/req";
import { CancelUploadDocumentJobResponse } from "./CancelUploadDocumentJob/res";
import { GetUploadDocumentJobRequest } from "./GetUploadDocumentJob/req";
import { GetUploadDocumentJobResponse } from "./GetUploadDocumentJob/res";
import { UploadDocumentAsyncRequest } from "./UploadDocumentAsync/req";
import { UploadDocumentAsyncResponse } from "./UploadDocumentAsync/res";
import { DeleteExtensionRequest } from "./DeleteExtension/req";
import { DeleteExtensionResponse } from "./DeleteExtension/res";
import { CreateExtensionsRequest } from "./CreateExtensions/req";
import { CreateExtensionsResponse } from "./CreateExtensions/res";
import { ListInstanceExtensionsRequest } from "./ListInstanceExtensions/req";
import { ListInstanceExtensionsResponse } from "./ListInstanceExtensions/res";
import { UpgradeExtensionsRequest } from "./UpgradeExtensions/req";
import { UpgradeExtensionsResponse } from "./UpgradeExtensions/res";
import { ResumeDataRedistributeRequest } from "./ResumeDataRedistribute/req";
import { ResumeDataRedistributeResponse } from "./ResumeDataRedistribute/res";
import { PauseDataRedistributeRequest } from "./PauseDataRedistribute/req";
import { PauseDataRedistributeResponse } from "./PauseDataRedistribute/res";

interface GPDB {
    /**
     * 创建AnalyticDB PostgreSQL版实例。
     */
    CreateDBInstance(query: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse>;
    /**
     * 释放按量付费的AnalyticDB PostgreSQL版实例。
     */
    DeleteDBInstance(query: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse>;
    /**
     * 查询存储弹性模式6.0版实例在节点扩缩容过程中，数据重分布的进度。
     */
    DescribeDataReDistributeInfo(query: DescribeDataReDistributeInfoRequest): Promise<DescribeDataReDistributeInfoResponse>;
    /**
     * 查询AnalyticDB PostgreSQL版实例详情。
     */
    DescribeDBInstanceAttribute(query: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 查询AnalyticDB PostgreSQL版实例中的节点信息。
     */
    DescribeDBClusterNode(query: DescribeDBClusterNodeRequest): Promise<DescribeDBClusterNodeResponse>;
    /**
     * 查询AnalyticDB PostgreSQL版数据库实例列表。
     */
    DescribeDBInstances(query: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse>;
    /**
     * 查询创建AnalyticDB PostgreSQL版实例时用户可选的地域和可用区。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 修改AnalyticDB PostgreSQL版实例的备注。
     */
    ModifyDBInstanceDescription(query: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse>;
    /**
     * 修改AnalyticDB PostgreSQL版实例的可维护时间。
     */
    ModifyDBInstanceMaintainTime(query: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse>;
    /**
     * 将AnalyticDB PostgreSQL版实例移动到指定资源组。
     */
    ModifyDBInstanceResourceGroup(query: ModifyDBInstanceResourceGroupRequest): Promise<ModifyDBInstanceResourceGroupResponse>;
    /**
     * 修改实例向量引擎优化配置。
     */
    ModifyVectorConfiguration(query: ModifyVectorConfigurationRequest): Promise<ModifyVectorConfigurationResponse>;
    /**
     * 重启AnalyticDB PostgreSQL版实例。
     */
    RestartDBInstance(query: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse>;
    /**
     * 变更AnalyticDB PostgreSQL版实例的规格。
     */
    UpgradeDBInstance(query: UpgradeDBInstanceRequest): Promise<UpgradeDBInstanceResponse>;
    /**
     * 为指定AnalyticDB PostgreSQL版实例升级内核小版本。
     */
    UpgradeDBVersion(query: UpgradeDBVersionRequest): Promise<UpgradeDBVersionResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的参数修改历史。
     */
    DescribeModifyParameterLog(query: DescribeModifyParameterLogRequest): Promise<DescribeModifyParameterLogResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版的可用售卖资源。
     */
    DescribeAvailableResources(query: DescribeAvailableResourcesRequest): Promise<DescribeAvailableResourcesResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的配置参数信息。
     */
    DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
     * 修改AnalyticDB PostgreSQL版实例的配置参数。
     */
    ModifyParameters(query: ModifyParametersRequest): Promise<ModifyParametersResponse>;
    /**
     * 设置AnalyticDB PostgreSQL版实例的备份策略。
     */
    ModifyBackupPolicy(query: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse>;
    /**
     * 查看AnalyticDB PostgreSQL版实例的数据备份列表和可恢复点。
     */
    DescribeDataBackups(query: DescribeDataBackupsRequest): Promise<DescribeDataBackupsResponse>;
    /**
     * 查看AnalyticDB PostgreSQL版实例的备份策略。
     */
    DescribeBackupPolicy(query: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse>;
    /**
     * 查看日志备份列表。
     */
    DescribeLogBackups(query: DescribeLogBackupsRequest): Promise<DescribeLogBackupsResponse>;
    /**
     * 启动AnalyticDB PostgreSQL版实例。
     */
    ResumeInstance(query: ResumeInstanceRequest): Promise<ResumeInstanceResponse>;
    /**
     * 暂停AnalyticDB PostgreSQL版实例。
     */
    PauseInstance(query: PauseInstanceRequest): Promise<PauseInstanceResponse>;
    /**
     * 查询当前AnalyticDB PostgreSQL版实例支持的功能特性。
     */
    DescribeSupportFeatures(query: DescribeSupportFeaturesRequest): Promise<DescribeSupportFeaturesResponse>;
    /**
     * 修改AnalyticDB PostgreSQL版Serverless自动调度模式实例的计算资源阈值和空闲释放等待时长。
     */
    ModifyDBInstanceConfig(query: ModifyDBInstanceConfigRequest): Promise<ModifyDBInstanceConfigResponse>;
    /**
     * 创建AnalyticDB PostgreSQL版实例的初始账号。
     */
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * 查询AnalyticDB PostgreSQL版数据库的账号信息。
     */
    DescribeAccounts(query: DescribeAccountsRequest): Promise<DescribeAccountsResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例中所有数据库和用户。
     */
    DescribeDiagnosisDimensions(query: DescribeDiagnosisDimensionsRequest): Promise<DescribeDiagnosisDimensionsResponse>;
    /**
     * 修改数据库账号的备注信息。
     */
    ModifyAccountDescription(query: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 重置账户密码。
     */
    ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
     * 查看数据共享的状态。
     */
    DescribeDataShareInstances(query: DescribeDataShareInstancesRequest): Promise<DescribeDataShareInstancesResponse>;
    /**
     * 查看数据共享的性能指标。
     */
    DescribeDataSharePerformance(query: DescribeDataSharePerformanceRequest): Promise<DescribeDataSharePerformanceResponse>;
    /**
     * 将AnalyticDB PostgreSQL版实例加入数据共享或从数据共享中移除。
     */
    SetDataShareInstance(query: SetDataShareInstanceRequest): Promise<SetDataShareInstanceResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例中指定查询语句的详细信息。
     */
    DescribeDiagnosisSQLInfo(query: DescribeDiagnosisSQLInfoRequest): Promise<DescribeDiagnosisSQLInfoResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例中索引的使用情况。
     */
    DescribeDBInstanceIndexUsage(query: DescribeDBInstanceIndexUsageRequest): Promise<DescribeDBInstanceIndexUsageResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的数据膨胀情况。
     */
    DescribeDBInstanceDataBloat(query: DescribeDBInstanceDataBloatRequest): Promise<DescribeDBInstanceDataBloatResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的数据倾斜情况。
     */
    DescribeDBInstanceDataSkew(query: DescribeDBInstanceDataSkewRequest): Promise<DescribeDBInstanceDataSkewResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例SQL查询列表。
     */
    DescribeDiagnosisRecords(query: DescribeDiagnosisRecordsRequest): Promise<DescribeDiagnosisRecordsResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的节点详情。
     */
    DescribeDBInstanceDiagnosisSummary(query: DescribeDBInstanceDiagnosisSummaryRequest): Promise<DescribeDBInstanceDiagnosisSummaryResponse>;
    /**
     * 下载AnalyticDB PostgreSQL的实例的查询诊断记录。
     */
    DownloadDiagnosisRecords(query: DownloadDiagnosisRecordsRequest): Promise<DownloadDiagnosisRecordsResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版查询诊断信息的下载记录。
     */
    DescribeDownloadRecords(query: DescribeDownloadRecordsRequest): Promise<DescribeDownloadRecordsResponse>;
    /**
     * 查看AnalyticDB PostgreSQL版实例在指定时间段的性能监控。
     */
    DescribeDBClusterPerformance(query: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse>;
    /**
     * 查看某个AnalyticDB PostgreSQL存储预留模式实例在某个时间段内指定性能参数的性能监控数据。
     */
    DescribeDBInstancePerformance(query: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例锁诊断列表。
     */
    DescribeWaitingSQLRecords(query: DescribeWaitingSQLRecordsRequest): Promise<DescribeWaitingSQLRecordsResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例锁等待详情信息。
     */
    DescribeWaitingSQLInfo(query: DescribeWaitingSQLInfoRequest): Promise<DescribeWaitingSQLInfoResponse>;
    /**
     * 查看实例和节点的健康状态。
     */
    DescribeHealthStatus(query: DescribeHealthStatusRequest): Promise<DescribeHealthStatusResponse>;
    /**
     * 创建定时计划。
     */
    CreateDBInstancePlan(query: CreateDBInstancePlanRequest): Promise<CreateDBInstancePlanResponse>;
    /**
     * 修改AnalyticDB PostgreSQL版的定时计划。
     */
    UpdateDBInstancePlan(query: UpdateDBInstancePlanRequest): Promise<UpdateDBInstancePlanResponse>;
    /**
     * 查看AnalyticDB PostgreSQL版实例的计划详情。
     */
    DescribeDBInstancePlans(query: DescribeDBInstancePlansRequest): Promise<DescribeDBInstancePlansResponse>;
    /**
     * 启用或禁用AnalyticDB PostgreSQL版实例的计划。
     */
    SetDBInstancePlanStatus(query: SetDBInstancePlanStatusRequest): Promise<SetDBInstancePlanStatusResponse>;
    /**
     * 删除AnalyticDB PostgreSQL版实例的计划。
     */
    DeleteDBInstancePlan(query: DeleteDBInstancePlanRequest): Promise<DeleteDBInstancePlanResponse>;
    /**
     * 创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询一个或多个AnalyticDB PostgreSQL实例已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为指定的AnalyticDB PostgreSQL实例列表统一解绑标签。解绑后，如果该标签没有绑定其他任何实例，会被自动删除。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询AnalyticDB PostgreSQL版实例的标签列表。
     */
    DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
     * 查询允许访问AnalyticDB PostgreSQL版实例的IP白名单。
     */
    DescribeDBInstanceIPArrayList(query: DescribeDBInstanceIPArrayListRequest): Promise<DescribeDBInstanceIPArrayListResponse>;
    /**
     * 修改AnalyticDB PostgreSQL版实例的IP白名单。
     */
    ModifySecurityIps(query: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse>;
    /**
     * 检查是否创建了服务关联角色。
     */
    CheckServiceLinkedRole(query: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse>;
    /**
     * 创建服务关联角色（SLR）。
     */
    CreateServiceLinkedRole(query: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的SSL信息。
     */
    DescribeDBInstanceSSL(query: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse>;
    /**
     * 开启、关闭或更新SSL加密。
     */
    ModifyDBInstanceSSL(query: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse>;
    /**
     * 获取用户开通的KMS密钥列表。
     */
    DescribeUserEncryptionKeyList(query: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的审计日志数量。
     */
    DescribeSQLLogCount(query: DescribeSQLLogCountRequest): Promise<DescribeSQLLogCountResponse>;
    /**
     * 调用DescribeSQLLogs接口查询指定时间段的SQL执行记录。
     */
    DescribeSQLLogsV2(query: DescribeSQLLogsV2Request): Promise<DescribeSQLLogsV2Response>;
    /**
     * 开启或关闭指定实例的SQL洞察功能。
     */
    ModifySQLCollectorPolicy(query: ModifySQLCollectorPolicyRequest): Promise<ModifySQLCollectorPolicyResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版实例的错误日志。
     */
    DescribeDBInstanceErrorLog(query: DescribeDBInstanceErrorLogRequest): Promise<DescribeDBInstanceErrorLogResponse>;
    /**
     * 分配实例外网链接地址。
     */
    AllocateInstancePublicConnection(query: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse>;
    /**
     * 查询实例的连接信息。
     */
    DescribeDBInstanceNetInfo(query: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse>;
    /**
     * 修改AnalyticDB PostgreSQL版实例的连接地址。
     */
    ModifyDBInstanceConnectionString(query: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse>;
    /**
     * 释放AnalyticDB PostgreSQL版的外网地址。
     */
    ReleaseInstancePublicConnection(query: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse>;
    /**
     * 切换AnalyticDB PostgreSQL版实例的内外网地址。
     */
    SwitchDBInstanceNetType(query: SwitchDBInstanceNetTypeRequest): Promise<SwitchDBInstanceNetTypeResponse>;
    /**
     * 获取虚拟交换机（vSwitch）列表。
     */
    DescribeRdsVSwitchs(query: DescribeRdsVSwitchsRequest): Promise<DescribeRdsVSwitchsResponse>;
    /**
     * 获取VPC列表。
     */
    DescribeRdsVpcs(query: DescribeRdsVpcsRequest): Promise<DescribeRdsVpcsResponse>;
    /**
     * 为AnalyticDB PostgreSQL版实例创建样本数据集。
     */
    CreateSampleData(query: CreateSampleDataRequest): Promise<CreateSampleDataResponse>;
    /**
     * 查询AnalyticDB PostgreSQL版实例中是否加载了样本数据集。
     */
    DescribeSampleData(query: DescribeSampleDataRequest): Promise<DescribeSampleDataResponse>;
    /**
     * 释放AnalyticDB PostgreSQL版的样本数据集。
     */
    UnloadSampleData(query: UnloadSampleDataRequest): Promise<UnloadSampleDataResponse>;
    /**
     * 查询SQL执行记录。
     */
    DescribeSQLLogs(query: DescribeSQLLogsRequest): Promise<DescribeSQLLogsResponse>;
    /**
     * 对AnalyticDB PostgreSQL版实例进行部署平衡。
     */
    RebalanceDBInstance(query: RebalanceDBInstanceRequest): Promise<RebalanceDBInstanceResponse>;
    /**
     * 本接口用于查看指定时间段的AnalyticDB PostgreSQL版存储弹性模式实例的SQL执行信息。
     */
    DescribeDiagnosisMonitorPerformance(query: DescribeDiagnosisMonitorPerformanceRequest): Promise<DescribeDiagnosisMonitorPerformanceResponse>;
    /**
     * 获取AnalyticDB PostgreSQL版慢查询信息的最近五条下载记录。
     */
    DescribeDownloadSQLLogs(query: DescribeDownloadSQLLogsRequest): Promise<DescribeDownloadSQLLogsResponse>;
    /**
     * 下载AnalyticDB PostgreSQL的实例的慢SQL记录。
     */
    DownloadSQLLogsRecords(query: DownloadSQLLogsRecordsRequest): Promise<DownloadSQLLogsRecordsResponse>;
    /**
     * 上传向量数据到指定的向量集中。
     */
    UpsertCollectionData(query: UpsertCollectionDataRequest): Promise<UpsertCollectionDataResponse>;
    /**
     * 召回向量数据。
     */
    QueryCollectionData(query: QueryCollectionDataRequest): Promise<QueryCollectionDataResponse>;
    /**
     * 创建向量数据的命名空间。
     */
    CreateNamespace(query: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
    /**
     * 创建向量数据集。
     */
    CreateCollection(query: CreateCollectionRequest): Promise<CreateCollectionResponse>;
    /**
     * 删除向量数据。
     */
    DeleteCollectionData(query: DeleteCollectionDataRequest): Promise<DeleteCollectionDataResponse>;
    /**
     * 创建向量集的索引。
     */
    CreateVectorIndex(query: CreateVectorIndexRequest): Promise<CreateVectorIndexResponse>;
    /**
     * 查询命名空间信息。
     */
    DescribeNamespace(query: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse>;
    /**
     * 删除向量索引。
     */
    DeleteVectorIndex(query: DeleteVectorIndexRequest): Promise<DeleteVectorIndexResponse>;
    /**
     * 查询命名空间列表。
     */
    ListNamespaces(query: ListNamespacesRequest): Promise<ListNamespacesResponse>;
    /**
     * 查询向量集列表。
     */
    ListCollections(query: ListCollectionsRequest): Promise<ListCollectionsResponse>;
    /**
     * 向量集授权。
     */
    GrantCollection(query: GrantCollectionRequest): Promise<GrantCollectionResponse>;
    /**
     * 删除向量数据集。
     */
    DeleteCollection(query: DeleteCollectionRequest): Promise<DeleteCollectionResponse>;
    /**
     * 删除命名空间。
     */
    DeleteNamespace(query: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;
    /**
     * 查询向量集信息。
     */
    DescribeCollection(query: DescribeCollectionRequest): Promise<DescribeCollectionResponse>;
    /**
     * 初始化向量检索数据库。
     */
    InitVectorDatabase(query: InitVectorDatabaseRequest): Promise<InitVectorDatabaseResponse>;
    /**
     * 处理某个或多个活跃查询。
     */
    HandleActiveSQLRecord(query: HandleActiveSQLRecordRequest): Promise<HandleActiveSQLRecordResponse>;
    /**
     * 查看实例的最大吞吐。
     */
    DescribeDBInstanceSupportMaxPerformance(query: DescribeDBInstanceSupportMaxPerformanceRequest): Promise<DescribeDBInstanceSupportMaxPerformanceResponse>;
    /**
     * 重置IMV统计信息。
     */
    ResetIMVMonitorData(query: ResetIMVMonitorDataRequest): Promise<ResetIMVMonitorDataResponse>;
    /**
     * 查询AnalyticDB PostgreSQL版实例的实时物化视图详情。
     */
    DescribeIMVInfos(query: DescribeIMVInfosRequest): Promise<DescribeIMVInfosResponse>;
    /**
     * 查询活跃SQL记录。
     */
    DescribeActiveSQLRecords(query: DescribeActiveSQLRecordsRequest): Promise<DescribeActiveSQLRecordsResponse>;
    /**
     * 更新向量数据中的Metadata数据。
     */
    UpdateCollectionDataMetadata(query: UpdateCollectionDataMetadataRequest): Promise<UpdateCollectionDataMetadataResponse>;
    /**
     * 变更AnalyticDB PostgreSQL版实例的master资源。
     */
    ModifyMasterSpec(query: ModifyMasterSpecRequest): Promise<ModifyMasterSpecResponse>;
    /**
     * 查询内核版本信息。
     */
    DescribeDBVersionInfos(query: DescribeDBVersionInfosRequest): Promise<DescribeDBVersionInfosResponse>;
    /**
     * 删除文档库中的文档。
     */
    DeleteDocument(query: DeleteDocumentRequest): Promise<DeleteDocumentResponse>;
    /**
     * 查询文档库列表。
     */
    ListDocumentCollections(query: ListDocumentCollectionsRequest): Promise<ListDocumentCollectionsResponse>;
    /**
     * 查询文档库中的文档列表。
     */
    ListDocuments(query: ListDocumentsRequest): Promise<ListDocumentsResponse>;
    /**
     * 查看文档详细信息。
     */
    DescribeDocument(query: DescribeDocumentRequest): Promise<DescribeDocumentResponse>;
    /**
     * 创建文档库。
     */
    CreateDocumentCollection(query: CreateDocumentCollectionRequest): Promise<CreateDocumentCollectionResponse>;
    /**
     * 删除文档库。
     */
    DeleteDocumentCollection(query: DeleteDocumentCollectionRequest): Promise<DeleteDocumentCollectionResponse>;
    /**
     * 将切分后的文档列表向量化并上传到文档库。
     */
    UpsertChunks(query: UpsertChunksRequest): Promise<UpsertChunksResponse>;
    /**
     * 用自然语句从指定文档库检索向量和元数据。
     */
    QueryContent(query: QueryContentRequest): Promise<QueryContentResponse>;
    /**
     * 删除jdbc数据源。
     */
    DeleteJDBCDataSource(query: DeleteJDBCDataSourceRequest): Promise<DeleteJDBCDataSourceResponse>;
    /**
     * 修改外部数据服务。
     */
    ModifyExternalDataService(query: ModifyExternalDataServiceRequest): Promise<ModifyExternalDataServiceResponse>;
    /**
     * 获取数据源列表
     */
    ListExternalDataSources(query: ListExternalDataSourcesRequest): Promise<ListExternalDataSourcesResponse>;
    /**
     * 获取jdbc数据源配置信息。
     */
    DescribeJDBCDataSource(query: DescribeJDBCDataSourceRequest): Promise<DescribeJDBCDataSourceResponse>;
    /**
     * 创建外部数据服务。
     */
    CreateExternalDataService(query: CreateExternalDataServiceRequest): Promise<CreateExternalDataServiceResponse>;
    /**
     * 检查jdbc连接串网络连通性。
     */
    CheckJDBCSourceNetConnection(query: CheckJDBCSourceNetConnectionRequest): Promise<CheckJDBCSourceNetConnectionResponse>;
    /**
     * 获取外部数据服务列表
     */
    ListExternalDataServices(query: ListExternalDataServicesRequest): Promise<ListExternalDataServicesResponse>;
    /**
     * 删除外部数据服务。
     */
    DeleteExternalDataService(query: DeleteExternalDataServiceRequest): Promise<DeleteExternalDataServiceResponse>;
    /**
     * 获取同vpc的EMR集群实例
     */
    DescribeHadoopClustersInSameNet(query: DescribeHadoopClustersInSameNetRequest): Promise<DescribeHadoopClustersInSameNetResponse>;
    /**
     * 获取外部数据服务详情
     */
    DescribeExternalDataService(query: DescribeExternalDataServiceRequest): Promise<DescribeExternalDataServiceResponse>;
    /**
     * 修改JDBC数据源配置
     */
    ModifyJDBCDataSource(query: ModifyJDBCDataSourceRequest): Promise<ModifyJDBCDataSourceResponse>;
    /**
     * 检测hadoop外部数据源网络联通性
     */
    CheckHadoopNetConnection(query: CheckHadoopNetConnectionRequest): Promise<CheckHadoopNetConnectionResponse>;
    /**
     * 查询所有实时数据服务信息
     */
    ListStreamingDataServices(query: ListStreamingDataServicesRequest): Promise<ListStreamingDataServicesResponse>;
    /**
     * 删除hadoop外部数据源
     */
    DeleteHadoopDataSource(query: DeleteHadoopDataSourceRequest): Promise<DeleteHadoopDataSourceResponse>;
    /**
     * 查询所有实时数据同步任务
     */
    ListStreamingJobs(query: ListStreamingJobsRequest): Promise<ListStreamingJobsResponse>;
    /**
     * 检查hadoop数据源配置。
     */
    CheckHadoopDataSource(query: CheckHadoopDataSourceRequest): Promise<CheckHadoopDataSourceResponse>;
    /**
     * 修改hadoop数据源配置
     */
    ModifyHadoopDataSource(query: ModifyHadoopDataSourceRequest): Promise<ModifyHadoopDataSourceResponse>;
    /**
     * 获取hadoop数据源配置信息。
     */
    DescribeHadoopDataSource(query: DescribeHadoopDataSourceRequest): Promise<DescribeHadoopDataSourceResponse>;
    /**
     * 删除实时数据同步任务
     */
    DeleteStreamingJob(query: DeleteStreamingJobRequest): Promise<DeleteStreamingJobResponse>;
    /**
     * 创建JDBC数据源
     */
    CreateJDBCDataSource(query: CreateJDBCDataSourceRequest): Promise<CreateJDBCDataSourceResponse>;
    /**
     * 查询实时数据同步服务
     */
    DescribeStreamingJob(query: DescribeStreamingJobRequest): Promise<DescribeStreamingJobResponse>;
    /**
     * 创建实时数据同步任务。
     */
    CreateStreamingJob(query: CreateStreamingJobRequest): Promise<CreateStreamingJobResponse>;
    /**
     * 创建hadoop数据源配置。
     */
    CreateHadoopDataSource(query: CreateHadoopDataSourceRequest): Promise<CreateHadoopDataSourceResponse>;
    /**
     * 查询实时数据服务。
     */
    DescribeStreamingDataService(query: DescribeStreamingDataServiceRequest): Promise<DescribeStreamingDataServiceResponse>;
    /**
     * 删除实时数据服务。
     */
    DeleteStreamingDataService(query: DeleteStreamingDataServiceRequest): Promise<DeleteStreamingDataServiceResponse>;
    /**
     * 获取Hadoop集群配置信息
     */
    DescribeHadoopConfigs(query: DescribeHadoopConfigsRequest): Promise<DescribeHadoopConfigsResponse>;
    /**
     * 创建实时数据服务
     */
    CreateStreamingDataService(query: CreateStreamingDataServiceRequest): Promise<CreateStreamingDataServiceResponse>;
    /**
     * 修改实时数据服务。
     */
    ModifyStreamingDataService(query: ModifyStreamingDataServiceRequest): Promise<ModifyStreamingDataServiceResponse>;
    /**
     * 查询所有实时服务数据源
     */
    ListStreamingDataSources(query: ListStreamingDataSourcesRequest): Promise<ListStreamingDataSourcesResponse>;
    /**
     * 修改实时数据服务数据源
     */
    ModifyStreamingDataSource(query: ModifyStreamingDataSourceRequest): Promise<ModifyStreamingDataSourceResponse>;
    /**
     * 删除实时数据源
     */
    DeleteStreamingDataSource(query: DeleteStreamingDataSourceRequest): Promise<DeleteStreamingDataSourceResponse>;
    /**
     * 创建实时数据源
     */
    CreateStreamingDataSource(query: CreateStreamingDataSourceRequest): Promise<CreateStreamingDataSourceResponse>;
    /**
     * 查询实时数据源
     */
    DescribeStreamingDataSource(query: DescribeStreamingDataSourceRequest): Promise<DescribeStreamingDataSourceResponse>;
    /**
     * 修改实时数据同步任务
     */
    ModifyStreamingJob(query: ModifyStreamingJobRequest): Promise<ModifyStreamingJobResponse>;
    /**
     * 获取实例资源管理模式。
     */
    DescribeDBResourceManagementMode(query: DescribeDBResourceManagementModeRequest): Promise<DescribeDBResourceManagementModeResponse>;
    /**
     * 将资源组与数据库角色解绑。
     */
    UnbindDBResourceGroupWithRole(query: UnbindDBResourceGroupWithRoleRequest): Promise<UnbindDBResourceGroupWithRoleResponse>;
    /**
     * 创建资源组。
     */
    CreateDBResourceGroup(query: CreateDBResourceGroupRequest): Promise<CreateDBResourceGroupResponse>;
    /**
     * 获取角色列表。
     */
    DescribeRoles(query: DescribeRolesRequest): Promise<DescribeRolesResponse>;
    /**
     * 删除资源组。
     */
    DeleteDBResourceGroup(query: DeleteDBResourceGroupRequest): Promise<DeleteDBResourceGroupResponse>;
    /**
     * 修改资源组。
     */
    ModifyDBResourceGroup(query: ModifyDBResourceGroupRequest): Promise<ModifyDBResourceGroupResponse>;
    /**
     * 将资源组与数据库角色进行绑定。
     */
    BindDBResourceGroupWithRole(query: BindDBResourceGroupWithRoleRequest): Promise<BindDBResourceGroupWithRoleResponse>;
    /**
     * 获取资源组详情。
     */
    DescribeDBResourceGroup(query: DescribeDBResourceGroupRequest): Promise<DescribeDBResourceGroupResponse>;
    /**
     * 为AnalyticDB PostgreSQL版存储弹性模式6.0实例关闭资源组管理，关闭后实例的资源管理模式会从资源组切换到资源队列。
     */
    DisableDBResourceGroup(query: DisableDBResourceGroupRequest): Promise<DisableDBResourceGroupResponse>;
    /**
     * 为AnalyticDB PostgreSQL版存储弹性模式6.0实例开启资源组管理，开启后实例的资源管理模式会从资源队列切换到资源组。
     */
    EnableDBResourceGroup(query: EnableDBResourceGroupRequest): Promise<EnableDBResourceGroupResponse>;
    /**
     * 使用本地文件或公网可免密访问的文件链接异步上传向量数据，最大支持200MB。
     */
    UpsertCollectionDataAsync(query: UpsertCollectionDataAsyncRequest): Promise<UpsertCollectionDataAsyncResponse>;
    /**
     * 通过JobId取消异步上传向量数据的任务。
     */
    CancelUpsertCollectionDataJob(query: CancelUpsertCollectionDataJobRequest): Promise<CancelUpsertCollectionDataJobResponse>;
    /**
     * 通过JobId获取异步上传向量数据的任务的进度和结果。
     */
    GetUpsertCollectionDataJob(query: GetUpsertCollectionDataJobRequest): Promise<GetUpsertCollectionDataJobResponse>;
    /**
     * 通过JobId取消异步上传文档的任务。
     */
    CancelUploadDocumentJob(query: CancelUploadDocumentJobRequest): Promise<CancelUploadDocumentJobResponse>;
    /**
     * 通过JobId获取异步上传文档的任务的进度和结果。
     */
    GetUploadDocumentJob(query: GetUploadDocumentJobRequest): Promise<GetUploadDocumentJobResponse>;
    /**
     * 使用本地文件或公网可免密访问的文件链接异步上传文档，服务端对文档做Loader、Chunk、Embedding然后入库，最大支持200MB。
     */
    UploadDocumentAsync(query: UploadDocumentAsyncRequest): Promise<UploadDocumentAsyncResponse>;
    /**
     * 卸载插件
     */
    DeleteExtension(query: DeleteExtensionRequest): Promise<DeleteExtensionResponse>;
    /**
     * 安装插件
     */
    CreateExtensions(query: CreateExtensionsRequest): Promise<CreateExtensionsResponse>;
    /**
     * 获取插件列表
     */
    ListInstanceExtensions(query: ListInstanceExtensionsRequest): Promise<ListInstanceExtensionsResponse>;
    /**
     * 插件升级
     */
    UpgradeExtensions(query: UpgradeExtensionsRequest): Promise<UpgradeExtensionsResponse>;
    /**
     * 恢复数据重分布。
     */
    ResumeDataRedistribute(query: ResumeDataRedistributeRequest): Promise<ResumeDataRedistributeResponse>;
    /**
     * 暂停数据重分布。
     */
    PauseDataRedistribute(query: PauseDataRedistributeRequest): Promise<PauseDataRedistributeResponse>;
}
export default GPDB;
