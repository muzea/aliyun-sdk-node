export interface DescribeDeletedInstancesRequest {
    /**
     * 请求的地域region。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页码大小。
     * @example `10`
     */
    "PageSize"?: number;
}
