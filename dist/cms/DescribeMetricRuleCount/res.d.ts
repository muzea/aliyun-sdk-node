export interface DescribeMetricRuleCountResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `FF38D33A-67C1-40EB-AB65-FAEE51EDB644`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 各类状态报警规则的数量。
     */
    MetricRuleCount: {
        /**
         * 正常状态报警规则的数量。
         * @example `40`
         */
        Ok: number;
        /**
         * 无数据状态报警规则的数量。
         * @example `0`
         */
        Nodata: number;
        /**
         * 禁用状态报警规则的数量。
         * @example `0`
         */
        Disable: number;
        /**
         * 报警规则总数量。
         * @example `45`
         */
        Total: number;
        /**
         * 报警状态报警规则的数量。
         * @example `5`
         */
        Alarm: number;
    };
}
