export interface ListTenantsRequest {
    /**
     * 分页查询时设置的每页显示的租户数量，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
}
