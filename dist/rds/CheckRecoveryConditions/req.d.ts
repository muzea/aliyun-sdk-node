interface CheckRecoveryConditionsRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "OwnerId"?: number;
    "BackupId"?: string;
    "BackupFile"?: string;
    "RestoreTime"?: string;
}
export { CheckRecoveryConditionsRequest };