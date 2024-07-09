export interface DescribeDownloadRecordsResponse {
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
         * 下载查询分析记录后，文件会先上传到OSS，完成上传后才能进行下载，该参数为上传任务的状态，取值如下：
         * - **running**：上传中。
         * - **finished**：上传完成。
         * - **failed**：上传失败。
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
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
}
