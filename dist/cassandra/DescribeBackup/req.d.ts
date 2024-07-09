export interface DescribeBackupRequest {
    /**
     * 备份集群ID。
     * @example `cds-bp11tjzh50****78`
     */
    "ClusterId": string;
    /**
     * 备份集群数据中心ID。
     * @example ` cn-hangzhou-g`
     */
    "DataCenterId": string;
    /**
     * 备份ID。
     * @example `2020010121****`
     */
    "BackupId": string;
    /**
     * 备份类型。取值：
     * - full：全量备份
     * - Incremental：增量备份
     * @example `Incremental`
     */
    "BackupType": string;
}
