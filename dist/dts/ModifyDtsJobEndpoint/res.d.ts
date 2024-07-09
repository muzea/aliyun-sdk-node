export interface ModifyDtsJobEndpointResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `3FA98DF2-2F81-51FF-8A38-AA5112DD****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用出错时返回的错误码。
     * @example `DTS.Msg.InvalidEndpoint`
     */
    ErrCode: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The endpoint is invalid.`
     */
    ErrMessage: string;
}
