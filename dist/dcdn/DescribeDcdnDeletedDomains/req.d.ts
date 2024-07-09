export interface DescribeDcdnDeletedDomainsRequest {
    /**
     * 当前页码，默认值**1**，取值范围：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的域名个数，默认值**20**，取值范围：**1**~**500**之前的任意整数。
     * @example `5`
     */
    "PageSize"?: number;
}
