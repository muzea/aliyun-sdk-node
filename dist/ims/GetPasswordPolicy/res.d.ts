export interface GetPasswordPolicyResponse {
    /**
     * 请求ID。
     * @example `BDAA8408-E67C-428B-BFF0-1B2AC05C9610`
     */
    RequestId: string;
    /**
     * 密码强度策略信息。
     */
    PasswordPolicy: {
        /**
         * 密码中是否必须包含数字。
         * @example `false`
         */
        RequireNumbers: boolean;
        /**
         * 密码中是否必须包含小写字母。
         * @example `false`
         */
        RequireLowercaseCharacters: boolean;
        /**
         * 历史密码检查策略。
         * @example `0`
         */
        PasswordReusePrevention: number;
        /**
         * 密码中是否必须包含符号。
         * @example `false`
         */
        RequireSymbols: boolean;
        /**
         * 密码中是否不允许包含用户名。
         * @example `false`
         */
        PasswordNotContainUserName: boolean;
        /**
         * 密码中最少包含的不同字符数量。
         * @example `0`
         */
        MinimumPasswordDifferentCharacter: number;
        /**
         * 密码有效期。
         * @example `0`
         */
        MaxPasswordAge: number;
        /**
         * 密码过期后是否限制登录。
         * @example `false`
         */
        HardExpire: boolean;
        /**
         * 最小密码长度。
         * @example `8`
         */
        MinimumPasswordLength: number;
        /**
         * 密码中是否必须包含大写字母。
         * @example `false`
         */
        RequireUppercaseCharacters: boolean;
        /**
         * 密码重试次数约束。
         * @example `0`
         */
        MaxLoginAttemps: number;
    };
}
