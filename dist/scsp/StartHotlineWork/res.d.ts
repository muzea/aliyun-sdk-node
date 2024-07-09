export interface StartHotlineWorkResponse {
    Success: boolean;
    Code: string;
    Message: string;
    Data: {
        TenantId: number;
        AgentId: number;
        AccountName: string;
        AgentStatusCode: string;
        AgentStatusDesc: string;
        WorkChannel: string;
        AgentToken: string;
        ExtAttr: string;
    };
    RequestId: string;
}
