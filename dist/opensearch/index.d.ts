import { CompileSortScriptRequest } from "./CompileSortScript/req";
import { CompileSortScriptResponse } from "./CompileSortScript/res";
import { CreateAppRequest } from "./CreateApp/req";
import { CreateAppResponse } from "./CreateApp/res";
import { CreateABTestGroupRequest } from "./CreateABTestGroup/req";
import { CreateABTestGroupResponse } from "./CreateABTestGroup/res";
import { CreateABTestSceneRequest } from "./CreateABTestScene/req";
import { CreateABTestSceneResponse } from "./CreateABTestScene/res";
import { CreateABTestExperimentRequest } from "./CreateABTestExperiment/req";
import { CreateABTestExperimentResponse } from "./CreateABTestExperiment/res";
import { CreateAppGroupRequest } from "./CreateAppGroup/req";
import { CreateAppGroupResponse } from "./CreateAppGroup/res";
import { CreateFirstRankRequest } from "./CreateFirstRank/req";
import { CreateFirstRankResponse } from "./CreateFirstRank/res";
import { CreateQueryProcessorRequest } from "./CreateQueryProcessor/req";
import { CreateQueryProcessorResponse } from "./CreateQueryProcessor/res";
import { CreateScheduledTaskRequest } from "./CreateScheduledTask/req";
import { CreateScheduledTaskResponse } from "./CreateScheduledTask/res";
import { CreateSecondRankRequest } from "./CreateSecondRank/req";
import { CreateSecondRankResponse } from "./CreateSecondRank/res";
import { CreateSortScriptRequest } from "./CreateSortScript/req";
import { CreateSortScriptResponse } from "./CreateSortScript/res";
import { CreateUserAnalyzerRequest } from "./CreateUserAnalyzer/req";
import { CreateUserAnalyzerResponse } from "./CreateUserAnalyzer/res";
import { DeleteABTestExperimentRequest } from "./DeleteABTestExperiment/req";
import { DeleteABTestExperimentResponse } from "./DeleteABTestExperiment/res";
import { DeleteABTestGroupRequest } from "./DeleteABTestGroup/req";
import { DeleteABTestGroupResponse } from "./DeleteABTestGroup/res";
import { DeleteABTestSceneRequest } from "./DeleteABTestScene/req";
import { DeleteABTestSceneResponse } from "./DeleteABTestScene/res";
import { DeleteSortScriptRequest } from "./DeleteSortScript/req";
import { DeleteSortScriptResponse } from "./DeleteSortScript/res";
import { DeleteSortScriptFileRequest } from "./DeleteSortScriptFile/req";
import { DeleteSortScriptFileResponse } from "./DeleteSortScriptFile/res";
import { DescribeABTestExperimentRequest } from "./DescribeABTestExperiment/req";
import { DescribeABTestExperimentResponse } from "./DescribeABTestExperiment/res";
import { DescribeABTestGroupRequest } from "./DescribeABTestGroup/req";
import { DescribeABTestGroupResponse } from "./DescribeABTestGroup/res";
import { DescribeABTestSceneRequest } from "./DescribeABTestScene/req";
import { DescribeABTestSceneResponse } from "./DescribeABTestScene/res";
import { DescribeAppRequest } from "./DescribeApp/req";
import { DescribeAppResponse } from "./DescribeApp/res";
import { DescribeAppGroupRequest } from "./DescribeAppGroup/req";
import { DescribeAppGroupResponse } from "./DescribeAppGroup/res";
import { DescribeAppStatisticsRequest } from "./DescribeAppStatistics/req";
import { DescribeAppStatisticsResponse } from "./DescribeAppStatistics/res";
import { DescribeAppsRequest } from "./DescribeApps/req";
import { DescribeAppsResponse } from "./DescribeApps/res";
import { DescribeDataCollctionRequest } from "./DescribeDataCollction/req";
import { DescribeDataCollctionResponse } from "./DescribeDataCollction/res";
import { DescribeFirstRankRequest } from "./DescribeFirstRank/req";
import { DescribeFirstRankResponse } from "./DescribeFirstRank/res";
import { DescribeInterventionDictionaryRequest } from "./DescribeInterventionDictionary/req";
import { DescribeInterventionDictionaryResponse } from "./DescribeInterventionDictionary/res";
import { DescribeQueryProcessorRequest } from "./DescribeQueryProcessor/req";
import { DescribeQueryProcessorResponse } from "./DescribeQueryProcessor/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeScheduledTaskRequest } from "./DescribeScheduledTask/req";
import { DescribeScheduledTaskResponse } from "./DescribeScheduledTask/res";
import { DescribeSecondRankRequest } from "./DescribeSecondRank/req";
import { DescribeSecondRankResponse } from "./DescribeSecondRank/res";
import { DescribeSlowQueryStatusRequest } from "./DescribeSlowQueryStatus/req";
import { DescribeSlowQueryStatusResponse } from "./DescribeSlowQueryStatus/res";
import { DescribeUserAnalyzerRequest } from "./DescribeUserAnalyzer/req";
import { DescribeUserAnalyzerResponse } from "./DescribeUserAnalyzer/res";
import { DisableSlowQueryRequest } from "./DisableSlowQuery/req";
import { DisableSlowQueryResponse } from "./DisableSlowQuery/res";
import { EnableSlowQueryRequest } from "./EnableSlowQuery/req";
import { EnableSlowQueryResponse } from "./EnableSlowQuery/res";
import { GetScriptFileNamesRequest } from "./GetScriptFileNames/req";
import { GetScriptFileNamesResponse } from "./GetScriptFileNames/res";
import { GetSortScriptRequest } from "./GetSortScript/req";
import { GetSortScriptResponse } from "./GetSortScript/res";
import { GetSortScriptFileRequest } from "./GetSortScriptFile/req";
import { GetSortScriptFileResponse } from "./GetSortScriptFile/res";
import { ListABTestExperimentsRequest } from "./ListABTestExperiments/req";
import { ListABTestExperimentsResponse } from "./ListABTestExperiments/res";
import { ListABTestFixedFlowDividersRequest } from "./ListABTestFixedFlowDividers/req";
import { ListABTestFixedFlowDividersResponse } from "./ListABTestFixedFlowDividers/res";
import { ListABTestGroupsRequest } from "./ListABTestGroups/req";
import { ListABTestGroupsResponse } from "./ListABTestGroups/res";
import { ListABTestScenesRequest } from "./ListABTestScenes/req";
import { ListABTestScenesResponse } from "./ListABTestScenes/res";
import { ListAppGroupsRequest } from "./ListAppGroups/req";
import { ListAppGroupsResponse } from "./ListAppGroups/res";
import { ListDataCollectionsRequest } from "./ListDataCollections/req";
import { ListDataCollectionsResponse } from "./ListDataCollections/res";
import { ListFirstRanksRequest } from "./ListFirstRanks/req";
import { ListFirstRanksResponse } from "./ListFirstRanks/res";
import { ListInterventionDictionariesRequest } from "./ListInterventionDictionaries/req";
import { ListInterventionDictionariesResponse } from "./ListInterventionDictionaries/res";
import { ListInterventionDictionaryEntriesRequest } from "./ListInterventionDictionaryEntries/req";
import { ListInterventionDictionaryEntriesResponse } from "./ListInterventionDictionaryEntries/res";
import { ListInterventionDictionaryNerResultsRequest } from "./ListInterventionDictionaryNerResults/req";
import { ListInterventionDictionaryNerResultsResponse } from "./ListInterventionDictionaryNerResults/res";
import { ListInterventionDictionaryRelatedEntitiesRequest } from "./ListInterventionDictionaryRelatedEntities/req";
import { ListInterventionDictionaryRelatedEntitiesResponse } from "./ListInterventionDictionaryRelatedEntities/res";
import { ListQueryProcessorNersRequest } from "./ListQueryProcessorNers/req";
import { ListQueryProcessorNersResponse } from "./ListQueryProcessorNers/res";
import { ListQueryProcessorsRequest } from "./ListQueryProcessors/req";
import { ListQueryProcessorsResponse } from "./ListQueryProcessors/res";
import { ListScheduledTasksRequest } from "./ListScheduledTasks/req";
import { ListScheduledTasksResponse } from "./ListScheduledTasks/res";
import { ListSecondRanksRequest } from "./ListSecondRanks/req";
import { ListSecondRanksResponse } from "./ListSecondRanks/res";
import { ListSlowQueryCategoriesRequest } from "./ListSlowQueryCategories/req";
import { ListSlowQueryCategoriesResponse } from "./ListSlowQueryCategories/res";
import { ListSlowQueryQueriesRequest } from "./ListSlowQueryQueries/req";
import { ListSlowQueryQueriesResponse } from "./ListSlowQueryQueries/res";
import { ListSortExpressionsRequest } from "./ListSortExpressions/req";
import { ListSortExpressionsResponse } from "./ListSortExpressions/res";
import { ListSortScriptsRequest } from "./ListSortScripts/req";
import { ListSortScriptsResponse } from "./ListSortScripts/res";
import { ListStatisticLogsRequest } from "./ListStatisticLogs/req";
import { ListStatisticLogsResponse } from "./ListStatisticLogs/res";
import { ListStatisticReportRequest } from "./ListStatisticReport/req";
import { ListStatisticReportResponse } from "./ListStatisticReport/res";
import { ListUserAnalyzerEntriesRequest } from "./ListUserAnalyzerEntries/req";
import { ListUserAnalyzerEntriesResponse } from "./ListUserAnalyzerEntries/res";
import { ListUserAnalyzersRequest } from "./ListUserAnalyzers/req";
import { ListUserAnalyzersResponse } from "./ListUserAnalyzers/res";
import { ModifyAppGroupRequest } from "./ModifyAppGroup/req";
import { ModifyAppGroupResponse } from "./ModifyAppGroup/res";
import { ModifyAppGroupQuotaRequest } from "./ModifyAppGroupQuota/req";
import { ModifyAppGroupQuotaResponse } from "./ModifyAppGroupQuota/res";
import { ModifyFirstRankRequest } from "./ModifyFirstRank/req";
import { ModifyFirstRankResponse } from "./ModifyFirstRank/res";
import { ModifyQueryProcessorRequest } from "./ModifyQueryProcessor/req";
import { ModifyQueryProcessorResponse } from "./ModifyQueryProcessor/res";
import { ModifyScheduledTaskRequest } from "./ModifyScheduledTask/req";
import { ModifyScheduledTaskResponse } from "./ModifyScheduledTask/res";
import { ModifySecondRankRequest } from "./ModifySecondRank/req";
import { ModifySecondRankResponse } from "./ModifySecondRank/res";
import { PushInterventionDictionaryEntriesRequest } from "./PushInterventionDictionaryEntries/req";
import { PushInterventionDictionaryEntriesResponse } from "./PushInterventionDictionaryEntries/res";
import { PushUserAnalyzerEntriesRequest } from "./PushUserAnalyzerEntries/req";
import { PushUserAnalyzerEntriesResponse } from "./PushUserAnalyzerEntries/res";
import { ReleaseSortScriptRequest } from "./ReleaseSortScript/req";
import { ReleaseSortScriptResponse } from "./ReleaseSortScript/res";
import { RemoveAppRequest } from "./RemoveApp/req";
import { RemoveAppResponse } from "./RemoveApp/res";
import { RemoveAppGroupRequest } from "./RemoveAppGroup/req";
import { RemoveAppGroupResponse } from "./RemoveAppGroup/res";
import { RemoveDataCollectionRequest } from "./RemoveDataCollection/req";
import { RemoveDataCollectionResponse } from "./RemoveDataCollection/res";
import { RemoveFirstRankRequest } from "./RemoveFirstRank/req";
import { RemoveFirstRankResponse } from "./RemoveFirstRank/res";
import { RemoveInterventionDictionaryRequest } from "./RemoveInterventionDictionary/req";
import { RemoveInterventionDictionaryResponse } from "./RemoveInterventionDictionary/res";
import { RemoveQueryProcessorRequest } from "./RemoveQueryProcessor/req";
import { RemoveQueryProcessorResponse } from "./RemoveQueryProcessor/res";
import { RemoveScheduledTaskRequest } from "./RemoveScheduledTask/req";
import { RemoveScheduledTaskResponse } from "./RemoveScheduledTask/res";
import { RemoveSecondRankRequest } from "./RemoveSecondRank/req";
import { RemoveSecondRankResponse } from "./RemoveSecondRank/res";
import { RemoveUserAnalyzerRequest } from "./RemoveUserAnalyzer/req";
import { RemoveUserAnalyzerResponse } from "./RemoveUserAnalyzer/res";
import { RenewAppGroupRequest } from "./RenewAppGroup/req";
import { RenewAppGroupResponse } from "./RenewAppGroup/res";
import { ReplaceAppGroupCommodityCodeRequest } from "./ReplaceAppGroupCommodityCode/req";
import { ReplaceAppGroupCommodityCodeResponse } from "./ReplaceAppGroupCommodityCode/res";
import { SaveSortScriptFileRequest } from "./SaveSortScriptFile/req";
import { SaveSortScriptFileResponse } from "./SaveSortScriptFile/res";
import { StartSlowQueryAnalyzerRequest } from "./StartSlowQueryAnalyzer/req";
import { StartSlowQueryAnalyzerResponse } from "./StartSlowQueryAnalyzer/res";
import { UpdateABTestExperimentRequest } from "./UpdateABTestExperiment/req";
import { UpdateABTestExperimentResponse } from "./UpdateABTestExperiment/res";
import { UpdateABTestFixedFlowDividersRequest } from "./UpdateABTestFixedFlowDividers/req";
import { UpdateABTestFixedFlowDividersResponse } from "./UpdateABTestFixedFlowDividers/res";
import { UpdateABTestGroupRequest } from "./UpdateABTestGroup/req";
import { UpdateABTestGroupResponse } from "./UpdateABTestGroup/res";
import { UpdateABTestSceneRequest } from "./UpdateABTestScene/req";
import { UpdateABTestSceneResponse } from "./UpdateABTestScene/res";
import { UpdateFetchFieldsRequest } from "./UpdateFetchFields/req";
import { UpdateFetchFieldsResponse } from "./UpdateFetchFields/res";
import { UpdateSummariesRequest } from "./UpdateSummaries/req";
import { UpdateSummariesResponse } from "./UpdateSummaries/res";
import { CreateInterventionDictionaryRequest } from "./CreateInterventionDictionary/req";
import { CreateInterventionDictionaryResponse } from "./CreateInterventionDictionary/res";
import { GetDomainRequest } from "./GetDomain/req";
import { GetDomainResponse } from "./GetDomain/res";
import { GenerateMergedTableRequest } from "./GenerateMergedTable/req";
import { GenerateMergedTableResponse } from "./GenerateMergedTable/res";
import { ListDataSourceTableFieldsRequest } from "./ListDataSourceTableFields/req";
import { ListDataSourceTableFieldsResponse } from "./ListDataSourceTableFields/res";
import { ListDataSourceTablesRequest } from "./ListDataSourceTables/req";
import { ListDataSourceTablesResponse } from "./ListDataSourceTables/res";
import { UpdateSortScriptRequest } from "./UpdateSortScript/req";
import { UpdateSortScriptResponse } from "./UpdateSortScript/res";
import { ListQuotaReviewTasksRequest } from "./ListQuotaReviewTasks/req";
import { ListQuotaReviewTasksResponse } from "./ListQuotaReviewTasks/res";
import { CreateSearchStrategyRequest } from "./CreateSearchStrategy/req";
import { CreateSearchStrategyResponse } from "./CreateSearchStrategy/res";
import { GetSearchStrategyRequest } from "./GetSearchStrategy/req";
import { GetSearchStrategyResponse } from "./GetSearchStrategy/res";
import { ListSearchStrategiesRequest } from "./ListSearchStrategies/req";
import { ListSearchStrategiesResponse } from "./ListSearchStrategies/res";
import { RemoveSearchStrategyRequest } from "./RemoveSearchStrategy/req";
import { RemoveSearchStrategyResponse } from "./RemoveSearchStrategy/res";
import { UpdateSearchStrategyRequest } from "./UpdateSearchStrategy/req";
import { UpdateSearchStrategyResponse } from "./UpdateSearchStrategy/res";
import { BindESUserAnalyzerRequest } from "./BindESUserAnalyzer/req";
import { BindESUserAnalyzerResponse } from "./BindESUserAnalyzer/res";
import { BindEsInstanceRequest } from "./BindEsInstance/req";
import { BindEsInstanceResponse } from "./BindEsInstance/res";
import { ListQueryProcessorAnalyzerResultsRequest } from "./ListQueryProcessorAnalyzerResults/req";
import { ListQueryProcessorAnalyzerResultsResponse } from "./ListQueryProcessorAnalyzerResults/res";
import { UnbindESUserAnalyzerRequest } from "./UnbindESUserAnalyzer/req";
import { UnbindESUserAnalyzerResponse } from "./UnbindESUserAnalyzer/res";
import { UnbindEsInstanceRequest } from "./UnbindEsInstance/req";
import { UnbindEsInstanceResponse } from "./UnbindEsInstance/res";
import { ValidateDataSourcesRequest } from "./ValidateDataSources/req";
import { ValidateDataSourcesResponse } from "./ValidateDataSources/res";
import { ListProceedingsRequest } from "./ListProceedings/req";
import { ListProceedingsResponse } from "./ListProceedings/res";
import { CreateFunctionTaskRequest } from "./CreateFunctionTask/req";
import { CreateFunctionTaskResponse } from "./CreateFunctionTask/res";
import { CreateFunctionInstanceRequest } from "./CreateFunctionInstance/req";
import { CreateFunctionInstanceResponse } from "./CreateFunctionInstance/res";
import { UpdateFunctionInstanceRequest } from "./UpdateFunctionInstance/req";
import { UpdateFunctionInstanceResponse } from "./UpdateFunctionInstance/res";
import { GetFunctionCurrentVersionRequest } from "./GetFunctionCurrentVersion/req";
import { GetFunctionCurrentVersionResponse } from "./GetFunctionCurrentVersion/res";
import { GetFunctionInstanceRequest } from "./GetFunctionInstance/req";
import { GetFunctionInstanceResponse } from "./GetFunctionInstance/res";
import { ListFunctionInstancesRequest } from "./ListFunctionInstances/req";
import { ListFunctionInstancesResponse } from "./ListFunctionInstances/res";
import { ListFunctionTasksRequest } from "./ListFunctionTasks/req";
import { ListFunctionTasksResponse } from "./ListFunctionTasks/res";
import { GetFunctionDefaultInstanceRequest } from "./GetFunctionDefaultInstance/req";
import { GetFunctionDefaultInstanceResponse } from "./GetFunctionDefaultInstance/res";
import { DeleteFunctionInstanceRequest } from "./DeleteFunctionInstance/req";
import { DeleteFunctionInstanceResponse } from "./DeleteFunctionInstance/res";
import { GetFunctionVersionRequest } from "./GetFunctionVersion/req";
import { GetFunctionVersionResponse } from "./GetFunctionVersion/res";
import { UpdateFunctionDefaultInstanceRequest } from "./UpdateFunctionDefaultInstance/req";
import { UpdateFunctionDefaultInstanceResponse } from "./UpdateFunctionDefaultInstance/res";
import { GetFunctionTaskRequest } from "./GetFunctionTask/req";
import { GetFunctionTaskResponse } from "./GetFunctionTask/res";
import { DeleteFunctionTaskRequest } from "./DeleteFunctionTask/req";
import { DeleteFunctionTaskResponse } from "./DeleteFunctionTask/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { CreateFunctionResourceRequest } from "./CreateFunctionResource/req";
import { CreateFunctionResourceResponse } from "./CreateFunctionResource/res";
import { GetFunctionResourceRequest } from "./GetFunctionResource/req";
import { GetFunctionResourceResponse } from "./GetFunctionResource/res";
import { ListFunctionResourcesRequest } from "./ListFunctionResources/req";
import { ListFunctionResourcesResponse } from "./ListFunctionResources/res";
import { DeleteFunctionResourceRequest } from "./DeleteFunctionResource/req";
import { DeleteFunctionResourceResponse } from "./DeleteFunctionResource/res";
import { UpdateFunctionResourceRequest } from "./UpdateFunctionResource/req";
import { UpdateFunctionResourceResponse } from "./UpdateFunctionResource/res";

