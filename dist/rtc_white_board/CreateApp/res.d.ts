export interface CreateAppResponse {
    /**
     * 请求ID。
     * @example `0E2ECCA1-5340-43AE-A1DC-EBD17D3CCE92`
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
     */
    Result: {
        /**
         * 应用ID。
         * @example `7mbj****`
         */
        AppID: string;
    };
}
