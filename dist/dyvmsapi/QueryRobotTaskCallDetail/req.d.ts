interface QueryRobotTaskCallDetailRequest {
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
    * 被叫号码
    * @example `13000000000`
    */ "Callee"?: string;
    /**
    * 需要查询时间的时间戳。
    * @example `1562297550000`
    */ "QueryDate"?: number;
}
export { QueryRobotTaskCallDetailRequest };