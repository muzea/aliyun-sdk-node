export interface UpdateAlarmEventRequest {
    /**
     * 告警事件的ID列表。
     */
    "AlarmEventIdList"?: number[];
    /**
     * 告警事件的处理方式。取值：
     * - **manual_handled**：已处理
     * - **ignore**：忽略
     * - **cancel_ignore**：取消加白
     * @example `ignore`
     */
    "OperationCode"?: string;
    /**
     * 请求和接收消息的语言类型。取值包括：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
