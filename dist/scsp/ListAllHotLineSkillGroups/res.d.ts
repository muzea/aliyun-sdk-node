export interface ListAllHotLineSkillGroupsResponse {
    RequestId: string;
    Message: string;
    Code: string;
    Success: boolean;
    Data: {
        DepGroup: {
            DepGroupName: string;
            DepGroupId: number;
        };
        SkillGroupAgents: {
            SkillGroup: {
                DisplayName: string;
                SkillGroupId: number;
            };
            Agents: {
                AccountName: string;
                DisplayName: string;
                AgentId: number;
                Status: number;
                Acid: string;
                JobId: string;
                ConnId: string;
                CustomerPhone: string;
            }[];
        }[];
    }[];
}
