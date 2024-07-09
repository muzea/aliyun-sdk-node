export interface GetVpdGrantRuleRequest {
    /**
     * 地域ID;必选
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 授权资源实例ID
     * @example `grant-rule-xrgvqazb`
     */
    "GrantRuleId": string;
    /**
     * 灵骏HUB实例Id
     * @example `er-kkopgtne`
     */
    "ErId"?: string;
    /**
     * 授权租户ID
     * @example `1620939556166277`
     */
    "GrantTenantId"?: string;
    /**
     * 授权实例ID
     * @example `vpd-xxxxxxxx`
     */
    "InstanceId"?: string;
}
