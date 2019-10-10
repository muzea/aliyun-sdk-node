interface DescribeSnapshotsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "InstanceId": string;
    "SnapshotIds"?: string;
    "BeginTime"?: string;
    "EndTime"?: string;
}
export { DescribeSnapshotsRequest };