interface ModifyImageShareGroupPermissionRequest {
    "RegionId": string;
    "ImageId": string;
    "SourceRegionId"?: string;
    "OwnerId"?: number;
    "AddGroup.1"?: string;
    "RemoveGroup.1"?: string;
}
export { ModifyImageShareGroupPermissionRequest };