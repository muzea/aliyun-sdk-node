export interface FetchAccessTokenResponse {
    /**
     * 请求ID
     * @example `BD908DED-849D-5FDB-9C9B-52B1D3F9DC41`
     */
    RequestId: string;
    /**
     * 接口请求返回的消息
     * @example `Success`
     */
    Message: string;
    /**
     * 接口请求返回的状态码。
     * @example `Operation.Success`
     */
    Code: string;
    /**
     * 本次操作是否成功，**true**表示成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 数据详情
     */
    Data: {
        /**
         * 访问令牌
         * @example `eyciOi...jV_PTsxgaNA`
         */
        Access_token: string;
        /**
         * token类型
         * @example `Bearer`
         */
        Token_type: string;
        /**
         * 访问范围
         * @example `openid`
         */
        Scope: string;
        /**
         * 过期时间
         * @example `7200`
         */
        Expires_in: string;
        /**
         * 刷新令牌
         * @example `7200`
         */
        Refresh_token: string;
        /**
         * 身份令牌
         * @example `NiwiZW...wcmlzZUlk`
         */
        Id_token: string;
    };
}
