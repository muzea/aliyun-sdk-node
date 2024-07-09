export interface ListVpdGrantRulesRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB实例ID
     * @example `er-kkopgtne`
     */
    "ErId"?: string;
    /**
     * 授权租户ID
     * @example `1620939556166279`
     */
    "GrantTenantId"?: string;
    /**
     * 要查询的网络实例的ID
     * @example `vpd-8rgvqazb`
     */
    "InstanceId"?: string;
    /**
     * 实例名称
     * @example `vpd-1`
     */
    "InstanceName"?: string;
    /**
     * 授权条目ID
     * @example `grant-rule-8rgvqazb`
     */
    "GrantRuleId"?: string;
    /**
     * 下拉框使用
     * @example `true`
     */
    "ForSelect"?: boolean;
    /**
     * 资源组实例ID
     */
    "ResourceGroupId"?: string;
    /**
     * 当前页码。起始值：1默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询
     * @example `false`
     */
    "EnablePage"?: boolean;
}
