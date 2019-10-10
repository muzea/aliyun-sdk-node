interface SetPasswordPolicyRequest {
    "RegionId"?: string;
    /**
    * 最小密码长度。
    * @example `12`
    */ "MinimumPasswordLength"?: number;
    /**
    * 必须含有小写字母。
    * @example `true`
    */ "RequireLowercaseCharacters"?: boolean;
    /**
    * 必须含有大写字母。
    * @example `true`
    */ "RequireUppercaseCharacters"?: boolean;
    /**
    * 必须含有数字。
    * @example `true`
    */ "RequireNumbers"?: boolean;
    /**
    * 必须含有特殊字符。
    * @example `true`
    */ "RequireSymbols"?: boolean;
    /**
    * 密码是否过期。
    * 取值为`true`或`false`，如果未指定此参数的值，系统默认为`false`。
    * - 如果取值为`true`，此时必须由主账号重置密码后，RAM用户才能正常登录。
    * - 如果取值为`false`，此时RAM用户可以在密码过期后自行更改密码，并继续以用户身份登录。
    * @example `false`
    */ "HardExpiry"?: boolean;
    /**
    * 密码有效期，单位是天（重置密码将重置密码过期时间）。0表示不启用密码过期策略，默认不启用。
    * @example `0`
    */ "MaxPasswordAge"?: number;
    /**
    * 禁止使用前N次密码。0表示不启用历史密码检查策略，默认不启用。
    * @example `0`
    */ "PasswordReusePrevention"?: number;
    /**
    * 一小时内使用错误密码尝试登录最大次数（重置密码可清除尝试登录计数）。
    * @example `5`
    */ "MaxLoginAttemps"?: number;
}
export { SetPasswordPolicyRequest };