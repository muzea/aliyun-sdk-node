export interface CreateGbDeviceRequest {
    "Description"?: string;
    "ProductKey": string;
    "DeviceName"?: string;
    "GbId": string;
    "Password": string;
    "IotInstanceId": string;
    "DeviceType"?: number;
    "SubProductKey"?: string;
    "MediaNetProtocol"?: string;
}
