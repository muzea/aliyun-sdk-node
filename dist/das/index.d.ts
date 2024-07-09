import { AddHDMInstanceRequest } from "./AddHDMInstance/req";
import { AddHDMInstanceResponse } from "./AddHDMInstance/res";
import { EnableSqlConcurrencyControlRequest } from "./EnableSqlConcurrencyControl/req";
import { EnableSqlConcurrencyControlResponse } from "./EnableSqlConcurrencyControl/res";
import { DisableSqlConcurrencyControlRequest } from "./DisableSqlConcurrencyControl/req";
import { DisableSqlConcurrencyControlResponse } from "./DisableSqlConcurrencyControl/res";
import { DisableAllSqlConcurrencyControlRulesRequest } from "./DisableAllSqlConcurrencyControlRules/req";
import { DisableAllSqlConcurrencyControlRulesResponse } from "./DisableAllSqlConcurrencyControlRules/res";
import { GetRunningSqlConcurrencyControlRulesRequest } from "./GetRunningSqlConcurrencyControlRules/req";
import { GetRunningSqlConcurrencyControlRulesResponse } from "./GetRunningSqlConcurrencyControlRules/res";
import { GetSqlConcurrencyControlRulesHistoryRequest } from "./GetSqlConcurrencyControlRulesHistory/req";
import { GetSqlConcurrencyControlRulesHistoryResponse } from "./GetSqlConcurrencyControlRulesHistory/res";
import { GetSqlConcurrencyControlKeywordsFromSqlTextRequest } from "./GetSqlConcurrencyControlKeywordsFromSqlText/req";
import { GetSqlConcurrencyControlKeywordsFromSqlTextResponse } from "./GetSqlConcurrencyControlKeywordsFromSqlText/res";
import { CreateRequestDiagnosisRequest } from "./CreateRequestDiagnosis/req";
import { CreateRequestDiagnosisResponse } from "./CreateRequestDiagnosis/res";
import { GetRequestDiagnosisPageRequest } from "./GetRequestDiagnosisPage/req";
import { GetRequestDiagnosisPageResponse } from "./GetRequestDiagnosisPage/res";
import { GetRequestDiagnosisResultRequest } from "./GetRequestDiagnosisResult/req";
import { GetRequestDiagnosisResultResponse } from "./GetRequestDiagnosisResult/res";
import { StopCloudBenchTaskRequest } from "./StopCloudBenchTask/req";
import { StopCloudBenchTaskResponse } from "./StopCloudBenchTask/res";
import { DeleteCloudBenchTaskRequest } from "./DeleteCloudBenchTask/req";
import { DeleteCloudBenchTaskResponse } from "./DeleteCloudBenchTask/res";
import { CreateCloudBenchTasksRequest } from "./CreateCloudBenchTasks/req";
import { CreateCloudBenchTasksResponse } from "./CreateCloudBenchTasks/res";
import { RunCloudBenchTaskRequest } from "./RunCloudBenchTask/req";
import { RunCloudBenchTaskResponse } from "./RunCloudBenchTask/res";
import { DescribeCloudbenchTaskConfigRequest } from "./DescribeCloudbenchTaskConfig/req";
import { DescribeCloudbenchTaskConfigResponse } from "./DescribeCloudbenchTaskConfig/res";
import { DescribeCloudbenchTaskRequest } from "./DescribeCloudbenchTask/req";
import { DescribeCloudbenchTaskResponse } from "./DescribeCloudbenchTask/res";
import { DescribeCloudBenchTasksRequest } from "./DescribeCloudBenchTasks/req";
import { DescribeCloudBenchTasksResponse } from "./DescribeCloudBenchTasks/res";
import { CreateAdamBenchTaskRequest } from "./CreateAdamBenchTask/req";
import { CreateAdamBenchTaskResponse } from "./CreateAdamBenchTask/res";
import { DeleteStopGatewayRequest } from "./DeleteStopGateway/req";
import { DeleteStopGatewayResponse } from "./DeleteStopGateway/res";
import { CreateDiagnosticReportRequest } from "./CreateDiagnosticReport/req";
import { CreateDiagnosticReportResponse } from "./CreateDiagnosticReport/res";
import { DescribeDiagnosticReportListRequest } from "./DescribeDiagnosticReportList/req";
import { DescribeDiagnosticReportListResponse } from "./DescribeDiagnosticReportList/res";
import { GetSqlOptimizeAdviceRequest } from "./GetSqlOptimizeAdvice/req";
import { GetSqlOptimizeAdviceResponse } from "./GetSqlOptimizeAdvice/res";
import { UpdateAutoSqlOptimizeStatusRequest } from "./UpdateAutoSqlOptimizeStatus/req";
import { UpdateAutoSqlOptimizeStatusResponse } from "./UpdateAutoSqlOptimizeStatus/res";
import { GetInstanceSqlOptimizeStatisticRequest } from "./GetInstanceSqlOptimizeStatistic/req";
import { GetInstanceSqlOptimizeStatisticResponse } from "./GetInstanceSqlOptimizeStatistic/res";
import { DescribeCacheAnalysisJobsRequest } from "./DescribeCacheAnalysisJobs/req";
import { DescribeCacheAnalysisJobsResponse } from "./DescribeCacheAnalysisJobs/res";
import { CreateCacheAnalysisJobRequest } from "./CreateCacheAnalysisJob/req";
import { CreateCacheAnalysisJobResponse } from "./CreateCacheAnalysisJob/res";
import { DescribeCacheAnalysisJobRequest } from "./DescribeCacheAnalysisJob/req";
import { DescribeCacheAnalysisJobResponse } from "./DescribeCacheAnalysisJob/res";
import { GetInstanceInspectionsRequest } from "./GetInstanceInspections/req";
import { GetInstanceInspectionsResponse } from "./GetInstanceInspections/res";
import { SetEventSubscriptionRequest } from "./SetEventSubscription/req";
import { SetEventSubscriptionResponse } from "./SetEventSubscription/res";
import { GetEventSubscriptionRequest } from "./GetEventSubscription/req";
import { GetEventSubscriptionResponse } from "./GetEventSubscription/res";
import { GetAutonomousNotifyEventContentRequest } from "./GetAutonomousNotifyEventContent/req";
import { GetAutonomousNotifyEventContentResponse } from "./GetAutonomousNotifyEventContent/res";
import { GetAutonomousNotifyEventsInRangeRequest } from "./GetAutonomousNotifyEventsInRange/req";
import { GetAutonomousNotifyEventsInRangeResponse } from "./GetAutonomousNotifyEventsInRange/res";
import { DescribeHotBigKeysRequest } from "./DescribeHotBigKeys/req";
import { DescribeHotBigKeysResponse } from "./DescribeHotBigKeys/res";
import { DescribeTopHotKeysRequest } from "./DescribeTopHotKeys/req";
import { DescribeTopHotKeysResponse } from "./DescribeTopHotKeys/res";
import { DescribeTopBigKeysRequest } from "./DescribeTopBigKeys/req";
import { DescribeTopBigKeysResponse } from "./DescribeTopBigKeys/res";
import { DescribeHotKeysRequest } from "./DescribeHotKeys/req";
import { DescribeHotKeysResponse } from "./DescribeHotKeys/res";
import { GetQueryOptimizeExecErrorStatsRequest } from "./GetQueryOptimizeExecErrorStats/req";
import { GetQueryOptimizeExecErrorStatsResponse } from "./GetQueryOptimizeExecErrorStats/res";
import { GetQueryOptimizeExecErrorSampleRequest } from "./GetQueryOptimizeExecErrorSample/req";
import { GetQueryOptimizeExecErrorSampleResponse } from "./GetQueryOptimizeExecErrorSample/res";
import { GetQueryOptimizeSolutionRequest } from "./GetQueryOptimizeSolution/req";
import { GetQueryOptimizeSolutionResponse } from "./GetQueryOptimizeSolution/res";
import { GetQueryOptimizeRuleListRequest } from "./GetQueryOptimizeRuleList/req";
import { GetQueryOptimizeRuleListResponse } from "./GetQueryOptimizeRuleList/res";
import { GetQueryOptimizeDataTrendRequest } from "./GetQueryOptimizeDataTrend/req";
import { GetQueryOptimizeDataTrendResponse } from "./GetQueryOptimizeDataTrend/res";
import { GetQueryOptimizeDataTopRequest } from "./GetQueryOptimizeDataTop/req";
import { GetQueryOptimizeDataTopResponse } from "./GetQueryOptimizeDataTop/res";
import { GetQueryOptimizeDataStatsRequest } from "./GetQueryOptimizeDataStats/req";
import { GetQueryOptimizeDataStatsResponse } from "./GetQueryOptimizeDataStats/res";
import { CreateQueryOptimizeTagRequest } from "./CreateQueryOptimizeTag/req";
import { CreateQueryOptimizeTagResponse } from "./CreateQueryOptimizeTag/res";
import { GetQueryOptimizeTagRequest } from "./GetQueryOptimizeTag/req";
import { GetQueryOptimizeTagResponse } from "./GetQueryOptimizeTag/res";
import { GetQueryOptimizeShareUrlRequest } from "./GetQueryOptimizeShareUrl/req";
import { GetQueryOptimizeShareUrlResponse } from "./GetQueryOptimizeShareUrl/res";
import { GetAsyncErrorRequestStatByCodeRequest } from "./GetAsyncErrorRequestStatByCode/req";
import { GetAsyncErrorRequestStatByCodeResponse } from "./GetAsyncErrorRequestStatByCode/res";
import { GetAsyncErrorRequestStatResultRequest } from "./GetAsyncErrorRequestStatResult/req";
import { GetAsyncErrorRequestStatResultResponse } from "./GetAsyncErrorRequestStatResult/res";
import { GetAsyncErrorRequestListByCodeRequest } from "./GetAsyncErrorRequestListByCode/req";
import { GetAsyncErrorRequestListByCodeResponse } from "./GetAsyncErrorRequestListByCode/res";
import { GetErrorRequestSampleRequest } from "./GetErrorRequestSample/req";
import { GetErrorRequestSampleResponse } from "./GetErrorRequestSample/res";
import { GetFullRequestOriginStatByInstanceIdRequest } from "./GetFullRequestOriginStatByInstanceId/req";
import { GetFullRequestOriginStatByInstanceIdResponse } from "./GetFullRequestOriginStatByInstanceId/res";
import { GetFullRequestStatResultByInstanceIdRequest } from "./GetFullRequestStatResultByInstanceId/req";
import { GetFullRequestStatResultByInstanceIdResponse } from "./GetFullRequestStatResultByInstanceId/res";
import { GetFullRequestSampleByInstanceIdRequest } from "./GetFullRequestSampleByInstanceId/req";
import { GetFullRequestSampleByInstanceIdResponse } from "./GetFullRequestSampleByInstanceId/res";
import { GetDasSQLLogHotDataRequest } from "./GetDasSQLLogHotData/req";
import { GetDasSQLLogHotDataResponse } from "./GetDasSQLLogHotData/res";
import { EnableDasProRequest } from "./EnableDasPro/req";
import { EnableDasProResponse } from "./EnableDasPro/res";
import { DisableDasProRequest } from "./DisableDasPro/req";
import { DisableDasProResponse } from "./DisableDasPro/res";
import { GetDasProServiceUsageRequest } from "./GetDasProServiceUsage/req";
import { GetDasProServiceUsageResponse } from "./GetDasProServiceUsage/res";
import { DescribeInstanceDasProRequest } from "./DescribeInstanceDasPro/req";
import { DescribeInstanceDasProResponse } from "./DescribeInstanceDasPro/res";
import { GetRedisAllSessionRequest } from "./GetRedisAllSession/req";
import { GetRedisAllSessionResponse } from "./GetRedisAllSession/res";
import { KillInstanceAllSessionRequest } from "./KillInstanceAllSession/req";
import { KillInstanceAllSessionResponse } from "./KillInstanceAllSession/res";
import { CreateKillInstanceSessionTaskRequest } from "./CreateKillInstanceSessionTask/req";
import { CreateKillInstanceSessionTaskResponse } from "./CreateKillInstanceSessionTask/res";
import { GetKillInstanceSessionTaskResultRequest } from "./GetKillInstanceSessionTaskResult/req";
import { GetKillInstanceSessionTaskResultResponse } from "./GetKillInstanceSessionTaskResult/res";
import { GetMySQLAllSessionAsyncRequest } from "./GetMySQLAllSessionAsync/req";
import { GetMySQLAllSessionAsyncResponse } from "./GetMySQLAllSessionAsync/res";
import { UpdateAutoThrottleRulesAsyncRequest } from "./UpdateAutoThrottleRulesAsync/req";
import { UpdateAutoThrottleRulesAsyncResponse } from "./UpdateAutoThrottleRulesAsync/res";
import { GetAutoThrottleRulesRequest } from "./GetAutoThrottleRules/req";
import { GetAutoThrottleRulesResponse } from "./GetAutoThrottleRules/res";
import { DisableAutoThrottleRulesRequest } from "./DisableAutoThrottleRules/req";
import { DisableAutoThrottleRulesResponse } from "./DisableAutoThrottleRules/res";
import { UpdateAutoResourceOptimizeRulesAsyncRequest } from "./UpdateAutoResourceOptimizeRulesAsync/req";
import { UpdateAutoResourceOptimizeRulesAsyncResponse } from "./UpdateAutoResourceOptimizeRulesAsync/res";
import { GetAutoResourceOptimizeRulesRequest } from "./GetAutoResourceOptimizeRules/req";
import { GetAutoResourceOptimizeRulesResponse } from "./GetAutoResourceOptimizeRules/res";
import { DisableAutoResourceOptimizeRulesRequest } from "./DisableAutoResourceOptimizeRules/req";
import { DisableAutoResourceOptimizeRulesResponse } from "./DisableAutoResourceOptimizeRules/res";
import { ModifyAutoScalingConfigRequest } from "./ModifyAutoScalingConfig/req";
import { ModifyAutoScalingConfigResponse } from "./ModifyAutoScalingConfig/res";
import { DescribeAutoScalingConfigRequest } from "./DescribeAutoScalingConfig/req";
import { DescribeAutoScalingConfigResponse } from "./DescribeAutoScalingConfig/res";
import { DisableInstanceDasConfigRequest } from "./DisableInstanceDasConfig/req";
import { DisableInstanceDasConfigResponse } from "./DisableInstanceDasConfig/res";
import { GetPartitionsHeatmapRequest } from "./GetPartitionsHeatmap/req";
import { GetPartitionsHeatmapResponse } from "./GetPartitionsHeatmap/res";
import { GetPfsSqlSampleRequest } from "./GetPfsSqlSample/req";
import { GetPfsSqlSampleResponse } from "./GetPfsSqlSample/res";
import { GetPfsMetricTrendsRequest } from "./GetPfsMetricTrends/req";
import { GetPfsMetricTrendsResponse } from "./GetPfsMetricTrends/res";
import { GetPfsSqlSummariesRequest } from "./GetPfsSqlSummaries/req";
import { GetPfsSqlSummariesResponse } from "./GetPfsSqlSummaries/res";
import { GetEndpointSwitchTaskRequest } from "./GetEndpointSwitchTask/req";
import { GetEndpointSwitchTaskResponse } from "./GetEndpointSwitchTask/res";
import { GetHDMAliyunResourceSyncResultRequest } from "./GetHDMAliyunResourceSyncResult/req";
import { GetHDMAliyunResourceSyncResultResponse } from "./GetHDMAliyunResourceSyncResult/res";
import { GetHDMLastAliyunResourceSyncResultRequest } from "./GetHDMLastAliyunResourceSyncResult/req";
import { GetHDMLastAliyunResourceSyncResultResponse } from "./GetHDMLastAliyunResourceSyncResult/res";
import { SyncHDMAliyunResourceRequest } from "./SyncHDMAliyunResource/req";
import { SyncHDMAliyunResourceResponse } from "./SyncHDMAliyunResource/res";
import { GetDBInstanceConnectivityDiagnosisRequest } from "./GetDBInstanceConnectivityDiagnosis/req";
import { GetDBInstanceConnectivityDiagnosisResponse } from "./GetDBInstanceConnectivityDiagnosis/res";
import { GetInstanceMissingIndexListRequest } from "./GetInstanceMissingIndexList/req";
import { GetInstanceMissingIndexListResponse } from "./GetInstanceMissingIndexList/res";
import { GetBlockingDetailListRequest } from "./GetBlockingDetailList/req";
import { GetBlockingDetailListResponse } from "./GetBlockingDetailList/res";
import { GetDeadLockDetailListRequest } from "./GetDeadLockDetailList/req";
import { GetDeadLockDetailListResponse } from "./GetDeadLockDetailList/res";
import { DescribeAutoScalingHistoryRequest } from "./DescribeAutoScalingHistory/req";
import { DescribeAutoScalingHistoryResponse } from "./DescribeAutoScalingHistory/res";
import { GetMongoDBCurrentOpRequest } from "./GetMongoDBCurrentOp/req";
import { GetMongoDBCurrentOpResponse } from "./GetMongoDBCurrentOp/res";
import { CreateStorageAnalysisTaskRequest } from "./CreateStorageAnalysisTask/req";
import { CreateStorageAnalysisTaskResponse } from "./CreateStorageAnalysisTask/res";
import { GetStorageAnalysisResultRequest } from "./GetStorageAnalysisResult/req";
import { GetStorageAnalysisResultResponse } from "./GetStorageAnalysisResult/res";
import { GetAutoIncrementUsageStatisticRequest } from "./GetAutoIncrementUsageStatistic/req";
import { GetAutoIncrementUsageStatisticResponse } from "./GetAutoIncrementUsageStatistic/res";
import { DescribeSqlLogStatisticRequest } from "./DescribeSqlLogStatistic/req";
import { DescribeSqlLogStatisticResponse } from "./DescribeSqlLogStatistic/res";
import { ModifySqlLogConfigRequest } from "./ModifySqlLogConfig/req";
import { ModifySqlLogConfigResponse } from "./ModifySqlLogConfig/res";
import { DescribeSqlLogConfigRequest } from "./DescribeSqlLogConfig/req";
import { DescribeSqlLogConfigResponse } from "./DescribeSqlLogConfig/res";
import { DescribeSqlLogTasksRequest } from "./DescribeSqlLogTasks/req";
import { DescribeSqlLogTasksResponse } from "./DescribeSqlLogTasks/res";
import { CreateSqlLogTaskRequest } from "./CreateSqlLogTask/req";
import { CreateSqlLogTaskResponse } from "./CreateSqlLogTask/res";
import { DescribeSqlLogRecordsRequest } from "./DescribeSqlLogRecords/req";
import { DescribeSqlLogRecordsResponse } from "./DescribeSqlLogRecords/res";
import { DescribeSqlLogTaskRequest } from "./DescribeSqlLogTask/req";
import { DescribeSqlLogTaskResponse } from "./DescribeSqlLogTask/res";

