export interface CreateOIDCProviderRequest {
    /**
     * OIDC身份提供商的名称。
     * 格式：允许英文字母、数字、特殊字符`.-_`，不能以特殊字符`.-_`开头或结尾。
     * 长度：最大128个字符。
     * @example `TestOIDCProvider`
     */
    "OIDCProviderName"?: string;
    /**
     * 颁发者URL。由外部IdP提供。同一个阿里云账号下必须唯一。
     * 格式：该URL必须以`https`开头，符合标准URL格式，不允许带有query参数（以`?`标识）、fragment片段（以`#`标识）和登录信息（以`@`标识）。
     * 长度：最大255个字符。
     * @example `https://xxxxxx.example.com`
     */
    "IssuerUrl"?: string;
    /**
     * OIDC身份提供商的描述。
     * 长度：最大256个字符。
     * @example `This is an OIDC Provider.`
     */
    "Description"?: string;
    /**
     * 客户端ID。由外部IdP提供。多个之间用半角逗号（,）分隔。
     * 格式：允许英文字母、数字、特殊字符`.-_:/`，不能以特殊字符`.-_:/`开头。
     * 长度：单个客户端ID最大64个字符。
     * @example `498469743454717****`
     */
    "ClientIds"?: string;
    /**
     * HTTPS CA证书的验证指纹。由外部IdP提供。多个之间用半角逗号（,）分隔。
     * 格式：允许英文字母和数字。
     * 长度：单个验证指纹最大40个字符。
     * @example `902ef2deeb3c5b13ea4c3d5193629309e231****`
     */
    "Fingerprints"?: string;
    /**
     * 允许外部IdP颁发ID Token的最早签发时间。ID Token中的iat字段如果距离当前时间大于这个值则请求会被拒绝。
     * 单位：小时。取值范围：1~168。
     * @example `6`
     */
    "IssuanceLimitTime"?: number;
}
