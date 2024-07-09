export interface RemoveFingerprintFromOIDCProviderRequest {
    /**
     * OIDC身份提供商的名称。
     * @example `TestOIDCProvider`
     */
    "OIDCProviderName"?: string;
    /**
     * 将要移除的验证指纹。
     * @example `6938fd4d98bab03faadb97b34396831e3780****`
     */
    "Fingerprint"?: string;
}
