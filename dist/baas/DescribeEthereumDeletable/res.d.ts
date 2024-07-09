export interface DescribeEthereumDeletableResponse {
    /**
     * 请求ID。
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 以太坊ID
         * @example `eth-1ilrhcav4ibdl`
         */
        EthereumId: string;
        /**
         * 是否可删除
         * @example `true`
         */
        Deletable: boolean;
    };
}
