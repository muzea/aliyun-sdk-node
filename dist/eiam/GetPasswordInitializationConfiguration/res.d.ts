export interface GetPasswordInitializationConfigurationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 密码初始化配置。
     */
    PasswordInitializationConfiguration: {
        /**
         * 密码初始化配置状态，取值可选范围：
         * - enabled：开启。
         * - disabled：禁用。
         * @example `enabled`
         */
        PasswordInitializationStatus: string;
        /**
         * 密码初始化方式，取值可选范围：
         * - random：随机。
         * @example `random`
         */
        PasswordInitializationType: string;
        /**
         * 密码强制更新状态，取值可选范围：
         * - enabled：开启。
         * - disabled：禁用。
         * @example `enabled`
         */
        PasswordForcedUpdateStatus: string;
        /**
         * 密码初始化通知渠道列表。
         * @example `email`
         */
        PasswordInitializationNotificationChannels: string[];
    };
}
