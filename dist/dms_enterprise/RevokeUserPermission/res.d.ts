export interface RevokeUserPermissionResponse {
    /**
     * 请求ID。
     * @example `A99CD576-1E18-4E86-931E-C3CCE56D****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `MissingUserId`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UserId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
