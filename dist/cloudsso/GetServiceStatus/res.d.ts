export interface GetServiceStatusResponse {
    /**
     * 请求ID。
     * @example `ADADC31D-90EE-5459-99B0-D83DF07769A3`
     */
    RequestId: string;
    /**
     * 云SSO状态。
     */
    ServiceStatus: {
        /**
         * 云SSO开通状态。取值：
         * - Enabled：开通。
         * - Disabled：关闭。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 阿里云账号ID。
         * @example `151266687691****`
         */
        AccountId: string;
        /**
         * 检查是否满足云SSO的开通条件。取值：
         * - Success：满足。
         * - Failed：不满足。
         * > 当`Status`为`Disabled`时，返回该参数。
         * @example `Success`
         */
        PrerequisiteCheckResult: string;
        /**
         * 地域ID。
         */
        RegionsInUse: string[];
    };
}
