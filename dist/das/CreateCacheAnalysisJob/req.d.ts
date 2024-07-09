export interface CreateCacheAnalysisJobRequest {
    /**
     * Redis实例ID。
     * @example `r-bp18ff4a195d****`
     */
    "InstanceId": string;
    /**
     * 实例的数据节点ID，传入本参数可查询指定节点的监控信息。
     * >当您传入BackupSetId参数，系统会忽略此参数，您可调用[DescribeLogicInstanceTopology](~~94665~~)接口查询节点ID。
     * @example `r-x****-db-0`
     */
    "NodeId"?: string;
    /**
     * 备份文件ID，可以通过[DescribeBackups](~~61081~~)接口获取。
     * - 如需传入多个备份文件ID，请使用英文逗号（,）分隔，例如`12345,67890`。
     * - 如果不传入本参数，系统会自动执行备份并对该备份文件执行缓存分析。
     * @example `12345`
     */
    "BackupSetId"?: string;
    /**
     * 用于识别Key前缀的分隔符。当分隔符为默认的`:;,_-+@=|#`时，不需要输入。
     * @example `&`
     */
    "Separators"?: string;
}
