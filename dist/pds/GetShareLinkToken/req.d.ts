export interface GetShareLinkTokenRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 分享id
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
        /**
         * 提取码
         * @example `abcF123x`
         */
        share_pwd: string;
        /**
         * 令牌有效时长。参数合法范围是(0, 7200]；参数为0或缺省时默认7200秒。
         * @example `7200`
         */
        expire_sec: number;
    };
}
