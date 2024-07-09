export interface AssignJobsRequest {
    /**
     * 实例ID。
     * @example `12f3dd08-0c55-44ce-9b64-e69d35ed3a76`
     */
    "InstanceId": string;
    /**
     * 任务ID。
     * @example `d004cfd2-6a81-491c-83c6-cbe186620c95`
     */
    "JobGroupId": string;
    /**
     * 作业组执行策略
     * name：策略名称。
     * maxAttemptsPerDay：作业每天最大执行次数。
     * minAttemptInterval：未接通情况下的重试时间间隔，单位为分钟。
     * startTime：开始时间戳。
     * endTime：结束时间戳。
     * workingTime：可呼出的时间窗口，24小时制。
     * Strategy优先级为: AssignJobs > CreateJobGroup。
     * @example `{"maxAttemptsPerDay":1,"name":"策略名字","startTime":1631503815256,"workingTime":[{"beginTime":"09:00:00","endTime":"12:00:00"},{"beginTime":"14:00:00","endTime":"16:00:00"}],"endTime":1631521815256,"minAttemptInterval":1}`
     */
    "StrategyJson"?: string;
    /**
     * 名单类型。
     * 接口对接方式下发外呼任务默认json，可不填。
     * @example `json`
     */
    "RosterType"?: string;
    /**
     * 解析外呼任务数据的任务ID。
     * 接口对接方式下发外呼任务可不填。
     * @example `d004cfd2-6a81-491c-83c6-cbe186620c95`
     */
    "JobDataParsingTaskId"?: string;
    /**
     * 是否异步。
     * 接口对接方式下发外呼任务可不填，默认为false。
     * @example `false`
     */
    "IsAsynchrony"?: boolean;
    /**
     * 主叫号码列表（给客户拨打电话时候的显示号码）。
     */
    "CallingNumber"?: string[];
    /**
     * 作业数据，格式是一个json数组，具体格式参考示例值。
     * JobsJson.N是个List，每个JobJson对应一个联系人(contact)。
     */
    "JobsJson"?: string[];
}
