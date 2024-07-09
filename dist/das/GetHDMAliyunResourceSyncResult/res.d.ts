export interface GetHDMAliyunResourceSyncResultResponse {
    Message: string;
    RequestId: string;
    Synchro: string;
    Data: {
        SyncStatus: string;
        ErrorMsg: string;
        SubResults: {
            ResourceSyncSubResult: {
                SyncCount: number;
                ResourceType: string;
                Success: boolean;
                ErrMsg: string;
            }[];
        };
        Results: string;
    };
    Code: string;
    Success: string;
}
