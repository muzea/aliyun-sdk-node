export interface GetPfsMetricTrendsRequest {
    /**
     * 实例ID。
     * @example `rm-m5ea73876ukci****`
     */
    "InstanceId"?: string;
    /**
     * 节点ID。
     * > 对于RDS MySQL集群系列或PolarDB MySQL版数据库实例，需要提供节点ID。
     * @example `r-x****-db-0`
     */
    "NodeId"?: string;
    /**
     * 需要查询趋势的指标：
     * - **count**：执行次数。
     * - **avgRt**：平均执行时间。
     * - **rtRate**：耗时比例。
     * - **rowsExamined**：总扫描行数。
     * @example `Count`
     */
    "Metric"?: string;
    /**
     * 查询开始时间，格式为unix时间戳，单位为毫秒。
     * @example `1677461663092`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间，格式为Unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，最多可查看最近一个月内任意七天的数据。
     * @example `1678432430967`
     */
    "EndTime"?: number;
}