interface DAS {
    /**
     * 调用AddHDMInstance接口，将数据库实例接入DAS。
     */
    AddHDMInstance(query: AddHDMInstanceRequest): Promise<AddHDMInstanceResponse>;
    /**
     * 调用EnableSqlConcurrencyControl接口，启用SQL限流来控制数据库请求访问量和SQL并发量。
     */
    EnableSqlConcurrencyControl(query: EnableSqlConcurrencyControlRequest): Promise<EnableSqlConcurrencyControlResponse>;
    /**
     * 调用DisableSqlConcurrencyControl接口，关闭指定限流规则。
     */
    DisableSqlConcurrencyControl(query: DisableSqlConcurrencyControlRequest): Promise<DisableSqlConcurrencyControlResponse>;
    /**
     * 调用DisableAllSqlConcurrencyControlRules接口，关闭全部正在执行的限流规则。
     */
    DisableAllSqlConcurrencyControlRules(query: DisableAllSqlConcurrencyControlRulesRequest): Promise<DisableAllSqlConcurrencyControlRulesResponse>;
    /**
     * 调用GetRunningSqlConcurrencyControlRules接口，获取正在执行的限流规则。
     */
    GetRunningSqlConcurrencyControlRules(query: GetRunningSqlConcurrencyControlRulesRequest): Promise<GetRunningSqlConcurrencyControlRulesResponse>;
    /**
     * 调用GetSqlConcurrencyControlRulesHistory接口，获取正在执行或被触发过的限流规则。
     */
    GetSqlConcurrencyControlRulesHistory(query: GetSqlConcurrencyControlRulesHistoryRequest): Promise<GetSqlConcurrencyControlRulesHistoryResponse>;
    /**
     * 调用GetSqlConcurrencyControlKeywordsFromSqlText接口，根据原始SQL语句，生成限流关键词串。
     */
    GetSqlConcurrencyControlKeywordsFromSqlText(query: GetSqlConcurrencyControlKeywordsFromSqlTextRequest): Promise<GetSqlConcurrencyControlKeywordsFromSqlTextResponse>;
    /**
     * 调用CreateRequestDiagnosis接口，发起SQL诊断请求。
     */
    CreateRequestDiagnosis(query: CreateRequestDiagnosisRequest): Promise<CreateRequestDiagnosisResponse>;
    /**
     * 调用GetRequestDiagnosisPage接口，分页获取SQL诊断历史记录。
     */
    GetRequestDiagnosisPage(query: GetRequestDiagnosisPageRequest): Promise<GetRequestDiagnosisPageResponse>;
    /**
     * 调用GetRequestDiagnosisResult接口，查询SQL诊断的结果。
     */
    GetRequestDiagnosisResult(query: GetRequestDiagnosisResultRequest): Promise<GetRequestDiagnosisResultResponse>;
    /**
     * 调用StopCloudBenchTask接口，停止压测任务。
     */
    StopCloudBenchTask(query: StopCloudBenchTaskRequest): Promise<StopCloudBenchTaskResponse>;
    /**
     * 调用DeleteCloudBenchTask接口，删除压测任务。
     */
    DeleteCloudBenchTask(query: DeleteCloudBenchTaskRequest): Promise<DeleteCloudBenchTaskResponse>;
    /**
     * 调用CreateCloudBenchTasks接口，创建压测任务。
     */
    CreateCloudBenchTasks(query: CreateCloudBenchTasksRequest): Promise<CreateCloudBenchTasksResponse>;
    /**
     * 调用RunCloudBenchTask接口，执行压测任务。
     */
    RunCloudBenchTask(query: RunCloudBenchTaskRequest): Promise<RunCloudBenchTaskResponse>;
    /**
     * 调用DescribeCloudbenchTaskConfig接口，查询压测任务配置信息。
     */
    DescribeCloudbenchTaskConfig(query: DescribeCloudbenchTaskConfigRequest): Promise<DescribeCloudbenchTaskConfigResponse>;
    /**
     * 调用DescribeCloudbenchTask接口，查询压测任务。
     */
    DescribeCloudbenchTask(query: DescribeCloudbenchTaskRequest): Promise<DescribeCloudbenchTaskResponse>;
    /**
     * 调用DescribeCloudBenchTasks接口，查询压测任务列表。
     */
    DescribeCloudBenchTasks(query: DescribeCloudBenchTasksRequest): Promise<DescribeCloudBenchTasksResponse>;
    /**
     * 通过CreateAdamBenchTask接口，在ADAM上创建压测任务。
     */
    CreateAdamBenchTask(query: CreateAdamBenchTaskRequest): Promise<CreateAdamBenchTaskResponse>;
    /**
     * 调用DeleteStopGateway接口，删除已停止的DBGateway元数据。
     */
    DeleteStopGateway(query: DeleteStopGatewayRequest): Promise<DeleteStopGatewayResponse>;
    /**
     * 调用CreateDiagnosticReport接口，创建诊断报告。
     */
    CreateDiagnosticReport(query: CreateDiagnosticReportRequest): Promise<CreateDiagnosticReportResponse>;
    /**
     * 调用DescribeDiagnosticReportList接口，查询诊断报告。
     */
    DescribeDiagnosticReportList(query: DescribeDiagnosticReportListRequest): Promise<DescribeDiagnosticReportListResponse>;
    /**
     * 调用GetSqlOptimizeAdvice接口，查询DAS自动SQL优化产生的诊断建议。
     */
    GetSqlOptimizeAdvice(query: GetSqlOptimizeAdviceRequest): Promise<GetSqlOptimizeAdviceResponse>;
    /**
     * 调用UpdateAutoSqlOptimizeStatus接口，批量开启、修改或关闭自动SQL优化功能。
     */
    UpdateAutoSqlOptimizeStatus(query: UpdateAutoSqlOptimizeStatusRequest): Promise<UpdateAutoSqlOptimizeStatusResponse>;
    /**
     * 调用GetInstanceSqlOptimizeStatistic接口，获取指定时间段内自动SQL优化任务的统计数据，包括任务总数和最大收益等。
     */
    GetInstanceSqlOptimizeStatistic(query: GetInstanceSqlOptimizeStatisticRequest): Promise<GetInstanceSqlOptimizeStatisticResponse>;
    /**
     * 调用DescribeCacheAnalysisJobs接口，查询缓存分析任务列表。
     */
    DescribeCacheAnalysisJobs(query: DescribeCacheAnalysisJobsRequest): Promise<DescribeCacheAnalysisJobsResponse>;
    /**
     * 调用CreateCacheAnalysisJob接口，创建缓存分析任务。
     */
    CreateCacheAnalysisJob(query: CreateCacheAnalysisJobRequest): Promise<CreateCacheAnalysisJobResponse>;
    /**
     * 调用DescribeCacheAnalysisJob接口，查询缓存分析任务详情。
     */
    DescribeCacheAnalysisJob(query: DescribeCacheAnalysisJobRequest): Promise<DescribeCacheAnalysisJobResponse>;
    /**
     * 调用GetInstanceInspections接口，获取数据库实例巡检评分的结果。
     */
    GetInstanceInspections(query: GetInstanceInspectionsRequest): Promise<GetInstanceInspectionsResponse>;
    /**
     * 调用SetEventSubscription接口，配置数据库实例的事件订阅设置。
     */
    SetEventSubscription(query: SetEventSubscriptionRequest): Promise<SetEventSubscriptionResponse>;
    /**
     * 调用GetEventSubscription接口，获取数据库实例的事件订阅设置。
     */
    GetEventSubscription(query: GetEventSubscriptionRequest): Promise<GetEventSubscriptionResponse>;
    /**
     * 调用GetAutonomousNotifyEventContent接口，获取指定数据库实例自治事件的内容。
     */
    GetAutonomousNotifyEventContent(query: GetAutonomousNotifyEventContentRequest): Promise<GetAutonomousNotifyEventContentResponse>;
    /**
     * 调用GetAutonomousNotifyEventsInRange接口，获取指定类型或范围的通知事件。
     */
    GetAutonomousNotifyEventsInRange(query: GetAutonomousNotifyEventsInRangeRequest): Promise<GetAutonomousNotifyEventsInRangeResponse>;
    /**
     * 调用DescribeHotBigKeys接口，实时获取当前内存中的热Key和大Key。
     */
    DescribeHotBigKeys(query: DescribeHotBigKeysRequest): Promise<DescribeHotBigKeysResponse>;
    /**
     * 调用DescribeTopHotKeys接口，获取一段时间内排名前100的热Key。
     */
    DescribeTopHotKeys(query: DescribeTopHotKeysRequest): Promise<DescribeTopHotKeysResponse>;
    /**
     * 调用DescribeTopBigKeys接口，获取一段时间内排名前100的大Key。
     */
    DescribeTopBigKeys(query: DescribeTopBigKeysRequest): Promise<DescribeTopBigKeysResponse>;
    /**
     * 调用DescribeHotKeys接口，查询Redis实例的热Key。
     */
    DescribeHotKeys(query: DescribeHotKeysRequest): Promise<DescribeHotKeysResponse>;
    /**
     * 调用GetQueryOptimizeExecErrorStats接口，获取执行失败的模板数据。
     */
    GetQueryOptimizeExecErrorStats(query: GetQueryOptimizeExecErrorStatsRequest): Promise<GetQueryOptimizeExecErrorStatsResponse>;
    /**
     * 调用GetQueryOptimizeExecErrorSample接口，获取执行失败的样本数据。
     */
    GetQueryOptimizeExecErrorSample(query: GetQueryOptimizeExecErrorSampleRequest): Promise<GetQueryOptimizeExecErrorSampleResponse>;
    /**
     * 调用GetQueryOptimizeSolution接口，获取治理建议。
     */
    GetQueryOptimizeSolution(query: GetQueryOptimizeSolutionRequest): Promise<GetQueryOptimizeSolutionResponse>;
    /**
     * 调用GetQueryOptimizeRuleList接口，获取规则列表。
     */
    GetQueryOptimizeRuleList(query: GetQueryOptimizeRuleListRequest): Promise<GetQueryOptimizeRuleListResponse>;
    /**
     * 调用GetQueryOptimizeDataTrend接口，获取查询治理趋势数据。
     */
    GetQueryOptimizeDataTrend(query: GetQueryOptimizeDataTrendRequest): Promise<GetQueryOptimizeDataTrendResponse>;
    /**
     * 调用GetQueryOptimizeDataTop接口，获取查询治理实例红榜和实例黑榜的数据。
     */
    GetQueryOptimizeDataTop(query: GetQueryOptimizeDataTopRequest): Promise<GetQueryOptimizeDataTopResponse>;
    /**
     * 调用GetQueryOptimizeDataStats接口，获取查询治理模板数据。
     */
    GetQueryOptimizeDataStats(query: GetQueryOptimizeDataStatsRequest): Promise<GetQueryOptimizeDataStatsResponse>;
    /**
     * 调用CreateQueryOptimizeTag接口，对目标SQL进行打标。
     */
    CreateQueryOptimizeTag(query: CreateQueryOptimizeTagRequest): Promise<CreateQueryOptimizeTagResponse>;
    /**
     * 调用GetQueryOptimizeTag接口，获取指定SQL的标签。
     */
    GetQueryOptimizeTag(query: GetQueryOptimizeTagRequest): Promise<GetQueryOptimizeTagResponse>;
    /**
     * 调用GetQueryOptimizeShareUrl接口，获取查询治理的分享链接。
     */
    GetQueryOptimizeShareUrl(query: GetQueryOptimizeShareUrlRequest): Promise<GetQueryOptimizeShareUrlResponse>;
    /**
     * 调用GetAsyncErrorRequestStatByCode接口，异步查询数据库实例SQL洞察结果中的MySQL错误码以及每个错误码对应的SQL数量。
     */
    GetAsyncErrorRequestStatByCode(query: GetAsyncErrorRequestStatByCodeRequest): Promise<GetAsyncErrorRequestStatByCodeResponse>;
    /**
     * 调用GetAsyncErrorRequestStatResult接口，异步获取数据库实例SQL洞察结果中指定SQL的执行错误次数。
     */
    GetAsyncErrorRequestStatResult(query: GetAsyncErrorRequestStatResultRequest): Promise<GetAsyncErrorRequestStatResultResponse>;
    /**
     * 调用GetAsyncErrorRequestListByCode接口，异步查询数据库实例SQL洞察结果中产生指定MySQL错误码的SQL ID。
     */
    GetAsyncErrorRequestListByCode(query: GetAsyncErrorRequestListByCodeRequest): Promise<GetAsyncErrorRequestListByCodeResponse>;
    /**
     * 调用GetErrorRequestSample接口，异步查询数据库实例SQL洞察结果中执行错误的SQL样本数据，最多返回指定时间范围内20条数据。
     */
    GetErrorRequestSample(query: GetErrorRequestSampleRequest): Promise<GetErrorRequestSampleResponse>;
    /**
     * 调用GetFullRequestOriginStatByInstanceId接口，按照访问来源统计数据库实例SQL洞察结果中的全量请求数据。
     */
    GetFullRequestOriginStatByInstanceId(query: GetFullRequestOriginStatByInstanceIdRequest): Promise<GetFullRequestOriginStatByInstanceIdResponse>;
    /**
     * 调用GetFullRequestStatResultByInstanceId接口，按照SQL ID异步统计数据库实例SQL洞察结果中的全量请求数据。
     */
    GetFullRequestStatResultByInstanceId(query: GetFullRequestStatResultByInstanceIdRequest): Promise<GetFullRequestStatResultByInstanceIdResponse>;
    /**
     * 调用GetFullRequestSampleByInstanceId接口，按照SQL ID查询数据库实例SQL洞察结果中的SQL样本数据，最大返回20条样本数据。
     */
    GetFullRequestSampleByInstanceId(query: GetFullRequestSampleByInstanceIdRequest): Promise<GetFullRequestSampleByInstanceIdResponse>;
    /**
     * 调用GetDasSQLLogHotDat接口，查询数据库实例7天内DAS企业版 V2或企业版 V3的热存储数据明细。
     */
    GetDasSQLLogHotData(query: GetDasSQLLogHotDataRequest): Promise<GetDasSQLLogHotDataResponse>;
    /**
     * 调用EnableDasPro接口，为指定数据库实例开启DAS企业版 V1。
     */
    EnableDasPro(query: EnableDasProRequest): Promise<EnableDasProResponse>;
    /**
     * 调用DisableDasPro接口，关闭指定数据库实例的DAS企业版 V1。
     */
    DisableDasPro(query: DisableDasProRequest): Promise<DisableDasProResponse>;
    /**
     * 调用GetDasProServiceUsage接口，查询数据库实例DAS企业版 V1或企业版 V2存储空间的使用情况。
     */
    GetDasProServiceUsage(query: GetDasProServiceUsageRequest): Promise<GetDasProServiceUsageResponse>;
    /**
     * 调用DescribeInstanceDasPro接口，查询指定数据库实例是否开启了DAS企业版 V1或企业版 V2。
     */
    DescribeInstanceDasPro(query: DescribeInstanceDasProRequest): Promise<DescribeInstanceDasProResponse>;
    /**
     * 调用GetRedisAllSession接口，获取Redis实例当前会话数据。
     */
    GetRedisAllSession(query: GetRedisAllSessionRequest): Promise<GetRedisAllSessionResponse>;
    /**
     * 调用KillInstanceAllSession接口，结束指定实例上的全部会话。
     */
    KillInstanceAllSession(query: KillInstanceAllSessionRequest): Promise<KillInstanceAllSessionResponse>;
    /**
     * 调用CreateKillInstanceSessionTask接口，创建结束会话的任务。
     */
    CreateKillInstanceSessionTask(query: CreateKillInstanceSessionTaskRequest): Promise<CreateKillInstanceSessionTaskResponse>;
    /**
     * 调用GetKillInstanceSessionTaskResult接口，获取结束会话任务的结果。
     */
    GetKillInstanceSessionTaskResult(query: GetKillInstanceSessionTaskResultRequest): Promise<GetKillInstanceSessionTaskResultResponse>;
    /**
     * 调用GetMySQLAllSessionAsync接口，采用异步方式获取实例当前会话数据，并按照不同维度统计会话信息。
     */
    GetMySQLAllSessionAsync(query: GetMySQLAllSessionAsyncRequest): Promise<GetMySQLAllSessionAsyncResponse>;
    /**
     * 调用UpdateAutoThrottleRulesAsync接口，采用异步方式，批量设置指定数据库实例的自动SQL限流配置参数。
     */
    UpdateAutoThrottleRulesAsync(query: UpdateAutoThrottleRulesAsyncRequest): Promise<UpdateAutoThrottleRulesAsyncResponse>;
    /**
     * 获取指定数据库实例的自动SQL限流规则。
     */
    GetAutoThrottleRules(query: GetAutoThrottleRulesRequest): Promise<GetAutoThrottleRulesResponse>;
    /**
     * 调用DisableAutoThrottleRules接口，批量关闭指定数据库实例的自动SQL限流功能。
     */
    DisableAutoThrottleRules(query: DisableAutoThrottleRulesRequest): Promise<DisableAutoThrottleRulesResponse>;
    /**
     * 调用UpdateAutoResourceOptimizeRulesAsync接口，采用异步方式，批量设置指定数据库实例空间碎片自动回收功能的配置参数。
     */
    UpdateAutoResourceOptimizeRulesAsync(query: UpdateAutoResourceOptimizeRulesAsyncRequest): Promise<UpdateAutoResourceOptimizeRulesAsyncResponse>;
    /**
     * 获取指定数据库实例的空间碎片自动回收规则。
     */
    GetAutoResourceOptimizeRules(query: GetAutoResourceOptimizeRulesRequest): Promise<GetAutoResourceOptimizeRulesResponse>;
    /**
     * 调用DisableAutoResourceOptimizeRules接口，批量关闭指定数据库实例的空间碎片自动回收功能。
     */
    DisableAutoResourceOptimizeRules(query: DisableAutoResourceOptimizeRulesRequest): Promise<DisableAutoResourceOptimizeRulesResponse>;
    /**
     * 调用ModifyAutoScalingConfig接口，修改实例弹性伸缩功能配置。
     */
    ModifyAutoScalingConfig(query: ModifyAutoScalingConfigRequest): Promise<ModifyAutoScalingConfigResponse>;
    /**
     * 调用DescribeAutoScalingConfig接口，查询实例弹性伸缩功能配置信息。
     */
    DescribeAutoScalingConfig(query: DescribeAutoScalingConfigRequest): Promise<DescribeAutoScalingConfigResponse>;
    /**
     * 调用DisableInstanceDasConfig接口，关闭指定弹性伸缩功能。
     */
    DisableInstanceDasConfig(query: DisableInstanceDasConfigRequest): Promise<DisableInstanceDasConfigResponse>;
    /**
     * 调用GetPartitionsHeatmap接口，查看PolarDB-X 2.0分区访问热度和数据热点。
     */
    GetPartitionsHeatmap(query: GetPartitionsHeatmapRequest): Promise<GetPartitionsHeatmapResponse>;
    /**
     * 调用GetPfsSqlSample接口，获取性能洞察（新版）功能的SQL样本数据。
     */
    GetPfsSqlSample(query: GetPfsSqlSampleRequest): Promise<GetPfsSqlSampleResponse>;
    /**
     * 调用GetPfsMetricTrends接口，查询数据库实例性能洞察（新版）指定指标的趋势。
     */
    GetPfsMetricTrends(query: GetPfsMetricTrendsRequest): Promise<GetPfsMetricTrendsResponse>;
    /**
     * 调用GetPfsSqlSummaries接口，查询数据库实例性能洞察（新版）中按照SQL ID维度的全量请求数据。
     */
    GetPfsSqlSummaries(query: GetPfsSqlSummariesRequest): Promise<GetPfsSqlSummariesResponse>;
    GetEndpointSwitchTask(query: GetEndpointSwitchTaskRequest): Promise<GetEndpointSwitchTaskResponse>;
    GetHDMAliyunResourceSyncResult(query: GetHDMAliyunResourceSyncResultRequest): Promise<GetHDMAliyunResourceSyncResultResponse>;
    GetHDMLastAliyunResourceSyncResult(query: GetHDMLastAliyunResourceSyncResultRequest): Promise<GetHDMLastAliyunResourceSyncResultResponse>;
    SyncHDMAliyunResource(query: SyncHDMAliyunResourceRequest): Promise<SyncHDMAliyunResourceResponse>;
    /**
     * 获取用户输入IP地址到指定数据库实例的网络连通性诊断结果。
     */
    GetDBInstanceConnectivityDiagnosis(query: GetDBInstanceConnectivityDiagnosisRequest): Promise<GetDBInstanceConnectivityDiagnosisResponse>;
    /**
     * 调用GetInstanceMissingIndexList接口，查询RDS SQL Server实例所有缺失索引的详细信息。
     */
    GetInstanceMissingIndexList(query: GetInstanceMissingIndexListRequest): Promise<GetInstanceMissingIndexListResponse>;
    /**
     * 调用GetBlockingDetailList接口，查询RDS SQL Server实例的锁阻塞列表。
     */
    GetBlockingDetailList(query: GetBlockingDetailListRequest): Promise<GetBlockingDetailListResponse>;
    /**
     * 调用GetDeadLockDetailList接口，查询RDS SQL Server实例的死锁详情列表。
     */
    GetDeadLockDetailList(query: GetDeadLockDetailListRequest): Promise<GetDeadLockDetailListResponse>;
    /**
     * 调用DescribeAutoScalingHistory接口，查询实例弹性伸缩历史信息。
     */
    DescribeAutoScalingHistory(query: DescribeAutoScalingHistoryRequest): Promise<DescribeAutoScalingHistoryResponse>;
    /**
     * 调用GetMongoDBCurrentOp接口，获取MongoDB实例当前会话。
     */
    GetMongoDBCurrentOp(query: GetMongoDBCurrentOpRequest): Promise<GetMongoDBCurrentOpResponse>;
    /**
     * 调用CreateStorageAnalysisTask接口，创建空间分析任务，获取数据库及表的空间使用数据。
     */
    CreateStorageAnalysisTask(query: CreateStorageAnalysisTaskRequest): Promise<CreateStorageAnalysisTaskResponse>;
    /**
     * 调用GetStorageAnalysisResult接口，查询空间分析任务状态和分析结果。
     */
    GetStorageAnalysisResult(query: GetStorageAnalysisResultRequest): Promise<GetStorageAnalysisResultResponse>;
    /**
     * 调用GetAutoIncrementUsageStatistic接口，获取表自增ID的使用数据。
     */
    GetAutoIncrementUsageStatistic(query: GetAutoIncrementUsageStatisticRequest): Promise<GetAutoIncrementUsageStatisticResponse>;
    /**
     * 调用DescribeSqlLogStatistic接口，查询DAS企业版的数据统计信息。
     */
    DescribeSqlLogStatistic(query: DescribeSqlLogStatisticRequest): Promise<DescribeSqlLogStatisticResponse>;
    /**
     * 调用ModifySqlLogConfig接口，为数据库实例开启或配置DAS企业版。
     */
    ModifySqlLogConfig(query: ModifySqlLogConfigRequest): Promise<ModifySqlLogConfigResponse>;
    /**
     * 调用DescribeSqlLogConfig接口，查询数据库实例的DAS企业版配置信息。
     */
    DescribeSqlLogConfig(query: DescribeSqlLogConfigRequest): Promise<DescribeSqlLogConfigResponse>;
    /**
     * 调用DescribeSqlLogTasks接口，查询数据库实例DAS企业版的离线任务。
     */
    DescribeSqlLogTasks(query: DescribeSqlLogTasksRequest): Promise<DescribeSqlLogTasksResponse>;
    /**
     * 调用CreateSqlLogTask接口，创建DAS企业版的离线任务。
     */
    CreateSqlLogTask(query: CreateSqlLogTaskRequest): Promise<CreateSqlLogTaskResponse>;
    /**
     * 调用DescribeSqlLogRecords接口，查询DAS企业版日志明细。
     */
    DescribeSqlLogRecords(query: DescribeSqlLogRecordsRequest): Promise<DescribeSqlLogRecordsResponse>;
    /**
     * 调用DescribeSqlLogTask接口，查询DAS企业版离线任务详情。
     */
    DescribeSqlLogTask(query: DescribeSqlLogTaskRequest): Promise<DescribeSqlLogTaskResponse>;
}
export default DAS;
