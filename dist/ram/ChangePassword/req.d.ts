interface ChangePasswordRequest {
    "RegionId"?: string;
    /**
    * 旧密码。
    * @example `12****`
    */ "OldPassword"?: string;
    /**
    * 指定密码，密码必须符合密码强度要求。
    * 关于密码强度设置接口，请参考 [SetPasswordPolicy](~~28739~~)。
    * @example `aw$2****`
    */ "NewPassword"?: string;
}
export { ChangePasswordRequest };