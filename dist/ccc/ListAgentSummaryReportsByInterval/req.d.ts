interface ListAgentSummaryReportsByIntervalRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "StartTime": string;
    "EndTime": string;
    "SkillGroupId"?: string;
    "AgentIds"?: string;
    "Interval"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListAgentSummaryReportsByIntervalRequest };