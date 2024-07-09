export interface DescribeSitePairsRequest {
    /**
     * 站点对类型
     * @example `cloud2cloud`
     */
    "SitePairType"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
