interface ListAgentStatesRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "SkillGroupId"?: string;
    "AgentIds"?: string;
    "State"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListAgentStatesRequest };