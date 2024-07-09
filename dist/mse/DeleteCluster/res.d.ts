export interface DeleteClusterResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3369AD10-F1A6-4E6F-B99E-20F51826****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
