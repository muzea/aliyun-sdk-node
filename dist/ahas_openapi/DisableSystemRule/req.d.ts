export interface DisableSystemRuleRequest {
    /**
     * 系统规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
