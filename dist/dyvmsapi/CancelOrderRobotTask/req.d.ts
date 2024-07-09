export interface CancelOrderRobotTaskRequest {
    /**
     * 机器人呼叫任务的唯一任务ID。可以通过[CreateRobotTask](~~393531~~)接口获取。
     * @example `1045001`
     */
    "TaskId": number;
}
