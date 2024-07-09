export interface GetQualityCheckSchemeRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"schemeId":"187","ruleRequireInfos":["BusinessNameInfo","RuleCategory"]}`
     */
    "jsonStr"?: string;
    /**
     * baseMeAgentId
     */
    "BaseMeAgentId"?: number;
}
