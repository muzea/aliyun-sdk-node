export interface GetDatabaseAccountResponse {
    /**
     * 查询到的数据库账号信息。
     */
    DatabaseAccount: {
        /**
         * 数据库账户ID。
         * @example `9`
         */
        DatabaseAccountId: string;
        /**
         * 数据库账户名称。
         * @example `uac`
         */
        DatabaseAccountName: string;
        /**
         * 数据库名。当数据库为Postgres和Oracle时，DatabaseSchema有返回值。
         * @example `orcl`
         */
        DatabaseSchema: string;
        /**
         * 当前数据库账户是否设置了密码。<br>取值：
         * - true：已设置密码。
         * - false：未设置密码。
         * @example `true`
         */
        HasPassword: boolean;
        /**
         * 登录属性，Oracle类型数据库有返回值：
         * - SERVICENAME
         * - SID
         * @example `SID`
         */
        LoginAttribute: string;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `FA06D274-8D0A-59FB-8B7E-584C0EEBBFFF`
     */
    RequestId: string;
}
