export interface GetPfsSqlSummariesRequest {
    /**
     * 实例ID。
     * @example `rm-uf61swc4cru0b****`
     */
    "InstanceId"?: string;
    /**
     * 节点ID。
     * > 对于RDS MySQL集群系列或PolarDB MySQL版数据库实例，需要提供节点ID。
     * @example `r-****-db-0`
     */
    "NodeId"?: string;
    /**
     * SQL ID。
     * > 传入SQL ID时，统计目标SQL ID的全量请求数据；为空时，统计整个数据库实例的全量请求数据。
     * @example `651b56fe9418d48edb8fdf0980ec****`
     */
    "SqlId"?: string;
    /**
     * SQL文本关键词，多个关键词以空格分隔。
     * @example `select update`
     */
    "Keywords"?: string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1675833788056`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间，格式为Unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，最多可查看最近一个月内任意七天的数据。
     * @example `1679297005999`
     */
    "EndTime"?: number;
    /**
     * 排序字段，默认为**count**。
     * - **count**：执行次数。
     * - **avgRt**：平均执行时间。
     * - **rtRate**：耗时比例。
     * - **rowsExamined**：总扫描行数。
     * - **avgRowsExamined**：平均扫描行数。
     * - **avgRowsReturned**：平均返回行数。
     * @example `count`
     */
    "OrderBy"?: string;
    /**
     * 是否升序排序，默认为**false**。
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "Asc"?: boolean;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询每页最大记录数，默认为10，最大为100。
     * @example `10`
     */
    "PageSize"?: number;
}
