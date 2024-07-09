import { AssociateChatbotInstanceRequest } from "./AssociateChatbotInstance/req";
import { AssociateChatbotInstanceResponse } from "./AssociateChatbotInstance/res";
import { AuditTTSVoiceRequest } from "./AuditTTSVoice/req";
import { AuditTTSVoiceResponse } from "./AuditTTSVoice/res";
import { BeginDialogueRequest } from "./BeginDialogue/req";
import { BeginDialogueResponse } from "./BeginDialogue/res";
import { CollectedNumberRequest } from "./CollectedNumber/req";
import { CollectedNumberResponse } from "./CollectedNumber/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DebugBeginDialogueRequest } from "./DebugBeginDialogue/req";
import { DebugBeginDialogueResponse } from "./DebugBeginDialogue/res";
import { DebugCollectedNumberRequest } from "./DebugCollectedNumber/req";
import { DebugCollectedNumberResponse } from "./DebugCollectedNumber/res";
import { DebugDialogueRequest } from "./DebugDialogue/req";
import { DebugDialogueResponse } from "./DebugDialogue/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DescribeConversationRequest } from "./DescribeConversation/req";
import { DescribeConversationResponse } from "./DescribeConversation/res";
import { DescribeConversationContextRequest } from "./DescribeConversationContext/req";
import { DescribeConversationContextResponse } from "./DescribeConversationContext/res";
import { DescribeExportProgressRequest } from "./DescribeExportProgress/req";
import { DescribeExportProgressResponse } from "./DescribeExportProgress/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeNavigationConfigRequest } from "./DescribeNavigationConfig/req";
import { DescribeNavigationConfigResponse } from "./DescribeNavigationConfig/res";
import { DescribeRecordingRequest } from "./DescribeRecording/req";
import { DescribeRecordingResponse } from "./DescribeRecording/res";
import { DescribeStatisticalDataRequest } from "./DescribeStatisticalData/req";
import { DescribeStatisticalDataResponse } from "./DescribeStatisticalData/res";
import { DescribeTTSConfigRequest } from "./DescribeTTSConfig/req";
import { DescribeTTSConfigResponse } from "./DescribeTTSConfig/res";
import { DialogueRequest } from "./Dialogue/req";
import { DialogueResponse } from "./Dialogue/res";
import { DisableInstanceRequest } from "./DisableInstance/req";
import { DisableInstanceResponse } from "./DisableInstance/res";
import { EnableInstanceRequest } from "./EnableInstance/req";
import { EnableInstanceResponse } from "./EnableInstance/res";
import { EndDialogueRequest } from "./EndDialogue/req";
import { EndDialogueResponse } from "./EndDialogue/res";
import { ExportConversationDetailsRequest } from "./ExportConversationDetails/req";
import { ExportConversationDetailsResponse } from "./ExportConversationDetails/res";
import { ExportStatisticalDataRequest } from "./ExportStatisticalData/req";
import { ExportStatisticalDataResponse } from "./ExportStatisticalData/res";
import { ListChatbotInstancesRequest } from "./ListChatbotInstances/req";
import { ListChatbotInstancesResponse } from "./ListChatbotInstances/res";
import { ListConversationDetailsRequest } from "./ListConversationDetails/req";
import { ListConversationDetailsResponse } from "./ListConversationDetails/res";
import { ListConversationsRequest } from "./ListConversations/req";
import { ListConversationsResponse } from "./ListConversations/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ModifyGreetingConfigRequest } from "./ModifyGreetingConfig/req";
import { ModifyGreetingConfigResponse } from "./ModifyGreetingConfig/res";
import { ModifyInstanceRequest } from "./ModifyInstance/req";
import { ModifyInstanceResponse } from "./ModifyInstance/res";
import { ModifySilenceTimeoutConfigRequest } from "./ModifySilenceTimeoutConfig/req";
import { ModifySilenceTimeoutConfigResponse } from "./ModifySilenceTimeoutConfig/res";
import { ModifyTTSConfigRequest } from "./ModifyTTSConfig/req";
import { ModifyTTSConfigResponse } from "./ModifyTTSConfig/res";
import { ModifyUnrecognizingConfigRequest } from "./ModifyUnrecognizingConfig/req";
import { ModifyUnrecognizingConfigResponse } from "./ModifyUnrecognizingConfig/res";
import { QueryConversationsRequest } from "./QueryConversations/req";
import { QueryConversationsResponse } from "./QueryConversations/res";
import { SaveRecordingRequest } from "./SaveRecording/req";
import { SaveRecordingResponse } from "./SaveRecording/res";
import { SilenceTimeoutRequest } from "./SilenceTimeout/req";
import { SilenceTimeoutResponse } from "./SilenceTimeout/res";
import { CreateDownloadUrlRequest } from "./CreateDownloadUrl/req";
import { CreateDownloadUrlResponse } from "./CreateDownloadUrl/res";
import { ListDownloadTasksRequest } from "./ListDownloadTasks/req";
import { ListDownloadTasksResponse } from "./ListDownloadTasks/res";
import { GenerateUploadUrlRequest } from "./GenerateUploadUrl/req";
import { GenerateUploadUrlResponse } from "./GenerateUploadUrl/res";
import { ModifyAsrConfigRequest } from "./ModifyAsrConfig/req";
import { ModifyAsrConfigResponse } from "./ModifyAsrConfig/res";
import { GetAsrConfigRequest } from "./GetAsrConfig/req";
import { GetAsrConfigResponse } from "./GetAsrConfig/res";
import { GetRealTimeConcurrencyRequest } from "./GetRealTimeConcurrency/req";
import { GetRealTimeConcurrencyResponse } from "./GetRealTimeConcurrency/res";

