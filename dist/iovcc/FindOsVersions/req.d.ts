interface FindOsVersionsRequest {
    "RegionId": string;
    "PageIndex": number;
    "PageSize": number;
    "ProjectId": string;
    "VersionId"?: string;
    "DeviceModelId"?: string;
    "SystemVersion"?: string;
    "Status"?: string;
    "IsMilestone"?: string;
    "Remark"?: string;
}
export { FindOsVersionsRequest };