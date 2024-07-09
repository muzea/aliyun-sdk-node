export interface DeleteEngineNamespaceResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 响应描述。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A73AC37C-C617-4E3A-8049-372CF49C****`
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
     * @example `True`
     */
    Success: boolean;
}
