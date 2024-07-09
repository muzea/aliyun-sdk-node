export interface DescribePropertyPortItemRequest {
    /**
     * 是否强制刷新待查询数据。
     * @example `true`
     */
    "ForceFlush"?: boolean;
    /**
     * 端口号。
     * @example `22`
     */
    "Port"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `5`
     */
    "PageSize"?: number;
}
