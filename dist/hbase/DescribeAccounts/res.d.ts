export interface DescribeAccountsResponse {
    /**
     * 请求ID。
     * @example `F744E939-D08D-5623-82C8-9D1F9F7*****`
     */
    RequestId: string;
    Accounts: {
        /**
         * 账号信息列表。
         */
        account: string[];
    };
}
