export interface ListUsersRequest {
    /**
     * 部门 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "DepartmentId"?: string;
    /**
     * 分页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 搜索指定用户名
     * @example `tom`
     */
    "Username"?: string;
}
