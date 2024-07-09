import { BatchRobotSmartCallRequest } from "./BatchRobotSmartCall/req";
import { BatchRobotSmartCallResponse } from "./BatchRobotSmartCall/res";
import { CancelOrderRobotTaskRequest } from "./CancelOrderRobotTask/req";
import { CancelOrderRobotTaskResponse } from "./CancelOrderRobotTask/res";
import { CancelRobotTaskRequest } from "./CancelRobotTask/req";
import { CancelRobotTaskResponse } from "./CancelRobotTask/res";
import { CreateRobotTaskRequest } from "./CreateRobotTask/req";
import { CreateRobotTaskResponse } from "./CreateRobotTask/res";
import { DeleteRobotTaskRequest } from "./DeleteRobotTask/req";
import { DeleteRobotTaskResponse } from "./DeleteRobotTask/res";
import { IvrCallRequest } from "./IvrCall/req";
import { IvrCallResponse } from "./IvrCall/res";
import { QueryCallDetailByCallIdRequest } from "./QueryCallDetailByCallId/req";
import { QueryCallDetailByCallIdResponse } from "./QueryCallDetailByCallId/res";
import { QueryCallDetailByTaskIdRequest } from "./QueryCallDetailByTaskId/req";
import { QueryCallDetailByTaskIdResponse } from "./QueryCallDetailByTaskId/res";
import { QueryRobotInfoListRequest } from "./QueryRobotInfoList/req";
import { QueryRobotInfoListResponse } from "./QueryRobotInfoList/res";
import { QueryRobotTaskCallDetailRequest } from "./QueryRobotTaskCallDetail/req";
import { QueryRobotTaskCallDetailResponse } from "./QueryRobotTaskCallDetail/res";
import { QueryRobotTaskCallListRequest } from "./QueryRobotTaskCallList/req";
import { QueryRobotTaskCallListResponse } from "./QueryRobotTaskCallList/res";
import { QueryRobotTaskDetailRequest } from "./QueryRobotTaskDetail/req";
import { QueryRobotTaskDetailResponse } from "./QueryRobotTaskDetail/res";
import { QueryRobotTaskListRequest } from "./QueryRobotTaskList/req";
import { QueryRobotTaskListResponse } from "./QueryRobotTaskList/res";
import { QueryRobotv2AllListRequest } from "./QueryRobotv2AllList/req";
import { QueryRobotv2AllListResponse } from "./QueryRobotv2AllList/res";
import { SingleCallByTtsRequest } from "./SingleCallByTts/req";
import { SingleCallByTtsResponse } from "./SingleCallByTts/res";
import { SingleCallByVoiceRequest } from "./SingleCallByVoice/req";
import { SingleCallByVoiceResponse } from "./SingleCallByVoice/res";
import { SmartCallRequest } from "./SmartCall/req";
import { SmartCallResponse } from "./SmartCall/res";
import { SmartCallOperateRequest } from "./SmartCallOperate/req";
import { SmartCallOperateResponse } from "./SmartCallOperate/res";
import { StartRobotTaskRequest } from "./StartRobotTask/req";
import { StartRobotTaskResponse } from "./StartRobotTask/res";
import { StopRobotTaskRequest } from "./StopRobotTask/req";
import { StopRobotTaskResponse } from "./StopRobotTask/res";
import { UploadRobotTaskCalledFileRequest } from "./UploadRobotTaskCalledFile/req";
import { UploadRobotTaskCalledFileResponse } from "./UploadRobotTaskCalledFile/res";
import { CreateCallTaskRequest } from "./CreateCallTask/req";
import { CreateCallTaskResponse } from "./CreateCallTask/res";
import { ExecuteCallTaskRequest } from "./ExecuteCallTask/req";
import { ExecuteCallTaskResponse } from "./ExecuteCallTask/res";
import { ListCallTaskRequest } from "./ListCallTask/req";
import { ListCallTaskResponse } from "./ListCallTask/res";
import { ListCallTaskDetailRequest } from "./ListCallTaskDetail/req";
import { ListCallTaskDetailResponse } from "./ListCallTaskDetail/res";
import { AddVirtualNumberRelationRequest } from "./AddVirtualNumberRelation/req";
import { AddVirtualNumberRelationResponse } from "./AddVirtualNumberRelation/res";
import { QueryVirtualNumberRequest } from "./QueryVirtualNumber/req";
import { QueryVirtualNumberResponse } from "./QueryVirtualNumber/res";
import { QueryVirtualNumberRelationRequest } from "./QueryVirtualNumberRelation/req";
import { QueryVirtualNumberRelationResponse } from "./QueryVirtualNumberRelation/res";
import { GetTokenRequest } from "./GetToken/req";
import { GetTokenResponse } from "./GetToken/res";
import { GetHotlineQualificationByOrderRequest } from "./GetHotlineQualificationByOrder/req";
import { GetHotlineQualificationByOrderResponse } from "./GetHotlineQualificationByOrder/res";
import { ListHotlineTransferNumberRequest } from "./ListHotlineTransferNumber/req";
import { ListHotlineTransferNumberResponse } from "./ListHotlineTransferNumber/res";
import { ListHotlineTransferRegisterFileRequest } from "./ListHotlineTransferRegisterFile/req";
import { ListHotlineTransferRegisterFileResponse } from "./ListHotlineTransferRegisterFile/res";
import { QueryCallInPoolTransferConfigRequest } from "./QueryCallInPoolTransferConfig/req";
import { QueryCallInPoolTransferConfigResponse } from "./QueryCallInPoolTransferConfig/res";
import { QueryCallInTransferRecordRequest } from "./QueryCallInTransferRecord/req";
import { QueryCallInTransferRecordResponse } from "./QueryCallInTransferRecord/res";
import { SendVerificationRequest } from "./SendVerification/req";
import { SendVerificationResponse } from "./SendVerification/res";
import { SetTransferCalleePoolConfigRequest } from "./SetTransferCalleePoolConfig/req";
import { SetTransferCalleePoolConfigResponse } from "./SetTransferCalleePoolConfig/res";
import { SubmitHotlineTransferRegisterRequest } from "./SubmitHotlineTransferRegister/req";
import { SubmitHotlineTransferRegisterResponse } from "./SubmitHotlineTransferRegister/res";
import { QueryVoiceFileAuditInfoRequest } from "./QueryVoiceFileAuditInfo/req";
import { QueryVoiceFileAuditInfoResponse } from "./QueryVoiceFileAuditInfo/res";
import { RecoverCallInConfigRequest } from "./RecoverCallInConfig/req";
import { RecoverCallInConfigResponse } from "./RecoverCallInConfig/res";
import { StopCallInConfigRequest } from "./StopCallInConfig/req";
import { StopCallInConfigResponse } from "./StopCallInConfig/res";
import { PauseVideoFileRequest } from "./PauseVideoFile/req";
import { PauseVideoFileResponse } from "./PauseVideoFile/res";
import { ResumeVideoFileRequest } from "./ResumeVideoFile/req";
import { ResumeVideoFileResponse } from "./ResumeVideoFile/res";
import { PlayVideoFileRequest } from "./PlayVideoFile/req";
import { PlayVideoFileResponse } from "./PlayVideoFile/res";
import { SingleCallByVideoRequest } from "./SingleCallByVideo/req";
import { SingleCallByVideoResponse } from "./SingleCallByVideo/res";
import { QueryVideoPlayProgressRequest } from "./QueryVideoPlayProgress/req";
import { QueryVideoPlayProgressResponse } from "./QueryVideoPlayProgress/res";
import { UpgradeVideoFileRequest } from "./UpgradeVideoFile/req";
import { UpgradeVideoFileResponse } from "./UpgradeVideoFile/res";
import { DegradeVideoFileRequest } from "./DegradeVideoFile/req";
import { DegradeVideoFileResponse } from "./DegradeVideoFile/res";
import { SkipVideoFileRequest } from "./SkipVideoFile/req";
import { SkipVideoFileResponse } from "./SkipVideoFile/res";
import { GetCallMediaTypeRequest } from "./GetCallMediaType/req";
import { GetCallMediaTypeResponse } from "./GetCallMediaType/res";
import { GetTemporaryFileUrlRequest } from "./GetTemporaryFileUrl/req";
import { GetTemporaryFileUrlResponse } from "./GetTemporaryFileUrl/res";

interface DYVMSAPI {
    /**
     * 批量发起智能语音机器人外呼任务，一次任务支持设置1~100个号码。
     */
    BatchRobotSmartCall(query: BatchRobotSmartCallRequest): Promise<BatchRobotSmartCallResponse>;
    /**
     * 取消还未启动的定时智能语音任务。
     */
    CancelOrderRobotTask(query: CancelOrderRobotTaskRequest): Promise<CancelOrderRobotTaskResponse>;
    /**
     * 终止智能语音任务。
     */
    CancelRobotTask(query: CancelRobotTaskRequest): Promise<CancelRobotTaskResponse>;
    /**
     * 发起智能语音机器人外呼任务。
     */
    CreateRobotTask(query: CreateRobotTaskRequest): Promise<CreateRobotTaskResponse>;
    /**
     * 删除智能语音任务。
     */
    DeleteRobotTask(query: DeleteRobotTaskRequest): Promise<DeleteRobotTaskResponse>;
    /**
     * 向指定号码发起交互式语音通话。
     */
    IvrCall(query: IvrCallRequest): Promise<IvrCallResponse>;
    /**
     * 查询指定CallID的呼叫详情，包括通话开始时间、通话时长、通话状态、通话结束时间、被叫号码等详情。
     */
    QueryCallDetailByCallId(query: QueryCallDetailByCallIdRequest): Promise<QueryCallDetailByCallIdResponse>;
    /**
     * 查看指定机器人外呼任务的话单详情。
     */
    QueryCallDetailByTaskId(query: QueryCallDetailByTaskIdRequest): Promise<QueryCallDetailByTaskIdResponse>;
    /**
     * 查看智能语音机器人列表，获取机器人详细信息。
     */
    QueryRobotInfoList(query: QueryRobotInfoListRequest): Promise<QueryRobotInfoListResponse>;
    /**
     * 获取单个执行条目即单个被叫号码的任务明细。
     */
    QueryRobotTaskCallDetail(query: QueryRobotTaskCallDetailRequest): Promise<QueryRobotTaskCallDetailResponse>;
    /**
     * 查询指定任务内执行条目列表。
     */
    QueryRobotTaskCallList(query: QueryRobotTaskCallListRequest): Promise<QueryRobotTaskCallListResponse>;
    /**
     * 获取指定智能语音任务详情。
     */
    QueryRobotTaskDetail(query: QueryRobotTaskDetailRequest): Promise<QueryRobotTaskDetailResponse>;
    /**
     * 获取所有语音任务信息。
     */
    QueryRobotTaskList(query: QueryRobotTaskListRequest): Promise<QueryRobotTaskListResponse>;
    /**
     * 获取全部机器人话术模板列表。
     */
    QueryRobotv2AllList(query: QueryRobotv2AllListRequest): Promise<QueryRobotv2AllListResponse>;
    /**
     * 调用接口给单个被叫号码发送语音验证码、文本转语音类型的语音通知、语音通知文件中带变量参数的语音通知。
     */
    SingleCallByTts(query: SingleCallByTtsRequest): Promise<SingleCallByTtsResponse>;
    /**
     * 调用接口给单个被叫号码发送语音通知文件类型的语音通知。
     */
    SingleCallByVoice(query: SingleCallByVoiceRequest): Promise<SingleCallByVoiceResponse>;
    /**
     * 智能语音交互服务，是一种人机交互技术，它允许用户通过语音与机器进行自然的对话和沟通。
     */
    SmartCall(query: SmartCallRequest): Promise<SmartCallResponse>;
    /**
     * 在智能外呼通话中发起指定动作，仅用于并行转人工、人工坐席可旁听人机对话等场景。
     */
    SmartCallOperate(query: SmartCallOperateRequest): Promise<SmartCallOperateResponse>;
    /**
     * 启动智能语音任务或者定时启动智能语音任务。
     */
    StartRobotTask(query: StartRobotTaskRequest): Promise<StartRobotTaskResponse>;
    /**
     * 暂停开始执行后的智能语音任务。
     */
    StopRobotTask(query: StopRobotTaskRequest): Promise<StopRobotTaskResponse>;
    /**
     * 上传智能语音任务的被叫号码。
     */
    UploadRobotTaskCalledFile(query: UploadRobotTaskCalledFileRequest): Promise<UploadRobotTaskCalledFileResponse>;
    /**
     * 使用虚拟号码给多个被叫号码创建文本转语音任务、语音通知任务和语音验证码任务。
     */
    CreateCallTask(query: CreateCallTaskRequest): Promise<CreateCallTaskResponse>;
    /**
     * 执行通话任务。
     */
    ExecuteCallTask(query: ExecuteCallTaskRequest): Promise<ExecuteCallTaskResponse>;
    /**
     * 创建语音通话任务后，可以查看通话任务状态，包括：任务ID、任务当前状态、任务所选的模板信息等。
     */
    ListCallTask(query: ListCallTaskRequest): Promise<ListCallTaskResponse>;
    /**
     * 执行完通话任务后根据任务ID，查看指定任务详情。
     */
    ListCallTaskDetail(query: ListCallTaskDetailRequest): Promise<ListCallTaskDetailResponse>;
    /**
     * 批量添加虚拟号码与真实号码绑定关系。
     */
    AddVirtualNumberRelation(query: AddVirtualNumberRelationRequest): Promise<AddVirtualNumberRelationResponse>;
    /**
     * 查询虚拟号码列表。
     */
    QueryVirtualNumber(query: QueryVirtualNumberRequest): Promise<QueryVirtualNumberResponse>;
    /**
     * 查询虚拟号码与真实号码绑定后的数据列表，包括绑定真实号的时间，号码创建时间，一个虚拟号下绑定真实号的数量等。
     */
    QueryVirtualNumberRelation(query: QueryVirtualNumberRelationRequest): Promise<QueryVirtualNumberRelationResponse>;
    /**
     * 获取认证的Token。
     */
    GetToken(query: GetTokenRequest): Promise<GetTokenResponse>;
    /**
     * 通过资质申请工单号获取400号码的资质ID。
     */
    GetHotlineQualificationByOrder(query: GetHotlineQualificationByOrderRequest): Promise<GetHotlineQualificationByOrderResponse>;
    /**
     * 获取备案的呼转号码列表。
     */
    ListHotlineTransferNumber(query: ListHotlineTransferNumberRequest): Promise<ListHotlineTransferNumberResponse>;
    /**
     * 通过SubmitHotlineTransferRegister接口提交备案信息后，通过此接口获取号码备案信息。
     */
    ListHotlineTransferRegisterFile(query: ListHotlineTransferRegisterFileRequest): Promise<ListHotlineTransferRegisterFileResponse>;
    /**
     * 设置400号码转呼后，通过此接口查询400号码呼转配置详情。
     */
    QueryCallInPoolTransferConfig(query: QueryCallInPoolTransferConfigRequest): Promise<QueryCallInPoolTransferConfigResponse>;
    /**
     * 查询呼转记录。
     */
    QueryCallInTransferRecord(query: QueryCallInTransferRecordRequest): Promise<QueryCallInTransferRecordResponse>;
    /**
     * 发送短信验证码。
     */
    SendVerification(query: SendVerificationRequest): Promise<SendVerificationResponse>;
    /**
     * 为400号码设置转呼号码。
     */
    SetTransferCalleePoolConfig(query: SetTransferCalleePoolConfigRequest): Promise<SetTransferCalleePoolConfigResponse>;
    /**
     * 您在设置400号码转呼号码前，需要对转呼的号码提交号码备案。
     */
    SubmitHotlineTransferRegister(query: SubmitHotlineTransferRegisterRequest): Promise<SubmitHotlineTransferRegisterResponse>;
    /**
     * 查询语音文件审核状态。
     */
    QueryVoiceFileAuditInfo(query: QueryVoiceFileAuditInfoRequest): Promise<QueryVoiceFileAuditInfoResponse>;
    /**
     * 调用RecoverCallInConfig恢复指定400呼转号码呼入。
     */
    RecoverCallInConfig(query: RecoverCallInConfigRequest): Promise<RecoverCallInConfigResponse>;
    /**
     * 调用StopCallInConfig接口停止指定400呼转号码呼入。
     */
    StopCallInConfig(query: StopCallInConfigRequest): Promise<StopCallInConfigResponse>;
    /**
     * 在语音通话中插播视频文件时，暂停视频播放。
     */
    PauseVideoFile(query: PauseVideoFileRequest): Promise<PauseVideoFileResponse>;
    /**
     * 在语音通话中暂停视频播放后，恢复视频播放。
     */
    ResumeVideoFile(query: ResumeVideoFileRequest): Promise<ResumeVideoFileResponse>;
    /**
     * 在语音通话中插播视频文件。
     */
    PlayVideoFile(query: PlayVideoFileRequest): Promise<PlayVideoFileResponse>;
    /**
     * 调用接口给单个被叫号码发送语音文件通知或视频文件通知。
     */
    SingleCallByVideo(query: SingleCallByVideoRequest): Promise<SingleCallByVideoResponse>;
    /**
     * 在语音通话中插播视频文件后，查询视频播放进度。
     */
    QueryVideoPlayProgress(query: QueryVideoPlayProgressRequest): Promise<QueryVideoPlayProgressResponse>;
    /**
     * 从语音通话升级到视频通话。
     */
    UpgradeVideoFile(query: UpgradeVideoFileRequest): Promise<UpgradeVideoFileResponse>;
    /**
     * 从视频通话降级到语音通话。
     */
    DegradeVideoFile(query: DegradeVideoFileRequest): Promise<DegradeVideoFileResponse>;
    /**
     * 在播放视频时，可以调用此接口快进视频或后退视频。
     */
    SkipVideoFile(query: SkipVideoFileRequest): Promise<SkipVideoFileResponse>;
    /**
     * 在通话时获取通话类型。
     */
    GetCallMediaType(query: GetCallMediaTypeRequest): Promise<GetCallMediaTypeResponse>;
    /**
     * 获取视频或语音文件临时URL，方便您立即查看视频或语音文件。
     */
    GetTemporaryFileUrl(query: GetTemporaryFileUrlRequest): Promise<GetTemporaryFileUrlResponse>;
}
export default DYVMSAPI;
