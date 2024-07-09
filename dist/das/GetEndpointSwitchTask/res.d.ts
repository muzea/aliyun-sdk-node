export interface GetEndpointSwitchTaskResponse {
    Message: string;
    RequestId: string;
    Synchro: string;
    Data: {
        Status: string;
        Uuid: string;
        OriUuid: string;
        AccountId: string;
        ErrMsg: string;
        TaskId: string;
        DbLinkId: number;
    };
    Code: string;
    Success: string;
}
