export interface GetObjectScanEventRequest {
    /**
     * 事件ID。
     * @example `81****`
     */
    "EventId"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
