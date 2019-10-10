import { DeleteRobotTaskRequest } from "./DeleteRobotTask/req";
import { DeleteRobotTaskResponse } from "./DeleteRobotTask/res";
import { QueryRobotInfoListRequest } from "./QueryRobotInfoList/req";
import { QueryRobotInfoListResponse } from "./QueryRobotInfoList/res";
import { CancelRobotTaskRequest } from "./CancelRobotTask/req";
import { CancelRobotTaskResponse } from "./CancelRobotTask/res";
import { QueryRobotTaskListRequest } from "./QueryRobotTaskList/req";
import { QueryRobotTaskListResponse } from "./QueryRobotTaskList/res";
import { QueryRobotTaskDetailRequest } from "./QueryRobotTaskDetail/req";
import { QueryRobotTaskDetailResponse } from "./QueryRobotTaskDetail/res";
import { QueryRobotTaskCallListRequest } from "./QueryRobotTaskCallList/req";
import { QueryRobotTaskCallListResponse } from "./QueryRobotTaskCallList/res";
import { CreateRobotTaskRequest } from "./CreateRobotTask/req";
import { CreateRobotTaskResponse } from "./CreateRobotTask/res";
import { IvrCallRequest } from "./IvrCall/req";
import { IvrCallResponse } from "./IvrCall/res";
import { QueryCallDetailByCallIdRequest } from "./QueryCallDetailByCallId/req";
import { QueryCallDetailByCallIdResponse } from "./QueryCallDetailByCallId/res";
import { StartRobotTaskRequest } from "./StartRobotTask/req";
import { StartRobotTaskResponse } from "./StartRobotTask/res";
import { StopRobotTaskRequest } from "./StopRobotTask/req";
import { StopRobotTaskResponse } from "./StopRobotTask/res";
import { ClickToDialRequest } from "./ClickToDial/req";
import { ClickToDialResponse } from "./ClickToDial/res";
import { SingleCallByVoiceRequest } from "./SingleCallByVoice/req";
import { SingleCallByVoiceResponse } from "./SingleCallByVoice/res";
import { QueryCallDetailByTaskIdRequest } from "./QueryCallDetailByTaskId/req";
import { QueryCallDetailByTaskIdResponse } from "./QueryCallDetailByTaskId/res";
import { CancelOrderRobotTaskRequest } from "./CancelOrderRobotTask/req";
import { CancelOrderRobotTaskResponse } from "./CancelOrderRobotTask/res";
import { SmartCallOperateRequest } from "./SmartCallOperate/req";
import { SmartCallOperateResponse } from "./SmartCallOperate/res";
import { BatchRobotSmartCallRequest } from "./BatchRobotSmartCall/req";
import { BatchRobotSmartCallResponse } from "./BatchRobotSmartCall/res";
import { SingleCallByTtsRequest } from "./SingleCallByTts/req";
import { SingleCallByTtsResponse } from "./SingleCallByTts/res";
import { CancelCallRequest } from "./CancelCall/req";
import { CancelCallResponse } from "./CancelCall/res";
import { SmartCallRequest } from "./SmartCall/req";
import { SmartCallResponse } from "./SmartCall/res";
import { QueryRobotTaskCallDetailRequest } from "./QueryRobotTaskCallDetail/req";
import { QueryRobotTaskCallDetailResponse } from "./QueryRobotTaskCallDetail/res";
import { QueryRobotv2AllListRequest } from "./QueryRobotv2AllList/req";
import { QueryRobotv2AllListResponse } from "./QueryRobotv2AllList/res";
import { UploadRobotTaskCalledFileRequest } from "./UploadRobotTaskCalledFile/req";
import { UploadRobotTaskCalledFileResponse } from "./UploadRobotTaskCalledFile/res";
import { AddRtcAccountRequest } from "./AddRtcAccount/req";
import { AddRtcAccountResponse } from "./AddRtcAccount/res";
import { GetRtcTokenRequest } from "./GetRtcToken/req";
import { GetRtcTokenResponse } from "./GetRtcToken/res";
import { VoipAddAccountRequest } from "./VoipAddAccount/req";
import { VoipAddAccountResponse } from "./VoipAddAccount/res";
import { VoipGetTokenRequest } from "./VoipGetToken/req";
import { VoipGetTokenResponse } from "./VoipGetToken/res";
import { BindNumberAndVoipIdRequest } from "./BindNumberAndVoipId/req";
import { BindNumberAndVoipIdResponse } from "./BindNumberAndVoipId/res";
import { UnbindNumberAndVoipIdRequest } from "./UnbindNumberAndVoipId/req";
import { UnbindNumberAndVoipIdResponse } from "./UnbindNumberAndVoipId/res";

