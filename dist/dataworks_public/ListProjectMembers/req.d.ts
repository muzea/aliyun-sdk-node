export interface ListProjectMembersRequest {
    /**
     * Dataworks工作空间的ID。
     * @example `27`
     */
    "ProjectId": number;
    /**
     * 分页的页数。默认值为1，最小值为1，最大值为30。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
}
