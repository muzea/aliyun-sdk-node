export interface CreateVccGrantRuleRequest {
    /**
     * 网络实例ID
     * @example `vcc-8rgvqazb`
     */
    "InstanceId": string;
    /**
     * 授权租户ID
     * @example `1620939556166277`
     */
    "GrantTenantId": string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId": string;
}
