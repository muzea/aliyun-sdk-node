export interface QueryGbSubDeviceListResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        Total: number;
        GbSubDeviceList: {
            ProductKey: string;
            DeviceName: string;
            DeviceId: string;
            DeviceEnable: number;
            IotId: string;
        }[];
    };
}
