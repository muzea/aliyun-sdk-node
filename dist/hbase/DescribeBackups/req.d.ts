interface DescribeBackupsRequest {
    "RegionId"?: string;
    "ClusterId": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "BackupId"?: number;
    "PageNumber"?: number;
    "PageSize"?: number;
    "StartTime"?: string;
    "EndTime"?: string;
}
export { DescribeBackupsRequest };