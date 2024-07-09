export interface CreateAuthenticatorRegistrationRequest {
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
     * 用户姓名
     * @example `ZhangSan`
     */
    "UserName"?: string;
    /**
     * 用户展示名
     * @example `张三`
     */
    "UserDisplayName"?: string;
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
    /**
     * 注册上下文
     * @example `注册上下文`
     */
    "RegistrationContext"?: string;
}
