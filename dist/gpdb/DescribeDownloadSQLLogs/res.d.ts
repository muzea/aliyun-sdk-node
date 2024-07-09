export interface DescribeDownloadSQLLogsResponse {
    /**
     * 下载记录列表。
     */
    Records: {
        /**
         * 下载记录ID。
         * @example `1150`
         */
        DownloadId: number;
        /**
         * 错误信息。
         * @example `Error message`
         */
        ExceptionMsg: string;
        /**
         * 文件名。
         * @example `20220509113448-20220509173448.csv`
         */
        FileName: string;
        /**
         * 任务状态，取值为：
         * - **running**：正在下载。
         * - **finished**：已完成。
         * - **failed**：下载失败。
         * @example `finished`
         */
        Status: string;
        /**
         * 下载链接。
         * @example `https://perth-download-task.oss-cn-beijing.aliyuncs.com/*****`
         */
        DownloadUrl: string;
    }[];
    /**
     * 请求ID。
     * @example `FDE9942A-D919-527B-B559-5D0F6F20CCEC`
     */
    RequestId: string;
}
