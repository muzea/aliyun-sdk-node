import { DescribeRtcPeakUserCntDataRequest } from "./DescribeRtcPeakUserCntData/req";
import { DescribeRtcPeakUserCntDataResponse } from "./DescribeRtcPeakUserCntData/res";
import { DescribeRtcDurationDataRequest } from "./DescribeRtcDurationData/req";
import { DescribeRtcDurationDataResponse } from "./DescribeRtcDurationData/res";
import { DescribeChannelParticipantsRequest } from "./DescribeChannelParticipants/req";
import { DescribeChannelParticipantsResponse } from "./DescribeChannelParticipants/res";
import { DescribeAppsRequest } from "./DescribeApps/req";
import { DescribeAppsResponse } from "./DescribeApps/res";
import { ReceiveNotifyRequest } from "./ReceiveNotify/req";
import { ReceiveNotifyResponse } from "./ReceiveNotify/res";
import { DeleteChannelRequest } from "./DeleteChannel/req";
import { DeleteChannelResponse } from "./DeleteChannel/res";
import { DescribeRtcPeakChannelCntDataRequest } from "./DescribeRtcPeakChannelCntData/req";
import { DescribeRtcPeakChannelCntDataResponse } from "./DescribeRtcPeakChannelCntData/res";
import { GetMPUTaskStatusRequest } from "./GetMPUTaskStatus/req";
import { GetMPUTaskStatusResponse } from "./GetMPUTaskStatus/res";
import { DescribeRtcUserCntDataRequest } from "./DescribeRtcUserCntData/req";
import { DescribeRtcUserCntDataResponse } from "./DescribeRtcUserCntData/res";
import { ModifyAppRequest } from "./ModifyApp/req";
import { ModifyAppResponse } from "./ModifyApp/res";
import { DescribeRtcChannelCntDataRequest } from "./DescribeRtcChannelCntData/req";
import { DescribeRtcChannelCntDataResponse } from "./DescribeRtcChannelCntData/res";
import { RemoveTerminalsRequest } from "./RemoveTerminals/req";
import { RemoveTerminalsResponse } from "./RemoveTerminals/res";
import { StopMPUTaskRequest } from "./StopMPUTask/req";
import { StopMPUTaskResponse } from "./StopMPUTask/res";
import { DescribeRtcChannelListRequest } from "./DescribeRtcChannelList/req";
import { DescribeRtcChannelListResponse } from "./DescribeRtcChannelList/res";
import { DescribeRtcChannelUserListRequest } from "./DescribeRtcChannelUserList/req";
import { DescribeRtcChannelUserListResponse } from "./DescribeRtcChannelUserList/res";
import { DescribeRtcChannelMetricRequest } from "./DescribeRtcChannelMetric/req";
import { DescribeRtcChannelMetricResponse } from "./DescribeRtcChannelMetric/res";
import { StartMPUTaskRequest } from "./StartMPUTask/req";
import { StartMPUTaskResponse } from "./StartMPUTask/res";
import { UpdateMPULayoutRequest } from "./UpdateMPULayout/req";
import { UpdateMPULayoutResponse } from "./UpdateMPULayout/res";
import { CreateChannelRequest } from "./CreateChannel/req";
import { CreateChannelResponse } from "./CreateChannel/res";
import { CreateConferenceRequest } from "./CreateConference/req";
import { CreateConferenceResponse } from "./CreateConference/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { DeleteConferenceRequest } from "./DeleteConference/req";
import { DeleteConferenceResponse } from "./DeleteConference/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { DescribeConferenceAuthInfoRequest } from "./DescribeConferenceAuthInfo/req";
import { DescribeConferenceAuthInfoResponse } from "./DescribeConferenceAuthInfo/res";
import { DescribeRealTimeRecordDetailRequest } from "./DescribeRealTimeRecordDetail/req";
import { DescribeRealTimeRecordDetailResponse } from "./DescribeRealTimeRecordDetail/res";
import { DescribeRealTimeRecordListRequest } from "./DescribeRealTimeRecordList/req";
import { DescribeRealTimeRecordListResponse } from "./DescribeRealTimeRecordList/res";
import { DescribeRecordDetailRequest } from "./DescribeRecordDetail/req";
import { DescribeRecordDetailResponse } from "./DescribeRecordDetail/res";
import { DescribeRecordListRequest } from "./DescribeRecordList/req";
import { DescribeRecordListResponse } from "./DescribeRecordList/res";
import { DescribeStatisRequest } from "./DescribeStatis/req";
import { DescribeStatisResponse } from "./DescribeStatis/res";
import { GetTaskParamRequest } from "./GetTaskParam/req";
import { GetTaskParamResponse } from "./GetTaskParam/res";
import { GetTaskStatusRequest } from "./GetTaskStatus/req";
import { GetTaskStatusResponse } from "./GetTaskStatus/res";
import { GetTemplateInfoRequest } from "./GetTemplateInfo/req";
import { GetTemplateInfoResponse } from "./GetTemplateInfo/res";
import { ModifyConferenceRequest } from "./ModifyConference/req";
import { ModifyConferenceResponse } from "./ModifyConference/res";
import { MuteAudioRequest } from "./MuteAudio/req";
import { MuteAudioResponse } from "./MuteAudio/res";
import { MuteAudioAllRequest } from "./MuteAudioAll/req";
import { MuteAudioAllResponse } from "./MuteAudioAll/res";
import { RemoveParticipantsRequest } from "./RemoveParticipants/req";
import { RemoveParticipantsResponse } from "./RemoveParticipants/res";
import { StartTaskRequest } from "./StartTask/req";
import { StartTaskResponse } from "./StartTask/res";
import { StopTaskRequest } from "./StopTask/req";
import { StopTaskResponse } from "./StopTask/res";
import { UnmuteAudioRequest } from "./UnmuteAudio/req";
import { UnmuteAudioResponse } from "./UnmuteAudio/res";
import { UnmuteAudioAllRequest } from "./UnmuteAudioAll/req";
import { UnmuteAudioAllResponse } from "./UnmuteAudioAll/res";
import { UpdateChannelRequest } from "./UpdateChannel/req";
import { UpdateChannelResponse } from "./UpdateChannel/res";

