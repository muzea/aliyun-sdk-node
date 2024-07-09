export interface GetTaskRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 任务ID，可从接口ListTasks获取。
     * @example `3`
     */
    "TaskId": string;
}
