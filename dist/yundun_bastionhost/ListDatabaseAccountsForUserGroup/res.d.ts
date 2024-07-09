export interface ListDatabaseAccountsForUserGroupResponse {
    /**
     * 查询到的数据库账户列表。
     */
    DatabaseAccounts: {
        /**
         * 数据库账户ID。
         * @example `4`
         */
        DatabaseAccountId: string;
        /**
         * 数据库账户名。
         * @example `root`
         */
        DatabaseAccountName: string;
        /**
         * 数据库账号所属数据库实例ID。
         * @example `11`
         */
        DatabaseId: string;
        /**
         * 数据库账户是否授权给当前用户。取值：
         * - **true**：已授权
         * - **false**：未授权
         * @example `true`
         */
        IsAuthorized: boolean;
        /**
         * 数据库账户的协议名称。取值：
         * - **MySQL**
         * - **Oracle**
         * - **PostgreSQL**
         * - **SQLServer**
         * @example `MySQL`
         */
        ProtocolName: string;
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的数据库账户总数量。
     * @example `10`
     */
    TotalCount: number;
}
