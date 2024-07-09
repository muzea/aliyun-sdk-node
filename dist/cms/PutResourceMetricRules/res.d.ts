export interface PutResourceMetricRulesResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `15D1440E-BF24-5A41-93E4-36864635179E`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    FailedListResult: {
        /**
         * 为资源设置报警规则的失败结果列表。
         */
        Target: {
            /**
             * 报警规则ID。
             * @example `a151cd6023eacee2f0978e03863cc1697c89508****`
             */
            RuleId: string;
            /**
             * 失败结果。
             */
            Result: {
                /**
                 * 状态码。
                 * @example `404`
                 */
                Code: string;
                /**
                 * 错误信息。
                 * @example `The request processing has failed due to some unknown error.`
                 */
                Message: string;
                /**
                 * 操作是否成功。取值：
                 * - true：成功。
                 * - false：失败。
                 * @example `false`
                 */
                Success: boolean;
            };
        }[];
    };
}
