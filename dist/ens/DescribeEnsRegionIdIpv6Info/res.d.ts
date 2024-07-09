export interface DescribeEnsRegionIdIpv6InfoResponse {
    /**
     * 请求ID。
     * @example `3703C4AC-9396-458C-8F25-1D701334D309`
     */
    RequestId: string;
    /**
     * 是否支持IPv6信息。
     */
    SupportIpv6Info: {
        /**
         * 节点ID。
         * @example `cn-chengdu-****-4`
         */
        EnsRegionId: string;
        /**
         * 是否支持IPv6，取值：
         * - true：支持
         * - false：不支持
         * @example `true`
         */
        SupportIpv6: boolean;
    };
}
