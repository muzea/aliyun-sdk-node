export interface DescribeMigrateTaskByIdRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp11e1tzg****`
     */
    "DBInstanceId": string;
    /**
     * 备份上云任务的ID，可以通过DescribeMigrateTasks接口查询。
     * @example `235943`
     */
    "MigrateTaskId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
