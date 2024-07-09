export interface DescribeScdnUserDomainsRequest {
    /**
     * 分页大小，默认20，最大500，取值：1~500之前的任意整数。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 取得第几页，取值范围为：**1~100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 加速域名。如果不传该参数，默认不做域名匹配搜索，返回所有符合条件的域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 域名状态过滤。
     * @example `运行中`
     */
    "DomainStatus"?: string;
    /**
     * 域名查询类型。取值：
     * - **fuzzy_match**：模糊匹配。
     * - **pre_match**：前匹配。
     * - **suf_match**：后匹配。
     * - **full_match**（默认值）：完全匹配。
     * > 传递了域名参数的情况下，不传DomainSearchType参数，则默认采用完全匹配模式。
     * @example `fuzzy_match`
     */
    "DomainSearchType"?: string;
    /**
     * 检查domain是否展出。
     * @example `false`
     */
    "CheckDomainShow"?: boolean;
    /**
     * 资源组ID。
     * @example `123`
     */
    "ResourceGroupId"?: string;
    /**
     * 变更起始时间。
     * @example `201911111`
     */
    "ChangeStartTime"?: string;
    /**
     * 变更结束时间。
     * @example `201911111`
     */
    "ChangeEndTime"?: string;
}
