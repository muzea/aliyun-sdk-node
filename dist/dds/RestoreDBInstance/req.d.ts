interface RestoreDBInstanceRequest {
    "RegionId"?: string;
    /**
    * 备份ID。
    * > 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份ID。
    * @example `11111111`
    */ "BackupId": number;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { RestoreDBInstanceRequest };