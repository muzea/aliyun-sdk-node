import { ModifyAdvanceConfigFileRequest } from "./ModifyAdvanceConfigFile/req";
import { ModifyAdvanceConfigFileResponse } from "./ModifyAdvanceConfigFile/res";
import { ModifyNodeConfigRequest } from "./ModifyNodeConfig/req";
import { ModifyNodeConfigResponse } from "./ModifyNodeConfig/res";
import { StopTaskRequest } from "./StopTask/req";
import { StopTaskResponse } from "./StopTask/res";
import { RemoveClusterRequest } from "./RemoveCluster/req";
import { RemoveClusterResponse } from "./RemoveCluster/res";
import { GetDataSourceRequest } from "./GetDataSource/req";
import { GetDataSourceResponse } from "./GetDataSource/res";
import { BuildIndexRequest } from "./BuildIndex/req";
import { BuildIndexResponse } from "./BuildIndex/res";
import { PublishIndexVersionRequest } from "./PublishIndexVersion/req";
import { PublishIndexVersionResponse } from "./PublishIndexVersion/res";
import { UpdateInstanceRequest } from "./UpdateInstance/req";
import { UpdateInstanceResponse } from "./UpdateInstance/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { GetDeployGraphRequest } from "./GetDeployGraph/req";
import { GetDeployGraphResponse } from "./GetDeployGraph/res";
import { ModifyFileRequest } from "./ModifyFile/req";
import { ModifyFileResponse } from "./ModifyFile/res";
import { PublishAdvanceConfigRequest } from "./PublishAdvanceConfig/req";
import { PublishAdvanceConfigResponse } from "./PublishAdvanceConfig/res";
import { DeleteIndexRequest } from "./DeleteIndex/req";
import { DeleteIndexResponse } from "./DeleteIndex/res";
import { GetIndexVersionRequest } from "./GetIndexVersion/req";
import { GetIndexVersionResponse } from "./GetIndexVersion/res";
import { ModifyIndexVersionRequest } from "./ModifyIndexVersion/req";
import { ModifyIndexVersionResponse } from "./ModifyIndexVersion/res";
import { DeleteIndexVersionRequest } from "./DeleteIndexVersion/req";
import { DeleteIndexVersionResponse } from "./DeleteIndexVersion/res";
import { GetClusterRunTimeInfoRequest } from "./GetClusterRunTimeInfo/req";
import { GetClusterRunTimeInfoResponse } from "./GetClusterRunTimeInfo/res";
import { ForceSwitchRequest } from "./ForceSwitch/req";
import { ForceSwitchResponse } from "./ForceSwitch/res";
import { ListAdvanceConfigsRequest } from "./ListAdvanceConfigs/req";
import { ListAdvanceConfigsResponse } from "./ListAdvanceConfigs/res";
import { ModifyClusterOfflineConfigRequest } from "./ModifyClusterOfflineConfig/req";
import { ModifyClusterOfflineConfigResponse } from "./ModifyClusterOfflineConfig/res";
import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { CreateDataSourceRequest } from "./CreateDataSource/req";
import { CreateDataSourceResponse } from "./CreateDataSource/res";
import { ModifyClusterDescRequest } from "./ModifyClusterDesc/req";
import { ModifyClusterDescResponse } from "./ModifyClusterDesc/res";
import { ListClusterTasksRequest } from "./ListClusterTasks/req";
import { ListClusterTasksResponse } from "./ListClusterTasks/res";
import { GetNodeConfigRequest } from "./GetNodeConfig/req";
import { GetNodeConfigResponse } from "./GetNodeConfig/res";
import { ModifyPasswordRequest } from "./ModifyPassword/req";
import { ModifyPasswordResponse } from "./ModifyPassword/res";
import { ListQueryResultRequest } from "./ListQueryResult/req";
import { ListQueryResultResponse } from "./ListQueryResult/res";
import { ListDataSourcesRequest } from "./ListDataSources/req";
import { ListDataSourcesResponse } from "./ListDataSources/res";
import { ListClustersRequest } from "./ListClusters/req";
import { ListClustersResponse } from "./ListClusters/res";
import { DeleteDataSourceRequest } from "./DeleteDataSource/req";
import { DeleteDataSourceResponse } from "./DeleteDataSource/res";
import { ListIndexesRequest } from "./ListIndexes/req";
import { ListIndexesResponse } from "./ListIndexes/res";
import { GetClusterRequest } from "./GetCluster/req";
import { GetClusterResponse } from "./GetCluster/res";
import { GetFileRequest } from "./GetFile/req";
import { GetFileResponse } from "./GetFile/res";
import { DeleteAdvanceConfigRequest } from "./DeleteAdvanceConfig/req";
import { DeleteAdvanceConfigResponse } from "./DeleteAdvanceConfig/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { GetAdvanceConfigFileRequest } from "./GetAdvanceConfigFile/req";
import { GetAdvanceConfigFileResponse } from "./GetAdvanceConfigFile/res";
import { ListClusterNamesRequest } from "./ListClusterNames/req";
import { ListClusterNamesResponse } from "./ListClusterNames/res";
import { GetAdvanceConfigRequest } from "./GetAdvanceConfig/req";
import { GetAdvanceConfigResponse } from "./GetAdvanceConfig/res";
import { ListDataSourceTasksRequest } from "./ListDataSourceTasks/req";
import { ListDataSourceTasksResponse } from "./ListDataSourceTasks/res";
import { GetIndexRequest } from "./GetIndex/req";
import { GetIndexResponse } from "./GetIndex/res";
import { CreateIndexRequest } from "./CreateIndex/req";
import { CreateIndexResponse } from "./CreateIndex/res";
import { ListAdvanceConfigDirRequest } from "./ListAdvanceConfigDir/req";
import { ListAdvanceConfigDirResponse } from "./ListAdvanceConfigDir/res";
import { ListDataSourceSchemasRequest } from "./ListDataSourceSchemas/req";
import { ListDataSourceSchemasResponse } from "./ListDataSourceSchemas/res";
import { ListInstanceSpecsRequest } from "./ListInstanceSpecs/req";
import { ListInstanceSpecsResponse } from "./ListInstanceSpecs/res";
import { ListOnlineConfigsRequest } from "./ListOnlineConfigs/req";
import { ListOnlineConfigsResponse } from "./ListOnlineConfigs/res";
import { ModifyClusterOnlineConfigRequest } from "./ModifyClusterOnlineConfig/req";
import { ModifyClusterOnlineConfigResponse } from "./ModifyClusterOnlineConfig/res";
import { ModifyOnlineConfigRequest } from "./ModifyOnlineConfig/req";
import { ModifyOnlineConfigResponse } from "./ModifyOnlineConfig/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { CreateSqlInstanceRequest } from "./CreateSqlInstance/req";
import { CreateSqlInstanceResponse } from "./CreateSqlInstance/res";
import { ExecuteSqlInstanceRequest } from "./ExecuteSqlInstance/req";
import { ExecuteSqlInstanceResponse } from "./ExecuteSqlInstance/res";
import { DeleteSqlInstanceRequest } from "./DeleteSqlInstance/req";
import { DeleteSqlInstanceResponse } from "./DeleteSqlInstance/res";
import { GetDatabaseSchemaRequest } from "./GetDatabaseSchema/req";
import { GetDatabaseSchemaResponse } from "./GetDatabaseSchema/res";
import { UpdateSqlInstanceParamsRequest } from "./UpdateSqlInstanceParams/req";
import { UpdateSqlInstanceParamsResponse } from "./UpdateSqlInstanceParams/res";
import { UpdateSqlInstanceNameRequest } from "./UpdateSqlInstanceName/req";
import { UpdateSqlInstanceNameResponse } from "./UpdateSqlInstanceName/res";
import { CloneSqlInstanceRequest } from "./CloneSqlInstance/req";
import { CloneSqlInstanceResponse } from "./CloneSqlInstance/res";
import { GetSqlInstanceRequest } from "./GetSqlInstance/req";
import { GetSqlInstanceResponse } from "./GetSqlInstance/res";
import { RenameFolderRequest } from "./RenameFolder/req";
import { RenameFolderResponse } from "./RenameFolder/res";
import { DeleteFolderRequest } from "./DeleteFolder/req";
import { DeleteFolderResponse } from "./DeleteFolder/res";
import { ListDatabasesRequest } from "./ListDatabases/req";
import { ListDatabasesResponse } from "./ListDatabases/res";
import { UpdateSqlInstanceContentRequest } from "./UpdateSqlInstanceContent/req";
import { UpdateSqlInstanceContentResponse } from "./UpdateSqlInstanceContent/res";
import { CreateFolderRequest } from "./CreateFolder/req";
import { CreateFolderResponse } from "./CreateFolder/res";
import { ModifyIndexPartitionRequest } from "./ModifyIndexPartition/req";
import { ModifyIndexPartitionResponse } from "./ModifyIndexPartition/res";
import { RecoverIndexRequest } from "./RecoverIndex/req";
import { RecoverIndexResponse } from "./RecoverIndex/res";
import { ListDateSourceGenerationsRequest } from "./ListDateSourceGenerations/req";
import { ListDateSourceGenerationsResponse } from "./ListDateSourceGenerations/res";
import { GetDataSourceDeployRequest } from "./GetDataSourceDeploy/req";
import { GetDataSourceDeployResponse } from "./GetDataSourceDeploy/res";
import { ModifyDataSourceDeployRequest } from "./ModifyDataSourceDeploy/req";
import { ModifyDataSourceDeployResponse } from "./ModifyDataSourceDeploy/res";
import { GetIndexOnlineStrategyRequest } from "./GetIndexOnlineStrategy/req";
import { GetIndexOnlineStrategyResponse } from "./GetIndexOnlineStrategy/res";
import { ModifyIndexOnlineStrategyRequest } from "./ModifyIndexOnlineStrategy/req";
import { ModifyIndexOnlineStrategyResponse } from "./ModifyIndexOnlineStrategy/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { CreatePublicUrlRequest } from "./CreatePublicUrl/req";
import { CreatePublicUrlResponse } from "./CreatePublicUrl/res";
import { ListRestQueryResultRequest } from "./ListRestQueryResult/req";
import { ListRestQueryResultResponse } from "./ListRestQueryResult/res";
import { ModifyPublicUrlIpListRequest } from "./ModifyPublicUrlIpList/req";
import { ModifyPublicUrlIpListResponse } from "./ModifyPublicUrlIpList/res";
import { DeletePublicUrlRequest } from "./DeletePublicUrl/req";
import { DeletePublicUrlResponse } from "./DeletePublicUrl/res";
import { ModifyAdvanceConfigRequest } from "./ModifyAdvanceConfig/req";
import { ModifyAdvanceConfigResponse } from "./ModifyAdvanceConfig/res";
import { ModifyPausePolicyRequest } from "./ModifyPausePolicy/req";
import { ModifyPausePolicyResponse } from "./ModifyPausePolicy/res";
import { ListPausePolicysRequest } from "./ListPausePolicys/req";
import { ListPausePolicysResponse } from "./ListPausePolicys/res";
import { ListSchemasRequest } from "./ListSchemas/req";
import { ListSchemasResponse } from "./ListSchemas/res";
import { StartIndexRequest } from "./StartIndex/req";
import { StartIndexResponse } from "./StartIndex/res";
import { StopIndexRequest } from "./StopIndex/req";
import { StopIndexResponse } from "./StopIndex/res";
import { ModifyIndexRequest } from "./ModifyIndex/req";
import { ModifyIndexResponse } from "./ModifyIndex/res";
import { DeleteConfigDirRequest } from "./DeleteConfigDir/req";
import { DeleteConfigDirResponse } from "./DeleteConfigDir/res";
import { CreateConfigFileRequest } from "./CreateConfigFile/req";
import { CreateConfigFileResponse } from "./CreateConfigFile/res";
import { CreateConfigDirRequest } from "./CreateConfigDir/req";
import { CreateConfigDirResponse } from "./CreateConfigDir/res";
import { DeleteConfigFileRequest } from "./DeleteConfigFile/req";
import { DeleteConfigFileResponse } from "./DeleteConfigFile/res";
import { ListVectorQueryResultRequest } from "./ListVectorQueryResult/req";
import { ListVectorQueryResultResponse } from "./ListVectorQueryResult/res";
import { ListPostQueryResultRequest } from "./ListPostQueryResult/req";
import { ListPostQueryResultResponse } from "./ListPostQueryResult/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { PushDocumentsRequest } from "./PushDocuments/req";
import { PushDocumentsResponse } from "./PushDocuments/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { GetTableGenerationRequest } from "./GetTableGeneration/req";
import { GetTableGenerationResponse } from "./GetTableGeneration/res";
import { ReindexRequest } from "./Reindex/req";
import { ReindexResponse } from "./Reindex/res";
import { CreateTableRequest } from "./CreateTable/req";
import { CreateTableResponse } from "./CreateTable/res";
import { GetTableRequest } from "./GetTable/req";
import { GetTableResponse } from "./GetTable/res";
import { DeleteTableRequest } from "./DeleteTable/req";
import { DeleteTableResponse } from "./DeleteTable/res";
import { ListTablesRequest } from "./ListTables/req";
import { ListTablesResponse } from "./ListTables/res";
import { ListTableGenerationsRequest } from "./ListTableGenerations/req";
import { ListTableGenerationsResponse } from "./ListTableGenerations/res";
import { ModifyTableRequest } from "./ModifyTable/req";
import { ModifyTableResponse } from "./ModifyTable/res";
import { ListIndexRecoverRecordsRequest } from "./ListIndexRecoverRecords/req";
import { ListIndexRecoverRecordsResponse } from "./ListIndexRecoverRecords/res";
import { ListAliasesRequest } from "./ListAliases/req";
import { ListAliasesResponse } from "./ListAliases/res";
import { ListLogsRequest } from "./ListLogs/req";
import { ListLogsResponse } from "./ListLogs/res";
import { CreateAliasRequest } from "./CreateAlias/req";
import { CreateAliasResponse } from "./CreateAlias/res";
import { DeleteAliasRequest } from "./DeleteAlias/req";
import { DeleteAliasResponse } from "./DeleteAlias/res";
import { ModifyAliasRequest } from "./ModifyAlias/req";
import { ModifyAliasResponse } from "./ModifyAlias/res";

