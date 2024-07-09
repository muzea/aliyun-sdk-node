export interface DescribeDBProxyPerformanceRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 数据库代理连接地址ID。支持集群地址与自定义地址的查询，不支持主地址的查询。不传则默认查询集群地址。
     * @example `pe-****************`
     */
    "DBEndpointId"?: string;
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
    /**
     * 特殊指标，目前仅支持tair（PolarTair架构）。
     * @example `tair`
     */
    "Type"?: string;
    /**
     * 查询的性能指标，多个值间用英文逗号（,）分隔，详细参数请参见[性能参数表](~~141787~~)。
     * @example `PolarProxy_CpuUsage`
     */
    "Key": string;
    /**
     * 查询开始时间。格式为`yyyy-MM-ddTHH:mmZ`（UTC时间）。
     * @example `2020-09-23T01:01Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式为`yyyy-MM-ddTHH:mmZ`（UTC时间）。
     * @example `2020-09-24T02:08Z`
     */
    "EndTime": string;
}
