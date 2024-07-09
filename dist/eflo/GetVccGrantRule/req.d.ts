export interface GetVccGrantRuleRequest {
    /**
     * 地域ID;必选
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 授权资源实例ID
     * @example `grant-rule-jaj34d75h01`
     */
    "GrantRuleId": string;
    /**
     * 灵骏HUB实例ID
     * @example `er-aueyxxsy`
     */
    "ErId"?: string;
    /**
     * 授权租户ID
     * @example `1620939556166277`
     */
    "GrantTenantId"?: string;
    /**
     * 授权实例ID
     * @example `vcc-cn-jaj34d75h01`
     */
    "InstanceId"?: string;
}
