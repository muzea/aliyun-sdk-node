export interface ListLiveRecordTemplatesRequest {
    /**
     * 搜索关键词，可以根据模板ID和名称搜索。名称支持模糊搜索。
     * @example `test template`
     */
    "Keyword"?: string;
    /**
     * 模板类型。
     * @example `custom`
     */
    "Type"?: string;
    "TemplateIds"?: string[];
    /**
     * 分页的页码。最小值：1。默认值：1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小。1～100。默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序参数，默认按创建时间倒序。
     * @example `desc`
     */
    "SortBy"?: string;
}
