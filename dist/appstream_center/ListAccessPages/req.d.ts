export interface ListAccessPagesRequest {
    /**
     * 访问页面名称。
     * @example `实验室demo访问页`
     */
    "AccessPageName"?: string;
    /**
     * 项目唯一id。
     * @example `p-065zdecaer07h****`
     */
    "ProjectId"?: string;
    /**
     * 访问页面Id。
     * @example `a-062wec3cwmayw****`
     */
    "AccessPageId"?: string;
    /**
     * 页码（首页传1）, 为空就获取所有数据。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页展示数据（默认20条）
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * "ASC"表示升序，"DESC"表示降序。
     * 排序是根据访问页的创建时间。
     * @example `ASC`
     */
    "SortType"?: string;
}
