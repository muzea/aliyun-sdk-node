export interface DescribeLogMonitorListRequest {
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示记录条数。默认：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 监控项搜索。支持模糊搜索。
     * @example `test`
     */
    "SearchValue"?: string;
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId"?: number;
}
