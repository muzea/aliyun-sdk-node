export interface UpdateZnodeResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
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
