export interface GetAuthenticatorResponse {
    /**
     * 请求ID
     * @example `123131312313`
     */
    RequestId: string;
    /**
     * 认证器对象
     */
    Authenticator: {
        /**
         * 认证器UUID
         * @example `你好！3132`
         */
        AuthenticatorUuid: string;
        /**
         * 创建认证器的Options
         * @example `1313`
         */
        CredentialId: string;
        /**
         * 认证器类型
         * @example `TOTP`
         */
        Type: string;
        /**
         * 认证器名字
         * @example `ceshi`
         */
        AuthenticatorName: string;
        /**
         * 注册时间
         * @example `1231313123`
         */
        RegisterTime: number;
        /**
         * 最后验证时间
         * @example `123123`
         */
        LastVerifyTime: number;
        /**
         * 用户注册IP
         * @example `127.0.0.1`
         */
        RegisterSourceIp: string;
        /**
         * 用户最后签名IP
         * @example `127.0.0.1`
         */
        LastVerifySourceIp: string;
        /**
         * 用户最后签名userAgent
         * @example `123123`
         */
        LastVerifyUserAgent: string;
        /**
         * 认证器
         * @example `123123`
         */
        CustomAuthenticator: string;
    };
}
