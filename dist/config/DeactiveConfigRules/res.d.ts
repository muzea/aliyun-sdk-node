export interface DeactiveConfigRulesResponse {
    /**
     * 请求ID。
     * @example `54FA74D9-45D4-4CA5-9BE1-97F6EA19AF5B`
     */
    RequestId: string;
    /**
     * 停用规则的操作结果。
     */
    OperateRuleResult: {
        /**
         * 停用规则的操作列表。
         */
        OperateRuleItemList: {
            /**
             * 错误码。
             * - 当您停用规则成功时，该参数为空。
             * <props="china">- 当您停用规则失败时，该参数显示错误码。错误码详情，请参见[错误中心](https://error-center.aliyun.com/status/product/Config)。</props>
             * <props="intl">- 当您停用规则失败时，该参数显示错误码。错误码详情，请参见[错误中心](https://error-center.alibabacloud.com/status/product/Config)。</props>
             * @example `ConfigRuleStatusNotActive`
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
             * @example `cr-19a56457e0d90058****`
             */
            ConfigRuleId: string;
        }[];
    };
}
