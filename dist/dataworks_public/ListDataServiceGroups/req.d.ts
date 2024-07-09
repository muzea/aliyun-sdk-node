export interface ListDataServiceGroupsRequest {
    /**
     * 页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 工作空间的ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 该字段已废弃。租户ID。
     * @example `10001`
     */
    "TenantId"?: number;
    /**
     * 业务流程名称关键词，可以进行子串匹配。
     * @example `测试业务流程`
     */
    "GroupNameKeyword"?: string;
}
