export interface CreateLoginProfileRequest {
    /**
     * 指定用户名。
     * @example `zhangq****`
     */
    "UserName"?: string;
    /**
     * 指定密码，密码必须符合密码强度要求。关于密码强度设置要求，请参见[GetPasswordPolicy](~~2337691~~)。
     * @example `mypassword`
     */
    "Password"?: string;
    /**
     * 指定用户在登录时是否需要修改密码。默认为`false`。
     * @example `false`
     */
    "PasswordResetRequired"?: boolean;
    /**
     * 指定用户在下次登录时是否必须绑定多因素认证器。默认为`false`。
     * @example `false`
     */
    "MFABindRequired"?: boolean;
}
