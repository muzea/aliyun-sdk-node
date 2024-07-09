export interface DescribeAntChainTransactionStatisticsV2Response {
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
         * 时间
         * @example `1609171200000`
         */
        Dt: number;
        /**
         * 创建时间
         * @example `1609258222000`
         */
        CreatTime: number;
        /**
         * 最后统计的区块高度
         * @example `11511`
         */
        LastSumBlockHeight: number;
        /**
         * 交易总量
         * @example `4`
         */
        TransCount: number;
        /**
         * 区块链ID
         * @example `8bd720bde18c4b37b0f4a1c7834db163`
         */
        AntChainId: string;
    }[];
}
