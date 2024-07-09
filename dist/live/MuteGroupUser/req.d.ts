export interface MuteGroupUserRequest {
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
     * 禁言详情。
     */
    "MuteUserList": string[];
    /**
     * 禁言的时间，单位：秒。
     * >如果不传或者传0则采用默认禁言时间（86400秒）。
     * @example `3600`
     */
    "MuteTime"?: number;
    /**
     * 操作人用户UserId。
     * > 该参数需填写且该用户必须是群组的创建者。
     * @example `de1**a0`
     */
    "OperatorUserId"?: string;
    /**
     * 系统消息扩散类型，取值：
     * - 0：不扩散。
     * - 1：扩散到指定人。
     * - 2：扩散到群组。
     * @example `2`
     */
    "BroadCastType"?: number;
}
