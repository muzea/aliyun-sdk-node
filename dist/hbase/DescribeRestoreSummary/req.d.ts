export interface DescribeRestoreSummaryRequest {
    /**
     * 集群Id。
     * @example `ld-m5eznlga4k5bcxxxx`
     */
    "ClusterId": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小。
     * @example `10`
     */
    "PageSize"?: number;
}
