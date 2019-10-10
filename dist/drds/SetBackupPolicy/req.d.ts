interface SetBackupPolicyRequest {
    "RegionId"?: string;
    "DrdsInstanceId": string;
    "PreferredBackupPeriod"?: string;
    "PreferredBackupStartTime"?: string;
    "PreferredBackupEndTime"?: string;
    "BackupMode"?: string;
    "BackupLevel"?: string;
    "BackupDbNames"?: string;
    "BackupLog"?: string;
    "DataBackupRetentionPeriod"?: string;
    "LogBackupRetentionPeriod"?: string;
}
export { SetBackupPolicyRequest };