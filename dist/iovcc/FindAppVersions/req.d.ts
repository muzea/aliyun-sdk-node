interface FindAppVersionsRequest {
    "RegionId"?: string;
    "PageSize": number;
    "PageIndex": number;
    "Status"?: string;
    "VersionId"?: string;
    "DeviceModelId"?: string;
    "AppId"?: string;
    "Remark"?: string;
    "ProjectId": string;
}
export { FindAppVersionsRequest };