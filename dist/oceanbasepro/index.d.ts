import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeInstanceTopologyRequest } from "./DescribeInstanceTopology/req";
import { DescribeInstanceTopologyResponse } from "./DescribeInstanceTopology/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { DescribeTenantsRequest } from "./DescribeTenants/req";
import { DescribeTenantsResponse } from "./DescribeTenants/res";
import { DescribeTenantRequest } from "./DescribeTenant/req";
import { DescribeTenantResponse } from "./DescribeTenant/res";
import { CreateTenantRequest } from "./CreateTenant/req";
import { CreateTenantResponse } from "./CreateTenant/res";
import { CreateTenantReadOnlyConnectionRequest } from "./CreateTenantReadOnlyConnection/req";
import { CreateTenantReadOnlyConnectionResponse } from "./CreateTenantReadOnlyConnection/res";
import { ModifyTenantResourceRequest } from "./ModifyTenantResource/req";
import { ModifyTenantResourceResponse } from "./ModifyTenantResource/res";
import { DescribeInstanceCreatableZoneRequest } from "./DescribeInstanceCreatableZone/req";
import { DescribeInstanceCreatableZoneResponse } from "./DescribeInstanceCreatableZone/res";
import { DescribeAvailableMemResourceRequest } from "./DescribeAvailableMemResource/req";
import { DescribeAvailableMemResourceResponse } from "./DescribeAvailableMemResource/res";
import { DescribeAvailableCpuResourceRequest } from "./DescribeAvailableCpuResource/req";
import { DescribeAvailableCpuResourceResponse } from "./DescribeAvailableCpuResource/res";
import { DescribeTimeZonesRequest } from "./DescribeTimeZones/req";
import { DescribeTimeZonesResponse } from "./DescribeTimeZones/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { DescribeCharsetRequest } from "./DescribeCharset/req";
import { DescribeCharsetResponse } from "./DescribeCharset/res";
import { DescribeInstanceTenantModesRequest } from "./DescribeInstanceTenantModes/req";
import { DescribeInstanceTenantModesResponse } from "./DescribeInstanceTenantModes/res";
import { DescribeTenantZonesReadRequest } from "./DescribeTenantZonesRead/req";
import { DescribeTenantZonesReadResponse } from "./DescribeTenantZonesRead/res";
import { ModifyTenantPrimaryZoneRequest } from "./ModifyTenantPrimaryZone/req";
import { ModifyTenantPrimaryZoneResponse } from "./ModifyTenantPrimaryZone/res";
import { DeleteTenantsRequest } from "./DeleteTenants/req";
import { DeleteTenantsResponse } from "./DeleteTenants/res";
import { DescribeTenantUsersRequest } from "./DescribeTenantUsers/req";
import { DescribeTenantUsersResponse } from "./DescribeTenantUsers/res";
import { CreateTenantUserRequest } from "./CreateTenantUser/req";
import { CreateTenantUserResponse } from "./CreateTenantUser/res";
import { DescribeTenantUserRolesRequest } from "./DescribeTenantUserRoles/req";
import { DescribeTenantUserRolesResponse } from "./DescribeTenantUserRoles/res";
import { ModifyTenantUserRolesRequest } from "./ModifyTenantUserRoles/req";
import { ModifyTenantUserRolesResponse } from "./ModifyTenantUserRoles/res";
import { ModifyTenantUserDescriptionRequest } from "./ModifyTenantUserDescription/req";
import { ModifyTenantUserDescriptionResponse } from "./ModifyTenantUserDescription/res";
import { ModifyTenantUserPasswordRequest } from "./ModifyTenantUserPassword/req";
import { ModifyTenantUserPasswordResponse } from "./ModifyTenantUserPassword/res";
import { ModifyTenantUserStatusRequest } from "./ModifyTenantUserStatus/req";
import { ModifyTenantUserStatusResponse } from "./ModifyTenantUserStatus/res";
import { DeleteTenantUsersRequest } from "./DeleteTenantUsers/req";
import { DeleteTenantUsersResponse } from "./DeleteTenantUsers/res";
import { DescribeDatabasesRequest } from "./DescribeDatabases/req";
import { DescribeDatabasesResponse } from "./DescribeDatabases/res";
import { CreateDatabaseRequest } from "./CreateDatabase/req";
import { CreateDatabaseResponse } from "./CreateDatabase/res";
import { ModifyDatabaseUserRolesRequest } from "./ModifyDatabaseUserRoles/req";
import { ModifyDatabaseUserRolesResponse } from "./ModifyDatabaseUserRoles/res";
import { ModifyDatabaseDescriptionRequest } from "./ModifyDatabaseDescription/req";
import { ModifyDatabaseDescriptionResponse } from "./ModifyDatabaseDescription/res";
import { DeleteDatabasesRequest } from "./DeleteDatabases/req";
import { DeleteDatabasesResponse } from "./DeleteDatabases/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { DescribeParametersHistoryRequest } from "./DescribeParametersHistory/req";
import { DescribeParametersHistoryResponse } from "./DescribeParametersHistory/res";
import { ModifyParametersRequest } from "./ModifyParameters/req";
import { ModifyParametersResponse } from "./ModifyParameters/res";
import { DescribeSecurityIpGroupsRequest } from "./DescribeSecurityIpGroups/req";
import { DescribeSecurityIpGroupsResponse } from "./DescribeSecurityIpGroups/res";
import { ModifySecurityIpsRequest } from "./ModifySecurityIps/req";
import { ModifySecurityIpsResponse } from "./ModifySecurityIps/res";
import { CreateSecurityIpGroupRequest } from "./CreateSecurityIpGroup/req";
import { CreateSecurityIpGroupResponse } from "./CreateSecurityIpGroup/res";
import { DeleteSecurityIpGroupRequest } from "./DeleteSecurityIpGroup/req";
import { DeleteSecurityIpGroupResponse } from "./DeleteSecurityIpGroup/res";
import { DescribeNodeMetricsRequest } from "./DescribeNodeMetrics/req";
import { DescribeNodeMetricsResponse } from "./DescribeNodeMetrics/res";
import { DescribeTenantMetricsRequest } from "./DescribeTenantMetrics/req";
import { DescribeTenantMetricsResponse } from "./DescribeTenantMetrics/res";
import { DescribeSQLPlansRequest } from "./DescribeSQLPlans/req";
import { DescribeSQLPlansResponse } from "./DescribeSQLPlans/res";
import { DescribeRecommendIndexRequest } from "./DescribeRecommendIndex/req";
import { DescribeRecommendIndexResponse } from "./DescribeRecommendIndex/res";
import { DescribeOutlineBindingRequest } from "./DescribeOutlineBinding/req";
import { DescribeOutlineBindingResponse } from "./DescribeOutlineBinding/res";
import { DescribeSQLDetailsRequest } from "./DescribeSQLDetails/req";
import { DescribeSQLDetailsResponse } from "./DescribeSQLDetails/res";
import { DescribeSlowSQLHistoryListRequest } from "./DescribeSlowSQLHistoryList/req";
import { DescribeSlowSQLHistoryListResponse } from "./DescribeSlowSQLHistoryList/res";
import { DescribeSlowSQLListRequest } from "./DescribeSlowSQLList/req";
import { DescribeSlowSQLListResponse } from "./DescribeSlowSQLList/res";
import { DescribeTopSQLListRequest } from "./DescribeTopSQLList/req";
import { DescribeTopSQLListResponse } from "./DescribeTopSQLList/res";
import { DescribeSQLHistoryListRequest } from "./DescribeSQLHistoryList/req";
import { DescribeSQLHistoryListResponse } from "./DescribeSQLHistoryList/res";
import { DescribeAnomalySQLListRequest } from "./DescribeAnomalySQLList/req";
import { DescribeAnomalySQLListResponse } from "./DescribeAnomalySQLList/res";
import { DeleteInstancesRequest } from "./DeleteInstances/req";
import { DeleteInstancesResponse } from "./DeleteInstances/res";
import { CreateTagRequest } from "./CreateTag/req";
import { CreateTagResponse } from "./CreateTag/res";
import { CreateTagValueRequest } from "./CreateTagValue/req";
import { CreateTagValueResponse } from "./CreateTagValue/res";
import { DeleteTagRequest } from "./DeleteTag/req";
import { DeleteTagResponse } from "./DeleteTag/res";
import { DeleteTagValueRequest } from "./DeleteTagValue/req";
import { DeleteTagValueResponse } from "./DeleteTagValue/res";
import { DescribeTagValuesRequest } from "./DescribeTagValues/req";
import { DescribeTagValuesResponse } from "./DescribeTagValues/res";
import { ModifyTagNameRequest } from "./ModifyTagName/req";
import { ModifyTagNameResponse } from "./ModifyTagName/res";
import { ModifyTagValueNameRequest } from "./ModifyTagValueName/req";
import { ModifyTagValueNameResponse } from "./ModifyTagValueName/res";
import { DescribeDataBackupSetRequest } from "./DescribeDataBackupSet/req";
import { DescribeDataBackupSetResponse } from "./DescribeDataBackupSet/res";
import { DescribeInstanceSSLRequest } from "./DescribeInstanceSSL/req";
import { DescribeInstanceSSLResponse } from "./DescribeInstanceSSL/res";
import { DescribeTenantEncryptionRequest } from "./DescribeTenantEncryption/req";
import { DescribeTenantEncryptionResponse } from "./DescribeTenantEncryption/res";
import { ModifyTenantEncryptionRequest } from "./ModifyTenantEncryption/req";
import { ModifyTenantEncryptionResponse } from "./ModifyTenantEncryption/res";
import { ModifyInstanceSSLRequest } from "./ModifyInstanceSSL/req";
import { ModifyInstanceSSLResponse } from "./ModifyInstanceSSL/res";
import { KillProcessListRequest } from "./KillProcessList/req";
import { KillProcessListResponse } from "./KillProcessList/res";
import { ModifyInstanceNameRequest } from "./ModifyInstanceName/req";
import { ModifyInstanceNameResponse } from "./ModifyInstanceName/res";
import { DescribeTenantSecurityIpGroupsRequest } from "./DescribeTenantSecurityIpGroups/req";
import { DescribeTenantSecurityIpGroupsResponse } from "./DescribeTenantSecurityIpGroups/res";
import { DeleteTenantSecurityIpGroupRequest } from "./DeleteTenantSecurityIpGroup/req";
import { DeleteTenantSecurityIpGroupResponse } from "./DeleteTenantSecurityIpGroup/res";
import { ModifyTenantSecurityIpGroupRequest } from "./ModifyTenantSecurityIpGroup/req";
import { ModifyTenantSecurityIpGroupResponse } from "./ModifyTenantSecurityIpGroup/res";
import { CreateTenantSecurityIpGroupRequest } from "./CreateTenantSecurityIpGroup/req";
import { CreateTenantSecurityIpGroupResponse } from "./CreateTenantSecurityIpGroup/res";
import { ModifyInstanceSpecRequest } from "./ModifyInstanceSpec/req";
import { ModifyInstanceSpecResponse } from "./ModifyInstanceSpec/res";
import { ModifyInstanceNodeNumRequest } from "./ModifyInstanceNodeNum/req";
import { ModifyInstanceNodeNumResponse } from "./ModifyInstanceNodeNum/res";
import { CreateOmsMysqlDataSourceRequest } from "./CreateOmsMysqlDataSource/req";
import { CreateOmsMysqlDataSourceResponse } from "./CreateOmsMysqlDataSource/res";
import { DescribeMetricsDataRequest } from "./DescribeMetricsData/req";
import { DescribeMetricsDataResponse } from "./DescribeMetricsData/res";
import { CreateBackupSetDownloadLinkRequest } from "./CreateBackupSetDownloadLink/req";
import { CreateBackupSetDownloadLinkResponse } from "./CreateBackupSetDownloadLink/res";
import { DescribeInstanceTagsRequest } from "./DescribeInstanceTags/req";
import { DescribeInstanceTagsResponse } from "./DescribeInstanceTags/res";
import { ModifyInstanceTagsRequest } from "./ModifyInstanceTags/req";
import { ModifyInstanceTagsResponse } from "./ModifyInstanceTags/res";
import { DescribeTenantTagsRequest } from "./DescribeTenantTags/req";
import { DescribeTenantTagsResponse } from "./DescribeTenantTags/res";
import { ModifyTenantTagsRequest } from "./ModifyTenantTags/req";
import { ModifyTenantTagsResponse } from "./ModifyTenantTags/res";
import { SwitchoverInstanceRequest } from "./SwitchoverInstance/req";
import { SwitchoverInstanceResponse } from "./SwitchoverInstance/res";
import { DescribeOasSQLPlansRequest } from "./DescribeOasSQLPlans/req";
import { DescribeOasSQLPlansResponse } from "./DescribeOasSQLPlans/res";
import { DescribeOasSQLDetailsRequest } from "./DescribeOasSQLDetails/req";
import { DescribeOasSQLDetailsResponse } from "./DescribeOasSQLDetails/res";
import { DescribeOasTopSQLListRequest } from "./DescribeOasTopSQLList/req";
import { DescribeOasTopSQLListResponse } from "./DescribeOasTopSQLList/res";
import { DescribeOasAnomalySQLListRequest } from "./DescribeOasAnomalySQLList/req";
import { DescribeOasAnomalySQLListResponse } from "./DescribeOasAnomalySQLList/res";
import { DescribeSQLSamplesRequest } from "./DescribeSQLSamples/req";
import { DescribeSQLSamplesResponse } from "./DescribeSQLSamples/res";
import { DescribeOasSQLHistoryListRequest } from "./DescribeOasSQLHistoryList/req";
import { DescribeOasSQLHistoryListResponse } from "./DescribeOasSQLHistoryList/res";
import { DescribeOasSlowSQLListRequest } from "./DescribeOasSlowSQLList/req";
import { DescribeOasSlowSQLListResponse } from "./DescribeOasSlowSQLList/res";
import { DescribeInstanceSecurityConfigsRequest } from "./DescribeInstanceSecurityConfigs/req";
import { DescribeInstanceSecurityConfigsResponse } from "./DescribeInstanceSecurityConfigs/res";
import { DescribeTenantSecurityConfigsRequest } from "./DescribeTenantSecurityConfigs/req";
import { DescribeTenantSecurityConfigsResponse } from "./DescribeTenantSecurityConfigs/res";
import { ModifyInstanceTemporaryCapacityRequest } from "./ModifyInstanceTemporaryCapacity/req";
import { ModifyInstanceTemporaryCapacityResponse } from "./ModifyInstanceTemporaryCapacity/res";
import { StartProjectsByLabelRequest } from "./StartProjectsByLabel/req";
import { StartProjectsByLabelResponse } from "./StartProjectsByLabel/res";
import { ListProjectFullVerifyResultRequest } from "./ListProjectFullVerifyResult/req";
import { ListProjectFullVerifyResultResponse } from "./ListProjectFullVerifyResult/res";
import { StopProjectsByLabelRequest } from "./StopProjectsByLabel/req";
import { StopProjectsByLabelResponse } from "./StopProjectsByLabel/res";
import { DescribeProjectProgressRequest } from "./DescribeProjectProgress/req";
import { DescribeProjectProgressResponse } from "./DescribeProjectProgress/res";
import { DescribeProjectComponentsRequest } from "./DescribeProjectComponents/req";
import { DescribeProjectComponentsResponse } from "./DescribeProjectComponents/res";
import { ListProjectsRequest } from "./ListProjects/req";
import { ListProjectsResponse } from "./ListProjects/res";
import { StopProjectRequest } from "./StopProject/req";
import { StopProjectResponse } from "./StopProject/res";
import { ReleaseProjectRequest } from "./ReleaseProject/req";
import { ReleaseProjectResponse } from "./ReleaseProject/res";
import { StartProjectRequest } from "./StartProject/req";
import { StartProjectResponse } from "./StartProject/res";
import { ResumeProjectRequest } from "./ResumeProject/req";
import { ResumeProjectResponse } from "./ResumeProject/res";
import { DeleteProjectRequest } from "./DeleteProject/req";
import { DeleteProjectResponse } from "./DeleteProject/res";
import { ListDataSourceRequest } from "./ListDataSource/req";
import { ListDataSourceResponse } from "./ListDataSource/res";
import { CreateOceanBaseDataSourceRequest } from "./CreateOceanBaseDataSource/req";
import { CreateOceanBaseDataSourceResponse } from "./CreateOceanBaseDataSource/res";
import { DescribeProjectStepsRequest } from "./DescribeProjectSteps/req";
import { DescribeProjectStepsResponse } from "./DescribeProjectSteps/res";
import { DescribeProjectRequest } from "./DescribeProject/req";
import { DescribeProjectResponse } from "./DescribeProject/res";
import { ListWorkerInstancesRequest } from "./ListWorkerInstances/req";
import { ListWorkerInstancesResponse } from "./ListWorkerInstances/res";
import { CreateLabelRequest } from "./CreateLabel/req";
import { CreateLabelResponse } from "./CreateLabel/res";
import { ListAllLabelsRequest } from "./ListAllLabels/req";
import { ListAllLabelsResponse } from "./ListAllLabels/res";
import { GetUploadOssUrlRequest } from "./GetUploadOssUrl/req";
import { GetUploadOssUrlResponse } from "./GetUploadOssUrl/res";
import { CreateMySqlDataSourceRequest } from "./CreateMySqlDataSource/req";
import { CreateMySqlDataSourceResponse } from "./CreateMySqlDataSource/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { DescribeProjectStepMetricRequest } from "./DescribeProjectStepMetric/req";
import { DescribeProjectStepMetricResponse } from "./DescribeProjectStepMetric/res";
import { DescribeAvailableSpecRequest } from "./DescribeAvailableSpec/req";
import { DescribeAvailableSpecResponse } from "./DescribeAvailableSpec/res";
import { DescribeAvailableZoneRequest } from "./DescribeAvailableZone/req";
import { DescribeAvailableZoneResponse } from "./DescribeAvailableZone/res";
import { DescribeSampleSqlRawTextsRequest } from "./DescribeSampleSqlRawTexts/req";
import { DescribeSampleSqlRawTextsResponse } from "./DescribeSampleSqlRawTexts/res";
import { DescribeProcessStatsCompositionRequest } from "./DescribeProcessStatsComposition/req";
import { DescribeProcessStatsCompositionResponse } from "./DescribeProcessStatsComposition/res";
import { CreateRdsPostgreSQLDataSourceRequest } from "./CreateRdsPostgreSQLDataSource/req";
import { CreateRdsPostgreSQLDataSourceResponse } from "./CreateRdsPostgreSQLDataSource/res";
import { DeleteDataSourceRequest } from "./DeleteDataSource/req";
import { DeleteDataSourceResponse } from "./DeleteDataSource/res";
import { CancelProjectModifyRecordRequest } from "./CancelProjectModifyRecord/req";
import { CancelProjectModifyRecordResponse } from "./CancelProjectModifyRecord/res";
import { StopProjectModifyRecordsRequest } from "./StopProjectModifyRecords/req";
import { StopProjectModifyRecordsResponse } from "./StopProjectModifyRecords/res";
import { ReleaseWorkerInstanceRequest } from "./ReleaseWorkerInstance/req";
import { ReleaseWorkerInstanceResponse } from "./ReleaseWorkerInstance/res";
import { RetryProjectModifyRecordsRequest } from "./RetryProjectModifyRecords/req";
import { RetryProjectModifyRecordsResponse } from "./RetryProjectModifyRecords/res";
import { CreateProjectModifyRecordsRequest } from "./CreateProjectModifyRecords/req";
import { CreateProjectModifyRecordsResponse } from "./CreateProjectModifyRecords/res";
import { ListProjectModifyRecordsRequest } from "./ListProjectModifyRecords/req";
import { ListProjectModifyRecordsResponse } from "./ListProjectModifyRecords/res";
import { DescribeBackupSetDownloadLinkRequest } from "./DescribeBackupSetDownloadLink/req";
import { DescribeBackupSetDownloadLinkResponse } from "./DescribeBackupSetDownloadLink/res";
import { UpdateProjectConfigRequest } from "./UpdateProjectConfig/req";
import { UpdateProjectConfigResponse } from "./UpdateProjectConfig/res";
import { BatchKillProcessListRequest } from "./BatchKillProcessList/req";
import { BatchKillProcessListResponse } from "./BatchKillProcessList/res";
import { DescribeTenantReadableScnRequest } from "./DescribeTenantReadableScn/req";
import { DescribeTenantReadableScnResponse } from "./DescribeTenantReadableScn/res";
import { BatchKillSessionListRequest } from "./BatchKillSessionList/req";
import { BatchKillSessionListResponse } from "./BatchKillSessionList/res";
import { DescribeSessionListRequest } from "./DescribeSessionList/req";
import { DescribeSessionListResponse } from "./DescribeSessionList/res";

