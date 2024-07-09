export interface GetApplicationProvisioningConfigResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 应用的账户同步功能配置。
     */
    ApplicationProvisioningConfig: {
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
        /**
         * 应用ID。
         * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
         */
        ApplicationId: string;
        /**
         * 应用同步协议类型，取值范围可选：
         * - idaas_callback ： IDaaS自定义事件回调协议。
         * - scim2: SCIM协议。
         * @example `idaas_callback`
         */
        ProvisionProtocolType: string;
        /**
         * 应用同步回调信息验签公钥端点。
         * @example `https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk267xxxxx/app_mkv7rgt4d7i4u7zqtzev2mxxxx/provisioning/jwks`
         */
        ProvisionJwksEndpoint: string;
        /**
         * IDaaS自定义事件回调协议配置参数。
         */
        CallbackProvisioningConfig: {
            /**
             * 应用接受IDaaS事件回调的目标地址。
             * @example `https://example.com/event/callback`
             */
            CallbackUrl: string;
            /**
             * IDaaS事件回调对称加解密密钥，AES256算法类型密钥，Hex编码格式。
             * @example `1adfdfdfd******111`
             */
            EncryptKey: string;
            /**
             * IDaaS事件回调消息是否加密，取值可选范围：
             * - true：加密。
             * - false：不加密，明文传递。
             * @example `true`
             */
            EncryptRequired: boolean;
            /**
             * IDaaS事件回调监听消息类型列表。
             */
            ListenEventScopes: string[];
        };
        /**
         * IDaaS用户事件回调是否同步密码，取值可选范围：
         * - true：同步密码。
         * - false：不同步密码。
         * @example `true`
         */
        ProvisionPassword: boolean;
        /**
         * IDaaS SCIM协议同步配置参数。
         */
        ScimProvisioningConfig: {
            /**
             * 应用接受IDaaS同步SCIM协议的Base地址。
             * @example `https://example.com/scim`
             */
            ScimBaseUrl: string;
            /**
             * SCIM协议同步相关配置参数。
             */
            AuthnConfiguration: {
                /**
                 * SCIM协议接口授权模式。取值可选范围：
                 * - oauth2：OAuth2模式。
                 * @example `oauth2`
                 */
                AuthnMode: string;
                /**
                 * SCIM协议授权模式。取值可选范围：
                 * - client\_credentials：客户端模式。
                 * - bearer\_token：密钥模式。
                 * @example `bearer_token`
                 */
                GrantType: string;
                /**
                 * 授权相关配置参数。使用方式如下：
                 * - 当GrantType为client\_credentials时， 需要填写ClientId, ClientSecret, AuthnMethod。
                 * - 当GrantType为bearer\_token时，需要填写AccessToken。
                 */
                AuthnParam: {
                    /**
                     * 访问令牌。bearer\_token密钥模式时需要填写该字段。
                     * @example `k52x2ru63rlkflina5utgkxxxx`
                     */
                    AccessToken: string;
                    /**
                     * 令牌端点。
                     * @example `https://www.example.com/oauth/token`
                     */
                    TokenEndpoint: string;
                    /**
                     * 应用的客户端ID。
                     * @example `mkv7rgt4d7i4u7zqtzev2mxxxx`
                     */
                    ClientId: string;
                    /**
                     * 应用的客户端密钥secret。
                     * @example `CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
                    `
                     */
                    ClientSecret: string;
                    /**
                     * SCIM协议认证模式， 取值可选范围：
                     * - client\_secret\_basic： 通过请求Header传递密钥。
                     * - client\_secret\_post：通过请求body传递密钥。
                     * @example `client_secret_basic`
                     */
                    AuthnMethod: string;
                };
            };
            /**
             * SCIM协议目标资源操作行为。取值可选范围：
             * - urn:alibaba:idaas:app:scim:User:CREATE 账户创建
             * - urn:alibaba:idaas:app:scim:User:UPDATE 账户更新
             * - urn:alibaba:idaas:app:scim:User:DELETE 账户删除
             */
            ProvisioningActions: string[];
            /**
             * SCIM协议全量推送范围。取值可选范围：
             * - urn:alibaba:idaas:app:scim:User:PUSH 用户全量同步。
             */
            FullPushScopes: string[];
        };
        /**
         * IDaaS账户同步功能启用状态，取值可选范围：
         * - enabled：启用中。
         * - disabled：禁用中。
         * @example `enabled`
         */
        Status: string;
        /**
         * 账户同步页面渲染方式， 取值可选范围：
         * - standard：标准模式。
         * - template：模版模式。
         * @example `standard`
         */
        ConfigOperateMode: string;
    };
}
