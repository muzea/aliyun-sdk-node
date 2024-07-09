export interface DescribeTaskInstanceRequest {
    /**
     * 工作空间ID
     * @example `123***`
     */
    "workspaceId": string;
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    "projectId": string;
    /**
     * 工作流实例ID
     * @example `wi-3q9jo749ne5****`
     */
    "workflowInstanceId": string;
    /**
     * 任务实例ID
     * @example `ti-3q9jo749ne5****`
     */
    "taskInstanceId": string;
}
