export interface ListProjectsRequest {
    /**
     * 每页展示数据条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码（首页传1）。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 项目ID。
     * @example `p-065z4tu9ak07h****`
     */
    "ProjectId"?: string;
    /**
     * 项目名称。
     * @example `notepad++***`
     */
    "ProjectName"?: string;
    /**
     * 排序类型。
     * @example `ASC`
     */
    "SortType"?: string;
    /**
     * 项目状态列表。
     */
    "StateList"?: number[];
}
