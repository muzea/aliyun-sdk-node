export interface UpdateTaskFlowNotificationResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `3BDC762F-2525-5E47-8748-D6C58BDB3B38`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值说明如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
