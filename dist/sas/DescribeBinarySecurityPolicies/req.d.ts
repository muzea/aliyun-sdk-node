export interface DescribeBinarySecurityPoliciesRequest {
    /**
     * 访问源的IP地址。
     * @example `59.82.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 策略名称。
     * @example `policy-auto-5patxz`
     */
    "Name"?: string;
    /**
     * 策略状态。取值：
     * - **enabled**：启用。
     * - **disabled**：已禁用。
     * @example `enabled`
     */
    "Status"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: number;
}
