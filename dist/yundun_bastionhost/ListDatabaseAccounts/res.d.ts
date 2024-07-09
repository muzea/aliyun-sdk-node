export interface ListDatabaseAccountsResponse {
    /**
     * 查询到的数据库账户列表。
     */
    DatabaseAccounts: {
        /**
         * 数据库账户ID。
         * @example `59`
         */
        DatabaseAccountId: string;
        /**
         * 数据库账户名。
         * @example `test`
         */
        DatabaseAccountName: string;
        /**
         * 数据库实例ID。
         * @example `4`
         */
        DatabaseId: string;
        /**
         * 数据库名。当DatabaseId对应的Database为Postgres和Oracle时，DatabaseSchema有返回值。
         * @example `orcl`
         */
        DatabaseSchema: string;
        /**
         * 数据库账户是否设置密码。取值：
         * - **true**：已设置密码。
         * - **false**：未设置密码。
         * @example `true`
         */
        HasPassword: string;
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4F6C075F-FC86-476E-943B-097BD4E12948`
     */
    RequestId: string;
    /**
     * 查询到的数据库账户总数量。
     * @example `10`
     */
    TotalCount: number;
}
