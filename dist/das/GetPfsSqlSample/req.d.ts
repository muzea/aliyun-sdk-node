export interface GetPfsSqlSampleRequest {
    /**
     * 实例ID。
     * >仅支持RDS MySQL和PolarDB MySQL版数据库实例。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于RDS MySQL集群系列或PolarDB MySQL版数据库实例，需要提供节点ID。
     * @example `r-x****-db-0`
     */
    "NodeId"?: string;
    /**
     * SQL ID。
     * @example `651b56fe9418d48edb8fdf0980ec****`
     */
    "SqlId"?: string;
    /**
     * 查询开始时间，格式为unix时间戳，单位为毫秒。
     * @example `1676511134614`
     */
    "StartTime": number;
    /**
     * 查询结束时间，格式为unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，最多可查看最近一个月内任意七天的数据。
     * @example `1678074351197`
     */
    "EndTime": number;
}
