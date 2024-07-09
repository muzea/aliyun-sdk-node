export interface DescribeAppsByApiProductRequest {
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
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * App名称
     * @example `testApp`
     */
    "AppName"?: string;
}
