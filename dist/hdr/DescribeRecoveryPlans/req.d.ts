export interface DescribeRecoveryPlansRequest {
    /**
     * 站点对ID。
     * @example `s-0005qxusucbii5ab6wuj`
     */
    "SitePairId"?: string;
    /**
     * 分页查询时设置的页数，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
