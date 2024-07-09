export interface ListProjectsRequest {
    /**
     * 下一次请求的分页token。
     * @example `123abc***`
     */
    "nextToken"?: string;
    /**
     * 搜索值
     * @example `test`
     */
    "searchVal"?: string;
    /**
     * 一次获取的最大记录数
     * @example `10`
     */
    "maxResults"?: number;
    /**
     * 工作空间ID
     * @example `12345`
     */
    "workspaceId": string;
}
