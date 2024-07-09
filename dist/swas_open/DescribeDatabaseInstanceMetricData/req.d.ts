export interface DescribeDatabaseInstanceMetricDataRequest {
    /**
     * 指定的轻量数据库实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量数据库实例ID。
     * @example `db-38263fa955774501a2ae1bdaed6f****`
     */
    "DatabaseInstanceId": string;
    /**
     * 指标名称。取值范围：
     * - MySQL_MemCpuUsage：实例CPU使用率（占操作系统总数）和MySQL实例内存使用率（占操作系统总数）。
     * - MySQL_DetailedSpaceUsage：实例总空间使用量、数据空间、日志空间、临时空间和系统空间。
     * - MySQL_Sessions ：当前活跃连接数，当前总连接数。
     * - MySQL_IOPS ：实例的IOPS（每秒IO请求次数）。
     * @example `MySQL_MemCpuUsage`
     */
    "MetricName": string;
    /**
     * 监控结束时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。
     * > +8小时后是控制台上显示的时间。
     * @example `2022-09-06T04:04Z`
     */
    "StartTime": string;
    /**
     * 监控开始时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。
     * > +8小时后是控制台上显示的时间。
     * @example `2022-09-07T04:04Z`
     */
    "EndTime": string;
}
