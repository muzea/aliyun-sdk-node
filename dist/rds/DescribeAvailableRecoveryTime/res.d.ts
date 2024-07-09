export interface DescribeAvailableRecoveryTimeResponse {
    /**
     * 跨地域备份文件可恢复的结束时间。格式：yyyy-MM-ddTHH:mm:ssZ（GMT时间）。
     * @example `2024-03-07T02:23:26Z`
     */
    RecoveryEndTime: string;
    /**
     * 请求ID。
     * @example `8CCBF4BA-7CE1-47E1-B49F-E97EA200A40D`
     */
    RequestId: string;
    /**
     * 跨地域备份文件ID。
     * @example `1249****`
     */
    CrossBackupId: number;
    /**
     * 跨地域备份文件可恢复的起始时间。格式：yyyy-MM-ddTHH:mm:ssZ（GMT时间）。
     * @example `2024-03-04T21:00:47Z`
     */
    RecoveryBeginTime: string;
    /**
     * 源实例所在地域。
     * @example `cn-chengdu`
     */
    RegionId: string;
}
