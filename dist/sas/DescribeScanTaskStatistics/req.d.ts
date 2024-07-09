export interface DescribeScanTaskStatisticsRequest {
    /**
     * 要查询的病毒检测告警事件处理的紧急程度，多个紧急程度之间使用半角逗号（,）分隔，紧急程度依次递减。取值：
     * - **serious**：紧急
     * - **suspicious**：可疑
     * - **remind**：提醒
     * @example `serious,suspicious,remind`
     */
    "Levels"?: string;
}
