export interface RegisterAuthenticatorResponse {
    /**
     * 请求ID
     * @example `23123`
     */
    RequestId: string;
    /**
     * 认证器UUID
     * @example `123123123`
     */
    AuthenticatorUuid: string;
    /**
     * 仅IFAA认证器注册返回
     */
    EtasResponseSting: string;
}
