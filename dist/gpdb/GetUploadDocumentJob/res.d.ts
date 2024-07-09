export interface GetUploadDocumentJobResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 接口返回详细信息。
     * @example `success`
     */
    Message: string;
    /**
     * 此接口状态，取值说明：
     * - **success**：成功。
     * - **fail**：失败。
     * @example `success`
     */
    Status: string;
    /**
     * 上传文档的任务的详细信息。
     */
    Job: {
        /**
         * Job ID。
         * @example `231460f8-75dc-405e-a669-0c5204887e91`
         */
        Id: string;
        /**
         * 操作是否完成。
         * @example `false`
         */
        Completed: boolean;
        /**
         * 任务创建时间。
         * @example `2024-01-08 16:52:04.864664`
         */
        CreateTime: string;
        /**
         * 任务更新时间。
         * @example `2024-01-08 16:53:04.864664`
         */
        UpdateTime: string;
        /**
         * 任务状态。取值说明：
         * - Success：成功。
         * - Failed：失败，失败原因可查看Error字段。
         * - Cancelling：正在取消中。
         * - Cancelled：已取消。
         * - Start：开始。
         * - Running：执行中。
         * - Pending：等待中。
         * @example `Running`
         */
        Status: string;
        /**
         * 当前操作异常或者失败时的错误信息。
         * @example `Failed to connect database.`
         */
        Error: string;
        /**
         * 上传进度，此数值为进度百分比，值为100时表示完成。
         * @example `20`
         */
        Progress: number;
    };
    /**
     * 切分结果。
     */
    ChunkResult: {
        /**
         * 切分后的文件链接，有效期为2h。文件格式为JSONL，每一行的格式为`{"page_content":"*****", "metadata": {"**":"***","**":"***"}`
         * @example `http://xxx/test.jsonl`
         */
        ChunkFileUrl: string;
        /**
         * 切分后的不带metadata的文件链接，有效期为2h。文件格式为纯文本，每一行为一条切分块。此文件可方便的用于embedding。
         * @example `http://xxx/test.txt`
         */
        PlainChunkFileUrl: string;
    };
    /**
     * 文档理解或Embedding消耗的token或条数。
     */
    Usage: {
        /**
         * 向量化时使用的token数。
         * > token是指将输入的文本分割成的最小单位；token可以是一个单词、一个词组、一个标点符号、一个字符等。
         * @example `475`
         */
        EmbeddingTokens: number;
        EmbeddingEntries: number;
    };
}
