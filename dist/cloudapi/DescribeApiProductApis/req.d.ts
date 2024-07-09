export interface DescribeApiProductApisRequest {
    /**
     * API产品ID
     * @example `117b7a64a8b3f064eaa4a47ac62aac5e`
     */
    "ApiProductId": string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数，每页显示条数，默认值10
     * @example `10`
     */
    "PageSize"?: number;
}
