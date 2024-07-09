export interface DescribePropertyProcItemRequest {
    /**
     * 是否强制刷新待查询数据。
     * @example `true`
     */
    "ForceFlush"?: boolean;
    /**
     * 进程名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: number;
}
