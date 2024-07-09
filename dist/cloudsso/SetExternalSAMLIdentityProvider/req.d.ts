export interface SetExternalSAMLIdentityProviderRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * IdP元数据文档（Base64编码）。
     * 由支持SAML 2.0协议的IdP提供。
     * @example `PD94bWwgdmVyc2lvbj0iMS4****`
     */
    "EncodedMetadataDocument"?: string;
    /**
     * SSO登录的启用状态。取值：
     * - Enabled：启用。
     * - Disabled（默认值）：禁用。
     * @example `Disabled`
     */
    "SSOStatus"?: string;
    /**
     * IdP标识。
     * @example `http://www.okta.com/exk3qwgtjhetR2Od****`
     */
    "EntityId"?: string;
    /**
     * IdP的登录地址。
     * @example `https://dev-xxxxxx.okta.com/app/dev-xxxxxx_cloudssodemo_1/exk3qwgtjhetR2Od****​/sso/saml`
     */
    "LoginUrl"?: string;
    /**
     * 在用户访问云SSO登录页面发起SAML SSO时，是否要求云SSO发送签名的SAML请求。取值：
     * - true：要求云SSO发送签名的SAML请求。
     * - false（默认值）：不要求云SSO发送签名的SAML请求。
     * @example `false`
     */
    "WantRequestSigned"?: boolean;
    /**
     * PEM格式的X509证书。指定该参数会替换所有已经存在的证书。
     * @example `MIIC8DCCAdigAwIBAgIQP9eomUYGeoND****`
     */
    "X509Certificate"?: string;
}
