interface FindVersionBlackDevicesRequest {
    "RegionId": string;
    "VersionId": string;
    "VersionType": string;
    "PageIndex": number;
    "PageSize": number;
    "ProjectId": string;
    "DeviceId"?: string;
    "OriginalId"?: string;
}
export { FindVersionBlackDevicesRequest };