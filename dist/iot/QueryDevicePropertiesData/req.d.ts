interface QueryDevicePropertiesDataRequest {
    "RegionId"?: string;
    "DeviceName": string;
    "StartTime": number;
    "EndTime": number;
    "Asc": number;
    "PageSize": number;
    "Identifier": string[];
    "IotInstanceId"?: string;
    "ProductKey": string;
    "IotId"?: string;
}
export { QueryDevicePropertiesDataRequest };