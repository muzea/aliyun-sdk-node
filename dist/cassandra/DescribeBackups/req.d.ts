export interface DescribeBackupsRequest {
    /**
     * 备份集群ID。
     * @example `cds-uf6m0bod****6158`
     */
    "ClusterId": string;
    /**
     * 备份集群数据中心ID。
     * @example `cn-shanghai-e`
     */
    "DataCenterId": string;
    /**
     * 备份类型。取值：
     * - full：全量备份
     * - Incremental：增量备份
     * @example `Incremental`
     */
    "BackupType": string;
}
