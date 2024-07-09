export interface GenerateTokenResponse {
    /**
     * token类型，取值可选范围：
     * Basic - Basic类型
     * Bearer - Bearer类型
     * @example `Bearer`
     */
    token_type: string;
    /**
     * access_token。
     * @example `ATxxx`
     */
    access_token: string;
    /**
     * refresh_token。
     * @example `RTxxx`
     */
    refresh_token: string;
    /**
     * 有效时长，单位秒。
     * @example `1200`
     */
    expires_in: number;
    /**
     * 失效时间，格式为Unix时间戳，单位为秒。
     * @example `1653288641`
     */
    expires_at: number;
    /**
     * id_token。
     * @example `xxxxx`
     */
    id_token: string;
}
