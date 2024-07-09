export interface PutResourceMetricRuleResponse {
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
     * @example `65D50468-ECEF-48F1-A6E1-D952E89D9436`
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
