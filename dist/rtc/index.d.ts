interface RTC {
    /**
    * 调用DescribeRtcPeakUserCntData查询应用在一段时间内的并发通信峰值，一组“发布-订阅”关系被标记为一次通信。
    */ DescribeRtcPeakUserCntData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 起始时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 应用ID，不填则返回所有应用的汇总数据。
        *
        * @example `yourAppId`
        */ "AppId"?: string;
        /**
        * 服务区域。
        * @example `cn`
        */ "ServiceArea"?: string;
        /**
        * 时间粒度参数，单位：秒。
        * 取值为**3600**（小时粒度）或**86400**（天粒度），默认值为**3600**。
        *
        * @example `3600`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeRtcDurationData获取应用在一段时间内的累计通信时长，区分音视频规格进行统计。
    */ DescribeRtcDurationData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 起始时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 应用ID，不填则返回所有应用汇总数据。
        *
        * @example `AppId`
        */ "AppId"?: string;
        /**
        * 服务区域。
        * @example `cn`
        */ "ServiceArea"?: string;
        /**
        * 时间粒度参数，单位：秒。
        * 取值为**3600**（小时粒度）或**86400**（天粒度），默认为**3600**。
        *
        * @example `3600`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeChannelParticipants查询频道在线用户列表。
    */ DescribeChannelParticipants(query: {
        "RegionId"?: string;
        /**
        * 应用ID。
        * @example `sad123`
        */ "AppId": string;
        /**
        * 用户加入的频道。
        * @example `123`
        */ "ChannelId": string;
        "OwnerId"?: number;
        /**
        * 不输入该参数默认为**desc**取最近记录。
        * - 递增：**asc**。
        * - 递减：**desc**。
        * @example `asc`
        */ "Order"?: string;
        /**
        * 不输入默认**1**页，必须大于**0**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 不输入如默认为**10**， 必须大于**0**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeApps查询应用列表。
    */ DescribeApps(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 应用ID，通过控制台开通创建，长度最大8个字节，不填则返回该用户下所有应用信息。
        * @example `yourAppId`
        */ "AppId"?: string;
        /**
        * 状态：
        * - **1**：可用。
        * - **2**：停用。
        * - **3**：欠费停用。
        * @example `1`
        */ "Status"?: string;
        /**
        * 排序，不填默认**desc**取最近记录。取值： 、
        * - **asc**：递增。
        *
        * - **desc**：递减。
        * @example `asc`
        */ "Order"?: string;
        /**
        * 不填则默认**1**页，取值必须大于**0**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 不填则默认为**10**， 取值必须大于**0**。
        * @example `2`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用ReceiveNotify接收信令回调信息，专有云信令使用通知消息至SaaS服务。
    */ ReceiveNotify(query: {
        "RegionId"?: string;
        /**
        * 该条任务请求ID。
        * @example `xxx`
        */ "TraceId": string;
        /**
        * aliUID。
        * @example `xxx`
        */ "BizId": string;
        /**
        * 事件类型，包括：**join**、**leave**、**publish**、**unpublish**、**message**。
        * @example `join`
        */ "Event": string;
        /**
        * 透明消息类型。
        * @example `xxx`
        */ "ContentType": string;
        /**
        * 透明消息。
        * @example `xxx`
        */ "Content": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteChannel删除频道。
    */ DeleteChannel(query: {
        "RegionId"?: string;
        /**
        * 应用ID，通过控制台开通创建。
        * @example `yourAppId`
        */ "AppId": string;
        /**
        * 频道ID，加入的频道。
        * @example `yourChannelId`
        */ "ChannelId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeRtcPeakChannelCntData查询应用在一段时间内的并发频道峰值数量。
    */ DescribeRtcPeakChannelCntData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 起始时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 应用ID，不填返回所有应用的汇总数据。
        *
        * @example `yourAppId`
        */ "AppId"?: string;
        /**
        * 服务区域。
        * @example `cn`
        */ "ServiceArea"?: string;
        /**
        * 时间粒度参数，单位：秒。
        * 取值为**3600**（小时粒度） 或**86400**（天粒度），默认为**3600**。
        *
        * @example `3600`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用GetMPUTaskStatus获取任务状态。
    */ GetMPUTaskStatus(query: {
        "RegionId"?: string;
        /**
        * 应用ID，创建应用后生成。
        * @example `yourAppId`
        */ "AppId": string;
        /**
        * 任务ID。
        * @example `yourTaskId`
        */ "TaskId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeRtcUserCntData查询应用在一段时间内的活跃用户数，即发生通信的用户终端数。
    */ DescribeRtcUserCntData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 起始时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 应用ID，不填则返回所有应用的汇总数据。
        *
        * @example `AppId`
        */ "AppId"?: string;
        /**
        * 服务区域。
        * @example `cn`
        */ "ServiceArea"?: string;
        /**
        * 时间粒度参数，单位：秒。
        * 取值为**3600**（小时粒度） 或**86400**（天粒度），默认为**3600**。
        *
        * @example `3600`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyApp修改指定应用的名称。
    */ ModifyApp(query: {
        "RegionId"?: string;
        /**
        * 应用ID，通过控制台开通创建。
        * @example `yourAppId`
        */ "AppId": string;
        /**
        * 应用名称。
        * @example `yourAppName`
        */ "AppName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeRtcChannelCntData查询应用在一段时间内的活跃频道数，即发生通信的频道数。
    */ DescribeRtcChannelCntData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 起始时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "EndTime"?: string;
        /**
        * 应用ID，不填则返回所有应用的汇总数据。
        *
        * @example `AppId`
        */ "AppId"?: string;
        /**
        * 服务区域。
        * @example `cn`
        */ "ServiceArea"?: string;
        /**
        * 时间粒度参数，单位：秒。
        * 取值为**3600**（小时粒度）或**86400**（天粒度），默认为**3600**。
        *
        * @example `3600`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用RemoveTerminals将指定终端用户从频道踢出。
    */ RemoveTerminals(query: {
        "RegionId"?: string;
        /**
        * 应用ID，通过控制台开通创建。
        * @example `yourAppId`
        */ "AppId": string;
        /**
        * 频道ID，加入的频道。
        * @example `yourChannelId`
        */ "ChannelId": string;
        "TerminalIds": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用StopMPUTask停止任务。
    */ StopMPUTask(query: {
        "RegionId"?: string;
        /**
        * 应用ID，创建应用后生成。
        * @example `yourAppId`
        */ "AppId": string;
        /**
        * 任务ID。
        * @example `yourTaskId`
        */ "TaskId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeRtcChannelList获取频道通信记录列表。
    */ DescribeRtcChannelList(query: {
        "RegionId"?: string;
        /**
        * 查询时间点，时间粒度为天，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "TimePoint": string;
        /**
        * 页号。
        * @example `1`
        */ "PageNo": number;
        /**
        * 显示数量。
        * @example `20`
        */ "PageSize": number;
        "OwnerId"?: number;
        /**
        * 应用ID。
        * @example `xxx`
        */ "AppId"?: string;
        /**
        * 排序顺序，默认按**starttime**逆序。
        * @example `desc`
        */ "SortType"?: string;
        /**
        * 服务区域，不填表示所有区域。
        * @example `cn`
        */ "ServiceArea"?: string;
        /**
        * 用户ID。
        * @example `a123`
        */ "UserId"?: string;
        /**
        * 频道ID。
        * @example `123`
        */ "ChannelId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeRtcChannelUserList获取频道通信用户列表。
    */ DescribeRtcChannelUserList(query: {
        "RegionId"?: string;
        /**
        * 应用ID。
        * @example `xxx`
        */ "AppId": string;
        /**
        * 页号。
        * @example `0`
        */ "PageNo": number;
        /**
        * 显示数量。
        * @example `100`
        */ "PageSize": number;
        /**
        * 查询时间点日期，时间粒度为天，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "TimePoint": string;
        "OwnerId"?: number;
        /**
        * 频道ID。
        * @example `xx`
        */ "ChannelId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeRtcChannelMetric获取频道通信记录详情，最多支持查询180天内的数据。
    */ DescribeRtcChannelMetric(query: {
        "RegionId"?: string;
        /**
        * 时间点，天粒度，UTC格式。
        * @example `2018-01-29T00:00:00Z`
        */ "TimePoint": string;
        /**
        * 应用ID。
        * @example `xxx`
        */ "AppId": string;
        /**
        * 频道ID。
        * @example `0101`
        */ "ChannelId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用StartMPUTask开始任务。
    */ StartMPUTask(query: {
        "RegionId"?: string;
        /**
        * 应用ID，创建应用后生成。
        * @example `yourAppId`
        */ "AppId": string;
        /**
        * 频道ID。
        * @example `yourChannelId`
        */ "ChannelId": string;
        /**
        * 任务ID，此ID为旁路直播的标识，需保证唯一。
        * 字符只允许**A-Za-z0-9_-**，长度限制**64**字节。
        * @example `yourTaskId`
        */ "TaskId": string;
        /**
        * 编码选项，具体请参见本文中的MediaEncode枚举值。
        * @example `2`
        */ "MediaEncode": number;
        "LayoutIds": number[];
        /**
        * 直播推流地址，生成规则请参见[推流地址与播流地址（原画）](~~87396~~)。
        * 对已开防盗链鉴权的域名，需要在推流地址中包含鉴权串。
        * @example `yourStreamURL`
        */ "StreamURL": string;
        "OwnerId"?: number;
        /**
        * 任务计费配置，根据您的不同设置，进行收费。TaskProfile设置：
        * - **4IN_720P**。
        * - **2IN_720P**。
        * - **1IN_720P**。
        * - **4IN_360P**。
        * - **2IN_360P**。
        * - **1IN_360P**。
        * - **Mixed_Audio**。
        * - **1IN_Audio**。
        * @example `4IN_720P`
        */ "TaskProfile"?: string;
        /**
        * 视频的裁剪方式，默认值为**2**。
        * - **0**：不保持比例铺满。
        * - **1**：保持比例裁剪。
        * - **2**：保持比例留边。
        * @example `0`
        */ "CropMode"?: number;
        /**
        * 背景色RGB，默认是**0**（黑色）。
        * @example `0`
        */ "BackgroundColor"?: number;
        "UserPanes"?: string[];
    }): Promise<{}>;
    /**
    * 调用UpdateMPULayout更新任务的布局。
    */ UpdateMPULayout(query: {
        "RegionId"?: string;
        /**
        * 应用ID，控制台查询。
        * @example `yourAppId`
        */ "AppId": string;
        /**
        * 任务ID，此ID为旁路直播的标识，需保证唯一。
        * 字符只允许A-Za-z0-9_-，长度限制64字节。
        * @example `abcde`
        */ "TaskId": string;
        "LayoutIds": number[];
        "OwnerId"?: number;
        /**
        * 视频的裁剪模式：
        * - **0**：不保持比例铺满。
        * - **1**：保持比例裁剪。
        * - **2**（默认）：保持比例留边。
        * @example `2`
        */ "CropMode"?: number;
        /**
        * 背景色RGB，默认是**0**（黑色）。
        * @example `0`
        */ "BackgroundColor"?: number;
        "UserPanes"?: string[];
    }): Promise<{}>;
    CreateChannel(query: {
        "RegionId"?: string;
        "AppId": string;
        "ChannelId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateConference(query: {
        "RegionId"?: string;
        "AppId": string;
        "ClientToken": string;
        "OwnerId"?: number;
        "ConferenceName"?: string;
        "StartTime"?: string;
        "Type"?: string;
        "RemindNotice"?: number;
    }): Promise<{}>;
    CreateTemplate(query: {
        "RegionId"?: string;
        "AppId": string;
        "MixMode": number;
        "ServiceMode": number;
        "CallBack": string;
        "MaxMixStreamCount": number;
        "MediaConfig": number;
        "LayOut": string[];
        "RecordConfig": string[];
        "LiveConfig": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteConference(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteTemplate(query: {
        "RegionId"?: string;
        "AppId": string;
        "TemplateId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeConferenceAuthInfo(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeRealTimeRecordDetail(query: {
        "RegionId"?: string;
        "AppId": string;
        "ChannelId": string;
        "RecordId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeRealTimeRecordList(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeRecordDetail(query: {
        "RegionId"?: string;
        "AppId": string;
        "StartTime": string;
        "EndTime": string;
        "ChannelId": string;
        "RecordId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeRecordList(query: {
        "RegionId"?: string;
        "AppId": string;
        "StartTime": string;
        "EndTime": string;
        "PageNo": number;
        "PageSize": number;
        "OwnerId"?: number;
        "IdType"?: string;
        "Id"?: string;
        "SortType"?: string;
        "ServiceArea"?: string;
    }): Promise<{}>;
    DescribeStatis(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "AppId"?: string;
        "SortType"?: string;
        "ServiceArea"?: string;
        "Interval"?: string;
        "DataType"?: string;
    }): Promise<{}>;
    GetTaskParam(query: {
        "RegionId"?: string;
        "AppId": string;
        "TaskId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    GetTaskStatus(query: {
        "RegionId"?: string;
        "AppId": string;
        "ChannelId": string;
        "TaskId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    GetTemplateInfo(query: {
        "RegionId"?: string;
        "AppId": string;
        "TemplateId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyConference(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "OwnerId"?: number;
        "ConferenceName"?: string;
        "StartTime"?: string;
        "Type"?: string;
        "RemindNotice"?: number;
    }): Promise<{}>;
    MuteAudio(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "ParticipantIds": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    MuteAudioAll(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "ParticipantId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    RemoveParticipants(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "ParticipantIds": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    StartTask(query: {
        "RegionId"?: string;
        "AppId": string;
        "ChannelId": string;
        "TemplateId": number;
        "IdempotentId": string;
        "MixPanes": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    StopTask(query: {
        "RegionId"?: string;
        "AppId": string;
        "ChannelId": string;
        "TaskId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    UnmuteAudio(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "ParticipantIds": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    UnmuteAudioAll(query: {
        "RegionId"?: string;
        "AppId": string;
        "ConferenceId": string;
        "ParticipantId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UpdateChannel(query: {
        "RegionId"?: string;
        "AppId": string;
        "ChannelId": string;
        "Nonce": string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default RTC;
