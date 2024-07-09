export interface GetMetaCategoryRequest {
    /**
     * 类目树的ID。
     * @example `333`
     */
    "ParentCategoryId"?: number;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
}
