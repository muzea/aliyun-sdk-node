export interface CreateTaskAssignRuleRequest {
    /**
     * 完整JSON字符串信息，具体内容参见下方详细信息。
     * @example `{"callType":"0","durationMin":1,"durationMax":300,"agents":[{"agentId":"202526561358712105","agentName":"agent"}],"rules":[{"rid":15659}],"reviewers":[{"reviewerId":"255746168704895558","reviewerName":"0917质检员"},{"reviewerId":"268370362815185444","reviewerName":"0710质检员"}],"skillGroups":[{"skillName":"客服组"}],"priority":5}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
