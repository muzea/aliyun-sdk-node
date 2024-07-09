export interface DescribeAccountsResponse {
    /**
     * 请求ID。
     * @example `7565770E-7C45-462D-BA4A-8A5396F2CAD1`
     */
    RequestId: string;
    Accounts: {
        /**
         * 数据库账号的信息。
         */
        DBInstanceAccount: {
            /**
             * 数据库账号的状态，取值说明：
             * - **0**：创建中。
             * - **1**：使用中。
             * - **3**：删除中。
             * @example `1`
             */
            AccountStatus: string;
            /**
             * 数据库账号的描述。
             * @example `testuser`
             */
            AccountDescription: string;
            /**
             * 实例ID。
             * @example `gp-bp***************`
             */
            DBInstanceId: string;
            /**
             * 数据库账号的名称。
             * @example `testuser`
             */
            AccountName: string;
        }[];
    };
}
