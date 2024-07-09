export interface DescribeDatabaseInstanceMetricDataResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 监控指标名称。可能值：
     * - MySQL_MemCpuUsage：实例CPU使用率（占操作系统总数）和MySQL实例内存使用率（占操作系统总数）。
     * - MySQL_DetailedSpaceUsage：实例总空间使用量、数据空间、日志空间、临时空间和系统空间。
     * - MySQL_Sessions ：当前活跃连接数，当前总连接数。
     * - MySQL_IOPS ：实例的IOPS（每秒IO请求次数）。
     * @example `MySQL_MemCpuUsage`
     */
    MetricName: string;
    /**
     * 监控数据单位。
     * - %
     * - int
     * - MB
     * @example `%`
     */
    Unit: string;
    /**
     * 数据格式。可能值：
     * - cpuusage&memusage
     * - active_session&total_session
     * - ins_size&data_size&log_size&tmp_size&other_size
     * - io
     * @example `cpuusage&memusage`
     */
    DataFormat: string;
    /**
     * 监控数据信息。
     * @example `[  {     \"date"\: " 2022-09-06T04:04:00Z",\"value\":\"0.77&3.69\"  } ]`
     */
    MetricData: string;
}
