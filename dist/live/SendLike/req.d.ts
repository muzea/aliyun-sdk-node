export interface SendLikeRequest {
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
     * 操作人用户ID。
     * @example `de1**a0`
     */
    "OperatorUserId"?: string;
    /**
     * 点赞数量。
     * @example `10`
     */
    "Count": string;
    /**
     * 系统消息扩散类型，取值：
     * - 0：不扩散。
     * - 1：扩散到指定人。
     * - 2：扩散到群组。
     * @example `2`
     */
    "BroadCastType"?: number;
}
