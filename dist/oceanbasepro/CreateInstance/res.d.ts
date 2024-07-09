export interface CreateInstanceResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例 ID。
         * @example `i-bp67acfmxazb4p****`
         */
        InstanceId: string;
        /**
         * 订单 ID。<br>该参数在创建预付费和后付费集群时包含返回值。
         * @example `1234567890`
         */
        OrderId: string;
        /**
         * 资源组 ID。
         * @example `rg-***************`
         */
        ResourceGroupId: string;
        /**
         * 预检查请求的结果。
         * - 如果 DryRun 填写为 true，当预检查请求通过，则 DryRunResult 返回 true，否则返回相应的错误码信息。
         * - 如果 DryRun 填写为 false, 则表示不进行预检查, DryRunResult 默认返回 false。
         * @example `false`
         */
        DryRunResult: boolean;
    };
}
