export interface DeleteBackupRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 备份ID，多个备份之间用英文逗号（,）分隔。
     *
     * > 您可以通过[DescribeBackups](~~98102~~)接口查询BackupId。
     * @example `11111111`
     */
    "BackupId": string;
}
