export interface DescribeHistoryEventsStatRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 资产实例的启动状态。返回值：-**starting**：启动中-**running**：运行中-**stopping**：停止中-**stopped**：已停止
     * @example `starting`
     */
    "ArchiveStatus": string;
    /**
     * 任务开始时间的起始时间，表示查询任务开始时间在此时间之后的任务。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。最早支持30天前，距当前时间超过30天会自动转换成30天前。
     * @example `2022-01-02T11:31:03Z`
     */
    "FromStartTime"?: string;
    /**
     * 任务开始时间的结束时间，表示查询任务开始时间在此时间之前的任务。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-03-02T11:31:03Z`
     */
    "ToStartTime": string;
}
