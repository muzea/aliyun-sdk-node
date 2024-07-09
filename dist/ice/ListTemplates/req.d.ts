export interface ListTemplatesRequest {
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为20，最大值为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 模板类型。
     * @example `Timeline`
     */
    "Type"?: string;
    /**
     * 模板状态。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 创建来源。
     * @example `OpenAPI`
     */
    "CreateSource"?: string;
    /**
     * 搜索关键词，可以根据模板ID和title搜索。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "Keyword"?: string;
    /**
     * 排序参数，默认根据创建时间倒序。
     * @example `CreationTime:Desc`
     */
    "SortType"?: string;
}
