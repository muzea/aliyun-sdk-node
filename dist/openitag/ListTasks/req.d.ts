export interface ListTasksRequest {
    /**
     * 租户id，可以通过ListTenantId租户列表查询的API来查询。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     *  页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 单页大小
     * @example `20`
     */
    "PageSize"?: number;
}
