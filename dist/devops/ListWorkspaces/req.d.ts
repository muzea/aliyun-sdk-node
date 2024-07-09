export interface ListWorkspacesRequest {
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始
     * @example `beb1eff55bf03a13cf321a395dxxxxxx`
     */
    "nextToken"?: string;
    /**
     * 本次读取的最大数据记录数量，默认10，最大100
     * @example `10`
     */
    "maxResults"?: number;
    /**
     * 工作空间状态列表
     */
    "statusList"?: string[];
    /**
     * 技术栈列表
     */
    "workspaceTemplateList"?: string[];
}
