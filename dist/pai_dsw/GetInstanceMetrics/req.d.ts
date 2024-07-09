export interface GetInstanceMetricsRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 实例指标类型，取值如下：
     * - GpuCoreUsage：GPU使用率。
     * - GpuMemoryUsage：GPU Memory使用率。
     * - CpuCoreUsage：CPU使用率。
     * - MemoryUsage：Memory使用率。
     * - NetworkInputRate：网络写入速率。
     * - NetworkOutputRate：网络写出速率。
     * - DiskReadRate：磁盘读取速率。
     * - DiskWriteRate：磁盘写入速率。
     * @example `GpuCoreUsage`
     */
    "MetricType": string;
    /**
     * 获取实例指标的起始时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取实例指标的结束时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 指标获取的时间间隔。单位为分钟。
     * @example `15m`
     */
    "TimeStep"?: string;
}
