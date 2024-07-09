export interface UpdateLoginProfileRequest {
    /**
     * 指定用户名。
     * @example `zhangq****`
     */
    "UserName"?: string;
    /**
     * 指定密码，密码必须符合云账号的密码强度要求。
     * @example `mypassword`
     */
    "Password"?: string;
    /**
     * 指定用户在登录时是否需要修改密码。
     * @example `true`
     */
    "PasswordResetRequired"?: boolean;
    /**
     * 指定用户在下次登录时是否必须绑定多因素认证设备。
     * @example `true`
     */
    "MFABindRequired"?: boolean;
}
