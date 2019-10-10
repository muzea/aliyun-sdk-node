interface CopyDatabaseBetweenInstancesRequest {
    "RegionId"?: string;
    /**
    * 源实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 目标实例ID，不能与源实例ID相同。
    * @example `rm-ut5ajk3xxxxxxx`
    */ "TargetDBInstanceId": string;
    /**
    * 复制数据库名称列表，格式：{"源实例数据库名称":"目标实例数据库名称"}。
    * @example `{"test1":"test2"}`
    */ "DbNames": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "PayType"?: string;
    /**
    * 源实例备份集ID。按备份集复制数据库时，可以通过查询备份列表接口[DescribeBackups](~~26273~~)获取备份集ID。
    * @example `1065238746521`
    */ "BackupId"?: string;
    /**
    * 按时间点复制数据库，可以选择备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * @example `2011-06-11T16:00:00Z`
    */ "RestoreTime"?: string;
    /**
    * 是否复制用户和权限：
    * * **YES**：表示复制用户和权限。如果目标实例中有同名的用户，则该用户将叠加源实例的同名用户的权限；
    * * **NO**：表示不复制用户和权限。
    * 默认值：**NO**。
    * @example `NO`
    */ "SyncUserPrivilege"?: string;
    "ResourceGroupId"?: string;
}
export { CopyDatabaseBetweenInstancesRequest };