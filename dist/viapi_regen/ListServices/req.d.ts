export interface ListServicesRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页数据显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 生产空间ID，用以标识唯一生产空间。
     * @example `63`
     */
    "WorkspaceId": number;
    /**
     * 服务ID，用以标识唯一服务。
     * @example `21`
     */
    "Id"?: number;
    /**
     * 服务名称（支持模糊搜索）。
     * @example `test`
     */
    "Name"?: number;
}
