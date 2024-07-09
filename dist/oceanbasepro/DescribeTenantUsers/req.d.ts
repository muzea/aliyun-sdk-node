export interface DescribeTenantUsersRequest {
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 模糊查询列表的筛选关键字。
     * @example `pay`
     */
    "SearchKey"?: string;
    /**
     * 分页查询的页码。
     * 起始值：1，默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100，默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据库账号名称。
     * 不能使用某些预留关键字，如 SYS、root 等。
     * @example `pay_test`
     */
    "UserName"?: string;
}
