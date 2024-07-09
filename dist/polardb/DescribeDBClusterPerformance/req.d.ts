export interface DescribeDBClusterPerformanceRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 查询的性能指标，多个值间用英文逗号（,）分隔，详细参数请参见[性能参数表](~~141787~~)。
     * > 最多可传入5个查询的性能指标。
     * @example `PolarDBDiskUsage`
     */
    "Key": string;
    /**
     * 查询开始时间。格式为`yyyy-MM-ddTHH:mmZ`（UTC时间）。
     * @example `2020-09-23T01:01Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式为`yyyy-MM-ddTHH:mmZ`（UTC时间）。
     * @example `2020-09-23T01:00Z`
     */
    "EndTime": string;
    /**
     * 性能数据粒度。取值范围如下：
     * - 5
     * - 30
     * - 60
     * - 600
     * - 1800
     * - 3600
     * - 86400
     * @example `60`
     */
    "Interval"?: string;
}
