export interface ListDatabaseAccountsForUserResponse {
    /**
     * 查询到的数据库账户列表。
     */
    DatabaseAccounts: {
        /**
         * 数据库账户ID。
         * @example `6`
         */
        DatabaseAccountId: string;
        /**
         * 数据库账户名。
         * @example `test`
         */
        DatabaseAccountName: string;
        /**
         * 数据库账号所属数据库实例ID。
         * @example `70`
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
     * @example `00E3701B-3616-55FE-93EC-E7CF5480B654`
     */
    RequestId: string;
    /**
     * 查询到的数据库账户总数量。
     * @example `3`
     */
    TotalCount: number;
}
