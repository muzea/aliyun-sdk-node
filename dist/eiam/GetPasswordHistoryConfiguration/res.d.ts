export interface GetPasswordHistoryConfigurationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 密码历史检查配置。
     */
    PasswordHistoryConfiguration: {
        /**
         * 密码历史配置状态，取值可选范围：
         * - enabled：开启。
         * - disabled：禁用。
         * @example `enabled`
         */
        PasswordHistoryStatus: string;
        /**
         * 保留最近密码记录数。
         * @example `3`
         */
        PasswordHistoryMaxRetention: number;
    };
}
