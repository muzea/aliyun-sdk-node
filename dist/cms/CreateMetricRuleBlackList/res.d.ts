export interface CreateMetricRuleBlackListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The request has failed due to a temporary failure of the server.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5C637FA3-3959-3352-8BE6-78CE2ED2D33D`
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
     * 报警黑名单策略的ID。
     * @example `93514c96-ceb8-47d8-8ee3-93b6d98b****`
     */
    Id: string;
}
