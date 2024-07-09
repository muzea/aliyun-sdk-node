export interface DescribeSDGRequest {
    /**
     * 指定查询若干SDG，默认查询全部。
     */
    "SDGIds"?: string[];
    /**
     * 分页查询的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
