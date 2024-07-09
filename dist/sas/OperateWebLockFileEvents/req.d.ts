export interface OperateWebLockFileEventsRequest {
    /**
     * 是否处理所有。取值：
     * - **1**：是
     * - **0**：否
     * @example `1`
     */
    "DealAll": number;
    /**
     * 告警事件的处理方式。取值：
     * - **mark_mis_info**：标记为误报
     * - **rm_mark_mis_info**：取消标记误报
     * - **offline_handled**：已线下处理
     * - **whitelist**：加白
     * - **rm_whitelist**：取消加白
     * @example `whitelist`
     */
    "OperationCode": string;
    /**
     * 告警事件id列表。
     */
    "EventIds": number[];
}
