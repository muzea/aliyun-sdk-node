export interface DeleteBackupFileRequest {
    /**
     * 地域ID。可调用DescribeDBInstanceAttribute获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备份集ID。单次最多传入100个备份集ID，多个值之间用半角逗号（,）隔开。
     * > - SQL Server仅支持传入单库备份ID。
     * > - 可以通过接口DescribeBackups查询备份集ID。
     * @example `29304****`
     */
    "BackupId"?: string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DBName"?: string;
    /**
     * 删除该时间点之前的备份文件。格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2011-06-11T16:00:00Z`
     */
    "BackupTime"?: string;
}
