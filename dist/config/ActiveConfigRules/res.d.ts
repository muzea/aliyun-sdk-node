export interface ActiveConfigRulesResponse {
    /**
     * 请求ID。
     * @example `61C1A88F-D163-40DF-84A6-F200229F37B2`
     */
    RequestId: string;
    /**
     * 启用规则的结果。
     */
    OperateRuleResult: {
        /**
         * 启用规则的结果。
         */
        OperateRuleItemList: {
            /**
             * 错误码。
             * - 当您启用规则成功时，该参数为空。
             * - 当您启用规则失败时，该参数显示错误码。错误码详情，请参见[错误中心](https://next.api.aliyun.com/document/Config/2020-09-07/errorCode)。
             * @example `ConfigRuleStatusNotInActive`
             */
            ErrorCode: string;
            /**
             * 启用规则是否成功。取值：
             * - true：成功
             * - false：失败
             * @example `true`
             */
            Success: boolean;
            /**
             * 规则ID。
             * @example `cr-2da35180a8d1008e****	`
             */
            ConfigRuleId: string;
        }[];
    };
}
