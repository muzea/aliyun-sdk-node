export interface DescribeDomainListRequest {
    /**
     * 访问源的IP地址。
     * @example `192.122.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要查询的域名的搜索信息，支持模糊匹配。
     * @example `sas`
     */
    "FuzzyDomain"?: string;
    /**
     * 要查询的域名类型。取值：
     * - **root**：根域名
     * - **sub**：子域名
     * @example `root`
     */
    "DomainType"?: string;
    /**
     * 设置分页查询时，每页显示的域名的数量。默认值为**10**，表示每页显示10条域名。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
}
