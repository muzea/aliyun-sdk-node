export interface DeleteMetricRuleBlackListResponse {
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
     * @example `B88D233C-A004-3AB8-AD9C-30CBDD4440C5`
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
     * 成功删除的报警黑名单策略的数量。
     * @example `1`
     */
    Count: number;
}
