export interface ListProductDimensionGroupsRequest {
    /**
     * 用来标记开始查询数据的位置。置空表示从头开始。
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 本次查询的最大记录条数。
     * 取值范围：1~200。默认值：30。
     * @example `3`
     */
    "MaxResults"?: number;
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `entconsole`
     */
    "ProductCode": string;
}
