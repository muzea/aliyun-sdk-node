export interface DescribeBackupLogsResponse {
    /**
     * 总记录数。
     * @example `2`
     */
    TotalRecordCount: string;
    /**
     * 本页记录数。
     * @example `2`
     */
    PageRecordCount: string;
    /**
     * 请求ID。
     * @example `ADAC63DB-0691-4ECE-949A-FAEA68******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    Items: {
        /**
         * 备份日志详情。
         */
        BackupLog: {
            /**
             * 备份日志ID。
             * @example `1111111111`
             */
            BackupLogId: string;
            /**
             * 备份日志的内网下载链接。
             * @example `http://***********.oss-cn-hangzhou-internal.aliyuncs.com`
             */
            IntranetDownloadLink: string;
            /**
             * 下载链接的过期时间。
             * @example `2020-02-14T08:40:50Z`
             */
            LinkExpiredTime: string;
            /**
             * 本次备份日志开始时间，格式为`YYYY-MM-DD'T'HH:mm:ssZ`（UTC时间）。
             * @example `2020-02-12T03:54:43Z`
             */
            BackupLogStartTime: string;
            /**
             * 本次备份日志结束时间，格式为`YYYY-MM-DD'T'HH:mm:ssZ`（UTC时间）。
             * @example `2020-02-12T03:55:31Z`
             */
            BackupLogEndTime: string;
            /**
             * 备份日志的公网下载链接。
             * @example `http://***********.oss-cn-hangzhou.aliyuncs.com`
             */
            DownloadLink: string;
            /**
             * 备份日志大小，单位为Byte。
             * @example `1073741824`
             */
            BackupLogSize: string;
            /**
             * 备份日志文件名。
             * @example `ib_logfile1`
             */
            BackupLogName: string;
        }[];
    };
}
