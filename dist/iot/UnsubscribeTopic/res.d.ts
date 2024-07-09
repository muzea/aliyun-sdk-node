export interface UnsubscribeTopicResponse {
    /**
     * 调用结果状态码：
     * - 调用成功，返回空值。
     * - 调用失败，返回错误码。详细信息，请参见下文**错误码**。
     * @example `400`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The unsub topic list is empty.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55***B7-4***-4***-8***-D3******F565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    FailureTopics: {
        topic: any[];
    };
}
