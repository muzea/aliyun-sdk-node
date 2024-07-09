import { DescribeAlertSceneRequest } from "./DescribeAlertScene/req";
import { DescribeAlertSceneResponse } from "./DescribeAlertScene/res";
import { DescribeAlertSourceRequest } from "./DescribeAlertSource/req";
import { DescribeAlertSourceResponse } from "./DescribeAlertSource/res";
import { DescribeEventDisposeRequest } from "./DescribeEventDispose/req";
import { DescribeEventDisposeResponse } from "./DescribeEventDispose/res";
import { DescribeAlertSourceWithEventRequest } from "./DescribeAlertSourceWithEvent/req";
import { DescribeAlertSourceWithEventResponse } from "./DescribeAlertSourceWithEvent/res";
import { DescribeCloudSiemAssetsCounterRequest } from "./DescribeCloudSiemAssetsCounter/req";
import { DescribeCloudSiemAssetsCounterResponse } from "./DescribeCloudSiemAssetsCounter/res";
import { UpdateWhiteRuleListRequest } from "./UpdateWhiteRuleList/req";
import { UpdateWhiteRuleListResponse } from "./UpdateWhiteRuleList/res";
import { DescribeCloudSiemAssetsRequest } from "./DescribeCloudSiemAssets/req";
import { DescribeCloudSiemAssetsResponse } from "./DescribeCloudSiemAssets/res";
import { DeleteWhiteRuleListRequest } from "./DeleteWhiteRuleList/req";
import { DeleteWhiteRuleListResponse } from "./DeleteWhiteRuleList/res";
import { DescribeWafScopeRequest } from "./DescribeWafScope/req";
import { DescribeWafScopeResponse } from "./DescribeWafScope/res";
import { DescribeAlertSceneByEventRequest } from "./DescribeAlertSceneByEvent/req";
import { DescribeAlertSceneByEventResponse } from "./DescribeAlertSceneByEvent/res";
import { DescribeWhiteRuleListRequest } from "./DescribeWhiteRuleList/req";
import { DescribeWhiteRuleListResponse } from "./DescribeWhiteRuleList/res";
import { DescribeAlertsRequest } from "./DescribeAlerts/req";
import { DescribeAlertsResponse } from "./DescribeAlerts/res";
import { DescribeAlertsWithEventRequest } from "./DescribeAlertsWithEvent/req";
import { DescribeAlertsWithEventResponse } from "./DescribeAlertsWithEvent/res";
import { DescribeAlertsCountRequest } from "./DescribeAlertsCount/req";
import { DescribeAlertsCountResponse } from "./DescribeAlertsCount/res";
import { DescribeCloudSiemEventDetailRequest } from "./DescribeCloudSiemEventDetail/req";
import { DescribeCloudSiemEventDetailResponse } from "./DescribeCloudSiemEventDetail/res";
import { DescribeAttackTimeLineRequest } from "./DescribeAttackTimeLine/req";
import { DescribeAttackTimeLineResponse } from "./DescribeAttackTimeLine/res";
import { PostEventDisposeAndWhiteruleListRequest } from "./PostEventDisposeAndWhiteruleList/req";
import { PostEventDisposeAndWhiteruleListResponse } from "./PostEventDisposeAndWhiteruleList/res";
import { DescribeEventCountByThreatLevelRequest } from "./DescribeEventCountByThreatLevel/req";
import { DescribeEventCountByThreatLevelResponse } from "./DescribeEventCountByThreatLevel/res";
import { DescribeCloudSiemEventsRequest } from "./DescribeCloudSiemEvents/req";
import { DescribeCloudSiemEventsResponse } from "./DescribeCloudSiemEvents/res";
import { OpenDeliveryRequest } from "./OpenDelivery/req";
import { OpenDeliveryResponse } from "./OpenDelivery/res";
import { ListDeliveryRequest } from "./ListDelivery/req";
import { ListDeliveryResponse } from "./ListDelivery/res";
import { CloseDeliveryRequest } from "./CloseDelivery/req";
import { CloseDeliveryResponse } from "./CloseDelivery/res";
import { GetCapacityRequest } from "./GetCapacity/req";
import { GetCapacityResponse } from "./GetCapacity/res";
import { DescribeAuthRequest } from "./DescribeAuth/req";
import { DescribeAuthResponse } from "./DescribeAuth/res";
import { ListRdUsersRequest } from "./ListRdUsers/req";
import { ListRdUsersResponse } from "./ListRdUsers/res";
import { ListProjectLogStoresRequest } from "./ListProjectLogStores/req";
import { ListProjectLogStoresResponse } from "./ListProjectLogStores/res";
import { DescribeUserBuyStatusRequest } from "./DescribeUserBuyStatus/req";
import { DescribeUserBuyStatusResponse } from "./DescribeUserBuyStatus/res";
import { AddUserSourceLogConfigRequest } from "./AddUserSourceLogConfig/req";
import { AddUserSourceLogConfigResponse } from "./AddUserSourceLogConfig/res";
import { DescribeCsImportedProdStatusByUserRequest } from "./DescribeCsImportedProdStatusByUser/req";
import { DescribeCsImportedProdStatusByUserResponse } from "./DescribeCsImportedProdStatusByUser/res";
import { ListUserProdLogsRequest } from "./ListUserProdLogs/req";
import { ListUserProdLogsResponse } from "./ListUserProdLogs/res";
import { ListUsersByProdRequest } from "./ListUsersByProd/req";
import { ListUsersByProdResponse } from "./ListUsersByProd/res";
import { SubmitJobsRequest } from "./SubmitJobs/req";
import { SubmitJobsResponse } from "./SubmitJobs/res";
import { AddUserRequest } from "./AddUser/req";
import { AddUserResponse } from "./AddUser/res";
import { DescribeServiceStatusRequest } from "./DescribeServiceStatus/req";
import { DescribeServiceStatusResponse } from "./DescribeServiceStatus/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { EnableAccessForCloudSiemRequest } from "./EnableAccessForCloudSiem/req";
import { EnableAccessForCloudSiemResponse } from "./EnableAccessForCloudSiem/res";
import { EnableServiceForCloudSiemRequest } from "./EnableServiceForCloudSiem/req";
import { EnableServiceForCloudSiemResponse } from "./EnableServiceForCloudSiem/res";
import { DescribeAlertTypeRequest } from "./DescribeAlertType/req";
import { DescribeAlertTypeResponse } from "./DescribeAlertType/res";
import { DescribeLogFieldsRequest } from "./DescribeLogFields/req";
import { DescribeLogFieldsResponse } from "./DescribeLogFields/res";
import { PostRuleStatusChangeRequest } from "./PostRuleStatusChange/req";
import { PostRuleStatusChangeResponse } from "./PostRuleStatusChange/res";
import { DeleteCustomizeRuleRequest } from "./DeleteCustomizeRule/req";
import { DeleteCustomizeRuleResponse } from "./DeleteCustomizeRule/res";
import { PostCustomizeRuleTestRequest } from "./PostCustomizeRuleTest/req";
import { PostCustomizeRuleTestResponse } from "./PostCustomizeRuleTest/res";
import { PostFinishCustomizeRuleTestRequest } from "./PostFinishCustomizeRuleTest/req";
import { PostFinishCustomizeRuleTestResponse } from "./PostFinishCustomizeRuleTest/res";
import { DescribeOperatorsRequest } from "./DescribeOperators/req";
import { DescribeOperatorsResponse } from "./DescribeOperators/res";
import { ListCloudSiemCustomizeRulesRequest } from "./ListCloudSiemCustomizeRules/req";
import { ListCloudSiemCustomizeRulesResponse } from "./ListCloudSiemCustomizeRules/res";
import { DescribeAggregateFunctionRequest } from "./DescribeAggregateFunction/req";
import { DescribeAggregateFunctionResponse } from "./DescribeAggregateFunction/res";
import { DescribeCustomizeRuleTestHistogramRequest } from "./DescribeCustomizeRuleTestHistogram/req";
import { DescribeCustomizeRuleTestHistogramResponse } from "./DescribeCustomizeRuleTestHistogram/res";
import { DescribeLogTypeRequest } from "./DescribeLogType/req";
import { DescribeLogTypeResponse } from "./DescribeLogType/res";
import { DescribeCustomizeRuleCountRequest } from "./DescribeCustomizeRuleCount/req";
import { DescribeCustomizeRuleCountResponse } from "./DescribeCustomizeRuleCount/res";
import { DescribeCustomizeRuleTestRequest } from "./DescribeCustomizeRuleTest/req";
import { DescribeCustomizeRuleTestResponse } from "./DescribeCustomizeRuleTest/res";
import { ListCustomizeRuleTestResultRequest } from "./ListCustomizeRuleTestResult/req";
import { ListCustomizeRuleTestResultResponse } from "./ListCustomizeRuleTestResult/res";
import { ListCloudSiemPredefinedRulesRequest } from "./ListCloudSiemPredefinedRules/req";
import { ListCloudSiemPredefinedRulesResponse } from "./ListCloudSiemPredefinedRules/res";
import { DescribeLogSourceRequest } from "./DescribeLogSource/req";
import { DescribeLogSourceResponse } from "./DescribeLogSource/res";
import { PostCustomizeRuleRequest } from "./PostCustomizeRule/req";
import { PostCustomizeRuleResponse } from "./PostCustomizeRule/res";
import { BatchJobSubmitRequest } from "./BatchJobSubmit/req";
import { BatchJobSubmitResponse } from "./BatchJobSubmit/res";
import { DescribeJobStatusRequest } from "./DescribeJobStatus/req";
import { DescribeJobStatusResponse } from "./DescribeJobStatus/res";
import { RestoreCapacityRequest } from "./RestoreCapacity/req";
import { RestoreCapacityResponse } from "./RestoreCapacity/res";
import { DescribeAutomateResponseConfigFeatureRequest } from "./DescribeAutomateResponseConfigFeature/req";
import { DescribeAutomateResponseConfigFeatureResponse } from "./DescribeAutomateResponseConfigFeature/res";
import { PostAutomateResponseConfigRequest } from "./PostAutomateResponseConfig/req";
import { PostAutomateResponseConfigResponse } from "./PostAutomateResponseConfig/res";
import { ListAutomateResponseConfigsRequest } from "./ListAutomateResponseConfigs/req";
import { ListAutomateResponseConfigsResponse } from "./ListAutomateResponseConfigs/res";
import { DescribeAutomateResponseConfigCounterRequest } from "./DescribeAutomateResponseConfigCounter/req";
import { DescribeAutomateResponseConfigCounterResponse } from "./DescribeAutomateResponseConfigCounter/res";
import { DeleteAutomateResponseConfigRequest } from "./DeleteAutomateResponseConfig/req";
import { DeleteAutomateResponseConfigResponse } from "./DeleteAutomateResponseConfig/res";
import { UpdateAutomateResponseConfigStatusRequest } from "./UpdateAutomateResponseConfigStatus/req";
import { UpdateAutomateResponseConfigStatusResponse } from "./UpdateAutomateResponseConfigStatus/res";
import { PostEventWhiteruleListRequest } from "./PostEventWhiteruleList/req";
import { PostEventWhiteruleListResponse } from "./PostEventWhiteruleList/res";
import { DescribeAlertsWithEntityRequest } from "./DescribeAlertsWithEntity/req";
import { DescribeAlertsWithEntityResponse } from "./DescribeAlertsWithEntity/res";
import { DescribeAutomateResponseConfigPlayBooksRequest } from "./DescribeAutomateResponseConfigPlayBooks/req";
import { DescribeAutomateResponseConfigPlayBooksResponse } from "./DescribeAutomateResponseConfigPlayBooks/res";
import { DescribeDisposeAndPlaybookRequest } from "./DescribeDisposeAndPlaybook/req";
import { DescribeDisposeAndPlaybookResponse } from "./DescribeDisposeAndPlaybook/res";
import { DescribeEntityInfoRequest } from "./DescribeEntityInfo/req";
import { DescribeEntityInfoResponse } from "./DescribeEntityInfo/res";
import { DoSelfDelegateRequest } from "./DoSelfDelegate/req";
import { DoSelfDelegateResponse } from "./DoSelfDelegate/res";
import { GetLogsRequest } from "./GetLogs/req";
import { GetLogsResponse } from "./GetLogs/res";
import { ListOperationRequest } from "./ListOperation/req";
import { ListOperationResponse } from "./ListOperation/res";
import { ShowQuickAnalysisRequest } from "./ShowQuickAnalysis/req";
import { ShowQuickAnalysisResponse } from "./ShowQuickAnalysis/res";
import { GetQuickQueryRequest } from "./GetQuickQuery/req";
import { GetQuickQueryResponse } from "./GetQuickQuery/res";
import { ListQuickQueryRequest } from "./ListQuickQuery/req";
import { ListQuickQueryResponse } from "./ListQuickQuery/res";
import { SaveQuickQueryRequest } from "./SaveQuickQuery/req";
import { SaveQuickQueryResponse } from "./SaveQuickQuery/res";
import { DoQuickFieldRequest } from "./DoQuickField/req";
import { DoQuickFieldResponse } from "./DoQuickField/res";
import { GetHistogramsRequest } from "./GetHistograms/req";
import { GetHistogramsResponse } from "./GetHistograms/res";
import { DescribeLogStoreRequest } from "./DescribeLogStore/req";
import { DescribeLogStoreResponse } from "./DescribeLogStore/res";
import { SetStorageRequest } from "./SetStorage/req";
import { SetStorageResponse } from "./SetStorage/res";
import { GetStorageRequest } from "./GetStorage/req";
import { GetStorageResponse } from "./GetStorage/res";
import { DescribeDisposeStrategyPlaybookRequest } from "./DescribeDisposeStrategyPlaybook/req";
import { DescribeDisposeStrategyPlaybookResponse } from "./DescribeDisposeStrategyPlaybook/res";
import { ListDisposeStrategyRequest } from "./ListDisposeStrategy/req";
import { ListDisposeStrategyResponse } from "./ListDisposeStrategy/res";
import { DescribeStorageRequest } from "./DescribeStorage/req";
import { DescribeStorageResponse } from "./DescribeStorage/res";
import { DescribeScopeUsersRequest } from "./DescribeScopeUsers/req";
import { DescribeScopeUsersResponse } from "./DescribeScopeUsers/res";
import { DeleteDataSourceLogRequest } from "./DeleteDataSourceLog/req";
import { DeleteDataSourceLogResponse } from "./DeleteDataSourceLog/res";
import { ListDataSourceTypesRequest } from "./ListDataSourceTypes/req";
import { ListDataSourceTypesResponse } from "./ListDataSourceTypes/res";
import { DescribeDataSourceParametersRequest } from "./DescribeDataSourceParameters/req";
import { DescribeDataSourceParametersResponse } from "./DescribeDataSourceParameters/res";
import { ModifyDataSourceLogRequest } from "./ModifyDataSourceLog/req";
import { ModifyDataSourceLogResponse } from "./ModifyDataSourceLog/res";
import { ModifyDataSourceRequest } from "./ModifyDataSource/req";
import { ModifyDataSourceResponse } from "./ModifyDataSource/res";
import { ListAllProdsRequest } from "./ListAllProds/req";
import { ListAllProdsResponse } from "./ListAllProds/res";
import { ListAccountsByLogRequest } from "./ListAccountsByLog/req";
import { ListAccountsByLogResponse } from "./ListAccountsByLog/res";
import { ListBindDataSourcesRequest } from "./ListBindDataSources/req";
import { ListBindDataSourcesResponse } from "./ListBindDataSources/res";
import { AddDataSourceLogRequest } from "./AddDataSourceLog/req";
import { AddDataSourceLogResponse } from "./AddDataSourceLog/res";
import { ListDataSourceLogsRequest } from "./ListDataSourceLogs/req";
import { ListDataSourceLogsResponse } from "./ListDataSourceLogs/res";
import { AddDataSourceRequest } from "./AddDataSource/req";
import { AddDataSourceResponse } from "./AddDataSource/res";
import { ListImportedLogsByProdRequest } from "./ListImportedLogsByProd/req";
import { ListImportedLogsByProdResponse } from "./ListImportedLogsByProd/res";
import { DeleteDataSourceRequest } from "./DeleteDataSource/req";
import { DeleteDataSourceResponse } from "./DeleteDataSource/res";
import { DescribeProdCountRequest } from "./DescribeProdCount/req";
import { DescribeProdCountResponse } from "./DescribeProdCount/res";
import { DescribeDataSourceInstanceRequest } from "./DescribeDataSourceInstance/req";
import { DescribeDataSourceInstanceResponse } from "./DescribeDataSourceInstance/res";
import { SubmitImportLogTasksRequest } from "./SubmitImportLogTasks/req";
import { SubmitImportLogTasksResponse } from "./SubmitImportLogTasks/res";
import { ListAccountAccessIdRequest } from "./ListAccountAccessId/req";
import { ListAccountAccessIdResponse } from "./ListAccountAccessId/res";
import { DescribeImportedLogCountRequest } from "./DescribeImportedLogCount/req";
import { DescribeImportedLogCountResponse } from "./DescribeImportedLogCount/res";
import { DeleteBindAccountRequest } from "./DeleteBindAccount/req";
import { DeleteBindAccountResponse } from "./DeleteBindAccount/res";
import { BindAccountRequest } from "./BindAccount/req";
import { BindAccountResponse } from "./BindAccount/res";
import { ListBindAccountRequest } from "./ListBindAccount/req";
import { ListBindAccountResponse } from "./ListBindAccount/res";
import { ModifyBindAccountRequest } from "./ModifyBindAccount/req";
import { ModifyBindAccountResponse } from "./ModifyBindAccount/res";

