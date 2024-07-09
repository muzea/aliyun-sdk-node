export interface DescribeActiveOperationTaskTypeRequest {
    /**
     * 是否返回历史运维任务。取值：
     * - **0**：仅返回当前待处理的运维任务。
     * - **1**：返回历史运维任务。
     * 默认值：**0**。
     * @example `0`
     */
    "IsHistory"?: number;
}
