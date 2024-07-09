export interface CreateRtmpDeviceResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        DeviceName: string;
        StreamName: string;
        IotId: string;
    };
}
