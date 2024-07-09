export interface DescribeDBProxyPerformanceRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-t4n3a****`
     */
    "DBInstanceId": string;
    /**
     * 数据库代理实例类型，取值：
     * - common：通用型代理
     * - exclusive：独享型代理
     * @example `exclusive`
     */
    "DBProxyInstanceType"?: string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-09-19T01:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，不能早于查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-09-21T18:00:00Z`
     */
    "EndTime": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 性能指标。
     * RDS MySQL仅支持**Maxscale_CpuUsage**：CPU使用率。
     * RDS PostgreSQL查询如下性能数据：
     * - **Maxscale_TotalConns**：连接速率
     * - **Maxscale_CurrentConns**：当前连接数
     * - **Maxscale_DownFlows**：出流量
     * - **Maxscale_UpFlows**：入流量
     * - **Maxscale_QPS**：请求速率（QPS）
     * - **Maxscale_MemUsage**：内存使用率
     * - **Maxscale_CpuUsage**：CPU使用率
     * 当查询多个性能数据时，可使用英文逗号（,）分隔，最多同时查询6个性能数据。
     * @example `Maxscale_CpuUsage`
     */
    "MetricsName": string;
    /**
     * 预留参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
