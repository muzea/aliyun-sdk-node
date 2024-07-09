export interface ListInstanceAmountResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `95279527adhfj****`
     */
    RequestId: string;
    /**
     * 周期实例数量在指定时间段的趋势数据。
     */
    InstanceCounts: {
        /**
         * 获取周期实例数量的业务日期，此处显示业务日期对应的时间戳。
         * @example `1623772800000`
         */
        Date: number;
        /**
         * 周期实例的数量。
         * @example `9527`
         */
        Count: number;
    }[];
}
