export interface DescribeApisByVpcAccessRequest {
    /**
     * Vpc授权的名称
     * @example `lynkco-iov-uat`
     */
    "VpcName"?: string;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `2`
     */
    "PageNumber"?: number;
}