interface OCEANBASEPRO {
    /**
     * 查询一个 OceanBase 集群的详细信息。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 查询某个 OceanBase 集群的拓扑信息。
     */
    DescribeInstanceTopology(query: DescribeInstanceTopologyRequest): Promise<DescribeInstanceTopologyResponse>;
    /**
     * 创建一个 OceanBase 数据库集群。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 查询 OceanBase 集群列表信息。
     */
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
     * 查询指定 OceanBase 集群列表下的租户列表信息。
     */
    DescribeTenants(query: DescribeTenantsRequest): Promise<DescribeTenantsResponse>;
    /**
     * 查看指定集群下的指定租户信息。
     */
    DescribeTenant(query: DescribeTenantRequest): Promise<DescribeTenantResponse>;
    /**
     * 创建一个租户。
     */
    CreateTenant(query: CreateTenantRequest): Promise<CreateTenantResponse>;
    /**
     * 为指定租户创建一个只读地址。
     */
    CreateTenantReadOnlyConnection(query: CreateTenantReadOnlyConnectionRequest): Promise<CreateTenantReadOnlyConnectionResponse>;
    /**
     * 修改指定 OceanBase 集群的一个租户的规格。
     */
    ModifyTenantResource(query: ModifyTenantResourceRequest): Promise<ModifyTenantResourceResponse>;
    /**
     * 查询集群可创建主可用区的可用区信息。
     */
    DescribeInstanceCreatableZone(query: DescribeInstanceCreatableZoneRequest): Promise<DescribeInstanceCreatableZoneResponse>;
    /**
     * 查询 OceanBase 租户的内存资源信息。
     */
    DescribeAvailableMemResource(query: DescribeAvailableMemResourceRequest): Promise<DescribeAvailableMemResourceResponse>;
    /**
     * 查询创建租户允许的 CPU 资源信息。
     */
    DescribeAvailableCpuResource(query: DescribeAvailableCpuResourceRequest): Promise<DescribeAvailableCpuResourceResponse>;
    /**
     * 查询 OceanBase 租户的时区信息。
     */
    DescribeTimeZones(query: DescribeTimeZonesRequest): Promise<DescribeTimeZonesResponse>;
    /**
     * 获取一个阿里云地域下可创建集群的可用区信息。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 查询 OceanBase 租户的字符集信息。
     */
    DescribeCharset(query: DescribeCharsetRequest): Promise<DescribeCharsetResponse>;
    /**
     * 该接口用于查询租户模式列表信息。
     */
    DescribeInstanceTenantModes(query: DescribeInstanceTenantModesRequest): Promise<DescribeInstanceTenantModesResponse>;
    /**
     * 查询租户的只读可用区信息。
     */
    DescribeTenantZonesRead(query: DescribeTenantZonesReadRequest): Promise<DescribeTenantZonesReadResponse>;
    /**
     * 切换租户的主可用区。
     */
    ModifyTenantPrimaryZone(query: ModifyTenantPrimaryZoneRequest): Promise<ModifyTenantPrimaryZoneResponse>;
    /**
     * 删除指定 OceanBase 集群下的一个或多个租户。
     */
    DeleteTenants(query: DeleteTenantsRequest): Promise<DeleteTenantsResponse>;
    /**
     * 查询一个租户下所有数据库访问的账号列表。
     */
    DescribeTenantUsers(query: DescribeTenantUsersRequest): Promise<DescribeTenantUsersResponse>;
    /**
     * 在指定租户下创建一个访问数据库的账号。
     */
    CreateTenantUser(query: CreateTenantUserRequest): Promise<CreateTenantUserResponse>;
    /**
     * 获取普通用户的权限配置信息。
     */
    DescribeTenantUserRoles(query: DescribeTenantUserRolesRequest): Promise<DescribeTenantUserRolesResponse>;
    /**
     * 修改租户下指定账号可访问的数据库权限信息。
     */
    ModifyTenantUserRoles(query: ModifyTenantUserRolesRequest): Promise<ModifyTenantUserRolesResponse>;
    /**
     * 修改租户下指定的数据库账号的备注信息。
     */
    ModifyTenantUserDescription(query: ModifyTenantUserDescriptionRequest): Promise<ModifyTenantUserDescriptionResponse>;
    /**
     * 修改租户下指定的数据库账号的登录密码。
     */
    ModifyTenantUserPassword(query: ModifyTenantUserPasswordRequest): Promise<ModifyTenantUserPasswordResponse>;
    /**
     * 该接口用于锁定或解锁指定的数据库账号。
     */
    ModifyTenantUserStatus(query: ModifyTenantUserStatusRequest): Promise<ModifyTenantUserStatusResponse>;
    /**
     * 删除一个或多个数据库账号列表。
     */
    DeleteTenantUsers(query: DeleteTenantUsersRequest): Promise<DeleteTenantUsersResponse>;
    /**
     * 查询租户下的数据库列表。
     */
    DescribeDatabases(query: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse>;
    /**
     * 在指定租户下创建一个新的数据库。
     */
    CreateDatabase(query: CreateDatabaseRequest): Promise<CreateDatabaseResponse>;
    /**
     * 修改某一数据库的账号权限信息。
     */
    ModifyDatabaseUserRoles(query: ModifyDatabaseUserRolesRequest): Promise<ModifyDatabaseUserRolesResponse>;
    /**
     * 修改数据库的描述信息。
     */
    ModifyDatabaseDescription(query: ModifyDatabaseDescriptionRequest): Promise<ModifyDatabaseDescriptionResponse>;
    /**
     * 删除一个或多个已创建的数据库。
     */
    DeleteDatabases(query: DeleteDatabasesRequest): Promise<DeleteDatabasesResponse>;
    /**
     * 查看参数信息列表。
     */
    DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
     * 查看集群或租户的参数修改历史。
     */
    DescribeParametersHistory(query: DescribeParametersHistoryRequest): Promise<DescribeParametersHistoryResponse>;
    /**
     * 修改集群或租户的参数。
     */
    ModifyParameters(query: ModifyParametersRequest): Promise<ModifyParametersResponse>;
    /**
     * 查看 IP 安全白名单分组列表。
     */
    DescribeSecurityIpGroups(query: DescribeSecurityIpGroupsRequest): Promise<DescribeSecurityIpGroupsResponse>;
    /**
     * 修改分组内的 IP 列表。
     */
    ModifySecurityIps(query: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse>;
    /**
     * 创建一个 IP 白名单组。
     */
    CreateSecurityIpGroup(query: CreateSecurityIpGroupRequest): Promise<CreateSecurityIpGroupResponse>;
    /**
     * 删除 Oceanbase 集群的某个 IP 白名单分组。
     */
    DeleteSecurityIpGroup(query: DeleteSecurityIpGroupRequest): Promise<DeleteSecurityIpGroupResponse>;
    /**
     * 查询一个 OceanBase 节点指标信息。
     */
    DescribeNodeMetrics(query: DescribeNodeMetricsRequest): Promise<DescribeNodeMetricsResponse>;
    /**
     * 查询指定 OceanBase 租户指标信息。
     */
    DescribeTenantMetrics(query: DescribeTenantMetricsRequest): Promise<DescribeTenantMetricsResponse>;
    /**
     * 根据 SQLID 查询诊断系统存储的 SQL 执行计划信息。
     */
    DescribeSQLPlans(query: DescribeSQLPlansRequest): Promise<DescribeSQLPlansResponse>;
    /**
     * 根据 SQLID 查询诊断系统对 SQL 的索引推荐信息。
     */
    DescribeRecommendIndex(query: DescribeRecommendIndexRequest): Promise<DescribeRecommendIndexResponse>;
    /**
     * 根据 SQLID 查询一条 SQL 在数据库中被绑定的 Outline 信息或限流信息。
     */
    DescribeOutlineBinding(query: DescribeOutlineBindingRequest): Promise<DescribeOutlineBindingResponse>;
    /**
     * 根据 SQLID 查询一条 SQL 的 SQL 文本信息。
     */
    DescribeSQLDetails(query: DescribeSQLDetailsRequest): Promise<DescribeSQLDetailsResponse>;
    /**
     * 根据 SQLID 查询一条 SQL 在时间段内的被判定为 Slow SQL 时的执行历史。
     */
    DescribeSlowSQLHistoryList(query: DescribeSlowSQLHistoryListRequest): Promise<DescribeSlowSQLHistoryListResponse>;
    /**
     * 查询慢 SQL 列表。
     */
    DescribeSlowSQLList(query: DescribeSlowSQLListRequest): Promise<DescribeSlowSQLListResponse>;
    /**
     * 查询诊断系统采集到的 SQL 执行性能数据列表。
     */
    DescribeTopSQLList(query: DescribeTopSQLListRequest): Promise<DescribeTopSQLListResponse>;
    /**
     * 根据 SQLID 查询一条 SQL 在时间段内的执行历史。
     */
    DescribeSQLHistoryList(query: DescribeSQLHistoryListRequest): Promise<DescribeSQLHistoryListResponse>;
    /**
     * 查询诊断系统判定认为可能存在性能问题的 SQL 列表。
     */
    DescribeAnomalySQLList(query: DescribeAnomalySQLListRequest): Promise<DescribeAnomalySQLListResponse>;
    /**
     * 调用接口释放 OceanBase 实例。
     */
    DeleteInstances(query: DeleteInstancesRequest): Promise<DeleteInstancesResponse>;
    /**
     * 该接口用于新建标签组。
     */
    CreateTag(query: CreateTagRequest): Promise<CreateTagResponse>;
    /**
     * 该接口用于新建标签。
     */
    CreateTagValue(query: CreateTagValueRequest): Promise<CreateTagValueResponse>;
    /**
     * 该接口用于删除标签组。
     */
    DeleteTag(query: DeleteTagRequest): Promise<DeleteTagResponse>;
    /**
     * 该接口用于删除标签。
     */
    DeleteTagValue(query: DeleteTagValueRequest): Promise<DeleteTagValueResponse>;
    /**
     * 该接口用于查询标签。
     */
    DescribeTagValues(query: DescribeTagValuesRequest): Promise<DescribeTagValuesResponse>;
    /**
     * 该接口用于修改标签组的名称。
     */
    ModifyTagName(query: ModifyTagNameRequest): Promise<ModifyTagNameResponse>;
    /**
     * 该接口用于修改标签名称。
     */
    ModifyTagValueName(query: ModifyTagValueNameRequest): Promise<ModifyTagValueNameResponse>;
    /**
     * 查询 OceanBase 备份集信息。
     */
    DescribeDataBackupSet(query: DescribeDataBackupSetRequest): Promise<DescribeDataBackupSetResponse>;
    /**
     * 该接口用于查询  OceanBase 集群的 SSL 详情。
     */
    DescribeInstanceSSL(query: DescribeInstanceSSLRequest): Promise<DescribeInstanceSSLResponse>;
    /**
     * 该接口用于查询租户加密信息。
     */
    DescribeTenantEncryption(query: DescribeTenantEncryptionRequest): Promise<DescribeTenantEncryptionResponse>;
    /**
     * 租户开启透明加密。
     */
    ModifyTenantEncryption(query: ModifyTenantEncryptionRequest): Promise<ModifyTenantEncryptionResponse>;
    /**
     * 该接口用于修改实例的 SSL 配置。
     */
    ModifyInstanceSSL(query: ModifyInstanceSSLRequest): Promise<ModifyInstanceSSLResponse>;
    /**
     * 关闭指定的会话。
     */
    KillProcessList(query: KillProcessListRequest): Promise<KillProcessListResponse>;
    /**
     * 修改 OceanBase 的集群名称。
     */
    ModifyInstanceName(query: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse>;
    /**
     * 查看租户白名单分组列表。
     */
    DescribeTenantSecurityIpGroups(query: DescribeTenantSecurityIpGroupsRequest): Promise<DescribeTenantSecurityIpGroupsResponse>;
    /**
     * 删除租户白名单分组信息。
     */
    DeleteTenantSecurityIpGroup(query: DeleteTenantSecurityIpGroupRequest): Promise<DeleteTenantSecurityIpGroupResponse>;
    /**
     * 修改租户白名单分组信息。
     */
    ModifyTenantSecurityIpGroup(query: ModifyTenantSecurityIpGroupRequest): Promise<ModifyTenantSecurityIpGroupResponse>;
    /**
     * 创建租户安全白名单信息。
     */
    CreateTenantSecurityIpGroup(query: CreateTenantSecurityIpGroupRequest): Promise<CreateTenantSecurityIpGroupResponse>;
    /**
     * 修改集群规格和存储空间。
     */
    ModifyInstanceSpec(query: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse>;
    /**
     * 修改集群节点个数。
     */
    ModifyInstanceNodeNum(query: ModifyInstanceNodeNumRequest): Promise<ModifyInstanceNodeNumResponse>;
    /**
     * 创建 OMS MySQL 数据源。
     */
    CreateOmsMysqlDataSource(query: CreateOmsMysqlDataSourceRequest): Promise<CreateOmsMysqlDataSourceResponse>;
    /**
     * 该接口用于查询  OceanBase 集群的单维度或者多维度监控指标数据。
     */
    DescribeMetricsData(query: DescribeMetricsDataRequest): Promise<DescribeMetricsDataResponse>;
    /**
     * 创建 OceanBase 备份任务下载链接。
     */
    CreateBackupSetDownloadLink(query: CreateBackupSetDownloadLinkRequest): Promise<CreateBackupSetDownloadLinkResponse>;
    /**
     * 查询集群的标签值。
     */
    DescribeInstanceTags(query: DescribeInstanceTagsRequest): Promise<DescribeInstanceTagsResponse>;
    /**
     * 该接口用于修改集群的标签值。
     */
    ModifyInstanceTags(query: ModifyInstanceTagsRequest): Promise<ModifyInstanceTagsResponse>;
    /**
     * 该接口用于查询租户的标签值。
     */
    DescribeTenantTags(query: DescribeTenantTagsRequest): Promise<DescribeTenantTagsResponse>;
    /**
     * 该接口用于修改租户的标签值。
     */
    ModifyTenantTags(query: ModifyTenantTagsRequest): Promise<ModifyTenantTagsResponse>;
    /**
     * 切换 OceanBase 主备实例。
     */
    SwitchoverInstance(query: SwitchoverInstanceRequest): Promise<SwitchoverInstanceResponse>;
    /**
     * 根据 SQLID 查询诊断系统存储的 SQL 执行计划信息。
     */
    DescribeOasSQLPlans(query: DescribeOasSQLPlansRequest): Promise<DescribeOasSQLPlansResponse>;
    /**
     * 查询 SQL 详细信息，包括 SQL 文本、涉及的表名等信息。
     */
    DescribeOasSQLDetails(query: DescribeOasSQLDetailsRequest): Promise<DescribeOasSQLDetailsResponse>;
    /**
     * 查询诊断系统采集到的 SQL 执行性能数据列表。
     */
    DescribeOasTopSQLList(query: DescribeOasTopSQLListRequest): Promise<DescribeOasTopSQLListResponse>;
    /**
     * 该接口用于查询诊断系统判定可能存在性能问题的 SQL 列表。
     */
    DescribeOasAnomalySQLList(query: DescribeOasAnomalySQLListRequest): Promise<DescribeOasAnomalySQLListResponse>;
    /**
     * 查询慢 SQL 执行明细的采样数据。
     */
    DescribeSQLSamples(query: DescribeSQLSamplesRequest): Promise<DescribeSQLSamplesResponse>;
    /**
     * 查询 SQL 执行历史信息。
     */
    DescribeOasSQLHistoryList(query: DescribeOasSQLHistoryListRequest): Promise<DescribeOasSQLHistoryListResponse>;
    /**
     * 该接口用于查询慢 SQL 列表。
     */
    DescribeOasSlowSQLList(query: DescribeOasSlowSQLListRequest): Promise<DescribeOasSlowSQLListResponse>;
    /**
     * 集群安全配置检测。
     */
    DescribeInstanceSecurityConfigs(query: DescribeInstanceSecurityConfigsRequest): Promise<DescribeInstanceSecurityConfigsResponse>;
    /**
     * 租户安全配置检测。
     */
    DescribeTenantSecurityConfigs(query: DescribeTenantSecurityConfigsRequest): Promise<DescribeTenantSecurityConfigsResponse>;
    /**
     * 修改 OceanBase 集群临时容量。
     */
    ModifyInstanceTemporaryCapacity(query: ModifyInstanceTemporaryCapacityRequest): Promise<ModifyInstanceTemporaryCapacityResponse>;
    /**
     * 本接口用于启动指定标签下，所有处于未启动状态的数据迁移或数据同步项目。
     */
    StartProjectsByLabel(query: StartProjectsByLabelRequest): Promise<StartProjectsByLabelResponse>;
    /**
     * 本接口用于查询数据迁移项目的全量校验结果。
     */
    ListProjectFullVerifyResult(query: ListProjectFullVerifyResultRequest): Promise<ListProjectFullVerifyResultResponse>;
    /**
     * 本接口用于暂停指定标签下，所有处于运行中状态的数据迁移或数据同步项目。
     */
    StopProjectsByLabel(query: StopProjectsByLabelRequest): Promise<StopProjectsByLabelResponse>;
    /**
     * 本接口用于查询数据迁移或数据同步项目的进度信息。
     */
    DescribeProjectProgress(query: DescribeProjectProgressRequest): Promise<DescribeProjectProgressResponse>;
    /**
     * 本接口用于查询数据迁移或数据同步项目的组件信息。
     */
    DescribeProjectComponents(query: DescribeProjectComponentsRequest): Promise<DescribeProjectComponentsResponse>;
    /**
     * 本接口用于数据迁移或数据同步项目列表页面的分页查询。
     */
    ListProjects(query: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * 本接口用于暂停数据迁移或数据同步项目。
     */
    StopProject(query: StopProjectRequest): Promise<StopProjectResponse>;
    /**
     * 本接口用于释放数据迁移或数据同步项目。
     */
    ReleaseProject(query: ReleaseProjectRequest): Promise<ReleaseProjectResponse>;
    /**
     * 本接口用于启动数据迁移或数据同步项目。
     */
    StartProject(query: StartProjectRequest): Promise<StartProjectResponse>;
    /**
     * 本接口用于恢复数据迁移或数据同步项目。
     */
    ResumeProject(query: ResumeProjectRequest): Promise<ResumeProjectResponse>;
    /**
     * 本接口用于删除数据迁移或数据同步项目。
     */
    DeleteProject(query: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    /**
     * 本接口用于查询已创建数据源的列表。
     */
    ListDataSource(query: ListDataSourceRequest): Promise<ListDataSourceResponse>;
    /**
     * 本接口用于创建 OceanBase 数据源。
     */
    CreateOceanBaseDataSource(query: CreateOceanBaseDataSourceRequest): Promise<CreateOceanBaseDataSourceResponse>;
    /**
     * 本接口用于查询数据迁移或数据同步项目运行步骤的详情。
     */
    DescribeProjectSteps(query: DescribeProjectStepsRequest): Promise<DescribeProjectStepsResponse>;
    /**
     * 本接口用于查询数据迁移或数据同步项目的项目详情。
     */
    DescribeProject(query: DescribeProjectRequest): Promise<DescribeProjectResponse>;
    /**
     * 本接口用于查询传输实例列表。
     */
    ListWorkerInstances(query: ListWorkerInstancesRequest): Promise<ListWorkerInstancesResponse>;
    /**
     * 本接口用于创建标签。
     */
    CreateLabel(query: CreateLabelRequest): Promise<CreateLabelResponse>;
    /**
     * 本接口用于查询已创建标签的列表。
     */
    ListAllLabels(query: ListAllLabelsRequest): Promise<ListAllLabelsResponse>;
    /**
     * 本接口用于公有云上传 OSS，获取一个临时上传 URL。
     */
    GetUploadOssUrl(query: GetUploadOssUrlRequest): Promise<GetUploadOssUrlResponse>;
    /**
     * 本接口用于创建 MySQL 数据源。
     */
    CreateMySqlDataSource(query: CreateMySqlDataSourceRequest): Promise<CreateMySqlDataSourceResponse>;
    /**
     * 本接口用于创建数据迁移或数据同步项目。
     */
    CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * 本接口用于查询数据迁移或数据同步项目的运行步骤的指标。
     */
    DescribeProjectStepMetric(query: DescribeProjectStepMetricRequest): Promise<DescribeProjectStepMetricResponse>;
    /**
     * 查询 OceanBase 集群变配页可选配置。
     */
    DescribeAvailableSpec(query: DescribeAvailableSpecRequest): Promise<DescribeAvailableSpecResponse>;
    /**
     * 查询 OceanBase 集群售卖页可选配置。
     */
    DescribeAvailableZone(query: DescribeAvailableZoneRequest): Promise<DescribeAvailableZoneResponse>;
    /**
     * 该接口用于查询采样 SQL 的原始文本。
     */
    DescribeSampleSqlRawTexts(query: DescribeSampleSqlRawTextsRequest): Promise<DescribeSampleSqlRawTextsResponse>;
    /**
     * 该接口用于查询会话信息。
     */
    DescribeProcessStatsComposition(query: DescribeProcessStatsCompositionRequest): Promise<DescribeProcessStatsCompositionResponse>;
    /**
     * 该接口用于创建 RDS PostgreSQL 数据源。
     */
    CreateRdsPostgreSQLDataSource(query: CreateRdsPostgreSQLDataSourceRequest): Promise<CreateRdsPostgreSQLDataSourceResponse>;
    /**
     * 该接口用于删除数据源。
     */
    DeleteDataSource(query: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse>;
    /**
     * 该接口用于根据修改记录的 ID 取消修改操作。
     */
    CancelProjectModifyRecord(query: CancelProjectModifyRecordRequest): Promise<CancelProjectModifyRecordResponse>;
    /**
     * 该接口用于根据修改记录的 ID 终止修改操作。
     */
    StopProjectModifyRecords(query: StopProjectModifyRecordsRequest): Promise<StopProjectModifyRecordsResponse>;
    /**
     * 本接口用于释放传输实例。
     */
    ReleaseWorkerInstance(query: ReleaseWorkerInstanceRequest): Promise<ReleaseWorkerInstanceResponse>;
    /**
     * 该接口用于根据修改记录的 ID 重试修改操作。
     */
    RetryProjectModifyRecords(query: RetryProjectModifyRecordsRequest): Promise<RetryProjectModifyRecordsResponse>;
    /**
     * 该接口用于增加或减少表对象。
     */
    CreateProjectModifyRecords(query: CreateProjectModifyRecordsRequest): Promise<CreateProjectModifyRecordsResponse>;
    /**
     * 该接口用于根据数据迁移或数据同步项目的 ID 查询项目的修改记录。
     */
    ListProjectModifyRecords(query: ListProjectModifyRecordsRequest): Promise<ListProjectModifyRecordsResponse>;
    /**
     * 该接口用于查询 OceanBase 备份设置下载链接。
     */
    DescribeBackupSetDownloadLink(query: DescribeBackupSetDownloadLinkRequest): Promise<DescribeBackupSetDownloadLinkResponse>;
    /**
     * 本接口用于更新数据迁移或数据同步项目的配置。
     */
    UpdateProjectConfig(query: UpdateProjectConfigRequest): Promise<UpdateProjectConfigResponse>;
    /**
     * 该接口为异步执行，用于批量关闭会话，需要用户通过接口 DescribeProcessStatsComposition 二次确认。
     */
    BatchKillProcessList(query: BatchKillProcessListRequest): Promise<BatchKillProcessListResponse>;
    /**
     * 该接口用于查询租户的最大可读位点。
     */
    DescribeTenantReadableScn(query: DescribeTenantReadableScnRequest): Promise<DescribeTenantReadableScnResponse>;
    /**
     * 该接口用于关闭 OceanBase 云服务和业务之间的会话信息。该接口为异步执行，需要用户通过 DescribeSessionList 验证会话是否关闭成功。
     */
    BatchKillSessionList(query: BatchKillSessionListRequest): Promise<BatchKillSessionListResponse>;
    /**
     * 该接口用于展示 OceanBase 云服务和业务之间的会话信息。
     */
    DescribeSessionList(query: DescribeSessionListRequest): Promise<DescribeSessionListResponse>;
}
export default OCEANBASEPRO;
