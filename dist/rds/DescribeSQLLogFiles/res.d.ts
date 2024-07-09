export interface DescribeSQLLogFilesResponse {
    /**
     * 请求ID。
     * @example ` 1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页记录数。
     * @example `10`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `10`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 审计文件列表。
         */
        LogFile: {
            /**
             * 文件名称。
             * @example `custins****.csv`
             */
            FileID: string;
            /**
             * SQL起始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-05-23T07:00:00Z`
             */
            LogStartTime: string;
            /**
             * 日志文件大小，单位：Byte。
             * @example `3000`
             */
            LogSize: string;
            /**
             * 下载地址。若当前不可下载，则为空。
             * @example `http://rdslog-hz-v3.oss-cn-hangzhou.aliyuncs.com/****`
             */
            LogDownloadURL: string;
            /**
             * SQL结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-05-24T07:00:00Z`
             */
            LogEndTime: string;
            /**
             * 文件当前状态，取值：
             * * **Success**：生成成功
             * * **Failed**：生成失败
             * * **Generating**：生成中
             * @example `Success`
             */
            LogStatus: string;
        }[];
    };
}
