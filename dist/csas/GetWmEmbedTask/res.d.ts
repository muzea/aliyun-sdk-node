export interface GetWmEmbedTaskResponse {
    /**
     * 本次请求的ID。
     * @example `D6707286-A50E-57B1-B2CF-EFAC59E850D8`
     */
    RequestId: string;
    /**
     * 水印嵌入任务结果。
     */
    Data: {
        /**
         * 任务ID。
         * @example `job:5GfrJYsoaffmCE7Z5bZtjUxxxxxxxxxx`
         */
        TaskId: string;
        /**
         * 任务状态。取值：
         * - **Running**：运行中。
         * - **Success**：成功。
         * - **Failed**：失败。
         * @example `Success`
         */
        TaskStatus: string;
        /**
         * 嵌入水印信息得到的文件的临时URL。
         * @example `https://example.com/embed-****.pdf`
         */
        FileUrl: string;
        /**
         * FileUrl的过期时间，格式为Unix时间戳，精度为秒。
         * @example `171859****`
         */
        FileUrlExp: string;
        /**
         * 嵌入水印信息得到的文件的文件名。
         * @example `embed-****.pdf
        `
         */
        Filename: string;
        /**
         * 嵌入水印信息得到的文件的md5哈希，用于排查问题。
         * @example `d41d8cd98f00b204e9800998ecf8****`
         */
        OutFileHashMd5: string;
        /**
         * 嵌入水印信息得到的文件的大小，单位为字节。用于排查问题。
         * @example `123**`
         */
        OutFileSize: number;
    };
}