interface RTC {
    /**
    * 调用DescribeRtcPeakUserCntData查询应用在一段时间内的并发通信峰值，一组“发布-订阅”关系被标记为一次通信。
    */ DescribeRtcPeakUserCntData(query: DescribeRtcPeakUserCntDataRequest): Promise<DescribeRtcPeakUserCntDataResponse>;
    /**
    * 调用DescribeRtcDurationData获取应用在一段时间内的累计通信时长，区分音视频规格进行统计。
    */ DescribeRtcDurationData(query: DescribeRtcDurationDataRequest): Promise<DescribeRtcDurationDataResponse>;
    /**
    * 调用DescribeChannelParticipants查询频道在线用户列表。
    */ DescribeChannelParticipants(query: DescribeChannelParticipantsRequest): Promise<DescribeChannelParticipantsResponse>;
    /**
    * 调用DescribeApps查询应用列表。
    */ DescribeApps(query: DescribeAppsRequest): Promise<DescribeAppsResponse>;
    /**
    * 调用ReceiveNotify接收信令回调信息，专有云信令使用通知消息至SaaS服务。
    */ ReceiveNotify(query: ReceiveNotifyRequest): Promise<ReceiveNotifyResponse>;
    /**
    * 调用DeleteChannel删除频道。
    */ DeleteChannel(query: DeleteChannelRequest): Promise<DeleteChannelResponse>;
    /**
    * 调用DescribeRtcPeakChannelCntData查询应用在一段时间内的并发频道峰值数量。
    */ DescribeRtcPeakChannelCntData(query: DescribeRtcPeakChannelCntDataRequest): Promise<DescribeRtcPeakChannelCntDataResponse>;
    /**
    * 调用GetMPUTaskStatus获取任务状态。
    */ GetMPUTaskStatus(query: GetMPUTaskStatusRequest): Promise<GetMPUTaskStatusResponse>;
    /**
    * 调用DescribeRtcUserCntData查询应用在一段时间内的活跃用户数，即发生通信的用户终端数。
    */ DescribeRtcUserCntData(query: DescribeRtcUserCntDataRequest): Promise<DescribeRtcUserCntDataResponse>;
    /**
    * 调用ModifyApp修改指定应用的名称。
    */ ModifyApp(query: ModifyAppRequest): Promise<ModifyAppResponse>;
    /**
    * 调用DescribeRtcChannelCntData查询应用在一段时间内的活跃频道数，即发生通信的频道数。
    */ DescribeRtcChannelCntData(query: DescribeRtcChannelCntDataRequest): Promise<DescribeRtcChannelCntDataResponse>;
    /**
    * 调用RemoveTerminals将指定终端用户从频道踢出。
    */ RemoveTerminals(query: RemoveTerminalsRequest): Promise<RemoveTerminalsResponse>;
    /**
    * 调用StopMPUTask停止任务。
    */ StopMPUTask(query: StopMPUTaskRequest): Promise<StopMPUTaskResponse>;
    /**
    * 调用DescribeRtcChannelList获取频道通信记录列表。
    */ DescribeRtcChannelList(query: DescribeRtcChannelListRequest): Promise<DescribeRtcChannelListResponse>;
    /**
    * 调用DescribeRtcChannelUserList获取频道通信用户列表。
    */ DescribeRtcChannelUserList(query: DescribeRtcChannelUserListRequest): Promise<DescribeRtcChannelUserListResponse>;
    /**
    * 调用DescribeRtcChannelMetric获取频道通信记录详情，最多支持查询180天内的数据。
    */ DescribeRtcChannelMetric(query: DescribeRtcChannelMetricRequest): Promise<DescribeRtcChannelMetricResponse>;
    /**
    * 调用StartMPUTask开始任务。
    */ StartMPUTask(query: StartMPUTaskRequest): Promise<StartMPUTaskResponse>;
    /**
    * 调用UpdateMPULayout更新任务的布局。
    */ UpdateMPULayout(query: UpdateMPULayoutRequest): Promise<UpdateMPULayoutResponse>;
    CreateChannel(query: CreateChannelRequest): Promise<CreateChannelResponse>;
    CreateConference(query: CreateConferenceRequest): Promise<CreateConferenceResponse>;
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    DeleteConference(query: DeleteConferenceRequest): Promise<DeleteConferenceResponse>;
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    DescribeConferenceAuthInfo(query: DescribeConferenceAuthInfoRequest): Promise<DescribeConferenceAuthInfoResponse>;
    DescribeRealTimeRecordDetail(query: DescribeRealTimeRecordDetailRequest): Promise<DescribeRealTimeRecordDetailResponse>;
    DescribeRealTimeRecordList(query: DescribeRealTimeRecordListRequest): Promise<DescribeRealTimeRecordListResponse>;
    DescribeRecordDetail(query: DescribeRecordDetailRequest): Promise<DescribeRecordDetailResponse>;
    DescribeRecordList(query: DescribeRecordListRequest): Promise<DescribeRecordListResponse>;
    DescribeStatis(query: DescribeStatisRequest): Promise<DescribeStatisResponse>;
    GetTaskParam(query: GetTaskParamRequest): Promise<GetTaskParamResponse>;
    GetTaskStatus(query: GetTaskStatusRequest): Promise<GetTaskStatusResponse>;
    GetTemplateInfo(query: GetTemplateInfoRequest): Promise<GetTemplateInfoResponse>;
    ModifyConference(query: ModifyConferenceRequest): Promise<ModifyConferenceResponse>;
    MuteAudio(query: MuteAudioRequest): Promise<MuteAudioResponse>;
    MuteAudioAll(query: MuteAudioAllRequest): Promise<MuteAudioAllResponse>;
    RemoveParticipants(query: RemoveParticipantsRequest): Promise<RemoveParticipantsResponse>;
    StartTask(query: StartTaskRequest): Promise<StartTaskResponse>;
    StopTask(query: StopTaskRequest): Promise<StopTaskResponse>;
    UnmuteAudio(query: UnmuteAudioRequest): Promise<UnmuteAudioResponse>;
    UnmuteAudioAll(query: UnmuteAudioAllRequest): Promise<UnmuteAudioAllResponse>;
    UpdateChannel(query: UpdateChannelRequest): Promise<UpdateChannelResponse>;
}
export default RTC;
