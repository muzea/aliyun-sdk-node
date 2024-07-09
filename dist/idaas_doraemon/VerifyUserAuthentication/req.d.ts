export interface VerifyUserAuthenticationRequest {
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
     * 认证上下文，由AuthenticatorType决定格式
     * @example `{}`
     */
    "AuthenticationContext": string;
    /**
     * 会话绑定的challenge base64标识
     * @example `AAAAdda`
     */
    "RequireChallengeBase64"?: string;
    /**
     * 认证绑定的操作hash base64标识
     * @example `AAAAdda`
     */
    "RequireBindHashBase64"?: string;
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
     * 用户端来源IP地址，用于审计
     * @example `127.0.0.1`
     */
    "UserSourceIp"?: string;
    /**
     * 用户自定义记录审计日志标签
     * @example `login`
     */
    "LogTag"?: string;
    /**
     * 用户自定义记录审计日志信息
     * @example `123123`
     */
    "LogParams"?: string;
}
