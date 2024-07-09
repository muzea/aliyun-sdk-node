export interface DescribeLiveInteractionMetricDataResponse {
    /**
     * 节点数据。
     */
    Nodes: {
        /**
         * 查询时间，用UNIX时间戳表示，单位：毫秒。
         * @example `1548670257000`
         */
        Timestamp: string;
        /**
         * 指标对应的值。
         * @example `66.670000`
         */
        Value: string;
    }[];
    /**
     * 请求ID。
     * @example `A01C98C5-25AE-124A-83FE-514DF5C5BE36`
     */
    RequestId: string;
    /**
     * 汇总数据。
     * @example `2000`
     */
    SummaryData: string;
}
