export interface DescribeMetricDataRequest {
    /**
     * 指标名称。可选的值有：
     *
     * - disk_bps_percent
     * - disk_iops_percent
     * - disk_read_block_size
     * - disk_read_bps
     * - disk_read_iops
     * - disk_read_latency
     * - disk_write_block_size
     * - disk_write_bps
     * - disk_write_iops
     * - disk_write_latency
     * @example `disk_bps_percent`
     */
    "MetricName": string;
    /**
     * 获取指标数据的起始时间点。最远可选当前时刻过去一年内的时刻作为起始时间点。当StartTime和EndTime参数都为空时，默认查询最近一个period的监控指标。按照ISO 8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-11-21T01:50:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取指标数据的结束时间点。不应大于当前时刻。按照ISO 8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-11-21T02:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 获取指标数据的间隔时间。单位：秒。默认值为5秒。可选的取值：
     * - 5：5s精度查询，可查询12小时时间长度
     * - 10：10s精度查询，可查询24小时时间长度
     * - 60：60s精度查询，可查询7天时间长度
     * 其中，disk_slow_io_triggerred指标只支持60s精度查询。
     * @example `60`
     */
    "Period"?: number;
    /**
     * 维度Map，JSON格式，表示查询的维度，当前可选的键为：diskId（云盘名）。
     * @example `{"diskId":["d-bp14xxxx","d-bp11xxxx"]}`
     */
    "Dimensions"?: string;
    /**
     * 地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
}
