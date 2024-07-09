export interface StartChatWorkRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre***`
     */
    "InstanceId": string;
    /**
     * 坐席登录名。
     * @example `123@123.com`
     */
    "AccountName": string;
}
