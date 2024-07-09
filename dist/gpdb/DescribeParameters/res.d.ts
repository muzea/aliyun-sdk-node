export interface DescribeParametersResponse {
    /**
     * 配置参数列表。
     */
    Parameters: {
        /**
         * 配置参数是否可修改。取值说明：
         * - **true**：可修改。
         * - **false**：不可修改。
         * @example `true`
         */
        IsChangeableConfig: string;
        /**
         * 是否需要重启实例。取值说明：
         * - **true**：需要重启实例。
         * - **false**：不需要重启实例。
         * @example `false`
         */
        ForceRestartInstance: string;
        /**
         * 配置参数的取值范围。
         * @example `[0-2147483647]`
         */
        OptionalRange: string;
        /**
         * 配置参数名称。
         * @example `statement_timeout`
         */
        ParameterName: string;
        /**
         * 配置参数默认值。
         * @example `10800000`
         */
        ParameterValue: string;
        /**
         * 配置参数的说明。
         * @example `Sets the maximum allowed duration of any statement，A value of 0 turns off the timeout.`
         */
        ParameterDescription: string;
        /**
         * 配置参数当前值。
         * @example `10800000`
         */
        CurrentValue: string;
    }[];
    /**
     * 请求ID。
     * @example `62506167-D284-562A-B7C2-0A**********`
     */
    RequestId: string;
}
