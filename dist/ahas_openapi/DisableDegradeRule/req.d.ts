export interface DisableDegradeRuleRequest {
    /**
     * 降级规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
