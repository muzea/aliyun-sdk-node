export interface DescribeVulWhitelistRequest {
    /**
     * 分页查询时，分页页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示数据条数。默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
