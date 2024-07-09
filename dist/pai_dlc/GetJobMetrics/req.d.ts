export interface GetJobMetricsRequest {
    /**
     * 任务ID。您可以调用[ListJobs](~~203116~~)获取所有任务的ID。
     * @example `dlc-20210126170216-*******`
     */
    "JobId": string;
    /**
     * 查询监控数据的时间区间的起始时间（UTC），默认值是1小时前。
     * @example `2020-11-08T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询监控数据的时间区间的截止时间（UTC），默认值是当前。
     * @example `2020-11-09T16:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 返回监控数据的时间间隔，默认值是5分钟。
     * @example `5m`
     */
    "TimeStep"?: string;
    /**
     * 查询监控数据的指标类型，取值如下：
     * - GpuCoreUsage：GPU使用率。
     * - GpuMemoryUsage：GPU Memory使用率。
     * - CpuCoreUsage：CPU使用率。
     * - MemoryUsage：Memory使用率。
     * - NetworkInputRate：网络写入速率。
     * - NetworkOutputRate：网络写出速率。
     * - DiskReadRate：磁盘读取速率。
     * - DiskWriteRate：磁盘写入速率。
     * @example `GpuMemoryUsage`
     */
    "MetricType": string;
    /**
     * 用于鉴权的临时令牌。
     * @example `eyXXXX-XXXX.XXXXX`
     */
    "Token"?: string;
}
