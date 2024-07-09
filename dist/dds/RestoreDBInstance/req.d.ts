export interface RestoreDBInstanceRequest {
    /**
     * 实例ID。
     * @example `dds-bp2356****`
     */
    "DBInstanceId": string;
    /**
     * 备份ID。
     * > 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份ID。
     * @example `22536****`
     */
    "BackupId": number;
}
