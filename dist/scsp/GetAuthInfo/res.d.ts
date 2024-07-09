export interface GetAuthInfoResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        AppName: string;
        Time: number;
        AppKey: string;
        App: string;
        UserId: string;
        Code: string;
        SessionId: string;
        UserName: string;
        TenantId: string;
    };
}
