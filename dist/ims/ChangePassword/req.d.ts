export interface ChangePasswordRequest {
    /**
     * RAM用户的控制台登录旧密码。
     * @example `mypassword`
     */
    "OldPassword": string;
    /**
     * RAM用户的控制台登录新密码。
     * 密码必须符合密码强度要求。关于如何获取密码强度要求，请参见[GetPasswordPolicy](~~186691~~)。
     * @example `newpassword`
     */
    "NewPassword": string;
}
