export interface DescribeDomainResourceRequest {
    /**
     * 要查询的网站域名。
     * @example `www.example.com`
     */
    "Domain"?: string;
    /**
     * 查询匹配模式。取值：
     * - **fuzzy**（默认）：表示模糊查询。
     * - **exact**：表示精确查询。
     * @example `fuzzy`
     */
    "QueryDomainPattern"?: string;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，设置每页包含转发规则的数量。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询的DDoS高防实例的ID列表。
     */
    "InstanceIds"?: string[];
}
