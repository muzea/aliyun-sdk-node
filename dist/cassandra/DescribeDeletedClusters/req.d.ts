export interface DescribeDeletedClustersRequest {
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `20`
     */
    "PageSize"?: number;
}
