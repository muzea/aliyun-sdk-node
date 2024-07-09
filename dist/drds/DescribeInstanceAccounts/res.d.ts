export interface DescribeInstanceAccountsResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `E2E4056D-57EB-4353-8355-2E6284******`
     */
    RequestId: string;
    InstanceAccounts: {
        /**
         * 实例账号列表。
         */
        InstanceAccount: {
            /**
             * 可以访问数据库的IP地址。<note>**%**表示任何IP地址都能访问。</note>
             * @example `%`
             */
            Host: string;
            /**
             * 账号备注。高级账号默认为**Created by DRDS**，普通账号无任何备注。备注信息可以在账号管理中自定义修改。
             * @example `Created by DRDS`
             */
            Description: string;
            /**
             * 账号类型。
             * - **0**表示高级账号。
             * - **1**表示普通账号。
             * @example `1`
             */
            AccountType: number;
            /**
             * 账号名称。
             * @example `test_rds3`
             */
            AccountName: string;
            DbPrivileges: {
                /**
                 * 数据库权限信息。
                 */
                DbPrivilege: {
                    /**
                     * 数据库名称。
                     * @example `test_rds3`
                     */
                    DbName: string;
                    /**
                     * 账号权限。
                     * - **R**：读权限。
                     * - **W**：写权限。
                     * - **DDL**：执行DDL操作的权限。
                     * - **DML**：执行DML操作的权限。
                     * @example `R`
                     */
                    Privilege: string;
                }[];
            };
        }[];
    };
}
