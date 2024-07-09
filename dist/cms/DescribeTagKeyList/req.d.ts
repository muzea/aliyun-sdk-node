export interface DescribeTagKeyListRequest {
    /**
     * 标签列表的页码。
     * 起始值：1，默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100，默认值：50。
     * @example `10`
     */
    "PageSize"?: number;
}
