interface DescribeSiteMonitorStatisticsRequest {
    "RegionId"?: string;
    /**
    * 任务的监控项名称，可选值为：
    * - Availability ：可用率
    * - ErrorRate：错误率
    * - ResponseTime：响应时间
    * @example `Availability`
    */ "MetricName": string;
    /**
    * 任务ID。
    * @example `49f7b317-7645-4cc9-94fd-ea42e522****`
    */ "TaskId": string;
    /**
    * 统计的时间周期， 单位是分钟，最大1440分钟（1天）。
    * @example `60`
    */ "TimeRange"?: string;
    "StartTime"?: string;
}
export { DescribeSiteMonitorStatisticsRequest };