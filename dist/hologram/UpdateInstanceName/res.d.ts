export interface UpdateInstanceNameResponse {
    /**
     * Id of the request
     * @example `C6B55032-D41A-5FE0-9C07-8BD81C88422E`
     */
    RequestId: string;
    /**
     * 返回结果,表示操作是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求结果，表示此次请求是否发生异常。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMessage: string;
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
