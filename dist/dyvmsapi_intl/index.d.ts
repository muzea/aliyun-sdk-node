import { BackendCallGroupRequest } from "./BackendCallGroup/req";
import { BackendCallGroupResponse } from "./BackendCallGroup/res";
import { BackendCallSignalRequest } from "./BackendCallSignal/req";
import { BackendCallSignalResponse } from "./BackendCallSignal/res";
import { SignalCallRequest } from "./SignalCall/req";
import { SignalCallResponse } from "./SignalCall/res";
import { GroupCallRequest } from "./GroupCall/req";
import { GroupCallResponse } from "./GroupCall/res";

interface DYVMSAPI_INTL {
    /**
     * 向指定的一批号码发起语音群呼。群呼内容为已经通过审核的模板。可以通过登录国际语音控制台，进入“模板管理”查看模板ID。此功能会将号码送入发送队列进行排队。实际呼出时间不确定。
     */
    BackendCallGroup(query: BackendCallGroupRequest): Promise<BackendCallGroupResponse>;
    /**
     * 向指定号码发送语音验证码和带参数变量的语音通知。
     */
    BackendCallSignal(query: BackendCallSignalRequest): Promise<BackendCallSignalResponse>;
    /**
     * 向指定号码发送语音验证码和带参数变量的语音通知，支持语音文件模板或文本转语音模板。
     */
    SignalCall(query: SignalCallRequest): Promise<SignalCallResponse>;
    /**
     * 向指定号码发送多次语音呼叫，支持语音文件模板或文本转语音模板进行呼叫。
     */
    GroupCall(query: GroupCallRequest): Promise<GroupCallResponse>;
}
export default DYVMSAPI_INTL;
