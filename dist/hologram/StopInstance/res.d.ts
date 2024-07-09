export interface StopInstanceResponse {
    /**
     * Id of the request
     * @example `2A8DEF6E-067E-5DB0-BAE1-2894266E6C6A`
     */
    RequestId: string;
    /**
     * 返回结果,表示操作是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求结果，表示此次请求是否发生异常，和业务无关
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
     * http状态码
     * @example `200`
     */
    HttpStatusCode: string;
}
