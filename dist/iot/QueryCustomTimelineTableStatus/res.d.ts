export interface QueryCustomTimelineTableStatusResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        ResultJson: string;
        PageNum: number;
        PageSize: number;
        Count: number;
        HasNext: boolean;
    };
}
