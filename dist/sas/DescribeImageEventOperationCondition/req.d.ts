export interface DescribeImageEventOperationConditionRequest {
    /**
     * 告警类型。
     * - **sensitiveFile**：敏感文件。
     * @example `sensitiveFile`
     */
    "EventType"?: string;
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
