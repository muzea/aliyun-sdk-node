export interface GetExploreUrlRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * @example `c9cc4c5e220f8461f9d71b6ec6e******`
     */
    "ClusterId": string;
    /**
     * Grafana数据源类型。
     * @example `prometheus`
     */
    "Type": string;
    /**
     * 数据源对应的查询语句。
     * @example `{app="buy2"}`
     */
    "Expression"?: string;
}
