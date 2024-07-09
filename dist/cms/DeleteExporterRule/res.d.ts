export interface DeleteExporterRuleResponse {
    /**
     * 状态码。
     * > 状态码为200表示成功，其余取值表示失败。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6A5F022D-AC7C-460E-94AE-B9E75083D023`
     */
    RequestId: string;
    /**
     * 是否成功，取值：
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    Success: boolean;
}
