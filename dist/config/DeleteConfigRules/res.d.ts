export interface DeleteConfigRulesResponse {
    /**
     * 请求ID。
     * @example `6721BBD3-F2A6-5349-9051-EE0111036D3F`
     */
    RequestId: string;
    /**
     * 删除规则的操作结果。
     */
    OperateRuleResult: {
        /**
         * 删除规则的操作列表。
         */
        OperateRuleItemList: {
            /**
             * 错误码。
             * - 当您停用规则成功时，该参数为空。
             * <props="china">- 当您停用规则失败时，该参数显示错误码。错误码详情，请参见[错误中心](https://api.aliyun.com/document/Config/2020-09-07/errorCode)。</props>
             * <props="intl">- 当您停用规则失败时，该参数显示错误码。错误码详情，请参见[错误中心](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode)。</props>
             * @example `ConfigRuleCanNotDelete`
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
             * @example `cr-9908626622af0035****`
             */
            ConfigRuleId: string;
        }[];
    };
}
