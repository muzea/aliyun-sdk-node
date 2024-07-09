export interface CreateSqlLogTaskRequest {
    /**
     * 数据库实例ID。
     * @example `pc-2ze8g2am97624****`
     */
    "InstanceId"?: string;
    /**
     * 节点ID。
     * >该参数仅适用于集群版实例，可以选择查询指定节点离线任务。若不传该参数，默认返回主节点离线任务。
     * @example `pi-uf6k5f6g3912i****`
     */
    "NodeId"?: string;
    /**
     * 任务类型
     * - **Export**：导出任务。
     * - **Query**：查询任务。
     * - **Insight**：分析任务。
     * @example `Export`
     */
    "Type"?: string;
    /**
     * 任务名称。
     * @example `SQL审计导出1
    `
     */
    "Name"?: string;
    /**
     * 筛选条件列表。
     */
    "Filters"?: {
        /**
         * 过滤参数的名称。
         * > 支持的过滤参数及其取值请参考**请求参数补充说明**。
         * @example `KeyWords`
         */
        Key: string;
        /**
         * 过滤参数的数值。
         * @example `select`
         */
        Value: string;
    }[];
    /**
     * 任务的开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1596177993000
    `
     */
    "StartTime"?: number;
    /**
     * 任务结束时间，格式为unix时间戳，单位为毫秒。
     * @example `1608888296000
    `
     */
    "EndTime"?: number;
    /**
     * PolarDB-X 2.0数据库实例节点信息。
     * - **polarx_cn**：计算节点。
     * - **polarx_dn**：数据节点。
     * @example `polarx_cn`
     */
    "Role"?: string;
}
