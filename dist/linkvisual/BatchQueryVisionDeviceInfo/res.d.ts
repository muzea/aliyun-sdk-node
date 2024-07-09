export interface BatchQueryVisionDeviceInfoResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        DeviceInfoList: {
            Description: string;
            DeviceType: number;
            IotId: string;
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
        }[];
    };
}
