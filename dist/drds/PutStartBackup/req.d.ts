interface PutStartBackupRequest {
    "RegionId"?: string;
    "DrdsInstanceId": string;
    "BackupMode"?: string;
    "BackupLevel"?: string;
    "BackupDbNames"?: string;
}
export { PutStartBackupRequest };