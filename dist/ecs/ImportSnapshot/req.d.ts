interface ImportSnapshotRequest {
    "RegionId": string;
    "SnapshotName": string;
    "OssBucket": string;
    "OssObject": string;
    "OwnerId"?: number;
    "RoleName"?: string;
}
export { ImportSnapshotRequest };