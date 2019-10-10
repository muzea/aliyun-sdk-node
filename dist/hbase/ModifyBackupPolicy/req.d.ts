interface ModifyBackupPolicyRequest {
    "RegionId"?: string;
    "PreferredBackupTime": string;
    "PreferredBackupPeriod": string;
    "ClusterId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "ZoneId"?: string;
}
export { ModifyBackupPolicyRequest };