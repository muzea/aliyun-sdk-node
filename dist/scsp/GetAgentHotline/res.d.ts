export interface GetAgentHotlineResponse {
    Success: boolean;
    Code: string;
    Message: string;
    Data: {
        TenantId: number;
        AgentId: number;
        AccountName: string;
        DisplayName: string;
        GroupList: {
            SkillGroupId: number;
            Name: string;
            DisplayName: string;
        }[];
        DepartmentId: string;
        AgentPhone: string;
        SkillGroups: string;
        ExtAttr: string;
    };
    RequestId: string;
}
