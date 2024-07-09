export interface UpdateTaskFlowEdgesResponse {
    /**
     * 请求的ID，可用于定位日志，排查问题。
     * @example `93FC1AE1-EC54-52B1-B146-650180FB82E8`
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
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
