interface DescribeOssDownloadsRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 迁移任务的ID，可以通过[DescribeMigrateTasks](~~64563~~)接口查询。
    * @example `5625458541`
    */ "MigrateTaskId": string;
    "OwnerId"?: number;
}
export { DescribeOssDownloadsRequest };