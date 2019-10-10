interface DescribeRestoreOrderRequest {
    "RegionId"?: string;
    "DrdsInstanceId": string;
    "PreferredBackupTime"?: string;
    "BackupMode"?: string;
    "BackupLevel"?: string;
    "BackupDbNames"?: string;
    "BackupId"?: string;
}
export { DescribeRestoreOrderRequest };