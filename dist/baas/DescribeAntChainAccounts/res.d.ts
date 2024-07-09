export interface DescribeAntChainAccountsResponse {
    /**
     * 请求ID
     * @example `1692940F-87C5-468F-8188-6C95FC05BBA5`
     */
    RequestId: string;
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
             * @example `de44334f1094cbd37e952ef691a837f36eab2e9afdf6bed9bf523c2dde40ff7b1ff526ec11b510d320f536685f75dd90f67fda8d41a69738a76a77c27b1373fb`
             */
            AccountPublicKey: string;
            /**
             * 账户名
             * @example `账户名`
             */
            Account: string;
            /**
             * 账户恢复公钥
             * @example `ee54a9c4511345f2de05889540eedb8dfed7b57ab0647c5894e4333596bc2ecef07a0469331d016ad9978b39367a0a5c217ef92ffffcbd6716db6667353891a9`
             */
            AccountRecoveryKey: string;
            /**
             * 状态
             * @example `NORMAL`
             */
            AccountStatus: string;
            /**
             * 区块链ID
             * @example `pYogqb9v`
             */
            AntChainId: string;
        }[];
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 每页数量
             * @example `10`
             */
            PageSize: number;
            /**
             * 当前页面编号
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `1`
             */
            TotalCount: number;
        };
    };
}
