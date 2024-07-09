export interface ModifyMetricRuleBlackListResponse {
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
     * @example `008773AE-1D86-3231-90F9-1AF7F808F9CE`
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
     * 成功修改报警黑名单策略的数量。
     * @example `1`
     */
    Count: string;
}
