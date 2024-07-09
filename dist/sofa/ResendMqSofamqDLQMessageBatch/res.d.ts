export interface ResendMqSofamqDLQMessageBatchResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 发送失败的消息的 ID，即 Message ID
     * @example `1E0578FE110F18B4AAC235C0C******,1E0578FE110F18B4AAC235C0C******`
     */
    Data: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
}
