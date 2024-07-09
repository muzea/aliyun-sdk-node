export interface ModifyTaskInfoRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务id，多个英文逗号分隔，最多支持10个。
     * @example `t-83br18hlpdrw3uxxxx`
     */
    "TaskId": string;
    /**
     * 当前用户可见的步骤名。
     * @example `exec_task
    `
     */
    "StepName": string;
    /**
     * 操作名，值为[DescribeHistoryTasks](~~2639186~~)得到的actionInfo内相应状态对应的操作action名称。
     * @example `modifySwitchTime`
     */
    "TaskAction": string;
    /**
     * 动作相关的参数，根据业务需要扩展，不同的taskAction名需传不同的值。
     * @example `{\"recoverMode\":\"immediate\"}`
     */
    "ActionParams"?: string;
}
