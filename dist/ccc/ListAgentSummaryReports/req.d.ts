interface ListAgentSummaryReportsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "StartTime": string;
    "EndTime": string;
    "SkillGroupId"?: string;
    "AgentIds"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListAgentSummaryReportsRequest };