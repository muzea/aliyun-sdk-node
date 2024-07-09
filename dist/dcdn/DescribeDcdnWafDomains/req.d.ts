export interface DescribeDcdnWafDomainsRequest {
    /**
     * 设置查询条件，支持域名模糊匹配过滤。
     * ```QueryArgs={"DomainNameLike":"加速域名"}```
     * @example `{"DomainNameLike":"example.com"}`
     */
    "QueryArgs"?: string;
    /**
     * 页码。取值范围为：**1**~**100000**。
     * 默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的域名个数，默认值**20**，取值范围：**1**~**500**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
}
