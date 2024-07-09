export interface ExecuteCallTaskRequest {
    /**
     * 任务ID。通过[CreateCallTask](~~CreateCallTask~~)接口获取。
     * @example `2256****`
     */
    "TaskId": number;
    /**
     * 任务启动状态。取值：
     * - **RUNNING**：立即启动。
     * - **STOP**：停止任务。
     * - **CANCEL**：取消任务。
     * @example `RUNNING`
     */
    "Status": string;
    /**
     * 定时启动时间。格式为：yyyy-MM-dd HH:mm:ss。
     * > 如果此处为空，则不用填写该字段。
     * @example `2021-03-09 00:00:00`
     */
    "FireTime"?: string;
}
