export interface SetAppNameResponse {
    /**
     * 请求ID。
     * @example `C7B4A941-3DC0-4002-95F4-7A7D14A64992`
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
