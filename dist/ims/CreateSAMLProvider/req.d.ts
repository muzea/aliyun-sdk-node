export interface CreateSAMLProviderRequest {
    /**
     * 身份提供商名称。
     * 最大长度128个字符，允许英文字母、数字、特殊字符`.-_`，不能以特殊字符`.-_`开头或结尾。
     * @example `test-provider`
     */
    "SAMLProviderName": string;
    /**
     * 备注。
     * @example `This is a provider.`
     */
    "Description"?: string;
    /**
     * 元数据文档。经过Base64编码。
     * 由支持SAML2.0协议的身份提供商提供。
     * @example `PD94bWwgdmVy****`
     */
    "EncodedSAMLMetadataDocument"?: string;
}
