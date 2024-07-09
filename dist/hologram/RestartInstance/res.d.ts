export interface RestartInstanceResponse {
    /**
     * Id of the request
     * @example `36291497-CDB0-53DC-8CD7-762E054F57A6`
     */
    RequestId: string;
    /**
     * 操作是否成功。
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
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
