export interface SetAppCallbackUrlResponse {
    /**
     * 请求ID。
     * @example `CFB5E6AA-823B-415B-AA03-4B9892049B68`
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