interface DYVMSAPI {
    /**
    * 调用DeleteRobotTask删除智能语音任务。
    */ DeleteRobotTask(query: DeleteRobotTaskRequest): Promise<DeleteRobotTaskResponse>;
    /**
    * 调用接口QueryRobotInfoList查看机器人列表。
    */ QueryRobotInfoList(query: QueryRobotInfoListRequest): Promise<QueryRobotInfoListResponse>;
    /**
    * 调用CancelRobotTask终止智能语音任务。
    */ CancelRobotTask(query: CancelRobotTaskRequest): Promise<CancelRobotTaskResponse>;
    /**
    * 调用QueryRobotTaskList获取智能语音任务详情。
    */ QueryRobotTaskList(query: QueryRobotTaskListRequest): Promise<QueryRobotTaskListResponse>;
    /**
    * 调用QueryRobotTaskDetail获取智能语音任务详情。
    */ QueryRobotTaskDetail(query: QueryRobotTaskDetailRequest): Promise<QueryRobotTaskDetailResponse>;
    /**
    * 调用QueryRobotTaskCallList查询智能语音任务通话列表。
    */ QueryRobotTaskCallList(query: QueryRobotTaskCallListRequest): Promise<QueryRobotTaskCallListResponse>;
    /**
    * 调用接口CreateRobotTask发起智能语音机器人外呼任务。
    */ CreateRobotTask(query: CreateRobotTaskRequest): Promise<CreateRobotTaskResponse>;
    /**
    * 调用接口IvrCall发起交互式语音通话。
    */ IvrCall(query: IvrCallRequest): Promise<IvrCallResponse>;
    /**
    * 调用接口QueryCallDetailByCallId查询指定通话的呼叫详情。
    */ QueryCallDetailByCallId(query: QueryCallDetailByCallIdRequest): Promise<QueryCallDetailByCallIdResponse>;
    /**
    * 调用StartRobotTask启动智能语音任务或者定时启动智能语音任务。
    */ StartRobotTask(query: StartRobotTaskRequest): Promise<StartRobotTaskResponse>;
    /**
    * 调用StopRobotTask暂停智能语音任务。
    */ StopRobotTask(query: StopRobotTaskRequest): Promise<StopRobotTaskResponse>;
    /**
    * 调用接口ClickToDial发起一次双方通话。
    */ ClickToDial(query: ClickToDialRequest): Promise<ClickToDialResponse>;
    /**
    * 调用接口SingleCallByVoice发起语音文件类型的语音通知。
    */ SingleCallByVoice(query: SingleCallByVoiceRequest): Promise<SingleCallByVoiceResponse>;
    /**
    * 调用接口QueryCallDetailByTaskId查看指定机器人外呼任务的话单详情。
    */ QueryCallDetailByTaskId(query: QueryCallDetailByTaskIdRequest): Promise<QueryCallDetailByTaskIdResponse>;
    /**
    * 调用CancelOrderRobotTask取消定时启动智能语音任务。
    */ CancelOrderRobotTask(query: CancelOrderRobotTaskRequest): Promise<CancelOrderRobotTaskResponse>;
    /**
    * 调用接口SmartCallOperate在智能外呼通话中，发起指定动作。
    */ SmartCallOperate(query: SmartCallOperateRequest): Promise<SmartCallOperateResponse>;
    /**
    * 调用接口BatchRobotSmartCall发起机器人外呼任务。
    */ BatchRobotSmartCall(query: BatchRobotSmartCallRequest): Promise<BatchRobotSmartCallResponse>;
    /**
    * 调用接口SingleCallByTts发起语音通知，播放的音频为文本转语音模板转换后的音频文件。
    */ SingleCallByTts(query: SingleCallByTtsRequest): Promise<SingleCallByTtsResponse>;
    /**
    * 调用接口CancelCall取消点击呼叫接口ClickToDial发起的呼叫。
    */ CancelCall(query: CancelCallRequest): Promise<CancelCallResponse>;
    /**
    * 调用接口SmartCall发起智能语音交互通话。
    */ SmartCall(query: SmartCallRequest): Promise<SmartCallResponse>;
    /**
    * 调用QueryRobotTaskCallDetail查询智能语音任务通话详情。
    */ QueryRobotTaskCallDetail(query: QueryRobotTaskCallDetailRequest): Promise<QueryRobotTaskCallDetailResponse>;
    /**
    * 调用QueryRobotv2AllList获取机器人全量列表。
    */ QueryRobotv2AllList(query: QueryRobotv2AllListRequest): Promise<QueryRobotv2AllListResponse>;
    /**
    * 调用UploadRobotTaskCalledFile上传智能语音任务的被叫号码。
    */ UploadRobotTaskCalledFile(query: UploadRobotTaskCalledFileRequest): Promise<UploadRobotTaskCalledFileResponse>;
    AddRtcAccount(query: AddRtcAccountRequest): Promise<AddRtcAccountResponse>;
    GetRtcToken(query: GetRtcTokenRequest): Promise<GetRtcTokenResponse>;
    VoipAddAccount(query: VoipAddAccountRequest): Promise<VoipAddAccountResponse>;
    VoipGetToken(query: VoipGetTokenRequest): Promise<VoipGetTokenResponse>;
    BindNumberAndVoipId(query: BindNumberAndVoipIdRequest): Promise<BindNumberAndVoipIdResponse>;
    UnbindNumberAndVoipId(query: UnbindNumberAndVoipIdRequest): Promise<UnbindNumberAndVoipIdResponse>;
}
export default DYVMSAPI;
