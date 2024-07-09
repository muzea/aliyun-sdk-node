export interface ListWorkspacesRequest {
    /**
     * 标记当前开始读取的位置。
     * @example `1`
     */
    "nextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "maxResults"?: number;
    /**
     * 根据工作空间名称模糊搜索。
     * @example `test_workspace`
     */
    "name"?: string;
    /**
     * 工作空间状态
     * @example `running`
     */
    "state"?: string;
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
