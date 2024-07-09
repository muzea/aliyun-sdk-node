export interface ListDeliveryHistoryJobsRequest {
    /**
     * 分页查询时设置的每页行数。
     * - 取值范围：1~100。
     * - 默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 任务列表的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
}
