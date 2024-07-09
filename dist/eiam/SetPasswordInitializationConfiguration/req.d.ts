export interface SetPasswordInitializationConfigurationRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 密码初始化配置状态，取值可选范围：
     * - enabled：开启。
     * - disabled：禁用。
     * @example `enabled`
     */
    "PasswordInitializationStatus": string;
    /**
     * 密码初始化方式。当PasswordInitializationStatus取值为enabled时必传，取值可选范围：
     * - random：随机。
     * @example `random`
     */
    "PasswordInitializationType"?: string;
    /**
     * 密码强制更新状态，取值可选范围：
     * - enabled：开启。
     * - disabled：禁用。
     * @example `enabled`
     */
    "PasswordForcedUpdateStatus"?: string;
    /**
     * 密码初始化通知渠道列表。
     * @example `email`
     */
    "PasswordInitializationNotificationChannels"?: string[];
}
