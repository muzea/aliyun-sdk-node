export interface CreateGbDeviceResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        DeviceName: string;
        IotId: string;
    };
}
