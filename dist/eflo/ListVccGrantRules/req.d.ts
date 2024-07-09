export interface ListVccGrantRulesRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId"?: string;
    /**
     * 授权租户ID
     * @example `1620939556166277`
     */
    "GrantTenantId"?: string;
    /**
     * 网络实例ID
     * @example `vcc-cn-jaj33d1b804`
     */
    "InstanceId"?: string;
    /**
     * 实例名称
     * @example `vcc-1`
     */
    "InstanceName"?: string;
    /**
     * 授权条目ID
     * @example `grant-rule-jaj33d1b804`
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
     * 每页显示的行数。默认值：20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询，可选值：
     * - **true**  ：开启分页查询
     * - **false** ：不开启分页查询
     * @example `false`
     */
    "EnablePage"?: boolean;
}
