export interface DescribeDataBackupsResponse {
    /**
     * 本页备份集个数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `3E387971-33A5-5019-AD7F-DC**********`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 总备份集大小，单位：Byte。
     * @example `1111111111`
     */
    TotalBackupSize: number;
    /**
     * 备份集列表。
     */
    Items: {
        /**
         * 备份类型。取值说明：
         * - **DATA**：全量备份。
         * - **RESTOREPOI**：可恢复点。
         * @example `DATA`
         */
        DataType: string;
        /**
         * - 全量备份：返回一致性时间点的时间戳。
         * - 可恢复点：返回可恢复时间点的时间戳。
         * @example `1576506856`
         */
        ConsistentTime: number;
        /**
         * 备份集状态。取值说明：
         * - **Success**：成功。
         * - **Failure**：失败。
         * @example `Success`
         */
        BackupStatus: string;
        /**
         * 备份开始时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-12-22T12:00:25Z`
         */
        BackupStartTime: string;
        /**
         * 备份结束时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-12-22T12:01:43Z`
         */
        BackupEndTime: string;
        /**
         * 本次备份结束时间（当地时间）。
         * @example `2021-12-22 20:00:25`
         */
        BackupEndTimeLocal: string;
        /**
         * 备份集ID。
         * @example `1111111111`
         */
        BackupSetId: string;
        /**
         * 恢复点名称或全量备份集名称。
         * @example `adbpgbackup_555*****_20211222200019`
         */
        BaksetName: string;
        /**
         * 备份文件大小，单位：Byte。
         * @example `2167808`
         */
        BackupSize: number;
        /**
         * 备份模式。
         * 全量备份取值说明：
         * - **Automated**：系统自动备份。
         * - **Manual**：手动备份。
         * 恢复点取值说明：
         * - **Automated**：全量备份后的恢复点。
         * - **Manual**：用户手动触发的恢复点。
         * - **Period**：因为备份策略，定时触发的恢复点。
         * @example `Automated`
         */
        BackupMode: string;
        /**
         * 本次备份开始时间（当地时间）。
         * @example `2011-05-30 03:29:00`
         */
        BackupStartTimeLocal: string;
        /**
         * 实例ID。
         * @example `gp-bp**************-master`
         */
        DBInstanceId: string;
        /**
         * 备份方式，返回值如下：
         * * **Physical**：物理备份
         * * **Snapshot**：快照备份
         * @example `Physical`
         */
        BackupMethod: string;
    }[];
}
