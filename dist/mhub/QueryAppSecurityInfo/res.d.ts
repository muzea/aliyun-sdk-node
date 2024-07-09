export interface QueryAppSecurityInfoResponse {
    /**
     * 查询请求的ID。
     * @example `126D4DDD-05A5-49B1-B18C-39C4A929BFB2`
     */
    RequestId: string;
    /**
     * 应用的安全信息。
     */
    AppSecurityInfo: {
        /**
         * 应用的AppSecret，用于在接口请求时进行签名鉴权等。
         * @example `abc123abc123`
         */
        AppSecret: string;
        /**
         * 应用的AppKey，唯一标识应用。
         * @example `123456`
         */
        AppKey: string;
    };
}
