export interface CreateUserAuthenticateOptionsRequest {
    /**
     * 应用外部Id
     * @example `11122223333`
     */
    "ApplicationExternalId": string;
    /**
     * 认证器类型
     * @example `webauthn`
     */
    "AuthenticatorType": string;
    /**
     * 用户id
     * @example `user-11122223333`
     */
    "UserId": string;
    /**
     * 操作hash，用来和认证绑定
     * @example `1111222`
     */
    "BindHashBase64"?: string;
    /**
     * 客户端SDK生成认证上下文
     * @example `由具体认证方式决定`
     */
    "ClientExtendParamsJson"?: string;
    /**
     * 客户端SDK生成认证上下文签名信息
     * @example `由具体认证方式决定`
     */
    "ClientExtendParamsJsonSign"?: string;
    /**
     * 服务端配置项，决定认证要求属性
     * @example `由具体认证方式决定`
     */
    "ServerExtendParamsJson"?: string;
}
