interface PutRestorePreCheckRequest {
    "RegionId"?: string;
    "DrdsInstanceId": string;
    "PreferredBackupTime"?: string;
    "BackupMode"?: string;
    "BackupLevel"?: string;
    "BackupDbNames"?: string;
    "BackupId"?: string;
}
export { PutRestorePreCheckRequest };