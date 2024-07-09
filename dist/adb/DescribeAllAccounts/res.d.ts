export interface DescribeAllAccountsResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 账号列表。
     */
    AccountList: {
        /**
         * 账号名。
         * @example `rdsdt_dts_adb`
         */
        User: string;
    }[];
}
