export interface RefreshTokenRequest {
    /**
     * 免登录票据。
     * @example `eyJ***************.eyJ******************.KUT****************`
     */
    "ticket"?: string;
    /**
     * 访问令牌过期时间（秒），默认86400秒（一天），最大86400秒（一天）。
     * @example `600`
     */
    "accessTokenExpirationTime"?: number;
}
