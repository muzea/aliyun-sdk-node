export interface ListOperationDatabaseAccountsResponse {
    /**
     * 查询到的数据库账户列表。
     */
    DatabaseAccounts: {
        /**
         * PostgreSQL和Oracle对应的数据库名。
         * @example `xe`
         */
        DBName: string;
        /**
         * 数据库账号ID。
         * @example `3`
         */
        DatabaseAccountId: string;
        /**
         * 数据库账号名称。
         * @example `system`
         */
        DatabaseAccountName: string;
        /**
         * 数据库实例ID。
         * @example `2`
         */
        DatabaseId: string;
        /**
         * 数据库主机账户是否设置密码。
         * @example `true`
         */
        HasPassword: string;
        /**
         * 登录属性，Oracle类型数据库有返回值：
         * - **SERVICENAME**
         * - **SID**
         * @example `SID`
         */
        LoginAttribute: string;
        /**
         * 数据库账户的协议名称。
         * @example `MySQL`
         */
        ProtocolName: string;
    }[];
    /**
     * 本次请求的ID。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的可运维数据库账户总数量。
     * @example `5`
     */
    TotalCount: number;
}
