export interface DeleteVccGrantRuleRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 授权条目ID
     * @example `grant-rule-jaj34d75h01`
     */
    "GrantRuleId": string;
    /**
     * 网络实例ID
     * @example `vcc-cn-jaj34d75h01`
     */
    "InstanceId"?: string;
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId"?: string;
}
