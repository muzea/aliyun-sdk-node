export interface SwitchSyntheticTaskStatusRequest {
    /**
     * 任务ID列表，最多一次指定30个。
     */
    "TaskIds"?: number[];
    /**
     * 任务启停状态。取值：
     * - **0**：停止任务。
     * - **1**：开始任务。
     * @example `0`
     */
    "SwitchStatus"?: number;
}
