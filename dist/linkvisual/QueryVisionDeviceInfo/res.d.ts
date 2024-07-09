export interface QueryVisionDeviceInfoResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        Description: string;
        DeviceType: number;
        GbDeviceInfo: {
            GbId: string;
            Password: string;
            NickName: string;
            SubProductKey: string;
            DeviceProtocol: number;
            NetProtocol: number;
        };
        RtmpDeviceInfo: {
            StreamStatus: number;
            PushKeyExpireTime: number;
            StreamName: string;
            PushAuthKey: string;
            PullAuthKey: string;
            PullKeyExpireTime: number;
            PushUrlSample: string;
        };
    };
}
