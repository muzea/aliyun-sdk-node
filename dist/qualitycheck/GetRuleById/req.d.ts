export interface GetRuleByIdRequest {
    /**
     * 规则ID。
     * @example `53`
     */
    "RuleId": number;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
