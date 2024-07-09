export interface DeleteLhMembersResponse {
    /**
     * 请求ID。
     * @example `F1C78D32-1AFD-58AD-9DD2-C8A0896969DD`
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
