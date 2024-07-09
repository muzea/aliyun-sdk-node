export interface RefreshUsersPermissionsResponse {
    /**
     * 请求ID。
     * @example `0E85E1C9-4A68-49E5-965A-22F628B209C6`
     */
    RequestId: string;
    /**
     * 调用结果。
     * @example `true`
     */
    ResponseSuccess: boolean;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMsg: string;
    /**
     * 返回的结果信息。
     * @example `true`
     */
    Result: boolean;
}
