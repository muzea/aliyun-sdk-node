interface DescribeBackupDBsRequest {
    "RegionId"?: string;
    /**
    * 待恢复数据的源实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "SourceDBInstance": string;
    "OwnerId"?: number;
    /**
    * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页可展示的记录数，取值： **30**、**50**、**100**，默认值为**30**。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 实例所需恢复的时间点，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
    * >
    * - 本参数可取值为7天内的任意时间，但是须早于当前时间，且晚于实例的创建时间。
    * - 本参数和**BackupId**参数两者中必须传入一项。
    * @example `2019-08-22T12:00:00Z`
    */ "RestoreTime"?: string;
    /**
    * 备份ID。
    * > - 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份ID。
    * - 本参数和**RestoreTime**参数两者中必须传入一项。
    * @example `5664xxxx`
    */ "BackupId"?: string;
}
export { DescribeBackupDBsRequest };