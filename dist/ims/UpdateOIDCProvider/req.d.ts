export interface UpdateOIDCProviderRequest {
    /**
     * OIDC身份提供商的名称。
     * @example `TestOIDCProvider`
     */
    "OIDCProviderName"?: string;
    /**
     * 客户端ID。多个之间用半角逗号（,）分隔。
     * 格式：允许英文字母、数字、特殊字符`.-_:/`，不能以特殊字符`.-_:/`开头。
     * 长度：单个客户端ID最大64个字符。
     * > 如果指定该参数，会将OIDC身份提供商的客户端ID全部替换。如果您只想新增或删除其中一个客户端ID，请使用AddClientIdToOIDCProvider或RemoveClientIdFromOIDCProvider。更多信息，请参见[AddClientIdToOIDCProvider](~~332057~~)或[RemoveClientIdFromOIDCProvider](~~332058~~)。
     * @example `498469743454717****`
     */
    "ClientIds"?: string;
    /**
     * OIDC身份提供商的描述。
     * 长度：最大256个字符。
     * @example `This is a new OIDC Provider.`
     */
    "NewDescription"?: string;
    /**
     * 允许外部IdP颁发ID Token的最早签发时间。ID Token中的iat字段如果距离当前时间大于这个值则请求会被拒绝。
     * 单位：小时。取值范围：1~168。
     * @example `6`
     */
    "IssuanceLimitTime"?: number;
}
