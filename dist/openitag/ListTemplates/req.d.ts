export interface ListTemplatesRequest {
    /**
     * 租户id，可以通过ListTenants租户列表查询的API来查询。
     * @example `GAR***134`
     */
    "TenantId": string;
    /**
     * 页面标号
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 搜索内容
     * @example `demo`
     */
    "SearchKey"?: string;
    /**
     * 应用类型列表。
     */
    "Types"?: string[];
}
