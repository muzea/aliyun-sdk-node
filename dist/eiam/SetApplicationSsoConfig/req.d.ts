export interface SetApplicationSsoConfigRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * SAML协议的应用SSO属性配置参数。
     */
    "SamlSsoConfig"?: {
        /**
         * 应用（SP）的SAML断言消费地址。
         * @example `https://signin.aliyun.com/saml-role/sso`
         */
        SpSsoAcsUrl: string;
        /**
         * 应用（SP）的SAML的EntityId。
         * @example `urn:alibaba:cloudcomputing`
         */
        SpEntityId: string;
        /**
         * SAML协议标准的NameID格式，取值可选范围：
         * - urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified：未指定的，由应用自行决定解析NameID。
         * - urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress：Email地址格式。
         * - urn:oasis:names:tc:SAML:2.0:nameid-format:persistent：持久化的NameID。
         * - urn:oasis:names:tc:SAML:2.0:nameid-format:transient：瞬时的NameID。
         * @example `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`
         */
        NameIdFormat: string;
        /**
         * SAML协议的NameID真实取值生成表达式。
         * @example `user.email`
         */
        NameIdValueExpression: string;
        /**
         * 默认RelayState取值。当用户的单点登录SSO请求是由EIAM发起时，EIAM提供的SAML Response会指定RelayState为当前值。
         * @example `https://home.console.aliyun.com`
         */
        DefaultRelayState: string;
        /**
         * SAML断言签名算法。
         * @example `RSA-SHA256`
         */
        SignatureAlgorithm: string;
        /**
         * Response是否需要签名。ResponseSigned和AssertionSigned不能同时为false。
         * - true：需要签名。
         * - false：不需要签名。
         * @example `true`
         */
        ResponseSigned: boolean;
        /**
         * Assertion是否需要签名。ResponseSigned和AssertionSigned不能同时为false。
         * - true：需要签名。
         * - false：不需要签名。
         * @example `true`
         */
        AssertionSigned: boolean;
        /**
         * 在SAML断言中包含的额外用户属性配置。
         */
        AttributeStatements: {
            /**
             * SAML断言中属性的Name。
             * @example `https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName`
             */
            AttributeName: string;
            /**
             * SAML断言中的属性取值表达式。
             * @example `user.username`
             */
            AttributeValueExpression: string;
        }[];
    };
    /**
     * OIDC协议的应用SSO属性配置参数。
     */
    "OidcSsoConfig"?: {
        /**
         * 应用支持的RedirectUri列表。
         */
        RedirectUris: string[];
        /**
         * 应用支持Logout登出回调地址列表。
         */
        PostLogoutRedirectUris: string[];
        /**
         * 支持的OIDC协议授权模式列表。
         * @example `authorization_code`
         */
        GrantTypes: string[];
        /**
         * 当OidcSsoConfig.GrantTypes包含指定implicit隐式模式后，应用支持的返回类型。
         * @example `token id_token`
         */
        ResponseTypes: string[];
        /**
         * OIDC协议标准参数 scope，用于指定userinfo端点或者id_token可以返回的用户属性范围。
         * @example `profile，email`
         */
        GrantScopes: string[];
        /**
         * 密码模式是否强制需要TOTP二次认证，当且仅当OIDC协议应用指定的GrantTypes包含password模式才生效。
         * @example `true`
         */
        PasswordTotpMfaRequired: boolean;
        /**
         * 密码模式使用的身份认证源ID，当且仅当OIDC协议应用指定的GrantTypes包含password模式才生效。
         * @example `ia_password`
         */
        PasswordAuthenticationSourceId: string;
        /**
         * 应用SSO是否强制要求PKCE（RFC 7636）。
         * @example `true`
         */
        PkceRequired: boolean;
        /**
         * PKCE中计算Code Challenge的算法。
         * @example `S256`
         */
        PkceChallengeMethods: string[];
        /**
         * 签发的access token有效时间，单位为秒，默认1200秒（20分钟）。
         * @example `1200`
         */
        AccessTokenEffectiveTime: number;
        /**
         * 签发的code有效时间，单位为秒，默认为60秒（1分钟）。
         * @example `60`
         */
        CodeEffectiveTime: number;
        /**
         * 签发的id token有效时间，单位为秒，默认为300秒（5分钟）。
         * @example `300`
         */
        IdTokenEffectiveTime: number;
        /**
         * 签发的refresh token有效时间，单位为秒，默认为86400秒（1天）。
         * @example `86400`
         */
        RefreshTokenEffective: number;
        /**
         * 自定义id token返回包含的用户信息。
         */
        CustomClaims: {
            /**
             * 返回的claim名称。
             * @example `"Role"`
             */
            ClaimName: string;
            /**
             * 返回的claim取值表达式。
             * @example `user.dict.applicationRole`
             */
            ClaimValueExpression: string;
        }[];
        /**
         * 自定义id token返回的sub取值表达式。
         * @example `user.userid`
         */
        SubjectIdExpression: string;
    };
    /**
     * 初始化单点登录SSO方式，取值可选范围：
     * - only\_app\_init\_sso：仅应用发起SSO，OIDC协议应用默认取值。当SAML应用指定为该方式时，InitLoginUrl必须指定。
     * - idaas\_or\_app\_init\_sso：支持IDaaS门户或者应用发起SSO，SAML协议应用默认取值范围。当OIDC协议指定为该方式时，InitLoginUrl必须指定。
     * @example `only_app_init_sso`
     */
    "InitLoginType"?: string;
    /**
     * 初始化单点登录SSO触发地址。
     * 当OIDC协议类型应用设置InitLoginType为idaas\_or\_app\_init\_sso时，必须指定该参数。
     * 当SAML协议类型应用设置InitLoginType为only\_app\_init\_sso时，必须指定该参数。
     * @example `http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF`
     */
    "InitLoginUrl"?: string;
}
