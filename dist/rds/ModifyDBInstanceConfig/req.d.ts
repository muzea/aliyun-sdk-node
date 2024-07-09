export interface ModifyDBInstanceConfigRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-2ze****`
     */
    "DBInstanceId": string;
    /**
     * 待修改的配置项名称。
     * <props="intl">
     * - **pgbouncer**：修改RDS PostgreSQL实例的PgBouncer功能。
     * - **clear_errorlog**：清理RDS SQL Server实例的错误日志。
     * </props>
     * <props="china">
     * - **pgbouncer**：修改RDS PostgreSQL实例的PgBouncer功能。
     * - **backup_recovery_model**：开启RDS SQL Server实例的简单恢复模式功能。
     * - **clear_errorlog**：清理RDS SQL Server实例的错误日志。
     * 仅基础系列的RDS SQL Server实例支持简单恢复模式功能，**该功能开启后不支持关闭**。更多功能开启后的影响，请参见[开启简单恢复模式](~~2618484~~)。
     * ></notice>
     * </props>
     * @example `pgbouncer`
     */
    "ConfigName": string;
    /**
     * 待修改配置项的取值。
     * <props="intl">
     * - RDS PostgreSQL PgBouncer功能：**true**（开启）、**false**（关闭）
     * - RDS SQL Server错误日志清理功能：**1**（确认清理）
     * </props>
     * <props="china">
     * - RDS PostgreSQL PgBouncer功能：**true**（开启）、**false**（关闭）
     * - RDS SQL Server简单恢复功能：**simple**（开启简单恢复）
     * - RDS SQL Server错误日志清理功能：**1**（确认清理）
     * </props>
     * @example `true`
     */
    "ConfigValue": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `6000170000591aed949d0f****`
     */
    "ClientToken"?: string;
}
