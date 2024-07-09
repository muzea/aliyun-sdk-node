export interface GetRuleResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 授权规则信息。
     */
    Rule: {
        /**
         * 授权规则备注。
         * @example `comment`
         */
        Comment: string;
        /**
         * 已授权的数据库信息。
         */
        Databases: {
            /**
             * 已授权数据库账户信息。
             */
            DatabaseAccounts: {
                /**
                 * 已授权的数据库账户ID。
                 * @example `5`
                 */
                DatabaseAccountId: string;
            }[];
            /**
             * 已授权的数据库实例ID。
             * @example `2`
             */
            DatabaseId: string;
        }[];
        /**
         * 授权规则有效期结束时间（秒，时间戳格式）。
         * @example `1698720972`
         */
        EffectiveEndTime: string;
        /**
         * 授权规则有效期开始时间（秒，时间戳格式）。
         * @example `1687140883`
         */
        EffectiveStartTime: string;
        /**
         * 已授权的资产组列表。
         */
        HostGroups: {
            /**
             * 已授权资产账户信息。
             */
            HostAccountNames: string[];
            /**
             * 已授权的资产组ID。
             * @example `7`
             */
            HostGroupId: string;
        }[];
        /**
         * 已授权的主机信息。
         */
        Hosts: {
            /**
             * 已授权的主机账户列表。
             */
            HostAccounts: {
                /**
                 * 已授权的主机账户ID。
                 * @example `9`
                 */
                HostAccountId: string;
            }[];
            /**
             * 已授权的主机ID。
             * @example `52`
             */
            HostId: string;
        }[];
        /**
         * 授权规则ID。
         * @example `3`
         */
        RuleId: string;
        /**
         * 授权规则名称。
         * @example `rule`
         */
        RuleName: string;
        /**
         * 已授权的用户组列表。
         */
        UserGroups: {
            /**
             * 已授权的用户组ID。
             * @example `2`
             */
            UserGroupId: string;
        }[];
        /**
         * 已授权的用户列表。
         */
        Users: {
            /**
             * 已授权的用户ID。
             * @example `3`
             */
            UserId: string;
        }[];
    };
}
