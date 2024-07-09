export interface GetAiOutboundTaskBizDataRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `agent_***`
     */
    "InstanceId": string;
    /**
     * 会话ID。
     * @example `123456`
     */
    "ChannelId": string;
}
