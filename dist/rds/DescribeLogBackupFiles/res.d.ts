export interface DescribeLogBackupFilesResponse {
    /**
     * 所有日志文件大小之和，单位：Byte。
     * @example `2300`
     */
    TotalFileSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `F8EC669C-FC85-43D7-AF06-C3641626B37E`
     */
    RequestId: string;
    /**
     * 本页日志文件个数。
     * @example `100`
     */
    PageRecordCount: number;
    /**
     * 日志文件总数。
     * @example `17`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 日志文件列表。
         */
        BinLogFile: {
            /**
             * 日志文件记录的开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2018-10-31T08:40Z`
             */
            LogBeginTime: string;
            /**
             * 内网下载地址，若当前不可下载，则为空串。有效期1小时。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/****`
             */
            IntranetDownloadLink: string;
            /**
             * 链接过期时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-03-01T15:04:13Z`
             */
            LinkExpiredTime: string;
            /**
             * HTTP协议的下载链接。若当前不可下载，则为空串。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/****`
             */
            DownloadLink: string;
            /**
             * 日志文件记录的结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2018-10-31T08:40Z`
             */
            LogEndTime: string;
            /**
             * 日志文件大小。单位：Byte。
             * @example `788480`
             */
            FileSize: number;
        }[];
    };
}
