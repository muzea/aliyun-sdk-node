export interface GetOnlineTouchSessionListResponse {
    Success: boolean;
    Code: string;
    Message: string;
    Data: {
        UserForeignId: string;
        SessionId: string;
        TouchId: string;
        ChannelId: string;
        GroupId: string;
        GroupName: string;
        FirstTime: number;
        MessageInfo: {
            MessageId: number;
            SenderId: string;
            SenderName: string;
            SenderType: string;
            Content: string;
            GmtCreated: string;
            Status: string;
        }[];
    }[];
    RequestId: string;
    HttpStatusCode: number;
    PageNo: number;
    TotalResults: number;
    PageSize: number;
}
