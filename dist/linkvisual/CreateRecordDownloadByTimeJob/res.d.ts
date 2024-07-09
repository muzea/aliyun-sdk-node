export interface CreateRecordDownloadByTimeJobResponse {
    /**
     * 调用结果状态码：
     * - 调用成功，返回200。
     * - 调用失败，返回错误码。详细信息，请参见下文**错误码**。
     * @example `400`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Record not exist.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55***B7-4***-4***-8***-D3******F565`
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
     * 调用成功，返回的数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `w2s******`
         */
        JobId: string;
    };
}
