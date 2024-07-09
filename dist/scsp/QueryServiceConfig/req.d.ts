export interface QueryServiceConfigRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 视图编码，有以下枚举：
     * 在线：serviceContextViewChatStand
     * 热线：serviceContextViewHotlineStand
     * @example `serviceContextViewChatStand`
     */
    "ViewCode": string;
    /**
     * 补充参数，JSON类型字符串
     * @example `{"memberId":64007246863,"channelType":2,"channelId":"3a184074ee34426795f3986d306b2689"},"sdkInstance":"9JKPvcl8xaN2"}`
     */
    "Parameters"?: string;
}
