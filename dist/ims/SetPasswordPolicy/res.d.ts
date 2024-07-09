export interface SetPasswordPolicyResponse {
    /**
     * 请求ID。
     * @example `3FB5551F-B2ED-40D4-8392-1E4AC2384EFD`
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
