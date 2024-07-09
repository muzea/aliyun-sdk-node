export interface ListTaskLogsRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 任务ID，可从接口ListTasks获取。
     * @example `4`
     */
    "TaskId": string;
    /**
     * 页码，起始值为1，默认值为10。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
