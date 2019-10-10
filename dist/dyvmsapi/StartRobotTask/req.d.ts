interface StartRobotTaskRequest {
    "RegionId"?: string;
    /**
    * 主账号的ID，即UID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 机器人呼叫任务的唯一任务ID。
    * @example `1045001`
    */ "TaskId"?: number;
    /**
    * 定时启动时间，格式为yyyy-MM-dd HH:mm:ss。
    * @example `2019-06-14 14:55:23`
    */ "ScheduleTime"?: string;
}
export { StartRobotTaskRequest };