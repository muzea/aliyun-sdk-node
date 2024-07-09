export interface UpdateInstanceResponse {
    /**
     * 请求ID。
     * @example `E9BEBF41-4F69-4605-A5D5-A67955173941`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `false`
     */
    Success: boolean;
}
