export interface DescribeAntChainAccountsV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 请求消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 账户信息
         */
        Accounts: {
            /**
             * 账户公钥
             * @example `2aa43bae103b6840ce8efdfe6f3fe5e52f8d1db0f44ff762df87ba17eb209979a0e22c934b2728c6c1bab864a6da52de60c5da89793bd839650a1a153e876e32`
             */
            AccountPublicKey: string;
            /**
             * 账户名
             * @example `test`
             */
            Account: string;
            /**
             * 账户恢复公钥
             * @example `5a36312d78681794258bb33372586c676adf150ad69e67dbfcaae61bba3607705950bc9efe1bf4a17ac24b05b1615a410e48d2a005dca251c6173495bb47ae29`
             */
            AccountRecoveryKey: string;
            /**
             * 状态
             * @example `NORMAL`
             */
            AccountStatus: string;
            /**
             * 区块链ID
             * @example `8bd720bde18c4b37b0f4a1c7834db163`
             */
            AntChainId: string;
        }[];
        /**
         * 分页信息
         */
        Pagination: {
            /**
             *
             * 每页数量
             * @example `10`
             */
            PageSize: number;
            /**
             * 当前页面编号，从1开始
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `100`
             */
            TotalCount: number;
        };
    };
}
