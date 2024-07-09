export interface ListFoldersForParentRequest {
    /**
     * 父资源夹ID。
     * 当该参数置空时，查询的是Root资源夹下的下一级子资源夹。
     * @example `r-b1****`
     */
    "ParentFolderId"?: string;
    /**
     * 查询关键字，例如：资源夹名称。
     * 支持模糊查询。
     * @example `rdFolder`
     */
    "QueryKeyword"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
