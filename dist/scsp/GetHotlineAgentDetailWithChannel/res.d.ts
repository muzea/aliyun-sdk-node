export interface GetHotlineAgentDetailWithChannelResponse {
    Message: string;
    RequestId: string;
    Data: {
        AgentStatusCode: string;
        Token: string;
        AgentId: number;
        Assigned: boolean;
        RestType: number;
        AgentStatus: number;
        TenantId: number;
        WorkChannel: string;
        ExtAttr: string;
    };
    Success: boolean;
    Code: string;
    HttpStatusCode: number;
}
