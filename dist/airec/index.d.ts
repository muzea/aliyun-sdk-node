import { AttachIndexVersionRequest } from "./AttachIndexVersion/req";
import { AttachIndexVersionResponse } from "./AttachIndexVersion/res";
import { AttachDatasetRequest } from "./AttachDataset/req";
import { AttachDatasetResponse } from "./AttachDataset/res";
import { CheckRankingModelReachableRequest } from "./CheckRankingModelReachable/req";
import { CheckRankingModelReachableResponse } from "./CheckRankingModelReachable/res";
import { CloneExperimentRequest } from "./CloneExperiment/req";
import { CloneExperimentResponse } from "./CloneExperiment/res";
import { CreateFilteringAlgorithmRequest } from "./CreateFilteringAlgorithm/req";
import { CreateFilteringAlgorithmResponse } from "./CreateFilteringAlgorithm/res";
import { CreateRankingModelRequest } from "./CreateRankingModel/req";
import { CreateRankingModelResponse } from "./CreateRankingModel/res";
import { CreateRuleRequest } from "./CreateRule/req";
import { CreateRuleResponse } from "./CreateRule/res";
import { CreateSceneRequest } from "./CreateScene/req";
import { CreateSceneResponse } from "./CreateScene/res";
import { DecribeRankingModelRequest } from "./DecribeRankingModel/req";
import { DecribeRankingModelResponse } from "./DecribeRankingModel/res";
import { DeleteDataSetRequest } from "./DeleteDataSet/req";
import { DeleteDataSetResponse } from "./DeleteDataSet/res";
import { DeleteExperimentRequest } from "./DeleteExperiment/req";
import { DeleteExperimentResponse } from "./DeleteExperiment/res";
import { DeleteFilteringAlgorithmRequest } from "./DeleteFilteringAlgorithm/req";
import { DeleteFilteringAlgorithmResponse } from "./DeleteFilteringAlgorithm/res";
import { DeleteRankingModelRequest } from "./DeleteRankingModel/req";
import { DeleteRankingModelResponse } from "./DeleteRankingModel/res";
import { DeleteSceneRequest } from "./DeleteScene/req";
import { DeleteSceneResponse } from "./DeleteScene/res";
import { DescribeBaseExperimentRequest } from "./DescribeBaseExperiment/req";
import { DescribeBaseExperimentResponse } from "./DescribeBaseExperiment/res";
import { DescribeDataSetMessageRequest } from "./DescribeDataSetMessage/req";
import { DescribeDataSetMessageResponse } from "./DescribeDataSetMessage/res";
import { DescribeDefaultAlgorithmsRequest } from "./DescribeDefaultAlgorithms/req";
import { DescribeDefaultAlgorithmsResponse } from "./DescribeDefaultAlgorithms/res";
import { DescribeExperimentEnvRequest } from "./DescribeExperimentEnv/req";
import { DescribeExperimentEnvResponse } from "./DescribeExperimentEnv/res";
import { DescribeExperimentRequest } from "./DescribeExperiment/req";
import { DescribeExperimentResponse } from "./DescribeExperiment/res";
import { DescribeExperimentEnvProgressRequest } from "./DescribeExperimentEnvProgress/req";
import { DescribeExperimentEnvProgressResponse } from "./DescribeExperimentEnvProgress/res";
import { DescribeFilteringAlgorithmRequest } from "./DescribeFilteringAlgorithm/req";
import { DescribeFilteringAlgorithmResponse } from "./DescribeFilteringAlgorithm/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeLatestTaskRequest } from "./DescribeLatestTask/req";
import { DescribeLatestTaskResponse } from "./DescribeLatestTask/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeRuleRequest } from "./DescribeRule/req";
import { DescribeRuleResponse } from "./DescribeRule/res";
import { DescribeSceneRequest } from "./DescribeScene/req";
import { DescribeSceneResponse } from "./DescribeScene/res";
import { DescribeSceneBucketRequest } from "./DescribeSceneBucket/req";
import { DescribeSceneBucketResponse } from "./DescribeSceneBucket/res";
import { DescribeSceneThroughputRequest } from "./DescribeSceneThroughput/req";
import { DescribeSceneThroughputResponse } from "./DescribeSceneThroughput/res";
import { DescribeUserMetricsRequest } from "./DescribeUserMetrics/req";
import { DescribeUserMetricsResponse } from "./DescribeUserMetrics/res";
import { DowngradeInstanceRequest } from "./DowngradeInstance/req";
import { DowngradeInstanceResponse } from "./DowngradeInstance/res";
import { EnableExperimentRequest } from "./EnableExperiment/req";
import { EnableExperimentResponse } from "./EnableExperiment/res";
import { ListDashboardDetailsRequest } from "./ListDashboardDetails/req";
import { ListDashboardDetailsResponse } from "./ListDashboardDetails/res";
import { ListDashboardDetailsFlowsRequest } from "./ListDashboardDetailsFlows/req";
import { ListDashboardDetailsFlowsResponse } from "./ListDashboardDetailsFlows/res";
import { ListDashboardMetricsRequest } from "./ListDashboardMetrics/req";
import { ListDashboardMetricsResponse } from "./ListDashboardMetrics/res";
import { ListDashboardMetricsFlowsRequest } from "./ListDashboardMetricsFlows/req";
import { ListDashboardMetricsFlowsResponse } from "./ListDashboardMetricsFlows/res";
import { ListDataSetRequest } from "./ListDataSet/req";
import { ListDataSetResponse } from "./ListDataSet/res";
import { ListDataSourceRequest } from "./ListDataSource/req";
import { ListDataSourceResponse } from "./ListDataSource/res";
import { ListExperimentsRequest } from "./ListExperiments/req";
import { ListExperimentsResponse } from "./ListExperiments/res";
import { ListFilteringAlgorithmsRequest } from "./ListFilteringAlgorithms/req";
import { ListFilteringAlgorithmsResponse } from "./ListFilteringAlgorithms/res";
import { ListIndexVersionsRequest } from "./ListIndexVersions/req";
import { ListIndexVersionsResponse } from "./ListIndexVersions/res";
import { ListInstanceRequest } from "./ListInstance/req";
import { ListInstanceResponse } from "./ListInstance/res";
import { ListInstanceTaskRequest } from "./ListInstanceTask/req";
import { ListInstanceTaskResponse } from "./ListInstanceTask/res";
import { ListItemsRequest } from "./ListItems/req";
import { ListItemsResponse } from "./ListItems/res";
import { ListRankingModelsRequest } from "./ListRankingModels/req";
import { ListRankingModelsResponse } from "./ListRankingModels/res";
import { ListRuleConditionsRequest } from "./ListRuleConditions/req";
import { ListRuleConditionsResponse } from "./ListRuleConditions/res";
import { ListRuleTasksRequest } from "./ListRuleTasks/req";
import { ListRuleTasksResponse } from "./ListRuleTasks/res";
import { ListRulesRequest } from "./ListRules/req";
import { ListRulesResponse } from "./ListRules/res";
import { ListSceneItemsRequest } from "./ListSceneItems/req";
import { ListSceneItemsResponse } from "./ListSceneItems/res";
import { ListSceneParametersRequest } from "./ListSceneParameters/req";
import { ListSceneParametersResponse } from "./ListSceneParameters/res";
import { ListScenesRequest } from "./ListScenes/req";
import { ListScenesResponse } from "./ListScenes/res";
import { ListUserClustersRequest } from "./ListUserClusters/req";
import { ListUserClustersResponse } from "./ListUserClusters/res";
import { ModifyDataSourceRequest } from "./ModifyDataSource/req";
import { ModifyDataSourceResponse } from "./ModifyDataSource/res";
import { ModifyFilteringAlgorithmMetaRequest } from "./ModifyFilteringAlgorithmMeta/req";
import { ModifyFilteringAlgorithmMetaResponse } from "./ModifyFilteringAlgorithmMeta/res";
import { ModifyInstanceRequest } from "./ModifyInstance/req";
import { ModifyInstanceResponse } from "./ModifyInstance/res";
import { ModifyItemsRequest } from "./ModifyItems/req";
import { ModifyItemsResponse } from "./ModifyItems/res";
import { ModifyRankingModelRequest } from "./ModifyRankingModel/req";
import { ModifyRankingModelResponse } from "./ModifyRankingModel/res";
import { ModifyRuleRequest } from "./ModifyRule/req";
import { ModifyRuleResponse } from "./ModifyRule/res";
import { ModifySceneRequest } from "./ModifyScene/req";
import { ModifySceneResponse } from "./ModifyScene/res";
import { OfflineFilteringAlgorithmRequest } from "./OfflineFilteringAlgorithm/req";
import { OfflineFilteringAlgorithmResponse } from "./OfflineFilteringAlgorithm/res";
import { PublishRuleRequest } from "./PublishRule/req";
import { PublishRuleResponse } from "./PublishRule/res";
import { PushDocumentRequest } from "./PushDocument/req";
import { PushDocumentResponse } from "./PushDocument/res";
import { PushInterventionRequest } from "./PushIntervention/req";
import { PushInterventionResponse } from "./PushIntervention/res";
import { QueryDataMessageRequest } from "./QueryDataMessage/req";
import { QueryDataMessageResponse } from "./QueryDataMessage/res";
import { QueryDataMessageStatisticsRequest } from "./QueryDataMessageStatistics/req";
import { QueryDataMessageStatisticsResponse } from "./QueryDataMessageStatistics/res";
import { QueryRawDataRequest } from "./QueryRawData/req";
import { QueryRawDataResponse } from "./QueryRawData/res";
import { RebuildIndexRequest } from "./RebuildIndex/req";
import { RebuildIndexResponse } from "./RebuildIndex/res";
import { RecommendRequest } from "./Recommend/req";
import { RecommendResponse } from "./Recommend/res";
import { RunInstanceRequest } from "./RunInstance/req";
import { RunInstanceResponse } from "./RunInstance/res";
import { StopDataSetRequest } from "./StopDataSet/req";
import { StopDataSetResponse } from "./StopDataSet/res";
import { UnLockIndexVersionRequest } from "./UnLockIndexVersion/req";
import { UnLockIndexVersionResponse } from "./UnLockIndexVersion/res";
import { UpdateExperimentBasicInfoRequest } from "./UpdateExperimentBasicInfo/req";
import { UpdateExperimentBasicInfoResponse } from "./UpdateExperimentBasicInfo/res";
import { UpdateExperimentConfigRequest } from "./UpdateExperimentConfig/req";
import { UpdateExperimentConfigResponse } from "./UpdateExperimentConfig/res";
import { UpdateExperimentStatusRequest } from "./UpdateExperimentStatus/req";
import { UpdateExperimentStatusResponse } from "./UpdateExperimentStatus/res";
import { UpgradeInstanceRequest } from "./UpgradeInstance/req";
import { UpgradeInstanceResponse } from "./UpgradeInstance/res";
import { ValidateInstanceRequest } from "./ValidateInstance/req";
import { ValidateInstanceResponse } from "./ValidateInstance/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DescribeQuotaRequest } from "./DescribeQuota/req";
import { DescribeQuotaResponse } from "./DescribeQuota/res";
import { DescribeSyncReportDetailRequest } from "./DescribeSyncReportDetail/req";
import { DescribeSyncReportDetailResponse } from "./DescribeSyncReportDetail/res";
import { DescribeSyncReportOutliersRequest } from "./DescribeSyncReportOutliers/req";
import { DescribeSyncReportOutliersResponse } from "./DescribeSyncReportOutliers/res";
import { ListLogsRequest } from "./ListLogs/req";
import { ListLogsResponse } from "./ListLogs/res";
import { QueryExceptionHistoryRequest } from "./QueryExceptionHistory/req";
import { QueryExceptionHistoryResponse } from "./QueryExceptionHistory/res";
import { QuerySingleAggregationReportRequest } from "./QuerySingleAggregationReport/req";
import { QuerySingleAggregationReportResponse } from "./QuerySingleAggregationReport/res";
import { QuerySingleReportRequest } from "./QuerySingleReport/req";
import { QuerySingleReportResponse } from "./QuerySingleReport/res";
import { QuerySyncReportAggregationRequest } from "./QuerySyncReportAggregation/req";
import { QuerySyncReportAggregationResponse } from "./QuerySyncReportAggregation/res";
import { ListMixCategoriesRequest } from "./ListMixCategories/req";
import { ListMixCategoriesResponse } from "./ListMixCategories/res";
import { ListUmengAppkeysRequest } from "./ListUmengAppkeys/req";
import { ListUmengAppkeysResponse } from "./ListUmengAppkeys/res";
import { ModifyOfflineStoragesRequest } from "./ModifyOfflineStorages/req";
import { ModifyOfflineStoragesResponse } from "./ModifyOfflineStorages/res";
import { ListOfflineStoragesRequest } from "./ListOfflineStorages/req";
import { ListOfflineStoragesResponse } from "./ListOfflineStorages/res";
import { DescribeCustomAnalysisTaskRequest } from "./DescribeCustomAnalysisTask/req";
import { DescribeCustomAnalysisTaskResponse } from "./DescribeCustomAnalysisTask/res";
import { CreateCustomAnalysisTaskRequest } from "./CreateCustomAnalysisTask/req";
import { CreateCustomAnalysisTaskResponse } from "./CreateCustomAnalysisTask/res";
import { GetExtraDataSourceRequest } from "./GetExtraDataSource/req";
import { GetExtraDataSourceResponse } from "./GetExtraDataSource/res";
import { GetSampleRequest } from "./GetSample/req";
import { GetSampleResponse } from "./GetSample/res";
import { RunRankingModelTemplateRequest } from "./RunRankingModelTemplate/req";
import { RunRankingModelTemplateResponse } from "./RunRankingModelTemplate/res";
import { CreateSampleFormatConfigRequest } from "./CreateSampleFormatConfig/req";
import { CreateSampleFormatConfigResponse } from "./CreateSampleFormatConfig/res";
import { DeployRankingSystemRequest } from "./DeployRankingSystem/req";
import { DeployRankingSystemResponse } from "./DeployRankingSystem/res";
import { InitComputingResourceRequest } from "./InitComputingResource/req";
import { InitComputingResourceResponse } from "./InitComputingResource/res";
import { RunSampleFormatConfigRequest } from "./RunSampleFormatConfig/req";
import { RunSampleFormatConfigResponse } from "./RunSampleFormatConfig/res";
import { ListSampleFormatConfigsRequest } from "./ListSampleFormatConfigs/req";
import { ListSampleFormatConfigsResponse } from "./ListSampleFormatConfigs/res";
import { VerifyRankingSystemRequest } from "./VerifyRankingSystem/req";
import { VerifyRankingSystemResponse } from "./VerifyRankingSystem/res";
import { RollbackRankingSystemRequest } from "./RollbackRankingSystem/req";
import { RollbackRankingSystemResponse } from "./RollbackRankingSystem/res";
import { DeleteRankingModelVersionRequest } from "./DeleteRankingModelVersion/req";
import { DeleteRankingModelVersionResponse } from "./DeleteRankingModelVersion/res";
import { CloneSampleRequest } from "./CloneSample/req";
import { CloneSampleResponse } from "./CloneSample/res";
import { CreateCustomSampleRequest } from "./CreateCustomSample/req";
import { CreateCustomSampleResponse } from "./CreateCustomSample/res";
import { CreateExtraDataSourceRequest } from "./CreateExtraDataSource/req";
import { CreateExtraDataSourceResponse } from "./CreateExtraDataSource/res";
import { DeleteExtraDataSourceRequest } from "./DeleteExtraDataSource/req";
import { DeleteExtraDataSourceResponse } from "./DeleteExtraDataSource/res";
import { DeleteRankingModelTemplateRequest } from "./DeleteRankingModelTemplate/req";
import { DeleteRankingModelTemplateResponse } from "./DeleteRankingModelTemplate/res";
import { DeleteRankingSystemRequest } from "./DeleteRankingSystem/req";
import { DeleteRankingSystemResponse } from "./DeleteRankingSystem/res";
import { DeleteSampleRequest } from "./DeleteSample/req";
import { DeleteSampleResponse } from "./DeleteSample/res";
import { GenerateSampleRequest } from "./GenerateSample/req";
import { GenerateSampleResponse } from "./GenerateSample/res";
import { GetRankingModelTemplateRequest } from "./GetRankingModelTemplate/req";
import { GetRankingModelTemplateResponse } from "./GetRankingModelTemplate/res";
import { GetRankingModelVersionRequest } from "./GetRankingModelVersion/req";
import { GetRankingModelVersionResponse } from "./GetRankingModelVersion/res";
import { GetRankingSystemRequest } from "./GetRankingSystem/req";
import { GetRankingSystemResponse } from "./GetRankingSystem/res";
import { GetRankingSystemHistoryRequest } from "./GetRankingSystemHistory/req";
import { GetRankingSystemHistoryResponse } from "./GetRankingSystemHistory/res";
import { ListExtraDataSourcesRequest } from "./ListExtraDataSources/req";
import { ListExtraDataSourcesResponse } from "./ListExtraDataSources/res";
import { ListFeatureTablesRequest } from "./ListFeatureTables/req";
import { ListFeatureTablesResponse } from "./ListFeatureTables/res";
import { ListRankingModelTemplatesRequest } from "./ListRankingModelTemplates/req";
import { ListRankingModelTemplatesResponse } from "./ListRankingModelTemplates/res";
import { ListRankingModelVersionsRequest } from "./ListRankingModelVersions/req";
import { ListRankingModelVersionsResponse } from "./ListRankingModelVersions/res";
import { ListRankingSystemHistoriesRequest } from "./ListRankingSystemHistories/req";
import { ListRankingSystemHistoriesResponse } from "./ListRankingSystemHistories/res";
import { ListRankingSystemsRequest } from "./ListRankingSystems/req";
import { ListRankingSystemsResponse } from "./ListRankingSystems/res";
import { ListSamplesRequest } from "./ListSamples/req";
import { ListSamplesResponse } from "./ListSamples/res";
import { ModifyFeatureTableRequest } from "./ModifyFeatureTable/req";
import { ModifyFeatureTableResponse } from "./ModifyFeatureTable/res";
import { ModifyRankingModelTemplateRequest } from "./ModifyRankingModelTemplate/req";
import { ModifyRankingModelTemplateResponse } from "./ModifyRankingModelTemplate/res";
import { ModifyRankingSystemRequest } from "./ModifyRankingSystem/req";
import { ModifyRankingSystemResponse } from "./ModifyRankingSystem/res";
import { ModifySampleRequest } from "./ModifySample/req";
import { ModifySampleResponse } from "./ModifySample/res";
import { RefreshFeatureTableRequest } from "./RefreshFeatureTable/req";
import { RefreshFeatureTableResponse } from "./RefreshFeatureTable/res";
import { CreateRankingModelTemplateRequest } from "./CreateRankingModelTemplate/req";
import { CreateRankingModelTemplateResponse } from "./CreateRankingModelTemplate/res";
import { CreateRankingSystemRequest } from "./CreateRankingSystem/req";
import { CreateRankingSystemResponse } from "./CreateRankingSystem/res";
import { ListDataDiagnoseSampleDetailsRequest } from "./ListDataDiagnoseSampleDetails/req";
import { ListDataDiagnoseSampleDetailsResponse } from "./ListDataDiagnoseSampleDetails/res";
import { ListDataDiagnoseReportsRequest } from "./ListDataDiagnoseReports/req";
import { ListDataDiagnoseReportsResponse } from "./ListDataDiagnoseReports/res";
import { CreateDataDiagnoseTaskRequest } from "./CreateDataDiagnoseTask/req";
import { CreateDataDiagnoseTaskResponse } from "./CreateDataDiagnoseTask/res";
import { GetLatestDataDiagnoseTaskStatusRequest } from "./GetLatestDataDiagnoseTaskStatus/req";
import { GetLatestDataDiagnoseTaskStatusResponse } from "./GetLatestDataDiagnoseTaskStatus/res";
import { CreateUmengTokenRequest } from "./CreateUmengToken/req";
import { CreateUmengTokenResponse } from "./CreateUmengToken/res";
import { DeleteFlowControlTaskRequest } from "./DeleteFlowControlTask/req";
import { DeleteFlowControlTaskResponse } from "./DeleteFlowControlTask/res";
import { ListFlowControlTaskItemReportsRequest } from "./ListFlowControlTaskItemReports/req";
import { ListFlowControlTaskItemReportsResponse } from "./ListFlowControlTaskItemReports/res";
import { ListFlowControlTaskReferenceRequest } from "./ListFlowControlTaskReference/req";
import { ListFlowControlTaskReferenceResponse } from "./ListFlowControlTaskReference/res";
import { PublishFlowControlTaskRequest } from "./PublishFlowControlTask/req";
import { PublishFlowControlTaskResponse } from "./PublishFlowControlTask/res";
import { ListFlowControlTaskInvalidItemsRequest } from "./ListFlowControlTaskInvalidItems/req";
import { ListFlowControlTaskInvalidItemsResponse } from "./ListFlowControlTaskInvalidItems/res";
import { GetFlowControlTaskRequest } from "./GetFlowControlTask/req";
import { GetFlowControlTaskResponse } from "./GetFlowControlTask/res";
import { ListFlowControlTaskItemsRequest } from "./ListFlowControlTaskItems/req";
import { ListFlowControlTaskItemsResponse } from "./ListFlowControlTaskItems/res";
import { ListFlowControlTaskRequest } from "./ListFlowControlTask/req";
import { ListFlowControlTaskResponse } from "./ListFlowControlTask/res";
import { ListFlowControlTaskReportsRequest } from "./ListFlowControlTaskReports/req";
import { ListFlowControlTaskReportsResponse } from "./ListFlowControlTaskReports/res";
import { StopFlowControlTaskRequest } from "./StopFlowControlTask/req";
import { StopFlowControlTaskResponse } from "./StopFlowControlTask/res";
import { ModifyFlowControlTaskRequest } from "./ModifyFlowControlTask/req";
import { ModifyFlowControlTaskResponse } from "./ModifyFlowControlTask/res";
import { CreateFlowControlTaskRequest } from "./CreateFlowControlTask/req";
import { CreateFlowControlTaskResponse } from "./CreateFlowControlTask/res";

