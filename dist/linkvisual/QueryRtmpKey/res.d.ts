export interface QueryRtmpKeyResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        PullAuthKey: string;
        PullKeyExpireTime: number;
        PushKeyExpireTime: number;
        StreamName: string;
        PushAuthKey: string;
    };
}
