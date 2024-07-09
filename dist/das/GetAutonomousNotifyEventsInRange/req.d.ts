export interface GetAutonomousNotifyEventsInRangeRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "__context"?: string;
    /**
     * 实例ID。
     * @example `rm-18ff4a195d****`
     */
    "InstanceId"?: string;
    /**
     * 查询任务开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1568269711000`
     */
    "StartTime": string;
    /**
     * 查询任务结束时间，格式为Unix时间戳，单位为毫秒。
     * >查询任务结束时间需晚于查询任务开始时间。
     * @example `1568265711221`
     */
    "EndTime": string;
    /**
     * PolarDB的节点ID，您可以通过调用[DescribeDBClusters](~~98094~~)接口查看返回参数的DBNodeId。
     * >仅支持PolarDB MySQL版实例。
     * @example `r-x****-db-0`
     */
    "NodeId"?: string;
    /**
     * 备用参数。
     * @example `None`
     */
    "EventContext"?: string;
    /**
     * 指定事件紧急程度，当该字段设置时，MinLevel参数将无效。取值：
     * - **Notice**：通知类事件。
     * - **Optimization**：优化类事件。
     * - **Warn**：警告类事件。
     * - **Critical**：危机类事件。
     * @example `Warn`
     */
    "Level"?: string;
    /**
     * 最小事件紧急程度。取值：
     * - **Notice**：通知类事件。
     * - **Optimization**：优化类事件。
     * - **Warn**：警告类事件。
     * - **Critical**：危机类事件。
     * @example `Notice`
     */
    "MinLevel"?: string;
    /**
     * 分页查询，页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageOffset"?: string;
    /**
     * 分页查询，每页大小。
     * @example `30`
     */
    "PageSize"?: string;
}
