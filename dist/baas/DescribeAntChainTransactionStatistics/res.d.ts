export interface DescribeAntChainTransactionStatisticsResponse {
    /**
     * 请求ID
     * @example `E93884AC-6C21-4FEA-8E3A-7377D33B194F`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 时间
         * @example `2019-07-16`
         */
        Dt: string;
        /**
         * 创建时间
         * @example `1563294007000`
         */
        CreatTime: number;
        /**
         * 最后统计的区块高度
         * @example `148018`
         */
        LastSumBlockHeight: number;
        /**
         * 交易总量
         * @example `0`
         */
        TransCount: number;
        /**
         * 区块链ID
         * @example `pYogqb9v`
         */
        AntChainId: string;
    }[];
}
