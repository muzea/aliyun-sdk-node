export interface GetPolicyUserScopeResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 控制策略生效的用户范围。
     */
    UserScope: {
        /**
         * 控制策略生效的用户范围。
         * > - 返回 **All** 时表示策略针对所有用户生效。
         * > - 返回空值表示策略对指定用户生效，具体生效范围为UserGroupIds和UserIds的返回值。
         * @example `All`
         */
        ScopeType: string;
        /**
         * 控制策略生效的用户组范围。
         */
        UserGroupIds: string[];
        /**
         * 控制策略生效的用户范围。
         */
        UserIds: string[];
    };
}
