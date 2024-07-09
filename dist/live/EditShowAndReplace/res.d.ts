export interface EditShowAndReplaceResponse {
    /**
     * 任务信息，包含：
     * - **vodId**：点播文件ID。
     * - **mediaid**：媒体文件ID。
     * - **jobId**：任务ID。
     * @example `{         "vodId": "3e34733b40b9a96ccf5c1ff6f69****",         "mediaid": "eb1861d2c9a842340e989dd56****",         "jobId": "7d2fbc380b0e08e55fe98733764****"     }`
     */
    JobInfo: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
