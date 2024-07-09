export interface ListWorkflowsRequest {
    /**
     * 工作空间ID
     * @example `12345`
     */
    "workspaceId": string;
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    "projectId": string;
    /**
     * 下一次请求的分页token。
     * @example `123abc***`
     */
    "nextToken"?: string;
    /**
     * 一次获取的最大记录数
     * @example `20`
     */
    "maxResults"?: number;
    /**
     * 搜索值
     * @example `test`
     */
    "searchVal"?: string;
}
