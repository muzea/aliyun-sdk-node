export interface SetApplicationProvisioningConfigRequest {
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
     * 账户同步协议类型，取值可选范围：
     * - idaas\_callback：IDaaS自定义事件回调账号同步方式。
     * - scim2：SCIM协议同步方式。
     * @example `idaas_callback`
     */
    "ProvisionProtocolType": string;
    /**
     * 应用事件回调同步配置，当ProvisionProtocolType为idaas\_callback时，必须填写。
     */
    "CallbackProvisioningConfig"?: {
        /**
         * 应用接收IDaaS事件回调的目标地址。
         * @example `https://example.com/event/callback`
         */
        CallbackUrl: string;
        /**
         * IDaaS事件回调对称加解密密钥，AES256算法类型密钥，Hex编码格式。
         * @example `ad3b248**************************b3561a73d7`
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
     * IDaaS SCIM协议同步配置参数。当ProvisionProtocolType为scim2时，必须填写。
     */
    "ScimProvisioningConfig"?: {
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
             * - 当GrantType为client\_credentials时， 可以更新ClientId，ClientSecret，AuthnMethod。
             * - 当GrantType为bearer\_token时，可以更新AccessToken。
             */
            AuthnParam: {
                /**
                 * 访问令牌。bearer\_token密钥模式时可以更新该字段。
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
                 * @example `CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx`
                 */
                ClientSecret: string;
                /**
                 * SCIM协议认证模式， 返回值包括如下：
                 * - client\_secret\_basic：通过请求Header传递密钥。
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
     * IDaaS用户事件回调是否同步密码，取值可选范围：
     * - true：同步密码。
     * - false：不同步密码。
     * @example `true`
     */
    "ProvisionPassword"?: boolean;
}
