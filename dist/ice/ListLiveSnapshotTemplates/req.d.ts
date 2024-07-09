export interface ListLiveSnapshotTemplatesRequest {
    /**
     * 搜索关键词，模板ID/名称，名称支持模糊搜索。
     * - 最大长度为128。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    "SearchKeyWord"?: string;
    /**
     * 指定模板ID查询。
     * - 如果指定SearchKeyWord，该条件不生效。
     * - 数组长度最大为200。
     */
    "TemplateIds"?: string[];
    /**
     * 模板类型，默认是查询全部。
     * @example `custom`
     */
    "Type"?: string;
    /**
     * 页码，[1, n)，默认是1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页宽，[1, 100]，默认是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序，默认按CreateTime排序，默认是desc。
     * @example `desc`
     */
    "SortBy"?: string;
}
