interface ModifyBackupPolicyRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "PreferredBackupTime": string;
    "PreferredBackupPeriod": string;
    "OwnerId"?: number;
    "BackupRetentionPeriod"?: string;
}
export { ModifyBackupPolicyRequest };