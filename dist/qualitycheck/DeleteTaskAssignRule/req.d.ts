export interface DeleteTaskAssignRuleRequest {
    /**
     * 完整JSON字符串信息，具体内容参见下方详细信息。
     * @example `{"ruleId": 24}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
