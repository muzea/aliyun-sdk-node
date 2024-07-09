export interface ChangePasswordRequest {
    /**
     * RAM用户的控制台登录旧密码。
     * @example `12****`
     */
    "OldPassword"?: string;
    /**
     * RAM用户的控制台登录新密码。
     * 密码必须符合密码强度要求。更多信息，请参见[SetPasswordPolicy](~~28739~~)。
     * @example `aw$2****`
     */
    "NewPassword"?: string;
}
