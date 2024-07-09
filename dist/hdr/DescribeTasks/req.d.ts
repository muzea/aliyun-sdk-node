export interface DescribeTasksRequest {
    /**
     * 站点对ID
     * @example `s-000cm9ax8sh22u8r9gs0`
     */
    "SitePairId"?: string;
    /**
     * 分页查询的当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 按创建时间或更新时间排序
     * @example `createdTime`
     */
    "SortBy"?: string;
}
