export interface GetPasswordPolicyResponse {
    /**
     * 请求ID。
     * @example `B7C6E839-FB65-59BE-B753-003AA8AF7DF7`
     */
    RequestId: string;
    /**
     * 密码策略。
     */
    PasswordPolicy: {
        /**
         * 最小密码长度。
         * 取值范围：8~32。
         * @example `8`
         */
        MinPasswordLength: number;
        /**
         * 密码中最少包含的不同字符数量。
         * 最小值为0，表示不限制密码中的不同字符数量。最大值为`MinPasswordLength`设置的值。
         * @example `8`
         */
        MinPasswordDifferentChars: number;
        /**
         * 密码中是否不允许包含用户名。取值：
         * - true：密码中不允许包含用户名。
         * - false：密码中允许包含用户名。
         * @example `true`
         */
        PasswordNotContainUsername: boolean;
        /**
         * 密码有效期。
         * 取值范围：1~120。单位：天。
         * @example `90`
         */
        MaxPasswordAge: number;
        /**
         * 历史密码检查策略。
         * 禁止使用前N次的历史密码，N的取值范围：0~24，0表示不启用历史密码检查策略。
         * > 2024年1月5日之前修改的密码不计入历史密码。
         * @example `1`
         */
        PasswordReusePrevention: number;
        /**
         * 密码重试次数。
         * 连续输入错误密码达到设定次数后，账号将被锁定一小时。
         * 取值范围：0~32，0表示不限制密码重试次数。
         * @example `5`
         */
        MaxLoginAttempts: number;
        /**
         * 密码中是否需要有数字。取值：
         * - true：密码中需要有数字。
         * - false：密码中不需要有数字。
         * @example `true`
         */
        RequireNumbers: boolean;
        /**
         * 密码中是否需要有小写字母。取值：
         * - true：密码中需要有小写字母。
         * - false：密码中不需要有小写字母。
         * @example `true`
         */
        RequireLowerCaseChars: boolean;
        /**
         * 最大密码长度。
         * @example `32`
         */
        MaxPasswordLength: number;
        /**
         * 密码中是否需要有大写字母。取值：
         * - true：密码中需要有大写字母。
         * - false：密码中不需要有大写字母。
         * @example `true`
         */
        RequireUpperCaseChars: boolean;
        /**
         * 密码中是否需要有符号。取值：
         * - true：密码中需要有符号。
         * - false：密码中不需要有符号。
         * @example `true`
         */
        RequireSymbols: boolean;
        /**
         * 密码过期后是否限制登录。取值：
         * - true：密码过期后限制登录。
         * - false：密码过期后不限制登录。
         * @example `true`
         */
        HardExpire: boolean;
    };
}
