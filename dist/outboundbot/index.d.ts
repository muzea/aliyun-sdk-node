import { AssignJobsRequest } from "./AssignJobs/req";
import { AssignJobsResponse } from "./AssignJobs/res";
import { CancelJobsRequest } from "./CancelJobs/req";
import { CancelJobsResponse } from "./CancelJobs/res";
import { CreateDialogueFlowRequest } from "./CreateDialogueFlow/req";
import { CreateDialogueFlowResponse } from "./CreateDialogueFlow/res";
import { CreateBatchJobsRequest } from "./CreateBatchJobs/req";
import { CreateBatchJobsResponse } from "./CreateBatchJobs/res";
import { CreateGlobalQuestionRequest } from "./CreateGlobalQuestion/req";
import { CreateGlobalQuestionResponse } from "./CreateGlobalQuestion/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { CreateIntentRequest } from "./CreateIntent/req";
import { CreateIntentResponse } from "./CreateIntent/res";
import { CreateOutboundCallNumberRequest } from "./CreateOutboundCallNumber/req";
import { CreateOutboundCallNumberResponse } from "./CreateOutboundCallNumber/res";
import { CreateScriptRequest } from "./CreateScript/req";
import { CreateScriptResponse } from "./CreateScript/res";
import { CreateJobGroupRequest } from "./CreateJobGroup/req";
import { CreateJobGroupResponse } from "./CreateJobGroup/res";
import { CreateScriptWaveformRequest } from "./CreateScriptWaveform/req";
import { CreateScriptWaveformResponse } from "./CreateScriptWaveform/res";
import { CreateTagRequest } from "./CreateTag/req";
import { CreateTagResponse } from "./CreateTag/res";
import { DeleteDialogueFlowRequest } from "./DeleteDialogueFlow/req";
import { DeleteDialogueFlowResponse } from "./DeleteDialogueFlow/res";
import { DeleteGlobalQuestionRequest } from "./DeleteGlobalQuestion/req";
import { DeleteGlobalQuestionResponse } from "./DeleteGlobalQuestion/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DeleteIntentRequest } from "./DeleteIntent/req";
import { DeleteIntentResponse } from "./DeleteIntent/res";
import { DeleteJobGroupRequest } from "./DeleteJobGroup/req";
import { DeleteJobGroupResponse } from "./DeleteJobGroup/res";
import { DeleteOutboundCallNumberRequest } from "./DeleteOutboundCallNumber/req";
import { DeleteOutboundCallNumberResponse } from "./DeleteOutboundCallNumber/res";
import { DeleteScriptRequest } from "./DeleteScript/req";
import { DeleteScriptResponse } from "./DeleteScript/res";
import { DeleteScriptWaveformRequest } from "./DeleteScriptWaveform/req";
import { DeleteScriptWaveformResponse } from "./DeleteScriptWaveform/res";
import { DescribeGlobalQuestionRequest } from "./DescribeGlobalQuestion/req";
import { DescribeGlobalQuestionResponse } from "./DescribeGlobalQuestion/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeIntentRequest } from "./DescribeIntent/req";
import { DescribeIntentResponse } from "./DescribeIntent/res";
import { DescribeJobRequest } from "./DescribeJob/req";
import { DescribeJobResponse } from "./DescribeJob/res";
import { DescribeJobGroupRequest } from "./DescribeJobGroup/req";
import { DescribeJobGroupResponse } from "./DescribeJobGroup/res";
import { DescribeScriptRequest } from "./DescribeScript/req";
import { DescribeScriptResponse } from "./DescribeScript/res";
import { DescribeScriptVoiceConfigRequest } from "./DescribeScriptVoiceConfig/req";
import { DescribeScriptVoiceConfigResponse } from "./DescribeScriptVoiceConfig/res";
import { DescribeTTSConfigRequest } from "./DescribeTTSConfig/req";
import { DescribeTTSConfigResponse } from "./DescribeTTSConfig/res";
import { DescribeTTSDemoRequest } from "./DescribeTTSDemo/req";
import { DescribeTTSDemoResponse } from "./DescribeTTSDemo/res";
import { DescribeTagHitsSummaryRequest } from "./DescribeTagHitsSummary/req";
import { DescribeTagHitsSummaryResponse } from "./DescribeTagHitsSummary/res";
import { DialogueRequest } from "./Dialogue/req";
import { DialogueResponse } from "./Dialogue/res";
import { DuplicateScriptRequest } from "./DuplicateScript/req";
import { DuplicateScriptResponse } from "./DuplicateScript/res";
import { DownloadRecordingRequest } from "./DownloadRecording/req";
import { DownloadRecordingResponse } from "./DownloadRecording/res";
import { ExportScriptRequest } from "./ExportScript/req";
import { ExportScriptResponse } from "./ExportScript/res";
import { ImportScriptRequest } from "./ImportScript/req";
import { ImportScriptResponse } from "./ImportScript/res";
import { ListDialogueFlowsRequest } from "./ListDialogueFlows/req";
import { ListDialogueFlowsResponse } from "./ListDialogueFlows/res";
import { ListGlobalQuestionsRequest } from "./ListGlobalQuestions/req";
import { ListGlobalQuestionsResponse } from "./ListGlobalQuestions/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ListIntentsRequest } from "./ListIntents/req";
import { ListIntentsResponse } from "./ListIntents/res";
import { ListJobGroupsRequest } from "./ListJobGroups/req";
import { ListJobGroupsResponse } from "./ListJobGroups/res";
import { ListJobsByGroupRequest } from "./ListJobsByGroup/req";
import { ListJobsByGroupResponse } from "./ListJobsByGroup/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { ListOutboundCallNumbersRequest } from "./ListOutboundCallNumbers/req";
import { ListOutboundCallNumbersResponse } from "./ListOutboundCallNumbers/res";
import { ListScriptPublishHistoriesRequest } from "./ListScriptPublishHistories/req";
import { ListScriptPublishHistoriesResponse } from "./ListScriptPublishHistories/res";
import { ListScriptVoiceConfigsRequest } from "./ListScriptVoiceConfigs/req";
import { ListScriptVoiceConfigsResponse } from "./ListScriptVoiceConfigs/res";
import { ListScriptsRequest } from "./ListScripts/req";
import { ListScriptsResponse } from "./ListScripts/res";
import { ListTagsRequest } from "./ListTags/req";
import { ListTagsResponse } from "./ListTags/res";
import { ModifyBatchJobsRequest } from "./ModifyBatchJobs/req";
import { ModifyBatchJobsResponse } from "./ModifyBatchJobs/res";
import { ModifyDialogueFlowRequest } from "./ModifyDialogueFlow/req";
import { ModifyDialogueFlowResponse } from "./ModifyDialogueFlow/res";
import { ModifyGlobalQuestionRequest } from "./ModifyGlobalQuestion/req";
import { ModifyGlobalQuestionResponse } from "./ModifyGlobalQuestion/res";
import { ModifyInstanceRequest } from "./ModifyInstance/req";
import { ModifyInstanceResponse } from "./ModifyInstance/res";
import { ModifyIntentRequest } from "./ModifyIntent/req";
import { ModifyIntentResponse } from "./ModifyIntent/res";
import { ModifyJobGroupRequest } from "./ModifyJobGroup/req";
import { ModifyJobGroupResponse } from "./ModifyJobGroup/res";
import { ModifyOutboundCallNumberRequest } from "./ModifyOutboundCallNumber/req";
import { ModifyOutboundCallNumberResponse } from "./ModifyOutboundCallNumber/res";
import { ModifyScriptRequest } from "./ModifyScript/req";
import { ModifyScriptResponse } from "./ModifyScript/res";
import { ModifyScriptVoiceConfigRequest } from "./ModifyScriptVoiceConfig/req";
import { ModifyScriptVoiceConfigResponse } from "./ModifyScriptVoiceConfig/res";
import { ModifyTTSConfigRequest } from "./ModifyTTSConfig/req";
import { ModifyTTSConfigResponse } from "./ModifyTTSConfig/res";
import { ModifyTagGroupsRequest } from "./ModifyTagGroups/req";
import { ModifyTagGroupsResponse } from "./ModifyTagGroups/res";
import { PublishScriptRequest } from "./PublishScript/req";
import { PublishScriptResponse } from "./PublishScript/res";
import { PublishScriptForDebugRequest } from "./PublishScriptForDebug/req";
import { PublishScriptForDebugResponse } from "./PublishScriptForDebug/res";
import { QueryJobsRequest } from "./QueryJobs/req";
import { QueryJobsResponse } from "./QueryJobs/res";
import { QueryScriptWaveformsRequest } from "./QueryScriptWaveforms/req";
import { QueryScriptWaveformsResponse } from "./QueryScriptWaveforms/res";
import { QueryScriptsByStatusRequest } from "./QueryScriptsByStatus/req";
import { QueryScriptsByStatusResponse } from "./QueryScriptsByStatus/res";
import { ResumeJobsRequest } from "./ResumeJobs/req";
import { ResumeJobsResponse } from "./ResumeJobs/res";
import { RecordFailureRequest } from "./RecordFailure/req";
import { RecordFailureResponse } from "./RecordFailure/res";
import { RollbackScriptRequest } from "./RollbackScript/req";
import { RollbackScriptResponse } from "./RollbackScript/res";
import { StartJobRequest } from "./StartJob/req";
import { StartJobResponse } from "./StartJob/res";
import { SubmitBatchJobsRequest } from "./SubmitBatchJobs/req";
import { SubmitBatchJobsResponse } from "./SubmitBatchJobs/res";
import { SubmitRecordingRequest } from "./SubmitRecording/req";
import { SubmitRecordingResponse } from "./SubmitRecording/res";
import { SubmitScriptReviewRequest } from "./SubmitScriptReview/req";
import { SubmitScriptReviewResponse } from "./SubmitScriptReview/res";
import { SuspendJobsRequest } from "./SuspendJobs/req";
import { SuspendJobsResponse } from "./SuspendJobs/res";
import { WithdrawScriptReviewRequest } from "./WithdrawScriptReview/req";
import { WithdrawScriptReviewResponse } from "./WithdrawScriptReview/res";
import { InflightTaskTimeoutRequest } from "./InflightTaskTimeout/req";
import { InflightTaskTimeoutResponse } from "./InflightTaskTimeout/res";
import { ListSchedulerInstancesRequest } from "./ListSchedulerInstances/req";
import { ListSchedulerInstancesResponse } from "./ListSchedulerInstances/res";
import { TaskPreparingRequest } from "./TaskPreparing/req";
import { TaskPreparingResponse } from "./TaskPreparing/res";
import { CreateBatchRepeatJobRequest } from "./CreateBatchRepeatJob/req";
import { CreateBatchRepeatJobResponse } from "./CreateBatchRepeatJob/res";
import { CreateJobDataParsingTaskRequest } from "./CreateJobDataParsingTask/req";
import { CreateJobDataParsingTaskResponse } from "./CreateJobDataParsingTask/res";
import { CreateJobGroupExportTaskRequest } from "./CreateJobGroupExportTask/req";
import { CreateJobGroupExportTaskResponse } from "./CreateJobGroupExportTask/res";
import { DeleteContactBlockListRequest } from "./DeleteContactBlockList/req";
import { DeleteContactBlockListResponse } from "./DeleteContactBlockList/res";
import { DeleteContactWhiteListRequest } from "./DeleteContactWhiteList/req";
import { DeleteContactWhiteListResponse } from "./DeleteContactWhiteList/res";
import { DescribeDialogueNodeStatisticsRequest } from "./DescribeDialogueNodeStatistics/req";
import { DescribeDialogueNodeStatisticsResponse } from "./DescribeDialogueNodeStatistics/res";
import { DescribeDsReportsRequest } from "./DescribeDsReports/req";
import { DescribeDsReportsResponse } from "./DescribeDsReports/res";
import { DescribeGroupExecutingInfoRequest } from "./DescribeGroupExecutingInfo/req";
import { DescribeGroupExecutingInfoResponse } from "./DescribeGroupExecutingInfo/res";
import { DescribeIntentStatisticsRequest } from "./DescribeIntentStatistics/req";
import { DescribeIntentStatisticsResponse } from "./DescribeIntentStatistics/res";
import { DescribeJobDataParsingTaskProgressRequest } from "./DescribeJobDataParsingTaskProgress/req";
import { DescribeJobDataParsingTaskProgressResponse } from "./DescribeJobDataParsingTaskProgress/res";
import { DescribeJobGroupExportTaskProgressRequest } from "./DescribeJobGroupExportTaskProgress/req";
import { DescribeJobGroupExportTaskProgressResponse } from "./DescribeJobGroupExportTaskProgress/res";
import { GetAsrServerInfoRequest } from "./GetAsrServerInfo/req";
import { GetAsrServerInfoResponse } from "./GetAsrServerInfo/res";
import { GetAfterAnswerDelayPlaybackRequest } from "./GetAfterAnswerDelayPlayback/req";
import { GetAfterAnswerDelayPlaybackResponse } from "./GetAfterAnswerDelayPlayback/res";
import { GetEffectiveDaysRequest } from "./GetEffectiveDays/req";
import { GetEffectiveDaysResponse } from "./GetEffectiveDays/res";
import { QueryJobsWithResultRequest } from "./QueryJobsWithResult/req";
import { QueryJobsWithResultResponse } from "./QueryJobsWithResult/res";
import { SaveAfterAnswerDelayPlaybackRequest } from "./SaveAfterAnswerDelayPlayback/req";
import { SaveAfterAnswerDelayPlaybackResponse } from "./SaveAfterAnswerDelayPlayback/res";
import { SaveBaseStrategyPeriodRequest } from "./SaveBaseStrategyPeriod/req";
import { SaveBaseStrategyPeriodResponse } from "./SaveBaseStrategyPeriod/res";
import { SaveContactBlockListRequest } from "./SaveContactBlockList/req";
import { SaveContactBlockListResponse } from "./SaveContactBlockList/res";
import { SaveContactWhiteListRequest } from "./SaveContactWhiteList/req";
import { SaveContactWhiteListResponse } from "./SaveContactWhiteList/res";
import { SaveEffectiveDaysRequest } from "./SaveEffectiveDays/req";
import { SaveEffectiveDaysResponse } from "./SaveEffectiveDays/res";
import { SaveMaxAttemptsPerDayRequest } from "./SaveMaxAttemptsPerDay/req";
import { SaveMaxAttemptsPerDayResponse } from "./SaveMaxAttemptsPerDay/res";
import { SuspendCallRequest } from "./SuspendCall/req";
import { SuspendCallResponse } from "./SuspendCall/res";
import { SuspendCallWithFileRequest } from "./SuspendCallWithFile/req";
import { SuspendCallWithFileResponse } from "./SuspendCallWithFile/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { GetTaskByUuidRequest } from "./GetTaskByUuid/req";
import { GetTaskByUuidResponse } from "./GetTaskByUuid/res";
import { ListJobGroupsAsyncRequest } from "./ListJobGroupsAsync/req";
import { ListJobGroupsAsyncResponse } from "./ListJobGroupsAsync/res";
import { ListResourceTagsRequest } from "./ListResourceTags/req";
import { ListResourceTagsResponse } from "./ListResourceTags/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { GetConcurrentConversationQuotaRequest } from "./GetConcurrentConversationQuota/req";
import { GetConcurrentConversationQuotaResponse } from "./GetConcurrentConversationQuota/res";
import { GetCurrentConcurrencyRequest } from "./GetCurrentConcurrency/req";
import { GetCurrentConcurrencyResponse } from "./GetCurrentConcurrency/res";
import { TerminateCallRequest } from "./TerminateCall/req";
import { TerminateCallResponse } from "./TerminateCall/res";
import { ListDownloadTasksRequest } from "./ListDownloadTasks/req";
import { ListDownloadTasksResponse } from "./ListDownloadTasks/res";
import { CreateDownloadUrlRequest } from "./CreateDownloadUrl/req";
import { CreateDownloadUrlResponse } from "./CreateDownloadUrl/res";
import { SearchTaskRequest } from "./SearchTask/req";
import { SearchTaskResponse } from "./SearchTask/res";
import { CreateNumberDistrictInfoParsingTaskRequest } from "./CreateNumberDistrictInfoParsingTask/req";
import { CreateNumberDistrictInfoParsingTaskResponse } from "./CreateNumberDistrictInfoParsingTask/res";
import { CreateNumberDistrictInfoDownloadUrlRequest } from "./CreateNumberDistrictInfoDownloadUrl/req";
import { CreateNumberDistrictInfoDownloadUrlResponse } from "./CreateNumberDistrictInfoDownloadUrl/res";
import { GetNumberDistrictInfoTemplateDownloadUrlRequest } from "./GetNumberDistrictInfoTemplateDownloadUrl/req";
import { GetNumberDistrictInfoTemplateDownloadUrlResponse } from "./GetNumberDistrictInfoTemplateDownloadUrl/res";
import { ApplyNumberDistrictInfoParsingResultRequest } from "./ApplyNumberDistrictInfoParsingResult/req";
import { ApplyNumberDistrictInfoParsingResultResponse } from "./ApplyNumberDistrictInfoParsingResult/res";
import { DismissNumberDistrictInfoParsingResultRequest } from "./DismissNumberDistrictInfoParsingResult/req";
import { DismissNumberDistrictInfoParsingResultResponse } from "./DismissNumberDistrictInfoParsingResult/res";
import { DeleteAllNumberDistrictInfoRequest } from "./DeleteAllNumberDistrictInfo/req";
import { DeleteAllNumberDistrictInfoResponse } from "./DeleteAllNumberDistrictInfo/res";
import { DescribeNumberDistrictInfoStatusRequest } from "./DescribeNumberDistrictInfoStatus/req";
import { DescribeNumberDistrictInfoStatusResponse } from "./DescribeNumberDistrictInfoStatus/res";
import { ListChatbotInstancesRequest } from "./ListChatbotInstances/req";
import { ListChatbotInstancesResponse } from "./ListChatbotInstances/res";
import { CreateInstanceBindNumberRequest } from "./CreateInstanceBindNumber/req";
import { CreateInstanceBindNumberResponse } from "./CreateInstanceBindNumber/res";
import { CreateTaskExportTaskRequest } from "./CreateTaskExportTask/req";
import { CreateTaskExportTaskResponse } from "./CreateTaskExportTask/res";
import { DescribeTenantBindNumberRequest } from "./DescribeTenantBindNumber/req";
import { DescribeTenantBindNumberResponse } from "./DescribeTenantBindNumber/res";
import { ListAllTenantBindNumberBindingRequest } from "./ListAllTenantBindNumberBinding/req";
import { ListAllTenantBindNumberBindingResponse } from "./ListAllTenantBindNumberBinding/res";
import { GenerateUploadUrlRequest } from "./GenerateUploadUrl/req";
import { GenerateUploadUrlResponse } from "./GenerateUploadUrl/res";
import { GetAnnotationMissionSummaryRequest } from "./GetAnnotationMissionSummary/req";
import { GetAnnotationMissionSummaryResponse } from "./GetAnnotationMissionSummary/res";
import { ListAnnotationMissionRequest } from "./ListAnnotationMission/req";
import { ListAnnotationMissionResponse } from "./ListAnnotationMission/res";
import { ModifyAnnotationMissionRequest } from "./ModifyAnnotationMission/req";
import { ModifyAnnotationMissionResponse } from "./ModifyAnnotationMission/res";
import { SaveAnnotationMissionSessionListRequest } from "./SaveAnnotationMissionSessionList/req";
import { SaveAnnotationMissionSessionListResponse } from "./SaveAnnotationMissionSessionList/res";
import { ListAnnotationMissionSessionRequest } from "./ListAnnotationMissionSession/req";
import { ListAnnotationMissionSessionResponse } from "./ListAnnotationMissionSession/res";
import { GetAnnotationMissionTagInfoListRequest } from "./GetAnnotationMissionTagInfoList/req";
import { GetAnnotationMissionTagInfoListResponse } from "./GetAnnotationMissionTagInfoList/res";
import { SaveAnnotationMissionTagInfoListRequest } from "./SaveAnnotationMissionTagInfoList/req";
import { SaveAnnotationMissionTagInfoListResponse } from "./SaveAnnotationMissionTagInfoList/res";
import { CreateAnnotationMissionRequest } from "./CreateAnnotationMission/req";
import { CreateAnnotationMissionResponse } from "./CreateAnnotationMission/res";
import { UploadScriptRecordingRequest } from "./UploadScriptRecording/req";
import { UploadScriptRecordingResponse } from "./UploadScriptRecording/res";
import { DownloadScriptRecordingRequest } from "./DownloadScriptRecording/req";
import { DownloadScriptRecordingResponse } from "./DownloadScriptRecording/res";
import { ListScriptRecordingRequest } from "./ListScriptRecording/req";
import { ListScriptRecordingResponse } from "./ListScriptRecording/res";
import { DeleteScriptRecordingRequest } from "./DeleteScriptRecording/req";
import { DeleteScriptRecordingResponse } from "./DeleteScriptRecording/res";

