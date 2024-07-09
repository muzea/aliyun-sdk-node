export interface ActiveAggregateConfigRulesResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
    /**
     * 启用规则的操作结果。
     */
    OperateRuleResult: {
        /**
         * 启用规则的操作列表。
         */
        OperateRuleItemList: {
            /**
             * 错误码。
             * - 当您启用规则成功时，该参数为空。
             * - 当您启用规则失败时，该参数显示错误码。错误码详情，请参见<props="china">[错误中心](https://error-center.aliyun.com/status/product/Config)</props><props="intl">[错误中心](https://error-center.alibabacloud.com/status/product/Config)</props>。
             * @example `ConfigRuleNotExists`
             */
            ErrorCode: string;
            /**
             * 操作是否成功。取值：
             * - true：成功。
             * - false：失败。
             * @example `false`
             */
            Success: boolean;
            /**
             * 规则ID。
             * @example `cr-5772ba41209e007b****`
             */
            ConfigRuleId: string;
        }[];
    };
}
