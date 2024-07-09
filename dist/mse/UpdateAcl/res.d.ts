export interface UpdateAclResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7466566F-F30F-4A29-965D-3E0AF21D****`
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
}
