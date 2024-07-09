export interface CopyDatabaseBetweenInstancesRequest {
    /**
     * 源实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp1v******`
     */
    "DBInstanceId": string;
    /**
     * 目标实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp18******`
     */
    "TargetDBInstanceId": string;
    /**
     * 复制数据库名称列表，格式如下：`原库名1,原库名2`。
     * @example `zhttest,zht001`
     */
    "DbNames": string;
    /**
     * 源实例备份集ID。按备份集复制数据库时，可以通过查询备份列表接口DescribeBackups获取备份集ID。
     * >**BackupId**和**RestoreTime**传入一个即可。
     * @example `106523874****`
     */
    "BackupId"?: string;
    /**
     * 按时间点复制数据库，可以选择备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >**BackupId**和**RestoreTime**传入一个即可。
     * @example `2011-06-11T16:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 是否复制用户和权限：
     * * **YES**：表示复制用户和权限。如果目标实例中有同名的用户，则该用户将叠加源实例的同名用户的权限。
     * * **NO**：表示不复制用户和权限。
     * 默认值：**NO**。
     * @example `NO`
     */
    "SyncUserPrivilege"?: string;
}
