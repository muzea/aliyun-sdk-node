export interface GetInstanceCountTrendResponse {
    /**
     * 每次请求生成的唯一标识。
     * @example `95279527adhfj****`
     */
    RequestId: string;
    /**
     * 实例数量趋势数据。
     */
    InstanceCounts: {
        /**
         * 业务日期对应的时间戳。
         * @example `1600963200000`
         */
        Date: number;
        /**
         * 实例的数量。
         * @example `9527`
         */
        Count: number;
    }[];
}
