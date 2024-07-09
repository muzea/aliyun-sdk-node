export interface AddFingerprintToOIDCProviderResponse {
    /**
     * 请求ID。
     * @example `4B809BBC-0E78-544A-A91A-648926412E3E`
     */
    RequestId: string;
    /**
     * OIDC身份提供商的名称。
     */
    OIDCProvider: {
        /**
         * 修改时间（UTC时间）。
         * @example `2021-11-12T08:38:29Z`
         */
        UpdateDate: string;
        /**
         * OIDC身份提供商的描述。
         * @example `This is a new OIDC Provider.`
         */
        Description: string;
        /**
         * OIDC身份提供商的名称。
         * @example `TestOIDCProvider`
         */
        OIDCProviderName: string;
        /**
         * 创建时间（UTC时间）。
         * @example `2021-11-11T06:56:03Z`
         */
        CreateDate: string;
        /**
         * OIDC身份提供商的ARN。
         * @example `acs:ram::177242285274****:oidc-provider/OIDCProvider`
         */
        Arn: string;
        /**
         * OIDC身份提供商的颁发者URL。
         * @example `https://xxxxxx.example.com`
         */
        IssuerUrl: string;
        /**
         * HTTPS CA证书的验证指纹。多个之间用半角逗号（,）分隔。
         * @example `502ef2deeb3c5b13ea4c3d5193629309e231****,902ef2deeb3c5b13ea4c3d5193629309e231****`
         */
        Fingerprints: string;
        /**
         * 客户端ID。多个之间用半角逗号（,）分隔。
         * @example `498469743454717****`
         */
        ClientIds: string;
        /**
         * 创建时间（时间戳）。
         * @example `1636613763000`
         */
        GmtCreate: string;
        /**
         * 修改时间（时间戳）。
         * @example `1636706309000`
         */
        GmtModified: string;
        /**
         * 允许外部IdP颁发ID Token的最早签发时间。ID Token中的iat字段如果距离当前时间大于这个值则请求会被拒绝。
         * 单位：小时。取值范围：1~168。
         * @example `12`
         */
        IssuanceLimitTime: number;
    };
}
