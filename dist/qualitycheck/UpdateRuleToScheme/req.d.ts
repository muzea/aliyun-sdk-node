export interface UpdateRuleToSchemeRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"schemeId":"10","schemeRules":[{"ruleId":229,"checkType":0}]}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
