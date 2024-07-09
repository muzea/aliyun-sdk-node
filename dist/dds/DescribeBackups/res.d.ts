export interface DescribeBackupsResponse {
    /**
     * 备份总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `275D43C3-F12F-5224-B375-0C6BF453BD56`
     */
    RequestId: string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Backups: {
        /**
         * 备份文件详情列表。
         */
        Backup: {
            /**
             * 备份状态，取值说明：
             * - **Success**：备份成功。
             * - **Failed**：备份失败。
             * @example `Success`
             */
            BackupStatus: string;
            /**
             * 备份类型，取值说明：
             * - **FullBackup**：全量备份。
             * - **IncrementalBackup**：增量备份。
             * @example `FullBackup`
             */
            BackupType: string;
            /**
             * 本次备份开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-01-14T03:56:17Z`
             */
            BackupStartTime: string;
            /**
             * 备份文件的内网下载地址。
             * > 您可以通过该地址在ECS服务器（与云数据库MongoDB实例在同一网络）上下载目标备份文件。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/custins5559*****​/hins1936****_data_2022052504****_qp.xb?Expires=165361****&OSSAccessKeyId=LTAI4G2wxd32KLGARfi****&Signature=lkFPjOY%2F8adB18vnOCbtmT7ii****&Region=cn-hangzhou`
             */
            BackupIntranetDownloadURL: string;
            /**
             * 备份文件大小，单位：Byte。
             * @example `6168576`
             */
            BackupSize: number;
            /**
             * 备份文件的外网下载地址，若当前不可下载，则返回为空字符串。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/custins5559****​/hins1936****_data_2022052504****_qp.xb?Expires=165361****&OSSAccessKeyId=LTAI4G2wxd32KLGARf****&Signature=lkFPjOY%2F8adB18vnOCbtmT7****&Region=cn-hangzhou`
             */
            BackupDownloadURL: string;
            /**
             * 备份模式，取值说明：
             * - **Automated**：系统自动备份。
             * - **Manual**：手动备份。
             * @example `Automated`
             */
            BackupMode: string;
            /**
             * 本次备份结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-01-14T03:57:34Z`
             */
            BackupEndTime: string;
            /**
             * 备份ID。
             * @example `32102****`
             */
            BackupId: string;
            /**
             * 备份的数据库名。
             * @example `database`
             */
            BackupDBNames: string;
            /**
             * 备份方式，取值说明：
             * - **Snapshot**：快照备份。
             * - **Physical**：物理备份。
             * - **Logical**：逻辑备份。
             * @example `Physical`
             */
            BackupMethod: string;
            /**
             * 备份集任务ID。
             * @example `1123xxxx`
             */
            BackupJobId: string;
            BackupName: string;
            BackupScale: string;
            IsAvail: boolean;
        }[];
    };
}
