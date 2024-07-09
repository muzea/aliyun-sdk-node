export interface AddFingerprintToOIDCProviderRequest {
    /**
     * OIDC身份提供商的名称。
     * @example `TestOIDCProvider`
     */
    "OIDCProviderName"?: string;
    /**
     * HTTPS CA证书的验证指纹。
     * 格式：允许英文字母和数字。
     * 长度：最大40个字符。
     * @example `902ef2deeb3c5b13ea4c3d5193629309e231****`
     */
    "Fingerprint"?: string;
}
