export interface SetPasswordPolicyRequest {
    /**
     * 最小密码长度。
     * 取值范围：8~32。默认值：8。
     * @example `8`
     */
    "MinimumPasswordLength"?: number;
    /**
     * 密码中是否必须包含小写字母。取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "RequireLowercaseCharacters"?: boolean;
    /**
     * 密码中是否必须包含大写字母。取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "RequireUppercaseCharacters"?: boolean;
    /**
     * 密码中是否必须包含数字。取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "RequireNumbers"?: boolean;
    /**
     * 密码中是否必须包含符号。取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "RequireSymbols"?: boolean;
    /**
     * 密码过期后是否限制登录。取值：
     * - true：密码过期后，不能登录控制台。需要通过主账号或具有管理员权限的RAM用户重置该RAM用户的密码后，才能正常登录。
     * - false（默认值）：密码过期后，RAM用户可以自行更改密码，然后正常登录。
     * @example `false`
     */
    "HardExpire"?: boolean;
    /**
     * 密码重试次数约束。连续输入错误密码达到设定次数后，账号将被锁定一小时。
     * 取值范围：0~32。
     * 默认值：0，表示不启用密码重试约束。
     * @example `0`
     */
    "MaxLoginAttemps"?: number;
    /**
     * 历史密码检查策略。
     * 禁止使用前N次的历史密码，N的取值范围：0~24。
     * 默认值：0，表示不启用历史密码检查策略。
     * @example `0`
     */
    "PasswordReusePrevention"?: number;
    /**
     * 密码有效期。
     * 取值范围：0~1095。单位：天。
     * 默认值：0，表示永不过期。
     * @example `0`
     */
    "MaxPasswordAge"?: number;
    /**
     * 密码中最少包含的不同字符数量。
     * 取值范围：0~8。
     * 默认值：0，表示不限制密码中的不同字符数量。
     * @example `0`
     */
    "MinimumPasswordDifferentCharacter"?: number;
    /**
     * 密码中是否不允许包含用户名。取值：
     * - true：密码中不能包含用户名。
     * - false（默认值）：密码中可以包含用户名。
     * @example `false`
     */
    "PasswordNotContainUserName"?: boolean;
}
