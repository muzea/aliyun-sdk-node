export interface StartTaskRequest {
    /**
     * 机器人呼叫任务的唯一任务ID。
     * - 可通过[CreateTask](~~223556~~)接口获取。
     * - 或者在控制台的[任务管理](https://aiccs.console.aliyun.com/job/list)页面，获取任务ID。
     * @example `12****`
     */
    "TaskId": number;
    /**
     * 立即启动。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    "StartNow"?: boolean;
}
