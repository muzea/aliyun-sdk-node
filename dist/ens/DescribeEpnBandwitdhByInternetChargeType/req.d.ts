export interface DescribeEpnBandwitdhByInternetChargeTypeRequest {
    /**
     * 获取数据的起始时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2021-12-02T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2021-12-06T15:59:59Z`
     */
    "EndTime": string;
    /**
     * 运营商，取值如下所示：
     * - cmcc：移动。
     * - telecom：电信。
     * - unicom：联通。
     * - multiCarrier：多线。
     * @example `telecom`
     */
    "Isp"?: string;
    /**
     * ENS的节点ID。
     * @example `cn-changsha-unicom`
     */
    "EnsRegionId"?: string;
    /**
     * 组网模式。取值：
     * - **SpeedUp**：智能加速（外网）。
     * - **Connection**：内网联通（内网模式）。
     * - **SpeedUpAndConnection**：智能加速及内网联通（内网模式）。
     * @example `Connection`
     */
    "NetworkingModel"?: string;
}
