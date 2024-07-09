export interface GetPolicyAssetScopeResponse {
    /**
     * 控制策略生效的资产范围。
     */
    AssetScope: {
        /**
         * 控制策略生效的数据库资产列表。
         */
        Databases: {
            /**
             * 控制策略生效的数据库账户范围。取值：
             * - **All**：针对数据库中的所有账户生效
             * - **AccountId**：针对数据库中指定的账户生效
             * @example `AccountId`
             */
            AccountScopeType: string;
            /**
             * 控制策略生效的数据库账户ID列表。
             */
            DatabaseAccountIds: string[];
            /**
             * 数据库实例ID。
             * @example `17`
             */
            DatabaseId: string;
        }[];
        /**
         * 控制策略生效的资产组范围。
         */
        HostGroups: {
            /**
             * 控制策略生效的资产账户范围。
             */
            AccountNames: string[];
            /**
             * 控制策略生效的资产账户范围。取值：
             * - **All**：针对资产组中的所有账户生效
             * - **AccountName**：针对资产组中指定的账户生效
             * @example `All`
             */
            AccountScopeType: string;
            /**
             * 资产组ID。
             * @example `4`
             */
            HostGroupId: string;
        }[];
        /**
         * 控制策略生效的主机范围。
         */
        Hosts: {
            /**
             * 控制策略生效的主机账户范围。取值：
             * - **All**：针对主机中的所有账户生效
             * - **AccountId**：针对主机中指定的账户生效
             * @example `All`
             */
            AccountScopeType: string;
            /**
             * 控制策略生效的主机账户范围。
             */
            HostAccountIds: string[];
            /**
             * 主机ID。
             * @example `1`
             */
            HostId: string;
        }[];
        /**
         * 控制策略生效的资产范围。
         * > - 返回**All**时表示控制策略针对所有资产生效。
         * > - 返回空值表示策略对指定资产生效，具体生效范围为Databases、HostGroups和Hosts的返回值。
         * @example `All`
         */
        ScopeType: string;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
}