interface AIREC {
    /**
     * 把指定版本的索引切换到线上。
     */
    AttachIndexVersion(query: AttachIndexVersionRequest): Promise<AttachIndexVersionResponse>;
    /**
     * 指定实例的指定数据集版本提供在线服务。
     */
    AttachDataset(query: AttachDatasetRequest): Promise<AttachDatasetResponse>;
    /**
     * 测试模型网络联通性。
     */
    CheckRankingModelReachable(query: CheckRankingModelReachableRequest): Promise<CheckRankingModelReachableResponse>;
    /**
     * 克隆实验。
     */
    CloneExperiment(query: CloneExperimentRequest): Promise<CloneExperimentResponse>;
    /**
     * 创建召回表，目前召回表由PAI训练完成导出到odps中，在AIRec中指定ODPS表信息。
     */
    CreateFilteringAlgorithm(query: CreateFilteringAlgorithmRequest): Promise<CreateFilteringAlgorithmResponse>;
    /**
     * 创建模型。
     */
    CreateRankingModel(query: CreateRankingModelRequest): Promise<CreateRankingModelResponse>;
    /**
     * 创建推荐策略运营规则。
     */
    CreateRule(query: CreateRuleRequest): Promise<CreateRuleResponse>;
    /**
     * 校验创建场景的信息。
     */
    CreateScene(query: CreateSceneRequest): Promise<CreateSceneResponse>;
    /**
     * 获取排序模型。
     */
    DecribeRankingModel(query: DecribeRankingModelRequest): Promise<DecribeRankingModelResponse>;
    /**
     * 删除指定实例的指定数据集版本。
     */
    DeleteDataSet(query: DeleteDataSetRequest): Promise<DeleteDataSetResponse>;
    /**
     * 删除一个实验。
     */
    DeleteExperiment(query: DeleteExperimentRequest): Promise<DeleteExperimentResponse>;
    /**
     * 删除指定的召回配置及相关索引表信息。
     */
    DeleteFilteringAlgorithm(query: DeleteFilteringAlgorithmRequest): Promise<DeleteFilteringAlgorithmResponse>;
    /**
     * 删除排序模型。
     */
    DeleteRankingModel(query: DeleteRankingModelRequest): Promise<DeleteRankingModelResponse>;
    /**
     * 删除场景。
     */
    DeleteScene(query: DeleteSceneRequest): Promise<DeleteSceneResponse>;
    /**
     * 获取基础实验。
     */
    DescribeBaseExperiment(query: DescribeBaseExperimentRequest): Promise<DescribeBaseExperimentResponse>;
    /**
     * 获取指定实例的指定数据集版本数据错误详情。
     */
    DescribeDataSetMessage(query: DescribeDataSetMessageRequest): Promise<DescribeDataSetMessageResponse>;
    /**
     * 获取默认算法信息。
     */
    DescribeDefaultAlgorithms(query: DescribeDefaultAlgorithmsRequest): Promise<DescribeDefaultAlgorithmsResponse>;
    /**
     * 查看实验场景信息。
     */
    DescribeExperimentEnv(query: DescribeExperimentEnvRequest): Promise<DescribeExperimentEnvResponse>;
    /**
     * 查看一个实验详情。
     */
    DescribeExperiment(query: DescribeExperimentRequest): Promise<DescribeExperimentResponse>;
    /**
     * 查看实验场景开通状态。
     */
    DescribeExperimentEnvProgress(query: DescribeExperimentEnvProgressRequest): Promise<DescribeExperimentEnvProgressResponse>;
    /**
     * 根据指定召回表ID 获取某个召回配置信息。
     */
    DescribeFilteringAlgorithm(query: DescribeFilteringAlgorithmRequest): Promise<DescribeFilteringAlgorithmResponse>;
    /**
     * 通过指定的实例ID查看实例详情。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 获取最近一次构建的任务。
     */
    DescribeLatestTask(query: DescribeLatestTaskRequest): Promise<DescribeLatestTaskResponse>;
    /**
     * 查询可以使用的阿里云区域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询一个规则的详细信息。
     */
    DescribeRule(query: DescribeRuleRequest): Promise<DescribeRuleResponse>;
    /**
     * 查询场景详情。
     */
    DescribeScene(query: DescribeSceneRequest): Promise<DescribeSceneResponse>;
    /**
     * 查看场景下实验桶分布情况。
     */
    DescribeSceneBucket(query: DescribeSceneBucketRequest): Promise<DescribeSceneBucketResponse>;
    /**
     * 获取场景流量。
     */
    DescribeSceneThroughput(query: DescribeSceneThroughputRequest): Promise<DescribeSceneThroughputResponse>;
    /**
     * 获取用户指标（转化率信息）。
     */
    DescribeUserMetrics(query: DescribeUserMetricsRequest): Promise<DescribeUserMetricsResponse>;
    /**
     * 降低指定实例配额 （Quota）信息。
     */
    DowngradeInstance(query: DowngradeInstanceRequest): Promise<DowngradeInstanceResponse>;
    /**
     * 启用实验功能。
     */
    EnableExperiment(query: EnableExperimentRequest): Promise<EnableExperimentResponse>;
    /**
     * 通过指定条件查询指定实例的细分指标。
     */
    ListDashboardDetails(query: ListDashboardDetailsRequest): Promise<ListDashboardDetailsResponse>;
    /**
     * 通过指定条件查询指定实例的细分流量指标。
     */
    ListDashboardDetailsFlows(query: ListDashboardDetailsFlowsRequest): Promise<ListDashboardDetailsFlowsResponse>;
    /**
     * 查询指定实例的整理仪表盘数据。
     */
    ListDashboardMetrics(query: ListDashboardMetricsRequest): Promise<ListDashboardMetricsResponse>;
    /**
     * 查询指定实例的整理仪表盘流量数据。
     */
    ListDashboardMetricsFlows(query: ListDashboardMetricsFlowsRequest): Promise<ListDashboardMetricsFlowsResponse>;
    /**
     * 获取指定实例的数据集列表。
     */
    ListDataSet(query: ListDataSetRequest): Promise<ListDataSetResponse>;
    /**
     * 获取指定实例的数据源列表信息。
     */
    ListDataSource(query: ListDataSourceRequest): Promise<ListDataSourceResponse>;
    /**
     * 列出实验清单，说明：只展示实验基本信息，不展示算法配置，暂不提供分页功能。
     */
    ListExperiments(query: ListExperimentsRequest): Promise<ListExperimentsResponse>;
    /**
     * 列表显示所有的召回表信息。
     */
    ListFilteringAlgorithms(query: ListFilteringAlgorithmsRequest): Promise<ListFilteringAlgorithmsResponse>;
    /**
     * 根据指定的实例ID，召回表ID获取索引版本列表。目前仅支持显示10条数据（包含3条可以切换的），所以不用翻页，不用过滤。
     */
    ListIndexVersions(query: ListIndexVersionsRequest): Promise<ListIndexVersionsResponse>;
    /**
     * 查询一个或多个实例的详细信息。
     */
    ListInstance(query: ListInstanceRequest): Promise<ListInstanceResponse>;
    /**
     * 查询指定实例的任务列表。
     */
    ListInstanceTask(query: ListInstanceTaskRequest): Promise<ListInstanceTaskResponse>;
    /**
     * 查询实例物品池。
     */
    ListItems(query: ListItemsRequest): Promise<ListItemsResponse>;
    /**
     * 查询模型列表。
     */
    ListRankingModels(query: ListRankingModelsRequest): Promise<ListRankingModelsResponse>;
    /**
     * 查询实例具体的选品规则.。
     */
    ListRuleConditions(query: ListRuleConditionsRequest): Promise<ListRuleConditionsResponse>;
    /**
     * 查询规则的任务状态。
     */
    ListRuleTasks(query: ListRuleTasksRequest): Promise<ListRuleTasksResponse>;
    /**
     * 查询规则列表。
     */
    ListRules(query: ListRulesRequest): Promise<ListRulesResponse>;
    /**
     * 获取预览结果。
     */
    ListSceneItems(query: ListSceneItemsRequest): Promise<ListSceneItemsResponse>;
    /**
     * 获取指定实例全量的渠道和场景信息列表。
     */
    ListSceneParameters(query: ListSceneParametersRequest): Promise<ListSceneParametersResponse>;
    /**
     * 查询场景列表。
     */
    ListScenes(query: ListScenesRequest): Promise<ListScenesResponse>;
    /**
     * 列表显示当前的实例用户cluster。
     */
    ListUserClusters(query: ListUserClustersRequest): Promise<ListUserClustersResponse>;
    /**
     * 修改指定表的数据源信息。
     */
    ModifyDataSource(query: ModifyDataSourceRequest): Promise<ModifyDataSourceResponse>;
    /**
     * 修改召回表的配置。
     */
    ModifyFilteringAlgorithmMeta(query: ModifyFilteringAlgorithmMetaRequest): Promise<ModifyFilteringAlgorithmMetaResponse>;
    /**
     * 修改指定实例配置。
     */
    ModifyInstance(query: ModifyInstanceRequest): Promise<ModifyInstanceResponse>;
    /**
     * 批量操作物品池。
     */
    ModifyItems(query: ModifyItemsRequest): Promise<ModifyItemsResponse>;
    /**
     * 修改模型信息。
     */
    ModifyRankingModel(query: ModifyRankingModelRequest): Promise<ModifyRankingModelResponse>;
    /**
     * 修改规则。
     */
    ModifyRule(query: ModifyRuleRequest): Promise<ModifyRuleResponse>;
    /**
     * 修改场景信息。
     */
    ModifyScene(query: ModifySceneRequest): Promise<ModifySceneResponse>;
    /**
     * 下线召回表。
     */
    OfflineFilteringAlgorithm(query: OfflineFilteringAlgorithmRequest): Promise<OfflineFilteringAlgorithmResponse>;
    /**
     * 发布一个规则。
     */
    PublishRule(query: PublishRuleRequest): Promise<PublishRuleResponse>;
    /**
     * 向指定实例指定表推送文档。
     */
    PushDocument(query: PushDocumentRequest): Promise<PushDocumentResponse>;
    /**
     * 该接口用于向指定实例推送干预数据。
     */
    PushIntervention(query: PushInterventionRequest): Promise<PushInterventionResponse>;
    /**
     * 用户数据表中的更新消息查询。
     */
    QueryDataMessage(query: QueryDataMessageRequest): Promise<QueryDataMessageResponse>;
    /**
     * 用户数据表中的更新消息统计数据查询。
     */
    QueryDataMessageStatistics(query: QueryDataMessageStatisticsRequest): Promise<QueryDataMessageStatisticsResponse>;
    /**
     * 用户数据表中的原始数据查询。
     */
    QueryRawData(query: QueryRawDataRequest): Promise<QueryRawDataResponse>;
    /**
     * 重建索引。
     */
    RebuildIndex(query: RebuildIndexRequest): Promise<RebuildIndexResponse>;
    /**
     * 该接口用于获取指定实例的推荐结果。
     */
    Recommend(query: RecommendRequest): Promise<RecommendResponse>;
    /**
     * 启动实例开始全量数据导入任务。
     */
    RunInstance(query: RunInstanceRequest): Promise<RunInstanceResponse>;
    /**
     * 停止指定实例的指定数据集版本。
     */
    StopDataSet(query: StopDataSetRequest): Promise<StopDataSetResponse>;
    /**
     * 解锁召回表的索引版本。
     */
    UnLockIndexVersion(query: UnLockIndexVersionRequest): Promise<UnLockIndexVersionResponse>;
    /**
     * 更新实验基本信息。
     */
    UpdateExperimentBasicInfo(query: UpdateExperimentBasicInfoRequest): Promise<UpdateExperimentBasicInfoResponse>;
    /**
     * 更新一个实验配置信息。
     */
    UpdateExperimentConfig(query: UpdateExperimentConfigRequest): Promise<UpdateExperimentConfigResponse>;
    /**
     * 更新实验状态。
     */
    UpdateExperimentStatus(query: UpdateExperimentStatusRequest): Promise<UpdateExperimentStatusResponse>;
    /**
     * 更新指定实例配额（Quota）信息。
     */
    UpgradeInstance(query: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse>;
    /**
     * 校验指定实例信息的有效性。
     */
    ValidateInstance(query: ValidateInstanceRequest): Promise<ValidateInstanceResponse>;
    /**
     * 创建一个智能推荐实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 通过指定的实例ID查看实例的配额信息。
     */
    DescribeQuota(query: DescribeQuotaRequest): Promise<DescribeQuotaResponse>;
    /**
     * 获取实时数据小时级别报告细节信息。
     */
    DescribeSyncReportDetail(query: DescribeSyncReportDetailRequest): Promise<DescribeSyncReportDetailResponse>;
    /**
     * 获取实时数据报告异常明细。
     */
    DescribeSyncReportOutliers(query: DescribeSyncReportOutliersRequest): Promise<DescribeSyncReportOutliersResponse>;
    /**
     * 该接口用于获取指定实例的日志信息（近七日内）。
     */
    ListLogs(query: ListLogsRequest): Promise<ListLogsResponse>;
    /**
     * 异常数据历史分段查询。
     */
    QueryExceptionHistory(query: QueryExceptionHistoryRequest): Promise<QueryExceptionHistoryResponse>;
    /**
     * 单表聚合查询（数据可能有修改）。
     */
    QuerySingleAggregationReport(query: QuerySingleAggregationReportRequest): Promise<QuerySingleAggregationReportResponse>;
    /**
     * 单表维度分析查询（类型可能会增加）。
     */
    QuerySingleReport(query: QuerySingleReportRequest): Promise<QuerySingleReportResponse>;
    /**
     * 查询整体数据概览。
     */
    QuerySyncReportAggregation(query: QuerySyncReportAggregationRequest): Promise<QuerySyncReportAggregationResponse>;
    /**
     * 查询类目列表。
     */
    ListMixCategories(query: ListMixCategoriesRequest): Promise<ListMixCategoriesResponse>;
    /**
     * 获取友盟appkey列表信息。
     */
    ListUmengAppkeys(query: ListUmengAppkeysRequest): Promise<ListUmengAppkeysResponse>;
    /**
     * 修改实例的离线存储配置。（只支持三张表同时修改）。
     */
    ModifyOfflineStorages(query: ModifyOfflineStoragesRequest): Promise<ModifyOfflineStoragesResponse>;
    /**
     * 查询离线存储。
     */
    ListOfflineStorages(query: ListOfflineStoragesRequest): Promise<ListOfflineStoragesResponse>;
    /**
     * 查询指定实例的仪表盘自定义分析任务结果。
     */
    DescribeCustomAnalysisTask(query: DescribeCustomAnalysisTaskRequest): Promise<DescribeCustomAnalysisTaskResponse>;
    /**
     * 创建自定义分析任务。
     */
    CreateCustomAnalysisTask(query: CreateCustomAnalysisTaskRequest): Promise<CreateCustomAnalysisTaskResponse>;
    /**
     * 查看其他数据源详情。
     */
    GetExtraDataSource(query: GetExtraDataSourceRequest): Promise<GetExtraDataSourceResponse>;
    /**
     * 获取样本详情。
     */
    GetSample(query: GetSampleRequest): Promise<GetSampleResponse>;
    /**
     * 运行排序模型模板
     */
    RunRankingModelTemplate(query: RunRankingModelTemplateRequest): Promise<RunRankingModelTemplateResponse>;
    /**
     * 创建样本格式化配置。
     */
    CreateSampleFormatConfig(query: CreateSampleFormatConfigRequest): Promise<CreateSampleFormatConfigResponse>;
    /**
     * 部署/重启部署排序服务，已经部署过的服务，修改配置后必须重启部署，注：若未修改任何参数，则可以不传body。
     */
    DeployRankingSystem(query: DeployRankingSystemRequest): Promise<DeployRankingSystemResponse>;
    /**
     * 初始化计算资源。
     */
    InitComputingResource(query: InitComputingResourceRequest): Promise<InitComputingResourceResponse>;
    /**
     * 触发样本格式化。
     */
    RunSampleFormatConfig(query: RunSampleFormatConfigRequest): Promise<RunSampleFormatConfigResponse>;
    /**
     * 获取样本格式化配置列表。
     */
    ListSampleFormatConfigs(query: ListSampleFormatConfigsRequest): Promise<ListSampleFormatConfigsResponse>;
    /**
     * 调试排序服务。
     */
    VerifyRankingSystem(query: VerifyRankingSystemRequest): Promise<VerifyRankingSystemResponse>;
    /**
     * 回滚排序服务。
     */
    RollbackRankingSystem(query: RollbackRankingSystemRequest): Promise<RollbackRankingSystemResponse>;
    /**
     * 删除某个模型版本。
     */
    DeleteRankingModelVersion(query: DeleteRankingModelVersionRequest): Promise<DeleteRankingModelVersionResponse>;
    /**
     * 复制创建样本。
     */
    CloneSample(query: CloneSampleRequest): Promise<CloneSampleResponse>;
    /**
     * 创建自定义样本。
     */
    CreateCustomSample(query: CreateCustomSampleRequest): Promise<CreateCustomSampleResponse>;
    /**
     * 创建一个数据源。
     */
    CreateExtraDataSource(query: CreateExtraDataSourceRequest): Promise<CreateExtraDataSourceResponse>;
    /**
     * 删除数据源。
     */
    DeleteExtraDataSource(query: DeleteExtraDataSourceRequest): Promise<DeleteExtraDataSourceResponse>;
    /**
     * 删除模型。
     */
    DeleteRankingModelTemplate(query: DeleteRankingModelTemplateRequest): Promise<DeleteRankingModelTemplateResponse>;
    /**
     * 删除排序服务。
     */
    DeleteRankingSystem(query: DeleteRankingSystemRequest): Promise<DeleteRankingSystemResponse>;
    /**
     * 删除样本。
     */
    DeleteSample(query: DeleteSampleRequest): Promise<DeleteSampleResponse>;
    /**
     * 生成样本，只针对复制创建的样本。
     */
    GenerateSample(query: GenerateSampleRequest): Promise<GenerateSampleResponse>;
    /**
     * 查看排序模型配置详情。
     */
    GetRankingModelTemplate(query: GetRankingModelTemplateRequest): Promise<GetRankingModelTemplateResponse>;
    /**
     * 查看排序模型版本详情，包括评估结果和训练结果。
     */
    GetRankingModelVersion(query: GetRankingModelVersionRequest): Promise<GetRankingModelVersionResponse>;
    /**
     * 获取排序服务详情。
     */
    GetRankingSystem(query: GetRankingSystemRequest): Promise<GetRankingSystemResponse>;
    /**
     * 查询排序服务操作记录。
     */
    GetRankingSystemHistory(query: GetRankingSystemHistoryRequest): Promise<GetRankingSystemHistoryResponse>;
    /**
     * 获取特征、样本数据源列表。
     */
    ListExtraDataSources(query: ListExtraDataSourcesRequest): Promise<ListExtraDataSourcesResponse>;
    /**
     * 获取特征表列表。
     */
    ListFeatureTables(query: ListFeatureTablesRequest): Promise<ListFeatureTablesResponse>;
    /**
     * 查看排序模型模板列表，按创建时间倒序。
     */
    ListRankingModelTemplates(query: ListRankingModelTemplatesRequest): Promise<ListRankingModelTemplatesResponse>;
    /**
     * 获取排序模型版本。
     */
    ListRankingModelVersions(query: ListRankingModelVersionsRequest): Promise<ListRankingModelVersionsResponse>;
    /**
     * 查询服务操作记录列表。
     */
    ListRankingSystemHistories(query: ListRankingSystemHistoriesRequest): Promise<ListRankingSystemHistoriesResponse>;
    /**
     * 获取排序服务列表。
     */
    ListRankingSystems(query: ListRankingSystemsRequest): Promise<ListRankingSystemsResponse>;
    /**
     * 获取样本列表。
     */
    ListSamples(query: ListSamplesRequest): Promise<ListSamplesResponse>;
    /**
     * 修改特征表，只支表级别持特征列表的全量修改。
     */
    ModifyFeatureTable(query: ModifyFeatureTableRequest): Promise<ModifyFeatureTableResponse>;
    /**
     * 修改排序模型模板。
     */
    ModifyRankingModelTemplate(query: ModifyRankingModelTemplateRequest): Promise<ModifyRankingModelTemplateResponse>;
    /**
     * 修改排序服务。
     */
    ModifyRankingSystem(query: ModifyRankingSystemRequest): Promise<ModifyRankingSystemResponse>;
    /**
     * 修改样本配置。
     */
    ModifySample(query: ModifySampleRequest): Promise<ModifySampleResponse>;
    /**
     * 刷新特征表，根据特征表源更新特征表，刷新策略为以用户源表为准。
     */
    RefreshFeatureTable(query: RefreshFeatureTableRequest): Promise<RefreshFeatureTableResponse>;
    /**
     * 创建排序模型模板。
     */
    CreateRankingModelTemplate(query: CreateRankingModelTemplateRequest): Promise<CreateRankingModelTemplateResponse>;
    /**
     * 创建排序服务。
     */
    CreateRankingSystem(query: CreateRankingSystemRequest): Promise<CreateRankingSystemResponse>;
    /**
     * 获取数据诊断报告抽样明细。
     */
    ListDataDiagnoseSampleDetails(query: ListDataDiagnoseSampleDetailsRequest): Promise<ListDataDiagnoseSampleDetailsResponse>;
    /**
     * 获取数据诊断报告 （包括用户手动触发的诊断、每天产出的周期报告、数据启动时诊断的报告）。
     */
    ListDataDiagnoseReports(query: ListDataDiagnoseReportsRequest): Promise<ListDataDiagnoseReportsResponse>;
    /**
     * 创建数据诊断任务。
     */
    CreateDataDiagnoseTask(query: CreateDataDiagnoseTaskRequest): Promise<CreateDataDiagnoseTaskResponse>;
    /**
     * 获取最新诊断任务状态。
     */
    GetLatestDataDiagnoseTaskStatus(query: GetLatestDataDiagnoseTaskStatusRequest): Promise<GetLatestDataDiagnoseTaskStatusResponse>;
    /**
     * 创建友盟授权token
     */
    CreateUmengToken(query: CreateUmengTokenRequest): Promise<CreateUmengTokenResponse>;
    /**
     * 删除流量调控任务。
     */
    DeleteFlowControlTask(query: DeleteFlowControlTaskRequest): Promise<DeleteFlowControlTaskResponse>;
    /**
     * 流量调控曝光排名物品/失效物品查询。
     */
    ListFlowControlTaskItemReports(query: ListFlowControlTaskItemReportsRequest): Promise<ListFlowControlTaskItemReportsResponse>;
    /**
     * 流量调控参考数据。
     */
    ListFlowControlTaskReference(query: ListFlowControlTaskReferenceRequest): Promise<ListFlowControlTaskReferenceResponse>;
    /**
     * 发布流量调控任务。
     */
    PublishFlowControlTask(query: PublishFlowControlTaskRequest): Promise<PublishFlowControlTaskResponse>;
    /**
     * 查询当前流量调控任务中失效物品清单，返回物品ID(ItemId)与物品类型(ItemType)。
     */
    ListFlowControlTaskInvalidItems(query: ListFlowControlTaskInvalidItemsRequest): Promise<ListFlowControlTaskInvalidItemsResponse>;
    /**
     * 获取流量调控任务详情。
     */
    GetFlowControlTask(query: GetFlowControlTaskRequest): Promise<GetFlowControlTaskResponse>;
    /**
     * 流量调控预览。
     */
    ListFlowControlTaskItems(query: ListFlowControlTaskItemsRequest): Promise<ListFlowControlTaskItemsResponse>;
    /**
     * 查询流控任务列表。
     */
    ListFlowControlTask(query: ListFlowControlTaskRequest): Promise<ListFlowControlTaskResponse>;
    /**
     * 流量调控任务曝光分析。
     */
    ListFlowControlTaskReports(query: ListFlowControlTaskReportsRequest): Promise<ListFlowControlTaskReportsResponse>;
    /**
     * 结束流量调控任务。
     */
    StopFlowControlTask(query: StopFlowControlTaskRequest): Promise<StopFlowControlTaskResponse>;
    /**
     * 流调任务修改接口。
     */
    ModifyFlowControlTask(query: ModifyFlowControlTaskRequest): Promise<ModifyFlowControlTaskResponse>;
    /**
     * 创建流控任务。
     */
    CreateFlowControlTask(query: CreateFlowControlTaskRequest): Promise<CreateFlowControlTaskResponse>;
}
export default AIREC;
