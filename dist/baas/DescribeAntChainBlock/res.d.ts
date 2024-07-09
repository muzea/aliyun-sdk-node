export interface DescribeAntChainBlockResponse {
    /**
     * 请求ID
     * @example `4DDA2E72-778A-4D79-BE70-448A26A57227`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 前一个区块链哈希
         * @example `e11767c7b9d92563663a76f10c69e8354788001e2c9e6bd9267239a81d3bb523`
         */
        PreviousHash: string;
        /**
         * 区块版本
         * @example `2`
         */
        Version: number;
        /**
         * 交易数
         * @example `0`
         */
        TransactionSize: number;
        /**
         * 创建时间
         * @example `1562851727742`
         */
        CreateTime: number;
        /**
         * 根交易哈希
         * @example `0000000000000000000000000000000000000000000000000000000000000000`
         */
        RootTxHash: string;
        /**
         * 区块高度
         * @example `1234`
         */
        Height: number;
        /**
         * 区块哈希
         * @example `aeec5963f8deeeae820aaf302f0c925db9fa8d07b9898dac782335f817554e47`
         */
        BlockHash: string;
        /**
         * 区块链ID
         * @example `pYogqb9v`
         */
        AntChainId: string;
        /**
         * 交易列表
         * @example `[]`
         */
        TransSummaryList: string;
    };
}
