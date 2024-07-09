export interface DeleteNacosConfigResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 请求ID。
     * @example `4FEFC13F-EB50-51E1-97D8-C5CBA8CD1B84`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
