export interface DescribeAccountsResponse {
    /**
     * 请求ID。
     * @example `9BA1F8A4-12CC-4638-A7EC-D8FA2768D223`
     */
    RequestId: string;
    Accounts: {
        /**
         * 由账号信息组成的集合。
         */
        Account: {
            /**
             * 账号名。
             * @example `test`
             */
            Name: string;
        }[];
    };
}
