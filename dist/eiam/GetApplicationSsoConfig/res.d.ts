export interface GetApplicationSsoConfigResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 应用单点登录SSO配置信息。
     */
    ApplicationSsoConfig: {
        /**
         * SAML协议的应用SSO属性配置参数。当且仅当应用SSO协议为SAML 2.0时返回。
         */
        SamlSsoConfig: {
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
             * @example `user.username`
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
         * OIDC协议的应用SSO属性配置参数。当且仅当应用SSO协议为OIDC类型时返回。
         */
        OidcSsoConfig: {
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
             *
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
             * @example `1200`
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
                 * @example `userOuIds`
                 */
                ClaimName: string;
                /**
                 * 返回的claim取值表达式。
                 * @example `ObjectToJsonString(user.organizationalUnits)`
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
         * 应用提供的Metadata 端点配置信息。
         */
        ProtocolEndpointDomain: {
            /**
             * SAML协议AuthnRequest请求接受地址。当且仅当应用SSO协议为SAML 2.0时返回。
             * @example `https://l1seshcn.aliyunidaas.com/login/app/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/sso`
             */
            SamlSsoEndpoint: string;
            /**
             * SAML协议的Metadata元数据地址。当且仅当应用SSO协议为SAML 2.0时返回。
             * @example `https://l1seshcn.aliyunidaas.com/api/v2/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/meta`
             */
            SamlMetaEndpoint: string;
            /**
             * OIDC issuer信息。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc`
             */
            OidcIssuer: string;
            /**
             * OIDC jwks地址。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc/jwks`
             */
            OidcJwksEndpoint: string;
            /**
             * oAuth2 授权端点。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/authorize`
             */
            Oauth2AuthorizationEndpoint: string;
            /**
             * oAuth2 Token吊销端点。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/revoke`
             */
            Oauth2RevokeEndpoint: string;
            /**
             * oAuth2 Token端点。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/token`
             */
            Oauth2TokenEndpoint: string;
            /**
             * oAuth2 Device 授权端点。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/device/code`
             */
            Oauth2DeviceAuthorizationEndpoint: string;
            /**
             * OIDC 获取用户信息端点。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/userinfo`
             */
            Oauth2UserinfoEndpoint: string;
            /**
             * OIDC RP-initiated Logout Endpoint。当且仅当应用SSO协议为OIDC类型时返回。
             * @example `https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/logout`
             */
            OidcLogoutEndpoint: string;
        };
        /**
         * 应用 SSO 功能启用状态，取值可选范围：
         * - enabled：应用中。
         * - disabled：禁用中。
         * @example `enabled`
         */
        SsoStatus: string;
        /**
         * 初始化单点登录SSO方式，取值可选范围：
         * - only\_app\_init\_sso：仅应用发起SSO，OIDC协议应用默认取值。当SAML应用指定为该方式时，InitLoginUrl必须指定。
         * - idaas\_or\_app\_init\_sso：支持IDaaS门户或者应用发起SSO，SAML协议应用默认取值范围。当OIDC协议指定为该方式时，InitLoginUrl必须指定。
         * @example `only_app_init_sso`
         */
        InitLoginType: string;
        /**
         * 初始化单点登录SSO触发地址，当OIDC协议应用InitLoginType为idaas\_or\_app\_init\_sso，必须指定；当SAML协议应用InitLoginType为only\_app\_init\_sso时，必须指定。
         * @example `http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF`
         */
        InitLoginUrl: string;
    };
}
