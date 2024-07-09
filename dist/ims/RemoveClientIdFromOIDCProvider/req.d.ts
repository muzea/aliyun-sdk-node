export interface RemoveClientIdFromOIDCProviderRequest {
    /**
     * OIDC身份提供商的名称。
     * @example `TestOIDCProvider`
     */
    "OIDCProviderName"?: string;
    /**
     * 指定的客户端ID。
     * 格式：允许英文字母、数字、特殊字符`.-_:/`，不能以特殊字符`.-_:/`开头。
     * 长度：最大64个字符。
     * @example `498469743454717****`
     */
    "ClientId"?: string;
}
