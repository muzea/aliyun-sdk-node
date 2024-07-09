export interface GenerateAssetOperationTokenResponse {
    /**
     * 响应数据。
     */
    AssetOperationToken: {
        /**
         * 运维令牌剩余可使用的次数。
         * @example `1`
         */
        CountLeft: number;
        /**
         * 运维令牌过期时间。时间戳格式。
         * @example `1709110797`
         */
        ExpireTime: number;
        /**
         * 是否有使用次数限制.
         * @example `true`
         */
        HasCountLimit: boolean;
        /**
         * 最大续期次数，0表示不可续期。
         * @example `10`
         */
        MaxRenewCount: number;
        /**
         * 已经续期的次数。
         * @example `1`
         */
        RenewCount: number;
        /**
         * 申请的运维令牌。
         * @example `NmYyMmEzNmMwYzljNGY******`
         */
        Token: string;
        /**
         * 运维令牌ID。
         * @example `1`
         */
        TokenId: string;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
}
