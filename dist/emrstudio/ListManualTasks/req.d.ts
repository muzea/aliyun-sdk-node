export interface ListManualTasksRequest {
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    "projectId": string;
    /**
     * 工作空间ID
     * @example `123***`
     */
    "workspaceId": string;
    /**
     * 下一次请求的分页token。
     * @example `123abc***`
     */
    "nextToken"?: string;
    /**
     * 一次获取的最大记录数
     * @example `10`
     */
    "maxResults"?: number;
    /**
     * 搜索值
     * @example `test`
     */
    "searchVal"?: string;
    /**
     * 任务类型
     * @example `SHELL`
     */
    "taskType"?: string;
}
