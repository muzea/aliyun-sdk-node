export interface UpdateTaskAssignRuleRequest {
    /**
     * 完整JSON字符串信息，具体内容参见下方详细信息。
     * @example `{"callType":"0","agents":[{"agentId":"202526561358712105","agentName":"agent"}],"reviewers":[{"reviewerId":"255746168704895558","reviewerName":"0917质检员"},{"reviewerId":"268370362815185444","reviewerName":"0710质检员"}],"durationMin":1,"durationMax":300,"rules":[{"rid":15659},{"rid":17075}],"skillGroups":[{"skillName":"客服组"}],"enabled":1,"ruleId":37,"updateType":0}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
