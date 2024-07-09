export interface ListDepartmentsRequest {
    /**
     * 部门名称
     * @example `部门名称`
     */
    "Name"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 用户 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "UserId"?: string;
}
