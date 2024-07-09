export interface UpdateUserPasswordRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserId": string;
    /**
     * 账户新密码，密码格式参考密码策略。
     * @example `123456`
     */
    "Password": string;
    /**
     * 强制修改密码状态，默认不启用，取值可选范围：
     * - enabled：开启。
     * - disabled：禁用。
     * @example `enabled`
     */
    "PasswordForcedUpdateStatus"?: string;
    /**
     * 密码通知渠道列表。密码通知渠道取值可选范围：
     * - email：邮件。
     * - sms：短信。
     * @example `sms`
     */
    "UserNotificationChannels"?: string[];
}
