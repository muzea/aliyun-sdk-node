export interface UpdateLoginProfileRequest {
    /**
     * 指定RAM用户的登录名称。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName": string;
    /**
     * RAM用户的控制台登录新密码。
     * 密码必须符合密码强度要求。
     * @example `mypassword`
     */
    "Password"?: string;
    /**
     * RAM用户在下次登录时是否必须重置密码。取值：
     * - true
     * - false
     * @example `false`
     */
    "PasswordResetRequired"?: boolean;
    /**
     * 是否强制要求RAM用户开启多因素认证。取值：
     * - true：要求开启。RAM用户在下次登录时必须绑定多因素认证设备。
     * - false：不要求开启。
     * @example `false`
     */
    "MFABindRequired"?: boolean;
    /**
     * 开启或禁用控制台密码登录。取值：
     * - Active：开启。
     * - Inactive：禁用。
     * @example `Active`
     */
    "Status"?: string;
}
