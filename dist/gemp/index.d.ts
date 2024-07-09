import { GenerateProblemPictureUploadSignRequest } from "./GenerateProblemPictureUploadSign/req";
import { GenerateProblemPictureUploadSignResponse } from "./GenerateProblemPictureUploadSign/res";
import { DeleteProblemRequest } from "./DeleteProblem/req";
import { DeleteProblemResponse } from "./DeleteProblem/res";
import { UpdateProblemMeasureRequest } from "./UpdateProblemMeasure/req";
import { UpdateProblemMeasureResponse } from "./UpdateProblemMeasure/res";
import { UpdateIntegrationConfigRequest } from "./UpdateIntegrationConfig/req";
import { UpdateIntegrationConfigResponse } from "./UpdateIntegrationConfig/res";
import { DeliverIncidentRequest } from "./DeliverIncident/req";
import { DeliverIncidentResponse } from "./DeliverIncident/res";
import { UpdateProblemNoticeRequest } from "./UpdateProblemNotice/req";
import { UpdateProblemNoticeResponse } from "./UpdateProblemNotice/res";
import { GetSubscriptionRequest } from "./GetSubscription/req";
import { GetSubscriptionResponse } from "./GetSubscription/res";
import { UpdateProblemEffectionServiceRequest } from "./UpdateProblemEffectionService/req";
import { UpdateProblemEffectionServiceResponse } from "./UpdateProblemEffectionService/res";
import { DeleteSubscriptionRequest } from "./DeleteSubscription/req";
import { DeleteSubscriptionResponse } from "./DeleteSubscription/res";
import { RecoverProblemRequest } from "./RecoverProblem/req";
import { RecoverProblemResponse } from "./RecoverProblem/res";
import { ListServicesRequest } from "./ListServices/req";
import { ListServicesResponse } from "./ListServices/res";
import { DeleteIncidentRequest } from "./DeleteIncident/req";
import { DeleteIncidentResponse } from "./DeleteIncident/res";
import { GenerateProblemPictureLinkRequest } from "./GenerateProblemPictureLink/req";
import { GenerateProblemPictureLinkResponse } from "./GenerateProblemPictureLink/res";
import { DeleteProblemEffectionServiceRequest } from "./DeleteProblemEffectionService/req";
import { DeleteProblemEffectionServiceResponse } from "./DeleteProblemEffectionService/res";
import { DisableServiceGroupWebhookRequest } from "./DisableServiceGroupWebhook/req";
import { DisableServiceGroupWebhookResponse } from "./DisableServiceGroupWebhook/res";
import { ListSubscriptionsRequest } from "./ListSubscriptions/req";
import { ListSubscriptionsResponse } from "./ListSubscriptions/res";
import { CreateProblemTimelinesRequest } from "./CreateProblemTimelines/req";
import { CreateProblemTimelinesResponse } from "./CreateProblemTimelines/res";
import { DeleteProblemMeasureRequest } from "./DeleteProblemMeasure/req";
import { DeleteProblemMeasureResponse } from "./DeleteProblemMeasure/res";
import { ListProblemSubtotalsRequest } from "./ListProblemSubtotals/req";
import { ListProblemSubtotalsResponse } from "./ListProblemSubtotals/res";
import { FinishProblemRequest } from "./FinishProblem/req";
import { FinishProblemResponse } from "./FinishProblem/res";
import { RevokeProblemRecoveryRequest } from "./RevokeProblemRecovery/req";
import { RevokeProblemRecoveryResponse } from "./RevokeProblemRecovery/res";
import { ListIncidentTimelinesRequest } from "./ListIncidentTimelines/req";
import { ListIncidentTimelinesResponse } from "./ListIncidentTimelines/res";
import { EnableSubscriptionRequest } from "./EnableSubscription/req";
import { EnableSubscriptionResponse } from "./EnableSubscription/res";
import { RemoveProblemServiceGroupRequest } from "./RemoveProblemServiceGroup/req";
import { RemoveProblemServiceGroupResponse } from "./RemoveProblemServiceGroup/res";
import { GetProblemEffectionServiceRequest } from "./GetProblemEffectionService/req";
import { GetProblemEffectionServiceResponse } from "./GetProblemEffectionService/res";
import { GetIncidentRequest } from "./GetIncident/req";
import { GetIncidentResponse } from "./GetIncident/res";
import { ListProblemsRequest } from "./ListProblems/req";
import { ListProblemsResponse } from "./ListProblems/res";
import { CancelProblemRequest } from "./CancelProblem/req";
import { CancelProblemResponse } from "./CancelProblem/res";
import { ListIntegrationConfigsRequest } from "./ListIntegrationConfigs/req";
import { ListIntegrationConfigsResponse } from "./ListIntegrationConfigs/res";
import { CreateProblemEffectionServiceRequest } from "./CreateProblemEffectionService/req";
import { CreateProblemEffectionServiceResponse } from "./CreateProblemEffectionService/res";
import { UpdateSubscriptionRequest } from "./UpdateSubscription/req";
import { UpdateSubscriptionResponse } from "./UpdateSubscription/res";
import { CreateSubscriptionRequest } from "./CreateSubscription/req";
import { CreateSubscriptionResponse } from "./CreateSubscription/res";
import { CreateProblemTimelineRequest } from "./CreateProblemTimeline/req";
import { CreateProblemTimelineResponse } from "./CreateProblemTimeline/res";
import { ListMonitorSourcesRequest } from "./ListMonitorSources/req";
import { ListMonitorSourcesResponse } from "./ListMonitorSources/res";
import { ListIncidentSubtotalsRequest } from "./ListIncidentSubtotals/req";
import { ListIncidentSubtotalsResponse } from "./ListIncidentSubtotals/res";
import { ListProblemTimeLinesRequest } from "./ListProblemTimeLines/req";
import { ListProblemTimeLinesResponse } from "./ListProblemTimeLines/res";
import { CreateProblemMeasureRequest } from "./CreateProblemMeasure/req";
import { CreateProblemMeasureResponse } from "./CreateProblemMeasure/res";
import { RespondIncidentRequest } from "./RespondIncident/req";
import { RespondIncidentResponse } from "./RespondIncident/res";
import { EnableServiceGroupWebhookRequest } from "./EnableServiceGroupWebhook/req";
import { EnableServiceGroupWebhookResponse } from "./EnableServiceGroupWebhook/res";
import { ListAlertsRequest } from "./ListAlerts/req";
import { ListAlertsResponse } from "./ListAlerts/res";
import { DisableSubscriptionRequest } from "./DisableSubscription/req";
import { DisableSubscriptionResponse } from "./DisableSubscription/res";
import { UpdateProblemRequest } from "./UpdateProblem/req";
import { UpdateProblemResponse } from "./UpdateProblem/res";
import { DeleteServiceGroupRequest } from "./DeleteServiceGroup/req";
import { DeleteServiceGroupResponse } from "./DeleteServiceGroup/res";
import { ListSubscriptionServiceGroupsRequest } from "./ListSubscriptionServiceGroups/req";
import { ListSubscriptionServiceGroupsResponse } from "./ListSubscriptionServiceGroups/res";
import { RefreshIntegrationConfigKeyRequest } from "./RefreshIntegrationConfigKey/req";
import { RefreshIntegrationConfigKeyResponse } from "./RefreshIntegrationConfigKey/res";
import { ReplayProblemRequest } from "./ReplayProblem/req";
import { ReplayProblemResponse } from "./ReplayProblem/res";
import { GetIntegrationConfigRequest } from "./GetIntegrationConfig/req";
import { GetIntegrationConfigResponse } from "./GetIntegrationConfig/res";
import { ConfirmIntegrationConfigRequest } from "./ConfirmIntegrationConfig/req";
import { ConfirmIntegrationConfigResponse } from "./ConfirmIntegrationConfig/res";
import { ListServiceGroupsRequest } from "./ListServiceGroups/req";
import { ListServiceGroupsResponse } from "./ListServiceGroups/res";
import { UpdateProblemImprovementRequest } from "./UpdateProblemImprovement/req";
import { UpdateProblemImprovementResponse } from "./UpdateProblemImprovement/res";
import { ListIncidentDetailTimelinesRequest } from "./ListIncidentDetailTimelines/req";
import { ListIncidentDetailTimelinesResponse } from "./ListIncidentDetailTimelines/res";
import { UpdateServiceGroupRequest } from "./UpdateServiceGroup/req";
import { UpdateServiceGroupResponse } from "./UpdateServiceGroup/res";
import { ListDictionariesRequest } from "./ListDictionaries/req";
import { ListDictionariesResponse } from "./ListDictionaries/res";
import { CreateIntegrationConfigRequest } from "./CreateIntegrationConfig/req";
import { CreateIntegrationConfigResponse } from "./CreateIntegrationConfig/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { GetRouteRuleRequest } from "./GetRouteRule/req";
import { GetRouteRuleResponse } from "./GetRouteRule/res";
import { GetProblemImprovementRequest } from "./GetProblemImprovement/req";
import { GetProblemImprovementResponse } from "./GetProblemImprovement/res";
import { FinishIncidentRequest } from "./FinishIncident/req";
import { FinishIncidentResponse } from "./FinishIncident/res";
import { GetServiceRequest } from "./GetService/req";
import { GetServiceResponse } from "./GetService/res";
import { GetIncidentStatisticsRequest } from "./GetIncidentStatistics/req";
import { GetIncidentStatisticsResponse } from "./GetIncidentStatistics/res";
import { ListSourceEventsRequest } from "./ListSourceEvents/req";
import { ListSourceEventsResponse } from "./ListSourceEvents/res";
import { UpdateIncidentRequest } from "./UpdateIncident/req";
import { UpdateIncidentResponse } from "./UpdateIncident/res";
import { ListUserSerivceGroupsRequest } from "./ListUserSerivceGroups/req";
import { ListUserSerivceGroupsResponse } from "./ListUserSerivceGroups/res";
import { UpdateProblemTimelineRequest } from "./UpdateProblemTimeline/req";
import { UpdateProblemTimelineResponse } from "./UpdateProblemTimeline/res";
import { DeleteProblemTimelineRequest } from "./DeleteProblemTimeline/req";
import { DeleteProblemTimelineResponse } from "./DeleteProblemTimeline/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { CreateIncidentRequest } from "./CreateIncident/req";
import { CreateIncidentResponse } from "./CreateIncident/res";
import { CreateServiceRequest } from "./CreateService/req";
import { CreateServiceResponse } from "./CreateService/res";
import { EnableIntegrationConfigRequest } from "./EnableIntegrationConfig/req";
import { EnableIntegrationConfigResponse } from "./EnableIntegrationConfig/res";
import { DeleteServiceRequest } from "./DeleteService/req";
import { DeleteServiceResponse } from "./DeleteService/res";
import { DeleteRouteRuleRequest } from "./DeleteRouteRule/req";
import { DeleteRouteRuleResponse } from "./DeleteRouteRule/res";
import { CreateProblemRequest } from "./CreateProblem/req";
import { CreateProblemResponse } from "./CreateProblem/res";
import { GetServiceGroupRequest } from "./GetServiceGroup/req";
import { GetServiceGroupResponse } from "./GetServiceGroup/res";
import { EnableRouteRuleRequest } from "./EnableRouteRule/req";
import { EnableRouteRuleResponse } from "./EnableRouteRule/res";
import { ListIntegrationConfigTimelinesRequest } from "./ListIntegrationConfigTimelines/req";
import { ListIntegrationConfigTimelinesResponse } from "./ListIntegrationConfigTimelines/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { CreateIncidentSubtotalRequest } from "./CreateIncidentSubtotal/req";
import { CreateIncidentSubtotalResponse } from "./CreateIncidentSubtotal/res";
import { AddProblemServiceGroupRequest } from "./AddProblemServiceGroup/req";
import { AddProblemServiceGroupResponse } from "./AddProblemServiceGroup/res";
import { GetProblemPreviewRequest } from "./GetProblemPreview/req";
import { GetProblemPreviewResponse } from "./GetProblemPreview/res";
import { UpdateServiceRequest } from "./UpdateService/req";
import { UpdateServiceResponse } from "./UpdateService/res";
import { GetProblemRequest } from "./GetProblem/req";
import { GetProblemResponse } from "./GetProblem/res";
import { ListRouteRulesRequest } from "./ListRouteRules/req";
import { ListRouteRulesResponse } from "./ListRouteRules/res";
import { ListIncidentsRequest } from "./ListIncidents/req";
import { ListIncidentsResponse } from "./ListIncidents/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { DeleteIntegrationConfigRequest } from "./DeleteIntegrationConfig/req";
import { DeleteIntegrationConfigResponse } from "./DeleteIntegrationConfig/res";
import { ListConfigsRequest } from "./ListConfigs/req";
import { ListConfigsResponse } from "./ListConfigs/res";
import { UpdateRouteRuleRequest } from "./UpdateRouteRule/req";
import { UpdateRouteRuleResponse } from "./UpdateRouteRule/res";
import { CreateProblemSubtotalRequest } from "./CreateProblemSubtotal/req";
import { CreateProblemSubtotalResponse } from "./CreateProblemSubtotal/res";
import { DisableIntegrationConfigRequest } from "./DisableIntegrationConfig/req";
import { DisableIntegrationConfigResponse } from "./DisableIntegrationConfig/res";
import { CreateServiceGroupRequest } from "./CreateServiceGroup/req";
import { CreateServiceGroupResponse } from "./CreateServiceGroup/res";
import { DisableRouteRuleRequest } from "./DisableRouteRule/req";
import { DisableRouteRuleResponse } from "./DisableRouteRule/res";
import { CreateRouteRuleRequest } from "./CreateRouteRule/req";
import { CreateRouteRuleResponse } from "./CreateRouteRule/res";
import { GetEventRequest } from "./GetEvent/req";
import { GetEventResponse } from "./GetEvent/res";
import { UpdateUserGuideStatusRequest } from "./UpdateUserGuideStatus/req";
import { UpdateUserGuideStatusResponse } from "./UpdateUserGuideStatus/res";
import { ListEscalationPlanServicesRequest } from "./ListEscalationPlanServices/req";
import { ListEscalationPlanServicesResponse } from "./ListEscalationPlanServices/res";
import { CheckWebhookRequest } from "./CheckWebhook/req";
import { CheckWebhookResponse } from "./CheckWebhook/res";
import { EnableEscalationPlanRequest } from "./EnableEscalationPlan/req";
import { EnableEscalationPlanResponse } from "./EnableEscalationPlan/res";
import { GetUserGuideStatusRequest } from "./GetUserGuideStatus/req";
import { GetUserGuideStatusResponse } from "./GetUserGuideStatus/res";
import { DeleteEscalationPlanRequest } from "./DeleteEscalationPlan/req";
import { DeleteEscalationPlanResponse } from "./DeleteEscalationPlan/res";
import { DisableEscalationPlanRequest } from "./DisableEscalationPlan/req";
import { DisableEscalationPlanResponse } from "./DisableEscalationPlan/res";
import { GetEscalationPlanRequest } from "./GetEscalationPlan/req";
import { GetEscalationPlanResponse } from "./GetEscalationPlan/res";
import { UpdateEscalationPlanRequest } from "./UpdateEscalationPlan/req";
import { UpdateEscalationPlanResponse } from "./UpdateEscalationPlan/res";
import { ListEscalationPlansRequest } from "./ListEscalationPlans/req";
import { ListEscalationPlansResponse } from "./ListEscalationPlans/res";
import { GetResourceStatisticsRequest } from "./GetResourceStatistics/req";
import { GetResourceStatisticsResponse } from "./GetResourceStatistics/res";
import { ListProblemOperationsRequest } from "./ListProblemOperations/req";
import { ListProblemOperationsResponse } from "./ListProblemOperations/res";
import { CreateEscalationPlanRequest } from "./CreateEscalationPlan/req";
import { CreateEscalationPlanResponse } from "./CreateEscalationPlan/res";
import { CreateServiceGroupSchedulingRequest } from "./CreateServiceGroupScheduling/req";
import { CreateServiceGroupSchedulingResponse } from "./CreateServiceGroupScheduling/res";
import { ListIncidentDetailEscalationPlansRequest } from "./ListIncidentDetailEscalationPlans/req";
import { ListIncidentDetailEscalationPlansResponse } from "./ListIncidentDetailEscalationPlans/res";
import { GetServiceGroupSpecialPersonSchedulingRequest } from "./GetServiceGroupSpecialPersonScheduling/req";
import { GetServiceGroupSpecialPersonSchedulingResponse } from "./GetServiceGroupSpecialPersonScheduling/res";
import { UpdateServiceGroupSchedulingRequest } from "./UpdateServiceGroupScheduling/req";
import { UpdateServiceGroupSchedulingResponse } from "./UpdateServiceGroupScheduling/res";
import { GetServiceGroupSchedulingPreviewRequest } from "./GetServiceGroupSchedulingPreview/req";
import { GetServiceGroupSchedulingPreviewResponse } from "./GetServiceGroupSchedulingPreview/res";
import { GetServiceGroupSchedulingRequest } from "./GetServiceGroupScheduling/req";
import { GetServiceGroupSchedulingResponse } from "./GetServiceGroupScheduling/res";
import { ListProblemDetailOperationsRequest } from "./ListProblemDetailOperations/req";
import { ListProblemDetailOperationsResponse } from "./ListProblemDetailOperations/res";
import { UpdateServiceGroupSpecialDaySchedulingRequest } from "./UpdateServiceGroupSpecialDayScheduling/req";
import { UpdateServiceGroupSpecialDaySchedulingResponse } from "./UpdateServiceGroupSpecialDayScheduling/res";
import { GetTenantApplicationRequest } from "./GetTenantApplication/req";
import { GetTenantApplicationResponse } from "./GetTenantApplication/res";
import { GetSimilarIncidentStatisticsRequest } from "./GetSimilarIncidentStatistics/req";
import { GetSimilarIncidentStatisticsResponse } from "./GetSimilarIncidentStatistics/res";
import { GetIncidentSubtotalCountRequest } from "./GetIncidentSubtotalCount/req";
import { GetIncidentSubtotalCountResponse } from "./GetIncidentSubtotalCount/res";
import { CreateTenantApplicationRequest } from "./CreateTenantApplication/req";
import { CreateTenantApplicationResponse } from "./CreateTenantApplication/res";
import { DeleteServiceGroupUserRequest } from "./DeleteServiceGroupUser/req";
import { DeleteServiceGroupUserResponse } from "./DeleteServiceGroupUser/res";
import { GetHomePageGuidanceRequest } from "./GetHomePageGuidance/req";
import { GetHomePageGuidanceResponse } from "./GetHomePageGuidance/res";
import { GetServiceGroupPersonSchedulingRequest } from "./GetServiceGroupPersonScheduling/req";
import { GetServiceGroupPersonSchedulingResponse } from "./GetServiceGroupPersonScheduling/res";
import { ListDataReportForServiceGroupRequest } from "./ListDataReportForServiceGroup/req";
import { ListDataReportForServiceGroupResponse } from "./ListDataReportForServiceGroup/res";
import { ListChartDataForServiceGroupRequest } from "./ListChartDataForServiceGroup/req";
import { ListChartDataForServiceGroupResponse } from "./ListChartDataForServiceGroup/res";
import { ListSourceEventsForMonitorSourceRequest } from "./ListSourceEventsForMonitorSource/req";
import { ListSourceEventsForMonitorSourceResponse } from "./ListSourceEventsForMonitorSource/res";
import { ListDataReportForUserRequest } from "./ListDataReportForUser/req";
import { ListDataReportForUserResponse } from "./ListDataReportForUser/res";
import { ListChartDataForUserRequest } from "./ListChartDataForUser/req";
import { ListChartDataForUserResponse } from "./ListChartDataForUser/res";
import { ListTrendForSourceEventRequest } from "./ListTrendForSourceEvent/req";
import { ListTrendForSourceEventResponse } from "./ListTrendForSourceEvent/res";
import { CreateRichTextRequest } from "./CreateRichText/req";
import { CreateRichTextResponse } from "./CreateRichText/res";
import { GeneratePictureLinkRequest } from "./GeneratePictureLink/req";
import { GeneratePictureLinkResponse } from "./GeneratePictureLink/res";
import { GeneratePictureUploadSignRequest } from "./GeneratePictureUploadSign/req";
import { GeneratePictureUploadSignResponse } from "./GeneratePictureUploadSign/res";
import { GetRichTextRequest } from "./GetRichText/req";
import { GetRichTextResponse } from "./GetRichText/res";
import { ListServiceGroupMonitorSourceTemplatesRequest } from "./ListServiceGroupMonitorSourceTemplates/req";
import { ListServiceGroupMonitorSourceTemplatesResponse } from "./ListServiceGroupMonitorSourceTemplates/res";
import { UpdateRichTextRequest } from "./UpdateRichText/req";
import { UpdateRichTextResponse } from "./UpdateRichText/res";
import { VerifyRouteRuleRequest } from "./VerifyRouteRule/req";
import { VerifyRouteRuleResponse } from "./VerifyRouteRule/res";
import { RemoveIntegrationConfigRequest } from "./RemoveIntegrationConfig/req";
import { RemoveIntegrationConfigResponse } from "./RemoveIntegrationConfig/res";
import { ListByMonitorSourceIdRequest } from "./ListByMonitorSourceId/req";
import { ListByMonitorSourceIdResponse } from "./ListByMonitorSourceId/res";
import { ListRouteRulesByServiceRequest } from "./ListRouteRulesByService/req";
import { ListRouteRulesByServiceResponse } from "./ListRouteRulesByService/res";
import { GetTenantStatusRequest } from "./GetTenantStatus/req";
import { GetTenantStatusResponse } from "./GetTenantStatus/res";
import { BillingStatisticsRequest } from "./BillingStatistics/req";
import { BillingStatisticsResponse } from "./BillingStatistics/res";
import { DeleteServiceGroupSchedulingRequest } from "./DeleteServiceGroupScheduling/req";
import { DeleteServiceGroupSchedulingResponse } from "./DeleteServiceGroupScheduling/res";
import { ListEscalationPlansByNoticeObjectRequest } from "./ListEscalationPlansByNoticeObject/req";
import { ListEscalationPlansByNoticeObjectResponse } from "./ListEscalationPlansByNoticeObject/res";
import { UnbindUserRequest } from "./UnbindUser/req";
import { UnbindUserResponse } from "./UnbindUser/res";
import { ListRouteRulesByAssignWhoIdRequest } from "./ListRouteRulesByAssignWhoId/req";
import { ListRouteRulesByAssignWhoIdResponse } from "./ListRouteRulesByAssignWhoId/res";
import { ListServiceGroupsByUserIdRequest } from "./ListServiceGroupsByUserId/req";
import { ListServiceGroupsByUserIdResponse } from "./ListServiceGroupsByUserId/res";
import { PushMonitorRequest } from "./PushMonitor/req";
import { PushMonitorResponse } from "./PushMonitor/res";
import { GetIncidentListByIdListRequest } from "./GetIncidentListByIdList/req";
import { GetIncidentListByIdListResponse } from "./GetIncidentListByIdList/res";

