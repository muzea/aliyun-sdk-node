export interface ResetUserPasswordRequest {
    /**
     * 要重置密码的便捷用户的用户名列表。
     * @example `test1`
     */
    "Users": string[];
    /**
     * 重置密码后通知用户的方式。
     * > 国际站账号不支持通过短信通知用户的方式。
     * @example `1`
     */
    "NotifyType"?: number;
}
