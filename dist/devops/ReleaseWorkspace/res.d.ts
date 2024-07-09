export interface ReleaseWorkspaceResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `Forbidden.AccessDenied`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `The user is not authorized to perform the operation.`
     */
    errorMessage: string;
}
