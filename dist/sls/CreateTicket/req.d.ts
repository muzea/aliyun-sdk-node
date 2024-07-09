export interface CreateTicketRequest {
    /**
     * * 服务地址只能是华东2（上海）或新加坡，但获取的Ticket可以在各个地域使用。免登录票据过期时间（秒），默认86400秒（一天），最大2592000秒（30天）。
     * * 免密链接的有效值是expirationTime和accessTokenExpirationTime的最小值。
     * @example `86400`
     */
    "expirationTime"?: number;
    /**
     * 服务地址只能是华东2（上海）或新加坡，但获取的Ticket可以在各个地域使用。访问令牌过期时间（秒），默认86400秒（一天），最大86400秒（一天）。
     * @example `600`
     */
    "accessTokenExpirationTime"?: number;
}
