export interface DescribeDiagnosisSQLInfoResponse {
    /**
     * 请求ID。
     * @example `425AAA6A-63E0-1929-A1CE-3D9036CBC463`
     */
    RequestId: string;
    /**
     * 查询ID。
     * @example `71403480878****`
     */
    QueryID: string;
    /**
     * 查询所属的会话ID。
     * @example `658****`
     */
    SessionID: string;
    /**
     * 查询开始的时间，为毫秒级的UNIX时间戳。
     * @example `1660719602199`
     */
    StartTime: number;
    /**
     * 查询运行的总时间，单位为秒（s）。
     * @example `16`
     */
    Duration: number;
    /**
     * SQL语句。
     * @example `select n_live_tup, n_live_tup + n_dead_tup, pg_relation_size(table_name), last_vacuum from pg_stat_user_tables where relid = table_name::regclass`
     */
    SQLStmt: string;
    /**
     * 用户名。
     * @example `adbpguser`
     */
    User: string;
    /**
     * 数据库名称。
     * @example `adbtest`
     */
    Database: string;
    /**
     * SQL执行状态，取值说明：
     * - **running**：执行中。
     * - **finished**：执行完成。
     * @example `finished`
     */
    Status: string;
    /**
     * 算子信息。
     * @example `{\"children\":********\"startTime\":1660719602199}`
     */
    QueryPlan: string;
    /**
     * 查询计划信息。
     * @example `******`
     */
    TextPlan: string;
    /**
     * 按照指标的排序结构。
     * @example `{\"costSort\":******:\"Seq Scan-9\",\"value\":0.0}]}`
     */
    SortedMetrics: string;
    /**
     * 最大输出行数。
     * @example `10`
     */
    MaxOutputRows: string;
}
