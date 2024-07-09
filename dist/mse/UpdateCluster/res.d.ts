export interface UpdateClusterResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5B170A0D-2C5D-4CF8-B808-03966B86****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `mse-100-100`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
