export interface DescribeGtmRecoveryPlanAvailableConfigResponse {
    Instances: {
        /**
         * 实例列表
         */
        Instance: {
            AddrPools: {
                /**
                 * 地址池列表
                 */
                AddrPool: {
                    /**
                     * 地址池ID
                     * @example `地址池1`
                     */
                    AddrPoolId: string;
                    /**
                     * 地址池名称
                     * @example `hra0i9`
                     */
                    Name: string;
                }[];
            };
            /**
             * 实例名称
             * @example `instance-name-example`
             */
            InstanceName: string;
            /**
             * 实例ID
             * @example `instance-example`
             */
            InstanceId: string;
        }[];
    };
    /**
     * 请求ID
     * @example `F8F8EF50-8B7F-4702-B294-97170A423403`
     */
    RequestId: string;
}