interface CLOUD_SIEM {
    /**
     * 获取告警加白场景。
     */
    DescribeAlertScene(query: DescribeAlertSceneRequest): Promise<DescribeAlertSceneResponse>;
    /**
     * 获取告警数据源列表。
     */
    DescribeAlertSource(query: DescribeAlertSourceRequest): Promise<DescribeAlertSourceResponse>;
    /**
     * 获取事件历史处置策略。
     */
    DescribeEventDispose(query: DescribeEventDisposeRequest): Promise<DescribeEventDisposeResponse>;
    /**
     * 获取事件关联告警数据源列表。
     */
    DescribeAlertSourceWithEvent(query: DescribeAlertSourceWithEventRequest): Promise<DescribeAlertSourceWithEventResponse>;
    /**
     * 获取事件关联各类型资产计数。
     */
    DescribeCloudSiemAssetsCounter(query: DescribeCloudSiemAssetsCounterRequest): Promise<DescribeCloudSiemAssetsCounterResponse>;
    /**
     * 添加或更新告警加白规则。
     */
    UpdateWhiteRuleList(query: UpdateWhiteRuleListRequest): Promise<UpdateWhiteRuleListResponse>;
    /**
     * 获取事件关联资产列表。
     */
    DescribeCloudSiemAssets(query: DescribeCloudSiemAssetsRequest): Promise<DescribeCloudSiemAssetsResponse>;
    /**
     * 删除指定ID的告警加白规则。
     */
    DeleteWhiteRuleList(query: DeleteWhiteRuleListRequest): Promise<DeleteWhiteRuleListResponse>;
    /**
     * 获取作用域用户名下waf实例的域名防护列表。
     */
    DescribeWafScope(query: DescribeWafScopeRequest): Promise<DescribeWafScopeResponse>;
    /**
     * 获取告警加白场景与加白对象列表。
     */
    DescribeAlertSceneByEvent(query: DescribeAlertSceneByEventRequest): Promise<DescribeAlertSceneByEventResponse>;
    /**
     * 获取告警加白规则列表。
     */
    DescribeWhiteRuleList(query: DescribeWhiteRuleListRequest): Promise<DescribeWhiteRuleListResponse>;
    /**
     * 获取用户的告警列表。
     */
    DescribeAlerts(query: DescribeAlertsRequest): Promise<DescribeAlertsResponse>;
    /**
     * 获取指定事件关联的告警列表。
     */
    DescribeAlertsWithEvent(query: DescribeAlertsWithEventRequest): Promise<DescribeAlertsWithEventResponse>;
    /**
     * 获取告警不同级别计数。
     */
    DescribeAlertsCount(query: DescribeAlertsCountRequest): Promise<DescribeAlertsCountResponse>;
    /**
     * 获取事件详情。
     */
    DescribeCloudSiemEventDetail(query: DescribeCloudSiemEventDetailRequest): Promise<DescribeCloudSiemEventDetailResponse>;
    /**
     * 获取事件相关的告警时间线数据。
     */
    DescribeAttackTimeLine(query: DescribeAttackTimeLineRequest): Promise<DescribeAttackTimeLineResponse>;
    /**
     * 提交事件处置信息。
     */
    PostEventDisposeAndWhiteruleList(query: PostEventDisposeAndWhiteruleListRequest): Promise<PostEventDisposeAndWhiteruleListResponse>;
    /**
     * 获取事件各类型计数。
     */
    DescribeEventCountByThreatLevel(query: DescribeEventCountByThreatLevelRequest): Promise<DescribeEventCountByThreatLevelResponse>;
    /**
     * 获取siem事件列表。
     */
    DescribeCloudSiemEvents(query: DescribeCloudSiemEventsRequest): Promise<DescribeCloudSiemEventsResponse>;
    /**
     * 开通已经接入产品日志的投递。
     */
    OpenDelivery(query: OpenDeliveryRequest): Promise<OpenDeliveryResponse>;
    /**
     * 查看整个企业或者普通成员接入威胁分析的产品、日志列表，以及这些日志的数据投递情况。
     */
    ListDelivery(query: ListDeliveryRequest): Promise<ListDeliveryResponse>;
    /**
     * 关闭某个已经接入的云产品日志的投递，关闭后用户侧的LogStore里不再有对应日志的新内容。
     */
    CloseDelivery(query: CloseDeliveryRequest): Promise<CloseDeliveryResponse>;
    /**
     * 获取当前威胁分析存储的使用量以及预付费的购买量，单位为GB。
     */
    GetCapacity(query: GetCapacityRequest): Promise<GetCapacityResponse>;
    /**
     * 检查阿里云账号是否已经给SIEM授权，已经创建了AliyunServiceRoleForSasCloudSiem角色。
     */
    DescribeAuth(query: DescribeAuthRequest): Promise<DescribeAuthResponse>;
    /**
     * 列举已经接入威胁分析多账号管控的阿里云账号，被纳管到威胁分析的阿里云账号才可以使用威胁分析日志接入、事件处置等功能。
     */
    ListRdUsers(query: ListRdUsersRequest): Promise<ListRdUsersResponse>;
    /**
     * 根据云产品默认的sls project名字的pattern， logstore名字的pattern查找是否存在对应的project和logstore。
     */
    ListProjectLogStores(query: ListProjectLogStoresRequest): Promise<ListProjectLogStoresResponse>;
    /**
     * 查看当前阿里云用户或对应的阿里云企业组织账号是否已经购买威胁分析。
     */
    DescribeUserBuyStatus(query: DescribeUserBuyStatusRequest): Promise<DescribeUserBuyStatusResponse>;
    /**
     * 添加日志接入任务，将对应的日志数据接入到威胁分析中以便后续的告警、事件分析。
     */
    AddUserSourceLogConfig(query: AddUserSourceLogConfigRequest): Promise<AddUserSourceLogConfigResponse>;
    /**
     * 查看阿里云产品的开通情况。
     */
    DescribeCsImportedProdStatusByUser(query: DescribeCsImportedProdStatusByUserRequest): Promise<DescribeCsImportedProdStatusByUserResponse>;
    /**
     * 根据产品列举用户接入日志的列表。
     */
    ListUserProdLogs(query: ListUserProdLogsRequest): Promise<ListUserProdLogsResponse>;
    /**
     * 按产品查看用户接入的日志详情。
     */
    ListUsersByProd(query: ListUsersByProdRequest): Promise<ListUsersByProdResponse>;
    /**
     * 批量提交日志接入任务，将对应日志数据接入到威胁分析体系中，进行告警事件分析。
     */
    SubmitJobs(query: SubmitJobsRequest): Promise<SubmitJobsResponse>;
    /**
     * 将指定云账号添加到威胁分析的多账号管控，只有纳管后的云账号才可以试用日志接入等威胁分析功能。
     */
    AddUser(query: AddUserRequest): Promise<AddUserResponse>;
    /**
     * 查看资源目录是否已给威胁分析授权。
     */
    DescribeServiceStatus(query: DescribeServiceStatusRequest): Promise<DescribeServiceStatusResponse>;
    /**
     * 解除已经添加到威胁分析-多账号管控资源目录阿里云账号纳管，如有需要可以重新添加。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 用户授权接口，点击将创建威胁分析角色AliyunServiceRoleForSasCloudSiem。
     */
    EnableAccessForCloudSiem(query: EnableAccessForCloudSiemRequest): Promise<EnableAccessForCloudSiemResponse>;
    /**
     * 为威胁分析开通资源目录授权，需要使用资源目录管理员调用。
     */
    EnableServiceForCloudSiem(query: EnableServiceForCloudSiemRequest): Promise<EnableServiceForCloudSiemResponse>;
    /**
     * 获取自定义规则可选威胁类型列表。
     */
    DescribeAlertType(query: DescribeAlertTypeRequest): Promise<DescribeAlertTypeResponse>;
    /**
     * 获取自定义规则可配置字段列表。
     */
    DescribeLogFields(query: DescribeLogFieldsRequest): Promise<DescribeLogFieldsResponse>;
    /**
     * 更新自定义规则状态。
     */
    PostRuleStatusChange(query: PostRuleStatusChangeRequest): Promise<PostRuleStatusChangeResponse>;
    /**
     * 根据指定ID自定义规则。
     */
    DeleteCustomizeRule(query: DeleteCustomizeRuleRequest): Promise<DeleteCustomizeRuleResponse>;
    /**
     * 提交自定义规则测试。
     */
    PostCustomizeRuleTest(query: PostCustomizeRuleTestRequest): Promise<PostCustomizeRuleTestResponse>;
    /**
     * 结束自定义规则测试。
     */
    PostFinishCustomizeRuleTest(query: PostFinishCustomizeRuleTestRequest): Promise<PostFinishCustomizeRuleTestResponse>;
    /**
     * 获取自定义规则操作符列表。
     */
    DescribeOperators(query: DescribeOperatorsRequest): Promise<DescribeOperatorsResponse>;
    /**
     * 获取自定义规则列表。
     */
    ListCloudSiemCustomizeRules(query: ListCloudSiemCustomizeRulesRequest): Promise<ListCloudSiemCustomizeRulesResponse>;
    /**
     * 获取自定义规则支持的聚合函数列表。
     */
    DescribeAggregateFunction(query: DescribeAggregateFunctionRequest): Promise<DescribeAggregateFunctionResponse>;
    /**
     * 获取自定义规则业务测试结果图表。
     */
    DescribeCustomizeRuleTestHistogram(query: DescribeCustomizeRuleTestHistogramRequest): Promise<DescribeCustomizeRuleTestHistogramResponse>;
    /**
     * 获取自定义规则可配置日志类型。
     */
    DescribeLogType(query: DescribeLogTypeRequest): Promise<DescribeLogTypeResponse>;
    /**
     * 获取自定义规则计数。
     */
    DescribeCustomizeRuleCount(query: DescribeCustomizeRuleCountRequest): Promise<DescribeCustomizeRuleCountResponse>;
    /**
     * 获取模拟测试场景下的历史模拟数据。
     */
    DescribeCustomizeRuleTest(query: DescribeCustomizeRuleTestRequest): Promise<DescribeCustomizeRuleTestResponse>;
    /**
     * 获取自定义规则测试结果列表。
     */
    ListCustomizeRuleTestResult(query: ListCustomizeRuleTestResultRequest): Promise<ListCustomizeRuleTestResultResponse>;
    /**
     * 获取预定义规则列表。
     */
    ListCloudSiemPredefinedRules(query: ListCloudSiemPredefinedRulesRequest): Promise<ListCloudSiemPredefinedRulesResponse>;
    /**
     * 获取自定义规则可配置日志源列表。
     */
    DescribeLogSource(query: DescribeLogSourceRequest): Promise<DescribeLogSourceResponse>;
    /**
     * 添加或者更新自定义规则。
     */
    PostCustomizeRule(query: PostCustomizeRuleRequest): Promise<PostCustomizeRuleResponse>;
    /**
     * 支持用户通过资源目录架构配置日志接入任务。
     */
    BatchJobSubmit(query: BatchJobSubmitRequest): Promise<BatchJobSubmitResponse>;
    /**
     * 按提交任务生成的submitId获取接入任务的状态。
     */
    DescribeJobStatus(query: DescribeJobStatusRequest): Promise<DescribeJobStatusResponse>;
    /**
     * 释放存储空间，降低存储使用量，注意，该操作不可逆，存在数据丢失的风险，谨慎使用。
     */
    RestoreCapacity(query: RestoreCapacityRequest): Promise<RestoreCapacityResponse>;
    /**
     * 获取自动化规则策略可配置字段及操作符。
     */
    DescribeAutomateResponseConfigFeature(query: DescribeAutomateResponseConfigFeatureRequest): Promise<DescribeAutomateResponseConfigFeatureResponse>;
    /**
     * 添加或更新自动化响应规则。
     */
    PostAutomateResponseConfig(query: PostAutomateResponseConfigRequest): Promise<PostAutomateResponseConfigResponse>;
    /**
     * 获取自动化响应规则列表。
     */
    ListAutomateResponseConfigs(query: ListAutomateResponseConfigsRequest): Promise<ListAutomateResponseConfigsResponse>;
    /**
     * 获取自动化响应规则计数。
     */
    DescribeAutomateResponseConfigCounter(query: DescribeAutomateResponseConfigCounterRequest): Promise<DescribeAutomateResponseConfigCounterResponse>;
    /**
     * 删除指定ID的自动化响应规则。
     */
    DeleteAutomateResponseConfig(query: DeleteAutomateResponseConfigRequest): Promise<DeleteAutomateResponseConfigResponse>;
    /**
     * 更新自动化响应规则状态。
     */
    UpdateAutomateResponseConfigStatus(query: UpdateAutomateResponseConfigStatusRequest): Promise<UpdateAutomateResponseConfigStatusResponse>;
    /**
     * 提交告警加白规则。
     */
    PostEventWhiteruleList(query: PostEventWhiteruleListRequest): Promise<PostEventWhiteruleListResponse>;
    /**
     * 获取实体关联的告警列表。
     */
    DescribeAlertsWithEntity(query: DescribeAlertsWithEntityRequest): Promise<DescribeAlertsWithEntityResponse>;
    /**
     * 获取用户自定义剧本列表。
     */
    DescribeAutomateResponseConfigPlayBooks(query: DescribeAutomateResponseConfigPlayBooksRequest): Promise<DescribeAutomateResponseConfigPlayBooksResponse>;
    /**
     * 获取需要被处置的实体列表与剧本列表。
     */
    DescribeDisposeAndPlaybook(query: DescribeDisposeAndPlaybookRequest): Promise<DescribeDisposeAndPlaybookResponse>;
    /**
     * 获取实体详情。
     */
    DescribeEntityInfo(query: DescribeEntityInfoRequest): Promise<DescribeEntityInfoResponse>;
    /**
     * 威胁分析管理员对普通成员进行授权和取消授权的操作，使之能够查看或者取消查看日志分析、告警等资源。
     */
    DoSelfDelegate(query: DoSelfDelegateRequest): Promise<DoSelfDelegateResponse>;
    /**
     * 返回日志分析中查询分析SQL语句执行的结果。
     */
    GetLogs(query: GetLogsRequest): Promise<GetLogsResponse>;
    /**
     * 获取当前登录用户所具备的资源操作权限，威胁分析服务存在两种身份，管理员和普通成员，管理员具备所有权限，普通成员只能访问受限资源。
     */
    ListOperation(query: ListOperationRequest): Promise<ListOperationResponse>;
    /**
     * 在日志分析中展示能够用来进行快速分析（索引字段）的字段列表。
     */
    ShowQuickAnalysis(query: ShowQuickAnalysisRequest): Promise<ShowQuickAnalysisResponse>;
    /**
     * 根据自定义的快速查询名字，获取日志分析中存储的快速查询分析SQL语句。
     */
    GetQuickQuery(query: GetQuickQueryRequest): Promise<GetQuickQueryResponse>;
    /**
     * 获取日志分析页面针对当前LogStore的所有快速查询列表。
     */
    ListQuickQuery(query: ListQuickQueryRequest): Promise<ListQuickQueryResponse>;
    /**
     * 将日志分析中的查询分析SQL语句保存为快速查询，节省SQL书写时间。
     */
    SaveQuickQuery(query: SaveQuickQueryRequest): Promise<SaveQuickQueryResponse>;
    /**
     * 普通成员登录看到的日志分析页面中，可以通过左侧的快速分析字段进行查询分析。
     */
    DoQuickField(query: DoQuickFieldRequest): Promise<DoQuickFieldResponse>;
    /**
     * 返回查询分析SQL执行结果的数据直方图数据，可以用来在前端渲染直方图展示。
     */
    GetHistograms(query: GetHistogramsRequest): Promise<GetHistogramsResponse>;
    /**
     * 返回用户侧日志服务中威胁分析使用的LogStore的相关属性，如名字、TTL等。
     */
    DescribeLogStore(query: DescribeLogStoreRequest): Promise<DescribeLogStoreResponse>;
    /**
     * 保存用户设置的存储天数，存储地域（region）等信息。
     */
    SetStorage(query: SetStorageRequest): Promise<SetStorageResponse>;
    /**
     * 获取威胁分析与响应产品在用户SLS中创建的存储设置，包含存储天数、存储地域等信息。
     */
    GetStorage(query: GetStorageRequest): Promise<GetStorageResponse>;
    /**
     * 获取处置策略使用的剧本列表。
     */
    DescribeDisposeStrategyPlaybook(query: DescribeDisposeStrategyPlaybookRequest): Promise<DescribeDisposeStrategyPlaybookResponse>;
    /**
     * 获取处置策略列表。
     */
    ListDisposeStrategy(query: ListDisposeStrategyRequest): Promise<ListDisposeStrategyResponse>;
    /**
     * 判断威胁分析用户的存储（用户侧日志服务中LogStore）是否正常。
     */
    DescribeStorage(query: DescribeStorageRequest): Promise<DescribeStorageResponse>;
    /**
     * 获取剧本作用域用户列表。
     */
    DescribeScopeUsers(query: DescribeScopeUsersRequest): Promise<DescribeScopeUsersResponse>;
    /**
     * 删除日志。
     */
    DeleteDataSourceLog(query: DeleteDataSourceLogRequest): Promise<DeleteDataSourceLogResponse>;
    /**
     * 枚举目前威胁分析支持的多云接入数据源类型。
     */
    ListDataSourceTypes(query: ListDataSourceTypesRequest): Promise<ListDataSourceTypesResponse>;
    /**
     * 获取数据源参数详情。
     */
    DescribeDataSourceParameters(query: DescribeDataSourceParametersRequest): Promise<DescribeDataSourceParametersResponse>;
    /**
     * 修改数据源下添加的日志相关说明信息。
     */
    ModifyDataSourceLog(query: ModifyDataSourceLogRequest): Promise<ModifyDataSourceLogResponse>;
    /**
     * 修改已经添加的数据源描述信息。
     */
    ModifyDataSource(query: ModifyDataSourceRequest): Promise<ModifyDataSourceResponse>;
    /**
     * 查看当前威胁分析已经支持的数据接入的云产品列表。
     */
    ListAllProds(query: ListAllProdsRequest): Promise<ListAllProdsResponse>;
    /**
     * 按日志查看账号列表。
     */
    ListAccountsByLog(query: ListAccountsByLogRequest): Promise<ListAccountsByLogResponse>;
    /**
     * 枚举所有数据源。
     */
    ListBindDataSources(query: ListBindDataSourcesRequest): Promise<ListBindDataSourcesResponse>;
    /**
     * 添加日志。
     */
    AddDataSourceLog(query: AddDataSourceLogRequest): Promise<AddDataSourceLogResponse>;
    /**
     * 查看数据源下的日志列表。
     */
    ListDataSourceLogs(query: ListDataSourceLogsRequest): Promise<ListDataSourceLogsResponse>;
    /**
     * 在该绑定的多云账号下添加数据源。
     */
    AddDataSource(query: AddDataSourceRequest): Promise<AddDataSourceResponse>;
    /**
     * 查看该产品下日志接入详情。
     */
    ListImportedLogsByProd(query: ListImportedLogsByProdRequest): Promise<ListImportedLogsByProdResponse>;
    /**
     * 如果已添加的数据源不再使用，可以调用接口删除数据源。
     */
    DeleteDataSource(query: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse>;
    /**
     * 查看阿里云、腾讯云、华为云已经支持接入到威胁分析的云产品数量。
     */
    DescribeProdCount(query: DescribeProdCountRequest): Promise<DescribeProdCountResponse>;
    /**
     * 查看数据源详情。
     */
    DescribeDataSourceInstance(query: DescribeDataSourceInstanceRequest): Promise<DescribeDataSourceInstanceResponse>;
    /**
     * 批量提交接入任务。
     */
    SubmitImportLogTasks(query: SubmitImportLogTasksRequest): Promise<SubmitImportLogTasksResponse>;
    /**
     * 查看已经绑定的多云AccessKeyId列表。
     */
    ListAccountAccessId(query: ListAccountAccessIdRequest): Promise<ListAccountAccessIdResponse>;
    /**
     * 查看接入日志的数量。
     */
    DescribeImportedLogCount(query: DescribeImportedLogCountRequest): Promise<DescribeImportedLogCountResponse>;
    /**
     * 解除已经绑定到威胁分析数据源模块的多云（腾讯云、华为云）子账号AK，解绑后可以更换账号重新绑定。
     */
    DeleteBindAccount(query: DeleteBindAccountRequest): Promise<DeleteBindAccountResponse>;
    /**
     * 绑定云安全中心功能设置-多云资产中设置的多云账号到威胁分析。
     */
    BindAccount(query: BindAccountRequest): Promise<BindAccountResponse>;
    /**
     * 列举已经绑定到威胁分析的多云账号列表。
     */
    ListBindAccount(query: ListBindAccountRequest): Promise<ListBindAccountResponse>;
    /**
     * 修改已经绑定的云账号。
     */
    ModifyBindAccount(query: ModifyBindAccountRequest): Promise<ModifyBindAccountResponse>;
}
export default CLOUD_SIEM;
