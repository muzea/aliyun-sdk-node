export interface ModifyDataCorrectExecSQLResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `Specified parameter OrderId is not valid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `InvalidOrderId`
     */
    ErrorCode: string;
}
