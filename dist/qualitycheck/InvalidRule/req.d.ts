export interface InvalidRuleRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"ruleIds":[3,4]}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
