export interface DescribeScheduledTaskRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 任务ID
     * @example `2f12c585-5873-11ea-974a-7cd30ad3e268`
     */
    "taskId": string;
}
