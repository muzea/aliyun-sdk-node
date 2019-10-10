interface ExportSnapshotRequest {
    "RegionId": string;
    "SnapshotId": string;
    "OssBucket": string;
    "OwnerId"?: number;
    "RoleName"?: string;
}
export { ExportSnapshotRequest };