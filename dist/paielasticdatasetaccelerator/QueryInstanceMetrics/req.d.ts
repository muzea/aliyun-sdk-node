export interface QueryInstanceMetricsRequest {
    /**
     * 监控指标所属的数据集加速实例ID。如何获取加速实例ID，请参见[ListInstances](~~467899~~)。
     * @example `inst-abcdefgh12****`
     */
    "InstanceId": string;
    /**
     * 监控指标的标签集。
     * @example `SlotIDs: xxx`
     */
    "Dimensions"?: any;
    /**
     * 监控指标的类型，取值如下：
     * - NetworkReceiveBytesPerSecond：每秒网络请求接收量。
     * - NetworkTransmitBytesPerSecond：每秒网络请求发送量。
     * - FrontendThroughputBytes：前端服务吞吐。
     * - FrontendLatencyMicrosecond：前端服务延迟。
     * - FrontendIops：前端服务读取频率。
     * @example `NetworkReceiveBytesPerSecond`
     */
    "MetricType": string;
    /**
     * 起始时间，默认是1小时前。
     * @example `2020-11-08T15:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 截止时间，默认是当前时间。
     * @example `2020-11-08T16:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 时间间隔，单位为分钟。
     * @example `5m`
     */
    "TimeStep"?: string;
}
