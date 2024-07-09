export interface DeleteScheduleRequest {
    /**
     * 待删除调度任务绑定的流程名称。
     * @example `flow`
     */
    "FlowName": string;
    /**
     * 待删除调度的名称。
     * @example `testScheduleName`
     */
    "ScheduleName": string;
}
