export interface CreateNacosConfigResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 请求ID。
     * @example `673DBD43-569E-510F-B3DE-20BB8DFEB20A`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 返回代码。
     * @example `1`
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
