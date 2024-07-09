export interface StartChatWorkRequest {
    /**
     * 实例id
     * @example `ccc_xspace***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称，实例内唯一（登录名）
     * @example `account1`
     */
    "AccountName": string;
}
