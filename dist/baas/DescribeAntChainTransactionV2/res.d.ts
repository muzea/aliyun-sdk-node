export interface DescribeAntChainTransactionV2Response {
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
         * 交易哈希
         * @example `b3b0d2db83d3e670449d1e2a39d1d13b7e0e6080b0f9c6945f79eca68d1dd2ca`
         */
        Hash: string;
        /**
         * 区块哈希
         * @example `1168bc5dd0b78d15446b15ea5a7f7822a7d07c007dd3a50becf98da220fc08f6`
         */
        BlockHash: string;
        /**
         * 区块版本
         * @example `10`
         */
        BlockVersion: string;
        /**
         * 区块高度
         * @example `100`
         */
        BlockHeight: number;
        /**
         * 交易创建时间
         * @example `1563954336850`
         */
        CreateTime: number;
        /**
         * 交易详情
         */
        Transaction: {
            /**
             * 交易哈希
             * @example `b3b0d2db83d3e670449d1e2a39d1d13b7e0e6080b0f9c6945f79eca68d1dd2ca`
             */
            Hash: string;
            /**
             * 交易金额
             * @example `0`
             */
            Value: string;
            /**
             * 交易发送者哈希
             * @example `e7d3e769f3f593dadcb8634cc5b09fc90dd3a61c4a06a79cb0923662fe6fae6b`
             */
            From: string;
            /**
             * 数据
             * @example `""`
             */
            Data: string;
            /**
             * 交易Nonce
             * @example `5675407026657953619`
             */
            Nonce: string;
            /**
             * 交易接收方地址
             * @example `961085f3c7ef705ad587d0cbe11d7863a5a11af7451f4e9b1edadd74402addf5`
             */
            To: string;
            /**
             * 交易发送时戳
             * @example `1563954336850`
             */
            Timestamp: number;
            /**
             * Gas值
             * @example `4000000`
             */
            Gas: string;
            /**
             * 交易类型
             * @example `UNFREEZE_ACCOUNT_CONTRACT`
             */
            TxType: string;
            /**
             * Period
             * @example `1563954336850`
             */
            Period: number;
            Extentions: string[];
            Signatures: string[];
        };
    };
}
