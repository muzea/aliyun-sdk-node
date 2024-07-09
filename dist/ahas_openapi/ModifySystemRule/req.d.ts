export interface ModifySystemRuleRequest {
    /**
     * CPU阈值，取值范围0~1。
     * @example `0.5`
     */
    "Threshold": number;
    /**
     * 系统规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
