export interface TranslateImageBatchResponse {
    /**
     * 请求标识
     * @example `D774D33D-F1CB-5A2C-A787-E0A2179239CE`
     */
    RequestId: string;
    /**
     * 请求信息
     * @example `OK`
     */
    Message: string;
    /**
     * 请求结果状态码
     * @example `200`
     */
    Code: number;
    /**
     * 数据内容
     */
    Data: {
        /**
         * 任务 ID，用于后续获取翻译结果
         * @example `EEA28E6D-4828-5031-BD8C-8FF1B3216842`
         */
        TaskId: string;
    };
}
