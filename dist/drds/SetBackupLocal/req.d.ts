interface SetBackupLocalRequest {
    "RegionId"?: string;
    "DrdsInstanceId": string;
    "LocalLogRetentionHours"?: string;
    "LocalLogRetentionSpace"?: string;
    "HighSpaceUsageProtection"?: string;
}
export { SetBackupLocalRequest };