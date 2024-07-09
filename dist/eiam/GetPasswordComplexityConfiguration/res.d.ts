export interface GetPasswordComplexityConfigurationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 密码复杂度策略配置。
     */
    PasswordComplexityConfiguration: {
        /**
         * 密码最短长度。
         * @example `3`
         */
        PasswordMinLength: number;
        /**
         * 密码复杂度规则列表。
         */
        PasswordComplexityRules: {
            /**
             * 密码检查类型，取值可选范围：
             * - inclusion\_upper\_case：包含英文大写字母。
             * - inclusion\_lower\_case：包含英文小写字母。
             * - inclusion\_special\_case：包含特殊字符 ( @ % + \ / ' ! # $ ^ ? : , ( ) { } [ ] ~ - _ . )。
             * - inclusion\_number：包含数字。
             * - exclusion\_username：不能包含账户名。
             * - exclusion\_email：不能包含邮箱。
             * - exclusion\_phone\_number：不能包含手机号。
             * - exclusion\_display\_name：不能包含显示名。
             * @example `inclusion_upper_case`
             */
            PasswordCheckType: string;
        }[];
    };
}
