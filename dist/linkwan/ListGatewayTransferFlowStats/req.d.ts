export interface ListGatewayTransferFlowStatsRequest {
    "IotInstanceId"?: string;
    /**
     * 网关的GwEUI。
     * @example `0000000000000000`
     */
    "GwEui": string;
    /**
     * 查询开始时间，以毫秒为单位的UNIX时间戳。
     * @example `1514736000000`
     */
    "BeginMillis": number;
    /**
     * 查询结束时间，以毫秒为单位的UNIX时间戳。
     * @example `1514737000000`
     */
    "EndMillis": number;
    /**
     * 时间间隔的单位，可取值为：
     * - **INTERVAL_IN_HOURS**：按照小时统计
     * - **INTERVAL_IN_DAYS**：按照天统计
     * @example `INTERVAL_IN_HOURS`
     */
    "TimeIntervalUnit": string;
}
