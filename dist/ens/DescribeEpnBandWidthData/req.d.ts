export interface DescribeEpnBandWidthDataRequest {
    /**
     * ENS节点ID。
     * @example `cn-beijing-cmcc`
     */
    "EnsRegionId"?: string;
    /**
     * 实例ID。
     * @example `i-5sg1owx0g4ojy66ab2tez77r2`
     */
    "InstanceId"?: string;
    /**
     * 获取数据的起始时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2021-12-15T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2021-12-16T16:00:00Z`
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
    /**
     * 组网模式。取值：
     * - **SpeedUp**：智能加速（外网）。
     * - **Connection**：内网联通（内网模式）。
     * - **SpeedUpAndConnection**：智能加速及内网联通（内网模式）。
     * @example `SpeedUp`
     */
    "NetworkingModel"?: string;
    /**
     * 边边网络实例ID。
     * @example `epn-20200825134537VyK81T`
     */
    "EPNInstanceId"?: string;
}
