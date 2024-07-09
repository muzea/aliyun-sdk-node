export interface RunSmokeTestResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 工作流的ID。
     * @example `3333333`
     */
    Data: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `false`
     */
    Success: boolean;
}
