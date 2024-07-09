export interface DescribeDcdnHttpsDomainListRequest {
    /**
     * 页数。取值范围：**1~100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。取值：**1~500**，默认为**20**。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 搜索关键字。
     * @example `cert`
     */
    "Keyword"?: string;
}
