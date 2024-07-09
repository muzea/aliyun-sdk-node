export interface GetAgentByIdResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        ShowName: string;
        ForeignKey: string;
        ServicerType: number;
        RealName: string;
        CreateUserName: string;
        AgentId: number;
        ForeignNick: string;
    };
}
