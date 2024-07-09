export interface DescribeAntChainLatestBlocksV2Response {
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
         * 上一个区块哈希
         * @example `f208834bdc72bd6bb05c5ef1a35abbc8295a16deda9526b7b78c69ec24591b9f`
         */
        PreviousHash: string;
        /**
         * 版本信息
         * @example `33556226`
         */
        Version: number;
        /**
         * 区块中交易数量
         * @example `0`
         */
        TransactionSize: number;
        /**
         * 区块大小
         * @example `1024`
         */
        Size: number;
        /**
         * 根哈希
         * @example `0000000000000000000000000000000000000000000000000000000000000000`
         */
        RootTxHash: string;
        /**
         * 创建时间
         * @example `1610002621000`
         */
        CreateTime: number;
        /**
         * 区块高度
         * @example `259808`
         */
        Height: number;
        /**
         * 区块哈希
         * @example `b21baa257788d97eb0006672ccc5008f465365e1dec88d0bbd833e150414b3d5`
         */
        BizData: string;
        /**
         * 区块哈希
         * @example `b21baa257788d97eb0006672ccc5008f465365e1dec88d0bbd833e150414b3d5`
         */
        BlockHash: string;
        /**
         * 区块链ID
         * @example `8bd720bde18c4b37b0f4a1c7834db163`
         */
        Alias: string;
    }[];
}
