export interface ListManualTaskInstancesRequest {
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
     * 搜索值
     * @example `test`
     */
    "searchVal"?: string;
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
     * 状态
     * @example `SUCCESS`
     */
    "status"?: string;
    /**
     * 开始时间
     * @example `2024-03-27 00:00:00`
     */
    "startTime"?: string;
    /**
     * 结束时间
     * @example `2024-03-27 00:00:00`
     */
    "endTime"?: string;
}
