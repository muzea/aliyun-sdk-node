export interface GetInstanceMetricsRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * EAIS实例ID。
     * @example `eais-hznzre6ffmz9num4****`
     */
    "InstanceId": string;
    /**
     * 指标类型。取值范围：
     * - GpuCoreUsage：GPU使用率
     * - GpuMemoryUsage：GPU Memory使用率
     * - CpuCoreUsage：CPU使用率
     * - MemoryUsage：Memory使用率
     * @example `MemoryUsage`
     */
    "MetricType": string;
    /**
     * 开始时间，默认取值为当前时间减1小时。支持时间戳和时间字符串，时间字符串格式为：yyyy-MM-ddTHH:mm:SSZ，采用UTC +0时区。
     * @example `2022-11-22T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，默认取值为当前时间。支持时间戳和时间字符串，时间字符串格式为：yyyy-MM-ddTHH:mm:SSZ，采用UTC +0时区。
     * @example `2022-11-22T16:30:00Z`
     */
    "EndTime"?: string;
    /**
     * 时间步长，默认值：5m。支持的时长单位的取值范围：
     * - h：小时。
     * - m：分钟。
     * - s：秒。
     * 当值不带单位时，默认使用单位：s（秒）。
     * @example `5m`
     */
    "TimeStep"?: string;
}
