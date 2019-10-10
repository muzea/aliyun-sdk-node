interface QueryDevicePropertyDataRequest {
    "RegionId"?: string;
    "StartTime": number;
    "EndTime": number;
    "Asc": number;
    "PageSize": number;
    "IotInstanceId"?: string;
    "Identifier": string;
    "IotId"?: string;
    "ProductKey"?: string;
    "DeviceName"?: string;
}
export { QueryDevicePropertyDataRequest };