export interface DescribeBackupDbsRequest {
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 按恢复时间查询。
     * @example `1568632541236`
     */
    "PreferredRestoreTime"?: string;
    /**
     * 按备份集ID查询
     * @example `201908367`
     */
    "BackupId"?: string;
}
