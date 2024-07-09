export interface DescribeUserBandWidthDataRequest {
    /**
     * 节点ID，仅支持传单个ID，默认查询所有节点。
     * @example `cn-taiyuan-telecom`
     */
    "EnsRegionId"?: string;
    /**
     * 获取指定数据的实例ID，仅支持传单个ID，默认查询所有实例。
     * @example `i-5inkeimcipxk26yqtzm4q****`
     */
    "InstanceId"?: string;
    /**
     * 获取数据的起始时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2019-05-21T10:22:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2019-05-21T12:22:00Z`
     */
    "EndTime": string;
    /**
     * 获取监控数据的精度，取值：300（默认值）、1200、3600、14400，单位：秒。
     * @example `300`
     */
    "Period": string;
    /**
     * 运营商，取值如下所示：
     * - cmcc：移动。
     * - telecom：电信。
     * - unicom：联通。
     * - multiCarrier：多线。
     * @example `cmcc`
     */
    "Isp"?: string;
}
