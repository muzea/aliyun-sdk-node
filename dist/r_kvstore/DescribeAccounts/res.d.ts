export interface DescribeAccountsResponse {
    /**
     * 请求ID。
     * @example `6C9E114C-217C-4118-83C0-B4070222****`
     */
    RequestId: string;
    Accounts: {
        /**
         * Redis实例的账号信息列表。
         */
        Account: {
            /**
             * 账号备注信息。
             * @example `testdec`
             */
            AccountDescription: string;
            /**
             * 实例ID。
             * @example `r-bp10noxlhcoim2****`
             */
            InstanceId: string;
            /**
             * 账号类型，返回值：
             * * **Normal**：普通账号。
             * * **Super**：超级账号。
             * @example `Normal`
             */
            AccountType: string;
            /**
             * 账号状态，返回值：
             * * **Unavailable**：不可用。
             * * **Available**：可用。
             * @example `Available`
             */
            AccountStatus: string;
            /**
             * 账号名称。
             * @example `demoaccount`
             */
            AccountName: string;
            DatabasePrivileges: {
                /**
                 * 账号权限列表。
                 */
                DatabasePrivilege: {
                    /**
                     * 账号权限，返回值：
                     * * **RoleReadOnly**：只读权限。
                     * * **RoleReadWrite**：读写权限，默认值。
                     * @example `RoleReadWrite`
                     */
                    AccountPrivilege: string;
                }[];
            };
        }[];
    };
}
