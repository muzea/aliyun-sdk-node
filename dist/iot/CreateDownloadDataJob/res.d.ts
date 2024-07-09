export interface CreateDownloadDataJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `no authorization.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `4D6D7F71-1C94-4160-8511-EFF4B8F0643F`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求的返回结果。
     */
    Data: {
        /**
         * 下载任务的执行状态。
         * - **-1**：初始化中。
         * - **0**：运行中。
         * - **1**：执行成功。
         * - **2**：执行失败。
         * - **3**：已提交，等待中。
         * - **4**：已取消。
         * @example `-1`
         */
        Status: number;
        /**
         * 下载任务的ID。
         * @example `62d949808bc742187xxxxxx`
         */
        LongJobId: string;
        /**
         * 是否是异步查询。
         * - **true**：是异步查询。
         * - **false**：不是异步查询，是同步查询。
         * @example `true`
         */
        AsyncExecute: boolean;
        /**
         * OSS文件的下载地址。
         * @example `https://oss-xxxx-xxxx.xxxx......`
         */
        CsvUrl: string;
        /**
         * 下载文件的名称。
         * @example `test_download_file`
         */
        CsvFileName: string;
    };
}
