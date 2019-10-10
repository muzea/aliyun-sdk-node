interface SetSecurityPreferenceRequest {
    "RegionId"?: string;
    /**
    * 是否允许在用户在登录时保存多因素认证设备验证票据，目前票据有效期是七天。
    * @example `true`
    */ "EnableSaveMFATicket"?: boolean;
    /**
    * 是否允许用户修改自己的密码。
    * @example `true`
    */ "AllowUserToChangePassword"?: boolean;
    /**
    * 是否允许用户管理自己的访问密钥。
    * @example `false`
    */ "AllowUserToManageAccessKeys"?: boolean;
    /**
    * 是否允许用户管理自己的公钥。
    * @example `false`
    */ "AllowUserToManagePublicKeys"?: boolean;
    /**
    * 是否允许用户管理自己绑定或解绑多因素认证设备。
    * @example `true`
    */ "AllowUserToManageMFADevices"?: boolean;
    /**
    * 用户登录有效期，单位：小时。
    * @example `6`
    */ "LoginSessionDuration"?: number;
    /**
    * 登录掩码，默认空字符串，不限制登录IP。
    * @example `10.0.0.0/8`
    */ "LoginNetworkMasks"?: string;
}
export { SetSecurityPreferenceRequest };