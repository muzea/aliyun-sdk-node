export interface DeleteNacosConfigsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 请求ID。
     * @example `73EB5563-CBB3-5F48-999D-512F4EFB7377`
     */
    RequestId: string;
    /**
     * 请求消息。
     * @example `success`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 响应码。
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
}
