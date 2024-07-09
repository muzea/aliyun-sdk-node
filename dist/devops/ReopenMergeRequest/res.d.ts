export interface ReopenMergeRequestResponse {
    /**
     * 请求ID
     * @example `313A1BF6-63B7-52D4-A098-952221A65254`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 重新打开是否成功
         * @example `true`
         */
        result: boolean;
    };
}
