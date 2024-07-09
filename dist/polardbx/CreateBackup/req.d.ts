export interface CreateBackupRequest {
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名。
     * @example `pxc-**************`
     */
    "DBInstanceName": string;
    /**
     * 备份种类，目前只支持“0”，表示快速备份。
     * @example `0`
     */
    "BackupType"?: string;
}
