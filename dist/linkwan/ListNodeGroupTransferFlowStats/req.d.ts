export interface ListNodeGroupTransferFlowStatsRequest {
    "IotInstanceId"?: string;
    /**
     * 节点组ID。
     * @example `123`
     */
    "NodeGroupId": string;
    /**
     * 查询开始时间，毫秒为单位的UNIX时间戳。
     * @example `1514736000000`
     */
    "BeginMillis": number;
    /**
     * 查询结束时间，毫秒为单位的UNIX时间戳。
     * @example `1514737000000`
     */
    "EndMillis": number;
    /**
     * 时间间隔的单位。取值：
     * - **INTERVAL_IN_HOURS**：按照小时统计
     * - **INTERVAL_IN_DAYS**：按照天统计
     * @example `INTERVAL_IN_HOURS`
     */
    "TimeIntervalUnit": string;
}
