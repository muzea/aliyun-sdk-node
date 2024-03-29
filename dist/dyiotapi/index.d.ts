import { QosGetParamRequest } from "./QosGetParam/req";
import { QosGetParamResponse } from "./QosGetParam/res";
import { QosSpeedupRequest } from "./QosSpeedup/req";
import { QosSpeedupResponse } from "./QosSpeedup/res";
import { QueryCardFlowInfoRequest } from "./QueryCardFlowInfo/req";
import { QueryCardFlowInfoResponse } from "./QueryCardFlowInfo/res";
import { QueryCardInfoRequest } from "./QueryCardInfo/req";
import { QueryCardInfoResponse } from "./QueryCardInfo/res";
import { QueryCardStatusRequest } from "./QueryCardStatus/req";
import { QueryCardStatusResponse } from "./QueryCardStatus/res";
import { QueryIotCardOfferDtlRequest } from "./QueryIotCardOfferDtl/req";
import { QueryIotCardOfferDtlResponse } from "./QueryIotCardOfferDtl/res";
import { DoClearAuthRequest } from "./DoClearAuth/req";
import { DoClearAuthResponse } from "./DoClearAuth/res";
import { DoIotChgBindOrUnBindRequest } from "./DoIotChgBindOrUnBind/req";
import { DoIotChgBindOrUnBindResponse } from "./DoIotChgBindOrUnBind/res";
import { DoIotIsImeiExistRequest } from "./DoIotIsImeiExist/req";
import { DoIotIsImeiExistResponse } from "./DoIotIsImeiExist/res";
import { DoIotPoolRechargeRequest } from "./DoIotPoolRecharge/req";
import { DoIotPoolRechargeResponse } from "./DoIotPoolRecharge/res";
import { DoIotPostImeiRequest } from "./DoIotPostImei/req";
import { DoIotPostImeiResponse } from "./DoIotPostImei/res";
import { DoIotRechargeRequest } from "./DoIotRecharge/req";
import { DoIotRechargeResponse } from "./DoIotRecharge/res";
import { DoIotServiceStatusControlRequest } from "./DoIotServiceStatusControl/req";
import { DoIotServiceStatusControlResponse } from "./DoIotServiceStatusControl/res";
import { DoIotSetRemindConfigRequest } from "./DoIotSetRemindConfig/req";
import { DoIotSetRemindConfigResponse } from "./DoIotSetRemindConfig/res";
import { DoIotTransSilenceRequest } from "./DoIotTransSilence/req";
import { DoIotTransSilenceResponse } from "./DoIotTransSilence/res";
import { DoIotUpdateDeviceSnRequest } from "./DoIotUpdateDeviceSn/req";
import { DoIotUpdateDeviceSnResponse } from "./DoIotUpdateDeviceSn/res";
import { DoIotUserStopResumeRequest } from "./DoIotUserStopResume/req";
import { DoIotUserStopResumeResponse } from "./DoIotUserStopResume/res";
import { DoSendIotSmsRequest } from "./DoSendIotSms/req";
import { DoSendIotSmsResponse } from "./DoSendIotSms/res";
import { QosReleaseRequest } from "./QosRelease/req";
import { QosReleaseResponse } from "./QosRelease/res";
import { QueryGprsStatusRequest } from "./QueryGprsStatus/req";
import { QueryGprsStatusResponse } from "./QueryGprsStatus/res";
import { QueryPersonalInfoRequest } from "./QueryPersonalInfo/req";
import { QueryPersonalInfoResponse } from "./QueryPersonalInfo/res";

interface DYIOTAPI {
    QosGetParam(query: QosGetParamRequest): Promise<QosGetParamResponse>;
    QosSpeedup(query: QosSpeedupRequest): Promise<QosSpeedupResponse>;
    QueryCardFlowInfo(query: QueryCardFlowInfoRequest): Promise<QueryCardFlowInfoResponse>;
    QueryCardInfo(query: QueryCardInfoRequest): Promise<QueryCardInfoResponse>;
    QueryCardStatus(query: QueryCardStatusRequest): Promise<QueryCardStatusResponse>;
    QueryIotCardOfferDtl(query: QueryIotCardOfferDtlRequest): Promise<QueryIotCardOfferDtlResponse>;
    DoClearAuth(query: DoClearAuthRequest): Promise<DoClearAuthResponse>;
    DoIotChgBindOrUnBind(query: DoIotChgBindOrUnBindRequest): Promise<DoIotChgBindOrUnBindResponse>;
    DoIotIsImeiExist(query: DoIotIsImeiExistRequest): Promise<DoIotIsImeiExistResponse>;
    DoIotPoolRecharge(query: DoIotPoolRechargeRequest): Promise<DoIotPoolRechargeResponse>;
    DoIotPostImei(query: DoIotPostImeiRequest): Promise<DoIotPostImeiResponse>;
    DoIotRecharge(query: DoIotRechargeRequest): Promise<DoIotRechargeResponse>;
    DoIotServiceStatusControl(query: DoIotServiceStatusControlRequest): Promise<DoIotServiceStatusControlResponse>;
    DoIotSetRemindConfig(query: DoIotSetRemindConfigRequest): Promise<DoIotSetRemindConfigResponse>;
    DoIotTransSilence(query: DoIotTransSilenceRequest): Promise<DoIotTransSilenceResponse>;
    DoIotUpdateDeviceSn(query: DoIotUpdateDeviceSnRequest): Promise<DoIotUpdateDeviceSnResponse>;
    DoIotUserStopResume(query: DoIotUserStopResumeRequest): Promise<DoIotUserStopResumeResponse>;
    DoSendIotSms(query: DoSendIotSmsRequest): Promise<DoSendIotSmsResponse>;
    QosRelease(query: QosReleaseRequest): Promise<QosReleaseResponse>;
    QueryGprsStatus(query: QueryGprsStatusRequest): Promise<QueryGprsStatusResponse>;
    QueryPersonalInfo(query: QueryPersonalInfoRequest): Promise<QueryPersonalInfoResponse>;
}
export default DYIOTAPI;
