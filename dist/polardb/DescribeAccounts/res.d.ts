export interface DescribeAccountsResponse {
    /**
     * 本页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `155462B9-205F-4FFC-BB43-4855FE******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 账号信息详情。
     */
    Accounts: {
        /**
         * 账号状态。取值范围：
         * - **Creating**：创建中。
         * - **Available**：可用。
         * - **Deleting**：删除中。
         * @example `Available`
         */
        AccountStatus: string;
        /**
         * 目标账号拥有的数据库权限详情。
         */
        DatabasePrivileges: {
            /**
             * 数据库名称。
             * @example `DBtest`
             */
            DBName: string;
            /**
             * 账号权限。
             * @example `ReadOnly`
             */
            AccountPrivilege: string;
        }[];
        /**
         * 账号备注。
         * @example `test`
         */
        AccountDescription: string;
        /**
         * 密码过期时间。
         * @example `undefined`
         */
        AccountPasswordValidTime: string;
        /**
         * 账户类型。取值范围：
         * - **Normal**：普通账号。
         * - **Super**：高权限账号。
         * @example `Normal`
         */
        AccountType: string;
        /**
         * 账号锁定状态。取值范围：
         * - **UnLock**：未锁定。
         * - **Lock**：锁定。
         * @example `UnLock`
         */
        AccountLockState: string;
        /**
         * 账号名。
         * @example `test_acc`
         */
        AccountName: string;
    }[];
}
