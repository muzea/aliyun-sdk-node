export interface ListPolicyRequest {
    /**
     * 策略名称。
     * @example `test**`
     */
    "Name"?: string;
    /**
     * 策略类型。取值：
     * - **l3**：表示IP防护策略
     * - **l4**：表示端口防护策略
     * @example `l3`
     */
    "Type"?: string;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询时每页的行数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
