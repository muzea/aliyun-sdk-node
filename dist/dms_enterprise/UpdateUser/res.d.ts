export interface UpdateUserResponse {
    /**
     * API请求唯一ID。
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
     * 更新用户是否成功。
     * @example `false`
     */
    Success: boolean;
}
