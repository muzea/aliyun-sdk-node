export interface ListLogStoresRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 查询开始行。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。最大值为500。默认值为500。
     * @example `10`
     */
    "size"?: number;
    /**
     * Logstore名称。支持模糊匹配，例如输入test，则返回名称包含test的Logstore列表。
     * @example `my-logstore`
     */
    "logstoreName"?: string;
    /**
     * 要查询的日志类型。取值包括：
     * - None：查询所有日志类型。
     * - Metrics：查询Metrics类型。
     * @example `None`
     */
    "telemetryType"?: string;
    /**
     * 日志服务提供标准型（Standard）和查询型（Query）两种类型的Logstore。
     *   - **standard**：支持日志服务一站式数据分析功能，适用于实时监控、交互式分析以及构建完整的可观测性系统等场景。
     *   - **query**：支持高性能查询，索引流量费用约为Standard的一半，但不支持SQL分析，适用于数据量大、存储周期长（周、月级别以上）、无日志分析的场景。
     * @example `standard`
     */
    "mode"?: string;
}