interface OPENSEARCH {
    /**
     * 编译排序脚本。
     */
    CompileSortScript(query: CompileSortScriptRequest): Promise<CompileSortScriptResponse>;
    /**
     * 创建一个OpenSearch应用版本。
     */
    CreateApp(query: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * 创建实验组。
     */
    CreateABTestGroup(query: CreateABTestGroupRequest): Promise<CreateABTestGroupResponse>;
    /**
     * 创建实验场景。
     */
    CreateABTestScene(query: CreateABTestSceneRequest): Promise<CreateABTestSceneResponse>;
    /**
     * 创建实验。
     */
    CreateABTestExperiment(query: CreateABTestExperimentRequest): Promise<CreateABTestExperimentResponse>;
    /**
     * 创建一个OpenSearch应用。
     */
    CreateAppGroup(query: CreateAppGroupRequest): Promise<CreateAppGroupResponse>;
    /**
     * 创建一个OpenSearch应用版本的粗排表达式配置。当 dryRun=true 时，表示进行粗排表达式校验，默认 dryRun不传为false。
     */
    CreateFirstRank(query: CreateFirstRankRequest): Promise<CreateFirstRankResponse>;
    /**
     * 创建一个查询分析规则。当 dryRun=true 时，表示进行查询分析规则校验，默认 dryRun 不传为 false。
     */
    CreateQueryProcessor(query: CreateQueryProcessorRequest): Promise<CreateQueryProcessorResponse>;
    /**
     * 创建一个 OpenSearch 应用的定时任务。
     */
    CreateScheduledTask(query: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse>;
    /**
     * 当 dryRun=true 时，表示进行精排表达式校验，默认 dryRun 不传为 false。
     */
    CreateSecondRank(query: CreateSecondRankRequest): Promise<CreateSecondRankResponse>;
    /**
     * 创建排序脚本。
     */
    CreateSortScript(query: CreateSortScriptRequest): Promise<CreateSortScriptResponse>;
    /**
     * 创建自定义分析器。
     */
    CreateUserAnalyzer(query: CreateUserAnalyzerRequest): Promise<CreateUserAnalyzerResponse>;
    /**
     * 删除实验。
     */
    DeleteABTestExperiment(query: DeleteABTestExperimentRequest): Promise<DeleteABTestExperimentResponse>;
    /**
     * 删除实验组。
     */
    DeleteABTestGroup(query: DeleteABTestGroupRequest): Promise<DeleteABTestGroupResponse>;
    /**
     * 删除实验场景。
     */
    DeleteABTestScene(query: DeleteABTestSceneRequest): Promise<DeleteABTestSceneResponse>;
    /**
     * 删除排序脚本。
     */
    DeleteSortScript(query: DeleteSortScriptRequest): Promise<DeleteSortScriptResponse>;
    /**
     * 删除脚本文件。
     */
    DeleteSortScriptFile(query: DeleteSortScriptFileRequest): Promise<DeleteSortScriptFileResponse>;
    /**
     * 获取实验详情。
     */
    DescribeABTestExperiment(query: DescribeABTestExperimentRequest): Promise<DescribeABTestExperimentResponse>;
    /**
     * 获取实验组详情。
     */
    DescribeABTestGroup(query: DescribeABTestGroupRequest): Promise<DescribeABTestGroupResponse>;
    /**
     * 获取实验场景详情。
     */
    DescribeABTestScene(query: DescribeABTestSceneRequest): Promise<DescribeABTestSceneResponse>;
    /**
     * 查看一个 OpenSearch 应用版本详情。
     */
    DescribeApp(query: DescribeAppRequest): Promise<DescribeAppResponse>;
    /**
     * 查看一个 OpenSearch 应用详情。
     */
    DescribeAppGroup(query: DescribeAppGroupRequest): Promise<DescribeAppGroupResponse>;
    /**
     * 获取 OpenSearch 应用版本的统计结果。
     */
    DescribeAppStatistics(query: DescribeAppStatisticsRequest): Promise<DescribeAppStatisticsResponse>;
    /**
     * 获取一个 OpenSearch 应用的版本列表。
     */
    DescribeApps(query: DescribeAppsRequest): Promise<DescribeAppsResponse>;
    /**
     * 获取指定应用的数据采集详情。
     */
    DescribeDataCollction(query: DescribeDataCollctionRequest): Promise<DescribeDataCollctionResponse>;
    /**
     * 查看一个 OpenSearch 应用版本的粗排表达式配置。
     */
    DescribeFirstRank(query: DescribeFirstRankRequest): Promise<DescribeFirstRankResponse>;
    /**
     * 获取干预词典详情。
     */
    DescribeInterventionDictionary(query: DescribeInterventionDictionaryRequest): Promise<DescribeInterventionDictionaryResponse>;
    /**
     * 获取指定 OpenSearch 应用版本的查询分析规则列表。
     */
    DescribeQueryProcessor(query: DescribeQueryProcessorRequest): Promise<DescribeQueryProcessorResponse>;
    /**
     * 获取所有区域的接入地址。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查看 OpenSearch 应用定时任务详情。
     */
    DescribeScheduledTask(query: DescribeScheduledTaskRequest): Promise<DescribeScheduledTaskResponse>;
    /**
     * 查看一个 OpenSearch 应用版本的精排表达式配置。
     */
    DescribeSecondRank(query: DescribeSecondRankRequest): Promise<DescribeSecondRankResponse>;
    /**
     * 获取优化大师慢查询开通状态。
     */
    DescribeSlowQueryStatus(query: DescribeSlowQueryStatusRequest): Promise<DescribeSlowQueryStatusResponse>;
    /**
     * 获取自定义分析器详情。
     */
    DescribeUserAnalyzer(query: DescribeUserAnalyzerRequest): Promise<DescribeUserAnalyzerResponse>;
    /**
     * 禁用优化大师慢查询服务。
     */
    DisableSlowQuery(query: DisableSlowQueryRequest): Promise<DisableSlowQueryResponse>;
    /**
     * 启用优化大师慢查询服务。
     */
    EnableSlowQuery(query: EnableSlowQueryRequest): Promise<EnableSlowQueryResponse>;
    /**
     * 获取指定版本指定脚本下所有的文件名。
     */
    GetScriptFileNames(query: GetScriptFileNamesRequest): Promise<GetScriptFileNamesResponse>;
    /**
     * 获取排序脚本详情。
     */
    GetSortScript(query: GetSortScriptRequest): Promise<GetSortScriptResponse>;
    /**
     * 获取排序脚本内容。
     */
    GetSortScriptFile(query: GetSortScriptFileRequest): Promise<GetSortScriptFileResponse>;
    /**
     * 列出实验清单。
     */
    ListABTestExperiments(query: ListABTestExperimentsRequest): Promise<ListABTestExperimentsResponse>;
    /**
     * 获取白名单清单。
     */
    ListABTestFixedFlowDividers(query: ListABTestFixedFlowDividersRequest): Promise<ListABTestFixedFlowDividersResponse>;
    /**
     * 获取实验组清单。
     */
    ListABTestGroups(query: ListABTestGroupsRequest): Promise<ListABTestGroupsResponse>;
    /**
     * 列出场景清单。
     */
    ListABTestScenes(query: ListABTestScenesRequest): Promise<ListABTestScenesResponse>;
    /**
     * 获取OpenSearch应用列表。
     */
    ListAppGroups(query: ListAppGroupsRequest): Promise<ListAppGroupsResponse>;
    /**
     * 获取OpenSearch应用的数据采集清单。
     */
    ListDataCollections(query: ListDataCollectionsRequest): Promise<ListDataCollectionsResponse>;
    /**
     * 获取指定OpenSearch应用版本的粗排配置列表。
     */
    ListFirstRanks(query: ListFirstRanksRequest): Promise<ListFirstRanksResponse>;
    /**
     * 获取用户的干预词典列表。
     */
    ListInterventionDictionaries(query: ListInterventionDictionariesRequest): Promise<ListInterventionDictionariesResponse>;
    /**
     * 获取干预词条清单。
     */
    ListInterventionDictionaryEntries(query: ListInterventionDictionaryEntriesRequest): Promise<ListInterventionDictionaryEntriesResponse>;
    /**
     * 获取实体识别结果。
     */
    ListInterventionDictionaryNerResults(query: ListInterventionDictionaryNerResultsRequest): Promise<ListInterventionDictionaryNerResultsResponse>;
    /**
     * 获取与干预词典关联的资源清单。如果某个干预词典被qp引用，则列出来所有的应用及QP信息。
     */
    ListInterventionDictionaryRelatedEntities(query: ListInterventionDictionaryRelatedEntitiesRequest): Promise<ListInterventionDictionaryRelatedEntitiesResponse>;
    /**
     * 实体识别：获取推荐的实体类型重要性设置。
     */
    ListQueryProcessorNers(query: ListQueryProcessorNersRequest): Promise<ListQueryProcessorNersResponse>;
    /**
     * 获取指定OpenSearch应用版本的查询分析规则列表。
     */
    ListQueryProcessors(query: ListQueryProcessorsRequest): Promise<ListQueryProcessorsResponse>;
    /**
     * 获取OpenSearch应用定时任务列表。
     */
    ListScheduledTasks(query: ListScheduledTasksRequest): Promise<ListScheduledTasksResponse>;
    /**
     * 获取指定 OpenSearch 应用版本的精排排配置列表。
     */
    ListSecondRanks(query: ListSecondRanksRequest): Promise<ListSecondRanksResponse>;
    /**
     * 列出优化大师慢查询优化建议清单。
     */
    ListSlowQueryCategories(query: ListSlowQueryCategoriesRequest): Promise<ListSlowQueryCategoriesResponse>;
    /**
     * 列出优化大师慢查询Query清单。
     */
    ListSlowQueryQueries(query: ListSlowQueryQueriesRequest): Promise<ListSlowQueryQueriesResponse>;
    /**
     * 获取应用版本上的排序表达式列表。
     */
    ListSortExpressions(query: ListSortExpressionsRequest): Promise<ListSortExpressionsResponse>;
    /**
     * 获取指定版本下所有的排序脚本。
     */
    ListSortScripts(query: ListSortScriptsRequest): Promise<ListSortScriptsResponse>;
    /**
     * 查询日志类统计，例如：应用错误日志、热词榜单、慢日志。
     */
    ListStatisticLogs(query: ListStatisticLogsRequest): Promise<ListStatisticLogsResponse>;
    /**
     * 应用场景有：应用报表、下拉提示报表、热词底纹报表、abtest报表、数据质量报告等。
     */
    ListStatisticReport(query: ListStatisticReportRequest): Promise<ListStatisticReportResponse>;
    /**
     * 获取自定义分析器词条清单。
     */
    ListUserAnalyzerEntries(query: ListUserAnalyzerEntriesRequest): Promise<ListUserAnalyzerEntriesResponse>;
    /**
     * 获取用户的自定义分词器列表。
     */
    ListUserAnalyzers(query: ListUserAnalyzersRequest): Promise<ListUserAnalyzersResponse>;
    /**
     * 修改 OpenSearch 应用属性或设置应用在线版本。
     */
    ModifyAppGroup(query: ModifyAppGroupRequest): Promise<ModifyAppGroupResponse>;
    /**
     * 修改 OpenSearch 应用配额。
     */
    ModifyAppGroupQuota(query: ModifyAppGroupQuotaRequest): Promise<ModifyAppGroupQuotaResponse>;
    /**
     * 修改一个 OpenSearch 应用版本的粗排表达式配置当 dryRun=true 时，表示修改后的粗排表达式进行校验，默认 dryRun 不传为 false。
     */
    ModifyFirstRank(query: ModifyFirstRankRequest): Promise<ModifyFirstRankResponse>;
    /**
     * 修改指定应用版本查询分析规则。当 dryRun=true 时，表示进行查询分析规则校验，默认 dryRun 不传为 false。
     */
    ModifyQueryProcessor(query: ModifyQueryProcessorRequest): Promise<ModifyQueryProcessorResponse>;
    /**
     * 修改一个定时任务。
     */
    ModifyScheduledTask(query: ModifyScheduledTaskRequest): Promise<ModifyScheduledTaskResponse>;
    /**
     * 修改一个OpenSearch 应用版本的精排配置。当 dryRun=true 时，表示修改后的精排表达式进行校验，默认 dryRun 不传为 false。
     */
    ModifySecondRank(query: ModifySecondRankRequest): Promise<ModifySecondRankResponse>;
    /**
     * 接收干预词条变更。
     */
    PushInterventionDictionaryEntries(query: PushInterventionDictionaryEntriesRequest): Promise<PushInterventionDictionaryEntriesResponse>;
    /**
     * 接收自定义分析器词条变更。
     */
    PushUserAnalyzerEntries(query: PushUserAnalyzerEntriesRequest): Promise<PushUserAnalyzerEntriesResponse>;
    /**
     * 发布排序脚本。
     */
    ReleaseSortScript(query: ReleaseSortScriptRequest): Promise<ReleaseSortScriptResponse>;
    /**
     * 删除一个 OpenSearch应用版本。
     */
    RemoveApp(query: RemoveAppRequest): Promise<RemoveAppResponse>;
    /**
     * 删除一个OpenSearch应用。
     */
    RemoveAppGroup(query: RemoveAppGroupRequest): Promise<RemoveAppGroupResponse>;
    /**
     * 关闭数据采集。
     */
    RemoveDataCollection(query: RemoveDataCollectionRequest): Promise<RemoveDataCollectionResponse>;
    /**
     * 删除指定 OpenSearch 应用版本的粗排配置。
     */
    RemoveFirstRank(query: RemoveFirstRankRequest): Promise<RemoveFirstRankResponse>;
    /**
     * 删除干预词典。
     */
    RemoveInterventionDictionary(query: RemoveInterventionDictionaryRequest): Promise<RemoveInterventionDictionaryResponse>;
    /**
     * 删除指定 OpenSearch 应用版本的查询分析规则。
     */
    RemoveQueryProcessor(query: RemoveQueryProcessorRequest): Promise<RemoveQueryProcessorResponse>;
    /**
     * 删除 OpenSearch 应用定时任务。
     */
    RemoveScheduledTask(query: RemoveScheduledTaskRequest): Promise<RemoveScheduledTaskResponse>;
    /**
     * 删除一个 OpenSearch 应用版本的精排表达式配置。
     */
    RemoveSecondRank(query: RemoveSecondRankRequest): Promise<RemoveSecondRankResponse>;
    /**
     * 删除自定义分析器。
     */
    RemoveUserAnalyzer(query: RemoveUserAnalyzerRequest): Promise<RemoveUserAnalyzerResponse>;
    /**
     * 为应用续费（续费暂不支持API调用，请在控制台操作续费）。
     */
    RenewAppGroup(query: RenewAppGroupRequest): Promise<RenewAppGroupResponse>;
    /**
     * 应用服务型转实例型。
     */
    ReplaceAppGroupCommodityCode(query: ReplaceAppGroupCommodityCodeRequest): Promise<ReplaceAppGroupCommodityCodeResponse>;
    /**
     * 上传排序脚本内容。
     */
    SaveSortScriptFile(query: SaveSortScriptFileRequest): Promise<SaveSortScriptFileResponse>;
    /**
     * 立即进行慢查询分析。
     */
    StartSlowQueryAnalyzer(query: StartSlowQueryAnalyzerRequest): Promise<StartSlowQueryAnalyzerResponse>;
    /**
     * 修改实验参数。
     */
    UpdateABTestExperiment(query: UpdateABTestExperimentRequest): Promise<UpdateABTestExperimentResponse>;
    /**
     * 更新白名单数据。
     */
    UpdateABTestFixedFlowDividers(query: UpdateABTestFixedFlowDividersRequest): Promise<UpdateABTestFixedFlowDividersResponse>;
    /**
     * 修改实验组。
     */
    UpdateABTestGroup(query: UpdateABTestGroupRequest): Promise<UpdateABTestGroupResponse>;
    /**
     * 修改实验场景。
     */
    UpdateABTestScene(query: UpdateABTestSceneRequest): Promise<UpdateABTestSceneResponse>;
    /**
     * 支持 dryRun。
     */
    UpdateFetchFields(query: UpdateFetchFieldsRequest): Promise<UpdateFetchFieldsResponse>;
    /**
     * 支持 dryRun。
     */
    UpdateSummaries(query: UpdateSummariesRequest): Promise<UpdateSummariesResponse>;
    /**
     * 创建干预词典。
     */
    CreateInterventionDictionary(query: CreateInterventionDictionaryRequest): Promise<CreateInterventionDictionaryResponse>;
    /**
     * 获取行业类型。
     */
    GetDomain(query: GetDomainRequest): Promise<GetDomainResponse>;
    /**
     * 获取合并后的宽表。
     */
    GenerateMergedTable(query: GenerateMergedTableRequest): Promise<GenerateMergedTableResponse>;
    /**
     * 获取指定数据表的所有字段，为内部接口。
     */
    ListDataSourceTableFields(query: ListDataSourceTableFieldsRequest): Promise<ListDataSourceTableFieldsResponse>;
    /**
     * 获取指定数据源的所有数据。
     */
    ListDataSourceTables(query: ListDataSourceTablesRequest): Promise<ListDataSourceTablesResponse>;
    /**
     * 修改排序脚本备注。
     */
    UpdateSortScript(query: UpdateSortScriptRequest): Promise<UpdateSortScriptResponse>;
    /**
     * 获取指定 opensearch 应用配额审批清单。
     */
    ListQuotaReviewTasks(query: ListQuotaReviewTasksRequest): Promise<ListQuotaReviewTasksResponse>;
    /**
     * 创建查询策略。
     */
    CreateSearchStrategy(query: CreateSearchStrategyRequest): Promise<CreateSearchStrategyResponse>;
    /**
     * 获取查询策略详情。
     */
    GetSearchStrategy(query: GetSearchStrategyRequest): Promise<GetSearchStrategyResponse>;
    /**
     * 获取查询策略详情。
     */
    ListSearchStrategies(query: ListSearchStrategiesRequest): Promise<ListSearchStrategiesResponse>;
    /**
     * 删除查询策略。
     */
    RemoveSearchStrategy(query: RemoveSearchStrategyRequest): Promise<RemoveSearchStrategyResponse>;
    /**
     * 支持dryrun。
     */
    UpdateSearchStrategy(query: UpdateSearchStrategyRequest): Promise<UpdateSearchStrategyResponse>;
    /**
     * 为es实例绑定自定义分析器。
     */
    BindESUserAnalyzer(query: BindESUserAnalyzerRequest): Promise<BindESUserAnalyzerResponse>;
    /**
     * 绑定依赖性 Elasticsearch 实例。
     */
    BindEsInstance(query: BindEsInstanceRequest): Promise<BindEsInstanceResponse>;
    /**
     * 查询分析效果测试。（仅限开源兼容版存量应用调用）
     */
    ListQueryProcessorAnalyzerResults(query: ListQueryProcessorAnalyzerResultsRequest): Promise<ListQueryProcessorAnalyzerResultsResponse>;
    /**
     * 为Elasticsearch实例解绑自定义分析器。
     */
    UnbindESUserAnalyzer(query: UnbindESUserAnalyzerRequest): Promise<UnbindESUserAnalyzerResponse>;
    /**
     * 为 opensearch 应用解绑es实例。
     */
    UnbindEsInstance(query: UnbindEsInstanceRequest): Promise<UnbindEsInstanceResponse>;
    /**
     * 验证数据源。
     */
    ValidateDataSources(query: ValidateDataSourcesRequest): Promise<ValidateDataSourcesResponse>;
    /**
     * 查看当前的处理流。
     */
    ListProceedings(query: ListProceedingsRequest): Promise<ListProceedingsResponse>;
    /**
     * 启动一个训练任务。
     */
    CreateFunctionTask(query: CreateFunctionTaskRequest): Promise<CreateFunctionTaskResponse>;
    /**
     * 创建指定功能的一个算法实例。
     */
    CreateFunctionInstance(query: CreateFunctionInstanceRequest): Promise<CreateFunctionInstanceResponse>;
    /**
     * 根据实例名称更新实例信息。
     */
    UpdateFunctionInstance(query: UpdateFunctionInstanceRequest): Promise<UpdateFunctionInstanceResponse>;
    /**
     * 获取当前功能新建实例时使用的版本信息。
     */
    GetFunctionCurrentVersion(query: GetFunctionCurrentVersionRequest): Promise<GetFunctionCurrentVersionResponse>;
    /**
     * 根据实例名称获取实例详情。
     */
    GetFunctionInstance(query: GetFunctionInstanceRequest): Promise<GetFunctionInstanceResponse>;
    /**
     * 获取用户下，符合条件的所有实例。
     */
    ListFunctionInstances(query: ListFunctionInstancesRequest): Promise<ListFunctionInstancesResponse>;
    /**
     * 获取训练记录。返回结果按开始时间降序排序。
     */
    ListFunctionTasks(query: ListFunctionTasksRequest): Promise<ListFunctionTasksResponse>;
    /**
     * 获取app默认使用的算法实例。
     */
    GetFunctionDefaultInstance(query: GetFunctionDefaultInstanceRequest): Promise<GetFunctionDefaultInstanceResponse>;
    /**
     * 删除算法实例，删除前请确保该实例不在使用中，以免影响在线服务。
     */
    DeleteFunctionInstance(query: DeleteFunctionInstanceRequest): Promise<DeleteFunctionInstanceResponse>;
    /**
     * 根据版本ID获取版本信息。
     */
    GetFunctionVersion(query: GetFunctionVersionRequest): Promise<GetFunctionVersionResponse>;
    /**
     * 为指定app设置默认使用的算法实例，自动覆盖上一次设置的默认实例
     * 空表示取消默认实例。
     */
    UpdateFunctionDefaultInstance(query: UpdateFunctionDefaultInstanceRequest): Promise<UpdateFunctionDefaultInstanceResponse>;
    /**
     * 获取训练详情。
     */
    GetFunctionTask(query: GetFunctionTaskRequest): Promise<GetFunctionTaskResponse>;
    /**
     * 删除训练记录。正在训练中的记录无法删除。
     */
    DeleteFunctionTask(query: DeleteFunctionTaskRequest): Promise<DeleteFunctionTaskResponse>;
    /**
     * 删标签接口。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查标签接口。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 打标签接口。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 创建指定功能下的算法资源。
     */
    CreateFunctionResource(query: CreateFunctionResourceRequest): Promise<CreateFunctionResourceResponse>;
    /**
     * 获取指定名称的算法资源。
     */
    GetFunctionResource(query: GetFunctionResourceRequest): Promise<GetFunctionResourceResponse>;
    /**
     * 获取算法资源列表。
     */
    ListFunctionResources(query: ListFunctionResourcesRequest): Promise<ListFunctionResourcesResponse>;
    /**
     * 删除指定算法资源。
     */
    DeleteFunctionResource(query: DeleteFunctionResourceRequest): Promise<DeleteFunctionResourceResponse>;
    /**
     * 更新算法资源。
     */
    UpdateFunctionResource(query: UpdateFunctionResourceRequest): Promise<UpdateFunctionResourceResponse>;
}
export default OPENSEARCH;
