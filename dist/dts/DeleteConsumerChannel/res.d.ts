export interface DeleteConsumerChannelResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `F9E00ABE-2AD9-40A9-8C3C-D817E648****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用出错时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
