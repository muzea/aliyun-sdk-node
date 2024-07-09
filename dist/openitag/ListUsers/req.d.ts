export interface ListUsersRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 标注成员列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 分页查询时设置的每页显示的标注成员数量，默认为20。
     * @example `20`
     */
    "PageNumber"?: number;
}
