export interface GetHoneypotNodeMetricListRequest {
    /**
     * 管理节点ID。
     * @example `cc427e14-f257-4670-9d2b-d83bbbe7****`
     */
    "NodeId"?: string;
    /**
     * 对查询出的现有结果进行实时计算的表达式。
     * > 目前仅支持groupby（类似数据库groupby语句）。
     * @example `{"groupby":["userId","instanceId"]}`
     */
    "Express"?: string;
    /**
     * 开始时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * - StartTime和EndTime之间的间隔小于等于31天。
     * @example `2019-01-30 00:00:00
    `
     */
    "StartTime"?: string;
    /**
     * 云产品的监控项名称。
     * @example `cpu_total`
     */
    "MetricName"?: string;
    /**
     * 时间间隔。单位：秒。取值：60、300、900。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 每页显示的记录条数，用于分页查询。
     * > 单次请求Length的最大值为1440。
     * @example `100`
     */
    "Length"?: string;
    /**
     * 结束时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * @example `2019-01-30 00:10:00
    `
     */
    "EndTime"?: string;
    /**
     * 云产品的数据命名空间。命名方式：acs_云产品名称。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
}
