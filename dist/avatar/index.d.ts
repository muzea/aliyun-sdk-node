import { SendMessageRequest } from "./SendMessage/req";
import { SendMessageResponse } from "./SendMessage/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { QueryRunningInstanceRequest } from "./QueryRunningInstance/req";
import { QueryRunningInstanceResponse } from "./QueryRunningInstance/res";
import { GetVideoTaskInfoRequest } from "./GetVideoTaskInfo/req";
import { GetVideoTaskInfoResponse } from "./GetVideoTaskInfo/res";
import { SubmitTextTo2DAvatarVideoTaskRequest } from "./SubmitTextTo2DAvatarVideoTask/req";
import { SubmitTextTo2DAvatarVideoTaskResponse } from "./SubmitTextTo2DAvatarVideoTask/res";
import { CancelVideoTaskRequest } from "./CancelVideoTask/req";
import { CancelVideoTaskResponse } from "./CancelVideoTask/res";
import { SubmitTextTo3DAvatarVideoTaskRequest } from "./SubmitTextTo3DAvatarVideoTask/req";
import { SubmitTextTo3DAvatarVideoTaskResponse } from "./SubmitTextTo3DAvatarVideoTask/res";
import { DuplexDecisionRequest } from "./DuplexDecision/req";
import { DuplexDecisionResponse } from "./DuplexDecision/res";
import { QueryTimedResetOperateStatusRequest } from "./QueryTimedResetOperateStatus/req";
import { QueryTimedResetOperateStatusResponse } from "./QueryTimedResetOperateStatus/res";
import { StartTimedResetOperateRequest } from "./StartTimedResetOperate/req";
import { StartTimedResetOperateResponse } from "./StartTimedResetOperate/res";
import { CloseTimedResetOperateRequest } from "./CloseTimedResetOperate/req";
import { CloseTimedResetOperateResponse } from "./CloseTimedResetOperate/res";
import { LicenseAuthRequest } from "./LicenseAuth/req";
import { LicenseAuthResponse } from "./LicenseAuth/res";
import { QueryAvatarRequest } from "./QueryAvatar/req";
import { QueryAvatarResponse } from "./QueryAvatar/res";
import { SubmitAudioTo2DAvatarVideoTaskRequest } from "./SubmitAudioTo2DAvatarVideoTask/req";
import { SubmitAudioTo2DAvatarVideoTaskResponse } from "./SubmitAudioTo2DAvatarVideoTask/res";
import { QueryAvatarListRequest } from "./QueryAvatarList/req";
import { QueryAvatarListResponse } from "./QueryAvatarList/res";
import { SubmitAudioTo3DAvatarVideoTaskRequest } from "./SubmitAudioTo3DAvatarVideoTask/req";
import { SubmitAudioTo3DAvatarVideoTaskResponse } from "./SubmitAudioTo3DAvatarVideoTask/res";
import { SendCommandRequest } from "./SendCommand/req";
import { SendCommandResponse } from "./SendCommand/res";
import { SendVamlRequest } from "./SendVaml/req";
import { SendVamlResponse } from "./SendVaml/res";
import { SendTextRequest } from "./SendText/req";
import { SendTextResponse } from "./SendText/res";
import { Update2dAvatarRequest } from "./Update2dAvatar/req";
import { Update2dAvatarResponse } from "./Update2dAvatar/res";
import { DeleteAvatarRequest } from "./DeleteAvatar/req";
import { DeleteAvatarResponse } from "./DeleteAvatar/res";
import { Create2dAvatarRequest } from "./Create2dAvatar/req";
import { Create2dAvatarResponse } from "./Create2dAvatar/res";
import { QueryVideoTaskInfoRequest } from "./QueryVideoTaskInfo/req";
import { QueryVideoTaskInfoResponse } from "./QueryVideoTaskInfo/res";
import { Render3dAvatarRequest } from "./Render3dAvatar/req";
import { Render3dAvatarResponse } from "./Render3dAvatar/res";
import { ClientAuthRequest } from "./ClientAuth/req";
import { ClientAuthResponse } from "./ClientAuth/res";
import { ClientStartRequest } from "./ClientStart/req";
import { ClientStartResponse } from "./ClientStart/res";
import { SubmitAvatarVideoTaskRequest } from "./SubmitAvatarVideoTask/req";
import { SubmitAvatarVideoTaskResponse } from "./SubmitAvatarVideoTask/res";
import { ConfirmAvatar2dTrainRequest } from "./ConfirmAvatar2dTrain/req";
import { ConfirmAvatar2dTrainResponse } from "./ConfirmAvatar2dTrain/res";
import { ClientUnbindDeviceRequest } from "./ClientUnbindDevice/req";
import { ClientUnbindDeviceResponse } from "./ClientUnbindDevice/res";

