interface DescribeAutoSnapshotTasksRequest {
    "RegionId": string;
    "FileSystemType": string;
    "FileSystemIds"?: string;
    "AutoSnapshotPolicyIds"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescribeAutoSnapshotTasksRequest };