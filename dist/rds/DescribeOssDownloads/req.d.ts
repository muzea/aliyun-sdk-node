export interface DescribeOssDownloadsRequest {
    /**
     * 实例ID。可通过DescribeDBInstances接口查询。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 迁移任务的ID，可通过DescribeMigrateTasks接口查询。
     * @example `5625458541`
     */
    "MigrateTaskId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
