interface CancelRobotTaskRequest {
    "RegionId"?: string;
    /**
    * 主账号的ID，即UID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 机器人呼叫任务的唯一任务ID。
    * @example `1045001`
    */ "TaskId"?: number;
}
export { CancelRobotTaskRequest };