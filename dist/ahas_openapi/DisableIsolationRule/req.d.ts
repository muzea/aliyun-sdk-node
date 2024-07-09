export interface DisableIsolationRuleRequest {
    /**
     * 隔离规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
