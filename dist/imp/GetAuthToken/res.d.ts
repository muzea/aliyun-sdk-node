export interface GetAuthTokenResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 获取Token的参数返回结果。
     */
    Result: {
        /**
         * 用于长连接建连的Token。
         * @example `oauth_cloud_key:***-b0YY5Gy6Q`
         */
        AccessToken: string;
        /**
         * 更新Token，若AccessToken过期，则可以使用RefreshToken再次获取新Token。
         * @example `oauth_cloud_key:****-Q62xggOTdgk3gw=`
         */
        RefreshToken: string;
        /**
         * 登录Token过期时间，单位：毫秒。
         * @example `86400000`
         */
        AccessTokenExpiredTime: number;
    };
}
