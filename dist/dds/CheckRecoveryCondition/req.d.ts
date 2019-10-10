interface CheckRecoveryConditionRequest {
    "RegionId"?: string;
    "SourceDBInstance": string;
    "OwnerId"?: number;
    "DatabaseNames"?: string;
    "RestoreTime"?: string;
    "BackupId"?: string;
}
export { CheckRecoveryConditionRequest };