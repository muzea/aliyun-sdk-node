export interface ListMqSofamqTraceResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 查询返回的数据集合
     */
    Data: {
        /**
         * 页码
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数
         * @example `100`
         */
        Total: number;
        /**
         * Trace 信息
         */
        Content: {
            /**
             * 状态
             * @example `QUERYING`
             */
            Status: string;
            /**
             * 消息查询所用的 Message Key
             * @example `ORDERID_100`
             */
            MsgKey: string;
            /**
             * 查询的 Topic
             * @example `TP_xxx`
             */
            Topic: string;
            /**
             * 创建时间
             * @example `1570701259403`
             */
            GmtCreate: number;
            /**
             * 实例 ID
             * @example `SOFAMQ_INSTANCE_000001`
             */
            InstanceId: string;
            /**
             * 修改时间
             * @example `1570701259403`
             */
            GmtModified: number;
            /**
             * 消息查询所用的 Message ID
             * @example `1E05791C117818B4AAC23B1BB0CE****`
             */
            MsgId: string;
            /**
             * 查询 ID
             * @example `272967562652883649157096685****`
             */
            QueryId: string;
            /**
             * 查询的 Cell
             * @example `RZ001`
             */
            Cell: string;
        }[];
    };
}
