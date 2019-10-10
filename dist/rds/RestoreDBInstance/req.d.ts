interface RestoreDBInstanceRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxx`
    */ "ClientToken"?: string;
    /**
    * 备份集ID。可以通过接口[DescribeBackups](~~26273~~)查询备份集ID。
    * >**BackupId**和**RestoreTime**必须传入一个。
    * @example `327329803`
    */ "BackupId"?: string;
    /**
    * 用户指定备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * >**BackupId**和**RestoreTime**必须传入一个。
    * @example `2011-06-11T16:00:00Z`
    */ "RestoreTime"?: string;
}
export { RestoreDBInstanceRequest };