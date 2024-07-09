export interface ListMPCoSPhaseHistoryResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应内容。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        Num: number;
        /**
         * 总条数。
         * @example `10`
         */
        Total: number;
        /**
         * 每页数量。
         * @example `2`
         */
        Size: number;
        /**
         * 数据项。
         */
        PageData: {
            /**
             * IoT数据源组ProductKey。
             * @example `hfoi7GQ****`
             */
            ProductKey: string;
            /**
             * 前一区块摘要。
             * @example `2d921a60bf7cc0e9722a8bcc0e909e62d92120c0c749ff332af402036f7d****`
             */
            PreviousHash: string;
            /**
             * 数据摘要。
             * @example `9608520d694520c0c414075a5c07672a4efaf609e62d921a60bf7cc0e972****`
             */
            DataHash: string;
            /**
             * 数据序列号。
             * @example `be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****`
             */
            DataSeq: string;
            /**
             * 上链值。
             * @example `某公司业务数据。`
             */
            DataValue: string;
            /**
             * 上链时间。毫秒级时间戳。
             * @example `1606389620000`
             */
            Timestamp: number;
            /**
             * 交易摘要。
             * @example `bf2cf40e5c21dc14d03eb824f99791c4d07bdaf2736e5faae508d7fb276d****`
             */
            TransactionHash: string;
            /**
             * 区块摘要。
             * @example `5a5c07672a4efaf609e62d921a60bf7cc0e9722a8b9608520d694520c0c4****`
             */
            BlockHash: string;
            /**
             * 区块高度。
             * @example `9852`
             */
            BlockNumber: number;
            /**
             * IoT设备ID。
             * @example `DFA7B98AD494FB98A491****`
             */
            IotId: string;
        }[];
    };
}