interface VOICENAVIGATOR {
    /**
     * 关联小蜜机器人。
     */
    AssociateChatbotInstance(query: AssociateChatbotInstanceRequest): Promise<AssociateChatbotInstanceResponse>;
    /**
     * 试听TTS声音。
     */
    AuditTTSVoice(query: AuditTTSVoiceRequest): Promise<AuditTTSVoiceResponse>;
    /**
     * 开启会话。
     */
    BeginDialogue(query: BeginDialogueRequest): Promise<BeginDialogueResponse>;
    /**
     * 收号。
     */
    CollectedNumber(query: CollectedNumberRequest): Promise<CollectedNumberResponse>;
    /**
     * 创建智能导航实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 调试环境开启会话。
     */
    DebugBeginDialogue(query: DebugBeginDialogueRequest): Promise<DebugBeginDialogueResponse>;
    /**
     * 调试环境收号。
     */
    DebugCollectedNumber(query: DebugCollectedNumberRequest): Promise<DebugCollectedNumberResponse>;
    /**
     * 调试环境对话。
     */
    DebugDialogue(query: DebugDialogueRequest): Promise<DebugDialogueResponse>;
    /**
     * 删除导航实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 查询对话信息。
     */
    DescribeConversation(query: DescribeConversationRequest): Promise<DescribeConversationResponse>;
    /**
     * 查询会话上下文数据{}。
     */
    DescribeConversationContext(query: DescribeConversationContextRequest): Promise<DescribeConversationContextResponse>;
    /**
     * 查询导出任务状态。
     */
    DescribeExportProgress(query: DescribeExportProgressRequest): Promise<DescribeExportProgressResponse>;
    /**
     * 查询实例信息。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 查看实例IVR配置。
     */
    DescribeNavigationConfig(query: DescribeNavigationConfigRequest): Promise<DescribeNavigationConfigResponse>;
    /**
     * 获取对话录音。
     */
    DescribeRecording(query: DescribeRecordingRequest): Promise<DescribeRecordingResponse>;
    /**
     * 查看当前实例的统计数据。
     */
    DescribeStatisticalData(query: DescribeStatisticalDataRequest): Promise<DescribeStatisticalDataResponse>;
    /**
     * 查询tts 配置。
     */
    DescribeTTSConfig(query: DescribeTTSConfigRequest): Promise<DescribeTTSConfigResponse>;
    /**
     * 对话接口。
     */
    Dialogue(query: DialogueRequest): Promise<DialogueResponse>;
    /**
     * 删除智能导航实例。
     */
    DisableInstance(query: DisableInstanceRequest): Promise<DisableInstanceResponse>;
    /**
     * 启用实例。
     */
    EnableInstance(query: EnableInstanceRequest): Promise<EnableInstanceResponse>;
    /**
     * 结束对话。
     */
    EndDialogue(query: EndDialogueRequest): Promise<EndDialogueResponse>;
    /**
     * 导出会话详情。
     */
    ExportConversationDetails(query: ExportConversationDetailsRequest): Promise<ExportConversationDetailsResponse>;
    /**
     * 导出统计数据。
     */
    ExportStatisticalData(query: ExportStatisticalDataRequest): Promise<ExportStatisticalDataResponse>;
    /**
     * 查询实例列表。
     */
    ListChatbotInstances(query: ListChatbotInstancesRequest): Promise<ListChatbotInstancesResponse>;
    /**
     * 查看实例下的对话。
     */
    ListConversationDetails(query: ListConversationDetailsRequest): Promise<ListConversationDetailsResponse>;
    /**
     * 查询会话列表。
     */
    ListConversations(query: ListConversationsRequest): Promise<ListConversationsResponse>;
    /**
     * 分页获取当前租户下智能导航实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 修改问候语配置。
     */
    ModifyGreetingConfig(query: ModifyGreetingConfigRequest): Promise<ModifyGreetingConfigResponse>;
    /**
     * 修改实例。
     */
    ModifyInstance(query: ModifyInstanceRequest): Promise<ModifyInstanceResponse>;
    /**
     * 修改静默超时配置。
     */
    ModifySilenceTimeoutConfig(query: ModifySilenceTimeoutConfigRequest): Promise<ModifySilenceTimeoutConfigResponse>;
    /**
     * 修改TTS配置。
     */
    ModifyTTSConfig(query: ModifyTTSConfigRequest): Promise<ModifyTTSConfigResponse>;
    /**
     * 修改拒识配置。
     */
    ModifyUnrecognizingConfig(query: ModifyUnrecognizingConfigRequest): Promise<ModifyUnrecognizingConfigResponse>;
    /**
     * 查询对话记录。
     */
    QueryConversations(query: QueryConversationsRequest): Promise<QueryConversationsResponse>;
    /**
     * 保存录音。
     */
    SaveRecording(query: SaveRecordingRequest): Promise<SaveRecordingResponse>;
    /**
     * 静默超时。
     */
    SilenceTimeout(query: SilenceTimeoutRequest): Promise<SilenceTimeoutResponse>;
    CreateDownloadUrl(query: CreateDownloadUrlRequest): Promise<CreateDownloadUrlResponse>;
    ListDownloadTasks(query: ListDownloadTasksRequest): Promise<ListDownloadTasksResponse>;
    GenerateUploadUrl(query: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse>;
    ModifyAsrConfig(query: ModifyAsrConfigRequest): Promise<ModifyAsrConfigResponse>;
    GetAsrConfig(query: GetAsrConfigRequest): Promise<GetAsrConfigResponse>;
    /**
     * 获取实例的实时并发数
     */
    GetRealTimeConcurrency(query: GetRealTimeConcurrencyRequest): Promise<GetRealTimeConcurrencyResponse>;
}
export default VOICENAVIGATOR;
