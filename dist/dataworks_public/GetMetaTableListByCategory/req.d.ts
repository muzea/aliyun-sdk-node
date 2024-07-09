export interface GetMetaTableListByCategoryRequest {
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 类目的ID，您可以调用[GetMetaCategory](~~2780099~~)获取类目的ID。类目方便您通过类别有效地组织和管理表，您可以在查找表时，通过类目来过滤目标表。
     * @example `23`
     */
    "CategoryId": number;
}
