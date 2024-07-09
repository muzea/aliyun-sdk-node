export interface DescribeAntChainBlockV2Response {
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
         * 前一个区块链哈希
         * @example `2444ef0617e0c6845549dead70f118c5a58f03c04575ecb79e283ab5c34b491d`
         */
        PreviousHash: string;
        /**
         * 区块版本
         * @example `1`
         */
        Version: number;
        /**
         * 根交易哈希
         * @example `0000000000000000000000000000000000000000000000000000000000000000`
         */
        RootTxHash: string;
        /**
         * 创建时间
         * @example `1609223363570`
         */
        CreateTime: number;
        /**
         * 交易数
         * @example `1`
         */
        TransactionSize: number;
        /**
         *
         * 区块高度
         * @example `254761`
         */
        Height: number;
        /**
         * 区块哈希
         * @example `5abf96debc87f1b64dcbaf4fa57fd46f2a06acdb5de0ba91ef9718d81aebafc7`
         */
        BlockHash: string;
        /**
         * 区块链ID
         * @example `8bd720bde18c4b37b0f4a1c7834db163`
         */
        AntChainId: string;
        /**
         * 交易列表
         */
        TransSummaryList: {
            /**
             * 交易Hash
             * @example `076bba1b726b3bcb958cba6fffc03eaa5cbed59320271dcbc0e05648a18a94f2`
             */
            Hash: string;
            /**
             * 源地址
             * @example `e7d3e769f3f593dadcb8634cc5b09fc90dd3a61c4a06a79cb0923662fe6fae6b`
             */
            From: string;
            /**
             * 合约链类型
             * @example `CALL_CONTRACT`
             */
            TransTypeV10: string;
            /**
             * 创建时间
             * @example `1609223363570`
             */
            CreateTime: number;
            /**
             * 存证链类型
             * @example `""`
             */
            TransTypeV6: string;
            /**
             * 区块高度
             * @example `254761`
             */
            Height: number;
            /**
             * 目的地址
             * @example `e93372533f323b2f12783aa3a586135cf421486439c2cdcde47411b78f9839ec`
             */
            To: string;
            /**
             * Gas使用值
             * @example `4000000`
             */
            GasUsed: number;
            /**
             * 区块Hash
             * @example `5abf96debc87f1b64dcbaf4fa57fd46f2a06acdb5de0ba91ef9718d81aebafc7`
             */
            BlockHash: string;
            /**
             * 数值
             * @example `0`
             */
            ReferenceCount: number;
            /**
             * 分类
             * @example `-1`
             */
            Category: number;
            /**
             * 区块链ID
             * @example `8bd720bde18c4b37b0f4a1c7834db163`
             */
            Alias: string;
        }[];
    };
}
