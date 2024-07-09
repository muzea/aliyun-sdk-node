export interface ListPreManagedRulesRequest {
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 默认值：10。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 资源类型列表。
     */
    "ResourceTypes"?: string[];
}
