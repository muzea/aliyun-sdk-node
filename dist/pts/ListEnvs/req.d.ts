export interface ListEnvsRequest {
    /**
     * 请求第N页的环境信息。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 当前页的请求环境数，即一页所包含的环境数量。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 需查询的环境ID（为精确查询）。
     * @example `10YPA8H`
     */
    "EnvId"?: string;
    /**
     * 需查询的环境名称关键字（模糊查询）。
     * @example `test-create`
     */
    "EnvName"?: string;
}
