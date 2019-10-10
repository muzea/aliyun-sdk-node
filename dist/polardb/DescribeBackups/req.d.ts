interface DescribeBackupsRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "BackupId"?: string;
    "BackupStatus"?: string;
    "BackupMode"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescribeBackupsRequest };