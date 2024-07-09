export interface DescribeTopHotKeysRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * Redis实例ID，您可以调用[DescribeInstances](~~60933~~)接口获取。
     * @example `r-bp18ff4a195d****`
     */
    "InstanceId": string;
    /**
     * Redis实例的数据分片ID，您可以调用[DescribeRoleZoneInfo](~~190794~~)接口获取。
     * @example `r-****-db-0`
     */
    "NodeId"?: string;
    /**
     * 查询任务开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1596177993000`
     */
    "StartTime": string;
    /**
     * 查询任务结束时间，格式为Unix时间戳，单位为毫秒。
     * > - 查询任务结束时间需晚于查询任务开始时间。
     * > - 仅支持最大查询时间范围为4天内的数据。
     * > - **StartTime**和**EndTime**最大查询间隔为3小时内。
     * @example `1596177993001`
     */
    "EndTime": string;
}
