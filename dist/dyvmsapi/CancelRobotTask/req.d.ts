export interface CancelRobotTaskRequest {
    /**
     * 机器人呼叫任务的唯一任务ID。调用[CreateRobotTask](~~393531~~)接口获取。
     * @example `1045001`
     */
    "TaskId"?: number;
}
