export interface DescribeNamespacesRequest {
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值范围\[0,10000\]。
     * @example `10`
     */
    "PageSize": number;
}
