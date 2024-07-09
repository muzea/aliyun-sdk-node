export interface DescribeProcessStatsCompositionRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * OceanBase 数据库用户标识符。
     * @example `139*************`
     */
    "UId"?: string;
    /**
     * 租户 ID。
     * @example `t33h8y08k****`
     */
    "TenantId"?: string;
    /**
     * SQL 语句，支持 LIKE 查询，可以只指定 SQL 语句的部分子句。
     * @example `SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC`
     */
    "SqlText"?: string;
    /**
     * 客户端 IP。
     * @example `127.*.*.*`
     */
    "ClientIp"?: string;
    /**
     * 服务器 IP。
     * @example `127.*.*.*`
     */
    "ServerIp"?: string;
    /**
     * 数据库用户名。
     * @example `test1`
     */
    "Users"?: string;
    /**
     * 会话状态。
     * @example `ACTIVE`
     */
    "Status"?: string;
}
