export interface StartRobotTaskRequest {
    /**
     * 机器人呼叫任务的唯一任务ID。可通过[CreateRobotTask](~~CreateRobotTask~~)接口获取。
     * @example `104500****`
     */
    "TaskId": number;
    /**
     * 定时启动时间。格式为yyyy-MM-dd HH:mm:ss。
     * @example `2019-06-14 14:55:23`
     */
    "ScheduleTime"?: string;
}
