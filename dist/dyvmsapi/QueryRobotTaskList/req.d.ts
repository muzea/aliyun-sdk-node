export interface QueryRobotTaskListRequest {
    /**
     * 任务名称。
     * @example `任务测试`
     */
    "TaskName"?: string;
    /**
     * 任务状态。取值：
     * - **INIT**：未开始。
     * - **READY**：准备开始。
     * - **DISPATCH**：解析中。
     * - **EXCUTING**：执行中。
     * - **MANUAL_STOP**：手动暂停。
     * - **SYSTEM_STOP**：系统暂停。
     * - **ARREARS_STOP**：欠费暂停。
     * - **CANCEL**：手动终止。
     * - **SYSTEM_CANCEL**：系统终止。
     * - **FINISH**：已完成。
     * @example `EXCUTING`
     */
    "Status"?: string;
    /**
     * 任务创建日期。格式：yyyy-MM-dd。
     * @example `2019-06-14`
     */
    "Time"?: string;
    /**
     * 每页个数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNo"?: number;
}
