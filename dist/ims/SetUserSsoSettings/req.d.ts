export interface SetUserSsoSettingsRequest {
    /**
     * 元数据文档。经过Base64编码。
     * 由支持SAML2.0协议的身份提供商提供。
     * @example `PD94bWwgdmVy****`
     */
    "MetadataDocument"?: string;
    /**
     * 是否开启RAM用户的SSO功能。取值：
     * - true：开启。
     * - false（默认值）：关闭。
     * @example `true`
     */
    "SsoEnabled"?: boolean;
    /**
     * 辅助域名。
     * @example `example.com`
     */
    "AuxiliaryDomain"?: string;
}
