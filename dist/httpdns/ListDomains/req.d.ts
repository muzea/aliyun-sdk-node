export interface ListDomainsRequest {
    /**
     * 当前页数，起始值：1，默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值为：100，默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
}