interface SEARCHENGINE {
    /**
     * 修改词典。
     */
    ModifyAdvanceConfigFile(query: ModifyAdvanceConfigFileRequest): Promise<ModifyAdvanceConfigFileResponse>;
    /**
     * 修改节点配置。
     */
    ModifyNodeConfig(query: ModifyNodeConfigRequest): Promise<ModifyNodeConfigResponse>;
    /**
     * 停止fsm任务。
     */
    StopTask(query: StopTaskRequest): Promise<StopTaskResponse>;
    /**
     * 删除某一集群。
     */
    RemoveCluster(query: RemoveClusterRequest): Promise<RemoveClusterResponse>;
    /**
     * 获取某一数据源。
     */
    GetDataSource(query: GetDataSourceRequest): Promise<GetDataSourceResponse>;
    /**
     * 触发索引重建。
     */
    BuildIndex(query: BuildIndexRequest): Promise<BuildIndexResponse>;
    /**
     * 发布索引版本。
     */
    PublishIndexVersion(query: PublishIndexVersionRequest): Promise<PublishIndexVersionResponse>;
    /**
     * 修改指定实例配置。
     */
    UpdateInstance(query: UpdateInstanceRequest): Promise<UpdateInstanceResponse>;
    /**
     * 添加集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 展示部署全局概览。
     */
    GetDeployGraph(query: GetDeployGraphRequest): Promise<GetDeployGraphResponse>;
    /**
     * 修改文件。
     */
    ModifyFile(query: ModifyFileRequest): Promise<ModifyFileResponse>;
    /**
     * 发布高级版本。
     */
    PublishAdvanceConfig(query: PublishAdvanceConfigRequest): Promise<PublishAdvanceConfigResponse>;
    /**
     * 删除索引。
     */
    DeleteIndex(query: DeleteIndexRequest): Promise<DeleteIndexResponse>;
    /**
     * 获取集群可回滚的索引信息。
     */
    GetIndexVersion(query: GetIndexVersionRequest): Promise<GetIndexVersionResponse>;
    /**
     * 修改集群索引版本（索引回滚）。
     */
    ModifyIndexVersion(query: ModifyIndexVersionRequest): Promise<ModifyIndexVersionResponse>;
    /**
     * 删除索引的版本。
     */
    DeleteIndexVersion(query: DeleteIndexVersionRequest): Promise<DeleteIndexVersionResponse>;
    /**
     * 获取集群信息。
     */
    GetClusterRunTimeInfo(query: GetClusterRunTimeInfoRequest): Promise<GetClusterRunTimeInfoResponse>;
    /**
     * 强制切换。
     */
    ForceSwitch(query: ForceSwitchRequest): Promise<ForceSwitchResponse>;
    /**
     * 获取高级配置列表。
     */
    ListAdvanceConfigs(query: ListAdvanceConfigsRequest): Promise<ListAdvanceConfigsResponse>;
    /**
     * 修改集群的配置信息。
     */
    ModifyClusterOfflineConfig(query: ModifyClusterOfflineConfigRequest): Promise<ModifyClusterOfflineConfigResponse>;
    /**
     * 通过指定的实例ID查看实例详情。
     */
    GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
     * 获取实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 创建数据源。
     */
    CreateDataSource(query: CreateDataSourceRequest): Promise<CreateDataSourceResponse>;
    /**
     * 更改集群的描述信息。
     */
    ModifyClusterDesc(query: ModifyClusterDescRequest): Promise<ModifyClusterDescResponse>;
    /**
     * 展示集群任务
     * 。
     */
    ListClusterTasks(query: ListClusterTasksRequest): Promise<ListClusterTasksResponse>;
    /**
     * 获取节点配置信息。
     */
    GetNodeConfig(query: GetNodeConfigRequest): Promise<GetNodeConfigResponse>;
    /**
     * 修改实例的密码。
     */
    ModifyPassword(query: ModifyPasswordRequest): Promise<ModifyPasswordResponse>;
    /**
     * 获取搜索测试结果。
     */
    ListQueryResult(query: ListQueryResultRequest): Promise<ListQueryResultResponse>;
    /**
     * 获取数据源列表。
     */
    ListDataSources(query: ListDataSourcesRequest): Promise<ListDataSourcesResponse>;
    /**
     * 获取集群列表。
     */
    ListClusters(query: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * 删除数据源。
     */
    DeleteDataSource(query: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse>;
    /**
     * 获取索引列表。
     */
    ListIndexes(query: ListIndexesRequest): Promise<ListIndexesResponse>;
    /**
     * 获取某一集群的详细信息。
     */
    GetCluster(query: GetClusterRequest): Promise<GetClusterResponse>;
    /**
     * 查看索引表版本详情。
     */
    GetFile(query: GetFileRequest): Promise<GetFileResponse>;
    /**
     * 删除高级配置的详情。
     */
    DeleteAdvanceConfig(query: DeleteAdvanceConfigRequest): Promise<DeleteAdvanceConfigResponse>;
    /**
     * 删除指定实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 获取词典信息。
     */
    GetAdvanceConfigFile(query: GetAdvanceConfigFileRequest): Promise<GetAdvanceConfigFileResponse>;
    /**
     * 获取集群可选择的名称。
     */
    ListClusterNames(query: ListClusterNamesRequest): Promise<ListClusterNamesResponse>;
    /**
     * 获取词典信息。
     */
    GetAdvanceConfig(query: GetAdvanceConfigRequest): Promise<GetAdvanceConfigResponse>;
    /**
     * 展示数据源任务。
     */
    ListDataSourceTasks(query: ListDataSourceTasksRequest): Promise<ListDataSourceTasksResponse>;
    /**
     * 查看索引表版本详情。
     */
    GetIndex(query: GetIndexRequest): Promise<GetIndexResponse>;
    /**
     * 创建索引信息。
     */
    CreateIndex(query: CreateIndexRequest): Promise<CreateIndexResponse>;
    /**
     * 获取高级配置目录下文件列表。
     */
    ListAdvanceConfigDir(query: ListAdvanceConfigDirRequest): Promise<ListAdvanceConfigDirResponse>;
    /**
     * 获取某一数据源的schema信息。
     */
    ListDataSourceSchemas(query: ListDataSourceSchemasRequest): Promise<ListDataSourceSchemasResponse>;
    /**
     * 获取集群可选择的规格列表。
     */
    ListInstanceSpecs(query: ListInstanceSpecsRequest): Promise<ListInstanceSpecsResponse>;
    /**
     * 获取在线表配置的详情。
     */
    ListOnlineConfigs(query: ListOnlineConfigsRequest): Promise<ListOnlineConfigsResponse>;
    /**
     * 修改集群的在线配置信息。
     */
    ModifyClusterOnlineConfig(query: ModifyClusterOnlineConfigRequest): Promise<ModifyClusterOnlineConfigResponse>;
    /**
     * 修改在线表配置。
     */
    ModifyOnlineConfig(query: ModifyOnlineConfigRequest): Promise<ModifyOnlineConfigResponse>;
    /**
     * 修改资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 创建问天引擎实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 创建SQL实例。
     */
    CreateSqlInstance(query: CreateSqlInstanceRequest): Promise<CreateSqlInstanceResponse>;
    /**
     * 执行SQL实例。
     */
    ExecuteSqlInstance(query: ExecuteSqlInstanceRequest): Promise<ExecuteSqlInstanceResponse>;
    /**
     * 删除SQL实例。
     */
    DeleteSqlInstance(query: DeleteSqlInstanceRequest): Promise<DeleteSqlInstanceResponse>;
    /**
     * 获取数据库schema。
     */
    GetDatabaseSchema(query: GetDatabaseSchemaRequest): Promise<GetDatabaseSchemaResponse>;
    /**
     * 更新SQL实例参数。
     */
    UpdateSqlInstanceParams(query: UpdateSqlInstanceParamsRequest): Promise<UpdateSqlInstanceParamsResponse>;
    /**
     * 更新SQL实例名称。
     */
    UpdateSqlInstanceName(query: UpdateSqlInstanceNameRequest): Promise<UpdateSqlInstanceNameResponse>;
    /**
     * 复制SQL实例。
     */
    CloneSqlInstance(query: CloneSqlInstanceRequest): Promise<CloneSqlInstanceResponse>;
    /**
     * 获取SQL实例信息。
     */
    GetSqlInstance(query: GetSqlInstanceRequest): Promise<GetSqlInstanceResponse>;
    /**
     * 修改目录名称。
     */
    RenameFolder(query: RenameFolderRequest): Promise<RenameFolderResponse>;
    /**
     * 删除目录。
     */
    DeleteFolder(query: DeleteFolderRequest): Promise<DeleteFolderResponse>;
    /**
     * 展示已有数据库。
     */
    ListDatabases(query: ListDatabasesRequest): Promise<ListDatabasesResponse>;
    /**
     * 更新SQL实例内容。
     */
    UpdateSqlInstanceContent(query: UpdateSqlInstanceContentRequest): Promise<UpdateSqlInstanceContentResponse>;
    /**
     * 创建目录。
     */
    CreateFolder(query: CreateFolderRequest): Promise<CreateFolderResponse>;
    /**
     * 快速扩缩列。
     */
    ModifyIndexPartition(query: ModifyIndexPartitionRequest): Promise<ModifyIndexPartitionResponse>;
    /**
     * 从索引中恢复数据。
     */
    RecoverIndex(query: RecoverIndexRequest): Promise<RecoverIndexResponse>;
    /**
     * 获取数据源的历史回流信息。
     */
    ListDateSourceGenerations(query: ListDateSourceGenerationsRequest): Promise<ListDateSourceGenerationsResponse>;
    /**
     * 获取数据源部署信息
     */
    GetDataSourceDeploy(query: GetDataSourceDeployRequest): Promise<GetDataSourceDeployResponse>;
    /**
     * 修改数据源部署信息
     */
    ModifyDataSourceDeploy(query: ModifyDataSourceDeployRequest): Promise<ModifyDataSourceDeployResponse>;
    /**
     * 获取索引在线生效策略。
     */
    GetIndexOnlineStrategy(query: GetIndexOnlineStrategyRequest): Promise<GetIndexOnlineStrategyResponse>;
    /**
     * 修改索引在线策略。
     */
    ModifyIndexOnlineStrategy(query: ModifyIndexOnlineStrategyRequest): Promise<ModifyIndexOnlineStrategyResponse>;
    /**
     * 删标签接口
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 打标签接口
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查标签接口
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 开通公网域名。
     */
    CreatePublicUrl(query: CreatePublicUrlRequest): Promise<CreatePublicUrlResponse>;
    ListRestQueryResult(query: ListRestQueryResultRequest): Promise<ListRestQueryResultResponse>;
    /**
     * 修改公网域名访问白名单
     */
    ModifyPublicUrlIpList(query: ModifyPublicUrlIpListRequest): Promise<ModifyPublicUrlIpListResponse>;
    /**
     * 删除公网域名。
     */
    DeletePublicUrl(query: DeletePublicUrlRequest): Promise<DeletePublicUrlResponse>;
    ModifyAdvanceConfig(query: ModifyAdvanceConfigRequest): Promise<ModifyAdvanceConfigResponse>;
    ModifyPausePolicy(query: ModifyPausePolicyRequest): Promise<ModifyPausePolicyResponse>;
    ListPausePolicys(query: ListPausePolicysRequest): Promise<ListPausePolicysResponse>;
    /**
     * 通过数据源配置获取schema信息
     */
    ListSchemas(query: ListSchemasRequest): Promise<ListSchemasResponse>;
    StartIndex(query: StartIndexRequest): Promise<StartIndexResponse>;
    StopIndex(query: StopIndexRequest): Promise<StopIndexResponse>;
    ModifyIndex(query: ModifyIndexRequest): Promise<ModifyIndexResponse>;
    DeleteConfigDir(query: DeleteConfigDirRequest): Promise<DeleteConfigDirResponse>;
    CreateConfigFile(query: CreateConfigFileRequest): Promise<CreateConfigFileResponse>;
    CreateConfigDir(query: CreateConfigDirRequest): Promise<CreateConfigDirResponse>;
    DeleteConfigFile(query: DeleteConfigFileRequest): Promise<DeleteConfigFileResponse>;
    ListVectorQueryResult(query: ListVectorQueryResultRequest): Promise<ListVectorQueryResultResponse>;
    ListPostQueryResult(query: ListPostQueryResultRequest): Promise<ListPostQueryResultResponse>;
    /**
     * 获取集群任务列表（数据源+集群）
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    PushDocuments(query: PushDocumentsRequest): Promise<PushDocumentsResponse>;
    /**
     * 获取云产品区域列表
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 根据generationId获取某个索引版本状态。
     */
    GetTableGeneration(query: GetTableGenerationRequest): Promise<GetTableGenerationResponse>;
    /**
     * 重建索引。
     */
    Reindex(query: ReindexRequest): Promise<ReindexResponse>;
    /**
     * 创建索引表。
     */
    CreateTable(query: CreateTableRequest): Promise<CreateTableResponse>;
    /**
     * 获取索引表信息。
     */
    GetTable(query: GetTableRequest): Promise<GetTableResponse>;
    /**
     * 删除索引表。
     */
    DeleteTable(query: DeleteTableRequest): Promise<DeleteTableResponse>;
    /**
     * 获取索引列表。
     */
    ListTables(query: ListTablesRequest): Promise<ListTablesResponse>;
    /**
     * 获取索引generation列表。
     */
    ListTableGenerations(query: ListTableGenerationsRequest): Promise<ListTableGenerationsResponse>;
    /**
     * 修改索引表。
     */
    ModifyTable(query: ModifyTableRequest): Promise<ModifyTableResponse>;
    ListIndexRecoverRecords(query: ListIndexRecoverRecordsRequest): Promise<ListIndexRecoverRecordsResponse>;
    ListAliases(query: ListAliasesRequest): Promise<ListAliasesResponse>;
    ListLogs(query: ListLogsRequest): Promise<ListLogsResponse>;
    CreateAlias(query: CreateAliasRequest): Promise<CreateAliasResponse>;
    DeleteAlias(query: DeleteAliasRequest): Promise<DeleteAliasResponse>;
    ModifyAlias(query: ModifyAliasRequest): Promise<ModifyAliasResponse>;
}
export default SEARCHENGINE;
