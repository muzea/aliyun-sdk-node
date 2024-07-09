export interface CreateOAuthTokenResponse {
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `C2F153F6-BB43-50C4-9F4F-40593203E19A`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 访问令牌
         * @example `2aeb4cd012af879e54f0d37dfa526f51`
         */
        accessToken: string;
        /**
         * 授权范围
         * @example `read:repo`
         */
        scope: string;
        /**
         * token类型，固定值：bearer
         * @example `bearer`
         */
        tokenType: string;
        /**
         * id
         * @example `30815`
         */
        id: string;
    };
}
