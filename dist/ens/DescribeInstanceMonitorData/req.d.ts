export interface DescribeInstanceMonitorDataRequest {
    /**
     * 实例ID，仅支持单个查询。
     * @example `yourInstance ID`
     */
    "InstanceId"?: string;
    /**
     * 获取数据的起始时间点。
     * 按照ISO8601标准表示，并需要使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。如果秒不是00，则自动取为下一分钟开始时。
     * @example `2019-10-29T23:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 按照ISO8601标准表示，并需要使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。如果秒不是00，则自动取为下一分钟开始时。
     * @example `2019-10-30T08:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 获取监控数据的精度，取值：60（默认值）、300、1200、3600及14400，单位：秒。
     * @example `60`
     */
    "Period"?: string;
}
