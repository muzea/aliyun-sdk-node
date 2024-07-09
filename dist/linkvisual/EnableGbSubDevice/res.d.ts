export interface EnableGbSubDeviceResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        DeviceName: string;
        ProductKey: string;
    };
}
