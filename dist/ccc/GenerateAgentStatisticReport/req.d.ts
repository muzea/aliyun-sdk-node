interface GenerateAgentStatisticReportRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "StartDate": string;
    "EndDate": string;
    "PageNumber": number;
    "PageSize": number;
    "AgentId"?: string;
}
export { GenerateAgentStatisticReportRequest };