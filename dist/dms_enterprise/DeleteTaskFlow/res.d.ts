export interface DeleteTaskFlowResponse {
    /**
     * 请求ID。
     * @example `9AFE13F6-A4FD-581B-BFDE-B63B1CDC2336`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `403`
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
     * @example `true`
     */
    Success: boolean;
}
