export interface UpdatePushReviewOnOffResponse {
    /**
     * 请求ID
     * @example `6177543A-8D54-5736-A93B-E0195A1512CB`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
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
         * 是否设置成功
         * @example `true`
         */
        result: boolean;
    };
}
