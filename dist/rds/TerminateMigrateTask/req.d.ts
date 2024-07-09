export interface TerminateMigrateTaskRequest {
    /**
     * RDS SQL Server实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp159vf****`
     */
    "DBInstanceId": string;
    /**
     * 备份上云任务的ID，可以通过DescribeMigrateTasks接口查询。
     * @example `56254****`
     */
    "MigrateTaskId": string;
}
