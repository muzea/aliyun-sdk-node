export interface DescribeTaskRequest {
    /**
     * 工作空间ID
     * @example `123***`
     */
    "workspaceId": string;
    /**
     * 工作流ID
     * @example `w-3q9jo749ne5****`
     */
    "workflowId": string;
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    "projectId": string;
    /**
     * 任务ID
     * @example `t-3q9jo749ne5****`
     */
    "taskId": string;
}
