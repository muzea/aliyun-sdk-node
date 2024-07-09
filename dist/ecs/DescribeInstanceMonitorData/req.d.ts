export interface DescribeInstanceMonitorDataRequest {
    /**
     * 待查询的实例ID。
     * @example `i-bp1a36962lrhj4ab****`
     */
    "InstanceId": string;
    /**
     * 获取数据的起始时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（`ss`）不是`00`，则自动换算为下一分钟。
     * @example `2014-10-29T23:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（`ss`）不是`00`，则自动换算为下一分钟。
     * @example `2014-10-30T08:00:00Z`
     */
    "EndTime": string;
    /**
     * 获取监控数据的间隔时间，单位：秒。取值范围：
     * - 60。
     * - 600。
     * - 3600。
     * 默认值：60。
     * @example `60`
     */
    "Period"?: number;
}
