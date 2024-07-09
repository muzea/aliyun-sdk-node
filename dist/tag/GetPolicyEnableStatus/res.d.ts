export interface GetPolicyEnableStatusResponse {
    /**
     * 请求ID。
     * @example `6C8DF1B1-C65F-5D3A-9FDA-26A4683BB36B`
     */
    RequestId: string;
    /**
     * 标签策略状态。
     */
    StatusModels: {
        /**
         * 标签策略模式。取值：
         * - USER：单账号模式。
         * - RD：多账号模式。
         * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
         * @example `RD`
         */
        UserType: string;
        /**
         * 标签策略状态。取值：
         * - PendingEnable：启用中。
         * - Enabled：已启用。
         * - Closing：禁用中。
         * - Disabled：已禁用。
         * @example `Enabled`
         */
        Status: string;
    }[];
}
