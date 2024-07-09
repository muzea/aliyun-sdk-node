export interface DescribeMPCoSPhaseInfoResponse {
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
         * 前一区块摘要。
         * @example `bf2cf40e5c21dc14d03eb824f99791c4d07bdaf2736e5faae508d7fb276d****`
         */
        PreviousHash: string;
        /**
         * IoT数据源组ProductKey。
         * @example `hfoi7GQ****`
         */
        ProductKey: string;
        /**
         * 数据摘要。
         * @example `9608520d694520c0c414075a5c07672a4efaf609e62d921a60bf7cc0e972****`
         */
        DataHash: string;
        /**
         * 上链值。
         * @example `某公司某业务数据。`
         */
        DataValue: string;
        /**
         * 上链时间。毫秒级时间戳。
         * @example `1605885676000`
         */
        Timestamp: number;
        /**
         * 交易摘要。
         * @example `c4d07bdaf2736cc0ec0e909e60e5c21dc14d0eb823eb82f4f99791c4d07b****`
         */
        TransactionHash: string;
        /**
         * 区块摘要。
         * @example `5a5c07672a4efaf609e62d921a60bf7cc0e9722a8b9608520d694520c0c4****`
         */
        BlockHash: string;
        /**
         * 区块高度。
         * @example `1942`
         */
        BlockNumber: number;
        /**
         * 设备标识。
         * @example `DFA7B98AD494FB98A491****`
         */
        IotId: string;
        /**
         * 关联数据列表。
         */
        RelatedDataList: {
            /**
             * 关联的数据Key值。
             * @example `256399502929****`
             */
            RelatedDataKey: string;
            /**
             * 关联的阶段数据摘要。
             * @example `73b5c3dbc828fdf79749ff332af402036f7d591959fda00a2854a160fe66****`
             */
            RelatedPhaseDataHash: string;
            /**
             * 关联的数据序列号。
             * @example `be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****`
             */
            RelatedDataSeq: string;
            /**
             * 关联的数据阶段名称。
             * @example `某业务阶段`
             */
            RelatedPhaseName: string;
            /**
             * 关联的数据阶段ID。
             * @example `987823074334****`
             */
            RelatedPhaseId: string;
        }[];
    };
}
