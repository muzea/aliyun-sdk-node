export interface DescribeBackupSetRequest {
    /**
     * PolarDB-X实例名称。
     * @example `pxc-htri0ori2r****`
     */
    "DBInstanceName": string;
    /**
     * 备份集ID。
     * @example `111`
     */
    "BackupSetId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 跨地域备份的目标地域。
     * @example `cn-shanghai`
     */
    "DestCrossRegion"?: string;
}