interface OUTBOUNDBOT {
    /**
     * 批量创建外呼任务。
     */
    AssignJobs(query: AssignJobsRequest): Promise<AssignJobsResponse>;
    /**
     * 取消创建后即将执行的作业或者执行中的作业（已经在通话中的作业取消无效）。
     */
    CancelJobs(query: CancelJobsRequest): Promise<CancelJobsResponse>;
    /**
     * 创建对话流程。
     */
    CreateDialogueFlow(query: CreateDialogueFlowRequest): Promise<CreateDialogueFlowResponse>;
    /**
     * 批量创建外呼作业。
     */
    CreateBatchJobs(query: CreateBatchJobsRequest): Promise<CreateBatchJobsResponse>;
    /**
     * 创建全局引用话术。
     */
    CreateGlobalQuestion(query: CreateGlobalQuestionRequest): Promise<CreateGlobalQuestionResponse>;
    /**
     * 创建一个智能外呼业务实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 创建触发话术节点的意图。
     */
    CreateIntent(query: CreateIntentRequest): Promise<CreateIntentResponse>;
    /**
     * 创建外呼号码。
     */
    CreateOutboundCallNumber(query: CreateOutboundCallNumberRequest): Promise<CreateOutboundCallNumberResponse>;
    /**
     * 创建话术。
     */
    CreateScript(query: CreateScriptRequest): Promise<CreateScriptResponse>;
    /**
     * 创建作业组。
     */
    CreateJobGroup(query: CreateJobGroupRequest): Promise<CreateJobGroupResponse>;
    /**
     * 创建播报话术的录音。
     */
    CreateScriptWaveform(query: CreateScriptWaveformRequest): Promise<CreateScriptWaveformResponse>;
    /**
     * 创建标签。
     */
    CreateTag(query: CreateTagRequest): Promise<CreateTagResponse>;
    /**
     * 删除对话流程。
     */
    DeleteDialogueFlow(query: DeleteDialogueFlowRequest): Promise<DeleteDialogueFlowResponse>;
    /**
     * 删除全局引用话术。
     */
    DeleteGlobalQuestion(query: DeleteGlobalQuestionRequest): Promise<DeleteGlobalQuestionResponse>;
    /**
     * 删除一个智能外呼业务实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 删除意图。
     */
    DeleteIntent(query: DeleteIntentRequest): Promise<DeleteIntentResponse>;
    /**
     * 删除一个任务。
     */
    DeleteJobGroup(query: DeleteJobGroupRequest): Promise<DeleteJobGroupResponse>;
    /**
     * 删除外呼号码。
     */
    DeleteOutboundCallNumber(query: DeleteOutboundCallNumberRequest): Promise<DeleteOutboundCallNumberResponse>;
    /**
     * 删除一个话术。
     */
    DeleteScript(query: DeleteScriptRequest): Promise<DeleteScriptResponse>;
    /**
     * 删除话术录音。
     */
    DeleteScriptWaveform(query: DeleteScriptWaveformRequest): Promise<DeleteScriptWaveformResponse>;
    /**
     * 返回一个全局的话术的数据。
     */
    DescribeGlobalQuestion(query: DescribeGlobalQuestionRequest): Promise<DescribeGlobalQuestionResponse>;
    /**
     * 查询智能外呼业务实例信息。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 返回一个意图。
     */
    DescribeIntent(query: DescribeIntentRequest): Promise<DescribeIntentResponse>;
    /**
     * 返回一个作业的对话数据。
     */
    DescribeJob(query: DescribeJobRequest): Promise<DescribeJobResponse>;
    /**
     * 查询智能外呼任务数据。
     */
    DescribeJobGroup(query: DescribeJobGroupRequest): Promise<DescribeJobGroupResponse>;
    /**
     * 返回一个话术的信息。
     */
    DescribeScript(query: DescribeScriptRequest): Promise<DescribeScriptResponse>;
    /**
     * 返回一个话术片段的声音配置。
     */
    DescribeScriptVoiceConfig(query: DescribeScriptVoiceConfigRequest): Promise<DescribeScriptVoiceConfigResponse>;
    /**
     * 查询tts配置信息。
     */
    DescribeTTSConfig(query: DescribeTTSConfigRequest): Promise<DescribeTTSConfigResponse>;
    /**
     * TTS试听。
     */
    DescribeTTSDemo(query: DescribeTTSDemoRequest): Promise<DescribeTTSDemoResponse>;
    /**
     * 查询标签统计数据。
     */
    DescribeTagHitsSummary(query: DescribeTagHitsSummaryRequest): Promise<DescribeTagHitsSummaryResponse>;
    /**
     * CC回调外呼的机器人对话接口。（已废弃）
     */
    Dialogue(query: DialogueRequest): Promise<DialogueResponse>;
    /**
     * 从原有的话术复制一个新的话术。
     */
    DuplicateScript(query: DuplicateScriptRequest): Promise<DuplicateScriptResponse>;
    /**
     * 下载通话录音。
     */
    DownloadRecording(query: DownloadRecordingRequest): Promise<DownloadRecordingResponse>;
    /**
     * 导出一个话术。
     */
    ExportScript(query: ExportScriptRequest): Promise<ExportScriptResponse>;
    /**
     * 导入话术。
     */
    ImportScript(query: ImportScriptRequest): Promise<ImportScriptResponse>;
    /**
     * 查询一个话术下的对话流程列表。
     */
    ListDialogueFlows(query: ListDialogueFlowsRequest): Promise<ListDialogueFlowsResponse>;
    /**
     * 查询关键问题列表。
     */
    ListGlobalQuestions(query: ListGlobalQuestionsRequest): Promise<ListGlobalQuestionsResponse>;
    /**
     * 查询智能外呼业务实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 查询意图列表。
     */
    ListIntents(query: ListIntentsRequest): Promise<ListIntentsResponse>;
    /**
     * 查询外呼任务列表。
     */
    ListJobGroups(query: ListJobGroupsRequest): Promise<ListJobGroupsResponse>;
    /**
     * 根据作业组查询作业。
     */
    ListJobsByGroup(query: ListJobsByGroupRequest): Promise<ListJobsByGroupResponse>;
    /**
     * 查询多个作业。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 查询外呼主叫号码列表。
     */
    ListOutboundCallNumbers(query: ListOutboundCallNumbersRequest): Promise<ListOutboundCallNumbersResponse>;
    /**
     * 查询外呼发布历史列表。
     */
    ListScriptPublishHistories(query: ListScriptPublishHistoriesRequest): Promise<ListScriptPublishHistoriesResponse>;
    /**
     * 查询话术录音列表。
     */
    ListScriptVoiceConfigs(query: ListScriptVoiceConfigsRequest): Promise<ListScriptVoiceConfigsResponse>;
    /**
     * 查询话术列表。
     */
    ListScripts(query: ListScriptsRequest): Promise<ListScriptsResponse>;
    /**
     * 查询话术下的标签。
     */
    ListTags(query: ListTagsRequest): Promise<ListTagsResponse>;
    /**
     * 修改作业做（包括作业）。
     */
    ModifyBatchJobs(query: ModifyBatchJobsRequest): Promise<ModifyBatchJobsResponse>;
    /**
     * 修改对话流程。
     */
    ModifyDialogueFlow(query: ModifyDialogueFlowRequest): Promise<ModifyDialogueFlowResponse>;
    /**
     * 修改全局引用话术。
     */
    ModifyGlobalQuestion(query: ModifyGlobalQuestionRequest): Promise<ModifyGlobalQuestionResponse>;
    /**
     * 修改智能外呼业务实例。
     */
    ModifyInstance(query: ModifyInstanceRequest): Promise<ModifyInstanceResponse>;
    /**
     * 修改意图。
     */
    ModifyIntent(query: ModifyIntentRequest): Promise<ModifyIntentResponse>;
    /**
     * 修改智能外呼任务。
     */
    ModifyJobGroup(query: ModifyJobGroupRequest): Promise<ModifyJobGroupResponse>;
    /**
     * 修改外呼号码。
     */
    ModifyOutboundCallNumber(query: ModifyOutboundCallNumberRequest): Promise<ModifyOutboundCallNumberResponse>;
    /**
     * 修改话术信息。
     */
    ModifyScript(query: ModifyScriptRequest): Promise<ModifyScriptResponse>;
    /**
     * 修改话术配置。
     */
    ModifyScriptVoiceConfig(query: ModifyScriptVoiceConfigRequest): Promise<ModifyScriptVoiceConfigResponse>;
    /**
     * 修改话术的tts配置。
     */
    ModifyTTSConfig(query: ModifyTTSConfigRequest): Promise<ModifyTTSConfigResponse>;
    /**
     * 修改标签组。
     */
    ModifyTagGroups(query: ModifyTagGroupsRequest): Promise<ModifyTagGroupsResponse>;
    /**
     * 发布话术。
     */
    PublishScript(query: PublishScriptRequest): Promise<PublishScriptResponse>;
    /**
     * 发布话术（调试的版本）。
     */
    PublishScriptForDebug(query: PublishScriptForDebugRequest): Promise<PublishScriptForDebugResponse>;
    /**
     * 查询作业列表。
     */
    QueryJobs(query: QueryJobsRequest): Promise<QueryJobsResponse>;
    /**
     * 查询话术文本的录音列表。
     */
    QueryScriptWaveforms(query: QueryScriptWaveformsRequest): Promise<QueryScriptWaveformsResponse>;
    /**
     * 根据话术状态查询话术。
     */
    QueryScriptsByStatus(query: QueryScriptsByStatusRequest): Promise<QueryScriptsByStatusResponse>;
    /**
     * 重启暂停的作业。
     */
    ResumeJobs(query: ResumeJobsRequest): Promise<ResumeJobsResponse>;
    /**
     * CC提交通话失败原因到外呼业务系统。
     */
    RecordFailure(query: RecordFailureRequest): Promise<RecordFailureResponse>;
    /**
     * 回滚发布的话术。
     */
    RollbackScript(query: RollbackScriptRequest): Promise<RollbackScriptResponse>;
    /**
     * 不经过外呼调度系统直接发起呼叫。该接口只针对白名单用户开放。
     */
    StartJob(query: StartJobRequest): Promise<StartJobResponse>;
    /**
     * 将草稿状态的作业组提交执行。
     */
    SubmitBatchJobs(query: SubmitBatchJobsRequest): Promise<SubmitBatchJobsResponse>;
    /**
     * 向外呼提交通话录音。
     */
    SubmitRecording(query: SubmitRecordingRequest): Promise<SubmitRecordingResponse>;
    /**
     * 提交话术审核。
     */
    SubmitScriptReview(query: SubmitScriptReviewRequest): Promise<SubmitScriptReviewResponse>;
    /**
     * 暂停作业。
     */
    SuspendJobs(query: SuspendJobsRequest): Promise<SuspendJobsResponse>;
    /**
     * 撤销话术审核。
     */
    WithdrawScriptReview(query: WithdrawScriptReviewRequest): Promise<WithdrawScriptReviewResponse>;
    InflightTaskTimeout(query: InflightTaskTimeoutRequest): Promise<InflightTaskTimeoutResponse>;
    ListSchedulerInstances(query: ListSchedulerInstancesRequest): Promise<ListSchedulerInstancesResponse>;
    /**
     * 准备执行任务。
     */
    TaskPreparing(query: TaskPreparingRequest): Promise<TaskPreparingResponse>;
    CreateBatchRepeatJob(query: CreateBatchRepeatJobRequest): Promise<CreateBatchRepeatJobResponse>;
    CreateJobDataParsingTask(query: CreateJobDataParsingTaskRequest): Promise<CreateJobDataParsingTaskResponse>;
    CreateJobGroupExportTask(query: CreateJobGroupExportTaskRequest): Promise<CreateJobGroupExportTaskResponse>;
    DeleteContactBlockList(query: DeleteContactBlockListRequest): Promise<DeleteContactBlockListResponse>;
    DeleteContactWhiteList(query: DeleteContactWhiteListRequest): Promise<DeleteContactWhiteListResponse>;
    DescribeDialogueNodeStatistics(query: DescribeDialogueNodeStatisticsRequest): Promise<DescribeDialogueNodeStatisticsResponse>;
    DescribeDsReports(query: DescribeDsReportsRequest): Promise<DescribeDsReportsResponse>;
    DescribeGroupExecutingInfo(query: DescribeGroupExecutingInfoRequest): Promise<DescribeGroupExecutingInfoResponse>;
    DescribeIntentStatistics(query: DescribeIntentStatisticsRequest): Promise<DescribeIntentStatisticsResponse>;
    DescribeJobDataParsingTaskProgress(query: DescribeJobDataParsingTaskProgressRequest): Promise<DescribeJobDataParsingTaskProgressResponse>;
    DescribeJobGroupExportTaskProgress(query: DescribeJobGroupExportTaskProgressRequest): Promise<DescribeJobGroupExportTaskProgressResponse>;
    GetAsrServerInfo(query: GetAsrServerInfoRequest): Promise<GetAsrServerInfoResponse>;
    GetAfterAnswerDelayPlayback(query: GetAfterAnswerDelayPlaybackRequest): Promise<GetAfterAnswerDelayPlaybackResponse>;
    GetEffectiveDays(query: GetEffectiveDaysRequest): Promise<GetEffectiveDaysResponse>;
    QueryJobsWithResult(query: QueryJobsWithResultRequest): Promise<QueryJobsWithResultResponse>;
    SaveAfterAnswerDelayPlayback(query: SaveAfterAnswerDelayPlaybackRequest): Promise<SaveAfterAnswerDelayPlaybackResponse>;
    SaveBaseStrategyPeriod(query: SaveBaseStrategyPeriodRequest): Promise<SaveBaseStrategyPeriodResponse>;
    SaveContactBlockList(query: SaveContactBlockListRequest): Promise<SaveContactBlockListResponse>;
    /**
     * 保存外呼白名单。
     */
    SaveContactWhiteList(query: SaveContactWhiteListRequest): Promise<SaveContactWhiteListResponse>;
    SaveEffectiveDays(query: SaveEffectiveDaysRequest): Promise<SaveEffectiveDaysResponse>;
    SaveMaxAttemptsPerDay(query: SaveMaxAttemptsPerDayRequest): Promise<SaveMaxAttemptsPerDayResponse>;
    SuspendCall(query: SuspendCallRequest): Promise<SuspendCallResponse>;
    SuspendCallWithFile(query: SuspendCallWithFileRequest): Promise<SuspendCallWithFileResponse>;
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    GetTaskByUuid(query: GetTaskByUuidRequest): Promise<GetTaskByUuidResponse>;
    /**
     * 异步获取外呼任务列表。当在调用ListJobGroup接口时指定了Async时，使用此接口获取异步ListJobGroup的结果。
     */
    ListJobGroupsAsync(query: ListJobGroupsAsyncRequest): Promise<ListJobGroupsAsyncResponse>;
    ListResourceTags(query: ListResourceTagsRequest): Promise<ListResourceTagsResponse>;
    /**
     * 查询资源标签关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 给资源打标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 删除资源标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    GetConcurrentConversationQuota(query: GetConcurrentConversationQuotaRequest): Promise<GetConcurrentConversationQuotaResponse>;
    GetCurrentConcurrency(query: GetCurrentConcurrencyRequest): Promise<GetCurrentConcurrencyResponse>;
    TerminateCall(query: TerminateCallRequest): Promise<TerminateCallResponse>;
    ListDownloadTasks(query: ListDownloadTasksRequest): Promise<ListDownloadTasksResponse>;
    CreateDownloadUrl(query: CreateDownloadUrlRequest): Promise<CreateDownloadUrlResponse>;
    SearchTask(query: SearchTaskRequest): Promise<SearchTaskResponse>;
    /**
     * 创建号码库解析任务
     */
    CreateNumberDistrictInfoParsingTask(query: CreateNumberDistrictInfoParsingTaskRequest): Promise<CreateNumberDistrictInfoParsingTaskResponse>;
    /**
     * 创建号码库下载链接
     */
    CreateNumberDistrictInfoDownloadUrl(query: CreateNumberDistrictInfoDownloadUrlRequest): Promise<CreateNumberDistrictInfoDownloadUrlResponse>;
    /**
     * 获取号码库模板下载链接
     */
    GetNumberDistrictInfoTemplateDownloadUrl(query: GetNumberDistrictInfoTemplateDownloadUrlRequest): Promise<GetNumberDistrictInfoTemplateDownloadUrlResponse>;
    /**
     * 生效号码库解析结果
     */
    ApplyNumberDistrictInfoParsingResult(query: ApplyNumberDistrictInfoParsingResultRequest): Promise<ApplyNumberDistrictInfoParsingResultResponse>;
    /**
     * 取消号码库解析结果
     */
    DismissNumberDistrictInfoParsingResult(query: DismissNumberDistrictInfoParsingResultRequest): Promise<DismissNumberDistrictInfoParsingResultResponse>;
    /**
     * 清空归属地号码库
     */
    DeleteAllNumberDistrictInfo(query: DeleteAllNumberDistrictInfoRequest): Promise<DeleteAllNumberDistrictInfoResponse>;
    /**
     * 查询号码库状态
     */
    DescribeNumberDistrictInfoStatus(query: DescribeNumberDistrictInfoStatusRequest): Promise<DescribeNumberDistrictInfoStatusResponse>;
    ListChatbotInstances(query: ListChatbotInstancesRequest): Promise<ListChatbotInstancesResponse>;
    /**
     * 创建实例绑定号码
     */
    CreateInstanceBindNumber(query: CreateInstanceBindNumberRequest): Promise<CreateInstanceBindNumberResponse>;
    /**
     * 创建外呼历史导出异步任务。
     */
    CreateTaskExportTask(query: CreateTaskExportTaskRequest): Promise<CreateTaskExportTaskResponse>;
    /**
     * 号码绑定实例列表
     */
    DescribeTenantBindNumber(query: DescribeTenantBindNumberRequest): Promise<DescribeTenantBindNumberResponse>;
    /**
     * 租户绑定号码列表
     */
    ListAllTenantBindNumberBinding(query: ListAllTenantBindNumberBindingRequest): Promise<ListAllTenantBindNumberBindingResponse>;
    GenerateUploadUrl(query: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
    GetAnnotationMissionSummary(query: GetAnnotationMissionSummaryRequest): Promise<GetAnnotationMissionSummaryResponse>;
    ListAnnotationMission(query: ListAnnotationMissionRequest): Promise<ListAnnotationMissionResponse>;
    ModifyAnnotationMission(query: ModifyAnnotationMissionRequest): Promise<ModifyAnnotationMissionResponse>;
    SaveAnnotationMissionSessionList(query: SaveAnnotationMissionSessionListRequest): Promise<SaveAnnotationMissionSessionListResponse>;
    ListAnnotationMissionSession(query: ListAnnotationMissionSessionRequest): Promise<ListAnnotationMissionSessionResponse>;
    GetAnnotationMissionTagInfoList(query: GetAnnotationMissionTagInfoListRequest): Promise<GetAnnotationMissionTagInfoListResponse>;
    SaveAnnotationMissionTagInfoList(query: SaveAnnotationMissionTagInfoListRequest): Promise<SaveAnnotationMissionTagInfoListResponse>;
    CreateAnnotationMission(query: CreateAnnotationMissionRequest): Promise<CreateAnnotationMissionResponse>;
    /**
     * 上传录音文件
     */
    UploadScriptRecording(query: UploadScriptRecordingRequest): Promise<UploadScriptRecordingResponse>;
    /**
     * 下载录音(获取录音地址)
     */
    DownloadScriptRecording(query: DownloadScriptRecordingRequest): Promise<DownloadScriptRecordingResponse>;
    /**
     * 查询录音文件列表
     */
    ListScriptRecording(query: ListScriptRecordingRequest): Promise<ListScriptRecordingResponse>;
    /**
     * 删除录音
     */
    DeleteScriptRecording(query: DeleteScriptRecordingRequest): Promise<DeleteScriptRecordingResponse>;
}
export default OUTBOUNDBOT;
