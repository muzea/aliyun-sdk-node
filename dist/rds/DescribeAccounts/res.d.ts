export interface DescribeAccountsResponse {
    /**
     * 超级权限账号是否启用，返回值如下：
     * - **True**：已启用
     * - **False**：未启用
     * > 仅SQL Server实例支持[超级权限账号](~~170736~~)，该参数有返回值。其他引擎实例的返回值为空。
     * @example `True`
     */
    SystemAdminAccountStatus: string;
    /**
     * 超级权限账号首次启用时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 仅SQL Server实例返回该参数。
     * @example `2023-10-17T07:51:22Z`
     */
    SystemAdminAccountFirstActivationTime: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `17F2EA6C-3CA2-528D-A263-DC29707AD652`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `3`
     */
    TotalRecordCount: number;
    Accounts: {
        /**
         * 账号信息列表。
         */
        DBInstanceAccount: {
            /**
             * 账号状态，返回值如下：
             * * **Unavailable**：不可用
             * * **Available**：可用
             * @example `Available`
             */
            AccountStatus: string;
            /**
             * 账号描述。
             * @example `测试数据库账号`
             */
            AccountDescription: string;
            /**
             * 账号所属实例ID。
             * @example `rm-bp1v6z81ho9******`
             */
            DBInstanceId: string;
            /**
             * 账号管理的数据库是否超过最大数量限制，返回值如下：
             * * **1**：是
             * * **0**：否
             * @example `0`
             */
            PrivExceeded: string;
            /**
             * 账号类型，返回值如下：
             * - **Normal**：普通账号
             * - **Super**：高权限账号
             * - **Sysadmin**：具备超级权限（SA）的账号（仅SQL Server支持）
             * @example `Normal`
             */
            AccountType: string;
            /**
             * 数据库账号名称。
             * @example `test1`
             */
            AccountName: string;
            DatabasePrivileges: {
                /**
                 * 账号拥有的数据库权限列表。
                 */
                DatabasePrivilege: {
                    /**
                     * 数据库名称。
                     * @example `test1`
                     */
                    DBName: string;
                    /**
                     * 账号的权限类型，返回值如下：
                     * * **ReadWrite**：读写
                     * * **ReadOnly**：只读
                     * * **DDLOnly**：仅DDL
                     * * **DMLOnly**：只DML
                     * * **Custom**：自定义（可以通过SQL命令修改）
                     * @example `ReadWrite`
                     */
                    AccountPrivilege: string;
                    /**
                     * 账号权限类型对应的具体权限。请参见[账号权限列表](~~146395~~)。
                     * @example `SELECT,INSERT`
                     */
                    AccountPrivilegeDetail: string;
                }[];
            };
            /**
             * 密码失效时间，返回值如下：
             * - **infinity**：永不过期。
             * - 返回为**空**：未设置。
             * - 返回**实际密码失效时间**。例如：2022-10-01T00:00:00Z，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）
             * > 仅PostgreSQL实例返回该参数。
             * @example `2022-10-01T00:00:00Z`
             */
            ValidUntil: string;
            /**
             * 是否拥有创建数据库权限，返回值如下：
             * - **t**：是
             * - **f**：否
             * > 仅PostgreSQL实例返回该参数。
             * @example `t`
             */
            CreateDB: string;
            /**
             * 是否拥有复制权限，返回值如下：
             * - **t**：是
             * - **f**：否
             * > 仅PostgreSQL实例返回该参数。
             * @example `t`
             */
            Replication: string;
            /**
             * 是否拥有创建角色权限，返回值如下：
             * - **t**：是
             * - **f**：否
             * > 仅PostgreSQL实例返回该参数。
             * @example `t`
             */
            CreateRole: string;
            /**
             * 是否拥有安全策略RLS权限，返回值如下：
             * - **t**：是
             * - **f**：否
             * > 仅PostgreSQL实例返回该参数。
             * @example `f`
             */
            BypassRLS: string;
        }[];
    };
}
