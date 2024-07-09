export interface SetExternalSAMLIdentityProviderResponse {
    /**
     * 请求ID。
     * @example `63160579-2E1B-57B0-8273-B27427172385`
     */
    RequestId: string;
    /**
     * IdP配置信息。
     */
    SAMLIdentityProviderConfiguration: {
        /**
         * IdP标识。
         * @example `http://www.okta.com/exk3qwgtjhetR2Od****`
         */
        EntityId: string;
        /**
         * SSO登录的启用状态。取值：
         * - Enabled：启用。
         * - Disabled：禁用。
         * @example `Disabled`
         */
        SSOStatus: string;
        /**
         * 目录ID。
         * @example `d-00fc2p61****`
         */
        DirectoryId: string;
        /**
         * IdP元数据文档（Base64编码）。
         * @example `PD94bWwgdmVyc2lvbj0iMS4****`
         */
        EncodedMetadataDocument: string;
        /**
         * 首次配置IdP的时间。
         * @example `2021-11-10T02:57:16Z`
         */
        CreateTime: string;
        /**
         * 在用户访问云SSO登录页面发起SAML SSO时，是否要求云SSO发送签名的SAML请求。取值：
         * - true：要求云SSO发送签名的SAML请求。
         * - false（默认值）：不要求云SSO发送签名的SAML请求。
         * @example `false`
         */
        WantRequestSigned: boolean;
        /**
         * 最近一次修改IdP配置的时间。
         * @example `2021-11-10T02:57:16Z`
         */
        UpdateTime: string;
        /**
         * SAML签名证书ID。
         */
        CertificateIds: string[];
        /**
         * IdP的登录地址。
         * @example `https://dev-xxxxxx.okta.com/app/dev-xxxxxx_cloudssodemo_1/exk3qwgtjhetR2Od****​/sso/saml`
         */
        LoginUrl: string;
    };
}
