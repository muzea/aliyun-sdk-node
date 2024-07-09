export interface AttachConfigRuleToCompliancePackResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB12A`
     */
    RequestId: string;
    /**
     * 规则加入合规包的操作结果。
     */
    OperateRuleResult: {
        /**
         * 规则加入合规包的操作结果列表。
         */
        OperateRuleItemList: {
            /**
             * 错误码。
             * - 当规则加入合规包操作成功时，该参数为空。
             * <props="china">- 当规则加入合规包操作失败时，该参数显示错误码。错误码详情，请参见[错误中心](https://error-center.aliyun.com/status/product/Config)。</props>
             * <props="intl">- 当规则加入合规包操作失败时，该参数显示错误码。错误码详情，请参见[错误中心](https://error-center.alibabacloud.com/status/product/Config)。</props>
             * @example `ConfigRuleNotExists`
             */
            ErrorCode: string;
            /**
             * 操作是否成功。取值：
             * - true：成功。
             * - false：失败。
             * @example `true`
             */
            Success: boolean;
            /**
             * 规则ID。
             * @example `cr-6cc4626622af00e7****`
             */
            ConfigRuleId: string;
        }[];
    };
}