interface AVATAR {
    /**
     * 发送一段播报文本给到服务端，数字人会基于文本做TTS生成、表情动作驱动，并渲染视频流给到用户。（建议使用升级接口：SendText、SendVaml、SendCommand）
     */
    SendMessage(query: SendMessageRequest): Promise<SendMessageResponse>;
    /**
     * 启动一路数字人视频流实例，通过传入指定的参数，可以启动一路数字人实例，该接口针对播报数字人、互动数字人等这类使用平台默认视频流渠道的数字人实例会返回阿里公有云RTC拉流需要的参数，使用者无需额外开通阿里公有云RTC产品服务，可直接通过阿里云RTC拉流SDK配合该接口返回的Channel参数进行拉流使用。关于阿里公有云RTC拉流SDK接入文档可参考数字人开放平台帮助中心《客户端SDK接入》文档。
     */
    StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    /**
     * 关闭一路数字人实例，停止数字人推流。
     */
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    /**
     * 查询运行中的数字人实例列表，该接口仅返回运行中的实例，已关闭的实例不会返回，最多返回100条，按照时间倒序排列；同时支持查询指定sessionId的实例的运行状态，传入sessionId参数，如果该实例在运行中则会返回，不在运行中或者对应实例不存在，则不会返回信息。
     */
    QueryRunningInstance(query: QueryRunningInstanceRequest): Promise<QueryRunningInstanceResponse>;
    /**
     * 通过提交任务生成的TaskUuid，查询对应视频合成任务详情。同时支持3D数字人和2D数字人的视频合成任务详情查询。
     */
    GetVideoTaskInfo(query: GetVideoTaskInfoRequest): Promise<GetVideoTaskInfoResponse>;
    /**
     * 提交根据一段文本离线生成2D数字人视频任务，该接口会立即返回一个TaskUuid作为本次提交任务的唯一id，后续可以根据TaskUuid调用查询和取消任务接口。
     */
    SubmitTextTo2DAvatarVideoTask(query: SubmitTextTo2DAvatarVideoTaskRequest): Promise<SubmitTextTo2DAvatarVideoTaskResponse>;
    /**
     * 通过提交任务生成的TaskUuid， 取消状态为”等待执行“的任务。
     */
    CancelVideoTask(query: CancelVideoTaskRequest): Promise<CancelVideoTaskResponse>;
    /**
     * 提交根据一段文本离线生成3D数字人视频任务，该接口会立即返回一个TaskUuid作为本次提交任务的唯一id，后续可以根据TaskUuid调用查询和取消任务接口。
     */
    SubmitTextTo3DAvatarVideoTask(query: SubmitTextTo3DAvatarVideoTaskRequest): Promise<SubmitTextTo3DAvatarVideoTaskResponse>;
    /**
     * 语音双工决策接口API。
     */
    DuplexDecision(query: DuplexDecisionRequest): Promise<DuplexDecisionResponse>;
    /**
     * 查询停复机操作状态接口，提供查询指定的数字人停复机实例（来自虚拟数字人开放平台——实例管理页面）的开关机状态。
     */
    QueryTimedResetOperateStatus(query: QueryTimedResetOperateStatusRequest): Promise<QueryTimedResetOperateStatusResponse>;
    /**
     * 停复机操作开机接口，提供对指定的数字人停复机实例（来自虚拟数字人开放平台——实例管理页面）进行开机操作，功能等同于点击页面的开机按钮。
     */
    StartTimedResetOperate(query: StartTimedResetOperateRequest): Promise<StartTimedResetOperateResponse>;
    /**
     * 停复机操作关机接口，提供对指定的数字人停复机实例（来自虚拟数字人开放平台——实例管理页面）进行关机操作，功能等同于点击页面的关机按钮。
     */
    CloseTimedResetOperate(query: CloseTimedResetOperateRequest): Promise<CloseTimedResetOperateResponse>;
    /**
     * 使用端渲染sdk时，使用平台下发的license许可证调用该接口，换取端渲染sdk接入时需要的鉴权token
     */
    LicenseAuth(query: LicenseAuthRequest): Promise<LicenseAuthResponse>;
    /**
     * 根据数字人code查询数字人资产详情。
     */
    QueryAvatar(query: QueryAvatarRequest): Promise<QueryAvatarResponse>;
    /**
     * 提交根据一段wav音频文件生成2D数字人视频任务，该接口会立即返回一个TaskUuid作为本次提交任务的唯一id，后续可以根据TaskUuid调用查询和取消任务接口。
     */
    SubmitAudioTo2DAvatarVideoTask(query: SubmitAudioTo2DAvatarVideoTaskRequest): Promise<SubmitAudioTo2DAvatarVideoTaskResponse>;
    /**
     * 查询当前账号下的数字人资产。
     */
    QueryAvatarList(query: QueryAvatarListRequest): Promise<QueryAvatarListResponse>;
    /**
     * 提交根据一段wav音频文件生成3D数字人视频任务，该接口会立即返回一个TaskUuid作为本次提交任务的唯一id，后续可以根据TaskUuid调用查询和取消任务接口。
     */
    SubmitAudioTo3DAvatarVideoTask(query: SubmitAudioTo3DAvatarVideoTaskRequest): Promise<SubmitAudioTo3DAvatarVideoTaskResponse>;
    /**
     * 发送一个指令消息给到服务端，数字人执行对应的指令，并渲染视频流给到用户。目前指令仅支持打断指令。
     */
    SendCommand(query: SendCommandRequest): Promise<SendCommandResponse>;
    /**
     * 发送一个vaml文本消息给到服务端，数字人播报对应的文本，并渲染视频流给到用户。
     */
    SendVaml(query: SendVamlRequest): Promise<SendVamlResponse>;
    /**
     * 发送一个文本消息给到服务端，数字人播报对应的文本，并渲染视频流给到用户。
     */
    SendText(query: SendTextRequest): Promise<SendTextResponse>;
    /**
     * 更新2D自定义形象任务，任务创建中不允许修改
     */
    Update2dAvatar(query: Update2dAvatarRequest): Promise<Update2dAvatarResponse>;
    /**
     * 根据形象code删除数字人资产
     */
    DeleteAvatar(query: DeleteAvatarRequest): Promise<DeleteAvatarResponse>;
    /**
     * 提交一段真人视频素材生成对应的2D真人数字人形象，该接口会立即返回一个形象code，后续可以根据形象code调用查询、更新、删除人物接口。
     */
    Create2dAvatar(query: Create2dAvatarRequest): Promise<Create2dAvatarResponse>;
    /**
     * 查询提交的视频合成任务列表，支持分页。支持根据数字人类型、状态、标题进行筛选。已过期和已取消任务不支持查询。
     */
    QueryVideoTaskInfo(query: QueryVideoTaskInfoRequest): Promise<QueryVideoTaskInfoResponse>;
    /**
     * 使用客户端渲染SDK时，SDK调用该接口拉取人物的渲染数据
     */
    Render3dAvatar(query: Render3dAvatarRequest): Promise<Render3dAvatarResponse>;
    /**
     * 使用客户端渲染SDK时，SDK调用该接口进行鉴权
     */
    ClientAuth(query: ClientAuthRequest): Promise<ClientAuthResponse>;
    /**
     * 端渲染SDK通过鉴权后，SDK调用该接口开始工作
     */
    ClientStart(query: ClientStartRequest): Promise<ClientStartResponse>;
    /**
     * 提交一个数字人播报视频生成的任务
     */
    SubmitAvatarVideoTask(query: SubmitAvatarVideoTaskRequest): Promise<SubmitAvatarVideoTaskResponse>;
    /**
     * 提交2D自定义形象训练任务后，在人工审核通过后，会进入客户确认阶段，该接口用于客户进行确认，确认通过后，将会扣费进入人物训练阶段，拒绝将会人物创建失败流程结束。
     * ps：该功能默认是不开启的，默认提交人物审核通过后将会直接扣费进行训练，如要开通该功能，请和我们联系
     */
    ConfirmAvatar2dTrain(query: ConfirmAvatar2dTrainRequest): Promise<ConfirmAvatar2dTrainResponse>;
    /**
     * 使用客户端渲染SDK时，调用该接口进行设备的证书解绑
     */
    ClientUnbindDevice(query: ClientUnbindDeviceRequest): Promise<ClientUnbindDeviceResponse>;
}
export default AVATAR;
