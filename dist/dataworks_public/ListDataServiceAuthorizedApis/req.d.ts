export interface ListDataServiceAuthorizedApisRequest {
    /**
     * 工作空间的ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 页码，从1开始，默认值为1。
     * @example `PageNumber`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 该字段已废弃。租户ID。
     * @example `10001`
     */
    "TenantId"?: number;
    /**
     * API名称的关键词，通过过滤获取API名称包含该关键词的API。
     * @example `我的API名称`
     */
    "ApiNameKeyword"?: string;
}
