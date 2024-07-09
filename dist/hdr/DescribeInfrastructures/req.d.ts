export interface DescribeInfrastructuresRequest {
    /**
     * 站点ID
     * @example `si-0005btelnqjwguycypba`
     */
    "SiteId"?: string;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
}
