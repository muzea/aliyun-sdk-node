export interface DescribeDBClusterPerformanceRequest {
    /**
     * AnalyticDB MySQL版集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL版集群的详情，包括集群ID。
     * @example `am-8vbf80pjcz*****`
     */
    "DBClusterId": string;
    /**
     * 需要查询的性能指标名称，多个值之间用英文逗号（,）分隔。支持查询如下性能指标：
     * * CPU
     *     * **AnalyticDB_CPU**：CPU平均使用率。
     * * 连接数
     *     * **AnalyticDB_Connections**：数据库连接数。
     * * 写入
     *     * **AnalyticDB_TPS**：写入TPS。
     *     * **AnalyticDB_InsertRT**：写入响应时间。
     *     * **AnalyticDB_InsertBytes**：写入吞吐量。
     * * 更新
     *     * **AnalyticDB_UpdateRT**：更新响应时间。
     * * 删除
     *     * **AnalyticDB_DeleteRT**：删除响应时间。
     * * 查询
     *     * **AnalyticDB_QPS**：查询QPS。
     *     * **AnalyticDB_QueryRT**：查询响应时间。
     *     * **AnalyticDB_QueryWaitTime**：查询等待耗时。
     * * 磁盘
     *     * **AnalyticDB_IO**：磁盘IO吞吐。
     *     * **AnalyticDB_IO_UTIL**：磁盘IO使用率。
     *     * **AnalyticDB_IO_WAIT**：磁盘IO等待时间。
     *     * **AnalyticDB_IOPS**：磁盘IOPS。
     *     * **AnalyticDB_DiskUsage**：磁盘用量。
     *     * **AnalyticDB_HotDataDiskUsage**：热数据磁盘用量。
     *     * **AnalyticDB_ColdDataDiskUsage**：冷数据磁盘用量。
     * * 其他
     *   * **AnalyticDB_BuildTaskCount**：Build任务数。
     *   * **AnalyticDB_ComputeMemoryUsedRatio**: 计算内存使用率。
     * > 若该参数留空，默认返回上述所有性能指标的值。
     * @example `AnalyticDB_CPU`
     */
    "Key"?: string;
    /**
     * 查询开始时间。格式为<i>yyyy-MM-ddTHH:mmZ</i>（UTC时间）。
     * @example `2021-05-03T15:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间。格式为<i>yyyy-MM-ddTHH:mmZ</i>（UTC时间）。
     * > 查询结束时间需晚于开始时间，且开始时间和结束时间的时间间隔不能超过两天。
     * @example `2021-05-03T15:01Z`
     */
    "EndTime"?: string;
    /**
     * 集群所在的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组名称。
     * @example `test`
     */
    "ResourcePools"?: string;
}
