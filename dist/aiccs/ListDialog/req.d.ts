export interface ListDialogRequest {
    /**
     * 机器人呼叫任务的唯一任务ID。
     * - 可通过[CreateTask](~~223556~~)接口获取。
     * - 或者在控制台的[任务管理](https://aiccs.console.aliyun.com/job/list)页面，获取任务ID。
     * @example `12****`
     */
    "TaskId": number;
    /**
     * 被叫号码。
     * 可调用[ListTaskDetail](~~2718009~~)接口查询，接口返回参数的**Called**即被叫号码。
     * @example `130****0000`
     */
    "Called": string;
}
