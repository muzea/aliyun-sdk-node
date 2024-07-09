export interface DeleteExporterOutputResponse {
    /**
     * 状态码。
     * > 状态码为200表示成功，其余取值表示失败。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `2DECF751-7AFA-43BB-8C63-2B6B07E51AE1`
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
