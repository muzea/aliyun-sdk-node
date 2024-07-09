export interface GetMessageTokenResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 用于长连接建连的Token。
         * @example `oauth_cloud_key:***-b0YY5Gy6Q`
         */
        AccessToken: string;
        /**
         * 登录Token过期时间，单位：毫秒。
         * @example `86400000`
         */
        AccessTokenExpiredTime: number;
        /**
         * 更新Token，若AccessToken过期，则可以使用RefreshToken再次获取新Token。
         * @example `oauth_cloud_key:****-Q62xggOTdgk3gw=`
         */
        RefreshToken: string;
    };
}