interface GEMP {
    /**
     * 故障图片上传获取签名信息。
     */
    GenerateProblemPictureUploadSign(query: GenerateProblemPictureUploadSignRequest): Promise<GenerateProblemPictureUploadSignResponse>;
    /**
     * 删除故障。
     */
    DeleteProblem(query: DeleteProblemRequest): Promise<DeleteProblemResponse>;
    /**
     * 更新故障改进措施。
     */
    UpdateProblemMeasure(query: UpdateProblemMeasureRequest): Promise<UpdateProblemMeasureResponse>;
    /**
     * 集成配置更新。
     */
    UpdateIntegrationConfig(query: UpdateIntegrationConfigRequest): Promise<UpdateIntegrationConfigResponse>;
    /**
     * 事件转交。
     */
    DeliverIncident(query: DeliverIncidentRequest): Promise<DeliverIncidentResponse>;
    /**
     * 更新故障通告。
     */
    UpdateProblemNotice(query: UpdateProblemNoticeRequest): Promise<UpdateProblemNoticeResponse>;
    /**
     * 通知订阅详情。
     */
    GetSubscription(query: GetSubscriptionRequest): Promise<GetSubscriptionResponse>;
    /**
     * 更新故障影响服务。
     */
    UpdateProblemEffectionService(query: UpdateProblemEffectionServiceRequest): Promise<UpdateProblemEffectionServiceResponse>;
    /**
     * 删除通知订阅。
     */
    DeleteSubscription(query: DeleteSubscriptionRequest): Promise<DeleteSubscriptionResponse>;
    /**
     * 故障恢复。
     */
    RecoverProblem(query: RecoverProblemRequest): Promise<RecoverProblemResponse>;
    /**
     * 查看服务列表。
     */
    ListServices(query: ListServicesRequest): Promise<ListServicesResponse>;
    /**
     * 删除事件。
     */
    DeleteIncident(query: DeleteIncidentRequest): Promise<DeleteIncidentResponse>;
    /**
     * 获取故障图片链接。
     */
    GenerateProblemPictureLink(query: GenerateProblemPictureLinkRequest): Promise<GenerateProblemPictureLinkResponse>;
    /**
     * 删除影响服务。
     */
    DeleteProblemEffectionService(query: DeleteProblemEffectionServiceRequest): Promise<DeleteProblemEffectionServiceResponse>;
    /**
     * 禁用服务组的webhook。
     */
    DisableServiceGroupWebhook(query: DisableServiceGroupWebhookRequest): Promise<DisableServiceGroupWebhookResponse>;
    /**
     * 通知订阅列表。
     */
    ListSubscriptions(query: ListSubscriptionsRequest): Promise<ListSubscriptionsResponse>;
    /**
     * 批量创建时间节点。
     */
    CreateProblemTimelines(query: CreateProblemTimelinesRequest): Promise<CreateProblemTimelinesResponse>;
    /**
     * 删除故障改进措施。
     */
    DeleteProblemMeasure(query: DeleteProblemMeasureRequest): Promise<DeleteProblemMeasureResponse>;
    /**
     * 故障小计列表。
     */
    ListProblemSubtotals(query: ListProblemSubtotalsRequest): Promise<ListProblemSubtotalsResponse>;
    /**
     * 故障完结。
     */
    FinishProblem(query: FinishProblemRequest): Promise<FinishProblemResponse>;
    /**
     * 故障撤销恢复	。
     */
    RevokeProblemRecovery(query: RevokeProblemRecoveryRequest): Promise<RevokeProblemRecoveryResponse>;
    /**
     * 事件动态。
     */
    ListIncidentTimelines(query: ListIncidentTimelinesRequest): Promise<ListIncidentTimelinesResponse>;
    /**
     * 启用通知订阅	。
     */
    EnableSubscription(query: EnableSubscriptionRequest): Promise<EnableSubscriptionResponse>;
    /**
     * 移除故障应急协同组。
     */
    RemoveProblemServiceGroup(query: RemoveProblemServiceGroupRequest): Promise<RemoveProblemServiceGroupResponse>;
    /**
     * 故障影响服务详情。
     */
    GetProblemEffectionService(query: GetProblemEffectionServiceRequest): Promise<GetProblemEffectionServiceResponse>;
    /**
     * 事件详情。
     */
    GetIncident(query: GetIncidentRequest): Promise<GetIncidentResponse>;
    /**
     * 查询故障列表。
     */
    ListProblems(query: ListProblemsRequest): Promise<ListProblemsResponse>;
    /**
     * 故障取消。
     */
    CancelProblem(query: CancelProblemRequest): Promise<CancelProblemResponse>;
    /**
     * 集成配置列表。
     */
    ListIntegrationConfigs(query: ListIntegrationConfigsRequest): Promise<ListIntegrationConfigsResponse>;
    /**
     * 创建影响服务。
     */
    CreateProblemEffectionService(query: CreateProblemEffectionServiceRequest): Promise<CreateProblemEffectionServiceResponse>;
    /**
     * 更新通知订阅。
     */
    UpdateSubscription(query: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse>;
    /**
     * 创建通知订阅。
     */
    CreateSubscription(query: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse>;
    /**
     * 创建故障时间线节点。
     */
    CreateProblemTimeline(query: CreateProblemTimelineRequest): Promise<CreateProblemTimelineResponse>;
    /**
     * 监控源列表。
     */
    ListMonitorSources(query: ListMonitorSourcesRequest): Promise<ListMonitorSourcesResponse>;
    /**
     * 查询事件小计。
     */
    ListIncidentSubtotals(query: ListIncidentSubtotalsRequest): Promise<ListIncidentSubtotalsResponse>;
    /**
     * 查询故障时间线列表	。
     */
    ListProblemTimeLines(query: ListProblemTimeLinesRequest): Promise<ListProblemTimeLinesResponse>;
    /**
     * 创建故障改进措施。
     */
    CreateProblemMeasure(query: CreateProblemMeasureRequest): Promise<CreateProblemMeasureResponse>;
    /**
     * 事件响应。
     */
    RespondIncident(query: RespondIncidentRequest): Promise<RespondIncidentResponse>;
    /**
     * 启用服务组的webhook。
     */
    EnableServiceGroupWebhook(query: EnableServiceGroupWebhookRequest): Promise<EnableServiceGroupWebhookResponse>;
    /**
     * 报警列表查询。
     */
    ListAlerts(query: ListAlertsRequest): Promise<ListAlertsResponse>;
    /**
     * 禁用通知订阅。
     */
    DisableSubscription(query: DisableSubscriptionRequest): Promise<DisableSubscriptionResponse>;
    /**
     * 更新故障详情。
     */
    UpdateProblem(query: UpdateProblemRequest): Promise<UpdateProblemResponse>;
    /**
     * 删除服务组。
     */
    DeleteServiceGroup(query: DeleteServiceGroupRequest): Promise<DeleteServiceGroupResponse>;
    /**
     * 故障协同组列表。
     */
    ListSubscriptionServiceGroups(query: ListSubscriptionServiceGroupsRequest): Promise<ListSubscriptionServiceGroupsResponse>;
    /**
     * 刷新集成key。
     */
    RefreshIntegrationConfigKey(query: RefreshIntegrationConfigKeyRequest): Promise<RefreshIntegrationConfigKeyResponse>;
    /**
     * 故障复盘。
     */
    ReplayProblem(query: ReplayProblemRequest): Promise<ReplayProblemResponse>;
    /**
     * 集成配置详情	。
     */
    GetIntegrationConfig(query: GetIntegrationConfigRequest): Promise<GetIntegrationConfigResponse>;
    /**
     * 确认集成配置。
     */
    ConfirmIntegrationConfig(query: ConfirmIntegrationConfigRequest): Promise<ConfirmIntegrationConfigResponse>;
    /**
     * 查询服务组列表。
     */
    ListServiceGroups(query: ListServiceGroupsRequest): Promise<ListServiceGroupsResponse>;
    /**
     * 更新故障复盘改进详情。
     */
    UpdateProblemImprovement(query: UpdateProblemImprovementRequest): Promise<UpdateProblemImprovementResponse>;
    /**
     * 事件详情动态。
     */
    ListIncidentDetailTimelines(query: ListIncidentDetailTimelinesRequest): Promise<ListIncidentDetailTimelinesResponse>;
    /**
     * 服务组编辑。
     */
    UpdateServiceGroup(query: UpdateServiceGroupRequest): Promise<UpdateServiceGroupResponse>;
    /**
     * 枚举字典接口。
     */
    ListDictionaries(query: ListDictionariesRequest): Promise<ListDictionariesResponse>;
    /**
     * 创建集成配置。
     */
    CreateIntegrationConfig(query: CreateIntegrationConfigRequest): Promise<CreateIntegrationConfigResponse>;
    /**
     * 删除用户。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 查看规则详情。
     */
    GetRouteRule(query: GetRouteRuleRequest): Promise<GetRouteRuleResponse>;
    /**
     * 故障复盘改进详情	。
     */
    GetProblemImprovement(query: GetProblemImprovementRequest): Promise<GetProblemImprovementResponse>;
    /**
     * 完成事件。
     */
    FinishIncident(query: FinishIncidentRequest): Promise<FinishIncidentResponse>;
    /**
     * 查询服务详情。
     */
    GetService(query: GetServiceRequest): Promise<GetServiceResponse>;
    /**
     * 事件统计。
     */
    GetIncidentStatistics(query: GetIncidentStatisticsRequest): Promise<GetIncidentStatisticsResponse>;
    /**
     * 查询原始告警列表。
     */
    ListSourceEvents(query: ListSourceEventsRequest): Promise<ListSourceEventsResponse>;
    /**
     * 更新事件。
     */
    UpdateIncident(query: UpdateIncidentRequest): Promise<UpdateIncidentResponse>;
    /**
     * 用户预览	。
     */
    ListUserSerivceGroups(query: ListUserSerivceGroupsRequest): Promise<ListUserSerivceGroupsResponse>;
    /**
     * 更新故障时间线。
     */
    UpdateProblemTimeline(query: UpdateProblemTimelineRequest): Promise<UpdateProblemTimelineResponse>;
    /**
     * 删除故障事件线节点。
     */
    DeleteProblemTimeline(query: DeleteProblemTimelineRequest): Promise<DeleteProblemTimelineResponse>;
    /**
     * 人员信息更新。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 手动新增事件。
     */
    CreateIncident(query: CreateIncidentRequest): Promise<CreateIncidentResponse>;
    /**
     * 创建服务。
     */
    CreateService(query: CreateServiceRequest): Promise<CreateServiceResponse>;
    /**
     * 启用集成配置。
     */
    EnableIntegrationConfig(query: EnableIntegrationConfigRequest): Promise<EnableIntegrationConfigResponse>;
    /**
     * 删除服务。
     */
    DeleteService(query: DeleteServiceRequest): Promise<DeleteServiceResponse>;
    /**
     * 删除流转规则。
     */
    DeleteRouteRule(query: DeleteRouteRuleRequest): Promise<DeleteRouteRuleResponse>;
    /**
     * 新增故障。
     */
    CreateProblem(query: CreateProblemRequest): Promise<CreateProblemResponse>;
    /**
     * 查看服务组详情。
     */
    GetServiceGroup(query: GetServiceGroupRequest): Promise<GetServiceGroupResponse>;
    /**
     * 启用规则。
     */
    EnableRouteRule(query: EnableRouteRuleRequest): Promise<EnableRouteRuleResponse>;
    /**
     * 集成配置操作日志。
     */
    ListIntegrationConfigTimelines(query: ListIntegrationConfigTimelinesRequest): Promise<ListIntegrationConfigTimelinesResponse>;
    /**
     * 查看用户详情。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 事件新增小计。
     */
    CreateIncidentSubtotal(query: CreateIncidentSubtotalRequest): Promise<CreateIncidentSubtotalResponse>;
    /**
     * 新增故障应急协同组。
     */
    AddProblemServiceGroup(query: AddProblemServiceGroupRequest): Promise<AddProblemServiceGroupResponse>;
    /**
     * 获取故障通知预览。
     */
    GetProblemPreview(query: GetProblemPreviewRequest): Promise<GetProblemPreviewResponse>;
    /**
     * 更新服务。
     */
    UpdateService(query: UpdateServiceRequest): Promise<UpdateServiceResponse>;
    /**
     * 故障详情。
     */
    GetProblem(query: GetProblemRequest): Promise<GetProblemResponse>;
    /**
     * 查询规则列表。
     */
    ListRouteRules(query: ListRouteRulesRequest): Promise<ListRouteRulesResponse>;
    /**
     * 事件列表。
     */
    ListIncidents(query: ListIncidentsRequest): Promise<ListIncidentsResponse>;
    /**
     * 创建人员。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 用户列表。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 删除集成配置。
     */
    DeleteIntegrationConfig(query: DeleteIntegrationConfigRequest): Promise<DeleteIntegrationConfigResponse>;
    /**
     * 获取全部动态码表配置项。
     */
    ListConfigs(query: ListConfigsRequest): Promise<ListConfigsResponse>;
    /**
     * 编辑流转规则。
     */
    UpdateRouteRule(query: UpdateRouteRuleRequest): Promise<UpdateRouteRuleResponse>;
    /**
     * 故障新增备注小计。
     */
    CreateProblemSubtotal(query: CreateProblemSubtotalRequest): Promise<CreateProblemSubtotalResponse>;
    /**
     * 禁用集成配置。
     */
    DisableIntegrationConfig(query: DisableIntegrationConfigRequest): Promise<DisableIntegrationConfigResponse>;
    /**
     * 创建服务组。
     */
    CreateServiceGroup(query: CreateServiceGroupRequest): Promise<CreateServiceGroupResponse>;
    /**
     * 禁用规则。
     */
    DisableRouteRule(query: DisableRouteRuleRequest): Promise<DisableRouteRuleResponse>;
    /**
     * 创建流转规则。
     */
    CreateRouteRule(query: CreateRouteRuleRequest): Promise<CreateRouteRuleResponse>;
    /**
     * 查询最近一次告警	。
     */
    GetEvent(query: GetEventRequest): Promise<GetEventResponse>;
    /**
     * 更新用户引导状态。
     */
    UpdateUserGuideStatus(query: UpdateUserGuideStatusRequest): Promise<UpdateUserGuideStatusResponse>;
    /**
     * 升级计划范围对象（服务）已选择的列表。
     */
    ListEscalationPlanServices(query: ListEscalationPlanServicesRequest): Promise<ListEscalationPlanServicesResponse>;
    /**
     * 校验webhook地址有效性。
     */
    CheckWebhook(query: CheckWebhookRequest): Promise<CheckWebhookResponse>;
    /**
     * 启用升级计划。
     */
    EnableEscalationPlan(query: EnableEscalationPlanRequest): Promise<EnableEscalationPlanResponse>;
    /**
     * 获取用户引导状态。
     */
    GetUserGuideStatus(query: GetUserGuideStatusRequest): Promise<GetUserGuideStatusResponse>;
    /**
     * 删除升级计划。
     */
    DeleteEscalationPlan(query: DeleteEscalationPlanRequest): Promise<DeleteEscalationPlanResponse>;
    /**
     * 禁用升级计划。
     */
    DisableEscalationPlan(query: DisableEscalationPlanRequest): Promise<DisableEscalationPlanResponse>;
    /**
     * 获取指定动态码表的详细信息。
     */
    GetEscalationPlan(query: GetEscalationPlanRequest): Promise<GetEscalationPlanResponse>;
    /**
     * 更新升级计划。
     */
    UpdateEscalationPlan(query: UpdateEscalationPlanRequest): Promise<UpdateEscalationPlanResponse>;
    /**
     * 升级计划列表。
     */
    ListEscalationPlans(query: ListEscalationPlansRequest): Promise<ListEscalationPlansResponse>;
    /**
     * 获取资源统计。
     */
    GetResourceStatistics(query: GetResourceStatisticsRequest): Promise<GetResourceStatisticsResponse>;
    /**
     * 故障动态列表。
     */
    ListProblemOperations(query: ListProblemOperationsRequest): Promise<ListProblemOperationsResponse>;
    /**
     * 创建升级计划。
     */
    CreateEscalationPlan(query: CreateEscalationPlanRequest): Promise<CreateEscalationPlanResponse>;
    /**
     * 新增服务组排班。
     */
    CreateServiceGroupScheduling(query: CreateServiceGroupSchedulingRequest): Promise<CreateServiceGroupSchedulingResponse>;
    /**
     * 事件关联的升级计划列表。
     */
    ListIncidentDetailEscalationPlans(query: ListIncidentDetailEscalationPlansRequest): Promise<ListIncidentDetailEscalationPlansResponse>;
    /**
     * 查询指定人员的服务组排班。
     */
    GetServiceGroupSpecialPersonScheduling(query: GetServiceGroupSpecialPersonSchedulingRequest): Promise<GetServiceGroupSpecialPersonSchedulingResponse>;
    /**
     * 修改服务组排班。
     */
    UpdateServiceGroupScheduling(query: UpdateServiceGroupSchedulingRequest): Promise<UpdateServiceGroupSchedulingResponse>;
    /**
     * 预览服务组排班。
     */
    GetServiceGroupSchedulingPreview(query: GetServiceGroupSchedulingPreviewRequest): Promise<GetServiceGroupSchedulingPreviewResponse>;
    /**
     * 查询服务组排班详情。
     */
    GetServiceGroupScheduling(query: GetServiceGroupSchedulingRequest): Promise<GetServiceGroupSchedulingResponse>;
    /**
     * 故障详情动态。
     */
    ListProblemDetailOperations(query: ListProblemDetailOperationsRequest): Promise<ListProblemDetailOperationsResponse>;
    /**
     * 修改指定日期的服务组排班。
     */
    UpdateServiceGroupSpecialDayScheduling(query: UpdateServiceGroupSpecialDaySchedulingRequest): Promise<UpdateServiceGroupSpecialDaySchedulingResponse>;
    /**
     * 移动应用详情。
     */
    GetTenantApplication(query: GetTenantApplicationRequest): Promise<GetTenantApplicationResponse>;
    /**
     * 相似事件列表。
     */
    GetSimilarIncidentStatistics(query: GetSimilarIncidentStatisticsRequest): Promise<GetSimilarIncidentStatisticsResponse>;
    /**
     * 获取相似事件相关小计数量。
     */
    GetIncidentSubtotalCount(query: GetIncidentSubtotalCountRequest): Promise<GetIncidentSubtotalCountResponse>;
    /**
     * 创建移动应用。
     */
    CreateTenantApplication(query: CreateTenantApplicationRequest): Promise<CreateTenantApplicationResponse>;
    /**
     * 删除服务组人员。
     */
    DeleteServiceGroupUser(query: DeleteServiceGroupUserRequest): Promise<DeleteServiceGroupUserResponse>;
    /**
     * 查询首页配置引导。
     */
    GetHomePageGuidance(query: GetHomePageGuidanceRequest): Promise<GetHomePageGuidanceResponse>;
    /**
     * 查询某用户服务组排班。
     */
    GetServiceGroupPersonScheduling(query: GetServiceGroupPersonSchedulingRequest): Promise<GetServiceGroupPersonSchedulingResponse>;
    /**
     * 分页查询服务组统计数据	。
     */
    ListDataReportForServiceGroup(query: ListDataReportForServiceGroupRequest): Promise<ListDataReportForServiceGroupResponse>;
    /**
     * 数据报表图表数据接口（服务组）。
     */
    ListChartDataForServiceGroup(query: ListChartDataForServiceGroupRequest): Promise<ListChartDataForServiceGroupResponse>;
    /**
     * 查询最近告警列表。
     */
    ListSourceEventsForMonitorSource(query: ListSourceEventsForMonitorSourceRequest): Promise<ListSourceEventsForMonitorSourceResponse>;
    /**
     * 查询个人事件统计数据。
     */
    ListDataReportForUser(query: ListDataReportForUserRequest): Promise<ListDataReportForUserResponse>;
    /**
     * 数据报表图表数据接口（人员）。
     */
    ListChartDataForUser(query: ListChartDataForUserRequest): Promise<ListChartDataForUserResponse>;
    /**
     * 查询告警源趋势统计数据。
     */
    ListTrendForSourceEvent(query: ListTrendForSourceEventRequest): Promise<ListTrendForSourceEventResponse>;
    /**
     * 创建富文本。
     */
    CreateRichText(query: CreateRichTextRequest): Promise<CreateRichTextResponse>;
    /**
     * 生成图片链接
     */
    GeneratePictureLink(query: GeneratePictureLinkRequest): Promise<GeneratePictureLinkResponse>;
    /**
     * 生成图片上传签名信息。
     */
    GeneratePictureUploadSign(query: GeneratePictureUploadSignRequest): Promise<GeneratePictureUploadSignResponse>;
    /**
     * 获取富文本信息。
     */
    GetRichText(query: GetRichTextRequest): Promise<GetRichTextResponse>;
    /**
     * 查询服务组消息模版列表。
     */
    ListServiceGroupMonitorSourceTemplates(query: ListServiceGroupMonitorSourceTemplatesRequest): Promise<ListServiceGroupMonitorSourceTemplatesResponse>;
    /**
     * 更新富文本。
     */
    UpdateRichText(query: UpdateRichTextRequest): Promise<UpdateRichTextResponse>;
    /**
     * 验证流转规则。
     */
    VerifyRouteRule(query: VerifyRouteRuleRequest): Promise<VerifyRouteRuleResponse>;
    /**
     * 解除集成配置
     */
    RemoveIntegrationConfig(query: RemoveIntegrationConfigRequest): Promise<RemoveIntegrationConfigResponse>;
    /**
     * 监控关联规则列表
     */
    ListByMonitorSourceId(query: ListByMonitorSourceIdRequest): Promise<ListByMonitorSourceIdResponse>;
    /**
     * 根据服务id查询流转规则
     */
    ListRouteRulesByService(query: ListRouteRulesByServiceRequest): Promise<ListRouteRulesByServiceResponse>;
    /**
     * 查询租户开通运维事件中心的状态
     */
    GetTenantStatus(query: GetTenantStatusRequest): Promise<GetTenantStatusResponse>;
    /**
     * 计费展示
     */
    BillingStatistics(query: BillingStatisticsRequest): Promise<BillingStatisticsResponse>;
    /**
     * 删除排班
     */
    DeleteServiceGroupScheduling(query: DeleteServiceGroupSchedulingRequest): Promise<DeleteServiceGroupSchedulingResponse>;
    /**
     * 根据推送对象查询升级策略
     */
    ListEscalationPlansByNoticeObject(query: ListEscalationPlansByNoticeObjectRequest): Promise<ListEscalationPlansByNoticeObjectResponse>;
    /**
     * 解绑用户
     */
    UnbindUser(query: UnbindUserRequest): Promise<UnbindUserResponse>;
    /**
     * 获取指定分配对象的流转规则
     */
    ListRouteRulesByAssignWhoId(query: ListRouteRulesByAssignWhoIdRequest): Promise<ListRouteRulesByAssignWhoIdResponse>;
    /**
     * 根据成员id查服务组
     */
    ListServiceGroupsByUserId(query: ListServiceGroupsByUserIdRequest): Promise<ListServiceGroupsByUserIdResponse>;
    /**
     * 业务监控数据推送,业务监控数据保存。
     */
    PushMonitor(query: PushMonitorRequest): Promise<PushMonitorResponse>;
    /**
     * 根据事件Id查询事件详情。
     */
    GetIncidentListByIdList(query: GetIncidentListByIdListRequest): Promise<GetIncidentListByIdListResponse>;
}
export default GEMP;
