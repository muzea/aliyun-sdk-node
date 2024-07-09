export interface DescribeSiteMonitorStatisticsRequest {
    /**
     * 站点监控任务ID。
     * 关于如何获取站点监控任务ID，请参见[DescribeSiteMonitorList](~~115052~~)。
     * @example `ef4cdc8b-9dc7-43e7-810e-f950e56c****`
     */
    "TaskId": string;
    /**
     * 统计周期。
     * 单位：分钟。默认值：1440（1天）。最大值：43200（30天）。
     * @example `1440`
     */
    "TimeRange"?: string;
    /**
     * 开始时间戳。
     * 单位：毫秒。默认值为当前时间向前推1小时。
     * @example `1576142850527`
     */
    "StartTime"?: string;
    /**
     * 监控项名称。取值：
     * - Availability：可用率。
     * - ErrorRate：错误率。
     * - ResponseTime：响应时间。
     * @example `Availability`
     */
    "MetricName": string;
}
