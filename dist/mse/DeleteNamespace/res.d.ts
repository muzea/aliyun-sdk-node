export interface DeleteNamespaceResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求信息，错误排查用。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `abcde-efg`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `NO_PERMISSION`
     */
    ErrorCode: string;
}
