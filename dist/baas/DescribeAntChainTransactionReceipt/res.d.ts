export interface DescribeAntChainTransactionReceiptResponse {
    /**
     * 请求ID
     * @example `9EC8FDC1-ED32-4EC0-AEC2-AFAA906ADBAB`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * Data：自定义结果数据
         * @example `data`
         */
        Data: string;
        /**
         * 消耗的Gas
         * @example `20000`
         */
        GasUsed: string;
        /**
         * 结果，用户自定义错误码：
         * - 0：表示交易执行成功
         * - 非0：表示交易执行失败
         * @example `0`
         */
        Result: number;
        Logs: string[];
    };
}
