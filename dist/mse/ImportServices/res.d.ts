export interface ImportServicesResponse {
    /**
     * 请求ID。
     * @example `0F0FBA7D-5AC5-5DC4-A1E9-E9656BFAE1B9`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     * @example `true`
     */
    Data: boolean;
}
