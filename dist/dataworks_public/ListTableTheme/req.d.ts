export interface ListTableThemeRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `123`
     */
    "ProjectId"?: number;
    /**
     * 父类ID。
     * @example `121`
     */
    "ParentId"?: number;
    /**
     * 分页的页数。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
}
