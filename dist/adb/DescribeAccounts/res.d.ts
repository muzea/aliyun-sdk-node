export interface DescribeAccountsResponse {
    /**
     * 请求ID。
     * @example `9CCFAAB4-97B7-5800-B9F2-685EB596E3EF`
     */
    RequestId: string;
    AccountList: {
        /**
         * 账号列表。
         */
        DBAccount: {
            /**
             * 账号状态。取值说明：
             * - **Creating**：创建中。
             * - **Available**：可用。
             * - **Deleting**：删除中。
             * @example `Available`
             */
            AccountStatus: string;
            /**
             * 账号描述。
             * @example `C@test`
             */
            AccountDescription: string;
            /**
             * 账号类型，取值说明：
             * - **Normal**：普通账号。
             * - **Super**：高权限账号。
             * @example `Super`
             */
            AccountType: string;
            /**
             * 数据库账号名称。
             * @example `adb_user1`
             */
            AccountName: string;
        }[];
    };
}
