export interface ListProductsRequest {
    /**
     * 用来标记开始查询数据的位置。置空表示从头开始。
     * @example `4`
     */
    "NextToken"?: string;
    /**
     * 本次查询的最大记录条数。
     * 取值范围：1~200。默认值：30。
     * @example `4`
     */
    "MaxResults"?: number;
}
