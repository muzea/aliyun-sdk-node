export interface DeleteTaskRequest {
    /**
     * 租户id，可以通过ListTenantId租户列表查询的API来查询。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务id，可在iTAG的任务中心中获取。
     * @example `15***2518306500608`
     */
    "TaskId": string;
}
