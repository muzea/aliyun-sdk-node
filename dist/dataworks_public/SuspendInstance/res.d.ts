export interface SuspendInstanceResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 调用SuspendInstance接口后，返回的结果详情。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `0baf87f0159376****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ProjectNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
