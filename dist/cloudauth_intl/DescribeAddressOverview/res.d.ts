export interface DescribeAddressOverviewResponse {
    /**
     * Id of the request
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果
     */
    Data: {
        /**
         * 余额
         * @example `54.4216`
         */
        Balance: number;
        /**
         * 交易数量
         * @example `1697`
         */
        TxsCount: number;
        /**
         * 首次交易时间，unix timestamp格式。
         * @example `1441800674`
         */
        FirstSeen: number;
        /**
         * 最后一次交易时间，unix timestamp格式。
         * @example `1682056727`
         */
        LastSeen: number;
        /**
         * 收到的总金额
         * @example `916263.8`
         */
        TotalReceived: number;
        /**
         * 发出的总金额
         * @example `916205.4`
         */
        TotalSpent: number;
        /**
         * 收到的总交易笔数
         * @example `1470`
         */
        ReceivedTxsCount: number;
        /**
         * 发出的总交易笔数
         * @example `227`
         */
        SpentTxsCount: number;
    };
}
