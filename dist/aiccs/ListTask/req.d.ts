export interface ListTaskRequest {
    /**
     * 任务名称。
     * @example `任务测试`
     */
    "TaskName"?: string;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 任务状态。取值：
     * - **INIT**：未开始。
     * - **RELEASE**：解析中。
     * - **RUNNING**：执行中。
     * - **STOP**：手动暂停。
     * - **SYSTEM_STO**P：系统暂停。
     * - **READY**：待执行。
     * - **CANCE**L：手动终止。
     * - **SYSTEM_CANCE**L：系统终止。
     * - **DONE**：已完成。
     * @example `STOP`
     */
    "Status"?: string;
    /**
     * 机器人呼叫任务的唯一任务ID。
     * - 可通过[CreateTask](~~223556~~)接口获取。
     * - 或者在控制台的[任务管理](https://aiccs.console.aliyun.com/job/list)页面，获取任务ID。
     * @example `12****`
     */
    "TaskId"?: number;
    /**
     * 机器人名称。
     * @example `机器人`
     */
    "RobotName"?: string;
}
