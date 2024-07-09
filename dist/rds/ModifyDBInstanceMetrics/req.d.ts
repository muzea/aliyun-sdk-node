export interface ModifyDBInstanceMetricsRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1s1j103lo6****`
     */
    "DBInstanceName": string;
    /**
     * 本次变更的应用范围。取值：
     * * **instance**：实例级别，即仅将变更应用到当前实例。
     * * **region**：地域级别，即将变更应用到当前地域中所有存储类型和当前实例相同的RDS PostgreSQL实例。例如当前实例为云盘，则本次变更会应用到当前地域下的所有RDS PostgreSQL云盘实例中。
     * @example `instance`
     */
    "Scope": string;
    /**
     * 设置实例的监控指标。可传入多个指标Key，用英文逗号（,）分隔，最多30个。
     * 您可调用DescribeAvailableMetrics接口获取增强监控指标Key。
     * @example `os.cpu_usage.sys.avg,os.cpu_usage.user.avg`
     */
    "MetricsConfig": string;
}
