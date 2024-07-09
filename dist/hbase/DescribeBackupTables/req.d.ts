export interface DescribeBackupTablesRequest {
    /**
     * 该备份集群Id。
     * @example `ld-m5eznlga4k5bcxxxx`
     */
    "ClusterId": string;
    /**
     * 备份记录ID，可通过DescribeBackupSummary接口获取。
     * @example `2020110302xxxx`
     */
    "BackupRecordId": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页码大小。
     * @example `10`
     */
    "PageSize"?: number;
}
