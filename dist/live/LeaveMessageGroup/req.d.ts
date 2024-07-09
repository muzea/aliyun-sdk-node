export interface LeaveMessageGroupRequest {
    /**
     * 互动消息应用ID。
     * @example `VKL3***`
     */
    "AppId": string;
    /**
     * 消息组ID。
     * @example `AE35-****-T95F`
     */
    "GroupId": string;
    /**
     * 用户UserId，用户自定义，在AppId下单独唯一。
     * @example `de1**a0`
     */
    "UserId": string;
    /**
     * 系统消息扩散类型，取值：
     * - 0（默认值）：不扩散。
     * - 1：扩散到指定人。
     * - 2：扩散到群组。
     * @example `2`
     */
    "BroadCastType"?: number;
    /**
     * 是否扩散统计类消息，打开时在加入消息组后会广播消息组的统计信息，客户端可以接收处理该消息。取值：
     * - true：扩散统计类消息。
     * - false：不扩散统计类消息。
     * @example `true`
     */
    "BroadCastStatistics"?: boolean;
}
