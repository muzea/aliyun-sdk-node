export interface DescribeDownloadRecordsResponse {
    /**
     * 下载列表详情。
     */
    Records: {
        /**
         * 任务状态，取值为：
         * - **running**：正在下载。
         * - **finished**：已完成。
         * - **failed**：下载失败。
         * @example `finished`
         */
        Status: string;
        /**
         * 下载任务ID。
         * @example `69`
         */
        DownloadId: number;
        /**
         * 下载任务失败时返回的异常信息。
         * @example `The query result is empty.`
         */
        ExceptionMsg: string;
        /**
         * 文件下载地址。
         * @example `https://perth-download-task.oss-cn-beijing.aliyuncs.com/adbmysql/query-sql-logs/am-**************​/20210805104301-20210805164302.xlsx?Expires=1943514161&OSSAccessKeyId=*********&Signature=******"`
         */
        Url: string;
        /**
         * 下载文件名。
         * @example `20210806094635-20210806095135`
         */
        FileName: string;
    }[];
    /**
     * 请求ID。
     * @example `987F51BE-C4CB-332A-B159-63CE87******`
     */
    RequestId: string;
}
