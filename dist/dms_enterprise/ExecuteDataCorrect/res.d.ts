export interface ExecuteDataCorrectResponse {
    /**
     * 请求ID。
     * @example `EADDA791-2809-58CE-A303-743A77FF****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Unknown server error`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
