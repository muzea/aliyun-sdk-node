interface DescribeSnapshotMonitorDataRequest {
    "RegionId": string;
    "StartTime": string;
    "EndTime": string;
    "SourceRegionId"?: string;
    "OwnerId"?: number;
    "Period"?: number;
}
export { DescribeSnapshotMonitorDataRequest };