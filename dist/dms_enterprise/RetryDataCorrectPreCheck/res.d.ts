export interface RetryDataCorrectPreCheckResponse {
    /**
     * 请求ID。
     * @example `5BC081C7-5F77-5C92-9758-E1ED17CA****`
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
     * @example `OrderId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `MissingOrderId`
     */
    ErrorCode: string;
}
