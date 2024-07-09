export interface DisableMetricRulesResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `RuleId is mandatory for this action.`
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
}
