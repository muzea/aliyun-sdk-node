export interface DeletePrometheusAlertRuleResponse {
    /**
     * 是否删除成功。取值：
     * - `true`：删除成功
     * - `false`：删除失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `9FEA6D00-317F-45E3-9004-7FB8B0B7****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 详细信息
     * @example `success`
     */
    Message: string;
}
