export interface ListMuteGroupUserRequest {
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
     * 页码，默认值：1。取值范围：1~100000。
     * @example `10`
     */
    "PageNum": number;
    /**
     * 单页显示用户的数量，默认值：20。取值范围：1~50。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 操作人用户UserId。
     * @example `de1**a0`
     */
    "OperatorUserId"?: string;
}
