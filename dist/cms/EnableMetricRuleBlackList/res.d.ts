export interface EnableMetricRuleBlackListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `94869866-1621-3652-BBC9-72A47B2AC2F5`
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
     * 成功启用或禁用的报警黑名单策略的数量。
     * @example `1`
     */
    Count: number;
}
