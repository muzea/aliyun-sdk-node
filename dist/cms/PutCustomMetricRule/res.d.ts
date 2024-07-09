export interface PutCustomMetricRuleResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。接口调用成功时，返回为空；接口调用失败时，返回失败原因。
     * @example `ComparisonOperator is mandatory for this action.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `65D50468-ECEF-48F1-A6E1-D952E89D9432`
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
