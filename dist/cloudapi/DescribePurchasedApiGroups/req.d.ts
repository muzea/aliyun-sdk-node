export interface DescribePurchasedApiGroupsRequest {
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `20`
     */
    "PageSize"?: number;
}
